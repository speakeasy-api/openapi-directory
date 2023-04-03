<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.Searchads360CustomersCustomColumnsListSecurity;
import org.openapis.openapi.models.operations.Searchads360CustomersCustomColumnsListRequest;
import org.openapis.openapi.models.operations.Searchads360CustomersCustomColumnsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Searchads360CustomersCustomColumnsListRequest req = new Searchads360CustomersCustomColumnsListRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                alt = "proto";
                callback = "quibusdam";
                customerId = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "error";
                uploadProtocol = "deserunt";
            }}            

            Searchads360CustomersCustomColumnsListResponse res = sdk.customers.searchads360CustomersCustomColumnsList(req, new Searchads360CustomersCustomColumnsListSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAdsSearchads360V0ServicesListCustomColumnsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->