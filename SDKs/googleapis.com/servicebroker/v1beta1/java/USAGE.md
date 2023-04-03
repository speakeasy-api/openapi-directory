<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersCreateSecurity;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersCreateRequest;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudServicebrokerV1beta1Broker;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicebrokerProjectsBrokersCreateRequest req = new ServicebrokerProjectsBrokersCreateRequest() {{
                dollarXgafv = "2";
                googleCloudServicebrokerV1beta1Broker = new GoogleCloudServicebrokerV1beta1Broker() {{
                    createTime = "provident";
                    name = "distinctio";
                    title = "Dr.";
                    url = "unde";
                }};
                accessToken = "nulla";
                alt = "media";
                callback = "illum";
                fields = "vel";
                key = "error";
                oauthToken = "deserunt";
                parent = "suscipit";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "magnam";
                uploadProtocol = "debitis";
            }}            

            ServicebrokerProjectsBrokersCreateResponse res = sdk.projects.servicebrokerProjectsBrokersCreate(req, new ServicebrokerProjectsBrokersCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->