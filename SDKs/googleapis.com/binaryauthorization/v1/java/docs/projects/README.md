# projects

### Available Operations

* [binaryauthorizationProjectsAttestorsCreate](#binaryauthorizationprojectsattestorscreate) - Creates an attestor, and returns a copy of the new attestor. Returns NOT_FOUND if the project does not exist, INVALID_ARGUMENT if the request is malformed, ALREADY_EXISTS if the attestor already exists.
* [binaryauthorizationProjectsAttestorsDelete](#binaryauthorizationprojectsattestorsdelete) - Deletes an attestor. Returns NOT_FOUND if the attestor does not exist.
* [binaryauthorizationProjectsAttestorsList](#binaryauthorizationprojectsattestorslist) - Lists attestors. Returns INVALID_ARGUMENT if the project does not exist.
* [binaryauthorizationProjectsAttestorsUpdate](#binaryauthorizationprojectsattestorsupdate) - Updates an attestor. Returns NOT_FOUND if the attestor does not exist.
* [binaryauthorizationProjectsAttestorsValidateAttestationOccurrence](#binaryauthorizationprojectsattestorsvalidateattestationoccurrence) - Returns whether the given Attestation for the given image URI was signed by the given Attestor
* [binaryauthorizationProjectsPolicyGetIamPolicy](#binaryauthorizationprojectspolicygetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [binaryauthorizationProjectsPolicySetIamPolicy](#binaryauthorizationprojectspolicysetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [binaryauthorizationProjectsPolicyTestIamPermissions](#binaryauthorizationprojectspolicytestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## binaryauthorizationProjectsAttestorsCreate

Creates an attestor, and returns a copy of the new attestor. Returns NOT_FOUND if the project does not exist, INVALID_ARGUMENT if the request is malformed, ALREADY_EXISTS if the attestor already exists.

### Example Usage

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
import org.openapis.openapi.models.shared.UserOwnedGrafeasNoteInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BinaryauthorizationProjectsAttestorsCreateRequest req = new BinaryauthorizationProjectsAttestorsCreateRequest("sequi") {{
                dollarXgafv = XgafvEnum.TWO;
                attestorInput = new AttestorInput() {{
                    description = "ipsam";
                    etag = "id";
                    name = "Richard Boyer";
                    userOwnedGrafeasNote = new UserOwnedGrafeasNoteInput() {{
                        noteReference = "laborum";
                        publicKeys = new org.openapis.openapi.models.shared.AttestorPublicKey[]{{
                            add(new AttestorPublicKey() {{
                                asciiArmoredPgpPublicKey = "reiciendis";
                                comment = "voluptatibus";
                                id = "e78f097b-0074-4f15-871b-5e6e13b99d48";
                                pkixPublicKey = new PkixPublicKey() {{
                                    publicKeyPem = "rem";
                                    signatureAlgorithm = PkixPublicKeySignatureAlgorithmEnum.ECDSA_P521_SHA512;
                                }};
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                attestorId = "sint";
                callback = "veritatis";
                fields = "itaque";
                key = "incidunt";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "consequatur";
                uploadType = "est";
                uploadProtocol = "quibusdam";
            }};            

            BinaryauthorizationProjectsAttestorsCreateResponse res = sdk.projects.binaryauthorizationProjectsAttestorsCreate(req, new BinaryauthorizationProjectsAttestorsCreateSecurity("explicabo", "deserunt") {{
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

## binaryauthorizationProjectsAttestorsDelete

Deletes an attestor. Returns NOT_FOUND if the attestor does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsAttestorsDeleteRequest;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsAttestorsDeleteResponse;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsAttestorsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BinaryauthorizationProjectsAttestorsDeleteRequest req = new BinaryauthorizationProjectsAttestorsDeleteRequest("distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "labore";
                alt = AltEnum.JSON;
                callback = "qui";
                fields = "aliquid";
                key = "cupiditate";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "magni";
                uploadProtocol = "assumenda";
            }};            

            BinaryauthorizationProjectsAttestorsDeleteResponse res = sdk.projects.binaryauthorizationProjectsAttestorsDelete(req, new BinaryauthorizationProjectsAttestorsDeleteSecurity("ipsam", "alias") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## binaryauthorizationProjectsAttestorsList

Lists attestors. Returns INVALID_ARGUMENT if the project does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsAttestorsListRequest;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsAttestorsListResponse;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsAttestorsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BinaryauthorizationProjectsAttestorsListRequest req = new BinaryauthorizationProjectsAttestorsListRequest("fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "facilis";
                fields = "tempore";
                key = "labore";
                oauthToken = "delectus";
                pageSize = 433288L;
                pageToken = "non";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "sint";
                uploadProtocol = "aliquid";
            }};            

            BinaryauthorizationProjectsAttestorsListResponse res = sdk.projects.binaryauthorizationProjectsAttestorsList(req, new BinaryauthorizationProjectsAttestorsListSecurity("provident", "necessitatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAttestorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## binaryauthorizationProjectsAttestorsUpdate

Updates an attestor. Returns NOT_FOUND if the attestor does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsAttestorsUpdateRequest;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsAttestorsUpdateResponse;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsAttestorsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AttestorInput;
import org.openapis.openapi.models.shared.AttestorPublicKey;
import org.openapis.openapi.models.shared.PkixPublicKey;
import org.openapis.openapi.models.shared.PkixPublicKeySignatureAlgorithmEnum;
import org.openapis.openapi.models.shared.UserOwnedGrafeasNoteInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BinaryauthorizationProjectsAttestorsUpdateRequest req = new BinaryauthorizationProjectsAttestorsUpdateRequest("sint") {{
                dollarXgafv = XgafvEnum.TWO;
                attestorInput = new AttestorInput() {{
                    description = "dolor";
                    etag = "debitis";
                    name = "Wilbur King";
                    userOwnedGrafeasNote = new UserOwnedGrafeasNoteInput() {{
                        noteReference = "maiores";
                        publicKeys = new org.openapis.openapi.models.shared.AttestorPublicKey[]{{
                            add(new AttestorPublicKey() {{
                                asciiArmoredPgpPublicKey = "dicta";
                                comment = "magnam";
                                id = "cd66ae39-5efb-49ba-88f3-a66997074ba4";
                                pkixPublicKey = new PkixPublicKey() {{
                                    publicKeyPem = "labore";
                                    signatureAlgorithm = PkixPublicKeySignatureAlgorithmEnum.RSA_PSS4096_SHA512;
                                }};
                            }}),
                            add(new AttestorPublicKey() {{
                                asciiArmoredPgpPublicKey = "natus";
                                comment = "nobis";
                                id = "6e214195-9890-4afa-963e-2516fe4c8b71";
                                pkixPublicKey = new PkixPublicKey() {{
                                    publicKeyPem = "architecto";
                                    signatureAlgorithm = PkixPublicKeySignatureAlgorithmEnum.ECDSA_P521_SHA512;
                                }};
                            }}),
                            add(new AttestorPublicKey() {{
                                asciiArmoredPgpPublicKey = "ullam";
                                comment = "expedita";
                                id = "7fd2ed02-8921-4cdd-8692-601fb576b0d5";
                                pkixPublicKey = new PkixPublicKey() {{
                                    publicKeyPem = "voluptatibus";
                                    signatureAlgorithm = PkixPublicKeySignatureAlgorithmEnum.SIGNATURE_ALGORITHM_UNSPECIFIED;
                                }};
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "fugiat";
                alt = AltEnum.JSON;
                callback = "aut";
                fields = "cumque";
                key = "corporis";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "libero";
                uploadType = "nobis";
                uploadProtocol = "dolores";
            }};            

            BinaryauthorizationProjectsAttestorsUpdateResponse res = sdk.projects.binaryauthorizationProjectsAttestorsUpdate(req, new BinaryauthorizationProjectsAttestorsUpdateSecurity("quis", "totam") {{
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

## binaryauthorizationProjectsAttestorsValidateAttestationOccurrence

Returns whether the given Attestation for the given image URI was signed by the given Attestor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceRequest;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceResponse;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AttestationOccurrence;
import org.openapis.openapi.models.shared.Jwt;
import org.openapis.openapi.models.shared.Signature;
import org.openapis.openapi.models.shared.ValidateAttestationOccurrenceRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceRequest req = new BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceRequest("dignissimos") {{
                dollarXgafv = XgafvEnum.ONE;
                validateAttestationOccurrenceRequest = new ValidateAttestationOccurrenceRequest() {{
                    attestation = new AttestationOccurrence() {{
                        jwts = new org.openapis.openapi.models.shared.Jwt[]{{
                            add(new Jwt() {{
                                compactJwt = "nesciunt";
                            }}),
                            add(new Jwt() {{
                                compactJwt = "eos";
                            }}),
                        }};
                        serializedPayload = "perferendis";
                        signatures = new org.openapis.openapi.models.shared.Signature[]{{
                            add(new Signature() {{
                                publicKeyId = "minus";
                                signature = "quam";
                            }}),
                        }};
                    }};;
                    occurrenceNote = "dolor";
                    occurrenceResourceUri = "vero";
                }};;
                accessToken = "nostrum";
                alt = AltEnum.PROTO;
                callback = "recusandae";
                fields = "omnis";
                key = "facilis";
                oauthToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "voluptatem";
                uploadType = "porro";
                uploadProtocol = "consequuntur";
            }};            

            BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceResponse res = sdk.projects.binaryauthorizationProjectsAttestorsValidateAttestationOccurrence(req, new BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceSecurity("blanditiis", "error") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.validateAttestationOccurrenceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## binaryauthorizationProjectsPolicyGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsPolicyGetIamPolicyRequest;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsPolicyGetIamPolicyResponse;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsPolicyGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BinaryauthorizationProjectsPolicyGetIamPolicyRequest req = new BinaryauthorizationProjectsPolicyGetIamPolicyRequest("eaque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "rerum";
                alt = AltEnum.JSON;
                callback = "asperiores";
                fields = "earum";
                key = "modi";
                oauthToken = "iste";
                optionsRequestedPolicyVersion = 679091L;
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "pariatur";
                uploadProtocol = "provident";
            }};            

            BinaryauthorizationProjectsPolicyGetIamPolicyResponse res = sdk.projects.binaryauthorizationProjectsPolicyGetIamPolicy(req, new BinaryauthorizationProjectsPolicyGetIamPolicySecurity("nobis", "libero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.iamPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## binaryauthorizationProjectsPolicySetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsPolicySetIamPolicyRequest;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsPolicySetIamPolicyResponse;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsPolicySetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.IamPolicy;
import org.openapis.openapi.models.shared.SetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BinaryauthorizationProjectsPolicySetIamPolicyRequest req = new BinaryauthorizationProjectsPolicySetIamPolicyRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new IamPolicy() {{
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "aliquid";
                                    expression = "dolorem";
                                    location = "dolorem";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("ipsum"),
                                }};
                                role = "hic";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "excepturi";
                                    expression = "cum";
                                    location = "voluptate";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("amet"),
                                    add("dolorum"),
                                    add("numquam"),
                                    add("veritatis"),
                                }};
                                role = "ipsa";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "ipsa";
                                    expression = "iure";
                                    location = "odio";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("quidem"),
                                    add("voluptatibus"),
                                    add("voluptas"),
                                    add("natus"),
                                }};
                                role = "eos";
                            }}),
                        }};
                        etag = "atque";
                        version = 24678;
                    }};;
                }};;
                accessToken = "fugiat";
                alt = AltEnum.JSON;
                callback = "soluta";
                fields = "dolorum";
                key = "iusto";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "deleniti";
                uploadProtocol = "omnis";
            }};            

            BinaryauthorizationProjectsPolicySetIamPolicyResponse res = sdk.projects.binaryauthorizationProjectsPolicySetIamPolicy(req, new BinaryauthorizationProjectsPolicySetIamPolicySecurity("necessitatibus", "distinctio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.iamPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## binaryauthorizationProjectsPolicyTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsPolicyTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsPolicyTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.BinaryauthorizationProjectsPolicyTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BinaryauthorizationProjectsPolicyTestIamPermissionsRequest req = new BinaryauthorizationProjectsPolicyTestIamPermissionsRequest("asperiores") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("voluptate"),
                    }};
                }};;
                accessToken = "id";
                alt = AltEnum.PROTO;
                callback = "eius";
                fields = "aspernatur";
                key = "perferendis";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "optio";
                uploadType = "accusamus";
                uploadProtocol = "ad";
            }};            

            BinaryauthorizationProjectsPolicyTestIamPermissionsResponse res = sdk.projects.binaryauthorizationProjectsPolicyTestIamPermissions(req, new BinaryauthorizationProjectsPolicyTestIamPermissionsSecurity("saepe", "suscipit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.testIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
