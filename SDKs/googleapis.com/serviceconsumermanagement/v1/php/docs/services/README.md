# services

### Available Operations

* [serviceconsumermanagementServicesSearch](#serviceconsumermanagementservicessearch) - Search tenancy units for a managed service.
* [serviceconsumermanagementServicesTenancyUnitsAddProject](#serviceconsumermanagementservicestenancyunitsaddproject) - Add a new tenant project to the tenancy unit. There can be a maximum of 1024 tenant projects in a tenancy unit. If there are previously failed `AddTenantProject` calls, you might need to call `RemoveTenantProject` first to resolve them before you can make another call to `AddTenantProject` with the same tag. Operation.
* [serviceconsumermanagementServicesTenancyUnitsApplyProjectConfig](#serviceconsumermanagementservicestenancyunitsapplyprojectconfig) - Apply a configuration to an existing tenant project. This project must exist in an active state and have the original owner account. The caller must have permission to add a project to the given tenancy unit. The configuration is applied, but any existing settings on the project aren't modified. Specified policy bindings are applied. Existing bindings aren't modified. Specified services are activated. No service is deactivated. If specified, new billing configuration is applied. Omit a billing configuration to keep the existing one. A service account in the project is created if previously non existed. Specified labels will be appended to tenant project, note that the value of existing label key will be updated if the same label key is requested. The specified folder is ignored, as moving a tenant project to a different folder isn't supported. The operation fails if any of the steps fail, but no rollback of already applied configuration changes is attempted. Operation.
* [serviceconsumermanagementServicesTenancyUnitsAttachProject](#serviceconsumermanagementservicestenancyunitsattachproject) - Attach an existing project to the tenancy unit as a new tenant resource. The project could either be the tenant project reserved by calling `AddTenantProject` under a tenancy unit of a service producer's project of a managed service, or from a separate project. The caller is checked against a set of permissions as if calling `AddTenantProject` on the same service consumer. To trigger the attachment, the targeted tenant project must be in a folder. Make sure the ServiceConsumerManagement service account is the owner of that project. These two requirements are already met if the project is reserved by calling `AddTenantProject`. Operation.
* [serviceconsumermanagementServicesTenancyUnitsCreate](#serviceconsumermanagementservicestenancyunitscreate) - Creates a tenancy unit with no tenant resources. If tenancy unit already exists, it will be returned, however, in this case, returned TenancyUnit does not have tenant_resources field set and ListTenancyUnits has to be used to get a complete TenancyUnit with all fields populated.
* [serviceconsumermanagementServicesTenancyUnitsDelete](#serviceconsumermanagementservicestenancyunitsdelete) - Delete a tenancy unit. Before you delete the tenancy unit, there should be no tenant resources in it that aren't in a DELETED state. Operation.
* [serviceconsumermanagementServicesTenancyUnitsDeleteProject](#serviceconsumermanagementservicestenancyunitsdeleteproject) - Deletes the specified project resource identified by a tenant resource tag. The mothod removes a project lien with a 'TenantManager' origin if that was added. It will then attempt to delete the project. If that operation fails, this method also fails. After the project has been deleted, the tenant resource state is set to DELETED. To permanently remove resource metadata, call the `RemoveTenantProject` method. New resources with the same tag can't be added if there are existing resources in a DELETED state. Operation.
* [serviceconsumermanagementServicesTenancyUnitsList](#serviceconsumermanagementservicestenancyunitslist) - Find the tenancy unit for a managed service and service consumer. This method shouldn't be used in a service producer's runtime path, for example to find the tenant project number when creating VMs. Service producers must persist the tenant project's information after the project is created.
* [serviceconsumermanagementServicesTenancyUnitsRemoveProject](#serviceconsumermanagementservicestenancyunitsremoveproject) - Removes the specified project resource identified by a tenant resource tag. The method removes the project lien with 'TenantManager' origin if that was added. It then attempts to delete the project. If that operation fails, this method also fails. Calls to remove already removed or non-existent tenant project succeed. After the project has been deleted, or if was already in a DELETED state, resource metadata is permanently removed from the tenancy unit. Operation.
* [serviceconsumermanagementServicesTenancyUnitsUndeleteProject](#serviceconsumermanagementservicestenancyunitsundeleteproject) - Attempts to undelete a previously deleted tenant project. The project must be in a DELETED state. There are no guarantees that an undeleted project will be in a fully restored and functional state. Call the `ApplyTenantProjectConfig` method to update its configuration and then validate all managed service resources. Operation.

## serviceconsumermanagementServicesSearch

Search tenancy units for a managed service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceconsumermanagementServicesSearchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'qui';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cum';
    $request->fields = 'esse';
    $request->key = 'ipsum';
    $request->oauthToken = 'excepturi';
    $request->pageSize = 135218;
    $request->pageToken = 'perferendis';
    $request->parent = 'ad';
    $request->prettyPrint = false;
    $request->query = 'natus';
    $request->quotaUser = 'sed';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'dolor';

    $requestSecurity = new ServiceconsumermanagementServicesSearchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceconsumermanagementServicesSearch($request, $requestSecurity);

    if ($response->searchTenancyUnitsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceconsumermanagementServicesTenancyUnitsAddProject

Add a new tenant project to the tenancy unit. There can be a maximum of 1024 tenant projects in a tenancy unit. If there are previously failed `AddTenantProject` calls, you might need to call `RemoveTenantProject` first to resolve them before you can make another call to `AddTenantProject` with the same tag. Operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesTenancyUnitsAddProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddTenantProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\TenantProjectConfig;
use \OpenAPI\OpenAPI\Models\Shared\BillingConfig;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAccountConfig;
use \OpenAPI\OpenAPI\Models\Shared\TenantProjectPolicy;
use \OpenAPI\OpenAPI\Models\Shared\PolicyBinding;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesTenancyUnitsAddProjectSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceconsumermanagementServicesTenancyUnitsAddProjectRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->addTenantProjectRequest = new AddTenantProjectRequest();
    $request->addTenantProjectRequest->projectConfig = new TenantProjectConfig();
    $request->addTenantProjectRequest->projectConfig->billingConfig = new BillingConfig();
    $request->addTenantProjectRequest->projectConfig->billingConfig->billingAccount = 'laboriosam';
    $request->addTenantProjectRequest->projectConfig->folder = 'hic';
    $request->addTenantProjectRequest->projectConfig->labels = [
        'fuga' => 'in',
        'corporis' => 'iste',
        'iure' => 'saepe',
        'quidem' => 'architecto',
    ];
    $request->addTenantProjectRequest->projectConfig->serviceAccountConfig = new ServiceAccountConfig();
    $request->addTenantProjectRequest->projectConfig->serviceAccountConfig->accountId = 'ipsa';
    $request->addTenantProjectRequest->projectConfig->serviceAccountConfig->tenantProjectRoles = [
        'est',
        'mollitia',
        'laborum',
        'dolores',
    ];
    $request->addTenantProjectRequest->projectConfig->services = [
        'corporis',
    ];
    $request->addTenantProjectRequest->projectConfig->tenantProjectPolicy = new TenantProjectPolicy();
    $request->addTenantProjectRequest->projectConfig->tenantProjectPolicy->policyBindings = [
        new PolicyBinding(),
    ];
    $request->addTenantProjectRequest->tag = 'nobis';
    $request->accessToken = 'enim';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nemo';
    $request->fields = 'minima';
    $request->key = 'excepturi';
    $request->oauthToken = 'accusantium';
    $request->parent = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'culpa';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new ServiceconsumermanagementServicesTenancyUnitsAddProjectSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceconsumermanagementServicesTenancyUnitsAddProject($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceconsumermanagementServicesTenancyUnitsApplyProjectConfig

Apply a configuration to an existing tenant project. This project must exist in an active state and have the original owner account. The caller must have permission to add a project to the given tenancy unit. The configuration is applied, but any existing settings on the project aren't modified. Specified policy bindings are applied. Existing bindings aren't modified. Specified services are activated. No service is deactivated. If specified, new billing configuration is applied. Omit a billing configuration to keep the existing one. A service account in the project is created if previously non existed. Specified labels will be appended to tenant project, note that the value of existing label key will be updated if the same label key is requested. The specified folder is ignored, as moving a tenant project to a different folder isn't supported. The operation fails if any of the steps fail, but no rollback of already applied configuration changes is attempted. Operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesTenancyUnitsApplyProjectConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApplyTenantProjectConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\TenantProjectConfig;
use \OpenAPI\OpenAPI\Models\Shared\BillingConfig;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAccountConfig;
use \OpenAPI\OpenAPI\Models\Shared\TenantProjectPolicy;
use \OpenAPI\OpenAPI\Models\Shared\PolicyBinding;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesTenancyUnitsApplyProjectConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceconsumermanagementServicesTenancyUnitsApplyProjectConfigRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->applyTenantProjectConfigRequest = new ApplyTenantProjectConfigRequest();
    $request->applyTenantProjectConfigRequest->projectConfig = new TenantProjectConfig();
    $request->applyTenantProjectConfigRequest->projectConfig->billingConfig = new BillingConfig();
    $request->applyTenantProjectConfigRequest->projectConfig->billingConfig->billingAccount = 'mollitia';
    $request->applyTenantProjectConfigRequest->projectConfig->folder = 'dolorem';
    $request->applyTenantProjectConfigRequest->projectConfig->labels = [
        'consequuntur' => 'repellat',
        'mollitia' => 'occaecati',
        'numquam' => 'commodi',
    ];
    $request->applyTenantProjectConfigRequest->projectConfig->serviceAccountConfig = new ServiceAccountConfig();
    $request->applyTenantProjectConfigRequest->projectConfig->serviceAccountConfig->accountId = 'quam';
    $request->applyTenantProjectConfigRequest->projectConfig->serviceAccountConfig->tenantProjectRoles = [
        'velit',
        'error',
    ];
    $request->applyTenantProjectConfigRequest->projectConfig->services = [
        'quis',
    ];
    $request->applyTenantProjectConfigRequest->projectConfig->tenantProjectPolicy = new TenantProjectPolicy();
    $request->applyTenantProjectConfigRequest->projectConfig->tenantProjectPolicy->policyBindings = [
        new PolicyBinding(),
    ];
    $request->applyTenantProjectConfigRequest->tag = 'laborum';
    $request->accessToken = 'animi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'odit';
    $request->fields = 'quo';
    $request->key = 'sequi';
    $request->name = 'Vernon Ondricka Sr.';
    $request->oauthToken = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new ServiceconsumermanagementServicesTenancyUnitsApplyProjectConfigSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceconsumermanagementServicesTenancyUnitsApplyProjectConfig($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceconsumermanagementServicesTenancyUnitsAttachProject

Attach an existing project to the tenancy unit as a new tenant resource. The project could either be the tenant project reserved by calling `AddTenantProject` under a tenancy unit of a service producer's project of a managed service, or from a separate project. The caller is checked against a set of permissions as if calling `AddTenantProject` on the same service consumer. To trigger the attachment, the targeted tenant project must be in a folder. Make sure the ServiceConsumerManagement service account is the owner of that project. These two requirements are already met if the project is reserved by calling `AddTenantProject`. Operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesTenancyUnitsAttachProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttachTenantProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesTenancyUnitsAttachProjectSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceconsumermanagementServicesTenancyUnitsAttachProjectRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->attachTenantProjectRequest = new AttachTenantProjectRequest();
    $request->attachTenantProjectRequest->externalResource = 'voluptatibus';
    $request->attachTenantProjectRequest->reservedResource = 'vero';
    $request->attachTenantProjectRequest->tag = 'nihil';
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsa';
    $request->fields = 'omnis';
    $request->key = 'voluptate';
    $request->name = 'Thomas Batz';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'dolore';

    $requestSecurity = new ServiceconsumermanagementServicesTenancyUnitsAttachProjectSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceconsumermanagementServicesTenancyUnitsAttachProject($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceconsumermanagementServicesTenancyUnitsCreate

Creates a tenancy unit with no tenant resources. If tenancy unit already exists, it will be returned, however, in this case, returned TenancyUnit does not have tenant_resources field set and ListTenancyUnits has to be used to get a complete TenancyUnit with all fields populated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesTenancyUnitsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateTenancyUnitRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesTenancyUnitsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceconsumermanagementServicesTenancyUnitsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->createTenancyUnitRequest = new CreateTenancyUnitRequest();
    $request->createTenancyUnitRequest->tenancyUnitId = 'dicta';
    $request->accessToken = 'harum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->fields = 'commodi';
    $request->key = 'repudiandae';
    $request->oauthToken = 'quae';
    $request->parent = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'molestias';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new ServiceconsumermanagementServicesTenancyUnitsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceconsumermanagementServicesTenancyUnitsCreate($request, $requestSecurity);

    if ($response->tenancyUnit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceconsumermanagementServicesTenancyUnitsDelete

Delete a tenancy unit. Before you delete the tenancy unit, there should be no tenant resources in it that aren't in a DELETED state. Operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesTenancyUnitsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesTenancyUnitsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceconsumermanagementServicesTenancyUnitsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'modi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'rem';
    $request->fields = 'voluptates';
    $request->key = 'quasi';
    $request->name = 'Kirk Boehm';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequatur';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'quibusdam';

    $requestSecurity = new ServiceconsumermanagementServicesTenancyUnitsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceconsumermanagementServicesTenancyUnitsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceconsumermanagementServicesTenancyUnitsDeleteProject

Deletes the specified project resource identified by a tenant resource tag. The mothod removes a project lien with a 'TenantManager' origin if that was added. It will then attempt to delete the project. If that operation fails, this method also fails. After the project has been deleted, the tenant resource state is set to DELETED. To permanently remove resource metadata, call the `RemoveTenantProject` method. New resources with the same tag can't be added if there are existing resources in a DELETED state. Operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesTenancyUnitsDeleteProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeleteTenantProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesTenancyUnitsDeleteProjectSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceconsumermanagementServicesTenancyUnitsDeleteProjectRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->deleteTenantProjectRequest = new DeleteTenantProjectRequest();
    $request->deleteTenantProjectRequest->tag = 'deserunt';
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'labore';
    $request->fields = 'modi';
    $request->key = 'qui';
    $request->name = 'Mr. Shelly Lueilwitz';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new ServiceconsumermanagementServicesTenancyUnitsDeleteProjectSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceconsumermanagementServicesTenancyUnitsDeleteProject($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceconsumermanagementServicesTenancyUnitsList

Find the tenancy unit for a managed service and service consumer. This method shouldn't be used in a service producer's runtime path, for example to find the tenant project number when creating VMs. Service producers must persist the tenant project's information after the project is created.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesTenancyUnitsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesTenancyUnitsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceconsumermanagementServicesTenancyUnitsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempore';
    $request->fields = 'labore';
    $request->filter = 'delectus';
    $request->key = 'eum';
    $request->oauthToken = 'non';
    $request->pageSize = 756107;
    $request->pageToken = 'sint';
    $request->parent = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new ServiceconsumermanagementServicesTenancyUnitsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceconsumermanagementServicesTenancyUnitsList($request, $requestSecurity);

    if ($response->listTenancyUnitsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceconsumermanagementServicesTenancyUnitsRemoveProject

Removes the specified project resource identified by a tenant resource tag. The method removes the project lien with 'TenantManager' origin if that was added. It then attempts to delete the project. If that operation fails, this method also fails. Calls to remove already removed or non-existent tenant project succeed. After the project has been deleted, or if was already in a DELETED state, resource metadata is permanently removed from the tenancy unit. Operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesTenancyUnitsRemoveProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveTenantProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesTenancyUnitsRemoveProjectSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceconsumermanagementServicesTenancyUnitsRemoveProjectRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->removeTenantProjectRequest = new RemoveTenantProjectRequest();
    $request->removeTenantProjectRequest->tag = 'dolor';
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->fields = 'in';
    $request->key = 'in';
    $request->name = 'Mrs. Emilio Price';
    $request->oauthToken = 'facere';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new ServiceconsumermanagementServicesTenancyUnitsRemoveProjectSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceconsumermanagementServicesTenancyUnitsRemoveProject($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceconsumermanagementServicesTenancyUnitsUndeleteProject

Attempts to undelete a previously deleted tenant project. The project must be in a DELETED state. There are no guarantees that an undeleted project will be in a fully restored and functional state. Call the `ApplyTenantProjectConfig` method to update its configuration and then validate all managed service resources. Operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesTenancyUnitsUndeleteProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UndeleteTenantProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesTenancyUnitsUndeleteProjectSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceconsumermanagementServicesTenancyUnitsUndeleteProjectRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->undeleteTenantProjectRequest = new UndeleteTenantProjectRequest();
    $request->undeleteTenantProjectRequest->tag = 'non';
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->fields = 'delectus';
    $request->key = 'quidem';
    $request->name = 'Marco Olson';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'nisi';

    $requestSecurity = new ServiceconsumermanagementServicesTenancyUnitsUndeleteProjectSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceconsumermanagementServicesTenancyUnitsUndeleteProject($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
