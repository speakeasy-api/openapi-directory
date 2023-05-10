# projects

### Available Operations

* [osconfigProjectsLocationsInstanceOSPoliciesCompliancesList](#osconfigprojectslocationsinstanceospoliciescomplianceslist) - List OS policies compliance data for all Compute Engine VM instances in the specified zone.
* [osconfigProjectsLocationsInstancesInventoriesList](#osconfigprojectslocationsinstancesinventorieslist) - List inventory data for all VM instances in the specified zone.
* [osconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsList](#osconfigprojectslocationsinstancesospolicyassignmentsreportslist) - List OS policy asssignment reports for all Compute Engine VM instances in the specified zone.
* [osconfigProjectsLocationsInstancesVulnerabilityReportsList](#osconfigprojectslocationsinstancesvulnerabilityreportslist) - List vulnerability reports for all VM instances in the specified zone.
* [osconfigProjectsLocationsOsPolicyAssignmentsCreate](#osconfigprojectslocationsospolicyassignmentscreate) - Create an OS policy assignment. This method also creates the first revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).
* [osconfigProjectsLocationsOsPolicyAssignmentsDelete](#osconfigprojectslocationsospolicyassignmentsdelete) - Delete the OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. If the LRO completes and is not cancelled, all revisions associated with the OS policy assignment are deleted. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).
* [osconfigProjectsLocationsOsPolicyAssignmentsList](#osconfigprojectslocationsospolicyassignmentslist) - List the OS policy assignments under the parent resource. For each OS policy assignment, the latest revision is returned.
* [osconfigProjectsLocationsOsPolicyAssignmentsListRevisions](#osconfigprojectslocationsospolicyassignmentslistrevisions) - List the OS policy assignment revisions for a given OS policy assignment.
* [osconfigProjectsLocationsOsPolicyAssignmentsOperationsCancel](#osconfigprojectslocationsospolicyassignmentsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [osconfigProjectsLocationsOsPolicyAssignmentsOperationsGet](#osconfigprojectslocationsospolicyassignmentsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [osconfigProjectsLocationsOsPolicyAssignmentsPatch](#osconfigprojectslocationsospolicyassignmentspatch) - Update an existing OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).

## osconfigProjectsLocationsInstanceOSPoliciesCompliancesList

List OS policies compliance data for all Compute Engine VM instances in the specified zone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->fields = 'suscipit';
    $request->filter = 'molestiae';
    $request->key = 'minus';
    $request->oauthToken = 'placeat';
    $request->pageSize = 528895;
    $request->pageToken = 'iusto';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsLocationsInstanceOSPoliciesCompliancesList($request, $requestSecurity);

    if ($response->listInstanceOSPoliciesCompliancesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osconfigProjectsLocationsInstancesInventoriesList

List inventory data for all VM instances in the specified zone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsInstancesInventoriesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsInstancesInventoriesListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsInstancesInventoriesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsLocationsInstancesInventoriesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'perferendis';
    $request->filter = 'ipsam';
    $request->key = 'repellendus';
    $request->oauthToken = 'sapiente';
    $request->pageSize = 778157;
    $request->pageToken = 'odit';
    $request->parent = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'molestiae';
    $request->view = OsconfigProjectsLocationsInstancesInventoriesListViewEnum::FULL;

    $requestSecurity = new OsconfigProjectsLocationsInstancesInventoriesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsLocationsInstancesInventoriesList($request, $requestSecurity);

    if ($response->listInventoriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsList

List OS policy asssignment reports for all Compute Engine VM instances in the specified zone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'esse';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'porro';
    $request->fields = 'dolorum';
    $request->filter = 'dicta';
    $request->key = 'nam';
    $request->oauthToken = 'officia';
    $request->pageSize = 582020;
    $request->pageToken = 'fugit';
    $request->parent = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsList($request, $requestSecurity);

    if ($response->listOSPolicyAssignmentReportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osconfigProjectsLocationsInstancesVulnerabilityReportsList

List vulnerability reports for all VM instances in the specified zone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsInstancesVulnerabilityReportsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsInstancesVulnerabilityReportsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsLocationsInstancesVulnerabilityReportsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'modi';
    $request->fields = 'qui';
    $request->filter = 'impedit';
    $request->key = 'cum';
    $request->oauthToken = 'esse';
    $request->pageSize = 216550;
    $request->pageToken = 'excepturi';
    $request->parent = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new OsconfigProjectsLocationsInstancesVulnerabilityReportsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsLocationsInstancesVulnerabilityReportsList($request, $requestSecurity);

    if ($response->listVulnerabilityReportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osconfigProjectsLocationsOsPolicyAssignmentsCreate

Create an OS policy assignment. This method also creates the first revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyAssignmentInput;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyAssignmentInstanceFilter;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyAssignmentLabelSet;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyAssignmentInstanceFilterInventory;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicy;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceGroup;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyInventoryFilter;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyOSFilter;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResource;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceExecResource;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceExecResourceExec;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceFile;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceFileGcs;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceFileRemote;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceExecResourceExecInterpreterEnum;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceFileResource;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceFileResourceStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourcePackageResource;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourcePackageResourceAPT;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourcePackageResourceDeb;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourcePackageResourceDesiredStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourcePackageResourceGooGet;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourcePackageResourceMSI;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourcePackageResourceRPM;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourcePackageResourceYUM;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourcePackageResourceZypper;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceRepositoryResource;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceRepositoryResourceAptRepository;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceRepositoryResourceGooRepository;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceRepositoryResourceYumRepository;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceRepositoryResourceZypperRepository;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyAssignmentRollout;
use \OpenAPI\OpenAPI\Models\Shared\FixedOrPercent;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsOsPolicyAssignmentsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->osPolicyAssignmentInput = new OSPolicyAssignmentInput();
    $request->osPolicyAssignmentInput->description = 'iste';
    $request->osPolicyAssignmentInput->etag = 'dolor';
    $request->osPolicyAssignmentInput->instanceFilter = new OSPolicyAssignmentInstanceFilter();
    $request->osPolicyAssignmentInput->instanceFilter->all = false;
    $request->osPolicyAssignmentInput->instanceFilter->exclusionLabels = [
        new OSPolicyAssignmentLabelSet(),
        new OSPolicyAssignmentLabelSet(),
        new OSPolicyAssignmentLabelSet(),
    ];
    $request->osPolicyAssignmentInput->instanceFilter->inclusionLabels = [
        new OSPolicyAssignmentLabelSet(),
        new OSPolicyAssignmentLabelSet(),
    ];
    $request->osPolicyAssignmentInput->instanceFilter->inventories = [
        new OSPolicyAssignmentInstanceFilterInventory(),
        new OSPolicyAssignmentInstanceFilterInventory(),
        new OSPolicyAssignmentInstanceFilterInventory(),
        new OSPolicyAssignmentInstanceFilterInventory(),
    ];
    $request->osPolicyAssignmentInput->instanceFilter->osShortNames = [
        'fuga',
        'in',
        'corporis',
        'iste',
    ];
    $request->osPolicyAssignmentInput->name = 'Mr. Kerry Predovic';
    $request->osPolicyAssignmentInput->osPolicies = [
        new OSPolicy(),
        new OSPolicy(),
        new OSPolicy(),
    ];
    $request->osPolicyAssignmentInput->rollout = new OSPolicyAssignmentRollout();
    $request->osPolicyAssignmentInput->rollout->disruptionBudget = new FixedOrPercent();
    $request->osPolicyAssignmentInput->rollout->disruptionBudget->fixed = 653140;
    $request->osPolicyAssignmentInput->rollout->disruptionBudget->percent = 670638;
    $request->osPolicyAssignmentInput->rollout->minWaitDuration = 'dolores';
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'explicabo';
    $request->fields = 'nobis';
    $request->key = 'enim';
    $request->oauthToken = 'omnis';
    $request->osPolicyAssignmentId = 'nemo';
    $request->parent = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new OsconfigProjectsLocationsOsPolicyAssignmentsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsLocationsOsPolicyAssignmentsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osconfigProjectsLocationsOsPolicyAssignmentsDelete

Delete the OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. If the LRO completes and is not cancelled, all revisions associated with the OS policy assignment are deleted. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsOsPolicyAssignmentsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsOsPolicyAssignmentsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsLocationsOsPolicyAssignmentsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->fields = 'mollitia';
    $request->key = 'dolorem';
    $request->name = 'Carlos Ziemann';
    $request->oauthToken = 'numquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new OsconfigProjectsLocationsOsPolicyAssignmentsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsLocationsOsPolicyAssignmentsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osconfigProjectsLocationsOsPolicyAssignmentsList

List the OS policy assignments under the parent resource. For each OS policy assignment, the latest revision is returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsOsPolicyAssignmentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsOsPolicyAssignmentsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsLocationsOsPolicyAssignmentsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'error';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'vitae';
    $request->key = 'laborum';
    $request->oauthToken = 'animi';
    $request->pageSize = 317202;
    $request->pageToken = 'odit';
    $request->parent = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'sequi';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new OsconfigProjectsLocationsOsPolicyAssignmentsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsLocationsOsPolicyAssignmentsList($request, $requestSecurity);

    if ($response->listOSPolicyAssignmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osconfigProjectsLocationsOsPolicyAssignmentsListRevisions

List the OS policy assignment revisions for a given OS policy assignment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quasi';
    $request->fields = 'error';
    $request->key = 'temporibus';
    $request->name = 'Ryan Witting';
    $request->oauthToken = 'nihil';
    $request->pageSize = 509624;
    $request->pageToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsLocationsOsPolicyAssignmentsListRevisions($request, $requestSecurity);

    if ($response->listOSPolicyAssignmentRevisionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osconfigProjectsLocationsOsPolicyAssignmentsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'doloremque' => 'reprehenderit',
    ];
    $request->accessToken = 'ut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'corporis';
    $request->key = 'dolore';
    $request->name = 'Mildred Pfeffer';
    $request->oauthToken = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'repudiandae';
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsLocationsOsPolicyAssignmentsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osconfigProjectsLocationsOsPolicyAssignmentsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'molestias';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'pariatur';
    $request->fields = 'modi';
    $request->key = 'praesentium';
    $request->name = 'Grady Botsford';
    $request->oauthToken = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'itaque';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'enim';
    $request->view = OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetViewEnum::INVENTORY_VIEW_UNSPECIFIED;

    $requestSecurity = new OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsLocationsOsPolicyAssignmentsOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## osconfigProjectsLocationsOsPolicyAssignmentsPatch

Update an existing OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsOsPolicyAssignmentsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyAssignmentInput;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyAssignmentInstanceFilter;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyAssignmentLabelSet;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyAssignmentInstanceFilterInventory;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicy;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceGroup;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyInventoryFilter;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyOSFilter;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResource;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceExecResource;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceExecResourceExec;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceFile;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceFileGcs;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceFileRemote;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceExecResourceExecInterpreterEnum;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceFileResource;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceFileResourceStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourcePackageResource;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourcePackageResourceAPT;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourcePackageResourceDeb;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourcePackageResourceDesiredStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourcePackageResourceGooGet;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourcePackageResourceMSI;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourcePackageResourceRPM;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourcePackageResourceYUM;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourcePackageResourceZypper;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceRepositoryResource;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceRepositoryResourceAptRepository;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceRepositoryResourceGooRepository;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceRepositoryResourceYumRepository;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyResourceRepositoryResourceZypperRepository;
use \OpenAPI\OpenAPI\Models\Shared\OSPolicyAssignmentRollout;
use \OpenAPI\OpenAPI\Models\Shared\FixedOrPercent;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\OsconfigProjectsLocationsOsPolicyAssignmentsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OsconfigProjectsLocationsOsPolicyAssignmentsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->osPolicyAssignmentInput = new OSPolicyAssignmentInput();
    $request->osPolicyAssignmentInput->description = 'quibusdam';
    $request->osPolicyAssignmentInput->etag = 'explicabo';
    $request->osPolicyAssignmentInput->instanceFilter = new OSPolicyAssignmentInstanceFilter();
    $request->osPolicyAssignmentInput->instanceFilter->all = false;
    $request->osPolicyAssignmentInput->instanceFilter->exclusionLabels = [
        new OSPolicyAssignmentLabelSet(),
        new OSPolicyAssignmentLabelSet(),
        new OSPolicyAssignmentLabelSet(),
    ];
    $request->osPolicyAssignmentInput->instanceFilter->inclusionLabels = [
        new OSPolicyAssignmentLabelSet(),
        new OSPolicyAssignmentLabelSet(),
        new OSPolicyAssignmentLabelSet(),
    ];
    $request->osPolicyAssignmentInput->instanceFilter->inventories = [
        new OSPolicyAssignmentInstanceFilterInventory(),
        new OSPolicyAssignmentInstanceFilterInventory(),
        new OSPolicyAssignmentInstanceFilterInventory(),
        new OSPolicyAssignmentInstanceFilterInventory(),
    ];
    $request->osPolicyAssignmentInput->instanceFilter->osShortNames = [
        'modi',
        'qui',
    ];
    $request->osPolicyAssignmentInput->name = 'Mr. Shelly Lueilwitz';
    $request->osPolicyAssignmentInput->osPolicies = [
        new OSPolicy(),
        new OSPolicy(),
    ];
    $request->osPolicyAssignmentInput->rollout = new OSPolicyAssignmentRollout();
    $request->osPolicyAssignmentInput->rollout->disruptionBudget = new FixedOrPercent();
    $request->osPolicyAssignmentInput->rollout->disruptionBudget->fixed = 4695;
    $request->osPolicyAssignmentInput->rollout->disruptionBudget->percent = 146441;
    $request->osPolicyAssignmentInput->rollout->minWaitDuration = 'dolorum';
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'facilis';
    $request->fields = 'tempore';
    $request->key = 'labore';
    $request->name = 'Andre Franey';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->updateMask = 'necessitatibus';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new OsconfigProjectsLocationsOsPolicyAssignmentsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->osconfigProjectsLocationsOsPolicyAssignmentsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
