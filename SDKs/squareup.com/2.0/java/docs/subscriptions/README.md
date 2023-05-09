# subscriptions

### Available Operations

* [cancelSubscription](#cancelsubscription) - CancelSubscription
* [createSubscription](#createsubscription) - CreateSubscription
* [listSubscriptionEvents](#listsubscriptionevents) - ListSubscriptionEvents
* [resumeSubscription](#resumesubscription) - ResumeSubscription
* [retrieveSubscription](#retrievesubscription) - RetrieveSubscription
* [searchSubscriptions](#searchsubscriptions) - SearchSubscriptions
* [updateSubscription](#updatesubscription) - UpdateSubscription

## cancelSubscription

Sets the `canceled_date` field to the end of the active billing period.
After this date, the status changes from ACTIVE to CANCELED.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelSubscriptionRequest;
import org.openapis.openapi.models.operations.CancelSubscriptionResponse;
import org.openapis.openapi.models.operations.CancelSubscriptionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CancelSubscriptionRequest req = new CancelSubscriptionRequest("ut");            

            CancelSubscriptionResponse res = sdk.subscriptions.cancelSubscription(req, new CancelSubscriptionSecurity("maxime") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.cancelSubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSubscription

Creates a subscription for a customer to a subscription plan.

If you provide a card on file in the request, Square charges the card for
the subscription. Otherwise, Square bills an invoice to the customer's email
address. The subscription starts immediately, unless the request includes
the optional `start_date`. Each individual subscription is associated with a particular location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSubscriptionResponse;
import org.openapis.openapi.models.operations.CreateSubscriptionSecurity;
import org.openapis.openapi.models.shared.CreateSubscriptionRequest;
import org.openapis.openapi.models.shared.Money;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateSubscriptionRequest req = new CreateSubscriptionRequest("deserunt", "labore", "consectetur") {{
                canceledDate = "incidunt";
                cardId = "cumque";
                idempotencyKey = "quibusdam";
                priceOverrideMoney = new Money() {{
                    amount = 722112L;
                    currency = "adipisci";
                }};;
                startDate = "dicta";
                taxPercentage = "tempora";
                timezone = "provident";
            }};            

            CreateSubscriptionResponse res = sdk.subscriptions.createSubscription(req, new CreateSubscriptionSecurity("fuga") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createSubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSubscriptionEvents

Lists all events for a specific subscription.
In the current implementation, only `START_SUBSCRIPTION` and `STOP_SUBSCRIPTION` (when the subscription was canceled) events are returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSubscriptionEventsRequest;
import org.openapis.openapi.models.operations.ListSubscriptionEventsResponse;
import org.openapis.openapi.models.operations.ListSubscriptionEventsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSubscriptionEventsRequest req = new ListSubscriptionEventsRequest("et") {{
                cursor = "molestias";
                limit = 969125L;
            }};            

            ListSubscriptionEventsResponse res = sdk.subscriptions.listSubscriptionEvents(req, new ListSubscriptionEventsSecurity("qui") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listSubscriptionEventsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resumeSubscription

Resumes a deactivated subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResumeSubscriptionRequest;
import org.openapis.openapi.models.operations.ResumeSubscriptionResponse;
import org.openapis.openapi.models.operations.ResumeSubscriptionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResumeSubscriptionRequest req = new ResumeSubscriptionRequest("quis");            

            ResumeSubscriptionResponse res = sdk.subscriptions.resumeSubscription(req, new ResumeSubscriptionSecurity("sed") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.resumeSubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveSubscription

Retrieves a subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveSubscriptionRequest;
import org.openapis.openapi.models.operations.RetrieveSubscriptionResponse;
import org.openapis.openapi.models.operations.RetrieveSubscriptionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveSubscriptionRequest req = new RetrieveSubscriptionRequest("perferendis");            

            RetrieveSubscriptionResponse res = sdk.subscriptions.retrieveSubscription(req, new RetrieveSubscriptionSecurity("nihil") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveSubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchSubscriptions

Searches for subscriptions.
Results are ordered chronologically by subscription creation date. If
the request specifies more than one location ID,
the endpoint orders the result
by location ID, and then by creation date within each location. If no locations are given
in the query, all locations are searched.

You can also optionally specify `customer_ids` to search by customer.
If left unset, all customers
associated with the specified locations are returned.
If the request specifies customer IDs, the endpoint orders results
first by location, within location by customer ID, and within
customer by subscription creation date.

For more information, see
[Retrieve subscriptions](https://developer.squareup.com/docs/subscriptions-api/overview#retrieve-subscriptions).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchSubscriptionsResponse;
import org.openapis.openapi.models.operations.SearchSubscriptionsSecurity;
import org.openapis.openapi.models.shared.SearchSubscriptionsFilter;
import org.openapis.openapi.models.shared.SearchSubscriptionsQuery;
import org.openapis.openapi.models.shared.SearchSubscriptionsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SearchSubscriptionsRequest req = new SearchSubscriptionsRequest() {{
                cursor = "blanditiis";
                limit = 627421L;
                query = new SearchSubscriptionsQuery() {{
                    filter = new SearchSubscriptionsFilter() {{
                        customerIds = new String[]{{
                            add("praesentium"),
                        }};
                        locationIds = new String[]{{
                            add("magnam"),
                            add("tempore"),
                            add("consequatur"),
                        }};
                    }};;
                }};;
            }};            

            SearchSubscriptionsResponse res = sdk.subscriptions.searchSubscriptions(req, new SearchSubscriptionsSecurity("nulla") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.searchSubscriptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSubscription

Updates a subscription. You can set, modify, and clear the
`subscription` field values.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSubscriptionRequest;
import org.openapis.openapi.models.operations.UpdateSubscriptionResponse;
import org.openapis.openapi.models.operations.UpdateSubscriptionSecurity;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.Subscription;
import org.openapis.openapi.models.shared.UpdateSubscriptionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSubscriptionRequest req = new UpdateSubscriptionRequest(                new UpdateSubscriptionRequest() {{
                                subscription = new Subscription() {{
                                    canceledDate = "fuga";
                                    cardId = "officiis";
                                    chargedThroughDate = "repellendus";
                                    createdAt = "quaerat";
                                    customerId = "quidem";
                                    id = "5cf0616e-e922-4757-9bd6-0daa0e149cd1";
                                    invoiceIds = new String[]{{
                                        add("quod"),
                                        add("assumenda"),
                                        add("illum"),
                                        add("ipsum"),
                                    }};
                                    locationId = "ea";
                                    planId = "magni";
                                    priceOverrideMoney = new Money() {{
                                        amount = 700014L;
                                        currency = "quidem";
                                    }};;
                                    startDate = "reiciendis";
                                    status = "sint";
                                    taxPercentage = "qui";
                                    timezone = "amet";
                                    version = 618141L;
                                }};;
                            }};, "alias");            

            UpdateSubscriptionResponse res = sdk.subscriptions.updateSubscription(req, new UpdateSubscriptionSecurity("aperiam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.updateSubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
