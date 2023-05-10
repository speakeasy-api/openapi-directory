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
    $request->accessToken = 'aut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quod';
    $request->fields = 'quo';
    $request->image = 'architecto';
    $request->key = 'voluptatem';
    $request->oauthToken = 'perspiciatis';
    $request->prettyPrint = false;
    $request->project = 'ea';
    $request->quotaUser = 'eius';
    $request->requestId = 'aperiam';
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'non';
    $request->userIp = 'beatae';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->deprecationStatus = new DeprecationStatus();
    $request->deprecationStatus->deleted = 'rerum';
    $request->deprecationStatus->deprecated = 'ipsum';
    $request->deprecationStatus->obsolete = 'debitis';
    $request->deprecationStatus->replacement = 'quis';
    $request->deprecationStatus->state = DeprecationStatusStateEnum::ACTIVE;
    $request->deprecationStatus->stateOverride = new RolloutPolicy();
    $request->deprecationStatus->stateOverride->defaultRolloutTime = 'incidunt';
    $request->deprecationStatus->stateOverride->locationRolloutPolicies = [
        'delectus' => 'aliquid',
        'ullam' => 'maiores',
    ];
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eos';
    $request->fields = 'assumenda';
    $request->image = 'cumque';
    $request->key = 'ut';
    $request->oauthToken = 'quae';
    $request->prettyPrint = false;
    $request->project = 'nihil';
    $request->quotaUser = 'quam';
    $request->requestId = 'assumenda';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'cumque';
    $request->userIp = 'placeat';

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
    $request->accessToken = 'tenetur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusantium';
    $request->fields = 'corrupti';
    $request->image = 'itaque';
    $request->key = 'earum';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->project = 'dicta';
    $request->quotaUser = 'corporis';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'eveniet';
    $request->userIp = 'cum';

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
    $request->accessToken = 'illum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'officiis';
    $request->family = 'quasi';
    $request->fields = 'accusamus';
    $request->key = 'animi';
    $request->oauthToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->project = 'voluptatem';
    $request->quotaUser = 'maiores';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'veniam';
    $request->userIp = 'fuga';

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
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sed';
    $request->fields = 'deserunt';
    $request->key = 'eligendi';
    $request->oauthToken = 'id';
    $request->optionsRequestedPolicyVersion = 719077;
    $request->prettyPrint = false;
    $request->project = 'corporis';
    $request->quotaUser = 'quas';
    $request->resource = 'soluta';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'unde';
    $request->userIp = 'et';

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
    $request->image->archiveSizeBytes = 'sed';
    $request->image->creationTimestamp = 'suscipit';
    $request->image->deprecated = new DeprecationStatus();
    $request->image->deprecated->deleted = 'facere';
    $request->image->deprecated->deprecated = 'pariatur';
    $request->image->deprecated->obsolete = 'nam';
    $request->image->deprecated->replacement = 'quaerat';
    $request->image->deprecated->state = DeprecationStatusStateEnum::DEPRECATED;
    $request->image->deprecated->stateOverride = new RolloutPolicy();
    $request->image->deprecated->stateOverride->defaultRolloutTime = 'sint';
    $request->image->deprecated->stateOverride->locationRolloutPolicies = [
        'vel' => 'quasi',
        'vero' => 'odio',
    ];
    $request->image->description = 'numquam';
    $request->image->diskSizeGb = 'fugit';
    $request->image->family = 'inventore';
    $request->image->guestOsFeatures = [
        new GuestOsFeature(),
        new GuestOsFeature(),
        new GuestOsFeature(),
        new GuestOsFeature(),
    ];
    $request->image->id = 'nobis';
    $request->image->imageEncryptionKey = new CustomerEncryptionKey();
    $request->image->imageEncryptionKey->kmsKeyName = 'recusandae';
    $request->image->imageEncryptionKey->kmsKeyServiceAccount = 'commodi';
    $request->image->imageEncryptionKey->rawKey = 'possimus';
    $request->image->imageEncryptionKey->rsaEncryptedKey = 'provident';
    $request->image->imageEncryptionKey->sha256 = 'veniam';
    $request->image->kind = 'sit';
    $request->image->labelFingerprint = 'fugit';
    $request->image->labels = [
        'consequatur' => 'vero',
        'id' => 'error',
        'ratione' => 'perferendis',
        'distinctio' => 'voluptas',
    ];
    $request->image->licenseCodes = [
        'maiores',
        'nihil',
        'fuga',
    ];
    $request->image->licenses = [
        'consequuntur',
        'maiores',
        'esse',
        'explicabo',
    ];
    $request->image->locked = false;
    $request->image->name = 'Julian Lesch Jr.';
    $request->image->rawDisk = new ImageRawDisk();
    $request->image->rawDisk->containerType = ImageRawDiskContainerTypeEnum::TAR;
    $request->image->rawDisk->sha1Checksum = 'natus';
    $request->image->rawDisk->source = 'voluptatem';
    $request->image->rolloutOverride = new RolloutPolicy();
    $request->image->rolloutOverride->defaultRolloutTime = 'tempora';
    $request->image->rolloutOverride->locationRolloutPolicies = [
        'quasi' => 'veritatis',
        'ex' => 'doloremque',
        'quas' => 'dolores',
    ];
    $request->image->satisfiesPzs = false;
    $request->image->selfLink = 'perferendis';
    $request->image->selfLinkWithId = 'esse';
    $request->image->shieldedInstanceInitialState = new InitialStateConfig();
    $request->image->shieldedInstanceInitialState->dbs = [
        new FileContentBuffer(),
        new FileContentBuffer(),
        new FileContentBuffer(),
    ];
    $request->image->shieldedInstanceInitialState->dbxs = [
        new FileContentBuffer(),
        new FileContentBuffer(),
        new FileContentBuffer(),
    ];
    $request->image->shieldedInstanceInitialState->keks = [
        new FileContentBuffer(),
        new FileContentBuffer(),
        new FileContentBuffer(),
    ];
    $request->image->shieldedInstanceInitialState->pk = new FileContentBuffer();
    $request->image->shieldedInstanceInitialState->pk->content = 'voluptates';
    $request->image->shieldedInstanceInitialState->pk->fileType = FileContentBufferFileTypeEnum::X509;
    $request->image->sourceDisk = 'autem';
    $request->image->sourceDiskEncryptionKey = new CustomerEncryptionKey();
    $request->image->sourceDiskEncryptionKey->kmsKeyName = 'vel';
    $request->image->sourceDiskEncryptionKey->kmsKeyServiceAccount = 'beatae';
    $request->image->sourceDiskEncryptionKey->rawKey = 'quos';
    $request->image->sourceDiskEncryptionKey->rsaEncryptedKey = 'consectetur';
    $request->image->sourceDiskEncryptionKey->sha256 = 'soluta';
    $request->image->sourceDiskId = 'tenetur';
    $request->image->sourceImage = 'necessitatibus';
    $request->image->sourceImageEncryptionKey = new CustomerEncryptionKey();
    $request->image->sourceImageEncryptionKey->kmsKeyName = 'perspiciatis';
    $request->image->sourceImageEncryptionKey->kmsKeyServiceAccount = 'suscipit';
    $request->image->sourceImageEncryptionKey->rawKey = 'ullam';
    $request->image->sourceImageEncryptionKey->rsaEncryptedKey = 'unde';
    $request->image->sourceImageEncryptionKey->sha256 = 'debitis';
    $request->image->sourceImageId = 'quidem';
    $request->image->sourceSnapshot = 'magnam';
    $request->image->sourceSnapshotEncryptionKey = new CustomerEncryptionKey();
    $request->image->sourceSnapshotEncryptionKey->kmsKeyName = 'doloremque';
    $request->image->sourceSnapshotEncryptionKey->kmsKeyServiceAccount = 'accusamus';
    $request->image->sourceSnapshotEncryptionKey->rawKey = 'quod';
    $request->image->sourceSnapshotEncryptionKey->rsaEncryptedKey = 'sunt';
    $request->image->sourceSnapshotEncryptionKey->sha256 = 'voluptas';
    $request->image->sourceSnapshotId = 'earum';
    $request->image->sourceType = ImageSourceTypeEnum::RAW;
    $request->image->status = ImageStatusEnum::PENDING;
    $request->image->storageLocations = [
        'nihil',
        'nostrum',
        'rerum',
        'perferendis',
    ];
    $request->image->userLicenses = [
        'ullam',
        'ratione',
        'eos',
    ];
    $request->accessToken = 'id';
    $request->alt = AltEnum::JSON;
    $request->callback = 'illum';
    $request->fields = 'error';
    $request->forceCreate = false;
    $request->key = 'consectetur';
    $request->oauthToken = 'reprehenderit';
    $request->prettyPrint = false;
    $request->project = 'eligendi';
    $request->quotaUser = 'cum';
    $request->requestId = 'culpa';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'a';
    $request->userIp = 'magnam';

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
    $request->accessToken = 'ad';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quod';
    $request->fields = 'quaerat';
    $request->filter = 'voluptatum';
    $request->key = 'numquam';
    $request->maxResults = 127380;
    $request->oauthToken = 'eligendi';
    $request->orderBy = 'cupiditate';
    $request->pageToken = 'tempore';
    $request->prettyPrint = false;
    $request->project = 'odit';
    $request->quotaUser = 'est';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'at';
    $request->uploadProtocol = 'ipsum';
    $request->userIp = 'explicabo';
    $request->zone = 'nulla';

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
    $request->image1->archiveSizeBytes = 'necessitatibus';
    $request->image1->creationTimestamp = 'voluptatum';
    $request->image1->deprecated = new DeprecationStatus();
    $request->image1->deprecated->deleted = 'quasi';
    $request->image1->deprecated->deprecated = 'mollitia';
    $request->image1->deprecated->obsolete = 'voluptatum';
    $request->image1->deprecated->replacement = 'blanditiis';
    $request->image1->deprecated->state = DeprecationStatusStateEnum::OBSOLETE;
    $request->image1->deprecated->stateOverride = new RolloutPolicy();
    $request->image1->deprecated->stateOverride->defaultRolloutTime = 'ut';
    $request->image1->deprecated->stateOverride->locationRolloutPolicies = [
        'labore' => 'ut',
        'enim' => 'nihil',
    ];
    $request->image1->description = 'ratione';
    $request->image1->diskSizeGb = 'tenetur';
    $request->image1->family = 'saepe';
    $request->image1->guestOsFeatures = [
        new GuestOsFeature(),
        new GuestOsFeature(),
        new GuestOsFeature(),
        new GuestOsFeature(),
    ];
    $request->image1->id = 'nulla';
    $request->image1->imageEncryptionKey = new CustomerEncryptionKey();
    $request->image1->imageEncryptionKey->kmsKeyName = 'tempora';
    $request->image1->imageEncryptionKey->kmsKeyServiceAccount = 'quam';
    $request->image1->imageEncryptionKey->rawKey = 'consectetur';
    $request->image1->imageEncryptionKey->rsaEncryptedKey = 'nemo';
    $request->image1->imageEncryptionKey->sha256 = 'nesciunt';
    $request->image1->kind = 'earum';
    $request->image1->labelFingerprint = 'eum';
    $request->image1->labels = [
        'placeat' => 'quos',
    ];
    $request->image1->licenseCodes = [
        'eaque',
    ];
    $request->image1->licenses = [
        'ratione',
        'nihil',
        'unde',
    ];
    $request->image1->locked = false;
    $request->image1->name = 'Orlando Jacobson';
    $request->image1->rawDisk = new ImageRawDisk();
    $request->image1->rawDisk->containerType = ImageRawDiskContainerTypeEnum::TAR;
    $request->image1->rawDisk->sha1Checksum = 'at';
    $request->image1->rawDisk->source = 'ad';
    $request->image1->rolloutOverride = new RolloutPolicy();
    $request->image1->rolloutOverride->defaultRolloutTime = 'asperiores';
    $request->image1->rolloutOverride->locationRolloutPolicies = [
        'cumque' => 'sapiente',
        'quam' => 'occaecati',
        'repellendus' => 'culpa',
    ];
    $request->image1->satisfiesPzs = false;
    $request->image1->selfLink = 'dicta';
    $request->image1->selfLinkWithId = 'rem';
    $request->image1->shieldedInstanceInitialState = new InitialStateConfig();
    $request->image1->shieldedInstanceInitialState->dbs = [
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
    $request->image1->shieldedInstanceInitialState->pk->content = 'magni';
    $request->image1->shieldedInstanceInitialState->pk->fileType = FileContentBufferFileTypeEnum::BIN;
    $request->image1->sourceDisk = 'harum';
    $request->image1->sourceDiskEncryptionKey = new CustomerEncryptionKey();
    $request->image1->sourceDiskEncryptionKey->kmsKeyName = 'voluptatibus';
    $request->image1->sourceDiskEncryptionKey->kmsKeyServiceAccount = 'omnis';
    $request->image1->sourceDiskEncryptionKey->rawKey = 'quis';
    $request->image1->sourceDiskEncryptionKey->rsaEncryptedKey = 'quos';
    $request->image1->sourceDiskEncryptionKey->sha256 = 'natus';
    $request->image1->sourceDiskId = 'aliquam';
    $request->image1->sourceImage = 'vero';
    $request->image1->sourceImageEncryptionKey = new CustomerEncryptionKey();
    $request->image1->sourceImageEncryptionKey->kmsKeyName = 'nisi';
    $request->image1->sourceImageEncryptionKey->kmsKeyServiceAccount = 'praesentium';
    $request->image1->sourceImageEncryptionKey->rawKey = 'eum';
    $request->image1->sourceImageEncryptionKey->rsaEncryptedKey = 'vitae';
    $request->image1->sourceImageEncryptionKey->sha256 = 'animi';
    $request->image1->sourceImageId = 'possimus';
    $request->image1->sourceSnapshot = 'libero';
    $request->image1->sourceSnapshotEncryptionKey = new CustomerEncryptionKey();
    $request->image1->sourceSnapshotEncryptionKey->kmsKeyName = 'ullam';
    $request->image1->sourceSnapshotEncryptionKey->kmsKeyServiceAccount = 'quaerat';
    $request->image1->sourceSnapshotEncryptionKey->rawKey = 'maiores';
    $request->image1->sourceSnapshotEncryptionKey->rsaEncryptedKey = 'iste';
    $request->image1->sourceSnapshotEncryptionKey->sha256 = 'accusamus';
    $request->image1->sourceSnapshotId = 'ipsam';
    $request->image1->sourceType = ImageSourceTypeEnum::RAW;
    $request->image1->status = ImageStatusEnum::READY;
    $request->image1->storageLocations = [
        'ullam',
        'inventore',
    ];
    $request->image1->userLicenses = [
        'occaecati',
        'doloribus',
        'necessitatibus',
        'rem',
    ];
    $request->accessToken = 'a';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veniam';
    $request->fields = 'aut';
    $request->imagePathParameter = 'magni';
    $request->key = 'rerum';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->project = 'nulla';
    $request->quotaUser = 'quod';
    $request->requestId = 'non';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'enim';
    $request->userIp = 'alias';

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
        new Binding(),
    ];
    $request->globalSetPolicyRequest->etag = 'illo';
    $request->globalSetPolicyRequest->policy = new Policy();
    $request->globalSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->globalSetPolicyRequest->policy->bindings = [
        new Binding(),
    ];
    $request->globalSetPolicyRequest->policy->etag = 'molestiae';
    $request->globalSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
    ];
    $request->globalSetPolicyRequest->policy->version = 294314;
    $request->accessToken = 'eius';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ex';
    $request->fields = 'amet';
    $request->key = 'voluptate';
    $request->oauthToken = 'molestias';
    $request->prettyPrint = false;
    $request->project = 'voluptatibus';
    $request->quotaUser = 'ipsum';
    $request->resource = 'hic';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'odit';
    $request->userIp = 'molestiae';

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
    $request->globalSetLabelsRequest->labelFingerprint = 'quia';
    $request->globalSetLabelsRequest->labels = [
        'doloribus' => 'praesentium',
    ];
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laboriosam';
    $request->fields = 'nemo';
    $request->key = 'reprehenderit';
    $request->oauthToken = 'soluta';
    $request->prettyPrint = false;
    $request->project = 'ipsum';
    $request->quotaUser = 'vel';
    $request->resource = 'delectus';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'vel';
    $request->userIp = 'distinctio';

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
        'quis',
        'deleniti',
        'iusto',
        'quod',
    ];
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magni';
    $request->fields = 'nostrum';
    $request->key = 'minus';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->project = 'quam';
    $request->quotaUser = 'ea';
    $request->resource = 'numquam';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'fuga';
    $request->userIp = 'totam';

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
