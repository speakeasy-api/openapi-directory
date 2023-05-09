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

            ComputeDiskTypesAggregatedListRequest req = new ComputeDiskTypesAggregatedListRequest("distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quod";
                alt = AltEnum.PROTO;
                callback = "sit";
                fields = "possimus";
                filter = "distinctio";
                includeAllScopes = false;
                key = "distinctio";
                maxResults = 825681L;
                oauthToken = "illum";
                orderBy = "soluta";
                pageToken = "magnam";
                prettyPrint = false;
                quotaUser = "laudantium";
                returnPartialSuccess = false;
                uploadType = "tempora";
                uploadProtocol = "esse";
                userIp = "doloremque";
            }};            

            ComputeDiskTypesAggregatedListResponse res = sdk.diskTypes.computeDiskTypesAggregatedList(req, new ComputeDiskTypesAggregatedListSecurity() {{
                option1 = new ComputeDiskTypesAggregatedListSecurityOption1("corrupti", "reiciendis") {{
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

            ComputeDiskTypesGetRequest req = new ComputeDiskTypesGetRequest("facilis", "aliquam", "repudiandae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "natus";
                alt = AltEnum.JSON;
                callback = "officiis";
                fields = "eum";
                key = "rerum";
                oauthToken = "placeat";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "ad";
                uploadProtocol = "blanditiis";
                userIp = "porro";
            }};            

            ComputeDiskTypesGetResponse res = sdk.diskTypes.computeDiskTypesGet(req, new ComputeDiskTypesGetSecurity() {{
                option1 = new ComputeDiskTypesGetSecurityOption1("labore", "impedit") {{
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

            ComputeDiskTypesListRequest req = new ComputeDiskTypesListRequest("ut", "earum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "numquam";
                alt = AltEnum.JSON;
                callback = "cupiditate";
                fields = "occaecati";
                filter = "itaque";
                key = "fuga";
                maxResults = 234845L;
                oauthToken = "modi";
                orderBy = "aspernatur";
                pageToken = "explicabo";
                prettyPrint = false;
                quotaUser = "suscipit";
                returnPartialSuccess = false;
                uploadType = "ipsa";
                uploadProtocol = "eveniet";
                userIp = "sint";
            }};            

            ComputeDiskTypesListResponse res = sdk.diskTypes.computeDiskTypesList(req, new ComputeDiskTypesListSecurity() {{
                option1 = new ComputeDiskTypesListSecurityOption1("nobis", "qui") {{
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
