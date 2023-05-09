# Projects

### Available Operations

* [AppengineProjectsLocationsApplicationsCreate](#appengineprojectslocationsapplicationscreate) - Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).
* [AppengineProjectsLocationsApplicationsGet](#appengineprojectslocationsapplicationsget) - Gets information about an application.

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
