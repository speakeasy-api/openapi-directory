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

            MybusinessaccountmanagementAccountsCreateRequest req = new MybusinessaccountmanagementAccountsCreateRequest() {{
                queryParams = new MybusinessaccountmanagementAccountsCreateQueryParams() {{
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
                request = new AccountInput() {{
                    accountName = "rerum";
                    name = "dicta";
                    organizationInfo = new OrganizationInfoInput() {{
                        address = new PostalAddress() {{
                            addressLines = new String[]() {{
                                add("voluptatum"),
                            }};
                            administrativeArea = "et";
                            languageCode = "ut";
                            locality = "dolorem";
                            organization = "et";
                            postalCode = "voluptate";
                            recipients = new String[]() {{
                                add("vitae"),
                                add("totam"),
                                add("dolores"),
                            }};
                            regionCode = "illum";
                            revision = 6392442863481646880;
                            sortingCode = "vel";
                            sublocality = "odio";
                        }};
                    }};
                    primaryOwner = "dolore";
                    type = "LOCATION_GROUP";
                }};
            }};

            MybusinessaccountmanagementAccountsCreateResponse res = sdk.accounts.mybusinessaccountmanagementAccountsCreate(req);

            if (res.account.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->