<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    plaidVersion = new SchemePlaidVersion() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    secret = new SchemeSecret() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            AccountsBalanceGetRequest req = new AccountsBalanceGetRequest() {{
                request = new AccountsBalanceGetRequest() {{
                    accessToken = "sit";
                    clientId = "voluptas";
                    options = new AccountsBalanceGetRequestOptions() {{
                        accountIds = new String[]() {{
                            add("expedita"),
                            add("consequuntur"),
                        }};
                        minLastUpdatedDatetime = "2003-04-20T23:11:44Z";
                    }};
                    secret = "expedita";
                }};
            }};

            AccountsBalanceGetResponse res = sdk.plaid.accountsBalanceGet(req);

            if (res.accountsGetResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->