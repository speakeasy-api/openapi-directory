# Projects

### Available Operations

* [CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate](#certificatemanagerprojectslocationscertificateissuanceconfigscreate) - Creates a new CertificateIssuanceConfig in a given project and location.
* [CertificatemanagerProjectsLocationsCertificateIssuanceConfigsList](#certificatemanagerprojectslocationscertificateissuanceconfigslist) - Lists CertificateIssuanceConfigs in a given project and location.
* [CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreate](#certificatemanagerprojectslocationscertificatemapscertificatemapentriescreate) - Creates a new CertificateMapEntry in a given project and location.
* [CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesList](#certificatemanagerprojectslocationscertificatemapscertificatemapentrieslist) - Lists CertificateMapEntries in a given project and location.
* [CertificatemanagerProjectsLocationsCertificateMapsCreate](#certificatemanagerprojectslocationscertificatemapscreate) - Creates a new CertificateMap in a given project and location.
* [CertificatemanagerProjectsLocationsCertificateMapsList](#certificatemanagerprojectslocationscertificatemapslist) - Lists CertificateMaps in a given project and location.
* [CertificatemanagerProjectsLocationsCertificatesCreate](#certificatemanagerprojectslocationscertificatescreate) - Creates a new Certificate in a given project and location.
* [CertificatemanagerProjectsLocationsCertificatesList](#certificatemanagerprojectslocationscertificateslist) - Lists Certificates in a given project and location.
* [CertificatemanagerProjectsLocationsDNSAuthorizationsCreate](#certificatemanagerprojectslocationsdnsauthorizationscreate) - Creates a new DnsAuthorization in a given project and location.
* [CertificatemanagerProjectsLocationsDNSAuthorizationsList](#certificatemanagerprojectslocationsdnsauthorizationslist) - Lists DnsAuthorizations in a given project and location.
* [CertificatemanagerProjectsLocationsList](#certificatemanagerprojectslocationslist) - Lists information about the supported locations for this service.
* [CertificatemanagerProjectsLocationsOperationsCancel](#certificatemanagerprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [CertificatemanagerProjectsLocationsOperationsList](#certificatemanagerprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [CertificatemanagerProjectsLocationsTrustConfigsCreate](#certificatemanagerprojectslocationstrustconfigscreate) - Creates a new TrustConfig in a given project and location.
* [CertificatemanagerProjectsLocationsTrustConfigsDelete](#certificatemanagerprojectslocationstrustconfigsdelete) - Deletes a single TrustConfig.
* [CertificatemanagerProjectsLocationsTrustConfigsGet](#certificatemanagerprojectslocationstrustconfigsget) - Gets details of a single TrustConfig.
* [CertificatemanagerProjectsLocationsTrustConfigsList](#certificatemanagerprojectslocationstrustconfigslist) - Lists TrustConfigs in a given project and location.
* [CertificatemanagerProjectsLocationsTrustConfigsPatch](#certificatemanagerprojectslocationstrustconfigspatch) - Updates a TrustConfig.

## CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate

Creates a new CertificateIssuanceConfig in a given project and location.

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
    res, err := s.Projects.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate(ctx, operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CertificateIssuanceConfigInput: &shared.CertificateIssuanceConfigInput{
            CertificateAuthorityConfig: &shared.CertificateAuthorityConfig{
                CertificateAuthorityServiceConfig: &shared.CertificateAuthorityServiceConfig{
                    CaPool: sdk.String("deserunt"),
                },
            },
            Description: sdk.String("perferendis"),
            KeyAlgorithm: shared.CertificateIssuanceConfigKeyAlgorithmEnumRsa2048.ToPointer(),
            Labels: map[string]string{
                "sapiente": "quo",
                "odit": "at",
                "at": "maiores",
                "molestiae": "quod",
            },
            Lifetime: sdk.String("quod"),
            Name: sdk.String("Deanna Sauer MD"),
            RotationWindowPercentage: sdk.Int(639921),
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deleniti"),
        CertificateIssuanceConfigID: sdk.String("hic"),
        Fields: sdk.String("optio"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("beatae"),
        Parent: "commodi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("qui"),
    }, operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity{
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

## CertificatemanagerProjectsLocationsCertificateIssuanceConfigsList

Lists CertificateIssuanceConfigs in a given project and location.

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
    res, err := s.Projects.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsList(ctx, operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("excepturi"),
        Filter: sdk.String("aspernatur"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("ad"),
        OrderBy: sdk.String("natus"),
        PageSize: sdk.Int64(149675),
        PageToken: sdk.String("iste"),
        Parent: "dolor",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("hic"),
    }, operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCertificateIssuanceConfigsResponse != nil {
        // handle response
    }
}
```

## CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreate

Creates a new CertificateMapEntry in a given project and location.

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
    res, err := s.Projects.CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreate(ctx, operations.CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CertificateMapEntryInput: &shared.CertificateMapEntryInput{
            Certificates: []string{
                "in",
                "corporis",
                "iste",
            },
            Description: sdk.String("iure"),
            Hostname: sdk.String("unsteady-progress.com"),
            Labels: map[string]string{
                "reiciendis": "est",
            },
            Matcher: shared.CertificateMapEntryMatcherEnumPrimary.ToPointer(),
            Name: sdk.String("Ernest Ebert"),
        },
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("omnis"),
        CertificateMapEntryID: sdk.String("nemo"),
        Fields: sdk.String("minima"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("accusantium"),
        Parent: "iure",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateSecurity{
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

## CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesList

Lists CertificateMapEntries in a given project and location.

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
    res, err := s.Projects.CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesList(ctx, operations.CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("culpa"),
        Fields: sdk.String("consequuntur"),
        Filter: sdk.String("repellat"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("occaecati"),
        OrderBy: sdk.String("numquam"),
        PageSize: sdk.Int64(414369),
        PageToken: sdk.String("quam"),
        Parent: "molestiae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("velit"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("quia"),
    }, operations.CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCertificateMapEntriesResponse != nil {
        // handle response
    }
}
```

## CertificatemanagerProjectsLocationsCertificateMapsCreate

Creates a new CertificateMap in a given project and location.

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
    res, err := s.Projects.CertificatemanagerProjectsLocationsCertificateMapsCreate(ctx, operations.CertificatemanagerProjectsLocationsCertificateMapsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CertificateMapInput: &shared.CertificateMapInput{
            Description: sdk.String("vitae"),
            Labels: map[string]string{
                "animi": "enim",
                "odit": "quo",
                "sequi": "tenetur",
            },
            Name: sdk.String("Mr. Alberta Schuster"),
        },
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quasi"),
        CertificateMapID: sdk.String("reiciendis"),
        Fields: sdk.String("voluptatibus"),
        Key: sdk.String("vero"),
        OauthToken: sdk.String("nihil"),
        Parent: "praesentium",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.CertificatemanagerProjectsLocationsCertificateMapsCreateSecurity{
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

## CertificatemanagerProjectsLocationsCertificateMapsList

Lists CertificateMaps in a given project and location.

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
    res, err := s.Projects.CertificatemanagerProjectsLocationsCertificateMapsList(ctx, operations.CertificatemanagerProjectsLocationsCertificateMapsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("doloremque"),
        Fields: sdk.String("reprehenderit"),
        Filter: sdk.String("ut"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("dicta"),
        OrderBy: sdk.String("corporis"),
        PageSize: sdk.Int64(296140),
        PageToken: sdk.String("iusto"),
        Parent: "dicta",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("harum"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.CertificatemanagerProjectsLocationsCertificateMapsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCertificateMapsResponse != nil {
        // handle response
    }
}
```

## CertificatemanagerProjectsLocationsCertificatesCreate

Creates a new Certificate in a given project and location.

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
    res, err := s.Projects.CertificatemanagerProjectsLocationsCertificatesCreate(ctx, operations.CertificatemanagerProjectsLocationsCertificatesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CertificateInput: &shared.CertificateInput{
            Description: sdk.String("repudiandae"),
            Labels: map[string]string{
                "ipsum": "quidem",
            },
            Managed: &shared.ManagedCertificateInput{
                DNSAuthorizations: []string{
                    "excepturi",
                    "pariatur",
                    "modi",
                },
                Domains: []string{
                    "rem",
                    "voluptates",
                    "quasi",
                },
                IssuanceConfig: sdk.String("repudiandae"),
            },
            Name: sdk.String("Patrick Ward"),
            Scope: shared.CertificateScopeEnumDefault.ToPointer(),
            SelfManaged: &shared.SelfManagedCertificate{
                PemCertificate: sdk.String("est"),
                PemPrivateKey: sdk.String("quibusdam"),
            },
        },
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("distinctio"),
        CertificateID: sdk.String("quibusdam"),
        Fields: sdk.String("labore"),
        Key: sdk.String("modi"),
        OauthToken: sdk.String("qui"),
        Parent: "aliquid",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cupiditate"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.CertificatemanagerProjectsLocationsCertificatesCreateSecurity{
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

## CertificatemanagerProjectsLocationsCertificatesList

Lists Certificates in a given project and location.

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
    res, err := s.Projects.CertificatemanagerProjectsLocationsCertificatesList(ctx, operations.CertificatemanagerProjectsLocationsCertificatesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("assumenda"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("alias"),
        Fields: sdk.String("fugit"),
        Filter: sdk.String("dolorum"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("tempora"),
        OrderBy: sdk.String("facilis"),
        PageSize: sdk.Int64(735194),
        PageToken: sdk.String("labore"),
        Parent: "delectus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eum"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("eligendi"),
    }, operations.CertificatemanagerProjectsLocationsCertificatesListSecurity{
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

## CertificatemanagerProjectsLocationsDNSAuthorizationsCreate

Creates a new DnsAuthorization in a given project and location.

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
    res, err := s.Projects.CertificatemanagerProjectsLocationsDNSAuthorizationsCreate(ctx, operations.CertificatemanagerProjectsLocationsDNSAuthorizationsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DNSAuthorizationInput: &shared.DNSAuthorizationInput{
            Description: sdk.String("aliquid"),
            Domain: sdk.String("provident"),
            Labels: map[string]string{
                "sint": "officia",
                "dolor": "debitis",
                "a": "dolorum",
                "in": "in",
            },
            Name: sdk.String("Mrs. Emilio Price"),
        },
        AccessToken: sdk.String("facere"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aliquid"),
        DNSAuthorizationID: sdk.String("laborum"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("non"),
        OauthToken: sdk.String("occaecati"),
        Parent: "enim",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.CertificatemanagerProjectsLocationsDNSAuthorizationsCreateSecurity{
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

## CertificatemanagerProjectsLocationsDNSAuthorizationsList

Lists DnsAuthorizations in a given project and location.

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
    res, err := s.Projects.CertificatemanagerProjectsLocationsDNSAuthorizationsList(ctx, operations.CertificatemanagerProjectsLocationsDNSAuthorizationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("blanditiis"),
        Fields: sdk.String("deleniti"),
        Filter: sdk.String("sapiente"),
        Key: sdk.String("amet"),
        OauthToken: sdk.String("deserunt"),
        OrderBy: sdk.String("nisi"),
        PageSize: sdk.Int64(423855),
        PageToken: sdk.String("natus"),
        Parent: "omnis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("nihil"),
    }, operations.CertificatemanagerProjectsLocationsDNSAuthorizationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDNSAuthorizationsResponse != nil {
        // handle response
    }
}
```

## CertificatemanagerProjectsLocationsList

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
    res, err := s.Projects.CertificatemanagerProjectsLocationsList(ctx, operations.CertificatemanagerProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("labore"),
        Filter: sdk.String("suscipit"),
        Key: sdk.String("natus"),
        Name: "Duane Thiel II",
        OauthToken: sdk.String("et"),
        PageSize: sdk.Int64(569965),
        PageToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("sint"),
    }, operations.CertificatemanagerProjectsLocationsListSecurity{
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

## CertificatemanagerProjectsLocationsOperationsCancel

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
    res, err := s.Projects.CertificatemanagerProjectsLocationsOperationsCancel(ctx, operations.CertificatemanagerProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "reiciendis": "mollitia",
            "ad": "eum",
            "dolor": "necessitatibus",
        },
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("iure"),
        Key: sdk.String("doloribus"),
        Name: "Frederick Schoen",
        OauthToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("repudiandae"),
    }, operations.CertificatemanagerProjectsLocationsOperationsCancelSecurity{
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

## CertificatemanagerProjectsLocationsOperationsList

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
    res, err := s.Projects.CertificatemanagerProjectsLocationsOperationsList(ctx, operations.CertificatemanagerProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("expedita"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repellat"),
        Fields: sdk.String("quibusdam"),
        Filter: sdk.String("sed"),
        Key: sdk.String("saepe"),
        Name: "Edward Crooks",
        OauthToken: sdk.String("magni"),
        PageSize: sdk.Int64(123820),
        PageToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illum"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("maxime"),
    }, operations.CertificatemanagerProjectsLocationsOperationsListSecurity{
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

## CertificatemanagerProjectsLocationsTrustConfigsCreate

Creates a new TrustConfig in a given project and location.

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
    res, err := s.Projects.CertificatemanagerProjectsLocationsTrustConfigsCreate(ctx, operations.CertificatemanagerProjectsLocationsTrustConfigsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TrustConfigInput: &shared.TrustConfigInput{
            Description: sdk.String("excepturi"),
            Etag: sdk.String("odit"),
            Labels: map[string]string{
                "accusantium": "ab",
                "maiores": "quidem",
            },
            Name: sdk.String("Colleen Johnston PhD"),
            TrustStores: []shared.TrustStore{
                shared.TrustStore{
                    IntermediateCas: []shared.IntermediateCA{
                        shared.IntermediateCA{
                            PemCertificate: sdk.String("perferendis"),
                        },
                        shared.IntermediateCA{
                            PemCertificate: sdk.String("fugiat"),
                        },
                        shared.IntermediateCA{
                            PemCertificate: sdk.String("amet"),
                        },
                        shared.IntermediateCA{
                            PemCertificate: sdk.String("aut"),
                        },
                    },
                    TrustAnchors: []shared.TrustAnchor{
                        shared.TrustAnchor{
                            PemCertificate: sdk.String("corporis"),
                        },
                        shared.TrustAnchor{
                            PemCertificate: sdk.String("hic"),
                        },
                        shared.TrustAnchor{
                            PemCertificate: sdk.String("libero"),
                        },
                        shared.TrustAnchor{
                            PemCertificate: sdk.String("nobis"),
                        },
                    },
                },
                shared.TrustStore{
                    IntermediateCas: []shared.IntermediateCA{
                        shared.IntermediateCA{
                            PemCertificate: sdk.String("quis"),
                        },
                    },
                    TrustAnchors: []shared.TrustAnchor{
                        shared.TrustAnchor{
                            PemCertificate: sdk.String("dignissimos"),
                        },
                        shared.TrustAnchor{
                            PemCertificate: sdk.String("eaque"),
                        },
                        shared.TrustAnchor{
                            PemCertificate: sdk.String("quis"),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("nesciunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("dolores"),
        Key: sdk.String("minus"),
        OauthToken: sdk.String("quam"),
        Parent: "dolor",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        TrustConfigID: sdk.String("nostrum"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("recusandae"),
    }, operations.CertificatemanagerProjectsLocationsTrustConfigsCreateSecurity{
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

## CertificatemanagerProjectsLocationsTrustConfigsDelete

Deletes a single TrustConfig.

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
    res, err := s.Projects.CertificatemanagerProjectsLocationsTrustConfigsDelete(ctx, operations.CertificatemanagerProjectsLocationsTrustConfigsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptatem"),
        Etag: sdk.String("porro"),
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("blanditiis"),
        Name: "Gary Mayert",
        OauthToken: sdk.String("asperiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("earum"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("iste"),
    }, operations.CertificatemanagerProjectsLocationsTrustConfigsDeleteSecurity{
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

## CertificatemanagerProjectsLocationsTrustConfigsGet

Gets details of a single TrustConfig.

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
    res, err := s.Projects.CertificatemanagerProjectsLocationsTrustConfigsGet(ctx, operations.CertificatemanagerProjectsLocationsTrustConfigsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("nobis"),
        Key: sdk.String("libero"),
        Name: "Alex Luettgen",
        OauthToken: sdk.String("dolorem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.CertificatemanagerProjectsLocationsTrustConfigsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrustConfig != nil {
        // handle response
    }
}
```

## CertificatemanagerProjectsLocationsTrustConfigsList

Lists TrustConfigs in a given project and location.

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
    res, err := s.Projects.CertificatemanagerProjectsLocationsTrustConfigsList(ctx, operations.CertificatemanagerProjectsLocationsTrustConfigsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("dignissimos"),
        Filter: sdk.String("reiciendis"),
        Key: sdk.String("amet"),
        OauthToken: sdk.String("dolorum"),
        OrderBy: sdk.String("numquam"),
        PageSize: sdk.Int64(85295),
        PageToken: sdk.String("ipsa"),
        Parent: "ipsa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("odio"),
        UploadProtocol: sdk.String("quaerat"),
    }, operations.CertificatemanagerProjectsLocationsTrustConfigsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTrustConfigsResponse != nil {
        // handle response
    }
}
```

## CertificatemanagerProjectsLocationsTrustConfigsPatch

Updates a TrustConfig.

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
    res, err := s.Projects.CertificatemanagerProjectsLocationsTrustConfigsPatch(ctx, operations.CertificatemanagerProjectsLocationsTrustConfigsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TrustConfigInput: &shared.TrustConfigInput{
            Description: sdk.String("quidem"),
            Etag: sdk.String("voluptatibus"),
            Labels: map[string]string{
                "natus": "eos",
                "atque": "sit",
            },
            Name: sdk.String("Stephen Roberts"),
            TrustStores: []shared.TrustStore{
                shared.TrustStore{
                    IntermediateCas: []shared.IntermediateCA{
                        shared.IntermediateCA{
                            PemCertificate: sdk.String("deleniti"),
                        },
                        shared.IntermediateCA{
                            PemCertificate: sdk.String("omnis"),
                        },
                        shared.IntermediateCA{
                            PemCertificate: sdk.String("necessitatibus"),
                        },
                    },
                    TrustAnchors: []shared.TrustAnchor{
                        shared.TrustAnchor{
                            PemCertificate: sdk.String("asperiores"),
                        },
                        shared.TrustAnchor{
                            PemCertificate: sdk.String("nihil"),
                        },
                        shared.TrustAnchor{
                            PemCertificate: sdk.String("ipsum"),
                        },
                    },
                },
                shared.TrustStore{
                    IntermediateCas: []shared.IntermediateCA{
                        shared.IntermediateCA{
                            PemCertificate: sdk.String("id"),
                        },
                        shared.IntermediateCA{
                            PemCertificate: sdk.String("saepe"),
                        },
                    },
                    TrustAnchors: []shared.TrustAnchor{
                        shared.TrustAnchor{
                            PemCertificate: sdk.String("aspernatur"),
                        },
                        shared.TrustAnchor{
                            PemCertificate: sdk.String("perferendis"),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("ad"),
        Key: sdk.String("saepe"),
        Name: "Rosie McKenzie",
        OauthToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("similique"),
        UpdateMask: sdk.String("alias"),
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("quaerat"),
    }, operations.CertificatemanagerProjectsLocationsTrustConfigsPatchSecurity{
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
