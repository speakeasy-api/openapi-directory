# projects

### Available Operations

* [bigqueryProjectsGetServiceAccount](#bigqueryprojectsgetserviceaccount) - Returns the email address of the service account for your project used for interactions with Google Cloud KMS.
* [bigqueryProjectsList](#bigqueryprojectslist) - Lists all projects to which you have been granted any project role.

## bigqueryProjectsGetServiceAccount

Returns the email address of the service account for your project used for interactions with Google Cloud KMS.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryProjectsGetServiceAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryProjectsGetServiceAccountSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryProjectsGetServiceAccountSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryProjectsGetServiceAccountSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryProjectsGetServiceAccountSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryProjectsGetServiceAccountRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'quaerat';
    $request->key = 'tempora';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->projectId = 'quod';
    $request->quotaUser = 'officiis';
    $request->userIp = 'qui';

    $requestSecurity = new BigqueryProjectsGetServiceAccountSecurity();
    $requestSecurity->option1 = new BigqueryProjectsGetServiceAccountSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigqueryProjectsGetServiceAccount($request, $requestSecurity);

    if ($response->getServiceAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bigqueryProjectsList

Lists all projects to which you have been granted any project role.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryProjectsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryProjectsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryProjectsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryProjectsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryProjectsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryProjectsListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'dolorum';
    $request->key = 'a';
    $request->maxResults = 456130;
    $request->oauthToken = 'harum';
    $request->pageToken = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->userIp = 'quisquam';

    $requestSecurity = new BigqueryProjectsListSecurity();
    $requestSecurity->option1 = new BigqueryProjectsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->bigqueryProjectsList($request, $requestSecurity);

    if ($response->projectList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
