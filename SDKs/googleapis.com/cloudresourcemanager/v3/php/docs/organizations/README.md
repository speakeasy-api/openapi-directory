# organizations

### Available Operations

* [cloudresourcemanagerOrganizationsSearch](#cloudresourcemanagerorganizationssearch) - Searches organization resources that are visible to the user and satisfy the specified filter. This method returns organizations in an unspecified order. New organizations do not necessarily appear at the end of the results, and may take a small amount of time to appear. Search will only return organizations on which the user has the permission `resourcemanager.organizations.get`

## cloudresourcemanagerOrganizationsSearch

Searches organization resources that are visible to the user and satisfy the specified filter. This method returns organizations in an unspecified order. New organizations do not necessarily appear at the end of the results, and may take a small amount of time to appear. Search will only return organizations on which the user has the permission `resourcemanager.organizations.get`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerOrganizationsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerOrganizationsSearchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerOrganizationsSearchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerOrganizationsSearchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerOrganizationsSearchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'culpa';
    $request->fields = 'doloribus';
    $request->key = 'sapiente';
    $request->oauthToken = 'architecto';
    $request->pageSize = 652790;
    $request->pageToken = 'dolorem';
    $request->prettyPrint = false;
    $request->query = 'culpa';
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new CloudresourcemanagerOrganizationsSearchSecurity();
    $requestSecurity->option1 = new CloudresourcemanagerOrganizationsSearchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->cloudresourcemanagerOrganizationsSearch($request, $requestSecurity);

    if ($response->searchOrganizationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
