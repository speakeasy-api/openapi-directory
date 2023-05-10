# edits

### Available Operations

* [androidpublisherEditsApksAddexternallyhosted](#androidpublishereditsapksaddexternallyhosted) - Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.
* [androidpublisherEditsApksList](#androidpublishereditsapkslist) - Lists all current APKs of the app and edit.
* [androidpublisherEditsApksUpload](#androidpublishereditsapksupload) - Uploads an APK and adds to the current edit.
* [androidpublisherEditsBundlesList](#androidpublishereditsbundleslist) - Lists all current Android App Bundles of the app and edit.
* [androidpublisherEditsBundlesUpload](#androidpublishereditsbundlesupload) - Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
* [androidpublisherEditsCommit](#androidpublishereditscommit) - Commits an app edit.
* [androidpublisherEditsCountryavailabilityGet](#androidpublishereditscountryavailabilityget) - Gets country availability.
* [androidpublisherEditsDelete](#androidpublishereditsdelete) - Deletes an app edit.
* [androidpublisherEditsDeobfuscationfilesUpload](#androidpublishereditsdeobfuscationfilesupload) - Uploads a new deobfuscation file and attaches to the specified APK.
* [androidpublisherEditsDetailsGet](#androidpublishereditsdetailsget) - Gets details of an app.
* [androidpublisherEditsDetailsPatch](#androidpublishereditsdetailspatch) - Patches details of an app.
* [androidpublisherEditsDetailsUpdate](#androidpublishereditsdetailsupdate) - Updates details of an app.
* [androidpublisherEditsExpansionfilesGet](#androidpublishereditsexpansionfilesget) - Fetches the expansion file configuration for the specified APK.
* [androidpublisherEditsExpansionfilesPatch](#androidpublishereditsexpansionfilespatch) - Patches the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
* [androidpublisherEditsExpansionfilesUpdate](#androidpublishereditsexpansionfilesupdate) - Updates the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
* [androidpublisherEditsExpansionfilesUpload](#androidpublishereditsexpansionfilesupload) - Uploads a new expansion file and attaches to the specified APK.
* [androidpublisherEditsGet](#androidpublishereditsget) - Gets an app edit.
* [androidpublisherEditsImagesDelete](#androidpublishereditsimagesdelete) - Deletes the image (specified by id) from the edit.
* [androidpublisherEditsImagesDeleteall](#androidpublishereditsimagesdeleteall) - Deletes all images for the specified language and image type. Returns an empty response if no images are found.
* [androidpublisherEditsImagesList](#androidpublishereditsimageslist) - Lists all images. The response may be empty.
* [androidpublisherEditsImagesUpload](#androidpublishereditsimagesupload) - Uploads an image of the specified language and image type, and adds to the edit.
* [androidpublisherEditsInsert](#androidpublishereditsinsert) - Creates a new edit for an app.
* [androidpublisherEditsListingsDelete](#androidpublishereditslistingsdelete) - Deletes a localized store listing.
* [androidpublisherEditsListingsDeleteall](#androidpublishereditslistingsdeleteall) - Deletes all store listings.
* [androidpublisherEditsListingsGet](#androidpublishereditslistingsget) - Gets a localized store listing.
* [androidpublisherEditsListingsList](#androidpublishereditslistingslist) - Lists all localized store listings.
* [androidpublisherEditsListingsPatch](#androidpublishereditslistingspatch) - Patches a localized store listing.
* [androidpublisherEditsListingsUpdate](#androidpublishereditslistingsupdate) - Creates or updates a localized store listing.
* [androidpublisherEditsTestersGet](#androidpublishereditstestersget) - Gets testers. Note: Testers resource does not support email lists.
* [androidpublisherEditsTestersPatch](#androidpublishereditstesterspatch) - Patches testers. Note: Testers resource does not support email lists.
* [androidpublisherEditsTestersUpdate](#androidpublishereditstestersupdate) - Updates testers. Note: Testers resource does not support email lists.
* [androidpublisherEditsTracksGet](#androidpublishereditstracksget) - Gets a track.
* [androidpublisherEditsTracksList](#androidpublishereditstrackslist) - Lists all tracks.
* [androidpublisherEditsTracksPatch](#androidpublishereditstrackspatch) - Patches a track.
* [androidpublisherEditsTracksUpdate](#androidpublishereditstracksupdate) - Updates a track.
* [androidpublisherEditsValidate](#androidpublishereditsvalidate) - Validates an app edit.

## androidpublisherEditsApksAddexternallyhosted

Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsApksAddexternallyhostedRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApksAddExternallyHostedRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExternallyHostedApk;
use \OpenAPI\OpenAPI\Models\Shared\UsesPermission;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsApksAddexternallyhostedSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsApksAddexternallyhostedRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->apksAddExternallyHostedRequest = new ApksAddExternallyHostedRequest();
    $request->apksAddExternallyHostedRequest->externallyHostedApk = new ExternallyHostedApk();
    $request->apksAddExternallyHostedRequest->externallyHostedApk->applicationLabel = 'hic';
    $request->apksAddExternallyHostedRequest->externallyHostedApk->certificateBase64s = [
        'totam',
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->apksAddExternallyHostedRequest->externallyHostedApk->externallyHostedUrl = 'modi';
    $request->apksAddExternallyHostedRequest->externallyHostedApk->fileSha1Base64 = 'qui';
    $request->apksAddExternallyHostedRequest->externallyHostedApk->fileSha256Base64 = 'impedit';
    $request->apksAddExternallyHostedRequest->externallyHostedApk->fileSize = 'cum';
    $request->apksAddExternallyHostedRequest->externallyHostedApk->iconBase64 = 'esse';
    $request->apksAddExternallyHostedRequest->externallyHostedApk->maximumSDK = 216550;
    $request->apksAddExternallyHostedRequest->externallyHostedApk->minimumSDK = 568434;
    $request->apksAddExternallyHostedRequest->externallyHostedApk->nativeCodes = [
        'perferendis',
    ];
    $request->apksAddExternallyHostedRequest->externallyHostedApk->packageName = 'ad';
    $request->apksAddExternallyHostedRequest->externallyHostedApk->usesFeatures = [
        'sed',
        'iste',
        'dolor',
    ];
    $request->apksAddExternallyHostedRequest->externallyHostedApk->usesPermissions = [
        new UsesPermission(),
        new UsesPermission(),
        new UsesPermission(),
    ];
    $request->apksAddExternallyHostedRequest->externallyHostedApk->versionCode = 386489;
    $request->apksAddExternallyHostedRequest->externallyHostedApk->versionName = 'hic';
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->editId = 'corporis';
    $request->fields = 'iste';
    $request->key = 'iure';
    $request->oauthToken = 'saepe';
    $request->packageName = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new AndroidpublisherEditsApksAddexternallyhostedSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsApksAddexternallyhosted($request, $requestSecurity);

    if ($response->apksAddExternallyHostedResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsApksList

Lists all current APKs of the app and edit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsApksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsApksListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsApksListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolores';
    $request->editId = 'dolorem';
    $request->fields = 'corporis';
    $request->key = 'explicabo';
    $request->oauthToken = 'nobis';
    $request->packageName = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'minima';

    $requestSecurity = new AndroidpublisherEditsApksListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsApksList($request, $requestSecurity);

    if ($response->apksListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsApksUpload

Uploads an APK and adds to the current edit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsApksUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsApksUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsApksUploadRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'culpa';
    $request->editId = 'doloribus';
    $request->fields = 'sapiente';
    $request->key = 'architecto';
    $request->oauthToken = 'mollitia';
    $request->packageName = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'culpa';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'repellat';

    $requestSecurity = new AndroidpublisherEditsApksUploadSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsApksUpload($request, $requestSecurity);

    if ($response->apk !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsBundlesList

Lists all current Android App Bundles of the app and edit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsBundlesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsBundlesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsBundlesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->editId = 'quam';
    $request->fields = 'molestiae';
    $request->key = 'velit';
    $request->oauthToken = 'error';
    $request->packageName = 'quia';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->uploadType = 'vitae';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new AndroidpublisherEditsBundlesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsBundlesList($request, $requestSecurity);

    if ($response->bundlesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsBundlesUpload

Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsBundlesUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsBundlesUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsBundlesUploadRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'enim';
    $request->ackBundleInstallationWarning = false;
    $request->alt = AltEnum::JSON;
    $request->callback = 'quo';
    $request->deviceTierConfigId = 'sequi';
    $request->editId = 'tenetur';
    $request->fields = 'ipsam';
    $request->key = 'id';
    $request->oauthToken = 'possimus';
    $request->packageName = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new AndroidpublisherEditsBundlesUploadSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsBundlesUpload($request, $requestSecurity);

    if ($response->bundle !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsCommit

Commits an app edit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsCommitRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsCommitSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsCommitRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatibus';
    $request->changesNotSentForReview = false;
    $request->editId = 'vero';
    $request->fields = 'nihil';
    $request->key = 'praesentium';
    $request->oauthToken = 'voluptatibus';
    $request->packageName = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'cum';

    $requestSecurity = new AndroidpublisherEditsCommitSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsCommit($request, $requestSecurity);

    if ($response->appEdit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsCountryavailabilityGet

Gets country availability.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsCountryavailabilityGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsCountryavailabilityGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsCountryavailabilityGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'doloremque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ut';
    $request->editId = 'maiores';
    $request->fields = 'dicta';
    $request->key = 'corporis';
    $request->oauthToken = 'dolore';
    $request->packageName = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->track = 'harum';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new AndroidpublisherEditsCountryavailabilityGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsCountryavailabilityGet($request, $requestSecurity);

    if ($response->trackCountryAvailability !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsDelete

Deletes an app edit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsum';
    $request->editId = 'quidem';
    $request->fields = 'molestias';
    $request->key = 'excepturi';
    $request->oauthToken = 'pariatur';
    $request->packageName = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'voluptates';

    $requestSecurity = new AndroidpublisherEditsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsDeobfuscationfilesUpload

Uploads a new deobfuscation file and attaches to the specified APK.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsDeobfuscationfilesUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsDeobfuscationfilesUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsDeobfuscationfilesUploadRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::MEDIA;
    $request->apkVersionCode = 83112;
    $request->callback = 'itaque';
    $request->deobfuscationFileType = AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum::DEOBFUSCATION_FILE_TYPE_UNSPECIFIED;
    $request->editId = 'enim';
    $request->fields = 'consequatur';
    $request->key = 'est';
    $request->oauthToken = 'quibusdam';
    $request->packageName = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'quibusdam';

    $requestSecurity = new AndroidpublisherEditsDeobfuscationfilesUploadSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsDeobfuscationfilesUpload($request, $requestSecurity);

    if ($response->deobfuscationFilesUploadResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsDetailsGet

Gets details of an app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsDetailsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsDetailsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsDetailsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'modi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aliquid';
    $request->editId = 'cupiditate';
    $request->fields = 'quos';
    $request->key = 'perferendis';
    $request->oauthToken = 'magni';
    $request->packageName = 'assumenda';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'fugit';

    $requestSecurity = new AndroidpublisherEditsDetailsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsDetailsGet($request, $requestSecurity);

    if ($response->appDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsDetailsPatch

Patches details of an app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsDetailsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppDetails;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsDetailsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsDetailsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->appDetails = new AppDetails();
    $request->appDetails->contactEmail = 'excepturi';
    $request->appDetails->contactPhone = 'tempora';
    $request->appDetails->contactWebsite = 'facilis';
    $request->appDetails->defaultLanguage = 'tempore';
    $request->accessToken = 'labore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eum';
    $request->editId = 'non';
    $request->fields = 'eligendi';
    $request->key = 'sint';
    $request->oauthToken = 'aliquid';
    $request->packageName = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'necessitatibus';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new AndroidpublisherEditsDetailsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsDetailsPatch($request, $requestSecurity);

    if ($response->appDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsDetailsUpdate

Updates details of an app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsDetailsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppDetails;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsDetailsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsDetailsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->appDetails = new AppDetails();
    $request->appDetails->contactEmail = 'debitis';
    $request->appDetails->contactPhone = 'a';
    $request->appDetails->contactWebsite = 'dolorum';
    $request->appDetails->defaultLanguage = 'in';
    $request->accessToken = 'in';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->editId = 'rerum';
    $request->fields = 'dicta';
    $request->key = 'magnam';
    $request->oauthToken = 'cumque';
    $request->packageName = 'facere';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new AndroidpublisherEditsDetailsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsDetailsUpdate($request, $requestSecurity);

    if ($response->appDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsExpansionfilesGet

Fetches the expansion file configuration for the specified APK.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsExpansionfilesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsExpansionfilesGetExpansionFileTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsExpansionfilesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsExpansionfilesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'non';
    $request->alt = AltEnum::MEDIA;
    $request->apkVersionCode = 313218;
    $request->callback = 'accusamus';
    $request->editId = 'delectus';
    $request->expansionFileType = AndroidpublisherEditsExpansionfilesGetExpansionFileTypeEnum::PATCH;
    $request->fields = 'provident';
    $request->key = 'nam';
    $request->oauthToken = 'id';
    $request->packageName = 'blanditiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'amet';

    $requestSecurity = new AndroidpublisherEditsExpansionfilesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsExpansionfilesGet($request, $requestSecurity);

    if ($response->expansionFile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsExpansionfilesPatch

Patches the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsExpansionfilesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExpansionFile;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsExpansionfilesPatchExpansionFileTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsExpansionfilesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsExpansionfilesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->expansionFile = new ExpansionFile();
    $request->expansionFile->fileSize = 'nisi';
    $request->expansionFile->referencesVersion = 423855;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::MEDIA;
    $request->apkVersionCode = 474867;
    $request->callback = 'perferendis';
    $request->editId = 'nihil';
    $request->expansionFileType = AndroidpublisherEditsExpansionfilesPatchExpansionFileTypeEnum::EXPANSION_FILE_TYPE_UNSPECIFIED;
    $request->fields = 'distinctio';
    $request->key = 'id';
    $request->oauthToken = 'labore';
    $request->packageName = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'nobis';

    $requestSecurity = new AndroidpublisherEditsExpansionfilesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsExpansionfilesPatch($request, $requestSecurity);

    if ($response->expansionFile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsExpansionfilesUpdate

Updates the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsExpansionfilesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExpansionFile;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsExpansionfilesUpdateExpansionFileTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsExpansionfilesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsExpansionfilesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->expansionFile = new ExpansionFile();
    $request->expansionFile->fileSize = 'vero';
    $request->expansionFile->referencesVersion = 135474;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->apkVersionCode = 92373;
    $request->callback = 'excepturi';
    $request->editId = 'ullam';
    $request->expansionFileType = AndroidpublisherEditsExpansionfilesUpdateExpansionFileTypeEnum::MAIN;
    $request->fields = 'quos';
    $request->key = 'sint';
    $request->oauthToken = 'accusantium';
    $request->packageName = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'ad';

    $requestSecurity = new AndroidpublisherEditsExpansionfilesUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsExpansionfilesUpdate($request, $requestSecurity);

    if ($response->expansionFile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsExpansionfilesUpload

Uploads a new expansion file and attaches to the specified APK.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsExpansionfilesUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsExpansionfilesUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsExpansionfilesUploadRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->apkVersionCode = 141264;
    $request->callback = 'nemo';
    $request->editId = 'quasi';
    $request->expansionFileType = AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum::MAIN;
    $request->fields = 'doloribus';
    $request->key = 'debitis';
    $request->oauthToken = 'eius';
    $request->packageName = 'maxime';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'in';

    $requestSecurity = new AndroidpublisherEditsExpansionfilesUploadSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsExpansionfilesUpload($request, $requestSecurity);

    if ($response->expansionFilesUploadResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsGet

Gets an app edit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ullam';
    $request->editId = 'expedita';
    $request->fields = 'nihil';
    $request->key = 'repellat';
    $request->oauthToken = 'quibusdam';
    $request->packageName = 'sed';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'accusantium';

    $requestSecurity = new AndroidpublisherEditsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsGet($request, $requestSecurity);

    if ($response->appEdit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsImagesDelete

Deletes the image (specified by id) from the edit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsImagesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsImagesDeleteImageTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsImagesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsImagesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magni';
    $request->editId = 'sunt';
    $request->fields = 'quo';
    $request->imageId = 'illum';
    $request->imageType = AndroidpublisherEditsImagesDeleteImageTypeEnum::FEATURE_GRAPHIC;
    $request->key = 'maxime';
    $request->language = 'ea';
    $request->oauthToken = 'excepturi';
    $request->packageName = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'ab';

    $requestSecurity = new AndroidpublisherEditsImagesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsImagesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsImagesDeleteall

Deletes all images for the specified language and image type. Returns an empty response if no images are found.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsImagesDeleteallRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsImagesDeleteallImageTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsImagesDeleteallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsImagesDeleteallRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptate';
    $request->editId = 'autem';
    $request->fields = 'nam';
    $request->imageType = AndroidpublisherEditsImagesDeleteallImageTypeEnum::APP_IMAGE_TYPE_UNSPECIFIED;
    $request->key = 'pariatur';
    $request->language = 'nemo';
    $request->oauthToken = 'voluptatibus';
    $request->packageName = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugiat';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'aut';

    $requestSecurity = new AndroidpublisherEditsImagesDeleteallSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsImagesDeleteall($request, $requestSecurity);

    if ($response->imagesDeleteAllResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsImagesList

Lists all images. The response may be empty.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsImagesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsImagesListImageTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsImagesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsImagesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'libero';
    $request->editId = 'nobis';
    $request->fields = 'dolores';
    $request->imageType = AndroidpublisherEditsImagesListImageTypeEnum::TEN_INCH_SCREENSHOTS;
    $request->key = 'totam';
    $request->language = 'dignissimos';
    $request->oauthToken = 'eaque';
    $request->packageName = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'nesciunt';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new AndroidpublisherEditsImagesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsImagesList($request, $requestSecurity);

    if ($response->imagesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsImagesUpload

Uploads an image of the specified language and image type, and adds to the edit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsImagesUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsImagesUploadImageTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsImagesUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsImagesUploadRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'minus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->editId = 'vero';
    $request->fields = 'nostrum';
    $request->imageType = AndroidpublisherEditsImagesUploadImageTypeEnum::TV_BANNER;
    $request->key = 'recusandae';
    $request->language = 'omnis';
    $request->oauthToken = 'facilis';
    $request->packageName = 'perspiciatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatem';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'consequuntur';

    $requestSecurity = new AndroidpublisherEditsImagesUploadSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsImagesUpload($request, $requestSecurity);

    if ($response->imagesUploadResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsInsert

Creates a new edit for an app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'error';
    $request->alt = AltEnum::JSON;
    $request->callback = 'occaecati';
    $request->fields = 'rerum';
    $request->key = 'adipisci';
    $request->oauthToken = 'asperiores';
    $request->packageName = 'earum';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new AndroidpublisherEditsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsInsert($request, $requestSecurity);

    if ($response->appEdit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsListingsDelete

Deletes a localized store listing.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsListingsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsListingsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsListingsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nobis';
    $request->editId = 'libero';
    $request->fields = 'delectus';
    $request->key = 'quaerat';
    $request->language = 'quos';
    $request->oauthToken = 'aliquid';
    $request->packageName = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new AndroidpublisherEditsListingsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsListingsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsListingsDeleteall

Deletes all store listings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsListingsDeleteallRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsListingsDeleteallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsListingsDeleteallRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cum';
    $request->editId = 'voluptate';
    $request->fields = 'dignissimos';
    $request->key = 'reiciendis';
    $request->oauthToken = 'amet';
    $request->packageName = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'numquam';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new AndroidpublisherEditsListingsDeleteallSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsListingsDeleteall($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsListingsGet

Gets a localized store listing.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsListingsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsListingsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsListingsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quaerat';
    $request->editId = 'accusamus';
    $request->fields = 'quidem';
    $request->key = 'voluptatibus';
    $request->language = 'voluptas';
    $request->oauthToken = 'natus';
    $request->packageName = 'eos';
    $request->prettyPrint = false;
    $request->quotaUser = 'atque';
    $request->uploadType = 'sit';
    $request->uploadProtocol = 'fugiat';

    $requestSecurity = new AndroidpublisherEditsListingsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsListingsGet($request, $requestSecurity);

    if ($response->listing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsListingsList

Lists all localized store listings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsListingsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsListingsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsListingsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'soluta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'iusto';
    $request->editId = 'voluptate';
    $request->fields = 'dolorum';
    $request->key = 'deleniti';
    $request->oauthToken = 'omnis';
    $request->packageName = 'necessitatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new AndroidpublisherEditsListingsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsListingsList($request, $requestSecurity);

    if ($response->listingsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsListingsPatch

Patches a localized store listing.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsListingsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Listing;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsListingsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsListingsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->listing = new Listing();
    $request->listing->fullDescription = 'voluptate';
    $request->listing->language = 'id';
    $request->listing->shortDescription = 'saepe';
    $request->listing->title = 'Mrs.';
    $request->listing->video = 'aspernatur';
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'optio';
    $request->editId = 'accusamus';
    $request->fields = 'ad';
    $request->key = 'saepe';
    $request->language = 'suscipit';
    $request->oauthToken = 'deserunt';
    $request->packageName = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'minima';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new AndroidpublisherEditsListingsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsListingsPatch($request, $requestSecurity);

    if ($response->listing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsListingsUpdate

Creates or updates a localized store listing.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsListingsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Listing;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsListingsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsListingsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->listing = new Listing();
    $request->listing->fullDescription = 'alias';
    $request->listing->language = 'at';
    $request->listing->shortDescription = 'quaerat';
    $request->listing->title = 'Mrs.';
    $request->listing->video = 'vel';
    $request->accessToken = 'quod';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'qui';
    $request->editId = 'dolorum';
    $request->fields = 'a';
    $request->key = 'esse';
    $request->language = 'harum';
    $request->oauthToken = 'iusto';
    $request->packageName = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'quisquam';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'amet';

    $requestSecurity = new AndroidpublisherEditsListingsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsListingsUpdate($request, $requestSecurity);

    if ($response->listing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsTestersGet

Gets testers. Note: Testers resource does not support email lists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsTestersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsTestersGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsTestersGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'enim';
    $request->editId = 'dolorem';
    $request->fields = 'sapiente';
    $request->key = 'totam';
    $request->oauthToken = 'nihil';
    $request->packageName = 'sit';
    $request->prettyPrint = false;
    $request->quotaUser = 'expedita';
    $request->track = 'neque';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'vel';

    $requestSecurity = new AndroidpublisherEditsTestersGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsTestersGet($request, $requestSecurity);

    if ($response->testers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsTestersPatch

Patches testers. Note: Testers resource does not support email lists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsTestersPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Testers;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsTestersPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsTestersPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testers = new Testers();
    $request->testers->googleGroups = [
        'deserunt',
        'quam',
    ];
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'qui';
    $request->editId = 'cupiditate';
    $request->fields = 'maxime';
    $request->key = 'pariatur';
    $request->oauthToken = 'soluta';
    $request->packageName = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->track = 'totam';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'aspernatur';

    $requestSecurity = new AndroidpublisherEditsTestersPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsTestersPatch($request, $requestSecurity);

    if ($response->testers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsTestersUpdate

Updates testers. Note: Testers resource does not support email lists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsTestersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Testers;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsTestersUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsTestersUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testers = new Testers();
    $request->testers->googleGroups = [
        'facilis',
        'aliquid',
        'quam',
    ];
    $request->accessToken = 'molestias';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'qui';
    $request->editId = 'neque';
    $request->fields = 'fugit';
    $request->key = 'magni';
    $request->oauthToken = 'odio';
    $request->packageName = 'sunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->track = 'nam';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'voluptatem';

    $requestSecurity = new AndroidpublisherEditsTestersUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsTestersUpdate($request, $requestSecurity);

    if ($response->testers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsTracksGet

Gets a track.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsTracksGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsTracksGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsTracksGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'soluta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'et';
    $request->editId = 'saepe';
    $request->fields = 'ipsum';
    $request->key = 'veritatis';
    $request->oauthToken = 'nobis';
    $request->packageName = 'quos';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempore';
    $request->track = 'cupiditate';
    $request->uploadType = 'aperiam';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new AndroidpublisherEditsTracksGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsTracksGet($request, $requestSecurity);

    if ($response->track !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsTracksList

Lists all tracks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsTracksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsTracksListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsTracksListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'adipisci';
    $request->editId = 'dolorum';
    $request->fields = 'architecto';
    $request->key = 'quae';
    $request->oauthToken = 'aut';
    $request->packageName = 'quas';
    $request->prettyPrint = false;
    $request->quotaUser = 'itaque';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'est';

    $requestSecurity = new AndroidpublisherEditsTracksListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsTracksList($request, $requestSecurity);

    if ($response->tracksListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsTracksPatch

Patches a track.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsTracksPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Track;
use \OpenAPI\OpenAPI\Models\Shared\TrackRelease;
use \OpenAPI\OpenAPI\Models\Shared\CountryTargeting;
use \OpenAPI\OpenAPI\Models\Shared\LocalizedText;
use \OpenAPI\OpenAPI\Models\Shared\TrackReleaseStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsTracksPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsTracksPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->track1 = new Track();
    $request->track1->releases = [
        new TrackRelease(),
        new TrackRelease(),
        new TrackRelease(),
        new TrackRelease(),
    ];
    $request->track1->track = 'doloribus';
    $request->accessToken = 'ut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cupiditate';
    $request->editId = 'qui';
    $request->fields = 'quae';
    $request->key = 'laudantium';
    $request->oauthToken = 'odio';
    $request->packageName = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->trackPathParameter = 'quisquam';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new AndroidpublisherEditsTracksPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsTracksPatch($request, $requestSecurity);

    if ($response->track !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsTracksUpdate

Updates a track.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsTracksUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Track;
use \OpenAPI\OpenAPI\Models\Shared\TrackRelease;
use \OpenAPI\OpenAPI\Models\Shared\CountryTargeting;
use \OpenAPI\OpenAPI\Models\Shared\LocalizedText;
use \OpenAPI\OpenAPI\Models\Shared\TrackReleaseStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsTracksUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsTracksUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->track1 = new Track();
    $request->track1->releases = [
        new TrackRelease(),
    ];
    $request->track1->track = 'delectus';
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vero';
    $request->editId = 'tenetur';
    $request->fields = 'dignissimos';
    $request->key = 'hic';
    $request->oauthToken = 'distinctio';
    $request->packageName = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'odio';
    $request->trackPathParameter = 'similique';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'vero';

    $requestSecurity = new AndroidpublisherEditsTracksUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsTracksUpdate($request, $requestSecurity);

    if ($response->track !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsValidate

Validates an app edit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsValidateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsValidateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsValidateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'illum';
    $request->editId = 'sequi';
    $request->fields = 'natus';
    $request->key = 'impedit';
    $request->oauthToken = 'aut';
    $request->packageName = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'exercitationem';
    $request->uploadType = 'nulla';
    $request->uploadProtocol = 'fugit';

    $requestSecurity = new AndroidpublisherEditsValidateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsValidate($request, $requestSecurity);

    if ($response->appEdit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
