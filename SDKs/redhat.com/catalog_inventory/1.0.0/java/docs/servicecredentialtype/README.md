# serviceCredentialType

### Available Operations

* [listServiceCredentialTypes](#listservicecredentialtypes) - List ServiceCredentialTypes
* [showServiceCredentialType](#showservicecredentialtype) - Show an existing ServiceCredentialType

## listServiceCredentialTypes

Returns an array of ServiceCredentialType objects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceCredentialTypesRequest;
import org.openapis.openapi.models.operations.ListServiceCredentialTypesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis", "ipsam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ListServiceCredentialTypesRequest req = new ListServiceCredentialTypesRequest() {{
                filter = new java.util.HashMap<String, Object>() {{
                    put("sapiente", "quo");
                    put("odit", "at");
                    put("at", "maiores");
                    put("molestiae", "quod");
                }};
                limit = 800911L;
                offset = 461479L;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("porro", "dolorum");
                    put("dicta", "nam");
                    put("officia", "occaecati");
                }};
            }};            

            ListServiceCredentialTypesResponse res = sdk.serviceCredentialType.listServiceCredentialTypes(req);

            if (res.serviceCredentialTypesCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## showServiceCredentialType

Returns a ServiceCredentialType object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ShowServiceCredentialTypeRequest;
import org.openapis.openapi.models.operations.ShowServiceCredentialTypeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit", "deleniti") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ShowServiceCredentialTypeRequest req = new ShowServiceCredentialTypeRequest("hic");            

            ShowServiceCredentialTypeResponse res = sdk.serviceCredentialType.showServiceCredentialType(req);

            if (res.serviceCredentialType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
