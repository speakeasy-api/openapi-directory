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
                    accountId = "facilis";
                }};
                queryParams = new Adexchangebuyer2AccountsClientsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "vel";
                    alt = "proto";
                    callback = "saepe";
                    fields = "ut";
                    key = "ut";
                    oauthToken = "distinctio";
                    prettyPrint = true;
                    quotaUser = "nemo";
                    uploadType = "aut";
                    uploadProtocol = "reiciendis";
                }};
                request = new Client() {{
                    clientAccountId = "in";
                    clientName = "voluptatem";
                    entityId = "velit";
                    entityName = "consequuntur";
                    entityType = "AGENCY";
                    partnerClientId = "dignissimos";
                    role = "CLIENT_DEAL_APPROVER";
                    status = "ACTIVE";
                    visibleToSeller = true;
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