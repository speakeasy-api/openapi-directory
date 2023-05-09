# swagger

### Available Operations

* [~~deleteSwagger~~](#deleteswagger) - DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#deleteapispecification to delete a Swagger file in ReadMe :warning: **Deprecated**
* [~~updateSwagger~~](#updateswagger) - DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#updateapispecification to update a Swagger file. :warning: **Deprecated**
* [~~uploadSwagger~~](#uploadswagger) - DEPRECATED. Instead use https://docs.readme.com/developers/reference/api-specification#uploadapispecification to upload a Swagger file to ReadMe :warning: **Deprecated**

## ~~deleteSwagger~~

DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#deleteapispecification to delete a Swagger file in ReadMe

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSwaggerRequest;
import org.openapis.openapi.models.operations.DeleteSwaggerResponse;
import org.openapis.openapi.models.operations.DeleteSwaggerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSwaggerRequest req = new DeleteSwaggerRequest("doloribus");            

            DeleteSwaggerResponse res = sdk.swagger.deleteSwagger(req, new DeleteSwaggerSecurity("sapiente", "architecto") {{
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

## ~~updateSwagger~~

DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#updateapispecification to update a Swagger file.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSwaggerRequest;
import org.openapis.openapi.models.operations.UpdateSwaggerRequestBody;
import org.openapis.openapi.models.operations.UpdateSwaggerRequestBodySwagger;
import org.openapis.openapi.models.operations.UpdateSwaggerResponse;
import org.openapis.openapi.models.operations.UpdateSwaggerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSwaggerRequest req = new UpdateSwaggerRequest(                new UpdateSwaggerRequestBody() {{
                                swagger = new UpdateSwaggerRequestBodySwagger("mollitia".getBytes(), "dolorem");;
                            }};, "culpa");            

            UpdateSwaggerResponse res = sdk.swagger.updateSwagger(req, new UpdateSwaggerSecurity("consequuntur", "repellat") {{
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

## ~~uploadSwagger~~

DEPRECATED. Instead use https://docs.readme.com/developers/reference/api-specification#uploadapispecification to upload a Swagger file to ReadMe

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadSwaggerRequestBody;
import org.openapis.openapi.models.operations.UploadSwaggerRequestBodySwagger;
import org.openapis.openapi.models.operations.UploadSwaggerResponse;
import org.openapis.openapi.models.operations.UploadSwaggerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UploadSwaggerRequestBody req = new UploadSwaggerRequestBody() {{
                swagger = new UploadSwaggerRequestBodySwagger("mollitia".getBytes(), "occaecati");;
            }};            

            UploadSwaggerResponse res = sdk.swagger.uploadSwagger(req, new UploadSwaggerSecurity("numquam", "commodi") {{
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
