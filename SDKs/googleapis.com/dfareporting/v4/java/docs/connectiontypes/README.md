# connectionTypes

### Available Operations

* [dfareportingConnectionTypesGet](#dfareportingconnectiontypesget) - Gets one connection type by ID.
* [dfareportingConnectionTypesList](#dfareportingconnectiontypeslist) - Retrieves a list of connection types.

## dfareportingConnectionTypesGet

Gets one connection type by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingConnectionTypesGetRequest;
import org.openapis.openapi.models.operations.DfareportingConnectionTypesGetResponse;
import org.openapis.openapi.models.operations.DfareportingConnectionTypesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingConnectionTypesGetRequest req = new DfareportingConnectionTypesGetRequest("sequi", "sint") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "consequuntur";
                fields = "enim";
                key = "minus";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "nulla";
                uploadProtocol = "inventore";
            }};            

            DfareportingConnectionTypesGetResponse res = sdk.connectionTypes.dfareportingConnectionTypesGet(req, new DfareportingConnectionTypesGetSecurity("omnis", "quibusdam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.connectionType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingConnectionTypesList

Retrieves a list of connection types.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingConnectionTypesListRequest;
import org.openapis.openapi.models.operations.DfareportingConnectionTypesListResponse;
import org.openapis.openapi.models.operations.DfareportingConnectionTypesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingConnectionTypesListRequest req = new DfareportingConnectionTypesListRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sint";
                alt = AltEnum.PROTO;
                callback = "magnam";
                fields = "adipisci";
                key = "natus";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "sint";
                uploadProtocol = "eos";
            }};            

            DfareportingConnectionTypesListResponse res = sdk.connectionTypes.dfareportingConnectionTypesList(req, new DfareportingConnectionTypesListSecurity("nisi", "commodi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.connectionTypesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
