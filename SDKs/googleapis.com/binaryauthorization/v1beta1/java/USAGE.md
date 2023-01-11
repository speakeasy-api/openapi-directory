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
                    parent = "sunt";
                }};
                queryParams = new BinaryauthorizationProjectsAttestorsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "quis";
                    alt = "proto";
                    attestorId = "esse";
                    callback = "rerum";
                    fields = "tempora";
                    key = "culpa";
                    oauthToken = "deserunt";
                    prettyPrint = true;
                    quotaUser = "aut";
                    uploadType = "et";
                    uploadProtocol = "ad";
                }};
                request = new AttestorInput() {{
                    description = "ut";
                    etag = "alias";
                    name = "qui";
                    userOwnedDrydockNote = new UserOwnedDrydockNoteInput() {{
                        noteReference = "in";
                        publicKeys = new openapisdk.models.shared.AttestorPublicKey[]() {{
                            add(new AttestorPublicKey() {{
                                asciiArmoredPgpPublicKey = "voluptate";
                                comment = "et";
                                id = "consequatur";
                                pkixPublicKey = new PkixPublicKey() {{
                                    publicKeyPem = "aliquam";
                                    signatureAlgorithm = "RSA_SIGN_PSS_4096_SHA512";
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