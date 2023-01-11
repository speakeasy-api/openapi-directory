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
                    accountId = "sit";
                }};
                queryParams = new Adexchangebuyer2AccountsClientsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new Client() {{
                    clientAccountId = "dicta";
                    clientName = "debitis";
                    entityId = "voluptatum";
                    entityName = "et";
                    entityType = "ADVERTISER";
                    partnerClientId = "dolorem";
                    role = "CLIENT_DEAL_NEGOTIATOR";
                    status = "CLIENT_STATUS_UNSPECIFIED";
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