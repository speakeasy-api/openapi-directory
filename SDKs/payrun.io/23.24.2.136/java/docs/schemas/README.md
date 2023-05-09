# schemas

### Available Operations

* [getSchema](#getschema) - Get XSD schema
* [getSchemas](#getschemas) - Get a list of all available schemas

## getSchema

Returns the XSD schema for the specified data type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchemaRequest;
import org.openapis.openapi.models.operations.GetSchemaResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSchemaRequest req = new GetSchemaRequest("officia", "saepe", "eum");            

            GetSchemaResponse res = sdk.schemas.getSchema(req);

            if (res.getSchema200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchemas

Returns a collection of links to all the available data object schemas

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchemasRequest;
import org.openapis.openapi.models.operations.GetSchemasResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSchemasRequest req = new GetSchemasRequest("repudiandae", "accusantium");            

            GetSchemasResponse res = sdk.schemas.getSchemas(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
