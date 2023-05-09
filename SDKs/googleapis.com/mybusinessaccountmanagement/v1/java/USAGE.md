<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessaccountmanagementAccountsCreateRequest;
import org.openapis.openapi.models.operations.MybusinessaccountmanagementAccountsCreateResponse;
import org.openapis.openapi.models.shared.AccountInput;
import org.openapis.openapi.models.shared.AccountTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.OrganizationInfoInput;
import org.openapis.openapi.models.shared.PostalAddress;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessaccountmanagementAccountsCreateRequest req = new MybusinessaccountmanagementAccountsCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accountInput = new AccountInput() {{
                    accountName = "provident";
                    name = "Ellis Mitchell";
                    organizationInfo = new OrganizationInfoInput() {{
                        address = new PostalAddress() {{
                            addressLines = new String[]{{
                                add("vel"),
                                add("error"),
                                add("deserunt"),
                                add("suscipit"),
                            }};
                            administrativeArea = "iure";
                            languageCode = "magnam";
                            locality = "debitis";
                            organization = "ipsa";
                            postalCode = "23478-5453";
                            recipients = new String[]{{
                                add("temporibus"),
                                add("ab"),
                                add("quis"),
                                add("veritatis"),
                            }};
                            regionCode = "deserunt";
                            revision = 20218;
                            sortingCode = "ipsam";
                            sublocality = "repellendus";
                        }};;
                    }};;
                    primaryOwner = "sapiente";
                    type = AccountTypeEnum.USER_GROUP;
                }};;
                accessToken = "odit";
                alt = AltEnum.PROTO;
                callback = "at";
                fields = "maiores";
                key = "molestiae";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "esse";
                uploadProtocol = "totam";
            }};            

            MybusinessaccountmanagementAccountsCreateResponse res = sdk.accounts.mybusinessaccountmanagementAccountsCreate(req);

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