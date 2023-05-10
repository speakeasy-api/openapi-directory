# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    $request->enterprise->contactInfo->contactEmail = 'provident';
    $request->enterprise->contactInfo->dataProtectionOfficerEmail = 'distinctio';
    $request->enterprise->contactInfo->dataProtectionOfficerName = 'quibusdam';
    $request->enterprise->contactInfo->dataProtectionOfficerPhone = 'unde';
    $request->enterprise->contactInfo->euRepresentativeEmail = 'nulla';
    $request->enterprise->contactInfo->euRepresentativeName = 'corrupti';
    $request->enterprise->contactInfo->euRepresentativePhone = 'illum';
    $request->enterprise->enabledNotificationTypes = [
        EnterpriseEnabledNotificationTypesEnum::STATUS_REPORT,
        EnterpriseEnabledNotificationTypesEnum::STATUS_REPORT,
    ];
    $request->enterprise->enterpriseDisplayName = 'suscipit';
    $request->enterprise->logo = new ExternalData();
    $request->enterprise->logo->sha256Hash = 'iure';
    $request->enterprise->logo->url = 'magnam';
    $request->enterprise->name = 'Larry Windler';
    $request->enterprise->primaryColor = 477665;
    $request->enterprise->pubsubTopic = 'minus';
    $request->enterprise->signinDetails = [
        new SigninDetail(),
        new SigninDetail(),
        new SigninDetail(),
        new SigninDetail(),
    ];
    $request->enterprise->termsAndConditions = [
        new TermsAndConditions(),
        new TermsAndConditions(),
        new TermsAndConditions(),
    ];
    $request->accessToken = 'iusto';
    $request->agreementAccepted = false;
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->enterpriseToken = 'recusandae';
    $request->fields = 'temporibus';
    $request->key = 'ab';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->projectId = 'veritatis';
    $request->quotaUser = 'deserunt';
    $request->signupUrlName = 'perferendis';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'repellendus';

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [enterprises](docs/enterprises/README.md)

* [androidmanagementEnterprisesCreate](docs/enterprises/README.md#androidmanagemententerprisescreate) - Creates an enterprise. This is the last step in the enterprise signup flow. See also: SigninDetail
* [androidmanagementEnterprisesDevicesIssueCommand](docs/enterprises/README.md#androidmanagemententerprisesdevicesissuecommand) - Issues a command to a device. The Operation resource returned contains a Command in its metadata field. Use the get operation method to get the status of the command.
* [androidmanagementEnterprisesDevicesList](docs/enterprises/README.md#androidmanagemententerprisesdeviceslist) - Lists devices for a given enterprise. Deleted devices are not returned in the response.
* [androidmanagementEnterprisesDevicesOperationsCancel](docs/enterprises/README.md#androidmanagemententerprisesdevicesoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* [androidmanagementEnterprisesEnrollmentTokensCreate](docs/enterprises/README.md#androidmanagemententerprisesenrollmenttokenscreate) - Creates an enrollment token for a given enterprise. It's up to the caller's responsibility to manage the lifecycle of newly created tokens and deleting them when they're not intended to be used anymore. Once an enrollment token has been created, it's not possible to retrieve the token's content anymore using AM API. It is recommended for EMMs to securely store the token if it's intended to be reused.
* [androidmanagementEnterprisesEnrollmentTokensList](docs/enterprises/README.md#androidmanagemententerprisesenrollmenttokenslist) - Lists active, unexpired enrollment tokens for a given enterprise. The list items contain only a partial view of EnrollmentToken: all the fields but name and expiration_timestamp are empty. This method is meant to help manage active enrollment tokens lifecycle. For security reasons, it's recommended to delete active enrollment tokens as soon as they're not intended to be used anymore.
* [androidmanagementEnterprisesList](docs/enterprises/README.md#androidmanagemententerpriseslist) - Lists EMM-managed enterprises. Only BASIC fields are returned.
* [androidmanagementEnterprisesPoliciesList](docs/enterprises/README.md#androidmanagemententerprisespolicieslist) - Lists policies for a given enterprise.
* [androidmanagementEnterprisesWebAppsCreate](docs/enterprises/README.md#androidmanagemententerpriseswebappscreate) - Creates a web app.
* [androidmanagementEnterprisesWebAppsDelete](docs/enterprises/README.md#androidmanagemententerpriseswebappsdelete) - Deletes a web app.
* [androidmanagementEnterprisesWebAppsGet](docs/enterprises/README.md#androidmanagemententerpriseswebappsget) - Gets a web app.
* [androidmanagementEnterprisesWebAppsList](docs/enterprises/README.md#androidmanagemententerpriseswebappslist) - Lists web apps for a given enterprise.
* [androidmanagementEnterprisesWebAppsPatch](docs/enterprises/README.md#androidmanagemententerpriseswebappspatch) - Updates a web app.
* [androidmanagementEnterprisesWebTokensCreate](docs/enterprises/README.md#androidmanagemententerpriseswebtokenscreate) - Creates a web token to access an embeddable managed Google Play web UI for a given enterprise.

### [signupUrls](docs/signupurls/README.md)

* [androidmanagementSignupUrlsCreate](docs/signupurls/README.md#androidmanagementsignupurlscreate) - Creates an enterprise signup URL.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
