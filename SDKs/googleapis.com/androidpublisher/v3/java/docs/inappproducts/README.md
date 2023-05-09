# inappproducts

### Available Operations

* [androidpublisherInappproductsDelete](#androidpublisherinappproductsdelete) - Deletes an in-app product (i.e. a managed product or a subscription).
* [androidpublisherInappproductsGet](#androidpublisherinappproductsget) - Gets an in-app product, which can be a managed product or a subscription.
* [androidpublisherInappproductsInsert](#androidpublisherinappproductsinsert) - Creates an in-app product (i.e. a managed product or a subscription).
* [androidpublisherInappproductsList](#androidpublisherinappproductslist) - Lists all in-app products - both managed products and subscriptions. If an app has a large number of in-app products, the response may be paginated. In this case the response field `tokenPagination.nextPageToken` will be set and the caller should provide its value as a `token` request parameter to retrieve the next page.
* [androidpublisherInappproductsPatch](#androidpublisherinappproductspatch) - Patches an in-app product (i.e. a managed product or a subscription).
* [androidpublisherInappproductsUpdate](#androidpublisherinappproductsupdate) - Updates an in-app product (i.e. a managed product or a subscription).

## androidpublisherInappproductsDelete

Deletes an in-app product (i.e. a managed product or a subscription).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsDeleteRequest;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsDeleteResponse;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherInappproductsDeleteRequest req = new AndroidpublisherInappproductsDeleteRequest("maxime", "magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quos";
                alt = AltEnum.MEDIA;
                callback = "itaque";
                fields = "commodi";
                key = "totam";
                oauthToken = "earum";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "nam";
                uploadProtocol = "vero";
            }};            

            AndroidpublisherInappproductsDeleteResponse res = sdk.inappproducts.androidpublisherInappproductsDelete(req, new AndroidpublisherInappproductsDeleteSecurity("voluptatem", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherInappproductsGet

Gets an in-app product, which can be a managed product or a subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsGetRequest;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsGetResponse;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherInappproductsGetRequest req = new AndroidpublisherInappproductsGetRequest("vel", "alias") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "non";
                alt = AltEnum.PROTO;
                callback = "enim";
                fields = "sint";
                key = "nulla";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "nemo";
                uploadProtocol = "reprehenderit";
            }};            

            AndroidpublisherInappproductsGetResponse res = sdk.inappproducts.androidpublisherInappproductsGet(req, new AndroidpublisherInappproductsGetSecurity("est", "quis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.inAppProduct != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherInappproductsInsert

Creates an in-app product (i.e. a managed product or a subscription).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsInsertRequest;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsInsertResponse;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InAppProduct;
import org.openapis.openapi.models.shared.InAppProductListing;
import org.openapis.openapi.models.shared.InAppProductPurchaseTypeEnum;
import org.openapis.openapi.models.shared.InAppProductStatusEnum;
import org.openapis.openapi.models.shared.ManagedProductTaxAndComplianceSettings;
import org.openapis.openapi.models.shared.ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.RegionalTaxRateInfo;
import org.openapis.openapi.models.shared.RegionalTaxRateInfoStreamingTaxTypeEnum;
import org.openapis.openapi.models.shared.RegionalTaxRateInfoTaxTierEnum;
import org.openapis.openapi.models.shared.SubscriptionTaxAndComplianceSettings;
import org.openapis.openapi.models.shared.SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherInappproductsInsertRequest req = new AndroidpublisherInappproductsInsertRequest("sint") {{
                dollarXgafv = XgafvEnum.TWO;
                inAppProduct = new InAppProduct() {{
                    defaultLanguage = "impedit";
                    defaultPrice = new Price() {{
                        currency = "hic";
                        priceMicros = "necessitatibus";
                    }};;
                    gracePeriod = "asperiores";
                    listings = new java.util.HashMap<String, org.openapis.openapi.models.shared.InAppProductListing>() {{
                        put("voluptas", new InAppProductListing() {{
                            benefits = new String[]{{
                                add("delectus"),
                                add("quae"),
                                add("minus"),
                                add("fuga"),
                            }};
                            description = "laborum";
                            title = "Mrs.";
                        }});
                        put("velit", new InAppProductListing() {{
                            benefits = new String[]{{
                                add("ipsum"),
                                add("impedit"),
                                add("magni"),
                            }};
                            description = "soluta";
                            title = "Dr.";
                        }});
                    }};
                    managedProductTaxesAndComplianceSettings = new ManagedProductTaxAndComplianceSettings() {{
                        eeaWithdrawalRightType = ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum.WITHDRAWAL_RIGHT_SERVICE;
                        taxRateInfoByRegionCode = new java.util.HashMap<String, org.openapis.openapi.models.shared.RegionalTaxRateInfo>() {{
                            put("iusto", new RegionalTaxRateInfo() {{
                                eligibleForStreamingServiceTaxRate = false;
                                streamingTaxType = RegionalTaxRateInfoStreamingTaxTypeEnum.STREAMING_TAX_TYPE_TELCO_VIDEO_MULTI_CHANNEL;
                                taxTier = RegionalTaxRateInfoTaxTierEnum.TAX_TIER_BOOKS1;
                            }});
                            put("dignissimos", new RegionalTaxRateInfo() {{
                                eligibleForStreamingServiceTaxRate = false;
                                streamingTaxType = RegionalTaxRateInfoStreamingTaxTypeEnum.STREAMING_TAX_TYPE_TELCO_VIDEO_RENTAL;
                                taxTier = RegionalTaxRateInfoTaxTierEnum.TAX_TIER_MUSIC_OR_AUDIO1;
                            }});
                        }};
                    }};;
                    packageName = "deleniti";
                    prices = new java.util.HashMap<String, org.openapis.openapi.models.shared.Price>() {{
                        put("iure", new Price() {{
                            currency = "odit";
                            priceMicros = "voluptatibus";
                        }});
                        put("vel", new Price() {{
                            currency = "magnam";
                            priceMicros = "quibusdam";
                        }});
                        put("inventore", new Price() {{
                            currency = "facere";
                            priceMicros = "libero";
                        }});
                        put("architecto", new Price() {{
                            currency = "voluptatibus";
                            priceMicros = "quia";
                        }});
                    }};
                    purchaseType = InAppProductPurchaseTypeEnum.SUBSCRIPTION;
                    sku = "aliquam";
                    status = InAppProductStatusEnum.STATUS_UNSPECIFIED;
                    subscriptionPeriod = "illo";
                    subscriptionTaxesAndComplianceSettings = new SubscriptionTaxAndComplianceSettings() {{
                        eeaWithdrawalRightType = SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum.WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED;
                        taxRateInfoByRegionCode = new java.util.HashMap<String, org.openapis.openapi.models.shared.RegionalTaxRateInfo>() {{
                            put("ea", new RegionalTaxRateInfo() {{
                                eligibleForStreamingServiceTaxRate = false;
                                streamingTaxType = RegionalTaxRateInfoStreamingTaxTypeEnum.STREAMING_TAX_TYPE_UNSPECIFIED;
                                taxTier = RegionalTaxRateInfoTaxTierEnum.TAX_TIER_LIVE_OR_BROADCAST1;
                            }});
                            put("excepturi", new RegionalTaxRateInfo() {{
                                eligibleForStreamingServiceTaxRate = false;
                                streamingTaxType = RegionalTaxRateInfoStreamingTaxTypeEnum.STREAMING_TAX_TYPE_TELCO_VIDEO_MULTI_CHANNEL;
                                taxTier = RegionalTaxRateInfoTaxTierEnum.TAX_TIER_BOOKS1;
                            }});
                        }};
                    }};;
                    trialPeriod = "ut";
                }};;
                accessToken = "perspiciatis";
                alt = AltEnum.PROTO;
                autoConvertMissingPrices = false;
                callback = "dicta";
                fields = "impedit";
                key = "voluptatibus";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "itaque";
                uploadType = "alias";
                uploadProtocol = "nisi";
            }};            

            AndroidpublisherInappproductsInsertResponse res = sdk.inappproducts.androidpublisherInappproductsInsert(req, new AndroidpublisherInappproductsInsertSecurity("itaque", "velit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.inAppProduct != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherInappproductsList

Lists all in-app products - both managed products and subscriptions. If an app has a large number of in-app products, the response may be paginated. In this case the response field `tokenPagination.nextPageToken` will be set and the caller should provide its value as a `token` request parameter to retrieve the next page.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsListRequest;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsListResponse;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherInappproductsListRequest req = new AndroidpublisherInappproductsListRequest("laborum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolor";
                alt = AltEnum.MEDIA;
                callback = "sit";
                fields = "doloremque";
                key = "consequatur";
                maxResults = 639705L;
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "ea";
                startIndex = 693153L;
                token = "voluptas";
                uploadType = "facilis";
                uploadProtocol = "placeat";
            }};            

            AndroidpublisherInappproductsListResponse res = sdk.inappproducts.androidpublisherInappproductsList(req, new AndroidpublisherInappproductsListSecurity("perspiciatis", "expedita") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.inappproductsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherInappproductsPatch

Patches an in-app product (i.e. a managed product or a subscription).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsPatchRequest;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsPatchResponse;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InAppProduct;
import org.openapis.openapi.models.shared.InAppProductListing;
import org.openapis.openapi.models.shared.InAppProductPurchaseTypeEnum;
import org.openapis.openapi.models.shared.InAppProductStatusEnum;
import org.openapis.openapi.models.shared.ManagedProductTaxAndComplianceSettings;
import org.openapis.openapi.models.shared.ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.RegionalTaxRateInfo;
import org.openapis.openapi.models.shared.RegionalTaxRateInfoStreamingTaxTypeEnum;
import org.openapis.openapi.models.shared.RegionalTaxRateInfoTaxTierEnum;
import org.openapis.openapi.models.shared.SubscriptionTaxAndComplianceSettings;
import org.openapis.openapi.models.shared.SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherInappproductsPatchRequest req = new AndroidpublisherInappproductsPatchRequest("deleniti", "a") {{
                dollarXgafv = XgafvEnum.ONE;
                inAppProduct = new InAppProduct() {{
                    defaultLanguage = "ullam";
                    defaultPrice = new Price() {{
                        currency = "unde";
                        priceMicros = "necessitatibus";
                    }};;
                    gracePeriod = "animi";
                    listings = new java.util.HashMap<String, org.openapis.openapi.models.shared.InAppProductListing>() {{
                        put("ipsam", new InAppProductListing() {{
                            benefits = new String[]{{
                                add("est"),
                                add("error"),
                            }};
                            description = "esse";
                            title = "Mrs.";
                        }});
                        put("veritatis", new InAppProductListing() {{
                            benefits = new String[]{{
                                add("consectetur"),
                                add("vitae"),
                                add("inventore"),
                                add("dolorem"),
                            }};
                            description = "ad";
                            title = "Mr.";
                        }});
                        put("iste", new InAppProductListing() {{
                            benefits = new String[]{{
                                add("nemo"),
                                add("soluta"),
                            }};
                            description = "libero";
                            title = "Ms.";
                        }});
                        put("dolorum", new InAppProductListing() {{
                            benefits = new String[]{{
                                add("fugit"),
                                add("alias"),
                            }};
                            description = "magni";
                            title = "Ms.";
                        }});
                    }};
                    managedProductTaxesAndComplianceSettings = new ManagedProductTaxAndComplianceSettings() {{
                        eeaWithdrawalRightType = ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum.WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED;
                        taxRateInfoByRegionCode = new java.util.HashMap<String, org.openapis.openapi.models.shared.RegionalTaxRateInfo>() {{
                            put("modi", new RegionalTaxRateInfo() {{
                                eligibleForStreamingServiceTaxRate = false;
                                streamingTaxType = RegionalTaxRateInfoStreamingTaxTypeEnum.STREAMING_TAX_TYPE_TELCO_VIDEO_RENTAL;
                                taxTier = RegionalTaxRateInfoTaxTierEnum.TAX_TIER_NEWS1;
                            }});
                        }};
                    }};;
                    packageName = "itaque";
                    prices = new java.util.HashMap<String, org.openapis.openapi.models.shared.Price>() {{
                        put("ipsum", new Price() {{
                            currency = "unde";
                            priceMicros = "nulla";
                        }});
                    }};
                    purchaseType = InAppProductPurchaseTypeEnum.SUBSCRIPTION;
                    sku = "maxime";
                    status = InAppProductStatusEnum.STATUS_UNSPECIFIED;
                    subscriptionPeriod = "quia";
                    subscriptionTaxesAndComplianceSettings = new SubscriptionTaxAndComplianceSettings() {{
                        eeaWithdrawalRightType = SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum.WITHDRAWAL_RIGHT_DIGITAL_CONTENT;
                        taxRateInfoByRegionCode = new java.util.HashMap<String, org.openapis.openapi.models.shared.RegionalTaxRateInfo>() {{
                            put("libero", new RegionalTaxRateInfo() {{
                                eligibleForStreamingServiceTaxRate = false;
                                streamingTaxType = RegionalTaxRateInfoStreamingTaxTypeEnum.STREAMING_TAX_TYPE_UNSPECIFIED;
                                taxTier = RegionalTaxRateInfoTaxTierEnum.TAX_TIER_NEWS2;
                            }});
                            put("libero", new RegionalTaxRateInfo() {{
                                eligibleForStreamingServiceTaxRate = false;
                                streamingTaxType = RegionalTaxRateInfoStreamingTaxTypeEnum.STREAMING_TAX_TYPE_TELCO_AUDIO_SALES;
                                taxTier = RegionalTaxRateInfoTaxTierEnum.TAX_TIER_NEWS2;
                            }});
                            put("quos", new RegionalTaxRateInfo() {{
                                eligibleForStreamingServiceTaxRate = false;
                                streamingTaxType = RegionalTaxRateInfoStreamingTaxTypeEnum.STREAMING_TAX_TYPE_TELCO_AUDIO_SALES;
                                taxTier = RegionalTaxRateInfoTaxTierEnum.TAX_TIER_UNSPECIFIED;
                            }});
                        }};
                    }};;
                    trialPeriod = "iusto";
                }};;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                autoConvertMissingPrices = false;
                callback = "inventore";
                fields = "aperiam";
                key = "totam";
                oauthToken = "dolore";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "distinctio";
                uploadProtocol = "voluptatem";
            }};            

            AndroidpublisherInappproductsPatchResponse res = sdk.inappproducts.androidpublisherInappproductsPatch(req, new AndroidpublisherInappproductsPatchSecurity("autem", "esse") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.inAppProduct != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherInappproductsUpdate

Updates an in-app product (i.e. a managed product or a subscription).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsUpdateRequest;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsUpdateResponse;
import org.openapis.openapi.models.operations.AndroidpublisherInappproductsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InAppProduct;
import org.openapis.openapi.models.shared.InAppProductListing;
import org.openapis.openapi.models.shared.InAppProductPurchaseTypeEnum;
import org.openapis.openapi.models.shared.InAppProductStatusEnum;
import org.openapis.openapi.models.shared.ManagedProductTaxAndComplianceSettings;
import org.openapis.openapi.models.shared.ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.RegionalTaxRateInfo;
import org.openapis.openapi.models.shared.RegionalTaxRateInfoStreamingTaxTypeEnum;
import org.openapis.openapi.models.shared.RegionalTaxRateInfoTaxTierEnum;
import org.openapis.openapi.models.shared.SubscriptionTaxAndComplianceSettings;
import org.openapis.openapi.models.shared.SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherInappproductsUpdateRequest req = new AndroidpublisherInappproductsUpdateRequest("dolores", "assumenda") {{
                dollarXgafv = XgafvEnum.ONE;
                inAppProduct = new InAppProduct() {{
                    defaultLanguage = "est";
                    defaultPrice = new Price() {{
                        currency = "facere";
                        priceMicros = "corrupti";
                    }};;
                    gracePeriod = "molestiae";
                    listings = new java.util.HashMap<String, org.openapis.openapi.models.shared.InAppProductListing>() {{
                        put("accusamus", new InAppProductListing() {{
                            benefits = new String[]{{
                                add("tempore"),
                                add("sint"),
                                add("ea"),
                                add("autem"),
                            }};
                            description = "ipsam";
                            title = "Miss";
                        }});
                        put("laudantium", new InAppProductListing() {{
                            benefits = new String[]{{
                                add("officiis"),
                                add("voluptatibus"),
                            }};
                            description = "cum";
                            title = "Dr.";
                        }});
                        put("alias", new InAppProductListing() {{
                            benefits = new String[]{{
                                add("quidem"),
                            }};
                            description = "fuga";
                            title = "Dr.";
                        }});
                    }};
                    managedProductTaxesAndComplianceSettings = new ManagedProductTaxAndComplianceSettings() {{
                        eeaWithdrawalRightType = ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum.WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED;
                        taxRateInfoByRegionCode = new java.util.HashMap<String, org.openapis.openapi.models.shared.RegionalTaxRateInfo>() {{
                            put("officiis", new RegionalTaxRateInfo() {{
                                eligibleForStreamingServiceTaxRate = false;
                                streamingTaxType = RegionalTaxRateInfoStreamingTaxTypeEnum.STREAMING_TAX_TYPE_TELCO_VIDEO_RENTAL;
                                taxTier = RegionalTaxRateInfoTaxTierEnum.TAX_TIER_LIVE_OR_BROADCAST1;
                            }});
                            put("odio", new RegionalTaxRateInfo() {{
                                eligibleForStreamingServiceTaxRate = false;
                                streamingTaxType = RegionalTaxRateInfoStreamingTaxTypeEnum.STREAMING_TAX_TYPE_TELCO_VIDEO_MULTI_CHANNEL;
                                taxTier = RegionalTaxRateInfoTaxTierEnum.TAX_TIER_UNSPECIFIED;
                            }});
                            put("explicabo", new RegionalTaxRateInfo() {{
                                eligibleForStreamingServiceTaxRate = false;
                                streamingTaxType = RegionalTaxRateInfoStreamingTaxTypeEnum.STREAMING_TAX_TYPE_TELCO_VIDEO_SALES;
                                taxTier = RegionalTaxRateInfoTaxTierEnum.TAX_TIER_NEWS2;
                            }});
                        }};
                    }};;
                    packageName = "earum";
                    prices = new java.util.HashMap<String, org.openapis.openapi.models.shared.Price>() {{
                        put("recusandae", new Price() {{
                            currency = "similique";
                            priceMicros = "ut";
                        }});
                    }};
                    purchaseType = InAppProductPurchaseTypeEnum.SUBSCRIPTION;
                    sku = "quis";
                    status = InAppProductStatusEnum.STATUS_UNSPECIFIED;
                    subscriptionPeriod = "unde";
                    subscriptionTaxesAndComplianceSettings = new SubscriptionTaxAndComplianceSettings() {{
                        eeaWithdrawalRightType = SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum.WITHDRAWAL_RIGHT_DIGITAL_CONTENT;
                        taxRateInfoByRegionCode = new java.util.HashMap<String, org.openapis.openapi.models.shared.RegionalTaxRateInfo>() {{
                            put("cupiditate", new RegionalTaxRateInfo() {{
                                eligibleForStreamingServiceTaxRate = false;
                                streamingTaxType = RegionalTaxRateInfoStreamingTaxTypeEnum.STREAMING_TAX_TYPE_TELCO_VIDEO_RENTAL;
                                taxTier = RegionalTaxRateInfoTaxTierEnum.TAX_TIER_BOOKS1;
                            }});
                            put("numquam", new RegionalTaxRateInfo() {{
                                eligibleForStreamingServiceTaxRate = false;
                                streamingTaxType = RegionalTaxRateInfoStreamingTaxTypeEnum.STREAMING_TAX_TYPE_TELCO_VIDEO_RENTAL;
                                taxTier = RegionalTaxRateInfoTaxTierEnum.TAX_TIER_LIVE_OR_BROADCAST1;
                            }});
                            put("officia", new RegionalTaxRateInfo() {{
                                eligibleForStreamingServiceTaxRate = false;
                                streamingTaxType = RegionalTaxRateInfoStreamingTaxTypeEnum.STREAMING_TAX_TYPE_TELCO_VIDEO_MULTI_CHANNEL;
                                taxTier = RegionalTaxRateInfoTaxTierEnum.TAX_TIER_MUSIC_OR_AUDIO1;
                            }});
                            put("necessitatibus", new RegionalTaxRateInfo() {{
                                eligibleForStreamingServiceTaxRate = false;
                                streamingTaxType = RegionalTaxRateInfoStreamingTaxTypeEnum.STREAMING_TAX_TYPE_TELCO_VIDEO_SALES;
                                taxTier = RegionalTaxRateInfoTaxTierEnum.TAX_TIER_BOOKS1;
                            }});
                        }};
                    }};;
                    trialPeriod = "expedita";
                }};;
                accessToken = "voluptatum";
                allowMissing = false;
                alt = AltEnum.MEDIA;
                autoConvertMissingPrices = false;
                callback = "minima";
                fields = "placeat";
                key = "enim";
                oauthToken = "neque";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "minus";
                uploadProtocol = "eum";
            }};            

            AndroidpublisherInappproductsUpdateResponse res = sdk.inappproducts.androidpublisherInappproductsUpdate(req, new AndroidpublisherInappproductsUpdateSecurity("modi", "corporis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.inAppProduct != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
