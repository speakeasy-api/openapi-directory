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
                    parent = "sit";
                }};
                queryParams = new CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    ekmConnectionId = "dolor";
                    fields = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                }};
                request = new EkmConnectionInput() {{
                    etag = "debitis";
                    serviceResolvers = new openapisdk.models.shared.ServiceResolverInput[]() {{
                        add(new ServiceResolverInput() {{
                            endpointFilter = "et";
                            hostname = "ut";
                            serverCertificates = new openapisdk.models.shared.CertificateInput[]() {{
                                add(new CertificateInput() {{
                                    rawDer = "et";
                                }}),
                                add(new CertificateInput() {{
                                    rawDer = "voluptate";
                                }}),
                                add(new CertificateInput() {{
                                    rawDer = "iste";
                                }}),
                            }};
                            serviceDirectoryService = "vitae";
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