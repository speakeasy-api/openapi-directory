# recurringPaymentsAPIEmailSubscriptionsFeature

## Overview

Streamline your workflows by sending payments to your customers on a regular basis with NOWPayments.  
This feature involves creating a plan for payments and individual recurring payments for each user.  
First you need to create a Recurring Payment plan:

### Available Operations

* [deleteRecurringPayment](#deleterecurringpayment) - Delete recurring payment
* [getManyPlans](#getmanyplans) - Get many plans
* [getManyRecurringPayments](#getmanyrecurringpayments) - Get many recurring payments
* [getOnePlan](#getoneplan) - Get one plan
* [getOneRecurringPayment](#getonerecurringpayment) - Get one recurring payment
* [updatePlan](#updateplan) - Update plan

## deleteRecurringPayment

Completely removes a particular payment from the recurring payment plan.  
You need to specify the payment plan id in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRecurringPaymentRequest;
import org.openapis.openapi.models.operations.DeleteRecurringPaymentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRecurringPaymentRequest req = new DeleteRecurringPaymentRequest("unde") {{
                requestBody = "nulla".getBytes();
            }};            

            DeleteRecurringPaymentResponse res = sdk.recurringPaymentsAPIEmailSubscriptionsFeature.deleteRecurringPayment(req);

            if (res.deleteRecurringPayment200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getManyPlans

This method allows you to obtain information about all the payment plans you’ve created.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetManyPlansRequest;
import org.openapis.openapi.models.operations.GetManyPlansResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetManyPlansRequest req = new GetManyPlansRequest() {{
                limit = "10";
                offset = "3";
                xApiKey = "{{your_api_key}}";
            }};            

            GetManyPlansResponse res = sdk.recurringPaymentsAPIEmailSubscriptionsFeature.getManyPlans(req);

            if (res.getManyPlans200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getManyRecurringPayments

The method allows you to view the entire list of recurring payments filtered by payment status and/or payment plan id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetManyRecurringPaymentsRequest;
import org.openapis.openapi.models.operations.GetManyRecurringPaymentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetManyRecurringPaymentsRequest req = new GetManyRecurringPaymentsRequest() {{
                requestBody = "corrupti".getBytes();
                isActive = "false";
                limit = "10";
                offset = "0";
                status = "PARTIALLY_PAID";
                subscriptionPlanId = "111394288";
                xApiKey = "{{your_api_key}}";
            }};            

            GetManyRecurringPaymentsResponse res = sdk.recurringPaymentsAPIEmailSubscriptionsFeature.getManyRecurringPayments(req);

            if (res.getManyRecurringPayments200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOnePlan

This method allows you to obtain information about your payment plan.  
(you need to specify your payment plan id in the request).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOnePlanRequest;
import org.openapis.openapi.models.operations.GetOnePlanResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOnePlanRequest req = new GetOnePlanRequest("illum") {{
                xApiKey = "{{your_api_key}}";
            }};            

            GetOnePlanResponse res = sdk.recurringPaymentsAPIEmailSubscriptionsFeature.getOnePlan(req);

            if (res.getOnePlan200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOneRecurringPayment

Get information about a particular recurring payment via its ID.

Here’s the list of available statuses:  
\- WAITING_PAY  
\- PAID  
\- PARTIALLY_PAID  
\- EXPIRED

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOneRecurringPaymentRequest;
import org.openapis.openapi.models.operations.GetOneRecurringPaymentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOneRecurringPaymentRequest req = new GetOneRecurringPaymentRequest("vel") {{
                requestBody = "error".getBytes();
                xApiKey = "{{your_api_key}}";
            }};            

            GetOneRecurringPaymentResponse res = sdk.recurringPaymentsAPIEmailSubscriptionsFeature.getOneRecurringPayment(req);

            if (res.getOneRecurringPayment200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePlan

This method allows you to add necessary changes to a created plan. They won’t affect users who have already paid; however, the changes will take effect when a new payment is to be made.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePlanRequest;
import org.openapis.openapi.models.operations.UpdatePlanRequestBody;
import org.openapis.openapi.models.operations.UpdatePlanResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdatePlanRequest req = new UpdatePlanRequest("deserunt") {{
                requestBody = new UpdatePlanRequestBody() {{
                    amount = 2;
                    currency = "usd";
                    intervalDay = 1;
                    title = "test plan";
                }};;
            }};            

            UpdatePlanResponse res = sdk.recurringPaymentsAPIEmailSubscriptionsFeature.updatePlan(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
