# catalog

### Available Operations

* [datacatalogCatalogSearch](#datacatalogcatalogsearch) - Searches Data Catalog for multiple resources like entries, tags that match a query. This is a custom method (https://cloud.google.com/apis/design/custom_methods) and does not return the complete resource, only the resource identifier and high level fields. Clients can subsequently call `Get` methods. Note that Data Catalog search queries do not guarantee full recall. Query results that match your query may not be returned, even in subsequent result pages. Also note that results returned (and not returned) can vary across repeated search queries. See [Data Catalog Search Syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference) for more information.

## datacatalogCatalogSearch

Searches Data Catalog for multiple resources like entries, tags that match a query. This is a custom method (https://cloud.google.com/apis/design/custom_methods) and does not return the complete resource, only the resource identifier and high level fields. Clients can subsequently call `Get` methods. Note that Data Catalog search queries do not guarantee full recall. Query results that match your query may not be returned, even in subsequent result pages. Also note that results returned (and not returned) can vary across repeated search queries. See [Data Catalog Search Syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference) for more information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogCatalogSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1SearchCatalogRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogCatalogSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogCatalogSearchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDatacatalogV1beta1SearchCatalogRequest = new GoogleCloudDatacatalogV1beta1SearchCatalogRequest();
    $request->googleCloudDatacatalogV1beta1SearchCatalogRequest->orderBy = 'quis';
    $request->googleCloudDatacatalogV1beta1SearchCatalogRequest->pageSize = 87129;
    $request->googleCloudDatacatalogV1beta1SearchCatalogRequest->pageToken = 'deserunt';
    $request->googleCloudDatacatalogV1beta1SearchCatalogRequest->query = 'perferendis';
    $request->googleCloudDatacatalogV1beta1SearchCatalogRequest->scope = new GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope();
    $request->googleCloudDatacatalogV1beta1SearchCatalogRequest->scope->includeGcpPublicDatasets = false;
    $request->googleCloudDatacatalogV1beta1SearchCatalogRequest->scope->includeOrgIds = [
        'repellendus',
        'sapiente',
    ];
    $request->googleCloudDatacatalogV1beta1SearchCatalogRequest->scope->includeProjectIds = [
        'odit',
        'at',
        'at',
        'maiores',
    ];
    $request->googleCloudDatacatalogV1beta1SearchCatalogRequest->scope->restrictedLocations = [
        'quod',
        'quod',
    ];
    $request->accessToken = 'esse';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'porro';
    $request->fields = 'dolorum';
    $request->key = 'dicta';
    $request->oauthToken = 'nam';
    $request->prettyPrint = false;
    $request->quotaUser = 'officia';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'fugit';

    $requestSecurity = new DatacatalogCatalogSearchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalog->datacatalogCatalogSearch($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1beta1SearchCatalogResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
