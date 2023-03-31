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

import org.openapis.openapi.models.operations.BinaryauthorizationProjectsAttestorsCreateSecurity;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsAttestorsCreatePathParams;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsAttestorsCreateQueryParams;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsAttestorsCreateRequest;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsAttestorsCreateResponse;
import org.openapis.openapi.models.shared.AttestorInput;
import org.openapis.openapi.models.shared.UserOwnedDrydockNoteInput;
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
                    userOwnedDrydockNote = new UserOwnedDrydockNoteInput() {{
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### projects

* `binaryauthorizationProjectsAttestorsCreate` - Creates an attestor, and returns a copy of the new attestor. Returns NOT_FOUND if the project does not exist, INVALID_ARGUMENT if the request is malformed, ALREADY_EXISTS if the attestor already exists.
* `binaryauthorizationProjectsAttestorsDelete` - Deletes an attestor. Returns NOT_FOUND if the attestor does not exist.
* `binaryauthorizationProjectsAttestorsList` - Lists attestors. Returns INVALID_ARGUMENT if the project does not exist.
* `binaryauthorizationProjectsAttestorsUpdate` - Updates an attestor. Returns NOT_FOUND if the attestor does not exist.
* `binaryauthorizationProjectsAttestorsValidateAttestationOccurrence` - Returns whether the given Attestation for the given image URI was signed by the given Attestor
* `binaryauthorizationProjectsPolicyGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `binaryauthorizationProjectsPolicySetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `binaryauthorizationProjectsPolicyTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### systempolicy

* `binaryauthorizationSystempolicyGetPolicy` - Gets the current system policy in the specified location.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
