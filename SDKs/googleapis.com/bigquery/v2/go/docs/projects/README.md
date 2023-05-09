# Projects

### Available Operations

* [BigqueryProjectsGetServiceAccount](#bigqueryprojectsgetserviceaccount) - Returns the email address of the service account for your project used for interactions with Google Cloud KMS.
* [BigqueryProjectsList](#bigqueryprojectslist) - Lists all projects to which you have been granted any project role.

## BigqueryProjectsGetServiceAccount

Returns the email address of the service account for your project used for interactions with Google Cloud KMS.

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
    res, err := s.Projects.BigqueryProjectsGetServiceAccount(ctx, operations.BigqueryProjectsGetServiceAccountRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("culpa"),
        Key: sdk.String("voluptatem"),
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "officiis",
        QuotaUser: sdk.String("architecto"),
        UserIP: sdk.String("fuga"),
    }, operations.BigqueryProjectsGetServiceAccountSecurity{
        Option1: &operations.BigqueryProjectsGetServiceAccountSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServiceAccountResponse != nil {
        // handle response
    }
}
```

## BigqueryProjectsList

Lists all projects to which you have been granted any project role.

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
    res, err := s.Projects.BigqueryProjectsList(ctx, operations.BigqueryProjectsListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("pariatur"),
        Key: sdk.String("debitis"),
        MaxResults: sdk.Int64(29190),
        OauthToken: sdk.String("alias"),
        PageToken: sdk.String("deleniti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("earum"),
        UserIP: sdk.String("ex"),
    }, operations.BigqueryProjectsListSecurity{
        Option1: &operations.BigqueryProjectsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectList != nil {
        // handle response
    }
}
```
