# diskTypes

### Available Operations

* [computeDiskTypesAggregatedList](#computedisktypesaggregatedlist) - Retrieves an aggregated list of disk types.
* [computeDiskTypesGet](#computedisktypesget) - Returns the specified disk type.
* [computeDiskTypesList](#computedisktypeslist) - Retrieves a list of disk types available to the specified project.

## computeDiskTypesAggregatedList

Retrieves an aggregated list of disk types.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeDiskTypesAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeDiskTypesAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeDiskTypesAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeDiskTypesAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeDiskTypesAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeDiskTypesAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeDiskTypesAggregatedListRequest req = new ComputeDiskTypesAggregatedListRequest("sint") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "numquam";
                alt = AltEnum.PROTO;
                callback = "adipisci";
                fields = "libero";
                filter = "in";
                includeAllScopes = false;
                key = "minima";
                maxResults = 403147L;
                oauthToken = "minus";
                orderBy = "ab";
                pageToken = "beatae";
                prettyPrint = false;
                quotaUser = "hic";
                returnPartialSuccess = false;
                uploadType = "nisi";
                uploadProtocol = "quisquam";
                userIp = "dolor";
            }};            

            ComputeDiskTypesAggregatedListResponse res = sdk.diskTypes.computeDiskTypesAggregatedList(req, new ComputeDiskTypesAggregatedListSecurity() {{
                option1 = new ComputeDiskTypesAggregatedListSecurityOption1("ducimus", "fuga") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.diskTypeAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeDiskTypesGet

Returns the specified disk type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeDiskTypesGetRequest;
import org.openapis.openapi.models.operations.ComputeDiskTypesGetResponse;
import org.openapis.openapi.models.operations.ComputeDiskTypesGetSecurity;
import org.openapis.openapi.models.operations.ComputeDiskTypesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeDiskTypesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeDiskTypesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeDiskTypesGetRequest req = new ComputeDiskTypesGetRequest("minima", "architecto", "qui") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magni";
                alt = AltEnum.JSON;
                callback = "adipisci";
                fields = "praesentium";
                key = "dolor";
                oauthToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "expedita";
                uploadType = "facilis";
                uploadProtocol = "impedit";
                userIp = "sit";
            }};            

            ComputeDiskTypesGetResponse res = sdk.diskTypes.computeDiskTypesGet(req, new ComputeDiskTypesGetSecurity() {{
                option1 = new ComputeDiskTypesGetSecurityOption1("nemo", "culpa") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.diskType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeDiskTypesList

Retrieves a list of disk types available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeDiskTypesListRequest;
import org.openapis.openapi.models.operations.ComputeDiskTypesListResponse;
import org.openapis.openapi.models.operations.ComputeDiskTypesListSecurity;
import org.openapis.openapi.models.operations.ComputeDiskTypesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeDiskTypesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeDiskTypesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeDiskTypesListRequest req = new ComputeDiskTypesListRequest("consequuntur", "amet") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "quod";
                fields = "itaque";
                filter = "a";
                key = "quisquam";
                maxResults = 316550L;
                oauthToken = "doloribus";
                orderBy = "assumenda";
                pageToken = "officiis";
                prettyPrint = false;
                quotaUser = "architecto";
                returnPartialSuccess = false;
                uploadType = "alias";
                uploadProtocol = "culpa";
                userIp = "ipsa";
            }};            

            ComputeDiskTypesListResponse res = sdk.diskTypes.computeDiskTypesList(req, new ComputeDiskTypesListSecurity() {{
                option1 = new ComputeDiskTypesListSecurityOption1("nobis", "necessitatibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.diskTypeList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
