<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PubsubSubscriptionsAcknowledgeRequest;
import org.openapis.openapi.models.operations.PubsubSubscriptionsAcknowledgeResponse;
import org.openapis.openapi.models.operations.PubsubSubscriptionsAcknowledgeSecurity;
import org.openapis.openapi.models.operations.PubsubSubscriptionsAcknowledgeSecurityOption1;
import org.openapis.openapi.models.operations.PubsubSubscriptionsAcknowledgeSecurityOption2;
import org.openapis.openapi.models.shared.AcknowledgeRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PubsubSubscriptionsAcknowledgeRequest req = new PubsubSubscriptionsAcknowledgeRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                acknowledgeRequest = new AcknowledgeRequest() {{
                    ackId = new String[]{{
                        add("distinctio"),
                        add("quibusdam"),
                        add("unde"),
                    }};
                    subscription = "nulla";
                }};;
                accessToken = "corrupti";
                alt = AltEnum.PROTO;
                callback = "vel";
                fields = "error";
                key = "deserunt";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "magnam";
                uploadProtocol = "debitis";
            }};            

            PubsubSubscriptionsAcknowledgeResponse res = sdk.subscriptions.pubsubSubscriptionsAcknowledge(req, new PubsubSubscriptionsAcknowledgeSecurity() {{
                option1 = new PubsubSubscriptionsAcknowledgeSecurityOption1("ipsa", "delectus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->