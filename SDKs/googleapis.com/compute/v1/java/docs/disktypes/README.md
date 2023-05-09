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

            ComputeDiskTypesAggregatedListRequest req = new ComputeDiskTypesAggregatedListRequest("quia") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quisquam";
                alt = AltEnum.JSON;
                callback = "voluptatibus";
                fields = "eligendi";
                filter = "quae";
                includeAllScopes = false;
                key = "officiis";
                maxResults = 100002L;
                oauthToken = "architecto";
                orderBy = "enim";
                pageToken = "optio";
                prettyPrint = false;
                quotaUser = "rem";
                returnPartialSuccess = false;
                uploadType = "perferendis";
                uploadProtocol = "facilis";
                userIp = "reiciendis";
            }};            

            ComputeDiskTypesAggregatedListResponse res = sdk.diskTypes.computeDiskTypesAggregatedList(req, new ComputeDiskTypesAggregatedListSecurity() {{
                option1 = new ComputeDiskTypesAggregatedListSecurityOption1("a", "iste") {{
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

            ComputeDiskTypesGetRequest req = new ComputeDiskTypesGetRequest("dicta", "quos", "ullam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "modi";
                alt = AltEnum.PROTO;
                callback = "maxime";
                fields = "modi";
                key = "consequuntur";
                oauthToken = "assumenda";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "doloribus";
                uploadProtocol = "impedit";
                userIp = "porro";
            }};            

            ComputeDiskTypesGetResponse res = sdk.diskTypes.computeDiskTypesGet(req, new ComputeDiskTypesGetSecurity() {{
                option1 = new ComputeDiskTypesGetSecurityOption1("accusamus", "totam") {{
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

            ComputeDiskTypesListRequest req = new ComputeDiskTypesListRequest("reiciendis", "ab") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nihil";
                alt = AltEnum.MEDIA;
                callback = "iure";
                fields = "odio";
                filter = "nesciunt";
                key = "debitis";
                maxResults = 423588L;
                oauthToken = "neque";
                orderBy = "corporis";
                pageToken = "voluptas";
                prettyPrint = false;
                quotaUser = "consequuntur";
                returnPartialSuccess = false;
                uploadType = "officia";
                uploadProtocol = "reprehenderit";
                userIp = "distinctio";
            }};            

            ComputeDiskTypesListResponse res = sdk.diskTypes.computeDiskTypesList(req, new ComputeDiskTypesListSecurity() {{
                option1 = new ComputeDiskTypesListSecurityOption1("eius", "ipsa") {{
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
