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
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherApplicationsDeviceTierConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceTierConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\DeviceGroup;
use \OpenAPI\OpenAPI\Models\Shared\DeviceSelector;
use \OpenAPI\OpenAPI\Models\Shared\DeviceRam;
use \OpenAPI\OpenAPI\Models\Shared\DeviceId;
use \OpenAPI\OpenAPI\Models\Shared\SystemFeature;
use \OpenAPI\OpenAPI\Models\Shared\DeviceTierSet;
use \OpenAPI\OpenAPI\Models\Shared\DeviceTier;
use \OpenAPI\OpenAPI\Models\Shared\UserCountrySet;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherApplicationsDeviceTierConfigsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherApplicationsDeviceTierConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->deviceTierConfigInput = new DeviceTierConfigInput();
    $request->deviceTierConfigInput->deviceGroups = [
        new DeviceGroup(),
        new DeviceGroup(),
        new DeviceGroup(),
    ];
    $request->deviceTierConfigInput->deviceTierSet = new DeviceTierSet();
    $request->deviceTierConfigInput->deviceTierSet->deviceTiers = [
        new DeviceTier(),
        new DeviceTier(),
        new DeviceTier(),
    ];
    $request->deviceTierConfigInput->userCountrySets = [
        new UserCountrySet(),
        new UserCountrySet(),
        new UserCountrySet(),
        new UserCountrySet(),
    ];
    $request->accessToken = 'unde';
    $request->allowUnknownDevices = false;
    $request->alt = AltEnum::PROTO;
    $request->callback = 'corrupti';
    $request->fields = 'illum';
    $request->key = 'vel';
    $request->oauthToken = 'error';
    $request->packageName = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'magnam';

    $requestSecurity = new AndroidpublisherApplicationsDeviceTierConfigsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->applications->androidpublisherApplicationsDeviceTierConfigsCreate($request, $requestSecurity);

    if ($response->deviceTierConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [applications](docs/applications/README.md)

* [androidpublisherApplicationsDeviceTierConfigsCreate](docs/applications/README.md#androidpublisherapplicationsdevicetierconfigscreate) - Creates a new device tier config for an app.
* [androidpublisherApplicationsDeviceTierConfigsGet](docs/applications/README.md#androidpublisherapplicationsdevicetierconfigsget) - Returns a particular device tier config.
* [androidpublisherApplicationsDeviceTierConfigsList](docs/applications/README.md#androidpublisherapplicationsdevicetierconfigslist) - Returns created device tier configs, ordered by descending creation time.

### [edits](docs/edits/README.md)

* [androidpublisherEditsApksAddexternallyhosted](docs/edits/README.md#androidpublishereditsapksaddexternallyhosted) - Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.
* [androidpublisherEditsApksList](docs/edits/README.md#androidpublishereditsapkslist) - Lists all current APKs of the app and edit.
* [androidpublisherEditsApksUpload](docs/edits/README.md#androidpublishereditsapksupload) - Uploads an APK and adds to the current edit.
* [androidpublisherEditsBundlesList](docs/edits/README.md#androidpublishereditsbundleslist) - Lists all current Android App Bundles of the app and edit.
* [androidpublisherEditsBundlesUpload](docs/edits/README.md#androidpublishereditsbundlesupload) - Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
* [androidpublisherEditsCommit](docs/edits/README.md#androidpublishereditscommit) - Commits an app edit.
* [androidpublisherEditsCountryavailabilityGet](docs/edits/README.md#androidpublishereditscountryavailabilityget) - Gets country availability.
* [androidpublisherEditsDelete](docs/edits/README.md#androidpublishereditsdelete) - Deletes an app edit.
* [androidpublisherEditsDeobfuscationfilesUpload](docs/edits/README.md#androidpublishereditsdeobfuscationfilesupload) - Uploads a new deobfuscation file and attaches to the specified APK.
* [androidpublisherEditsDetailsGet](docs/edits/README.md#androidpublishereditsdetailsget) - Gets details of an app.
* [androidpublisherEditsDetailsPatch](docs/edits/README.md#androidpublishereditsdetailspatch) - Patches details of an app.
* [androidpublisherEditsDetailsUpdate](docs/edits/README.md#androidpublishereditsdetailsupdate) - Updates details of an app.
* [androidpublisherEditsExpansionfilesGet](docs/edits/README.md#androidpublishereditsexpansionfilesget) - Fetches the expansion file configuration for the specified APK.
* [androidpublisherEditsExpansionfilesPatch](docs/edits/README.md#androidpublishereditsexpansionfilespatch) - Patches the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
* [androidpublisherEditsExpansionfilesUpdate](docs/edits/README.md#androidpublishereditsexpansionfilesupdate) - Updates the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
* [androidpublisherEditsExpansionfilesUpload](docs/edits/README.md#androidpublishereditsexpansionfilesupload) - Uploads a new expansion file and attaches to the specified APK.
* [androidpublisherEditsGet](docs/edits/README.md#androidpublishereditsget) - Gets an app edit.
* [androidpublisherEditsImagesDelete](docs/edits/README.md#androidpublishereditsimagesdelete) - Deletes the image (specified by id) from the edit.
* [androidpublisherEditsImagesDeleteall](docs/edits/README.md#androidpublishereditsimagesdeleteall) - Deletes all images for the specified language and image type. Returns an empty response if no images are found.
* [androidpublisherEditsImagesList](docs/edits/README.md#androidpublishereditsimageslist) - Lists all images. The response may be empty.
* [androidpublisherEditsImagesUpload](docs/edits/README.md#androidpublishereditsimagesupload) - Uploads an image of the specified language and image type, and adds to the edit.
* [androidpublisherEditsInsert](docs/edits/README.md#androidpublishereditsinsert) - Creates a new edit for an app.
* [androidpublisherEditsListingsDelete](docs/edits/README.md#androidpublishereditslistingsdelete) - Deletes a localized store listing.
* [androidpublisherEditsListingsDeleteall](docs/edits/README.md#androidpublishereditslistingsdeleteall) - Deletes all store listings.
* [androidpublisherEditsListingsGet](docs/edits/README.md#androidpublishereditslistingsget) - Gets a localized store listing.
* [androidpublisherEditsListingsList](docs/edits/README.md#androidpublishereditslistingslist) - Lists all localized store listings.
* [androidpublisherEditsListingsPatch](docs/edits/README.md#androidpublishereditslistingspatch) - Patches a localized store listing.
* [androidpublisherEditsListingsUpdate](docs/edits/README.md#androidpublishereditslistingsupdate) - Creates or updates a localized store listing.
* [androidpublisherEditsTestersGet](docs/edits/README.md#androidpublishereditstestersget) - Gets testers. Note: Testers resource does not support email lists.
* [androidpublisherEditsTestersPatch](docs/edits/README.md#androidpublishereditstesterspatch) - Patches testers. Note: Testers resource does not support email lists.
* [androidpublisherEditsTestersUpdate](docs/edits/README.md#androidpublishereditstestersupdate) - Updates testers. Note: Testers resource does not support email lists.
* [androidpublisherEditsTracksGet](docs/edits/README.md#androidpublishereditstracksget) - Gets a track.
* [androidpublisherEditsTracksList](docs/edits/README.md#androidpublishereditstrackslist) - Lists all tracks.
* [androidpublisherEditsTracksPatch](docs/edits/README.md#androidpublishereditstrackspatch) - Patches a track.
* [androidpublisherEditsTracksUpdate](docs/edits/README.md#androidpublishereditstracksupdate) - Updates a track.
* [androidpublisherEditsValidate](docs/edits/README.md#androidpublishereditsvalidate) - Validates an app edit.

### [externaltransactions](docs/externaltransactions/README.md)

* [androidpublisherExternaltransactionsCreateexternaltransaction](docs/externaltransactions/README.md#androidpublisherexternaltransactionscreateexternaltransaction) - Creates a new external transaction.
* [androidpublisherExternaltransactionsGetexternaltransaction](docs/externaltransactions/README.md#androidpublisherexternaltransactionsgetexternaltransaction) - Gets an existing external transaction.
* [androidpublisherExternaltransactionsRefundexternaltransaction](docs/externaltransactions/README.md#androidpublisherexternaltransactionsrefundexternaltransaction) - Refunds or partially refunds an existing external transaction.

### [generatedapks](docs/generatedapks/README.md)

* [androidpublisherGeneratedapksDownload](docs/generatedapks/README.md#androidpublishergeneratedapksdownload) - Downloads a single signed APK generated from an app bundle.
* [androidpublisherGeneratedapksList](docs/generatedapks/README.md#androidpublishergeneratedapkslist) - Returns download metadata for all APKs that were generated from a given app bundle.

### [grants](docs/grants/README.md)

* [androidpublisherGrantsCreate](docs/grants/README.md#androidpublishergrantscreate) - Grant access for a user to the given package.

### [inappproducts](docs/inappproducts/README.md)

* [androidpublisherInappproductsDelete](docs/inappproducts/README.md#androidpublisherinappproductsdelete) - Deletes an in-app product (i.e. a managed product or a subscription).
* [androidpublisherInappproductsGet](docs/inappproducts/README.md#androidpublisherinappproductsget) - Gets an in-app product, which can be a managed product or a subscription.
* [androidpublisherInappproductsInsert](docs/inappproducts/README.md#androidpublisherinappproductsinsert) - Creates an in-app product (i.e. a managed product or a subscription).
* [androidpublisherInappproductsList](docs/inappproducts/README.md#androidpublisherinappproductslist) - Lists all in-app products - both managed products and subscriptions. If an app has a large number of in-app products, the response may be paginated. In this case the response field `tokenPagination.nextPageToken` will be set and the caller should provide its value as a `token` request parameter to retrieve the next page.
* [androidpublisherInappproductsPatch](docs/inappproducts/README.md#androidpublisherinappproductspatch) - Patches an in-app product (i.e. a managed product or a subscription).
* [androidpublisherInappproductsUpdate](docs/inappproducts/README.md#androidpublisherinappproductsupdate) - Updates an in-app product (i.e. a managed product or a subscription).

### [internalappsharingartifacts](docs/internalappsharingartifacts/README.md)

* [androidpublisherInternalappsharingartifactsUploadapk](docs/internalappsharingartifacts/README.md#androidpublisherinternalappsharingartifactsuploadapk) - Uploads an APK to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
* [androidpublisherInternalappsharingartifactsUploadbundle](docs/internalappsharingartifacts/README.md#androidpublisherinternalappsharingartifactsuploadbundle) - Uploads an app bundle to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.

### [monetization](docs/monetization/README.md)

* [androidpublisherMonetizationConvertRegionPrices](docs/monetization/README.md#androidpublishermonetizationconvertregionprices) - Calculates the region prices, using today's exchange rate and country-specific pricing patterns, based on the price in the request for a set of regions.
* [androidpublisherMonetizationSubscriptionsArchive](docs/monetization/README.md#androidpublishermonetizationsubscriptionsarchive) - Archives a subscription. Can only be done if at least one base plan was active in the past, and no base plan is available for new or existing subscribers currently. This action is irreversible, and the subscription ID will remain reserved.
* [androidpublisherMonetizationSubscriptionsBasePlansActivate](docs/monetization/README.md#androidpublishermonetizationsubscriptionsbaseplansactivate) - Activates a base plan. Once activated, base plans will be available to new subscribers.
* [androidpublisherMonetizationSubscriptionsBasePlansDeactivate](docs/monetization/README.md#androidpublishermonetizationsubscriptionsbaseplansdeactivate) - Deactivates a base plan. Once deactivated, the base plan will become unavailable to new subscribers, but existing subscribers will maintain their subscription
* [androidpublisherMonetizationSubscriptionsBasePlansDelete](docs/monetization/README.md#androidpublishermonetizationsubscriptionsbaseplansdelete) - Deletes a base plan. Can only be done for draft base plans. This action is irreversible.
* [androidpublisherMonetizationSubscriptionsBasePlansMigratePrices](docs/monetization/README.md#androidpublishermonetizationsubscriptionsbaseplansmigrateprices) - Migrates subscribers who are receiving an historical subscription price to the currently-offered price for the specified region. Requests will cause price change notifications to be sent to users who are currently receiving an historical price older than the supplied timestamp. Subscribers who do not agree to the new price will have their subscription ended at the next renewal.
* [androidpublisherMonetizationSubscriptionsBasePlansOffersActivate](docs/monetization/README.md#androidpublishermonetizationsubscriptionsbaseplansoffersactivate) - Activates a subscription offer. Once activated, subscription offers will be available to new subscribers.
* [androidpublisherMonetizationSubscriptionsBasePlansOffersCreate](docs/monetization/README.md#androidpublishermonetizationsubscriptionsbaseplansofferscreate) - Creates a new subscription offer. Only auto-renewing base plans can have subscription offers. The offer state will be DRAFT until it is activated.
* [androidpublisherMonetizationSubscriptionsBasePlansOffersDeactivate](docs/monetization/README.md#androidpublishermonetizationsubscriptionsbaseplansoffersdeactivate) - Deactivates a subscription offer. Once deactivated, existing subscribers will maintain their subscription, but the offer will become unavailable to new subscribers.
* [androidpublisherMonetizationSubscriptionsBasePlansOffersDelete](docs/monetization/README.md#androidpublishermonetizationsubscriptionsbaseplansoffersdelete) - Deletes a subscription offer. Can only be done for draft offers. This action is irreversible.
* [androidpublisherMonetizationSubscriptionsBasePlansOffersGet](docs/monetization/README.md#androidpublishermonetizationsubscriptionsbaseplansoffersget) - Reads a single offer
* [androidpublisherMonetizationSubscriptionsBasePlansOffersList](docs/monetization/README.md#androidpublishermonetizationsubscriptionsbaseplansofferslist) - Lists all offers under a given subscription.
* [androidpublisherMonetizationSubscriptionsBasePlansOffersPatch](docs/monetization/README.md#androidpublishermonetizationsubscriptionsbaseplansofferspatch) - Updates an existing subscription offer.
* [androidpublisherMonetizationSubscriptionsCreate](docs/monetization/README.md#androidpublishermonetizationsubscriptionscreate) - Creates a new subscription. Newly added base plans will remain in draft state until activated.
* [androidpublisherMonetizationSubscriptionsDelete](docs/monetization/README.md#androidpublishermonetizationsubscriptionsdelete) - Deletes a subscription. A subscription can only be deleted if it has never had a base plan published.
* [androidpublisherMonetizationSubscriptionsGet](docs/monetization/README.md#androidpublishermonetizationsubscriptionsget) - Reads a single subscription.
* [androidpublisherMonetizationSubscriptionsList](docs/monetization/README.md#androidpublishermonetizationsubscriptionslist) - Lists all subscriptions under a given app.
* [androidpublisherMonetizationSubscriptionsPatch](docs/monetization/README.md#androidpublishermonetizationsubscriptionspatch) - Updates an existing subscription.

### [orders](docs/orders/README.md)

* [androidpublisherOrdersRefund](docs/orders/README.md#androidpublisherordersrefund) - Refunds a user's subscription or in-app purchase order. Orders older than 1 year cannot be refunded.

### [purchases](docs/purchases/README.md)

* [androidpublisherPurchasesProductsAcknowledge](docs/purchases/README.md#androidpublisherpurchasesproductsacknowledge) - Acknowledges a purchase of an inapp item.
* [androidpublisherPurchasesProductsConsume](docs/purchases/README.md#androidpublisherpurchasesproductsconsume) - Consumes a purchase for an inapp item.
* [androidpublisherPurchasesProductsGet](docs/purchases/README.md#androidpublisherpurchasesproductsget) - Checks the purchase and consumption status of an inapp item.
* [androidpublisherPurchasesSubscriptionsAcknowledge](docs/purchases/README.md#androidpublisherpurchasessubscriptionsacknowledge) - Acknowledges a subscription purchase.
* [androidpublisherPurchasesSubscriptionsCancel](docs/purchases/README.md#androidpublisherpurchasessubscriptionscancel) - Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
* [androidpublisherPurchasesSubscriptionsDefer](docs/purchases/README.md#androidpublisherpurchasessubscriptionsdefer) - Defers a user's subscription purchase until a specified future expiration time.
* [androidpublisherPurchasesSubscriptionsGet](docs/purchases/README.md#androidpublisherpurchasessubscriptionsget) - Checks whether a user's subscription purchase is valid and returns its expiry time.
* [androidpublisherPurchasesSubscriptionsRefund](docs/purchases/README.md#androidpublisherpurchasessubscriptionsrefund) - Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.
* [androidpublisherPurchasesSubscriptionsRevoke](docs/purchases/README.md#androidpublisherpurchasessubscriptionsrevoke) - Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.
* [androidpublisherPurchasesSubscriptionsv2Get](docs/purchases/README.md#androidpublisherpurchasessubscriptionsv2get) - Get metadata about a subscription
* [androidpublisherPurchasesVoidedpurchasesList](docs/purchases/README.md#androidpublisherpurchasesvoidedpurchaseslist) - Lists the purchases that were canceled, refunded or charged-back.

### [reviews](docs/reviews/README.md)

* [androidpublisherReviewsGet](docs/reviews/README.md#androidpublisherreviewsget) - Gets a single review.
* [androidpublisherReviewsList](docs/reviews/README.md#androidpublisherreviewslist) - Lists all reviews.
* [androidpublisherReviewsReply](docs/reviews/README.md#androidpublisherreviewsreply) - Replies to a single review, or updates an existing reply.

### [systemapks](docs/systemapks/README.md)

* [androidpublisherSystemapksVariantsCreate](docs/systemapks/README.md#androidpublishersystemapksvariantscreate) - Creates an APK which is suitable for inclusion in a system image from an already uploaded Android App Bundle.
* [androidpublisherSystemapksVariantsDownload](docs/systemapks/README.md#androidpublishersystemapksvariantsdownload) - Downloads a previously created system APK which is suitable for inclusion in a system image.
* [androidpublisherSystemapksVariantsGet](docs/systemapks/README.md#androidpublishersystemapksvariantsget) - Returns a previously created system APK variant.
* [androidpublisherSystemapksVariantsList](docs/systemapks/README.md#androidpublishersystemapksvariantslist) - Returns the list of previously created system APK variants.

### [users](docs/users/README.md)

* [androidpublisherUsersCreate](docs/users/README.md#androidpublisheruserscreate) - Grant access for a user to the given developer account.
* [androidpublisherUsersDelete](docs/users/README.md#androidpublisherusersdelete) - Removes all access for the user to the given developer account.
* [androidpublisherUsersList](docs/users/README.md#androidpublisheruserslist) - Lists all users with access to a developer account.
* [androidpublisherUsersPatch](docs/users/README.md#androidpublisheruserspatch) - Updates access for the user to the developer account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
