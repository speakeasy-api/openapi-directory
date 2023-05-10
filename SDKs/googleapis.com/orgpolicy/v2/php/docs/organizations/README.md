# organizations

### Available Operations

* [orgpolicyOrganizationsCustomConstraintsCreate](#orgpolicyorganizationscustomconstraintscreate) - Creates a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the organization does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the constraint already exists on the given organization.
* [orgpolicyOrganizationsCustomConstraintsList](#orgpolicyorganizationscustomconstraintslist) - Retrieves all of the custom constraints that exist on a particular organization resource.

## orgpolicyOrganizationsCustomConstraintsCreate

Creates a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the organization does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the constraint already exists on the given organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgpolicyOrganizationsCustomConstraintsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudOrgpolicyV2CustomConstraintInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OrgpolicyOrganizationsCustomConstraintsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgpolicyOrganizationsCustomConstraintsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudOrgpolicyV2CustomConstraintInput = new GoogleCloudOrgpolicyV2CustomConstraintInput();
    $request->googleCloudOrgpolicyV2CustomConstraintInput->actionType = GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum::ACTION_TYPE_UNSPECIFIED;
    $request->googleCloudOrgpolicyV2CustomConstraintInput->condition = 'quis';
    $request->googleCloudOrgpolicyV2CustomConstraintInput->description = 'veritatis';
    $request->googleCloudOrgpolicyV2CustomConstraintInput->displayName = 'deserunt';
    $request->googleCloudOrgpolicyV2CustomConstraintInput->methodTypes = [
        GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum::CREATE,
    ];
    $request->googleCloudOrgpolicyV2CustomConstraintInput->name = 'Timmy Satterfield';
    $request->googleCloudOrgpolicyV2CustomConstraintInput->resourceTypes = [
        'maiores',
        'molestiae',
        'quod',
        'quod',
    ];
    $request->accessToken = 'esse';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'porro';
    $request->fields = 'dolorum';
    $request->key = 'dicta';
    $request->oauthToken = 'nam';
    $request->parent = 'officia';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new OrgpolicyOrganizationsCustomConstraintsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->orgpolicyOrganizationsCustomConstraintsCreate($request, $requestSecurity);

    if ($response->googleCloudOrgpolicyV2CustomConstraint !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orgpolicyOrganizationsCustomConstraintsList

Retrieves all of the custom constraints that exist on a particular organization resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrgpolicyOrganizationsCustomConstraintsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OrgpolicyOrganizationsCustomConstraintsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgpolicyOrganizationsCustomConstraintsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'optio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'beatae';
    $request->fields = 'commodi';
    $request->key = 'molestiae';
    $request->oauthToken = 'modi';
    $request->pageSize = 186332;
    $request->pageToken = 'impedit';
    $request->parent = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new OrgpolicyOrganizationsCustomConstraintsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->orgpolicyOrganizationsCustomConstraintsList($request, $requestSecurity);

    if ($response->googleCloudOrgpolicyV2ListCustomConstraintsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
