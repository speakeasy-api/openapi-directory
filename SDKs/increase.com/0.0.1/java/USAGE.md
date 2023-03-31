<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ActionARealTimeDecisionPathParams;
import org.openapis.openapi.models.operations.ActionARealTimeDecisionRequest;
import org.openapis.openapi.models.operations.ActionARealTimeDecisionResponse;
import org.openapis.openapi.models.shared.ActionARealTimeDecisionParametersCardAuthorizationDecisionEnum;
import org.openapis.openapi.models.shared.ActionARealTimeDecisionParametersCardAuthorization;
import org.openapis.openapi.models.shared.ActionARealTimeDecisionParametersDigitalWalletAuthenticationResultEnum;
import org.openapis.openapi.models.shared.ActionARealTimeDecisionParametersDigitalWalletAuthentication;
import org.openapis.openapi.models.shared.ActionARealTimeDecisionParametersDigitalWalletTokenApproval;
import org.openapis.openapi.models.shared.ActionARealTimeDecisionParametersDigitalWalletTokenDecline;
import org.openapis.openapi.models.shared.ActionARealTimeDecisionParametersDigitalWalletToken;
import org.openapis.openapi.models.shared.ActionARealTimeDecisionParameters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    bearerAuth = new SchemeBearerAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }})
                .build();

            ActionARealTimeDecisionRequest req = new ActionARealTimeDecisionRequest() {{
                pathParams = new ActionARealTimeDecisionPathParams() {{
                    realTimeDecisionId = "corrupti";
                }};
                request = new ActionARealTimeDecisionParameters() {{
                    cardAuthorization = new ActionARealTimeDecisionParametersCardAuthorization() {{
                        decision = "decline";
                    }};
                    digitalWalletAuthentication = new ActionARealTimeDecisionParametersDigitalWalletAuthentication() {{
                        result = "failure";
                    }};
                    digitalWalletToken = new ActionARealTimeDecisionParametersDigitalWalletToken() {{
                        approval = new ActionARealTimeDecisionParametersDigitalWalletTokenApproval() {{
                            cardProfileId = "quibusdam";
                            email = "Ryan.Little62@yahoo.com";
                            phone = "1-542-909-2347 x8545";
                        }};
                        decline = new ActionARealTimeDecisionParametersDigitalWalletTokenDecline() {{
                            reason = "nisi";
                        }};
                    }};
                }};
            }};            

            ActionARealTimeDecisionResponse res = sdk.actionARealTimeDecision(req);

            if (res.realTimeDecision.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->