# billingAccounts

### Available Operations

* [cloudbillingBillingAccountsCreate](#cloudbillingbillingaccountscreate) - This method creates [billing subaccounts](https://cloud.google.com/billing/docs/concepts#subaccounts). Google Cloud resellers should use the Channel Services APIs, [accounts.customers.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers/create) and [accounts.customers.entitlements.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers.entitlements/create). When creating a subaccount, the current authenticated user must have the `billing.accounts.update` IAM permission on the parent account, which is typically given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access). This method will return an error if the parent account has not been provisioned as a reseller account.
* [cloudbillingBillingAccountsGet](#cloudbillingbillingaccountsget) - Gets information about a billing account. The current authenticated user must be a [viewer of the billing account](https://cloud.google.com/billing/docs/how-to/billing-access).
* [cloudbillingBillingAccountsGetIamPolicy](#cloudbillingbillingaccountsgetiampolicy) - Gets the access control policy for a billing account. The caller must have the `billing.accounts.getIamPolicy` permission on the account, which is often given to billing account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).
* [cloudbillingBillingAccountsList](#cloudbillingbillingaccountslist) - Lists the billing accounts that the current authenticated user has permission to [view](https://cloud.google.com/billing/docs/how-to/billing-access).
* [cloudbillingBillingAccountsPatch](#cloudbillingbillingaccountspatch) - Updates a billing account's fields. Currently the only field that can be edited is `display_name`. The current authenticated user must have the `billing.accounts.update` IAM permission, which is typically given to the [administrator](https://cloud.google.com/billing/docs/how-to/billing-access) of the billing account.
* [cloudbillingBillingAccountsProjectsList](#cloudbillingbillingaccountsprojectslist) - Lists the projects associated with a billing account. The current authenticated user must have the `billing.resourceAssociations.list` IAM permission, which is often given to billing account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).
* [cloudbillingBillingAccountsSetIamPolicy](#cloudbillingbillingaccountssetiampolicy) - Sets the access control policy for a billing account. Replaces any existing policy. The caller must have the `billing.accounts.setIamPolicy` permission on the account, which is often given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access).
* [cloudbillingBillingAccountsTestIamPermissions](#cloudbillingbillingaccountstestiampermissions) - Tests the access control policy for a billing account. This method takes the resource and a set of permissions as input and returns the subset of the input permissions that the caller is allowed for that resource.

## cloudbillingBillingAccountsCreate

This method creates [billing subaccounts](https://cloud.google.com/billing/docs/concepts#subaccounts). Google Cloud resellers should use the Channel Services APIs, [accounts.customers.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers/create) and [accounts.customers.entitlements.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers.entitlements/create). When creating a subaccount, the current authenticated user must have the `billing.accounts.update` IAM permission on the parent account, which is typically given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access). This method will return an error if the parent account has not been provisioned as a reseller account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BillingAccountInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudbillingBillingAccountsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->billingAccountInput = new BillingAccountInput();
    $request->billingAccountInput->displayName = 'magnam';
    $request->billingAccountInput->masterBillingAccount = 'debitis';
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->fields = 'suscipit';
    $request->key = 'molestiae';
    $request->oauthToken = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'placeat';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new CloudbillingBillingAccountsCreateSecurity();
    $requestSecurity->option1 = new CloudbillingBillingAccountsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billingAccounts->cloudbillingBillingAccountsCreate($request, $requestSecurity);

    if ($response->billingAccount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudbillingBillingAccountsGet

Gets information about a billing account. The current authenticated user must be a [viewer of the billing account](https://cloud.google.com/billing/docs/how-to/billing-access).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudbillingBillingAccountsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'temporibus';
    $request->fields = 'ab';
    $request->key = 'quis';
    $request->name = 'Iris Aufderhar';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'at';

    $requestSecurity = new CloudbillingBillingAccountsGetSecurity();
    $requestSecurity->option1 = new CloudbillingBillingAccountsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billingAccounts->cloudbillingBillingAccountsGet($request, $requestSecurity);

    if ($response->billingAccount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudbillingBillingAccountsGetIamPolicy

Gets the access control policy for a billing account. The caller must have the `billing.accounts.getIamPolicy` permission on the account, which is often given to billing account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsGetIamPolicySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudbillingBillingAccountsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quod';
    $request->fields = 'quod';
    $request->key = 'esse';
    $request->oauthToken = 'totam';
    $request->optionsRequestedPolicyVersion = 780529;
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->resource = 'dicta';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new CloudbillingBillingAccountsGetIamPolicySecurity();
    $requestSecurity->option1 = new CloudbillingBillingAccountsGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billingAccounts->cloudbillingBillingAccountsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudbillingBillingAccountsList

Lists the billing accounts that the current authenticated user has permission to [view](https://cloud.google.com/billing/docs/how-to/billing-access).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudbillingBillingAccountsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->fields = 'optio';
    $request->filter = 'totam';
    $request->key = 'beatae';
    $request->oauthToken = 'commodi';
    $request->pageSize = 473600;
    $request->pageToken = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'cum';

    $requestSecurity = new CloudbillingBillingAccountsListSecurity();
    $requestSecurity->option1 = new CloudbillingBillingAccountsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billingAccounts->cloudbillingBillingAccountsList($request, $requestSecurity);

    if ($response->listBillingAccountsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudbillingBillingAccountsPatch

Updates a billing account's fields. Currently the only field that can be edited is `display_name`. The current authenticated user must have the `billing.accounts.update` IAM permission, which is typically given to the [administrator](https://cloud.google.com/billing/docs/how-to/billing-access) of the billing account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BillingAccountInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudbillingBillingAccountsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->billingAccountInput = new BillingAccountInput();
    $request->billingAccountInput->displayName = 'ipsum';
    $request->billingAccountInput->masterBillingAccount = 'excepturi';
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ad';
    $request->fields = 'natus';
    $request->key = 'sed';
    $request->name = 'Curtis Morissette';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'fuga';
    $request->updateMask = 'in';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'iste';

    $requestSecurity = new CloudbillingBillingAccountsPatchSecurity();
    $requestSecurity->option1 = new CloudbillingBillingAccountsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billingAccounts->cloudbillingBillingAccountsPatch($request, $requestSecurity);

    if ($response->billingAccount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudbillingBillingAccountsProjectsList

Lists the projects associated with a billing account. The current authenticated user must have the `billing.resourceAssociations.list` IAM permission, which is often given to billing account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsProjectsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsProjectsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsProjectsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsProjectsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsProjectsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudbillingBillingAccountsProjectsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->fields = 'ipsa';
    $request->key = 'reiciendis';
    $request->name = 'Shaun Osinski';
    $request->oauthToken = 'corporis';
    $request->pageSize = 128926;
    $request->pageToken = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'nemo';

    $requestSecurity = new CloudbillingBillingAccountsProjectsListSecurity();
    $requestSecurity->option1 = new CloudbillingBillingAccountsProjectsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billingAccounts->cloudbillingBillingAccountsProjectsList($request, $requestSecurity);

    if ($response->listProjectBillingInfoResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudbillingBillingAccountsSetIamPolicy

Sets the access control policy for a billing account. Replaces any existing policy. The caller must have the `billing.accounts.setIamPolicy` permission on the account, which is often given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudbillingBillingAccountsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'iure';
    $request->setIamPolicyRequest->policy->version = 634274;
    $request->setIamPolicyRequest->updateMask = 'doloribus';
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'mollitia';
    $request->fields = 'dolorem';
    $request->key = 'culpa';
    $request->oauthToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellat';
    $request->resource = 'mollitia';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'numquam';

    $requestSecurity = new CloudbillingBillingAccountsSetIamPolicySecurity();
    $requestSecurity->option1 = new CloudbillingBillingAccountsSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billingAccounts->cloudbillingBillingAccountsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudbillingBillingAccountsTestIamPermissions

Tests the access control policy for a billing account. This method takes the resource and a set of permissions as input and returns the subset of the input permissions that the caller is allowed for that resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudbillingBillingAccountsTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudbillingBillingAccountsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'molestiae',
        'velit',
    ];
    $request->accessToken = 'error';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'vitae';
    $request->key = 'laborum';
    $request->oauthToken = 'animi';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->resource = 'odit';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'sequi';

    $requestSecurity = new CloudbillingBillingAccountsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new CloudbillingBillingAccountsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billingAccounts->cloudbillingBillingAccountsTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
