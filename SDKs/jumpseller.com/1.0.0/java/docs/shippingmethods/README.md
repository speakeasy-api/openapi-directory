# shippingMethods

### Available Operations

* [deleteShippingMethodsIdJson](#deleteshippingmethodsidjson) - Delete an existing Shipping Method.
* [getShippingMethodsJson](#getshippingmethodsjson) - Retrieve all Store's Shipping Methods.
* [getShippingMethodsIdJson](#getshippingmethodsidjson) - Retrieve a single Shipping Method.
* [postShippingMethodsJson](#postshippingmethodsjson) - Creates a Shipping Method.
* [putShippingMethodsIdJson](#putshippingmethodsidjson) - Update a Shipping Method.

## deleteShippingMethodsIdJson

Delete an existing Shipping Method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteShippingMethodsIdJsonRequest;
import org.openapis.openapi.models.operations.DeleteShippingMethodsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteShippingMethodsIdJsonRequest req = new DeleteShippingMethodsIdJsonRequest("praesentium", 708609, "quaerat");            

            DeleteShippingMethodsIdJsonResponse res = sdk.shippingMethods.deleteShippingMethodsIdJson(req);

            if (res.deleteShippingMethodsIdJSON200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getShippingMethodsJson

Retrieve all Store's Shipping Methods.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetShippingMethodsJsonRequest;
import org.openapis.openapi.models.operations.GetShippingMethodsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetShippingMethodsJsonRequest req = new GetShippingMethodsJsonRequest("incidunt", "ipsam");            

            GetShippingMethodsJsonResponse res = sdk.shippingMethods.getShippingMethodsJson(req);

            if (res.shippingMethods != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getShippingMethodsIdJson

Retrieve a single Shipping Method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetShippingMethodsIdJsonRequest;
import org.openapis.openapi.models.operations.GetShippingMethodsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetShippingMethodsIdJsonRequest req = new GetShippingMethodsIdJsonRequest("debitis", 524970, "sit");            

            GetShippingMethodsIdJsonResponse res = sdk.shippingMethods.getShippingMethodsIdJson(req);

            if (res.shippingMethod != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postShippingMethodsJson

Creates a Shipping Method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostShippingMethodsJsonRequest;
import org.openapis.openapi.models.operations.PostShippingMethodsJsonResponse;
import org.openapis.openapi.models.shared.ShippingMethodEdit;
import org.openapis.openapi.models.shared.ShippingMethodEditShippingMethod;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostShippingMethodsJsonRequest req = new PostShippingMethodsJsonRequest(                new ShippingMethodEdit() {{
                                shippingMethod = new ShippingMethodEditShippingMethod() {{
                                    callbackUrl = "nobis";
                                    city = "Hartmannborough";
                                    fetchServicesUrl = "recusandae";
                                    name = "Dr. Jody Cummings";
                                    postal = "veniam";
                                    state = "in";
                                    token = "officiis";
                                }};;
                            }};, "beatae", "laudantium");            

            PostShippingMethodsJsonResponse res = sdk.shippingMethods.postShippingMethodsJson(req);

            if (res.shippingMethod != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putShippingMethodsIdJson

Update a Shipping Method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutShippingMethodsIdJsonRequest;
import org.openapis.openapi.models.operations.PutShippingMethodsIdJsonResponse;
import org.openapis.openapi.models.shared.ShippingMethodEdit;
import org.openapis.openapi.models.shared.ShippingMethodEditShippingMethod;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutShippingMethodsIdJsonRequest req = new PutShippingMethodsIdJsonRequest(                new ShippingMethodEdit() {{
                                shippingMethod = new ShippingMethodEditShippingMethod() {{
                                    callbackUrl = "exercitationem";
                                    city = "Nadiabury";
                                    fetchServicesUrl = "dolorum";
                                    name = "Evan Welch";
                                    postal = "neque";
                                    state = "dolorum";
                                    token = "nostrum";
                                }};;
                            }};, "officia", 676243, "corrupti");            

            PutShippingMethodsIdJsonResponse res = sdk.shippingMethods.putShippingMethodsIdJson(req);

            if (res.shippingMethod != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
