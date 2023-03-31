<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsCreateSecurity;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsCreatePathParams;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsCreateQueryParams;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsCreateRequest;
import org.openapis.openapi.models.operations.Adexchangebuyer2AccountsClientsCreateResponse;
import org.openapis.openapi.models.shared.ClientEntityTypeEnum;
import org.openapis.openapi.models.shared.ClientRoleEnum;
import org.openapis.openapi.models.shared.ClientStatusEnum;
import org.openapis.openapi.models.shared.Client;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Adexchangebuyer2AccountsClientsCreateRequest req = new Adexchangebuyer2AccountsClientsCreateRequest() {{
                security = new Adexchangebuyer2AccountsClientsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new Adexchangebuyer2AccountsClientsCreatePathParams() {{
                    accountId = "corrupti";
                }};
                queryParams = new Adexchangebuyer2AccountsClientsCreateQueryParams() {{
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
                request = new Client() {{
                    clientAccountId = "suscipit";
                    clientName = "iure";
                    entityId = "magnam";
                    entityName = "debitis";
                    entityType = "ENTITY_TYPE_UNSPECIFIED";
                    partnerClientId = "delectus";
                    role = "CLIENT_DEAL_VIEWER";
                    status = "DISABLED";
                    visibleToSeller = false;
                }};
            }};            

            Adexchangebuyer2AccountsClientsCreateResponse res = sdk.accounts.adexchangebuyer2AccountsClientsCreate(req);

            if (res.client.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->