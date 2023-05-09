# managedZoneOperations

### Available Operations

* [dnsManagedZoneOperationsGet](#dnsmanagedzoneoperationsget) - Fetches the representation of an existing Operation.
* [dnsManagedZoneOperationsList](#dnsmanagedzoneoperationslist) - Enumerates Operations for the given ManagedZone.

## dnsManagedZoneOperationsGet

Fetches the representation of an existing Operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsManagedZoneOperationsGetRequest;
import org.openapis.openapi.models.operations.DnsManagedZoneOperationsGetResponse;
import org.openapis.openapi.models.operations.DnsManagedZoneOperationsGetSecurity;
import org.openapis.openapi.models.operations.DnsManagedZoneOperationsGetSecurityOption1;
import org.openapis.openapi.models.operations.DnsManagedZoneOperationsGetSecurityOption2;
import org.openapis.openapi.models.operations.DnsManagedZoneOperationsGetSecurityOption3;
import org.openapis.openapi.models.operations.DnsManagedZoneOperationsGetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsManagedZoneOperationsGetRequest req = new DnsManagedZoneOperationsGetRequest("sequi", "amet", "exercitationem", "illum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "unde";
                alt = AltEnum.MEDIA;
                callback = "eligendi";
                clientOperationId = "tempore";
                fields = "amet";
                key = "debitis";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "asperiores";
                uploadType = "temporibus";
                uploadProtocol = "id";
            }};            

            DnsManagedZoneOperationsGetResponse res = sdk.managedZoneOperations.dnsManagedZoneOperationsGet(req, new DnsManagedZoneOperationsGetSecurity() {{
                option1 = new DnsManagedZoneOperationsGetSecurityOption1("atque", "quibusdam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dnsManagedZoneOperationsList

Enumerates Operations for the given ManagedZone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsManagedZoneOperationsListRequest;
import org.openapis.openapi.models.operations.DnsManagedZoneOperationsListResponse;
import org.openapis.openapi.models.operations.DnsManagedZoneOperationsListSecurity;
import org.openapis.openapi.models.operations.DnsManagedZoneOperationsListSecurityOption1;
import org.openapis.openapi.models.operations.DnsManagedZoneOperationsListSecurityOption2;
import org.openapis.openapi.models.operations.DnsManagedZoneOperationsListSecurityOption3;
import org.openapis.openapi.models.operations.DnsManagedZoneOperationsListSecurityOption4;
import org.openapis.openapi.models.operations.DnsManagedZoneOperationsListSortByEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsManagedZoneOperationsListRequest req = new DnsManagedZoneOperationsListRequest("sit", "quo", "veniam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "earum";
                fields = "doloremque";
                key = "ipsum";
                maxResults = 367L;
                oauthToken = "doloremque";
                pageToken = "tempora";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                sortBy = DnsManagedZoneOperationsListSortByEnum.START_TIME;
                uploadType = "atque";
                uploadProtocol = "officia";
            }};            

            DnsManagedZoneOperationsListResponse res = sdk.managedZoneOperations.dnsManagedZoneOperationsList(req, new DnsManagedZoneOperationsListSecurity() {{
                option1 = new DnsManagedZoneOperationsListSecurityOption1("ex", "architecto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.managedZoneOperationsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
