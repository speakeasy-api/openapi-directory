<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PubsubSubscriptionsAcknowledgeSecurityOption1;
import org.openapis.openapi.models.operations.PubsubSubscriptionsAcknowledgeSecurityOption2;
import org.openapis.openapi.models.operations.PubsubSubscriptionsAcknowledgeSecurity;
import org.openapis.openapi.models.operations.PubsubSubscriptionsAcknowledgeQueryParams;
import org.openapis.openapi.models.operations.PubsubSubscriptionsAcknowledgeRequest;
import org.openapis.openapi.models.operations.PubsubSubscriptionsAcknowledgeResponse;
import org.openapis.openapi.models.shared.AcknowledgeRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PubsubSubscriptionsAcknowledgeRequest req = new PubsubSubscriptionsAcknowledgeRequest() {{
                security = new PubsubSubscriptionsAcknowledgeSecurity() {{
                    option1 = new PubsubSubscriptionsAcknowledgeSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new PubsubSubscriptionsAcknowledgeQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "illum";
                    uploadType = "vel";
                    uploadProtocol = "error";
                }};
                request = new AcknowledgeRequest() {{
                    ackId = new String[]{{
                        add("suscipit"),
                        add("iure"),
                        add("magnam"),
                    }};
                    subscription = "debitis";
                }};
            }};            

            PubsubSubscriptionsAcknowledgeResponse res = sdk.subscriptions.pubsubSubscriptionsAcknowledge(req);

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->