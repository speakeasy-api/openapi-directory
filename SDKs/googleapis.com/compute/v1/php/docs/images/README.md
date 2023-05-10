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
    $request->accessToken = 'porro';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magni';
    $request->fields = 'cumque';
    $request->image = 'quos';
    $request->key = 'in';
    $request->oauthToken = 'commodi';
    $request->prettyPrint = false;
    $request->project = 'maxime';
    $request->quotaUser = 'sed';
    $request->requestId = 'minus';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'possimus';
    $request->userIp = 'delectus';

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
    $request->deprecationStatus->deleted = 'aliquam';
    $request->deprecationStatus->deprecated = 'eligendi';
    $request->deprecationStatus->obsolete = 'hic';
    $request->deprecationStatus->replacement = 'quo';
    $request->deprecationStatus->state = DeprecationStatusStateEnum::ACTIVE;
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->fields = 'explicabo';
    $request->image = 'sequi';
    $request->key = 'alias';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->project = 'quos';
    $request->quotaUser = 'numquam';
    $request->requestId = 'vitae';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'nam';
    $request->userIp = 'architecto';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'assumenda';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorem';
    $request->fields = 'hic';
    $request->image = 'repellendus';
    $request->key = 'nam';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->project = 'magnam';
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'autem';
    $request->userIp = 'tempore';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nostrum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptas';
    $request->family = 'laudantium';
    $request->fields = 'corporis';
    $request->key = 'excepturi';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->project = 'deleniti';
    $request->quotaUser = 'necessitatibus';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'dolores';
    $request->userIp = 'laborum';

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
    $request->accessToken = 'eos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'temporibus';
    $request->fields = 'id';
    $request->key = 'quae';
    $request->oauthToken = 'commodi';
    $request->optionsRequestedPolicyVersion = 954401;
    $request->prettyPrint = false;
    $request->project = 'minus';
    $request->quotaUser = 'sed';
    $request->resource = 'nam';
    $request->uploadType = 'quia';
    $request->uploadProtocol = 'iusto';
    $request->userIp = 'ab';

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
    $request->image->architecture = ImageArchitectureEnum::ARCHITECTURE_UNSPECIFIED;
    $request->image->archiveSizeBytes = 'blanditiis';
    $request->image->creationTimestamp = 'sint';
    $request->image->deprecated = new DeprecationStatus();
    $request->image->deprecated->deleted = 'placeat';
    $request->image->deprecated->deprecated = 'ullam';
    $request->image->deprecated->obsolete = 'molestiae';
    $request->image->deprecated->replacement = 'itaque';
    $request->image->deprecated->state = DeprecationStatusStateEnum::DEPRECATED;
    $request->image->description = 'nemo';
    $request->image->diskSizeGb = 'non';
    $request->image->family = 'recusandae';
    $request->image->guestOsFeatures = [
        new GuestOsFeature(),
        new GuestOsFeature(),
        new GuestOsFeature(),
    ];
    $request->image->id = 'ipsa';
    $request->image->imageEncryptionKey = new CustomerEncryptionKey();
    $request->image->imageEncryptionKey->kmsKeyName = 'aliquam';
    $request->image->imageEncryptionKey->kmsKeyServiceAccount = 'dolor';
    $request->image->imageEncryptionKey->rawKey = 'occaecati';
    $request->image->imageEncryptionKey->rsaEncryptedKey = 'quibusdam';
    $request->image->imageEncryptionKey->sha256 = 'magni';
    $request->image->kind = 'consequuntur';
    $request->image->labelFingerprint = 'consequuntur';
    $request->image->labels = [
        'commodi' => 'ipsam',
        'vel' => 'cupiditate',
    ];
    $request->image->licenseCodes = [
        'nisi',
        'explicabo',
    ];
    $request->image->licenses = [
        'doloremque',
        'odio',
    ];
    $request->image->name = 'Nora Goldner';
    $request->image->rawDisk = new ImageRawDisk();
    $request->image->rawDisk->containerType = ImageRawDiskContainerTypeEnum::TAR;
    $request->image->rawDisk->sha1Checksum = 'dolorum';
    $request->image->rawDisk->source = 'libero';
    $request->image->satisfiesPzs = false;
    $request->image->selfLink = 'ratione';
    $request->image->shieldedInstanceInitialState = new InitialStateConfig();
    $request->image->shieldedInstanceInitialState->dbs = [
        new FileContentBuffer(),
        new FileContentBuffer(),
    ];
    $request->image->shieldedInstanceInitialState->dbxs = [
        new FileContentBuffer(),
        new FileContentBuffer(),
        new FileContentBuffer(),
        new FileContentBuffer(),
    ];
    $request->image->shieldedInstanceInitialState->keks = [
        new FileContentBuffer(),
        new FileContentBuffer(),
        new FileContentBuffer(),
        new FileContentBuffer(),
    ];
    $request->image->shieldedInstanceInitialState->pk = new FileContentBuffer();
    $request->image->shieldedInstanceInitialState->pk->content = 'maiores';
    $request->image->shieldedInstanceInitialState->pk->fileType = FileContentBufferFileTypeEnum::BIN;
    $request->image->sourceDisk = 'sed';
    $request->image->sourceDiskEncryptionKey = new CustomerEncryptionKey();
    $request->image->sourceDiskEncryptionKey->kmsKeyName = 'eos';
    $request->image->sourceDiskEncryptionKey->kmsKeyServiceAccount = 'consequuntur';
    $request->image->sourceDiskEncryptionKey->rawKey = 'quis';
    $request->image->sourceDiskEncryptionKey->rsaEncryptedKey = 'vitae';
    $request->image->sourceDiskEncryptionKey->sha256 = 'occaecati';
    $request->image->sourceDiskId = 'labore';
    $request->image->sourceImage = 'fugiat';
    $request->image->sourceImageEncryptionKey = new CustomerEncryptionKey();
    $request->image->sourceImageEncryptionKey->kmsKeyName = 'quidem';
    $request->image->sourceImageEncryptionKey->kmsKeyServiceAccount = 'exercitationem';
    $request->image->sourceImageEncryptionKey->rawKey = 'veniam';
    $request->image->sourceImageEncryptionKey->rsaEncryptedKey = 'modi';
    $request->image->sourceImageEncryptionKey->sha256 = 'quasi';
    $request->image->sourceImageId = 'quae';
    $request->image->sourceSnapshot = 'similique';
    $request->image->sourceSnapshotEncryptionKey = new CustomerEncryptionKey();
    $request->image->sourceSnapshotEncryptionKey->kmsKeyName = 'possimus';
    $request->image->sourceSnapshotEncryptionKey->kmsKeyServiceAccount = 'quo';
    $request->image->sourceSnapshotEncryptionKey->rawKey = 'suscipit';
    $request->image->sourceSnapshotEncryptionKey->rsaEncryptedKey = 'ex';
    $request->image->sourceSnapshotEncryptionKey->sha256 = 'sint';
    $request->image->sourceSnapshotId = 'est';
    $request->image->sourceType = ImageSourceTypeEnum::RAW;
    $request->image->status = ImageStatusEnum::READY;
    $request->image->storageLocations = [
        'alias',
        'deserunt',
        'fugit',
    ];
    $request->accessToken = 'autem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestiae';
    $request->fields = 'maxime';
    $request->forceCreate = false;
    $request->key = 'facere';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->project = 'cupiditate';
    $request->quotaUser = 'deleniti';
    $request->requestId = 'quasi';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'voluptatem';
    $request->userIp = 'aliquid';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'unde';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quae';
    $request->fields = 'facere';
    $request->filter = 'ea';
    $request->key = 'libero';
    $request->maxResults = 722500;
    $request->oauthToken = 'amet';
    $request->orderBy = 'adipisci';
    $request->pageToken = 'minus';
    $request->prettyPrint = false;
    $request->project = 'hic';
    $request->quotaUser = 'similique';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'consectetur';
    $request->userIp = 'labore';

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
    $request->image1->archiveSizeBytes = 'adipisci';
    $request->image1->creationTimestamp = 'veritatis';
    $request->image1->deprecated = new DeprecationStatus();
    $request->image1->deprecated->deleted = 'nam';
    $request->image1->deprecated->deprecated = 'voluptatibus';
    $request->image1->deprecated->obsolete = 'magnam';
    $request->image1->deprecated->replacement = 'aperiam';
    $request->image1->deprecated->state = DeprecationStatusStateEnum::DELETED;
    $request->image1->description = 'itaque';
    $request->image1->diskSizeGb = 'necessitatibus';
    $request->image1->family = 'numquam';
    $request->image1->guestOsFeatures = [
        new GuestOsFeature(),
        new GuestOsFeature(),
        new GuestOsFeature(),
        new GuestOsFeature(),
    ];
    $request->image1->id = 'eligendi';
    $request->image1->imageEncryptionKey = new CustomerEncryptionKey();
    $request->image1->imageEncryptionKey->kmsKeyName = 'sapiente';
    $request->image1->imageEncryptionKey->kmsKeyServiceAccount = 'alias';
    $request->image1->imageEncryptionKey->rawKey = 'impedit';
    $request->image1->imageEncryptionKey->rsaEncryptedKey = 'numquam';
    $request->image1->imageEncryptionKey->sha256 = 'aspernatur';
    $request->image1->kind = 'nobis';
    $request->image1->labelFingerprint = 'nihil';
    $request->image1->labels = [
        'reiciendis' => 'vitae',
        'ullam' => 'nisi',
        'consequuntur' => 'voluptas',
    ];
    $request->image1->licenseCodes = [
        'excepturi',
    ];
    $request->image1->licenses = [
        'est',
        'perferendis',
        'quibusdam',
    ];
    $request->image1->name = 'Kurt Huel';
    $request->image1->rawDisk = new ImageRawDisk();
    $request->image1->rawDisk->containerType = ImageRawDiskContainerTypeEnum::TAR;
    $request->image1->rawDisk->sha1Checksum = 'fugit';
    $request->image1->rawDisk->source = 'dolore';
    $request->image1->satisfiesPzs = false;
    $request->image1->selfLink = 'maxime';
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
        new FileContentBuffer(),
    ];
    $request->image1->shieldedInstanceInitialState->keks = [
        new FileContentBuffer(),
    ];
    $request->image1->shieldedInstanceInitialState->pk = new FileContentBuffer();
    $request->image1->shieldedInstanceInitialState->pk->content = 'ea';
    $request->image1->shieldedInstanceInitialState->pk->fileType = FileContentBufferFileTypeEnum::X509;
    $request->image1->sourceDisk = 'totam';
    $request->image1->sourceDiskEncryptionKey = new CustomerEncryptionKey();
    $request->image1->sourceDiskEncryptionKey->kmsKeyName = 'optio';
    $request->image1->sourceDiskEncryptionKey->kmsKeyServiceAccount = 'est';
    $request->image1->sourceDiskEncryptionKey->rawKey = 'inventore';
    $request->image1->sourceDiskEncryptionKey->rsaEncryptedKey = 'consequuntur';
    $request->image1->sourceDiskEncryptionKey->sha256 = 'repellendus';
    $request->image1->sourceDiskId = 'sit';
    $request->image1->sourceImage = 'dolores';
    $request->image1->sourceImageEncryptionKey = new CustomerEncryptionKey();
    $request->image1->sourceImageEncryptionKey->kmsKeyName = 'enim';
    $request->image1->sourceImageEncryptionKey->kmsKeyServiceAccount = 'aspernatur';
    $request->image1->sourceImageEncryptionKey->rawKey = 'perspiciatis';
    $request->image1->sourceImageEncryptionKey->rsaEncryptedKey = 'magni';
    $request->image1->sourceImageEncryptionKey->sha256 = 'odio';
    $request->image1->sourceImageId = 'alias';
    $request->image1->sourceSnapshot = 'quidem';
    $request->image1->sourceSnapshotEncryptionKey = new CustomerEncryptionKey();
    $request->image1->sourceSnapshotEncryptionKey->kmsKeyName = 'deleniti';
    $request->image1->sourceSnapshotEncryptionKey->kmsKeyServiceAccount = 'possimus';
    $request->image1->sourceSnapshotEncryptionKey->rawKey = 'ipsam';
    $request->image1->sourceSnapshotEncryptionKey->rsaEncryptedKey = 'odio';
    $request->image1->sourceSnapshotEncryptionKey->sha256 = 'fugit';
    $request->image1->sourceSnapshotId = 'aspernatur';
    $request->image1->sourceType = ImageSourceTypeEnum::RAW;
    $request->image1->status = ImageStatusEnum::READY;
    $request->image1->storageLocations = [
        'praesentium',
        'sint',
        'exercitationem',
        'cum',
    ];
    $request->accessToken = 'voluptatum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'placeat';
    $request->fields = 'reiciendis';
    $request->imagePathParameter = 'dolores';
    $request->key = 'dolore';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->project = 'facilis';
    $request->quotaUser = 'cupiditate';
    $request->requestId = 'nemo';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'nisi';
    $request->userIp = 'provident';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->globalSetPolicyRequest = new GlobalSetPolicyRequest();
    $request->globalSetPolicyRequest->bindings = [
        new Binding(),
    ];
    $request->globalSetPolicyRequest->etag = 'nostrum';
    $request->globalSetPolicyRequest->policy = new Policy();
    $request->globalSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
    ];
    $request->globalSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->globalSetPolicyRequest->policy->etag = 'molestiae';
    $request->globalSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
    ];
    $request->globalSetPolicyRequest->policy->version = 356343;
    $request->accessToken = 'velit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cupiditate';
    $request->fields = 'occaecati';
    $request->key = 'numquam';
    $request->oauthToken = 'fugiat';
    $request->prettyPrint = false;
    $request->project = 'molestiae';
    $request->quotaUser = 'quas';
    $request->resource = 'repellendus';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'amet';
    $request->userIp = 'distinctio';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->globalSetLabelsRequest = new GlobalSetLabelsRequest();
    $request->globalSetLabelsRequest->labelFingerprint = 'necessitatibus';
    $request->globalSetLabelsRequest->labels = [
        'nesciunt' => 'corrupti',
        'cupiditate' => 'voluptatibus',
        'ullam' => 'dolorum',
    ];
    $request->accessToken = 'soluta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'delectus';
    $request->key = 'commodi';
    $request->oauthToken = 'commodi';
    $request->prettyPrint = false;
    $request->project = 'fugit';
    $request->quotaUser = 'ullam';
    $request->resource = 'ullam';
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'est';
    $request->userIp = 'qui';

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
        'totam',
    ];
    $request->accessToken = 'qui';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eligendi';
    $request->fields = 'incidunt';
    $request->key = 'deleniti';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->project = 'est';
    $request->quotaUser = 'reiciendis';
    $request->resource = 'possimus';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'consectetur';
    $request->userIp = 'inventore';

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
