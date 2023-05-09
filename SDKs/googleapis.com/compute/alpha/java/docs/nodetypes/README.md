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

            ComputeNodeTypesAggregatedListRequest req = new ComputeNodeTypesAggregatedListRequest("similique") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "quisquam";
                fields = "expedita";
                filter = "ipsa";
                includeAllScopes = false;
                key = "natus";
                maxResults = 414639L;
                oauthToken = "voluptas";
                orderBy = "nemo";
                pageToken = "mollitia";
                prettyPrint = false;
                quotaUser = "repellat";
                returnPartialSuccess = false;
                uploadType = "est";
                uploadProtocol = "rerum";
                userIp = "iste";
            }};            

            ComputeNodeTypesAggregatedListResponse res = sdk.nodeTypes.computeNodeTypesAggregatedList(req, new ComputeNodeTypesAggregatedListSecurity() {{
                option1 = new ComputeNodeTypesAggregatedListSecurityOption1("facilis", "nesciunt") {{
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

            ComputeNodeTypesGetRequest req = new ComputeNodeTypesGetRequest("voluptas", "quaerat", "possimus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ullam";
                alt = AltEnum.PROTO;
                callback = "doloremque";
                fields = "quis";
                key = "veniam";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "tenetur";
                uploadProtocol = "cum";
                userIp = "expedita";
            }};            

            ComputeNodeTypesGetResponse res = sdk.nodeTypes.computeNodeTypesGet(req, new ComputeNodeTypesGetSecurity() {{
                option1 = new ComputeNodeTypesGetSecurityOption1("debitis", "neque") {{
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

            ComputeNodeTypesListRequest req = new ComputeNodeTypesListRequest("corrupti", "consectetur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "illo";
                fields = "cumque";
                filter = "necessitatibus";
                key = "corrupti";
                maxResults = 408224L;
                oauthToken = "rem";
                orderBy = "ullam";
                pageToken = "dolorum";
                prettyPrint = false;
                quotaUser = "voluptate";
                returnPartialSuccess = false;
                uploadType = "ad";
                uploadProtocol = "repudiandae";
                userIp = "debitis";
            }};            

            ComputeNodeTypesListResponse res = sdk.nodeTypes.computeNodeTypesList(req, new ComputeNodeTypesListSecurity() {{
                option1 = new ComputeNodeTypesListSecurityOption1("eveniet", "vitae") {{
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
