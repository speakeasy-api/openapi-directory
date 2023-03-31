<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ComputeAcceleratorTypesAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesAggregatedListSecurityOption3;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesAggregatedListPathParams;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesAggregatedListQueryParams;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesAggregatedListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeAcceleratorTypesAggregatedListRequest req = new ComputeAcceleratorTypesAggregatedListRequest() {{
                security = new ComputeAcceleratorTypesAggregatedListSecurity() {{
                    option1 = new ComputeAcceleratorTypesAggregatedListSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new ComputeAcceleratorTypesAggregatedListPathParams() {{
                    project = "corrupti";
                }};
                queryParams = new ComputeAcceleratorTypesAggregatedListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    filter = "corrupti";
                    includeAllScopes = false;
                    key = "illum";
                    maxResults = 423655;
                    oauthToken = "error";
                    orderBy = "deserunt";
                    pageToken = "suscipit";
                    prettyPrint = false;
                    quotaUser = "iure";
                    returnPartialSuccess = false;
                    uploadType = "magnam";
                    uploadProtocol = "debitis";
                    userIp = "ipsa";
                }};
            }};            

            ComputeAcceleratorTypesAggregatedListResponse res = sdk.acceleratorTypes.computeAcceleratorTypesAggregatedList(req);

            if (res.acceleratorTypeAggregatedList.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->