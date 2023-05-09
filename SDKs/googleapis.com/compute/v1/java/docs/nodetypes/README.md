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

            ComputeNodeTypesAggregatedListRequest req = new ComputeNodeTypesAggregatedListRequest("explicabo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aut";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "delectus";
                filter = "saepe";
                includeAllScopes = false;
                key = "odio";
                maxResults = 385231L;
                oauthToken = "veniam";
                orderBy = "libero";
                pageToken = "delectus";
                prettyPrint = false;
                quotaUser = "a";
                returnPartialSuccess = false;
                uploadType = "rerum";
                uploadProtocol = "eligendi";
                userIp = "quidem";
            }};            

            ComputeNodeTypesAggregatedListResponse res = sdk.nodeTypes.computeNodeTypesAggregatedList(req, new ComputeNodeTypesAggregatedListSecurity() {{
                option1 = new ComputeNodeTypesAggregatedListSecurityOption1("rem", "commodi") {{
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

            ComputeNodeTypesGetRequest req = new ComputeNodeTypesGetRequest("aperiam", "quasi", "ad") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "magni";
                alt = AltEnum.JSON;
                callback = "aliquid";
                fields = "est";
                key = "fuga";
                oauthToken = "eaque";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "aut";
                uploadProtocol = "esse";
                userIp = "consequatur";
            }};            

            ComputeNodeTypesGetResponse res = sdk.nodeTypes.computeNodeTypesGet(req, new ComputeNodeTypesGetSecurity() {{
                option1 = new ComputeNodeTypesGetSecurityOption1("odio", "hic") {{
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

            ComputeNodeTypesListRequest req = new ComputeNodeTypesListRequest("dolorum", "quam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "unde";
                alt = AltEnum.MEDIA;
                callback = "odit";
                fields = "modi";
                filter = "odio";
                key = "officia";
                maxResults = 518803L;
                oauthToken = "esse";
                orderBy = "sed";
                pageToken = "beatae";
                prettyPrint = false;
                quotaUser = "esse";
                returnPartialSuccess = false;
                uploadType = "hic";
                uploadProtocol = "officiis";
                userIp = "illum";
            }};            

            ComputeNodeTypesListResponse res = sdk.nodeTypes.computeNodeTypesList(req, new ComputeNodeTypesListSecurity() {{
                option1 = new ComputeNodeTypesListSecurityOption1("sint", "commodi") {{
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
