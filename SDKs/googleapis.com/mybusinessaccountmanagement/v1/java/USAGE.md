<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.MybusinessaccountmanagementAccountsCreateQueryParams;
import org.openapis.openapi.models.operations.MybusinessaccountmanagementAccountsCreateRequest;
import org.openapis.openapi.models.operations.MybusinessaccountmanagementAccountsCreateResponse;
import org.openapis.openapi.models.shared.AccountTypeEnum;
import org.openapis.openapi.models.shared.AccountInput;
import org.openapis.openapi.models.shared.OrganizationInfoInput;
import org.openapis.openapi.models.shared.PostalAddress;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessaccountmanagementAccountsCreateRequest req = new MybusinessaccountmanagementAccountsCreateRequest() {{
                queryParams = new MybusinessaccountmanagementAccountsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "illum";
                    uploadType = "vel";
                    uploadProtocol = "error";
                }};
                request = new AccountInput() {{
                    accountName = "deserunt";
                    name = "suscipit";
                    organizationInfo = new OrganizationInfoInput() {{
                        address = new PostalAddress() {{
                            addressLines = new String[]{{
                                add("magnam"),
                                add("debitis"),
                            }};
                            administrativeArea = "ipsa";
                            languageCode = "delectus";
                            locality = "tempora";
                            organization = "suscipit";
                            postalCode = "78545";
                            recipients = new String[]{{
                                add("recusandae"),
                                add("temporibus"),
                            }};
                            regionCode = "ab";
                            revision = 337396;
                            sortingCode = "veritatis";
                            sublocality = "deserunt";
                        }};
                    }};
                    primaryOwner = "perferendis";
                    type = "PERSONAL";
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