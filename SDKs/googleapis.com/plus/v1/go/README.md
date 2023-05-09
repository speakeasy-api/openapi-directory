# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/plus/v1/go
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
    res, err := s.Activities.PlusActivitiesGet(ctx, operations.PlusActivitiesGetRequest{
        ActivityID: "corrupti",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("provident"),
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("unde"),
        UserIP: sdk.String("nulla"),
    }, operations.PlusActivitiesGetSecurity{
        Option1: &operations.PlusActivitiesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Activity != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Activities](docs/activities/README.md)

* [PlusActivitiesGet](docs/activities/README.md#plusactivitiesget) - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* [PlusActivitiesList](docs/activities/README.md#plusactivitieslist) - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* [PlusActivitiesSearch](docs/activities/README.md#plusactivitiessearch) - Shut down. See https://developers.google.com/+/api-shutdown for more details.

### [Comments](docs/comments/README.md)

* [PlusCommentsGet](docs/comments/README.md#pluscommentsget) - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* [PlusCommentsList](docs/comments/README.md#pluscommentslist) - Shut down. See https://developers.google.com/+/api-shutdown for more details.

### [People](docs/people/README.md)

* [PlusPeopleGet](docs/people/README.md#pluspeopleget) - Get a person's profile. If your app uses scope https://www.googleapis.com/auth/plus.login, this method is guaranteed to return ageRange and language.
* [PlusPeopleList](docs/people/README.md#pluspeoplelist) - List all of the people in the specified collection.
* [PlusPeopleListByActivity](docs/people/README.md#pluspeoplelistbyactivity) - Shut down. See https://developers.google.com/+/api-shutdown for more details.
* [PlusPeopleSearch](docs/people/README.md#pluspeoplesearch) - Shut down. See https://developers.google.com/+/api-shutdown for more details.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
