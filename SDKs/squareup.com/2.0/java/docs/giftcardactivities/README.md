# giftCardActivities

### Available Operations

* [createGiftCardActivity](#creategiftcardactivity) - CreateGiftCardActivity
* [listGiftCardActivities](#listgiftcardactivities) - ListGiftCardActivities

## createGiftCardActivity

Creates a gift card activity. For more information, see 
[GiftCardActivity](https://developer.squareup.com/docs/gift-cards/using-gift-cards-api#giftcardactivity) and 
[Using activated gift cards](https://developer.squareup.com/docs/gift-cards/using-gift-cards-api#using-activated-gift-cards).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGiftCardActivityResponse;
import org.openapis.openapi.models.operations.CreateGiftCardActivitySecurity;
import org.openapis.openapi.models.shared.CreateGiftCardActivityRequest;
import org.openapis.openapi.models.shared.GiftCardActivity;
import org.openapis.openapi.models.shared.GiftCardActivityActivate;
import org.openapis.openapi.models.shared.GiftCardActivityAdjustDecrement;
import org.openapis.openapi.models.shared.GiftCardActivityAdjustIncrement;
import org.openapis.openapi.models.shared.GiftCardActivityBlock;
import org.openapis.openapi.models.shared.GiftCardActivityClearBalance;
import org.openapis.openapi.models.shared.GiftCardActivityDeactivate;
import org.openapis.openapi.models.shared.GiftCardActivityImport;
import org.openapis.openapi.models.shared.GiftCardActivityImportReversal;
import org.openapis.openapi.models.shared.GiftCardActivityLoad;
import org.openapis.openapi.models.shared.GiftCardActivityRedeem;
import org.openapis.openapi.models.shared.GiftCardActivityRefund;
import org.openapis.openapi.models.shared.GiftCardActivityUnblock;
import org.openapis.openapi.models.shared.GiftCardActivityUnlinkedActivityRefund;
import org.openapis.openapi.models.shared.Money;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateGiftCardActivityRequest req = new CreateGiftCardActivityRequest(                new GiftCardActivity("asperiores", "ratione") {{
                                activateActivityDetails = new GiftCardActivityActivate() {{
                                    amountMoney = new Money() {{
                                        amount = 179445L;
                                        currency = "laborum";
                                    }};;
                                    buyerPaymentInstrumentIds = new String[]{{
                                        add("incidunt"),
                                        add("pariatur"),
                                        add("aspernatur"),
                                    }};
                                    lineItemUid = "aperiam";
                                    orderId = "itaque";
                                    referenceId = "quo";
                                }};;
                                adjustDecrementActivityDetails = new GiftCardActivityAdjustDecrement(                new Money() {{
                                                    amount = 595025L;
                                                    currency = "accusantium";
                                                }};, "debitis");;
                                adjustIncrementActivityDetails = new GiftCardActivityAdjustIncrement(                new Money() {{
                                                    amount = 654718L;
                                                    currency = "aliquam";
                                                }};, "quasi");;
                                blockActivityDetails = new GiftCardActivityBlock("repellendus");;
                                clearBalanceActivityDetails = new GiftCardActivityClearBalance("architecto");;
                                createdAt = "hic";
                                deactivateActivityDetails = new GiftCardActivityDeactivate("labore");;
                                giftCardBalanceMoney = new Money() {{
                                    amount = 395184L;
                                    currency = "voluptas";
                                }};;
                                giftCardGan = "saepe";
                                giftCardId = "praesentium";
                                id = "5156fff7-3fdf-454f-9d5e-a9543398dafb";
                                importActivityDetails = new GiftCardActivityImport(                new Money() {{
                                                    amount = 262524L;
                                                    currency = "dolores";
                                                }};);;
                                importReversalActivityDetails = new GiftCardActivityImportReversal(                new Money() {{
                                                    amount = 679542L;
                                                    currency = "deleniti";
                                                }};);;
                                loadActivityDetails = new GiftCardActivityLoad() {{
                                    amountMoney = new Money() {{
                                        amount = 825369L;
                                        currency = "iure";
                                    }};;
                                    buyerPaymentInstrumentIds = new String[]{{
                                        add("neque"),
                                    }};
                                    lineItemUid = "laudantium";
                                    orderId = "quos";
                                    referenceId = "saepe";
                                }};;
                                redeemActivityDetails = new GiftCardActivityRedeem(                new Money() {{
                                                    amount = 275913L;
                                                    currency = "pariatur";
                                                }};) {{
                                    paymentId = "deleniti";
                                    referenceId = "aut";
                                }};;
                                refundActivityDetails = new GiftCardActivityRefund("nesciunt") {{
                                    amountMoney = new Money() {{
                                        amount = 624164L;
                                        currency = "necessitatibus";
                                    }};;
                                    paymentId = "culpa";
                                    referenceId = "quis";
                                }};;
                                unblockActivityDetails = new GiftCardActivityUnblock("asperiores");;
                                unlinkedActivityRefundActivityDetails = new GiftCardActivityUnlinkedActivityRefund(                new Money() {{
                                                    amount = 610335L;
                                                    currency = "harum";
                                                }};) {{
                                    paymentId = "sunt";
                                    referenceId = "atque";
                                }};;
                            }};, "similique");            

            CreateGiftCardActivityResponse res = sdk.giftCardActivities.createGiftCardActivity(req, new CreateGiftCardActivitySecurity("qui") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createGiftCardActivityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listGiftCardActivities

Lists gift card activities. By default, you get gift card activities for all
gift cards in the seller's account. You can optionally specify query parameters to
filter the list. For example, you can get a list of gift card activities for a gift card,
for all gift cards in a specific region, or for activities within a time window.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGiftCardActivitiesRequest;
import org.openapis.openapi.models.operations.ListGiftCardActivitiesResponse;
import org.openapis.openapi.models.operations.ListGiftCardActivitiesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListGiftCardActivitiesRequest req = new ListGiftCardActivitiesRequest() {{
                beginTime = "tempora";
                cursor = "modi";
                endTime = "sapiente";
                giftCardId = "possimus";
                limit = 394154L;
                locationId = "ab";
                sortOrder = "omnis";
                type = "aut";
            }};            

            ListGiftCardActivitiesResponse res = sdk.giftCardActivities.listGiftCardActivities(req, new ListGiftCardActivitiesSecurity("ipsum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listGiftCardActivitiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
