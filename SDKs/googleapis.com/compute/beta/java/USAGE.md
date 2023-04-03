<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ComputeAcceleratorTypesAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesAggregatedListSecurityOption3;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeAcceleratorTypesAggregatedListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeAcceleratorTypesAggregatedListRequest req = new ComputeAcceleratorTypesAggregatedListRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                alt = "proto";
                callback = "quibusdam";
                fields = "unde";
                filter = "nulla";
                includeAllScopes = false;
                key = "corrupti";
                maxResults = 847252;
                oauthToken = "vel";
                orderBy = "error";
                pageToken = "deserunt";
                prettyPrint = false;
                project = "suscipit";
                quotaUser = "iure";
                returnPartialSuccess = false;
                uploadType = "magnam";
                uploadProtocol = "debitis";
                userIp = "ipsa";
            }}            

            ComputeAcceleratorTypesAggregatedListResponse res = sdk.acceleratorTypes.computeAcceleratorTypesAggregatedList(req, new ComputeAcceleratorTypesAggregatedListSecurity() {{
                option1 = new ComputeAcceleratorTypesAggregatedListSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.acceleratorTypeAggregatedList.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->