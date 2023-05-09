# marketplacedeals

### Available Operations

* [adexchangebuyerMarketplacedealsDelete](#adexchangebuyermarketplacedealsdelete) - Delete the specified deals from the proposal
* [adexchangebuyerMarketplacedealsInsert](#adexchangebuyermarketplacedealsinsert) - Add new deals for the specified proposal
* [adexchangebuyerMarketplacedealsList](#adexchangebuyermarketplacedealslist) - List all the deals for a given proposal
* [adexchangebuyerMarketplacedealsUpdate](#adexchangebuyermarketplacedealsupdate) - Replaces all the deals in the proposal with the passed in deals

## adexchangebuyerMarketplacedealsDelete

Delete the specified deals from the proposal

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerMarketplacedealsDeleteRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerMarketplacedealsDeleteResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerMarketplacedealsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DeleteOrderDealsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerMarketplacedealsDeleteRequest req = new AdexchangebuyerMarketplacedealsDeleteRequest("ullam") {{
                deleteOrderDealsRequest = new DeleteOrderDealsRequest() {{
                    dealIds = new String[]{{
                        add("hic"),
                        add("voluptatem"),
                        add("cumque"),
                    }};
                    proposalRevisionNumber = "soluta";
                    updateAction = "nobis";
                }};;
                alt = AltEnum.JSON;
                fields = "et";
                key = "saepe";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "veritatis";
                userIp = "nobis";
            }};            

            AdexchangebuyerMarketplacedealsDeleteResponse res = sdk.marketplacedeals.adexchangebuyerMarketplacedealsDelete(req, new AdexchangebuyerMarketplacedealsDeleteSecurity("quos", "tempore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.deleteOrderDealsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyerMarketplacedealsInsert

Add new deals for the specified proposal

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerMarketplacedealsInsertRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerMarketplacedealsInsertResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerMarketplacedealsInsertSecurity;
import org.openapis.openapi.models.shared.AddOrderDealsRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Buyer;
import org.openapis.openapi.models.shared.ContactInformation;
import org.openapis.openapi.models.shared.DealServingMetadata;
import org.openapis.openapi.models.shared.DealServingMetadataDealPauseStatus;
import org.openapis.openapi.models.shared.DealTerms;
import org.openapis.openapi.models.shared.DealTermsGuaranteedFixedPriceTerms;
import org.openapis.openapi.models.shared.DealTermsGuaranteedFixedPriceTermsBillingInfo;
import org.openapis.openapi.models.shared.DealTermsNonGuaranteedAuctionTerms;
import org.openapis.openapi.models.shared.DealTermsNonGuaranteedFixedPriceTerms;
import org.openapis.openapi.models.shared.DealTermsRubiconNonGuaranteedTerms;
import org.openapis.openapi.models.shared.DeliveryControl;
import org.openapis.openapi.models.shared.DeliveryControlFrequencyCap;
import org.openapis.openapi.models.shared.MarketplaceDeal;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.PricePerBuyer;
import org.openapis.openapi.models.shared.PrivateData;
import org.openapis.openapi.models.shared.SharedTargeting;
import org.openapis.openapi.models.shared.TargetingValue;
import org.openapis.openapi.models.shared.TargetingValueCreativeSize;
import org.openapis.openapi.models.shared.TargetingValueDayPartTargeting;
import org.openapis.openapi.models.shared.TargetingValueDayPartTargetingDayPart;
import org.openapis.openapi.models.shared.TargetingValueDemogAgeCriteria;
import org.openapis.openapi.models.shared.TargetingValueDemogGenderCriteria;
import org.openapis.openapi.models.shared.TargetingValueRequestPlatformTargeting;
import org.openapis.openapi.models.shared.TargetingValueSize;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerMarketplacedealsInsertRequest req = new AdexchangebuyerMarketplacedealsInsertRequest("cupiditate") {{
                addOrderDealsRequest = new AddOrderDealsRequest() {{
                    deals = new org.openapis.openapi.models.shared.MarketplaceDeal[]{{
                        add(new MarketplaceDeal() {{
                            buyerPrivateData = new PrivateData() {{
                                referenceId = "delectus";
                                referencePayload = "dolorem";
                            }};
                            creationTimeMs = "dolore";
                            creativePreApprovalPolicy = "labore";
                            creativeSafeFrameCompatibility = "adipisci";
                            dealId = "dolorum";
                            dealServingMetadata = new DealServingMetadata() {{
                                alcoholAdsAllowed = false;
                                dealPauseStatus = new DealServingMetadataDealPauseStatus() {{
                                    buyerPauseReason = "architecto";
                                    firstPausedBy = "quae";
                                    hasBuyerPaused = false;
                                    hasSellerPaused = false;
                                    sellerPauseReason = "aut";
                                }};
                            }};
                            deliveryControl = new DeliveryControl() {{
                                creativeBlockingLevel = "quas";
                                deliveryRateType = "itaque";
                                frequencyCaps = new org.openapis.openapi.models.shared.DeliveryControlFrequencyCap[]{{
                                    add(new DeliveryControlFrequencyCap() {{
                                        maxImpressions = 669917;
                                        numTimeUnits = 833038;
                                        timeUnitType = "porro";
                                    }}),
                                }};
                            }};
                            externalDealId = "doloribus";
                            flightEndTimeMs = "ut";
                            flightStartTimeMs = "facilis";
                            inventoryDescription = "cupiditate";
                            isRfpTemplate = false;
                            isSetupComplete = false;
                            kind = "qui";
                            lastUpdateTimeMs = "quae";
                            makegoodRequestedReason = "laudantium";
                            name = "Toni Wolff";
                            productId = "omnis";
                            productRevisionNumber = "quis";
                            programmaticCreativeSource = "ipsum";
                            proposalId = "delectus";
                            sellerContacts = new org.openapis.openapi.models.shared.ContactInformation[]{{
                                add(new ContactInformation() {{
                                    email = "Shana_Wiegand@gmail.com";
                                    name = "Jermaine Kuhic";
                                }}),
                                add(new ContactInformation() {{
                                    email = "Jessica_Greenholt19@hotmail.com";
                                    name = "Edmund Ankunding";
                                }}),
                            }};
                            sharedTargetings = new org.openapis.openapi.models.shared.SharedTargeting[]{{
                                add(new SharedTargeting() {{
                                    exclusions = new org.openapis.openapi.models.shared.TargetingValue[]{{
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new TargetingValueCreativeSize() {{
                                                allowedFormats = new String[]{{
                                                    add("maiores"),
                                                    add("doloribus"),
                                                    add("iusto"),
                                                    add("eligendi"),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.TargetingValueSize[]{{
                                                    add(new TargetingValueSize() {{
                                                        height = 4048;
                                                        width = 639473;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 269479;
                                                        width = 368584;
                                                    }}),
                                                }};
                                                creativeSizeType = "ea";
                                                nativeTemplate = "aspernatur";
                                                size = new TargetingValueSize() {{
                                                    height = 428224;
                                                    width = 822118;
                                                }};
                                                skippableAdType = "magnam";
                                            }};
                                            dayPartTargetingValue = new TargetingValueDayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.TargetingValueDayPartTargetingDayPart[]{{
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "ex";
                                                        endHour = 511319;
                                                        endMinute = 120657;
                                                        startHour = 224317;
                                                        startMinute = 980700;
                                                    }}),
                                                }};
                                                timeZoneType = "quasi";
                                            }};
                                            demogAgeCriteriaValue = new TargetingValueDemogAgeCriteria() {{
                                                demogAgeCriteriaIds = new String[]{{
                                                    add("nulla"),
                                                    add("excepturi"),
                                                }};
                                            }};
                                            demogGenderCriteriaValue = new TargetingValueDemogGenderCriteria() {{
                                                demogGenderCriteriaIds = new String[]{{
                                                    add("nostrum"),
                                                    add("sapiente"),
                                                    add("quisquam"),
                                                    add("saepe"),
                                                }};
                                            }};
                                            longValue = "ea";
                                            requestPlatformTargetingValue = new TargetingValueRequestPlatformTargeting() {{
                                                requestPlatforms = new String[]{{
                                                    add("corporis"),
                                                    add("veniam"),
                                                    add("aliquid"),
                                                    add("inventore"),
                                                }};
                                            }};
                                            stringValue = "magnam";
                                        }}),
                                    }};
                                    inclusions = new org.openapis.openapi.models.shared.TargetingValue[]{{
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new TargetingValueCreativeSize() {{
                                                allowedFormats = new String[]{{
                                                    add("consectetur"),
                                                    add("recusandae"),
                                                    add("aspernatur"),
                                                    add("minima"),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.TargetingValueSize[]{{
                                                    add(new TargetingValueSize() {{
                                                        height = 952871;
                                                        width = 725595;
                                                    }}),
                                                }};
                                                creativeSizeType = "aut";
                                                nativeTemplate = "aut";
                                                size = new TargetingValueSize() {{
                                                    height = 533466;
                                                    width = 770581;
                                                }};
                                                skippableAdType = "aliquam";
                                            }};
                                            dayPartTargetingValue = new TargetingValueDayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.TargetingValueDayPartTargetingDayPart[]{{
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "accusamus";
                                                        endHour = 79522;
                                                        endMinute = 250622;
                                                        startHour = 89603;
                                                        startMinute = 677412;
                                                    }}),
                                                }};
                                                timeZoneType = "laborum";
                                            }};
                                            demogAgeCriteriaValue = new TargetingValueDemogAgeCriteria() {{
                                                demogAgeCriteriaIds = new String[]{{
                                                    add("velit"),
                                                    add("eum"),
                                                    add("autem"),
                                                    add("nobis"),
                                                }};
                                            }};
                                            demogGenderCriteriaValue = new TargetingValueDemogGenderCriteria() {{
                                                demogGenderCriteriaIds = new String[]{{
                                                    add("assumenda"),
                                                    add("nulla"),
                                                    add("voluptas"),
                                                }};
                                            }};
                                            longValue = "libero";
                                            requestPlatformTargetingValue = new TargetingValueRequestPlatformTargeting() {{
                                                requestPlatforms = new String[]{{
                                                    add("tempora"),
                                                }};
                                            }};
                                            stringValue = "numquam";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new TargetingValueCreativeSize() {{
                                                allowedFormats = new String[]{{
                                                    add("provident"),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.TargetingValueSize[]{{
                                                    add(new TargetingValueSize() {{
                                                        height = 476477;
                                                        width = 301598;
                                                    }}),
                                                }};
                                                creativeSizeType = "odio";
                                                nativeTemplate = "eius";
                                                size = new TargetingValueSize() {{
                                                    height = 458515;
                                                    width = 456141;
                                                }};
                                                skippableAdType = "rem";
                                            }};
                                            dayPartTargetingValue = new TargetingValueDayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.TargetingValueDayPartTargetingDayPart[]{{
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "reprehenderit";
                                                        endHour = 695626;
                                                        endMinute = 852635;
                                                        startHour = 283519;
                                                        startMinute = 433439;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "suscipit";
                                                        endHour = 826871;
                                                        endMinute = 181151;
                                                        startHour = 509342;
                                                        startMinute = 788546;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "veritatis";
                                                        endHour = 56848;
                                                        endMinute = 660040;
                                                        startHour = 696997;
                                                        startMinute = 206594;
                                                    }}),
                                                }};
                                                timeZoneType = "quo";
                                            }};
                                            demogAgeCriteriaValue = new TargetingValueDemogAgeCriteria() {{
                                                demogAgeCriteriaIds = new String[]{{
                                                    add("quo"),
                                                    add("fuga"),
                                                    add("eius"),
                                                    add("eos"),
                                                }};
                                            }};
                                            demogGenderCriteriaValue = new TargetingValueDemogGenderCriteria() {{
                                                demogGenderCriteriaIds = new String[]{{
                                                    add("ab"),
                                                    add("cupiditate"),
                                                }};
                                            }};
                                            longValue = "consequatur";
                                            requestPlatformTargetingValue = new TargetingValueRequestPlatformTargeting() {{
                                                requestPlatforms = new String[]{{
                                                    add("debitis"),
                                                    add("ipsam"),
                                                }};
                                            }};
                                            stringValue = "aspernatur";
                                        }}),
                                    }};
                                    key = "sequi";
                                }}),
                                add(new SharedTargeting() {{
                                    exclusions = new org.openapis.openapi.models.shared.TargetingValue[]{{
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new TargetingValueCreativeSize() {{
                                                allowedFormats = new String[]{{
                                                    add("recusandae"),
                                                    add("aperiam"),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.TargetingValueSize[]{{
                                                    add(new TargetingValueSize() {{
                                                        height = 799796;
                                                        width = 490819;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 76956;
                                                        width = 469498;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 518835;
                                                        width = 882710;
                                                    }}),
                                                }};
                                                creativeSizeType = "aliquam";
                                                nativeTemplate = "odio";
                                                size = new TargetingValueSize() {{
                                                    height = 577543;
                                                    width = 414567;
                                                }};
                                                skippableAdType = "sapiente";
                                            }};
                                            dayPartTargetingValue = new TargetingValueDayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.TargetingValueDayPartTargetingDayPart[]{{
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "deserunt";
                                                        endHour = 475289;
                                                        endMinute = 35362;
                                                        startHour = 783648;
                                                        startMinute = 430402;
                                                    }}),
                                                }};
                                                timeZoneType = "quas";
                                            }};
                                            demogAgeCriteriaValue = new TargetingValueDemogAgeCriteria() {{
                                                demogAgeCriteriaIds = new String[]{{
                                                    add("consequuntur"),
                                                    add("deleniti"),
                                                    add("fugit"),
                                                }};
                                            }};
                                            demogGenderCriteriaValue = new TargetingValueDemogGenderCriteria() {{
                                                demogGenderCriteriaIds = new String[]{{
                                                    add("mollitia"),
                                                    add("incidunt"),
                                                    add("atque"),
                                                }};
                                            }};
                                            longValue = "explicabo";
                                            requestPlatformTargetingValue = new TargetingValueRequestPlatformTargeting() {{
                                                requestPlatforms = new String[]{{
                                                    add("nisi"),
                                                    add("fugit"),
                                                }};
                                            }};
                                            stringValue = "sapiente";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new TargetingValueCreativeSize() {{
                                                allowedFormats = new String[]{{
                                                    add("ratione"),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.TargetingValueSize[]{{
                                                    add(new TargetingValueSize() {{
                                                        height = 903984;
                                                        width = 578922;
                                                    }}),
                                                }};
                                                creativeSizeType = "atque";
                                                nativeTemplate = "et";
                                                size = new TargetingValueSize() {{
                                                    height = 456911;
                                                    width = 910545;
                                                }};
                                                skippableAdType = "accusamus";
                                            }};
                                            dayPartTargetingValue = new TargetingValueDayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.TargetingValueDayPartTargetingDayPart[]{{
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "esse";
                                                        endHour = 800379;
                                                        endMinute = 724168;
                                                        startHour = 877131;
                                                        startMinute = 399025;
                                                    }}),
                                                }};
                                                timeZoneType = "quasi";
                                            }};
                                            demogAgeCriteriaValue = new TargetingValueDemogAgeCriteria() {{
                                                demogAgeCriteriaIds = new String[]{{
                                                    add("vel"),
                                                    add("harum"),
                                                    add("molestiae"),
                                                    add("rerum"),
                                                }};
                                            }};
                                            demogGenderCriteriaValue = new TargetingValueDemogGenderCriteria() {{
                                                demogGenderCriteriaIds = new String[]{{
                                                    add("minima"),
                                                    add("distinctio"),
                                                    add("eligendi"),
                                                }};
                                            }};
                                            longValue = "sit";
                                            requestPlatformTargetingValue = new TargetingValueRequestPlatformTargeting() {{
                                                requestPlatforms = new String[]{{
                                                    add("tempore"),
                                                    add("adipisci"),
                                                    add("cumque"),
                                                }};
                                            }};
                                            stringValue = "consequuntur";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new TargetingValueCreativeSize() {{
                                                allowedFormats = new String[]{{
                                                    add("minus"),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.TargetingValueSize[]{{
                                                    add(new TargetingValueSize() {{
                                                        height = 959167;
                                                        width = 232865;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 458139;
                                                        width = 503427;
                                                    }}),
                                                }};
                                                creativeSizeType = "provident";
                                                nativeTemplate = "a";
                                                size = new TargetingValueSize() {{
                                                    height = 857723;
                                                    width = 557811;
                                                }};
                                                skippableAdType = "esse";
                                            }};
                                            dayPartTargetingValue = new TargetingValueDayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.TargetingValueDayPartTargetingDayPart[]{{
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "a";
                                                        endHour = 621679;
                                                        endMinute = 575751;
                                                        startHour = 863023;
                                                        startMinute = 820767;
                                                    }}),
                                                }};
                                                timeZoneType = "quia";
                                            }};
                                            demogAgeCriteriaValue = new TargetingValueDemogAgeCriteria() {{
                                                demogAgeCriteriaIds = new String[]{{
                                                    add("asperiores"),
                                                    add("facere"),
                                                    add("veritatis"),
                                                    add("consequuntur"),
                                                }};
                                            }};
                                            demogGenderCriteriaValue = new TargetingValueDemogGenderCriteria() {{
                                                demogGenderCriteriaIds = new String[]{{
                                                    add("similique"),
                                                }};
                                            }};
                                            longValue = "culpa";
                                            requestPlatformTargetingValue = new TargetingValueRequestPlatformTargeting() {{
                                                requestPlatforms = new String[]{{
                                                    add("tenetur"),
                                                    add("quae"),
                                                }};
                                            }};
                                            stringValue = "earum";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new TargetingValueCreativeSize() {{
                                                allowedFormats = new String[]{{
                                                    add("in"),
                                                    add("eius"),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.TargetingValueSize[]{{
                                                    add(new TargetingValueSize() {{
                                                        height = 849039;
                                                        width = 742238;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 33304;
                                                        width = 306986;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 958983;
                                                        width = 119771;
                                                    }}),
                                                }};
                                                creativeSizeType = "ullam";
                                                nativeTemplate = "reprehenderit";
                                                size = new TargetingValueSize() {{
                                                    height = 356707;
                                                    width = 391774;
                                                }};
                                                skippableAdType = "aut";
                                            }};
                                            dayPartTargetingValue = new TargetingValueDayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.TargetingValueDayPartTargetingDayPart[]{{
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "qui";
                                                        endHour = 845358;
                                                        endMinute = 401259;
                                                        startHour = 536275;
                                                        startMinute = 929292;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "dolorum";
                                                        endHour = 99615;
                                                        endMinute = 609178;
                                                        startHour = 945302;
                                                        startMinute = 98478;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "at";
                                                        endHour = 92027;
                                                        endMinute = 454162;
                                                        startHour = 55965;
                                                        startMinute = 326701;
                                                    }}),
                                                }};
                                                timeZoneType = "veritatis";
                                            }};
                                            demogAgeCriteriaValue = new TargetingValueDemogAgeCriteria() {{
                                                demogAgeCriteriaIds = new String[]{{
                                                    add("adipisci"),
                                                }};
                                            }};
                                            demogGenderCriteriaValue = new TargetingValueDemogGenderCriteria() {{
                                                demogGenderCriteriaIds = new String[]{{
                                                    add("temporibus"),
                                                    add("accusantium"),
                                                    add("rem"),
                                                }};
                                            }};
                                            longValue = "aut";
                                            requestPlatformTargetingValue = new TargetingValueRequestPlatformTargeting() {{
                                                requestPlatforms = new String[]{{
                                                    add("eum"),
                                                    add("mollitia"),
                                                    add("ab"),
                                                }};
                                            }};
                                            stringValue = "corrupti";
                                        }}),
                                    }};
                                    inclusions = new org.openapis.openapi.models.shared.TargetingValue[]{{
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new TargetingValueCreativeSize() {{
                                                allowedFormats = new String[]{{
                                                    add("dolor"),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.TargetingValueSize[]{{
                                                    add(new TargetingValueSize() {{
                                                        height = 253191;
                                                        width = 771089;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 131055;
                                                        width = 376226;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 12036;
                                                        width = 491025;
                                                    }}),
                                                }};
                                                creativeSizeType = "dicta";
                                                nativeTemplate = "maiores";
                                                size = new TargetingValueSize() {{
                                                    height = 618480;
                                                    width = 244651;
                                                }};
                                                skippableAdType = "voluptatibus";
                                            }};
                                            dayPartTargetingValue = new TargetingValueDayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.TargetingValueDayPartTargetingDayPart[]{{
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "asperiores";
                                                        endHour = 45659;
                                                        endMinute = 409054;
                                                        startHour = 310067;
                                                        startMinute = 162954;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "repellendus";
                                                        endHour = 638762;
                                                        endMinute = 807023;
                                                        startHour = 490305;
                                                        startMinute = 640024;
                                                    }}),
                                                }};
                                                timeZoneType = "asperiores";
                                            }};
                                            demogAgeCriteriaValue = new TargetingValueDemogAgeCriteria() {{
                                                demogAgeCriteriaIds = new String[]{{
                                                    add("quae"),
                                                    add("quaerat"),
                                                }};
                                            }};
                                            demogGenderCriteriaValue = new TargetingValueDemogGenderCriteria() {{
                                                demogGenderCriteriaIds = new String[]{{
                                                    add("quod"),
                                                    add("labore"),
                                                    add("ab"),
                                                    add("adipisci"),
                                                }};
                                            }};
                                            longValue = "fuga";
                                            requestPlatformTargetingValue = new TargetingValueRequestPlatformTargeting() {{
                                                requestPlatforms = new String[]{{
                                                    add("suscipit"),
                                                    add("velit"),
                                                    add("culpa"),
                                                }};
                                            }};
                                            stringValue = "est";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new TargetingValueCreativeSize() {{
                                                allowedFormats = new String[]{{
                                                    add("totam"),
                                                    add("fugiat"),
                                                    add("vel"),
                                                    add("ducimus"),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.TargetingValueSize[]{{
                                                    add(new TargetingValueSize() {{
                                                        height = 427834;
                                                        width = 287051;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 822560;
                                                        width = 706575;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 738227;
                                                        width = 414857;
                                                    }}),
                                                }};
                                                creativeSizeType = "in";
                                                nativeTemplate = "corporis";
                                                size = new TargetingValueSize() {{
                                                    height = 968904;
                                                    width = 828657;
                                                }};
                                                skippableAdType = "nemo";
                                            }};
                                            dayPartTargetingValue = new TargetingValueDayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.TargetingValueDayPartTargetingDayPart[]{{
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "aliquid";
                                                        endHour = 46007;
                                                        endMinute = 738683;
                                                        startHour = 232627;
                                                        startMinute = 449083;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "exercitationem";
                                                        endHour = 937285;
                                                        endMinute = 814967;
                                                        startHour = 257233;
                                                        startMinute = 985492;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "suscipit";
                                                        endHour = 968972;
                                                        endMinute = 697142;
                                                        startHour = 904949;
                                                        startMinute = 897071;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "dolore";
                                                        endHour = 121059;
                                                        endMinute = 992012;
                                                        startHour = 241545;
                                                        startMinute = 249420;
                                                    }}),
                                                }};
                                                timeZoneType = "amet";
                                            }};
                                            demogAgeCriteriaValue = new TargetingValueDemogAgeCriteria() {{
                                                demogAgeCriteriaIds = new String[]{{
                                                    add("dignissimos"),
                                                }};
                                            }};
                                            demogGenderCriteriaValue = new TargetingValueDemogGenderCriteria() {{
                                                demogGenderCriteriaIds = new String[]{{
                                                    add("debitis"),
                                                    add("consectetur"),
                                                    add("corporis"),
                                                    add("harum"),
                                                }};
                                            }};
                                            longValue = "laboriosam";
                                            requestPlatformTargetingValue = new TargetingValueRequestPlatformTargeting() {{
                                                requestPlatforms = new String[]{{
                                                    add("voluptates"),
                                                }};
                                            }};
                                            stringValue = "libero";
                                        }}),
                                    }};
                                    key = "vitae";
                                }}),
                                add(new SharedTargeting() {{
                                    exclusions = new org.openapis.openapi.models.shared.TargetingValue[]{{
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new TargetingValueCreativeSize() {{
                                                allowedFormats = new String[]{{
                                                    add("tempora"),
                                                    add("aspernatur"),
                                                    add("voluptas"),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.TargetingValueSize[]{{
                                                    add(new TargetingValueSize() {{
                                                        height = 374296;
                                                        width = 324405;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 748789;
                                                        width = 680116;
                                                    }}),
                                                }};
                                                creativeSizeType = "adipisci";
                                                nativeTemplate = "minus";
                                                size = new TargetingValueSize() {{
                                                    height = 171853;
                                                    width = 503934;
                                                }};
                                                skippableAdType = "in";
                                            }};
                                            dayPartTargetingValue = new TargetingValueDayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.TargetingValueDayPartTargetingDayPart[]{{
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "aliquam";
                                                        endHour = 885963;
                                                        endMinute = 839189;
                                                        startHour = 351870;
                                                        startMinute = 237742;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "cum";
                                                        endHour = 502389;
                                                        endMinute = 555361;
                                                        startHour = 942584;
                                                        startMinute = 201517;
                                                    }}),
                                                }};
                                                timeZoneType = "culpa";
                                            }};
                                            demogAgeCriteriaValue = new TargetingValueDemogAgeCriteria() {{
                                                demogAgeCriteriaIds = new String[]{{
                                                    add("pariatur"),
                                                    add("totam"),
                                                    add("hic"),
                                                }};
                                            }};
                                            demogGenderCriteriaValue = new TargetingValueDemogGenderCriteria() {{
                                                demogGenderCriteriaIds = new String[]{{
                                                    add("nobis"),
                                                    add("sit"),
                                                }};
                                            }};
                                            longValue = "rerum";
                                            requestPlatformTargetingValue = new TargetingValueRequestPlatformTargeting() {{
                                                requestPlatforms = new String[]{{
                                                    add("reiciendis"),
                                                }};
                                            }};
                                            stringValue = "explicabo";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new TargetingValueCreativeSize() {{
                                                allowedFormats = new String[]{{
                                                    add("facilis"),
                                                    add("voluptate"),
                                                    add("expedita"),
                                                    add("ab"),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.TargetingValueSize[]{{
                                                    add(new TargetingValueSize() {{
                                                        height = 292794;
                                                        width = 671907;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 152354;
                                                        width = 447516;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 417486;
                                                        width = 696077;
                                                    }}),
                                                }};
                                                creativeSizeType = "explicabo";
                                                nativeTemplate = "voluptas";
                                                size = new TargetingValueSize() {{
                                                    height = 604118;
                                                    width = 100032;
                                                }};
                                                skippableAdType = "suscipit";
                                            }};
                                            dayPartTargetingValue = new TargetingValueDayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.TargetingValueDayPartTargetingDayPart[]{{
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "debitis";
                                                        endHour = 72434;
                                                        endMinute = 967795;
                                                        startHour = 19300;
                                                        startMinute = 546885;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "maiores";
                                                        endHour = 274823;
                                                        endMinute = 148478;
                                                        startHour = 592231;
                                                        startMinute = 258702;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "necessitatibus";
                                                        endHour = 215529;
                                                        endMinute = 406733;
                                                        startHour = 579912;
                                                        startMinute = 552078;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "voluptatibus";
                                                        endHour = 271653;
                                                        endMinute = 273009;
                                                        startHour = 455444;
                                                        startMinute = 970076;
                                                    }}),
                                                }};
                                                timeZoneType = "ex";
                                            }};
                                            demogAgeCriteriaValue = new TargetingValueDemogAgeCriteria() {{
                                                demogAgeCriteriaIds = new String[]{{
                                                    add("non"),
                                                }};
                                            }};
                                            demogGenderCriteriaValue = new TargetingValueDemogGenderCriteria() {{
                                                demogGenderCriteriaIds = new String[]{{
                                                    add("praesentium"),
                                                    add("facilis"),
                                                    add("quaerat"),
                                                    add("incidunt"),
                                                }};
                                            }};
                                            longValue = "ipsam";
                                            requestPlatformTargetingValue = new TargetingValueRequestPlatformTargeting() {{
                                                requestPlatforms = new String[]{{
                                                    add("rem"),
                                                    add("sit"),
                                                    add("nobis"),
                                                    add("error"),
                                                }};
                                            }};
                                            stringValue = "veniam";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new TargetingValueCreativeSize() {{
                                                allowedFormats = new String[]{{
                                                    add("recusandae"),
                                                    add("reiciendis"),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.TargetingValueSize[]{{
                                                    add(new TargetingValueSize() {{
                                                        height = 168576;
                                                        width = 48690;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 901483;
                                                        width = 253642;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 329935;
                                                        width = 446135;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 889234;
                                                        width = 104627;
                                                    }}),
                                                }};
                                                creativeSizeType = "laudantium";
                                                nativeTemplate = "exercitationem";
                                                size = new TargetingValueSize() {{
                                                    height = 510629;
                                                    width = 740098;
                                                }};
                                                skippableAdType = "laboriosam";
                                            }};
                                            dayPartTargetingValue = new TargetingValueDayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.TargetingValueDayPartTargetingDayPart[]{{
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "voluptatum";
                                                        endHour = 622385;
                                                        endMinute = 944708;
                                                        startHour = 710529;
                                                        startMinute = 892863;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "neque";
                                                        endHour = 677115;
                                                        endMinute = 341698;
                                                        startHour = 639028;
                                                        startMinute = 676243;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "corrupti";
                                                        endHour = 879235;
                                                        endMinute = 272683;
                                                        startHour = 543678;
                                                        startMinute = 148268;
                                                    }}),
                                                }};
                                                timeZoneType = "ut";
                                            }};
                                            demogAgeCriteriaValue = new TargetingValueDemogAgeCriteria() {{
                                                demogAgeCriteriaIds = new String[]{{
                                                    add("voluptatem"),
                                                    add("culpa"),
                                                    add("expedita"),
                                                    add("magnam"),
                                                }};
                                            }};
                                            demogGenderCriteriaValue = new TargetingValueDemogGenderCriteria() {{
                                                demogGenderCriteriaIds = new String[]{{
                                                    add("esse"),
                                                }};
                                            }};
                                            longValue = "ipsam";
                                            requestPlatformTargetingValue = new TargetingValueRequestPlatformTargeting() {{
                                                requestPlatforms = new String[]{{
                                                    add("voluptatum"),
                                                }};
                                            }};
                                            stringValue = "quas";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new TargetingValueCreativeSize() {{
                                                allowedFormats = new String[]{{
                                                    add("corporis"),
                                                    add("et"),
                                                    add("blanditiis"),
                                                    add("ex"),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.TargetingValueSize[]{{
                                                    add(new TargetingValueSize() {{
                                                        height = 24313;
                                                        width = 425508;
                                                    }}),
                                                }};
                                                creativeSizeType = "nostrum";
                                                nativeTemplate = "saepe";
                                                size = new TargetingValueSize() {{
                                                    height = 622231;
                                                    width = 8511;
                                                }};
                                                skippableAdType = "incidunt";
                                            }};
                                            dayPartTargetingValue = new TargetingValueDayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.TargetingValueDayPartTargetingDayPart[]{{
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "dolorem";
                                                        endHour = 690894;
                                                        endMinute = 115703;
                                                        startHour = 99416;
                                                        startMinute = 577140;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "labore";
                                                        endHour = 695270;
                                                        endMinute = 539074;
                                                        startHour = 671957;
                                                        startMinute = 724148;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "tenetur";
                                                        endHour = 388867;
                                                        endMinute = 2703;
                                                        startHour = 227084;
                                                        startMinute = 647197;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "voluptate";
                                                        endHour = 600392;
                                                        endMinute = 972083;
                                                        startHour = 588740;
                                                        startMinute = 833819;
                                                    }}),
                                                }};
                                                timeZoneType = "delectus";
                                            }};
                                            demogAgeCriteriaValue = new TargetingValueDemogAgeCriteria() {{
                                                demogAgeCriteriaIds = new String[]{{
                                                    add("perferendis"),
                                                    add("est"),
                                                    add("quidem"),
                                                    add("reprehenderit"),
                                                }};
                                            }};
                                            demogGenderCriteriaValue = new TargetingValueDemogGenderCriteria() {{
                                                demogGenderCriteriaIds = new String[]{{
                                                    add("fuga"),
                                                    add("praesentium"),
                                                    add("mollitia"),
                                                    add("veniam"),
                                                }};
                                            }};
                                            longValue = "voluptatem";
                                            requestPlatformTargetingValue = new TargetingValueRequestPlatformTargeting() {{
                                                requestPlatforms = new String[]{{
                                                    add("repudiandae"),
                                                    add("quasi"),
                                                    add("atque"),
                                                    add("reprehenderit"),
                                                }};
                                            }};
                                            stringValue = "asperiores";
                                        }}),
                                    }};
                                    inclusions = new org.openapis.openapi.models.shared.TargetingValue[]{{
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new TargetingValueCreativeSize() {{
                                                allowedFormats = new String[]{{
                                                    add("quidem"),
                                                    add("maxime"),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.TargetingValueSize[]{{
                                                    add(new TargetingValueSize() {{
                                                        height = 461007;
                                                        width = 227759;
                                                    }}),
                                                }};
                                                creativeSizeType = "assumenda";
                                                nativeTemplate = "ea";
                                                size = new TargetingValueSize() {{
                                                    height = 539118;
                                                    width = 623295;
                                                }};
                                                skippableAdType = "officiis";
                                            }};
                                            dayPartTargetingValue = new TargetingValueDayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.TargetingValueDayPartTargetingDayPart[]{{
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "accusamus";
                                                        endHour = 618826;
                                                        endMinute = 328303;
                                                        startHour = 133461;
                                                        startMinute = 404425;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "maiores";
                                                        endHour = 544647;
                                                        endMinute = 871786;
                                                        startHour = 621693;
                                                        startMinute = 502721;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "suscipit";
                                                        endHour = 922348;
                                                        endMinute = 542129;
                                                        startHour = 541381;
                                                        startMinute = 120919;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "recusandae";
                                                        endHour = 680697;
                                                        endMinute = 829898;
                                                        startHour = 287119;
                                                        startMinute = 968287;
                                                    }}),
                                                }};
                                                timeZoneType = "doloremque";
                                            }};
                                            demogAgeCriteriaValue = new TargetingValueDemogAgeCriteria() {{
                                                demogAgeCriteriaIds = new String[]{{
                                                    add("dicta"),
                                                    add("accusantium"),
                                                    add("beatae"),
                                                    add("dolores"),
                                                }};
                                            }};
                                            demogGenderCriteriaValue = new TargetingValueDemogGenderCriteria() {{
                                                demogGenderCriteriaIds = new String[]{{
                                                    add("laboriosam"),
                                                    add("velit"),
                                                }};
                                            }};
                                            longValue = "a";
                                            requestPlatformTargetingValue = new TargetingValueRequestPlatformTargeting() {{
                                                requestPlatforms = new String[]{{
                                                    add("magnam"),
                                                    add("saepe"),
                                                    add("consequuntur"),
                                                }};
                                            }};
                                            stringValue = "occaecati";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new TargetingValueCreativeSize() {{
                                                allowedFormats = new String[]{{
                                                    add("perspiciatis"),
                                                    add("in"),
                                                    add("adipisci"),
                                                    add("eveniet"),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.TargetingValueSize[]{{
                                                    add(new TargetingValueSize() {{
                                                        height = 160230;
                                                        width = 145870;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 661118;
                                                        width = 335631;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 440264;
                                                        width = 625528;
                                                    }}),
                                                }};
                                                creativeSizeType = "illo";
                                                nativeTemplate = "corporis";
                                                size = new TargetingValueSize() {{
                                                    height = 696463;
                                                    width = 910994;
                                                }};
                                                skippableAdType = "non";
                                            }};
                                            dayPartTargetingValue = new TargetingValueDayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.TargetingValueDayPartTargetingDayPart[]{{
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "doloremque";
                                                        endHour = 434156;
                                                        endMinute = 59944;
                                                        startHour = 517612;
                                                        startMinute = 61078;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "molestiae";
                                                        endHour = 907733;
                                                        endMinute = 184362;
                                                        startHour = 739884;
                                                        startMinute = 434761;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "necessitatibus";
                                                        endHour = 187552;
                                                        endMinute = 672582;
                                                        startHour = 715208;
                                                        startMinute = 528940;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "rem";
                                                        endHour = 304446;
                                                        endMinute = 320565;
                                                        startHour = 997963;
                                                        startMinute = 3099;
                                                    }}),
                                                }};
                                                timeZoneType = "corporis";
                                            }};
                                            demogAgeCriteriaValue = new TargetingValueDemogAgeCriteria() {{
                                                demogAgeCriteriaIds = new String[]{{
                                                    add("nihil"),
                                                    add("mollitia"),
                                                    add("voluptas"),
                                                }};
                                            }};
                                            demogGenderCriteriaValue = new TargetingValueDemogGenderCriteria() {{
                                                demogGenderCriteriaIds = new String[]{{
                                                    add("maiores"),
                                                }};
                                            }};
                                            longValue = "reiciendis";
                                            requestPlatformTargetingValue = new TargetingValueRequestPlatformTargeting() {{
                                                requestPlatforms = new String[]{{
                                                    add("id"),
                                                }};
                                            }};
                                            stringValue = "minima";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new TargetingValueCreativeSize() {{
                                                allowedFormats = new String[]{{
                                                    add("dolorum"),
                                                    add("nesciunt"),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.TargetingValueSize[]{{
                                                    add(new TargetingValueSize() {{
                                                        height = 925703;
                                                        width = 607249;
                                                    }}),
                                                }};
                                                creativeSizeType = "quaerat";
                                                nativeTemplate = "molestiae";
                                                size = new TargetingValueSize() {{
                                                    height = 403218;
                                                    width = 284000;
                                                }};
                                                skippableAdType = "culpa";
                                            }};
                                            dayPartTargetingValue = new TargetingValueDayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.TargetingValueDayPartTargetingDayPart[]{{
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "debitis";
                                                        endHour = 514513;
                                                        endMinute = 432606;
                                                        startHour = 367927;
                                                        startMinute = 928219;
                                                    }}),
                                                }};
                                                timeZoneType = "esse";
                                            }};
                                            demogAgeCriteriaValue = new TargetingValueDemogAgeCriteria() {{
                                                demogAgeCriteriaIds = new String[]{{
                                                    add("quis"),
                                                    add("eum"),
                                                    add("reiciendis"),
                                                }};
                                            }};
                                            demogGenderCriteriaValue = new TargetingValueDemogGenderCriteria() {{
                                                demogGenderCriteriaIds = new String[]{{
                                                    add("aspernatur"),
                                                    add("ullam"),
                                                    add("quasi"),
                                                }};
                                            }};
                                            longValue = "animi";
                                            requestPlatformTargetingValue = new TargetingValueRequestPlatformTargeting() {{
                                                requestPlatforms = new String[]{{
                                                    add("mollitia"),
                                                    add("provident"),
                                                }};
                                            }};
                                            stringValue = "possimus";
                                        }}),
                                    }};
                                    key = "animi";
                                }}),
                                add(new SharedTargeting() {{
                                    exclusions = new org.openapis.openapi.models.shared.TargetingValue[]{{
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new TargetingValueCreativeSize() {{
                                                allowedFormats = new String[]{{
                                                    add("accusantium"),
                                                    add("repellat"),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.TargetingValueSize[]{{
                                                    add(new TargetingValueSize() {{
                                                        height = 351893;
                                                        width = 448143;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 721407;
                                                        width = 937636;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 637583;
                                                        width = 672041;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 813054;
                                                        width = 266697;
                                                    }}),
                                                }};
                                                creativeSizeType = "voluptatibus";
                                                nativeTemplate = "molestias";
                                                size = new TargetingValueSize() {{
                                                    height = 889794;
                                                    width = 956933;
                                                }};
                                                skippableAdType = "cumque";
                                            }};
                                            dayPartTargetingValue = new TargetingValueDayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.TargetingValueDayPartTargetingDayPart[]{{
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "rerum";
                                                        endHour = 272229;
                                                        endMinute = 335498;
                                                        startHour = 82057;
                                                        startMinute = 147685;
                                                    }}),
                                                }};
                                                timeZoneType = "cumque";
                                            }};
                                            demogAgeCriteriaValue = new TargetingValueDemogAgeCriteria() {{
                                                demogAgeCriteriaIds = new String[]{{
                                                    add("perferendis"),
                                                }};
                                            }};
                                            demogGenderCriteriaValue = new TargetingValueDemogGenderCriteria() {{
                                                demogGenderCriteriaIds = new String[]{{
                                                    add("aspernatur"),
                                                }};
                                            }};
                                            longValue = "eum";
                                            requestPlatformTargetingValue = new TargetingValueRequestPlatformTargeting() {{
                                                requestPlatforms = new String[]{{
                                                    add("rem"),
                                                    add("at"),
                                                }};
                                            }};
                                            stringValue = "impedit";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new TargetingValueCreativeSize() {{
                                                allowedFormats = new String[]{{
                                                    add("sapiente"),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.TargetingValueSize[]{{
                                                    add(new TargetingValueSize() {{
                                                        height = 117320;
                                                        width = 325118;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 107004;
                                                        width = 583404;
                                                    }}),
                                                }};
                                                creativeSizeType = "provident";
                                                nativeTemplate = "earum";
                                                size = new TargetingValueSize() {{
                                                    height = 745398;
                                                    width = 940782;
                                                }};
                                                skippableAdType = "illum";
                                            }};
                                            dayPartTargetingValue = new TargetingValueDayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.TargetingValueDayPartTargetingDayPart[]{{
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "earum";
                                                        endHour = 596211;
                                                        endMinute = 983427;
                                                        startHour = 891801;
                                                        startMinute = 399802;
                                                    }}),
                                                }};
                                                timeZoneType = "porro";
                                            }};
                                            demogAgeCriteriaValue = new TargetingValueDemogAgeCriteria() {{
                                                demogAgeCriteriaIds = new String[]{{
                                                    add("dolorem"),
                                                    add("fugit"),
                                                }};
                                            }};
                                            demogGenderCriteriaValue = new TargetingValueDemogGenderCriteria() {{
                                                demogGenderCriteriaIds = new String[]{{
                                                    add("fuga"),
                                                    add("ratione"),
                                                    add("animi"),
                                                    add("necessitatibus"),
                                                }};
                                            }};
                                            longValue = "nulla";
                                            requestPlatformTargetingValue = new TargetingValueRequestPlatformTargeting() {{
                                                requestPlatforms = new String[]{{
                                                    add("quasi"),
                                                }};
                                            }};
                                            stringValue = "et";
                                        }}),
                                    }};
                                    inclusions = new org.openapis.openapi.models.shared.TargetingValue[]{{
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new TargetingValueCreativeSize() {{
                                                allowedFormats = new String[]{{
                                                    add("occaecati"),
                                                    add("suscipit"),
                                                    add("adipisci"),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.TargetingValueSize[]{{
                                                    add(new TargetingValueSize() {{
                                                        height = 169025;
                                                        width = 984934;
                                                    }}),
                                                }};
                                                creativeSizeType = "nulla";
                                                nativeTemplate = "necessitatibus";
                                                size = new TargetingValueSize() {{
                                                    height = 58534;
                                                    width = 271113;
                                                }};
                                                skippableAdType = "nihil";
                                            }};
                                            dayPartTargetingValue = new TargetingValueDayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.TargetingValueDayPartTargetingDayPart[]{{
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "dicta";
                                                        endHour = 479754;
                                                        endMinute = 457059;
                                                        startHour = 508390;
                                                        startMinute = 979963;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "reiciendis";
                                                        endHour = 423706;
                                                        endMinute = 99958;
                                                        startHour = 857125;
                                                        startMinute = 39650;
                                                    }}),
                                                }};
                                                timeZoneType = "dicta";
                                            }};
                                            demogAgeCriteriaValue = new TargetingValueDemogAgeCriteria() {{
                                                demogAgeCriteriaIds = new String[]{{
                                                    add("tempora"),
                                                    add("esse"),
                                                }};
                                            }};
                                            demogGenderCriteriaValue = new TargetingValueDemogGenderCriteria() {{
                                                demogGenderCriteriaIds = new String[]{{
                                                    add("consectetur"),
                                                    add("aliquid"),
                                                }};
                                            }};
                                            longValue = "ipsa";
                                            requestPlatformTargetingValue = new TargetingValueRequestPlatformTargeting() {{
                                                requestPlatforms = new String[]{{
                                                    add("sunt"),
                                                    add("nostrum"),
                                                    add("fugiat"),
                                                }};
                                            }};
                                            stringValue = "expedita";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new TargetingValueCreativeSize() {{
                                                allowedFormats = new String[]{{
                                                    add("officia"),
                                                    add("suscipit"),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.TargetingValueSize[]{{
                                                    add(new TargetingValueSize() {{
                                                        height = 21973;
                                                        width = 431760;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 374753;
                                                        width = 614528;
                                                    }}),
                                                }};
                                                creativeSizeType = "id";
                                                nativeTemplate = "ab";
                                                size = new TargetingValueSize() {{
                                                    height = 625358;
                                                    width = 822407;
                                                }};
                                                skippableAdType = "voluptates";
                                            }};
                                            dayPartTargetingValue = new TargetingValueDayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.TargetingValueDayPartTargetingDayPart[]{{
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "laborum";
                                                        endHour = 726343;
                                                        endMinute = 324083;
                                                        startHour = 536923;
                                                        startMinute = 316220;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "vitae";
                                                        endHour = 833316;
                                                        endMinute = 405036;
                                                        startHour = 775803;
                                                        startMinute = 405373;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "ut";
                                                        endHour = 321043;
                                                        endMinute = 713927;
                                                        startHour = 29950;
                                                        startMinute = 561577;
                                                    }}),
                                                }};
                                                timeZoneType = "cum";
                                            }};
                                            demogAgeCriteriaValue = new TargetingValueDemogAgeCriteria() {{
                                                demogAgeCriteriaIds = new String[]{{
                                                    add("beatae"),
                                                    add("voluptatum"),
                                                }};
                                            }};
                                            demogGenderCriteriaValue = new TargetingValueDemogGenderCriteria() {{
                                                demogGenderCriteriaIds = new String[]{{
                                                    add("veritatis"),
                                                    add("rerum"),
                                                    add("est"),
                                                }};
                                            }};
                                            longValue = "culpa";
                                            requestPlatformTargetingValue = new TargetingValueRequestPlatformTargeting() {{
                                                requestPlatforms = new String[]{{
                                                    add("sapiente"),
                                                }};
                                            }};
                                            stringValue = "officiis";
                                        }}),
                                    }};
                                    key = "architecto";
                                }}),
                            }};
                            syndicationProduct = "fuga";
                            terms = new DealTerms() {{
                                brandingType = "pariatur";
                                crossListedExternalDealIdType = "debitis";
                                description = "voluptatem";
                                estimatedGrossSpend = new Price() {{
                                    amountMicros = 12.07;
                                    currencyCode = "deleniti";
                                    expectedCpmMicros = 9372.19;
                                    pricingType = "ex";
                                }};
                                estimatedImpressionsPerDay = "sapiente";
                                guaranteedFixedPriceTerms = new DealTermsGuaranteedFixedPriceTerms() {{
                                    billingInfo = new DealTermsGuaranteedFixedPriceTermsBillingInfo() {{
                                        currencyConversionTimeMs = "rem";
                                        dfpLineItemId = "minus";
                                        originalContractedQuantity = "nemo";
                                        price = new Price() {{
                                            amountMicros = 9920.74;
                                            currencyCode = "ratione";
                                            expectedCpmMicros = 3552.25;
                                            pricingType = "perferendis";
                                        }};
                                    }};
                                    fixedPrices = new org.openapis.openapi.models.shared.PricePerBuyer[]{{
                                        add(new PricePerBuyer() {{
                                            auctionTier = "totam";
                                            billedBuyer = new Buyer() {{
                                                accountId = "impedit";
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "quibusdam";
                                            }};
                                            price = new Price() {{
                                                amountMicros = 7205.28;
                                                currencyCode = "ipsam";
                                                expectedCpmMicros = 6334.15;
                                                pricingType = "dolor";
                                            }};
                                        }}),
                                        add(new PricePerBuyer() {{
                                            auctionTier = "aliquam";
                                            billedBuyer = new Buyer() {{
                                                accountId = "inventore";
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "deleniti";
                                            }};
                                            price = new Price() {{
                                                amountMicros = 853.11;
                                                currencyCode = "tempora";
                                                expectedCpmMicros = 2213.96;
                                                pricingType = "consequatur";
                                            }};
                                        }}),
                                        add(new PricePerBuyer() {{
                                            auctionTier = "architecto";
                                            billedBuyer = new Buyer() {{
                                                accountId = "sit";
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "modi";
                                            }};
                                            price = new Price() {{
                                                amountMicros = 1442.86;
                                                currencyCode = "ab";
                                                expectedCpmMicros = 5137.6;
                                                pricingType = "quae";
                                            }};
                                        }}),
                                        add(new PricePerBuyer() {{
                                            auctionTier = "dolor";
                                            billedBuyer = new Buyer() {{
                                                accountId = "fugiat";
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "ipsam";
                                            }};
                                            price = new Price() {{
                                                amountMicros = 1621.2;
                                                currencyCode = "ipsa";
                                                expectedCpmMicros = 5596.82;
                                                pricingType = "eveniet";
                                            }};
                                        }}),
                                    }};
                                    guaranteedImpressions = "impedit";
                                    guaranteedLooks = "officiis";
                                    minimumDailyLooks = "esse";
                                }};
                                nonGuaranteedAuctionTerms = new DealTermsNonGuaranteedAuctionTerms() {{
                                    autoOptimizePrivateAuction = false;
                                    reservePricePerBuyers = new org.openapis.openapi.models.shared.PricePerBuyer[]{{
                                        add(new PricePerBuyer() {{
                                            auctionTier = "sed";
                                            billedBuyer = new Buyer() {{
                                                accountId = "veniam";
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "nesciunt";
                                            }};
                                            price = new Price() {{
                                                amountMicros = 7129.27;
                                                currencyCode = "eum";
                                                expectedCpmMicros = 4269.43;
                                                pricingType = "voluptatum";
                                            }};
                                        }}),
                                        add(new PricePerBuyer() {{
                                            auctionTier = "magnam";
                                            billedBuyer = new Buyer() {{
                                                accountId = "exercitationem";
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "ab";
                                            }};
                                            price = new Price() {{
                                                amountMicros = 7814.8;
                                                currencyCode = "autem";
                                                expectedCpmMicros = 7510.22;
                                                pricingType = "laboriosam";
                                            }};
                                        }}),
                                        add(new PricePerBuyer() {{
                                            auctionTier = "recusandae";
                                            billedBuyer = new Buyer() {{
                                                accountId = "consequuntur";
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "voluptatem";
                                            }};
                                            price = new Price() {{
                                                amountMicros = 3502.07;
                                                currencyCode = "necessitatibus";
                                                expectedCpmMicros = 956.19;
                                                pricingType = "nisi";
                                            }};
                                        }}),
                                        add(new PricePerBuyer() {{
                                            auctionTier = "at";
                                            billedBuyer = new Buyer() {{
                                                accountId = "vero";
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "est";
                                            }};
                                            price = new Price() {{
                                                amountMicros = 6907.85;
                                                currencyCode = "sequi";
                                                expectedCpmMicros = 9873.49;
                                                pricingType = "repudiandae";
                                            }};
                                        }}),
                                    }};
                                }};
                                nonGuaranteedFixedPriceTerms = new DealTermsNonGuaranteedFixedPriceTerms() {{
                                    fixedPrices = new org.openapis.openapi.models.shared.PricePerBuyer[]{{
                                        add(new PricePerBuyer() {{
                                            auctionTier = "occaecati";
                                            billedBuyer = new Buyer() {{
                                                accountId = "nemo";
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "voluptate";
                                            }};
                                            price = new Price() {{
                                                amountMicros = 5010.63;
                                                currencyCode = "officia";
                                                expectedCpmMicros = 3763.89;
                                                pricingType = "numquam";
                                            }};
                                        }}),
                                        add(new PricePerBuyer() {{
                                            auctionTier = "nemo";
                                            billedBuyer = new Buyer() {{
                                                accountId = "quos";
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "eius";
                                            }};
                                            price = new Price() {{
                                                amountMicros = 1319.03;
                                                currencyCode = "ducimus";
                                                expectedCpmMicros = 2005.16;
                                                pricingType = "fuga";
                                            }};
                                        }}),
                                        add(new PricePerBuyer() {{
                                            auctionTier = "laudantium";
                                            billedBuyer = new Buyer() {{
                                                accountId = "incidunt";
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "quasi";
                                            }};
                                            price = new Price() {{
                                                amountMicros = 5243.8;
                                                currencyCode = "fugiat";
                                                expectedCpmMicros = 1173.8;
                                                pricingType = "nisi";
                                            }};
                                        }}),
                                        add(new PricePerBuyer() {{
                                            auctionTier = "consequuntur";
                                            billedBuyer = new Buyer() {{
                                                accountId = "consectetur";
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "aperiam";
                                            }};
                                            price = new Price() {{
                                                amountMicros = 5854.32;
                                                currencyCode = "reiciendis";
                                                expectedCpmMicros = 7468.37;
                                                pricingType = "alias";
                                            }};
                                        }}),
                                    }};
                                }};
                                rubiconNonGuaranteedTerms = new DealTermsRubiconNonGuaranteedTerms() {{
                                    priorityPrice = new Price() {{
                                        amountMicros = 6089.89;
                                        currencyCode = "eos";
                                        expectedCpmMicros = 5790.11;
                                        pricingType = "iste";
                                    }};
                                    standardPrice = new Price() {{
                                        amountMicros = 1700.99;
                                        currencyCode = "inventore";
                                        expectedCpmMicros = 6863.62;
                                        pricingType = "accusamus";
                                    }};
                                }};
                                sellerTimeZone = "voluptatibus";
                            }};
                            webPropertyCode = "distinctio";
                        }}),
                    }};
                    proposalRevisionNumber = "omnis";
                    updateAction = "delectus";
                }};;
                alt = AltEnum.JSON;
                fields = "minima";
                key = "praesentium";
                oauthToken = "maxime";
                prettyPrint = false;
                quotaUser = "magnam";
                userIp = "temporibus";
            }};            

            AdexchangebuyerMarketplacedealsInsertResponse res = sdk.marketplacedeals.adexchangebuyerMarketplacedealsInsert(req, new AdexchangebuyerMarketplacedealsInsertSecurity("quos", "commodi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.addOrderDealsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyerMarketplacedealsList

List all the deals for a given proposal

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerMarketplacedealsListRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerMarketplacedealsListResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerMarketplacedealsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerMarketplacedealsListRequest req = new AdexchangebuyerMarketplacedealsListRequest("itaque") {{
                alt = AltEnum.JSON;
                fields = "commodi";
                key = "totam";
                oauthToken = "earum";
                pqlQuery = "modi";
                prettyPrint = false;
                quotaUser = "nam";
                userIp = "vero";
            }};            

            AdexchangebuyerMarketplacedealsListResponse res = sdk.marketplacedeals.adexchangebuyerMarketplacedealsList(req, new AdexchangebuyerMarketplacedealsListSecurity("voluptatem", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getOrderDealsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyerMarketplacedealsUpdate

Replaces all the deals in the proposal with the passed in deals

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerMarketplacedealsUpdateRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerMarketplacedealsUpdateResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerMarketplacedealsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Buyer;
import org.openapis.openapi.models.shared.ContactInformation;
import org.openapis.openapi.models.shared.DealServingMetadata;
import org.openapis.openapi.models.shared.DealServingMetadataDealPauseStatus;
import org.openapis.openapi.models.shared.DealTerms;
import org.openapis.openapi.models.shared.DealTermsGuaranteedFixedPriceTerms;
import org.openapis.openapi.models.shared.DealTermsGuaranteedFixedPriceTermsBillingInfo;
import org.openapis.openapi.models.shared.DealTermsNonGuaranteedAuctionTerms;
import org.openapis.openapi.models.shared.DealTermsNonGuaranteedFixedPriceTerms;
import org.openapis.openapi.models.shared.DealTermsRubiconNonGuaranteedTerms;
import org.openapis.openapi.models.shared.DeliveryControl;
import org.openapis.openapi.models.shared.DeliveryControlFrequencyCap;
import org.openapis.openapi.models.shared.EditAllOrderDealsRequest;
import org.openapis.openapi.models.shared.MarketplaceDeal;
import org.openapis.openapi.models.shared.MarketplaceDealParty;
import org.openapis.openapi.models.shared.MarketplaceLabel;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.PricePerBuyer;
import org.openapis.openapi.models.shared.PrivateData;
import org.openapis.openapi.models.shared.Proposal;
import org.openapis.openapi.models.shared.Seller;
import org.openapis.openapi.models.shared.SharedTargeting;
import org.openapis.openapi.models.shared.TargetingValue;
import org.openapis.openapi.models.shared.TargetingValueCreativeSize;
import org.openapis.openapi.models.shared.TargetingValueDayPartTargeting;
import org.openapis.openapi.models.shared.TargetingValueDayPartTargetingDayPart;
import org.openapis.openapi.models.shared.TargetingValueDemogAgeCriteria;
import org.openapis.openapi.models.shared.TargetingValueDemogGenderCriteria;
import org.openapis.openapi.models.shared.TargetingValueRequestPlatformTargeting;
import org.openapis.openapi.models.shared.TargetingValueSize;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerMarketplacedealsUpdateRequest req = new AdexchangebuyerMarketplacedealsUpdateRequest("vel") {{
                editAllOrderDealsRequest = new EditAllOrderDealsRequest() {{
                    deals = new org.openapis.openapi.models.shared.MarketplaceDeal[]{{
                        add(new MarketplaceDeal() {{
                            buyerPrivateData = new PrivateData() {{
                                referenceId = "quasi";
                                referencePayload = "non";
                            }};
                            creationTimeMs = "maiores";
                            creativePreApprovalPolicy = "enim";
                            creativeSafeFrameCompatibility = "sint";
                            dealId = "nulla";
                            dealServingMetadata = new DealServingMetadata() {{
                                alcoholAdsAllowed = false;
                                dealPauseStatus = new DealServingMetadataDealPauseStatus() {{
                                    buyerPauseReason = "deserunt";
                                    firstPausedBy = "esse";
                                    hasBuyerPaused = false;
                                    hasSellerPaused = false;
                                    sellerPauseReason = "nemo";
                                }};
                            }};
                            deliveryControl = new DeliveryControl() {{
                                creativeBlockingLevel = "reprehenderit";
                                deliveryRateType = "est";
                                frequencyCaps = new org.openapis.openapi.models.shared.DeliveryControlFrequencyCap[]{{
                                    add(new DeliveryControlFrequencyCap() {{
                                        maxImpressions = 571844;
                                        numTimeUnits = 880679;
                                        timeUnitType = "impedit";
                                    }}),
                                    add(new DeliveryControlFrequencyCap() {{
                                        maxImpressions = 945027;
                                        numTimeUnits = 900103;
                                        timeUnitType = "asperiores";
                                    }}),
                                }};
                            }};
                            externalDealId = "ex";
                            flightEndTimeMs = "voluptas";
                            flightStartTimeMs = "debitis";
                            inventoryDescription = "delectus";
                            isRfpTemplate = false;
                            isSetupComplete = false;
                            kind = "quae";
                            lastUpdateTimeMs = "minus";
                            makegoodRequestedReason = "fuga";
                            name = "Vincent Frami";
                            productId = "impedit";
                            productRevisionNumber = "magni";
                            programmaticCreativeSource = "soluta";
                            proposalId = "repudiandae";
                            sellerContacts = new org.openapis.openapi.models.shared.ContactInformation[]{{
                                add(new ContactInformation() {{
                                    email = "Jayme49@gmail.com";
                                    name = "Angelica Leuschke";
                                }}),
                                add(new ContactInformation() {{
                                    email = "Wellington84@gmail.com";
                                    name = "Dr. Muriel Reinger";
                                }}),
                                add(new ContactInformation() {{
                                    email = "Elliott3@hotmail.com";
                                    name = "Rosemary Breitenberg";
                                }}),
                            }};
                            sharedTargetings = new org.openapis.openapi.models.shared.SharedTargeting[]{{
                                add(new SharedTargeting() {{
                                    exclusions = new org.openapis.openapi.models.shared.TargetingValue[]{{
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new TargetingValueCreativeSize() {{
                                                allowedFormats = new String[]{{
                                                    add("perspiciatis"),
                                                    add("earum"),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.TargetingValueSize[]{{
                                                    add(new TargetingValueSize() {{
                                                        height = 772266;
                                                        width = 975884;
                                                    }}),
                                                }};
                                                creativeSizeType = "iste";
                                                nativeTemplate = "itaque";
                                                size = new TargetingValueSize() {{
                                                    height = 2677;
                                                    width = 391797;
                                                }};
                                                skippableAdType = "itaque";
                                            }};
                                            dayPartTargetingValue = new TargetingValueDayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.TargetingValueDayPartTargetingDayPart[]{{
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "laborum";
                                                        endHour = 250398;
                                                        endMinute = 224467;
                                                        startHour = 483394;
                                                        startMinute = 24753;
                                                    }}),
                                                }};
                                                timeZoneType = "doloremque";
                                            }};
                                            demogAgeCriteriaValue = new TargetingValueDemogAgeCriteria() {{
                                                demogAgeCriteriaIds = new String[]{{
                                                    add("officia"),
                                                }};
                                            }};
                                            demogGenderCriteriaValue = new TargetingValueDemogGenderCriteria() {{
                                                demogGenderCriteriaIds = new String[]{{
                                                    add("ea"),
                                                    add("quidem"),
                                                    add("voluptas"),
                                                    add("facilis"),
                                                }};
                                            }};
                                            longValue = "placeat";
                                            requestPlatformTargetingValue = new TargetingValueRequestPlatformTargeting() {{
                                                requestPlatforms = new String[]{{
                                                    add("expedita"),
                                                    add("deleniti"),
                                                    add("a"),
                                                }};
                                            }};
                                            stringValue = "voluptate";
                                        }}),
                                    }};
                                    inclusions = new org.openapis.openapi.models.shared.TargetingValue[]{{
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new TargetingValueCreativeSize() {{
                                                allowedFormats = new String[]{{
                                                    add("necessitatibus"),
                                                    add("animi"),
                                                    add("impedit"),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.TargetingValueSize[]{{
                                                    add(new TargetingValueSize() {{
                                                        height = 357425;
                                                        width = 668234;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 621666;
                                                        width = 456885;
                                                    }}),
                                                }};
                                                creativeSizeType = "labore";
                                                nativeTemplate = "veritatis";
                                                size = new TargetingValueSize() {{
                                                    height = 874400;
                                                    width = 233173;
                                                }};
                                                skippableAdType = "vitae";
                                            }};
                                            dayPartTargetingValue = new TargetingValueDayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.TargetingValueDayPartTargetingDayPart[]{{
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "dolorem";
                                                        endHour = 322017;
                                                        endMinute = 183033;
                                                        startHour = 611328;
                                                        startMinute = 403026;
                                                    }}),
                                                }};
                                                timeZoneType = "nemo";
                                            }};
                                            demogAgeCriteriaValue = new TargetingValueDemogAgeCriteria() {{
                                                demogAgeCriteriaIds = new String[]{{
                                                    add("libero"),
                                                    add("rem"),
                                                    add("dolorum"),
                                                }};
                                            }};
                                            demogGenderCriteriaValue = new TargetingValueDemogGenderCriteria() {{
                                                demogGenderCriteriaIds = new String[]{{
                                                    add("fugit"),
                                                    add("alias"),
                                                }};
                                            }};
                                            longValue = "magni";
                                            requestPlatformTargetingValue = new TargetingValueRequestPlatformTargeting() {{
                                                requestPlatforms = new String[]{{
                                                    add("quae"),
                                                    add("quae"),
                                                }};
                                            }};
                                            stringValue = "modi";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new TargetingValueCreativeSize() {{
                                                allowedFormats = new String[]{{
                                                    add("exercitationem"),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.TargetingValueSize[]{{
                                                    add(new TargetingValueSize() {{
                                                        height = 88248;
                                                        width = 215398;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 602229;
                                                        width = 858338;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 714376;
                                                        width = 802894;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 157222;
                                                        width = 159146;
                                                    }}),
                                                }};
                                                creativeSizeType = "nostrum";
                                                nativeTemplate = "omnis";
                                                size = new TargetingValueSize() {{
                                                    height = 727250;
                                                    width = 115661;
                                                }};
                                                skippableAdType = "id";
                                            }};
                                            dayPartTargetingValue = new TargetingValueDayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.TargetingValueDayPartTargetingDayPart[]{{
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "fugiat";
                                                        endHour = 637462;
                                                        endMinute = 554603;
                                                        startHour = 811939;
                                                        startMinute = 25756;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "iusto";
                                                        endHour = 57320;
                                                        endMinute = 914864;
                                                        startHour = 80061;
                                                        startMinute = 49348;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "totam";
                                                        endHour = 292888;
                                                        endMinute = 755106;
                                                        startHour = 715053;
                                                        startMinute = 32273;
                                                    }}),
                                                }};
                                                timeZoneType = "autem";
                                            }};
                                            demogAgeCriteriaValue = new TargetingValueDemogAgeCriteria() {{
                                                demogAgeCriteriaIds = new String[]{{
                                                    add("dolores"),
                                                    add("assumenda"),
                                                }};
                                            }};
                                            demogGenderCriteriaValue = new TargetingValueDemogGenderCriteria() {{
                                                demogGenderCriteriaIds = new String[]{{
                                                    add("est"),
                                                }};
                                            }};
                                            longValue = "facere";
                                            requestPlatformTargetingValue = new TargetingValueRequestPlatformTargeting() {{
                                                requestPlatforms = new String[]{{
                                                    add("molestiae"),
                                                    add("provident"),
                                                    add("accusamus"),
                                                }};
                                            }};
                                            stringValue = "necessitatibus";
                                        }}),
                                    }};
                                    key = "tempore";
                                }}),
                                add(new SharedTargeting() {{
                                    exclusions = new org.openapis.openapi.models.shared.TargetingValue[]{{
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new TargetingValueCreativeSize() {{
                                                allowedFormats = new String[]{{
                                                    add("autem"),
                                                    add("ipsam"),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.TargetingValueSize[]{{
                                                    add(new TargetingValueSize() {{
                                                        height = 515638;
                                                        width = 357207;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 889060;
                                                        width = 972912;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 737279;
                                                        width = 872303;
                                                    }}),
                                                }};
                                                creativeSizeType = "alias";
                                                nativeTemplate = "quia";
                                                size = new TargetingValueSize() {{
                                                    height = 694158;
                                                    width = 684126;
                                                }};
                                                skippableAdType = "repudiandae";
                                            }};
                                            dayPartTargetingValue = new TargetingValueDayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.TargetingValueDayPartTargetingDayPart[]{{
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "expedita";
                                                        endHour = 885208;
                                                        endMinute = 177005;
                                                        startHour = 844854;
                                                        startMinute = 483518;
                                                    }}),
                                                }};
                                                timeZoneType = "praesentium";
                                            }};
                                            demogAgeCriteriaValue = new TargetingValueDemogAgeCriteria() {{
                                                demogAgeCriteriaIds = new String[]{{
                                                    add("explicabo"),
                                                }};
                                            }};
                                            demogGenderCriteriaValue = new TargetingValueDemogGenderCriteria() {{
                                                demogGenderCriteriaIds = new String[]{{
                                                    add("error"),
                                                    add("earum"),
                                                }};
                                            }};
                                            longValue = "adipisci";
                                            requestPlatformTargetingValue = new TargetingValueRequestPlatformTargeting() {{
                                                requestPlatforms = new String[]{{
                                                    add("similique"),
                                                    add("ut"),
                                                    add("quidem"),
                                                    add("quis"),
                                                }};
                                            }};
                                            stringValue = "beatae";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new TargetingValueCreativeSize() {{
                                                allowedFormats = new String[]{{
                                                    add("molestiae"),
                                                    add("delectus"),
                                                    add("cupiditate"),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.TargetingValueSize[]{{
                                                    add(new TargetingValueSize() {{
                                                        height = 253625;
                                                        width = 256916;
                                                    }}),
                                                }};
                                                creativeSizeType = "nesciunt";
                                                nativeTemplate = "at";
                                                size = new TargetingValueSize() {{
                                                    height = 637856;
                                                    width = 491892;
                                                }};
                                                skippableAdType = "optio";
                                            }};
                                            dayPartTargetingValue = new TargetingValueDayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.TargetingValueDayPartTargetingDayPart[]{{
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "corporis";
                                                        endHour = 185518;
                                                        endMinute = 708898;
                                                        startHour = 532669;
                                                        startMinute = 587375;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "minima";
                                                        endHour = 809594;
                                                        endMinute = 316542;
                                                        startHour = 204072;
                                                        startMinute = 446877;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "minus";
                                                        endHour = 433077;
                                                        endMinute = 266408;
                                                        startHour = 357347;
                                                        startMinute = 298264;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "voluptates";
                                                        endHour = 978173;
                                                        endMinute = 731744;
                                                        startHour = 46013;
                                                        startMinute = 727547;
                                                    }}),
                                                }};
                                                timeZoneType = "ratione";
                                            }};
                                            demogAgeCriteriaValue = new TargetingValueDemogAgeCriteria() {{
                                                demogAgeCriteriaIds = new String[]{{
                                                    add("totam"),
                                                    add("occaecati"),
                                                }};
                                            }};
                                            demogGenderCriteriaValue = new TargetingValueDemogGenderCriteria() {{
                                                demogGenderCriteriaIds = new String[]{{
                                                    add("quo"),
                                                    add("velit"),
                                                }};
                                            }};
                                            longValue = "minus";
                                            requestPlatformTargetingValue = new TargetingValueRequestPlatformTargeting() {{
                                                requestPlatforms = new String[]{{
                                                    add("nostrum"),
                                                    add("est"),
                                                    add("impedit"),
                                                }};
                                            }};
                                            stringValue = "delectus";
                                        }}),
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new TargetingValueCreativeSize() {{
                                                allowedFormats = new String[]{{
                                                    add("vero"),
                                                    add("odit"),
                                                    add("repellat"),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.TargetingValueSize[]{{
                                                    add(new TargetingValueSize() {{
                                                        height = 362888;
                                                        width = 441321;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 45234;
                                                        width = 486410;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 325297;
                                                        width = 448369;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 496915;
                                                        width = 567846;
                                                    }}),
                                                }};
                                                creativeSizeType = "dolores";
                                                nativeTemplate = "error";
                                                size = new TargetingValueSize() {{
                                                    height = 85076;
                                                    width = 498180;
                                                }};
                                                skippableAdType = "voluptate";
                                            }};
                                            dayPartTargetingValue = new TargetingValueDayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.TargetingValueDayPartTargetingDayPart[]{{
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "itaque";
                                                        endHour = 627735;
                                                        endMinute = 763165;
                                                        startHour = 401428;
                                                        startMinute = 311486;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "commodi";
                                                        endHour = 888616;
                                                        endMinute = 810839;
                                                        startHour = 697274;
                                                        startMinute = 348192;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "quam";
                                                        endHour = 211455;
                                                        endMinute = 264619;
                                                        startHour = 59383;
                                                        startMinute = 575534;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "vero";
                                                        endHour = 194901;
                                                        endMinute = 918547;
                                                        startHour = 741232;
                                                        startMinute = 120120;
                                                    }}),
                                                }};
                                                timeZoneType = "earum";
                                            }};
                                            demogAgeCriteriaValue = new TargetingValueDemogAgeCriteria() {{
                                                demogAgeCriteriaIds = new String[]{{
                                                    add("animi"),
                                                    add("dolores"),
                                                }};
                                            }};
                                            demogGenderCriteriaValue = new TargetingValueDemogGenderCriteria() {{
                                                demogGenderCriteriaIds = new String[]{{
                                                    add("dicta"),
                                                    add("consequuntur"),
                                                    add("necessitatibus"),
                                                }};
                                            }};
                                            longValue = "nobis";
                                            requestPlatformTargetingValue = new TargetingValueRequestPlatformTargeting() {{
                                                requestPlatforms = new String[]{{
                                                    add("ducimus"),
                                                }};
                                            }};
                                            stringValue = "maiores";
                                        }}),
                                    }};
                                    inclusions = new org.openapis.openapi.models.shared.TargetingValue[]{{
                                        add(new TargetingValue() {{
                                            creativeSizeValue = new TargetingValueCreativeSize() {{
                                                allowedFormats = new String[]{{
                                                    add("laboriosam"),
                                                }};
                                                companionSizes = new org.openapis.openapi.models.shared.TargetingValueSize[]{{
                                                    add(new TargetingValueSize() {{
                                                        height = 729448;
                                                        width = 566506;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 578210;
                                                        width = 367917;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 306382;
                                                        width = 342342;
                                                    }}),
                                                    add(new TargetingValueSize() {{
                                                        height = 988749;
                                                        width = 757364;
                                                    }}),
                                                }};
                                                creativeSizeType = "sint";
                                                nativeTemplate = "enim";
                                                size = new TargetingValueSize() {{
                                                    height = 944950;
                                                    width = 657319;
                                                }};
                                                skippableAdType = "quas";
                                            }};
                                            dayPartTargetingValue = new TargetingValueDayPartTargeting() {{
                                                dayParts = new org.openapis.openapi.models.shared.TargetingValueDayPartTargetingDayPart[]{{
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "molestias";
                                                        endHour = 484966;
                                                        endMinute = 51170;
                                                        startHour = 901163;
                                                        startMinute = 104078;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "quos";
                                                        endHour = 614438;
                                                        endMinute = 826862;
                                                        startHour = 731634;
                                                        startMinute = 725574;
                                                    }}),
                                                    add(new TargetingValueDayPartTargetingDayPart() {{
                                                        dayOfWeek = "velit";
                                                        endHour = 38557;
                                                        endMinute = 963976;
                                                        startHour = 773110;
                                                        startMinute = 741238;
                                                    }}),
                                                }};
                                                timeZoneType = "ipsum";
                                            }};
                                            demogAgeCriteriaValue = new TargetingValueDemogAgeCriteria() {{
                                                demogAgeCriteriaIds = new String[]{{
                                                    add("saepe"),
                                                }};
                                            }};
                                            demogGenderCriteriaValue = new TargetingValueDemogGenderCriteria() {{
                                                demogGenderCriteriaIds = new String[]{{
                                                    add("doloremque"),
                                                    add("quis"),
                                                    add("veniam"),
                                                }};
                                            }};
                                            longValue = "libero";
                                            requestPlatformTargetingValue = new TargetingValueRequestPlatformTargeting() {{
                                                requestPlatforms = new String[]{{
                                                    add("cupiditate"),
                                                }};
                                            }};
                                            stringValue = "molestiae";
                                        }}),
                                    }};
                                    key = "eligendi";
                                }}),
                            }};
                            syndicationProduct = "possimus";
                            terms = new DealTerms() {{
                                brandingType = "non";
                                crossListedExternalDealIdType = "magnam";
                                description = "itaque";
                                estimatedGrossSpend = new Price() {{
                                    amountMicros = 1509.35;
                                    currencyCode = "asperiores";
                                    expectedCpmMicros = 3302.67;
                                    pricingType = "consequuntur";
                                }};
                                estimatedImpressionsPerDay = "facere";
                                guaranteedFixedPriceTerms = new DealTermsGuaranteedFixedPriceTerms() {{
                                    billingInfo = new DealTermsGuaranteedFixedPriceTermsBillingInfo() {{
                                        currencyConversionTimeMs = "laudantium";
                                        dfpLineItemId = "odit";
                                        originalContractedQuantity = "pariatur";
                                        price = new Price() {{
                                            amountMicros = 2273.62;
                                            currencyCode = "exercitationem";
                                            expectedCpmMicros = 688.52;
                                            pricingType = "velit";
                                        }};
                                    }};
                                    fixedPrices = new org.openapis.openapi.models.shared.PricePerBuyer[]{{
                                        add(new PricePerBuyer() {{
                                            auctionTier = "tempore";
                                            billedBuyer = new Buyer() {{
                                                accountId = "nisi";
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "voluptatibus";
                                            }};
                                            price = new Price() {{
                                                amountMicros = 3108.4;
                                                currencyCode = "blanditiis";
                                                expectedCpmMicros = 7186.27;
                                                pricingType = "nisi";
                                            }};
                                        }}),
                                        add(new PricePerBuyer() {{
                                            auctionTier = "quis";
                                            billedBuyer = new Buyer() {{
                                                accountId = "nisi";
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "libero";
                                            }};
                                            price = new Price() {{
                                                amountMicros = 7945.07;
                                                currencyCode = "facere";
                                                expectedCpmMicros = 7060.61;
                                                pricingType = "ipsum";
                                            }};
                                        }}),
                                        add(new PricePerBuyer() {{
                                            auctionTier = "ad";
                                            billedBuyer = new Buyer() {{
                                                accountId = "voluptatibus";
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "voluptatibus";
                                            }};
                                            price = new Price() {{
                                                amountMicros = 1623.58;
                                                currencyCode = "debitis";
                                                expectedCpmMicros = 2908.41;
                                                pricingType = "rerum";
                                            }};
                                        }}),
                                    }};
                                    guaranteedImpressions = "eos";
                                    guaranteedLooks = "reprehenderit";
                                    minimumDailyLooks = "nostrum";
                                }};
                                nonGuaranteedAuctionTerms = new DealTermsNonGuaranteedAuctionTerms() {{
                                    autoOptimizePrivateAuction = false;
                                    reservePricePerBuyers = new org.openapis.openapi.models.shared.PricePerBuyer[]{{
                                        add(new PricePerBuyer() {{
                                            auctionTier = "iusto";
                                            billedBuyer = new Buyer() {{
                                                accountId = "est";
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "rem";
                                            }};
                                            price = new Price() {{
                                                amountMicros = 7538.9;
                                                currencyCode = "fugiat";
                                                expectedCpmMicros = 6040.78;
                                                pricingType = "officiis";
                                            }};
                                        }}),
                                    }};
                                }};
                                nonGuaranteedFixedPriceTerms = new DealTermsNonGuaranteedFixedPriceTerms() {{
                                    fixedPrices = new org.openapis.openapi.models.shared.PricePerBuyer[]{{
                                        add(new PricePerBuyer() {{
                                            auctionTier = "dolor";
                                            billedBuyer = new Buyer() {{
                                                accountId = "dicta";
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "error";
                                            }};
                                            price = new Price() {{
                                                amountMicros = 7847.31;
                                                currencyCode = "vitae";
                                                expectedCpmMicros = 4915.91;
                                                pricingType = "esse";
                                            }};
                                        }}),
                                        add(new PricePerBuyer() {{
                                            auctionTier = "fugiat";
                                            billedBuyer = new Buyer() {{
                                                accountId = "ad";
                                            }};
                                            buyer = new Buyer() {{
                                                accountId = "aspernatur";
                                            }};
                                            price = new Price() {{
                                                amountMicros = 3165.01;
                                                currencyCode = "delectus";
                                                expectedCpmMicros = 4825.84;
                                                pricingType = "dignissimos";
                                            }};
                                        }}),
                                    }};
                                }};
                                rubiconNonGuaranteedTerms = new DealTermsRubiconNonGuaranteedTerms() {{
                                    priorityPrice = new Price() {{
                                        amountMicros = 7298.28;
                                        currencyCode = "illo";
                                        expectedCpmMicros = 691.82;
                                        pricingType = "incidunt";
                                    }};
                                    standardPrice = new Price() {{
                                        amountMicros = 8791.74;
                                        currencyCode = "saepe";
                                        expectedCpmMicros = 7348.14;
                                        pricingType = "veniam";
                                    }};
                                }};
                                sellerTimeZone = "eos";
                            }};
                            webPropertyCode = "reiciendis";
                        }}),
                    }};
                    proposal = new Proposal() {{
                        billedBuyer = new Buyer() {{
                            accountId = "earum";
                        }};;
                        buyer = new Buyer() {{
                            accountId = "reprehenderit";
                        }};;
                        buyerContacts = new org.openapis.openapi.models.shared.ContactInformation[]{{
                            add(new ContactInformation() {{
                                email = "Zula46@yahoo.com";
                                name = "Joshua Greenfelder";
                            }}),
                            add(new ContactInformation() {{
                                email = "Lane.Larkin80@hotmail.com";
                                name = "Candice Rath";
                            }}),
                            add(new ContactInformation() {{
                                email = "Maxine_Kulas@hotmail.com";
                                name = "Marcos Kerluke";
                            }}),
                        }};
                        buyerPrivateData = new PrivateData() {{
                            referenceId = "impedit";
                            referencePayload = "commodi";
                        }};;
                        dbmAdvertiserIds = new String[]{{
                            add("voluptatem"),
                        }};
                        hasBuyerSignedOff = false;
                        hasSellerSignedOff = false;
                        inventorySource = "ad";
                        isRenegotiating = false;
                        isSetupComplete = false;
                        kind = "quae";
                        labels = new org.openapis.openapi.models.shared.MarketplaceLabel[]{{
                            add(new MarketplaceLabel() {{
                                accountId = "illum";
                                createTimeMs = "praesentium";
                                deprecatedMarketplaceDealParty = new MarketplaceDealParty() {{
                                    buyer = new Buyer() {{
                                        accountId = "quidem";
                                    }};
                                    seller = new Seller() {{
                                        accountId = "cum";
                                        subAccountId = "amet";
                                    }};
                                }};
                                label = "quasi";
                            }}),
                        }};
                        lastUpdaterOrCommentorRole = "dicta";
                        name = "Ronald Wehner";
                        negotiationId = "provident";
                        originatorRole = "dolorum";
                        privateAuctionId = "necessitatibus";
                        proposalId = "provident";
                        proposalState = "repudiandae";
                        revisionNumber = "consequatur";
                        revisionTimeMs = "nemo";
                        seller = new Seller() {{
                            accountId = "molestiae";
                            subAccountId = "itaque";
                        }};;
                        sellerContacts = new org.openapis.openapi.models.shared.ContactInformation[]{{
                            add(new ContactInformation() {{
                                email = "Alva.Marvin52@yahoo.com";
                                name = "Sandra Frami DVM";
                            }}),
                            add(new ContactInformation() {{
                                email = "Kristofer86@gmail.com";
                                name = "Mr. Bethany Koch";
                            }}),
                            add(new ContactInformation() {{
                                email = "Alycia.Kuhn78@yahoo.com";
                                name = "Vincent Romaguera";
                            }}),
                        }};
                    }};;
                    proposalRevisionNumber = "soluta";
                    updateAction = "natus";
                }};;
                alt = AltEnum.JSON;
                fields = "temporibus";
                key = "officia";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "tenetur";
                userIp = "aspernatur";
            }};            

            AdexchangebuyerMarketplacedealsUpdateResponse res = sdk.marketplacedeals.adexchangebuyerMarketplacedealsUpdate(req, new AdexchangebuyerMarketplacedealsUpdateSecurity("quo", "itaque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.editAllOrderDealsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
