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
                    parent = "sit";
                }};
                queryParams = new BinaryauthorizationProjectsAttestorsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    attestorId = "consequuntur";
                    callback = "dolor";
                    fields = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                }};
                request = new AttestorInput() {{
                    description = "debitis";
                    etag = "voluptatum";
                    name = "et";
                    userOwnedGrafeasNote = new UserOwnedGrafeasNoteInput() {{
                        noteReference = "ut";
                        publicKeys = new openapisdk.models.shared.AttestorPublicKey[]() {{
                            add(new AttestorPublicKey() {{
                                asciiArmoredPgpPublicKey = "et";
                                comment = "voluptate";
                                id = "iste";
                                pkixPublicKey = new PkixPublicKey() {{
                                    publicKeyPem = "vitae";
                                    signatureAlgorithm = "ECDSA_P521_SHA512";
                                }};
                            }}),
                            add(new AttestorPublicKey() {{
                                asciiArmoredPgpPublicKey = "dolores";
                                comment = "illum";
                                id = "debitis";
                                pkixPublicKey = new PkixPublicKey() {{
                                    publicKeyPem = "vel";
                                    signatureAlgorithm = "EC_SIGN_P256_SHA256";
                                }};
                            }}),
                            add(new AttestorPublicKey() {{
                                asciiArmoredPgpPublicKey = "dolore";
                                comment = "id";
                                id = "aspernatur";
                                pkixPublicKey = new PkixPublicKey() {{
                                    publicKeyPem = "accusantium";
                                    signatureAlgorithm = "ECDSA_P256_SHA256";
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