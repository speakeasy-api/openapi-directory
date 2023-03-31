<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ContainerProjectsAggregatedUsableSubnetworksListSecurity;
import org.openapis.openapi.models.operations.ContainerProjectsAggregatedUsableSubnetworksListPathParams;
import org.openapis.openapi.models.operations.ContainerProjectsAggregatedUsableSubnetworksListQueryParams;
import org.openapis.openapi.models.operations.ContainerProjectsAggregatedUsableSubnetworksListRequest;
import org.openapis.openapi.models.operations.ContainerProjectsAggregatedUsableSubnetworksListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContainerProjectsAggregatedUsableSubnetworksListRequest req = new ContainerProjectsAggregatedUsableSubnetworksListRequest() {{
                security = new ContainerProjectsAggregatedUsableSubnetworksListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ContainerProjectsAggregatedUsableSubnetworksListPathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new ContainerProjectsAggregatedUsableSubnetworksListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    filter = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    pageSize = 623564;
                    pageToken = "deserunt";
                    prettyPrint = false;
                    quotaUser = "suscipit";
                    uploadType = "iure";
                    uploadProtocol = "magnam";
                }};
            }};            

            ContainerProjectsAggregatedUsableSubnetworksListResponse res = sdk.projects.containerProjectsAggregatedUsableSubnetworksList(req);

            if (res.listUsableSubnetworksResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->