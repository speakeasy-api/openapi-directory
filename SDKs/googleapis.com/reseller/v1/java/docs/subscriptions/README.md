# subscriptions

### Available Operations

* [resellerSubscriptionsActivate](#resellersubscriptionsactivate) - Activates a subscription previously suspended by the reseller. If you did not suspend the customer subscription and it is suspended for any other reason, such as for abuse or a pending ToS acceptance, this call will not reactivate the customer subscription.
* [resellerSubscriptionsChangePlan](#resellersubscriptionschangeplan) - Updates a subscription plan. Use this method to update a plan for a 30-day trial or a flexible plan subscription to an annual commitment plan with monthly or yearly payments. How a plan is updated differs depending on the plan and the products. For more information, see the description in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_subscription_plan).
* [resellerSubscriptionsChangeRenewalSettings](#resellersubscriptionschangerenewalsettings) - Updates a user license's renewal settings. This is applicable for accounts with annual commitment plans only. For more information, see the description in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_renewal).
* [resellerSubscriptionsChangeSeats](#resellersubscriptionschangeseats) - Updates a subscription's user license settings. For more information about updating an annual commitment plan or a flexible plan subscription’s licenses, see [Manage Subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_subscription_seat).
* [resellerSubscriptionsDelete](#resellersubscriptionsdelete) - Cancels, suspends, or transfers a subscription to direct.
* [resellerSubscriptionsGet](#resellersubscriptionsget) - Gets a specific subscription. The `subscriptionId` can be found using the [Retrieve all reseller subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#get_all_subscriptions) method. For more information about retrieving a specific subscription, see the information descrived in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#get_subscription).
* [resellerSubscriptionsInsert](#resellersubscriptionsinsert) - Creates or transfer a subscription. Create a subscription for a customer's account that you ordered using the [Order a new customer account](/admin-sdk/reseller/v1/reference/customers/insert.html) method. For more information about creating a subscription for different payment plans, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#create_subscription).\ If you did not order the customer's account using the customer insert method, use the customer's `customerAuthToken` when creating a subscription for that customer. If transferring a G Suite subscription with an associated Google Drive or Google Vault subscription, use the [batch operation](/admin-sdk/reseller/v1/how-tos/batch.html) to transfer all of these subscriptions. For more information, see how to [transfer subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#transfer_a_subscription).
* [resellerSubscriptionsList](#resellersubscriptionslist) - Lists of subscriptions managed by the reseller. The list can be all subscriptions, all of a customer's subscriptions, or all of a customer's transferable subscriptions. Optionally, this method can filter the response by a `customerNamePrefix`. For more information, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions).
* [resellerSubscriptionsStartPaidService](#resellersubscriptionsstartpaidservice) - Immediately move a 30-day free trial subscription to a paid service subscription. This method is only applicable if a payment plan has already been set up for the 30-day trial subscription. For more information, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#paid_service).
* [resellerSubscriptionsSuspend](#resellersubscriptionssuspend) - Suspends an active subscription. You can use this method to suspend a paid subscription that is currently in the `ACTIVE` state. * For `FLEXIBLE` subscriptions, billing is paused. * For `ANNUAL_MONTHLY_PAY` or `ANNUAL_YEARLY_PAY` subscriptions: * Suspending the subscription does not change the renewal date that was originally committed to. * A suspended subscription does not renew. If you activate the subscription after the original renewal date, a new annual subscription will be created, starting on the day of activation. We strongly encourage you to suspend subscriptions only for short periods of time as suspensions over 60 days may result in the subscription being cancelled.

## resellerSubscriptionsActivate

Activates a subscription previously suspended by the reseller. If you did not suspend the customer subscription and it is suspended for any other reason, such as for abuse or a pending ToS acceptance, this call will not reactivate the customer subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResellerSubscriptionsActivateRequest;
import org.openapis.openapi.models.operations.ResellerSubscriptionsActivateResponse;
import org.openapis.openapi.models.operations.ResellerSubscriptionsActivateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResellerSubscriptionsActivateRequest req = new ResellerSubscriptionsActivateRequest("sint", "veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "incidunt";
                alt = AltEnum.JSON;
                callback = "consequatur";
                fields = "est";
                key = "quibusdam";
                oauthToken = "explicabo";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "distinctio";
                uploadProtocol = "quibusdam";
            }};            

            ResellerSubscriptionsActivateResponse res = sdk.subscriptions.resellerSubscriptionsActivate(req, new ResellerSubscriptionsActivateSecurity("labore", "modi") {{
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

## resellerSubscriptionsChangePlan

Updates a subscription plan. Use this method to update a plan for a 30-day trial or a flexible plan subscription to an annual commitment plan with monthly or yearly payments. How a plan is updated differs depending on the plan and the products. For more information, see the description in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_subscription_plan).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResellerSubscriptionsChangePlanRequest;
import org.openapis.openapi.models.operations.ResellerSubscriptionsChangePlanResponse;
import org.openapis.openapi.models.operations.ResellerSubscriptionsChangePlanSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ChangePlanRequest;
import org.openapis.openapi.models.shared.Seats;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResellerSubscriptionsChangePlanRequest req = new ResellerSubscriptionsChangePlanRequest("qui", "aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                changePlanRequest = new ChangePlanRequest() {{
                    dealCode = "quos";
                    kind = "perferendis";
                    planName = "magni";
                    purchaseOrderId = "assumenda";
                    seats = new Seats() {{
                        kind = "ipsam";
                        licensedNumberOfSeats = 4695;
                        maximumNumberOfSeats = 146441;
                        numberOfSeats = 677817;
                    }};;
                }};;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "facilis";
                fields = "tempore";
                key = "labore";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "non";
                uploadProtocol = "eligendi";
            }};            

            ResellerSubscriptionsChangePlanResponse res = sdk.subscriptions.resellerSubscriptionsChangePlan(req, new ResellerSubscriptionsChangePlanSecurity("sint", "aliquid") {{
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

## resellerSubscriptionsChangeRenewalSettings

Updates a user license's renewal settings. This is applicable for accounts with annual commitment plans only. For more information, see the description in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_renewal).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResellerSubscriptionsChangeRenewalSettingsRequest;
import org.openapis.openapi.models.operations.ResellerSubscriptionsChangeRenewalSettingsResponse;
import org.openapis.openapi.models.operations.ResellerSubscriptionsChangeRenewalSettingsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RenewalSettings;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResellerSubscriptionsChangeRenewalSettingsRequest req = new ResellerSubscriptionsChangeRenewalSettingsRequest("provident", "necessitatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                renewalSettings = new RenewalSettings() {{
                    kind = "officia";
                    renewalType = "dolor";
                }};;
                accessToken = "debitis";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "in";
                key = "in";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "rerum";
                uploadProtocol = "dicta";
            }};            

            ResellerSubscriptionsChangeRenewalSettingsResponse res = sdk.subscriptions.resellerSubscriptionsChangeRenewalSettings(req, new ResellerSubscriptionsChangeRenewalSettingsSecurity("magnam", "cumque") {{
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

## resellerSubscriptionsChangeSeats

Updates a subscription's user license settings. For more information about updating an annual commitment plan or a flexible plan subscription’s licenses, see [Manage Subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_subscription_seat).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResellerSubscriptionsChangeSeatsRequest;
import org.openapis.openapi.models.operations.ResellerSubscriptionsChangeSeatsResponse;
import org.openapis.openapi.models.operations.ResellerSubscriptionsChangeSeatsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Seats;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResellerSubscriptionsChangeSeatsRequest req = new ResellerSubscriptionsChangeSeatsRequest("facere", "ea") {{
                dollarXgafv = XgafvEnum.ONE;
                seats = new Seats() {{
                    kind = "laborum";
                    licensedNumberOfSeats = 881104;
                    maximumNumberOfSeats = 249796;
                    numberOfSeats = 581273;
                }};;
                accessToken = "enim";
                alt = AltEnum.PROTO;
                callback = "delectus";
                fields = "quidem";
                key = "provident";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "id";
                uploadType = "blanditiis";
                uploadProtocol = "deleniti";
            }};            

            ResellerSubscriptionsChangeSeatsResponse res = sdk.subscriptions.resellerSubscriptionsChangeSeats(req, new ResellerSubscriptionsChangeSeatsSecurity("sapiente", "amet") {{
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

## resellerSubscriptionsDelete

Cancels, suspends, or transfers a subscription to direct.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResellerSubscriptionsDeleteDeletionTypeEnum;
import org.openapis.openapi.models.operations.ResellerSubscriptionsDeleteRequest;
import org.openapis.openapi.models.operations.ResellerSubscriptionsDeleteResponse;
import org.openapis.openapi.models.operations.ResellerSubscriptionsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResellerSubscriptionsDeleteRequest req = new ResellerSubscriptionsDeleteRequest("deserunt", ResellerSubscriptionsDeleteDeletionTypeEnum.CANCEL, "vel") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "omnis";
                alt = AltEnum.MEDIA;
                callback = "perferendis";
                fields = "nihil";
                key = "magnam";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "id";
                uploadType = "labore";
                uploadProtocol = "labore";
            }};            

            ResellerSubscriptionsDeleteResponse res = sdk.subscriptions.resellerSubscriptionsDelete(req, new ResellerSubscriptionsDeleteSecurity("suscipit", "natus") {{
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

## resellerSubscriptionsGet

Gets a specific subscription. The `subscriptionId` can be found using the [Retrieve all reseller subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#get_all_subscriptions) method. For more information about retrieving a specific subscription, see the information descrived in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#get_subscription).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResellerSubscriptionsGetRequest;
import org.openapis.openapi.models.operations.ResellerSubscriptionsGetResponse;
import org.openapis.openapi.models.operations.ResellerSubscriptionsGetSecurity;
import org.openapis.openapi.models.operations.ResellerSubscriptionsGetSecurityOption1;
import org.openapis.openapi.models.operations.ResellerSubscriptionsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResellerSubscriptionsGetRequest req = new ResellerSubscriptionsGetRequest("nobis", "eum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "magnam";
                fields = "et";
                key = "excepturi";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "quos";
                uploadProtocol = "sint";
            }};            

            ResellerSubscriptionsGetResponse res = sdk.subscriptions.resellerSubscriptionsGet(req, new ResellerSubscriptionsGetSecurity() {{
                option1 = new ResellerSubscriptionsGetSecurityOption1("accusantium", "mollitia") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## resellerSubscriptionsInsert

Creates or transfer a subscription. Create a subscription for a customer's account that you ordered using the [Order a new customer account](/admin-sdk/reseller/v1/reference/customers/insert.html) method. For more information about creating a subscription for different payment plans, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#create_subscription).\ If you did not order the customer's account using the customer insert method, use the customer's `customerAuthToken` when creating a subscription for that customer. If transferring a G Suite subscription with an associated Google Drive or Google Vault subscription, use the [batch operation](/admin-sdk/reseller/v1/how-tos/batch.html) to transfer all of these subscriptions. For more information, see how to [transfer subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#transfer_a_subscription).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResellerSubscriptionsInsertRequest;
import org.openapis.openapi.models.operations.ResellerSubscriptionsInsertResponse;
import org.openapis.openapi.models.operations.ResellerSubscriptionsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RenewalSettings;
import org.openapis.openapi.models.shared.Seats;
import org.openapis.openapi.models.shared.Subscription;
import org.openapis.openapi.models.shared.SubscriptionPlan;
import org.openapis.openapi.models.shared.SubscriptionPlanCommitmentInterval;
import org.openapis.openapi.models.shared.SubscriptionTransferInfo;
import org.openapis.openapi.models.shared.SubscriptionTrialSettings;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResellerSubscriptionsInsertRequest req = new ResellerSubscriptionsInsertRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                subscription = new Subscription() {{
                    billingMethod = "ad";
                    creationTime = "eum";
                    customerDomain = "dolor";
                    customerId = "necessitatibus";
                    dealCode = "odit";
                    kind = "nemo";
                    plan = new SubscriptionPlan() {{
                        commitmentInterval = new SubscriptionPlanCommitmentInterval() {{
                            endTime = "quasi";
                            startTime = "iure";
                        }};;
                        isCommitmentPlan = false;
                        planName = "doloribus";
                    }};;
                    purchaseOrderId = "debitis";
                    renewalSettings = new RenewalSettings() {{
                        kind = "eius";
                        renewalType = "maxime";
                    }};;
                    resourceUiUrl = "deleniti";
                    seats = new Seats() {{
                        kind = "facilis";
                        licensedNumberOfSeats = 447926;
                        maximumNumberOfSeats = 100226;
                        numberOfSeats = 99569;
                    }};;
                    skuId = "repudiandae";
                    skuName = "ullam";
                    status = "expedita";
                    subscriptionId = "nihil";
                    suspensionReasons = new String[]{{
                        add("quibusdam"),
                        add("sed"),
                        add("saepe"),
                        add("pariatur"),
                    }};
                    transferInfo = new SubscriptionTransferInfo() {{
                        currentLegacySkuId = "accusantium";
                        minimumTransferableSeats = 162493;
                        transferabilityExpirationTime = "praesentium";
                    }};;
                    trialSettings = new SubscriptionTrialSettings() {{
                        isInTrial = false;
                        trialEndTime = "natus";
                    }};;
                }};;
                accessToken = "magni";
                alt = AltEnum.JSON;
                callback = "quo";
                customerAuthToken = "illum";
                fields = "pariatur";
                key = "maxime";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "odit";
                uploadProtocol = "ea";
            }};            

            ResellerSubscriptionsInsertResponse res = sdk.subscriptions.resellerSubscriptionsInsert(req, new ResellerSubscriptionsInsertSecurity("accusantium", "ab") {{
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

## resellerSubscriptionsList

Lists of subscriptions managed by the reseller. The list can be all subscriptions, all of a customer's subscriptions, or all of a customer's transferable subscriptions. Optionally, this method can filter the response by a `customerNamePrefix`. For more information, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResellerSubscriptionsListRequest;
import org.openapis.openapi.models.operations.ResellerSubscriptionsListResponse;
import org.openapis.openapi.models.operations.ResellerSubscriptionsListSecurity;
import org.openapis.openapi.models.operations.ResellerSubscriptionsListSecurityOption1;
import org.openapis.openapi.models.operations.ResellerSubscriptionsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResellerSubscriptionsListRequest req = new ResellerSubscriptionsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "voluptate";
                customerAuthToken = "autem";
                customerId = "nam";
                customerNamePrefix = "eaque";
                fields = "pariatur";
                key = "nemo";
                maxResults = 975522L;
                oauthToken = "perferendis";
                pageToken = "fugiat";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "aut";
                uploadProtocol = "cumque";
            }};            

            ResellerSubscriptionsListResponse res = sdk.subscriptions.resellerSubscriptionsList(req, new ResellerSubscriptionsListSecurity() {{
                option1 = new ResellerSubscriptionsListSecurityOption1("corporis", "hic") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.subscriptions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resellerSubscriptionsStartPaidService

Immediately move a 30-day free trial subscription to a paid service subscription. This method is only applicable if a payment plan has already been set up for the 30-day trial subscription. For more information, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#paid_service).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResellerSubscriptionsStartPaidServiceRequest;
import org.openapis.openapi.models.operations.ResellerSubscriptionsStartPaidServiceResponse;
import org.openapis.openapi.models.operations.ResellerSubscriptionsStartPaidServiceSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResellerSubscriptionsStartPaidServiceRequest req = new ResellerSubscriptionsStartPaidServiceRequest("libero", "nobis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quis";
                alt = AltEnum.MEDIA;
                callback = "dignissimos";
                fields = "eaque";
                key = "quis";
                oauthToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "eos";
                uploadType = "perferendis";
                uploadProtocol = "dolores";
            }};            

            ResellerSubscriptionsStartPaidServiceResponse res = sdk.subscriptions.resellerSubscriptionsStartPaidService(req, new ResellerSubscriptionsStartPaidServiceSecurity("minus", "quam") {{
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

## resellerSubscriptionsSuspend

Suspends an active subscription. You can use this method to suspend a paid subscription that is currently in the `ACTIVE` state. * For `FLEXIBLE` subscriptions, billing is paused. * For `ANNUAL_MONTHLY_PAY` or `ANNUAL_YEARLY_PAY` subscriptions: * Suspending the subscription does not change the renewal date that was originally committed to. * A suspended subscription does not renew. If you activate the subscription after the original renewal date, a new annual subscription will be created, starting on the day of activation. We strongly encourage you to suspend subscriptions only for short periods of time as suspensions over 60 days may result in the subscription being cancelled.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResellerSubscriptionsSuspendRequest;
import org.openapis.openapi.models.operations.ResellerSubscriptionsSuspendResponse;
import org.openapis.openapi.models.operations.ResellerSubscriptionsSuspendSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResellerSubscriptionsSuspendRequest req = new ResellerSubscriptionsSuspendRequest("dolor", "vero") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "omnis";
                fields = "facilis";
                key = "perspiciatis";
                oauthToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "porro";
                uploadType = "consequuntur";
                uploadProtocol = "blanditiis";
            }};            

            ResellerSubscriptionsSuspendResponse res = sdk.subscriptions.resellerSubscriptionsSuspend(req, new ResellerSubscriptionsSuspendSecurity("error", "eaque") {{
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
