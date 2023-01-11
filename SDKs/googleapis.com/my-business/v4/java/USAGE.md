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

            MybusinessAccountsCreateRequest req = new MybusinessAccountsCreateRequest() {{
                queryParams = new MybusinessAccountsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "odio";
                    alt = "proto";
                    callback = "optio";
                    fields = "nam";
                    key = "voluptates";
                    oauthToken = "et";
                    prettyPrint = false;
                    primaryOwner = "vel";
                    quotaUser = "facilis";
                    uploadType = "id";
                    uploadProtocol = "est";
                }};
                request = new Account() {{
                    accountName = "ipsa";
                    accountNumber = "error";
                    name = "suscipit";
                    organizationInfo = new OrganizationInfo() {{
                        phoneNumber = "minus";
                        postalAddress = new PostalAddress() {{
                            addressLines = new String[]() {{
                                add("laudantium"),
                                add("est"),
                                add("aspernatur"),
                            }};
                            administrativeArea = "sit";
                            languageCode = "placeat";
                            locality = "ad";
                            organization = "ea";
                            postalCode = "temporibus";
                            recipients = new String[]() {{
                                add("libero"),
                            }};
                            regionCode = "reiciendis";
                            revision = 1979199379981713557;
                            sortingCode = "et";
                            sublocality = "aut";
                        }};
                        registeredDomain = "voluptatem";
                    }};
                    permissionLevel = "MEMBER_LEVEL";
                    role = "OWNER";
                    state = new AccountState() {{
                        status = "ACCOUNT_STATUS_UNSPECIFIED";
                    }};
                    type = "ORGANIZATION";
                }};
            }};

            MybusinessAccountsCreateResponse res = sdk.accounts.mybusinessAccountsCreate(req);

            if (res.account.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->