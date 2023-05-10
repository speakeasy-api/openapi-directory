# projects

### Available Operations

* [cloudbillingProjectsGetBillingInfo](#cloudbillingprojectsgetbillinginfo) - Gets the billing information for a project. The current authenticated user must have the `resourcemanager.projects.get` permission for the project, which can be granted by assigning the [Project Viewer](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) role.
* [cloudbillingProjectsUpdateBillingInfo](#cloudbillingprojectsupdatebillinginfo) - Sets or updates the billing account associated with a project. You specify the new billing account by setting the `billing_account_name` in the `ProjectBillingInfo` resource to the resource name of a billing account. Associating a project with an open billing account enables billing on the project and allows charges for resource usage. If the project already had a billing account, this method changes the billing account used for resource usage charges. *Note:* Incurred charges that have not yet been reported in the transaction history of the Google Cloud Console might be billed to the new billing account, even if the charge occurred before the new billing account was assigned to the project. The current authenticated user must have ownership privileges for both the [project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo ) and the [billing account](https://cloud.google.com/billing/docs/how-to/billing-access). You can disable billing on the project by setting the `billing_account_name` field to empty. This action disassociates the current billing account from the project. Any billable activity of your in-use services will stop, and your application could stop functioning as expected. Any unbilled charges to date will be billed to the previously associated account. The current authenticated user must be either an owner of the project or an owner of the billing account for the project. Note that associating a project with a *closed* billing account will have much the same effect as disabling billing on the project: any paid resources used by the project will be shut down. Thus, unless you wish to disable billing, you should always call this method with the name of an *open* billing account.

## cloudbillingProjectsGetBillingInfo

Gets the billing information for a project. The current authenticated user must have the `resourcemanager.projects.get` permission for the project, which can be granted by assigning the [Project Viewer](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) role.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingProjectsGetBillingInfoRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingProjectsGetBillingInfoSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingProjectsGetBillingInfoSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingProjectsGetBillingInfoSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingProjectsGetBillingInfoSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudbillingProjectsGetBillingInfoRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'possimus';
    $request->fields = 'aut';
    $request->key = 'quasi';
    $request->name = 'Dr. Jake Pacocha';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new CloudbillingProjectsGetBillingInfoSecurity();
    $requestSecurity->option1 = new CloudbillingProjectsGetBillingInfoSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudbillingProjectsGetBillingInfo($request, $requestSecurity);

    if ($response->projectBillingInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudbillingProjectsUpdateBillingInfo

Sets or updates the billing account associated with a project. You specify the new billing account by setting the `billing_account_name` in the `ProjectBillingInfo` resource to the resource name of a billing account. Associating a project with an open billing account enables billing on the project and allows charges for resource usage. If the project already had a billing account, this method changes the billing account used for resource usage charges. *Note:* Incurred charges that have not yet been reported in the transaction history of the Google Cloud Console might be billed to the new billing account, even if the charge occurred before the new billing account was assigned to the project. The current authenticated user must have ownership privileges for both the [project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo ) and the [billing account](https://cloud.google.com/billing/docs/how-to/billing-access). You can disable billing on the project by setting the `billing_account_name` field to empty. This action disassociates the current billing account from the project. Any billable activity of your in-use services will stop, and your application could stop functioning as expected. Any unbilled charges to date will be billed to the previously associated account. The current authenticated user must be either an owner of the project or an owner of the billing account for the project. Note that associating a project with a *closed* billing account will have much the same effect as disabling billing on the project: any paid resources used by the project will be shut down. Thus, unless you wish to disable billing, you should always call this method with the name of an *open* billing account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingProjectsUpdateBillingInfoRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectBillingInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingProjectsUpdateBillingInfoSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingProjectsUpdateBillingInfoSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingProjectsUpdateBillingInfoSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudbillingProjectsUpdateBillingInfoRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->projectBillingInfo = new ProjectBillingInfo();
    $request->projectBillingInfo->billingAccountName = 'omnis';
    $request->projectBillingInfo->billingEnabled = false;
    $request->projectBillingInfo->name = 'Ms. Karla Aufderhar';
    $request->projectBillingInfo->projectId = 'maiores';
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolore';
    $request->fields = 'iusto';
    $request->key = 'dicta';
    $request->name = 'Bill Thompson';
    $request->oauthToken = 'quae';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'molestias';

    $requestSecurity = new CloudbillingProjectsUpdateBillingInfoSecurity();
    $requestSecurity->option1 = new CloudbillingProjectsUpdateBillingInfoSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudbillingProjectsUpdateBillingInfo($request, $requestSecurity);

    if ($response->projectBillingInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
