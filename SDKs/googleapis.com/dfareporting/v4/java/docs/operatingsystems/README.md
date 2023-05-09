# operatingSystems

### Available Operations

* [dfareportingOperatingSystemsGet](#dfareportingoperatingsystemsget) - Gets one operating system by DART ID.
* [dfareportingOperatingSystemsList](#dfareportingoperatingsystemslist) - Retrieves a list of operating systems.

## dfareportingOperatingSystemsGet

Gets one operating system by DART ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingOperatingSystemsGetRequest;
import org.openapis.openapi.models.operations.DfareportingOperatingSystemsGetResponse;
import org.openapis.openapi.models.operations.DfareportingOperatingSystemsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingOperatingSystemsGetRequest req = new DfareportingOperatingSystemsGetRequest("mollitia", "hic") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ullam";
                alt = AltEnum.JSON;
                callback = "dolores";
                fields = "occaecati";
                key = "nihil";
                oauthToken = "tempore";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "laboriosam";
                uploadProtocol = "explicabo";
            }};            

            DfareportingOperatingSystemsGetResponse res = sdk.operatingSystems.dfareportingOperatingSystemsGet(req, new DfareportingOperatingSystemsGetSecurity("laudantium", "sunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operatingSystem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingOperatingSystemsList

Retrieves a list of operating systems.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingOperatingSystemsListRequest;
import org.openapis.openapi.models.operations.DfareportingOperatingSystemsListResponse;
import org.openapis.openapi.models.operations.DfareportingOperatingSystemsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingOperatingSystemsListRequest req = new DfareportingOperatingSystemsListRequest("repellat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "modi";
                alt = AltEnum.PROTO;
                callback = "dolorem";
                fields = "laborum";
                key = "eos";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "consectetur";
                uploadType = "unde";
                uploadProtocol = "eius";
            }};            

            DfareportingOperatingSystemsListResponse res = sdk.operatingSystems.dfareportingOperatingSystemsList(req, new DfareportingOperatingSystemsListSecurity("id", "eum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operatingSystemsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
