<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsAttestorsCreateRequest;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsAttestorsCreateResponse;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsAttestorsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AttestorInput;
import org.openapis.openapi.models.shared.AttestorPublicKey;
import org.openapis.openapi.models.shared.PkixPublicKey;
import org.openapis.openapi.models.shared.PkixPublicKeySignatureAlgorithmEnum;
import org.openapis.openapi.models.shared.UserOwnedDrydockNoteInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BinaryauthorizationProjectsAttestorsCreateRequest req = new BinaryauthorizationProjectsAttestorsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                attestorInput = new AttestorInput() {{
                    description = "distinctio";
                    etag = "quibusdam";
                    name = "Ismael Little";
                    userOwnedDrydockNote = new UserOwnedDrydockNoteInput() {{
                        noteReference = "error";
                        publicKeys = new org.openapis.openapi.models.shared.AttestorPublicKey[]{{
                            add(new AttestorPublicKey() {{
                                asciiArmoredPgpPublicKey = "suscipit";
                                comment = "iure";
                                id = "4e0f467c-c879-46ed-951a-05dfc2ddf7cc";
                                pkixPublicKey = new PkixPublicKey() {{
                                    publicKeyPem = "esse";
                                    signatureAlgorithm = PkixPublicKeySignatureAlgorithmEnum.RSA_SIGN_PKCS12048_SHA256;
                                }};
                            }}),
                            add(new AttestorPublicKey() {{
                                asciiArmoredPgpPublicKey = "porro";
                                comment = "dolorum";
                                id = "1ba928fc-8167-442c-b739-205929396fea";
                                pkixPublicKey = new PkixPublicKey() {{
                                    publicKeyPem = "in";
                                    signatureAlgorithm = PkixPublicKeySignatureAlgorithmEnum.RSA_SIGN_PSS4096_SHA256;
                                }};
                            }}),
                            add(new AttestorPublicKey() {{
                                asciiArmoredPgpPublicKey = "iste";
                                comment = "iure";
                                id = "eb10faaa-2352-4c59-9590-7aff1a3a2fa9";
                                pkixPublicKey = new PkixPublicKey() {{
                                    publicKeyPem = "numquam";
                                    signatureAlgorithm = PkixPublicKeySignatureAlgorithmEnum.RSA_PSS4096_SHA512;
                                }};
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "quam";
                alt = AltEnum.MEDIA;
                attestorId = "velit";
                callback = "error";
                fields = "quia";
                key = "quis";
                oauthToken = "vitae";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "animi";
                uploadProtocol = "enim";
            }};            

            BinaryauthorizationProjectsAttestorsCreateResponse res = sdk.projects.binaryauthorizationProjectsAttestorsCreate(req, new BinaryauthorizationProjectsAttestorsCreateSecurity("odit", "quo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.attestor != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->