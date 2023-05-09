# Projects

### Available Operations

* [ContactcenteraiplatformProjectsLocationsContactCentersCreate](#contactcenteraiplatformprojectslocationscontactcenterscreate) - Creates a new ContactCenter in a given project and location.
* [ContactcenteraiplatformProjectsLocationsContactCentersList](#contactcenteraiplatformprojectslocationscontactcenterslist) - Lists ContactCenters in a given project and location.
* [ContactcenteraiplatformProjectsLocationsContactCentersPatch](#contactcenteraiplatformprojectslocationscontactcenterspatch) - Updates the parameters of a single ContactCenter.
* [ContactcenteraiplatformProjectsLocationsList](#contactcenteraiplatformprojectslocationslist) - Lists information about the supported locations for this service.
* [ContactcenteraiplatformProjectsLocationsOperationsCancel](#contactcenteraiplatformprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [ContactcenteraiplatformProjectsLocationsOperationsDelete](#contactcenteraiplatformprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [ContactcenteraiplatformProjectsLocationsOperationsGet](#contactcenteraiplatformprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [ContactcenteraiplatformProjectsLocationsOperationsList](#contactcenteraiplatformprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [ContactcenteraiplatformProjectsLocationsQueryContactCenterQuota](#contactcenteraiplatformprojectslocationsquerycontactcenterquota) - Queries the contact center quota, an aggregation over all the projects, that belongs to the billing account, which the input project belongs to.

## ContactcenteraiplatformProjectsLocationsContactCentersCreate

Creates a new ContactCenter in a given project and location.

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
    res, err := s.Projects.ContactcenteraiplatformProjectsLocationsContactCentersCreate(ctx, operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ContactCenterInput: &shared.ContactCenterInput{
            AdminUser: &shared.AdminUser{
                FamilyName: sdk.String("maiores"),
                GivenName: sdk.String("molestiae"),
            },
            CcaipManagedUsers: sdk.Bool(false),
            CustomerDomainPrefix: sdk.String("quod"),
            DisplayName: sdk.String("quod"),
            InstanceConfig: &shared.InstanceConfig{
                InstanceSize: shared.InstanceConfigInstanceSizeEnumStandardLarge.ToPointer(),
            },
            Labels: map[string]string{
                "porro": "dolorum",
                "dicta": "nam",
                "officia": "occaecati",
            },
            Name: sdk.String("Cassandra Welch"),
            SamlParams: &shared.SAMLParams{
                Certificate: sdk.String("beatae"),
                EntityID: sdk.String("commodi"),
                SsoURI: sdk.String("molestiae"),
                UserEmail: sdk.String("modi"),
            },
            Uris: &shared.URIs{
                ChatBotURI: sdk.String("qui"),
                MediaURI: sdk.String("impedit"),
                RootURI: sdk.String("cum"),
                VirtualAgentStreamingServiceURI: sdk.String("esse"),
            },
            UserEmail: sdk.String("ipsum"),
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("perferendis"),
        ContactCenterID: sdk.String("ad"),
        Fields: sdk.String("natus"),
        Key: sdk.String("sed"),
        OauthToken: sdk.String("iste"),
        Parent: "dolor",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        RequestID: sdk.String("laboriosam"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateSecurity{
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

## ContactcenteraiplatformProjectsLocationsContactCentersList

Lists ContactCenters in a given project and location.

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
    res, err := s.Projects.ContactcenteraiplatformProjectsLocationsContactCentersList(ctx, operations.ContactcenteraiplatformProjectsLocationsContactCentersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iste"),
        Fields: sdk.String("iure"),
        Filter: sdk.String("saepe"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("architecto"),
        OrderBy: sdk.String("ipsa"),
        PageSize: sdk.Int64(969810),
        PageToken: sdk.String("est"),
        Parent: "mollitia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.ContactcenteraiplatformProjectsLocationsContactCentersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListContactCentersResponse != nil {
        // handle response
    }
}
```

## ContactcenteraiplatformProjectsLocationsContactCentersPatch

Updates the parameters of a single ContactCenter.

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
    res, err := s.Projects.ContactcenteraiplatformProjectsLocationsContactCentersPatch(ctx, operations.ContactcenteraiplatformProjectsLocationsContactCentersPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ContactCenterInput: &shared.ContactCenterInput{
            AdminUser: &shared.AdminUser{
                FamilyName: sdk.String("explicabo"),
                GivenName: sdk.String("nobis"),
            },
            CcaipManagedUsers: sdk.Bool(false),
            CustomerDomainPrefix: sdk.String("enim"),
            DisplayName: sdk.String("omnis"),
            InstanceConfig: &shared.InstanceConfig{
                InstanceSize: shared.InstanceConfigInstanceSizeEnumStandardMedium.ToPointer(),
            },
            Labels: map[string]string{
                "excepturi": "accusantium",
                "iure": "culpa",
            },
            Name: sdk.String("Darrin Brakus"),
            SamlParams: &shared.SAMLParams{
                Certificate: sdk.String("culpa"),
                EntityID: sdk.String("consequuntur"),
                SsoURI: sdk.String("repellat"),
                UserEmail: sdk.String("mollitia"),
            },
            Uris: &shared.URIs{
                ChatBotURI: sdk.String("occaecati"),
                MediaURI: sdk.String("numquam"),
                RootURI: sdk.String("commodi"),
                VirtualAgentStreamingServiceURI: sdk.String("quam"),
            },
            UserEmail: sdk.String("molestiae"),
        },
        AccessToken: sdk.String("velit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quia"),
        Fields: sdk.String("quis"),
        Key: sdk.String("vitae"),
        Name: "Matt Hamill",
        OauthToken: sdk.String("sequi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tenetur"),
        RequestID: sdk.String("ipsam"),
        UpdateMask: sdk.String("id"),
        UploadType: sdk.String("possimus"),
        UploadProtocol: sdk.String("aut"),
    }, operations.ContactcenteraiplatformProjectsLocationsContactCentersPatchSecurity{
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

## ContactcenteraiplatformProjectsLocationsList

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
    res, err := s.Projects.ContactcenteraiplatformProjectsLocationsList(ctx, operations.ContactcenteraiplatformProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("quasi"),
        Filter: sdk.String("reiciendis"),
        Key: sdk.String("voluptatibus"),
        Name: "Jessie Langosh V",
        OauthToken: sdk.String("voluptate"),
        PageSize: sdk.Int64(739264),
        PageToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloremque"),
        UploadType: sdk.String("reprehenderit"),
        UploadProtocol: sdk.String("ut"),
    }, operations.ContactcenteraiplatformProjectsLocationsListSecurity{
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

## ContactcenteraiplatformProjectsLocationsOperationsCancel

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
    res, err := s.Projects.ContactcenteraiplatformProjectsLocationsOperationsCancel(ctx, operations.ContactcenteraiplatformProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "corporis": "dolore",
        },
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("harum"),
        Fields: sdk.String("enim"),
        Key: sdk.String("accusamus"),
        Name: "Elvira Bergnaum",
        OauthToken: sdk.String("molestias"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("modi"),
    }, operations.ContactcenteraiplatformProjectsLocationsOperationsCancelSecurity{
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

## ContactcenteraiplatformProjectsLocationsOperationsDelete

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
    res, err := s.Projects.ContactcenteraiplatformProjectsLocationsOperationsDelete(ctx, operations.ContactcenteraiplatformProjectsLocationsOperationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("rem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("sint"),
        Name: "Patti Gottlieb MD",
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("explicabo"),
        RequestID: sdk.String("deserunt"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("quibusdam"),
    }, operations.ContactcenteraiplatformProjectsLocationsOperationsDeleteSecurity{
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

## ContactcenteraiplatformProjectsLocationsOperationsGet

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
    res, err := s.Projects.ContactcenteraiplatformProjectsLocationsOperationsGet(ctx, operations.ContactcenteraiplatformProjectsLocationsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("quos"),
        Name: "Louise Simonis Sr.",
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("facilis"),
    }, operations.ContactcenteraiplatformProjectsLocationsOperationsGetSecurity{
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

## ContactcenteraiplatformProjectsLocationsOperationsList

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
    res, err := s.Projects.ContactcenteraiplatformProjectsLocationsOperationsList(ctx, operations.ContactcenteraiplatformProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eum"),
        Fields: sdk.String("non"),
        Filter: sdk.String("eligendi"),
        Key: sdk.String("sint"),
        Name: "Sherri Tremblay",
        OauthToken: sdk.String("dolor"),
        PageSize: sdk.Int64(891555),
        PageToken: sdk.String("a"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("in"),
    }, operations.ContactcenteraiplatformProjectsLocationsOperationsListSecurity{
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

## ContactcenteraiplatformProjectsLocationsQueryContactCenterQuota

Queries the contact center quota, an aggregation over all the projects, that belongs to the billing account, which the input project belongs to.

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
    res, err := s.Projects.ContactcenteraiplatformProjectsLocationsQueryContactCenterQuota(ctx, operations.ContactcenteraiplatformProjectsLocationsQueryContactCenterQuotaRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("magnam"),
        Key: sdk.String("cumque"),
        OauthToken: sdk.String("facere"),
        Parent: "ea",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.ContactcenteraiplatformProjectsLocationsQueryContactCenterQuotaSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContactCenterQuota != nil {
        // handle response
    }
}
```
