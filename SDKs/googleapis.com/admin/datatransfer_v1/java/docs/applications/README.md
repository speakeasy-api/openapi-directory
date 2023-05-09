# applications

### Available Operations

* [datatransferApplicationsGet](#datatransferapplicationsget) - Retrieves information about an application for the given application ID.
* [datatransferApplicationsList](#datatransferapplicationslist) - Lists the applications available for data transfer for a customer.

## datatransferApplicationsGet

Retrieves information about an application for the given application ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatatransferApplicationsGetRequest;
import org.openapis.openapi.models.operations.DatatransferApplicationsGetResponse;
import org.openapis.openapi.models.operations.DatatransferApplicationsGetSecurity;
import org.openapis.openapi.models.operations.DatatransferApplicationsGetSecurityOption1;
import org.openapis.openapi.models.operations.DatatransferApplicationsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatatransferApplicationsGetRequest req = new DatatransferApplicationsGetRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "voluptatum";
                uploadProtocol = "iusto";
            }};            

            DatatransferApplicationsGetResponse res = sdk.applications.datatransferApplicationsGet(req, new DatatransferApplicationsGetSecurity() {{
                option1 = new DatatransferApplicationsGetSecurityOption1("excepturi", "nisi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.application != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datatransferApplicationsList

Lists the applications available for data transfer for a customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatatransferApplicationsListRequest;
import org.openapis.openapi.models.operations.DatatransferApplicationsListResponse;
import org.openapis.openapi.models.operations.DatatransferApplicationsListSecurity;
import org.openapis.openapi.models.operations.DatatransferApplicationsListSecurityOption1;
import org.openapis.openapi.models.operations.DatatransferApplicationsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatatransferApplicationsListRequest req = new DatatransferApplicationsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "temporibus";
                alt = AltEnum.JSON;
                callback = "quis";
                customerId = "veritatis";
                fields = "deserunt";
                key = "perferendis";
                maxResults = 368241L;
                oauthToken = "repellendus";
                pageToken = "sapiente";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "odit";
                uploadProtocol = "at";
            }};            

            DatatransferApplicationsListResponse res = sdk.applications.datatransferApplicationsList(req, new DatatransferApplicationsListSecurity() {{
                option1 = new DatatransferApplicationsListSecurityOption1("at", "maiores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.applicationsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
