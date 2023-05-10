# images

### Available Operations

* [computeImagesDelete](#computeimagesdelete) - Deletes the specified image.
* [computeImagesDeprecate](#computeimagesdeprecate) - Sets the deprecation status of an image. If an empty request body is given, clears the deprecation status instead.
* [computeImagesGet](#computeimagesget) - Returns the specified image.
* [computeImagesGetFromFamily](#computeimagesgetfromfamily) - Returns the latest image that is part of an image family and is not deprecated. For more information on image families, see Public image families documentation.
* [computeImagesGetIamPolicy](#computeimagesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeImagesInsert](#computeimagesinsert) - Creates an image in the specified project using the data included in the request.
* [computeImagesList](#computeimageslist) - Retrieves the list of custom images available to the specified project. Custom images are images you create that belong to your project. This method does not get any images that belong to other projects, including publicly-available images, like Debian 8. If you want to get a list of publicly-available images, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud.
* [computeImagesPatch](#computeimagespatch) - Patches the specified image with the data included in the request. Only the following fields can be modified: family, description, deprecation status.
* [computeImagesSetIamPolicy](#computeimagessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeImagesSetLabels](#computeimagessetlabels) - Sets the labels on an image. To learn more about labels, read the Labeling Resources documentation.
* [computeImagesTestIamPermissions](#computeimagestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeImagesDelete

Deletes the specified image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeImagesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptas';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptas';
    $request->fields = 'maiores';
    $request->image = 'ea';
    $request->key = 'vel';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->project = 'accusamus';
    $request->quotaUser = 'reiciendis';
    $request->requestId = 'consequatur';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'accusantium';
    $request->userIp = 'voluptates';

    $requestSecurity = new ComputeImagesDeleteSecurity();
    $requestSecurity->option1 = new ComputeImagesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->images->computeImagesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeImagesDeprecate

Sets the deprecation status of an image. If an empty request body is given, clears the deprecation status instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesDeprecateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeprecationStatus;
use \OpenAPI\OpenAPI\Models\Shared\DeprecationStatusStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\RolloutPolicy;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesDeprecateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesDeprecateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesDeprecateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeImagesDeprecateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->deprecationStatus = new DeprecationStatus();
    $request->deprecationStatus->deleted = 'maiores';
    $request->deprecationStatus->deprecated = 'quaerat';
    $request->deprecationStatus->obsolete = 'numquam';
    $request->deprecationStatus->replacement = 'non';
    $request->deprecationStatus->state = DeprecationStatusStateEnum::DEPRECATED;
    $request->deprecationStatus->stateOverride = new RolloutPolicy();
    $request->deprecationStatus->stateOverride->defaultRolloutTime = 'incidunt';
    $request->deprecationStatus->stateOverride->locationRolloutPolicies = [
        'enim' => 'nihil',
    ];
    $request->accessToken = 'libero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'excepturi';
    $request->fields = 'eos';
    $request->image = 'quisquam';
    $request->key = 'corrupti';
    $request->oauthToken = 'repellendus';
    $request->prettyPrint = false;
    $request->project = 'cum';
    $request->quotaUser = 'quibusdam';
    $request->requestId = 'est';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'similique';
    $request->userIp = 'autem';

    $requestSecurity = new ComputeImagesDeprecateSecurity();
    $requestSecurity->option1 = new ComputeImagesDeprecateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->images->computeImagesDeprecate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeImagesGet

Returns the specified image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeImagesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'id';
    $request->fields = 'odit';
    $request->image = 'inventore';
    $request->key = 'iste';
    $request->oauthToken = 'atque';
    $request->prettyPrint = false;
    $request->project = 'explicabo';
    $request->quotaUser = 'ullam';
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'doloribus';
    $request->userIp = 'pariatur';

    $requestSecurity = new ComputeImagesGetSecurity();
    $requestSecurity->option1 = new ComputeImagesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->images->computeImagesGet($request, $requestSecurity);

    if ($response->image !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeImagesGetFromFamily

Returns the latest image that is part of an image family and is not deprecated. For more information on image families, see Public image families documentation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesGetFromFamilyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesGetFromFamilySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesGetFromFamilySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesGetFromFamilySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesGetFromFamilySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeImagesGetFromFamilyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'similique';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eveniet';
    $request->family = 'nam';
    $request->fields = 'animi';
    $request->key = 'labore';
    $request->oauthToken = 'voluptate';
    $request->prettyPrint = false;
    $request->project = 'voluptatibus';
    $request->quotaUser = 'quam';
    $request->uploadType = 'nulla';
    $request->uploadProtocol = 'dolorem';
    $request->userIp = 'voluptates';

    $requestSecurity = new ComputeImagesGetFromFamilySecurity();
    $requestSecurity->option1 = new ComputeImagesGetFromFamilySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->images->computeImagesGetFromFamily($request, $requestSecurity);

    if ($response->image !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeImagesGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesGetIamPolicySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeImagesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'aliquid';
    $request->key = 'dolore';
    $request->oauthToken = 'voluptatem';
    $request->optionsRequestedPolicyVersion = 849029;
    $request->prettyPrint = false;
    $request->project = 'laboriosam';
    $request->quotaUser = 'culpa';
    $request->resource = 'dicta';
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'ratione';
    $request->userIp = 'vitae';

    $requestSecurity = new ComputeImagesGetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeImagesGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->images->computeImagesGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeImagesInsert

Creates an image in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Image;
use \OpenAPI\OpenAPI\Models\Shared\ImageArchitectureEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeprecationStatus;
use \OpenAPI\OpenAPI\Models\Shared\DeprecationStatusStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\RolloutPolicy;
use \OpenAPI\OpenAPI\Models\Shared\GuestOsFeature;
use \OpenAPI\OpenAPI\Models\Shared\GuestOsFeatureTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomerEncryptionKey;
use \OpenAPI\OpenAPI\Models\Shared\ImageRawDisk;
use \OpenAPI\OpenAPI\Models\Shared\ImageRawDiskContainerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InitialStateConfig;
use \OpenAPI\OpenAPI\Models\Shared\FileContentBuffer;
use \OpenAPI\OpenAPI\Models\Shared\FileContentBufferFileTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImageSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImageStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesInsertSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesInsertSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesInsertSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesInsertSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeImagesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->image = new Image();
    $request->image->architecture = ImageArchitectureEnum::ARM64;
    $request->image->archiveSizeBytes = 'nihil';
    $request->image->creationTimestamp = 'culpa';
    $request->image->deprecated = new DeprecationStatus();
    $request->image->deprecated->deleted = 'temporibus';
    $request->image->deprecated->deprecated = 'a';
    $request->image->deprecated->obsolete = 'ad';
    $request->image->deprecated->replacement = 'cupiditate';
    $request->image->deprecated->state = DeprecationStatusStateEnum::DELETED;
    $request->image->deprecated->stateOverride = new RolloutPolicy();
    $request->image->deprecated->stateOverride->defaultRolloutTime = 'reiciendis';
    $request->image->deprecated->stateOverride->locationRolloutPolicies = [
        'delectus' => 'ab',
        'mollitia' => 'possimus',
        'praesentium' => 'neque',
        'quam' => 'animi',
    ];
    $request->image->description = 'debitis';
    $request->image->diskSizeGb = 'voluptatum';
    $request->image->family = 'voluptatem';
    $request->image->guestOsFeatures = [
        new GuestOsFeature(),
        new GuestOsFeature(),
        new GuestOsFeature(),
        new GuestOsFeature(),
    ];
    $request->image->id = 'vitae';
    $request->image->imageEncryptionKey = new CustomerEncryptionKey();
    $request->image->imageEncryptionKey->kmsKeyName = 'cumque';
    $request->image->imageEncryptionKey->kmsKeyServiceAccount = 'architecto';
    $request->image->imageEncryptionKey->rawKey = 'sint';
    $request->image->imageEncryptionKey->rsaEncryptedKey = 'eligendi';
    $request->image->imageEncryptionKey->sha256 = 'occaecati';
    $request->image->kind = 'quis';
    $request->image->labelFingerprint = 'tempore';
    $request->image->labels = [
        'iste' => 'unde',
        'quas' => 'laboriosam',
        'ducimus' => 'voluptatum',
    ];
    $request->image->licenseCodes = [
        'deserunt',
        'dolor',
        'hic',
        'iure',
    ];
    $request->image->licenses = [
        'autem',
        'iste',
        'cupiditate',
    ];
    $request->image->locked = false;
    $request->image->name = 'Kristine Wilderman';
    $request->image->rawDisk = new ImageRawDisk();
    $request->image->rawDisk->containerType = ImageRawDiskContainerTypeEnum::TAR;
    $request->image->rawDisk->sha1Checksum = 'molestias';
    $request->image->rawDisk->source = 'quod';
    $request->image->rolloutOverride = new RolloutPolicy();
    $request->image->rolloutOverride->defaultRolloutTime = 'repudiandae';
    $request->image->rolloutOverride->locationRolloutPolicies = [
        'consectetur' => 'autem',
    ];
    $request->image->satisfiesPzs = false;
    $request->image->selfLink = 'vitae';
    $request->image->shieldedInstanceInitialState = new InitialStateConfig();
    $request->image->shieldedInstanceInitialState->dbs = [
        new FileContentBuffer(),
        new FileContentBuffer(),
    ];
    $request->image->shieldedInstanceInitialState->dbxs = [
        new FileContentBuffer(),
        new FileContentBuffer(),
    ];
    $request->image->shieldedInstanceInitialState->keks = [
        new FileContentBuffer(),
        new FileContentBuffer(),
    ];
    $request->image->shieldedInstanceInitialState->pk = new FileContentBuffer();
    $request->image->shieldedInstanceInitialState->pk->content = 'quos';
    $request->image->shieldedInstanceInitialState->pk->fileType = FileContentBufferFileTypeEnum::X509;
    $request->image->sourceDisk = 'voluptate';
    $request->image->sourceDiskEncryptionKey = new CustomerEncryptionKey();
    $request->image->sourceDiskEncryptionKey->kmsKeyName = 'error';
    $request->image->sourceDiskEncryptionKey->kmsKeyServiceAccount = 'reprehenderit';
    $request->image->sourceDiskEncryptionKey->rawKey = 'reprehenderit';
    $request->image->sourceDiskEncryptionKey->rsaEncryptedKey = 'animi';
    $request->image->sourceDiskEncryptionKey->sha256 = 'consequatur';
    $request->image->sourceDiskId = 'voluptates';
    $request->image->sourceImage = 'delectus';
    $request->image->sourceImageEncryptionKey = new CustomerEncryptionKey();
    $request->image->sourceImageEncryptionKey->kmsKeyName = 'qui';
    $request->image->sourceImageEncryptionKey->kmsKeyServiceAccount = 'delectus';
    $request->image->sourceImageEncryptionKey->rawKey = 'exercitationem';
    $request->image->sourceImageEncryptionKey->rsaEncryptedKey = 'ipsum';
    $request->image->sourceImageEncryptionKey->sha256 = 'laboriosam';
    $request->image->sourceImageId = 'doloremque';
    $request->image->sourceSnapshot = 'sed';
    $request->image->sourceSnapshotEncryptionKey = new CustomerEncryptionKey();
    $request->image->sourceSnapshotEncryptionKey->kmsKeyName = 'voluptatum';
    $request->image->sourceSnapshotEncryptionKey->kmsKeyServiceAccount = 'debitis';
    $request->image->sourceSnapshotEncryptionKey->rawKey = 'a';
    $request->image->sourceSnapshotEncryptionKey->rsaEncryptedKey = 'itaque';
    $request->image->sourceSnapshotEncryptionKey->sha256 = 'eveniet';
    $request->image->sourceSnapshotId = 'repellat';
    $request->image->sourceType = ImageSourceTypeEnum::RAW;
    $request->image->status = ImageStatusEnum::PENDING;
    $request->image->storageLocations = [
        'aliquam',
    ];
    $request->image->userLicenses = [
        'veniam',
    ];
    $request->accessToken = 'sed';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'possimus';
    $request->fields = 'dignissimos';
    $request->forceCreate = false;
    $request->key = 'itaque';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->project = 'ullam';
    $request->quotaUser = 'non';
    $request->requestId = 'delectus';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'quod';
    $request->userIp = 'sunt';

    $requestSecurity = new ComputeImagesInsertSecurity();
    $requestSecurity->option1 = new ComputeImagesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->images->computeImagesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeImagesList

Retrieves the list of custom images available to the specified project. Custom images are images you create that belong to your project. This method does not get any images that belong to other projects, including publicly-available images, like Debian 8. If you want to get a list of publicly-available images, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeImagesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptates';
    $request->fields = 'officia';
    $request->filter = 'est';
    $request->key = 'in';
    $request->maxResults = 72473;
    $request->oauthToken = 'voluptate';
    $request->orderBy = 'consequatur';
    $request->pageToken = 'delectus';
    $request->prettyPrint = false;
    $request->project = 'incidunt';
    $request->quotaUser = 'dolore';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'est';
    $request->userIp = 'quo';

    $requestSecurity = new ComputeImagesListSecurity();
    $requestSecurity->option1 = new ComputeImagesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->images->computeImagesList($request, $requestSecurity);

    if ($response->imageList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeImagesPatch

Patches the specified image with the data included in the request. Only the following fields can be modified: family, description, deprecation status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Image;
use \OpenAPI\OpenAPI\Models\Shared\ImageArchitectureEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeprecationStatus;
use \OpenAPI\OpenAPI\Models\Shared\DeprecationStatusStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\RolloutPolicy;
use \OpenAPI\OpenAPI\Models\Shared\GuestOsFeature;
use \OpenAPI\OpenAPI\Models\Shared\GuestOsFeatureTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomerEncryptionKey;
use \OpenAPI\OpenAPI\Models\Shared\ImageRawDisk;
use \OpenAPI\OpenAPI\Models\Shared\ImageRawDiskContainerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InitialStateConfig;
use \OpenAPI\OpenAPI\Models\Shared\FileContentBuffer;
use \OpenAPI\OpenAPI\Models\Shared\FileContentBufferFileTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImageSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImageStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeImagesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->image1 = new Image();
    $request->image1->architecture = ImageArchitectureEnum::X8664;
    $request->image1->archiveSizeBytes = 'laboriosam';
    $request->image1->creationTimestamp = 'laboriosam';
    $request->image1->deprecated = new DeprecationStatus();
    $request->image1->deprecated->deleted = 'quam';
    $request->image1->deprecated->deprecated = 'fuga';
    $request->image1->deprecated->obsolete = 'officia';
    $request->image1->deprecated->replacement = 'repellat';
    $request->image1->deprecated->state = DeprecationStatusStateEnum::DEPRECATED;
    $request->image1->deprecated->stateOverride = new RolloutPolicy();
    $request->image1->deprecated->stateOverride->defaultRolloutTime = 'soluta';
    $request->image1->deprecated->stateOverride->locationRolloutPolicies = [
        'culpa' => 'fugiat',
        'inventore' => 'atque',
        'ad' => 'sapiente',
    ];
    $request->image1->description = 'voluptates';
    $request->image1->diskSizeGb = 'ut';
    $request->image1->family = 'nesciunt';
    $request->image1->guestOsFeatures = [
        new GuestOsFeature(),
    ];
    $request->image1->id = 'quibusdam';
    $request->image1->imageEncryptionKey = new CustomerEncryptionKey();
    $request->image1->imageEncryptionKey->kmsKeyName = 'suscipit';
    $request->image1->imageEncryptionKey->kmsKeyServiceAccount = 'quidem';
    $request->image1->imageEncryptionKey->rawKey = 'delectus';
    $request->image1->imageEncryptionKey->rsaEncryptedKey = 'nemo';
    $request->image1->imageEncryptionKey->sha256 = 'cumque';
    $request->image1->kind = 'voluptatum';
    $request->image1->labelFingerprint = 'sequi';
    $request->image1->labels = [
        'maiores' => 'expedita',
        'rerum' => 'totam',
        'quod' => 'aspernatur',
    ];
    $request->image1->licenseCodes = [
        'impedit',
    ];
    $request->image1->licenses = [
        'ex',
        'odio',
        'delectus',
    ];
    $request->image1->locked = false;
    $request->image1->name = 'Bernard Rau';
    $request->image1->rawDisk = new ImageRawDisk();
    $request->image1->rawDisk->containerType = ImageRawDiskContainerTypeEnum::TAR;
    $request->image1->rawDisk->sha1Checksum = 'veniam';
    $request->image1->rawDisk->source = 'repudiandae';
    $request->image1->rolloutOverride = new RolloutPolicy();
    $request->image1->rolloutOverride->defaultRolloutTime = 'sint';
    $request->image1->rolloutOverride->locationRolloutPolicies = [
        'debitis' => 'laboriosam',
        'eos' => 'amet',
        'incidunt' => 'porro',
    ];
    $request->image1->satisfiesPzs = false;
    $request->image1->selfLink = 'occaecati';
    $request->image1->shieldedInstanceInitialState = new InitialStateConfig();
    $request->image1->shieldedInstanceInitialState->dbs = [
        new FileContentBuffer(),
        new FileContentBuffer(),
        new FileContentBuffer(),
        new FileContentBuffer(),
    ];
    $request->image1->shieldedInstanceInitialState->dbxs = [
        new FileContentBuffer(),
        new FileContentBuffer(),
    ];
    $request->image1->shieldedInstanceInitialState->keks = [
        new FileContentBuffer(),
        new FileContentBuffer(),
        new FileContentBuffer(),
    ];
    $request->image1->shieldedInstanceInitialState->pk = new FileContentBuffer();
    $request->image1->shieldedInstanceInitialState->pk->content = 'in';
    $request->image1->shieldedInstanceInitialState->pk->fileType = FileContentBufferFileTypeEnum::UNDEFINED;
    $request->image1->sourceDisk = 'possimus';
    $request->image1->sourceDiskEncryptionKey = new CustomerEncryptionKey();
    $request->image1->sourceDiskEncryptionKey->kmsKeyName = 'tenetur';
    $request->image1->sourceDiskEncryptionKey->kmsKeyServiceAccount = 'recusandae';
    $request->image1->sourceDiskEncryptionKey->rawKey = 'expedita';
    $request->image1->sourceDiskEncryptionKey->rsaEncryptedKey = 'iusto';
    $request->image1->sourceDiskEncryptionKey->sha256 = 'esse';
    $request->image1->sourceDiskId = 'harum';
    $request->image1->sourceImage = 'ad';
    $request->image1->sourceImageEncryptionKey = new CustomerEncryptionKey();
    $request->image1->sourceImageEncryptionKey->kmsKeyName = 'quod';
    $request->image1->sourceImageEncryptionKey->kmsKeyServiceAccount = 'ratione';
    $request->image1->sourceImageEncryptionKey->rawKey = 'totam';
    $request->image1->sourceImageEncryptionKey->rsaEncryptedKey = 'vero';
    $request->image1->sourceImageEncryptionKey->sha256 = 'dolore';
    $request->image1->sourceImageId = 'nam';
    $request->image1->sourceSnapshot = 'officia';
    $request->image1->sourceSnapshotEncryptionKey = new CustomerEncryptionKey();
    $request->image1->sourceSnapshotEncryptionKey->kmsKeyName = 'maiores';
    $request->image1->sourceSnapshotEncryptionKey->kmsKeyServiceAccount = 'cupiditate';
    $request->image1->sourceSnapshotEncryptionKey->rawKey = 'illo';
    $request->image1->sourceSnapshotEncryptionKey->rsaEncryptedKey = 'saepe';
    $request->image1->sourceSnapshotEncryptionKey->sha256 = 'enim';
    $request->image1->sourceSnapshotId = 'eaque';
    $request->image1->sourceType = ImageSourceTypeEnum::RAW;
    $request->image1->status = ImageStatusEnum::FAILED;
    $request->image1->storageLocations = [
        'delectus',
        'deleniti',
        'provident',
        'aut',
    ];
    $request->image1->userLicenses = [
        'nostrum',
        'tempora',
        'nam',
    ];
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nostrum';
    $request->fields = 'maiores';
    $request->imagePathParameter = 'veritatis';
    $request->key = 'autem';
    $request->oauthToken = 'earum';
    $request->prettyPrint = false;
    $request->project = 'minima';
    $request->quotaUser = 'ex';
    $request->requestId = 'possimus';
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'corrupti';
    $request->userIp = 'nostrum';

    $requestSecurity = new ComputeImagesPatchSecurity();
    $requestSecurity->option1 = new ComputeImagesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->images->computeImagesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeImagesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlobalSetPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\RuleActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\ConditionIamEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConditionOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConditionSysEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogConfig;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCloudAuditOptions;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizationLoggingOptions;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizationLoggingOptionsPermissionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCloudAuditOptionsLogNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCounterOptions;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCounterOptionsCustomField;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigDataAccessOptions;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigDataAccessOptionsLogModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeImagesSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->globalSetPolicyRequest = new GlobalSetPolicyRequest();
    $request->globalSetPolicyRequest->bindings = [
        new Binding(),
    ];
    $request->globalSetPolicyRequest->etag = 'maxime';
    $request->globalSetPolicyRequest->policy = new Policy();
    $request->globalSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->globalSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->globalSetPolicyRequest->policy->etag = 'eligendi';
    $request->globalSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
    ];
    $request->globalSetPolicyRequest->policy->version = 238022;
    $request->accessToken = 'sunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'occaecati';
    $request->fields = 'provident';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->project = 'autem';
    $request->quotaUser = 'optio';
    $request->resource = 'eveniet';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'blanditiis';
    $request->userIp = 'a';

    $requestSecurity = new ComputeImagesSetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeImagesSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->images->computeImagesSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeImagesSetLabels

Sets the labels on an image. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlobalSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesSetLabelsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesSetLabelsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesSetLabelsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeImagesSetLabelsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->globalSetLabelsRequest = new GlobalSetLabelsRequest();
    $request->globalSetLabelsRequest->labelFingerprint = 'sapiente';
    $request->globalSetLabelsRequest->labels = [
        'facilis' => 'molestias',
        'dolore' => 'et',
        'accusantium' => 'maiores',
        'nisi' => 'velit',
    ];
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'hic';
    $request->fields = 'blanditiis';
    $request->key = 'vitae';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->project = 'atque';
    $request->quotaUser = 'velit';
    $request->resource = 'molestiae';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'aperiam';
    $request->userIp = 'vitae';

    $requestSecurity = new ComputeImagesSetLabelsSecurity();
    $requestSecurity->option1 = new ComputeImagesSetLabelsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->images->computeImagesSetLabels($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeImagesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeImagesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeImagesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'at',
        'quibusdam',
        'quam',
        'deleniti',
    ];
    $request->accessToken = 'rem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eos';
    $request->fields = 'labore';
    $request->key = 'sunt';
    $request->oauthToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->project = 'iste';
    $request->quotaUser = 'accusamus';
    $request->resource = 'distinctio';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'labore';
    $request->userIp = 'blanditiis';

    $requestSecurity = new ComputeImagesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeImagesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->images->computeImagesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
