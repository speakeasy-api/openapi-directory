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

            ComputeMachineTypesAggregatedListRequest req = new ComputeMachineTypesAggregatedListRequest("repellat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "amet";
                alt = AltEnum.JSON;
                callback = "pariatur";
                fields = "voluptatibus";
                filter = "vero";
                includeAllScopes = false;
                key = "provident";
                maxResults = 437586L;
                oauthToken = "incidunt";
                orderBy = "repellat";
                pageToken = "similique";
                prettyPrint = false;
                quotaUser = "ut";
                returnPartialSuccess = false;
                uploadType = "tempore";
                uploadProtocol = "et";
                userIp = "voluptates";
            }};            

            ComputeMachineTypesAggregatedListResponse res = sdk.machineTypes.computeMachineTypesAggregatedList(req, new ComputeMachineTypesAggregatedListSecurity() {{
                option1 = new ComputeMachineTypesAggregatedListSecurityOption1("excepturi", "placeat") {{
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

            ComputeMachineTypesGetRequest req = new ComputeMachineTypesGetRequest("consequatur", "natus", "molestiae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "temporibus";
                alt = AltEnum.MEDIA;
                callback = "autem";
                fields = "fugit";
                key = "neque";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "fugit";
                uploadProtocol = "voluptates";
                userIp = "beatae";
            }};            

            ComputeMachineTypesGetResponse res = sdk.machineTypes.computeMachineTypesGet(req, new ComputeMachineTypesGetSecurity() {{
                option1 = new ComputeMachineTypesGetSecurityOption1("id", "unde") {{
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

            ComputeMachineTypesListRequest req = new ComputeMachineTypesListRequest("consequuntur", "ratione") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "recusandae";
                alt = AltEnum.MEDIA;
                callback = "cupiditate";
                fields = "blanditiis";
                filter = "numquam";
                key = "porro";
                maxResults = 557249L;
                oauthToken = "consequatur";
                orderBy = "facilis";
                pageToken = "ut";
                prettyPrint = false;
                quotaUser = "nihil";
                returnPartialSuccess = false;
                uploadType = "sint";
                uploadProtocol = "saepe";
                userIp = "atque";
            }};            

            ComputeMachineTypesListResponse res = sdk.machineTypes.computeMachineTypesList(req, new ComputeMachineTypesListSecurity() {{
                option1 = new ComputeMachineTypesListSecurityOption1("excepturi", "architecto") {{
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
