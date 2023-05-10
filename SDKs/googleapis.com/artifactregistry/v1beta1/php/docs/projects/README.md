# projects

### Available Operations

* [artifactregistryProjectsLocationsList](#artifactregistryprojectslocationslist) - Lists information about the supported locations for this service.
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
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ArtifactregistryProjectsLocationsRepositoriesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArtifactregistryProjectsLocationsRepositoriesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->repositoryInput = new RepositoryInput();
    $request->repositoryInput->description = 'at';
    $request->repositoryInput->format = RepositoryFormatEnum::PYTHON;
    $request->repositoryInput->kmsKeyName = 'molestiae';
    $request->repositoryInput->labels = [
        'quod' => 'esse',
        'totam' => 'porro',
        'dolorum' => 'dicta',
        'nam' => 'officia',
    ];
    $request->repositoryInput->name = 'Wayne Lind';
    $request->accessToken = 'totam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->fields = 'molestiae';
    $request->key = 'modi';
    $request->oauthToken = 'qui';
    $request->parent = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'cum';
    $request->repositoryId = 'esse';
    $request->uploadType = 'ipsum';
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
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->fields = 'sed';
    $request->filter = 'iste';
    $request->key = 'dolor';
    $request->oauthToken = 'natus';
    $request->pageSize = 386489;
    $request->pageToken = 'hic';
    $request->parent = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'fuga';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'corporis';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'architecto';
    $request->key = 'ipsa';
    $request->oauthToken = 'reiciendis';
    $request->optionsRequestedPolicyVersion = 666767;
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->resource = 'laborum';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'dolorem';

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
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'enim';
    $request->fields = 'omnis';
    $request->key = 'nemo';
    $request->oauthToken = 'minima';
    $request->pageSize = 570197;
    $request->pageToken = 'accusantium';
    $request->parent = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'culpa';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'sapiente';

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
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'culpa';
    $request->fields = 'consequuntur';
    $request->key = 'repellat';
    $request->oauthToken = 'mollitia';
    $request->pageSize = 581850;
    $request->pageToken = 'numquam';
    $request->parent = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'quam';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'velit';

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
    $request->tag->name = 'Beatrice Brown';
    $request->tag->version = 'enim';
    $request->accessToken = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sequi';
    $request->fields = 'tenetur';
    $request->key = 'ipsam';
    $request->oauthToken = 'id';
    $request->parent = 'possimus';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->tagId = 'quasi';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'temporibus';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatibus';
    $request->fields = 'vero';
    $request->filter = 'nihil';
    $request->key = 'praesentium';
    $request->oauthToken = 'voluptatibus';
    $request->pageSize = 55714;
    $request->pageToken = 'omnis';
    $request->parent = 'voluptate';
    $request->prettyPrint = false;
    $request->quotaUser = 'cum';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'doloremque';

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
    $request->tag->name = 'Shawna Carter';
    $request->tag->version = 'iusto';
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'enim';
    $request->fields = 'accusamus';
    $request->key = 'commodi';
    $request->name = 'Eric Emmerich';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->updateMask = 'modi';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'rem';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'veritatis';
    $request->force = false;
    $request->key = 'itaque';
    $request->name = 'Erin Altenwerth';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'quibusdam';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'modi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aliquid';
    $request->fields = 'cupiditate';
    $request->key = 'quos';
    $request->name = 'Louise Simonis Sr.';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'facilis';
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
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'non';
    $request->fields = 'eligendi';
    $request->key = 'sint';
    $request->oauthToken = 'aliquid';
    $request->orderBy = 'provident';
    $request->pageSize = 896039;
    $request->pageToken = 'sint';
    $request->parent = 'officia';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'a';
    $request->view = ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnum::FULL;

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
    ];
    $request->setIamPolicyRequest->policy->etag = 'illum';
    $request->setIamPolicyRequest->policy->version = 978571;
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magnam';
    $request->fields = 'cumque';
    $request->key = 'facere';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->resource = 'laborum';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'non';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'accusamus',
        'delectus',
    ];
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nam';
    $request->fields = 'id';
    $request->key = 'blanditiis';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->resource = 'amet';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'nisi';

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
