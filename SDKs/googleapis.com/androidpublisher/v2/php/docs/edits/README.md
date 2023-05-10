# edits

### Available Operations

* [androidpublisherEditsApklistingsDelete](#androidpublishereditsapklistingsdelete) - Deletes the APK-specific localized listing for a specified APK and language code.
* [androidpublisherEditsApklistingsDeleteall](#androidpublishereditsapklistingsdeleteall) - Deletes all the APK-specific localized listings for a specified APK.
* [androidpublisherEditsApklistingsGet](#androidpublishereditsapklistingsget) - Fetches the APK-specific localized listing for a specified APK and language code.
* [androidpublisherEditsApklistingsList](#androidpublishereditsapklistingslist) - Lists all the APK-specific localized listings for a specified APK.
* [androidpublisherEditsApklistingsPatch](#androidpublishereditsapklistingspatch) - Updates or creates the APK-specific localized listing for a specified APK and language code. This method supports patch semantics.
* [androidpublisherEditsApklistingsUpdate](#androidpublishereditsapklistingsupdate) - Updates or creates the APK-specific localized listing for a specified APK and language code.
* [androidpublisherEditsApksAddexternallyhosted](#androidpublishereditsapksaddexternallyhosted) - Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to enterprises using Google Play for Work whose application is configured to restrict distribution to the enterprise domain.
* [androidpublisherEditsApksList](#androidpublishereditsapkslist)
* [androidpublisherEditsApksUpload](#androidpublishereditsapksupload)
* [androidpublisherEditsBundlesList](#androidpublishereditsbundleslist)
* [androidpublisherEditsBundlesUpload](#androidpublishereditsbundlesupload) - Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See: https://developers.google.com/api-client-library/java/google-api-java-client/errors for an example in java.
* [androidpublisherEditsCommit](#androidpublishereditscommit) - Commits/applies the changes made in this edit back to the app.
* [androidpublisherEditsDelete](#androidpublishereditsdelete) - Deletes an edit for an app. Creating a new edit will automatically delete any of your previous edits so this method need only be called if you want to preemptively abandon an edit.
* [androidpublisherEditsDeobfuscationfilesUpload](#androidpublishereditsdeobfuscationfilesupload) - Uploads the deobfuscation file of the specified APK. If a deobfuscation or symbolication file already exists, it will be replaced. See https://developer.android.com/studio/build/shrink-code to learn more about deobfuscation files.
* [androidpublisherEditsDetailsGet](#androidpublishereditsdetailsget) - Fetches app details for this edit. This includes the default language and developer support contact information.
* [androidpublisherEditsDetailsPatch](#androidpublishereditsdetailspatch) - Updates app details for this edit. This method supports patch semantics.
* [androidpublisherEditsDetailsUpdate](#androidpublishereditsdetailsupdate) - Updates app details for this edit.
* [androidpublisherEditsExpansionfilesGet](#androidpublishereditsexpansionfilesget) - Fetches the Expansion File configuration for the APK specified.
* [androidpublisherEditsExpansionfilesPatch](#androidpublishereditsexpansionfilespatch) - Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method. This method supports patch semantics.
* [androidpublisherEditsExpansionfilesUpdate](#androidpublishereditsexpansionfilesupdate) - Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method.
* [androidpublisherEditsExpansionfilesUpload](#androidpublishereditsexpansionfilesupload) - Uploads and attaches a new Expansion File to the APK specified.
* [androidpublisherEditsGet](#androidpublishereditsget) - Returns information about the edit specified. Calls will fail if the edit is no long active (e.g. has been deleted, superseded or expired).
* [androidpublisherEditsImagesDelete](#androidpublishereditsimagesdelete) - Deletes the image (specified by id) from the edit.
* [androidpublisherEditsImagesDeleteall](#androidpublishereditsimagesdeleteall) - Deletes all images for the specified language and image type.
* [androidpublisherEditsImagesList](#androidpublishereditsimageslist) - Lists all images for the specified language and image type.
* [androidpublisherEditsImagesUpload](#androidpublishereditsimagesupload) - Uploads a new image and adds it to the list of images for the specified language and image type.
* [androidpublisherEditsInsert](#androidpublishereditsinsert) - Creates a new edit for an app, populated with the app's current state.
* [androidpublisherEditsListingsDelete](#androidpublishereditslistingsdelete) - Deletes the specified localized store listing from an edit.
* [androidpublisherEditsListingsDeleteall](#androidpublishereditslistingsdeleteall) - Deletes all localized listings from an edit.
* [androidpublisherEditsListingsGet](#androidpublishereditslistingsget) - Fetches information about a localized store listing.
* [androidpublisherEditsListingsList](#androidpublishereditslistingslist) - Returns all of the localized store listings attached to this edit.
* [androidpublisherEditsListingsPatch](#androidpublishereditslistingspatch) - Creates or updates a localized store listing. This method supports patch semantics.
* [androidpublisherEditsListingsUpdate](#androidpublishereditslistingsupdate) - Creates or updates a localized store listing.
* [androidpublisherEditsTestersGet](#androidpublishereditstestersget)
* [androidpublisherEditsTestersPatch](#androidpublishereditstesterspatch)
* [androidpublisherEditsTestersUpdate](#androidpublishereditstestersupdate)
* [androidpublisherEditsTracksGet](#androidpublishereditstracksget) - Fetches the track configuration for the specified track type. Includes the APK version codes that are in this track.
* [androidpublisherEditsTracksList](#androidpublishereditstrackslist) - Lists all the track configurations for this edit.
* [androidpublisherEditsTracksPatch](#androidpublishereditstrackspatch) - Updates the track configuration for the specified track type. This method supports patch semantics.
* [androidpublisherEditsTracksUpdate](#androidpublishereditstracksupdate) - Updates the track configuration for the specified track type.
* [androidpublisherEditsValidate](#androidpublishereditsvalidate) - Checks that the edit can be successfully committed. The edit's changes are not applied to the live app.

## androidpublisherEditsApklistingsDelete

Deletes the APK-specific localized listing for a specified APK and language code.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsApklistingsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsApklistingsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsApklistingsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->apkVersionCode = 623564;
    $request->editId = 'deserunt';
    $request->fields = 'suscipit';
    $request->key = 'iure';
    $request->language = 'magnam';
    $request->oauthToken = 'debitis';
    $request->packageName = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->userIp = 'tempora';

    $requestSecurity = new AndroidpublisherEditsApklistingsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsApklistingsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsApklistingsDeleteall

Deletes all the APK-specific localized listings for a specified APK.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsApklistingsDeleteallRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsApklistingsDeleteallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsApklistingsDeleteallRequest();
    $request->alt = AltEnum::JSON;
    $request->apkVersionCode = 383441;
    $request->editId = 'molestiae';
    $request->fields = 'minus';
    $request->key = 'placeat';
    $request->oauthToken = 'voluptatum';
    $request->packageName = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->userIp = 'nisi';

    $requestSecurity = new AndroidpublisherEditsApklistingsDeleteallSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsApklistingsDeleteall($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsApklistingsGet

Fetches the APK-specific localized listing for a specified APK and language code.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsApklistingsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsApklistingsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsApklistingsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->apkVersionCode = 925597;
    $request->editId = 'temporibus';
    $request->fields = 'ab';
    $request->key = 'quis';
    $request->language = 'veritatis';
    $request->oauthToken = 'deserunt';
    $request->packageName = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->userIp = 'repellendus';

    $requestSecurity = new AndroidpublisherEditsApklistingsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsApklistingsGet($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsApklistingsList

Lists all the APK-specific localized listings for a specified APK.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsApklistingsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsApklistingsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsApklistingsListRequest();
    $request->alt = AltEnum::JSON;
    $request->apkVersionCode = 957156;
    $request->editId = 'quo';
    $request->fields = 'odit';
    $request->key = 'at';
    $request->oauthToken = 'at';
    $request->packageName = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->userIp = 'quod';

    $requestSecurity = new AndroidpublisherEditsApklistingsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsApklistingsList($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsApklistingsPatch

Updates or creates the APK-specific localized listing for a specified APK and language code. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsApklistingsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApkListing;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsApklistingsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsApklistingsPatchRequest();
    $request->apkListing = new ApkListing();
    $request->apkListing->language = 'quod';
    $request->apkListing->recentChanges = 'esse';
    $request->alt = AltEnum::JSON;
    $request->apkVersionCode = 520478;
    $request->editId = 'porro';
    $request->fields = 'dolorum';
    $request->key = 'dicta';
    $request->language = 'nam';
    $request->oauthToken = 'officia';
    $request->packageName = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->userIp = 'deleniti';

    $requestSecurity = new AndroidpublisherEditsApklistingsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsApklistingsPatch($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsApklistingsUpdate

Updates or creates the APK-specific localized listing for a specified APK and language code.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsApklistingsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApkListing;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsApklistingsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsApklistingsUpdateRequest();
    $request->apkListing = new ApkListing();
    $request->apkListing->language = 'hic';
    $request->apkListing->recentChanges = 'optio';
    $request->alt = AltEnum::JSON;
    $request->apkVersionCode = 521848;
    $request->editId = 'beatae';
    $request->fields = 'commodi';
    $request->key = 'molestiae';
    $request->language = 'modi';
    $request->oauthToken = 'qui';
    $request->packageName = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'cum';
    $request->userIp = 'esse';

    $requestSecurity = new AndroidpublisherEditsApklistingsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsApklistingsUpdate($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsApksAddexternallyhosted

Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to enterprises using Google Play for Work whose application is configured to restrict distribution to the enterprise domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsApksAddexternallyhostedRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApksAddExternallyHostedRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExternallyHostedApk;
use \OpenAPI\OpenAPI\Models\Shared\ExternallyHostedApkUsesPermission;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsApksAddexternallyhostedSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsApksAddexternallyhostedRequest();
    $request->apksAddExternallyHostedRequest = new ApksAddExternallyHostedRequest();
    $request->apksAddExternallyHostedRequest->externallyHostedApk = new ExternallyHostedApk();
    $request->apksAddExternallyHostedRequest->externallyHostedApk->applicationLabel = 'ipsum';
    $request->apksAddExternallyHostedRequest->externallyHostedApk->certificateBase64s = [
        'aspernatur',
        'perferendis',
        'ad',
    ];
    $request->apksAddExternallyHostedRequest->externallyHostedApk->externallyHostedUrl = 'natus';
    $request->apksAddExternallyHostedRequest->externallyHostedApk->fileSha1Base64 = 'sed';
    $request->apksAddExternallyHostedRequest->externallyHostedApk->fileSha256Base64 = 'iste';
    $request->apksAddExternallyHostedRequest->externallyHostedApk->fileSize = 'dolor';
    $request->apksAddExternallyHostedRequest->externallyHostedApk->iconBase64 = 'natus';
    $request->apksAddExternallyHostedRequest->externallyHostedApk->maximumSDK = 386489;
    $request->apksAddExternallyHostedRequest->externallyHostedApk->minimumSDK = 943749;
    $request->apksAddExternallyHostedRequest->externallyHostedApk->nativeCodes = [
        'fuga',
        'in',
        'corporis',
        'iste',
    ];
    $request->apksAddExternallyHostedRequest->externallyHostedApk->packageName = 'iure';
    $request->apksAddExternallyHostedRequest->externallyHostedApk->usesFeatures = [
        'quidem',
        'architecto',
        'ipsa',
        'reiciendis',
    ];
    $request->apksAddExternallyHostedRequest->externallyHostedApk->usesPermissions = [
        new ExternallyHostedApkUsesPermission(),
        new ExternallyHostedApkUsesPermission(),
        new ExternallyHostedApkUsesPermission(),
    ];
    $request->apksAddExternallyHostedRequest->externallyHostedApk->versionCode = 653140;
    $request->apksAddExternallyHostedRequest->externallyHostedApk->versionName = 'laborum';
    $request->alt = AltEnum::JSON;
    $request->editId = 'dolores';
    $request->fields = 'dolorem';
    $request->key = 'corporis';
    $request->oauthToken = 'explicabo';
    $request->packageName = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->userIp = 'omnis';

    $requestSecurity = new AndroidpublisherEditsApksAddexternallyhostedSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsApksAddexternallyhosted($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsApksList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsApksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsApksListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsApksListRequest();
    $request->alt = AltEnum::JSON;
    $request->editId = 'nemo';
    $request->fields = 'minima';
    $request->key = 'excepturi';
    $request->oauthToken = 'accusantium';
    $request->packageName = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'culpa';
    $request->userIp = 'doloribus';

    $requestSecurity = new AndroidpublisherEditsApksListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsApksList($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsApksUpload

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsApksUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsApksUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsApksUploadRequest();
    $request->alt = AltEnum::JSON;
    $request->editId = 'sapiente';
    $request->fields = 'architecto';
    $request->key = 'mollitia';
    $request->oauthToken = 'dolorem';
    $request->packageName = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->userIp = 'repellat';

    $requestSecurity = new AndroidpublisherEditsApksUploadSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsApksUpload($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsBundlesList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsBundlesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsBundlesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsBundlesListRequest();
    $request->alt = AltEnum::JSON;
    $request->editId = 'mollitia';
    $request->fields = 'occaecati';
    $request->key = 'numquam';
    $request->oauthToken = 'commodi';
    $request->packageName = 'quam';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->userIp = 'velit';

    $requestSecurity = new AndroidpublisherEditsBundlesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsBundlesList($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsBundlesUpload

Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See: https://developers.google.com/api-client-library/java/google-api-java-client/errors for an example in java.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsBundlesUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsBundlesUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsBundlesUploadRequest();
    $request->ackBundleInstallationWarning = false;
    $request->alt = AltEnum::JSON;
    $request->editId = 'error';
    $request->fields = 'quia';
    $request->key = 'quis';
    $request->oauthToken = 'vitae';
    $request->packageName = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'animi';
    $request->userIp = 'enim';

    $requestSecurity = new AndroidpublisherEditsBundlesUploadSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsBundlesUpload($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsCommit

Commits/applies the changes made in this edit back to the app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsCommitRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsCommitSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsCommitRequest();
    $request->alt = AltEnum::JSON;
    $request->editId = 'odit';
    $request->fields = 'quo';
    $request->key = 'sequi';
    $request->oauthToken = 'tenetur';
    $request->packageName = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->userIp = 'possimus';

    $requestSecurity = new AndroidpublisherEditsCommitSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsCommit($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsDelete

Deletes an edit for an app. Creating a new edit will automatically delete any of your previous edits so this method need only be called if you want to preemptively abandon an edit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->editId = 'aut';
    $request->fields = 'quasi';
    $request->key = 'error';
    $request->oauthToken = 'temporibus';
    $request->packageName = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->userIp = 'reiciendis';

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

Uploads the deobfuscation file of the specified APK. If a deobfuscation or symbolication file already exists, it will be replaced. See https://developer.android.com/studio/build/shrink-code to learn more about deobfuscation files.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsDeobfuscationfilesUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsDeobfuscationfilesUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsDeobfuscationfilesUploadRequest();
    $request->alt = AltEnum::JSON;
    $request->apkVersionCode = 976460;
    $request->deobfuscationFileType = AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum::PROGUARD;
    $request->editId = 'nihil';
    $request->fields = 'praesentium';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'ipsa';
    $request->packageName = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->userIp = 'cum';

    $requestSecurity = new AndroidpublisherEditsDeobfuscationfilesUploadSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsDeobfuscationfilesUpload($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsDetailsGet

Fetches app details for this edit. This includes the default language and developer support contact information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsDetailsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsDetailsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsDetailsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->editId = 'perferendis';
    $request->fields = 'doloremque';
    $request->key = 'reprehenderit';
    $request->oauthToken = 'ut';
    $request->packageName = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->userIp = 'corporis';

    $requestSecurity = new AndroidpublisherEditsDetailsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsDetailsGet($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsDetailsPatch

Updates app details for this edit. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsDetailsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\AppDetails;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsDetailsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsDetailsPatchRequest();
    $request->appDetails = new AppDetails();
    $request->appDetails->contactEmail = 'dolore';
    $request->appDetails->contactPhone = 'iusto';
    $request->appDetails->contactWebsite = 'dicta';
    $request->appDetails->defaultLanguage = 'harum';
    $request->alt = AltEnum::JSON;
    $request->editId = 'enim';
    $request->fields = 'accusamus';
    $request->key = 'commodi';
    $request->oauthToken = 'repudiandae';
    $request->packageName = 'quae';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->userIp = 'quidem';

    $requestSecurity = new AndroidpublisherEditsDetailsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsDetailsPatch($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsDetailsUpdate

Updates app details for this edit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsDetailsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AppDetails;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsDetailsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsDetailsUpdateRequest();
    $request->appDetails = new AppDetails();
    $request->appDetails->contactEmail = 'molestias';
    $request->appDetails->contactPhone = 'excepturi';
    $request->appDetails->contactWebsite = 'pariatur';
    $request->appDetails->defaultLanguage = 'modi';
    $request->alt = AltEnum::JSON;
    $request->editId = 'praesentium';
    $request->fields = 'rem';
    $request->key = 'voluptates';
    $request->oauthToken = 'quasi';
    $request->packageName = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->userIp = 'veritatis';

    $requestSecurity = new AndroidpublisherEditsDetailsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsDetailsUpdate($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsExpansionfilesGet

Fetches the Expansion File configuration for the APK specified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsExpansionfilesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsExpansionfilesGetExpansionFileTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsExpansionfilesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsExpansionfilesGetRequest();
    $request->alt = AltEnum::JSON;
    $request->apkVersionCode = 929297;
    $request->editId = 'incidunt';
    $request->expansionFileType = AndroidpublisherEditsExpansionfilesGetExpansionFileTypeEnum::MAIN;
    $request->fields = 'consequatur';
    $request->key = 'est';
    $request->oauthToken = 'quibusdam';
    $request->packageName = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->userIp = 'distinctio';

    $requestSecurity = new AndroidpublisherEditsExpansionfilesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsExpansionfilesGet($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsExpansionfilesPatch

Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsExpansionfilesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExpansionFile;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsExpansionfilesPatchExpansionFileTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsExpansionfilesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsExpansionfilesPatchRequest();
    $request->expansionFile = new ExpansionFile();
    $request->expansionFile->fileSize = 'quibusdam';
    $request->expansionFile->referencesVersion = 289406;
    $request->alt = AltEnum::JSON;
    $request->apkVersionCode = 264730;
    $request->editId = 'qui';
    $request->expansionFileType = AndroidpublisherEditsExpansionfilesPatchExpansionFileTypeEnum::MAIN;
    $request->fields = 'cupiditate';
    $request->key = 'quos';
    $request->oauthToken = 'perferendis';
    $request->packageName = 'magni';
    $request->prettyPrint = false;
    $request->quotaUser = 'assumenda';
    $request->userIp = 'ipsam';

    $requestSecurity = new AndroidpublisherEditsExpansionfilesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsExpansionfilesPatch($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsExpansionfilesUpdate

Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsExpansionfilesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExpansionFile;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsExpansionfilesUpdateExpansionFileTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsExpansionfilesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsExpansionfilesUpdateRequest();
    $request->expansionFile = new ExpansionFile();
    $request->expansionFile->fileSize = 'alias';
    $request->expansionFile->referencesVersion = 146441;
    $request->alt = AltEnum::JSON;
    $request->apkVersionCode = 677817;
    $request->editId = 'excepturi';
    $request->expansionFileType = AndroidpublisherEditsExpansionfilesUpdateExpansionFileTypeEnum::MAIN;
    $request->fields = 'facilis';
    $request->key = 'tempore';
    $request->oauthToken = 'labore';
    $request->packageName = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->userIp = 'non';

    $requestSecurity = new AndroidpublisherEditsExpansionfilesUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsExpansionfilesUpdate($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsExpansionfilesUpload

Uploads and attaches a new Expansion File to the APK specified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsExpansionfilesUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsExpansionfilesUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsExpansionfilesUploadRequest();
    $request->alt = AltEnum::JSON;
    $request->apkVersionCode = 756107;
    $request->editId = 'sint';
    $request->expansionFileType = AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum::MAIN;
    $request->fields = 'provident';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'sint';
    $request->packageName = 'officia';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->userIp = 'debitis';

    $requestSecurity = new AndroidpublisherEditsExpansionfilesUploadSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsExpansionfilesUpload($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsGet

Returns information about the edit specified. Calls will fail if the edit is no long active (e.g. has been deleted, superseded or expired).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->editId = 'a';
    $request->fields = 'dolorum';
    $request->key = 'in';
    $request->oauthToken = 'in';
    $request->packageName = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->userIp = 'rerum';

    $requestSecurity = new AndroidpublisherEditsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsGet($request, $requestSecurity);

    if ($response->body !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsImagesDeleteImageTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsImagesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsImagesDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->editId = 'dicta';
    $request->fields = 'magnam';
    $request->imageId = 'cumque';
    $request->imageType = AndroidpublisherEditsImagesDeleteImageTypeEnum::TV_SCREENSHOTS;
    $request->key = 'ea';
    $request->language = 'aliquid';
    $request->oauthToken = 'laborum';
    $request->packageName = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->userIp = 'occaecati';

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

Deletes all images for the specified language and image type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsImagesDeleteallRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsImagesDeleteallImageTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsImagesDeleteallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsImagesDeleteallRequest();
    $request->alt = AltEnum::JSON;
    $request->editId = 'enim';
    $request->fields = 'accusamus';
    $request->imageType = AndroidpublisherEditsImagesDeleteallImageTypeEnum::WEAR_SCREENSHOTS;
    $request->key = 'quidem';
    $request->language = 'provident';
    $request->oauthToken = 'nam';
    $request->packageName = 'id';
    $request->prettyPrint = false;
    $request->quotaUser = 'blanditiis';
    $request->userIp = 'deleniti';

    $requestSecurity = new AndroidpublisherEditsImagesDeleteallSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsImagesDeleteall($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsImagesList

Lists all images for the specified language and image type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsImagesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsImagesListImageTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsImagesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsImagesListRequest();
    $request->alt = AltEnum::JSON;
    $request->editId = 'sapiente';
    $request->fields = 'amet';
    $request->imageType = AndroidpublisherEditsImagesListImageTypeEnum::TEN_INCH_SCREENSHOTS;
    $request->key = 'nisi';
    $request->language = 'vel';
    $request->oauthToken = 'natus';
    $request->packageName = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->userIp = 'perferendis';

    $requestSecurity = new AndroidpublisherEditsImagesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsImagesList($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsImagesUpload

Uploads a new image and adds it to the list of images for the specified language and image type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsImagesUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsImagesUploadImageTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsImagesUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsImagesUploadRequest();
    $request->alt = AltEnum::JSON;
    $request->editId = 'nihil';
    $request->fields = 'magnam';
    $request->imageType = AndroidpublisherEditsImagesUploadImageTypeEnum::TV_BANNER;
    $request->key = 'id';
    $request->language = 'labore';
    $request->oauthToken = 'labore';
    $request->packageName = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->userIp = 'nobis';

    $requestSecurity = new AndroidpublisherEditsImagesUploadSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsImagesUpload($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsInsert

Creates a new edit for an app, populated with the app's current state.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\AppEdit;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsInsertRequest();
    $request->appEdit = new AppEdit();
    $request->appEdit->expiryTimeSeconds = 'eum';
    $request->appEdit->id = 'e2141959-890a-4fa5-a3e2-516fe4c8b711';
    $request->alt = AltEnum::JSON;
    $request->fields = 'repudiandae';
    $request->key = 'ullam';
    $request->oauthToken = 'expedita';
    $request->packageName = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellat';
    $request->userIp = 'quibusdam';

    $requestSecurity = new AndroidpublisherEditsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsInsert($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsListingsDelete

Deletes the specified localized store listing from an edit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsListingsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsListingsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsListingsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->editId = 'sed';
    $request->fields = 'saepe';
    $request->key = 'pariatur';
    $request->language = 'accusantium';
    $request->oauthToken = 'consequuntur';
    $request->packageName = 'praesentium';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->userIp = 'magni';

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

Deletes all localized listings from an edit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsListingsDeleteallRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsListingsDeleteallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsListingsDeleteallRequest();
    $request->alt = AltEnum::JSON;
    $request->editId = 'sunt';
    $request->fields = 'quo';
    $request->key = 'illum';
    $request->oauthToken = 'pariatur';
    $request->packageName = 'maxime';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->userIp = 'excepturi';

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

Fetches information about a localized store listing.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsListingsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsListingsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsListingsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->editId = 'odit';
    $request->fields = 'ea';
    $request->key = 'accusantium';
    $request->language = 'ab';
    $request->oauthToken = 'maiores';
    $request->packageName = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->userIp = 'voluptate';

    $requestSecurity = new AndroidpublisherEditsListingsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsListingsGet($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsListingsList

Returns all of the localized store listings attached to this edit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsListingsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsListingsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsListingsListRequest();
    $request->alt = AltEnum::JSON;
    $request->editId = 'autem';
    $request->fields = 'nam';
    $request->key = 'eaque';
    $request->oauthToken = 'pariatur';
    $request->packageName = 'nemo';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->userIp = 'perferendis';

    $requestSecurity = new AndroidpublisherEditsListingsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsListingsList($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsListingsPatch

Creates or updates a localized store listing. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsListingsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\Listing;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsListingsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsListingsPatchRequest();
    $request->listing = new Listing();
    $request->listing->fullDescription = 'fugiat';
    $request->listing->language = 'amet';
    $request->listing->shortDescription = 'aut';
    $request->listing->title = 'Miss';
    $request->listing->video = 'corporis';
    $request->alt = AltEnum::JSON;
    $request->editId = 'hic';
    $request->fields = 'libero';
    $request->key = 'nobis';
    $request->language = 'dolores';
    $request->oauthToken = 'quis';
    $request->packageName = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'dignissimos';
    $request->userIp = 'eaque';

    $requestSecurity = new AndroidpublisherEditsListingsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsListingsPatch($request, $requestSecurity);

    if ($response->body !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\Listing;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsListingsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsListingsUpdateRequest();
    $request->listing = new Listing();
    $request->listing->fullDescription = 'quis';
    $request->listing->language = 'nesciunt';
    $request->listing->shortDescription = 'eos';
    $request->listing->title = 'Mr.';
    $request->listing->video = 'dolores';
    $request->alt = AltEnum::JSON;
    $request->editId = 'minus';
    $request->fields = 'quam';
    $request->key = 'dolor';
    $request->language = 'vero';
    $request->oauthToken = 'nostrum';
    $request->packageName = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'recusandae';
    $request->userIp = 'omnis';

    $requestSecurity = new AndroidpublisherEditsListingsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsListingsUpdate($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsTestersGet

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsTestersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsTestersGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsTestersGetRequest();
    $request->alt = AltEnum::JSON;
    $request->editId = 'facilis';
    $request->fields = 'perspiciatis';
    $request->key = 'voluptatem';
    $request->oauthToken = 'porro';
    $request->packageName = 'consequuntur';
    $request->prettyPrint = false;
    $request->quotaUser = 'blanditiis';
    $request->track = 'error';
    $request->userIp = 'eaque';

    $requestSecurity = new AndroidpublisherEditsTestersGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsTestersGet($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsTestersPatch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsTestersPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\Testers;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsTestersPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsTestersPatchRequest();
    $request->testers = new Testers();
    $request->testers->googleGroups = [
        'rerum',
        'adipisci',
        'asperiores',
    ];
    $request->alt = AltEnum::JSON;
    $request->editId = 'earum';
    $request->fields = 'modi';
    $request->key = 'iste';
    $request->oauthToken = 'dolorum';
    $request->packageName = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->track = 'provident';
    $request->userIp = 'nobis';

    $requestSecurity = new AndroidpublisherEditsTestersPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsTestersPatch($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsTestersUpdate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsTestersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Testers;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsTestersUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsTestersUpdateRequest();
    $request->testers = new Testers();
    $request->testers->googleGroups = [
        'delectus',
        'quaerat',
        'quos',
    ];
    $request->alt = AltEnum::JSON;
    $request->editId = 'aliquid';
    $request->fields = 'dolorem';
    $request->key = 'dolorem';
    $request->oauthToken = 'dolor';
    $request->packageName = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->track = 'hic';
    $request->userIp = 'excepturi';

    $requestSecurity = new AndroidpublisherEditsTestersUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsTestersUpdate($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsTracksGet

Fetches the track configuration for the specified track type. Includes the APK version codes that are in this track.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsTracksGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsTracksGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsTracksGetRequest();
    $request->alt = AltEnum::JSON;
    $request->editId = 'cum';
    $request->fields = 'voluptate';
    $request->key = 'dignissimos';
    $request->oauthToken = 'reiciendis';
    $request->packageName = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->track = 'numquam';
    $request->userIp = 'veritatis';

    $requestSecurity = new AndroidpublisherEditsTracksGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsTracksGet($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsTracksList

Lists all the track configurations for this edit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsTracksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsTracksListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsTracksListRequest();
    $request->alt = AltEnum::JSON;
    $request->editId = 'ipsa';
    $request->fields = 'ipsa';
    $request->key = 'iure';
    $request->oauthToken = 'odio';
    $request->packageName = 'quaerat';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->userIp = 'quidem';

    $requestSecurity = new AndroidpublisherEditsTracksListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsTracksList($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsTracksPatch

Updates the track configuration for the specified track type. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsTracksPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\Track;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsTracksPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsTracksPatchRequest();
    $request->track1 = new Track();
    $request->track1->track = 'voluptatibus';
    $request->track1->userFraction = 3777.52;
    $request->track1->versionCodes = [
        179603,
        542499,
        24678,
    ];
    $request->alt = AltEnum::JSON;
    $request->editId = 'fugiat';
    $request->fields = 'ab';
    $request->key = 'soluta';
    $request->oauthToken = 'dolorum';
    $request->packageName = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->trackPathParameter = 'dolorum';
    $request->userIp = 'deleniti';

    $requestSecurity = new AndroidpublisherEditsTracksPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsTracksPatch($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsTracksUpdate

Updates the track configuration for the specified track type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsTracksUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Track;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsTracksUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsTracksUpdateRequest();
    $request->track1 = new Track();
    $request->track1->track = 'omnis';
    $request->track1->userFraction = 8966.72;
    $request->track1->versionCodes = [
        990339,
        469497,
        216897,
    ];
    $request->alt = AltEnum::JSON;
    $request->editId = 'voluptate';
    $request->fields = 'id';
    $request->key = 'saepe';
    $request->oauthToken = 'eius';
    $request->packageName = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->trackPathParameter = 'amet';
    $request->userIp = 'optio';

    $requestSecurity = new AndroidpublisherEditsTracksUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsTracksUpdate($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherEditsValidate

Checks that the edit can be successfully committed. The edit's changes are not applied to the live app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsValidateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherEditsValidateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherEditsValidateRequest();
    $request->alt = AltEnum::JSON;
    $request->editId = 'accusamus';
    $request->fields = 'ad';
    $request->key = 'saepe';
    $request->oauthToken = 'suscipit';
    $request->packageName = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->userIp = 'minima';

    $requestSecurity = new AndroidpublisherEditsValidateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->edits->androidpublisherEditsValidate($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
