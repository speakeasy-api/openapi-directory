# Projects

### Available Operations

* [CloudkmsProjectsLocationsEkmConnectionsCreate](#cloudkmsprojectslocationsekmconnectionscreate) - Creates a new EkmConnection in a given Project and Location.
* [CloudkmsProjectsLocationsEkmConnectionsList](#cloudkmsprojectslocationsekmconnectionslist) - Lists EkmConnections.
* [CloudkmsProjectsLocationsEkmConnectionsVerifyConnectivity](#cloudkmsprojectslocationsekmconnectionsverifyconnectivity) - Verifies that Cloud KMS can successfully connect to the external key manager specified by an EkmConnection. If there is an error connecting to the EKM, this method returns a FAILED_PRECONDITION status containing structured information as described at https://cloud.google.com/kms/docs/reference/ekm_errors.
* [CloudkmsProjectsLocationsGenerateRandomBytes](#cloudkmsprojectslocationsgeneraterandombytes) - Generate random bytes using the Cloud KMS randomness source in the provided location.
* [CloudkmsProjectsLocationsKeyRingsCreate](#cloudkmsprojectslocationskeyringscreate) - Create a new KeyRing in a given Project and Location.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysCreate](#cloudkmsprojectslocationskeyringscryptokeyscreate) - Create a new CryptoKey within a KeyRing. CryptoKey.purpose and CryptoKey.version_template.algorithm are required.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecrypt](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsasymmetricdecrypt) - Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_DECRYPT.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSign](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsasymmetricsign) - Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreate](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionscreate) - Create a new CryptoKeyVersion in a CryptoKey. The server will assign the next sequential id. If unset, state will be set to ENABLED.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroy](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsdestroy) - Schedule a CryptoKeyVersion for destruction. Upon calling this method, CryptoKeyVersion.state will be set to DESTROY_SCHEDULED, and destroy_time will be set to the time destroy_scheduled_duration in the future. At that time, the state will automatically change to DESTROYED, and the key material will be irrevocably destroyed. Before the destroy_time is reached, RestoreCryptoKeyVersion may be called to reverse the process.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKey](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsgetpublickey) - Returns the public key for the given CryptoKeyVersion. The CryptoKey.purpose must be ASYMMETRIC_SIGN or ASYMMETRIC_DECRYPT.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImport](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsimport) - Import wrapped key material into a CryptoKeyVersion. All requests must specify a CryptoKey. If a CryptoKeyVersion is additionally specified in the request, key material will be reimported into that version. Otherwise, a new version will be created, and will be assigned the next sequential id within the CryptoKey.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsList](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionslist) - Lists CryptoKeyVersions.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSign](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsmacsign) - Signs data using a CryptoKeyVersion with CryptoKey.purpose MAC, producing a tag that can be verified by another source with the same key.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerify](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsmacverify) - Verifies MAC tag using a CryptoKeyVersion with CryptoKey.purpose MAC, and returns a response that indicates whether or not the verification was successful.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatch](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionspatch) - Update a CryptoKeyVersion's metadata. state may be changed between ENABLED and DISABLED using this method. See DestroyCryptoKeyVersion and RestoreCryptoKeyVersion to move between other states.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestore](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsrestore) - Restore a CryptoKeyVersion in the DESTROY_SCHEDULED state. Upon restoration of the CryptoKeyVersion, state will be set to DISABLED, and destroy_time will be cleared.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysDecrypt](#cloudkmsprojectslocationskeyringscryptokeysdecrypt) - Decrypts data that was protected by Encrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysEncrypt](#cloudkmsprojectslocationskeyringscryptokeysencrypt) - Encrypts data, so that it can only be recovered by a call to Decrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysList](#cloudkmsprojectslocationskeyringscryptokeyslist) - Lists CryptoKeys.
* [CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersion](#cloudkmsprojectslocationskeyringscryptokeysupdateprimaryversion) - Update the version of a CryptoKey that will be used in Encrypt. Returns an error if called on a key whose purpose is not ENCRYPT_DECRYPT.
* [CloudkmsProjectsLocationsKeyRingsImportJobsCreate](#cloudkmsprojectslocationskeyringsimportjobscreate) - Create a new ImportJob within a KeyRing. ImportJob.import_method is required.
* [CloudkmsProjectsLocationsKeyRingsImportJobsGet](#cloudkmsprojectslocationskeyringsimportjobsget) - Returns metadata for a given ImportJob.
* [CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicy](#cloudkmsprojectslocationskeyringsimportjobsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [CloudkmsProjectsLocationsKeyRingsImportJobsList](#cloudkmsprojectslocationskeyringsimportjobslist) - Lists ImportJobs.
* [CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicy](#cloudkmsprojectslocationskeyringsimportjobssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissions](#cloudkmsprojectslocationskeyringsimportjobstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [CloudkmsProjectsLocationsKeyRingsList](#cloudkmsprojectslocationskeyringslist) - Lists KeyRings.
* [CloudkmsProjectsLocationsList](#cloudkmsprojectslocationslist) - Lists information about the supported locations for this service.

## CloudkmsProjectsLocationsEkmConnectionsCreate

Creates a new EkmConnection in a given Project and Location.

### Example Usage

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
            CryptoSpacePath: sdk.String("esse"),
            Etag: sdk.String("totam"),
            KeyManagementMode: shared.EkmConnectionKeyManagementModeEnumCloudKms.ToPointer(),
            ServiceResolvers: []shared.ServiceResolverInput{
                shared.ServiceResolverInput{
                    EndpointFilter: sdk.String("dicta"),
                    Hostname: sdk.String("scaly-pathway.name"),
                    ServerCertificates: []shared.CertificateInput{
                        shared.CertificateInput{
                            RawDer: sdk.String("deleniti"),
                        },
                    },
                    ServiceDirectoryService: sdk.String("hic"),
                },
                shared.ServiceResolverInput{
                    EndpointFilter: sdk.String("optio"),
                    Hostname: sdk.String("mean-brick.info"),
                    ServerCertificates: []shared.CertificateInput{
                        shared.CertificateInput{
                            RawDer: sdk.String("modi"),
                        },
                        shared.CertificateInput{
                            RawDer: sdk.String("qui"),
                        },
                    },
                    ServiceDirectoryService: sdk.String("impedit"),
                },
                shared.ServiceResolverInput{
                    EndpointFilter: sdk.String("cum"),
                    Hostname: sdk.String("jolly-cowboy.name"),
                    ServerCertificates: []shared.CertificateInput{
                        shared.CertificateInput{
                            RawDer: sdk.String("perferendis"),
                        },
                    },
                    ServiceDirectoryService: sdk.String("ad"),
                },
            },
        },
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iste"),
        EkmConnectionID: sdk.String("dolor"),
        Fields: sdk.String("natus"),
        Key: sdk.String("laboriosam"),
        OauthToken: sdk.String("hic"),
        Parent: "saepe",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fuga"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("corporis"),
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

## CloudkmsProjectsLocationsEkmConnectionsList

Lists EkmConnections.

### Example Usage

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
    res, err := s.Projects.CloudkmsProjectsLocationsEkmConnectionsList(ctx, operations.CloudkmsProjectsLocationsEkmConnectionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("architecto"),
        Filter: sdk.String("ipsa"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("est"),
        OrderBy: sdk.String("mollitia"),
        PageSize: sdk.Int64(670638),
        PageToken: sdk.String("dolores"),
        Parent: "dolorem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("nobis"),
    }, operations.CloudkmsProjectsLocationsEkmConnectionsListSecurity{
        Option1: &operations.CloudkmsProjectsLocationsEkmConnectionsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEkmConnectionsResponse != nil {
        // handle response
    }
}
```

## CloudkmsProjectsLocationsEkmConnectionsVerifyConnectivity

Verifies that Cloud KMS can successfully connect to the external key manager specified by an EkmConnection. If there is an error connecting to the EKM, this method returns a FAILED_PRECONDITION status containing structured information as described at https://cloud.google.com/kms/docs/reference/ekm_errors.

### Example Usage

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
    res, err := s.Projects.CloudkmsProjectsLocationsEkmConnectionsVerifyConnectivity(ctx, operations.CloudkmsProjectsLocationsEkmConnectionsVerifyConnectivityRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("minima"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("accusantium"),
        Name: "Cecilia Yundt MD",
        OauthToken: sdk.String("dolorem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("repellat"),
    }, operations.CloudkmsProjectsLocationsEkmConnectionsVerifyConnectivitySecurity{
        Option1: &operations.CloudkmsProjectsLocationsEkmConnectionsVerifyConnectivitySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyConnectivityResponse != nil {
        // handle response
    }
}
```

## CloudkmsProjectsLocationsGenerateRandomBytes

Generate random bytes using the Cloud KMS randomness source in the provided location.

### Example Usage

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
    res, err := s.Projects.CloudkmsProjectsLocationsGenerateRandomBytes(ctx, operations.CloudkmsProjectsLocationsGenerateRandomBytesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GenerateRandomBytesRequest: &shared.GenerateRandomBytesRequest{
            LengthBytes: sdk.Int(581850),
            ProtectionLevel: shared.GenerateRandomBytesRequestProtectionLevelEnumSoftware.ToPointer(),
        },
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("velit"),
        Key: sdk.String("error"),
        Location: "quia",
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vitae"),
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("animi"),
    }, operations.CloudkmsProjectsLocationsGenerateRandomBytesSecurity{
        Option1: &operations.CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateRandomBytesResponse != nil {
        // handle response
    }
}
```

## CloudkmsProjectsLocationsKeyRingsCreate

Create a new KeyRing in a given Project and Location.

### Example Usage

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
    res, err := s.Projects.CloudkmsProjectsLocationsKeyRingsCreate(ctx, operations.CloudkmsProjectsLocationsKeyRingsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sequi"),
        Fields: sdk.String("tenetur"),
        Key: sdk.String("ipsam"),
        KeyRingID: sdk.String("id"),
        OauthToken: sdk.String("possimus"),
        Parent: "aut",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("temporibus"),
    }, operations.CloudkmsProjectsLocationsKeyRingsCreateSecurity{
        Option1: &operations.CloudkmsProjectsLocationsKeyRingsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeyRing != nil {
        // handle response
    }
}
```

## CloudkmsProjectsLocationsKeyRingsCryptoKeysCreate

Create a new CryptoKey within a KeyRing. CryptoKey.purpose and CryptoKey.version_template.algorithm are required.

### Example Usage

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
    res, err := s.Projects.CloudkmsProjectsLocationsKeyRingsCryptoKeysCreate(ctx, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CryptoKeyInput: &shared.CryptoKeyInput{
            CryptoKeyBackend: sdk.String("quasi"),
            DestroyScheduledDuration: sdk.String("reiciendis"),
            ImportOnly: sdk.Bool(false),
            Labels: map[string]string{
                "vero": "nihil",
                "praesentium": "voluptatibus",
                "ipsa": "omnis",
                "voluptate": "cum",
            },
            NextRotationTime: sdk.String("perferendis"),
            Primary: &shared.CryptoKeyVersionInput{
                Attestation: &shared.KeyOperationAttestationInput{
                    CertChains: &shared.CertificateChains{
                        CaviumCerts: []string{
                            "reprehenderit",
                        },
                        GoogleCardCerts: []string{
                            "maiores",
                            "dicta",
                        },
                        GooglePartitionCerts: []string{
                            "dolore",
                            "iusto",
                        },
                    },
                },
                ExternalProtectionLevelOptions: &shared.ExternalProtectionLevelOptions{
                    EkmConnectionKeyPath: sdk.String("dicta"),
                    ExternalKeyURI: sdk.String("harum"),
                },
                State: shared.CryptoKeyVersionStateEnumDisabled.ToPointer(),
            },
            Purpose: shared.CryptoKeyPurposeEnumMac.ToPointer(),
            RotationPeriod: sdk.String("commodi"),
            VersionTemplate: &shared.CryptoKeyVersionTemplate{
                Algorithm: shared.CryptoKeyVersionTemplateAlgorithmEnumHmacSha512.ToPointer(),
                ProtectionLevel: shared.CryptoKeyVersionTemplateProtectionLevelEnumProtectionLevelUnspecified.ToPointer(),
            },
        },
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("molestias"),
        CryptoKeyID: sdk.String("excepturi"),
        Fields: sdk.String("pariatur"),
        Key: sdk.String("modi"),
        OauthToken: sdk.String("praesentium"),
        Parent: "rem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptates"),
        SkipInitialVersionCreation: sdk.Bool(false),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("repudiandae"),
    }, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurity{
        Option1: &operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CryptoKey != nil {
        // handle response
    }
}
```

## CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecrypt

Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_DECRYPT.

### Example Usage

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
    res, err := s.Projects.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecrypt(ctx, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AsymmetricDecryptRequest: &shared.AsymmetricDecryptRequest{
            Ciphertext: sdk.String("veritatis"),
            CiphertextCrc32c: sdk.String("itaque"),
        },
        AccessToken: sdk.String("incidunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("consequatur"),
        Fields: sdk.String("est"),
        Key: sdk.String("quibusdam"),
        Name: "Joanna Rau",
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("cupiditate"),
    }, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptSecurity{
        Option1: &operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsymmetricDecryptResponse != nil {
        // handle response
    }
}
```

## CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSign

Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey.

### Example Usage

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
    res, err := s.Projects.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSign(ctx, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AsymmetricSignRequest: &shared.AsymmetricSignRequest{
            Data: sdk.String("perferendis"),
            DataCrc32c: sdk.String("magni"),
            Digest: &shared.Digest{
                Sha256: sdk.String("assumenda"),
                Sha384: sdk.String("ipsam"),
                Sha512: sdk.String("alias"),
            },
            DigestCrc32c: sdk.String("fugit"),
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("facilis"),
        Key: sdk.String("tempore"),
        Name: "Lucia Kemmer",
        OauthToken: sdk.String("sint"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("necessitatibus"),
    }, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignSecurity{
        Option1: &operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsymmetricSignResponse != nil {
        // handle response
    }
}
```

## CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreate

Create a new CryptoKeyVersion in a CryptoKey. The server will assign the next sequential id. If unset, state will be set to ENABLED.

### Example Usage

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
    res, err := s.Projects.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreate(ctx, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CryptoKeyVersionInput: &shared.CryptoKeyVersionInput{
            Attestation: &shared.KeyOperationAttestationInput{
                CertChains: &shared.CertificateChains{
                    CaviumCerts: []string{
                        "dolor",
                        "debitis",
                        "a",
                    },
                    GoogleCardCerts: []string{
                        "in",
                        "in",
                        "illum",
                    },
                    GooglePartitionCerts: []string{
                        "rerum",
                        "dicta",
                        "magnam",
                        "cumque",
                    },
                },
            },
            ExternalProtectionLevelOptions: &shared.ExternalProtectionLevelOptions{
                EkmConnectionKeyPath: sdk.String("facere"),
                ExternalKeyURI: sdk.String("ea"),
            },
            State: shared.CryptoKeyVersionStateEnumDestroyed.ToPointer(),
        },
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("non"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("enim"),
        OauthToken: sdk.String("accusamus"),
        Parent: "delectus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("nam"),
    }, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurity{
        Option1: &operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CryptoKeyVersion != nil {
        // handle response
    }
}
```

## CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroy

Schedule a CryptoKeyVersion for destruction. Upon calling this method, CryptoKeyVersion.state will be set to DESTROY_SCHEDULED, and destroy_time will be set to the time destroy_scheduled_duration in the future. At that time, the state will automatically change to DESTROYED, and the key material will be irrevocably destroyed. Before the destroy_time is reached, RestoreCryptoKeyVersion may be called to reverse the process.

### Example Usage

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
    res, err := s.Projects.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroy(ctx, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "deleniti": "sapiente",
            "amet": "deserunt",
            "nisi": "vel",
        },
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("nihil"),
        Name: "Verna Olson",
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("eum"),
    }, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurity{
        Option1: &operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CryptoKeyVersion != nil {
        // handle response
    }
}
```

## CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKey

Returns the public key for the given CryptoKeyVersion. The CryptoKey.purpose must be ASYMMETRIC_SIGN or ASYMMETRIC_DECRYPT.

### Example Usage

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
    res, err := s.Projects.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKey(ctx, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("et"),
        Key: sdk.String("excepturi"),
        Name: "Ramona Lueilwitz MD",
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("eum"),
    }, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeySecurity{
        Option1: &operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublicKey != nil {
        // handle response
    }
}
```

## CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImport

Import wrapped key material into a CryptoKeyVersion. All requests must specify a CryptoKey. If a CryptoKeyVersion is additionally specified in the request, key material will be reimported into that version. Otherwise, a new version will be created, and will be assigned the next sequential id within the CryptoKey.

### Example Usage

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
    res, err := s.Projects.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImport(ctx, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ImportCryptoKeyVersionRequest: &shared.ImportCryptoKeyVersionRequest{
            Algorithm: shared.ImportCryptoKeyVersionRequestAlgorithmEnumHmacSha384.ToPointer(),
            CryptoKeyVersion: sdk.String("odit"),
            ImportJob: sdk.String("nemo"),
            RsaAesWrappedKey: sdk.String("quasi"),
            WrappedKey: sdk.String("iure"),
        },
        AccessToken: sdk.String("doloribus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eius"),
        Fields: sdk.String("maxime"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("facilis"),
        Parent: "in",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("repudiandae"),
    }, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportSecurity{
        Option1: &operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CryptoKeyVersion != nil {
        // handle response
    }
}
```

## CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsList

Lists CryptoKeyVersions.

### Example Usage

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
    res, err := s.Projects.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsList(ctx, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("expedita"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repellat"),
        Fields: sdk.String("quibusdam"),
        Filter: sdk.String("sed"),
        Key: sdk.String("saepe"),
        OauthToken: sdk.String("pariatur"),
        OrderBy: sdk.String("accusantium"),
        PageSize: sdk.Int64(162493),
        PageToken: sdk.String("praesentium"),
        Parent: "natus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magni"),
        UploadType: sdk.String("sunt"),
        UploadProtocol: sdk.String("quo"),
        View: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListViewEnumFull.ToPointer(),
    }, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListSecurity{
        Option1: &operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCryptoKeyVersionsResponse != nil {
        // handle response
    }
}
```

## CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSign

Signs data using a CryptoKeyVersion with CryptoKey.purpose MAC, producing a tag that can be verified by another source with the same key.

### Example Usage

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
    res, err := s.Projects.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSign(ctx, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        MacSignRequest: &shared.MacSignRequest{
            Data: sdk.String("maxime"),
            DataCrc32c: sdk.String("ea"),
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ea"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("ab"),
        Name: "Rickey Hintz",
        OauthToken: sdk.String("nam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eaque"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("nemo"),
    }, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignSecurity{
        Option1: &operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MacSignResponse != nil {
        // handle response
    }
}
```

## CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerify

Verifies MAC tag using a CryptoKeyVersion with CryptoKey.purpose MAC, and returns a response that indicates whether or not the verification was successful.

### Example Usage

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
    res, err := s.Projects.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerify(ctx, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        MacVerifyRequest: &shared.MacVerifyRequest{
            Data: sdk.String("perferendis"),
            DataCrc32c: sdk.String("fugiat"),
            Mac: sdk.String("amet"),
            MacCrc32c: sdk.String("aut"),
        },
        AccessToken: sdk.String("cumque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("libero"),
        Key: sdk.String("nobis"),
        Name: "Beatrice Lebsack II",
        OauthToken: sdk.String("nesciunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eos"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("dolores"),
    }, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifySecurity{
        Option1: &operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MacVerifyResponse != nil {
        // handle response
    }
}
```

## CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatch

Update a CryptoKeyVersion's metadata. state may be changed between ENABLED and DISABLED using this method. See DestroyCryptoKeyVersion and RestoreCryptoKeyVersion to move between other states.

### Example Usage

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
    res, err := s.Projects.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatch(ctx, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CryptoKeyVersionInput: &shared.CryptoKeyVersionInput{
            Attestation: &shared.KeyOperationAttestationInput{
                CertChains: &shared.CertificateChains{
                    CaviumCerts: []string{
                        "dolor",
                        "vero",
                    },
                    GoogleCardCerts: []string{
                        "hic",
                        "recusandae",
                    },
                    GooglePartitionCerts: []string{
                        "facilis",
                        "perspiciatis",
                        "voluptatem",
                    },
                },
            },
            ExternalProtectionLevelOptions: &shared.ExternalProtectionLevelOptions{
                EkmConnectionKeyPath: sdk.String("porro"),
                ExternalKeyURI: sdk.String("consequuntur"),
            },
            State: shared.CryptoKeyVersionStateEnumDestroyScheduled.ToPointer(),
        },
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("rerum"),
        Key: sdk.String("adipisci"),
        Name: "Merle Gleichner",
        OauthToken: sdk.String("deleniti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        UpdateMask: sdk.String("provident"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("libero"),
    }, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurity{
        Option1: &operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CryptoKeyVersion != nil {
        // handle response
    }
}
```

## CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestore

Restore a CryptoKeyVersion in the DESTROY_SCHEDULED state. Upon restoration of the CryptoKeyVersion, state will be set to DISABLED, and destroy_time will be cleared.

### Example Usage

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
    res, err := s.Projects.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestore(ctx, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "quos": "aliquid",
            "dolorem": "dolorem",
        },
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("hic"),
        Key: sdk.String("excepturi"),
        Name: "Adrian Kuhn",
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreSecurity{
        Option1: &operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CryptoKeyVersion != nil {
        // handle response
    }
}
```

## CloudkmsProjectsLocationsKeyRingsCryptoKeysDecrypt

Decrypts data that was protected by Encrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.

### Example Usage

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
    res, err := s.Projects.CloudkmsProjectsLocationsKeyRingsCryptoKeysDecrypt(ctx, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DecryptRequest: &shared.DecryptRequest{
            AdditionalAuthenticatedData: sdk.String("iure"),
            AdditionalAuthenticatedDataCrc32c: sdk.String("odio"),
            Ciphertext: sdk.String("quaerat"),
            CiphertextCrc32c: sdk.String("accusamus"),
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("natus"),
        Key: sdk.String("eos"),
        Name: "Miss Paul Steuber",
        OauthToken: sdk.String("iusto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurity{
        Option1: &operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DecryptResponse != nil {
        // handle response
    }
}
```

## CloudkmsProjectsLocationsKeyRingsCryptoKeysEncrypt

Encrypts data, so that it can only be recovered by a call to Decrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.

### Example Usage

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
    res, err := s.Projects.CloudkmsProjectsLocationsKeyRingsCryptoKeysEncrypt(ctx, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EncryptRequest: &shared.EncryptRequest{
            AdditionalAuthenticatedData: sdk.String("necessitatibus"),
            AdditionalAuthenticatedDataCrc32c: sdk.String("distinctio"),
            Plaintext: sdk.String("asperiores"),
            PlaintextCrc32c: sdk.String("nihil"),
        },
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("id"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("eius"),
        Name: "Lisa Fay",
        OauthToken: sdk.String("ad"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptSecurity{
        Option1: &operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EncryptResponse != nil {
        // handle response
    }
}
```

## CloudkmsProjectsLocationsKeyRingsCryptoKeysList

Lists CryptoKeys.

### Example Usage

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
    res, err := s.Projects.CloudkmsProjectsLocationsKeyRingsCryptoKeysList(ctx, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("similique"),
        Filter: sdk.String("alias"),
        Key: sdk.String("at"),
        OauthToken: sdk.String("quaerat"),
        OrderBy: sdk.String("tempora"),
        PageSize: sdk.Int64(425451),
        PageToken: sdk.String("quod"),
        Parent: "officiis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("a"),
        VersionView: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysListVersionViewEnumCryptoKeyVersionViewUnspecified.ToPointer(),
    }, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurity{
        Option1: &operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCryptoKeysResponse != nil {
        // handle response
    }
}
```

## CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersion

Update the version of a CryptoKey that will be used in Encrypt. Returns an error if called on a key whose purpose is not ENCRYPT_DECRYPT.

### Example Usage

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
    res, err := s.Projects.CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersion(ctx, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        UpdateCryptoKeyPrimaryVersionRequest: &shared.UpdateCryptoKeyPrimaryVersionRequest{
            CryptoKeyVersionID: sdk.String("iusto"),
        },
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tenetur"),
        Fields: sdk.String("amet"),
        Key: sdk.String("tempore"),
        Name: "Francis Haley",
        OauthToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("expedita"),
    }, operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurity{
        Option1: &operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CryptoKey != nil {
        // handle response
    }
}
```

## CloudkmsProjectsLocationsKeyRingsImportJobsCreate

Create a new ImportJob within a KeyRing. ImportJob.import_method is required.

### Example Usage

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
    res, err := s.Projects.CloudkmsProjectsLocationsKeyRingsImportJobsCreate(ctx, operations.CloudkmsProjectsLocationsKeyRingsImportJobsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ImportJobInput: &shared.ImportJobInput{
            Attestation: &shared.KeyOperationAttestationInput{
                CertChains: &shared.CertificateChains{
                    CaviumCerts: []string{
                        "vel",
                    },
                    GoogleCardCerts: []string{
                        "voluptas",
                        "deserunt",
                        "quam",
                    },
                    GooglePartitionCerts: []string{
                        "incidunt",
                    },
                },
            },
            ImportMethod: shared.ImportJobImportMethodEnumRsaOaep3072Sha1Aes256.ToPointer(),
            ProtectionLevel: shared.ImportJobProtectionLevelEnumHsm.ToPointer(),
            PublicKey: &shared.WrappingPublicKey{
                Pem: sdk.String("maxime"),
            },
        },
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("laborum"),
        ImportJobID: sdk.String("totam"),
        Key: sdk.String("incidunt"),
        OauthToken: sdk.String("aspernatur"),
        Parent: "dolores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurity{
        Option1: &operations.CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportJob != nil {
        // handle response
    }
}
```

## CloudkmsProjectsLocationsKeyRingsImportJobsGet

Returns metadata for a given ImportJob.

### Example Usage

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
    res, err := s.Projects.CloudkmsProjectsLocationsKeyRingsImportJobsGet(ctx, operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestias"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("neque"),
        Key: sdk.String("fugit"),
        Name: "Courtney Cassin",
        OauthToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatem"),
        UploadType: sdk.String("cumque"),
        UploadProtocol: sdk.String("soluta"),
    }, operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurity{
        Option1: &operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportJob != nil {
        // handle response
    }
}
```

## CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

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
    res, err := s.Projects.CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicy(ctx, operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("nobis"),
        OauthToken: sdk.String("quos"),
        OptionsRequestedPolicyVersion: sdk.Int64(731694),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cupiditate"),
        Resource: "aperiam",
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurity{
        Option1: &operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## CloudkmsProjectsLocationsKeyRingsImportJobsList

Lists ImportJobs.

### Example Usage

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
    res, err := s.Projects.CloudkmsProjectsLocationsKeyRingsImportJobsList(ctx, operations.CloudkmsProjectsLocationsKeyRingsImportJobsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("architecto"),
        Filter: sdk.String("quae"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("quas"),
        OrderBy: sdk.String("itaque"),
        PageSize: sdk.Int64(9240),
        PageToken: sdk.String("est"),
        Parent: "repellendus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("ut"),
    }, operations.CloudkmsProjectsLocationsKeyRingsImportJobsListSecurity{
        Option1: &operations.CloudkmsProjectsLocationsKeyRingsImportJobsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListImportJobsResponse != nil {
        // handle response
    }
}
```

## CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

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
    res, err := s.Projects.CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicy(ctx, operations.CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "laudantium",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("occaecati"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "vero",
                                    "omnis",
                                    "quis",
                                    "ipsum",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "consectetur",
                                    "vero",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "hic",
                                    "distinctio",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "similique",
                                    "facilis",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("ducimus"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "illum",
                                    "sequi",
                                    "natus",
                                    "impedit",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "exercitationem",
                                    "nulla",
                                    "fugit",
                                    "porro",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("doloribus"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("eligendi"),
                            Expression: sdk.String("ducimus"),
                            Location: sdk.String("alias"),
                            Title: sdk.String("Miss"),
                        },
                        Members: []string{
                            "ipsam",
                            "ea",
                        },
                        Role: sdk.String("aspernatur"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("vel"),
                            Expression: sdk.String("possimus"),
                            Location: sdk.String("magnam"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "laudantium",
                            "dicta",
                        },
                        Role: sdk.String("dolor"),
                    },
                },
                Etag: sdk.String("maiores"),
                Version: sdk.Int(97844),
            },
            UpdateMask: sdk.String("ex"),
        },
        AccessToken: sdk.String("nulla"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("nostrum"),
        Key: sdk.String("sapiente"),
        OauthToken: sdk.String("quisquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        Resource: "ea",
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("corporis"),
    }, operations.CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurity{
        Option1: &operations.CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

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
    res, err := s.Projects.CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissions(ctx, operations.CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "inventore",
                "magnam",
            },
        },
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("consectetur"),
        Fields: sdk.String("recusandae"),
        Key: sdk.String("aspernatur"),
        OauthToken: sdk.String("minima"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eaque"),
        Resource: "a",
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("aut"),
    }, operations.CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurity{
        Option1: &operations.CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```

## CloudkmsProjectsLocationsKeyRingsList

Lists KeyRings.

### Example Usage

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
    res, err := s.Projects.CloudkmsProjectsLocationsKeyRingsList(ctx, operations.CloudkmsProjectsLocationsKeyRingsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aliquam"),
        Fields: sdk.String("fugit"),
        Filter: sdk.String("accusamus"),
        Key: sdk.String("inventore"),
        OauthToken: sdk.String("non"),
        OrderBy: sdk.String("et"),
        PageSize: sdk.Int64(677412),
        PageToken: sdk.String("laborum"),
        Parent: "placeat",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("velit"),
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("autem"),
    }, operations.CloudkmsProjectsLocationsKeyRingsListSecurity{
        Option1: &operations.CloudkmsProjectsLocationsKeyRingsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListKeyRingsResponse != nil {
        // handle response
    }
}
```

## CloudkmsProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

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
    res, err := s.Projects.CloudkmsProjectsLocationsList(ctx, operations.CloudkmsProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quas"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nulla"),
        Fields: sdk.String("voluptas"),
        Filter: sdk.String("libero"),
        Key: sdk.String("quasi"),
        Name: "Carrie Cole IV",
        OauthToken: sdk.String("magnam"),
        PageSize: sdk.Int64(487935),
        PageToken: sdk.String("eius"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("rem"),
    }, operations.CloudkmsProjectsLocationsListSecurity{
        Option1: &operations.CloudkmsProjectsLocationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```
