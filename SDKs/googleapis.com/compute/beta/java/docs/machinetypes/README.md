# machineTypes

### Available Operations

* [computeMachineTypesAggregatedList](#computemachinetypesaggregatedlist) - Retrieves an aggregated list of machine types.
* [computeMachineTypesGet](#computemachinetypesget) - Returns the specified machine type.
* [computeMachineTypesList](#computemachinetypeslist) - Retrieves a list of machine types available to the specified project.

## computeMachineTypesAggregatedList

Retrieves an aggregated list of machine types.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeMachineTypesAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeMachineTypesAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeMachineTypesAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeMachineTypesAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeMachineTypesAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeMachineTypesAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeMachineTypesAggregatedListRequest req = new ComputeMachineTypesAggregatedListRequest("cupiditate") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "minus";
                alt = AltEnum.PROTO;
                callback = "odit";
                fields = "eaque";
                filter = "sed";
                includeAllScopes = false;
                key = "exercitationem";
                maxResults = 306879L;
                oauthToken = "id";
                orderBy = "omnis";
                pageToken = "ad";
                prettyPrint = false;
                quotaUser = "unde";
                returnPartialSuccess = false;
                uploadType = "consequatur";
                uploadProtocol = "quaerat";
                userIp = "adipisci";
            }};            

            ComputeMachineTypesAggregatedListResponse res = sdk.machineTypes.computeMachineTypesAggregatedList(req, new ComputeMachineTypesAggregatedListSecurity() {{
                option1 = new ComputeMachineTypesAggregatedListSecurityOption1("maxime", "distinctio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.machineTypeAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeMachineTypesGet

Returns the specified machine type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeMachineTypesGetRequest;
import org.openapis.openapi.models.operations.ComputeMachineTypesGetResponse;
import org.openapis.openapi.models.operations.ComputeMachineTypesGetSecurity;
import org.openapis.openapi.models.operations.ComputeMachineTypesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeMachineTypesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeMachineTypesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeMachineTypesGetRequest req = new ComputeMachineTypesGetRequest("numquam", "voluptas", "aspernatur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aliquid";
                alt = AltEnum.PROTO;
                callback = "minus";
                fields = "cupiditate";
                key = "cupiditate";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "dignissimos";
                uploadType = "maiores";
                uploadProtocol = "iste";
                userIp = "totam";
            }};            

            ComputeMachineTypesGetResponse res = sdk.machineTypes.computeMachineTypesGet(req, new ComputeMachineTypesGetSecurity() {{
                option1 = new ComputeMachineTypesGetSecurityOption1("accusamus", "eius") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.machineType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeMachineTypesList

Retrieves a list of machine types available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeMachineTypesListRequest;
import org.openapis.openapi.models.operations.ComputeMachineTypesListResponse;
import org.openapis.openapi.models.operations.ComputeMachineTypesListSecurity;
import org.openapis.openapi.models.operations.ComputeMachineTypesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeMachineTypesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeMachineTypesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeMachineTypesListRequest req = new ComputeMachineTypesListRequest("dignissimos", "unde") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "facilis";
                alt = AltEnum.MEDIA;
                callback = "nihil";
                fields = "perspiciatis";
                filter = "officia";
                key = "ut";
                maxResults = 108040L;
                oauthToken = "sequi";
                orderBy = "vero";
                pageToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "dolorum";
                returnPartialSuccess = false;
                uploadType = "rem";
                uploadProtocol = "impedit";
                userIp = "perspiciatis";
            }};            

            ComputeMachineTypesListResponse res = sdk.machineTypes.computeMachineTypesList(req, new ComputeMachineTypesListSecurity() {{
                option1 = new ComputeMachineTypesListSecurityOption1("vitae", "suscipit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.machineTypeList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
