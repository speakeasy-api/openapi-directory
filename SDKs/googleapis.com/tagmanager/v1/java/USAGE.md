<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCreateSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCreateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContainerEnabledBuiltInVariableEnum;
import org.openapis.openapi.models.shared.ContainerUsageContextEnum;
import org.openapis.openapi.models.shared.Container;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersCreateRequest req = new TagmanagerAccountsContainersCreateRequest() {{
                dollarXgafv = "2";
                container = new Container() {{
                    accountId = "provident";
                    containerId = "distinctio";
                    domainName = new String[]{{
                        add("unde"),
                        add("nulla"),
                        add("corrupti"),
                        add("illum"),
                    }};
                    enabledBuiltInVariable = new org.openapis.openapi.models.shared.ContainerEnabledBuiltInVariableEnum[]{{
                        add("ampGtmEvent"),
                        add("firebaseEventParameterCampaign"),
                    }};
                    fingerprint = "suscipit";
                    name = "iure";
                    notes = "magnam";
                    publicId = "debitis";
                    timeZoneCountryId = "ipsa";
                    timeZoneId = "delectus";
                    usageContext = new org.openapis.openapi.models.shared.ContainerUsageContextEnum[]{{
                        add("ios"),
                        add("ios"),
                    }};
                }};
                accessToken = "minus";
                accountId = "placeat";
                alt = "media";
                callback = "iusto";
                fields = "excepturi";
                key = "nisi";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "ab";
                uploadProtocol = "quis";
            }}            

            TagmanagerAccountsContainersCreateResponse res = sdk.accounts.tagmanagerAccountsContainersCreate(req, new TagmanagerAccountsContainersCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.container.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->