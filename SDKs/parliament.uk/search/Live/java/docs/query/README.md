# query

### Available Operations

* [getQuery](#getquery) - Search results
* [getQueryExtension](#getqueryextension) - Search results

## getQuery

Search results

OpenSearch github repository
<https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-response-elements>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQueryRequest;
import org.openapis.openapi.models.operations.GetQueryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQueryRequest req = new GetQueryRequest("corrupti") {{
                count = 5928.45;
                inUrlPrefixes = "distinctio";
                start = 8442.66;
                subdomains = "unde";
            }};            

            GetQueryResponse res = sdk.query.getQuery(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQueryExtension

Search results

OpenSearch github repository
<https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-response-elements>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQueryExtensionExtensionEnum;
import org.openapis.openapi.models.operations.GetQueryExtensionRequest;
import org.openapis.openapi.models.operations.GetQueryExtensionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQueryExtensionRequest req = new GetQueryExtensionRequest(GetQueryExtensionExtensionEnum.JSON, "corrupti") {{
                count = 8472.52;
                inUrlPrefixes = "vel";
                start = 6235.64;
                subdomains = "deserunt";
            }};            

            GetQueryExtensionResponse res = sdk.query.getQueryExtension(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
