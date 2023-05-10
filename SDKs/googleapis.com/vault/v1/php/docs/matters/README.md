# matters

### Available Operations

* [vaultMattersAddPermissions](#vaultmattersaddpermissions) - Adds an account as a matter collaborator.
* [vaultMattersClose](#vaultmattersclose) - Closes the specified matter. Returns the matter with updated state.
* [vaultMattersCount](#vaultmatterscount) - Counts the accounts processed by the specified query.
* [vaultMattersCreate](#vaultmatterscreate) - Creates a matter with the given name and description. The initial state is open, and the owner is the method caller. Returns the created matter with default view.
* [vaultMattersDelete](#vaultmattersdelete) - Deletes the specified matter. Returns the matter with updated state.
* [vaultMattersExportsCreate](#vaultmattersexportscreate) - Creates an export.
* [vaultMattersExportsDelete](#vaultmattersexportsdelete) - Deletes an export.
* [vaultMattersExportsGet](#vaultmattersexportsget) - Gets an export.
* [vaultMattersExportsList](#vaultmattersexportslist) - Lists details about the exports in the specified matter.
* [vaultMattersGet](#vaultmattersget) - Gets the specified matter.
* [vaultMattersHoldsAccountsCreate](#vaultmattersholdsaccountscreate) - Adds an account to a hold. Accounts can be added only to a hold that does not have an organizational unit set. If you try to add an account to an organizational unit-based hold, an error is returned.
* [vaultMattersHoldsAccountsDelete](#vaultmattersholdsaccountsdelete) - Removes an account from a hold.
* [vaultMattersHoldsAccountsList](#vaultmattersholdsaccountslist) - Lists the accounts covered by a hold. This can list only individually-specified accounts covered by the hold. If the hold covers an organizational unit, use the [Admin SDK](https://developers.google.com/admin-sdk/). to list the members of the organizational unit on hold.
* [vaultMattersHoldsAddHeldAccounts](#vaultmattersholdsaddheldaccounts) - Adds accounts to a hold. Returns a list of accounts that have been successfully added. Accounts can be added only to an existing account-based hold.
* [vaultMattersHoldsCreate](#vaultmattersholdscreate) - Creates a hold in the specified matter.
* [vaultMattersHoldsDelete](#vaultmattersholdsdelete) - Removes the specified hold and releases the accounts or organizational unit covered by the hold. If the data is not preserved by another hold or retention rule, it might be purged.
* [vaultMattersHoldsGet](#vaultmattersholdsget) - Gets the specified hold.
* [vaultMattersHoldsList](#vaultmattersholdslist) - Lists the holds in a matter.
* [vaultMattersHoldsRemoveHeldAccounts](#vaultmattersholdsremoveheldaccounts) - Removes the specified accounts from a hold. Returns a list of statuses in the same order as the request.
* [vaultMattersHoldsUpdate](#vaultmattersholdsupdate) - Updates the scope (organizational unit or accounts) and query parameters of a hold. You cannot add accounts to a hold that covers an organizational unit, nor can you add organizational units to a hold that covers individual accounts. If you try, the unsupported values are ignored.
* [vaultMattersList](#vaultmatterslist) - Lists matters the requestor has access to.
* [vaultMattersRemovePermissions](#vaultmattersremovepermissions) - Removes an account as a matter collaborator.
* [vaultMattersReopen](#vaultmattersreopen) - Reopens the specified matter. Returns the matter with updated state.
* [vaultMattersSavedQueriesCreate](#vaultmatterssavedqueriescreate) - Creates a saved query.
* [vaultMattersSavedQueriesDelete](#vaultmatterssavedqueriesdelete) - Deletes the specified saved query.
* [vaultMattersSavedQueriesGet](#vaultmatterssavedqueriesget) - Retrieves the specified saved query.
* [vaultMattersSavedQueriesList](#vaultmatterssavedquerieslist) - Lists the saved queries in a matter.
* [vaultMattersUndelete](#vaultmattersundelete) - Undeletes the specified matter. Returns the matter with updated state.
* [vaultMattersUpdate](#vaultmattersupdate) - Updates the specified matter. This updates only the name and description of the matter, identified by matter ID. Changes to any other fields are ignored. Returns the default view of the matter.

## vaultMattersAddPermissions

Adds an account as a matter collaborator.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersAddPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddMatterPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\MatterPermission;
use \OpenAPI\OpenAPI\Models\Shared\MatterPermissionRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersAddPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VaultMattersAddPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->addMatterPermissionsRequest = new AddMatterPermissionsRequest();
    $request->addMatterPermissionsRequest->ccMe = false;
    $request->addMatterPermissionsRequest->matterPermission = new MatterPermission();
    $request->addMatterPermissionsRequest->matterPermission->accountId = 'debitis';
    $request->addMatterPermissionsRequest->matterPermission->role = MatterPermissionRoleEnum::ROLE_UNSPECIFIED;
    $request->addMatterPermissionsRequest->sendEmails = false;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->fields = 'molestiae';
    $request->key = 'minus';
    $request->matterId = 'placeat';
    $request->oauthToken = 'voluptatum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'nisi';

    $requestSecurity = new VaultMattersAddPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->matters->vaultMattersAddPermissions($request, $requestSecurity);

    if ($response->matterPermission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vaultMattersClose

Closes the specified matter. Returns the matter with updated state.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersCloseRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersCloseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VaultMattersCloseRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'ab' => 'quis',
        'veritatis' => 'deserunt',
        'perferendis' => 'ipsam',
        'repellendus' => 'sapiente',
    ];
    $request->accessToken = 'quo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'at';
    $request->fields = 'at';
    $request->key = 'maiores';
    $request->matterId = 'molestiae';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new VaultMattersCloseSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->matters->vaultMattersClose($request, $requestSecurity);

    if ($response->closeMatterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vaultMattersCount

Counts the accounts processed by the specified query.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersCountRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CountArtifactsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Query;
use \OpenAPI\OpenAPI\Models\Shared\AccountInfo;
use \OpenAPI\OpenAPI\Models\Shared\QueryCorpusEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueryDataScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DriveOptions;
use \OpenAPI\OpenAPI\Models\Shared\DriveOptionsClientSideEncryptedOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\HangoutsChatInfo;
use \OpenAPI\OpenAPI\Models\Shared\HangoutsChatOptions;
use \OpenAPI\OpenAPI\Models\Shared\MailOptions;
use \OpenAPI\OpenAPI\Models\Shared\MailOptionsClientSideEncryptedOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueryMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrgUnitInfo;
use \OpenAPI\OpenAPI\Models\Shared\QuerySearchMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\SharedDriveInfo;
use \OpenAPI\OpenAPI\Models\Shared\SitesUrlInfo;
use \OpenAPI\OpenAPI\Models\Shared\TeamDriveInfo;
use \OpenAPI\OpenAPI\Models\Shared\VoiceOptions;
use \OpenAPI\OpenAPI\Models\Shared\VoiceOptionsCoveredDataEnum;
use \OpenAPI\OpenAPI\Models\Shared\CountArtifactsRequestViewEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersCountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VaultMattersCountRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->countArtifactsRequest = new CountArtifactsRequest();
    $request->countArtifactsRequest->query = new Query();
    $request->countArtifactsRequest->query->accountInfo = new AccountInfo();
    $request->countArtifactsRequest->query->accountInfo->emails = [
        'dicta',
        'nam',
        'officia',
    ];
    $request->countArtifactsRequest->query->corpus = QueryCorpusEnum::GROUPS;
    $request->countArtifactsRequest->query->dataScope = QueryDataScopeEnum::DATA_SCOPE_UNSPECIFIED;
    $request->countArtifactsRequest->query->driveOptions = new DriveOptions();
    $request->countArtifactsRequest->query->driveOptions->clientSideEncryptedOption = DriveOptionsClientSideEncryptedOptionEnum::CLIENT_SIDE_ENCRYPTED_OPTION_ENCRYPTED;
    $request->countArtifactsRequest->query->driveOptions->includeSharedDrives = false;
    $request->countArtifactsRequest->query->driveOptions->includeTeamDrives = false;
    $request->countArtifactsRequest->query->driveOptions->versionDate = 'hic';
    $request->countArtifactsRequest->query->endTime = 'optio';
    $request->countArtifactsRequest->query->hangoutsChatInfo = new HangoutsChatInfo();
    $request->countArtifactsRequest->query->hangoutsChatInfo->roomId = [
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->countArtifactsRequest->query->hangoutsChatOptions = new HangoutsChatOptions();
    $request->countArtifactsRequest->query->hangoutsChatOptions->includeRooms = false;
    $request->countArtifactsRequest->query->mailOptions = new MailOptions();
    $request->countArtifactsRequest->query->mailOptions->clientSideEncryptedOption = MailOptionsClientSideEncryptedOptionEnum::CLIENT_SIDE_ENCRYPTED_OPTION_ANY;
    $request->countArtifactsRequest->query->mailOptions->excludeDrafts = false;
    $request->countArtifactsRequest->query->method = QueryMethodEnum::ACCOUNT;
    $request->countArtifactsRequest->query->orgUnitInfo = new OrgUnitInfo();
    $request->countArtifactsRequest->query->orgUnitInfo->orgUnitId = 'impedit';
    $request->countArtifactsRequest->query->searchMethod = QuerySearchMethodEnum::ROOM;
    $request->countArtifactsRequest->query->sharedDriveInfo = new SharedDriveInfo();
    $request->countArtifactsRequest->query->sharedDriveInfo->sharedDriveIds = [
        'ipsum',
        'excepturi',
    ];
    $request->countArtifactsRequest->query->sitesUrlInfo = new SitesUrlInfo();
    $request->countArtifactsRequest->query->sitesUrlInfo->urls = [
        'perferendis',
    ];
    $request->countArtifactsRequest->query->startTime = 'ad';
    $request->countArtifactsRequest->query->teamDriveInfo = new TeamDriveInfo();
    $request->countArtifactsRequest->query->teamDriveInfo->teamDriveIds = [
        'sed',
        'iste',
        'dolor',
    ];
    $request->countArtifactsRequest->query->terms = 'natus';
    $request->countArtifactsRequest->query->timeZone = 'laboriosam';
    $request->countArtifactsRequest->query->voiceOptions = new VoiceOptions();
    $request->countArtifactsRequest->query->voiceOptions->coveredData = [
        VoiceOptionsCoveredDataEnum::CALL_LOGS,
        VoiceOptionsCoveredDataEnum::VOICEMAILS,
        VoiceOptionsCoveredDataEnum::TEXT_MESSAGES,
        VoiceOptionsCoveredDataEnum::TEXT_MESSAGES,
    ];
    $request->countArtifactsRequest->view = CountArtifactsRequestViewEnum::TOTAL_COUNT;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'architecto';
    $request->key = 'ipsa';
    $request->matterId = 'reiciendis';
    $request->oauthToken = 'est';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'dolores';

    $requestSecurity = new VaultMattersCountSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->matters->vaultMattersCount($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vaultMattersCreate

Creates a matter with the given name and description. The initial state is open, and the owner is the method caller. Returns the created matter with default view.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Matter;
use \OpenAPI\OpenAPI\Models\Shared\MatterPermission;
use \OpenAPI\OpenAPI\Models\Shared\MatterPermissionRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\MatterStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VaultMattersCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->matter = new Matter();
    $request->matter->description = 'corporis';
    $request->matter->matterId = 'explicabo';
    $request->matter->matterPermissions = [
        new MatterPermission(),
        new MatterPermission(),
        new MatterPermission(),
        new MatterPermission(),
    ];
    $request->matter->name = 'Guadalupe Hickle';
    $request->matter->state = MatterStateEnum::STATE_UNSPECIFIED;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'sapiente';
    $request->key = 'architecto';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'consequuntur';

    $requestSecurity = new VaultMattersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->matters->vaultMattersCreate($request, $requestSecurity);

    if ($response->matter !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vaultMattersDelete

Deletes the specified matter. Returns the matter with updated state.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VaultMattersDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'numquam';
    $request->fields = 'commodi';
    $request->key = 'quam';
    $request->matterId = 'molestiae';
    $request->oauthToken = 'velit';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'quia';
    $request->uploadProtocol = 'quis';

    $requestSecurity = new VaultMattersDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->matters->vaultMattersDelete($request, $requestSecurity);

    if ($response->matter !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vaultMattersExportsCreate

Creates an export.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersExportsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Export;
use \OpenAPI\OpenAPI\Models\Shared\CloudStorageSink;
use \OpenAPI\OpenAPI\Models\Shared\CloudStorageFile;
use \OpenAPI\OpenAPI\Models\Shared\ExportOptions;
use \OpenAPI\OpenAPI\Models\Shared\DriveExportOptions;
use \OpenAPI\OpenAPI\Models\Shared\GroupsExportOptions;
use \OpenAPI\OpenAPI\Models\Shared\GroupsExportOptionsExportFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\HangoutsChatExportOptions;
use \OpenAPI\OpenAPI\Models\Shared\HangoutsChatExportOptionsExportFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\MailExportOptions;
use \OpenAPI\OpenAPI\Models\Shared\MailExportOptionsExportFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExportOptionsRegionEnum;
use \OpenAPI\OpenAPI\Models\Shared\VoiceExportOptions;
use \OpenAPI\OpenAPI\Models\Shared\VoiceExportOptionsExportFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\Query;
use \OpenAPI\OpenAPI\Models\Shared\AccountInfo;
use \OpenAPI\OpenAPI\Models\Shared\QueryCorpusEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueryDataScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DriveOptions;
use \OpenAPI\OpenAPI\Models\Shared\DriveOptionsClientSideEncryptedOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\HangoutsChatInfo;
use \OpenAPI\OpenAPI\Models\Shared\HangoutsChatOptions;
use \OpenAPI\OpenAPI\Models\Shared\MailOptions;
use \OpenAPI\OpenAPI\Models\Shared\MailOptionsClientSideEncryptedOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueryMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrgUnitInfo;
use \OpenAPI\OpenAPI\Models\Shared\QuerySearchMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\SharedDriveInfo;
use \OpenAPI\OpenAPI\Models\Shared\SitesUrlInfo;
use \OpenAPI\OpenAPI\Models\Shared\TeamDriveInfo;
use \OpenAPI\OpenAPI\Models\Shared\VoiceOptions;
use \OpenAPI\OpenAPI\Models\Shared\VoiceOptionsCoveredDataEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserInfo;
use \OpenAPI\OpenAPI\Models\Shared\ExportStats;
use \OpenAPI\OpenAPI\Models\Shared\ExportStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersExportsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VaultMattersExportsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->export = new Export();
    $request->export->cloudStorageSink = new CloudStorageSink();
    $request->export->cloudStorageSink->files = [
        new CloudStorageFile(),
        new CloudStorageFile(),
        new CloudStorageFile(),
    ];
    $request->export->createTime = 'animi';
    $request->export->exportOptions = new ExportOptions();
    $request->export->exportOptions->driveOptions = new DriveExportOptions();
    $request->export->exportOptions->driveOptions->includeAccessInfo = false;
    $request->export->exportOptions->groupsOptions = new GroupsExportOptions();
    $request->export->exportOptions->groupsOptions->exportFormat = GroupsExportOptionsExportFormatEnum::EXPORT_FORMAT_UNSPECIFIED;
    $request->export->exportOptions->hangoutsChatOptions = new HangoutsChatExportOptions();
    $request->export->exportOptions->hangoutsChatOptions->exportFormat = HangoutsChatExportOptionsExportFormatEnum::EXPORT_FORMAT_UNSPECIFIED;
    $request->export->exportOptions->mailOptions = new MailExportOptions();
    $request->export->exportOptions->mailOptions->exportFormat = MailExportOptionsExportFormatEnum::PST;
    $request->export->exportOptions->mailOptions->showConfidentialModeContent = false;
    $request->export->exportOptions->mailOptions->useNewExport = false;
    $request->export->exportOptions->region = ExportOptionsRegionEnum::EXPORT_REGION_UNSPECIFIED;
    $request->export->exportOptions->voiceOptions = new VoiceExportOptions();
    $request->export->exportOptions->voiceOptions->exportFormat = VoiceExportOptionsExportFormatEnum::PST;
    $request->export->id = '5ad019da-1ffe-478f-897b-0074f15471b5';
    $request->export->matterId = 'accusamus';
    $request->export->name = 'Elvira Bergnaum';
    $request->export->query = new Query();
    $request->export->query->accountInfo = new AccountInfo();
    $request->export->query->accountInfo->emails = [
        'excepturi',
        'pariatur',
        'modi',
    ];
    $request->export->query->corpus = QueryCorpusEnum::GROUPS;
    $request->export->query->dataScope = QueryDataScopeEnum::HELD_DATA;
    $request->export->query->driveOptions = new DriveOptions();
    $request->export->query->driveOptions->clientSideEncryptedOption = DriveOptionsClientSideEncryptedOptionEnum::CLIENT_SIDE_ENCRYPTED_OPTION_UNENCRYPTED;
    $request->export->query->driveOptions->includeSharedDrives = false;
    $request->export->query->driveOptions->includeTeamDrives = false;
    $request->export->query->driveOptions->versionDate = 'quasi';
    $request->export->query->endTime = 'repudiandae';
    $request->export->query->hangoutsChatInfo = new HangoutsChatInfo();
    $request->export->query->hangoutsChatInfo->roomId = [
        'veritatis',
        'itaque',
        'incidunt',
    ];
    $request->export->query->hangoutsChatOptions = new HangoutsChatOptions();
    $request->export->query->hangoutsChatOptions->includeRooms = false;
    $request->export->query->mailOptions = new MailOptions();
    $request->export->query->mailOptions->clientSideEncryptedOption = MailOptionsClientSideEncryptedOptionEnum::CLIENT_SIDE_ENCRYPTED_OPTION_ANY;
    $request->export->query->mailOptions->excludeDrafts = false;
    $request->export->query->method = QueryMethodEnum::SEARCH_METHOD_UNSPECIFIED;
    $request->export->query->orgUnitInfo = new OrgUnitInfo();
    $request->export->query->orgUnitInfo->orgUnitId = 'est';
    $request->export->query->searchMethod = QuerySearchMethodEnum::SITES_URL;
    $request->export->query->sharedDriveInfo = new SharedDriveInfo();
    $request->export->query->sharedDriveInfo->sharedDriveIds = [
        'deserunt',
    ];
    $request->export->query->sitesUrlInfo = new SitesUrlInfo();
    $request->export->query->sitesUrlInfo->urls = [
        'quibusdam',
        'labore',
        'modi',
    ];
    $request->export->query->startTime = 'qui';
    $request->export->query->teamDriveInfo = new TeamDriveInfo();
    $request->export->query->teamDriveInfo->teamDriveIds = [
        'cupiditate',
        'quos',
    ];
    $request->export->query->terms = 'perferendis';
    $request->export->query->timeZone = 'magni';
    $request->export->query->voiceOptions = new VoiceOptions();
    $request->export->query->voiceOptions->coveredData = [
        VoiceOptionsCoveredDataEnum::TEXT_MESSAGES,
        VoiceOptionsCoveredDataEnum::COVERED_DATA_UNSPECIFIED,
        VoiceOptionsCoveredDataEnum::COVERED_DATA_UNSPECIFIED,
        VoiceOptionsCoveredDataEnum::VOICEMAILS,
    ];
    $request->export->requester = new UserInfo();
    $request->export->requester->displayName = 'excepturi';
    $request->export->requester->email = 'Mckayla96@gmail.com';
    $request->export->stats = new ExportStats();
    $request->export->stats->exportedArtifactCount = 'eum';
    $request->export->stats->sizeInBytes = 'non';
    $request->export->stats->totalArtifactCount = 'eligendi';
    $request->export->status = ExportStatusEnum::FAILED;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'necessitatibus';
    $request->fields = 'sint';
    $request->key = 'officia';
    $request->matterId = 'dolor';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'a';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'in';

    $requestSecurity = new VaultMattersExportsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->matters->vaultMattersExportsCreate($request, $requestSecurity);

    if ($response->export !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vaultMattersExportsDelete

Deletes an export.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersExportsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersExportsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VaultMattersExportsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'illum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'rerum';
    $request->exportId = 'dicta';
    $request->fields = 'magnam';
    $request->key = 'cumque';
    $request->matterId = 'facere';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new VaultMattersExportsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->matters->vaultMattersExportsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vaultMattersExportsGet

Gets an export.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersExportsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersExportsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersExportsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersExportsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VaultMattersExportsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->exportId = 'delectus';
    $request->fields = 'quidem';
    $request->key = 'provident';
    $request->matterId = 'nam';
    $request->oauthToken = 'id';
    $request->prettyPrint = false;
    $request->quotaUser = 'blanditiis';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new VaultMattersExportsGetSecurity();
    $requestSecurity->option1 = new VaultMattersExportsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->matters->vaultMattersExportsGet($request, $requestSecurity);

    if ($response->export !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vaultMattersExportsList

Lists details about the exports in the specified matter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersExportsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersExportsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersExportsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersExportsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VaultMattersExportsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vel';
    $request->fields = 'natus';
    $request->key = 'omnis';
    $request->matterId = 'molestiae';
    $request->oauthToken = 'perferendis';
    $request->pageSize = 470132;
    $request->pageToken = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new VaultMattersExportsListSecurity();
    $requestSecurity->option1 = new VaultMattersExportsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->matters->vaultMattersExportsList($request, $requestSecurity);

    if ($response->listExportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vaultMattersGet

Gets the specified matter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VaultMattersGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nobis';
    $request->fields = 'eum';
    $request->key = 'vero';
    $request->matterId = 'aspernatur';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'excepturi';
    $request->view = VaultMattersGetViewEnum::BASIC;

    $requestSecurity = new VaultMattersGetSecurity();
    $requestSecurity->option1 = new VaultMattersGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->matters->vaultMattersGet($request, $requestSecurity);

    if ($response->matter !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vaultMattersHoldsAccountsCreate

Adds an account to a hold. Accounts can be added only to a hold that does not have an organizational unit set. If you try to add an account to an organizational unit-based hold, an error is returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersHoldsAccountsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\HeldAccount;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersHoldsAccountsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VaultMattersHoldsAccountsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->heldAccount = new HeldAccount();
    $request->heldAccount->accountId = 'quos';
    $request->heldAccount->email = 'Alexis_OHara32@yahoo.com';
    $request->heldAccount->firstName = 'Holden';
    $request->heldAccount->holdTime = 'dolor';
    $request->heldAccount->lastName = 'Treutel';
    $request->accessToken = 'odit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quasi';
    $request->fields = 'iure';
    $request->holdId = 'doloribus';
    $request->key = 'debitis';
    $request->matterId = 'eius';
    $request->oauthToken = 'maxime';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'in';

    $requestSecurity = new VaultMattersHoldsAccountsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->matters->vaultMattersHoldsAccountsCreate($request, $requestSecurity);

    if ($response->heldAccount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vaultMattersHoldsAccountsDelete

Removes an account from a hold.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersHoldsAccountsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersHoldsAccountsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VaultMattersHoldsAccountsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'architecto';
    $request->accountId = 'repudiandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'expedita';
    $request->fields = 'nihil';
    $request->holdId = 'repellat';
    $request->key = 'quibusdam';
    $request->matterId = 'sed';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'consequuntur';

    $requestSecurity = new VaultMattersHoldsAccountsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->matters->vaultMattersHoldsAccountsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vaultMattersHoldsAccountsList

Lists the accounts covered by a hold. This can list only individually-specified accounts covered by the hold. If the hold covers an organizational unit, use the [Admin SDK](https://developers.google.com/admin-sdk/). to list the members of the organizational unit on hold.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersHoldsAccountsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersHoldsAccountsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersHoldsAccountsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersHoldsAccountsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VaultMattersHoldsAccountsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sunt';
    $request->fields = 'quo';
    $request->holdId = 'illum';
    $request->key = 'pariatur';
    $request->matterId = 'maxime';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new VaultMattersHoldsAccountsListSecurity();
    $requestSecurity->option1 = new VaultMattersHoldsAccountsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->matters->vaultMattersHoldsAccountsList($request, $requestSecurity);

    if ($response->listHeldAccountsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vaultMattersHoldsAddHeldAccounts

Adds accounts to a hold. Returns a list of accounts that have been successfully added. Accounts can be added only to an existing account-based hold.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersHoldsAddHeldAccountsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddHeldAccountsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersHoldsAddHeldAccountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VaultMattersHoldsAddHeldAccountsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->addHeldAccountsRequest = new AddHeldAccountsRequest();
    $request->addHeldAccountsRequest->accountIds = [
        'maiores',
    ];
    $request->addHeldAccountsRequest->emails = [
        'ipsam',
        'voluptate',
        'autem',
    ];
    $request->accessToken = 'nam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'pariatur';
    $request->fields = 'nemo';
    $request->holdId = 'voluptatibus';
    $request->key = 'perferendis';
    $request->matterId = 'fugiat';
    $request->oauthToken = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new VaultMattersHoldsAddHeldAccountsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->matters->vaultMattersHoldsAddHeldAccounts($request, $requestSecurity);

    if ($response->addHeldAccountsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vaultMattersHoldsCreate

Creates a hold in the specified matter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersHoldsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Hold;
use \OpenAPI\OpenAPI\Models\Shared\HeldAccount;
use \OpenAPI\OpenAPI\Models\Shared\HoldCorpusEnum;
use \OpenAPI\OpenAPI\Models\Shared\HeldOrgUnit;
use \OpenAPI\OpenAPI\Models\Shared\CorpusQuery;
use \OpenAPI\OpenAPI\Models\Shared\HeldDriveQuery;
use \OpenAPI\OpenAPI\Models\Shared\HeldGroupsQuery;
use \OpenAPI\OpenAPI\Models\Shared\HeldHangoutsChatQuery;
use \OpenAPI\OpenAPI\Models\Shared\HeldMailQuery;
use \OpenAPI\OpenAPI\Models\Shared\HeldVoiceQuery;
use \OpenAPI\OpenAPI\Models\Shared\HeldVoiceQueryCoveredDataEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersHoldsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VaultMattersHoldsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->hold = new Hold();
    $request->hold->accounts = [
        new HeldAccount(),
        new HeldAccount(),
        new HeldAccount(),
    ];
    $request->hold->corpus = HoldCorpusEnum::HANGOUTS_CHAT;
    $request->hold->holdId = 'dolores';
    $request->hold->name = 'Mrs. Deanna Kuhn';
    $request->hold->orgUnit = new HeldOrgUnit();
    $request->hold->orgUnit->holdTime = 'eos';
    $request->hold->orgUnit->orgUnitId = 'perferendis';
    $request->hold->query = new CorpusQuery();
    $request->hold->query->driveQuery = new HeldDriveQuery();
    $request->hold->query->driveQuery->includeSharedDriveFiles = false;
    $request->hold->query->driveQuery->includeTeamDriveFiles = false;
    $request->hold->query->groupsQuery = new HeldGroupsQuery();
    $request->hold->query->groupsQuery->endTime = 'dolores';
    $request->hold->query->groupsQuery->startTime = 'minus';
    $request->hold->query->groupsQuery->terms = 'quam';
    $request->hold->query->hangoutsChatQuery = new HeldHangoutsChatQuery();
    $request->hold->query->hangoutsChatQuery->includeRooms = false;
    $request->hold->query->mailQuery = new HeldMailQuery();
    $request->hold->query->mailQuery->endTime = 'dolor';
    $request->hold->query->mailQuery->startTime = 'vero';
    $request->hold->query->mailQuery->terms = 'nostrum';
    $request->hold->query->voiceQuery = new HeldVoiceQuery();
    $request->hold->query->voiceQuery->coveredData = [
        HeldVoiceQueryCoveredDataEnum::CALL_LOGS,
        HeldVoiceQueryCoveredDataEnum::VOICEMAILS,
        HeldVoiceQueryCoveredDataEnum::VOICEMAILS,
        HeldVoiceQueryCoveredDataEnum::VOICEMAILS,
    ];
    $request->hold->updateTime = 'voluptatem';
    $request->accessToken = 'porro';
    $request->alt = AltEnum::JSON;
    $request->callback = 'blanditiis';
    $request->fields = 'error';
    $request->key = 'eaque';
    $request->matterId = 'occaecati';
    $request->oauthToken = 'rerum';
    $request->prettyPrint = false;
    $request->quotaUser = 'adipisci';
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'earum';

    $requestSecurity = new VaultMattersHoldsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->matters->vaultMattersHoldsCreate($request, $requestSecurity);

    if ($response->hold !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vaultMattersHoldsDelete

Removes the specified hold and releases the accounts or organizational unit covered by the hold. If the data is not preserved by another hold or retention rule, it might be purged.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersHoldsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersHoldsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VaultMattersHoldsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iste';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'deleniti';
    $request->fields = 'pariatur';
    $request->holdId = 'provident';
    $request->key = 'nobis';
    $request->matterId = 'libero';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quaerat';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new VaultMattersHoldsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->matters->vaultMattersHoldsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vaultMattersHoldsGet

Gets the specified hold.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersHoldsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersHoldsGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersHoldsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersHoldsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersHoldsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VaultMattersHoldsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'qui';
    $request->fields = 'ipsum';
    $request->holdId = 'hic';
    $request->key = 'excepturi';
    $request->matterId = 'cum';
    $request->oauthToken = 'voluptate';
    $request->prettyPrint = false;
    $request->quotaUser = 'dignissimos';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'amet';
    $request->view = VaultMattersHoldsGetViewEnum::FULL_HOLD;

    $requestSecurity = new VaultMattersHoldsGetSecurity();
    $requestSecurity->option1 = new VaultMattersHoldsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->matters->vaultMattersHoldsGet($request, $requestSecurity);

    if ($response->hold !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vaultMattersHoldsList

Lists the holds in a matter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersHoldsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersHoldsListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersHoldsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersHoldsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersHoldsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VaultMattersHoldsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsa';
    $request->fields = 'iure';
    $request->key = 'odio';
    $request->matterId = 'quaerat';
    $request->oauthToken = 'accusamus';
    $request->pageSize = 696344;
    $request->pageToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptas';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'eos';
    $request->view = VaultMattersHoldsListViewEnum::BASIC_HOLD;

    $requestSecurity = new VaultMattersHoldsListSecurity();
    $requestSecurity->option1 = new VaultMattersHoldsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->matters->vaultMattersHoldsList($request, $requestSecurity);

    if ($response->listHoldsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vaultMattersHoldsRemoveHeldAccounts

Removes the specified accounts from a hold. Returns a list of statuses in the same order as the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersHoldsRemoveHeldAccountsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveHeldAccountsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersHoldsRemoveHeldAccountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VaultMattersHoldsRemoveHeldAccountsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->removeHeldAccountsRequest = new RemoveHeldAccountsRequest();
    $request->removeHeldAccountsRequest->accountIds = [
        'ab',
        'soluta',
        'dolorum',
        'iusto',
    ];
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'deleniti';
    $request->fields = 'omnis';
    $request->holdId = 'necessitatibus';
    $request->key = 'distinctio';
    $request->matterId = 'asperiores';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'id';

    $requestSecurity = new VaultMattersHoldsRemoveHeldAccountsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->matters->vaultMattersHoldsRemoveHeldAccounts($request, $requestSecurity);

    if ($response->removeHeldAccountsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vaultMattersHoldsUpdate

Updates the scope (organizational unit or accounts) and query parameters of a hold. You cannot add accounts to a hold that covers an organizational unit, nor can you add organizational units to a hold that covers individual accounts. If you try, the unsupported values are ignored.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersHoldsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Hold;
use \OpenAPI\OpenAPI\Models\Shared\HeldAccount;
use \OpenAPI\OpenAPI\Models\Shared\HoldCorpusEnum;
use \OpenAPI\OpenAPI\Models\Shared\HeldOrgUnit;
use \OpenAPI\OpenAPI\Models\Shared\CorpusQuery;
use \OpenAPI\OpenAPI\Models\Shared\HeldDriveQuery;
use \OpenAPI\OpenAPI\Models\Shared\HeldGroupsQuery;
use \OpenAPI\OpenAPI\Models\Shared\HeldHangoutsChatQuery;
use \OpenAPI\OpenAPI\Models\Shared\HeldMailQuery;
use \OpenAPI\OpenAPI\Models\Shared\HeldVoiceQuery;
use \OpenAPI\OpenAPI\Models\Shared\HeldVoiceQueryCoveredDataEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersHoldsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VaultMattersHoldsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->hold = new Hold();
    $request->hold->accounts = [
        new HeldAccount(),
        new HeldAccount(),
    ];
    $request->hold->corpus = HoldCorpusEnum::CORPUS_TYPE_UNSPECIFIED;
    $request->hold->holdId = 'perferendis';
    $request->hold->name = 'Marianne Thompson';
    $request->hold->orgUnit = new HeldOrgUnit();
    $request->hold->orgUnit->holdTime = 'suscipit';
    $request->hold->orgUnit->orgUnitId = 'deserunt';
    $request->hold->query = new CorpusQuery();
    $request->hold->query->driveQuery = new HeldDriveQuery();
    $request->hold->query->driveQuery->includeSharedDriveFiles = false;
    $request->hold->query->driveQuery->includeTeamDriveFiles = false;
    $request->hold->query->groupsQuery = new HeldGroupsQuery();
    $request->hold->query->groupsQuery->endTime = 'provident';
    $request->hold->query->groupsQuery->startTime = 'minima';
    $request->hold->query->groupsQuery->terms = 'repellendus';
    $request->hold->query->hangoutsChatQuery = new HeldHangoutsChatQuery();
    $request->hold->query->hangoutsChatQuery->includeRooms = false;
    $request->hold->query->mailQuery = new HeldMailQuery();
    $request->hold->query->mailQuery->endTime = 'totam';
    $request->hold->query->mailQuery->startTime = 'similique';
    $request->hold->query->mailQuery->terms = 'alias';
    $request->hold->query->voiceQuery = new HeldVoiceQuery();
    $request->hold->query->voiceQuery->coveredData = [
        HeldVoiceQueryCoveredDataEnum::TEXT_MESSAGES,
        HeldVoiceQueryCoveredDataEnum::TEXT_MESSAGES,
        HeldVoiceQueryCoveredDataEnum::TEXT_MESSAGES,
        HeldVoiceQueryCoveredDataEnum::CALL_LOGS,
    ];
    $request->hold->updateTime = 'officiis';
    $request->accessToken = 'qui';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'a';
    $request->fields = 'esse';
    $request->holdId = 'harum';
    $request->key = 'iusto';
    $request->matterId = 'ipsum';
    $request->oauthToken = 'quisquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'tenetur';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'tempore';

    $requestSecurity = new VaultMattersHoldsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->matters->vaultMattersHoldsUpdate($request, $requestSecurity);

    if ($response->hold !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vaultMattersList

Lists matters the requestor has access to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersListStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VaultMattersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorem';
    $request->fields = 'sapiente';
    $request->key = 'totam';
    $request->oauthToken = 'nihil';
    $request->pageSize = 25662;
    $request->pageToken = 'expedita';
    $request->prettyPrint = false;
    $request->quotaUser = 'neque';
    $request->state = VaultMattersListStateEnum::STATE_UNSPECIFIED;
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'libero';
    $request->view = VaultMattersListViewEnum::BASIC;

    $requestSecurity = new VaultMattersListSecurity();
    $requestSecurity->option1 = new VaultMattersListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->matters->vaultMattersList($request, $requestSecurity);

    if ($response->listMattersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vaultMattersRemovePermissions

Removes an account as a matter collaborator.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersRemovePermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveMatterPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersRemovePermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VaultMattersRemovePermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->removeMatterPermissionsRequest = new RemoveMatterPermissionsRequest();
    $request->removeMatterPermissionsRequest->accountId = 'quam';
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'qui';
    $request->fields = 'cupiditate';
    $request->key = 'maxime';
    $request->matterId = 'pariatur';
    $request->oauthToken = 'soluta';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new VaultMattersRemovePermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->matters->vaultMattersRemovePermissions($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vaultMattersReopen

Reopens the specified matter. Returns the matter with updated state.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersReopenRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersReopenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VaultMattersReopenRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'dolores' => 'distinctio',
    ];
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quam';
    $request->fields = 'molestias';
    $request->key = 'temporibus';
    $request->matterId = 'qui';
    $request->oauthToken = 'neque';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'odio';

    $requestSecurity = new VaultMattersReopenSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->matters->vaultMattersReopen($request, $requestSecurity);

    if ($response->reopenMatterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vaultMattersSavedQueriesCreate

Creates a saved query.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersSavedQueriesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SavedQuery;
use \OpenAPI\OpenAPI\Models\Shared\Query;
use \OpenAPI\OpenAPI\Models\Shared\AccountInfo;
use \OpenAPI\OpenAPI\Models\Shared\QueryCorpusEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueryDataScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DriveOptions;
use \OpenAPI\OpenAPI\Models\Shared\DriveOptionsClientSideEncryptedOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\HangoutsChatInfo;
use \OpenAPI\OpenAPI\Models\Shared\HangoutsChatOptions;
use \OpenAPI\OpenAPI\Models\Shared\MailOptions;
use \OpenAPI\OpenAPI\Models\Shared\MailOptionsClientSideEncryptedOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueryMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrgUnitInfo;
use \OpenAPI\OpenAPI\Models\Shared\QuerySearchMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\SharedDriveInfo;
use \OpenAPI\OpenAPI\Models\Shared\SitesUrlInfo;
use \OpenAPI\OpenAPI\Models\Shared\TeamDriveInfo;
use \OpenAPI\OpenAPI\Models\Shared\VoiceOptions;
use \OpenAPI\OpenAPI\Models\Shared\VoiceOptionsCoveredDataEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersSavedQueriesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VaultMattersSavedQueriesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->savedQuery = new SavedQuery();
    $request->savedQuery->createTime = 'ullam';
    $request->savedQuery->displayName = 'nam';
    $request->savedQuery->matterId = 'hic';
    $request->savedQuery->query = new Query();
    $request->savedQuery->query->accountInfo = new AccountInfo();
    $request->savedQuery->query->accountInfo->emails = [
        'cumque',
    ];
    $request->savedQuery->query->corpus = QueryCorpusEnum::HANGOUTS_CHAT;
    $request->savedQuery->query->dataScope = QueryDataScopeEnum::HELD_DATA;
    $request->savedQuery->query->driveOptions = new DriveOptions();
    $request->savedQuery->query->driveOptions->clientSideEncryptedOption = DriveOptionsClientSideEncryptedOptionEnum::CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED;
    $request->savedQuery->query->driveOptions->includeSharedDrives = false;
    $request->savedQuery->query->driveOptions->includeTeamDrives = false;
    $request->savedQuery->query->driveOptions->versionDate = 'saepe';
    $request->savedQuery->query->endTime = 'ipsum';
    $request->savedQuery->query->hangoutsChatInfo = new HangoutsChatInfo();
    $request->savedQuery->query->hangoutsChatInfo->roomId = [
        'nobis',
    ];
    $request->savedQuery->query->hangoutsChatOptions = new HangoutsChatOptions();
    $request->savedQuery->query->hangoutsChatOptions->includeRooms = false;
    $request->savedQuery->query->mailOptions = new MailOptions();
    $request->savedQuery->query->mailOptions->clientSideEncryptedOption = MailOptionsClientSideEncryptedOptionEnum::CLIENT_SIDE_ENCRYPTED_OPTION_ENCRYPTED;
    $request->savedQuery->query->mailOptions->excludeDrafts = false;
    $request->savedQuery->query->method = QueryMethodEnum::ROOM;
    $request->savedQuery->query->orgUnitInfo = new OrgUnitInfo();
    $request->savedQuery->query->orgUnitInfo->orgUnitId = 'cupiditate';
    $request->savedQuery->query->searchMethod = QuerySearchMethodEnum::SEARCH_METHOD_UNSPECIFIED;
    $request->savedQuery->query->sharedDriveInfo = new SharedDriveInfo();
    $request->savedQuery->query->sharedDriveInfo->sharedDriveIds = [
        'dolorem',
        'dolore',
        'labore',
        'adipisci',
    ];
    $request->savedQuery->query->sitesUrlInfo = new SitesUrlInfo();
    $request->savedQuery->query->sitesUrlInfo->urls = [
        'architecto',
        'quae',
        'aut',
    ];
    $request->savedQuery->query->startTime = 'quas';
    $request->savedQuery->query->teamDriveInfo = new TeamDriveInfo();
    $request->savedQuery->query->teamDriveInfo->teamDriveIds = [
        'consequatur',
        'est',
        'repellendus',
        'porro',
    ];
    $request->savedQuery->query->terms = 'doloribus';
    $request->savedQuery->query->timeZone = 'ut';
    $request->savedQuery->query->voiceOptions = new VoiceOptions();
    $request->savedQuery->query->voiceOptions->coveredData = [
        VoiceOptionsCoveredDataEnum::VOICEMAILS,
        VoiceOptionsCoveredDataEnum::COVERED_DATA_UNSPECIFIED,
        VoiceOptionsCoveredDataEnum::COVERED_DATA_UNSPECIFIED,
    ];
    $request->savedQuery->savedQueryId = 'laudantium';
    $request->accessToken = 'odio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatibus';
    $request->fields = 'quisquam';
    $request->key = 'vero';
    $request->matterId = 'omnis';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new VaultMattersSavedQueriesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->matters->vaultMattersSavedQueriesCreate($request, $requestSecurity);

    if ($response->savedQuery !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vaultMattersSavedQueriesDelete

Deletes the specified saved query.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersSavedQueriesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersSavedQueriesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VaultMattersSavedQueriesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vero';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dignissimos';
    $request->fields = 'hic';
    $request->key = 'distinctio';
    $request->matterId = 'quod';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->quotaUser = 'similique';
    $request->savedQueryId = 'facilis';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'ducimus';

    $requestSecurity = new VaultMattersSavedQueriesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->matters->vaultMattersSavedQueriesDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vaultMattersSavedQueriesGet

Retrieves the specified saved query.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersSavedQueriesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersSavedQueriesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersSavedQueriesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersSavedQueriesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VaultMattersSavedQueriesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sequi';
    $request->fields = 'natus';
    $request->key = 'impedit';
    $request->matterId = 'aut';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'exercitationem';
    $request->savedQueryId = 'nulla';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'porro';

    $requestSecurity = new VaultMattersSavedQueriesGetSecurity();
    $requestSecurity->option1 = new VaultMattersSavedQueriesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->matters->vaultMattersSavedQueriesGet($request, $requestSecurity);

    if ($response->savedQuery !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vaultMattersSavedQueriesList

Lists the saved queries in a matter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersSavedQueriesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersSavedQueriesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersSavedQueriesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersSavedQueriesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VaultMattersSavedQueriesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eligendi';
    $request->fields = 'ducimus';
    $request->key = 'alias';
    $request->matterId = 'officia';
    $request->oauthToken = 'tempora';
    $request->pageSize = 368584;
    $request->pageToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'possimus';

    $requestSecurity = new VaultMattersSavedQueriesListSecurity();
    $requestSecurity->option1 = new VaultMattersSavedQueriesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->matters->vaultMattersSavedQueriesList($request, $requestSecurity);

    if ($response->listSavedQueriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vaultMattersUndelete

Undeletes the specified matter. Returns the matter with updated state.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersUndeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersUndeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VaultMattersUndeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'ex' => 'laudantium',
    ];
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maiores';
    $request->fields = 'quasi';
    $request->key = 'ex';
    $request->matterId = 'nulla';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'nostrum';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new VaultMattersUndeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->matters->vaultMattersUndelete($request, $requestSecurity);

    if ($response->matter !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vaultMattersUpdate

Updates the specified matter. This updates only the name and description of the matter, identified by matter ID. Changes to any other fields are ignored. Returns the default view of the matter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Matter;
use \OpenAPI\OpenAPI\Models\Shared\MatterPermission;
use \OpenAPI\OpenAPI\Models\Shared\MatterPermissionRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\MatterStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VaultMattersUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VaultMattersUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->matter = new Matter();
    $request->matter->description = 'saepe';
    $request->matter->matterId = 'ea';
    $request->matter->matterPermissions = [
        new MatterPermission(),
        new MatterPermission(),
        new MatterPermission(),
        new MatterPermission(),
    ];
    $request->matter->name = 'Mrs. Sally Jacobi';
    $request->matter->state = MatterStateEnum::DELETED;
    $request->accessToken = 'consectetur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aspernatur';
    $request->fields = 'minima';
    $request->key = 'eaque';
    $request->matterId = 'a';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new VaultMattersUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->matters->vaultMattersUpdate($request, $requestSecurity);

    if ($response->matter !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
