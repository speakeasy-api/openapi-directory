<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.BinaryauthorizationProjectsAttestorsCreateSecurity;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsAttestorsCreatePathParams;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsAttestorsCreateQueryParams;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsAttestorsCreateRequest;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsAttestorsCreateResponse;
import org.openapis.openapi.models.shared.AttestorInput;
import org.openapis.openapi.models.shared.UserOwnedGrafeasNoteInput;
import org.openapis.openapi.models.shared.AttestorPublicKey;
import org.openapis.openapi.models.shared.PkixPublicKeySignatureAlgorithmEnum;
import org.openapis.openapi.models.shared.PkixPublicKey;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    parent = "corrupti";
                }};
                queryParams = new BinaryauthorizationProjectsAttestorsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    attestorId = "unde";
                    callback = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
                request = new AttestorInput() {{
                    description = "iure";
                    etag = "magnam";
                    name = "debitis";
                    userOwnedGrafeasNote = new UserOwnedGrafeasNoteInput() {{
                        noteReference = "ipsa";
                        publicKeys = new org.openapis.openapi.models.shared.AttestorPublicKey[]{{
                            add(new AttestorPublicKey() {{
                                asciiArmoredPgpPublicKey = "tempora";
                                comment = "suscipit";
                                id = "molestiae";
                                pkixPublicKey = new PkixPublicKey() {{
                                    publicKeyPem = "minus";
                                    signatureAlgorithm = "ECDSA_P384_SHA384";
                                }};
                            }}),
                            add(new AttestorPublicKey() {{
                                asciiArmoredPgpPublicKey = "voluptatum";
                                comment = "iusto";
                                id = "excepturi";
                                pkixPublicKey = new PkixPublicKey() {{
                                    publicKeyPem = "nisi";
                                    signatureAlgorithm = "ECDSA_P521_SHA512";
                                }};
                            }}),
                            add(new AttestorPublicKey() {{
                                asciiArmoredPgpPublicKey = "temporibus";
                                comment = "ab";
                                id = "quis";
                                pkixPublicKey = new PkixPublicKey() {{
                                    publicKeyPem = "veritatis";
                                    signatureAlgorithm = "RSA_SIGN_PKCS1_4096_SHA512";
                                }};
                            }}),
                            add(new AttestorPublicKey() {{
                                asciiArmoredPgpPublicKey = "perferendis";
                                comment = "ipsam";
                                id = "repellendus";
                                pkixPublicKey = new PkixPublicKey() {{
                                    publicKeyPem = "sapiente";
                                    signatureAlgorithm = "EC_SIGN_P256_SHA256";
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