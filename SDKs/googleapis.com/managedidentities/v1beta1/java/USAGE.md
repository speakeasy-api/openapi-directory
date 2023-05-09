<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AttachTrustRequestInput;
import org.openapis.openapi.models.shared.TrustInput;
import org.openapis.openapi.models.shared.TrustTrustDirectionEnum;
import org.openapis.openapi.models.shared.TrustTrustTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                attachTrustRequestInput = new AttachTrustRequestInput() {{
                    trust = new TrustInput() {{
                        selectiveAuthentication = false;
                        targetDnsIpAddresses = new String[]{{
                            add("quibusdam"),
                            add("unde"),
                            add("nulla"),
                        }};
                        targetDomainName = "corrupti";
                        trustDirection = TrustTrustDirectionEnum.BIDIRECTIONAL;
                        trustHandshakeSecret = "vel";
                        trustType = TrustTrustTypeEnum.FOREST;
                    }};;
                }};;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "iure";
                fields = "magnam";
                key = "debitis";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "tempora";
                uploadProtocol = "suscipit";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsAttachTrust(req, new ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity("molestiae", "minus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->