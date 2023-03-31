<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersCreateSecurity;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersCreatePathParams;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersCreateQueryParams;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersCreateRequest;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersCreateResponse;
import org.openapis.openapi.models.shared.GoogleCloudServicebrokerV1beta1Broker;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicebrokerProjectsBrokersCreateRequest req = new ServicebrokerProjectsBrokersCreateRequest() {{
                security = new ServicebrokerProjectsBrokersCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ServicebrokerProjectsBrokersCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new ServicebrokerProjectsBrokersCreateQueryParams() {{
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
                request = new GoogleCloudServicebrokerV1beta1Broker() {{
                    createTime = "suscipit";
                    name = "iure";
                    title = "Mrs.";
                    url = "debitis";
                }};
            }};            

            ServicebrokerProjectsBrokersCreateResponse res = sdk.projects.servicebrokerProjectsBrokersCreate(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->