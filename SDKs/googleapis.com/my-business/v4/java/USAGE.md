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
                    dollarXgafv = "1";
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    key = "dolor";
                    oauthToken = "expedita";
                    prettyPrint = true;
                    primaryOwner = "fugit";
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new Account() {{
                    accountName = "dicta";
                    accountNumber = "debitis";
                    name = "voluptatum";
                    organizationInfo = new OrganizationInfo() {{
                        phoneNumber = "et";
                        postalAddress = new PostalAddress() {{
                            addressLines = new String[]() {{
                                add("dolorem"),
                                add("et"),
                                add("voluptate"),
                            }};
                            administrativeArea = "iste";
                            languageCode = "vitae";
                            locality = "totam";
                            organization = "dolores";
                            postalCode = "illum";
                            recipients = new String[]() {{
                                add("vel"),
                            }};
                            regionCode = "odio";
                            revision = 6303220950515014660;
                            sortingCode = "id";
                            sublocality = "aspernatur";
                        }};
                        registeredDomain = "accusantium";
                    }};
                    permissionLevel = "MEMBER_LEVEL";
                    role = "COMMUNITY_MANAGER";
                    state = new AccountState() {{
                        status = "UNVERIFIED";
                    }};
                    type = "USER_GROUP";
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