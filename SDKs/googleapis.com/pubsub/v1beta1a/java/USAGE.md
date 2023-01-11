<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    dollarXgafv = "1";
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    key = "dolor";
                    oauthToken = "expedita";
                    prettyPrint = true;
                    quotaUser = "fugit";
                    uploadType = "et";
                    uploadProtocol = "nihil";
                }};
                request = new AcknowledgeRequest() {{
                    ackId = new String[]() {{
                        add("dicta"),
                        add("debitis"),
                        add("voluptatum"),
                    }};
                    subscription = "et";
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