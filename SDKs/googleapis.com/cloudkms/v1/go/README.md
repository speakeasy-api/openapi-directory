# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudkms/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.CloudkmsProjectsLocationsEkmConnectionsCreate(ctx, operations.CloudkmsProjectsLocationsEkmConnectionsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EkmConnectionInput: &shared.EkmConnectionInput{
            CryptoSpacePath: sdk.String("provident"),
            Etag: sdk.String("distinctio"),
            KeyManagementMode: shared.EkmConnectionKeyManagementModeEnumCloudKms.ToPointer(),
            ServiceResolvers: []shared.ServiceResolverInput{
                shared.ServiceResolverInput{
                    EndpointFilter: sdk.String("nulla"),
                    Hostname: sdk.String("moral-star.info"),
                    ServerCertificates: []shared.CertificateInput{
                        shared.CertificateInput{
                            RawDer: sdk.String("deserunt"),
                        },
                        shared.CertificateInput{
                            RawDer: sdk.String("suscipit"),
                        },
                        shared.CertificateInput{
                            RawDer: sdk.String("iure"),
                        },
                    },
                    ServiceDirectoryService: sdk.String("magnam"),
                },
                shared.ServiceResolverInput{
                    EndpointFilter: sdk.String("debitis"),
                    Hostname: sdk.String("awesome-voter.biz"),
                    ServerCertificates: []shared.CertificateInput{
                        shared.CertificateInput{
                            RawDer: sdk.String("molestiae"),
                        },
                        shared.CertificateInput{
                            RawDer: sdk.String("minus"),
                        },
                    },
                    ServiceDirectoryService: sdk.String("placeat"),
                },
                shared.ServiceResolverInput{
                    EndpointFilter: sdk.String("voluptatum"),
                    Hostname: sdk.String("lawful-missionary.info"),
                    ServerCertificates: []shared.CertificateInput{
                        shared.CertificateInput{
                            RawDer: sdk.String("temporibus"),
                        },
                        shared.CertificateInput{
                            RawDer: sdk.String("ab"),
                        },
                        shared.CertificateInput{
                            RawDer: sdk.String("quis"),
                        },
                        shared.CertificateInput{
                            RawDer: sdk.String("veritatis"),
                        },
                    },
                    ServiceDirectoryService: sdk.String("deserunt"),
                },
            },
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repellendus"),
        EkmConnectionID: sdk.String("sapiente"),
        Fields: sdk.String("quo"),
        Key: sdk.String("odit"),
        OauthToken: sdk.String("at"),
        Parent: "at",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("quod"),
    }, operations.CloudkmsProjectsLocationsEkmConnectionsCreateSecurity{
        Option1: &operations.CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EkmConnection != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [CloudkmsProjectsLocationsEkmConnectionsCreate](docs/projects/README.md#cloudkmsprojectslocationsekmconnectionscreate) - Creates a new EkmConnection in a given Project and Location.
* [CloudkmsProjectsLocationsEkmConnectionsList](docs/projects/README.md#cloudkmsprojectslocationsekmconnectionslist) - Lists EkmConnections.
* [CloudkmsProjectsLocationsEkmConnectionsVerifyConnectivity](docs/projects/README.md#cloudkmsprojectslocationsekmconnectionsverifyconnectivity) - Verifies that Cloud KMS can successfully connect to the external key manager specified by an EkmConnection. If there is an error connecting to the EKM, this method returns a FAILED_PRECONDITION status containing structured information as described at https://cloud.google.com/kms/docs/reference/ekm_errors.
* [CloudkmsProjectsLocationsGenerateRandomBytes](docs/projects/README.md#cloudkmsprojectslocationsgeneraterandombytes) - Generate random bytes using the Cloud KMS randomness source in the provided location.
* [CloudkmsProjectsLocationsKeyRingsCreate](docs/projects/README.md#cloudkmsprojectslocationskeyringscreate) - Create a new KeyRing in a given Project and Location.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysCreate](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeyscreate) - Create a new CryptoKey within a KeyRing. CryptoKey.purpose and CryptoKey.version_template.algorithm are required.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecrypt](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsasymmetricdecrypt) - Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_DECRYPT.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSign](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsasymmetricsign) - Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreate](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionscreate) - Create a new CryptoKeyVersion in a CryptoKey. The server will assign the next sequential id. If unset, state will be set to ENABLED.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroy](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsdestroy) - Schedule a CryptoKeyVersion for destruction. Upon calling this method, CryptoKeyVersion.state will be set to DESTROY_SCHEDULED, and destroy_time will be set to the time destroy_scheduled_duration in the future. At that time, the state will automatically change to DESTROYED, and the key material will be irrevocably destroyed. Before the destroy_time is reached, RestoreCryptoKeyVersion may be called to reverse the process.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKey](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsgetpublickey) - Returns the public key for the given CryptoKeyVersion. The CryptoKey.purpose must be ASYMMETRIC_SIGN or ASYMMETRIC_DECRYPT.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImport](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsimport) - Import wrapped key material into a CryptoKeyVersion. All requests must specify a CryptoKey. If a CryptoKeyVersion is additionally specified in the request, key material will be reimported into that version. Otherwise, a new version will be created, and will be assigned the next sequential id within the CryptoKey.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsList](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionslist) - Lists CryptoKeyVersions.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSign](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsmacsign) - Signs data using a CryptoKeyVersion with CryptoKey.purpose MAC, producing a tag that can be verified by another source with the same key.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerify](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsmacverify) - Verifies MAC tag using a CryptoKeyVersion with CryptoKey.purpose MAC, and returns a response that indicates whether or not the verification was successful.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatch](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionspatch) - Update a CryptoKeyVersion's metadata. state may be changed between ENABLED and DISABLED using this method. See DestroyCryptoKeyVersion and RestoreCryptoKeyVersion to move between other states.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestore](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsrestore) - Restore a CryptoKeyVersion in the DESTROY_SCHEDULED state. Upon restoration of the CryptoKeyVersion, state will be set to DISABLED, and destroy_time will be cleared.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysDecrypt](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeysdecrypt) - Decrypts data that was protected by Encrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysEncrypt](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeysencrypt) - Encrypts data, so that it can only be recovered by a call to Decrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysList](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeyslist) - Lists CryptoKeys.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersion](docs/projects/README.md#cloudkmsprojectslocationskeyringscryptokeysupdateprimaryversion) - Update the version of a CryptoKey that will be used in Encrypt. Returns an error if called on a key whose purpose is not ENCRYPT_DECRYPT.
* [CloudkmsProjectsLocationsKeyRingsImportJobsCreate](docs/projects/README.md#cloudkmsprojectslocationskeyringsimportjobscreate) - Create a new ImportJob within a KeyRing. ImportJob.import_method is required.
* [CloudkmsProjectsLocationsKeyRingsImportJobsGet](docs/projects/README.md#cloudkmsprojectslocationskeyringsimportjobsget) - Returns metadata for a given ImportJob.
* [CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicy](docs/projects/README.md#cloudkmsprojectslocationskeyringsimportjobsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [CloudkmsProjectsLocationsKeyRingsImportJobsList](docs/projects/README.md#cloudkmsprojectslocationskeyringsimportjobslist) - Lists ImportJobs.
* [CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicy](docs/projects/README.md#cloudkmsprojectslocationskeyringsimportjobssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissions](docs/projects/README.md#cloudkmsprojectslocationskeyringsimportjobstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [CloudkmsProjectsLocationsKeyRingsList](docs/projects/README.md#cloudkmsprojectslocationskeyringslist) - Lists KeyRings.
* [CloudkmsProjectsLocationsList](docs/projects/README.md#cloudkmsprojectslocationslist) - Lists information about the supported locations for this service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
