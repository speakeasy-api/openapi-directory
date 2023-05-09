# customers

### Available Operations

* [deleteCustomersIdJson](#deletecustomersidjson) - Delete an existing Customer.
* [getCustomersJson](#getcustomersjson) - Retrieve all Customers.
* [getCustomersCountJson](#getcustomerscountjson) - Count all Customers.
* [getCustomersEmailEmailJson](#getcustomersemailemailjson) - Retrieve a single Customer by email.
* [getCustomersIdJson](#getcustomersidjson) - Retrieve a single Customer by id.
* [postCustomersJson](#postcustomersjson) - Create a new Customer.
* [putCustomersIdJson](#putcustomersidjson) - Update a new Customer.

## deleteCustomersIdJson

Delete an existing Customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCustomersIdJsonRequest;
import org.openapis.openapi.models.operations.DeleteCustomersIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCustomersIdJsonRequest req = new DeleteCustomersIdJsonRequest("non", 756107, "sint");            

            DeleteCustomersIdJsonResponse res = sdk.customers.deleteCustomersIdJson(req);

            if (res.deleteCustomersIdJSON200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomersJson

Retrieve all Customers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomersJsonRequest;
import org.openapis.openapi.models.operations.GetCustomersJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCustomersJsonRequest req = new GetCustomersJsonRequest("aliquid", "provident") {{
                limit = 896039L;
                page = 572252L;
            }};            

            GetCustomersJsonResponse res = sdk.customers.getCustomersJson(req);

            if (res.customers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomersCountJson

Count all Customers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomersCountJsonRequest;
import org.openapis.openapi.models.operations.GetCustomersCountJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCustomersCountJsonRequest req = new GetCustomersCountJsonRequest("officia", "dolor");            

            GetCustomersCountJsonResponse res = sdk.customers.getCustomersCountJson(req);

            if (res.count != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomersEmailEmailJson

Retrieve a single Customer by email.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomersEmailEmailJsonRequest;
import org.openapis.openapi.models.operations.GetCustomersEmailEmailJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCustomersEmailEmailJsonRequest req = new GetCustomersEmailEmailJsonRequest("debitis", "a", "dolorum");            

            GetCustomersEmailEmailJsonResponse res = sdk.customers.getCustomersEmailEmailJson(req);

            if (res.customer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomersIdJson

Retrieve a single Customer by id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomersIdJsonRequest;
import org.openapis.openapi.models.operations.GetCustomersIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCustomersIdJsonRequest req = new GetCustomersIdJsonRequest("in", 449198, "illum");            

            GetCustomersIdJsonResponse res = sdk.customers.getCustomersIdJson(req);

            if (res.customer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCustomersJson

Create a new Customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCustomersJsonRequest;
import org.openapis.openapi.models.operations.PostCustomersJsonResponse;
import org.openapis.openapi.models.shared.BillingAddress;
import org.openapis.openapi.models.shared.CustomerFieldsWithPasswordNoID;
import org.openapis.openapi.models.shared.CustomerFieldsWithPasswordNoIDStatusEnum;
import org.openapis.openapi.models.shared.CustomerWithPasswordNoID;
import org.openapis.openapi.models.shared.ShippingAddress;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCustomersJsonRequest req = new PostCustomersJsonRequest(                new CustomerWithPasswordNoID() {{
                                customer = new CustomerFieldsWithPasswordNoID() {{
                                    billingAddress = new BillingAddress() {{
                                        address = "612 Schulist Isle";
                                        city = "Lake Shaniya";
                                        country = "Ecuador";
                                        municipality = "occaecati";
                                        name = "Sophia Wintheiser";
                                        postal = "nam";
                                        region = "id";
                                        surname = "blanditiis";
                                        taxid = "deleniti";
                                    }};;
                                    customerCategory = new Long[]{{
                                        add(230533L),
                                        add(643990L),
                                        add(394869L),
                                        add(423855L),
                                    }};
                                    email = "Lenna47@yahoo.com";
                                    password = "magnam";
                                    phone = "722.567.4811 x2053";
                                    shippingAddress = new ShippingAddress() {{
                                        address = "5506 O'Hara Gateway";
                                        city = "Dallasside";
                                        country = "Burundi";
                                        municipality = "nemo";
                                        name = "Vera Wyman";
                                        postal = "maxime";
                                        region = "deleniti";
                                        surname = "facilis";
                                    }};;
                                    status = CustomerFieldsWithPasswordNoIDStatusEnum.PENDING;
                                }};;
                            }};, "architecto", "architecto");            

            PostCustomersJsonResponse res = sdk.customers.postCustomersJson(req);

            if (res.customer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putCustomersIdJson

Update a new Customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutCustomersIdJsonRequest;
import org.openapis.openapi.models.operations.PutCustomersIdJsonResponse;
import org.openapis.openapi.models.shared.BillingAddress;
import org.openapis.openapi.models.shared.CustomerFieldsWithPasswordNoID;
import org.openapis.openapi.models.shared.CustomerFieldsWithPasswordNoIDStatusEnum;
import org.openapis.openapi.models.shared.CustomerWithPasswordNoID;
import org.openapis.openapi.models.shared.ShippingAddress;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutCustomersIdJsonRequest req = new PutCustomersIdJsonRequest(                new CustomerWithPasswordNoID() {{
                                customer = new CustomerFieldsWithPasswordNoID() {{
                                    billingAddress = new BillingAddress() {{
                                        address = "374 Spencer Crescent";
                                        city = "Stratford";
                                        country = "Argentina";
                                        municipality = "consequuntur";
                                        name = "Miss Nick Cummerata";
                                        postal = "pariatur";
                                        region = "maxime";
                                        surname = "ea";
                                        taxid = "excepturi";
                                    }};;
                                    customerCategory = new Long[]{{
                                        add(407183L),
                                    }};
                                    email = "Annie.Wunsch45@gmail.com";
                                    password = "autem";
                                    phone = "283.908.2073 x9771";
                                    shippingAddress = new ShippingAddress() {{
                                        address = "5403 Chelsea Bridge";
                                        city = "Port Jalynburgh";
                                        country = "Tajikistan";
                                        municipality = "nostrum";
                                        name = "Percy Mohr";
                                        postal = "voluptatem";
                                        region = "porro";
                                        surname = "consequuntur";
                                    }};;
                                    status = CustomerFieldsWithPasswordNoIDStatusEnum.PENDING;
                                }};;
                            }};, "error", 50370, "occaecati");            

            PutCustomersIdJsonResponse res = sdk.customers.putCustomersIdJson(req);

            if (res.customer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
