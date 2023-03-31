<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.MybusinessAccountsCreateQueryParams;
import org.openapis.openapi.models.operations.MybusinessAccountsCreateRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsCreateResponse;
import org.openapis.openapi.models.shared.AccountPermissionLevelEnum;
import org.openapis.openapi.models.shared.AccountRoleEnum;
import org.openapis.openapi.models.shared.AccountTypeEnum;
import org.openapis.openapi.models.shared.Account;
import org.openapis.openapi.models.shared.AccountStateStatusEnum;
import org.openapis.openapi.models.shared.AccountState;
import org.openapis.openapi.models.shared.OrganizationInfo;
import org.openapis.openapi.models.shared.PostalAddress;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsCreateRequest req = new MybusinessAccountsCreateRequest() {{
                queryParams = new MybusinessAccountsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    primaryOwner = "illum";
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new Account() {{
                    accountName = "suscipit";
                    accountNumber = "iure";
                    name = "magnam";
                    organizationInfo = new OrganizationInfo() {{
                        phoneNumber = "debitis";
                        postalAddress = new PostalAddress() {{
                            addressLines = new String[]{{
                                add("delectus"),
                            }};
                            administrativeArea = "tempora";
                            languageCode = "suscipit";
                            locality = "molestiae";
                            organization = "minus";
                            postalCode = "54539-8030";
                            recipients = new String[]{{
                                add("perferendis"),
                                add("ipsam"),
                                add("repellendus"),
                            }};
                            regionCode = "sapiente";
                            revision = 778157;
                            sortingCode = "odit";
                            sublocality = "at";
                        }};
                        registeredDomain = "at";
                    }};
                    permissionLevel = "MEMBER_LEVEL";
                    role = "CO_OWNER";
                    state = new AccountState() {{
                        status = "VERIFICATION_REQUESTED";
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