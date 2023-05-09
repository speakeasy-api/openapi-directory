<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustResponse;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AttachTrustRequest;
import org.openapis.openapi.models.shared.Trust;
import org.openapis.openapi.models.shared.TrustStateEnum;
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
                attachTrustRequest = new AttachTrustRequest() {{
                    trust = new Trust() {{
                        createTime = "distinctio";
                        lastKnownTrustConnectedHeartbeatTime = "quibusdam";
                        selectiveAuthentication = false;
                        state = TrustStateEnum.DELETING;
                        stateDescription = "nulla";
                        targetDnsIpAddresses = new String[]{{
                            add("illum"),
                            add("vel"),
                            add("error"),
                        }};
                        targetDomainName = "deserunt";
                        trustDirection = TrustTrustDirectionEnum.INBOUND;
                        trustHandshakeSecret = "iure";
                        trustType = TrustTrustTypeEnum.TRUST_TYPE_UNSPECIFIED;
                        updateTime = "debitis";
                    }};;
                }};;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "voluptatum";
                uploadProtocol = "iusto";
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsAttachTrust(req, new ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity("excepturi", "nisi") {{
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