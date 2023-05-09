<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsCreateRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsCreateResponse;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsCreateSecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CertificateInput;
import org.openapis.openapi.models.shared.EkmConnectionInput;
import org.openapis.openapi.models.shared.EkmConnectionKeyManagementModeEnum;
import org.openapis.openapi.models.shared.ServiceResolverInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsEkmConnectionsCreateRequest req = new CloudkmsProjectsLocationsEkmConnectionsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                ekmConnectionInput = new EkmConnectionInput() {{
                    cryptoSpacePath = "distinctio";
                    etag = "quibusdam";
                    keyManagementMode = EkmConnectionKeyManagementModeEnum.MANUAL;
                    serviceResolvers = new org.openapis.openapi.models.shared.ServiceResolverInput[]{{
                        add(new ServiceResolverInput() {{
                            endpointFilter = "corrupti";
                            hostname = "that-hellcat.name";
                            serverCertificates = new org.openapis.openapi.models.shared.CertificateInput[]{{
                                add(new CertificateInput() {{
                                    rawDer = "suscipit";
                                }}),
                                add(new CertificateInput() {{
                                    rawDer = "iure";
                                }}),
                                add(new CertificateInput() {{
                                    rawDer = "magnam";
                                }}),
                            }};
                            serviceDirectoryService = "debitis";
                        }}),
                        add(new ServiceResolverInput() {{
                            endpointFilter = "ipsa";
                            hostname = "whirlwind-diver.info";
                            serverCertificates = new org.openapis.openapi.models.shared.CertificateInput[]{{
                                add(new CertificateInput() {{
                                    rawDer = "minus";
                                }}),
                                add(new CertificateInput() {{
                                    rawDer = "placeat";
                                }}),
                            }};
                            serviceDirectoryService = "voluptatum";
                        }}),
                        add(new ServiceResolverInput() {{
                            endpointFilter = "iusto";
                            hostname = "nice-gorilla.org";
                            serverCertificates = new org.openapis.openapi.models.shared.CertificateInput[]{{
                                add(new CertificateInput() {{
                                    rawDer = "ab";
                                }}),
                                add(new CertificateInput() {{
                                    rawDer = "quis";
                                }}),
                                add(new CertificateInput() {{
                                    rawDer = "veritatis";
                                }}),
                                add(new CertificateInput() {{
                                    rawDer = "deserunt";
                                }}),
                            }};
                            serviceDirectoryService = "perferendis";
                        }}),
                        add(new ServiceResolverInput() {{
                            endpointFilter = "ipsam";
                            hostname = "sympathetic-viewer.net";
                            serverCertificates = new org.openapis.openapi.models.shared.CertificateInput[]{{
                                add(new CertificateInput() {{
                                    rawDer = "at";
                                }}),
                            }};
                            serviceDirectoryService = "at";
                        }}),
                    }};
                }};;
                accessToken = "maiores";
                alt = AltEnum.MEDIA;
                callback = "quod";
                ekmConnectionId = "quod";
                fields = "esse";
                key = "totam";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "dicta";
                uploadProtocol = "nam";
            }};            

            CloudkmsProjectsLocationsEkmConnectionsCreateResponse res = sdk.projects.cloudkmsProjectsLocationsEkmConnectionsCreate(req, new CloudkmsProjectsLocationsEkmConnectionsCreateSecurity() {{
                option1 = new CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1("officia", "occaecati") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.ekmConnection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->