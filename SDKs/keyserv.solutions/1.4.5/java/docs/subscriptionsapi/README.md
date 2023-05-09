# subscriptionsApi

### Available Operations

* [subscriptionsApiCount](#subscriptionsapicount)
* [subscriptionsApiDeleteSubscription](#subscriptionsapideletesubscription)
* [subscriptionsApiDeleteSubscription2](#subscriptionsapideletesubscription2)
* [subscriptionsApiDisable](#subscriptionsapidisable)
* [subscriptionsApiDisable2](#subscriptionsapidisable2)
* [subscriptionsApiEnable](#subscriptionsapienable)
* [subscriptionsApiEnable2](#subscriptionsapienable2)
* [subscriptionsApiFind](#subscriptionsapifind)
* [subscriptionsApiList](#subscriptionsapilist)
* [subscriptionsApiPutSubscription](#subscriptionsapiputsubscription)
* [subscriptionsApiPutSubscription2](#subscriptionsapiputsubscription2)
* [subscriptionsApiSave](#subscriptionsapisave)

## subscriptionsApiCount

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubscriptionsApiCountResponse;
import org.openapis.openapi.models.shared.ApiCredentials;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new ApiCredentials() {{
                key = "molestiae";
                serial = "quod";
            }}            

            SubscriptionsApiCountResponse res = sdk.subscriptionsApi.subscriptionsApiCount(req);

            if (res.subscriptionsApiCount200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subscriptionsApiDeleteSubscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubscriptionsApiDeleteSubscriptionRequest;
import org.openapis.openapi.models.operations.SubscriptionsApiDeleteSubscriptionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SubscriptionsApiDeleteSubscriptionRequest req = new SubscriptionsApiDeleteSubscriptionRequest("quod", false, "esse");            

            SubscriptionsApiDeleteSubscriptionResponse res = sdk.subscriptionsApi.subscriptionsApiDeleteSubscription(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subscriptionsApiDeleteSubscription2

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubscriptionsApiDeleteSubscription2Request;
import org.openapis.openapi.models.operations.SubscriptionsApiDeleteSubscription2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SubscriptionsApiDeleteSubscription2Request req = new SubscriptionsApiDeleteSubscription2Request("totam", false, "porro");            

            SubscriptionsApiDeleteSubscription2Response res = sdk.subscriptionsApi.subscriptionsApiDeleteSubscription2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subscriptionsApiDisable

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubscriptionsApiDisableResponse;
import org.openapis.openapi.models.shared.FindCredentials;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new FindCredentials() {{
                key = "dolorum";
                serial = "dicta";
            }}            

            SubscriptionsApiDisableResponse res = sdk.subscriptionsApi.subscriptionsApiDisable(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subscriptionsApiDisable2

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubscriptionsApiDisable2Response;
import org.openapis.openapi.models.shared.FindCredentials;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new FindCredentials() {{
                key = "nam";
                serial = "officia";
            }}            

            SubscriptionsApiDisable2Response res = sdk.subscriptionsApi.subscriptionsApiDisable2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subscriptionsApiEnable

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubscriptionsApiEnableResponse;
import org.openapis.openapi.models.shared.FindCredentials;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new FindCredentials() {{
                key = "occaecati";
                serial = "fugit";
            }}            

            SubscriptionsApiEnableResponse res = sdk.subscriptionsApi.subscriptionsApiEnable(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subscriptionsApiEnable2

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubscriptionsApiEnable2Response;
import org.openapis.openapi.models.shared.FindCredentials;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new FindCredentials() {{
                key = "deleniti";
                serial = "hic";
            }}            

            SubscriptionsApiEnable2Response res = sdk.subscriptionsApi.subscriptionsApiEnable2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subscriptionsApiFind

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubscriptionsApiFindResponse;
import org.openapis.openapi.models.shared.FindCredentials;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new FindCredentials() {{
                key = "optio";
                serial = "totam";
            }}            

            SubscriptionsApiFindResponse res = sdk.subscriptionsApi.subscriptionsApiFind(req);

            if (res.subscriptionsApiFind200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subscriptionsApiList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubscriptionsApiListRequest;
import org.openapis.openapi.models.operations.SubscriptionsApiListResponse;
import org.openapis.openapi.models.shared.FindCredentials;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SubscriptionsApiListRequest req = new SubscriptionsApiListRequest(                new FindCredentials() {{
                                key = "beatae";
                                serial = "commodi";
                            }}) {{
                page = 473600;
            }};            

            SubscriptionsApiListResponse res = sdk.subscriptionsApi.subscriptionsApiList(req);

            if (res.subscriptionViews != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subscriptionsApiPutSubscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubscriptionsApiPutSubscriptionResponse;
import org.openapis.openapi.models.shared.SubscriptionCreateModify;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new SubscriptionCreateModify("laboriosam", "hic") {{
                action = "modi";
                callbackOnModify = false;
                callbackUrl = "http://soft-reminder.info";
                custom = "ipsum";
                frequency = "excepturi";
                key = "aspernatur";
                name = "Cathy Mosciski";
                serial = "dolor";
                startFrom = "natus";
            }}            

            SubscriptionsApiPutSubscriptionResponse res = sdk.subscriptionsApi.subscriptionsApiPutSubscription(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subscriptionsApiPutSubscription2

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubscriptionsApiPutSubscription2Response;
import org.openapis.openapi.models.shared.SubscriptionCreateModify;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new SubscriptionCreateModify("dolorem", "corporis") {{
                action = "saepe";
                callbackOnModify = false;
                callbackUrl = "https://itchy-forager.name";
                custom = "iure";
                frequency = "saepe";
                key = "quidem";
                name = "Brenda Wisozk";
                serial = "laborum";
                startFrom = "dolores";
            }}            

            SubscriptionsApiPutSubscription2Response res = sdk.subscriptionsApi.subscriptionsApiPutSubscription2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subscriptionsApiSave

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubscriptionsApiSaveResponse;
import org.openapis.openapi.models.shared.SubscriptionCreateModify;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new SubscriptionCreateModify("consequuntur", "repellat") {{
                action = "explicabo";
                callbackOnModify = false;
                callbackUrl = "https://front-odyssey.info";
                custom = "minima";
                frequency = "excepturi";
                key = "accusantium";
                name = "Cecilia Yundt MD";
                serial = "dolorem";
                startFrom = "culpa";
            }}            

            SubscriptionsApiSaveResponse res = sdk.subscriptionsApi.subscriptionsApiSave(req);

            if (res.subscriptionsApiSave201ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
