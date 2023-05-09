# v1

### Available Operations

* [changePassword](#changepassword) - Set subaccount's password
* [createSubaccountJson](#createsubaccountjson) - Create a Subaccount owned by the authenticated Reseller
* [createSubaccountRaw](#createsubaccountraw) - Create a Subaccount owned by the authenticated Reseller
* [delete](#delete) - Request the deletion of a shopper profile
* [get](#get) - Get details for the specified Shopper
* [getStatus](#getstatus) - Get details for the specified Shopper
* [updateJson](#updatejson) - Update details for the specified Shopper
* [updateRaw](#updateraw) - Update details for the specified Shopper

## changePassword

<strong>Notes:</strong><ul><li>Password set is only supported by API Resellers setting subaccount passwords.</li><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangePasswordRequest;
import org.openapis.openapi.models.operations.ChangePasswordResponse;
import org.openapis.openapi.models.shared.Secret;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChangePasswordRequest req = new ChangePasswordRequest(                new Secret() {{
                                secret = "P@55w0rd+";
                            }};, "provident");            

            ChangePasswordResponse res = sdk.v1.changePassword(req);

            if (res.shopperId != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSubaccountJson

Create a Subaccount owned by the authenticated Reseller

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSubaccountJsonResponse;
import org.openapis.openapi.models.shared.SubaccountCreate;
import org.openapis.openapi.models.shared.SubaccountCreateMarketIdEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SubaccountCreate req = new SubaccountCreate("Rosalinda_Mitchell84@hotmail.com", "vel", "error", "deserunt") {{
                externalId = 384382L;
                marketId = SubaccountCreateMarketIdEnum.ES_MX;
            }};            

            CreateSubaccountJsonResponse res = sdk.v1.createSubaccountJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSubaccountRaw

Create a Subaccount owned by the authenticated Reseller

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSubaccountRawResponse;
import org.openapis.openapi.models.shared.SubaccountCreate;
import org.openapis.openapi.models.shared.SubaccountCreateMarketIdEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "magnam".getBytes()            

            CreateSubaccountRawResponse res = sdk.v1.createSubaccountRaw(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## delete

<strong>Notes:</strong><ul><li>Shopper deletion is not supported in OTE</li><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRequest;
import org.openapis.openapi.models.operations.DeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRequest req = new DeleteRequest("debitis", "ipsa");            

            DeleteResponse res = sdk.v1.delete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## get

<strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIncludesEnum;
import org.openapis.openapi.models.operations.GetRequest;
import org.openapis.openapi.models.operations.GetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRequest req = new GetRequest("delectus") {{
                includes = new org.openapis.openapi.models.operations.GetIncludesEnum[]{{
                    add(GetIncludesEnum.CUSTOMER_ID),
                    add(GetIncludesEnum.CUSTOMER_ID),
                }};
            }};            

            GetResponse res = sdk.v1.get(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStatus

<strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**. **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStatusRequest;
import org.openapis.openapi.models.operations.GetStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStatusRequest req = new GetStatusRequest("suscipit", "molestiae");            

            GetStatusResponse res = sdk.v1.getStatus(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateJson

<strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateJsonRequest;
import org.openapis.openapi.models.operations.UpdateJsonResponse;
import org.openapis.openapi.models.shared.ShopperUpdate;
import org.openapis.openapi.models.shared.ShopperUpdateMarketIdEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateJsonRequest req = new UpdateJsonRequest(                new ShopperUpdate() {{
                                email = "Randy_Lehner@hotmail.com";
                                externalId = 392785L;
                                marketId = ShopperUpdateMarketIdEnum.UK_UA;
                                nameFirst = "temporibus";
                                nameLast = "ab";
                            }};, "quis");            

            UpdateJsonResponse res = sdk.v1.updateJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRaw

<strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRawRequest;
import org.openapis.openapi.models.operations.UpdateRawResponse;
import org.openapis.openapi.models.shared.ShopperUpdate;
import org.openapis.openapi.models.shared.ShopperUpdateMarketIdEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateRawRequest req = new UpdateRawRequest("veritatis".getBytes(), "deserunt");            

            UpdateRawResponse res = sdk.v1.updateRaw(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
