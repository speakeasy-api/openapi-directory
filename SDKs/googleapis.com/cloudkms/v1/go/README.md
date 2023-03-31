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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CloudkmsProjectsLocationsEkmConnectionsCreateRequest{
        DollarXgafv: "2",
        EkmConnectionInput: &shared.EkmConnectionInput{
            CryptoSpacePath: "provident",
            Etag: "distinctio",
            KeyManagementMode: "CLOUD_KMS",
            ServiceResolvers: []shared.ServiceResolverInput{
                shared.ServiceResolverInput{
                    EndpointFilter: "nulla",
                    Hostname: "moral-star.info",
                    ServerCertificates: []shared.CertificateInput{
                        shared.CertificateInput{
                            RawDer: "deserunt",
                        },
                        shared.CertificateInput{
                            RawDer: "suscipit",
                        },
                        shared.CertificateInput{
                            RawDer: "iure",
                        },
                    },
                    ServiceDirectoryService: "magnam",
                },
                shared.ServiceResolverInput{
                    EndpointFilter: "debitis",
                    Hostname: "awesome-voter.biz",
                    ServerCertificates: []shared.CertificateInput{
                        shared.CertificateInput{
                            RawDer: "molestiae",
                        },
                        shared.CertificateInput{
                            RawDer: "minus",
                        },
                    },
                    ServiceDirectoryService: "placeat",
                },
                shared.ServiceResolverInput{
                    EndpointFilter: "voluptatum",
                    Hostname: "lawful-missionary.info",
                    ServerCertificates: []shared.CertificateInput{
                        shared.CertificateInput{
                            RawDer: "temporibus",
                        },
                        shared.CertificateInput{
                            RawDer: "ab",
                        },
                        shared.CertificateInput{
                            RawDer: "quis",
                        },
                        shared.CertificateInput{
                            RawDer: "veritatis",
                        },
                    },
                    ServiceDirectoryService: "deserunt",
                },
            },
        },
        AccessToken: "perferendis",
        Alt: "media",
        Callback: "repellendus",
        EkmConnectionID: "sapiente",
        Fields: "quo",
        Key: "odit",
        OauthToken: "at",
        Parent: "at",
        PrettyPrint: false,
        QuotaUser: "maiores",
        UploadType: "molestiae",
        UploadProtocol: "quod",
    }

    ctx := context.Background()
    res, err := s.Projects.CloudkmsProjectsLocationsEkmConnectionsCreate(ctx, req, operations.CloudkmsProjectsLocationsEkmConnectionsCreateSecurity{
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


### Projects

* `CloudkmsProjectsLocationsEkmConnectionsCreate` - Creates a new EkmConnection in a given Project and Location.
* `CloudkmsProjectsLocationsEkmConnectionsList` - Lists EkmConnections.
* `CloudkmsProjectsLocationsGenerateRandomBytes` - Generate random bytes using the Cloud KMS randomness source in the provided location.
* `CloudkmsProjectsLocationsKeyRingsCreate` - Create a new KeyRing in a given Project and Location.
* `CloudkmsProjectsLocationsKeyRingsCryptoKeysCreate` - Create a new CryptoKey within a KeyRing. CryptoKey.purpose and CryptoKey.version_template.algorithm are required.
* `CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecrypt` - Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_DECRYPT.
* `CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSign` - Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey.
* `CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreate` - Create a new CryptoKeyVersion in a CryptoKey. The server will assign the next sequential id. If unset, state will be set to ENABLED.
* `CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroy` - Schedule a CryptoKeyVersion for destruction. Upon calling this method, CryptoKeyVersion.state will be set to DESTROY_SCHEDULED, and destroy_time will be set to the time destroy_scheduled_duration in the future. At that time, the state will automatically change to DESTROYED, and the key material will be irrevocably destroyed. Before the destroy_time is reached, RestoreCryptoKeyVersion may be called to reverse the process.
* `CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKey` - Returns the public key for the given CryptoKeyVersion. The CryptoKey.purpose must be ASYMMETRIC_SIGN or ASYMMETRIC_DECRYPT.
* `CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImport` - Import wrapped key material into a CryptoKeyVersion. All requests must specify a CryptoKey. If a CryptoKeyVersion is additionally specified in the request, key material will be reimported into that version. Otherwise, a new version will be created, and will be assigned the next sequential id within the CryptoKey.
* `CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsList` - Lists CryptoKeyVersions.
* `CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSign` - Signs data using a CryptoKeyVersion with CryptoKey.purpose MAC, producing a tag that can be verified by another source with the same key.
* `CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerify` - Verifies MAC tag using a CryptoKeyVersion with CryptoKey.purpose MAC, and returns a response that indicates whether or not the verification was successful.
* `CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatch` - Update a CryptoKeyVersion's metadata. state may be changed between ENABLED and DISABLED using this method. See DestroyCryptoKeyVersion and RestoreCryptoKeyVersion to move between other states.
* `CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestore` - Restore a CryptoKeyVersion in the DESTROY_SCHEDULED state. Upon restoration of the CryptoKeyVersion, state will be set to DISABLED, and destroy_time will be cleared.
* `CloudkmsProjectsLocationsKeyRingsCryptoKeysDecrypt` - Decrypts data that was protected by Encrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
* `CloudkmsProjectsLocationsKeyRingsCryptoKeysEncrypt` - Encrypts data, so that it can only be recovered by a call to Decrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
* `CloudkmsProjectsLocationsKeyRingsCryptoKeysList` - Lists CryptoKeys.
* `CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersion` - Update the version of a CryptoKey that will be used in Encrypt. Returns an error if called on a key whose purpose is not ENCRYPT_DECRYPT.
* `CloudkmsProjectsLocationsKeyRingsImportJobsCreate` - Create a new ImportJob within a KeyRing. ImportJob.import_method is required.
* `CloudkmsProjectsLocationsKeyRingsImportJobsGet` - Returns metadata for a given ImportJob.
* `CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `CloudkmsProjectsLocationsKeyRingsImportJobsList` - Lists ImportJobs.
* `CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `CloudkmsProjectsLocationsKeyRingsList` - Lists KeyRings.
* `CloudkmsProjectsLocationsList` - Lists information about the supported locations for this service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
