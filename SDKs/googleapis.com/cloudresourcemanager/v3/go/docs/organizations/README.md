# Organizations

### Available Operations

* [CloudresourcemanagerOrganizationsSearch](#cloudresourcemanagerorganizationssearch) - Searches organization resources that are visible to the user and satisfy the specified filter. This method returns organizations in an unspecified order. New organizations do not necessarily appear at the end of the results, and may take a small amount of time to appear. Search will only return organizations on which the user has the permission `resourcemanager.organizations.get`

## CloudresourcemanagerOrganizationsSearch

Searches organization resources that are visible to the user and satisfy the specified filter. This method returns organizations in an unspecified order. New organizations do not necessarily appear at the end of the results, and may take a small amount of time to appear. Search will only return organizations on which the user has the permission `resourcemanager.organizations.get`

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
    res, err := s.Organizations.CloudresourcemanagerOrganizationsSearch(ctx, operations.CloudresourcemanagerOrganizationsSearchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("culpa"),
        Fields: sdk.String("doloribus"),
        Key: sdk.String("sapiente"),
        OauthToken: sdk.String("architecto"),
        PageSize: sdk.Int64(652790),
        PageToken: sdk.String("dolorem"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("culpa"),
        QuotaUser: sdk.String("consequuntur"),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.CloudresourcemanagerOrganizationsSearchSecurity{
        Option1: &operations.CloudresourcemanagerOrganizationsSearchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchOrganizationsResponse != nil {
        // handle response
    }
}
```
