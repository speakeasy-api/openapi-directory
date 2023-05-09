# Apps

### Available Operations

* [AppengineAppsAuthorizedCertificatesCreate](#appengineappsauthorizedcertificatescreate) - Uploads the specified SSL certificate.
* [AppengineAppsAuthorizedCertificatesDelete](#appengineappsauthorizedcertificatesdelete) - Deletes the specified SSL certificate.
* [AppengineAppsAuthorizedCertificatesGet](#appengineappsauthorizedcertificatesget) - Gets the specified SSL certificate.
* [AppengineAppsAuthorizedCertificatesList](#appengineappsauthorizedcertificateslist) - Lists all SSL certificates the user is authorized to administer.
* [AppengineAppsAuthorizedCertificatesPatch](#appengineappsauthorizedcertificatespatch) - Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.
* [AppengineAppsAuthorizedDomainsList](#appengineappsauthorizeddomainslist) - Lists all domains the user is authorized to administer.
* [AppengineAppsDomainMappingsCreate](#appengineappsdomainmappingscreate) - Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
* [AppengineAppsDomainMappingsDelete](#appengineappsdomainmappingsdelete) - Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
* [AppengineAppsDomainMappingsGet](#appengineappsdomainmappingsget) - Gets the specified domain mapping.
* [AppengineAppsDomainMappingsList](#appengineappsdomainmappingslist) - Lists the domain mappings on an application.
* [AppengineAppsDomainMappingsPatch](#appengineappsdomainmappingspatch) - Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
* [AppengineAppsLocationsGet](#appengineappslocationsget) - Gets information about a location.
* [AppengineAppsLocationsList](#appengineappslocationslist) - Lists information about the supported locations for this service.
* [AppengineAppsOperationsGet](#appengineappsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [AppengineAppsOperationsList](#appengineappsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

## AppengineAppsAuthorizedCertificatesCreate

Uploads the specified SSL certificate.

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
    res, err := s.Apps.AppengineAppsAuthorizedCertificatesCreate(ctx, operations.AppengineAppsAuthorizedCertificatesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AuthorizedCertificate: &shared.AuthorizedCertificate{
            CertificateRawData: &shared.CertificateRawData{
                PrivateKey: sdk.String("ipsum"),
                PublicCertificate: sdk.String("excepturi"),
            },
            DisplayName: sdk.String("aspernatur"),
            DomainMappingsCount: sdk.Int(18789),
            DomainNames: []string{
                "natus",
                "sed",
            },
            ExpireTime: sdk.String("iste"),
            ID: sdk.String("396fea75-96eb-410f-aaa2-352c5955907a"),
            ManagedCertificate: &shared.ManagedCertificate{
                LastRenewalTime: sdk.String("doloribus"),
                Status: shared.ManagedCertificateStatusEnumFailedRetryingCaaChecking.ToPointer(),
            },
            Name: sdk.String("Angie Durgan"),
            VisibleDomainMappings: []string{
                "mollitia",
                "occaecati",
                "numquam",
                "commodi",
            },
        },
        AccessToken: sdk.String("quam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AppsID: "velit",
        Callback: sdk.String("error"),
        Fields: sdk.String("quia"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("vitae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("animi"),
        UploadProtocol: sdk.String("enim"),
    }, operations.AppengineAppsAuthorizedCertificatesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthorizedCertificate != nil {
        // handle response
    }
}
```

## AppengineAppsAuthorizedCertificatesDelete

Deletes the specified SSL certificate.

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
    res, err := s.Apps.AppengineAppsAuthorizedCertificatesDelete(ctx, operations.AppengineAppsAuthorizedCertificatesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AppsID: "tenetur",
        AuthorizedCertificatesID: "ipsam",
        Callback: sdk.String("id"),
        Fields: sdk.String("possimus"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.AppengineAppsAuthorizedCertificatesDeleteSecurity{
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

## AppengineAppsAuthorizedCertificatesGet

Gets the specified SSL certificate.

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
    res, err := s.Apps.AppengineAppsAuthorizedCertificatesGet(ctx, operations.AppengineAppsAuthorizedCertificatesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        AppsID: "vero",
        AuthorizedCertificatesID: "nihil",
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("voluptatibus"),
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("omnis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("perferendis"),
        View: operations.AppengineAppsAuthorizedCertificatesGetViewEnumBasicCertificate.ToPointer(),
    }, operations.AppengineAppsAuthorizedCertificatesGetSecurity{
        Option1: &operations.AppengineAppsAuthorizedCertificatesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthorizedCertificate != nil {
        // handle response
    }
}
```

## AppengineAppsAuthorizedCertificatesList

Lists all SSL certificates the user is authorized to administer.

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
    res, err := s.Apps.AppengineAppsAuthorizedCertificatesList(ctx, operations.AppengineAppsAuthorizedCertificatesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ut"),
        Alt: shared.AltEnumProto.ToPointer(),
        AppsID: "dicta",
        Callback: sdk.String("corporis"),
        Fields: sdk.String("dolore"),
        Key: sdk.String("iusto"),
        OauthToken: sdk.String("dicta"),
        PageSize: sdk.Int64(688661),
        PageToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("repudiandae"),
        View: operations.AppengineAppsAuthorizedCertificatesListViewEnumBasicCertificate.ToPointer(),
    }, operations.AppengineAppsAuthorizedCertificatesListSecurity{
        Option1: &operations.AppengineAppsAuthorizedCertificatesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAuthorizedCertificatesResponse != nil {
        // handle response
    }
}
```

## AppengineAppsAuthorizedCertificatesPatch

Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.

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
    res, err := s.Apps.AppengineAppsAuthorizedCertificatesPatch(ctx, operations.AppengineAppsAuthorizedCertificatesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AuthorizedCertificate: &shared.AuthorizedCertificate{
            CertificateRawData: &shared.CertificateRawData{
                PrivateKey: sdk.String("quidem"),
                PublicCertificate: sdk.String("molestias"),
            },
            DisplayName: sdk.String("excepturi"),
            DomainMappingsCount: sdk.Int(865103),
            DomainNames: []string{
                "praesentium",
                "rem",
            },
            ExpireTime: sdk.String("voluptates"),
            ID: sdk.String("1e91e450-ad2a-4bd4-8269-802d502a94bb"),
            ManagedCertificate: &shared.ManagedCertificate{
                LastRenewalTime: sdk.String("labore"),
                Status: shared.ManagedCertificateStatusEnumFailedRetryingCaaChecking.ToPointer(),
            },
            Name: sdk.String("Ethel Roob"),
            VisibleDomainMappings: []string{
                "necessitatibus",
                "sint",
                "officia",
            },
        },
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumProto.ToPointer(),
        AppsID: "a",
        AuthorizedCertificatesID: "dolorum",
        Callback: sdk.String("in"),
        Fields: sdk.String("in"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rerum"),
        UpdateMask: sdk.String("dicta"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("cumque"),
    }, operations.AppengineAppsAuthorizedCertificatesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthorizedCertificate != nil {
        // handle response
    }
}
```

## AppengineAppsAuthorizedDomainsList

Lists all domains the user is authorized to administer.

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
    res, err := s.Apps.AppengineAppsAuthorizedDomainsList(ctx, operations.AppengineAppsAuthorizedDomainsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AppsID: "laborum",
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("non"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("enim"),
        PageSize: sdk.Int64(881736),
        PageToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("nam"),
    }, operations.AppengineAppsAuthorizedDomainsListSecurity{
        Option1: &operations.AppengineAppsAuthorizedDomainsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAuthorizedDomainsResponse != nil {
        // handle response
    }
}
```

## AppengineAppsDomainMappingsCreate

Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.

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
    res, err := s.Apps.AppengineAppsDomainMappingsCreate(ctx, operations.AppengineAppsDomainMappingsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DomainMapping: &shared.DomainMapping{
            ID: sdk.String("88f3a669-9707-44ba-8469-b6e214195989"),
            Name: sdk.String("Angie Wisozk"),
            ResourceRecords: []shared.ResourceRecord{
                shared.ResourceRecord{
                    Name: sdk.String("Jana Connelly III"),
                    Rrdata: sdk.String("doloribus"),
                    Type: shared.ResourceRecordTypeEnumCname.ToPointer(),
                },
                shared.ResourceRecord{
                    Name: sdk.String("Jasmine Lind"),
                    Rrdata: sdk.String("architecto"),
                    Type: shared.ResourceRecordTypeEnumA.ToPointer(),
                },
            },
            SslSettings: &shared.SslSettings{
                CertificateID: sdk.String("repudiandae"),
                IsManagedCertificate: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumProto.ToPointer(),
        AppsID: "nihil",
        Callback: sdk.String("repellat"),
        Fields: sdk.String("quibusdam"),
        Key: sdk.String("sed"),
        NoManagedCertificate: sdk.Bool(false),
        OauthToken: sdk.String("saepe"),
        OverrideStrategy: operations.AppengineAppsDomainMappingsCreateOverrideStrategyEnumOverride.ToPointer(),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.AppengineAppsDomainMappingsCreateSecurity{
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

## AppengineAppsDomainMappingsDelete

Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.

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
    res, err := s.Apps.AppengineAppsDomainMappingsDelete(ctx, operations.AppengineAppsDomainMappingsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("magni"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AppsID: "quo",
        Callback: sdk.String("illum"),
        DomainMappingsID: "pariatur",
        Fields: sdk.String("maxime"),
        Key: sdk.String("ea"),
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("ea"),
        UploadProtocol: sdk.String("accusantium"),
    }, operations.AppengineAppsDomainMappingsDeleteSecurity{
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

## AppengineAppsDomainMappingsGet

Gets the specified domain mapping.

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
    res, err := s.Apps.AppengineAppsDomainMappingsGet(ctx, operations.AppengineAppsDomainMappingsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumProto.ToPointer(),
        AppsID: "ipsam",
        Callback: sdk.String("voluptate"),
        DomainMappingsID: "autem",
        Fields: sdk.String("nam"),
        Key: sdk.String("eaque"),
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nemo"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.AppengineAppsDomainMappingsGetSecurity{
        Option1: &operations.AppengineAppsDomainMappingsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DomainMapping != nil {
        // handle response
    }
}
```

## AppengineAppsDomainMappingsList

Lists the domain mappings on an application.

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
    res, err := s.Apps.AppengineAppsDomainMappingsList(ctx, operations.AppengineAppsDomainMappingsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AppsID: "cumque",
        Callback: sdk.String("corporis"),
        Fields: sdk.String("hic"),
        Key: sdk.String("libero"),
        OauthToken: sdk.String("nobis"),
        PageSize: sdk.Int64(171629),
        PageToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("eaque"),
    }, operations.AppengineAppsDomainMappingsListSecurity{
        Option1: &operations.AppengineAppsDomainMappingsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDomainMappingsResponse != nil {
        // handle response
    }
}
```

## AppengineAppsDomainMappingsPatch

Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.

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
    res, err := s.Apps.AppengineAppsDomainMappingsPatch(ctx, operations.AppengineAppsDomainMappingsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DomainMapping: &shared.DomainMapping{
            ID: sdk.String("3202c73d-5fe9-4b90-8289-09b3fe49a8d9"),
            Name: sdk.String("Randolph Wintheiser"),
            ResourceRecords: []shared.ResourceRecord{
                shared.ResourceRecord{
                    Name: sdk.String("Dawn Fadel"),
                    Rrdata: sdk.String("hic"),
                    Type: shared.ResourceRecordTypeEnumAaaa.ToPointer(),
                },
                shared.ResourceRecord{
                    Name: sdk.String("Adrian Kuhn"),
                    Rrdata: sdk.String("dolorum"),
                    Type: shared.ResourceRecordTypeEnumA.ToPointer(),
                },
            },
            SslSettings: &shared.SslSettings{
                CertificateID: sdk.String("veritatis"),
                IsManagedCertificate: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AppsID: "iure",
        Callback: sdk.String("odio"),
        DomainMappingsID: "quaerat",
        Fields: sdk.String("accusamus"),
        Key: sdk.String("quidem"),
        NoManagedCertificate: sdk.Bool(false),
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptas"),
        UpdateMask: sdk.String("natus"),
        UploadType: sdk.String("eos"),
        UploadProtocol: sdk.String("atque"),
    }, operations.AppengineAppsDomainMappingsPatchSecurity{
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

## AppengineAppsLocationsGet

Gets information about a location.

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
    res, err := s.Apps.AppengineAppsLocationsGet(ctx, operations.AppengineAppsLocationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("fugiat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AppsID: "soluta",
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("iusto"),
        Key: sdk.String("voluptate"),
        LocationsID: "dolorum",
        OauthToken: sdk.String("deleniti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("distinctio"),
    }, operations.AppengineAppsLocationsGetSecurity{
        Option1: &operations.AppengineAppsLocationsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Location != nil {
        // handle response
    }
}
```

## AppengineAppsLocationsList

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
    res, err := s.Apps.AppengineAppsLocationsList(ctx, operations.AppengineAppsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nihil"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AppsID: "voluptate",
        Callback: sdk.String("id"),
        Fields: sdk.String("saepe"),
        Filter: sdk.String("eius"),
        Key: sdk.String("aspernatur"),
        OauthToken: sdk.String("perferendis"),
        PageSize: sdk.Int64(229219),
        PageToken: sdk.String("optio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.AppengineAppsLocationsListSecurity{
        Option1: &operations.AppengineAppsLocationsListSecurityOption1{
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

## AppengineAppsOperationsGet

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
    res, err := s.Apps.AppengineAppsOperationsGet(ctx, operations.AppengineAppsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AppsID: "minima",
        Callback: sdk.String("repellendus"),
        Fields: sdk.String("totam"),
        Key: sdk.String("similique"),
        OauthToken: sdk.String("alias"),
        OperationsID: "at",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quaerat"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("vel"),
    }, operations.AppengineAppsOperationsGetSecurity{
        Option1: &operations.AppengineAppsOperationsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## AppengineAppsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

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
    res, err := s.Apps.AppengineAppsOperationsList(ctx, operations.AppengineAppsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("officiis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AppsID: "dolorum",
        Callback: sdk.String("a"),
        Fields: sdk.String("esse"),
        Filter: sdk.String("harum"),
        Key: sdk.String("iusto"),
        OauthToken: sdk.String("ipsum"),
        PageSize: sdk.Int64(788740),
        PageToken: sdk.String("tenetur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        UploadType: sdk.String("tempore"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.AppengineAppsOperationsListSecurity{
        Option1: &operations.AppengineAppsOperationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```
