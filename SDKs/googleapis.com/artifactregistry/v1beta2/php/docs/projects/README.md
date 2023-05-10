# projects

### Available Operations

* [artifactregistryProjectsLocationsList](#artifactregistryprojectslocationslist) - Lists information about the supported locations for this service.
* [artifactregistryProjectsLocationsRepositoriesAptArtifactsImport](#artifactregistryprojectslocationsrepositoriesaptartifactsimport) - Imports Apt artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
* [artifactregistryProjectsLocationsRepositoriesAptArtifactsUpload](#artifactregistryprojectslocationsrepositoriesaptartifactsupload) - Directly uploads an Apt artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.
* [artifactregistryProjectsLocationsRepositoriesCreate](#artifactregistryprojectslocationsrepositoriescreate) - Creates a repository. The returned Operation will finish once the repository has been created. Its response will be the created Repository.
* [artifactregistryProjectsLocationsRepositoriesFilesList](#artifactregistryprojectslocationsrepositoriesfileslist) - Lists files.
* [artifactregistryProjectsLocationsRepositoriesGetIamPolicy](#artifactregistryprojectslocationsrepositoriesgetiampolicy) - Gets the IAM policy for a given resource.
* [artifactregistryProjectsLocationsRepositoriesList](#artifactregistryprojectslocationsrepositorieslist) - Lists repositories.
* [artifactregistryProjectsLocationsRepositoriesPackagesList](#artifactregistryprojectslocationsrepositoriespackageslist) - Lists packages.
* [artifactregistryProjectsLocationsRepositoriesPackagesTagsCreate](#artifactregistryprojectslocationsrepositoriespackagestagscreate) - Creates a tag.
* [artifactregistryProjectsLocationsRepositoriesPackagesTagsList](#artifactregistryprojectslocationsrepositoriespackagestagslist) - Lists tags.
* [artifactregistryProjectsLocationsRepositoriesPackagesTagsPatch](#artifactregistryprojectslocationsrepositoriespackagestagspatch) - Updates a tag.
* [artifactregistryProjectsLocationsRepositoriesPackagesVersionsDelete](#artifactregistryprojectslocationsrepositoriespackagesversionsdelete) - Deletes a version and all of its content. The returned operation will complete once the version has been deleted.
* [artifactregistryProjectsLocationsRepositoriesPackagesVersionsGet](#artifactregistryprojectslocationsrepositoriespackagesversionsget) - Gets a version
* [artifactregistryProjectsLocationsRepositoriesPackagesVersionsList](#artifactregistryprojectslocationsrepositoriespackagesversionslist) - Lists versions.
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
use \OpenAPI\OpenAPI\Models\Shared\RepositoryFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\MavenRepositoryConfig;
use \OpenAPI\OpenAPI\Models\Shared\MavenRepositoryConfigVersionPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArtifactregistryProjectsLocationsRepositoriesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->repositoryInput = new RepositoryInput();
    $request->repositoryInput->description = 'aspernatur';
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
    $request->repositoryInput->name = 'Harvey Hessel';
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->fields = 'ipsa';
    $request->key = 'reiciendis';
    $request->oauthToken = 'est';
    $request->parent = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->repositoryId = 'dolores';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'corporis';

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
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'omnis';
    $request->fields = 'nemo';
    $request->filter = 'minima';
    $request->key = 'excepturi';
    $request->oauthToken = 'accusantium';
    $request->pageSize = 438601;
    $request->pageToken = 'culpa';
    $request->parent = 'doloribus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'mollitia';

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
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repellat';
    $request->fields = 'mollitia';
    $request->key = 'occaecati';
    $request->oauthToken = 'numquam';
    $request->optionsRequestedPolicyVersion = 414369;
    $request->prettyPrint = false;
    $request->quotaUser = 'quam';
    $request->resource = 'molestiae';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'error';

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
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laborum';
    $request->fields = 'animi';
    $request->key = 'enim';
    $request->oauthToken = 'odit';
    $request->pageSize = 778346;
    $request->pageToken = 'sequi';
    $request->parent = 'tenetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'possimus';

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
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'temporibus';
    $request->fields = 'laborum';
    $request->key = 'quasi';
    $request->oauthToken = 'reiciendis';
    $request->pageSize = 976460;
    $request->pageToken = 'vero';
    $request->parent = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'ipsa';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->tag = new Tag();
    $request->tag->name = 'Ms. Karla Aufderhar';
    $request->tag->version = 'maiores';
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolore';
    $request->fields = 'iusto';
    $request->key = 'dicta';
    $request->oauthToken = 'harum';
    $request->parent = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->tagId = 'commodi';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'quae';

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
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'excepturi';
    $request->fields = 'pariatur';
    $request->filter = 'modi';
    $request->key = 'praesentium';
    $request->oauthToken = 'rem';
    $request->pageSize = 916723;
    $request->pageToken = 'quasi';
    $request->parent = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'itaque';

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
    $request->tag->name = 'Elizabeth Orn';
    $request->tag->version = 'deserunt';
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'labore';
    $request->fields = 'modi';
    $request->key = 'qui';
    $request->name = 'Mr. Shelly Lueilwitz';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->updateMask = 'fugit';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'excepturi';

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
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'labore';
    $request->fields = 'delectus';
    $request->force = false;
    $request->key = 'eum';
    $request->name = 'Sheri Mayer';
    $request->oauthToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'dolor';

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

## artifactregistryProjectsLocationsRepositoriesPackagesVersionsGet

Gets a version

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'a';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'in';
    $request->key = 'illum';
    $request->name = 'Jean Buckridge';
    $request->oauthToken = 'facere';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'laborum';
    $request->view = ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetViewEnum::FULL;

    $requestSecurity = new ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurity();
    $requestSecurity->option1 = new ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->artifactregistryProjectsLocationsRepositoriesPackagesVersionsGet($request, $requestSecurity);

    if ($response->version !== null) {
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->fields = 'delectus';
    $request->key = 'quidem';
    $request->oauthToken = 'provident';
    $request->orderBy = 'nam';
    $request->pageSize = 659669;
    $request->pageToken = 'blanditiis';
    $request->parent = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'deserunt';
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
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'omnis';
    $request->setIamPolicyRequest->policy->version = 474867;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magnam';
    $request->fields = 'distinctio';
    $request->key = 'id';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->resource = 'suscipit';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'nobis';

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
        'aspernatur',
        'architecto',
        'magnam',
        'et',
    ];
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'quos';
    $request->key = 'sint';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->resource = 'reiciendis';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'ad';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->importYumArtifactsRequest = new ImportYumArtifactsRequest();
    $request->importYumArtifactsRequest->gcsSource = new ImportYumArtifactsGcsSource();
    $request->importYumArtifactsRequest->gcsSource->uris = [
        'necessitatibus',
    ];
    $request->importYumArtifactsRequest->gcsSource->useWildcards = false;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quasi';
    $request->fields = 'iure';
    $request->key = 'doloribus';
    $request->oauthToken = 'debitis';
    $request->parent = 'eius';
    $request->prettyPrint = false;
    $request->quotaUser = 'maxime';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'facilis';

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
    $request->requestBody = 'architecto';
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ullam';
    $request->fields = 'expedita';
    $request->key = 'nihil';
    $request->oauthToken = 'repellat';
    $request->parent = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'sed';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'pariatur';

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
