# SDK

## Overview

Catalog Inventory

### Available Operations

* [getDocumentation](#getdocumentation) - Return this API document in JSON format
* [postGraphQL](#postgraphql) - Perform a GraphQL Query

## getDocumentation

Return this API document in JSON format

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDocumentationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio", "quibusdam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetDocumentationResponse res = sdk.sdk.getDocumentation();

            if (res.getDocumentation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGraphQL

Performs a GraphQL Query

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGraphQLResponse;
import org.openapis.openapi.models.shared.GraphQLRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde", "nulla") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.GraphQLRequest req = new GraphQLRequest("corrupti") {{
                operationName = "illum";
                variables = new java.util.HashMap<String, Object>() {{
                    put("error", "deserunt");
                    put("suscipit", "iure");
                }};
            }};            

            PostGraphQLResponse res = sdk.sdk.postGraphQL(req);

            if (res.graphQLResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
