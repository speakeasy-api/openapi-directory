<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AttachTrustRequest;
import org.openapis.openapi.models.shared.TrustStateEnum;
import org.openapis.openapi.models.shared.TrustTrustDirectionEnum;
import org.openapis.openapi.models.shared.TrustTrustTypeEnum;
import org.openapis.openapi.models.shared.Trust;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest() {{
                dollarXgafv = "2";
                attachTrustRequest = new AttachTrustRequest() {{
                    trust = new Trust() {{
                        createTime = "provident";
                        lastKnownTrustConnectedHeartbeatTime = "distinctio";
                        selectiveAuthentication = false;
                        state = "DISCONNECTED";
                        stateDescription = "unde";
                        targetDnsIpAddresses = new String[]{{
                            add("corrupti"),
                            add("illum"),
                            add("vel"),
                            add("error"),
                        }};
                        targetDomainName = "deserunt";
                        trustDirection = "INBOUND";
                        trustHandshakeSecret = "iure";
                        trustType = "TRUST_TYPE_UNSPECIFIED";
                        updateTime = "debitis";
                    }};
                }};
                accessToken = "ipsa";
                alt = "proto";
                callback = "tempora";
                fields = "suscipit";
                key = "molestiae";
                name = "minus";
                oauthToken = "placeat";
                prettyPrint = false;
                quotaUser = "voluptatum";
                uploadType = "iusto";
                uploadProtocol = "excepturi";
            }}            

            ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsAttachTrust(req, new ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->