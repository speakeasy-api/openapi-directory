# projects

### Available Operations

* [artifactregistryProjectsLocationsList](#artifactregistryprojectslocationslist) - Lists information about the supported locations for this service.
* [artifactregistryProjectsLocationsRepositoriesAptArtifactsImport](#artifactregistryprojectslocationsrepositoriesaptartifactsimport) - Imports Apt artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
* [artifactregistryProjectsLocationsRepositoriesAptArtifactsUpload](#artifactregistryprojectslocationsrepositoriesaptartifactsupload) - Directly uploads an Apt artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.
* [artifactregistryProjectsLocationsRepositoriesCreate](#artifactregistryprojectslocationsrepositoriescreate) - Creates a repository. The returned Operation will finish once the repository has been created. Its response will be the created Repository.
* [artifactregistryProjectsLocationsRepositoriesDockerImagesList](#artifactregistryprojectslocationsrepositoriesdockerimageslist) - Lists docker images.
* [artifactregistryProjectsLocationsRepositoriesFilesList](#artifactregistryprojectslocationsrepositoriesfileslist) - Lists files.
* [artifactregistryProjectsLocationsRepositoriesGetIamPolicy](#artifactregistryprojectslocationsrepositoriesgetiampolicy) - Gets the IAM policy for a given resource.
* [artifactregistryProjectsLocationsRepositoriesGoogetArtifactsImport](#artifactregistryprojectslocationsrepositoriesgoogetartifactsimport) - Imports GooGet artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
* [artifactregistryProjectsLocationsRepositoriesGoogetArtifactsUpload](#artifactregistryprojectslocationsrepositoriesgoogetartifactsupload) - Directly uploads a GooGet artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.
* [artifactregistryProjectsLocationsRepositoriesKfpArtifactsUpload](#artifactregistryprojectslocationsrepositorieskfpartifactsupload) - Directly uploads a KFP artifact. The returned Operation will complete once the resource is uploaded. Package, Version, and File resources will be created based on the uploaded artifact. Uploaded artifacts that conflict with existing resources will be overwritten.
* [artifactregistryProjectsLocationsRepositoriesList](#artifactregistryprojectslocationsrepositorieslist) - Lists repositories.
* [artifactregistryProjectsLocationsRepositoriesMavenArtifactsList](#artifactregistryprojectslocationsrepositoriesmavenartifactslist) - Lists maven artifacts.
* [artifactregistryProjectsLocationsRepositoriesNpmPackagesList](#artifactregistryprojectslocationsrepositoriesnpmpackageslist) - Lists npm packages.
* [artifactregistryProjectsLocationsRepositoriesPackagesList](#artifactregistryprojectslocationsrepositoriespackageslist) - Lists packages.
* [artifactregistryProjectsLocationsRepositoriesPackagesTagsCreate](#artifactregistryprojectslocationsrepositoriespackagestagscreate) - Creates a tag.
* [artifactregistryProjectsLocationsRepositoriesPackagesTagsList](#artifactregistryprojectslocationsrepositoriespackagestagslist) - Lists tags.
* [artifactregistryProjectsLocationsRepositoriesPackagesTagsPatch](#artifactregistryprojectslocationsrepositoriespackagestagspatch) - Updates a tag.
* [artifactregistryProjectsLocationsRepositoriesPackagesVersionsDelete](#artifactregistryprojectslocationsrepositoriespackagesversionsdelete) - Deletes a version and all of its content. The returned operation will complete once the version has been deleted.
* [artifactregistryProjectsLocationsRepositoriesPackagesVersionsList](#artifactregistryprojectslocationsrepositoriespackagesversionslist) - Lists versions.
* [artifactregistryProjectsLocationsRepositoriesPythonPackagesGet](#artifactregistryprojectslocationsrepositoriespythonpackagesget) - Gets a python package.
* [artifactregistryProjectsLocationsRepositoriesPythonPackagesList](#artifactregistryprojectslocationsrepositoriespythonpackageslist) - Lists python packages.
* [artifactregistryProjectsLocationsRepositoriesSetIamPolicy](#artifactregistryprojectslocationsrepositoriessetiampolicy) - Updates the IAM policy for a given resource.
* [artifactregistryProjectsLocationsRepositoriesTestIamPermissions](#artifactregistryprojectslocationsrepositoriestestiampermissions) - Tests if the caller has a list of permissions on a resource.
* [artifactregistryProjectsLocationsRepositoriesYumArtifactsImport](#artifactregistryprojectslocationsrepositoriesyumartifactsimport) - Imports Yum (RPM) artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
* [artifactregistryProjectsLocationsRepositoriesYumArtifactsUpload](#artifactregistryprojectslocationsrepositoriesyumartifactsupload) - Directly uploads a Yum artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.

## artifactregistryProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArtifactregistryProjectsLocationsListRequest();
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

    $requestSecurity = new ArtifactregistryProjectsLocationsListSecurity();
    $requestSecurity->option1 = new ArtifactregistryProjectsLocationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->artifactregistryProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## artifactregistryProjectsLocationsRepositoriesAptArtifactsImport

Imports Apt artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImportAptArtifactsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportAptArtifactsGcsSource;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->importAptArtifactsRequest = new ImportAptArtifactsRequest();
    $request->importAptArtifactsRequest->gcsSource = new ImportAptArtifactsGcsSource();
    $request->importAptArtifactsRequest->gcsSource->uris = [
        'maiores',
        'molestiae',
        'quod',
        'quod',
    ];
    $request->importAptArtifactsRequest->gcsSource->useWildcards = false;
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

    $requestSecurity = new ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->artifactregistryProjectsLocationsRepositoriesAptArtifactsImport($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## artifactregistryProjectsLocationsRepositoriesAptArtifactsUpload

Directly uploads an Apt artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = 'optio';
    $request->accessToken = 'totam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->fields = 'molestiae';
    $request->key = 'modi';
    $request->oauthToken = 'qui';
    $request->parent = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'cum';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->artifactregistryProjectsLocationsRepositoriesAptArtifactsUpload($request, $requestSecurity);

    if ($response->uploadAptArtifactMediaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## artifactregistryProjectsLocationsRepositoriesCreate

Creates a repository. The returned Operation will finish once the repository has been created. Its response will be the created Repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryInput;
use \OpenAPI\OpenAPI\Models\Shared\DockerRepositoryConfig;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\MavenRepositoryConfig;
use \OpenAPI\OpenAPI\Models\Shared\MavenRepositoryConfigVersionPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\RepositoryModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoteRepositoryConfig;
use \OpenAPI\OpenAPI\Models\Shared\DockerRepository;
use \OpenAPI\OpenAPI\Models\Shared\DockerRepositoryPublicRepositoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\MavenRepository;
use \OpenAPI\OpenAPI\Models\Shared\MavenRepositoryPublicRepositoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\NpmRepository;
use \OpenAPI\OpenAPI\Models\Shared\NpmRepositoryPublicRepositoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\PythonRepository;
use \OpenAPI\OpenAPI\Models\Shared\PythonRepositoryPublicRepositoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\VirtualRepositoryConfig;
use \OpenAPI\OpenAPI\Models\Shared\UpstreamPolicy;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArtifactregistryProjectsLocationsRepositoriesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->repositoryInput = new RepositoryInput();
    $request->repositoryInput->description = 'aspernatur';
    $request->repositoryInput->dockerConfig = new DockerRepositoryConfig();
    $request->repositoryInput->dockerConfig->immutableTags = false;
    $request->repositoryInput->format = RepositoryFormatEnum::FORMAT_UNSPECIFIED;
    $request->repositoryInput->kmsKeyName = 'ad';
    $request->repositoryInput->labels = [
        'sed' => 'iste',
        'dolor' => 'natus',
        'laboriosam' => 'hic',
    ];
    $request->repositoryInput->mavenConfig = new MavenRepositoryConfig();
    $request->repositoryInput->mavenConfig->allowSnapshotOverwrites = false;
    $request->repositoryInput->mavenConfig->versionPolicy = MavenRepositoryConfigVersionPolicyEnum::SNAPSHOT;
    $request->repositoryInput->mode = RepositoryModeEnum::VIRTUAL_REPOSITORY;
    $request->repositoryInput->name = 'Stacy Moore';
    $request->repositoryInput->remoteRepositoryConfig = new RemoteRepositoryConfig();
    $request->repositoryInput->remoteRepositoryConfig->description = 'quidem';
    $request->repositoryInput->remoteRepositoryConfig->dockerRepository = new DockerRepository();
    $request->repositoryInput->remoteRepositoryConfig->dockerRepository->publicRepository = DockerRepositoryPublicRepositoryEnum::PUBLIC_REPOSITORY_UNSPECIFIED;
    $request->repositoryInput->remoteRepositoryConfig->mavenRepository = new MavenRepository();
    $request->repositoryInput->remoteRepositoryConfig->mavenRepository->publicRepository = MavenRepositoryPublicRepositoryEnum::PUBLIC_REPOSITORY_UNSPECIFIED;
    $request->repositoryInput->remoteRepositoryConfig->npmRepository = new NpmRepository();
    $request->repositoryInput->remoteRepositoryConfig->npmRepository->publicRepository = NpmRepositoryPublicRepositoryEnum::NPMJS;
    $request->repositoryInput->remoteRepositoryConfig->pythonRepository = new PythonRepository();
    $request->repositoryInput->remoteRepositoryConfig->pythonRepository->publicRepository = PythonRepositoryPublicRepositoryEnum::PYPI;
    $request->repositoryInput->virtualRepositoryConfig = new VirtualRepositoryConfig();
    $request->repositoryInput->virtualRepositoryConfig->upstreamPolicies = [
        new UpstreamPolicy(),
        new UpstreamPolicy(),
        new UpstreamPolicy(),
    ];
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorem';
    $request->fields = 'corporis';
    $request->key = 'explicabo';
    $request->oauthToken = 'nobis';
    $request->parent = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->repositoryId = 'nemo';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new ArtifactregistryProjectsLocationsRepositoriesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->artifactregistryProjectsLocationsRepositoriesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## artifactregistryProjectsLocationsRepositoriesDockerImagesList

Lists docker images.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesDockerImagesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesDockerImagesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesDockerImagesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesDockerImagesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArtifactregistryProjectsLocationsRepositoriesDockerImagesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'sapiente';
    $request->key = 'architecto';
    $request->oauthToken = 'mollitia';
    $request->orderBy = 'dolorem';
    $request->pageSize = 635059;
    $request->pageToken = 'consequuntur';
    $request->parent = 'repellat';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'numquam';

    $requestSecurity = new ArtifactregistryProjectsLocationsRepositoriesDockerImagesListSecurity();
    $requestSecurity->option1 = new ArtifactregistryProjectsLocationsRepositoriesDockerImagesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->artifactregistryProjectsLocationsRepositoriesDockerImagesList($request, $requestSecurity);

    if ($response->listDockerImagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## artifactregistryProjectsLocationsRepositoriesFilesList

Lists files.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesFilesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesFilesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesFilesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesFilesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArtifactregistryProjectsLocationsRepositoriesFilesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'velit';
    $request->fields = 'error';
    $request->filter = 'quia';
    $request->key = 'quis';
    $request->oauthToken = 'vitae';
    $request->orderBy = 'laborum';
    $request->pageSize = 656330;
    $request->pageToken = 'enim';
    $request->parent = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'tenetur';

    $requestSecurity = new ArtifactregistryProjectsLocationsRepositoriesFilesListSecurity();
    $requestSecurity->option1 = new ArtifactregistryProjectsLocationsRepositoriesFilesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->artifactregistryProjectsLocationsRepositoriesFilesList($request, $requestSecurity);

    if ($response->listFilesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## artifactregistryProjectsLocationsRepositoriesGetIamPolicy

Gets the IAM policy for a given resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesGetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'id';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aut';
    $request->fields = 'quasi';
    $request->key = 'error';
    $request->oauthToken = 'temporibus';
    $request->optionsRequestedPolicyVersion = 673660;
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->resource = 'reiciendis';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'vero';

    $requestSecurity = new ArtifactregistryProjectsLocationsRepositoriesGetIamPolicySecurity();
    $requestSecurity->option1 = new ArtifactregistryProjectsLocationsRepositoriesGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->artifactregistryProjectsLocationsRepositoriesGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## artifactregistryProjectsLocationsRepositoriesGoogetArtifactsImport

Imports GooGet artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImportGoogetArtifactsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportGoogetArtifactsGcsSource;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsImportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsImportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->importGoogetArtifactsRequest = new ImportGoogetArtifactsRequest();
    $request->importGoogetArtifactsRequest->gcsSource = new ImportGoogetArtifactsGcsSource();
    $request->importGoogetArtifactsRequest->gcsSource->uris = [
        'voluptatibus',
        'ipsa',
        'omnis',
    ];
    $request->importGoogetArtifactsRequest->gcsSource->useWildcards = false;
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

    $requestSecurity = new ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsImportSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->artifactregistryProjectsLocationsRepositoriesGoogetArtifactsImport($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## artifactregistryProjectsLocationsRepositoriesGoogetArtifactsUpload

Directly uploads a GooGet artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsUploadRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = 'dicta';
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

    $requestSecurity = new ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsUploadSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->artifactregistryProjectsLocationsRepositoriesGoogetArtifactsUpload($request, $requestSecurity);

    if ($response->uploadGoogetArtifactMediaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## artifactregistryProjectsLocationsRepositoriesKfpArtifactsUpload

Directly uploads a KFP artifact. The returned Operation will complete once the resource is uploaded. Package, Version, and File resources will be created based on the uploaded artifact. Uploaded artifacts that conflict with existing resources will be overwritten.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = 'modi';
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptates';
    $request->fields = 'quasi';
    $request->key = 'repudiandae';
    $request->oauthToken = 'sint';
    $request->parent = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'itaque';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->artifactregistryProjectsLocationsRepositoriesKfpArtifactsUpload($request, $requestSecurity);

    if ($response->uploadKfpArtifactMediaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## artifactregistryProjectsLocationsRepositoriesList

Lists repositories.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArtifactregistryProjectsLocationsRepositoriesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'est';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'explicabo';
    $request->fields = 'deserunt';
    $request->key = 'distinctio';
    $request->oauthToken = 'quibusdam';
    $request->pageSize = 289406;
    $request->pageToken = 'modi';
    $request->parent = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'quos';

    $requestSecurity = new ArtifactregistryProjectsLocationsRepositoriesListSecurity();
    $requestSecurity->option1 = new ArtifactregistryProjectsLocationsRepositoriesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->artifactregistryProjectsLocationsRepositoriesList($request, $requestSecurity);

    if ($response->listRepositoriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## artifactregistryProjectsLocationsRepositoriesMavenArtifactsList

Lists maven artifacts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magni';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->fields = 'alias';
    $request->key = 'fugit';
    $request->oauthToken = 'dolorum';
    $request->pageSize = 569618;
    $request->pageToken = 'tempora';
    $request->parent = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempore';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurity();
    $requestSecurity->option1 = new ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->artifactregistryProjectsLocationsRepositoriesMavenArtifactsList($request, $requestSecurity);

    if ($response->listMavenArtifactsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## artifactregistryProjectsLocationsRepositoriesNpmPackagesList

Lists npm packages.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'non';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'aliquid';
    $request->key = 'provident';
    $request->oauthToken = 'necessitatibus';
    $request->pageSize = 572252;
    $request->pageToken = 'officia';
    $request->parent = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurity();
    $requestSecurity->option1 = new ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->artifactregistryProjectsLocationsRepositoriesNpmPackagesList($request, $requestSecurity);

    if ($response->listNpmPackagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## artifactregistryProjectsLocationsRepositoriesPackagesList

Lists packages.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPackagesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArtifactregistryProjectsLocationsRepositoriesPackagesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'in';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->fields = 'rerum';
    $request->key = 'dicta';
    $request->oauthToken = 'magnam';
    $request->pageSize = 767024;
    $request->pageToken = 'facere';
    $request->parent = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurity();
    $requestSecurity->option1 = new ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->artifactregistryProjectsLocationsRepositoriesPackagesList($request, $requestSecurity);

    if ($response->listPackagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## artifactregistryProjectsLocationsRepositoriesPackagesTagsCreate

Creates a tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->tag = new Tag();
    $request->tag->name = 'Jon Tillman';
    $request->tag->version = 'provident';
    $request->accessToken = 'nam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'blanditiis';
    $request->fields = 'deleniti';
    $request->key = 'sapiente';
    $request->oauthToken = 'amet';
    $request->parent = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->tagId = 'vel';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->artifactregistryProjectsLocationsRepositoriesPackagesTagsCreate($request, $requestSecurity);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## artifactregistryProjectsLocationsRepositoriesPackagesTagsList

Lists tags.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magnam';
    $request->fields = 'distinctio';
    $request->filter = 'id';
    $request->key = 'labore';
    $request->oauthToken = 'labore';
    $request->pageSize = 383462;
    $request->pageToken = 'natus';
    $request->parent = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'aspernatur';

    $requestSecurity = new ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListSecurity();
    $requestSecurity->option1 = new ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->artifactregistryProjectsLocationsRepositoriesPackagesTagsList($request, $requestSecurity);

    if ($response->listTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## artifactregistryProjectsLocationsRepositoriesPackagesTagsPatch

Updates a tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->tag = new Tag();
    $request->tag->name = 'Frances Marks';
    $request->tag->version = 'quos';
    $request->accessToken = 'sint';
    $request->alt = AltEnum::JSON;
    $request->callback = 'mollitia';
    $request->fields = 'reiciendis';
    $request->key = 'mollitia';
    $request->name = 'Natalie Ernser';
    $request->oauthToken = 'nemo';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->updateMask = 'iure';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->artifactregistryProjectsLocationsRepositoriesPackagesTagsPatch($request, $requestSecurity);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## artifactregistryProjectsLocationsRepositoriesPackagesVersionsDelete

Deletes a version and all of its content. The returned operation will complete once the version has been deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'facilis';
    $request->fields = 'in';
    $request->force = false;
    $request->key = 'architecto';
    $request->name = 'Elvira Herman';
    $request->oauthToken = 'repellat';
    $request->prettyPrint = false;
    $request->quotaUser = 'quibusdam';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->artifactregistryProjectsLocationsRepositoriesPackagesVersionsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## artifactregistryProjectsLocationsRepositoriesPackagesVersionsList

Lists versions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'praesentium';
    $request->fields = 'natus';
    $request->key = 'magni';
    $request->oauthToken = 'sunt';
    $request->orderBy = 'quo';
    $request->pageSize = 848009;
    $request->pageToken = 'pariatur';
    $request->parent = 'maxime';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'odit';
    $request->view = ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnum::BASIC;

    $requestSecurity = new ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurity();
    $requestSecurity->option1 = new ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->artifactregistryProjectsLocationsRepositoriesPackagesVersionsList($request, $requestSecurity);

    if ($response->listVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## artifactregistryProjectsLocationsRepositoriesPythonPackagesGet

Gets a python package.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ab';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'ipsam';
    $request->key = 'voluptate';
    $request->name = 'Candice Beatty';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'amet';
    $request->view = ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetViewEnum::VERSION_VIEW_UNSPECIFIED;

    $requestSecurity = new ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurity();
    $requestSecurity->option1 = new ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->artifactregistryProjectsLocationsRepositoriesPythonPackagesGet($request, $requestSecurity);

    if ($response->pythonPackage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## artifactregistryProjectsLocationsRepositoriesPythonPackagesList

Lists python packages.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'libero';
    $request->fields = 'nobis';
    $request->key = 'dolores';
    $request->oauthToken = 'quis';
    $request->pageSize = 521037;
    $request->pageToken = 'dignissimos';
    $request->parent = 'eaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'eos';

    $requestSecurity = new ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListSecurity();
    $requestSecurity->option1 = new ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->artifactregistryProjectsLocationsRepositoriesPythonPackagesList($request, $requestSecurity);

    if ($response->listPythonPackagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## artifactregistryProjectsLocationsRepositoriesSetIamPolicy

Updates the IAM policy for a given resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'minus';
    $request->setIamPolicyRequest->policy->version = 463451;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nostrum';
    $request->fields = 'hic';
    $request->key = 'recusandae';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'facilis';
    $request->resource = 'perspiciatis';
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'porro';

    $requestSecurity = new ArtifactregistryProjectsLocationsRepositoriesSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->artifactregistryProjectsLocationsRepositoriesSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## artifactregistryProjectsLocationsRepositoriesTestIamPermissions

Tests if the caller has a list of permissions on a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'error',
        'eaque',
        'occaecati',
    ];
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'asperiores';
    $request->fields = 'earum';
    $request->key = 'modi';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->resource = 'deleniti';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'provident';

    $requestSecurity = new ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->artifactregistryProjectsLocationsRepositoriesTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## artifactregistryProjectsLocationsRepositoriesYumArtifactsImport

Imports Yum (RPM) artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImportYumArtifactsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportYumArtifactsGcsSource;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->importYumArtifactsRequest = new ImportYumArtifactsRequest();
    $request->importYumArtifactsRequest->gcsSource = new ImportYumArtifactsGcsSource();
    $request->importYumArtifactsRequest->gcsSource->uris = [
        'delectus',
        'quaerat',
        'quos',
    ];
    $request->importYumArtifactsRequest->gcsSource->useWildcards = false;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorem';
    $request->fields = 'dolor';
    $request->key = 'qui';
    $request->oauthToken = 'ipsum';
    $request->parent = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->artifactregistryProjectsLocationsRepositoriesYumArtifactsImport($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## artifactregistryProjectsLocationsRepositoriesYumArtifactsUpload

Directly uploads a Yum artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = 'reiciendis';
    $request->accessToken = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'numquam';
    $request->fields = 'veritatis';
    $request->key = 'ipsa';
    $request->oauthToken = 'ipsa';
    $request->parent = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'odio';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->artifactregistryProjectsLocationsRepositoriesYumArtifactsUpload($request, $requestSecurity);

    if ($response->uploadYumArtifactMediaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
