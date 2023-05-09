<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCreateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCreateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Container;
import org.openapis.openapi.models.shared.ContainerEnabledBuiltInVariableEnum;
import org.openapis.openapi.models.shared.ContainerUsageContextEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersCreateRequest req = new TagmanagerAccountsContainersCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                container = new Container() {{
                    accountId = "distinctio";
                    containerId = "quibusdam";
                    domainName = new String[]{{
                        add("nulla"),
                        add("corrupti"),
                        add("illum"),
                    }};
                    enabledBuiltInVariable = new org.openapis.openapi.models.shared.ContainerEnabledBuiltInVariableEnum[]{{
                        add(ContainerEnabledBuiltInVariableEnum.AMP_GTM_EVENT),
                        add(ContainerEnabledBuiltInVariableEnum.FIREBASE_EVENT_PARAMETER_CAMPAIGN),
                    }};
                    fingerprint = "suscipit";
                    name = "Dr. Valerie Toy";
                    notes = "suscipit";
                    publicId = "molestiae";
                    timeZoneCountryId = "minus";
                    timeZoneId = "placeat";
                    usageContext = new org.openapis.openapi.models.shared.ContainerUsageContextEnum[]{{
                        add(ContainerUsageContextEnum.IOS),
                        add(ContainerUsageContextEnum.ANDROID_SDK5),
                        add(ContainerUsageContextEnum.IOS),
                    }};
                }};;
                accessToken = "recusandae";
                alt = AltEnum.PROTO;
                callback = "ab";
                fields = "quis";
                key = "veritatis";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "ipsam";
                uploadProtocol = "repellendus";
            }};            

            TagmanagerAccountsContainersCreateResponse res = sdk.accounts.tagmanagerAccountsContainersCreate(req, new TagmanagerAccountsContainersCreateSecurity("sapiente", "quo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.container != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->