# organizations

### Available Operations

* [assuredworkloadsOrganizationsLocationsOperationsList](#assuredworkloadsorganizationslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [assuredworkloadsOrganizationsLocationsWorkloadsCreate](#assuredworkloadsorganizationslocationsworkloadscreate) - Creates Assured Workload.
* [assuredworkloadsOrganizationsLocationsWorkloadsDelete](#assuredworkloadsorganizationslocationsworkloadsdelete) - Deletes the workload. Make sure that workload's direct children are already in a deleted state, otherwise the request will fail with a FAILED_PRECONDITION error.
* [assuredworkloadsOrganizationsLocationsWorkloadsList](#assuredworkloadsorganizationslocationsworkloadslist) - Lists Assured Workloads under a CRM Node.
* [assuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissions](#assuredworkloadsorganizationslocationsworkloadsmutatepartnerpermissions) - Update the permissions settings for an existing partner workload. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.
* [assuredworkloadsOrganizationsLocationsWorkloadsPatch](#assuredworkloadsorganizationslocationsworkloadspatch) - Updates an existing workload. Currently allows updating of workload display_name and labels. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.
* [assuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResources](#assuredworkloadsorganizationslocationsworkloadsrestrictallowedresources) - Restrict the list of resources allowed in the Workload environment. The current list of allowed products can be found at https://cloud.google.com/assured-workloads/docs/supported-products In addition to assuredworkloads.workload.update permission, the user should also have orgpolicy.policy.set permission on the folder resource to use this functionality.
* [assuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledge](#assuredworkloadsorganizationslocationsworkloadsviolationsacknowledge) - Acknowledges an existing violation. By acknowledging a violation, users acknowledge the existence of a compliance violation in their workload and decide to ignore it due to a valid business justification. Acknowledgement is a permanent operation and it cannot be reverted.
* [assuredworkloadsOrganizationsLocationsWorkloadsViolationsGet](#assuredworkloadsorganizationslocationsworkloadsviolationsget) - Retrieves Assured Workload Violation based on ID.
* [assuredworkloadsOrganizationsLocationsWorkloadsViolationsList](#assuredworkloadsorganizationslocationsworkloadsviolationslist) - Lists the Violations in the AssuredWorkload Environment. Callers may also choose to read across multiple Workloads as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of workload-id in the parent. Format `organizations/{org_id}/locations/{location}/workloads/-`

## assuredworkloadsOrganizationsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AssuredworkloadsOrganizationsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AssuredworkloadsOrganizationsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssuredworkloadsOrganizationsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'placeat';
    $request->fields = 'voluptatum';
    $request->filter = 'iusto';
    $request->key = 'excepturi';
    $request->name = 'Mrs. Sophie Smith MD';
    $request->oauthToken = 'perferendis';
    $request->pageSize = 368241;
    $request->pageToken = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new AssuredworkloadsOrganizationsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->assuredworkloadsOrganizationsLocationsOperationsList($request, $requestSecurity);

    if ($response->googleLongrunningListOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## assuredworkloadsOrganizationsLocationsWorkloadsCreate

Creates Assured Workload.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AssuredworkloadsOrganizationsLocationsWorkloadsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1WorkloadInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningErrorDomainEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningErrorMappingEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1WorkloadKMSSettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1WorkloadResourceSettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AssuredworkloadsOrganizationsLocationsWorkloadsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssuredworkloadsOrganizationsLocationsWorkloadsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudAssuredworkloadsV1WorkloadInput = new GoogleCloudAssuredworkloadsV1WorkloadInput();
    $request->googleCloudAssuredworkloadsV1WorkloadInput->billingAccount = 'at';
    $request->googleCloudAssuredworkloadsV1WorkloadInput->complianceRegime = GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum::CA_PROTECTED_B;
    $request->googleCloudAssuredworkloadsV1WorkloadInput->complianceStatus = new GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus();
    $request->googleCloudAssuredworkloadsV1WorkloadInput->complianceStatus->acknowledgedViolationCount = 473608;
    $request->googleCloudAssuredworkloadsV1WorkloadInput->complianceStatus->activeViolationCount = 799159;
    $request->googleCloudAssuredworkloadsV1WorkloadInput->displayName = 'quod';
    $request->googleCloudAssuredworkloadsV1WorkloadInput->ekmProvisioningResponse = new GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse();
    $request->googleCloudAssuredworkloadsV1WorkloadInput->ekmProvisioningResponse->ekmProvisioningErrorDomain = GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningErrorDomainEnum::GOOGLE_SERVER_ERROR;
    $request->googleCloudAssuredworkloadsV1WorkloadInput->ekmProvisioningResponse->ekmProvisioningErrorMapping = GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningErrorMappingEnum::MISSING_METRICS_SCOPE_ADMIN_PERMISSION;
    $request->googleCloudAssuredworkloadsV1WorkloadInput->ekmProvisioningResponse->ekmProvisioningState = GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningStateEnum::EKM_PROVISIONING_STATE_COMPLETED;
    $request->googleCloudAssuredworkloadsV1WorkloadInput->enableSovereignControls = false;
    $request->googleCloudAssuredworkloadsV1WorkloadInput->etag = 'dolorum';
    $request->googleCloudAssuredworkloadsV1WorkloadInput->kmsSettings = new GoogleCloudAssuredworkloadsV1WorkloadKMSSettings();
    $request->googleCloudAssuredworkloadsV1WorkloadInput->kmsSettings->nextRotationTime = 'dicta';
    $request->googleCloudAssuredworkloadsV1WorkloadInput->kmsSettings->rotationPeriod = 'nam';
    $request->googleCloudAssuredworkloadsV1WorkloadInput->labels = [
        'occaecati' => 'fugit',
        'deleniti' => 'hic',
        'optio' => 'totam',
    ];
    $request->googleCloudAssuredworkloadsV1WorkloadInput->name = 'Lucy Krajcik';
    $request->googleCloudAssuredworkloadsV1WorkloadInput->partner = GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum::SOVEREIGN_CONTROLS_BY_SIA_MINSAIT;
    $request->googleCloudAssuredworkloadsV1WorkloadInput->provisionedResourcesParent = 'cum';
    $request->googleCloudAssuredworkloadsV1WorkloadInput->resourceSettings = [
        new GoogleCloudAssuredworkloadsV1WorkloadResourceSettings(),
        new GoogleCloudAssuredworkloadsV1WorkloadResourceSettings(),
    ];
    $request->googleCloudAssuredworkloadsV1WorkloadInput->saaEnrollmentResponse = new GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse();
    $request->googleCloudAssuredworkloadsV1WorkloadInput->saaEnrollmentResponse->setupErrors = [
        GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum::ERROR_MISSING_EXTERNAL_SIGNING_KEY,
    ];
    $request->googleCloudAssuredworkloadsV1WorkloadInput->saaEnrollmentResponse->setupStatus = GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupStatusEnum::SETUP_STATE_UNSPECIFIED;
    $request->googleCloudAssuredworkloadsV1WorkloadInput->violationNotificationsEnabled = false;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->externalId = 'sed';
    $request->fields = 'iste';
    $request->key = 'dolor';
    $request->oauthToken = 'natus';
    $request->parent = 'laboriosam';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'fuga';

    $requestSecurity = new AssuredworkloadsOrganizationsLocationsWorkloadsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->assuredworkloadsOrganizationsLocationsWorkloadsCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## assuredworkloadsOrganizationsLocationsWorkloadsDelete

Deletes the workload. Make sure that workload's direct children are already in a deleted state, otherwise the request will fail with a FAILED_PRECONDITION error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AssuredworkloadsOrganizationsLocationsWorkloadsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AssuredworkloadsOrganizationsLocationsWorkloadsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssuredworkloadsOrganizationsLocationsWorkloadsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iure';
    $request->etag = 'saepe';
    $request->fields = 'quidem';
    $request->key = 'architecto';
    $request->name = 'Lela Orn';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'explicabo';

    $requestSecurity = new AssuredworkloadsOrganizationsLocationsWorkloadsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->assuredworkloadsOrganizationsLocationsWorkloadsDelete($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## assuredworkloadsOrganizationsLocationsWorkloadsList

Lists Assured Workloads under a CRM Node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AssuredworkloadsOrganizationsLocationsWorkloadsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AssuredworkloadsOrganizationsLocationsWorkloadsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssuredworkloadsOrganizationsLocationsWorkloadsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'enim';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nemo';
    $request->fields = 'minima';
    $request->filter = 'excepturi';
    $request->key = 'accusantium';
    $request->oauthToken = 'iure';
    $request->pageSize = 634274;
    $request->pageToken = 'doloribus';
    $request->parent = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'dolorem';

    $requestSecurity = new AssuredworkloadsOrganizationsLocationsWorkloadsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->assuredworkloadsOrganizationsLocationsWorkloadsList($request, $requestSecurity);

    if ($response->googleCloudAssuredworkloadsV1ListWorkloadsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## assuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissions

Update the permissions settings for an existing partner workload. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest = new GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest();
    $request->googleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest->etag = 'consequuntur';
    $request->googleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest->partnerPermissions = new GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions();
    $request->googleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest->partnerPermissions->dataLogsViewer = false;
    $request->googleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest->partnerPermissions->remediateFolderViolations = false;
    $request->googleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest->partnerPermissions->serviceAccessApprover = false;
    $request->googleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest->updateMask = 'repellat';
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'numquam';
    $request->fields = 'commodi';
    $request->key = 'quam';
    $request->name = 'Shannon Mueller';
    $request->oauthToken = 'vitae';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->uploadType = 'animi';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->assuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissions($request, $requestSecurity);

    if ($response->googleCloudAssuredworkloadsV1Workload !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## assuredworkloadsOrganizationsLocationsWorkloadsPatch

Updates an existing workload. Currently allows updating of workload display_name and labels. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AssuredworkloadsOrganizationsLocationsWorkloadsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1WorkloadInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningErrorDomainEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningErrorMappingEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1WorkloadKMSSettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1WorkloadResourceSettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AssuredworkloadsOrganizationsLocationsWorkloadsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssuredworkloadsOrganizationsLocationsWorkloadsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudAssuredworkloadsV1WorkloadInput = new GoogleCloudAssuredworkloadsV1WorkloadInput();
    $request->googleCloudAssuredworkloadsV1WorkloadInput->billingAccount = 'quo';
    $request->googleCloudAssuredworkloadsV1WorkloadInput->complianceRegime = GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum::FEDRAMP_HIGH;
    $request->googleCloudAssuredworkloadsV1WorkloadInput->complianceStatus = new GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus();
    $request->googleCloudAssuredworkloadsV1WorkloadInput->complianceStatus->acknowledgedViolationCount = 949572;
    $request->googleCloudAssuredworkloadsV1WorkloadInput->complianceStatus->activeViolationCount = 368725;
    $request->googleCloudAssuredworkloadsV1WorkloadInput->displayName = 'id';
    $request->googleCloudAssuredworkloadsV1WorkloadInput->ekmProvisioningResponse = new GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse();
    $request->googleCloudAssuredworkloadsV1WorkloadInput->ekmProvisioningResponse->ekmProvisioningErrorDomain = GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningErrorDomainEnum::EXTERNAL_PARTNER_ERROR;
    $request->googleCloudAssuredworkloadsV1WorkloadInput->ekmProvisioningResponse->ekmProvisioningErrorMapping = GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningErrorMappingEnum::EKM_PROVISIONING_ERROR_MAPPING_UNSPECIFIED;
    $request->googleCloudAssuredworkloadsV1WorkloadInput->ekmProvisioningResponse->ekmProvisioningState = GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponseEkmProvisioningStateEnum::EKM_PROVISIONING_STATE_UNSPECIFIED;
    $request->googleCloudAssuredworkloadsV1WorkloadInput->enableSovereignControls = false;
    $request->googleCloudAssuredworkloadsV1WorkloadInput->etag = 'error';
    $request->googleCloudAssuredworkloadsV1WorkloadInput->kmsSettings = new GoogleCloudAssuredworkloadsV1WorkloadKMSSettings();
    $request->googleCloudAssuredworkloadsV1WorkloadInput->kmsSettings->nextRotationTime = 'temporibus';
    $request->googleCloudAssuredworkloadsV1WorkloadInput->kmsSettings->rotationPeriod = 'laborum';
    $request->googleCloudAssuredworkloadsV1WorkloadInput->labels = [
        'reiciendis' => 'voluptatibus',
    ];
    $request->googleCloudAssuredworkloadsV1WorkloadInput->name = 'Jessie Langosh V';
    $request->googleCloudAssuredworkloadsV1WorkloadInput->partner = GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum::SOVEREIGN_CONTROLS_BY_T_SYSTEMS;
    $request->googleCloudAssuredworkloadsV1WorkloadInput->provisionedResourcesParent = 'cum';
    $request->googleCloudAssuredworkloadsV1WorkloadInput->resourceSettings = [
        new GoogleCloudAssuredworkloadsV1WorkloadResourceSettings(),
    ];
    $request->googleCloudAssuredworkloadsV1WorkloadInput->saaEnrollmentResponse = new GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse();
    $request->googleCloudAssuredworkloadsV1WorkloadInput->saaEnrollmentResponse->setupErrors = [
        GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum::ERROR_MISSING_EXTERNAL_SIGNING_KEY,
    ];
    $request->googleCloudAssuredworkloadsV1WorkloadInput->saaEnrollmentResponse->setupStatus = GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupStatusEnum::SETUP_STATE_UNSPECIFIED;
    $request->googleCloudAssuredworkloadsV1WorkloadInput->violationNotificationsEnabled = false;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corporis';
    $request->fields = 'dolore';
    $request->key = 'iusto';
    $request->name = 'Maryann Hamill';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->updateMask = 'ipsum';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'molestias';

    $requestSecurity = new AssuredworkloadsOrganizationsLocationsWorkloadsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->assuredworkloadsOrganizationsLocationsWorkloadsPatch($request, $requestSecurity);

    if ($response->googleCloudAssuredworkloadsV1Workload !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## assuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResources

Restrict the list of resources allowed in the Workload environment. The current list of allowed products can be found at https://cloud.google.com/assured-workloads/docs/supported-products In addition to assuredworkloads.workload.update permission, the user should also have orgpolicy.policy.set permission on the folder resource to use this functionality.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequestRestrictionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudAssuredworkloadsV1RestrictAllowedResourcesRequest = new GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequest();
    $request->googleCloudAssuredworkloadsV1RestrictAllowedResourcesRequest->restrictionType = GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequestRestrictionTypeEnum::APPEND_COMPLIANT_RESOURCES;
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

    $requestSecurity = new AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->assuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResources($request, $requestSecurity);

    if ($response->googleCloudAssuredworkloadsV1RestrictAllowedResourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## assuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledge

Acknowledges an existing violation. By acknowledging a violation, users acknowledge the existence of a compliance violation in their workload and decide to ignore it due to a valid business justification. Acknowledgement is a permanent operation and it cannot be reverted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudAssuredworkloadsV1AcknowledgeViolationRequest = new GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequest();
    $request->googleCloudAssuredworkloadsV1AcknowledgeViolationRequest->comment = 'deserunt';
    $request->googleCloudAssuredworkloadsV1AcknowledgeViolationRequest->nonCompliantOrgPolicy = 'distinctio';
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'modi';
    $request->fields = 'qui';
    $request->key = 'aliquid';
    $request->name = 'Isaac Aufderhar';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->assuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledge($request, $requestSecurity);

    if ($response->googleCloudAssuredworkloadsV1AcknowledgeViolationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## assuredworkloadsOrganizationsLocationsWorkloadsViolationsGet

Retrieves Assured Workload Violation based on ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempore';
    $request->fields = 'labore';
    $request->key = 'delectus';
    $request->name = 'Ethel Roob';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'necessitatibus';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->assuredworkloadsOrganizationsLocationsWorkloadsViolationsGet($request, $requestSecurity);

    if ($response->googleCloudAssuredworkloadsV1Violation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## assuredworkloadsOrganizationsLocationsWorkloadsViolationsList

Lists the Violations in the AssuredWorkload Environment. Callers may also choose to read across multiple Workloads as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of workload-id in the parent. Format `organizations/{org_id}/locations/{location}/workloads/-`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->fields = 'in';
    $request->filter = 'in';
    $request->intervalEndTime = 'illum';
    $request->intervalStartTime = 'maiores';
    $request->key = 'rerum';
    $request->oauthToken = 'dicta';
    $request->pageSize = 297437;
    $request->pageToken = 'cumque';
    $request->parent = 'facere';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->assuredworkloadsOrganizationsLocationsWorkloadsViolationsList($request, $requestSecurity);

    if ($response->googleCloudAssuredworkloadsV1ListViolationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
