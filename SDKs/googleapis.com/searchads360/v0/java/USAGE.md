<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.Searchads360CustomersCustomColumnsListSecurity;
import org.openapis.openapi.models.operations.Searchads360CustomersCustomColumnsListPathParams;
import org.openapis.openapi.models.operations.Searchads360CustomersCustomColumnsListQueryParams;
import org.openapis.openapi.models.operations.Searchads360CustomersCustomColumnsListRequest;
import org.openapis.openapi.models.operations.Searchads360CustomersCustomColumnsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Searchads360CustomersCustomColumnsListRequest req = new Searchads360CustomersCustomColumnsListRequest() {{
                security = new Searchads360CustomersCustomColumnsListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new Searchads360CustomersCustomColumnsListPathParams() {{
                    customerId = "corrupti";
                }};
                queryParams = new Searchads360CustomersCustomColumnsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
            }};            

            Searchads360CustomersCustomColumnsListResponse res = sdk.customers.searchads360CustomersCustomColumnsList(req);

            if (res.googleAdsSearchads360V0ServicesListCustomColumnsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->