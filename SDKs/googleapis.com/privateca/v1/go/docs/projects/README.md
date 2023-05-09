# Projects

### Available Operations

* [PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivate](#privatecaprojectslocationscapoolscertificateauthoritiesactivate) - Activate a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. After the parent Certificate Authority signs a certificate signing request from FetchCertificateAuthorityCsr, this method can complete the activation process.
* [PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsList](#privatecaprojectslocationscapoolscertificateauthoritiescertificaterevocationlistslist) - Lists CertificateRevocationLists.
* [PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreate](#privatecaprojectslocationscapoolscertificateauthoritiescreate) - Create a new CertificateAuthority in a given Project and Location.
* [PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisable](#privatecaprojectslocationscapoolscertificateauthoritiesdisable) - Disable a CertificateAuthority.
* [PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnable](#privatecaprojectslocationscapoolscertificateauthoritiesenable) - Enable a CertificateAuthority.
* [PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetch](#privatecaprojectslocationscapoolscertificateauthoritiesfetch) - Fetch a certificate signing request (CSR) from a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. The CSR must then be signed by the desired parent Certificate Authority, which could be another CertificateAuthority resource, or could be an on-prem certificate authority. See also ActivateCertificateAuthority.
* [PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesList](#privatecaprojectslocationscapoolscertificateauthoritieslist) - Lists CertificateAuthorities.
* [PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndelete](#privatecaprojectslocationscapoolscertificateauthoritiesundelete) - Undelete a CertificateAuthority that has been deleted.
* [PrivatecaProjectsLocationsCaPoolsCertificatesCreate](#privatecaprojectslocationscapoolscertificatescreate) - Create a new Certificate in a given Project, Location from a particular CaPool.
* [PrivatecaProjectsLocationsCaPoolsCertificatesList](#privatecaprojectslocationscapoolscertificateslist) - Lists Certificates.
* [PrivatecaProjectsLocationsCaPoolsCertificatesRevoke](#privatecaprojectslocationscapoolscertificatesrevoke) - Revoke a Certificate.
* [PrivatecaProjectsLocationsCaPoolsCreate](#privatecaprojectslocationscapoolscreate) - Create a CaPool.
* [PrivatecaProjectsLocationsCaPoolsFetchCaCerts](#privatecaprojectslocationscapoolsfetchcacerts) - FetchCaCerts returns the current trust anchor for the CaPool. This will include CA certificate chains for all ACTIVE CertificateAuthority resources in the CaPool.
* [PrivatecaProjectsLocationsCaPoolsList](#privatecaprojectslocationscapoolslist) - Lists CaPools.
* [PrivatecaProjectsLocationsCertificateTemplatesCreate](#privatecaprojectslocationscertificatetemplatescreate) - Create a new CertificateTemplate in a given Project and Location.
* [PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicy](#privatecaprojectslocationscertificatetemplatesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [PrivatecaProjectsLocationsCertificateTemplatesList](#privatecaprojectslocationscertificatetemplateslist) - Lists CertificateTemplates.
* [PrivatecaProjectsLocationsCertificateTemplatesPatch](#privatecaprojectslocationscertificatetemplatespatch) - Update a CertificateTemplate.
* [PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicy](#privatecaprojectslocationscertificatetemplatessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissions](#privatecaprojectslocationscertificatetemplatestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [PrivatecaProjectsLocationsList](#privatecaprojectslocationslist) - Lists information about the supported locations for this service.
* [PrivatecaProjectsLocationsOperationsCancel](#privatecaprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [PrivatecaProjectsLocationsOperationsDelete](#privatecaprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [PrivatecaProjectsLocationsOperationsGet](#privatecaprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [PrivatecaProjectsLocationsOperationsList](#privatecaprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivate

Activate a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. After the parent Certificate Authority signs a certificate signing request from FetchCertificateAuthorityCsr, this method can complete the activation process.

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
    res, err := s.Projects.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivate(ctx, operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ActivateCertificateAuthorityRequest: &shared.ActivateCertificateAuthorityRequest{
            PemCaCertificate: sdk.String("iusto"),
            RequestID: sdk.String("excepturi"),
            SubordinateConfig: &shared.SubordinateConfig{
                CertificateAuthority: sdk.String("nisi"),
                PemIssuerChain: &shared.SubordinateConfigChain{
                    PemCertificates: []string{
                        "temporibus",
                        "ab",
                        "quis",
                        "veritatis",
                    },
                },
            },
        },
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("repellendus"),
        Key: sdk.String("sapiente"),
        Name: "Fred Strosin",
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("esse"),
    }, operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsList

Lists CertificateRevocationLists.

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
    res, err := s.Projects.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsList(ctx, operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("porro"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("nam"),
        Filter: sdk.String("officia"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("fugit"),
        OrderBy: sdk.String("deleniti"),
        PageSize: sdk.Int64(944669),
        PageToken: sdk.String("optio"),
        Parent: "totam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("beatae"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCertificateRevocationListsResponse != nil {
        // handle response
    }
}
```

## PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreate

Create a new CertificateAuthority in a given Project and Location.

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
    res, err := s.Projects.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreate(ctx, operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CertificateAuthorityInput: &shared.CertificateAuthorityInput{
            AccessUrls: &shared.AccessUrls{
                CaCertificateAccessURL: sdk.String("qui"),
                CrlAccessUrls: []string{
                    "cum",
                    "esse",
                    "ipsum",
                    "excepturi",
                },
            },
            Config: &shared.CertificateConfig{
                PublicKey: &shared.PublicKey{
                    Format: shared.PublicKeyFormatEnumKeyFormatUnspecified.ToPointer(),
                    Key: sdk.String("perferendis"),
                },
                SubjectConfig: &shared.SubjectConfig{
                    Subject: &shared.Subject{
                        CommonName: sdk.String("ad"),
                        CountryCode: sdk.String("MU"),
                        Locality: sdk.String("sed"),
                        Organization: sdk.String("iste"),
                        OrganizationalUnit: sdk.String("dolor"),
                        PostalCode: sdk.String("39964-3649"),
                        Province: sdk.String("quidem"),
                        StreetAddress: sdk.String("architecto"),
                    },
                    SubjectAltName: &shared.SubjectAltNames{
                        CustomSans: []shared.X509Extension{
                            shared.X509Extension{
                                Critical: sdk.Bool(false),
                                ObjectID: &shared.ObjectID{
                                    ObjectIDPath: []int{
                                        666767,
                                        653140,
                                        670638,
                                        170909,
                                    },
                                },
                                Value: sdk.String("dolorem"),
                            },
                        },
                        DNSNames: []string{
                            "explicabo",
                            "nobis",
                        },
                        EmailAddresses: []string{
                            "omnis",
                            "nemo",
                        },
                        IPAddresses: []string{
                            "excepturi",
                            "accusantium",
                        },
                        Uris: []string{
                            "culpa",
                            "doloribus",
                        },
                    },
                },
                X509Config: &shared.X509Parameters{
                    AdditionalExtensions: []shared.X509Extension{
                        shared.X509Extension{
                            Critical: sdk.Bool(false),
                            ObjectID: &shared.ObjectID{
                                ObjectIDPath: []int{
                                    652790,
                                },
                            },
                            Value: sdk.String("dolorem"),
                        },
                        shared.X509Extension{
                            Critical: sdk.Bool(false),
                            ObjectID: &shared.ObjectID{
                                ObjectIDPath: []int{
                                    161309,
                                    995300,
                                    653108,
                                },
                            },
                            Value: sdk.String("occaecati"),
                        },
                        shared.X509Extension{
                            Critical: sdk.Bool(false),
                            ObjectID: &shared.ObjectID{
                                ObjectIDPath: []int{
                                    414369,
                                    466311,
                                },
                            },
                            Value: sdk.String("molestiae"),
                        },
                        shared.X509Extension{
                            Critical: sdk.Bool(false),
                            ObjectID: &shared.ObjectID{
                                ObjectIDPath: []int{
                                    623510,
                                },
                            },
                            Value: sdk.String("quia"),
                        },
                    },
                    AiaOcspServers: []string{
                        "vitae",
                        "laborum",
                    },
                    CaOptions: &shared.CaOptions{
                        IsCa: sdk.Bool(false),
                        MaxIssuerPathLength: sdk.Int(656330),
                    },
                    KeyUsage: &shared.KeyUsage{
                        BaseKeyUsage: &shared.KeyUsageOptions{
                            CertSign: sdk.Bool(false),
                            ContentCommitment: sdk.Bool(false),
                            CrlSign: sdk.Bool(false),
                            DataEncipherment: sdk.Bool(false),
                            DecipherOnly: sdk.Bool(false),
                            DigitalSignature: sdk.Bool(false),
                            EncipherOnly: sdk.Bool(false),
                            KeyAgreement: sdk.Bool(false),
                            KeyEncipherment: sdk.Bool(false),
                        },
                        ExtendedKeyUsage: &shared.ExtendedKeyUsageOptions{
                            ClientAuth: sdk.Bool(false),
                            CodeSigning: sdk.Bool(false),
                            EmailProtection: sdk.Bool(false),
                            OcspSigning: sdk.Bool(false),
                            ServerAuth: sdk.Bool(false),
                            TimeStamping: sdk.Bool(false),
                        },
                        UnknownExtendedKeyUsages: []shared.ObjectID{
                            shared.ObjectID{
                                ObjectIDPath: []int{
                                    778346,
                                },
                            },
                            shared.ObjectID{
                                ObjectIDPath: []int{
                                    949572,
                                },
                            },
                        },
                    },
                    NameConstraints: &shared.NameConstraints{
                        Critical: sdk.Bool(false),
                        ExcludedDNSNames: []string{
                            "id",
                            "possimus",
                        },
                        ExcludedEmailAddresses: []string{
                            "quasi",
                        },
                        ExcludedIPRanges: []string{
                            "temporibus",
                            "laborum",
                            "quasi",
                        },
                        ExcludedUris: []string{
                            "voluptatibus",
                            "vero",
                            "nihil",
                            "praesentium",
                        },
                        PermittedDNSNames: []string{
                            "ipsa",
                            "omnis",
                            "voluptate",
                            "cum",
                        },
                        PermittedEmailAddresses: []string{
                            "doloremque",
                        },
                        PermittedIPRanges: []string{
                            "ut",
                            "maiores",
                        },
                        PermittedUris: []string{
                            "corporis",
                        },
                    },
                    PolicyIds: []shared.ObjectID{
                        shared.ObjectID{
                            ObjectIDPath: []int{
                                118727,
                                688661,
                            },
                        },
                        shared.ObjectID{
                            ObjectIDPath: []int{
                                880476,
                                414263,
                            },
                        },
                    },
                },
            },
            GcsBucket: sdk.String("repudiandae"),
            KeySpec: &shared.KeyVersionSpec{
                Algorithm: shared.KeyVersionSpecAlgorithmEnumSignHashAlgorithmUnspecified.ToPointer(),
                CloudKmsKeyVersion: sdk.String("ipsum"),
            },
            Labels: map[string]string{
                "molestias": "excepturi",
                "pariatur": "modi",
                "praesentium": "rem",
            },
            Lifetime: sdk.String("voluptates"),
            SubordinateConfig: &shared.SubordinateConfig{
                CertificateAuthority: sdk.String("quasi"),
                PemIssuerChain: &shared.SubordinateConfigChain{
                    PemCertificates: []string{
                        "sint",
                        "veritatis",
                        "itaque",
                        "incidunt",
                    },
                },
            },
            Type: shared.CertificateAuthorityTypeEnumTypeUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        CertificateAuthorityID: sdk.String("explicabo"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("quibusdam"),
        Parent: "labore",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        RequestID: sdk.String("qui"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("cupiditate"),
    }, operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisable

Disable a CertificateAuthority.

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
    res, err := s.Projects.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisable(ctx, operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DisableCertificateAuthorityRequest: &shared.DisableCertificateAuthorityRequest{
            IgnoreDependentResources: sdk.Bool(false),
            RequestID: sdk.String("perferendis"),
        },
        AccessToken: sdk.String("magni"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("alias"),
        Key: sdk.String("fugit"),
        Name: "Marshall Glover",
        OauthToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("non"),
    }, operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnable

Enable a CertificateAuthority.

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
    res, err := s.Projects.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnable(ctx, operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnableRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EnableCertificateAuthorityRequest: &shared.EnableCertificateAuthorityRequest{
            RequestID: sdk.String("sint"),
        },
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("sint"),
        Key: sdk.String("officia"),
        Name: "Raquel Wilderman",
        OauthToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illum"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("rerum"),
    }, operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnableSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetch

Fetch a certificate signing request (CSR) from a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. The CSR must then be signed by the desired parent Certificate Authority, which could be another CertificateAuthority resource, or could be an on-prem certificate authority. See also ActivateCertificateAuthority.

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
    res, err := s.Projects.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetch(ctx, operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("facere"),
        Fields: sdk.String("ea"),
        Key: sdk.String("aliquid"),
        Name: "Tomas Friesen",
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("provident"),
    }, operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchCertificateAuthorityCsrResponse != nil {
        // handle response
    }
}
```

## PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesList

Lists CertificateAuthorities.

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
    res, err := s.Projects.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesList(ctx, operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("sapiente"),
        Filter: sdk.String("amet"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("nisi"),
        OrderBy: sdk.String("vel"),
        PageSize: sdk.Int64(618809),
        PageToken: sdk.String("omnis"),
        Parent: "molestiae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCertificateAuthoritiesResponse != nil {
        // handle response
    }
}
```

## PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndelete

Undelete a CertificateAuthority that has been deleted.

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
    res, err := s.Projects.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndelete(ctx, operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        UndeleteCertificateAuthorityRequest: &shared.UndeleteCertificateAuthorityRequest{
            RequestID: sdk.String("id"),
        },
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("natus"),
        Key: sdk.String("nobis"),
        Name: "Mrs. Meghan Collins V",
        OauthToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("sint"),
    }, operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## PrivatecaProjectsLocationsCaPoolsCertificatesCreate

Create a new Certificate in a given Project, Location from a particular CaPool.

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
    res, err := s.Projects.PrivatecaProjectsLocationsCaPoolsCertificatesCreate(ctx, operations.PrivatecaProjectsLocationsCaPoolsCertificatesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CertificateInput: &shared.CertificateInput{
            CertificateDescription: &shared.CertificateDescription{
                AiaIssuingCertificateUrls: []string{
                    "reiciendis",
                    "mollitia",
                    "ad",
                },
                AuthorityKeyID: &shared.KeyID{
                    KeyID: sdk.String("eum"),
                },
                CertFingerprint: &shared.CertificateFingerprint{
                    Sha256Hash: sdk.String("dolor"),
                },
                CrlDistributionPoints: []string{
                    "odit",
                    "nemo",
                    "quasi",
                    "iure",
                },
                PublicKey: &shared.PublicKey{
                    Format: shared.PublicKeyFormatEnumPem.ToPointer(),
                    Key: sdk.String("debitis"),
                },
                SubjectDescription: &shared.SubjectDescription{
                    HexSerialNumber: sdk.String("eius"),
                    Lifetime: sdk.String("maxime"),
                    NotAfterTime: sdk.String("deleniti"),
                    NotBeforeTime: sdk.String("facilis"),
                    Subject: &shared.Subject{
                        CommonName: sdk.String("in"),
                        CountryCode: sdk.String("BJ"),
                        Locality: sdk.String("architecto"),
                        Organization: sdk.String("repudiandae"),
                        OrganizationalUnit: sdk.String("ullam"),
                        PostalCode: sdk.String("49819-8015"),
                        Province: sdk.String("natus"),
                        StreetAddress: sdk.String("magni"),
                    },
                    SubjectAltName: &shared.SubjectAltNames{
                        CustomSans: []shared.X509Extension{
                            shared.X509Extension{
                                Critical: sdk.Bool(false),
                                ObjectID: &shared.ObjectID{
                                    ObjectIDPath: []int{
                                        848009,
                                        864934,
                                        807319,
                                        411397,
                                    },
                                },
                                Value: sdk.String("excepturi"),
                            },
                        },
                        DNSNames: []string{
                            "ea",
                        },
                        EmailAddresses: []string{
                            "ab",
                        },
                        IPAddresses: []string{
                            "quidem",
                            "ipsam",
                            "voluptate",
                            "autem",
                        },
                        Uris: []string{
                            "eaque",
                            "pariatur",
                            "nemo",
                        },
                    },
                },
                SubjectKeyID: &shared.KeyID{
                    KeyID: sdk.String("voluptatibus"),
                },
                X509Description: &shared.X509Parameters{
                    AdditionalExtensions: []shared.X509Extension{
                        shared.X509Extension{
                            Critical: sdk.Bool(false),
                            ObjectID: &shared.ObjectID{
                                ObjectIDPath: []int{
                                    230742,
                                    11714,
                                    764912,
                                    359978,
                                },
                            },
                            Value: sdk.String("hic"),
                        },
                    },
                    AiaOcspServers: []string{
                        "nobis",
                        "dolores",
                        "quis",
                    },
                    CaOptions: &shared.CaOptions{
                        IsCa: sdk.Bool(false),
                        MaxIssuerPathLength: sdk.Int(521037),
                    },
                    KeyUsage: &shared.KeyUsage{
                        BaseKeyUsage: &shared.KeyUsageOptions{
                            CertSign: sdk.Bool(false),
                            ContentCommitment: sdk.Bool(false),
                            CrlSign: sdk.Bool(false),
                            DataEncipherment: sdk.Bool(false),
                            DecipherOnly: sdk.Bool(false),
                            DigitalSignature: sdk.Bool(false),
                            EncipherOnly: sdk.Bool(false),
                            KeyAgreement: sdk.Bool(false),
                            KeyEncipherment: sdk.Bool(false),
                        },
                        ExtendedKeyUsage: &shared.ExtendedKeyUsageOptions{
                            ClientAuth: sdk.Bool(false),
                            CodeSigning: sdk.Bool(false),
                            EmailProtection: sdk.Bool(false),
                            OcspSigning: sdk.Bool(false),
                            ServerAuth: sdk.Bool(false),
                            TimeStamping: sdk.Bool(false),
                        },
                        UnknownExtendedKeyUsages: []shared.ObjectID{
                            shared.ObjectID{
                                ObjectIDPath: []int{
                                    338985,
                                },
                            },
                            shared.ObjectID{
                                ObjectIDPath: []int{
                                    179490,
                                },
                            },
                        },
                    },
                    NameConstraints: &shared.NameConstraints{
                        Critical: sdk.Bool(false),
                        ExcludedDNSNames: []string{
                            "dolores",
                        },
                        ExcludedEmailAddresses: []string{
                            "quam",
                            "dolor",
                            "vero",
                            "nostrum",
                        },
                        ExcludedIPRanges: []string{
                            "recusandae",
                            "omnis",
                            "facilis",
                            "perspiciatis",
                        },
                        ExcludedUris: []string{
                            "porro",
                        },
                        PermittedDNSNames: []string{
                            "blanditiis",
                        },
                        PermittedEmailAddresses: []string{
                            "eaque",
                            "occaecati",
                            "rerum",
                        },
                        PermittedIPRanges: []string{
                            "asperiores",
                        },
                        PermittedUris: []string{
                            "modi",
                            "iste",
                            "dolorum",
                            "deleniti",
                        },
                    },
                    PolicyIds: []shared.ObjectID{
                        shared.ObjectID{
                            ObjectIDPath: []int{
                                750844,
                                730122,
                                964490,
                            },
                        },
                        shared.ObjectID{
                            ObjectIDPath: []int{
                                554242,
                                398221,
                            },
                        },
                        shared.ObjectID{
                            ObjectIDPath: []int{
                                209843,
                            },
                        },
                        shared.ObjectID{
                            ObjectIDPath: []int{
                                186193,
                            },
                        },
                    },
                },
            },
            CertificateTemplate: sdk.String("ipsum"),
            Config: &shared.CertificateConfig{
                PublicKey: &shared.PublicKey{
                    Format: shared.PublicKeyFormatEnumPem.ToPointer(),
                    Key: sdk.String("excepturi"),
                },
                SubjectConfig: &shared.SubjectConfig{
                    Subject: &shared.Subject{
                        CommonName: sdk.String("cum"),
                        CountryCode: sdk.String("JO"),
                        Locality: sdk.String("dignissimos"),
                        Organization: sdk.String("reiciendis"),
                        OrganizationalUnit: sdk.String("amet"),
                        PostalCode: sdk.String("20004-4386"),
                        Province: sdk.String("voluptatibus"),
                        StreetAddress: sdk.String("voluptas"),
                    },
                    SubjectAltName: &shared.SubjectAltNames{
                        CustomSans: []shared.X509Extension{
                            shared.X509Extension{
                                Critical: sdk.Bool(false),
                                ObjectID: &shared.ObjectID{
                                    ObjectIDPath: []int{
                                        542499,
                                    },
                                },
                                Value: sdk.String("sit"),
                            },
                            shared.X509Extension{
                                Critical: sdk.Bool(false),
                                ObjectID: &shared.ObjectID{
                                    ObjectIDPath: []int{
                                        67249,
                                        743835,
                                        679393,
                                        478596,
                                    },
                                },
                                Value: sdk.String("voluptate"),
                            },
                            shared.X509Extension{
                                Critical: sdk.Bool(false),
                                ObjectID: &shared.ObjectID{
                                    ObjectIDPath: []int{
                                        536579,
                                        607045,
                                        896672,
                                    },
                                },
                                Value: sdk.String("distinctio"),
                            },
                        },
                        DNSNames: []string{
                            "nihil",
                            "ipsum",
                            "voluptate",
                            "id",
                        },
                        EmailAddresses: []string{
                            "eius",
                            "aspernatur",
                            "perferendis",
                            "amet",
                        },
                        IPAddresses: []string{
                            "accusamus",
                            "ad",
                            "saepe",
                            "suscipit",
                        },
                        Uris: []string{
                            "provident",
                            "minima",
                            "repellendus",
                        },
                    },
                },
                X509Config: &shared.X509Parameters{
                    AdditionalExtensions: []shared.X509Extension{
                        shared.X509Extension{
                            Critical: sdk.Bool(false),
                            ObjectID: &shared.ObjectID{
                                ObjectIDPath: []int{
                                    55,
                                    872651,
                                    311860,
                                },
                            },
                            Value: sdk.String("tempora"),
                        },
                        shared.X509Extension{
                            Critical: sdk.Bool(false),
                            ObjectID: &shared.ObjectID{
                                ObjectIDPath: []int{
                                    798047,
                                    885338,
                                },
                            },
                            Value: sdk.String("qui"),
                        },
                        shared.X509Extension{
                            Critical: sdk.Bool(false),
                            ObjectID: &shared.ObjectID{
                                ObjectIDPath: []int{
                                    952792,
                                    456130,
                                    687488,
                                },
                            },
                            Value: sdk.String("iusto"),
                        },
                    },
                    AiaOcspServers: []string{
                        "quisquam",
                    },
                    CaOptions: &shared.CaOptions{
                        IsCa: sdk.Bool(false),
                        MaxIssuerPathLength: sdk.Int(947371),
                    },
                    KeyUsage: &shared.KeyUsage{
                        BaseKeyUsage: &shared.KeyUsageOptions{
                            CertSign: sdk.Bool(false),
                            ContentCommitment: sdk.Bool(false),
                            CrlSign: sdk.Bool(false),
                            DataEncipherment: sdk.Bool(false),
                            DecipherOnly: sdk.Bool(false),
                            DigitalSignature: sdk.Bool(false),
                            EncipherOnly: sdk.Bool(false),
                            KeyAgreement: sdk.Bool(false),
                            KeyEncipherment: sdk.Bool(false),
                        },
                        ExtendedKeyUsage: &shared.ExtendedKeyUsageOptions{
                            ClientAuth: sdk.Bool(false),
                            CodeSigning: sdk.Bool(false),
                            EmailProtection: sdk.Bool(false),
                            OcspSigning: sdk.Bool(false),
                            ServerAuth: sdk.Bool(false),
                            TimeStamping: sdk.Bool(false),
                        },
                        UnknownExtendedKeyUsages: []shared.ObjectID{
                            shared.ObjectID{
                                ObjectIDPath: []int{
                                    880298,
                                    253941,
                                    313692,
                                },
                            },
                        },
                    },
                    NameConstraints: &shared.NameConstraints{
                        Critical: sdk.Bool(false),
                        ExcludedDNSNames: []string{
                            "sapiente",
                        },
                        ExcludedEmailAddresses: []string{
                            "nihil",
                            "sit",
                            "expedita",
                        },
                        ExcludedIPRanges: []string{
                            "sed",
                        },
                        ExcludedUris: []string{
                            "libero",
                            "voluptas",
                        },
                        PermittedDNSNames: []string{
                            "quam",
                            "ipsum",
                            "incidunt",
                        },
                        PermittedEmailAddresses: []string{
                            "cupiditate",
                        },
                        PermittedIPRanges: []string{
                            "pariatur",
                            "soluta",
                            "dicta",
                            "laborum",
                        },
                        PermittedUris: []string{
                            "incidunt",
                            "aspernatur",
                            "dolores",
                        },
                    },
                    PolicyIds: []shared.ObjectID{
                        shared.ObjectID{
                            ObjectIDPath: []int{
                                396060,
                                463150,
                                565421,
                            },
                        },
                        shared.ObjectID{
                            ObjectIDPath: []int{
                                183280,
                                204865,
                                144847,
                                164959,
                            },
                        },
                        shared.ObjectID{
                            ObjectIDPath: []int{
                                124833,
                                355613,
                            },
                        },
                    },
                },
            },
            Labels: map[string]string{
                "hic": "voluptatem",
                "cumque": "soluta",
                "nobis": "et",
            },
            Lifetime: sdk.String("saepe"),
            PemCsr: sdk.String("ipsum"),
            RevocationDetails: &shared.RevocationDetails{
                RevocationState: shared.RevocationDetailsRevocationStateEnumRevocationReasonUnspecified.ToPointer(),
                RevocationTime: sdk.String("nobis"),
            },
            SubjectMode: shared.CertificateSubjectModeEnumDefault.ToPointer(),
        },
        AccessToken: sdk.String("tempore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aperiam"),
        CertificateID: sdk.String("delectus"),
        Fields: sdk.String("dolorem"),
        IssuingCertificateAuthorityID: sdk.String("dolore"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("adipisci"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        RequestID: sdk.String("quae"),
        UploadType: sdk.String("aut"),
        UploadProtocol: sdk.String("quas"),
        ValidateOnly: sdk.Bool(false),
    }, operations.PrivatecaProjectsLocationsCaPoolsCertificatesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Certificate != nil {
        // handle response
    }
}
```

## PrivatecaProjectsLocationsCaPoolsCertificatesList

Lists Certificates.

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
    res, err := s.Projects.PrivatecaProjectsLocationsCaPoolsCertificatesList(ctx, operations.PrivatecaProjectsLocationsCaPoolsCertificatesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("repellendus"),
        Fields: sdk.String("porro"),
        Filter: sdk.String("doloribus"),
        Key: sdk.String("ut"),
        OauthToken: sdk.String("facilis"),
        OrderBy: sdk.String("cupiditate"),
        PageSize: sdk.Int64(181631),
        PageToken: sdk.String("quae"),
        Parent: "laudantium",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odio"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.PrivatecaProjectsLocationsCaPoolsCertificatesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCertificatesResponse != nil {
        // handle response
    }
}
```

## PrivatecaProjectsLocationsCaPoolsCertificatesRevoke

Revoke a Certificate.

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
    res, err := s.Projects.PrivatecaProjectsLocationsCaPoolsCertificatesRevoke(ctx, operations.PrivatecaProjectsLocationsCaPoolsCertificatesRevokeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RevokeCertificateRequest: &shared.RevokeCertificateRequest{
            Reason: shared.RevokeCertificateRequestReasonEnumPrivilegeWithdrawn.ToPointer(),
            RequestID: sdk.String("omnis"),
        },
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("voluptate"),
        Key: sdk.String("consectetur"),
        Name: "Roman Kulas",
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odio"),
        UploadType: sdk.String("similique"),
        UploadProtocol: sdk.String("facilis"),
    }, operations.PrivatecaProjectsLocationsCaPoolsCertificatesRevokeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Certificate != nil {
        // handle response
    }
}
```

## PrivatecaProjectsLocationsCaPoolsCreate

Create a CaPool.

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
    res, err := s.Projects.PrivatecaProjectsLocationsCaPoolsCreate(ctx, operations.PrivatecaProjectsLocationsCaPoolsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CaPoolInput: &shared.CaPoolInput{
            IssuancePolicy: &shared.IssuancePolicy{
                AllowedIssuanceModes: &shared.IssuanceModes{
                    AllowConfigBasedIssuance: sdk.Bool(false),
                    AllowCsrBasedIssuance: sdk.Bool(false),
                },
                AllowedKeyTypes: []shared.AllowedKeyType{
                    shared.AllowedKeyType{
                        EllipticCurve: &shared.EcKeyType{
                            SignatureAlgorithm: shared.EcKeyTypeSignatureAlgorithmEnumEcdsaP256.ToPointer(),
                        },
                        Rsa: &shared.RsaKeyType{
                            MaxModulusSize: sdk.String("quibusdam"),
                            MinModulusSize: sdk.String("illum"),
                        },
                    },
                    shared.AllowedKeyType{
                        EllipticCurve: &shared.EcKeyType{
                            SignatureAlgorithm: shared.EcKeyTypeSignatureAlgorithmEnumEcSignatureAlgorithmUnspecified.ToPointer(),
                        },
                        Rsa: &shared.RsaKeyType{
                            MaxModulusSize: sdk.String("natus"),
                            MinModulusSize: sdk.String("impedit"),
                        },
                    },
                },
                BaselineValues: &shared.X509Parameters{
                    AdditionalExtensions: []shared.X509Extension{
                        shared.X509Extension{
                            Critical: sdk.Bool(false),
                            ObjectID: &shared.ObjectID{
                                ObjectIDPath: []int{
                                    347233,
                                    862310,
                                    148141,
                                    780427,
                                },
                            },
                            Value: sdk.String("maiores"),
                        },
                    },
                    AiaOcspServers: []string{
                        "iusto",
                        "eligendi",
                        "ducimus",
                        "alias",
                    },
                    CaOptions: &shared.CaOptions{
                        IsCa: sdk.Bool(false),
                        MaxIssuerPathLength: sdk.Int(639473),
                    },
                    KeyUsage: &shared.KeyUsage{
                        BaseKeyUsage: &shared.KeyUsageOptions{
                            CertSign: sdk.Bool(false),
                            ContentCommitment: sdk.Bool(false),
                            CrlSign: sdk.Bool(false),
                            DataEncipherment: sdk.Bool(false),
                            DecipherOnly: sdk.Bool(false),
                            DigitalSignature: sdk.Bool(false),
                            EncipherOnly: sdk.Bool(false),
                            KeyAgreement: sdk.Bool(false),
                            KeyEncipherment: sdk.Bool(false),
                        },
                        ExtendedKeyUsage: &shared.ExtendedKeyUsageOptions{
                            ClientAuth: sdk.Bool(false),
                            CodeSigning: sdk.Bool(false),
                            EmailProtection: sdk.Bool(false),
                            OcspSigning: sdk.Bool(false),
                            ServerAuth: sdk.Bool(false),
                            TimeStamping: sdk.Bool(false),
                        },
                        UnknownExtendedKeyUsages: []shared.ObjectID{
                            shared.ObjectID{
                                ObjectIDPath: []int{
                                    410492,
                                    136900,
                                },
                            },
                            shared.ObjectID{
                                ObjectIDPath: []int{
                                    822118,
                                    297842,
                                },
                            },
                        },
                    },
                    NameConstraints: &shared.NameConstraints{
                        Critical: sdk.Bool(false),
                        ExcludedDNSNames: []string{
                            "ex",
                        },
                        ExcludedEmailAddresses: []string{
                            "dicta",
                            "dolor",
                            "maiores",
                        },
                        ExcludedIPRanges: []string{
                            "ex",
                        },
                        ExcludedUris: []string{
                            "excepturi",
                            "voluptatibus",
                            "nostrum",
                            "sapiente",
                        },
                        PermittedDNSNames: []string{
                            "saepe",
                            "ea",
                            "impedit",
                            "corporis",
                        },
                        PermittedEmailAddresses: []string{
                            "aliquid",
                            "inventore",
                        },
                        PermittedIPRanges: []string{
                            "ea",
                            "quo",
                        },
                        PermittedUris: []string{
                            "recusandae",
                        },
                    },
                    PolicyIds: []shared.ObjectID{
                        shared.ObjectID{
                            ObjectIDPath: []int{
                                53427,
                                952871,
                            },
                        },
                    },
                },
                IdentityConstraints: &shared.CertificateIdentityConstraints{
                    AllowSubjectAltNamesPassthrough: sdk.Bool(false),
                    AllowSubjectPassthrough: sdk.Bool(false),
                    CelExpression: &shared.Expr{
                        Description: sdk.String("libero"),
                        Expression: sdk.String("aut"),
                        Location: sdk.String("aut"),
                        Title: sdk.String("Ms."),
                    },
                },
                MaximumLifetime: sdk.String("impedit"),
                PassthroughExtensions: &shared.CertificateExtensionConstraints{
                    AdditionalExtensions: []shared.ObjectID{
                        shared.ObjectID{
                            ObjectIDPath: []int{
                                882860,
                            },
                        },
                        shared.ObjectID{
                            ObjectIDPath: []int{
                                250622,
                            },
                        },
                    },
                    KnownExtensions: []shared.CertificateExtensionConstraintsKnownExtensionsEnum{
                        shared.CertificateExtensionConstraintsKnownExtensionsEnumPolicyIds,
                    },
                },
            },
            Labels: map[string]string{
                "placeat": "velit",
                "eum": "autem",
                "nobis": "quas",
            },
            PublishingOptions: &shared.PublishingOptions{
                PublishCaCert: sdk.Bool(false),
                PublishCrl: sdk.Bool(false),
            },
            Tier: shared.CaPoolTierEnumDevops.ToPointer(),
        },
        AccessToken: sdk.String("nulla"),
        Alt: shared.AltEnumMedia.ToPointer(),
        CaPoolID: sdk.String("libero"),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("numquam"),
        OauthToken: sdk.String("explicabo"),
        Parent: "provident",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        RequestID: sdk.String("molestiae"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("odio"),
    }, operations.PrivatecaProjectsLocationsCaPoolsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## PrivatecaProjectsLocationsCaPoolsFetchCaCerts

FetchCaCerts returns the current trust anchor for the CaPool. This will include CA certificate chains for all ACTIVE CertificateAuthority resources in the CaPool.

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
    res, err := s.Projects.PrivatecaProjectsLocationsCaPoolsFetchCaCerts(ctx, operations.PrivatecaProjectsLocationsCaPoolsFetchCaCertsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        FetchCaCertsRequest: &shared.FetchCaCertsRequest{
            RequestID: sdk.String("esse"),
        },
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumMedia.ToPointer(),
        CaPool: "fuga",
        Callback: sdk.String("reprehenderit"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("fugiat"),
        OauthToken: sdk.String("ut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eum"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("assumenda"),
    }, operations.PrivatecaProjectsLocationsCaPoolsFetchCaCertsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchCaCertsResponse != nil {
        // handle response
    }
}
```

## PrivatecaProjectsLocationsCaPoolsList

Lists CaPools.

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
    res, err := s.Projects.PrivatecaProjectsLocationsCaPoolsList(ctx, operations.PrivatecaProjectsLocationsCaPoolsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("ipsa"),
        Filter: sdk.String("id"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("neque"),
        OrderBy: sdk.String("quo"),
        PageSize: sdk.Int64(847276),
        PageToken: sdk.String("quo"),
        Parent: "fuga",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eius"),
        UploadType: sdk.String("eos"),
        UploadProtocol: sdk.String("voluptas"),
    }, operations.PrivatecaProjectsLocationsCaPoolsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCaPoolsResponse != nil {
        // handle response
    }
}
```

## PrivatecaProjectsLocationsCertificateTemplatesCreate

Create a new CertificateTemplate in a given Project and Location.

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
    res, err := s.Projects.PrivatecaProjectsLocationsCertificateTemplatesCreate(ctx, operations.PrivatecaProjectsLocationsCertificateTemplatesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CertificateTemplateInput: &shared.CertificateTemplateInput{
            Description: sdk.String("cupiditate"),
            IdentityConstraints: &shared.CertificateIdentityConstraints{
                AllowSubjectAltNamesPassthrough: sdk.Bool(false),
                AllowSubjectPassthrough: sdk.Bool(false),
                CelExpression: &shared.Expr{
                    Description: sdk.String("consequatur"),
                    Expression: sdk.String("tempora"),
                    Location: sdk.String("debitis"),
                    Title: sdk.String("Mrs."),
                },
            },
            Labels: map[string]string{
                "sequi": "quo",
            },
            PassthroughExtensions: &shared.CertificateExtensionConstraints{
                AdditionalExtensions: []shared.ObjectID{
                    shared.ObjectID{
                        ObjectIDPath: []int{
                            44612,
                            715179,
                            799796,
                            490819,
                        },
                    },
                    shared.ObjectID{
                        ObjectIDPath: []int{
                            469498,
                        },
                    },
                },
                KnownExtensions: []shared.CertificateExtensionConstraintsKnownExtensionsEnum{
                    shared.CertificateExtensionConstraintsKnownExtensionsEnumNameConstraints,
                    shared.CertificateExtensionConstraintsKnownExtensionsEnumExtendedKeyUsage,
                    shared.CertificateExtensionConstraintsKnownExtensionsEnumCaOptions,
                },
            },
            PredefinedValues: &shared.X509Parameters{
                AdditionalExtensions: []shared.X509Extension{
                    shared.X509Extension{
                        Critical: sdk.Bool(false),
                        ObjectID: &shared.ObjectID{
                            ObjectIDPath: []int{
                                959434,
                                174112,
                            },
                        },
                        Value: sdk.String("deserunt"),
                    },
                    shared.X509Extension{
                        Critical: sdk.Bool(false),
                        ObjectID: &shared.ObjectID{
                            ObjectIDPath: []int{
                                35362,
                                783648,
                            },
                        },
                        Value: sdk.String("eum"),
                    },
                    shared.X509Extension{
                        Critical: sdk.Bool(false),
                        ObjectID: &shared.ObjectID{
                            ObjectIDPath: []int{
                                510017,
                                159867,
                                536178,
                            },
                        },
                        Value: sdk.String("fugit"),
                    },
                },
                AiaOcspServers: []string{
                    "mollitia",
                    "incidunt",
                    "atque",
                },
                CaOptions: &shared.CaOptions{
                    IsCa: sdk.Bool(false),
                    MaxIssuerPathLength: sdk.Int(128860),
                },
                KeyUsage: &shared.KeyUsage{
                    BaseKeyUsage: &shared.KeyUsageOptions{
                        CertSign: sdk.Bool(false),
                        ContentCommitment: sdk.Bool(false),
                        CrlSign: sdk.Bool(false),
                        DataEncipherment: sdk.Bool(false),
                        DecipherOnly: sdk.Bool(false),
                        DigitalSignature: sdk.Bool(false),
                        EncipherOnly: sdk.Bool(false),
                        KeyAgreement: sdk.Bool(false),
                        KeyEncipherment: sdk.Bool(false),
                    },
                    ExtendedKeyUsage: &shared.ExtendedKeyUsageOptions{
                        ClientAuth: sdk.Bool(false),
                        CodeSigning: sdk.Bool(false),
                        EmailProtection: sdk.Bool(false),
                        OcspSigning: sdk.Bool(false),
                        ServerAuth: sdk.Bool(false),
                        TimeStamping: sdk.Bool(false),
                    },
                    UnknownExtendedKeyUsages: []shared.ObjectID{
                        shared.ObjectID{
                            ObjectIDPath: []int{
                                147014,
                                956406,
                            },
                        },
                        shared.ObjectID{
                            ObjectIDPath: []int{
                                187131,
                            },
                        },
                    },
                },
                NameConstraints: &shared.NameConstraints{
                    Critical: sdk.Bool(false),
                    ExcludedDNSNames: []string{
                        "saepe",
                    },
                    ExcludedEmailAddresses: []string{
                        "atque",
                        "et",
                        "esse",
                    },
                    ExcludedIPRanges: []string{
                        "accusamus",
                        "veritatis",
                        "esse",
                        "quod",
                    },
                    ExcludedUris: []string{
                        "vero",
                        "aliquid",
                        "quasi",
                    },
                    PermittedDNSNames: []string{
                        "vel",
                        "harum",
                        "molestiae",
                        "rerum",
                    },
                    PermittedEmailAddresses: []string{
                        "minima",
                        "distinctio",
                        "eligendi",
                    },
                    PermittedIPRanges: []string{
                        "culpa",
                    },
                    PermittedUris: []string{
                        "adipisci",
                        "cumque",
                        "consequuntur",
                    },
                },
                PolicyIds: []shared.ObjectID{
                    shared.ObjectID{
                        ObjectIDPath: []int{
                            308286,
                            959167,
                            232865,
                            458139,
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("blanditiis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("a"),
        CertificateTemplateID: sdk.String("nulla"),
        Fields: sdk.String("quas"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("quasi"),
        Parent: "a",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        RequestID: sdk.String("sint"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("possimus"),
    }, operations.PrivatecaProjectsLocationsCertificateTemplatesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicy

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
    res, err := s.Projects.PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicy(ctx, operations.PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("eveniet"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("facere"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("quasi"),
        OptionsRequestedPolicyVersion: sdk.Int64(628899),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        Resource: "aliquid",
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("quae"),
    }, operations.PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## PrivatecaProjectsLocationsCertificateTemplatesList

Lists CertificateTemplates.

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
    res, err := s.Projects.PrivatecaProjectsLocationsCertificateTemplatesList(ctx, operations.PrivatecaProjectsLocationsCertificateTemplatesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eius"),
        Fields: sdk.String("libero"),
        Filter: sdk.String("illum"),
        Key: sdk.String("soluta"),
        OauthToken: sdk.String("accusantium"),
        OrderBy: sdk.String("aliquam"),
        PageSize: sdk.Int64(958983),
        PageToken: sdk.String("dicta"),
        Parent: "ullam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reprehenderit"),
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("nisi"),
    }, operations.PrivatecaProjectsLocationsCertificateTemplatesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCertificateTemplatesResponse != nil {
        // handle response
    }
}
```

## PrivatecaProjectsLocationsCertificateTemplatesPatch

Update a CertificateTemplate.

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
    res, err := s.Projects.PrivatecaProjectsLocationsCertificateTemplatesPatch(ctx, operations.PrivatecaProjectsLocationsCertificateTemplatesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CertificateTemplateInput: &shared.CertificateTemplateInput{
            Description: sdk.String("voluptatum"),
            IdentityConstraints: &shared.CertificateIdentityConstraints{
                AllowSubjectAltNamesPassthrough: sdk.Bool(false),
                AllowSubjectPassthrough: sdk.Bool(false),
                CelExpression: &shared.Expr{
                    Description: sdk.String("qui"),
                    Expression: sdk.String("quibusdam"),
                    Location: sdk.String("ex"),
                    Title: sdk.String("Ms."),
                },
            },
            Labels: map[string]string{
                "dolorum": "architecto",
                "omnis": "tenetur",
                "quasi": "at",
                "et": "voluptate",
            },
            PassthroughExtensions: &shared.CertificateExtensionConstraints{
                AdditionalExtensions: []shared.ObjectID{
                    shared.ObjectID{
                        ObjectIDPath: []int{
                            86532,
                            232744,
                        },
                    },
                },
                KnownExtensions: []shared.CertificateExtensionConstraintsKnownExtensionsEnum{
                    shared.CertificateExtensionConstraintsKnownExtensionsEnumPolicyIds,
                },
            },
            PredefinedValues: &shared.X509Parameters{
                AdditionalExtensions: []shared.X509Extension{
                    shared.X509Extension{
                        Critical: sdk.Bool(false),
                        ObjectID: &shared.ObjectID{
                            ObjectIDPath: []int{
                                522371,
                            },
                        },
                        Value: sdk.String("aut"),
                    },
                    shared.X509Extension{
                        Critical: sdk.Bool(false),
                        ObjectID: &shared.ObjectID{
                            ObjectIDPath: []int{
                                428796,
                                649832,
                                68074,
                            },
                        },
                        Value: sdk.String("corrupti"),
                    },
                    shared.X509Extension{
                        Critical: sdk.Bool(false),
                        ObjectID: &shared.ObjectID{
                            ObjectIDPath: []int{
                                32465,
                                221161,
                            },
                        },
                        Value: sdk.String("occaecati"),
                    },
                    shared.X509Extension{
                        Critical: sdk.Bool(false),
                        ObjectID: &shared.ObjectID{
                            ObjectIDPath: []int{
                                771089,
                                131055,
                            },
                        },
                        Value: sdk.String("voluptas"),
                    },
                },
                AiaOcspServers: []string{
                    "dignissimos",
                },
                CaOptions: &shared.CaOptions{
                    IsCa: sdk.Bool(false),
                    MaxIssuerPathLength: sdk.Int(115484),
                },
                KeyUsage: &shared.KeyUsage{
                    BaseKeyUsage: &shared.KeyUsageOptions{
                        CertSign: sdk.Bool(false),
                        ContentCommitment: sdk.Bool(false),
                        CrlSign: sdk.Bool(false),
                        DataEncipherment: sdk.Bool(false),
                        DecipherOnly: sdk.Bool(false),
                        DigitalSignature: sdk.Bool(false),
                        EncipherOnly: sdk.Bool(false),
                        KeyAgreement: sdk.Bool(false),
                        KeyEncipherment: sdk.Bool(false),
                    },
                    ExtendedKeyUsage: &shared.ExtendedKeyUsageOptions{
                        ClientAuth: sdk.Bool(false),
                        CodeSigning: sdk.Bool(false),
                        EmailProtection: sdk.Bool(false),
                        OcspSigning: sdk.Bool(false),
                        ServerAuth: sdk.Bool(false),
                        TimeStamping: sdk.Bool(false),
                    },
                    UnknownExtendedKeyUsages: []shared.ObjectID{
                        shared.ObjectID{
                            ObjectIDPath: []int{
                                244651,
                                974257,
                                374323,
                            },
                        },
                        shared.ObjectID{
                            ObjectIDPath: []int{
                                45659,
                                409054,
                                310067,
                                162954,
                            },
                        },
                        shared.ObjectID{
                            ObjectIDPath: []int{
                                638762,
                                807023,
                                490305,
                                640024,
                            },
                        },
                        shared.ObjectID{
                            ObjectIDPath: []int{
                                368102,
                                65304,
                                312753,
                                783235,
                            },
                        },
                    },
                },
                NameConstraints: &shared.NameConstraints{
                    Critical: sdk.Bool(false),
                    ExcludedDNSNames: []string{
                        "labore",
                        "ab",
                        "adipisci",
                        "fuga",
                    },
                    ExcludedEmailAddresses: []string{
                        "suscipit",
                        "velit",
                        "culpa",
                    },
                    ExcludedIPRanges: []string{
                        "recusandae",
                        "totam",
                        "fugiat",
                    },
                    ExcludedUris: []string{
                        "ducimus",
                        "quos",
                    },
                    PermittedDNSNames: []string{
                        "labore",
                        "possimus",
                    },
                    PermittedEmailAddresses: []string{
                        "cum",
                        "commodi",
                        "in",
                    },
                    PermittedIPRanges: []string{
                        "reiciendis",
                        "assumenda",
                    },
                    PermittedUris: []string{
                        "recusandae",
                        "aliquid",
                    },
                },
                PolicyIds: []shared.ObjectID{
                    shared.ObjectID{
                        ObjectIDPath: []int{
                            232627,
                            449083,
                            348519,
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("earum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("numquam"),
        Fields: sdk.String("doloribus"),
        Key: sdk.String("suscipit"),
        Name: "Rickey Ullrich",
        OauthToken: sdk.String("sunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("asperiores"),
        RequestID: sdk.String("adipisci"),
        UpdateMask: sdk.String("non"),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("beatae"),
    }, operations.PrivatecaProjectsLocationsCertificateTemplatesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicy

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
    res, err := s.Projects.PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicy(ctx, operations.PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "corporis",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "ipsa",
                                    "voluptates",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "accusamus",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "aspernatur",
                                    "voluptas",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("voluptas"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "dolorum",
                                    "adipisci",
                                    "minus",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "in",
                                    "dolore",
                                    "aliquam",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("temporibus"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "cum",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "hic",
                                    "nesciunt",
                                    "culpa",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("pariatur"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "exercitationem",
                                    "nobis",
                                    "sit",
                                    "rerum",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "explicabo",
                                    "asperiores",
                                    "facilis",
                                    "voluptate",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "iste",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("laborum"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("in"),
                            Expression: sdk.String("commodi"),
                            Location: sdk.String("quidem"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "unde",
                            "architecto",
                        },
                        Role: sdk.String("suscipit"),
                    },
                },
                Etag: sdk.String("sapiente"),
                Version: sdk.Int(895386),
            },
            UpdateMask: sdk.String("illo"),
        },
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("corrupti"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("incidunt"),
        OauthToken: sdk.String("sed"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        Resource: "eius",
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissions

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
    res, err := s.Projects.PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissions(ctx, operations.PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "quos",
                "voluptatibus",
                "tempora",
            },
        },
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("ex"),
        Key: sdk.String("sit"),
        OauthToken: sdk.String("non"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officiis"),
        Resource: "praesentium",
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("quaerat"),
    }, operations.PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```

## PrivatecaProjectsLocationsList

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
    res, err := s.Projects.PrivatecaProjectsLocationsList(ctx, operations.PrivatecaProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("rem"),
        Fields: sdk.String("sit"),
        Filter: sdk.String("nobis"),
        Key: sdk.String("error"),
        Name: "Lorraine Walsh",
        OauthToken: sdk.String("magni"),
        PageSize: sdk.Int64(48690),
        PageToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        UploadType: sdk.String("veniam"),
        UploadProtocol: sdk.String("in"),
    }, operations.PrivatecaProjectsLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```

## PrivatecaProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

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
    res, err := s.Projects.PrivatecaProjectsLocationsOperationsCancel(ctx, operations.PrivatecaProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "laudantium": "exercitationem",
        },
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("laboriosam"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("voluptatum"),
        Name: "Irvin Rath",
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nostrum"),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.PrivatecaProjectsLocationsOperationsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## PrivatecaProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

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
    res, err := s.Projects.PrivatecaProjectsLocationsOperationsDelete(ctx, operations.PrivatecaProjectsLocationsOperationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("atque"),
        Fields: sdk.String("fugit"),
        IgnoreDependentResources: sdk.Bool(false),
        Key: sdk.String("ut"),
        Name: "George Nicolas",
        OauthToken: sdk.String("consequatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        RequestID: sdk.String("ipsam"),
        SkipGracePeriod: sdk.Bool(false),
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("voluptatum"),
    }, operations.PrivatecaProjectsLocationsOperationsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## PrivatecaProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

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
    res, err := s.Projects.PrivatecaProjectsLocationsOperationsGet(ctx, operations.PrivatecaProjectsLocationsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("et"),
        Fields: sdk.String("blanditiis"),
        Key: sdk.String("ex"),
        Name: "Karen Kautzer",
        OauthToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequatur"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.PrivatecaProjectsLocationsOperationsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## PrivatecaProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

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
    res, err := s.Projects.PrivatecaProjectsLocationsOperationsList(ctx, operations.PrivatecaProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("harum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("occaecati"),
        Filter: sdk.String("labore"),
        Key: sdk.String("quidem"),
        Name: "Cameron Reilly",
        OauthToken: sdk.String("alias"),
        PageSize: sdk.Int64(227084),
        PageToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("unde"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.PrivatecaProjectsLocationsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```
