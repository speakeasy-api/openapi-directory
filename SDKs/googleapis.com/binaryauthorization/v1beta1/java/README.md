# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [binaryauthorizationProjectsAttestorsCreate](docs/projects/README.md#binaryauthorizationprojectsattestorscreate) - Creates an attestor, and returns a copy of the new attestor. Returns NOT_FOUND if the project does not exist, INVALID_ARGUMENT if the request is malformed, ALREADY_EXISTS if the attestor already exists.
* [binaryauthorizationProjectsAttestorsDelete](docs/projects/README.md#binaryauthorizationprojectsattestorsdelete) - Deletes an attestor. Returns NOT_FOUND if the attestor does not exist.
* [binaryauthorizationProjectsAttestorsList](docs/projects/README.md#binaryauthorizationprojectsattestorslist) - Lists attestors. Returns INVALID_ARGUMENT if the project does not exist.
* [binaryauthorizationProjectsAttestorsUpdate](docs/projects/README.md#binaryauthorizationprojectsattestorsupdate) - Updates an attestor. Returns NOT_FOUND if the attestor does not exist.
* [binaryauthorizationProjectsAttestorsValidateAttestationOccurrence](docs/projects/README.md#binaryauthorizationprojectsattestorsvalidateattestationoccurrence) - Returns whether the given Attestation for the given image URI was signed by the given Attestor
* [binaryauthorizationProjectsPolicyGetIamPolicy](docs/projects/README.md#binaryauthorizationprojectspolicygetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [binaryauthorizationProjectsPolicySetIamPolicy](docs/projects/README.md#binaryauthorizationprojectspolicysetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [binaryauthorizationProjectsPolicyTestIamPermissions](docs/projects/README.md#binaryauthorizationprojectspolicytestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### [systempolicy](docs/systempolicy/README.md)

* [binaryauthorizationSystempolicyGetPolicy](docs/systempolicy/README.md#binaryauthorizationsystempolicygetpolicy) - Gets the current system policy in the specified location.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
