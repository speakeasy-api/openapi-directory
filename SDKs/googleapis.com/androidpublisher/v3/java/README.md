# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AndroidpublisherApplicationsDeviceTierConfigsCreateSecurity;
import org.openapis.openapi.models.operations.AndroidpublisherApplicationsDeviceTierConfigsCreatePathParams;
import org.openapis.openapi.models.operations.AndroidpublisherApplicationsDeviceTierConfigsCreateQueryParams;
import org.openapis.openapi.models.operations.AndroidpublisherApplicationsDeviceTierConfigsCreateRequest;
import org.openapis.openapi.models.operations.AndroidpublisherApplicationsDeviceTierConfigsCreateResponse;
import org.openapis.openapi.models.shared.DeviceTierConfigInput;
import org.openapis.openapi.models.shared.UserCountrySet;
import org.openapis.openapi.models.shared.DeviceTierSet;
import org.openapis.openapi.models.shared.DeviceTier;
import org.openapis.openapi.models.shared.DeviceGroup;
import org.openapis.openapi.models.shared.DeviceSelector;
import org.openapis.openapi.models.shared.SystemFeature;
import org.openapis.openapi.models.shared.DeviceId;
import org.openapis.openapi.models.shared.DeviceRam;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherApplicationsDeviceTierConfigsCreateRequest req = new AndroidpublisherApplicationsDeviceTierConfigsCreateRequest() {{
                security = new AndroidpublisherApplicationsDeviceTierConfigsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new AndroidpublisherApplicationsDeviceTierConfigsCreatePathParams() {{
                    packageName = "corrupti";
                }};
                queryParams = new AndroidpublisherApplicationsDeviceTierConfigsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    allowUnknownDevices = false;
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new DeviceTierConfigInput() {{
                    deviceGroups = new org.openapis.openapi.models.shared.DeviceGroup[]{{
                        add(new DeviceGroup() {{
                            deviceSelectors = new org.openapis.openapi.models.shared.DeviceSelector[]{{
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "magnam";
                                        minBytes = "debitis";
                                    }};
                                    excludedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "delectus";
                                            buildDevice = "tempora";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "molestiae";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "minus";
                                        }}),
                                    }};
                                    includedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "voluptatum";
                                            buildDevice = "iusto";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "excepturi";
                                            buildDevice = "nisi";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "recusandae";
                                            buildDevice = "temporibus";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "ab";
                                            buildDevice = "quis";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "deserunt";
                                        }}),
                                    }};
                                }}),
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "perferendis";
                                        minBytes = "ipsam";
                                    }};
                                    excludedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "sapiente";
                                            buildDevice = "quo";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "odit";
                                            buildDevice = "at";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "at";
                                            buildDevice = "maiores";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "molestiae";
                                            buildDevice = "quod";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "esse";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "totam";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "porro";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "dolorum";
                                        }}),
                                    }};
                                    includedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "nam";
                                            buildDevice = "officia";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "fugit";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "deleniti";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "hic";
                                        }}),
                                    }};
                                }}),
                            }};
                            name = "optio";
                        }}),
                        add(new DeviceGroup() {{
                            deviceSelectors = new org.openapis.openapi.models.shared.DeviceSelector[]{{
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "beatae";
                                        minBytes = "commodi";
                                    }};
                                    excludedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "modi";
                                            buildDevice = "qui";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "impedit";
                                            buildDevice = "cum";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "ipsum";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "excepturi";
                                        }}),
                                    }};
                                    includedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "perferendis";
                                            buildDevice = "ad";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "sed";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "iste";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "dolor";
                                        }}),
                                    }};
                                }}),
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "natus";
                                        minBytes = "laboriosam";
                                    }};
                                    excludedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "saepe";
                                            buildDevice = "fuga";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "in";
                                            buildDevice = "corporis";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "iste";
                                            buildDevice = "iure";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "saepe";
                                            buildDevice = "quidem";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "ipsa";
                                        }}),
                                    }};
                                    includedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "est";
                                            buildDevice = "mollitia";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "laborum";
                                            buildDevice = "dolores";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "dolorem";
                                            buildDevice = "corporis";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "explicabo";
                                            buildDevice = "nobis";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "omnis";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "nemo";
                                        }}),
                                    }};
                                }}),
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "minima";
                                        minBytes = "excepturi";
                                    }};
                                    excludedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "iure";
                                            buildDevice = "culpa";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "sapiente";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "architecto";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "mollitia";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "dolorem";
                                        }}),
                                    }};
                                    includedDeviceIds = new org.openapis.openapi.models.shared.DeviceId[]{{
                                        add(new DeviceId() {{
                                            buildBrand = "consequuntur";
                                            buildDevice = "repellat";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "mollitia";
                                            buildDevice = "occaecati";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "numquam";
                                            buildDevice = "commodi";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new org.openapis.openapi.models.shared.SystemFeature[]{{
                                        add(new SystemFeature() {{
                                            name = "molestiae";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "velit";
                                        }}),
                                    }};
                                }}),
                            }};
                            name = "error";
                        }}),
                    }};
                    deviceTierSet = new DeviceTierSet() {{
                        deviceTiers = new org.openapis.openapi.models.shared.DeviceTier[]{{
                            add(new DeviceTier() {{
                                deviceGroupNames = new String[]{{
                                    add("vitae"),
                                    add("laborum"),
                                }};
                                level = 656330;
                            }}),
                        }};
                    }};
                    userCountrySets = new org.openapis.openapi.models.shared.UserCountrySet[]{{
                        add(new UserCountrySet() {{
                            countryCodes = new String[]{{
                                add("quo"),
                            }};
                            name = "sequi";
                        }}),
                        add(new UserCountrySet() {{
                            countryCodes = new String[]{{
                                add("ipsam"),
                                add("id"),
                                add("possimus"),
                                add("aut"),
                            }};
                            name = "quasi";
                        }}),
                    }};
                }};
            }};            

            AndroidpublisherApplicationsDeviceTierConfigsCreateResponse res = sdk.applications.androidpublisherApplicationsDeviceTierConfigsCreate(req);

            if (res.deviceTierConfig.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### applications

* `androidpublisherApplicationsDeviceTierConfigsCreate` - Creates a new device tier config for an app.
* `androidpublisherApplicationsDeviceTierConfigsGet` - Returns a particular device tier config.
* `androidpublisherApplicationsDeviceTierConfigsList` - Returns created device tier configs, ordered by descending creation time.

### edits

* `androidpublisherEditsApksAddexternallyhosted` - Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.
* `androidpublisherEditsApksList` - Lists all current APKs of the app and edit.
* `androidpublisherEditsApksUpload` - Uploads an APK and adds to the current edit.
* `androidpublisherEditsBundlesList` - Lists all current Android App Bundles of the app and edit.
* `androidpublisherEditsBundlesUpload` - Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
* `androidpublisherEditsCommit` - Commits an app edit.
* `androidpublisherEditsCountryavailabilityGet` - Gets country availability.
* `androidpublisherEditsDelete` - Deletes an app edit.
* `androidpublisherEditsDeobfuscationfilesUpload` - Uploads a new deobfuscation file and attaches to the specified APK.
* `androidpublisherEditsDetailsGet` - Gets details of an app.
* `androidpublisherEditsDetailsPatch` - Patches details of an app.
* `androidpublisherEditsDetailsUpdate` - Updates details of an app.
* `androidpublisherEditsExpansionfilesGet` - Fetches the expansion file configuration for the specified APK.
* `androidpublisherEditsExpansionfilesPatch` - Patches the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
* `androidpublisherEditsExpansionfilesUpdate` - Updates the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
* `androidpublisherEditsExpansionfilesUpload` - Uploads a new expansion file and attaches to the specified APK.
* `androidpublisherEditsGet` - Gets an app edit.
* `androidpublisherEditsImagesDelete` - Deletes the image (specified by id) from the edit.
* `androidpublisherEditsImagesDeleteall` - Deletes all images for the specified language and image type. Returns an empty response if no images are found.
* `androidpublisherEditsImagesList` - Lists all images. The response may be empty.
* `androidpublisherEditsImagesUpload` - Uploads an image of the specified language and image type, and adds to the edit.
* `androidpublisherEditsInsert` - Creates a new edit for an app.
* `androidpublisherEditsListingsDelete` - Deletes a localized store listing.
* `androidpublisherEditsListingsDeleteall` - Deletes all store listings.
* `androidpublisherEditsListingsGet` - Gets a localized store listing.
* `androidpublisherEditsListingsList` - Lists all localized store listings.
* `androidpublisherEditsListingsPatch` - Patches a localized store listing.
* `androidpublisherEditsListingsUpdate` - Creates or updates a localized store listing.
* `androidpublisherEditsTestersGet` - Gets testers. Note: Testers resource does not support email lists.
* `androidpublisherEditsTestersPatch` - Patches testers. Note: Testers resource does not support email lists.
* `androidpublisherEditsTestersUpdate` - Updates testers. Note: Testers resource does not support email lists.
* `androidpublisherEditsTracksGet` - Gets a track.
* `androidpublisherEditsTracksList` - Lists all tracks.
* `androidpublisherEditsTracksPatch` - Patches a track.
* `androidpublisherEditsTracksUpdate` - Updates a track.
* `androidpublisherEditsValidate` - Validates an app edit.

### generatedapks

* `androidpublisherGeneratedapksDownload` - Downloads a single signed APK generated from an app bundle.
* `androidpublisherGeneratedapksList` - Returns download metadata for all APKs that were generated from a given app bundle.

### grants

* `androidpublisherGrantsCreate` - Grant access for a user to the given package.

### inappproducts

* `androidpublisherInappproductsDelete` - Deletes an in-app product (i.e. a managed product or a subscriptions).
* `androidpublisherInappproductsGet` - Gets an in-app product, which can be a managed product or a subscription.
* `androidpublisherInappproductsInsert` - Creates an in-app product (i.e. a managed product or a subscriptions).
* `androidpublisherInappproductsList` - Lists all in-app products - both managed products and subscriptions. If an app has a large number of in-app products, the response may be paginated. In this case the response field `tokenPagination.nextPageToken` will be set and the caller should provide its value as a `token` request parameter to retrieve the next page.
* `androidpublisherInappproductsPatch` - Patches an in-app product (i.e. a managed product or a subscriptions).
* `androidpublisherInappproductsUpdate` - Updates an in-app product (i.e. a managed product or a subscriptions).

### internalappsharingartifacts

* `androidpublisherInternalappsharingartifactsUploadapk` - Uploads an APK to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
* `androidpublisherInternalappsharingartifactsUploadbundle` - Uploads an app bundle to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.

### monetization

* `androidpublisherMonetizationConvertRegionPrices` - Calculates the region prices, using today's exchange rate and country-specific pricing patterns, based on the price in the request for a set of regions.
* `androidpublisherMonetizationSubscriptionsArchive` - Archives a subscription. Can only be done if at least one base plan was active in the past, and no base plan is available for new or existing subscribers currently. This action is irreversible, and the subscription ID will remain reserved.
* `androidpublisherMonetizationSubscriptionsBasePlansActivate` - Activates a base plan. Once activated, base plans will be available to new subscribers.
* `androidpublisherMonetizationSubscriptionsBasePlansDeactivate` - Deactivates a base plan. Once deactivated, the base plan will become unavailable to new subscribers, but existing subscribers will maintain their subscription
* `androidpublisherMonetizationSubscriptionsBasePlansDelete` - Deletes a base plan. Can only be done for draft base plans. This action is irreversible.
* `androidpublisherMonetizationSubscriptionsBasePlansMigratePrices` - Migrates subscribers who are receiving an historical subscription price to the currently-offered price for the specified region. Requests will cause price change notifications to be sent to users who are currently receiving an historical price older than the supplied timestamp. Subscribers who do not agree to the new price will have their subscription ended at the next renewal.
* `androidpublisherMonetizationSubscriptionsBasePlansOffersActivate` - Activates a subscription offer. Once activated, subscription offers will be available to new subscribers.
* `androidpublisherMonetizationSubscriptionsBasePlansOffersCreate` - Creates a new subscription offer. Only auto-renewing base plans can have subscription offers. The offer state will be DRAFT until it is activated.
* `androidpublisherMonetizationSubscriptionsBasePlansOffersDeactivate` - Deactivates a subscription offer. Once deactivated, existing subscribers will maintain their subscription, but the offer will become unavailable to new subscribers.
* `androidpublisherMonetizationSubscriptionsBasePlansOffersDelete` - Deletes a subscription offer. Can only be done for draft offers. This action is irreversible.
* `androidpublisherMonetizationSubscriptionsBasePlansOffersGet` - Reads a single offer
* `androidpublisherMonetizationSubscriptionsBasePlansOffersList` - Lists all offers under a given subscription.
* `androidpublisherMonetizationSubscriptionsBasePlansOffersPatch` - Updates an existing subscription offer.
* `androidpublisherMonetizationSubscriptionsCreate` - Creates a new subscription. Newly added base plans will remain in draft state until activated.
* `androidpublisherMonetizationSubscriptionsDelete` - Deletes a subscription. A subscription can only be deleted if it has never had a base plan published.
* `androidpublisherMonetizationSubscriptionsGet` - Reads a single subscription.
* `androidpublisherMonetizationSubscriptionsList` - Lists all subscriptions under a given app.
* `androidpublisherMonetizationSubscriptionsPatch` - Updates an existing subscription.

### orders

* `androidpublisherOrdersRefund` - Refunds a user's subscription or in-app purchase order. Orders older than 1 year cannot be refunded.

### purchases

* `androidpublisherPurchasesProductsAcknowledge` - Acknowledges a purchase of an inapp item.
* `androidpublisherPurchasesProductsConsume` - Consumes a purchase for an inapp item.
* `androidpublisherPurchasesProductsGet` - Checks the purchase and consumption status of an inapp item.
* `androidpublisherPurchasesSubscriptionsAcknowledge` - Acknowledges a subscription purchase.
* `androidpublisherPurchasesSubscriptionsCancel` - Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
* `androidpublisherPurchasesSubscriptionsDefer` - Defers a user's subscription purchase until a specified future expiration time.
* `androidpublisherPurchasesSubscriptionsGet` - Checks whether a user's subscription purchase is valid and returns its expiry time.
* `androidpublisherPurchasesSubscriptionsRefund` - Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.
* `androidpublisherPurchasesSubscriptionsRevoke` - Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.
* `androidpublisherPurchasesSubscriptionsv2Get` - Get metadata about a subscription
* `androidpublisherPurchasesVoidedpurchasesList` - Lists the purchases that were canceled, refunded or charged-back.

### reviews

* `androidpublisherReviewsGet` - Gets a single review.
* `androidpublisherReviewsList` - Lists all reviews.
* `androidpublisherReviewsReply` - Replies to a single review, or updates an existing reply.

### systemapks

* `androidpublisherSystemapksVariantsCreate` - Creates an APK which is suitable for inclusion in a system image from an already uploaded Android App Bundle.
* `androidpublisherSystemapksVariantsDownload` - Downloads a previously created system APK which is suitable for inclusion in a system image.
* `androidpublisherSystemapksVariantsGet` - Returns a previously created system APK variant.
* `androidpublisherSystemapksVariantsList` - Returns the list of previously created system APK variants.

### users

* `androidpublisherUsersCreate` - Grant access for a user to the given developer account.
* `androidpublisherUsersDelete` - Removes all access for the user to the given developer account.
* `androidpublisherUsersList` - Lists all users with access to a developer account.
* `androidpublisherUsersPatch` - Updates access for the user to the developer account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
