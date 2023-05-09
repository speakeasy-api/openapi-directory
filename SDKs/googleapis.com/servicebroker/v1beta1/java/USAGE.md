<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersCreateRequest;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersCreateResponse;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudServicebrokerV1beta1Broker;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicebrokerProjectsBrokersCreateRequest req = new ServicebrokerProjectsBrokersCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudServicebrokerV1beta1Broker = new GoogleCloudServicebrokerV1beta1Broker() {{
                    createTime = "distinctio";
                    name = "Stuart Stiedemann";
                    title = "Ms.";
                    url = "error";
                }};;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "iure";
                fields = "magnam";
                key = "debitis";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "tempora";
                uploadProtocol = "suscipit";
            }};            

            ServicebrokerProjectsBrokersCreateResponse res = sdk.projects.servicebrokerProjectsBrokersCreate(req, new ServicebrokerProjectsBrokersCreateSecurity("molestiae", "minus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->