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

            DnsManagedZoneOperationsGetRequest req = new DnsManagedZoneOperationsGetRequest("esse", "quas", "blanditiis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptates";
                alt = AltEnum.PROTO;
                callback = "autem";
                clientOperationId = "vel";
                fields = "beatae";
                key = "quos";
                oauthToken = "consectetur";
                prettyPrint = false;
                quotaUser = "soluta";
                uploadType = "tenetur";
                uploadProtocol = "necessitatibus";
            }};            

            DnsManagedZoneOperationsGetResponse res = sdk.managedZoneOperations.dnsManagedZoneOperationsGet(req, new DnsManagedZoneOperationsGetSecurity() {{
                option1 = new DnsManagedZoneOperationsGetSecurityOption1("perspiciatis", "suscipit") {{
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

            DnsManagedZoneOperationsListRequest req = new DnsManagedZoneOperationsListRequest("ullam", "unde") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quidem";
                alt = AltEnum.JSON;
                callback = "doloremque";
                fields = "accusamus";
                key = "quod";
                maxResults = 121133L;
                oauthToken = "voluptas";
                pageToken = "earum";
                prettyPrint = false;
                quotaUser = "est";
                sortBy = DnsManagedZoneOperationsListSortByEnum.ID;
                uploadType = "nihil";
                uploadProtocol = "nostrum";
            }};            

            DnsManagedZoneOperationsListResponse res = sdk.managedZoneOperations.dnsManagedZoneOperationsList(req, new DnsManagedZoneOperationsListSecurity() {{
                option1 = new DnsManagedZoneOperationsListSecurityOption1("rerum", "perferendis") {{
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
