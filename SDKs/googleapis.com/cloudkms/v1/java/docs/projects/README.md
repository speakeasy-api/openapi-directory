# projects

### Available Operations

* [cloudkmsProjectsLocationsEkmConnectionsCreate](#cloudkmsprojectslocationsekmconnectionscreate) - Creates a new EkmConnection in a given Project and Location.
* [cloudkmsProjectsLocationsEkmConnectionsList](#cloudkmsprojectslocationsekmconnectionslist) - Lists EkmConnections.
* [cloudkmsProjectsLocationsEkmConnectionsVerifyConnectivity](#cloudkmsprojectslocationsekmconnectionsverifyconnectivity) - Verifies that Cloud KMS can successfully connect to the external key manager specified by an EkmConnection. If there is an error connecting to the EKM, this method returns a FAILED_PRECONDITION status containing structured information as described at https://cloud.google.com/kms/docs/reference/ekm_errors.
* [cloudkmsProjectsLocationsGenerateRandomBytes](#cloudkmsprojectslocationsgeneraterandombytes) - Generate random bytes using the Cloud KMS randomness source in the provided location.
* [cloudkmsProjectsLocationsKeyRingsCreate](#cloudkmsprojectslocationskeyringscreate) - Create a new KeyRing in a given Project and Location.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCreate](#cloudkmsprojectslocationskeyringscryptokeyscreate) - Create a new CryptoKey within a KeyRing. CryptoKey.purpose and CryptoKey.version_template.algorithm are required.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecrypt](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsasymmetricdecrypt) - Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_DECRYPT.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSign](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsasymmetricsign) - Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreate](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionscreate) - Create a new CryptoKeyVersion in a CryptoKey. The server will assign the next sequential id. If unset, state will be set to ENABLED.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroy](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsdestroy) - Schedule a CryptoKeyVersion for destruction. Upon calling this method, CryptoKeyVersion.state will be set to DESTROY_SCHEDULED, and destroy_time will be set to the time destroy_scheduled_duration in the future. At that time, the state will automatically change to DESTROYED, and the key material will be irrevocably destroyed. Before the destroy_time is reached, RestoreCryptoKeyVersion may be called to reverse the process.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKey](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsgetpublickey) - Returns the public key for the given CryptoKeyVersion. The CryptoKey.purpose must be ASYMMETRIC_SIGN or ASYMMETRIC_DECRYPT.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImport](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsimport) - Import wrapped key material into a CryptoKeyVersion. All requests must specify a CryptoKey. If a CryptoKeyVersion is additionally specified in the request, key material will be reimported into that version. Otherwise, a new version will be created, and will be assigned the next sequential id within the CryptoKey.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsList](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionslist) - Lists CryptoKeyVersions.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSign](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsmacsign) - Signs data using a CryptoKeyVersion with CryptoKey.purpose MAC, producing a tag that can be verified by another source with the same key.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerify](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsmacverify) - Verifies MAC tag using a CryptoKeyVersion with CryptoKey.purpose MAC, and returns a response that indicates whether or not the verification was successful.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatch](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionspatch) - Update a CryptoKeyVersion's metadata. state may be changed between ENABLED and DISABLED using this method. See DestroyCryptoKeyVersion and RestoreCryptoKeyVersion to move between other states.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestore](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsrestore) - Restore a CryptoKeyVersion in the DESTROY_SCHEDULED state. Upon restoration of the CryptoKeyVersion, state will be set to DISABLED, and destroy_time will be cleared.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysDecrypt](#cloudkmsprojectslocationskeyringscryptokeysdecrypt) - Decrypts data that was protected by Encrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysEncrypt](#cloudkmsprojectslocationskeyringscryptokeysencrypt) - Encrypts data, so that it can only be recovered by a call to Decrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysList](#cloudkmsprojectslocationskeyringscryptokeyslist) - Lists CryptoKeys.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersion](#cloudkmsprojectslocationskeyringscryptokeysupdateprimaryversion) - Update the version of a CryptoKey that will be used in Encrypt. Returns an error if called on a key whose purpose is not ENCRYPT_DECRYPT.
* [cloudkmsProjectsLocationsKeyRingsImportJobsCreate](#cloudkmsprojectslocationskeyringsimportjobscreate) - Create a new ImportJob within a KeyRing. ImportJob.import_method is required.
* [cloudkmsProjectsLocationsKeyRingsImportJobsGet](#cloudkmsprojectslocationskeyringsimportjobsget) - Returns metadata for a given ImportJob.
* [cloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicy](#cloudkmsprojectslocationskeyringsimportjobsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [cloudkmsProjectsLocationsKeyRingsImportJobsList](#cloudkmsprojectslocationskeyringsimportjobslist) - Lists ImportJobs.
* [cloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicy](#cloudkmsprojectslocationskeyringsimportjobssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [cloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissions](#cloudkmsprojectslocationskeyringsimportjobstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [cloudkmsProjectsLocationsKeyRingsList](#cloudkmsprojectslocationskeyringslist) - Lists KeyRings.
* [cloudkmsProjectsLocationsList](#cloudkmsprojectslocationslist) - Lists information about the supported locations for this service.

## cloudkmsProjectsLocationsEkmConnectionsCreate

Creates a new EkmConnection in a given Project and Location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsCreateRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsCreateResponse;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsCreateSecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CertificateInput;
import org.openapis.openapi.models.shared.EkmConnectionInput;
import org.openapis.openapi.models.shared.EkmConnectionKeyManagementModeEnum;
import org.openapis.openapi.models.shared.ServiceResolverInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsEkmConnectionsCreateRequest req = new CloudkmsProjectsLocationsEkmConnectionsCreateRequest("fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                ekmConnectionInput = new EkmConnectionInput() {{
                    cryptoSpacePath = "hic";
                    etag = "optio";
                    keyManagementMode = EkmConnectionKeyManagementModeEnum.MANUAL;
                    serviceResolvers = new org.openapis.openapi.models.shared.ServiceResolverInput[]{{
                        add(new ServiceResolverInput() {{
                            endpointFilter = "commodi";
                            hostname = "kosher-dipstick.biz";
                            serverCertificates = new org.openapis.openapi.models.shared.CertificateInput[]{{
                                add(new CertificateInput() {{
                                    rawDer = "cum";
                                }}),
                                add(new CertificateInput() {{
                                    rawDer = "esse";
                                }}),
                                add(new CertificateInput() {{
                                    rawDer = "ipsum";
                                }}),
                                add(new CertificateInput() {{
                                    rawDer = "excepturi";
                                }}),
                            }};
                            serviceDirectoryService = "aspernatur";
                        }}),
                    }};
                }};;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "natus";
                ekmConnectionId = "sed";
                fields = "iste";
                key = "dolor";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "laboriosam";
                uploadType = "hic";
                uploadProtocol = "saepe";
            }};            

            CloudkmsProjectsLocationsEkmConnectionsCreateResponse res = sdk.projects.cloudkmsProjectsLocationsEkmConnectionsCreate(req, new CloudkmsProjectsLocationsEkmConnectionsCreateSecurity() {{
                option1 = new CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1("fuga", "in") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.ekmConnection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudkmsProjectsLocationsEkmConnectionsList

Lists EkmConnections.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsListRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsListResponse;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsListSecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsListSecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsEkmConnectionsListRequest req = new CloudkmsProjectsLocationsEkmConnectionsListRequest("corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iure";
                alt = AltEnum.PROTO;
                callback = "quidem";
                fields = "architecto";
                filter = "ipsa";
                key = "reiciendis";
                oauthToken = "est";
                orderBy = "mollitia";
                pageSize = 670638L;
                pageToken = "dolores";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "corporis";
                uploadProtocol = "explicabo";
            }};            

            CloudkmsProjectsLocationsEkmConnectionsListResponse res = sdk.projects.cloudkmsProjectsLocationsEkmConnectionsList(req, new CloudkmsProjectsLocationsEkmConnectionsListSecurity() {{
                option1 = new CloudkmsProjectsLocationsEkmConnectionsListSecurityOption1("nobis", "enim") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listEkmConnectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudkmsProjectsLocationsEkmConnectionsVerifyConnectivity

Verifies that Cloud KMS can successfully connect to the external key manager specified by an EkmConnection. If there is an error connecting to the EKM, this method returns a FAILED_PRECONDITION status containing structured information as described at https://cloud.google.com/kms/docs/reference/ekm_errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsVerifyConnectivityRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsVerifyConnectivityResponse;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsVerifyConnectivitySecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsVerifyConnectivitySecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsEkmConnectionsVerifyConnectivitySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsEkmConnectionsVerifyConnectivityRequest req = new CloudkmsProjectsLocationsEkmConnectionsVerifyConnectivityRequest("omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "minima";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "iure";
                key = "culpa";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "architecto";
                uploadProtocol = "mollitia";
            }};            

            CloudkmsProjectsLocationsEkmConnectionsVerifyConnectivityResponse res = sdk.projects.cloudkmsProjectsLocationsEkmConnectionsVerifyConnectivity(req, new CloudkmsProjectsLocationsEkmConnectionsVerifyConnectivitySecurity() {{
                option1 = new CloudkmsProjectsLocationsEkmConnectionsVerifyConnectivitySecurityOption1("dolorem", "culpa") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.verifyConnectivityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudkmsProjectsLocationsGenerateRandomBytes

Generate random bytes using the Cloud KMS randomness source in the provided location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsGenerateRandomBytesRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsGenerateRandomBytesResponse;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsGenerateRandomBytesSecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GenerateRandomBytesRequest;
import org.openapis.openapi.models.shared.GenerateRandomBytesRequestProtectionLevelEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsGenerateRandomBytesRequest req = new CloudkmsProjectsLocationsGenerateRandomBytesRequest("consequuntur") {{
                dollarXgafv = XgafvEnum.TWO;
                generateRandomBytesRequest = new GenerateRandomBytesRequest() {{
                    lengthBytes = 653108;
                    protectionLevel = GenerateRandomBytesRequestProtectionLevelEnum.HSM;
                }};;
                accessToken = "numquam";
                alt = AltEnum.MEDIA;
                callback = "quam";
                fields = "molestiae";
                key = "velit";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "quia";
                uploadType = "quis";
                uploadProtocol = "vitae";
            }};            

            CloudkmsProjectsLocationsGenerateRandomBytesResponse res = sdk.projects.cloudkmsProjectsLocationsGenerateRandomBytes(req, new CloudkmsProjectsLocationsGenerateRandomBytesSecurity() {{
                option1 = new CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption1("laborum", "animi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.generateRandomBytesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudkmsProjectsLocationsKeyRingsCreate

Create a new KeyRing in a given Project and Location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCreateRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCreateResponse;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCreateSecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCreateSecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsKeyRingsCreateRequest req = new CloudkmsProjectsLocationsKeyRingsCreateRequest("enim") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quo";
                alt = AltEnum.JSON;
                callback = "tenetur";
                fields = "ipsam";
                key = "id";
                keyRingId = "possimus";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "error";
                uploadProtocol = "temporibus";
            }};            

            CloudkmsProjectsLocationsKeyRingsCreateResponse res = sdk.projects.cloudkmsProjectsLocationsKeyRingsCreate(req, new CloudkmsProjectsLocationsKeyRingsCreateSecurity() {{
                option1 = new CloudkmsProjectsLocationsKeyRingsCreateSecurityOption1("laborum", "quasi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.keyRing != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysCreate

Create a new CryptoKey within a KeyRing. CryptoKey.purpose and CryptoKey.version_template.algorithm are required.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateResponse;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CertificateChains;
import org.openapis.openapi.models.shared.CryptoKeyInput;
import org.openapis.openapi.models.shared.CryptoKeyPurposeEnum;
import org.openapis.openapi.models.shared.CryptoKeyVersionInput;
import org.openapis.openapi.models.shared.CryptoKeyVersionStateEnum;
import org.openapis.openapi.models.shared.CryptoKeyVersionTemplate;
import org.openapis.openapi.models.shared.CryptoKeyVersionTemplateAlgorithmEnum;
import org.openapis.openapi.models.shared.CryptoKeyVersionTemplateProtectionLevelEnum;
import org.openapis.openapi.models.shared.ExternalProtectionLevelOptions;
import org.openapis.openapi.models.shared.KeyOperationAttestationInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateRequest req = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                cryptoKeyInput = new CryptoKeyInput() {{
                    cryptoKeyBackend = "vero";
                    destroyScheduledDuration = "nihil";
                    importOnly = false;
                    labels = new java.util.HashMap<String, String>() {{
                        put("voluptatibus", "ipsa");
                        put("omnis", "voluptate");
                        put("cum", "perferendis");
                    }};
                    nextRotationTime = "doloremque";
                    primary = new CryptoKeyVersionInput() {{
                        attestation = new KeyOperationAttestationInput() {{
                            certChains = new CertificateChains() {{
                                caviumCerts = new String[]{{
                                    add("ut"),
                                    add("maiores"),
                                }};
                                googleCardCerts = new String[]{{
                                    add("corporis"),
                                }};
                                googlePartitionCerts = new String[]{{
                                    add("iusto"),
                                    add("dicta"),
                                }};
                            }};;
                        }};;
                        externalProtectionLevelOptions = new ExternalProtectionLevelOptions() {{
                            ekmConnectionKeyPath = "harum";
                            externalKeyUri = "enim";
                        }};;
                        state = CryptoKeyVersionStateEnum.PENDING_EXTERNAL_DESTRUCTION;
                    }};;
                    purpose = CryptoKeyPurposeEnum.ASYMMETRIC_SIGN;
                    rotationPeriod = "repudiandae";
                    versionTemplate = new CryptoKeyVersionTemplate() {{
                        algorithm = CryptoKeyVersionTemplateAlgorithmEnum.GOOGLE_SYMMETRIC_ENCRYPTION;
                        protectionLevel = CryptoKeyVersionTemplateProtectionLevelEnum.SOFTWARE;
                    }};;
                }};;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "excepturi";
                cryptoKeyId = "pariatur";
                fields = "modi";
                key = "praesentium";
                oauthToken = "rem";
                prettyPrint = false;
                quotaUser = "voluptates";
                skipInitialVersionCreation = false;
                uploadType = "quasi";
                uploadProtocol = "repudiandae";
            }};            

            CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateResponse res = sdk.projects.cloudkmsProjectsLocationsKeyRingsCryptoKeysCreate(req, new CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurity() {{
                option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurityOption1("sint", "veritatis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.cryptoKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecrypt

Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_DECRYPT.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptResponse;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptSecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptSecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AsymmetricDecryptRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptRequest req = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptRequest("itaque") {{
                dollarXgafv = XgafvEnum.ONE;
                asymmetricDecryptRequest = new AsymmetricDecryptRequest() {{
                    ciphertext = "enim";
                    ciphertextCrc32c = "consequatur";
                }};;
                accessToken = "est";
                alt = AltEnum.PROTO;
                callback = "explicabo";
                fields = "deserunt";
                key = "distinctio";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "modi";
                uploadProtocol = "qui";
            }};            

            CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptResponse res = sdk.projects.cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecrypt(req, new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptSecurity() {{
                option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptSecurityOption1("aliquid", "cupiditate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.asymmetricDecryptResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSign

Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignResponse;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignSecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignSecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AsymmetricSignRequest;
import org.openapis.openapi.models.shared.Digest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignRequest req = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignRequest("quos") {{
                dollarXgafv = XgafvEnum.ONE;
                asymmetricSignRequest = new AsymmetricSignRequest() {{
                    data = "magni";
                    dataCrc32c = "assumenda";
                    digest = new Digest() {{
                        sha256 = "ipsam";
                        sha384 = "alias";
                        sha512 = "fugit";
                    }};;
                    digestCrc32c = "dolorum";
                }};;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "facilis";
                fields = "tempore";
                key = "labore";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "non";
                uploadProtocol = "eligendi";
            }};            

            CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignResponse res = sdk.projects.cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSign(req, new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignSecurity() {{
                option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignSecurityOption1("sint", "aliquid") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.asymmetricSignResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreate

Create a new CryptoKeyVersion in a CryptoKey. The server will assign the next sequential id. If unset, state will be set to ENABLED.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateResponse;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CertificateChains;
import org.openapis.openapi.models.shared.CryptoKeyVersionInput;
import org.openapis.openapi.models.shared.CryptoKeyVersionStateEnum;
import org.openapis.openapi.models.shared.ExternalProtectionLevelOptions;
import org.openapis.openapi.models.shared.KeyOperationAttestationInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateRequest req = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateRequest("provident") {{
                dollarXgafv = XgafvEnum.TWO;
                cryptoKeyVersionInput = new CryptoKeyVersionInput() {{
                    attestation = new KeyOperationAttestationInput() {{
                        certChains = new CertificateChains() {{
                            caviumCerts = new String[]{{
                                add("officia"),
                                add("dolor"),
                                add("debitis"),
                            }};
                            googleCardCerts = new String[]{{
                                add("dolorum"),
                                add("in"),
                                add("in"),
                                add("illum"),
                            }};
                            googlePartitionCerts = new String[]{{
                                add("rerum"),
                                add("dicta"),
                                add("magnam"),
                                add("cumque"),
                            }};
                        }};;
                    }};;
                    externalProtectionLevelOptions = new ExternalProtectionLevelOptions() {{
                        ekmConnectionKeyPath = "facere";
                        externalKeyUri = "ea";
                    }};;
                    state = CryptoKeyVersionStateEnum.DESTROYED;
                }};;
                accessToken = "laborum";
                alt = AltEnum.PROTO;
                callback = "non";
                fields = "occaecati";
                key = "enim";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "quidem";
                uploadProtocol = "provident";
            }};            

            CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateResponse res = sdk.projects.cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreate(req, new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurity() {{
                option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurityOption1("nam", "id") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.cryptoKeyVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroy

Schedule a CryptoKeyVersion for destruction. Upon calling this method, CryptoKeyVersion.state will be set to DESTROY_SCHEDULED, and destroy_time will be set to the time destroy_scheduled_duration in the future. At that time, the state will automatically change to DESTROYED, and the key material will be irrevocably destroyed. Before the destroy_time is reached, RestoreCryptoKeyVersion may be called to reverse the process.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyResponse;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyRequest req = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyRequest("blanditiis") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("amet", "deserunt");
                    put("nisi", "vel");
                    put("natus", "omnis");
                    put("molestiae", "perferendis");
                }};
                accessToken = "nihil";
                alt = AltEnum.JSON;
                callback = "distinctio";
                fields = "id";
                key = "labore";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "natus";
                uploadProtocol = "nobis";
            }};            

            CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyResponse res = sdk.projects.cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroy(req, new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurity() {{
                option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurityOption1("eum", "vero") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.cryptoKeyVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKey

Returns the public key for the given CryptoKeyVersion. The CryptoKey.purpose must be ASYMMETRIC_SIGN or ASYMMETRIC_DECRYPT.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeyRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeyResponse;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeySecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeySecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeyRequest req = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeyRequest("aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magnam";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "ullam";
                key = "provident";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "accusantium";
                uploadProtocol = "mollitia";
            }};            

            CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeyResponse res = sdk.projects.cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKey(req, new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeySecurity() {{
                option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeySecurityOption1("reiciendis", "mollitia") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.publicKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImport

Import wrapped key material into a CryptoKeyVersion. All requests must specify a CryptoKey. If a CryptoKeyVersion is additionally specified in the request, key material will be reimported into that version. Otherwise, a new version will be created, and will be assigned the next sequential id within the CryptoKey.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportResponse;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportSecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportSecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ImportCryptoKeyVersionRequest;
import org.openapis.openapi.models.shared.ImportCryptoKeyVersionRequestAlgorithmEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportRequest req = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportRequest("ad") {{
                dollarXgafv = XgafvEnum.ONE;
                importCryptoKeyVersionRequest = new ImportCryptoKeyVersionRequest() {{
                    algorithm = ImportCryptoKeyVersionRequestAlgorithmEnum.RSA_SIGN_PKCS12048_SHA256;
                    cryptoKeyVersion = "necessitatibus";
                    importJob = "odit";
                    rsaAesWrappedKey = "nemo";
                    wrappedKey = "quasi";
                }};;
                accessToken = "iure";
                alt = AltEnum.PROTO;
                callback = "debitis";
                fields = "eius";
                key = "maxime";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "in";
                uploadProtocol = "architecto";
            }};            

            CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportResponse res = sdk.projects.cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImport(req, new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportSecurity() {{
                option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportSecurityOption1("architecto", "repudiandae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.cryptoKeyVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsList

Lists CryptoKeyVersions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListResponse;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListSecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListSecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListSecurityOption2;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListRequest req = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListRequest("ullam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nihil";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "sed";
                filter = "saepe";
                key = "pariatur";
                oauthToken = "accusantium";
                orderBy = "consequuntur";
                pageSize = 508315L;
                pageToken = "natus";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "sunt";
                uploadProtocol = "quo";
                view = CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListViewEnum.FULL;
            }};            

            CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListResponse res = sdk.projects.cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsList(req, new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListSecurity() {{
                option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListSecurityOption1("pariatur", "maxime") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listCryptoKeyVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSign

Signs data using a CryptoKeyVersion with CryptoKey.purpose MAC, producing a tag that can be verified by another source with the same key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignResponse;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignSecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignSecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.MacSignRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignRequest req = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignRequest("ea") {{
                dollarXgafv = XgafvEnum.TWO;
                macSignRequest = new MacSignRequest() {{
                    data = "odit";
                    dataCrc32c = "ea";
                }};;
                accessToken = "accusantium";
                alt = AltEnum.JSON;
                callback = "maiores";
                fields = "quidem";
                key = "ipsam";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "autem";
                uploadType = "nam";
                uploadProtocol = "eaque";
            }};            

            CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignResponse res = sdk.projects.cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSign(req, new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignSecurity() {{
                option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignSecurityOption1("pariatur", "nemo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.macSignResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerify

Verifies MAC tag using a CryptoKeyVersion with CryptoKey.purpose MAC, and returns a response that indicates whether or not the verification was successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifyRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifyResponse;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifySecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifySecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.MacVerifyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifyRequest req = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifyRequest("voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                macVerifyRequest = new MacVerifyRequest() {{
                    data = "fugiat";
                    dataCrc32c = "amet";
                    mac = "aut";
                    macCrc32c = "cumque";
                }};;
                accessToken = "corporis";
                alt = AltEnum.PROTO;
                callback = "libero";
                fields = "nobis";
                key = "dolores";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "dignissimos";
                uploadProtocol = "eaque";
            }};            

            CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifyResponse res = sdk.projects.cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerify(req, new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifySecurity() {{
                option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifySecurityOption1("quis", "nesciunt") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.macVerifyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatch

Update a CryptoKeyVersion's metadata. state may be changed between ENABLED and DISABLED using this method. See DestroyCryptoKeyVersion and RestoreCryptoKeyVersion to move between other states.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchResponse;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CertificateChains;
import org.openapis.openapi.models.shared.CryptoKeyVersionInput;
import org.openapis.openapi.models.shared.CryptoKeyVersionStateEnum;
import org.openapis.openapi.models.shared.ExternalProtectionLevelOptions;
import org.openapis.openapi.models.shared.KeyOperationAttestationInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchRequest req = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchRequest("eos") {{
                dollarXgafv = XgafvEnum.ONE;
                cryptoKeyVersionInput = new CryptoKeyVersionInput() {{
                    attestation = new KeyOperationAttestationInput() {{
                        certChains = new CertificateChains() {{
                            caviumCerts = new String[]{{
                                add("minus"),
                            }};
                            googleCardCerts = new String[]{{
                                add("dolor"),
                                add("vero"),
                            }};
                            googlePartitionCerts = new String[]{{
                                add("hic"),
                                add("recusandae"),
                            }};
                        }};;
                    }};;
                    externalProtectionLevelOptions = new ExternalProtectionLevelOptions() {{
                        ekmConnectionKeyPath = "omnis";
                        externalKeyUri = "facilis";
                    }};;
                    state = CryptoKeyVersionStateEnum.PENDING_IMPORT;
                }};;
                accessToken = "voluptatem";
                alt = AltEnum.PROTO;
                callback = "consequuntur";
                fields = "blanditiis";
                key = "error";
                oauthToken = "eaque";
                prettyPrint = false;
                quotaUser = "occaecati";
                updateMask = "rerum";
                uploadType = "adipisci";
                uploadProtocol = "asperiores";
            }};            

            CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchResponse res = sdk.projects.cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatch(req, new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurity() {{
                option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurityOption1("earum", "modi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.cryptoKeyVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestore

Restore a CryptoKeyVersion in the DESTROY_SCHEDULED state. Upon restoration of the CryptoKeyVersion, state will be set to DISABLED, and destroy_time will be cleared.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreResponse;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreSecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreSecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreRequest req = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreRequest("iste") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("pariatur", "provident");
                    put("nobis", "libero");
                    put("delectus", "quaerat");
                }};
                accessToken = "quos";
                alt = AltEnum.MEDIA;
                callback = "dolorem";
                fields = "dolorem";
                key = "dolor";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "hic";
                uploadProtocol = "excepturi";
            }};            

            CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreResponse res = sdk.projects.cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestore(req, new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreSecurity() {{
                option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreSecurityOption1("cum", "voluptate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.cryptoKeyVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysDecrypt

Decrypts data that was protected by Encrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptResponse;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DecryptRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptRequest req = new CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptRequest("dignissimos") {{
                dollarXgafv = XgafvEnum.TWO;
                decryptRequest = new DecryptRequest() {{
                    additionalAuthenticatedData = "amet";
                    additionalAuthenticatedDataCrc32c = "dolorum";
                    ciphertext = "numquam";
                    ciphertextCrc32c = "veritatis";
                }};;
                accessToken = "ipsa";
                alt = AltEnum.JSON;
                callback = "iure";
                fields = "odio";
                key = "quaerat";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "voluptatibus";
                uploadProtocol = "voluptas";
            }};            

            CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptResponse res = sdk.projects.cloudkmsProjectsLocationsKeyRingsCryptoKeysDecrypt(req, new CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurity() {{
                option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurityOption1("natus", "eos") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.decryptResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysEncrypt

Encrypts data, so that it can only be recovered by a call to Decrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptResponse;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptSecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptSecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EncryptRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptRequest req = new CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptRequest("atque") {{
                dollarXgafv = XgafvEnum.ONE;
                encryptRequest = new EncryptRequest() {{
                    additionalAuthenticatedData = "fugiat";
                    additionalAuthenticatedDataCrc32c = "ab";
                    plaintext = "soluta";
                    plaintextCrc32c = "dolorum";
                }};;
                accessToken = "iusto";
                alt = AltEnum.MEDIA;
                callback = "dolorum";
                fields = "deleniti";
                key = "omnis";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "asperiores";
                uploadProtocol = "nihil";
            }};            

            CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptResponse res = sdk.projects.cloudkmsProjectsLocationsKeyRingsCryptoKeysEncrypt(req, new CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptSecurity() {{
                option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptSecurityOption1("ipsum", "voluptate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.encryptResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysList

Lists CryptoKeys.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysListRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysListResponse;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption2;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysListVersionViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsKeyRingsCryptoKeysListRequest req = new CloudkmsProjectsLocationsKeyRingsCryptoKeysListRequest("id") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eius";
                alt = AltEnum.JSON;
                callback = "perferendis";
                fields = "amet";
                filter = "optio";
                key = "accusamus";
                oauthToken = "ad";
                orderBy = "saepe";
                pageSize = 383464L;
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "minima";
                uploadProtocol = "repellendus";
                versionView = CloudkmsProjectsLocationsKeyRingsCryptoKeysListVersionViewEnum.FULL;
            }};            

            CloudkmsProjectsLocationsKeyRingsCryptoKeysListResponse res = sdk.projects.cloudkmsProjectsLocationsKeyRingsCryptoKeysList(req, new CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurity() {{
                option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption1("similique", "alias") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listCryptoKeysResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersion

Update the version of a CryptoKey that will be used in Encrypt. Returns an error if called on a key whose purpose is not ENCRYPT_DECRYPT.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionResponse;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UpdateCryptoKeyPrimaryVersionRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionRequest req = new CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionRequest("at") {{
                dollarXgafv = XgafvEnum.ONE;
                updateCryptoKeyPrimaryVersionRequest = new UpdateCryptoKeyPrimaryVersionRequest() {{
                    cryptoKeyVersionId = "tempora";
                }};;
                accessToken = "vel";
                alt = AltEnum.PROTO;
                callback = "officiis";
                fields = "qui";
                key = "dolorum";
                oauthToken = "a";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "harum";
                uploadProtocol = "iusto";
            }};            

            CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionResponse res = sdk.projects.cloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersion(req, new CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurity() {{
                option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurityOption1("ipsum", "quisquam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.cryptoKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudkmsProjectsLocationsKeyRingsImportJobsCreate

Create a new ImportJob within a KeyRing. ImportJob.import_method is required.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsImportJobsCreateRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsImportJobsCreateResponse;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CertificateChains;
import org.openapis.openapi.models.shared.ImportJobImportMethodEnum;
import org.openapis.openapi.models.shared.ImportJobInput;
import org.openapis.openapi.models.shared.ImportJobProtectionLevelEnum;
import org.openapis.openapi.models.shared.KeyOperationAttestationInput;
import org.openapis.openapi.models.shared.WrappingPublicKey;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsKeyRingsImportJobsCreateRequest req = new CloudkmsProjectsLocationsKeyRingsImportJobsCreateRequest("tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                importJobInput = new ImportJobInput() {{
                    attestation = new KeyOperationAttestationInput() {{
                        certChains = new CertificateChains() {{
                            caviumCerts = new String[]{{
                                add("accusamus"),
                                add("numquam"),
                                add("enim"),
                            }};
                            googleCardCerts = new String[]{{
                                add("sapiente"),
                            }};
                            googlePartitionCerts = new String[]{{
                                add("nihil"),
                                add("sit"),
                                add("expedita"),
                            }};
                        }};;
                    }};;
                    importMethod = ImportJobImportMethodEnum.RSA_OAEP3072_SHA1_AES256;
                    protectionLevel = ImportJobProtectionLevelEnum.PROTECTION_LEVEL_UNSPECIFIED;
                    publicKey = new WrappingPublicKey() {{
                        pem = "vel";
                    }};;
                }};;
                accessToken = "libero";
                alt = AltEnum.MEDIA;
                callback = "deserunt";
                fields = "quam";
                importJobId = "ipsum";
                key = "incidunt";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "cupiditate";
                uploadType = "maxime";
                uploadProtocol = "pariatur";
            }};            

            CloudkmsProjectsLocationsKeyRingsImportJobsCreateResponse res = sdk.projects.cloudkmsProjectsLocationsKeyRingsImportJobsCreate(req, new CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurity() {{
                option1 = new CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurityOption1("soluta", "dicta") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.importJob != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudkmsProjectsLocationsKeyRingsImportJobsGet

Returns metadata for a given ImportJob.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetResponse;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsKeyRingsImportJobsGetRequest req = new CloudkmsProjectsLocationsKeyRingsImportJobsGetRequest("laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "incidunt";
                alt = AltEnum.JSON;
                callback = "dolores";
                fields = "distinctio";
                key = "facilis";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "quam";
                uploadType = "molestias";
                uploadProtocol = "temporibus";
            }};            

            CloudkmsProjectsLocationsKeyRingsImportJobsGetResponse res = sdk.projects.cloudkmsProjectsLocationsKeyRingsImportJobsGet(req, new CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurity() {{
                option1 = new CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurityOption1("qui", "neque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.importJob != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyRequest req = new CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyRequest("fugit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "odio";
                alt = AltEnum.JSON;
                callback = "ullam";
                fields = "nam";
                key = "hic";
                oauthToken = "voluptatem";
                optionsRequestedPolicyVersion = 765326L;
                prettyPrint = false;
                quotaUser = "soluta";
                uploadType = "nobis";
                uploadProtocol = "et";
            }};            

            CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyResponse res = sdk.projects.cloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicy(req, new CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurity() {{
                option1 = new CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurityOption1("saepe", "ipsum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudkmsProjectsLocationsKeyRingsImportJobsList

Lists ImportJobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsImportJobsListRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsImportJobsListResponse;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsImportJobsListSecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsImportJobsListSecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsImportJobsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsKeyRingsImportJobsListRequest req = new CloudkmsProjectsLocationsKeyRingsImportJobsListRequest("veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quos";
                alt = AltEnum.PROTO;
                callback = "cupiditate";
                fields = "aperiam";
                filter = "delectus";
                key = "dolorem";
                oauthToken = "dolore";
                orderBy = "labore";
                pageSize = 240829L;
                pageToken = "dolorum";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "quae";
                uploadProtocol = "aut";
            }};            

            CloudkmsProjectsLocationsKeyRingsImportJobsListResponse res = sdk.projects.cloudkmsProjectsLocationsKeyRingsImportJobsList(req, new CloudkmsProjectsLocationsKeyRingsImportJobsListSecurity() {{
                option1 = new CloudkmsProjectsLocationsKeyRingsImportJobsListSecurityOption1("quas", "itaque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listImportJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.SetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyRequest req = new CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyRequest("consequatur") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ut"),
                                            add("facilis"),
                                            add("cupiditate"),
                                            add("qui"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("odio"),
                                            add("occaecati"),
                                            add("voluptatibus"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("omnis"),
                                            add("quis"),
                                            add("ipsum"),
                                            add("delectus"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("vero"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "dignissimos";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quod"),
                                            add("odio"),
                                            add("similique"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ducimus"),
                                            add("dolore"),
                                            add("quibusdam"),
                                            add("illum"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("impedit"),
                                            add("aut"),
                                            add("voluptatibus"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("fugit"),
                                            add("porro"),
                                            add("maiores"),
                                            add("doloribus"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "eligendi";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("officia"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ea"),
                                            add("aspernatur"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "possimus";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ex"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dolor"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "quasi";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "nulla";
                                    expression = "excepturi";
                                    location = "voluptatibus";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("quisquam"),
                                    add("saepe"),
                                    add("ea"),
                                    add("impedit"),
                                }};
                                role = "corporis";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "veniam";
                                    expression = "aliquid";
                                    location = "inventore";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("quo"),
                                    add("consectetur"),
                                }};
                                role = "recusandae";
                            }}),
                        }};
                        etag = "aspernatur";
                        version = 325310;
                    }};;
                    updateMask = "eaque";
                }};;
                accessToken = "a";
                alt = AltEnum.PROTO;
                callback = "aut";
                fields = "aut";
                key = "deleniti";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "aliquam";
                uploadType = "fugit";
                uploadProtocol = "accusamus";
            }};            

            CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyResponse res = sdk.projects.cloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicy(req, new CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurity() {{
                option1 = new CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurityOption1("inventore", "non") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsRequest req = new CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsRequest("et") {{
                dollarXgafv = XgafvEnum.TWO;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("placeat"),
                        add("velit"),
                        add("eum"),
                    }};
                }};;
                accessToken = "autem";
                alt = AltEnum.PROTO;
                callback = "quas";
                fields = "assumenda";
                key = "nulla";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "libero";
                uploadType = "quasi";
                uploadProtocol = "tempora";
            }};            

            CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsResponse res = sdk.projects.cloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissions(req, new CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurity() {{
                option1 = new CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurityOption1("numquam", "explicabo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## cloudkmsProjectsLocationsKeyRingsList

Lists KeyRings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsListRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsListResponse;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsListSecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsListSecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsKeyRingsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsKeyRingsListRequest req = new CloudkmsProjectsLocationsKeyRingsListRequest("provident") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "odio";
                fields = "eius";
                filter = "esse";
                key = "esse";
                oauthToken = "rem";
                orderBy = "fuga";
                pageSize = 442015L;
                pageToken = "quidem";
                prettyPrint = false;
                quotaUser = "fugiat";
                uploadType = "ut";
                uploadProtocol = "eum";
            }};            

            CloudkmsProjectsLocationsKeyRingsListResponse res = sdk.projects.cloudkmsProjectsLocationsKeyRingsList(req, new CloudkmsProjectsLocationsKeyRingsListSecurity() {{
                option1 = new CloudkmsProjectsLocationsKeyRingsListSecurityOption1("suscipit", "assumenda") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listKeyRingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudkmsProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsListSecurity;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsListSecurityOption1;
import org.openapis.openapi.models.operations.CloudkmsProjectsLocationsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudkmsProjectsLocationsListRequest req = new CloudkmsProjectsLocationsListRequest("eos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quisquam";
                alt = AltEnum.JSON;
                callback = "ipsa";
                fields = "id";
                filter = "quidem";
                key = "neque";
                oauthToken = "quo";
                pageSize = 847276L;
                pageToken = "quo";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "eius";
                uploadProtocol = "eos";
            }};            

            CloudkmsProjectsLocationsListResponse res = sdk.projects.cloudkmsProjectsLocationsList(req, new CloudkmsProjectsLocationsListSecurity() {{
                option1 = new CloudkmsProjectsLocationsListSecurityOption1("voluptas", "ab") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
