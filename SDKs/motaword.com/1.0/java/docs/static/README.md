# static_

### Available Operations

* [getEndpoints](#getendpoints) - Available endpoints
* [getFormats](#getformats) - List of supported file formats
* [getLanguages](#getlanguages) - List of supported languages
* [getSwaggerYaml](#getswaggeryaml) - OpenAPI YAML representation of our API

## getEndpoints

The root endpoint will provide you with an OpenAPI definition of MotaWord API.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEndpointsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetEndpointsResponse res = sdk.static_.getEndpoints();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFormats

Get a list of supported formats for documents, style guides and extensions.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFormatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetFormatsResponse res = sdk.static_.getFormats();

            if (res.getFormats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLanguages

Get a list of supported languages

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLanguagesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetLanguagesResponse res = sdk.static_.getLanguages();

            if (res.languages != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSwaggerYaml

Get Swagger YAML

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSwaggerYamlResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSwaggerYamlResponse res = sdk.static_.getSwaggerYaml();

            if (res.getSwaggerYaml200TextYamlString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
