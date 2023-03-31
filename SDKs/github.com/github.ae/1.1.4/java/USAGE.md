<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ActionsAddSelectedRepoToOrgSecretPathParams;
import org.openapis.openapi.models.operations.ActionsAddSelectedRepoToOrgSecretRequest;
import org.openapis.openapi.models.operations.ActionsAddSelectedRepoToOrgSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionsAddSelectedRepoToOrgSecretRequest req = new ActionsAddSelectedRepoToOrgSecretRequest() {{
                pathParams = new ActionsAddSelectedRepoToOrgSecretPathParams() {{
                    org = "corrupti";
                    repositoryId = 592845;
                    secretName = "distinctio";
                }};
            }};            

            ActionsAddSelectedRepoToOrgSecretResponse res = sdk.actions.actionsAddSelectedRepoToOrgSecret(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->