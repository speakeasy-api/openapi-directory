<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption2;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsCreateSecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsCreatePathParams;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsCreateRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsCreateResponse;
import org.openapis.openapi.models.shared.EkmConnectionKeyManagementModeEnum;
import org.openapis.openapi.models.shared.EkmConnectionInput;
import org.openapis.openapi.models.shared.ServiceResolverInput;
import org.openapis.openapi.models.shared.CertificateInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsEkmConnectionsCreateRequest req = new CloudkmsProjectsLocationsEkmConnectionsCreateRequest() {{
                security = new CloudkmsProjectsLocationsEkmConnectionsCreateSecurity() {{
                    option1 = new CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new CloudkmsProjectsLocationsEkmConnectionsCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    ekmConnectionId = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
                request = new EkmConnectionInput() {{
                    cryptoSpacePath = "iure";
                    etag = "magnam";
                    keyManagementMode = "CLOUD_KMS";
                    serviceResolvers = new org.openapis.openapi.models.shared.ServiceResolverInput[]{{
                        add(new ServiceResolverInput() {{
                            endpointFilter = "delectus";
                            hostname = "fatherly-geyser.info";
                            serverCertificates = new org.openapis.openapi.models.shared.CertificateInput[]{{
                                add(new CertificateInput() {{
                                    rawDer = "placeat";
                                }}),
                                add(new CertificateInput() {{
                                    rawDer = "voluptatum";
                                }}),
                                add(new CertificateInput() {{
                                    rawDer = "iusto";
                                }}),
                                add(new CertificateInput() {{
                                    rawDer = "excepturi";
                                }}),
                            }};
                            serviceDirectoryService = "nisi";
                        }}),
                    }};
                }};
            }};            

            CloudkmsProjectsLocationsEkmConnectionsCreateResponse res = sdk.projects.cloudkmsProjectsLocationsEkmConnectionsCreate(req);

            if (res.ekmConnection.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->