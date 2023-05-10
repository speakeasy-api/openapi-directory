# projects

### Available Operations

* [migrationcenterProjectsLocationsAssetsAggregateValues](#migrationcenterprojectslocationsassetsaggregatevalues) - Aggregates the requested fields based on provided function.
* [migrationcenterProjectsLocationsAssetsBatchDelete](#migrationcenterprojectslocationsassetsbatchdelete) - Deletes list of Assets.
* [migrationcenterProjectsLocationsAssetsBatchUpdate](#migrationcenterprojectslocationsassetsbatchupdate) - Updates the parameters of a list of assets.
* [migrationcenterProjectsLocationsAssetsList](#migrationcenterprojectslocationsassetslist) - Lists all the assets in a given project and location.
* [migrationcenterProjectsLocationsAssetsReportAssetFrames](#migrationcenterprojectslocationsassetsreportassetframes) - Reports a set of frames.
* [migrationcenterProjectsLocationsGroupsAddAssets](#migrationcenterprojectslocationsgroupsaddassets) - Adds assets to a group.
* [migrationcenterProjectsLocationsGroupsCreate](#migrationcenterprojectslocationsgroupscreate) - Creates a new group in a given project and location.
* [migrationcenterProjectsLocationsGroupsList](#migrationcenterprojectslocationsgroupslist) - Lists all groups in a given project and location.
* [migrationcenterProjectsLocationsGroupsRemoveAssets](#migrationcenterprojectslocationsgroupsremoveassets) - Removes assets from a group.
* [migrationcenterProjectsLocationsImportJobsCreate](#migrationcenterprojectslocationsimportjobscreate) - Creates an import job.
* [migrationcenterProjectsLocationsImportJobsImportDataFilesCreate](#migrationcenterprojectslocationsimportjobsimportdatafilescreate) - Creates an import data file.
* [migrationcenterProjectsLocationsImportJobsImportDataFilesList](#migrationcenterprojectslocationsimportjobsimportdatafileslist) - List import data files.
* [migrationcenterProjectsLocationsImportJobsList](#migrationcenterprojectslocationsimportjobslist) - Lists all import jobs.
* [migrationcenterProjectsLocationsImportJobsRun](#migrationcenterprojectslocationsimportjobsrun) - Runs an import job.
* [migrationcenterProjectsLocationsImportJobsValidate](#migrationcenterprojectslocationsimportjobsvalidate) - Validates an import job.
* [migrationcenterProjectsLocationsList](#migrationcenterprojectslocationslist) - Lists information about the supported locations for this service.
* [migrationcenterProjectsLocationsOperationsCancel](#migrationcenterprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [migrationcenterProjectsLocationsOperationsList](#migrationcenterprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [migrationcenterProjectsLocationsPreferenceSetsCreate](#migrationcenterprojectslocationspreferencesetscreate) - Creates a new preference set in a given project and location.
* [migrationcenterProjectsLocationsPreferenceSetsList](#migrationcenterprojectslocationspreferencesetslist) - Lists all the preference sets in a given project and location.
* [migrationcenterProjectsLocationsReportConfigsCreate](#migrationcenterprojectslocationsreportconfigscreate) - Creates a report configuration.
* [migrationcenterProjectsLocationsReportConfigsList](#migrationcenterprojectslocationsreportconfigslist) - Lists ReportConfigs in a given project and location.
* [migrationcenterProjectsLocationsReportConfigsReportsCreate](#migrationcenterprojectslocationsreportconfigsreportscreate) - Creates a report.
* [migrationcenterProjectsLocationsReportConfigsReportsList](#migrationcenterprojectslocationsreportconfigsreportslist) - Lists Reports in a given ReportConfig.
* [migrationcenterProjectsLocationsSourcesCreate](#migrationcenterprojectslocationssourcescreate) - Creates a new source in a given project and location.
* [migrationcenterProjectsLocationsSourcesDelete](#migrationcenterprojectslocationssourcesdelete) - Deletes a source.
* [migrationcenterProjectsLocationsSourcesErrorFramesGet](#migrationcenterprojectslocationssourceserrorframesget) - Gets the details of an error frame.
* [migrationcenterProjectsLocationsSourcesErrorFramesList](#migrationcenterprojectslocationssourceserrorframeslist) - Lists all error frames in a given source and location.
* [migrationcenterProjectsLocationsSourcesList](#migrationcenterprojectslocationssourceslist) - Lists all the sources in a given project and location.
* [migrationcenterProjectsLocationsSourcesPatch](#migrationcenterprojectslocationssourcespatch) - Updates the parameters of a source.

## migrationcenterProjectsLocationsAssetsAggregateValues

Aggregates the requested fields based on provided function.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsAssetsAggregateValuesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AggregateAssetsValuesRequest;
use \OpenAPI\OpenAPI\Models\Shared\Aggregation;
use \OpenAPI\OpenAPI\Models\Shared\AggregationHistogram;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsAssetsAggregateValuesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsAssetsAggregateValuesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->aggregateAssetsValuesRequest = new AggregateAssetsValuesRequest();
    $request->aggregateAssetsValuesRequest->aggregations = [
        new Aggregation(),
        new Aggregation(),
        new Aggregation(),
        new Aggregation(),
    ];
    $request->aggregateAssetsValuesRequest->filter = 'ipsa';
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->fields = 'molestiae';
    $request->key = 'minus';
    $request->oauthToken = 'placeat';
    $request->parent = 'voluptatum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'nisi';

    $requestSecurity = new MigrationcenterProjectsLocationsAssetsAggregateValuesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsAssetsAggregateValues($request, $requestSecurity);

    if ($response->aggregateAssetsValuesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationcenterProjectsLocationsAssetsBatchDelete

Deletes list of Assets.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsAssetsBatchDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchDeleteAssetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsAssetsBatchDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsAssetsBatchDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchDeleteAssetsRequest = new BatchDeleteAssetsRequest();
    $request->batchDeleteAssetsRequest->allowMissing = false;
    $request->batchDeleteAssetsRequest->names = [
        'ab',
        'quis',
        'veritatis',
        'deserunt',
    ];
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repellendus';
    $request->fields = 'sapiente';
    $request->key = 'quo';
    $request->oauthToken = 'odit';
    $request->parent = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new MigrationcenterProjectsLocationsAssetsBatchDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsAssetsBatchDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationcenterProjectsLocationsAssetsBatchUpdate

Updates the parameters of a list of assets.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsAssetsBatchUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchUpdateAssetsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAssetRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\AssetInput;
use \OpenAPI\OpenAPI\Models\Shared\AssetPerformanceData;
use \OpenAPI\OpenAPI\Models\Shared\DailyResourceUsageAggregation;
use \OpenAPI\OpenAPI\Models\Shared\DailyResourceUsageAggregationCPU;
use \OpenAPI\OpenAPI\Models\Shared\DailyResourceUsageAggregationStats;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\DailyResourceUsageAggregationDisk;
use \OpenAPI\OpenAPI\Models\Shared\DailyResourceUsageAggregationMemory;
use \OpenAPI\OpenAPI\Models\Shared\DailyResourceUsageAggregationNetwork;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachineDetails;
use \OpenAPI\OpenAPI\Models\Shared\GuestOsDetails;
use \OpenAPI\OpenAPI\Models\Shared\GuestConfigDetails;
use \OpenAPI\OpenAPI\Models\Shared\FstabEntryList;
use \OpenAPI\OpenAPI\Models\Shared\FstabEntry;
use \OpenAPI\OpenAPI\Models\Shared\HostsEntryList;
use \OpenAPI\OpenAPI\Models\Shared\HostsEntry;
use \OpenAPI\OpenAPI\Models\Shared\NfsExportList;
use \OpenAPI\OpenAPI\Models\Shared\NfsExport;
use \OpenAPI\OpenAPI\Models\Shared\Selinux;
use \OpenAPI\OpenAPI\Models\Shared\GuestRuntimeDetails;
use \OpenAPI\OpenAPI\Models\Shared\GuestInstalledApplicationList;
use \OpenAPI\OpenAPI\Models\Shared\GuestInstalledApplication;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeNetworkInfo;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConnectionList;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConnection;
use \OpenAPI\OpenAPI\Models\Shared\DateTime;
use \OpenAPI\OpenAPI\Models\Shared\TimeZone;
use \OpenAPI\OpenAPI\Models\Shared\OpenFileList;
use \OpenAPI\OpenAPI\Models\Shared\OpenFileDetails;
use \OpenAPI\OpenAPI\Models\Shared\RunningProcessList;
use \OpenAPI\OpenAPI\Models\Shared\RunningProcess;
use \OpenAPI\OpenAPI\Models\Shared\RunningServiceList;
use \OpenAPI\OpenAPI\Models\Shared\RunningService;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachineDetailsOsFamilyEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlatformDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2PlatformDetails;
use \OpenAPI\OpenAPI\Models\Shared\AzureVmPlatformDetails;
use \OpenAPI\OpenAPI\Models\Shared\GenericPlatformDetails;
use \OpenAPI\OpenAPI\Models\Shared\PhysicalPlatformDetails;
use \OpenAPI\OpenAPI\Models\Shared\VmwarePlatformDetails;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachineArchitectureDetails;
use \OpenAPI\OpenAPI\Models\Shared\BiosDetails;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachineArchitectureDetailsHyperthreadingEnum;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachineDiskDetails;
use \OpenAPI\OpenAPI\Models\Shared\DiskEntryList;
use \OpenAPI\OpenAPI\Models\Shared\DiskEntry;
use \OpenAPI\OpenAPI\Models\Shared\DiskPartitionList;
use \OpenAPI\OpenAPI\Models\Shared\DiskPartition;
use \OpenAPI\OpenAPI\Models\Shared\VmwareDiskConfig;
use \OpenAPI\OpenAPI\Models\Shared\VmwareDiskConfigBackingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachineNetworkDetails;
use \OpenAPI\OpenAPI\Models\Shared\NetworkAdapterList;
use \OpenAPI\OpenAPI\Models\Shared\NetworkAdapterDetails;
use \OpenAPI\OpenAPI\Models\Shared\NetworkAddressList;
use \OpenAPI\OpenAPI\Models\Shared\NetworkAddress;
use \OpenAPI\OpenAPI\Models\Shared\NetworkAddressAssignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsAssetsBatchUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsAssetsBatchUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchUpdateAssetsRequestInput = new BatchUpdateAssetsRequestInput();
    $request->batchUpdateAssetsRequestInput->requests = [
        new UpdateAssetRequestInput(),
        new UpdateAssetRequestInput(),
        new UpdateAssetRequestInput(),
        new UpdateAssetRequestInput(),
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

    $requestSecurity = new MigrationcenterProjectsLocationsAssetsBatchUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsAssetsBatchUpdate($request, $requestSecurity);

    if ($response->batchUpdateAssetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationcenterProjectsLocationsAssetsList

Lists all the assets in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsAssetsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsAssetsListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsAssetsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsAssetsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'optio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'beatae';
    $request->fields = 'commodi';
    $request->filter = 'molestiae';
    $request->key = 'modi';
    $request->oauthToken = 'qui';
    $request->orderBy = 'impedit';
    $request->pageSize = 736918;
    $request->pageToken = 'esse';
    $request->parent = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'perferendis';
    $request->view = MigrationcenterProjectsLocationsAssetsListViewEnum::ASSET_VIEW_BASIC;

    $requestSecurity = new MigrationcenterProjectsLocationsAssetsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsAssetsList($request, $requestSecurity);

    if ($response->listAssetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationcenterProjectsLocationsAssetsReportAssetFrames

Reports a set of frames.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsAssetsReportAssetFramesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Frames;
use \OpenAPI\OpenAPI\Models\Shared\AssetFrame;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceSample;
use \OpenAPI\OpenAPI\Models\Shared\CpuUsageSample;
use \OpenAPI\OpenAPI\Models\Shared\DiskUsageSample;
use \OpenAPI\OpenAPI\Models\Shared\MemoryUsageSample;
use \OpenAPI\OpenAPI\Models\Shared\NetworkUsageSample;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachineDetails;
use \OpenAPI\OpenAPI\Models\Shared\GuestOsDetails;
use \OpenAPI\OpenAPI\Models\Shared\GuestConfigDetails;
use \OpenAPI\OpenAPI\Models\Shared\FstabEntryList;
use \OpenAPI\OpenAPI\Models\Shared\FstabEntry;
use \OpenAPI\OpenAPI\Models\Shared\HostsEntryList;
use \OpenAPI\OpenAPI\Models\Shared\HostsEntry;
use \OpenAPI\OpenAPI\Models\Shared\NfsExportList;
use \OpenAPI\OpenAPI\Models\Shared\NfsExport;
use \OpenAPI\OpenAPI\Models\Shared\Selinux;
use \OpenAPI\OpenAPI\Models\Shared\GuestRuntimeDetails;
use \OpenAPI\OpenAPI\Models\Shared\GuestInstalledApplicationList;
use \OpenAPI\OpenAPI\Models\Shared\GuestInstalledApplication;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeNetworkInfo;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConnectionList;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConnection;
use \OpenAPI\OpenAPI\Models\Shared\DateTime;
use \OpenAPI\OpenAPI\Models\Shared\TimeZone;
use \OpenAPI\OpenAPI\Models\Shared\OpenFileList;
use \OpenAPI\OpenAPI\Models\Shared\OpenFileDetails;
use \OpenAPI\OpenAPI\Models\Shared\RunningProcessList;
use \OpenAPI\OpenAPI\Models\Shared\RunningProcess;
use \OpenAPI\OpenAPI\Models\Shared\RunningServiceList;
use \OpenAPI\OpenAPI\Models\Shared\RunningService;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachineDetailsOsFamilyEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlatformDetails;
use \OpenAPI\OpenAPI\Models\Shared\AwsEc2PlatformDetails;
use \OpenAPI\OpenAPI\Models\Shared\AzureVmPlatformDetails;
use \OpenAPI\OpenAPI\Models\Shared\GenericPlatformDetails;
use \OpenAPI\OpenAPI\Models\Shared\PhysicalPlatformDetails;
use \OpenAPI\OpenAPI\Models\Shared\VmwarePlatformDetails;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachineArchitectureDetails;
use \OpenAPI\OpenAPI\Models\Shared\BiosDetails;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachineArchitectureDetailsHyperthreadingEnum;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachineDiskDetails;
use \OpenAPI\OpenAPI\Models\Shared\DiskEntryList;
use \OpenAPI\OpenAPI\Models\Shared\DiskEntry;
use \OpenAPI\OpenAPI\Models\Shared\DiskPartitionList;
use \OpenAPI\OpenAPI\Models\Shared\DiskPartition;
use \OpenAPI\OpenAPI\Models\Shared\VmwareDiskConfig;
use \OpenAPI\OpenAPI\Models\Shared\VmwareDiskConfigBackingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachineNetworkDetails;
use \OpenAPI\OpenAPI\Models\Shared\NetworkAdapterList;
use \OpenAPI\OpenAPI\Models\Shared\NetworkAdapterDetails;
use \OpenAPI\OpenAPI\Models\Shared\NetworkAddressList;
use \OpenAPI\OpenAPI\Models\Shared\NetworkAddress;
use \OpenAPI\OpenAPI\Models\Shared\NetworkAddressAssignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsAssetsReportAssetFramesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsAssetsReportAssetFramesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->frames = new Frames();
    $request->frames->framesData = [
        new AssetFrame(),
    ];
    $request->accessToken = 'iste';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->fields = 'laboriosam';
    $request->key = 'hic';
    $request->oauthToken = 'saepe';
    $request->parent = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->source = 'corporis';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new MigrationcenterProjectsLocationsAssetsReportAssetFramesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsAssetsReportAssetFrames($request, $requestSecurity);

    if ($response->reportAssetFramesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationcenterProjectsLocationsGroupsAddAssets

Adds assets to a group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsGroupsAddAssetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddAssetsToGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssetList;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsGroupsAddAssetsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsGroupsAddAssetsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->addAssetsToGroupRequest = new AddAssetsToGroupRequest();
    $request->addAssetsToGroupRequest->allowExisting = false;
    $request->addAssetsToGroupRequest->assets = new AssetList();
    $request->addAssetsToGroupRequest->assets->assetIds = [
        'architecto',
        'ipsa',
        'reiciendis',
    ];
    $request->addAssetsToGroupRequest->requestId = 'est';
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolores';
    $request->fields = 'dolorem';
    $request->group = 'corporis';
    $request->key = 'explicabo';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'nemo';

    $requestSecurity = new MigrationcenterProjectsLocationsGroupsAddAssetsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsGroupsAddAssets($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationcenterProjectsLocationsGroupsCreate

Creates a new group in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsGroupsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GroupInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsGroupsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsGroupsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->groupInput = new GroupInput();
    $request->groupInput->description = 'excepturi';
    $request->groupInput->displayName = 'accusantium';
    $request->groupInput->labels = [
        'culpa' => 'doloribus',
        'sapiente' => 'architecto',
    ];
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'culpa';
    $request->fields = 'consequuntur';
    $request->groupId = 'repellat';
    $request->key = 'mollitia';
    $request->oauthToken = 'occaecati';
    $request->parent = 'numquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->requestId = 'quam';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'velit';

    $requestSecurity = new MigrationcenterProjectsLocationsGroupsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsGroupsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationcenterProjectsLocationsGroupsList

Lists all groups in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsGroupsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsGroupsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vitae';
    $request->fields = 'laborum';
    $request->filter = 'animi';
    $request->key = 'enim';
    $request->oauthToken = 'odit';
    $request->orderBy = 'quo';
    $request->pageSize = 196582;
    $request->pageToken = 'tenetur';
    $request->parent = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'aut';

    $requestSecurity = new MigrationcenterProjectsLocationsGroupsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsGroupsList($request, $requestSecurity);

    if ($response->listGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationcenterProjectsLocationsGroupsRemoveAssets

Removes assets from a group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsGroupsRemoveAssetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveAssetsFromGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssetList;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsGroupsRemoveAssetsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsGroupsRemoveAssetsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->removeAssetsFromGroupRequest = new RemoveAssetsFromGroupRequest();
    $request->removeAssetsFromGroupRequest->allowMissing = false;
    $request->removeAssetsFromGroupRequest->assets = new AssetList();
    $request->removeAssetsFromGroupRequest->assets->assetIds = [
        'temporibus',
        'laborum',
        'quasi',
    ];
    $request->removeAssetsFromGroupRequest->requestId = 'reiciendis';
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nihil';
    $request->fields = 'praesentium';
    $request->group = 'voluptatibus';
    $request->key = 'ipsa';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new MigrationcenterProjectsLocationsGroupsRemoveAssetsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsGroupsRemoveAssets($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationcenterProjectsLocationsImportJobsCreate

Creates an import job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsImportJobsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImportJobInput;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionReport;
use \OpenAPI\OpenAPI\Models\Shared\ValidationReport;
use \OpenAPI\OpenAPI\Models\Shared\FileValidationReport;
use \OpenAPI\OpenAPI\Models\Shared\ImportError;
use \OpenAPI\OpenAPI\Models\Shared\ImportErrorSeverityEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImportRowError;
use \OpenAPI\OpenAPI\Models\Shared\GCSPayloadInfo;
use \OpenAPI\OpenAPI\Models\Shared\GCSPayloadInfoFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\InlinePayloadInfo;
use \OpenAPI\OpenAPI\Models\Shared\InlinePayloadInfoFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\PayloadFile;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsImportJobsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsImportJobsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->importJobInput = new ImportJobInput();
    $request->importJobInput->assetSource = 'reprehenderit';
    $request->importJobInput->displayName = 'ut';
    $request->importJobInput->executionReport = new ExecutionReport();
    $request->importJobInput->executionReport->executionErrors = new ValidationReport();
    $request->importJobInput->executionReport->executionErrors->fileValidations = [
        new FileValidationReport(),
        new FileValidationReport(),
        new FileValidationReport(),
        new FileValidationReport(),
    ];
    $request->importJobInput->executionReport->executionErrors->jobErrors = [
        new ImportError(),
    ];
    $request->importJobInput->executionReport->framesReported = 359444;
    $request->importJobInput->executionReport->jobErrors = [
        new ImportError(),
        new ImportError(),
    ];
    $request->importJobInput->executionReport->totalRowsCount = 480894;
    $request->importJobInput->gcsPayload = new GCSPayloadInfo();
    $request->importJobInput->gcsPayload->format = GCSPayloadInfoFormatEnum::IMPORT_JOB_FORMAT_UNSPECIFIED;
    $request->importJobInput->gcsPayload->path = 'harum';
    $request->importJobInput->inlinePayload = new InlinePayloadInfo();
    $request->importJobInput->inlinePayload->format = InlinePayloadInfoFormatEnum::IMPORT_JOB_FORMAT_RVTOOLS_XLSX;
    $request->importJobInput->inlinePayload->payload = [
        new PayloadFile(),
        new PayloadFile(),
        new PayloadFile(),
        new PayloadFile(),
    ];
    $request->importJobInput->labels = [
        'repudiandae' => 'quae',
        'ipsum' => 'quidem',
    ];
    $request->importJobInput->validationReport = new ValidationReport();
    $request->importJobInput->validationReport->fileValidations = [
        new FileValidationReport(),
        new FileValidationReport(),
        new FileValidationReport(),
    ];
    $request->importJobInput->validationReport->jobErrors = [
        new ImportError(),
        new ImportError(),
        new ImportError(),
    ];
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'praesentium';
    $request->fields = 'rem';
    $request->importJobId = 'voluptates';
    $request->key = 'quasi';
    $request->oauthToken = 'repudiandae';
    $request->parent = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->requestId = 'itaque';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new MigrationcenterProjectsLocationsImportJobsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsImportJobsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationcenterProjectsLocationsImportJobsImportDataFilesCreate

Creates an import data file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsImportJobsImportDataFilesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImportDataFileInput;
use \OpenAPI\OpenAPI\Models\Shared\ImportDataFileFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsImportJobsImportDataFilesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsImportJobsImportDataFilesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->importDataFileInput = new ImportDataFileInput();
    $request->importDataFileInput->displayName = 'est';
    $request->importDataFileInput->format = ImportDataFileFormatEnum::IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV;
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'distinctio';
    $request->fields = 'quibusdam';
    $request->importDataFileId = 'labore';
    $request->key = 'modi';
    $request->oauthToken = 'qui';
    $request->parent = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'cupiditate';
    $request->requestId = 'quos';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'magni';

    $requestSecurity = new MigrationcenterProjectsLocationsImportJobsImportDataFilesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsImportJobsImportDataFilesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationcenterProjectsLocationsImportJobsImportDataFilesList

List import data files.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsImportJobsImportDataFilesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsImportJobsImportDataFilesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsImportJobsImportDataFilesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugit';
    $request->fields = 'dolorum';
    $request->filter = 'excepturi';
    $request->key = 'tempora';
    $request->oauthToken = 'facilis';
    $request->orderBy = 'tempore';
    $request->pageSize = 288476;
    $request->pageToken = 'delectus';
    $request->parent = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new MigrationcenterProjectsLocationsImportJobsImportDataFilesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsImportJobsImportDataFilesList($request, $requestSecurity);

    if ($response->listImportDataFilesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationcenterProjectsLocationsImportJobsList

Lists all import jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsImportJobsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsImportJobsListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsImportJobsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsImportJobsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'officia';
    $request->filter = 'dolor';
    $request->key = 'debitis';
    $request->oauthToken = 'a';
    $request->orderBy = 'dolorum';
    $request->pageSize = 447125;
    $request->pageToken = 'in';
    $request->parent = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'dicta';
    $request->view = MigrationcenterProjectsLocationsImportJobsListViewEnum::IMPORT_JOB_VIEW_UNSPECIFIED;

    $requestSecurity = new MigrationcenterProjectsLocationsImportJobsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsImportJobsList($request, $requestSecurity);

    if ($response->listImportJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationcenterProjectsLocationsImportJobsRun

Runs an import job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsImportJobsRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RunImportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsImportJobsRunSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsImportJobsRunRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->runImportJobRequest = new RunImportJobRequest();
    $request->runImportJobRequest->requestId = 'facere';
    $request->accessToken = 'ea';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laborum';
    $request->fields = 'accusamus';
    $request->key = 'non';
    $request->name = 'Jon Tillman';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'blanditiis';

    $requestSecurity = new MigrationcenterProjectsLocationsImportJobsRunSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsImportJobsRun($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationcenterProjectsLocationsImportJobsValidate

Validates an import job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsImportJobsValidateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ValidateImportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsImportJobsValidateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsImportJobsValidateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->validateImportJobRequest = new ValidateImportJobRequest();
    $request->validateImportJobRequest->requestId = 'sapiente';
    $request->accessToken = 'amet';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->fields = 'vel';
    $request->key = 'natus';
    $request->name = 'Fernando Aufderhar';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new MigrationcenterProjectsLocationsImportJobsValidateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsImportJobsValidate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationcenterProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eum';
    $request->fields = 'vero';
    $request->filter = 'aspernatur';
    $request->key = 'architecto';
    $request->name = 'Frances Marks';
    $request->oauthToken = 'quos';
    $request->pageSize = 574325;
    $request->pageToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new MigrationcenterProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationcenterProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'dolor' => 'necessitatibus',
        'odit' => 'nemo',
    ];
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'debitis';
    $request->key = 'eius';
    $request->name = 'Alfredo Prosacco Sr.';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new MigrationcenterProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationcenterProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->fields = 'pariatur';
    $request->filter = 'accusantium';
    $request->key = 'consequuntur';
    $request->name = 'Miss Nick Cummerata';
    $request->oauthToken = 'pariatur';
    $request->pageSize = 807319;
    $request->pageToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new MigrationcenterProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationcenterProjectsLocationsPreferenceSetsCreate

Creates a new preference set in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsPreferenceSetsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PreferenceSetInput;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachinePreferences;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachinePreferencesCommitmentPlanEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComputeEnginePreferences;
use \OpenAPI\OpenAPI\Models\Shared\ComputeEnginePreferencesLicenseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MachinePreferences;
use \OpenAPI\OpenAPI\Models\Shared\MachineSeries;
use \OpenAPI\OpenAPI\Models\Shared\ComputeEnginePreferencesPersistentDiskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionPreferences;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachinePreferencesSizingOptimizationStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsPreferenceSetsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsPreferenceSetsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->preferenceSetInput = new PreferenceSetInput();
    $request->preferenceSetInput->description = 'ab';
    $request->preferenceSetInput->displayName = 'maiores';
    $request->preferenceSetInput->virtualMachinePreferences = new VirtualMachinePreferences();
    $request->preferenceSetInput->virtualMachinePreferences->commitmentPlan = VirtualMachinePreferencesCommitmentPlanEnum::COMMITMENT_PLAN_ONE_YEAR;
    $request->preferenceSetInput->virtualMachinePreferences->computeEnginePreferences = new ComputeEnginePreferences();
    $request->preferenceSetInput->virtualMachinePreferences->computeEnginePreferences->licenseType = ComputeEnginePreferencesLicenseTypeEnum::LICENSE_TYPE_DEFAULT;
    $request->preferenceSetInput->virtualMachinePreferences->computeEnginePreferences->machinePreferences = new MachinePreferences();
    $request->preferenceSetInput->virtualMachinePreferences->computeEnginePreferences->machinePreferences->allowedMachineSeries = [
        new MachineSeries(),
        new MachineSeries(),
    ];
    $request->preferenceSetInput->virtualMachinePreferences->computeEnginePreferences->persistentDiskType = ComputeEnginePreferencesPersistentDiskTypeEnum::PERSISTENT_DISK_TYPE_STANDARD;
    $request->preferenceSetInput->virtualMachinePreferences->regionPreferences = new RegionPreferences();
    $request->preferenceSetInput->virtualMachinePreferences->regionPreferences->preferredRegions = [
        'eaque',
        'pariatur',
        'nemo',
    ];
    $request->preferenceSetInput->virtualMachinePreferences->sizingOptimizationStrategy = VirtualMachinePreferencesSizingOptimizationStrategyEnum::SIZING_OPTIMIZATION_STRATEGY_AGGRESSIVE;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'amet';
    $request->fields = 'aut';
    $request->key = 'cumque';
    $request->oauthToken = 'corporis';
    $request->parent = 'hic';
    $request->preferenceSetId = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->requestId = 'dolores';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new MigrationcenterProjectsLocationsPreferenceSetsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsPreferenceSetsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationcenterProjectsLocationsPreferenceSetsList

Lists all the preference sets in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsPreferenceSetsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsPreferenceSetsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsPreferenceSetsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nesciunt';
    $request->fields = 'eos';
    $request->key = 'perferendis';
    $request->oauthToken = 'dolores';
    $request->orderBy = 'minus';
    $request->pageSize = 463451;
    $request->pageToken = 'dolor';
    $request->parent = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'nostrum';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'recusandae';

    $requestSecurity = new MigrationcenterProjectsLocationsPreferenceSetsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsPreferenceSetsList($request, $requestSecurity);

    if ($response->listPreferenceSetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationcenterProjectsLocationsReportConfigsCreate

Creates a report configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsReportConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\ReportConfigGroupPreferenceSetAssignment;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsReportConfigsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsReportConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->reportConfigInput = new ReportConfigInput();
    $request->reportConfigInput->description = 'facilis';
    $request->reportConfigInput->displayName = 'perspiciatis';
    $request->reportConfigInput->groupPreferencesetAssignments = [
        new ReportConfigGroupPreferenceSetAssignment(),
    ];
    $request->accessToken = 'porro';
    $request->alt = AltEnum::JSON;
    $request->callback = 'blanditiis';
    $request->fields = 'error';
    $request->key = 'eaque';
    $request->oauthToken = 'occaecati';
    $request->parent = 'rerum';
    $request->prettyPrint = false;
    $request->quotaUser = 'adipisci';
    $request->reportConfigId = 'asperiores';
    $request->requestId = 'earum';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'iste';

    $requestSecurity = new MigrationcenterProjectsLocationsReportConfigsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsReportConfigsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationcenterProjectsLocationsReportConfigsList

Lists ReportConfigs in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsReportConfigsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsReportConfigsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsReportConfigsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'provident';
    $request->fields = 'nobis';
    $request->filter = 'libero';
    $request->key = 'delectus';
    $request->oauthToken = 'quaerat';
    $request->orderBy = 'quos';
    $request->pageSize = 398221;
    $request->pageToken = 'dolorem';
    $request->parent = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new MigrationcenterProjectsLocationsReportConfigsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsReportConfigsList($request, $requestSecurity);

    if ($response->listReportConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationcenterProjectsLocationsReportConfigsReportsCreate

Creates a report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsReportConfigsReportsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportInput;
use \OpenAPI\OpenAPI\Models\Shared\ReportStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportSummary;
use \OpenAPI\OpenAPI\Models\Shared\ReportSummaryAssetAggregateStats;
use \OpenAPI\OpenAPI\Models\Shared\ReportSummaryChartData;
use \OpenAPI\OpenAPI\Models\Shared\ReportSummaryChartDataDataPoint;
use \OpenAPI\OpenAPI\Models\Shared\ReportSummaryHistogramChartData;
use \OpenAPI\OpenAPI\Models\Shared\ReportSummaryHistogramChartDataBucket;
use \OpenAPI\OpenAPI\Models\Shared\ReportSummaryUtilizationChartData;
use \OpenAPI\OpenAPI\Models\Shared\ReportSummaryGroupFinding;
use \OpenAPI\OpenAPI\Models\Shared\ReportSummaryGroupPreferenceSetFinding;
use \OpenAPI\OpenAPI\Models\Shared\ReportSummaryMachineFinding;
use \OpenAPI\OpenAPI\Models\Shared\ReportSummaryMachineFindingAllocatedDiskTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportSummaryMachineSeriesAllocation;
use \OpenAPI\OpenAPI\Models\Shared\MachineSeries;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachinePreferences;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachinePreferencesCommitmentPlanEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComputeEnginePreferences;
use \OpenAPI\OpenAPI\Models\Shared\ComputeEnginePreferencesLicenseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MachinePreferences;
use \OpenAPI\OpenAPI\Models\Shared\ComputeEnginePreferencesPersistentDiskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionPreferences;
use \OpenAPI\OpenAPI\Models\Shared\VirtualMachinePreferencesSizingOptimizationStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\ReportTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsReportConfigsReportsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsReportConfigsReportsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->reportInput = new ReportInput();
    $request->reportInput->description = 'excepturi';
    $request->reportInput->displayName = 'cum';
    $request->reportInput->state = ReportStateEnum::PENDING;
    $request->reportInput->summary = new ReportSummary();
    $request->reportInput->summary->allAssetsStats = new ReportSummaryAssetAggregateStats();
    $request->reportInput->summary->allAssetsStats->assetAge = new ReportSummaryChartData();
    $request->reportInput->summary->allAssetsStats->assetAge->dataPoints = [
        new ReportSummaryChartDataDataPoint(),
        new ReportSummaryChartDataDataPoint(),
    ];
    $request->reportInput->summary->allAssetsStats->coreCountHistogram = new ReportSummaryHistogramChartData();
    $request->reportInput->summary->allAssetsStats->coreCountHistogram->buckets = [
        new ReportSummaryHistogramChartDataBucket(),
        new ReportSummaryHistogramChartDataBucket(),
        new ReportSummaryHistogramChartDataBucket(),
        new ReportSummaryHistogramChartDataBucket(),
    ];
    $request->reportInput->summary->allAssetsStats->memoryBytesHistogram = new ReportSummaryHistogramChartData();
    $request->reportInput->summary->allAssetsStats->memoryBytesHistogram->buckets = [
        new ReportSummaryHistogramChartDataBucket(),
    ];
    $request->reportInput->summary->allAssetsStats->memoryUtilization = new ReportSummaryChartData();
    $request->reportInput->summary->allAssetsStats->memoryUtilization->dataPoints = [
        new ReportSummaryChartDataDataPoint(),
        new ReportSummaryChartDataDataPoint(),
        new ReportSummaryChartDataDataPoint(),
    ];
    $request->reportInput->summary->allAssetsStats->memoryUtilizationChart = new ReportSummaryUtilizationChartData();
    $request->reportInput->summary->allAssetsStats->memoryUtilizationChart->free = 'numquam';
    $request->reportInput->summary->allAssetsStats->memoryUtilizationChart->used = 'veritatis';
    $request->reportInput->summary->allAssetsStats->operatingSystem = new ReportSummaryChartData();
    $request->reportInput->summary->allAssetsStats->operatingSystem->dataPoints = [
        new ReportSummaryChartDataDataPoint(),
    ];
    $request->reportInput->summary->allAssetsStats->storageBytesHistogram = new ReportSummaryHistogramChartData();
    $request->reportInput->summary->allAssetsStats->storageBytesHistogram->buckets = [
        new ReportSummaryHistogramChartDataBucket(),
    ];
    $request->reportInput->summary->allAssetsStats->storageUtilization = new ReportSummaryChartData();
    $request->reportInput->summary->allAssetsStats->storageUtilization->dataPoints = [
        new ReportSummaryChartDataDataPoint(),
        new ReportSummaryChartDataDataPoint(),
    ];
    $request->reportInput->summary->allAssetsStats->storageUtilizationChart = new ReportSummaryUtilizationChartData();
    $request->reportInput->summary->allAssetsStats->storageUtilizationChart->free = 'odio';
    $request->reportInput->summary->allAssetsStats->storageUtilizationChart->used = 'quaerat';
    $request->reportInput->summary->allAssetsStats->totalAssets = 'accusamus';
    $request->reportInput->summary->allAssetsStats->totalCores = 'quidem';
    $request->reportInput->summary->allAssetsStats->totalMemoryBytes = 'voluptatibus';
    $request->reportInput->summary->allAssetsStats->totalStorageBytes = 'voluptas';
    $request->reportInput->summary->groupFindings = [
        new ReportSummaryGroupFinding(),
        new ReportSummaryGroupFinding(),
        new ReportSummaryGroupFinding(),
    ];
    $request->reportInput->type = ReportTypeEnum::TYPE_UNSPECIFIED;
    $request->accessToken = 'atque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugiat';
    $request->fields = 'ab';
    $request->key = 'soluta';
    $request->oauthToken = 'dolorum';
    $request->parent = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->reportId = 'dolorum';
    $request->requestId = 'deleniti';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'necessitatibus';

    $requestSecurity = new MigrationcenterProjectsLocationsReportConfigsReportsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsReportConfigsReportsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationcenterProjectsLocationsReportConfigsReportsList

Lists Reports in a given ReportConfig.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsReportConfigsReportsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsReportConfigsReportsListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsReportConfigsReportsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsReportConfigsReportsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'asperiores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsum';
    $request->fields = 'voluptate';
    $request->filter = 'id';
    $request->key = 'saepe';
    $request->oauthToken = 'eius';
    $request->orderBy = 'aspernatur';
    $request->pageSize = 20651;
    $request->pageToken = 'amet';
    $request->parent = 'optio';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'saepe';
    $request->view = MigrationcenterProjectsLocationsReportConfigsReportsListViewEnum::REPORT_VIEW_BASIC;

    $requestSecurity = new MigrationcenterProjectsLocationsReportConfigsReportsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsReportConfigsReportsList($request, $requestSecurity);

    if ($response->listReportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationcenterProjectsLocationsSourcesCreate

Creates a new source in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsSourcesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceInput;
use \OpenAPI\OpenAPI\Models\Shared\SourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsSourcesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsSourcesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->sourceInput = new SourceInput();
    $request->sourceInput->description = 'provident';
    $request->sourceInput->displayName = 'minima';
    $request->sourceInput->isManaged = false;
    $request->sourceInput->priority = 831049;
    $request->sourceInput->type = SourceTypeEnum::SOURCE_TYPE_GUEST_OS_SCAN;
    $request->accessToken = 'similique';
    $request->alt = AltEnum::JSON;
    $request->callback = 'at';
    $request->fields = 'quaerat';
    $request->key = 'tempora';
    $request->oauthToken = 'vel';
    $request->parent = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'officiis';
    $request->requestId = 'qui';
    $request->sourceId = 'dolorum';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'esse';

    $requestSecurity = new MigrationcenterProjectsLocationsSourcesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsSourcesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationcenterProjectsLocationsSourcesDelete

Deletes a source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsSourcesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsSourcesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsSourcesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quisquam';
    $request->fields = 'tenetur';
    $request->key = 'amet';
    $request->name = 'Tomas Funk';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->requestId = 'nihil';
    $request->uploadType = 'sit';
    $request->uploadProtocol = 'expedita';

    $requestSecurity = new MigrationcenterProjectsLocationsSourcesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsSourcesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationcenterProjectsLocationsSourcesErrorFramesGet

Gets the details of an error frame.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsSourcesErrorFramesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsSourcesErrorFramesGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsSourcesErrorFramesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsSourcesErrorFramesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sed';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'libero';
    $request->fields = 'voluptas';
    $request->key = 'deserunt';
    $request->name = 'Tracy Gottlieb';
    $request->oauthToken = 'maxime';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'soluta';
    $request->uploadProtocol = 'dicta';
    $request->view = MigrationcenterProjectsLocationsSourcesErrorFramesGetViewEnum::ERROR_FRAME_VIEW_FULL;

    $requestSecurity = new MigrationcenterProjectsLocationsSourcesErrorFramesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsSourcesErrorFramesGet($request, $requestSecurity);

    if ($response->errorFrame !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationcenterProjectsLocationsSourcesErrorFramesList

Lists all error frames in a given source and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsSourcesErrorFramesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsSourcesErrorFramesListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsSourcesErrorFramesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsSourcesErrorFramesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolores';
    $request->fields = 'distinctio';
    $request->key = 'facilis';
    $request->oauthToken = 'aliquid';
    $request->pageSize = 463150;
    $request->pageToken = 'molestias';
    $request->parent = 'temporibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'neque';
    $request->uploadProtocol = 'fugit';
    $request->view = MigrationcenterProjectsLocationsSourcesErrorFramesListViewEnum::ERROR_FRAME_VIEW_UNSPECIFIED;

    $requestSecurity = new MigrationcenterProjectsLocationsSourcesErrorFramesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsSourcesErrorFramesList($request, $requestSecurity);

    if ($response->listErrorFramesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationcenterProjectsLocationsSourcesList

Lists all the sources in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsSourcesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsSourcesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsSourcesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nam';
    $request->fields = 'hic';
    $request->filter = 'voluptatem';
    $request->key = 'cumque';
    $request->oauthToken = 'soluta';
    $request->orderBy = 'nobis';
    $request->pageSize = 92596;
    $request->pageToken = 'saepe';
    $request->parent = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'quos';

    $requestSecurity = new MigrationcenterProjectsLocationsSourcesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsSourcesList($request, $requestSecurity);

    if ($response->listSourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationcenterProjectsLocationsSourcesPatch

Updates the parameters of a source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsSourcesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceInput;
use \OpenAPI\OpenAPI\Models\Shared\SourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsSourcesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsSourcesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->sourceInput = new SourceInput();
    $request->sourceInput->description = 'cupiditate';
    $request->sourceInput->displayName = 'aperiam';
    $request->sourceInput->isManaged = false;
    $request->sourceInput->priority = 961937;
    $request->sourceInput->type = SourceTypeEnum::SOURCE_TYPE_UPLOAD;
    $request->accessToken = 'dolore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'adipisci';
    $request->fields = 'dolorum';
    $request->key = 'architecto';
    $request->name = 'Margaret Luettgen MD';
    $request->oauthToken = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->requestId = 'doloribus';
    $request->updateMask = 'ut';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'cupiditate';

    $requestSecurity = new MigrationcenterProjectsLocationsSourcesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsSourcesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
