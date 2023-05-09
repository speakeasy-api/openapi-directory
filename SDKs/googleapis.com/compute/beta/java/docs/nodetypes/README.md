# nodeTypes

### Available Operations

* [computeNodeTypesAggregatedList](#computenodetypesaggregatedlist) - Retrieves an aggregated list of node types.
* [computeNodeTypesGet](#computenodetypesget) - Returns the specified node type.
* [computeNodeTypesList](#computenodetypeslist) - Retrieves a list of node types available to the specified project.

## computeNodeTypesAggregatedList

Retrieves an aggregated list of node types.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeTypesAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeNodeTypesAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeNodeTypesAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeNodeTypesAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNodeTypesAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNodeTypesAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeTypesAggregatedListRequest req = new ComputeNodeTypesAggregatedListRequest("voluptates") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nam";
                alt = AltEnum.JSON;
                callback = "repellat";
                fields = "corporis";
                filter = "similique";
                includeAllScopes = false;
                key = "saepe";
                maxResults = 882230L;
                oauthToken = "quo";
                orderBy = "placeat";
                pageToken = "possimus";
                prettyPrint = false;
                quotaUser = "atque";
                returnPartialSuccess = false;
                uploadType = "consectetur";
                uploadProtocol = "et";
                userIp = "fuga";
            }};            

            ComputeNodeTypesAggregatedListResponse res = sdk.nodeTypes.computeNodeTypesAggregatedList(req, new ComputeNodeTypesAggregatedListSecurity() {{
                option1 = new ComputeNodeTypesAggregatedListSecurityOption1("explicabo", "provident") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.nodeTypeAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNodeTypesGet

Returns the specified node type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeTypesGetRequest;
import org.openapis.openapi.models.operations.ComputeNodeTypesGetResponse;
import org.openapis.openapi.models.operations.ComputeNodeTypesGetSecurity;
import org.openapis.openapi.models.operations.ComputeNodeTypesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNodeTypesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNodeTypesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeTypesGetRequest req = new ComputeNodeTypesGetRequest("facere", "deserunt", "ipsam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "unde";
                alt = AltEnum.MEDIA;
                callback = "dolore";
                fields = "accusamus";
                key = "debitis";
                oauthToken = "veniam";
                prettyPrint = false;
                quotaUser = "voluptates";
                uploadType = "harum";
                uploadProtocol = "a";
                userIp = "quam";
            }};            

            ComputeNodeTypesGetResponse res = sdk.nodeTypes.computeNodeTypesGet(req, new ComputeNodeTypesGetSecurity() {{
                option1 = new ComputeNodeTypesGetSecurityOption1("itaque", "nisi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.nodeType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNodeTypesList

Retrieves a list of node types available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeTypesListRequest;
import org.openapis.openapi.models.operations.ComputeNodeTypesListResponse;
import org.openapis.openapi.models.operations.ComputeNodeTypesListSecurity;
import org.openapis.openapi.models.operations.ComputeNodeTypesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNodeTypesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNodeTypesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeTypesListRequest req = new ComputeNodeTypesListRequest("molestias", "deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "esse";
                alt = AltEnum.PROTO;
                callback = "eaque";
                fields = "ipsam";
                filter = "vitae";
                key = "similique";
                maxResults = 686056L;
                oauthToken = "reprehenderit";
                orderBy = "impedit";
                pageToken = "nostrum";
                prettyPrint = false;
                quotaUser = "natus";
                returnPartialSuccess = false;
                uploadType = "itaque";
                uploadProtocol = "vel";
                userIp = "excepturi";
            }};            

            ComputeNodeTypesListResponse res = sdk.nodeTypes.computeNodeTypesList(req, new ComputeNodeTypesListSecurity() {{
                option1 = new ComputeNodeTypesListSecurityOption1("distinctio", "quam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.nodeTypeList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
