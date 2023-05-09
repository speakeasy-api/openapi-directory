# partners

### Available Operations

* [paymentsresellersubscriptionPartnersProductsList](#paymentsresellersubscriptionpartnersproductslist) - To retrieve the products that can be resold by the partner. It should be autenticated with a service account.
* [paymentsresellersubscriptionPartnersPromotionsFindEligible](#paymentsresellersubscriptionpartnerspromotionsfindeligible) - To find eligible promotions for the current user. The API requires user authorization via OAuth. The user is inferred from the authenticated OAuth credential.
* [paymentsresellersubscriptionPartnersPromotionsList](#paymentsresellersubscriptionpartnerspromotionslist) - To retrieve the promotions, such as free trial, that can be used by the partner. It should be autenticated with a service account.
* [paymentsresellersubscriptionPartnersSubscriptionsCancel](#paymentsresellersubscriptionpartnerssubscriptionscancel) - Used by partners to cancel a subscription service either immediately or by the end of the current billing cycle for their customers. It should be called directly by the partner using service accounts.
* [paymentsresellersubscriptionPartnersSubscriptionsCreate](#paymentsresellersubscriptionpartnerssubscriptionscreate) - Used by partners to create a subscription for their customers. The created subscription is associated with the end user inferred from the end user credentials. This API must be authorized by the end user using OAuth.
* [paymentsresellersubscriptionPartnersSubscriptionsEntitle](#paymentsresellersubscriptionpartnerssubscriptionsentitle) - Used by partners to entitle a previously provisioned subscription to the current end user. The end user identity is inferred from the authorized credential of the request. This API must be authorized by the end user using OAuth.
* [paymentsresellersubscriptionPartnersSubscriptionsExtend](#paymentsresellersubscriptionpartnerssubscriptionsextend) - [Opt-in only] Most partners should be on auto-extend by default. Used by partners to extend a subscription service for their customers on an ongoing basis for the subscription to remain active and renewable. It should be called directly by the partner using service accounts.
* [paymentsresellersubscriptionPartnersSubscriptionsGet](#paymentsresellersubscriptionpartnerssubscriptionsget) - Used by partners to get a subscription by id. It should be called directly by the partner using service accounts.
* [paymentsresellersubscriptionPartnersSubscriptionsProvision](#paymentsresellersubscriptionpartnerssubscriptionsprovision) - Used by partners to provision a subscription for their customers. This creates a subscription without associating it with the end user account. EntitleSubscription must be called separately using OAuth in order for the end user account to be associated with the subscription. It should be called directly by the partner using service accounts.
* [paymentsresellersubscriptionPartnersSubscriptionsUndoCancel](#paymentsresellersubscriptionpartnerssubscriptionsundocancel) - Used by partners to revoke the pending cancellation of a subscription, which is currently in `STATE_CANCEL_AT_END_OF_CYCLE` state. If the subscription is already cancelled, the request will fail. It should be called directly by the partner using service accounts.

## paymentsresellersubscriptionPartnersProductsList

To retrieve the products that can be resold by the partner. It should be autenticated with a service account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentsresellersubscriptionPartnersProductsListRequest;
import org.openapis.openapi.models.operations.PaymentsresellersubscriptionPartnersProductsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PaymentsresellersubscriptionPartnersProductsListRequest req = new PaymentsresellersubscriptionPartnersProductsListRequest("debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "suscipit";
                fields = "molestiae";
                filter = "minus";
                key = "placeat";
                oauthToken = "voluptatum";
                pageSize = 479977L;
                pageToken = "excepturi";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "recusandae";
                uploadProtocol = "temporibus";
            }};            

            PaymentsresellersubscriptionPartnersProductsListResponse res = sdk.partners.paymentsresellersubscriptionPartnersProductsList(req);

            if (res.googleCloudPaymentsResellerSubscriptionV1ListProductsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentsresellersubscriptionPartnersPromotionsFindEligible

To find eligible promotions for the current user. The API requires user authorization via OAuth. The user is inferred from the authenticated OAuth credential.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentsresellersubscriptionPartnersPromotionsFindEligibleRequest;
import org.openapis.openapi.models.operations.PaymentsresellersubscriptionPartnersPromotionsFindEligibleResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PaymentsresellersubscriptionPartnersPromotionsFindEligibleRequest req = new PaymentsresellersubscriptionPartnersPromotionsFindEligibleRequest("ab") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest = new GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest() {{
                    filter = "veritatis";
                    pageSize = 648172;
                    pageToken = "perferendis";
                }};;
                accessToken = "ipsam";
                alt = AltEnum.PROTO;
                callback = "sapiente";
                fields = "quo";
                key = "odit";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "maiores";
                uploadProtocol = "molestiae";
            }};            

            PaymentsresellersubscriptionPartnersPromotionsFindEligibleResponse res = sdk.partners.paymentsresellersubscriptionPartnersPromotionsFindEligible(req);

            if (res.googleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentsresellersubscriptionPartnersPromotionsList

To retrieve the promotions, such as free trial, that can be used by the partner. It should be autenticated with a service account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentsresellersubscriptionPartnersPromotionsListRequest;
import org.openapis.openapi.models.operations.PaymentsresellersubscriptionPartnersPromotionsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PaymentsresellersubscriptionPartnersPromotionsListRequest req = new PaymentsresellersubscriptionPartnersPromotionsListRequest("quod") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "esse";
                alt = AltEnum.MEDIA;
                callback = "porro";
                fields = "dolorum";
                filter = "dicta";
                key = "nam";
                oauthToken = "officia";
                pageSize = 582020L;
                pageToken = "fugit";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "hic";
                uploadProtocol = "optio";
            }};            

            PaymentsresellersubscriptionPartnersPromotionsListResponse res = sdk.partners.paymentsresellersubscriptionPartnersPromotionsList(req);

            if (res.googleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentsresellersubscriptionPartnersSubscriptionsCancel

Used by partners to cancel a subscription service either immediately or by the end of the current billing cycle for their customers. It should be called directly by the partner using service accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsCancelRequest;
import org.openapis.openapi.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsCancelResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReasonEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PaymentsresellersubscriptionPartnersSubscriptionsCancelRequest req = new PaymentsresellersubscriptionPartnersSubscriptionsCancelRequest("totam") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest = new GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest() {{
                    cancelImmediately = false;
                    cancellationReason = GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReasonEnum.CANCELLATION_REASON_PAST_DUE;
                }};;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "qui";
                fields = "impedit";
                key = "cum";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "excepturi";
                uploadProtocol = "aspernatur";
            }};            

            PaymentsresellersubscriptionPartnersSubscriptionsCancelResponse res = sdk.partners.paymentsresellersubscriptionPartnersSubscriptionsCancel(req);

            if (res.googleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentsresellersubscriptionPartnersSubscriptionsCreate

Used by partners to create a subscription for their customers. The created subscription is associated with the end user inferred from the end user credentials. This API must be authorized by the end user using OAuth.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsCreateRequest;
import org.openapis.openapi.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1Amount;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1Duration;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1Location;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1ProductPayload;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsReasonEnum;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetailsBillingCycleSpecEnum;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PaymentsresellersubscriptionPartnersSubscriptionsCreateRequest req = new PaymentsresellersubscriptionPartnersSubscriptionsCreateRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudPaymentsResellerSubscriptionV1SubscriptionInput = new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput() {{
                    cancellationDetails = new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails() {{
                        reason = GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsReasonEnum.CANCELLATION_REASON_UPGRADE_DOWNGRADE;
                    }};;
                    lineItems = new org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput[]{{
                        add(new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput() {{
                            amount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                amountMicros = "iste";
                                currencyCode = "dolor";
                            }};
                            lineItemPromotionSpecs = new org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput[]{{
                                add(new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput() {{
                                    freeTrialDuration = new GoogleCloudPaymentsResellerSubscriptionV1Duration() {{
                                        count = 386489;
                                        unit = GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum.DAY;
                                    }};
                                    introductoryPricingDetails = new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput() {{
                                        introductoryPricingSpecs = new org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput[]{{
                                            add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                                discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                                    amountMicros = "fuga";
                                                    currencyCode = "in";
                                                }};
                                            }}),
                                            add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                                discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                                    amountMicros = "corporis";
                                                    currencyCode = "iste";
                                                }};
                                            }}),
                                            add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                                discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                                    amountMicros = "iure";
                                                    currencyCode = "saepe";
                                                }};
                                            }}),
                                            add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                                discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                                    amountMicros = "quidem";
                                                    currencyCode = "architecto";
                                                }};
                                            }}),
                                        }};
                                    }};
                                    promotion = "ipsa";
                                }}),
                                add(new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput() {{
                                    freeTrialDuration = new GoogleCloudPaymentsResellerSubscriptionV1Duration() {{
                                        count = 969810;
                                        unit = GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum.DAY;
                                    }};
                                    introductoryPricingDetails = new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput() {{
                                        introductoryPricingSpecs = new org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput[]{{
                                            add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                                discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                                    amountMicros = "laborum";
                                                    currencyCode = "dolores";
                                                }};
                                            }}),
                                            add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                                discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                                    amountMicros = "dolorem";
                                                    currencyCode = "corporis";
                                                }};
                                            }}),
                                            add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                                discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                                    amountMicros = "explicabo";
                                                    currencyCode = "nobis";
                                                }};
                                            }}),
                                        }};
                                    }};
                                    promotion = "enim";
                                }}),
                                add(new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput() {{
                                    freeTrialDuration = new GoogleCloudPaymentsResellerSubscriptionV1Duration() {{
                                        count = 607831;
                                        unit = GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum.MONTH;
                                    }};
                                    introductoryPricingDetails = new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput() {{
                                        introductoryPricingSpecs = new org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput[]{{
                                            add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                                discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                                    amountMicros = "excepturi";
                                                    currencyCode = "accusantium";
                                                }};
                                            }}),
                                            add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                                discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                                    amountMicros = "iure";
                                                    currencyCode = "culpa";
                                                }};
                                            }}),
                                        }};
                                    }};
                                    promotion = "doloribus";
                                }}),
                            }};
                            oneTimeRecurrenceDetails = new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails() {{
                                servicePeriod = new GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod() {{
                                    endTime = "sapiente";
                                    startTime = "architecto";
                                }};
                            }};
                            product = "mollitia";
                            productPayload = new GoogleCloudPaymentsResellerSubscriptionV1ProductPayload() {{
                                googleOnePayload = new GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload() {{
                                    campaigns = new String[]{{
                                        add("culpa"),
                                    }};
                                    offering = GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum.OFFERING_UNSPECIFIED;
                                    salesChannel = GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum.CHANNEL_ONLINE_IOS_APP;
                                    storeId = "mollitia";
                                }};
                                youtubePayload = new GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload() {{
                                    partnerEligibilityIds = new String[]{{
                                        add("numquam"),
                                        add("commodi"),
                                        add("quam"),
                                    }};
                                }};
                            }};
                        }}),
                    }};
                    name = "Shannon Mueller";
                    partnerUserToken = "vitae";
                    products = new String[]{{
                        add("animi"),
                        add("enim"),
                        add("odit"),
                    }};
                    promotionSpecs = new org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput[]{{
                        add(new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput() {{
                            freeTrialDuration = new GoogleCloudPaymentsResellerSubscriptionV1Duration() {{
                                count = 196582;
                                unit = GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum.DAY;
                            }};
                            introductoryPricingDetails = new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput() {{
                                introductoryPricingSpecs = new org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput[]{{
                                    add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                        discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                            amountMicros = "id";
                                            currencyCode = "possimus";
                                        }};
                                    }}),
                                    add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                        discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                            amountMicros = "aut";
                                            currencyCode = "quasi";
                                        }};
                                    }}),
                                }};
                            }};
                            promotion = "error";
                        }}),
                        add(new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput() {{
                            freeTrialDuration = new GoogleCloudPaymentsResellerSubscriptionV1Duration() {{
                                count = 837945;
                                unit = GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum.DAY;
                            }};
                            introductoryPricingDetails = new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput() {{
                                introductoryPricingSpecs = new org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput[]{{
                                    add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                        discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                            amountMicros = "reiciendis";
                                            currencyCode = "voluptatibus";
                                        }};
                                    }}),
                                }};
                            }};
                            promotion = "vero";
                        }}),
                        add(new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput() {{
                            freeTrialDuration = new GoogleCloudPaymentsResellerSubscriptionV1Duration() {{
                                count = 468651;
                                unit = GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum.MONTH;
                            }};
                            introductoryPricingDetails = new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput() {{
                                introductoryPricingSpecs = new org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput[]{{
                                    add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                        discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                            amountMicros = "ipsa";
                                            currencyCode = "omnis";
                                        }};
                                    }}),
                                    add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                        discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                            amountMicros = "voluptate";
                                            currencyCode = "cum";
                                        }};
                                    }}),
                                    add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                        discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                            amountMicros = "perferendis";
                                            currencyCode = "doloremque";
                                        }};
                                    }}),
                                    add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                        discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                            amountMicros = "reprehenderit";
                                            currencyCode = "ut";
                                        }};
                                    }}),
                                }};
                            }};
                            promotion = "maiores";
                        }}),
                        add(new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput() {{
                            freeTrialDuration = new GoogleCloudPaymentsResellerSubscriptionV1Duration() {{
                                count = 120196;
                                unit = GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum.MONTH;
                            }};
                            introductoryPricingDetails = new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput() {{
                                introductoryPricingSpecs = new org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput[]{{
                                    add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                        discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                            amountMicros = "iusto";
                                            currencyCode = "dicta";
                                        }};
                                    }}),
                                    add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                        discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                            amountMicros = "harum";
                                            currencyCode = "enim";
                                        }};
                                    }}),
                                }};
                            }};
                            promotion = "accusamus";
                        }}),
                    }};
                    promotions = new String[]{{
                        add("repudiandae"),
                        add("quae"),
                    }};
                    serviceLocation = new GoogleCloudPaymentsResellerSubscriptionV1Location() {{
                        postalCode = "65582";
                        regionCode = "praesentium";
                    }};;
                    upgradeDowngradeDetails = new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails() {{
                        billingCycleSpec = GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetailsBillingCycleSpecEnum.BILLING_CYCLE_SPEC_ALIGN_WITH_PREVIOUS_SUBSCRIPTION;
                        previousSubscriptionId = "voluptates";
                    }};;
                }};;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "sint";
                fields = "veritatis";
                key = "itaque";
                oauthToken = "incidunt";
                prettyPrint = false;
                quotaUser = "enim";
                subscriptionId = "consequatur";
                uploadType = "est";
                uploadProtocol = "quibusdam";
            }};            

            PaymentsresellersubscriptionPartnersSubscriptionsCreateResponse res = sdk.partners.paymentsresellersubscriptionPartnersSubscriptionsCreate(req);

            if (res.googleCloudPaymentsResellerSubscriptionV1Subscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentsresellersubscriptionPartnersSubscriptionsEntitle

Used by partners to entitle a previously provisioned subscription to the current end user. The end user identity is inferred from the authorized credential of the request. This API must be authorized by the end user using OAuth.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsEntitleRequest;
import org.openapis.openapi.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsEntitleResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PaymentsresellersubscriptionPartnersSubscriptionsEntitleRequest req = new PaymentsresellersubscriptionPartnersSubscriptionsEntitleRequest("explicabo") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quibusdam", "labore");
                    put("modi", "qui");
                    put("aliquid", "cupiditate");
                }};
                accessToken = "quos";
                alt = AltEnum.JSON;
                callback = "magni";
                fields = "assumenda";
                key = "ipsam";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "dolorum";
                uploadProtocol = "excepturi";
            }};            

            PaymentsresellersubscriptionPartnersSubscriptionsEntitleResponse res = sdk.partners.paymentsresellersubscriptionPartnersSubscriptionsEntitle(req);

            if (res.googleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentsresellersubscriptionPartnersSubscriptionsExtend

[Opt-in only] Most partners should be on auto-extend by default. Used by partners to extend a subscription service for their customers on an ongoing basis for the subscription to remain active and renewable. It should be called directly by the partner using service accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsExtendRequest;
import org.openapis.openapi.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsExtendResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1Duration;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1Extension;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PaymentsresellersubscriptionPartnersSubscriptionsExtendRequest req = new PaymentsresellersubscriptionPartnersSubscriptionsExtendRequest("tempora") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest = new GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest() {{
                    extension = new GoogleCloudPaymentsResellerSubscriptionV1Extension() {{
                        duration = new GoogleCloudPaymentsResellerSubscriptionV1Duration() {{
                            count = 735194;
                            unit = GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum.UNIT_UNSPECIFIED;
                        }};;
                        partnerUserToken = "delectus";
                    }};;
                    requestId = "eum";
                }};;
                accessToken = "non";
                alt = AltEnum.PROTO;
                callback = "sint";
                fields = "aliquid";
                key = "provident";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "officia";
                uploadProtocol = "dolor";
            }};            

            PaymentsresellersubscriptionPartnersSubscriptionsExtendResponse res = sdk.partners.paymentsresellersubscriptionPartnersSubscriptionsExtend(req);

            if (res.googleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentsresellersubscriptionPartnersSubscriptionsGet

Used by partners to get a subscription by id. It should be called directly by the partner using service accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsGetRequest;
import org.openapis.openapi.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PaymentsresellersubscriptionPartnersSubscriptionsGetRequest req = new PaymentsresellersubscriptionPartnersSubscriptionsGetRequest("debitis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorum";
                alt = AltEnum.MEDIA;
                callback = "in";
                fields = "illum";
                key = "maiores";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "magnam";
                uploadProtocol = "cumque";
            }};            

            PaymentsresellersubscriptionPartnersSubscriptionsGetResponse res = sdk.partners.paymentsresellersubscriptionPartnersSubscriptionsGet(req);

            if (res.googleCloudPaymentsResellerSubscriptionV1Subscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentsresellersubscriptionPartnersSubscriptionsProvision

Used by partners to provision a subscription for their customers. This creates a subscription without associating it with the end user account. EntitleSubscription must be called separately using OAuth in order for the end user account to be associated with the subscription. It should be called directly by the partner using service accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsProvisionRequest;
import org.openapis.openapi.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsProvisionResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1Amount;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1Duration;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1Location;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1ProductPayload;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsReasonEnum;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetailsBillingCycleSpecEnum;
import org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PaymentsresellersubscriptionPartnersSubscriptionsProvisionRequest req = new PaymentsresellersubscriptionPartnersSubscriptionsProvisionRequest("facere") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudPaymentsResellerSubscriptionV1SubscriptionInput = new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput() {{
                    cancellationDetails = new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails() {{
                        reason = GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsReasonEnum.CANCELLATION_REASON_ACCIDENTAL_PURCHASE;
                    }};;
                    lineItems = new org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput[]{{
                        add(new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput() {{
                            amount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                amountMicros = "accusamus";
                                currencyCode = "non";
                            }};
                            lineItemPromotionSpecs = new org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput[]{{
                                add(new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput() {{
                                    freeTrialDuration = new GoogleCloudPaymentsResellerSubscriptionV1Duration() {{
                                        count = 313218;
                                        unit = GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum.DAY;
                                    }};
                                    introductoryPricingDetails = new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput() {{
                                        introductoryPricingSpecs = new org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput[]{{
                                            add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                                discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                                    amountMicros = "quidem";
                                                    currencyCode = "provident";
                                                }};
                                            }}),
                                            add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                                discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                                    amountMicros = "nam";
                                                    currencyCode = "id";
                                                }};
                                            }}),
                                            add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                                discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                                    amountMicros = "blanditiis";
                                                    currencyCode = "deleniti";
                                                }};
                                            }}),
                                            add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                                discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                                    amountMicros = "sapiente";
                                                    currencyCode = "amet";
                                                }};
                                            }}),
                                        }};
                                    }};
                                    promotion = "deserunt";
                                }}),
                                add(new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput() {{
                                    freeTrialDuration = new GoogleCloudPaymentsResellerSubscriptionV1Duration() {{
                                        count = 394869;
                                        unit = GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum.MONTH;
                                    }};
                                    introductoryPricingDetails = new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput() {{
                                        introductoryPricingSpecs = new org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput[]{{
                                            add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                                discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                                    amountMicros = "omnis";
                                                    currencyCode = "molestiae";
                                                }};
                                            }}),
                                            add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                                discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                                    amountMicros = "perferendis";
                                                    currencyCode = "nihil";
                                                }};
                                            }}),
                                            add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                                discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                                    amountMicros = "magnam";
                                                    currencyCode = "distinctio";
                                                }};
                                            }}),
                                        }};
                                    }};
                                    promotion = "id";
                                }}),
                                add(new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput() {{
                                    freeTrialDuration = new GoogleCloudPaymentsResellerSubscriptionV1Duration() {{
                                        count = 287991;
                                        unit = GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum.UNIT_UNSPECIFIED;
                                    }};
                                    introductoryPricingDetails = new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput() {{
                                        introductoryPricingSpecs = new org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput[]{{
                                            add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                                discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                                    amountMicros = "natus";
                                                    currencyCode = "nobis";
                                                }};
                                            }}),
                                            add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                                discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                                    amountMicros = "eum";
                                                    currencyCode = "vero";
                                                }};
                                            }}),
                                        }};
                                    }};
                                    promotion = "aspernatur";
                                }}),
                            }};
                            oneTimeRecurrenceDetails = new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails() {{
                                servicePeriod = new GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod() {{
                                    endTime = "architecto";
                                    startTime = "magnam";
                                }};
                            }};
                            product = "et";
                            productPayload = new GoogleCloudPaymentsResellerSubscriptionV1ProductPayload() {{
                                googleOnePayload = new GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload() {{
                                    campaigns = new String[]{{
                                        add("ullam"),
                                        add("provident"),
                                        add("quos"),
                                    }};
                                    offering = GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum.OFFERING_VAS_STANDALONE;
                                    salesChannel = GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum.CHANNEL_UNSPECIFIED;
                                    storeId = "mollitia";
                                }};
                                youtubePayload = new GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload() {{
                                    partnerEligibilityIds = new String[]{{
                                        add("mollitia"),
                                        add("ad"),
                                        add("eum"),
                                        add("dolor"),
                                    }};
                                }};
                            }};
                        }}),
                        add(new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput() {{
                            amount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                amountMicros = "necessitatibus";
                                currencyCode = "odit";
                            }};
                            lineItemPromotionSpecs = new org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput[]{{
                                add(new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput() {{
                                    freeTrialDuration = new GoogleCloudPaymentsResellerSubscriptionV1Duration() {{
                                        count = 97260;
                                        unit = GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum.MONTH;
                                    }};
                                    introductoryPricingDetails = new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput() {{
                                        introductoryPricingSpecs = new org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput[]{{
                                            add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                                discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                                    amountMicros = "debitis";
                                                    currencyCode = "eius";
                                                }};
                                            }}),
                                            add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                                discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                                    amountMicros = "maxime";
                                                    currencyCode = "deleniti";
                                                }};
                                            }}),
                                            add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                                discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                                    amountMicros = "facilis";
                                                    currencyCode = "in";
                                                }};
                                            }}),
                                            add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                                discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                                    amountMicros = "architecto";
                                                    currencyCode = "architecto";
                                                }};
                                            }}),
                                        }};
                                    }};
                                    promotion = "repudiandae";
                                }}),
                                add(new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput() {{
                                    freeTrialDuration = new GoogleCloudPaymentsResellerSubscriptionV1Duration() {{
                                        count = 352312;
                                        unit = GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum.DAY;
                                    }};
                                    introductoryPricingDetails = new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput() {{
                                        introductoryPricingSpecs = new org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput[]{{
                                            add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                                discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                                    amountMicros = "repellat";
                                                    currencyCode = "quibusdam";
                                                }};
                                            }}),
                                            add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                                discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                                    amountMicros = "sed";
                                                    currencyCode = "saepe";
                                                }};
                                            }}),
                                        }};
                                    }};
                                    promotion = "pariatur";
                                }}),
                            }};
                            oneTimeRecurrenceDetails = new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails() {{
                                servicePeriod = new GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod() {{
                                    endTime = "accusantium";
                                    startTime = "consequuntur";
                                }};
                            }};
                            product = "praesentium";
                            productPayload = new GoogleCloudPaymentsResellerSubscriptionV1ProductPayload() {{
                                googleOnePayload = new GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload() {{
                                    campaigns = new String[]{{
                                        add("magni"),
                                        add("sunt"),
                                        add("quo"),
                                    }};
                                    offering = GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum.OFFERING_SOFT_BUNDLE;
                                    salesChannel = GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum.CHANNEL_ONLINE_IOS_APP;
                                    storeId = "maxime";
                                }};
                                youtubePayload = new GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload() {{
                                    partnerEligibilityIds = new String[]{{
                                        add("excepturi"),
                                        add("odit"),
                                    }};
                                }};
                            }};
                        }}),
                        add(new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput() {{
                            amount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                amountMicros = "ea";
                                currencyCode = "accusantium";
                            }};
                            lineItemPromotionSpecs = new org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput[]{{
                                add(new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput() {{
                                    freeTrialDuration = new GoogleCloudPaymentsResellerSubscriptionV1Duration() {{
                                        count = 982575;
                                        unit = GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum.DAY;
                                    }};
                                    introductoryPricingDetails = new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput() {{
                                        introductoryPricingSpecs = new org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput[]{{
                                            add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                                discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                                    amountMicros = "voluptate";
                                                    currencyCode = "autem";
                                                }};
                                            }}),
                                            add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                                discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                                    amountMicros = "nam";
                                                    currencyCode = "eaque";
                                                }};
                                            }}),
                                        }};
                                    }};
                                    promotion = "pariatur";
                                }}),
                            }};
                            oneTimeRecurrenceDetails = new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails() {{
                                servicePeriod = new GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod() {{
                                    endTime = "nemo";
                                    startTime = "voluptatibus";
                                }};
                            }};
                            product = "perferendis";
                            productPayload = new GoogleCloudPaymentsResellerSubscriptionV1ProductPayload() {{
                                googleOnePayload = new GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload() {{
                                    campaigns = new String[]{{
                                        add("amet"),
                                        add("aut"),
                                        add("cumque"),
                                        add("corporis"),
                                    }};
                                    offering = GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum.OFFERING_SOFT_BUNDLE;
                                    salesChannel = GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum.CHANNEL_ONLINE_ANDROID_APP;
                                    storeId = "nobis";
                                }};
                                youtubePayload = new GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload() {{
                                    partnerEligibilityIds = new String[]{{
                                        add("quis"),
                                    }};
                                }};
                            }};
                        }}),
                    }};
                    name = "Lance Becker";
                    partnerUserToken = "eos";
                    products = new String[]{{
                        add("dolores"),
                    }};
                    promotionSpecs = new org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput[]{{
                        add(new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput() {{
                            freeTrialDuration = new GoogleCloudPaymentsResellerSubscriptionV1Duration() {{
                                count = 463451;
                                unit = GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum.UNIT_UNSPECIFIED;
                            }};
                            introductoryPricingDetails = new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput() {{
                                introductoryPricingSpecs = new org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput[]{{
                                    add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                        discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                            amountMicros = "nostrum";
                                            currencyCode = "hic";
                                        }};
                                    }}),
                                    add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                        discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                            amountMicros = "recusandae";
                                            currencyCode = "omnis";
                                        }};
                                    }}),
                                    add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                        discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                            amountMicros = "facilis";
                                            currencyCode = "perspiciatis";
                                        }};
                                    }}),
                                    add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                        discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                            amountMicros = "voluptatem";
                                            currencyCode = "porro";
                                        }};
                                    }}),
                                }};
                            }};
                            promotion = "consequuntur";
                        }}),
                        add(new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput() {{
                            freeTrialDuration = new GoogleCloudPaymentsResellerSubscriptionV1Duration() {{
                                count = 500026;
                                unit = GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum.MONTH;
                            }};
                            introductoryPricingDetails = new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput() {{
                                introductoryPricingSpecs = new org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput[]{{
                                    add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                        discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                            amountMicros = "occaecati";
                                            currencyCode = "rerum";
                                        }};
                                    }}),
                                }};
                            }};
                            promotion = "adipisci";
                        }}),
                        add(new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput() {{
                            freeTrialDuration = new GoogleCloudPaymentsResellerSubscriptionV1Duration() {{
                                count = 992397;
                                unit = GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum.DAY;
                            }};
                            introductoryPricingDetails = new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput() {{
                                introductoryPricingSpecs = new org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput[]{{
                                    add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                        discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                            amountMicros = "iste";
                                            currencyCode = "dolorum";
                                        }};
                                    }}),
                                    add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                        discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                            amountMicros = "deleniti";
                                            currencyCode = "pariatur";
                                        }};
                                    }}),
                                }};
                            }};
                            promotion = "provident";
                        }}),
                        add(new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput() {{
                            freeTrialDuration = new GoogleCloudPaymentsResellerSubscriptionV1Duration() {{
                                count = 750844;
                                unit = GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum.DAY;
                            }};
                            introductoryPricingDetails = new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput() {{
                                introductoryPricingSpecs = new org.openapis.openapi.models.shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput[]{{
                                    add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                        discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                            amountMicros = "quaerat";
                                            currencyCode = "quos";
                                        }};
                                    }}),
                                    add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                        discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                            amountMicros = "aliquid";
                                            currencyCode = "dolorem";
                                        }};
                                    }}),
                                    add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                        discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                            amountMicros = "dolorem";
                                            currencyCode = "dolor";
                                        }};
                                    }}),
                                    add(new GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput() {{
                                        discountAmount = new GoogleCloudPaymentsResellerSubscriptionV1Amount() {{
                                            amountMicros = "qui";
                                            currencyCode = "ipsum";
                                        }};
                                    }}),
                                }};
                            }};
                            promotion = "hic";
                        }}),
                    }};
                    promotions = new String[]{{
                        add("cum"),
                        add("voluptate"),
                        add("dignissimos"),
                    }};
                    serviceLocation = new GoogleCloudPaymentsResellerSubscriptionV1Location() {{
                        postalCode = "26200-0443";
                        regionCode = "accusamus";
                    }};;
                    upgradeDowngradeDetails = new GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails() {{
                        billingCycleSpec = GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetailsBillingCycleSpecEnum.BILLING_CYCLE_SPEC_START_IMMEDIATELY;
                        previousSubscriptionId = "voluptatibus";
                    }};;
                }};;
                accessToken = "voluptas";
                alt = AltEnum.MEDIA;
                callback = "eos";
                fields = "atque";
                key = "sit";
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "ab";
                subscriptionId = "soluta";
                uploadType = "dolorum";
                uploadProtocol = "iusto";
            }};            

            PaymentsresellersubscriptionPartnersSubscriptionsProvisionResponse res = sdk.partners.paymentsresellersubscriptionPartnersSubscriptionsProvision(req);

            if (res.googleCloudPaymentsResellerSubscriptionV1Subscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentsresellersubscriptionPartnersSubscriptionsUndoCancel

Used by partners to revoke the pending cancellation of a subscription, which is currently in `STATE_CANCEL_AT_END_OF_CYCLE` state. If the subscription is already cancelled, the request will fail. It should be called directly by the partner using service accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelRequest;
import org.openapis.openapi.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelRequest req = new PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelRequest("voluptate") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("omnis", "necessitatibus");
                    put("distinctio", "asperiores");
                    put("nihil", "ipsum");
                }};
                accessToken = "voluptate";
                alt = AltEnum.MEDIA;
                callback = "saepe";
                fields = "eius";
                key = "aspernatur";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "optio";
                uploadProtocol = "accusamus";
            }};            

            PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelResponse res = sdk.partners.paymentsresellersubscriptionPartnersSubscriptionsUndoCancel(req);

            if (res.googleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
