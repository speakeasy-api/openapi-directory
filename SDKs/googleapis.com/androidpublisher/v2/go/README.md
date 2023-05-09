# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/androidpublisher/v2/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Edits.AndroidpublisherEditsApklistingsDelete(ctx, operations.AndroidpublisherEditsApklistingsDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        ApkVersionCode: 548814,
        EditID: "provident",
        Fields: sdk.String("distinctio"),
        Key: sdk.String("quibusdam"),
        Language: "unde",
        OauthToken: sdk.String("nulla"),
        PackageName: "corrupti",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illum"),
        UserIP: sdk.String("vel"),
    }, operations.AndroidpublisherEditsApklistingsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Edits](docs/edits/README.md)

* [AndroidpublisherEditsApklistingsDelete](docs/edits/README.md#androidpublishereditsapklistingsdelete) - Deletes the APK-specific localized listing for a specified APK and language code.
* [AndroidpublisherEditsApklistingsDeleteall](docs/edits/README.md#androidpublishereditsapklistingsdeleteall) - Deletes all the APK-specific localized listings for a specified APK.
* [AndroidpublisherEditsApklistingsGet](docs/edits/README.md#androidpublishereditsapklistingsget) - Fetches the APK-specific localized listing for a specified APK and language code.
* [AndroidpublisherEditsApklistingsList](docs/edits/README.md#androidpublishereditsapklistingslist) - Lists all the APK-specific localized listings for a specified APK.
* [AndroidpublisherEditsApklistingsPatch](docs/edits/README.md#androidpublishereditsapklistingspatch) - Updates or creates the APK-specific localized listing for a specified APK and language code. This method supports patch semantics.
* [AndroidpublisherEditsApklistingsUpdate](docs/edits/README.md#androidpublishereditsapklistingsupdate) - Updates or creates the APK-specific localized listing for a specified APK and language code.
* [AndroidpublisherEditsApksAddexternallyhosted](docs/edits/README.md#androidpublishereditsapksaddexternallyhosted) - Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to enterprises using Google Play for Work whose application is configured to restrict distribution to the enterprise domain.
* [AndroidpublisherEditsApksList](docs/edits/README.md#androidpublishereditsapkslist)
* [AndroidpublisherEditsApksUpload](docs/edits/README.md#androidpublishereditsapksupload)
* [AndroidpublisherEditsBundlesList](docs/edits/README.md#androidpublishereditsbundleslist)
* [AndroidpublisherEditsBundlesUpload](docs/edits/README.md#androidpublishereditsbundlesupload) - Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See: https://developers.google.com/api-client-library/java/google-api-java-client/errors for an example in java.
* [AndroidpublisherEditsCommit](docs/edits/README.md#androidpublishereditscommit) - Commits/applies the changes made in this edit back to the app.
* [AndroidpublisherEditsDelete](docs/edits/README.md#androidpublishereditsdelete) - Deletes an edit for an app. Creating a new edit will automatically delete any of your previous edits so this method need only be called if you want to preemptively abandon an edit.
* [AndroidpublisherEditsDeobfuscationfilesUpload](docs/edits/README.md#androidpublishereditsdeobfuscationfilesupload) - Uploads the deobfuscation file of the specified APK. If a deobfuscation or symbolication file already exists, it will be replaced. See https://developer.android.com/studio/build/shrink-code to learn more about deobfuscation files.
* [AndroidpublisherEditsDetailsGet](docs/edits/README.md#androidpublishereditsdetailsget) - Fetches app details for this edit. This includes the default language and developer support contact information.
* [AndroidpublisherEditsDetailsPatch](docs/edits/README.md#androidpublishereditsdetailspatch) - Updates app details for this edit. This method supports patch semantics.
* [AndroidpublisherEditsDetailsUpdate](docs/edits/README.md#androidpublishereditsdetailsupdate) - Updates app details for this edit.
* [AndroidpublisherEditsExpansionfilesGet](docs/edits/README.md#androidpublishereditsexpansionfilesget) - Fetches the Expansion File configuration for the APK specified.
* [AndroidpublisherEditsExpansionfilesPatch](docs/edits/README.md#androidpublishereditsexpansionfilespatch) - Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method. This method supports patch semantics.
* [AndroidpublisherEditsExpansionfilesUpdate](docs/edits/README.md#androidpublishereditsexpansionfilesupdate) - Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method.
* [AndroidpublisherEditsExpansionfilesUpload](docs/edits/README.md#androidpublishereditsexpansionfilesupload) - Uploads and attaches a new Expansion File to the APK specified.
* [AndroidpublisherEditsGet](docs/edits/README.md#androidpublishereditsget) - Returns information about the edit specified. Calls will fail if the edit is no long active (e.g. has been deleted, superseded or expired).
* [AndroidpublisherEditsImagesDelete](docs/edits/README.md#androidpublishereditsimagesdelete) - Deletes the image (specified by id) from the edit.
* [AndroidpublisherEditsImagesDeleteall](docs/edits/README.md#androidpublishereditsimagesdeleteall) - Deletes all images for the specified language and image type.
* [AndroidpublisherEditsImagesList](docs/edits/README.md#androidpublishereditsimageslist) - Lists all images for the specified language and image type.
* [AndroidpublisherEditsImagesUpload](docs/edits/README.md#androidpublishereditsimagesupload) - Uploads a new image and adds it to the list of images for the specified language and image type.
* [AndroidpublisherEditsInsert](docs/edits/README.md#androidpublishereditsinsert) - Creates a new edit for an app, populated with the app's current state.
* [AndroidpublisherEditsListingsDelete](docs/edits/README.md#androidpublishereditslistingsdelete) - Deletes the specified localized store listing from an edit.
* [AndroidpublisherEditsListingsDeleteall](docs/edits/README.md#androidpublishereditslistingsdeleteall) - Deletes all localized listings from an edit.
* [AndroidpublisherEditsListingsGet](docs/edits/README.md#androidpublishereditslistingsget) - Fetches information about a localized store listing.
* [AndroidpublisherEditsListingsList](docs/edits/README.md#androidpublishereditslistingslist) - Returns all of the localized store listings attached to this edit.
* [AndroidpublisherEditsListingsPatch](docs/edits/README.md#androidpublishereditslistingspatch) - Creates or updates a localized store listing. This method supports patch semantics.
* [AndroidpublisherEditsListingsUpdate](docs/edits/README.md#androidpublishereditslistingsupdate) - Creates or updates a localized store listing.
* [AndroidpublisherEditsTestersGet](docs/edits/README.md#androidpublishereditstestersget)
* [AndroidpublisherEditsTestersPatch](docs/edits/README.md#androidpublishereditstesterspatch)
* [AndroidpublisherEditsTestersUpdate](docs/edits/README.md#androidpublishereditstestersupdate)
* [AndroidpublisherEditsTracksGet](docs/edits/README.md#androidpublishereditstracksget) - Fetches the track configuration for the specified track type. Includes the APK version codes that are in this track.
* [AndroidpublisherEditsTracksList](docs/edits/README.md#androidpublishereditstrackslist) - Lists all the track configurations for this edit.
* [AndroidpublisherEditsTracksPatch](docs/edits/README.md#androidpublishereditstrackspatch) - Updates the track configuration for the specified track type. This method supports patch semantics.
* [AndroidpublisherEditsTracksUpdate](docs/edits/README.md#androidpublishereditstracksupdate) - Updates the track configuration for the specified track type.
* [AndroidpublisherEditsValidate](docs/edits/README.md#androidpublishereditsvalidate) - Checks that the edit can be successfully committed. The edit's changes are not applied to the live app.

### [Inappproducts](docs/inappproducts/README.md)

* [AndroidpublisherInappproductsDelete](docs/inappproducts/README.md#androidpublisherinappproductsdelete) - Delete an in-app product for an app.
* [AndroidpublisherInappproductsGet](docs/inappproducts/README.md#androidpublisherinappproductsget) - Returns information about the in-app product specified.
* [AndroidpublisherInappproductsInsert](docs/inappproducts/README.md#androidpublisherinappproductsinsert) - Creates a new in-app product for an app.
* [AndroidpublisherInappproductsList](docs/inappproducts/README.md#androidpublisherinappproductslist) - List all the in-app products for an Android app, both subscriptions and managed in-app products..
* [AndroidpublisherInappproductsPatch](docs/inappproducts/README.md#androidpublisherinappproductspatch) - Updates the details of an in-app product. This method supports patch semantics.
* [AndroidpublisherInappproductsUpdate](docs/inappproducts/README.md#androidpublisherinappproductsupdate) - Updates the details of an in-app product.

### [Orders](docs/orders/README.md)

* [AndroidpublisherOrdersRefund](docs/orders/README.md#androidpublisherordersrefund) - Refund a user's subscription or in-app purchase order.

### [Purchases](docs/purchases/README.md)

* [AndroidpublisherPurchasesProductsGet](docs/purchases/README.md#androidpublisherpurchasesproductsget) - Checks the purchase and consumption status of an inapp item.
* [AndroidpublisherPurchasesSubscriptionsCancel](docs/purchases/README.md#androidpublisherpurchasessubscriptionscancel) - Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
* [AndroidpublisherPurchasesSubscriptionsDefer](docs/purchases/README.md#androidpublisherpurchasessubscriptionsdefer) - Defers a user's subscription purchase until a specified future expiration time.
* [AndroidpublisherPurchasesSubscriptionsGet](docs/purchases/README.md#androidpublisherpurchasessubscriptionsget) - Checks whether a user's subscription purchase is valid and returns its expiry time.
* [AndroidpublisherPurchasesSubscriptionsRefund](docs/purchases/README.md#androidpublisherpurchasessubscriptionsrefund) - Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.
* [AndroidpublisherPurchasesSubscriptionsRevoke](docs/purchases/README.md#androidpublisherpurchasessubscriptionsrevoke) - Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.
* [AndroidpublisherPurchasesVoidedpurchasesList](docs/purchases/README.md#androidpublisherpurchasesvoidedpurchaseslist) - Lists the purchases that were canceled, refunded or charged-back.

### [Reviews](docs/reviews/README.md)

* [AndroidpublisherReviewsGet](docs/reviews/README.md#androidpublisherreviewsget) - Returns a single review.
* [AndroidpublisherReviewsList](docs/reviews/README.md#androidpublisherreviewslist) - Returns a list of reviews. Only reviews from last week will be returned.
* [AndroidpublisherReviewsReply](docs/reviews/README.md#androidpublisherreviewsreply) - Reply to a single review, or update an existing reply.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
