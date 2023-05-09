# promotions

### Available Operations

* [contentPromotionsCreate](#contentpromotionscreate) - Inserts a promotion for your Merchant Center account. If the promotion already exists, then it updates the promotion instead. To [end or delete] (https://developers.google.com/shopping-content/guides/promotions#end_a_promotion) a promotion update the time period of the promotion to a time that has already passed.
* [contentPromotionsGet](#contentpromotionsget) - Retrieves a promotion from your Merchant Center account.

## contentPromotionsCreate

Inserts a promotion for your Merchant Center account. If the promotion already exists, then it updates the promotion instead. To [end or delete] (https://developers.google.com/shopping-content/guides/promotions#end_a_promotion) a promotion update the time period of the promotion to a time that has already passed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentPromotionsCreateRequest;
import org.openapis.openapi.models.operations.ContentPromotionsCreateResponse;
import org.openapis.openapi.models.operations.ContentPromotionsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PriceAmount;
import org.openapis.openapi.models.shared.PromotionCouponValueTypeEnum;
import org.openapis.openapi.models.shared.PromotionInput;
import org.openapis.openapi.models.shared.PromotionOfferTypeEnum;
import org.openapis.openapi.models.shared.PromotionProductApplicabilityEnum;
import org.openapis.openapi.models.shared.PromotionPromotionStatus;
import org.openapis.openapi.models.shared.PromotionPromotionStatusDestinationStatus;
import org.openapis.openapi.models.shared.PromotionPromotionStatusDestinationStatusStatusEnum;
import org.openapis.openapi.models.shared.PromotionPromotionStatusPromotionIssue;
import org.openapis.openapi.models.shared.PromotionRedemptionChannelEnum;
import org.openapis.openapi.models.shared.PromotionStoreApplicabilityEnum;
import org.openapis.openapi.models.shared.TimePeriod;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentPromotionsCreateRequest req = new ContentPromotionsCreateRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                promotionInput = new PromotionInput() {{
                    brand = new String[]{{
                        add("eum"),
                    }};
                    brandExclusion = new String[]{{
                        add("id"),
                        add("nobis"),
                        add("quasi"),
                    }};
                    contentLanguage = "itaque";
                    couponValueType = PromotionCouponValueTypeEnum.BUY_M_GET_N_MONEY_OFF;
                    freeGiftDescription = "vitae";
                    freeGiftItemId = "temporibus";
                    freeGiftValue = new PriceAmount() {{
                        currency = "voluptatum";
                        value = "deserunt";
                    }};;
                    genericRedemptionCode = "aspernatur";
                    getThisQuantityDiscounted = 206373;
                    itemGroupId = new String[]{{
                        add("consequuntur"),
                        add("neque"),
                        add("saepe"),
                        add("amet"),
                    }};
                    itemGroupIdExclusion = new String[]{{
                        add("repellat"),
                        add("eos"),
                    }};
                    itemId = new String[]{{
                        add("repellat"),
                        add("mollitia"),
                        add("quaerat"),
                        add("officia"),
                    }};
                    itemIdExclusion = new String[]{{
                        add("perspiciatis"),
                    }};
                    limitQuantity = 461758;
                    limitValue = new PriceAmount() {{
                        currency = "a";
                        value = "iure";
                    }};;
                    longTitle = "nulla";
                    minimumPurchaseAmount = new PriceAmount() {{
                        currency = "recusandae";
                        value = "iste";
                    }};;
                    minimumPurchaseQuantity = 134205;
                    moneyBudget = new PriceAmount() {{
                        currency = "aspernatur";
                        value = "et";
                    }};;
                    moneyOffAmount = new PriceAmount() {{
                        currency = "ipsam";
                        value = "et";
                    }};;
                    offerType = PromotionOfferTypeEnum.GENERIC_CODE;
                    orderLimit = 904288;
                    percentOff = 121538;
                    productApplicability = PromotionProductApplicabilityEnum.ALL_PRODUCTS;
                    productType = new String[]{{
                        add("sed"),
                    }};
                    productTypeExclusion = new String[]{{
                        add("perspiciatis"),
                    }};
                    promotionDestinationIds = new String[]{{
                        add("deleniti"),
                        add("enim"),
                        add("nesciunt"),
                    }};
                    promotionDisplayDates = "saepe";
                    promotionDisplayTimePeriod = new TimePeriod() {{
                        endTime = "unde";
                        startTime = "reiciendis";
                    }};;
                    promotionEffectiveDates = "quis";
                    promotionEffectiveTimePeriod = new TimePeriod() {{
                        endTime = "modi";
                        startTime = "adipisci";
                    }};;
                    promotionId = "pariatur";
                    promotionStatus = new PromotionPromotionStatus() {{
                        creationDate = "praesentium";
                        destinationStatuses = new org.openapis.openapi.models.shared.PromotionPromotionStatusDestinationStatus[]{{
                            add(new PromotionPromotionStatusDestinationStatus() {{
                                destination = "dolore";
                                status = PromotionPromotionStatusDestinationStatusStatusEnum.IN_REVIEW;
                            }}),
                            add(new PromotionPromotionStatusDestinationStatus() {{
                                destination = "dolor";
                                status = PromotionPromotionStatusDestinationStatusStatusEnum.STOPPED;
                            }}),
                        }};
                        lastUpdateDate = "accusamus";
                        promotionIssue = new org.openapis.openapi.models.shared.PromotionPromotionStatusPromotionIssue[]{{
                            add(new PromotionPromotionStatusPromotionIssue() {{
                                code = "quia";
                                detail = "aspernatur";
                            }}),
                            add(new PromotionPromotionStatusPromotionIssue() {{
                                code = "ut";
                                detail = "non";
                            }}),
                            add(new PromotionPromotionStatusPromotionIssue() {{
                                code = "laboriosam";
                                detail = "accusantium";
                            }}),
                            add(new PromotionPromotionStatusPromotionIssue() {{
                                code = "tempora";
                                detail = "aliquam";
                            }}),
                        }};
                    }};;
                    promotionUrl = "dolorem";
                    redemptionChannel = new org.openapis.openapi.models.shared.PromotionRedemptionChannelEnum[]{{
                        add(PromotionRedemptionChannelEnum.ONLINE),
                        add(PromotionRedemptionChannelEnum.REDEMPTION_CHANNEL_UNSPECIFIED),
                        add(PromotionRedemptionChannelEnum.REDEMPTION_CHANNEL_UNSPECIFIED),
                    }};
                    shippingServiceNames = new String[]{{
                        add("vitae"),
                        add("quos"),
                    }};
                    storeApplicability = PromotionStoreApplicabilityEnum.ALL_STORES;
                    storeCode = new String[]{{
                        add("sunt"),
                        add("asperiores"),
                        add("corporis"),
                        add("vel"),
                    }};
                    storeCodeExclusion = new String[]{{
                        add("totam"),
                        add("ipsam"),
                        add("at"),
                        add("culpa"),
                    }};
                    targetCountry = "nihil";
                }};;
                accessToken = "laudantium";
                alt = AltEnum.JSON;
                callback = "odit";
                fields = "officiis";
                key = "mollitia";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "fugiat";
                uploadType = "voluptas";
                uploadProtocol = "et";
            }};            

            ContentPromotionsCreateResponse res = sdk.promotions.contentPromotionsCreate(req, new ContentPromotionsCreateSecurity("odio", "eligendi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.promotion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentPromotionsGet

Retrieves a promotion from your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentPromotionsGetRequest;
import org.openapis.openapi.models.operations.ContentPromotionsGetResponse;
import org.openapis.openapi.models.operations.ContentPromotionsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentPromotionsGetRequest req = new ContentPromotionsGetRequest("nesciunt", "harum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "pariatur";
                alt = AltEnum.JSON;
                callback = "architecto";
                fields = "culpa";
                key = "aliquam";
                oauthToken = "ut";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "doloribus";
                uploadProtocol = "sit";
            }};            

            ContentPromotionsGetResponse res = sdk.promotions.contentPromotionsGet(req, new ContentPromotionsGetSecurity("architecto", "tempore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.promotion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
