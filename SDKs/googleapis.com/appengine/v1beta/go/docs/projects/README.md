# Projects

### Available Operations

* [AppengineProjectsLocationsApplicationsCreate](#appengineprojectslocationsapplicationscreate) - Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).
* [AppengineProjectsLocationsApplicationsGet](#appengineprojectslocationsapplicationsget) - Gets information about an application.
* [AppengineProjectsLocationsApplicationsRepair](#appengineprojectslocationsapplicationsrepair) - Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.
* [AppengineProjectsLocationsGet](#appengineprojectslocationsget) - Gets information about a location.
* [AppengineProjectsLocationsList](#appengineprojectslocationslist) - Lists information about the supported locations for this service.
* [AppengineProjectsLocationsOperationsGet](#appengineprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [AppengineProjectsLocationsOperationsList](#appengineprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

## AppengineProjectsLocationsApplicationsCreate

Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).

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
    res, err := s.Projects.AppengineProjectsLocationsApplicationsCreate(ctx, operations.AppengineProjectsLocationsApplicationsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ApplicationInput: &shared.ApplicationInput{
            AuthDomain: sdk.String("soluta"),
            DatabaseType: shared.ApplicationDatabaseTypeEnumDatabaseTypeUnspecified.ToPointer(),
            DefaultCookieExpiration: sdk.String("omnis"),
            DispatchRules: []shared.URLDispatchRule{
                shared.URLDispatchRule{
                    Domain: sdk.String("occaecati"),
                    Path: sdk.String("iste"),
                    Service: sdk.String("magni"),
                },
            },
            FeatureSettings: &shared.FeatureSettings{
                SplitHealthChecks: sdk.Bool(false),
                UseContainerOptimizedOs: sdk.Bool(false),
            },
            Iap: &shared.IdentityAwareProxyInput{
                Enabled: sdk.Bool(false),
                Oauth2ClientID: sdk.String("inventore"),
                Oauth2ClientSecret: sdk.String("fuga"),
            },
            ID: sdk.String("efb9f58c-4d86-4e68-a4be-056013f59da7"),
            LocationID: sdk.String("nemo"),
            ServiceAccount: sdk.String("reprehenderit"),
            ServingStatus: shared.ApplicationServingStatusEnumUserDisabled.ToPointer(),
        },
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("impedit"),
        Key: sdk.String("hic"),
        LocationsID: "necessitatibus",
        OauthToken: sdk.String("asperiores"),
        PrettyPrint: sdk.Bool(false),
        ProjectsID: "ex",
        QuotaUser: sdk.String("voluptas"),
        UploadType: sdk.String("debitis"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.AppengineProjectsLocationsApplicationsCreateSecurity{
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

## AppengineProjectsLocationsApplicationsGet

Gets information about an application.

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
    res, err := s.Projects.AppengineProjectsLocationsApplicationsGet(ctx, operations.AppengineProjectsLocationsApplicationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumProto.ToPointer(),
        ApplicationsID: "laborum",
        Callback: sdk.String("consectetur"),
        Fields: sdk.String("velit"),
        Key: sdk.String("atque"),
        LocationsID: "ipsum",
        OauthToken: sdk.String("impedit"),
        PrettyPrint: sdk.Bool(false),
        ProjectsID: "magni",
        QuotaUser: sdk.String("soluta"),
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("nam"),
    }, operations.AppengineProjectsLocationsApplicationsGetSecurity{
        Option1: &operations.AppengineProjectsLocationsApplicationsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Application != nil {
        // handle response
    }
}
```

## AppengineProjectsLocationsApplicationsRepair

Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.

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
    res, err := s.Projects.AppengineProjectsLocationsApplicationsRepair(ctx, operations.AppengineProjectsLocationsApplicationsRepairRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "voluptate": "sequi",
            "dignissimos": "neque",
        },
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumMedia.ToPointer(),
        ApplicationsID: "quibusdam",
        Callback: sdk.String("iure"),
        Fields: sdk.String("odit"),
        Key: sdk.String("voluptatibus"),
        LocationsID: "vel",
        OauthToken: sdk.String("magnam"),
        PrettyPrint: sdk.Bool(false),
        ProjectsID: "quibusdam",
        QuotaUser: sdk.String("inventore"),
        UploadType: sdk.String("facere"),
        UploadProtocol: sdk.String("libero"),
    }, operations.AppengineProjectsLocationsApplicationsRepairSecurity{
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

## AppengineProjectsLocationsGet

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
    res, err := s.Projects.AppengineProjectsLocationsGet(ctx, operations.AppengineProjectsLocationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("porro"),
        Fields: sdk.String("aliquam"),
        Key: sdk.String("velit"),
        LocationsID: "illo",
        OauthToken: sdk.String("accusantium"),
        PrettyPrint: sdk.Bool(false),
        ProjectsID: "vel",
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("beatae"),
        UploadProtocol: sdk.String("vero"),
    }, operations.AppengineProjectsLocationsGetSecurity{
        Option1: &operations.AppengineProjectsLocationsGetSecurityOption1{
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

## AppengineProjectsLocationsList

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
    res, err := s.Projects.AppengineProjectsLocationsList(ctx, operations.AppengineProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("eum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ut"),
        Fields: sdk.String("perspiciatis"),
        Filter: sdk.String("earum"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("impedit"),
        PageSize: sdk.Int64(975884),
        PageToken: sdk.String("iste"),
        PrettyPrint: sdk.Bool(false),
        ProjectsID: "itaque",
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("nisi"),
        UploadProtocol: sdk.String("itaque"),
    }, operations.AppengineProjectsLocationsListSecurity{
        Option1: &operations.AppengineProjectsLocationsListSecurityOption1{
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

## AppengineProjectsLocationsOperationsGet

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
    res, err := s.Projects.AppengineProjectsLocationsOperationsGet(ctx, operations.AppengineProjectsLocationsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("iusto"),
        Key: sdk.String("sit"),
        LocationsID: "doloremque",
        OauthToken: sdk.String("consequatur"),
        OperationsID: "officia",
        PrettyPrint: sdk.Bool(false),
        ProjectsID: "recusandae",
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("voluptas"),
    }, operations.AppengineProjectsLocationsOperationsGetSecurity{
        Option1: &operations.AppengineProjectsLocationsOperationsGetSecurityOption1{
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

## AppengineProjectsLocationsOperationsList

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
    res, err := s.Projects.AppengineProjectsLocationsOperationsList(ctx, operations.AppengineProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("placeat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("expedita"),
        Fields: sdk.String("deleniti"),
        Filter: sdk.String("a"),
        Key: sdk.String("voluptate"),
        LocationsID: "ullam",
        OauthToken: sdk.String("unde"),
        PageSize: sdk.Int64(897543),
        PageToken: sdk.String("animi"),
        PrettyPrint: sdk.Bool(false),
        ProjectsID: "impedit",
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("est"),
    }, operations.AppengineProjectsLocationsOperationsListSecurity{
        Option1: &operations.AppengineProjectsLocationsOperationsListSecurityOption1{
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
