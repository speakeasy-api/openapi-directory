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

            CloudkmsProjectsLocationsEkmConnectionsCreateRequest req = new CloudkmsProjectsLocationsEkmConnectionsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                ekmConnectionInput = new EkmConnectionInput() {{
                    cryptoSpacePath = "distinctio";
                    etag = "quibusdam";
                    keyManagementMode = EkmConnectionKeyManagementModeEnum.MANUAL;
                    serviceResolvers = new org.openapis.openapi.models.shared.ServiceResolverInput[]{{
                        add(new ServiceResolverInput() {{
                            endpointFilter = "corrupti";
                            hostname = "that-hellcat.name";
                            serverCertificates = new org.openapis.openapi.models.shared.CertificateInput[]{{
                                add(new CertificateInput() {{
                                    rawDer = "suscipit";
                                }}),
                                add(new CertificateInput() {{
                                    rawDer = "iure";
                                }}),
                                add(new CertificateInput() {{
                                    rawDer = "magnam";
                                }}),
                            }};
                            serviceDirectoryService = "debitis";
                        }}),
                        add(new ServiceResolverInput() {{
                            endpointFilter = "ipsa";
                            hostname = "whirlwind-diver.info";
                            serverCertificates = new org.openapis.openapi.models.shared.CertificateInput[]{{
                                add(new CertificateInput() {{
                                    rawDer = "minus";
                                }}),
                                add(new CertificateInput() {{
                                    rawDer = "placeat";
                                }}),
                            }};
                            serviceDirectoryService = "voluptatum";
                        }}),
                        add(new ServiceResolverInput() {{
                            endpointFilter = "iusto";
                            hostname = "nice-gorilla.org";
                            serverCertificates = new org.openapis.openapi.models.shared.CertificateInput[]{{
                                add(new CertificateInput() {{
                                    rawDer = "ab";
                                }}),
                                add(new CertificateInput() {{
                                    rawDer = "quis";
                                }}),
                                add(new CertificateInput() {{
                                    rawDer = "veritatis";
                                }}),
                                add(new CertificateInput() {{
                                    rawDer = "deserunt";
                                }}),
                            }};
                            serviceDirectoryService = "perferendis";
                        }}),
                        add(new ServiceResolverInput() {{
                            endpointFilter = "ipsam";
                            hostname = "sympathetic-viewer.net";
                            serverCertificates = new org.openapis.openapi.models.shared.CertificateInput[]{{
                                add(new CertificateInput() {{
                                    rawDer = "at";
                                }}),
                            }};
                            serviceDirectoryService = "at";
                        }}),
                    }};
                }};;
                accessToken = "maiores";
                alt = AltEnum.MEDIA;
                callback = "quod";
                ekmConnectionId = "quod";
                fields = "esse";
                key = "totam";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "dicta";
                uploadProtocol = "nam";
            }};            

            CloudkmsProjectsLocationsEkmConnectionsCreateResponse res = sdk.projects.cloudkmsProjectsLocationsEkmConnectionsCreate(req, new CloudkmsProjectsLocationsEkmConnectionsCreateSecurity() {{
                option1 = new CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1("officia", "occaecati") {{
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [cloudkmsProjectsLocationsEkmConnectionsCreate](docs/projects/README.md#cloudkmsprojectslocationsekmconnectionscreate) - Creates a new EkmConnection in a given Project and Location.
* [cloudkmsProjectsLocationsEkmConnectionsList](docs/projects/README.md#cloudkmsprojectslocationsekmconnectionslist) - Lists EkmConnections.
* [cloudkmsProjectsLocationsEkmConnectionsVerifyConnectivity](docs/projects/README.md#cloudkmsprojectslocationsekmconnectionsverifyconnectivity) - Verifies that Cloud KMS can successfully connect to the external key manager specified by an EkmConnection. If there is an error connecting to the EKM, this method returns a FAILED_PRECONDITION status containing structured information as described at https://cloud.google.com/kms/docs/reference/ekm_errors.
* [cloudkmsProjectsLocationsGenerateRandomBytes](docs/projects/README.md#cloudkmsprojectslocationsgeneraterandombytes) - Generate random bytes using the Cloud KMS randomness source in the provided location.
* [cloudkmsProjectsLocationsKeyRingsCreate](docs/projects/README.md#cloudkmsprojectslocationskeyringscreate) - Create a new KeyRing in a given Project and Location.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCreate](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeyscreate) - Create a new CryptoKey within a KeyRing. CryptoKey.purpose and CryptoKey.version_template.algorithm are required.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecrypt](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsasymmetricdecrypt) - Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_DECRYPT.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSign](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsasymmetricsign) - Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreate](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionscreate) - Create a new CryptoKeyVersion in a CryptoKey. The server will assign the next sequential id. If unset, state will be set to ENABLED.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroy](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsdestroy) - Schedule a CryptoKeyVersion for destruction. Upon calling this method, CryptoKeyVersion.state will be set to DESTROY_SCHEDULED, and destroy_time will be set to the time destroy_scheduled_duration in the future. At that time, the state will automatically change to DESTROYED, and the key material will be irrevocably destroyed. Before the destroy_time is reached, RestoreCryptoKeyVersion may be called to reverse the process.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKey](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsgetpublickey) - Returns the public key for the given CryptoKeyVersion. The CryptoKey.purpose must be ASYMMETRIC_SIGN or ASYMMETRIC_DECRYPT.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImport](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsimport) - Import wrapped key material into a CryptoKeyVersion. All requests must specify a CryptoKey. If a CryptoKeyVersion is additionally specified in the request, key material will be reimported into that version. Otherwise, a new version will be created, and will be assigned the next sequential id within the CryptoKey.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsList](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionslist) - Lists CryptoKeyVersions.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSign](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsmacsign) - Signs data using a CryptoKeyVersion with CryptoKey.purpose MAC, producing a tag that can be verified by another source with the same key.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerify](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsmacverify) - Verifies MAC tag using a CryptoKeyVersion with CryptoKey.purpose MAC, and returns a response that indicates whether or not the verification was successful.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatch](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionspatch) - Update a CryptoKeyVersion's metadata. state may be changed between ENABLED and DISABLED using this method. See DestroyCryptoKeyVersion and RestoreCryptoKeyVersion to move between other states.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestore](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsrestore) - Restore a CryptoKeyVersion in the DESTROY_SCHEDULED state. Upon restoration of the CryptoKeyVersion, state will be set to DISABLED, and destroy_time will be cleared.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysDecrypt](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeysdecrypt) - Decrypts data that was protected by Encrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysEncrypt](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeysencrypt) - Encrypts data, so that it can only be recovered by a call to Decrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysList](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeyslist) - Lists CryptoKeys.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersion](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeysupdateprimaryversion) - Update the version of a CryptoKey that will be used in Encrypt. Returns an error if called on a key whose purpose is not ENCRYPT_DECRYPT.
* [cloudkmsProjectsLocationsKeyRingsImportJobsCreate](docs/projects/README.md#cloudkmsprojectslocationskeyringsimportjobscreate) - Create a new ImportJob within a KeyRing. ImportJob.import_method is required.
* [cloudkmsProjectsLocationsKeyRingsImportJobsGet](docs/projects/README.md#cloudkmsprojectslocationskeyringsimportjobsget) - Returns metadata for a given ImportJob.
* [cloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicy](docs/projects/README.md#cloudkmsprojectslocationskeyringsimportjobsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [cloudkmsProjectsLocationsKeyRingsImportJobsList](docs/projects/README.md#cloudkmsprojectslocationskeyringsimportjobslist) - Lists ImportJobs.
* [cloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicy](docs/projects/README.md#cloudkmsprojectslocationskeyringsimportjobssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [cloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissions](docs/projects/README.md#cloudkmsprojectslocationskeyringsimportjobstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [cloudkmsProjectsLocationsKeyRingsList](docs/projects/README.md#cloudkmsprojectslocationskeyringslist) - Lists KeyRings.
* [cloudkmsProjectsLocationsList](docs/projects/README.md#cloudkmsprojectslocationslist) - Lists information about the supported locations for this service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
