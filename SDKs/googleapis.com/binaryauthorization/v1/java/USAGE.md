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

            BinaryauthorizationProjectsAttestorsCreateRequest req = new BinaryauthorizationProjectsAttestorsCreateRequest() {{
                security = new BinaryauthorizationProjectsAttestorsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new BinaryauthorizationProjectsAttestorsCreatePathParams() {{
                    parent = "nihil";
                }};
                queryParams = new BinaryauthorizationProjectsAttestorsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "magni";
                    alt = "media";
                    attestorId = "eaque";
                    callback = "incidunt";
                    fields = "qui";
                    key = "magnam";
                    oauthToken = "accusamus";
                    prettyPrint = false;
                    quotaUser = "rerum";
                    uploadType = "cumque";
                    uploadProtocol = "ut";
                }};
                request = new AttestorInput() {{
                    description = "consequatur";
                    etag = "sequi";
                    name = "omnis";
                    userOwnedGrafeasNote = new UserOwnedGrafeasNoteInput() {{
                        noteReference = "quis";
                        publicKeys = new openapisdk.models.shared.AttestorPublicKey[]() {{
                            add(new AttestorPublicKey() {{
                                asciiArmoredPgpPublicKey = "sapiente";
                                comment = "accusamus";
                                id = "velit";
                                pkixPublicKey = new PkixPublicKey() {{
                                    publicKeyPem = "amet";
                                    signatureAlgorithm = "RSA_PSS_4096_SHA256";
                                }};
                            }}),
                        }};
                    }};
                }};
            }};

            BinaryauthorizationProjectsAttestorsCreateResponse res = sdk.projects.binaryauthorizationProjectsAttestorsCreate(req);

            if (res.attestor.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->