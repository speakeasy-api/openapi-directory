# users

## Overview

Endpoints for creating, deleting or updating users.

### Available Operations

* [deleteUser](#deleteuser) - Delete user
* [link](#link) - Link web activity to user
* [upsertUser](#upsertuser) - Create or update user

## deleteUser

Endpoint to delete a user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserRequestBody;
import org.openapis.openapi.models.operations.DeleteUserRequestBodyIdentification;
import org.openapis.openapi.models.operations.DeleteUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUserRequestBody req = new DeleteUserRequestBody(                new DeleteUserRequestBodyIdentification() {{
                                email = "Terrill69@yahoo.com";
                                userId = "molestias";
                            }};);            

            DeleteUserResponse res = sdk.users.deleteUser(req);

            if (res.deleteUser202ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## link

💡 You don't need to use this endpoint if you use our JavaScript snippet in your application.

This endpoint is used to link web activity to a user in your application. This will help you discover which channels and campaigns work best.

When our JavaScript snippet is embedded on your website, blog or landing pages, a cookie named "__journey" will be set.

This will only work if your website and application are under the same top level domain.

Website, blog or landing pages
* www.my-domain.tld
* blog.my-domain.tld
* landing-page.my-domain.tld

Application
* app.my-domain.tld

The cookie on my-domain.tld will also be send to your app domain.

You should call this endpoint after the user succesfully logged in (so that you know the user's ID). Use the value of the cookie as device ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LinkRequestBody;
import org.openapis.openapi.models.operations.LinkRequestBodyIdentification;
import org.openapis.openapi.models.operations.LinkResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LinkRequestBody req = new LinkRequestBody("excepturi",                 new LinkRequestBodyIdentification() {{
                                email = "Dimitri_Lang@hotmail.com";
                                userId = "quasi";
                            }};);            

            LinkResponse res = sdk.users.link(req);

            if (res.link201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## upsertUser

Endpoint to create or update a user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpsertUserRequestBody;
import org.openapis.openapi.models.operations.UpsertUserRequestBodyIdentification;
import org.openapis.openapi.models.operations.UpsertUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpsertUserRequestBody req = new UpsertUserRequestBody(                new UpsertUserRequestBodyIdentification() {{
                                email = "Kira.Boehm31@hotmail.com";
                                userId = "consequatur";
                            }};) {{
                properties = new java.util.HashMap<String, Object>() {{
                    put("quibusdam", "explicabo");
                    put("deserunt", "distinctio");
                    put("quibusdam", "labore");
                }};
            }};            

            UpsertUserResponse res = sdk.users.upsertUser(req);

            if (res.upsertUser201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
