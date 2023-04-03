<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsCreateSecurity;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsCreateRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ClientEntityTypeEnum;
import org.openapis.openapi.models.shared.ClientRoleEnum;
import org.openapis.openapi.models.shared.ClientStatusEnum;
import org.openapis.openapi.models.shared.Client;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsClientsCreateRequest req = new Adexchangebuyer2AccountsClientsCreateRequest() {{
                dollarXgafv = "2";
                client = new Client() {{
                    clientAccountId = "provident";
                    clientName = "distinctio";
                    entityId = "quibusdam";
                    entityName = "unde";
                    entityType = "ENTITY_TYPE_UNCLASSIFIED";
                    partnerClientId = "corrupti";
                    role = "CLIENT_DEAL_APPROVER";
                    status = "DISABLED";
                    visibleToSeller = false;
                }};
                accessToken = "error";
                accountId = "deserunt";
                alt = "media";
                callback = "iure";
                fields = "magnam";
                key = "debitis";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "tempora";
                uploadProtocol = "suscipit";
            }}            

            Adexchangebuyer2AccountsClientsCreateResponse res = sdk.accounts.adexchangebuyer2AccountsClientsCreate(req, new Adexchangebuyer2AccountsClientsCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.client.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->