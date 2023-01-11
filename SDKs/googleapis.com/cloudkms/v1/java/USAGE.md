<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    parent = "dolor";
                }};
                queryParams = new CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "rem";
                    alt = "proto";
                    callback = "quaerat";
                    ekmConnectionId = "quia";
                    fields = "aut";
                    key = "hic";
                    oauthToken = "sunt";
                    prettyPrint = false;
                    quotaUser = "odio";
                    uploadType = "fuga";
                    uploadProtocol = "reprehenderit";
                }};
                request = new EkmConnectionInput() {{
                    etag = "dicta";
                    serviceResolvers = new openapisdk.models.shared.ServiceResolverInput[]() {{
                        add(new ServiceResolverInput() {{
                            endpointFilter = "ab";
                            hostname = "accusantium";
                            serverCertificates = new openapisdk.models.shared.CertificateInput[]() {{
                                add(new CertificateInput() {{
                                    rawDer = "quis";
                                }}),
                                add(new CertificateInput() {{
                                    rawDer = "et";
                                }}),
                                add(new CertificateInput() {{
                                    rawDer = "tempora";
                                }}),
                            }};
                            serviceDirectoryService = "quaerat";
                        }}),
                        add(new ServiceResolverInput() {{
                            endpointFilter = "vel";
                            hostname = "dolor";
                            serverCertificates = new openapisdk.models.shared.CertificateInput[]() {{
                                add(new CertificateInput() {{
                                    rawDer = "unde";
                                }}),
                                add(new CertificateInput() {{
                                    rawDer = "ut";
                                }}),
                            }};
                            serviceDirectoryService = "quas";
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