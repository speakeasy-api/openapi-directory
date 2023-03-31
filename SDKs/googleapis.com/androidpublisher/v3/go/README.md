# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/androidpublisher/v3/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.AndroidpublisherApplicationsDeviceTierConfigsCreateRequest{
        DollarXgafv: "2",
        DeviceTierConfigInput: &shared.DeviceTierConfigInput{
            DeviceGroups: []shared.DeviceGroup{
                shared.DeviceGroup{
                    DeviceSelectors: []shared.DeviceSelector{
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "quibusdam",
                                MinBytes: "unde",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "corrupti",
                                    BuildDevice: "illum",
                                },
                                shared.DeviceID{
                                    BuildBrand: "vel",
                                    BuildDevice: "error",
                                },
                                shared.DeviceID{
                                    BuildBrand: "deserunt",
                                    BuildDevice: "suscipit",
                                },
                                shared.DeviceID{
                                    BuildBrand: "iure",
                                    BuildDevice: "magnam",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "ipsa",
                                },
                                shared.SystemFeature{
                                    Name: "delectus",
                                },
                                shared.SystemFeature{
                                    Name: "tempora",
                                },
                                shared.SystemFeature{
                                    Name: "suscipit",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "minus",
                                    BuildDevice: "placeat",
                                },
                                shared.DeviceID{
                                    BuildBrand: "voluptatum",
                                    BuildDevice: "iusto",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "nisi",
                                },
                                shared.SystemFeature{
                                    Name: "recusandae",
                                },
                                shared.SystemFeature{
                                    Name: "temporibus",
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "ab",
                                MinBytes: "quis",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "deserunt",
                                    BuildDevice: "perferendis",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "repellendus",
                                },
                                shared.SystemFeature{
                                    Name: "sapiente",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "odit",
                                    BuildDevice: "at",
                                },
                                shared.DeviceID{
                                    BuildBrand: "at",
                                    BuildDevice: "maiores",
                                },
                                shared.DeviceID{
                                    BuildBrand: "molestiae",
                                    BuildDevice: "quod",
                                },
                                shared.DeviceID{
                                    BuildBrand: "quod",
                                    BuildDevice: "esse",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "porro",
                                },
                                shared.SystemFeature{
                                    Name: "dolorum",
                                },
                                shared.SystemFeature{
                                    Name: "dicta",
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "nam",
                                MinBytes: "officia",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "fugit",
                                    BuildDevice: "deleniti",
                                },
                                shared.DeviceID{
                                    BuildBrand: "hic",
                                    BuildDevice: "optio",
                                },
                                shared.DeviceID{
                                    BuildBrand: "totam",
                                    BuildDevice: "beatae",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "molestiae",
                                },
                                shared.SystemFeature{
                                    Name: "modi",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "impedit",
                                    BuildDevice: "cum",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "ipsum",
                                },
                                shared.SystemFeature{
                                    Name: "excepturi",
                                },
                            },
                        },
                    },
                    Name: "aspernatur",
                },
                shared.DeviceGroup{
                    DeviceSelectors: []shared.DeviceSelector{
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "ad",
                                MinBytes: "natus",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "iste",
                                    BuildDevice: "dolor",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "laboriosam",
                                },
                                shared.SystemFeature{
                                    Name: "hic",
                                },
                                shared.SystemFeature{
                                    Name: "saepe",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "in",
                                    BuildDevice: "corporis",
                                },
                                shared.DeviceID{
                                    BuildBrand: "iste",
                                    BuildDevice: "iure",
                                },
                                shared.DeviceID{
                                    BuildBrand: "saepe",
                                    BuildDevice: "quidem",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "ipsa",
                                },
                            },
                        },
                    },
                    Name: "reiciendis",
                },
                shared.DeviceGroup{
                    DeviceSelectors: []shared.DeviceSelector{
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "mollitia",
                                MinBytes: "laborum",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "dolorem",
                                    BuildDevice: "corporis",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "nobis",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "omnis",
                                    BuildDevice: "nemo",
                                },
                                shared.DeviceID{
                                    BuildBrand: "minima",
                                    BuildDevice: "excepturi",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "iure",
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "culpa",
                                MinBytes: "doloribus",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "architecto",
                                    BuildDevice: "mollitia",
                                },
                                shared.DeviceID{
                                    BuildBrand: "dolorem",
                                    BuildDevice: "culpa",
                                },
                                shared.DeviceID{
                                    BuildBrand: "consequuntur",
                                    BuildDevice: "repellat",
                                },
                                shared.DeviceID{
                                    BuildBrand: "mollitia",
                                    BuildDevice: "occaecati",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "commodi",
                                },
                                shared.SystemFeature{
                                    Name: "quam",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "velit",
                                    BuildDevice: "error",
                                },
                                shared.DeviceID{
                                    BuildBrand: "quia",
                                    BuildDevice: "quis",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "laborum",
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "animi",
                                MinBytes: "enim",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "quo",
                                    BuildDevice: "sequi",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "ipsam",
                                },
                                shared.SystemFeature{
                                    Name: "id",
                                },
                                shared.SystemFeature{
                                    Name: "possimus",
                                },
                                shared.SystemFeature{
                                    Name: "aut",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "error",
                                    BuildDevice: "temporibus",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "quasi",
                                },
                                shared.SystemFeature{
                                    Name: "reiciendis",
                                },
                                shared.SystemFeature{
                                    Name: "voluptatibus",
                                },
                            },
                        },
                    },
                    Name: "vero",
                },
            },
            DeviceTierSet: &shared.DeviceTierSet{
                DeviceTiers: []shared.DeviceTier{
                    shared.DeviceTier{
                        DeviceGroupNames: []string{
                            "voluptatibus",
                            "ipsa",
                            "omnis",
                        },
                        Level: 451159,
                    },
                    shared.DeviceTier{
                        DeviceGroupNames: []string{
                            "perferendis",
                            "doloremque",
                            "reprehenderit",
                        },
                        Level: 282807,
                    },
                },
            },
            UserCountrySets: []shared.UserCountrySet{
                shared.UserCountrySet{
                    CountryCodes: []string{
                        "corporis",
                    },
                    Name: "dolore",
                },
                shared.UserCountrySet{
                    CountryCodes: []string{
                        "dicta",
                        "harum",
                    },
                    Name: "enim",
                },
                shared.UserCountrySet{
                    CountryCodes: []string{
                        "commodi",
                        "repudiandae",
                        "quae",
                        "ipsum",
                    },
                    Name: "quidem",
                },
                shared.UserCountrySet{
                    CountryCodes: []string{
                        "excepturi",
                        "pariatur",
                        "modi",
                    },
                    Name: "praesentium",
                },
            },
        },
        AccessToken: "rem",
        AllowUnknownDevices: false,
        Alt: "proto",
        Callback: "quasi",
        Fields: "repudiandae",
        Key: "sint",
        OauthToken: "veritatis",
        PackageName: "itaque",
        PrettyPrint: false,
        QuotaUser: "incidunt",
        UploadType: "enim",
        UploadProtocol: "consequatur",
    }

    ctx := context.Background()
    res, err := s.Applications.AndroidpublisherApplicationsDeviceTierConfigsCreate(ctx, req, operations.AndroidpublisherApplicationsDeviceTierConfigsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceTierConfig != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Applications

* `AndroidpublisherApplicationsDeviceTierConfigsCreate` - Creates a new device tier config for an app.
* `AndroidpublisherApplicationsDeviceTierConfigsGet` - Returns a particular device tier config.
* `AndroidpublisherApplicationsDeviceTierConfigsList` - Returns created device tier configs, ordered by descending creation time.

### Edits

* `AndroidpublisherEditsApksAddexternallyhosted` - Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.
* `AndroidpublisherEditsApksList` - Lists all current APKs of the app and edit.
* `AndroidpublisherEditsApksUpload` - Uploads an APK and adds to the current edit.
* `AndroidpublisherEditsBundlesList` - Lists all current Android App Bundles of the app and edit.
* `AndroidpublisherEditsBundlesUpload` - Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
* `AndroidpublisherEditsCommit` - Commits an app edit.
* `AndroidpublisherEditsCountryavailabilityGet` - Gets country availability.
* `AndroidpublisherEditsDelete` - Deletes an app edit.
* `AndroidpublisherEditsDeobfuscationfilesUpload` - Uploads a new deobfuscation file and attaches to the specified APK.
* `AndroidpublisherEditsDetailsGet` - Gets details of an app.
* `AndroidpublisherEditsDetailsPatch` - Patches details of an app.
* `AndroidpublisherEditsDetailsUpdate` - Updates details of an app.
* `AndroidpublisherEditsExpansionfilesGet` - Fetches the expansion file configuration for the specified APK.
* `AndroidpublisherEditsExpansionfilesPatch` - Patches the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
* `AndroidpublisherEditsExpansionfilesUpdate` - Updates the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
* `AndroidpublisherEditsExpansionfilesUpload` - Uploads a new expansion file and attaches to the specified APK.
* `AndroidpublisherEditsGet` - Gets an app edit.
* `AndroidpublisherEditsImagesDelete` - Deletes the image (specified by id) from the edit.
* `AndroidpublisherEditsImagesDeleteall` - Deletes all images for the specified language and image type. Returns an empty response if no images are found.
* `AndroidpublisherEditsImagesList` - Lists all images. The response may be empty.
* `AndroidpublisherEditsImagesUpload` - Uploads an image of the specified language and image type, and adds to the edit.
* `AndroidpublisherEditsInsert` - Creates a new edit for an app.
* `AndroidpublisherEditsListingsDelete` - Deletes a localized store listing.
* `AndroidpublisherEditsListingsDeleteall` - Deletes all store listings.
* `AndroidpublisherEditsListingsGet` - Gets a localized store listing.
* `AndroidpublisherEditsListingsList` - Lists all localized store listings.
* `AndroidpublisherEditsListingsPatch` - Patches a localized store listing.
* `AndroidpublisherEditsListingsUpdate` - Creates or updates a localized store listing.
* `AndroidpublisherEditsTestersGet` - Gets testers. Note: Testers resource does not support email lists.
* `AndroidpublisherEditsTestersPatch` - Patches testers. Note: Testers resource does not support email lists.
* `AndroidpublisherEditsTestersUpdate` - Updates testers. Note: Testers resource does not support email lists.
* `AndroidpublisherEditsTracksGet` - Gets a track.
* `AndroidpublisherEditsTracksList` - Lists all tracks.
* `AndroidpublisherEditsTracksPatch` - Patches a track.
* `AndroidpublisherEditsTracksUpdate` - Updates a track.
* `AndroidpublisherEditsValidate` - Validates an app edit.

### Generatedapks

* `AndroidpublisherGeneratedapksDownload` - Downloads a single signed APK generated from an app bundle.
* `AndroidpublisherGeneratedapksList` - Returns download metadata for all APKs that were generated from a given app bundle.

### Grants

* `AndroidpublisherGrantsCreate` - Grant access for a user to the given package.

### Inappproducts

* `AndroidpublisherInappproductsDelete` - Deletes an in-app product (i.e. a managed product or a subscriptions).
* `AndroidpublisherInappproductsGet` - Gets an in-app product, which can be a managed product or a subscription.
* `AndroidpublisherInappproductsInsert` - Creates an in-app product (i.e. a managed product or a subscriptions).
* `AndroidpublisherInappproductsList` - Lists all in-app products - both managed products and subscriptions. If an app has a large number of in-app products, the response may be paginated. In this case the response field `tokenPagination.nextPageToken` will be set and the caller should provide its value as a `token` request parameter to retrieve the next page.
* `AndroidpublisherInappproductsPatch` - Patches an in-app product (i.e. a managed product or a subscriptions).
* `AndroidpublisherInappproductsUpdate` - Updates an in-app product (i.e. a managed product or a subscriptions).

### Internalappsharingartifacts

* `AndroidpublisherInternalappsharingartifactsUploadapk` - Uploads an APK to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
* `AndroidpublisherInternalappsharingartifactsUploadbundle` - Uploads an app bundle to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.

### Monetization

* `AndroidpublisherMonetizationConvertRegionPrices` - Calculates the region prices, using today's exchange rate and country-specific pricing patterns, based on the price in the request for a set of regions.
* `AndroidpublisherMonetizationSubscriptionsArchive` - Archives a subscription. Can only be done if at least one base plan was active in the past, and no base plan is available for new or existing subscribers currently. This action is irreversible, and the subscription ID will remain reserved.
* `AndroidpublisherMonetizationSubscriptionsBasePlansActivate` - Activates a base plan. Once activated, base plans will be available to new subscribers.
* `AndroidpublisherMonetizationSubscriptionsBasePlansDeactivate` - Deactivates a base plan. Once deactivated, the base plan will become unavailable to new subscribers, but existing subscribers will maintain their subscription
* `AndroidpublisherMonetizationSubscriptionsBasePlansDelete` - Deletes a base plan. Can only be done for draft base plans. This action is irreversible.
* `AndroidpublisherMonetizationSubscriptionsBasePlansMigratePrices` - Migrates subscribers who are receiving an historical subscription price to the currently-offered price for the specified region. Requests will cause price change notifications to be sent to users who are currently receiving an historical price older than the supplied timestamp. Subscribers who do not agree to the new price will have their subscription ended at the next renewal.
* `AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivate` - Activates a subscription offer. Once activated, subscription offers will be available to new subscribers.
* `AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreate` - Creates a new subscription offer. Only auto-renewing base plans can have subscription offers. The offer state will be DRAFT until it is activated.
* `AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivate` - Deactivates a subscription offer. Once deactivated, existing subscribers will maintain their subscription, but the offer will become unavailable to new subscribers.
* `AndroidpublisherMonetizationSubscriptionsBasePlansOffersDelete` - Deletes a subscription offer. Can only be done for draft offers. This action is irreversible.
* `AndroidpublisherMonetizationSubscriptionsBasePlansOffersGet` - Reads a single offer
* `AndroidpublisherMonetizationSubscriptionsBasePlansOffersList` - Lists all offers under a given subscription.
* `AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatch` - Updates an existing subscription offer.
* `AndroidpublisherMonetizationSubscriptionsCreate` - Creates a new subscription. Newly added base plans will remain in draft state until activated.
* `AndroidpublisherMonetizationSubscriptionsDelete` - Deletes a subscription. A subscription can only be deleted if it has never had a base plan published.
* `AndroidpublisherMonetizationSubscriptionsGet` - Reads a single subscription.
* `AndroidpublisherMonetizationSubscriptionsList` - Lists all subscriptions under a given app.
* `AndroidpublisherMonetizationSubscriptionsPatch` - Updates an existing subscription.

### Orders

* `AndroidpublisherOrdersRefund` - Refunds a user's subscription or in-app purchase order. Orders older than 1 year cannot be refunded.

### Purchases

* `AndroidpublisherPurchasesProductsAcknowledge` - Acknowledges a purchase of an inapp item.
* `AndroidpublisherPurchasesProductsConsume` - Consumes a purchase for an inapp item.
* `AndroidpublisherPurchasesProductsGet` - Checks the purchase and consumption status of an inapp item.
* `AndroidpublisherPurchasesSubscriptionsAcknowledge` - Acknowledges a subscription purchase.
* `AndroidpublisherPurchasesSubscriptionsCancel` - Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
* `AndroidpublisherPurchasesSubscriptionsDefer` - Defers a user's subscription purchase until a specified future expiration time.
* `AndroidpublisherPurchasesSubscriptionsGet` - Checks whether a user's subscription purchase is valid and returns its expiry time.
* `AndroidpublisherPurchasesSubscriptionsRefund` - Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.
* `AndroidpublisherPurchasesSubscriptionsRevoke` - Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.
* `AndroidpublisherPurchasesSubscriptionsv2Get` - Get metadata about a subscription
* `AndroidpublisherPurchasesVoidedpurchasesList` - Lists the purchases that were canceled, refunded or charged-back.

### Reviews

* `AndroidpublisherReviewsGet` - Gets a single review.
* `AndroidpublisherReviewsList` - Lists all reviews.
* `AndroidpublisherReviewsReply` - Replies to a single review, or updates an existing reply.

### Systemapks

* `AndroidpublisherSystemapksVariantsCreate` - Creates an APK which is suitable for inclusion in a system image from an already uploaded Android App Bundle.
* `AndroidpublisherSystemapksVariantsDownload` - Downloads a previously created system APK which is suitable for inclusion in a system image.
* `AndroidpublisherSystemapksVariantsGet` - Returns a previously created system APK variant.
* `AndroidpublisherSystemapksVariantsList` - Returns the list of previously created system APK variants.

### Users

* `AndroidpublisherUsersCreate` - Grant access for a user to the given developer account.
* `AndroidpublisherUsersDelete` - Removes all access for the user to the given developer account.
* `AndroidpublisherUsersList` - Lists all users with access to a developer account.
* `AndroidpublisherUsersPatch` - Updates access for the user to the developer account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
