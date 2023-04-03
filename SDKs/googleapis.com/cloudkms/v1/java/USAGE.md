<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption2;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsCreateSecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsCreateRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EkmConnectionKeyManagementModeEnum;
import org.openapis.openapi.models.shared.EkmConnectionInput;
import org.openapis.openapi.models.shared.ServiceResolverInput;
import org.openapis.openapi.models.shared.CertificateInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsEkmConnectionsCreateRequest req = new CloudkmsProjectsLocationsEkmConnectionsCreateRequest() {{
                dollarXgafv = "2";
                ekmConnectionInput = new EkmConnectionInput() {{
                    cryptoSpacePath = "provident";
                    etag = "distinctio";
                    keyManagementMode = "CLOUD_KMS";
                    serviceResolvers = new org.openapis.openapi.models.shared.ServiceResolverInput[]{{
                        add(new ServiceResolverInput() {{
                            endpointFilter = "nulla";
                            hostname = "moral-star.info";
                            serverCertificates = new org.openapis.openapi.models.shared.CertificateInput[]{{
                                add(new CertificateInput() {{
                                    rawDer = "deserunt";
                                }}),
                                add(new CertificateInput() {{
                                    rawDer = "suscipit";
                                }}),
                                add(new CertificateInput() {{
                                    rawDer = "iure";
                                }}),
                            }};
                            serviceDirectoryService = "magnam";
                        }}),
                        add(new ServiceResolverInput() {{
                            endpointFilter = "debitis";
                            hostname = "awesome-voter.biz";
                            serverCertificates = new org.openapis.openapi.models.shared.CertificateInput[]{{
                                add(new CertificateInput() {{
                                    rawDer = "molestiae";
                                }}),
                                add(new CertificateInput() {{
                                    rawDer = "minus";
                                }}),
                            }};
                            serviceDirectoryService = "placeat";
                        }}),
                        add(new ServiceResolverInput() {{
                            endpointFilter = "voluptatum";
                            hostname = "lawful-missionary.info";
                            serverCertificates = new org.openapis.openapi.models.shared.CertificateInput[]{{
                                add(new CertificateInput() {{
                                    rawDer = "temporibus";
                                }}),
                                add(new CertificateInput() {{
                                    rawDer = "ab";
                                }}),
                                add(new CertificateInput() {{
                                    rawDer = "quis";
                                }}),
                                add(new CertificateInput() {{
                                    rawDer = "veritatis";
                                }}),
                            }};
                            serviceDirectoryService = "deserunt";
                        }}),
                    }};
                }};
                accessToken = "perferendis";
                alt = "media";
                callback = "repellendus";
                ekmConnectionId = "sapiente";
                fields = "quo";
                key = "odit";
                oauthToken = "at";
                parent = "at";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "molestiae";
                uploadProtocol = "quod";
            }}            

            CloudkmsProjectsLocationsEkmConnectionsCreateResponse res = sdk.projects.cloudkmsProjectsLocationsEkmConnectionsCreate(req, new CloudkmsProjectsLocationsEkmConnectionsCreateSecurity() {{
                option1 = new CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.ekmConnection.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->