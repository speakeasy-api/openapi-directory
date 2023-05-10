<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsBackupPlansBackupsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackupInput;
use \OpenAPI\OpenAPI\Models\Shared\ClusterMetadata;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionKey;
use \OpenAPI\OpenAPI\Models\Shared\NamespacedNames;
use \OpenAPI\OpenAPI\Models\Shared\NamespacedName;
use \OpenAPI\OpenAPI\Models\Shared\Namespaces;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GkebackupProjectsLocationsBackupPlansBackupsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->backupInput = new BackupInput();
    $request->backupInput->clusterMetadata = new ClusterMetadata();
    $request->backupInput->clusterMetadata->anthosVersion = 'provident';
    $request->backupInput->clusterMetadata->backupCrdVersions = [
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
        'illum' => 'vel',
    ];
    $request->backupInput->clusterMetadata->cluster = 'error';
    $request->backupInput->clusterMetadata->gkeVersion = 'deserunt';
    $request->backupInput->clusterMetadata->k8sVersion = 'suscipit';
    $request->backupInput->deleteLockDays = 437587;
    $request->backupInput->description = 'magnam';
    $request->backupInput->encryptionKey = new EncryptionKey();
    $request->backupInput->encryptionKey->gcpKmsEncryptionKey = 'debitis';
    $request->backupInput->labels = [
        'delectus' => 'tempora',
    ];
    $request->backupInput->retainDays = 383441;
    $request->backupInput->selectedApplications = new NamespacedNames();
    $request->backupInput->selectedApplications->namespacedNames = [
        new NamespacedName(),
        new NamespacedName(),
    ];
    $request->backupInput->selectedNamespaces = new Namespaces();
    $request->backupInput->selectedNamespaces->namespaces = [
        'placeat',
        'voluptatum',
        'iusto',
        'excepturi',
    ];
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::PROTO;
    $request->backupId = 'temporibus';
    $request->callback = 'ab';
    $request->fields = 'quis';
    $request->key = 'veritatis';
    $request->oauthToken = 'deserunt';
    $request->parent = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->gkebackupProjectsLocationsBackupPlansBackupsCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->