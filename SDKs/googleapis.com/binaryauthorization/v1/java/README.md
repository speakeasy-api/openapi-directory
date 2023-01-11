# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
