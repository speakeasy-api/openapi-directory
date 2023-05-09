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

            DnsManagedZoneOperationsGetRequest req = new DnsManagedZoneOperationsGetRequest("quam", "similique", "delectus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "facere";
                alt = AltEnum.PROTO;
                callback = "at";
                clientOperationId = "molestias";
                fields = "aut";
                key = "temporibus";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "incidunt";
                uploadType = "numquam";
                uploadProtocol = "corrupti";
            }};            

            DnsManagedZoneOperationsGetResponse res = sdk.managedZoneOperations.dnsManagedZoneOperationsGet(req, new DnsManagedZoneOperationsGetSecurity() {{
                option1 = new DnsManagedZoneOperationsGetSecurityOption1("similique", "dolore") {{
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

            DnsManagedZoneOperationsListRequest req = new DnsManagedZoneOperationsListRequest("esse", "reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "amet";
                alt = AltEnum.MEDIA;
                callback = "aut";
                fields = "impedit";
                key = "minima";
                maxResults = 551549L;
                oauthToken = "blanditiis";
                pageToken = "quas";
                prettyPrint = false;
                quotaUser = "voluptatem";
                sortBy = DnsManagedZoneOperationsListSortByEnum.ID;
                uploadType = "quas";
                uploadProtocol = "ipsum";
            }};            

            DnsManagedZoneOperationsListResponse res = sdk.managedZoneOperations.dnsManagedZoneOperationsList(req, new DnsManagedZoneOperationsListSecurity() {{
                option1 = new DnsManagedZoneOperationsListSecurityOption1("vero", "fuga") {{
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
