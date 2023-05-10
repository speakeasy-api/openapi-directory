# enterprises

### Available Operations

* [androidmanagementEnterprisesCreate](#androidmanagemententerprisescreate) - Creates an enterprise. This is the last step in the enterprise signup flow. See also: SigninDetail
* [androidmanagementEnterprisesDevicesIssueCommand](#androidmanagemententerprisesdevicesissuecommand) - Issues a command to a device. The Operation resource returned contains a Command in its metadata field. Use the get operation method to get the status of the command.
* [androidmanagementEnterprisesDevicesList](#androidmanagemententerprisesdeviceslist) - Lists devices for a given enterprise. Deleted devices are not returned in the response.
* [androidmanagementEnterprisesDevicesOperationsCancel](#androidmanagemententerprisesdevicesoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* [androidmanagementEnterprisesEnrollmentTokensCreate](#androidmanagemententerprisesenrollmenttokenscreate) - Creates an enrollment token for a given enterprise. It's up to the caller's responsibility to manage the lifecycle of newly created tokens and deleting them when they're not intended to be used anymore. Once an enrollment token has been created, it's not possible to retrieve the token's content anymore using AM API. It is recommended for EMMs to securely store the token if it's intended to be reused.
* [androidmanagementEnterprisesEnrollmentTokensList](#androidmanagemententerprisesenrollmenttokenslist) - Lists active, unexpired enrollment tokens for a given enterprise. The list items contain only a partial view of EnrollmentToken: all the fields but name and expiration_timestamp are empty. This method is meant to help manage active enrollment tokens lifecycle. For security reasons, it's recommended to delete active enrollment tokens as soon as they're not intended to be used anymore.
* [androidmanagementEnterprisesList](#androidmanagemententerpriseslist) - Lists EMM-managed enterprises. Only BASIC fields are returned.
* [androidmanagementEnterprisesPoliciesList](#androidmanagemententerprisespolicieslist) - Lists policies for a given enterprise.
* [androidmanagementEnterprisesWebAppsCreate](#androidmanagemententerpriseswebappscreate) - Creates a web app.
* [androidmanagementEnterprisesWebAppsDelete](#androidmanagemententerpriseswebappsdelete) - Deletes a web app.
* [androidmanagementEnterprisesWebAppsGet](#androidmanagemententerpriseswebappsget) - Gets a web app.
* [androidmanagementEnterprisesWebAppsList](#androidmanagemententerpriseswebappslist) - Lists web apps for a given enterprise.
* [androidmanagementEnterprisesWebAppsPatch](#androidmanagemententerpriseswebappspatch) - Updates a web app.
* [androidmanagementEnterprisesWebTokensCreate](#androidmanagemententerpriseswebtokenscreate) - Creates a web token to access an embeddable managed Google Play web UI for a given enterprise.

## androidmanagementEnterprisesCreate

Creates an enterprise. This is the last step in the enterprise signup flow. See also: SigninDetail

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Enterprise;
use \OpenAPI\OpenAPI\Models\Shared\ContactInfo;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseEnabledNotificationTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExternalData;
use \OpenAPI\OpenAPI\Models\Shared\SigninDetail;
use \OpenAPI\OpenAPI\Models\Shared\SigninDetailAllowPersonalUsageEnum;
use \OpenAPI\OpenAPI\Models\Shared\TermsAndConditions;
use \OpenAPI\OpenAPI\Models\Shared\UserFacingMessage;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidmanagementEnterprisesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->enterprise = new Enterprise();
    $request->enterprise->appAutoApprovalEnabled = false;
    $request->enterprise->contactInfo = new ContactInfo();
    $request->enterprise->contactInfo->contactEmail = 'quo';
    $request->enterprise->contactInfo->dataProtectionOfficerEmail = 'odit';
    $request->enterprise->contactInfo->dataProtectionOfficerName = 'at';
    $request->enterprise->contactInfo->dataProtectionOfficerPhone = 'at';
    $request->enterprise->contactInfo->euRepresentativeEmail = 'maiores';
    $request->enterprise->contactInfo->euRepresentativeName = 'molestiae';
    $request->enterprise->contactInfo->euRepresentativePhone = 'quod';
    $request->enterprise->enabledNotificationTypes = [
        EnterpriseEnabledNotificationTypesEnum::COMPLIANCE_REPORT,
        EnterpriseEnabledNotificationTypesEnum::STATUS_REPORT,
        EnterpriseEnabledNotificationTypesEnum::COMMAND,
        EnterpriseEnabledNotificationTypesEnum::COMMAND,
    ];
    $request->enterprise->enterpriseDisplayName = 'dicta';
    $request->enterprise->logo = new ExternalData();
    $request->enterprise->logo->sha256Hash = 'nam';
    $request->enterprise->logo->url = 'officia';
    $request->enterprise->name = 'Wayne Lind';
    $request->enterprise->primaryColor = 521848;
    $request->enterprise->pubsubTopic = 'beatae';
    $request->enterprise->signinDetails = [
        new SigninDetail(),
        new SigninDetail(),
    ];
    $request->enterprise->termsAndConditions = [
        new TermsAndConditions(),
        new TermsAndConditions(),
    ];
    $request->accessToken = 'modi';
    $request->agreementAccepted = false;
    $request->alt = AltEnum::JSON;
    $request->callback = 'impedit';
    $request->enterpriseToken = 'cum';
    $request->fields = 'esse';
    $request->key = 'ipsum';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->projectId = 'aspernatur';
    $request->quotaUser = 'perferendis';
    $request->signupUrlName = 'ad';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'sed';

    $requestSecurity = new AndroidmanagementEnterprisesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->androidmanagementEnterprisesCreate($request, $requestSecurity);

    if ($response->enterprise !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidmanagementEnterprisesDevicesIssueCommand

Issues a command to a device. The Operation resource returned contains a Command in its metadata field. Use the get operation method to get the status of the command.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesIssueCommandRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Command;
use \OpenAPI\OpenAPI\Models\Shared\ClearAppsDataParams;
use \OpenAPI\OpenAPI\Models\Shared\ClearAppsDataStatus;
use \OpenAPI\OpenAPI\Models\Shared\PerAppResult;
use \OpenAPI\OpenAPI\Models\Shared\PerAppResultClearingResultEnum;
use \OpenAPI\OpenAPI\Models\Shared\CommandErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CommandResetPasswordFlagsEnum;
use \OpenAPI\OpenAPI\Models\Shared\CommandTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesIssueCommandSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidmanagementEnterprisesDevicesIssueCommandRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->command = new Command();
    $request->command->clearAppsDataParams = new ClearAppsDataParams();
    $request->command->clearAppsDataParams->packageNames = [
        'natus',
    ];
    $request->command->clearAppsDataStatus = new ClearAppsDataStatus();
    $request->command->clearAppsDataStatus->results = [
        'hic' => new PerAppResult(),
        'saepe' => new PerAppResult(),
    ];
    $request->command->createTime = 'fuga';
    $request->command->duration = 'in';
    $request->command->errorCode = CommandErrorCodeEnum::API_LEVEL;
    $request->command->newPassword = 'iste';
    $request->command->resetPasswordFlags = [
        CommandResetPasswordFlagsEnum::LOCK_NOW,
        CommandResetPasswordFlagsEnum::DO_NOT_ASK_CREDENTIALS_ON_BOOT,
    ];
    $request->command->type = CommandTypeEnum::COMMAND_TYPE_UNSPECIFIED;
    $request->command->userName = 'Andy_Wisozk67';
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corporis';
    $request->fields = 'explicabo';
    $request->key = 'nobis';
    $request->name = 'Guadalupe Hickle';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'doloribus';

    $requestSecurity = new AndroidmanagementEnterprisesDevicesIssueCommandSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->androidmanagementEnterprisesDevicesIssueCommand($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidmanagementEnterprisesDevicesList

Lists devices for a given enterprise. Deleted devices are not returned in the response.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidmanagementEnterprisesDevicesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorem';
    $request->fields = 'culpa';
    $request->key = 'consequuntur';
    $request->oauthToken = 'repellat';
    $request->pageSize = 653108;
    $request->pageToken = 'occaecati';
    $request->parent = 'numquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new AndroidmanagementEnterprisesDevicesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->androidmanagementEnterprisesDevicesList($request, $requestSecurity);

    if ($response->listDevicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidmanagementEnterprisesDevicesOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidmanagementEnterprisesDevicesOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'error';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'vitae';
    $request->key = 'laborum';
    $request->name = 'Bill Conn';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'possimus';

    $requestSecurity = new AndroidmanagementEnterprisesDevicesOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->androidmanagementEnterprisesDevicesOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidmanagementEnterprisesEnrollmentTokensCreate

Creates an enrollment token for a given enterprise. It's up to the caller's responsibility to manage the lifecycle of newly created tokens and deleting them when they're not intended to be used anymore. Once an enrollment token has been created, it's not possible to retrieve the token's content anymore using AM API. It is recommended for EMMs to securely store the token if it's intended to be reused.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesEnrollmentTokensCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnrollmentToken;
use \OpenAPI\OpenAPI\Models\Shared\EnrollmentTokenAllowPersonalUsageEnum;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesEnrollmentTokensCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidmanagementEnterprisesEnrollmentTokensCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->enrollmentToken = new EnrollmentToken();
    $request->enrollmentToken->additionalData = 'quasi';
    $request->enrollmentToken->allowPersonalUsage = EnrollmentTokenAllowPersonalUsageEnum::PERSONAL_USAGE_ALLOWED;
    $request->enrollmentToken->duration = 'temporibus';
    $request->enrollmentToken->expirationTimestamp = 'laborum';
    $request->enrollmentToken->name = 'Johanna Wolf';
    $request->enrollmentToken->oneTimeOnly = false;
    $request->enrollmentToken->policyName = 'praesentium';
    $request->enrollmentToken->qrCode = 'voluptatibus';
    $request->enrollmentToken->user = new User();
    $request->enrollmentToken->user->accountIdentifier = 'ipsa';
    $request->enrollmentToken->value = 'omnis';
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perferendis';
    $request->fields = 'doloremque';
    $request->key = 'reprehenderit';
    $request->oauthToken = 'ut';
    $request->parent = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'dolore';

    $requestSecurity = new AndroidmanagementEnterprisesEnrollmentTokensCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->androidmanagementEnterprisesEnrollmentTokensCreate($request, $requestSecurity);

    if ($response->enrollmentToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidmanagementEnterprisesEnrollmentTokensList

Lists active, unexpired enrollment tokens for a given enterprise. The list items contain only a partial view of EnrollmentToken: all the fields but name and expiration_timestamp are empty. This method is meant to help manage active enrollment tokens lifecycle. For security reasons, it's recommended to delete active enrollment tokens as soon as they're not intended to be used anymore.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesEnrollmentTokensListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesEnrollmentTokensListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidmanagementEnterprisesEnrollmentTokensListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'enim';
    $request->fields = 'accusamus';
    $request->key = 'commodi';
    $request->oauthToken = 'repudiandae';
    $request->pageSize = 64147;
    $request->pageToken = 'ipsum';
    $request->parent = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestias';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new AndroidmanagementEnterprisesEnrollmentTokensListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->androidmanagementEnterprisesEnrollmentTokensList($request, $requestSecurity);

    if ($response->listEnrollmentTokensResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidmanagementEnterprisesList

Lists EMM-managed enterprises. Only BASIC fields are returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidmanagementEnterprisesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptates';
    $request->fields = 'quasi';
    $request->key = 'repudiandae';
    $request->oauthToken = 'sint';
    $request->pageSize = 83112;
    $request->pageToken = 'itaque';
    $request->prettyPrint = false;
    $request->projectId = 'incidunt';
    $request->quotaUser = 'enim';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'est';
    $request->view = AndroidmanagementEnterprisesListViewEnum::BASIC;

    $requestSecurity = new AndroidmanagementEnterprisesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->androidmanagementEnterprisesList($request, $requestSecurity);

    if ($response->listEnterprisesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidmanagementEnterprisesPoliciesList

Lists policies for a given enterprise.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesPoliciesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesPoliciesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidmanagementEnterprisesPoliciesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'labore';
    $request->key = 'modi';
    $request->oauthToken = 'qui';
    $request->pageSize = 397821;
    $request->pageToken = 'cupiditate';
    $request->parent = 'quos';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'assumenda';

    $requestSecurity = new AndroidmanagementEnterprisesPoliciesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->androidmanagementEnterprisesPoliciesList($request, $requestSecurity);

    if ($response->listPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidmanagementEnterprisesWebAppsCreate

Creates a web app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WebApp;
use \OpenAPI\OpenAPI\Models\Shared\WebAppDisplayModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\WebAppIcon;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidmanagementEnterprisesWebAppsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->webApp = new WebApp();
    $request->webApp->displayMode = WebAppDisplayModeEnum::DISPLAY_MODE_UNSPECIFIED;
    $request->webApp->icons = [
        new WebAppIcon(),
    ];
    $request->webApp->name = 'Marshall Glover';
    $request->webApp->startUrl = 'labore';
    $request->webApp->title = 'Dr.';
    $request->webApp->versionCode = 'eum';
    $request->accessToken = 'non';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'aliquid';
    $request->key = 'provident';
    $request->oauthToken = 'necessitatibus';
    $request->parent = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'officia';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new AndroidmanagementEnterprisesWebAppsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->androidmanagementEnterprisesWebAppsCreate($request, $requestSecurity);

    if ($response->webApp !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidmanagementEnterprisesWebAppsDelete

Deletes a web app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidmanagementEnterprisesWebAppsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'in';
    $request->fields = 'illum';
    $request->key = 'maiores';
    $request->name = 'Keith Gulgowski';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'accusamus';
    $request->wipeDataFlags = [
        AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnum::PRESERVE_RESET_PROTECTION_DATA,
    ];
    $request->wipeReasonMessage = 'enim';

    $requestSecurity = new AndroidmanagementEnterprisesWebAppsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->androidmanagementEnterprisesWebAppsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidmanagementEnterprisesWebAppsGet

Gets a web app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidmanagementEnterprisesWebAppsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'provident';
    $request->fields = 'nam';
    $request->filter = 'id';
    $request->key = 'blanditiis';
    $request->name = 'Timmy Feeney';
    $request->oauthToken = 'vel';
    $request->pageSize = 618809;
    $request->pageToken = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new AndroidmanagementEnterprisesWebAppsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->androidmanagementEnterprisesWebAppsGet($request, $requestSecurity);

    if ($response->webApp !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidmanagementEnterprisesWebAppsList

Lists web apps for a given enterprise.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidmanagementEnterprisesWebAppsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'labore';
    $request->fields = 'labore';
    $request->key = 'suscipit';
    $request->oauthToken = 'natus';
    $request->pageSize = 749170;
    $request->pageToken = 'eum';
    $request->parent = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'magnam';

    $requestSecurity = new AndroidmanagementEnterprisesWebAppsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->androidmanagementEnterprisesWebAppsList($request, $requestSecurity);

    if ($response->listWebAppsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidmanagementEnterprisesWebAppsPatch

Updates a web app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WebApp;
use \OpenAPI\OpenAPI\Models\Shared\WebAppDisplayModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\WebAppIcon;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidmanagementEnterprisesWebAppsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->webApp = new WebApp();
    $request->webApp->displayMode = WebAppDisplayModeEnum::STANDALONE;
    $request->webApp->icons = [
        new WebAppIcon(),
        new WebAppIcon(),
    ];
    $request->webApp->name = 'Miss Julian Marvin';
    $request->webApp->startUrl = 'mollitia';
    $request->webApp->title = 'Mrs.';
    $request->webApp->versionCode = 'eum';
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odit';
    $request->fields = 'nemo';
    $request->key = 'quasi';
    $request->name = 'Melba Toy';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'facilis';
    $request->updateMask = 'in';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new AndroidmanagementEnterprisesWebAppsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->androidmanagementEnterprisesWebAppsPatch($request, $requestSecurity);

    if ($response->webApp !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidmanagementEnterprisesWebTokensCreate

Creates a web token to access an embeddable managed Google Play web UI for a given enterprise.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebTokensCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WebToken;
use \OpenAPI\OpenAPI\Models\Shared\WebTokenEnabledFeaturesEnum;
use \OpenAPI\OpenAPI\Models\Shared\WebTokenPermissionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebTokensCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidmanagementEnterprisesWebTokensCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->webToken = new WebToken();
    $request->webToken->enabledFeatures = [
        WebTokenEnabledFeaturesEnum::STORE_BUILDER,
        WebTokenEnabledFeaturesEnum::WEB_APPS,
    ];
    $request->webToken->name = 'Marty Cormier';
    $request->webToken->parentFrameUrl = 'accusantium';
    $request->webToken->permissions = [
        WebTokenPermissionsEnum::APPROVE_APPS,
    ];
    $request->webToken->value = 'natus';
    $request->accessToken = 'magni';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quo';
    $request->fields = 'illum';
    $request->key = 'pariatur';
    $request->oauthToken = 'maxime';
    $request->parent = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new AndroidmanagementEnterprisesWebTokensCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->androidmanagementEnterprisesWebTokensCreate($request, $requestSecurity);

    if ($response->webToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
