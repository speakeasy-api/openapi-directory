# serviceCredential

### Available Operations

* [listServiceCredentials](#listservicecredentials) - List ServiceCredentials
* [showServiceCredential](#showservicecredential) - Show an existing ServiceCredential

## listServiceCredentials

Returns an array of ServiceCredential objects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceCredentialsRequest;
import org.openapis.openapi.models.operations.ListServiceCredentialsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam", "debitis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ListServiceCredentialsRequest req = new ListServiceCredentialsRequest() {{
                filter = new java.util.HashMap<String, Object>() {{
                    put("delectus", "tempora");
                }};
                limit = 383441L;
                offset = 477665L;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("placeat", "voluptatum");
                    put("iusto", "excepturi");
                    put("nisi", "recusandae");
                    put("temporibus", "ab");
                }};
            }};            

            ListServiceCredentialsResponse res = sdk.serviceCredential.listServiceCredentials(req);

            if (res.serviceCredentialsCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## showServiceCredential

Returns a ServiceCredential object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ShowServiceCredentialRequest;
import org.openapis.openapi.models.operations.ShowServiceCredentialResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis", "veritatis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ShowServiceCredentialRequest req = new ShowServiceCredentialRequest("deserunt");            

            ShowServiceCredentialResponse res = sdk.serviceCredential.showServiceCredential(req);

            if (res.serviceCredential != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
