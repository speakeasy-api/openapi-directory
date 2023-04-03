<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.MybusinessAccountsCreateRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AccountPermissionLevelEnum;
import org.openapis.openapi.models.shared.AccountRoleEnum;
import org.openapis.openapi.models.shared.AccountTypeEnum;
import org.openapis.openapi.models.shared.Account;
import org.openapis.openapi.models.shared.AccountStateStatusEnum;
import org.openapis.openapi.models.shared.AccountState;
import org.openapis.openapi.models.shared.OrganizationInfo;
import org.openapis.openapi.models.shared.PostalAddress;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsCreateRequest req = new MybusinessAccountsCreateRequest() {{
                dollarXgafv = "2";
                account = new Account() {{
                    accountName = "provident";
                    accountNumber = "distinctio";
                    name = "quibusdam";
                    organizationInfo = new OrganizationInfo() {{
                        phoneNumber = "unde";
                        postalAddress = new PostalAddress() {{
                            addressLines = new String[]{{
                                add("corrupti"),
                                add("illum"),
                                add("vel"),
                                add("error"),
                            }};
                            administrativeArea = "deserunt";
                            languageCode = "suscipit";
                            locality = "iure";
                            organization = "magnam";
                            postalCode = "09234-7854";
                            recipients = new String[]{{
                                add("nisi"),
                                add("recusandae"),
                                add("temporibus"),
                            }};
                            regionCode = "ab";
                            revision = 337396;
                            sortingCode = "veritatis";
                            sublocality = "deserunt";
                        }};
                        registeredDomain = "perferendis";
                    }};
                    permissionLevel = "OWNER_LEVEL";
                    role = "COMMUNITY_MANAGER";
                    state = new AccountState() {{
                        status = "VERIFICATION_REQUESTED";
                    }};
                    type = "USER_GROUP";
                }};
                accessToken = "odit";
                alt = "proto";
                callback = "at";
                fields = "maiores";
                key = "molestiae";
                oauthToken = "quod";
                prettyPrint = false;
                primaryOwner = "quod";
                quotaUser = "esse";
                uploadType = "totam";
                uploadProtocol = "porro";
            }}            

            MybusinessAccountsCreateResponse res = sdk.accounts.mybusinessAccountsCreate(req);

            if (res.account.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->