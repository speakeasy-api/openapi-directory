# vppAccounts

### Available Operations

* [getOrganizationSmVppAccount](#getorganizationsmvppaccount) - Get a hash containing the unparsed token of the VPP account with the given ID
* [getOrganizationSmVppAccounts](#getorganizationsmvppaccounts) - List the VPP accounts in the organization

## getOrganizationSmVppAccount

Get a hash containing the unparsed token of the VPP account with the given ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSmVppAccountRequest;
import org.openapis.openapi.models.operations.GetOrganizationSmVppAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSmVppAccountRequest req = new GetOrganizationSmVppAccountRequest("laboriosam", "nisi");            

            GetOrganizationSmVppAccountResponse res = sdk.vppAccounts.getOrganizationSmVppAccount(req);

            if (res.getOrganizationSmVppAccount200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSmVppAccounts

List the VPP accounts in the organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSmVppAccountsRequest;
import org.openapis.openapi.models.operations.GetOrganizationSmVppAccountsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSmVppAccountsRequest req = new GetOrganizationSmVppAccountsRequest("veniam");            

            GetOrganizationSmVppAccountsResponse res = sdk.vppAccounts.getOrganizationSmVppAccounts(req);

            if (res.getOrganizationSmVppAccounts200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
