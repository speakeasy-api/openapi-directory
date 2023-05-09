# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createSink](#createsink) - Create a new Sink
* [createSinkTest](#createsinktest) - Create a new Sink Test Event for the given Sink.
* [createSinkValidate](#createsinkvalidate) - Validate that a test event for a Sink was received.
* [createSubscribedEvent](#createsubscribedevent) - Create a new Subscribed Event type for the subscription
* [createSubscription](#createsubscription) - Create a new Subscription.
* [deleteSink](#deletesink) - Delete a specific Sink.
* [deleteSubscribedEvent](#deletesubscribedevent) - Remove an event type from a subscription.
* [deleteSubscription](#deletesubscription) - Delete a specific Subscription.
* [fetchEventType](#fetcheventtype) - Fetch a specific Event Type.
* [fetchSchema](#fetchschema) - Fetch a specific schema with its nested versions.
* [fetchSchemaVersion](#fetchschemaversion) - Fetch a specific schema and version.
* [fetchSink](#fetchsink) - Fetch a specific Sink.
* [fetchSubscribedEvent](#fetchsubscribedevent) - Read an Event for a Subscription.
* [fetchSubscription](#fetchsubscription) - Fetch a specific Subscription.
* [listEventType](#listeventtype) - Retrieve a paginated list of all the available Event Types.
* [listSchemaVersion](#listschemaversion) - Retrieve a paginated list of versions of the schema.
* [listSink](#listsink) - Retrieve a paginated list of Sinks belonging to the account used to make the request.
* [listSubscribedEvent](#listsubscribedevent) - Retrieve a list of all Subscribed Event types for a Subscription.
* [listSubscription](#listsubscription) - Retrieve a paginated list of Subscriptions belonging to the account used to make the request.
* [updateSink](#updatesink) - Update a specific Sink
* [updateSubscribedEvent](#updatesubscribedevent) - Update an Event for a Subscription.
* [updateSubscription](#updatesubscription) - Update a Subscription.

## createSink

Create a new Sink

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSinkCreateSinkRequest;
import org.openapis.openapi.models.operations.CreateSinkResponse;
import org.openapis.openapi.models.operations.CreateSinkSecurity;
import org.openapis.openapi.models.shared.SinkEnumSinkTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSinkCreateSinkRequest req = new CreateSinkCreateSinkRequest("nulla", "corrupti", SinkEnumSinkTypeEnum.SEGMENT);            

            CreateSinkResponse res = sdk.sdk.createSink(req, new CreateSinkSecurity("vel", "error") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.eventsV1Sink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSinkTest

Create a new Sink Test Event for the given Sink.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSinkTestRequest;
import org.openapis.openapi.models.operations.CreateSinkTestResponse;
import org.openapis.openapi.models.operations.CreateSinkTestSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSinkTestRequest req = new CreateSinkTestRequest("deserunt");            

            CreateSinkTestResponse res = sdk.sdk.createSinkTest(req, new CreateSinkTestSecurity("suscipit", "iure") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.eventsV1SinkSinkTest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSinkValidate

Validate that a test event for a Sink was received.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSinkValidateCreateSinkValidateRequest;
import org.openapis.openapi.models.operations.CreateSinkValidateRequest;
import org.openapis.openapi.models.operations.CreateSinkValidateResponse;
import org.openapis.openapi.models.operations.CreateSinkValidateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSinkValidateRequest req = new CreateSinkValidateRequest("magnam") {{
                requestBody = new CreateSinkValidateCreateSinkValidateRequest("debitis");;
            }};            

            CreateSinkValidateResponse res = sdk.sdk.createSinkValidate(req, new CreateSinkValidateSecurity("ipsa", "delectus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.eventsV1SinkSinkValidate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSubscribedEvent

Create a new Subscribed Event type for the subscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSubscribedEventCreateSubscribedEventRequest;
import org.openapis.openapi.models.operations.CreateSubscribedEventRequest;
import org.openapis.openapi.models.operations.CreateSubscribedEventResponse;
import org.openapis.openapi.models.operations.CreateSubscribedEventSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSubscribedEventRequest req = new CreateSubscribedEventRequest("tempora") {{
                requestBody = new CreateSubscribedEventCreateSubscribedEventRequest("suscipit") {{
                    schemaVersion = 477665L;
                }};;
            }};            

            CreateSubscribedEventResponse res = sdk.sdk.createSubscribedEvent(req, new CreateSubscribedEventSecurity("minus", "placeat") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.eventsV1SubscriptionSubscribedEvent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSubscription

Create a new Subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSubscriptionCreateSubscriptionRequest;
import org.openapis.openapi.models.operations.CreateSubscriptionResponse;
import org.openapis.openapi.models.operations.CreateSubscriptionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSubscriptionCreateSubscriptionRequest req = new CreateSubscriptionCreateSubscriptionRequest("voluptatum", "iusto",                 new Object[]{{
                                add("nisi"),
                                add("recusandae"),
                                add("temporibus"),
                            }});            

            CreateSubscriptionResponse res = sdk.sdk.createSubscription(req, new CreateSubscriptionSecurity("ab", "quis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.eventsV1Subscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSink

Delete a specific Sink.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSinkRequest;
import org.openapis.openapi.models.operations.DeleteSinkResponse;
import org.openapis.openapi.models.operations.DeleteSinkSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSinkRequest req = new DeleteSinkRequest("veritatis");            

            DeleteSinkResponse res = sdk.sdk.deleteSink(req, new DeleteSinkSecurity("deserunt", "perferendis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteSubscribedEvent

Remove an event type from a subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSubscribedEventRequest;
import org.openapis.openapi.models.operations.DeleteSubscribedEventResponse;
import org.openapis.openapi.models.operations.DeleteSubscribedEventSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSubscribedEventRequest req = new DeleteSubscribedEventRequest("ipsam", "repellendus");            

            DeleteSubscribedEventResponse res = sdk.sdk.deleteSubscribedEvent(req, new DeleteSubscribedEventSecurity("sapiente", "quo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteSubscription

Delete a specific Subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSubscriptionRequest;
import org.openapis.openapi.models.operations.DeleteSubscriptionResponse;
import org.openapis.openapi.models.operations.DeleteSubscriptionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSubscriptionRequest req = new DeleteSubscriptionRequest("odit");            

            DeleteSubscriptionResponse res = sdk.sdk.deleteSubscription(req, new DeleteSubscriptionSecurity("at", "at") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## fetchEventType

Fetch a specific Event Type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchEventTypeRequest;
import org.openapis.openapi.models.operations.FetchEventTypeResponse;
import org.openapis.openapi.models.operations.FetchEventTypeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchEventTypeRequest req = new FetchEventTypeRequest("maiores");            

            FetchEventTypeResponse res = sdk.sdk.fetchEventType(req, new FetchEventTypeSecurity("molestiae", "quod") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.eventsV1EventType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSchema

Fetch a specific schema with its nested versions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSchemaRequest;
import org.openapis.openapi.models.operations.FetchSchemaResponse;
import org.openapis.openapi.models.operations.FetchSchemaSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSchemaRequest req = new FetchSchemaRequest("quod");            

            FetchSchemaResponse res = sdk.sdk.fetchSchema(req, new FetchSchemaSecurity("esse", "totam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.eventsV1Schema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSchemaVersion

Fetch a specific schema and version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSchemaVersionRequest;
import org.openapis.openapi.models.operations.FetchSchemaVersionResponse;
import org.openapis.openapi.models.operations.FetchSchemaVersionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSchemaVersionRequest req = new FetchSchemaVersionRequest("porro", 678880L);            

            FetchSchemaVersionResponse res = sdk.sdk.fetchSchemaVersion(req, new FetchSchemaVersionSecurity("dicta", "nam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.eventsV1SchemaSchemaVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSink

Fetch a specific Sink.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSinkRequest;
import org.openapis.openapi.models.operations.FetchSinkResponse;
import org.openapis.openapi.models.operations.FetchSinkSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSinkRequest req = new FetchSinkRequest("officia");            

            FetchSinkResponse res = sdk.sdk.fetchSink(req, new FetchSinkSecurity("occaecati", "fugit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.eventsV1Sink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSubscribedEvent

Read an Event for a Subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSubscribedEventRequest;
import org.openapis.openapi.models.operations.FetchSubscribedEventResponse;
import org.openapis.openapi.models.operations.FetchSubscribedEventSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSubscribedEventRequest req = new FetchSubscribedEventRequest("deleniti", "hic");            

            FetchSubscribedEventResponse res = sdk.sdk.fetchSubscribedEvent(req, new FetchSubscribedEventSecurity("optio", "totam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.eventsV1SubscriptionSubscribedEvent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSubscription

Fetch a specific Subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSubscriptionRequest;
import org.openapis.openapi.models.operations.FetchSubscriptionResponse;
import org.openapis.openapi.models.operations.FetchSubscriptionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSubscriptionRequest req = new FetchSubscriptionRequest("beatae");            

            FetchSubscriptionResponse res = sdk.sdk.fetchSubscription(req, new FetchSubscriptionSecurity("commodi", "molestiae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.eventsV1Subscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEventType

Retrieve a paginated list of all the available Event Types.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEventTypeRequest;
import org.openapis.openapi.models.operations.ListEventTypeResponse;
import org.openapis.openapi.models.operations.ListEventTypeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListEventTypeRequest req = new ListEventTypeRequest() {{
                page = 264555L;
                pageSize = 186332L;
                pageToken = "impedit";
                schemaId = "cum";
            }};            

            ListEventTypeResponse res = sdk.sdk.listEventType(req, new ListEventTypeSecurity("esse", "ipsum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listEventTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSchemaVersion

Retrieve a paginated list of versions of the schema.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSchemaVersionRequest;
import org.openapis.openapi.models.operations.ListSchemaVersionResponse;
import org.openapis.openapi.models.operations.ListSchemaVersionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSchemaVersionRequest req = new ListSchemaVersionRequest("excepturi") {{
                page = 135218L;
                pageSize = 18789L;
                pageToken = "ad";
            }};            

            ListSchemaVersionResponse res = sdk.sdk.listSchemaVersion(req, new ListSchemaVersionSecurity("natus", "sed") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSchemaVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSink

Retrieve a paginated list of Sinks belonging to the account used to make the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSinkRequest;
import org.openapis.openapi.models.operations.ListSinkResponse;
import org.openapis.openapi.models.operations.ListSinkSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSinkRequest req = new ListSinkRequest() {{
                inUse = false;
                page = 612096L;
                pageSize = 222321L;
                pageToken = "natus";
                status = "laboriosam";
            }};            

            ListSinkResponse res = sdk.sdk.listSink(req, new ListSinkSecurity("hic", "saepe") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSinkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSubscribedEvent

Retrieve a list of all Subscribed Event types for a Subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSubscribedEventRequest;
import org.openapis.openapi.models.operations.ListSubscribedEventResponse;
import org.openapis.openapi.models.operations.ListSubscribedEventSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSubscribedEventRequest req = new ListSubscribedEventRequest("fuga") {{
                page = 449950L;
                pageSize = 359508L;
                pageToken = "iste";
            }};            

            ListSubscribedEventResponse res = sdk.sdk.listSubscribedEvent(req, new ListSubscribedEventSecurity("iure", "saepe") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSubscribedEventResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSubscription

Retrieve a paginated list of Subscriptions belonging to the account used to make the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSubscriptionRequest;
import org.openapis.openapi.models.operations.ListSubscriptionResponse;
import org.openapis.openapi.models.operations.ListSubscriptionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSubscriptionRequest req = new ListSubscriptionRequest() {{
                page = 697631L;
                pageSize = 99280L;
                pageToken = "ipsa";
                sinkSid = "reiciendis";
            }};            

            ListSubscriptionResponse res = sdk.sdk.listSubscription(req, new ListSubscriptionSecurity("est", "mollitia") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSink

Update a specific Sink

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSinkRequest;
import org.openapis.openapi.models.operations.UpdateSinkResponse;
import org.openapis.openapi.models.operations.UpdateSinkSecurity;
import org.openapis.openapi.models.operations.UpdateSinkUpdateSinkRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSinkRequest req = new UpdateSinkRequest("laborum") {{
                requestBody = new UpdateSinkUpdateSinkRequest("dolores");;
            }};            

            UpdateSinkResponse res = sdk.sdk.updateSink(req, new UpdateSinkSecurity("dolorem", "corporis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.eventsV1Sink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSubscribedEvent

Update an Event for a Subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSubscribedEventRequest;
import org.openapis.openapi.models.operations.UpdateSubscribedEventResponse;
import org.openapis.openapi.models.operations.UpdateSubscribedEventSecurity;
import org.openapis.openapi.models.operations.UpdateSubscribedEventUpdateSubscribedEventRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSubscribedEventRequest req = new UpdateSubscribedEventRequest("explicabo", "nobis") {{
                requestBody = new UpdateSubscribedEventUpdateSubscribedEventRequest() {{
                    schemaVersion = 315428L;
                }};;
            }};            

            UpdateSubscribedEventResponse res = sdk.sdk.updateSubscribedEvent(req, new UpdateSubscribedEventSecurity("omnis", "nemo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.eventsV1SubscriptionSubscribedEvent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSubscription

Update a Subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSubscriptionRequest;
import org.openapis.openapi.models.operations.UpdateSubscriptionResponse;
import org.openapis.openapi.models.operations.UpdateSubscriptionSecurity;
import org.openapis.openapi.models.operations.UpdateSubscriptionUpdateSubscriptionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSubscriptionRequest req = new UpdateSubscriptionRequest("minima") {{
                requestBody = new UpdateSubscriptionUpdateSubscriptionRequest() {{
                    description = "excepturi";
                    sinkSid = "accusantium";
                }};;
            }};            

            UpdateSubscriptionResponse res = sdk.sdk.updateSubscription(req, new UpdateSubscriptionSecurity("iure", "culpa") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.eventsV1Subscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
