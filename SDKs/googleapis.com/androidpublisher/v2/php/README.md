# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    $request->apkVersionCode = 548814;
    $request->editId = 'provident';
    $request->fields = 'distinctio';
    $request->key = 'quibusdam';
    $request->language = 'unde';
    $request->oauthToken = 'nulla';
    $request->packageName = 'corrupti';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->userIp = 'vel';

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [edits](docs/edits/README.md)

* [androidpublisherEditsApklistingsDelete](docs/edits/README.md#androidpublishereditsapklistingsdelete) - Deletes the APK-specific localized listing for a specified APK and language code.
* [androidpublisherEditsApklistingsDeleteall](docs/edits/README.md#androidpublishereditsapklistingsdeleteall) - Deletes all the APK-specific localized listings for a specified APK.
* [androidpublisherEditsApklistingsGet](docs/edits/README.md#androidpublishereditsapklistingsget) - Fetches the APK-specific localized listing for a specified APK and language code.
* [androidpublisherEditsApklistingsList](docs/edits/README.md#androidpublishereditsapklistingslist) - Lists all the APK-specific localized listings for a specified APK.
* [androidpublisherEditsApklistingsPatch](docs/edits/README.md#androidpublishereditsapklistingspatch) - Updates or creates the APK-specific localized listing for a specified APK and language code. This method supports patch semantics.
* [androidpublisherEditsApklistingsUpdate](docs/edits/README.md#androidpublishereditsapklistingsupdate) - Updates or creates the APK-specific localized listing for a specified APK and language code.
* [androidpublisherEditsApksAddexternallyhosted](docs/edits/README.md#androidpublishereditsapksaddexternallyhosted) - Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to enterprises using Google Play for Work whose application is configured to restrict distribution to the enterprise domain.
* [androidpublisherEditsApksList](docs/edits/README.md#androidpublishereditsapkslist)
* [androidpublisherEditsApksUpload](docs/edits/README.md#androidpublishereditsapksupload)
* [androidpublisherEditsBundlesList](docs/edits/README.md#androidpublishereditsbundleslist)
* [androidpublisherEditsBundlesUpload](docs/edits/README.md#androidpublishereditsbundlesupload) - Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See: https://developers.google.com/api-client-library/java/google-api-java-client/errors for an example in java.
* [androidpublisherEditsCommit](docs/edits/README.md#androidpublishereditscommit) - Commits/applies the changes made in this edit back to the app.
* [androidpublisherEditsDelete](docs/edits/README.md#androidpublishereditsdelete) - Deletes an edit for an app. Creating a new edit will automatically delete any of your previous edits so this method need only be called if you want to preemptively abandon an edit.
* [androidpublisherEditsDeobfuscationfilesUpload](docs/edits/README.md#androidpublishereditsdeobfuscationfilesupload) - Uploads the deobfuscation file of the specified APK. If a deobfuscation or symbolication file already exists, it will be replaced. See https://developer.android.com/studio/build/shrink-code to learn more about deobfuscation files.
* [androidpublisherEditsDetailsGet](docs/edits/README.md#androidpublishereditsdetailsget) - Fetches app details for this edit. This includes the default language and developer support contact information.
* [androidpublisherEditsDetailsPatch](docs/edits/README.md#androidpublishereditsdetailspatch) - Updates app details for this edit. This method supports patch semantics.
* [androidpublisherEditsDetailsUpdate](docs/edits/README.md#androidpublishereditsdetailsupdate) - Updates app details for this edit.
* [androidpublisherEditsExpansionfilesGet](docs/edits/README.md#androidpublishereditsexpansionfilesget) - Fetches the Expansion File configuration for the APK specified.
* [androidpublisherEditsExpansionfilesPatch](docs/edits/README.md#androidpublishereditsexpansionfilespatch) - Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method. This method supports patch semantics.
* [androidpublisherEditsExpansionfilesUpdate](docs/edits/README.md#androidpublishereditsexpansionfilesupdate) - Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method.
* [androidpublisherEditsExpansionfilesUpload](docs/edits/README.md#androidpublishereditsexpansionfilesupload) - Uploads and attaches a new Expansion File to the APK specified.
* [androidpublisherEditsGet](docs/edits/README.md#androidpublishereditsget) - Returns information about the edit specified. Calls will fail if the edit is no long active (e.g. has been deleted, superseded or expired).
* [androidpublisherEditsImagesDelete](docs/edits/README.md#androidpublishereditsimagesdelete) - Deletes the image (specified by id) from the edit.
* [androidpublisherEditsImagesDeleteall](docs/edits/README.md#androidpublishereditsimagesdeleteall) - Deletes all images for the specified language and image type.
* [androidpublisherEditsImagesList](docs/edits/README.md#androidpublishereditsimageslist) - Lists all images for the specified language and image type.
* [androidpublisherEditsImagesUpload](docs/edits/README.md#androidpublishereditsimagesupload) - Uploads a new image and adds it to the list of images for the specified language and image type.
* [androidpublisherEditsInsert](docs/edits/README.md#androidpublishereditsinsert) - Creates a new edit for an app, populated with the app's current state.
* [androidpublisherEditsListingsDelete](docs/edits/README.md#androidpublishereditslistingsdelete) - Deletes the specified localized store listing from an edit.
* [androidpublisherEditsListingsDeleteall](docs/edits/README.md#androidpublishereditslistingsdeleteall) - Deletes all localized listings from an edit.
* [androidpublisherEditsListingsGet](docs/edits/README.md#androidpublishereditslistingsget) - Fetches information about a localized store listing.
* [androidpublisherEditsListingsList](docs/edits/README.md#androidpublishereditslistingslist) - Returns all of the localized store listings attached to this edit.
* [androidpublisherEditsListingsPatch](docs/edits/README.md#androidpublishereditslistingspatch) - Creates or updates a localized store listing. This method supports patch semantics.
* [androidpublisherEditsListingsUpdate](docs/edits/README.md#androidpublishereditslistingsupdate) - Creates or updates a localized store listing.
* [androidpublisherEditsTestersGet](docs/edits/README.md#androidpublishereditstestersget)
* [androidpublisherEditsTestersPatch](docs/edits/README.md#androidpublishereditstesterspatch)
* [androidpublisherEditsTestersUpdate](docs/edits/README.md#androidpublishereditstestersupdate)
* [androidpublisherEditsTracksGet](docs/edits/README.md#androidpublishereditstracksget) - Fetches the track configuration for the specified track type. Includes the APK version codes that are in this track.
* [androidpublisherEditsTracksList](docs/edits/README.md#androidpublishereditstrackslist) - Lists all the track configurations for this edit.
* [androidpublisherEditsTracksPatch](docs/edits/README.md#androidpublishereditstrackspatch) - Updates the track configuration for the specified track type. This method supports patch semantics.
* [androidpublisherEditsTracksUpdate](docs/edits/README.md#androidpublishereditstracksupdate) - Updates the track configuration for the specified track type.
* [androidpublisherEditsValidate](docs/edits/README.md#androidpublishereditsvalidate) - Checks that the edit can be successfully committed. The edit's changes are not applied to the live app.

### [inappproducts](docs/inappproducts/README.md)

* [androidpublisherInappproductsDelete](docs/inappproducts/README.md#androidpublisherinappproductsdelete) - Delete an in-app product for an app.
* [androidpublisherInappproductsGet](docs/inappproducts/README.md#androidpublisherinappproductsget) - Returns information about the in-app product specified.
* [androidpublisherInappproductsInsert](docs/inappproducts/README.md#androidpublisherinappproductsinsert) - Creates a new in-app product for an app.
* [androidpublisherInappproductsList](docs/inappproducts/README.md#androidpublisherinappproductslist) - List all the in-app products for an Android app, both subscriptions and managed in-app products..
* [androidpublisherInappproductsPatch](docs/inappproducts/README.md#androidpublisherinappproductspatch) - Updates the details of an in-app product. This method supports patch semantics.
* [androidpublisherInappproductsUpdate](docs/inappproducts/README.md#androidpublisherinappproductsupdate) - Updates the details of an in-app product.

### [orders](docs/orders/README.md)

* [androidpublisherOrdersRefund](docs/orders/README.md#androidpublisherordersrefund) - Refund a user's subscription or in-app purchase order.

### [purchases](docs/purchases/README.md)

* [androidpublisherPurchasesProductsGet](docs/purchases/README.md#androidpublisherpurchasesproductsget) - Checks the purchase and consumption status of an inapp item.
* [androidpublisherPurchasesSubscriptionsCancel](docs/purchases/README.md#androidpublisherpurchasessubscriptionscancel) - Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
* [androidpublisherPurchasesSubscriptionsDefer](docs/purchases/README.md#androidpublisherpurchasessubscriptionsdefer) - Defers a user's subscription purchase until a specified future expiration time.
* [androidpublisherPurchasesSubscriptionsGet](docs/purchases/README.md#androidpublisherpurchasessubscriptionsget) - Checks whether a user's subscription purchase is valid and returns its expiry time.
* [androidpublisherPurchasesSubscriptionsRefund](docs/purchases/README.md#androidpublisherpurchasessubscriptionsrefund) - Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.
* [androidpublisherPurchasesSubscriptionsRevoke](docs/purchases/README.md#androidpublisherpurchasessubscriptionsrevoke) - Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.
* [androidpublisherPurchasesVoidedpurchasesList](docs/purchases/README.md#androidpublisherpurchasesvoidedpurchaseslist) - Lists the purchases that were canceled, refunded or charged-back.

### [reviews](docs/reviews/README.md)

* [androidpublisherReviewsGet](docs/reviews/README.md#androidpublisherreviewsget) - Returns a single review.
* [androidpublisherReviewsList](docs/reviews/README.md#androidpublisherreviewslist) - Returns a list of reviews. Only reviews from last week will be returned.
* [androidpublisherReviewsReply](docs/reviews/README.md#androidpublisherreviewsreply) - Reply to a single review, or update an existing reply.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
