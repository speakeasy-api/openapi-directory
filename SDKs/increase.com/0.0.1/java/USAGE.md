<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
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
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            ActionARealTimeDecisionRequest req = new ActionARealTimeDecisionRequest() {{
                actionARealTimeDecisionParameters = new ActionARealTimeDecisionParameters() {{
                    cardAuthorization = new ActionARealTimeDecisionParametersCardAuthorization() {{
                        decision = "decline";
                    }};
                    digitalWalletAuthentication = new ActionARealTimeDecisionParametersDigitalWalletAuthentication() {{
                        result = "failure";
                    }};
                    digitalWalletToken = new ActionARealTimeDecisionParametersDigitalWalletToken() {{
                        approval = new ActionARealTimeDecisionParametersDigitalWalletTokenApproval() {{
                            cardProfileId = "distinctio";
                            email = "Leda_Stiedemann@hotmail.com";
                            phone = "1-663-528-0923 x478";
                        }};
                        decline = new ActionARealTimeDecisionParametersDigitalWalletTokenDecline() {{
                            reason = "voluptatum";
                        }};
                    }};
                }};
                realTimeDecisionId = "iusto";
            }}            

            ActionARealTimeDecisionResponse res = sdk.actionARealTimeDecision(req);

            if (res.realTimeDecision.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->