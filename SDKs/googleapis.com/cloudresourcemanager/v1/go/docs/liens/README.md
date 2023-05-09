# Liens

### Available Operations

* [CloudresourcemanagerLiensCreate](#cloudresourcemanagerlienscreate) - Create a Lien which applies to the resource denoted by the `parent` field. Callers of this method will require permission on the `parent` resource. For example, applying to `projects/1234` requires permission `resourcemanager.projects.updateLiens`. NOTE: Some resources may limit the number of Liens which may be applied.
* [CloudresourcemanagerLiensDelete](#cloudresourcemanagerliensdelete) - Delete a Lien by `name`. Callers of this method will require permission on the `parent` resource. For example, a Lien with a `parent` of `projects/1234` requires permission `resourcemanager.projects.updateLiens`.
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
            CreateTime: sdk.String("excepturi"),
            Name: sdk.String("Mrs. Sophie Smith MD"),
            Origin: sdk.String("perferendis"),
            Parent: sdk.String("ipsam"),
            Reason: sdk.String("repellendus"),
            Restrictions: []string{
                "quo",
                "odit",
                "at",
                "at",
            },
        },
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("quod"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("dicta"),
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

## CloudresourcemanagerLiensDelete

Delete a Lien by `name`. Callers of this method will require permission on the `parent` resource. For example, a Lien with a `parent` of `projects/1234` requires permission `resourcemanager.projects.updateLiens`.

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
    res, err := s.Liens.CloudresourcemanagerLiensDelete(ctx, operations.CloudresourcemanagerLiensDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("officia"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("hic"),
        Name: "Everett Breitenberg",
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("cum"),
    }, operations.CloudresourcemanagerLiensDeleteSecurity{
        Option1: &operations.CloudresourcemanagerLiensDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("ad"),
        OauthToken: sdk.String("natus"),
        PageSize: sdk.Int64(149675),
        PageToken: sdk.String("iste"),
        Parent: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("hic"),
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
