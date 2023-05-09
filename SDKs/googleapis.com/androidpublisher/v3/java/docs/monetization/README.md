# monetization

### Available Operations

* [androidpublisherMonetizationConvertRegionPrices](#androidpublishermonetizationconvertregionprices) - Calculates the region prices, using today's exchange rate and country-specific pricing patterns, based on the price in the request for a set of regions.
* [androidpublisherMonetizationSubscriptionsArchive](#androidpublishermonetizationsubscriptionsarchive) - Archives a subscription. Can only be done if at least one base plan was active in the past, and no base plan is available for new or existing subscribers currently. This action is irreversible, and the subscription ID will remain reserved.
* [androidpublisherMonetizationSubscriptionsBasePlansActivate](#androidpublishermonetizationsubscriptionsbaseplansactivate) - Activates a base plan. Once activated, base plans will be available to new subscribers.
* [androidpublisherMonetizationSubscriptionsBasePlansDeactivate](#androidpublishermonetizationsubscriptionsbaseplansdeactivate) - Deactivates a base plan. Once deactivated, the base plan will become unavailable to new subscribers, but existing subscribers will maintain their subscription
* [androidpublisherMonetizationSubscriptionsBasePlansDelete](#androidpublishermonetizationsubscriptionsbaseplansdelete) - Deletes a base plan. Can only be done for draft base plans. This action is irreversible.
* [androidpublisherMonetizationSubscriptionsBasePlansMigratePrices](#androidpublishermonetizationsubscriptionsbaseplansmigrateprices) - Migrates subscribers who are receiving an historical subscription price to the currently-offered price for the specified region. Requests will cause price change notifications to be sent to users who are currently receiving an historical price older than the supplied timestamp. Subscribers who do not agree to the new price will have their subscription ended at the next renewal.
* [androidpublisherMonetizationSubscriptionsBasePlansOffersActivate](#androidpublishermonetizationsubscriptionsbaseplansoffersactivate) - Activates a subscription offer. Once activated, subscription offers will be available to new subscribers.
* [androidpublisherMonetizationSubscriptionsBasePlansOffersCreate](#androidpublishermonetizationsubscriptionsbaseplansofferscreate) - Creates a new subscription offer. Only auto-renewing base plans can have subscription offers. The offer state will be DRAFT until it is activated.
* [androidpublisherMonetizationSubscriptionsBasePlansOffersDeactivate](#androidpublishermonetizationsubscriptionsbaseplansoffersdeactivate) - Deactivates a subscription offer. Once deactivated, existing subscribers will maintain their subscription, but the offer will become unavailable to new subscribers.
* [androidpublisherMonetizationSubscriptionsBasePlansOffersDelete](#androidpublishermonetizationsubscriptionsbaseplansoffersdelete) - Deletes a subscription offer. Can only be done for draft offers. This action is irreversible.
* [androidpublisherMonetizationSubscriptionsBasePlansOffersGet](#androidpublishermonetizationsubscriptionsbaseplansoffersget) - Reads a single offer
* [androidpublisherMonetizationSubscriptionsBasePlansOffersList](#androidpublishermonetizationsubscriptionsbaseplansofferslist) - Lists all offers under a given subscription.
* [androidpublisherMonetizationSubscriptionsBasePlansOffersPatch](#androidpublishermonetizationsubscriptionsbaseplansofferspatch) - Updates an existing subscription offer.
* [androidpublisherMonetizationSubscriptionsCreate](#androidpublishermonetizationsubscriptionscreate) - Creates a new subscription. Newly added base plans will remain in draft state until activated.
* [androidpublisherMonetizationSubscriptionsDelete](#androidpublishermonetizationsubscriptionsdelete) - Deletes a subscription. A subscription can only be deleted if it has never had a base plan published.
* [androidpublisherMonetizationSubscriptionsGet](#androidpublishermonetizationsubscriptionsget) - Reads a single subscription.
* [androidpublisherMonetizationSubscriptionsList](#androidpublishermonetizationsubscriptionslist) - Lists all subscriptions under a given app.
* [androidpublisherMonetizationSubscriptionsPatch](#androidpublishermonetizationsubscriptionspatch) - Updates an existing subscription.

## androidpublisherMonetizationConvertRegionPrices

Calculates the region prices, using today's exchange rate and country-specific pricing patterns, based on the price in the request for a set of regions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationConvertRegionPricesRequest;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationConvertRegionPricesResponse;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationConvertRegionPricesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConvertRegionPricesRequest;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherMonetizationConvertRegionPricesRequest req = new AndroidpublisherMonetizationConvertRegionPricesRequest("aperiam") {{
                dollarXgafv = XgafvEnum.ONE;
                convertRegionPricesRequest = new ConvertRegionPricesRequest() {{
                    price = new Money() {{
                        currencyCode = "minima";
                        nanos = 448369;
                        units = "ducimus";
                    }};;
                }};;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "error";
                fields = "veritatis";
                key = "ducimus";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "itaque";
                uploadProtocol = "similique";
            }};            

            AndroidpublisherMonetizationConvertRegionPricesResponse res = sdk.monetization.androidpublisherMonetizationConvertRegionPrices(req, new AndroidpublisherMonetizationConvertRegionPricesSecurity("optio", "ex") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.convertRegionPricesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherMonetizationSubscriptionsArchive

Archives a subscription. Can only be done if at least one base plan was active in the past, and no base plan is available for new or existing subscribers currently. This action is irreversible, and the subscription ID will remain reserved.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsArchiveRequest;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsArchiveResponse;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsArchiveSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherMonetizationSubscriptionsArchiveRequest req = new AndroidpublisherMonetizationSubscriptionsArchiveRequest("quaerat", "commodi") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quidem", "exercitationem");
                    put("quam", "dolorem");
                    put("modi", "ipsa");
                    put("sint", "vero");
                }};
                accessToken = "sequi";
                alt = AltEnum.PROTO;
                callback = "cum";
                fields = "dicta";
                key = "earum";
                oauthToken = "veniam";
                prettyPrint = false;
                quotaUser = "animi";
                uploadType = "dolores";
                uploadProtocol = "nam";
            }};            

            AndroidpublisherMonetizationSubscriptionsArchiveResponse res = sdk.monetization.androidpublisherMonetizationSubscriptionsArchive(req, new AndroidpublisherMonetizationSubscriptionsArchiveSecurity("dicta", "consequuntur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.subscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherMonetizationSubscriptionsBasePlansActivate

Activates a base plan. Once activated, base plans will be available to new subscribers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansActivateRequest;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansActivateResponse;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansActivateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherMonetizationSubscriptionsBasePlansActivateRequest req = new AndroidpublisherMonetizationSubscriptionsBasePlansActivateRequest("necessitatibus", "nobis", "ipsa") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("veritatis", "quasi");
                    put("laboriosam", "pariatur");
                    put("libero", "excepturi");
                    put("occaecati", "nemo");
                }};
                accessToken = "aliquam";
                alt = AltEnum.MEDIA;
                callback = "doloribus";
                fields = "eligendi";
                key = "sint";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "animi";
                uploadProtocol = "quas";
            }};            

            AndroidpublisherMonetizationSubscriptionsBasePlansActivateResponse res = sdk.monetization.androidpublisherMonetizationSubscriptionsBasePlansActivate(req, new AndroidpublisherMonetizationSubscriptionsBasePlansActivateSecurity("totam", "molestias") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.subscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherMonetizationSubscriptionsBasePlansDeactivate

Deactivates a base plan. Once deactivated, the base plan will become unavailable to new subscribers, but existing subscribers will maintain their subscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateRequest;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateResponse;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateRequest req = new AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateRequest("odio", "eaque", "saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("iste", "assumenda");
                    put("tempore", "libero");
                    put("velit", "doloremque");
                }};
                accessToken = "delectus";
                alt = AltEnum.PROTO;
                callback = "cum";
                fields = "ipsum";
                key = "adipisci";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "doloremque";
                uploadProtocol = "quis";
            }};            

            AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateResponse res = sdk.monetization.androidpublisherMonetizationSubscriptionsBasePlansDeactivate(req, new AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateSecurity("veniam", "libero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.subscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherMonetizationSubscriptionsBasePlansDelete

Deletes a base plan. Can only be done for draft base plans. This action is irreversible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeleteRequest;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeleteResponse;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherMonetizationSubscriptionsBasePlansDeleteRequest req = new AndroidpublisherMonetizationSubscriptionsBasePlansDeleteRequest("architecto", "cupiditate", "molestiae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "possimus";
                alt = AltEnum.JSON;
                callback = "magnam";
                fields = "itaque";
                key = "sed";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "veniam";
                uploadType = "consequuntur";
                uploadProtocol = "facere";
            }};            

            AndroidpublisherMonetizationSubscriptionsBasePlansDeleteResponse res = sdk.monetization.androidpublisherMonetizationSubscriptionsBasePlansDelete(req, new AndroidpublisherMonetizationSubscriptionsBasePlansDeleteSecurity("laudantium", "odit") {{
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

## androidpublisherMonetizationSubscriptionsBasePlansMigratePrices

Migrates subscribers who are receiving an historical subscription price to the currently-offered price for the specified region. Requests will cause price change notifications to be sent to users who are currently receiving an historical price older than the supplied timestamp. Subscribers who do not agree to the new price will have their subscription ended at the next renewal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesRequest;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesResponse;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.MigrateBasePlanPricesRequest;
import org.openapis.openapi.models.shared.RegionalPriceMigrationConfig;
import org.openapis.openapi.models.shared.RegionsVersion;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesRequest req = new AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesRequest("pariatur", "amet", "exercitationem") {{
                dollarXgafv = XgafvEnum.ONE;
                migrateBasePlanPricesRequest = new MigrateBasePlanPricesRequest() {{
                    regionalPriceMigrations = new org.openapis.openapi.models.shared.RegionalPriceMigrationConfig[]{{
                        add(new RegionalPriceMigrationConfig() {{
                            oldestAllowedPriceVersionTime = "facilis";
                            regionCode = "tempore";
                        }}),
                    }};
                    regionsVersion = new RegionsVersion() {{
                        version = "nisi";
                    }};;
                }};;
                accessToken = "voluptatibus";
                alt = AltEnum.JSON;
                callback = "blanditiis";
                fields = "distinctio";
                key = "nisi";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "libero";
                uploadProtocol = "minus";
            }};            

            AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesResponse res = sdk.monetization.androidpublisherMonetizationSubscriptionsBasePlansMigratePrices(req, new AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesSecurity("facere", "facilis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.migrateBasePlanPricesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherMonetizationSubscriptionsBasePlansOffersActivate

Activates a subscription offer. Once activated, subscription offers will be available to new subscribers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateRequest;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateResponse;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateRequest req = new AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateRequest("ipsum", "ad", "voluptatibus", "voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("labore", "rerum");
                    put("eos", "reprehenderit");
                    put("nostrum", "neque");
                    put("iusto", "est");
                }};
                accessToken = "rem";
                alt = AltEnum.PROTO;
                callback = "fugiat";
                fields = "unde";
                key = "officiis";
                oauthToken = "ducimus";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "dicta";
                uploadProtocol = "error";
            }};            

            AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateResponse res = sdk.monetization.androidpublisherMonetizationSubscriptionsBasePlansOffersActivate(req, new AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateSecurity("porro", "vitae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.subscriptionOffer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherMonetizationSubscriptionsBasePlansOffersCreate

Creates a new subscription offer. Only auto-renewing base plans can have subscription offers. The offer state will be DRAFT until it is activated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateRequest;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateResponse;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateSecurity;
import org.openapis.openapi.models.shared.AcquisitionTargetingRule;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.OfferTag;
import org.openapis.openapi.models.shared.OtherRegionsSubscriptionOfferConfig;
import org.openapis.openapi.models.shared.OtherRegionsSubscriptionOfferPhaseConfig;
import org.openapis.openapi.models.shared.OtherRegionsSubscriptionOfferPhasePrices;
import org.openapis.openapi.models.shared.RegionalSubscriptionOfferConfig;
import org.openapis.openapi.models.shared.RegionalSubscriptionOfferPhaseConfig;
import org.openapis.openapi.models.shared.SubscriptionOfferInput;
import org.openapis.openapi.models.shared.SubscriptionOfferPhase;
import org.openapis.openapi.models.shared.SubscriptionOfferTargeting;
import org.openapis.openapi.models.shared.TargetingRuleScope;
import org.openapis.openapi.models.shared.UpgradeTargetingRule;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateRequest req = new AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateRequest("dignissimos", "esse", "fugiat") {{
                dollarXgafv = XgafvEnum.ONE;
                subscriptionOfferInput = new SubscriptionOfferInput() {{
                    basePlanId = "aspernatur";
                    offerId = "enim";
                    offerTags = new org.openapis.openapi.models.shared.OfferTag[]{{
                        add(new OfferTag() {{
                            tag = "iusto";
                        }}),
                        add(new OfferTag() {{
                            tag = "dignissimos";
                        }}),
                        add(new OfferTag() {{
                            tag = "libero";
                        }}),
                        add(new OfferTag() {{
                            tag = "illo";
                        }}),
                    }};
                    otherRegionsConfig = new OtherRegionsSubscriptionOfferConfig() {{
                        otherRegionsNewSubscriberAvailability = false;
                    }};;
                    packageName = "ab";
                    phases = new org.openapis.openapi.models.shared.SubscriptionOfferPhase[]{{
                        add(new SubscriptionOfferPhase() {{
                            duration = "accusamus";
                            otherRegionsConfig = new OtherRegionsSubscriptionOfferPhaseConfig() {{
                                absoluteDiscounts = new OtherRegionsSubscriptionOfferPhasePrices() {{
                                    eurPrice = new Money() {{
                                        currencyCode = "saepe";
                                        nanos = 734814;
                                        units = "veniam";
                                    }};
                                    usdPrice = new Money() {{
                                        currencyCode = "eos";
                                        nanos = 970079;
                                        units = "earum";
                                    }};
                                }};
                                otherRegionsPrices = new OtherRegionsSubscriptionOfferPhasePrices() {{
                                    eurPrice = new Money() {{
                                        currencyCode = "reprehenderit";
                                        nanos = 506312;
                                        units = "nemo";
                                    }};
                                    usdPrice = new Money() {{
                                        currencyCode = "repellat";
                                        nanos = 789770;
                                        units = "sequi";
                                    }};
                                }};
                                relativeDiscount = 4671.19;
                            }};
                            recurrenceCount = 534908;
                            regionalConfigs = new org.openapis.openapi.models.shared.RegionalSubscriptionOfferPhaseConfig[]{{
                                add(new RegionalSubscriptionOfferPhaseConfig() {{
                                    absoluteDiscount = new Money() {{
                                        currencyCode = "labore";
                                        nanos = 828841;
                                        units = "aliquam";
                                    }};
                                    price = new Money() {{
                                        currencyCode = "quisquam";
                                        nanos = 591065;
                                        units = "laudantium";
                                    }};
                                    regionCode = "repudiandae";
                                    relativeDiscount = 96.83;
                                }}),
                            }};
                        }}),
                        add(new SubscriptionOfferPhase() {{
                            duration = "maxime";
                            otherRegionsConfig = new OtherRegionsSubscriptionOfferPhaseConfig() {{
                                absoluteDiscounts = new OtherRegionsSubscriptionOfferPhasePrices() {{
                                    eurPrice = new Money() {{
                                        currencyCode = "aspernatur";
                                        nanos = 723942;
                                        units = "expedita";
                                    }};
                                    usdPrice = new Money() {{
                                        currencyCode = "quas";
                                        nanos = 590858;
                                        units = "repudiandae";
                                    }};
                                }};
                                otherRegionsPrices = new OtherRegionsSubscriptionOfferPhasePrices() {{
                                    eurPrice = new Money() {{
                                        currencyCode = "rerum";
                                        nanos = 492361;
                                        units = "corporis";
                                    }};
                                    usdPrice = new Money() {{
                                        currencyCode = "vero";
                                        nanos = 629377;
                                        units = "repellendus";
                                    }};
                                }};
                                relativeDiscount = 4348.27;
                            }};
                            recurrenceCount = 213835;
                            regionalConfigs = new org.openapis.openapi.models.shared.RegionalSubscriptionOfferPhaseConfig[]{{
                                add(new RegionalSubscriptionOfferPhaseConfig() {{
                                    absoluteDiscount = new Money() {{
                                        currencyCode = "impedit";
                                        nanos = 415033;
                                        units = "aut";
                                    }};
                                    price = new Money() {{
                                        currencyCode = "voluptatem";
                                        nanos = 322829;
                                        units = "quae";
                                    }};
                                    regionCode = "amet";
                                    relativeDiscount = 8493.2;
                                }}),
                                add(new RegionalSubscriptionOfferPhaseConfig() {{
                                    absoluteDiscount = new Money() {{
                                        currencyCode = "praesentium";
                                        nanos = 695526;
                                        units = "cum";
                                    }};
                                    price = new Money() {{
                                        currencyCode = "amet";
                                        nanos = 97676;
                                        units = "dicta";
                                    }};
                                    regionCode = "laudantium";
                                    relativeDiscount = 407.1;
                                }}),
                            }};
                        }}),
                    }};
                    productId = "earum";
                    regionalConfigs = new org.openapis.openapi.models.shared.RegionalSubscriptionOfferConfig[]{{
                        add(new RegionalSubscriptionOfferConfig() {{
                            newSubscriberAvailability = false;
                            regionCode = "amet";
                        }}),
                        add(new RegionalSubscriptionOfferConfig() {{
                            newSubscriberAvailability = false;
                            regionCode = "provident";
                        }}),
                    }};
                    targeting = new SubscriptionOfferTargeting() {{
                        acquisitionRule = new AcquisitionTargetingRule() {{
                            scope = new TargetingRuleScope() {{
                                specificSubscriptionInApp = "dolorum";
                            }};;
                        }};;
                        upgradeRule = new UpgradeTargetingRule() {{
                            billingPeriodDuration = "necessitatibus";
                            oncePerUser = false;
                            scope = new TargetingRuleScope() {{
                                specificSubscriptionInApp = "provident";
                            }};;
                        }};;
                    }};;
                }};;
                accessToken = "repudiandae";
                alt = AltEnum.JSON;
                callback = "nemo";
                fields = "molestiae";
                key = "itaque";
                oauthToken = "facilis";
                offerId = "corrupti";
                prettyPrint = false;
                quotaUser = "aperiam";
                regionsVersionVersion = "sint";
                uploadType = "accusamus";
                uploadProtocol = "eos";
            }};            

            AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateResponse res = sdk.monetization.androidpublisherMonetizationSubscriptionsBasePlansOffersCreate(req, new AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateSecurity("totam", "dicta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.subscriptionOffer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherMonetizationSubscriptionsBasePlansOffersDeactivate

Deactivates a subscription offer. Once deactivated, existing subscribers will maintain their subscription, but the offer will become unavailable to new subscribers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateRequest;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateResponse;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateRequest req = new AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateRequest("voluptatem", "velit", "dolor", "sunt") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("occaecati", "atque");
                }};
                accessToken = "beatae";
                alt = AltEnum.PROTO;
                callback = "labore";
                fields = "minus";
                key = "esse";
                oauthToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "rerum";
                uploadProtocol = "ea";
            }};            

            AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateResponse res = sdk.monetization.androidpublisherMonetizationSubscriptionsBasePlansOffersDeactivate(req, new AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateSecurity("aperiam", "dignissimos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.subscriptionOffer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherMonetizationSubscriptionsBasePlansOffersDelete

Deletes a subscription offer. Can only be done for draft offers. This action is irreversible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteRequest;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteResponse;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteRequest req = new AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteRequest("repellat", "velit", "porro", "provident") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eligendi";
                alt = AltEnum.MEDIA;
                callback = "consectetur";
                fields = "soluta";
                key = "natus";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "amet";
                uploadProtocol = "tenetur";
            }};            

            AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteResponse res = sdk.monetization.androidpublisherMonetizationSubscriptionsBasePlansOffersDelete(req, new AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteSecurity("aspernatur", "quo") {{
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

## androidpublisherMonetizationSubscriptionsBasePlansOffersGet

Reads a single offer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetRequest;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetResponse;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetRequest req = new AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetRequest("itaque", "illum", "laborum", "dignissimos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "qui";
                alt = AltEnum.JSON;
                callback = "repellat";
                fields = "explicabo";
                key = "explicabo";
                oauthToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "non";
                uploadProtocol = "ab";
            }};            

            AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetResponse res = sdk.monetization.androidpublisherMonetizationSubscriptionsBasePlansOffersGet(req, new AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetSecurity("illo", "hic") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.subscriptionOffer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherMonetizationSubscriptionsBasePlansOffersList

Lists all offers under a given subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersListRequest;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersListResponse;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherMonetizationSubscriptionsBasePlansOffersListRequest req = new AndroidpublisherMonetizationSubscriptionsBasePlansOffersListRequest("deserunt", "delectus", "non") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "in";
                alt = AltEnum.MEDIA;
                callback = "labore";
                fields = "numquam";
                key = "repudiandae";
                oauthToken = "modi";
                pageSize = 450209L;
                pageToken = "explicabo";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "rem";
                uploadProtocol = "aperiam";
            }};            

            AndroidpublisherMonetizationSubscriptionsBasePlansOffersListResponse res = sdk.monetization.androidpublisherMonetizationSubscriptionsBasePlansOffersList(req, new AndroidpublisherMonetizationSubscriptionsBasePlansOffersListSecurity("odit", "deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listSubscriptionOffersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherMonetizationSubscriptionsBasePlansOffersPatch

Updates an existing subscription offer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchRequest;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchResponse;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchSecurity;
import org.openapis.openapi.models.shared.AcquisitionTargetingRule;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.OfferTag;
import org.openapis.openapi.models.shared.OtherRegionsSubscriptionOfferConfig;
import org.openapis.openapi.models.shared.OtherRegionsSubscriptionOfferPhaseConfig;
import org.openapis.openapi.models.shared.OtherRegionsSubscriptionOfferPhasePrices;
import org.openapis.openapi.models.shared.RegionalSubscriptionOfferConfig;
import org.openapis.openapi.models.shared.RegionalSubscriptionOfferPhaseConfig;
import org.openapis.openapi.models.shared.SubscriptionOfferInput;
import org.openapis.openapi.models.shared.SubscriptionOfferPhase;
import org.openapis.openapi.models.shared.SubscriptionOfferTargeting;
import org.openapis.openapi.models.shared.TargetingRuleScope;
import org.openapis.openapi.models.shared.UpgradeTargetingRule;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchRequest req = new AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchRequest("enim", "voluptate", "similique", "minima") {{
                dollarXgafv = XgafvEnum.TWO;
                subscriptionOfferInput = new SubscriptionOfferInput() {{
                    basePlanId = "magnam";
                    offerId = "sit";
                    offerTags = new org.openapis.openapi.models.shared.OfferTag[]{{
                        add(new OfferTag() {{
                            tag = "eum";
                        }}),
                        add(new OfferTag() {{
                            tag = "nesciunt";
                        }}),
                    }};
                    otherRegionsConfig = new OtherRegionsSubscriptionOfferConfig() {{
                        otherRegionsNewSubscriberAvailability = false;
                    }};;
                    packageName = "mollitia";
                    phases = new org.openapis.openapi.models.shared.SubscriptionOfferPhase[]{{
                        add(new SubscriptionOfferPhase() {{
                            duration = "fugiat";
                            otherRegionsConfig = new OtherRegionsSubscriptionOfferPhaseConfig() {{
                                absoluteDiscounts = new OtherRegionsSubscriptionOfferPhasePrices() {{
                                    eurPrice = new Money() {{
                                        currencyCode = "nostrum";
                                        nanos = 475325;
                                        units = "veniam";
                                    }};
                                    usdPrice = new Money() {{
                                        currencyCode = "reiciendis";
                                        nanos = 66207;
                                        units = "modi";
                                    }};
                                }};
                                otherRegionsPrices = new OtherRegionsSubscriptionOfferPhasePrices() {{
                                    eurPrice = new Money() {{
                                        currencyCode = "aut";
                                        nanos = 13508;
                                        units = "eveniet";
                                    }};
                                    usdPrice = new Money() {{
                                        currencyCode = "odio";
                                        nanos = 413758;
                                        units = "numquam";
                                    }};
                                }};
                                relativeDiscount = 6770.45;
                            }};
                            recurrenceCount = 823718;
                            regionalConfigs = new org.openapis.openapi.models.shared.RegionalSubscriptionOfferPhaseConfig[]{{
                                add(new RegionalSubscriptionOfferPhaseConfig() {{
                                    absoluteDiscount = new Money() {{
                                        currencyCode = "consectetur";
                                        nanos = 200637;
                                        units = "quaerat";
                                    }};
                                    price = new Money() {{
                                        currencyCode = "itaque";
                                        nanos = 791228;
                                        units = "sunt";
                                    }};
                                    regionCode = "distinctio";
                                    relativeDiscount = 4813.75;
                                }}),
                                add(new RegionalSubscriptionOfferPhaseConfig() {{
                                    absoluteDiscount = new Money() {{
                                        currencyCode = "quas";
                                        nanos = 91728;
                                        units = "facilis";
                                    }};
                                    price = new Money() {{
                                        currencyCode = "amet";
                                        nanos = 418637;
                                        units = "fuga";
                                    }};
                                    regionCode = "alias";
                                    relativeDiscount = 5264.13;
                                }}),
                            }};
                        }}),
                        add(new SubscriptionOfferPhase() {{
                            duration = "aut";
                            otherRegionsConfig = new OtherRegionsSubscriptionOfferPhaseConfig() {{
                                absoluteDiscounts = new OtherRegionsSubscriptionOfferPhasePrices() {{
                                    eurPrice = new Money() {{
                                        currencyCode = "quos";
                                        nanos = 511222;
                                        units = "repellendus";
                                    }};
                                    usdPrice = new Money() {{
                                        currencyCode = "veritatis";
                                        nanos = 60778;
                                        units = "eaque";
                                    }};
                                }};
                                otherRegionsPrices = new OtherRegionsSubscriptionOfferPhasePrices() {{
                                    eurPrice = new Money() {{
                                        currencyCode = "saepe";
                                        nanos = 965517;
                                        units = "mollitia";
                                    }};
                                    usdPrice = new Money() {{
                                        currencyCode = "nulla";
                                        nanos = 640907;
                                        units = "sed";
                                    }};
                                }};
                                relativeDiscount = 302.08;
                            }};
                            recurrenceCount = 664;
                            regionalConfigs = new org.openapis.openapi.models.shared.RegionalSubscriptionOfferPhaseConfig[]{{
                                add(new RegionalSubscriptionOfferPhaseConfig() {{
                                    absoluteDiscount = new Money() {{
                                        currencyCode = "hic";
                                        nanos = 27982;
                                        units = "incidunt";
                                    }};
                                    price = new Money() {{
                                        currencyCode = "qui";
                                        nanos = 185897;
                                        units = "necessitatibus";
                                    }};
                                    regionCode = "harum";
                                    relativeDiscount = 1267.27;
                                }}),
                                add(new RegionalSubscriptionOfferPhaseConfig() {{
                                    absoluteDiscount = new Money() {{
                                        currencyCode = "beatae";
                                        nanos = 397988;
                                        units = "modi";
                                    }};
                                    price = new Money() {{
                                        currencyCode = "optio";
                                        nanos = 975095;
                                        units = "molestias";
                                    }};
                                    regionCode = "officia";
                                    relativeDiscount = 7304.78;
                                }}),
                                add(new RegionalSubscriptionOfferPhaseConfig() {{
                                    absoluteDiscount = new Money() {{
                                        currencyCode = "totam";
                                        nanos = 192846;
                                        units = "aliquid";
                                    }};
                                    price = new Money() {{
                                        currencyCode = "ea";
                                        nanos = 774501;
                                        units = "ducimus";
                                    }};
                                    regionCode = "odit";
                                    relativeDiscount = 2436.23;
                                }}),
                                add(new RegionalSubscriptionOfferPhaseConfig() {{
                                    absoluteDiscount = new Money() {{
                                        currencyCode = "reiciendis";
                                        nanos = 997918;
                                        units = "nulla";
                                    }};
                                    price = new Money() {{
                                        currencyCode = "laborum";
                                        nanos = 617657;
                                        units = "accusamus";
                                    }};
                                    regionCode = "doloremque";
                                    relativeDiscount = 3929.67;
                                }}),
                            }};
                        }}),
                    }};
                    productId = "rerum";
                    regionalConfigs = new org.openapis.openapi.models.shared.RegionalSubscriptionOfferConfig[]{{
                        add(new RegionalSubscriptionOfferConfig() {{
                            newSubscriberAvailability = false;
                            regionCode = "voluptates";
                        }}),
                        add(new RegionalSubscriptionOfferConfig() {{
                            newSubscriberAvailability = false;
                            regionCode = "non";
                        }}),
                        add(new RegionalSubscriptionOfferConfig() {{
                            newSubscriberAvailability = false;
                            regionCode = "rem";
                        }}),
                        add(new RegionalSubscriptionOfferConfig() {{
                            newSubscriberAvailability = false;
                            regionCode = "quia";
                        }}),
                    }};
                    targeting = new SubscriptionOfferTargeting() {{
                        acquisitionRule = new AcquisitionTargetingRule() {{
                            scope = new TargetingRuleScope() {{
                                specificSubscriptionInApp = "ullam";
                            }};;
                        }};;
                        upgradeRule = new UpgradeTargetingRule() {{
                            billingPeriodDuration = "quisquam";
                            oncePerUser = false;
                            scope = new TargetingRuleScope() {{
                                specificSubscriptionInApp = "dicta";
                            }};;
                        }};;
                    }};;
                }};;
                accessToken = "voluptatibus";
                alt = AltEnum.PROTO;
                callback = "quae";
                fields = "officiis";
                key = "architecto";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "enim";
                regionsVersionVersion = "optio";
                updateMask = "rem";
                uploadType = "perferendis";
                uploadProtocol = "facilis";
            }};            

            AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchResponse res = sdk.monetization.androidpublisherMonetizationSubscriptionsBasePlansOffersPatch(req, new AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchSecurity("reiciendis", "a") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.subscriptionOffer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherMonetizationSubscriptionsCreate

Creates a new subscription. Newly added base plans will remain in draft state until activated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsCreateRequest;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsCreateResponse;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AutoRenewingBasePlanType;
import org.openapis.openapi.models.shared.AutoRenewingBasePlanTypeProrationModeEnum;
import org.openapis.openapi.models.shared.AutoRenewingBasePlanTypeResubscribeStateEnum;
import org.openapis.openapi.models.shared.BasePlanInput;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.OfferTag;
import org.openapis.openapi.models.shared.OtherRegionsBasePlanConfig;
import org.openapis.openapi.models.shared.PrepaidBasePlanType;
import org.openapis.openapi.models.shared.PrepaidBasePlanTypeTimeExtensionEnum;
import org.openapis.openapi.models.shared.RegionalBasePlanConfig;
import org.openapis.openapi.models.shared.RegionalTaxRateInfo;
import org.openapis.openapi.models.shared.RegionalTaxRateInfoStreamingTaxTypeEnum;
import org.openapis.openapi.models.shared.RegionalTaxRateInfoTaxTierEnum;
import org.openapis.openapi.models.shared.SubscriptionInput;
import org.openapis.openapi.models.shared.SubscriptionListing;
import org.openapis.openapi.models.shared.SubscriptionTaxAndComplianceSettings;
import org.openapis.openapi.models.shared.SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherMonetizationSubscriptionsCreateRequest req = new AndroidpublisherMonetizationSubscriptionsCreateRequest("iste") {{
                dollarXgafv = XgafvEnum.ONE;
                subscriptionInput = new SubscriptionInput() {{
                    basePlans = new org.openapis.openapi.models.shared.BasePlanInput[]{{
                        add(new BasePlanInput() {{
                            autoRenewingBasePlanType = new AutoRenewingBasePlanType() {{
                                billingPeriodDuration = "ullam";
                                gracePeriodDuration = "dolore";
                                legacyCompatible = false;
                                legacyCompatibleSubscriptionOfferId = "modi";
                                prorationMode = AutoRenewingBasePlanTypeProrationModeEnum.SUBSCRIPTION_PRORATION_MODE_CHARGE_FULL_PRICE_IMMEDIATELY;
                                resubscribeState = AutoRenewingBasePlanTypeResubscribeStateEnum.RESUBSCRIBE_STATE_INACTIVE;
                            }};
                            basePlanId = "modi";
                            offerTags = new org.openapis.openapi.models.shared.OfferTag[]{{
                                add(new OfferTag() {{
                                    tag = "assumenda";
                                }}),
                            }};
                            otherRegionsConfig = new OtherRegionsBasePlanConfig() {{
                                eurPrice = new Money() {{
                                    currencyCode = "vero";
                                    nanos = 985109;
                                    units = "impedit";
                                }};
                                newSubscriberAvailability = false;
                                usdPrice = new Money() {{
                                    currencyCode = "porro";
                                    nanos = 883819;
                                    units = "totam";
                                }};
                            }};
                            prepaidBasePlanType = new PrepaidBasePlanType() {{
                                billingPeriodDuration = "reiciendis";
                                timeExtension = PrepaidBasePlanTypeTimeExtensionEnum.TIME_EXTENSION_UNSPECIFIED;
                            }};
                            regionalConfigs = new org.openapis.openapi.models.shared.RegionalBasePlanConfig[]{{
                                add(new RegionalBasePlanConfig() {{
                                    newSubscriberAvailability = false;
                                    price = new Money() {{
                                        currencyCode = "nihil";
                                        nanos = 458412;
                                        units = "iure";
                                    }};
                                    regionCode = "odio";
                                }}),
                                add(new RegionalBasePlanConfig() {{
                                    newSubscriberAvailability = false;
                                    price = new Money() {{
                                        currencyCode = "nesciunt";
                                        nanos = 895513;
                                        units = "vel";
                                    }};
                                    regionCode = "neque";
                                }}),
                                add(new RegionalBasePlanConfig() {{
                                    newSubscriberAvailability = false;
                                    price = new Money() {{
                                        currencyCode = "corporis";
                                        nanos = 375350;
                                        units = "consequuntur";
                                    }};
                                    regionCode = "officia";
                                }}),
                            }};
                        }}),
                        add(new BasePlanInput() {{
                            autoRenewingBasePlanType = new AutoRenewingBasePlanType() {{
                                billingPeriodDuration = "reprehenderit";
                                gracePeriodDuration = "distinctio";
                                legacyCompatible = false;
                                legacyCompatibleSubscriptionOfferId = "eius";
                                prorationMode = AutoRenewingBasePlanTypeProrationModeEnum.SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED;
                                resubscribeState = AutoRenewingBasePlanTypeResubscribeStateEnum.RESUBSCRIBE_STATE_ACTIVE;
                            }};
                            basePlanId = "maiores";
                            offerTags = new org.openapis.openapi.models.shared.OfferTag[]{{
                                add(new OfferTag() {{
                                    tag = "veniam";
                                }}),
                            }};
                            otherRegionsConfig = new OtherRegionsBasePlanConfig() {{
                                eurPrice = new Money() {{
                                    currencyCode = "saepe";
                                    nanos = 206063;
                                    units = "facere";
                                }};
                                newSubscriberAvailability = false;
                                usdPrice = new Money() {{
                                    currencyCode = "aliquam";
                                    nanos = 552581;
                                    units = "doloribus";
                                }};
                            }};
                            prepaidBasePlanType = new PrepaidBasePlanType() {{
                                billingPeriodDuration = "fugiat";
                                timeExtension = PrepaidBasePlanTypeTimeExtensionEnum.TIME_EXTENSION_INACTIVE;
                            }};
                            regionalConfigs = new org.openapis.openapi.models.shared.RegionalBasePlanConfig[]{{
                                add(new RegionalBasePlanConfig() {{
                                    newSubscriberAvailability = false;
                                    price = new Money() {{
                                        currencyCode = "velit";
                                        nanos = 110522;
                                        units = "nesciunt";
                                    }};
                                    regionCode = "similique";
                                }}),
                                add(new RegionalBasePlanConfig() {{
                                    newSubscriberAvailability = false;
                                    price = new Money() {{
                                        currencyCode = "illo";
                                        nanos = 997995;
                                        units = "nemo";
                                    }};
                                    regionCode = "doloribus";
                                }}),
                                add(new RegionalBasePlanConfig() {{
                                    newSubscriberAvailability = false;
                                    price = new Money() {{
                                        currencyCode = "possimus";
                                        nanos = 603323;
                                        units = "incidunt";
                                    }};
                                    regionCode = "explicabo";
                                }}),
                                add(new RegionalBasePlanConfig() {{
                                    newSubscriberAvailability = false;
                                    price = new Money() {{
                                        currencyCode = "ipsam";
                                        nanos = 583193;
                                        units = "optio";
                                    }};
                                    regionCode = "alias";
                                }}),
                            }};
                        }}),
                        add(new BasePlanInput() {{
                            autoRenewingBasePlanType = new AutoRenewingBasePlanType() {{
                                billingPeriodDuration = "quidem";
                                gracePeriodDuration = "nesciunt";
                                legacyCompatible = false;
                                legacyCompatibleSubscriptionOfferId = "commodi";
                                prorationMode = AutoRenewingBasePlanTypeProrationModeEnum.SUBSCRIPTION_PRORATION_MODE_CHARGE_FULL_PRICE_IMMEDIATELY;
                                resubscribeState = AutoRenewingBasePlanTypeResubscribeStateEnum.RESUBSCRIBE_STATE_UNSPECIFIED;
                            }};
                            basePlanId = "veniam";
                            offerTags = new org.openapis.openapi.models.shared.OfferTag[]{{
                                add(new OfferTag() {{
                                    tag = "officia";
                                }}),
                                add(new OfferTag() {{
                                    tag = "sint";
                                }}),
                                add(new OfferTag() {{
                                    tag = "ut";
                                }}),
                                add(new OfferTag() {{
                                    tag = "numquam";
                                }}),
                            }};
                            otherRegionsConfig = new OtherRegionsBasePlanConfig() {{
                                eurPrice = new Money() {{
                                    currencyCode = "tenetur";
                                    nanos = 236790;
                                    units = "libero";
                                }};
                                newSubscriberAvailability = false;
                                usdPrice = new Money() {{
                                    currencyCode = "in";
                                    nanos = 329651;
                                    units = "ex";
                                }};
                            }};
                            prepaidBasePlanType = new PrepaidBasePlanType() {{
                                billingPeriodDuration = "minus";
                                timeExtension = PrepaidBasePlanTypeTimeExtensionEnum.TIME_EXTENSION_UNSPECIFIED;
                            }};
                            regionalConfigs = new org.openapis.openapi.models.shared.RegionalBasePlanConfig[]{{
                                add(new RegionalBasePlanConfig() {{
                                    newSubscriberAvailability = false;
                                    price = new Money() {{
                                        currencyCode = "hic";
                                        nanos = 392319;
                                        units = "quisquam";
                                    }};
                                    regionCode = "dolor";
                                }}),
                            }};
                        }}),
                    }};
                    listings = new org.openapis.openapi.models.shared.SubscriptionListing[]{{
                        add(new SubscriptionListing() {{
                            benefits = new String[]{{
                                add("minima"),
                                add("architecto"),
                                add("qui"),
                            }};
                            description = "aliquid";
                            languageCode = "magni";
                            title = "Mrs.";
                        }}),
                        add(new SubscriptionListing() {{
                            benefits = new String[]{{
                                add("praesentium"),
                            }};
                            description = "dolor";
                            languageCode = "exercitationem";
                            title = "Miss";
                        }}),
                    }};
                    packageName = "facilis";
                    productId = "impedit";
                    taxAndComplianceSettings = new SubscriptionTaxAndComplianceSettings() {{
                        eeaWithdrawalRightType = SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum.WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED;
                        taxRateInfoByRegionCode = new java.util.HashMap<String, org.openapis.openapi.models.shared.RegionalTaxRateInfo>() {{
                            put("culpa", new RegionalTaxRateInfo() {{
                                eligibleForStreamingServiceTaxRate = false;
                                streamingTaxType = RegionalTaxRateInfoStreamingTaxTypeEnum.STREAMING_TAX_TYPE_TELCO_VIDEO_RENTAL;
                                taxTier = RegionalTaxRateInfoTaxTierEnum.TAX_TIER_BOOKS1;
                            }});
                            put("deserunt", new RegionalTaxRateInfo() {{
                                eligibleForStreamingServiceTaxRate = false;
                                streamingTaxType = RegionalTaxRateInfoStreamingTaxTypeEnum.STREAMING_TAX_TYPE_TELCO_VIDEO_RENTAL;
                                taxTier = RegionalTaxRateInfoTaxTierEnum.TAX_TIER_BOOKS1;
                            }});
                        }};
                    }};;
                }};;
                accessToken = "quod";
                alt = AltEnum.PROTO;
                callback = "a";
                fields = "quisquam";
                key = "enim";
                oauthToken = "doloribus";
                prettyPrint = false;
                productId = "assumenda";
                quotaUser = "officiis";
                regionsVersionVersion = "architecto";
                uploadType = "alias";
                uploadProtocol = "culpa";
            }};            

            AndroidpublisherMonetizationSubscriptionsCreateResponse res = sdk.monetization.androidpublisherMonetizationSubscriptionsCreate(req, new AndroidpublisherMonetizationSubscriptionsCreateSecurity("ipsa", "nobis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.subscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherMonetizationSubscriptionsDelete

Deletes a subscription. A subscription can only be deleted if it has never had a base plan published.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsDeleteRequest;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsDeleteResponse;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherMonetizationSubscriptionsDeleteRequest req = new AndroidpublisherMonetizationSubscriptionsDeleteRequest("necessitatibus", "quia") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "debitis";
                fields = "ullam";
                key = "architecto";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "veritatis";
                uploadProtocol = "provident";
            }};            

            AndroidpublisherMonetizationSubscriptionsDeleteResponse res = sdk.monetization.androidpublisherMonetizationSubscriptionsDelete(req, new AndroidpublisherMonetizationSubscriptionsDeleteSecurity("cumque", "iure") {{
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

## androidpublisherMonetizationSubscriptionsGet

Reads a single subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsGetRequest;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsGetResponse;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherMonetizationSubscriptionsGetRequest req = new AndroidpublisherMonetizationSubscriptionsGetRequest("quibusdam", "quod") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "recusandae";
                alt = AltEnum.JSON;
                callback = "magnam";
                fields = "dignissimos";
                key = "laboriosam";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "odio";
                uploadType = "natus";
                uploadProtocol = "provident";
            }};            

            AndroidpublisherMonetizationSubscriptionsGetResponse res = sdk.monetization.androidpublisherMonetizationSubscriptionsGet(req, new AndroidpublisherMonetizationSubscriptionsGetSecurity("cum", "doloribus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.subscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherMonetizationSubscriptionsList

Lists all subscriptions under a given app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsListRequest;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsListResponse;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherMonetizationSubscriptionsListRequest req = new AndroidpublisherMonetizationSubscriptionsListRequest("facilis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "itaque";
                alt = AltEnum.MEDIA;
                callback = "unde";
                fields = "modi";
                key = "perspiciatis";
                oauthToken = "hic";
                pageSize = 736985L;
                pageToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "libero";
                showArchived = false;
                uploadType = "nam";
                uploadProtocol = "incidunt";
            }};            

            AndroidpublisherMonetizationSubscriptionsListResponse res = sdk.monetization.androidpublisherMonetizationSubscriptionsList(req, new AndroidpublisherMonetizationSubscriptionsListSecurity("recusandae", "quod") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listSubscriptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherMonetizationSubscriptionsPatch

Updates an existing subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsPatchRequest;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsPatchResponse;
import org.openapis.openapi.models.operations.AndroidpublisherMonetizationSubscriptionsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AutoRenewingBasePlanType;
import org.openapis.openapi.models.shared.AutoRenewingBasePlanTypeProrationModeEnum;
import org.openapis.openapi.models.shared.AutoRenewingBasePlanTypeResubscribeStateEnum;
import org.openapis.openapi.models.shared.BasePlanInput;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.OfferTag;
import org.openapis.openapi.models.shared.OtherRegionsBasePlanConfig;
import org.openapis.openapi.models.shared.PrepaidBasePlanType;
import org.openapis.openapi.models.shared.PrepaidBasePlanTypeTimeExtensionEnum;
import org.openapis.openapi.models.shared.RegionalBasePlanConfig;
import org.openapis.openapi.models.shared.RegionalTaxRateInfo;
import org.openapis.openapi.models.shared.RegionalTaxRateInfoStreamingTaxTypeEnum;
import org.openapis.openapi.models.shared.RegionalTaxRateInfoTaxTierEnum;
import org.openapis.openapi.models.shared.SubscriptionInput;
import org.openapis.openapi.models.shared.SubscriptionListing;
import org.openapis.openapi.models.shared.SubscriptionTaxAndComplianceSettings;
import org.openapis.openapi.models.shared.SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherMonetizationSubscriptionsPatchRequest req = new AndroidpublisherMonetizationSubscriptionsPatchRequest("id", "saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                subscriptionInput = new SubscriptionInput() {{
                    basePlans = new org.openapis.openapi.models.shared.BasePlanInput[]{{
                        add(new BasePlanInput() {{
                            autoRenewingBasePlanType = new AutoRenewingBasePlanType() {{
                                billingPeriodDuration = "nesciunt";
                                gracePeriodDuration = "illum";
                                legacyCompatible = false;
                                legacyCompatibleSubscriptionOfferId = "nemo";
                                prorationMode = AutoRenewingBasePlanTypeProrationModeEnum.SUBSCRIPTION_PRORATION_MODE_CHARGE_FULL_PRICE_IMMEDIATELY;
                                resubscribeState = AutoRenewingBasePlanTypeResubscribeStateEnum.RESUBSCRIBE_STATE_INACTIVE;
                            }};
                            basePlanId = "non";
                            offerTags = new org.openapis.openapi.models.shared.OfferTag[]{{
                                add(new OfferTag() {{
                                    tag = "assumenda";
                                }}),
                                add(new OfferTag() {{
                                    tag = "recusandae";
                                }}),
                                add(new OfferTag() {{
                                    tag = "distinctio";
                                }}),
                            }};
                            otherRegionsConfig = new OtherRegionsBasePlanConfig() {{
                                eurPrice = new Money() {{
                                    currencyCode = "pariatur";
                                    nanos = 323365;
                                    units = "facere";
                                }};
                                newSubscriberAvailability = false;
                                usdPrice = new Money() {{
                                    currencyCode = "laborum";
                                    nanos = 911451;
                                    units = "laborum";
                                }};
                            }};
                            prepaidBasePlanType = new PrepaidBasePlanType() {{
                                billingPeriodDuration = "incidunt";
                                timeExtension = PrepaidBasePlanTypeTimeExtensionEnum.TIME_EXTENSION_INACTIVE;
                            }};
                            regionalConfigs = new org.openapis.openapi.models.shared.RegionalBasePlanConfig[]{{
                                add(new RegionalBasePlanConfig() {{
                                    newSubscriberAvailability = false;
                                    price = new Money() {{
                                        currencyCode = "alias";
                                        nanos = 379894;
                                        units = "deserunt";
                                    }};
                                    regionCode = "molestias";
                                }}),
                                add(new RegionalBasePlanConfig() {{
                                    newSubscriberAvailability = false;
                                    price = new Money() {{
                                        currencyCode = "laborum";
                                        nanos = 668218;
                                        units = "occaecati";
                                    }};
                                    regionCode = "labore";
                                }}),
                            }};
                        }}),
                        add(new BasePlanInput() {{
                            autoRenewingBasePlanType = new AutoRenewingBasePlanType() {{
                                billingPeriodDuration = "quo";
                                gracePeriodDuration = "perferendis";
                                legacyCompatible = false;
                                legacyCompatibleSubscriptionOfferId = "fugit";
                                prorationMode = AutoRenewingBasePlanTypeProrationModeEnum.SUBSCRIPTION_PRORATION_MODE_CHARGE_ON_NEXT_BILLING_DATE;
                                resubscribeState = AutoRenewingBasePlanTypeResubscribeStateEnum.RESUBSCRIBE_STATE_UNSPECIFIED;
                            }};
                            basePlanId = "quaerat";
                            offerTags = new org.openapis.openapi.models.shared.OfferTag[]{{
                                add(new OfferTag() {{
                                    tag = "hic";
                                }}),
                                add(new OfferTag() {{
                                    tag = "nostrum";
                                }}),
                                add(new OfferTag() {{
                                    tag = "officiis";
                                }}),
                                add(new OfferTag() {{
                                    tag = "unde";
                                }}),
                            }};
                            otherRegionsConfig = new OtherRegionsBasePlanConfig() {{
                                eurPrice = new Money() {{
                                    currencyCode = "nulla";
                                    nanos = 621393;
                                    units = "mollitia";
                                }};
                                newSubscriberAvailability = false;
                                usdPrice = new Money() {{
                                    currencyCode = "magnam";
                                    nanos = 344289;
                                    units = "esse";
                                }};
                            }};
                            prepaidBasePlanType = new PrepaidBasePlanType() {{
                                billingPeriodDuration = "corrupti";
                                timeExtension = PrepaidBasePlanTypeTimeExtensionEnum.TIME_EXTENSION_INACTIVE;
                            }};
                            regionalConfigs = new org.openapis.openapi.models.shared.RegionalBasePlanConfig[]{{
                                add(new RegionalBasePlanConfig() {{
                                    newSubscriberAvailability = false;
                                    price = new Money() {{
                                        currencyCode = "impedit";
                                        nanos = 98610;
                                        units = "deserunt";
                                    }};
                                    regionCode = "quod";
                                }}),
                                add(new RegionalBasePlanConfig() {{
                                    newSubscriberAvailability = false;
                                    price = new Money() {{
                                        currencyCode = "laboriosam";
                                        nanos = 41179;
                                        units = "voluptatem";
                                    }};
                                    regionCode = "facere";
                                }}),
                                add(new RegionalBasePlanConfig() {{
                                    newSubscriberAvailability = false;
                                    price = new Money() {{
                                        currencyCode = "necessitatibus";
                                        nanos = 807564;
                                        units = "consequatur";
                                    }};
                                    regionCode = "eaque";
                                }}),
                                add(new RegionalBasePlanConfig() {{
                                    newSubscriberAvailability = false;
                                    price = new Money() {{
                                        currencyCode = "architecto";
                                        nanos = 627161;
                                        units = "porro";
                                    }};
                                    regionCode = "blanditiis";
                                }}),
                            }};
                        }}),
                        add(new BasePlanInput() {{
                            autoRenewingBasePlanType = new AutoRenewingBasePlanType() {{
                                billingPeriodDuration = "quae";
                                gracePeriodDuration = "magni";
                                legacyCompatible = false;
                                legacyCompatibleSubscriptionOfferId = "officiis";
                                prorationMode = AutoRenewingBasePlanTypeProrationModeEnum.SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED;
                                resubscribeState = AutoRenewingBasePlanTypeResubscribeStateEnum.RESUBSCRIBE_STATE_INACTIVE;
                            }};
                            basePlanId = "impedit";
                            offerTags = new org.openapis.openapi.models.shared.OfferTag[]{{
                                add(new OfferTag() {{
                                    tag = "excepturi";
                                }}),
                            }};
                            otherRegionsConfig = new OtherRegionsBasePlanConfig() {{
                                eurPrice = new Money() {{
                                    currencyCode = "a";
                                    nanos = 983000;
                                    units = "laudantium";
                                }};
                                newSubscriberAvailability = false;
                                usdPrice = new Money() {{
                                    currencyCode = "maiores";
                                    nanos = 691;
                                    units = "asperiores";
                                }};
                            }};
                            prepaidBasePlanType = new PrepaidBasePlanType() {{
                                billingPeriodDuration = "rem";
                                timeExtension = PrepaidBasePlanTypeTimeExtensionEnum.TIME_EXTENSION_UNSPECIFIED;
                            }};
                            regionalConfigs = new org.openapis.openapi.models.shared.RegionalBasePlanConfig[]{{
                                add(new RegionalBasePlanConfig() {{
                                    newSubscriberAvailability = false;
                                    price = new Money() {{
                                        currencyCode = "earum";
                                        nanos = 985360;
                                        units = "velit";
                                    }};
                                    regionCode = "eius";
                                }}),
                                add(new RegionalBasePlanConfig() {{
                                    newSubscriberAvailability = false;
                                    price = new Money() {{
                                        currencyCode = "esse";
                                        nanos = 446547;
                                        units = "eligendi";
                                    }};
                                    regionCode = "quasi";
                                }}),
                            }};
                        }}),
                        add(new BasePlanInput() {{
                            autoRenewingBasePlanType = new AutoRenewingBasePlanType() {{
                                billingPeriodDuration = "neque";
                                gracePeriodDuration = "vero";
                                legacyCompatible = false;
                                legacyCompatibleSubscriptionOfferId = "excepturi";
                                prorationMode = AutoRenewingBasePlanTypeProrationModeEnum.SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED;
                                resubscribeState = AutoRenewingBasePlanTypeResubscribeStateEnum.RESUBSCRIBE_STATE_UNSPECIFIED;
                            }};
                            basePlanId = "impedit";
                            offerTags = new org.openapis.openapi.models.shared.OfferTag[]{{
                                add(new OfferTag() {{
                                    tag = "incidunt";
                                }}),
                            }};
                            otherRegionsConfig = new OtherRegionsBasePlanConfig() {{
                                eurPrice = new Money() {{
                                    currencyCode = "dicta";
                                    nanos = 139133;
                                    units = "corporis";
                                }};
                                newSubscriberAvailability = false;
                                usdPrice = new Money() {{
                                    currencyCode = "rerum";
                                    nanos = 4654;
                                    units = "error";
                                }};
                            }};
                            prepaidBasePlanType = new PrepaidBasePlanType() {{
                                billingPeriodDuration = "vel";
                                timeExtension = PrepaidBasePlanTypeTimeExtensionEnum.TIME_EXTENSION_UNSPECIFIED;
                            }};
                            regionalConfigs = new org.openapis.openapi.models.shared.RegionalBasePlanConfig[]{{
                                add(new RegionalBasePlanConfig() {{
                                    newSubscriberAvailability = false;
                                    price = new Money() {{
                                        currencyCode = "laboriosam";
                                        nanos = 401688;
                                        units = "quas";
                                    }};
                                    regionCode = "veritatis";
                                }}),
                                add(new RegionalBasePlanConfig() {{
                                    newSubscriberAvailability = false;
                                    price = new Money() {{
                                        currencyCode = "ullam";
                                        nanos = 62688;
                                        units = "similique";
                                    }};
                                    regionCode = "incidunt";
                                }}),
                                add(new RegionalBasePlanConfig() {{
                                    newSubscriberAvailability = false;
                                    price = new Money() {{
                                        currencyCode = "quam";
                                        nanos = 169312;
                                        units = "deserunt";
                                    }};
                                    regionCode = "delectus";
                                }}),
                            }};
                        }}),
                    }};
                    listings = new org.openapis.openapi.models.shared.SubscriptionListing[]{{
                        add(new SubscriptionListing() {{
                            benefits = new String[]{{
                                add("nesciunt"),
                            }};
                            description = "maxime";
                            languageCode = "quis";
                            title = "Ms.";
                        }}),
                        add(new SubscriptionListing() {{
                            benefits = new String[]{{
                                add("excepturi"),
                                add("maiores"),
                            }};
                            description = "laudantium";
                            languageCode = "velit";
                            title = "Dr.";
                        }}),
                        add(new SubscriptionListing() {{
                            benefits = new String[]{{
                                add("nemo"),
                            }};
                            description = "ipsa";
                            languageCode = "quisquam";
                            title = "Dr.";
                        }}),
                    }};
                    packageName = "quas";
                    productId = "molestiae";
                    taxAndComplianceSettings = new SubscriptionTaxAndComplianceSettings() {{
                        eeaWithdrawalRightType = SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum.WITHDRAWAL_RIGHT_DIGITAL_CONTENT;
                        taxRateInfoByRegionCode = new java.util.HashMap<String, org.openapis.openapi.models.shared.RegionalTaxRateInfo>() {{
                            put("a", new RegionalTaxRateInfo() {{
                                eligibleForStreamingServiceTaxRate = false;
                                streamingTaxType = RegionalTaxRateInfoStreamingTaxTypeEnum.STREAMING_TAX_TYPE_TELCO_AUDIO_SALES;
                                taxTier = RegionalTaxRateInfoTaxTierEnum.TAX_TIER_NEWS2;
                            }});
                            put("accusantium", new RegionalTaxRateInfo() {{
                                eligibleForStreamingServiceTaxRate = false;
                                streamingTaxType = RegionalTaxRateInfoStreamingTaxTypeEnum.STREAMING_TAX_TYPE_UNSPECIFIED;
                                taxTier = RegionalTaxRateInfoTaxTierEnum.TAX_TIER_MUSIC_OR_AUDIO1;
                            }});
                            put("commodi", new RegionalTaxRateInfo() {{
                                eligibleForStreamingServiceTaxRate = false;
                                streamingTaxType = RegionalTaxRateInfoStreamingTaxTypeEnum.STREAMING_TAX_TYPE_TELCO_AUDIO_MULTI_CHANNEL;
                                taxTier = RegionalTaxRateInfoTaxTierEnum.TAX_TIER_MUSIC_OR_AUDIO1;
                            }});
                            put("tempore", new RegionalTaxRateInfo() {{
                                eligibleForStreamingServiceTaxRate = false;
                                streamingTaxType = RegionalTaxRateInfoStreamingTaxTypeEnum.STREAMING_TAX_TYPE_TELCO_AUDIO_RENTAL;
                                taxTier = RegionalTaxRateInfoTaxTierEnum.TAX_TIER_BOOKS1;
                            }});
                        }};
                    }};;
                }};;
                accessToken = "voluptates";
                alt = AltEnum.JSON;
                callback = "eius";
                fields = "sequi";
                key = "eligendi";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "esse";
                regionsVersionVersion = "blanditiis";
                updateMask = "sint";
                uploadType = "repellat";
                uploadProtocol = "a";
            }};            

            AndroidpublisherMonetizationSubscriptionsPatchResponse res = sdk.monetization.androidpublisherMonetizationSubscriptionsPatch(req, new AndroidpublisherMonetizationSubscriptionsPatchSecurity("animi", "maiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.subscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
