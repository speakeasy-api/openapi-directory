# applications

### Available Operations

* [datatransferApplicationsGet](#datatransferapplicationsget) - Retrieves information about an application for the given application ID.
* [datatransferApplicationsList](#datatransferapplicationslist) - Lists the applications available for data transfer for a customer.

## datatransferApplicationsGet

Retrieves information about an application for the given application ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatatransferApplicationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatatransferApplicationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatatransferApplicationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatatransferApplicationsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatatransferApplicationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::JSON;
    $request->applicationId = 'debitis';
    $request->callback = 'ipsa';
    $request->fields = 'delectus';
    $request->key = 'tempora';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'placeat';

    $requestSecurity = new DatatransferApplicationsGetSecurity();
    $requestSecurity->option1 = new DatatransferApplicationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->applications->datatransferApplicationsGet($request, $requestSecurity);

    if ($response->application !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datatransferApplicationsList

Lists the applications available for data transfer for a customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatatransferApplicationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatatransferApplicationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatatransferApplicationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatatransferApplicationsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatatransferApplicationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->customerId = 'recusandae';
    $request->fields = 'temporibus';
    $request->key = 'ab';
    $request->maxResults = 337396;
    $request->oauthToken = 'veritatis';
    $request->pageToken = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'repellendus';

    $requestSecurity = new DatatransferApplicationsListSecurity();
    $requestSecurity->option1 = new DatatransferApplicationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->applications->datatransferApplicationsList($request, $requestSecurity);

    if ($response->applicationsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
