<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.BinaryauthorizationProjectsAttestorsCreateSecurity;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsAttestorsCreateRequest;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsAttestorsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AttestorInput;
import org.openapis.openapi.models.shared.UserOwnedDrydockNoteInput;
import org.openapis.openapi.models.shared.AttestorPublicKey;
import org.openapis.openapi.models.shared.PkixPublicKeySignatureAlgorithmEnum;
import org.openapis.openapi.models.shared.PkixPublicKey;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BinaryauthorizationProjectsAttestorsCreateRequest req = new BinaryauthorizationProjectsAttestorsCreateRequest() {{
                dollarXgafv = "2";
                attestorInput = new AttestorInput() {{
                    description = "provident";
                    etag = "distinctio";
                    name = "quibusdam";
                    userOwnedDrydockNote = new UserOwnedDrydockNoteInput() {{
                        noteReference = "unde";
                        publicKeys = new org.openapis.openapi.models.shared.AttestorPublicKey[]{{
                            add(new AttestorPublicKey() {{
                                asciiArmoredPgpPublicKey = "corrupti";
                                comment = "illum";
                                id = "vel";
                                pkixPublicKey = new PkixPublicKey() {{
                                    publicKeyPem = "error";
                                    signatureAlgorithm = "RSA_SIGN_PKCS1_4096_SHA512";
                                }};
                            }}),
                            add(new AttestorPublicKey() {{
                                asciiArmoredPgpPublicKey = "suscipit";
                                comment = "iure";
                                id = "magnam";
                                pkixPublicKey = new PkixPublicKey() {{
                                    publicKeyPem = "debitis";
                                    signatureAlgorithm = "RSA_PSS_2048_SHA256";
                                }};
                            }}),
                            add(new AttestorPublicKey() {{
                                asciiArmoredPgpPublicKey = "delectus";
                                comment = "tempora";
                                id = "suscipit";
                                pkixPublicKey = new PkixPublicKey() {{
                                    publicKeyPem = "molestiae";
                                    signatureAlgorithm = "ECDSA_P384_SHA384";
                                }};
                            }}),
                            add(new AttestorPublicKey() {{
                                asciiArmoredPgpPublicKey = "placeat";
                                comment = "voluptatum";
                                id = "iusto";
                                pkixPublicKey = new PkixPublicKey() {{
                                    publicKeyPem = "excepturi";
                                    signatureAlgorithm = "RSA_PSS_4096_SHA512";
                                }};
                            }}),
                        }};
                    }};
                }};
                accessToken = "recusandae";
                alt = "proto";
                attestorId = "ab";
                callback = "quis";
                fields = "veritatis";
                key = "deserunt";
                oauthToken = "perferendis";
                parent = "ipsam";
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "sapiente";
                uploadProtocol = "quo";
            }}            

            BinaryauthorizationProjectsAttestorsCreateResponse res = sdk.projects.binaryauthorizationProjectsAttestorsCreate(req, new BinaryauthorizationProjectsAttestorsCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.attestor.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->