# library

### Available Operations

* [getLibrary](#getlibrary) - Retrieve the entire library

## getLibrary

Will return the entire library for the authenticated user. If size of the library exceeds server preferences (normally 500) or the value of the optional limit parameter, the result will be paginated. Paginated responses return a Link header, indicating the next URI to fetch. The resulting header value will look something like:

<https://products.izettle.com/organizations/self/library?limit=X&offset=Y>; rel="next"

where limit is number of items in response, and offset is the current position in pagination. The rel-part in the header is the links relation to the data previously recieved. The idea is that as long as this header is present there are still items remaining to be fetched. When either the header is not present or it's value doesn't contain any "next" value, all items have been sent to the client.

Note: The client should NOT try to extract query parameters from the URI, but rather use it as-is for the next request. Also, clients should be perpared that one Link header might contain multiple other IRIs that are not "next" (there will never be more than one "next" though). See more at:

    IETF: https://tools.ietf.org/html/rfc5988
    GitHub: https://developer.github.com/guides/traversing-with-pagination/

If eventLogUuid is provided, the response will only include events affecting the library since that event. Such responses are normally quite small and would be a preferred method for most fat clients after retrieving the initial full library.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLibraryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLibrarySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLibraryRequest();
    $request->all = false;
    $request->eventLogUuid = '22e9817e-e17c-4be6-9e6b-7b95bc0ab3c2';
    $request->limit = 9766;
    $request->offset = 'minus';
    $request->organizationUuid = '4f3789fd-871f-499d-92ef-d121aa6f1e67';

    $requestSecurity = new GetLibrarySecurity();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->library->getLibrary($request, $requestSecurity);

    if ($response->libraryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
