<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustPathParams;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustQueryParams;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest;
import org.openapis.openapi.models.operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustResponse;
import org.openapis.openapi.models.shared.AttachTrustRequestInput;
import org.openapis.openapi.models.shared.TrustTrustDirectionEnum;
import org.openapis.openapi.models.shared.TrustTrustTypeEnum;
import org.openapis.openapi.models.shared.TrustInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest req = new ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest() {{
                security = new ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustQueryParams() {{
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
                request = new AttachTrustRequestInput() {{
                    trust = new TrustInput() {{
                        selectiveAuthentication = false;
                        targetDnsIpAddresses = new String[]{{
                            add("iure"),
                            add("magnam"),
                        }};
                        targetDomainName = "debitis";
                        trustDirection = "TRUST_DIRECTION_UNSPECIFIED";
                        trustHandshakeSecret = "delectus";
                        trustType = "TRUST_TYPE_UNSPECIFIED";
                    }};
                }};
            }};            

            ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustResponse res = sdk.projects.managedidentitiesProjectsLocationsGlobalDomainsAttachTrust(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->