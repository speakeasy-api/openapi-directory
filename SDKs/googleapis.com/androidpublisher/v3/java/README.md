# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    packageName = "veritatis";
                }};
                queryParams = new AndroidpublisherApplicationsDeviceTierConfigsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "eum";
                    allowUnknownDevices = false;
                    alt = "proto";
                    callback = "deleniti";
                    fields = "libero";
                    key = "saepe";
                    oauthToken = "et";
                    prettyPrint = false;
                    quotaUser = "a";
                    uploadType = "illum";
                    uploadProtocol = "numquam";
                }};
                request = new DeviceTierConfigInput() {{
                    deviceGroups = new openapisdk.models.shared.DeviceGroup[]() {{
                        add(new DeviceGroup() {{
                            deviceSelectors = new openapisdk.models.shared.DeviceSelector[]() {{
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "voluptatibus";
                                        minBytes = "sint";
                                    }};
                                    excludedDeviceIds = new openapisdk.models.shared.DeviceId[]() {{
                                        add(new DeviceId() {{
                                            buildBrand = "repudiandae";
                                            buildDevice = "quo";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "omnis";
                                            buildDevice = "adipisci";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new openapisdk.models.shared.SystemFeature[]() {{
                                        add(new SystemFeature() {{
                                            name = "qui";
                                        }}),
                                    }};
                                    includedDeviceIds = new openapisdk.models.shared.DeviceId[]() {{
                                        add(new DeviceId() {{
                                            buildBrand = "in";
                                            buildDevice = "et";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "est";
                                            buildDevice = "eos";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "quas";
                                            buildDevice = "commodi";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new openapisdk.models.shared.SystemFeature[]() {{
                                        add(new SystemFeature() {{
                                            name = "ex";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "aut";
                                        }}),
                                    }};
                                }}),
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "deleniti";
                                        minBytes = "quam";
                                    }};
                                    excludedDeviceIds = new openapisdk.models.shared.DeviceId[]() {{
                                        add(new DeviceId() {{
                                            buildBrand = "est";
                                            buildDevice = "aperiam";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "molestiae";
                                            buildDevice = "molestias";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "magnam";
                                            buildDevice = "voluptatem";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new openapisdk.models.shared.SystemFeature[]() {{
                                        add(new SystemFeature() {{
                                            name = "et";
                                        }}),
                                    }};
                                    includedDeviceIds = new openapisdk.models.shared.DeviceId[]() {{
                                        add(new DeviceId() {{
                                            buildBrand = "error";
                                            buildDevice = "praesentium";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "et";
                                            buildDevice = "ratione";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "est";
                                            buildDevice = "in";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new openapisdk.models.shared.SystemFeature[]() {{
                                        add(new SystemFeature() {{
                                            name = "dolores";
                                        }}),
                                    }};
                                }}),
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "perferendis";
                                        minBytes = "laboriosam";
                                    }};
                                    excludedDeviceIds = new openapisdk.models.shared.DeviceId[]() {{
                                        add(new DeviceId() {{
                                            buildBrand = "necessitatibus";
                                            buildDevice = "aperiam";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "veniam";
                                            buildDevice = "velit";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new openapisdk.models.shared.SystemFeature[]() {{
                                        add(new SystemFeature() {{
                                            name = "hic";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "quis";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "sunt";
                                        }}),
                                    }};
                                    includedDeviceIds = new openapisdk.models.shared.DeviceId[]() {{
                                        add(new DeviceId() {{
                                            buildBrand = "eveniet";
                                            buildDevice = "veniam";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "reiciendis";
                                            buildDevice = "non";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "dolor";
                                            buildDevice = "maiores";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new openapisdk.models.shared.SystemFeature[]() {{
                                        add(new SystemFeature() {{
                                            name = "pariatur";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "ad";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "aperiam";
                                        }}),
                                    }};
                                }}),
                            }};
                            name = "earum";
                        }}),
                        add(new DeviceGroup() {{
                            deviceSelectors = new openapisdk.models.shared.DeviceSelector[]() {{
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "earum";
                                        minBytes = "est";
                                    }};
                                    excludedDeviceIds = new openapisdk.models.shared.DeviceId[]() {{
                                        add(new DeviceId() {{
                                            buildBrand = "ipsa";
                                            buildDevice = "sint";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new openapisdk.models.shared.SystemFeature[]() {{
                                        add(new SystemFeature() {{
                                            name = "qui";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "mollitia";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "neque";
                                        }}),
                                    }};
                                    includedDeviceIds = new openapisdk.models.shared.DeviceId[]() {{
                                        add(new DeviceId() {{
                                            buildBrand = "ab";
                                            buildDevice = "dolore";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new openapisdk.models.shared.SystemFeature[]() {{
                                        add(new SystemFeature() {{
                                            name = "saepe";
                                        }}),
                                    }};
                                }}),
                            }};
                            name = "enim";
                        }}),
                        add(new DeviceGroup() {{
                            deviceSelectors = new openapisdk.models.shared.DeviceSelector[]() {{
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "rerum";
                                        minBytes = "et";
                                    }};
                                    excludedDeviceIds = new openapisdk.models.shared.DeviceId[]() {{
                                        add(new DeviceId() {{
                                            buildBrand = "occaecati";
                                            buildDevice = "eum";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "ut";
                                            buildDevice = "assumenda";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new openapisdk.models.shared.SystemFeature[]() {{
                                        add(new SystemFeature() {{
                                            name = "aut";
                                        }}),
                                    }};
                                    includedDeviceIds = new openapisdk.models.shared.DeviceId[]() {{
                                        add(new DeviceId() {{
                                            buildBrand = "amet";
                                            buildDevice = "et";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "iusto";
                                            buildDevice = "voluptatem";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "nesciunt";
                                            buildDevice = "natus";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new openapisdk.models.shared.SystemFeature[]() {{
                                        add(new SystemFeature() {{
                                            name = "et";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "quod";
                                        }}),
                                    }};
                                }}),
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "autem";
                                        minBytes = "quod";
                                    }};
                                    excludedDeviceIds = new openapisdk.models.shared.DeviceId[]() {{
                                        add(new DeviceId() {{
                                            buildBrand = "nostrum";
                                            buildDevice = "repudiandae";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "dicta";
                                            buildDevice = "vero";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new openapisdk.models.shared.SystemFeature[]() {{
                                        add(new SystemFeature() {{
                                            name = "delectus";
                                        }}),
                                    }};
                                    includedDeviceIds = new openapisdk.models.shared.DeviceId[]() {{
                                        add(new DeviceId() {{
                                            buildBrand = "deleniti";
                                            buildDevice = "omnis";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "eius";
                                            buildDevice = "consequuntur";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new openapisdk.models.shared.SystemFeature[]() {{
                                        add(new SystemFeature() {{
                                            name = "laudantium";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "similique";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "ullam";
                                        }}),
                                    }};
                                }}),
                                add(new DeviceSelector() {{
                                    deviceRam = new DeviceRam() {{
                                        maxBytes = "quis";
                                        minBytes = "facilis";
                                    }};
                                    excludedDeviceIds = new openapisdk.models.shared.DeviceId[]() {{
                                        add(new DeviceId() {{
                                            buildBrand = "aut";
                                            buildDevice = "id";
                                        }}),
                                    }};
                                    forbiddenSystemFeatures = new openapisdk.models.shared.SystemFeature[]() {{
                                        add(new SystemFeature() {{
                                            name = "dicta";
                                        }}),
                                        add(new SystemFeature() {{
                                            name = "quis";
                                        }}),
                                    }};
                                    includedDeviceIds = new openapisdk.models.shared.DeviceId[]() {{
                                        add(new DeviceId() {{
                                            buildBrand = "aliquam";
                                            buildDevice = "quos";
                                        }}),
                                        add(new DeviceId() {{
                                            buildBrand = "omnis";
                                            buildDevice = "illum";
                                        }}),
                                    }};
                                    requiredSystemFeatures = new openapisdk.models.shared.SystemFeature[]() {{
                                        add(new SystemFeature() {{
                                            name = "id";
                                        }}),
                                    }};
                                }}),
                            }};
                            name = "blanditiis";
                        }}),
                    }};
                    deviceTierSet = new DeviceTierSet() {{
                        deviceTiers = new openapisdk.models.shared.DeviceTier[]() {{
                            add(new DeviceTier() {{
                                deviceGroupNames = new String[]() {{
                                    add("aut"),
                                    add("adipisci"),
                                }};
                                level = 3214739643573370622;
                            }}),
                            add(new DeviceTier() {{
                                deviceGroupNames = new String[]() {{
                                    add("in"),
                                    add("fuga"),
                                    add("nemo"),
                                }};
                                level = 7802801472849929626;
                            }}),
                            add(new DeviceTier() {{
                                deviceGroupNames = new String[]() {{
                                    add("architecto"),
                                    add("ratione"),
                                }};
                                level = 5969817432109258462;
                            }}),
                        }};
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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
