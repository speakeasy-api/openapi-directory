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

            ComputeMachineTypesAggregatedListRequest req = new ComputeMachineTypesAggregatedListRequest("necessitatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cupiditate";
                alt = AltEnum.PROTO;
                callback = "voluptatibus";
                fields = "vel";
                filter = "labore";
                includeAllScopes = false;
                key = "maiores";
                maxResults = 649914L;
                oauthToken = "iure";
                orderBy = "earum";
                pageToken = "ad";
                prettyPrint = false;
                quotaUser = "exercitationem";
                returnPartialSuccess = false;
                uploadType = "hic";
                uploadProtocol = "deleniti";
                userIp = "quod";
            }};            

            ComputeMachineTypesAggregatedListResponse res = sdk.machineTypes.computeMachineTypesAggregatedList(req, new ComputeMachineTypesAggregatedListSecurity() {{
                option1 = new ComputeMachineTypesAggregatedListSecurityOption1("illum", "omnis") {{
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

            ComputeMachineTypesGetRequest req = new ComputeMachineTypesGetRequest("veniam", "error", "consequatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "asperiores";
                alt = AltEnum.JSON;
                callback = "ex";
                fields = "totam";
                key = "beatae";
                oauthToken = "ex";
                prettyPrint = false;
                quotaUser = "tempore";
                uploadType = "autem";
                uploadProtocol = "minima";
                userIp = "asperiores";
            }};            

            ComputeMachineTypesGetResponse res = sdk.machineTypes.computeMachineTypesGet(req, new ComputeMachineTypesGetSecurity() {{
                option1 = new ComputeMachineTypesGetSecurityOption1("magni", "harum") {{
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

            ComputeMachineTypesListRequest req = new ComputeMachineTypesListRequest("dicta", "necessitatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "rerum";
                alt = AltEnum.PROTO;
                callback = "impedit";
                fields = "nisi";
                filter = "ipsum";
                key = "cumque";
                maxResults = 785123L;
                oauthToken = "animi";
                orderBy = "enim";
                pageToken = "autem";
                prettyPrint = false;
                quotaUser = "corporis";
                returnPartialSuccess = false;
                uploadType = "aperiam";
                uploadProtocol = "veniam";
                userIp = "ea";
            }};            

            ComputeMachineTypesListResponse res = sdk.machineTypes.computeMachineTypesList(req, new ComputeMachineTypesListSecurity() {{
                option1 = new ComputeMachineTypesListSecurityOption1("accusantium", "voluptatem") {{
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
