<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCreateSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCreatePathParams;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCreateQueryParams;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCreateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCreateResponse;
import org.openapis.openapi.models.shared.ContainerEnabledBuiltInVariableEnum;
import org.openapis.openapi.models.shared.ContainerUsageContextEnum;
import org.openapis.openapi.models.shared.Container;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersCreateRequest req = new TagmanagerAccountsContainersCreateRequest() {{
                security = new TagmanagerAccountsContainersCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new TagmanagerAccountsContainersCreatePathParams() {{
                    accountId = "corrupti";
                }};
                queryParams = new TagmanagerAccountsContainersCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new Container() {{
                    accountId = "suscipit";
                    containerId = "iure";
                    domainName = new String[]{{
                        add("debitis"),
                        add("ipsa"),
                    }};
                    enabledBuiltInVariable = new org.openapis.openapi.models.shared.ContainerEnabledBuiltInVariableEnum[]{{
                        add("historySource"),
                        add("sdkVersion"),
                        add("ampReferrer"),
                        add("firebaseEventParameterNotificationTopic"),
                    }};
                    fingerprint = "placeat";
                    name = "voluptatum";
                    notes = "iusto";
                    publicId = "excepturi";
                    timeZoneCountryId = "nisi";
                    timeZoneId = "recusandae";
                    usageContext = new org.openapis.openapi.models.shared.ContainerUsageContextEnum[]{{
                        add("web"),
                        add("ios"),
                        add("web"),
                        add("androidSdk5"),
                    }};
                }};
            }};            

            TagmanagerAccountsContainersCreateResponse res = sdk.accounts.tagmanagerAccountsContainersCreate(req);

            if (res.container.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->