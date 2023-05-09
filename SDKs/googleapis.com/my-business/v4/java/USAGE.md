<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsCreateRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsCreateResponse;
import org.openapis.openapi.models.shared.Account;
import org.openapis.openapi.models.shared.AccountPermissionLevelEnum;
import org.openapis.openapi.models.shared.AccountRoleEnum;
import org.openapis.openapi.models.shared.AccountState;
import org.openapis.openapi.models.shared.AccountStateStatusEnum;
import org.openapis.openapi.models.shared.AccountTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.OrganizationInfo;
import org.openapis.openapi.models.shared.PostalAddress;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsCreateRequest req = new MybusinessAccountsCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                account = new Account() {{
                    accountName = "provident";
                    accountNumber = "distinctio";
                    name = "Stuart Stiedemann";
                    organizationInfo = new OrganizationInfo() {{
                        phoneNumber = "vel";
                        postalAddress = new PostalAddress() {{
                            addressLines = new String[]{{
                                add("deserunt"),
                                add("suscipit"),
                                add("iure"),
                            }};
                            administrativeArea = "magnam";
                            languageCode = "debitis";
                            locality = "ipsa";
                            organization = "delectus";
                            postalCode = "34785";
                            recipients = new String[]{{
                                add("excepturi"),
                                add("nisi"),
                            }};
                            regionCode = "recusandae";
                            revision = 836079;
                            sortingCode = "ab";
                            sublocality = "quis";
                        }};;
                        registeredDomain = "veritatis";
                    }};;
                    permissionLevel = AccountPermissionLevelEnum.OWNER_LEVEL;
                    role = AccountRoleEnum.ACCOUNT_ROLE_UNSPECIFIED;
                    state = new AccountState() {{
                        status = AccountStateStatusEnum.VERIFIED;
                    }};;
                    type = AccountTypeEnum.ORGANIZATION;
                }};;
                accessToken = "sapiente";
                alt = AltEnum.PROTO;
                callback = "odit";
                fields = "at";
                key = "at";
                oauthToken = "maiores";
                prettyPrint = false;
                primaryOwner = "molestiae";
                quotaUser = "quod";
                uploadType = "quod";
                uploadProtocol = "esse";
            }};            

            MybusinessAccountsCreateResponse res = sdk.accounts.mybusinessAccountsCreate(req);

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->