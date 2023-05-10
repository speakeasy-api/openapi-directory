# domain

### Available Operations

* [domainsrdapDomainGet](#domainsrdapdomainget) - Look up RDAP information for a domain by name.

## domainsrdapDomainGet

Look up RDAP information for a domain by name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DomainsrdapDomainGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsrdapDomainGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->domainName = 'recusandae';
    $request->fields = 'temporibus';
    $request->key = 'ab';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'perferendis';

    $response = $sdk->domain->domainsrdapDomainGet($request);

    if ($response->httpBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
