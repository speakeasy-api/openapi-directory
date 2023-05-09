# Liens

### Available Operations

* [CloudresourcemanagerLiensCreate](#cloudresourcemanagerlienscreate) - Create a Lien which applies to the resource denoted by the `parent` field. Callers of this method will require permission on the `parent` resource. For example, applying to `projects/1234` requires permission `resourcemanager.projects.updateLiens`. NOTE: Some resources may limit the number of Liens which may be applied.
* [CloudresourcemanagerLiensList](#cloudresourcemanagerlienslist) - List all Liens applied to the `parent` resource. Callers of this method will require permission on the `parent` resource. For example, a Lien with a `parent` of `projects/1234` requires permission `resourcemanager.projects.get`.

## CloudresourcemanagerLiensCreate

Create a Lien which applies to the resource denoted by the `parent` field. Callers of this method will require permission on the `parent` resource. For example, applying to `projects/1234` requires permission `resourcemanager.projects.updateLiens`. NOTE: Some resources may limit the number of Liens which may be applied.

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
    res, err := s.Liens.CloudresourcemanagerLiensCreate(ctx, operations.CloudresourcemanagerLiensCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Lien: &shared.Lien{
            CreateTime: sdk.String("ipsum"),
            Name: sdk.String("Brandon Auer"),
            Origin: sdk.String("sed"),
            Parent: sdk.String("iste"),
            Reason: sdk.String("dolor"),
            Restrictions: []string{
                "laboriosam",
                "hic",
                "saepe",
            },
        },
        AccessToken: sdk.String("fuga"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("iste"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.CloudresourcemanagerLiensCreateSecurity{
        Option1: &operations.CloudresourcemanagerLiensCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Lien != nil {
        // handle response
    }
}
```

## CloudresourcemanagerLiensList

List all Liens applied to the `parent` resource. Callers of this method will require permission on the `parent` resource. For example, a Lien with a `parent` of `projects/1234` requires permission `resourcemanager.projects.get`.

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
    res, err := s.Liens.CloudresourcemanagerLiensList(ctx, operations.CloudresourcemanagerLiensListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("dolores"),
        Key: sdk.String("dolorem"),
        OauthToken: sdk.String("corporis"),
        PageSize: sdk.Int64(128926),
        PageToken: sdk.String("nobis"),
        Parent: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("minima"),
    }, operations.CloudresourcemanagerLiensListSecurity{
        Option1: &operations.CloudresourcemanagerLiensListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLiensResponse != nil {
        // handle response
    }
}
```
