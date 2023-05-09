# TagKeys

### Available Operations

* [CloudresourcemanagerTagKeysCreate](#cloudresourcemanagertagkeyscreate) - Creates a new TagKey. If another request with the same parameters is sent while the original request is in process, the second request will receive an error. A maximum of 1000 TagKeys can exist under a parent at any given time.
* [CloudresourcemanagerTagKeysGetNamespaced](#cloudresourcemanagertagkeysgetnamespaced) - Retrieves a TagKey by its namespaced name. This method will return `PERMISSION_DENIED` if the key does not exist or the user does not have permission to view it.
* [CloudresourcemanagerTagKeysList](#cloudresourcemanagertagkeyslist) - Lists all TagKeys for a parent resource.

## CloudresourcemanagerTagKeysCreate

Creates a new TagKey. If another request with the same parameters is sent while the original request is in process, the second request will receive an error. A maximum of 1000 TagKeys can exist under a parent at any given time.

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
    res, err := s.TagKeys.CloudresourcemanagerTagKeysCreate(ctx, operations.CloudresourcemanagerTagKeysCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TagKeyInput: &shared.TagKeyInput{
            Description: sdk.String("dicta"),
            Etag: sdk.String("magnam"),
            Name: sdk.String("Irving Jenkins"),
            Parent: sdk.String("accusamus"),
            Purpose: shared.TagKeyPurposeEnumPurposeUnspecified.ToPointer(),
            PurposeData: map[string]string{
                "enim": "accusamus",
                "delectus": "quidem",
                "provident": "nam",
            },
            ShortName: sdk.String("id"),
        },
        AccessToken: sdk.String("blanditiis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("amet"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("nisi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("omnis"),
        ValidateOnly: sdk.Bool(false),
    }, operations.CloudresourcemanagerTagKeysCreateSecurity{
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

## CloudresourcemanagerTagKeysGetNamespaced

Retrieves a TagKey by its namespaced name. This method will return `PERMISSION_DENIED` if the key does not exist or the user does not have permission to view it.

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
    res, err := s.TagKeys.CloudresourcemanagerTagKeysGetNamespaced(ctx, operations.CloudresourcemanagerTagKeysGetNamespacedRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("id"),
        Name: sdk.String("Jamie Hoppe"),
        OauthToken: sdk.String("eum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.CloudresourcemanagerTagKeysGetNamespacedSecurity{
        Option1: &operations.CloudresourcemanagerTagKeysGetNamespacedSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagKey != nil {
        // handle response
    }
}
```

## CloudresourcemanagerTagKeysList

Lists all TagKeys for a parent resource.

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
    res, err := s.TagKeys.CloudresourcemanagerTagKeysList(ctx, operations.CloudresourcemanagerTagKeysListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("provident"),
        Key: sdk.String("quos"),
        OauthToken: sdk.String("sint"),
        PageSize: sdk.Int64(33625),
        PageToken: sdk.String("mollitia"),
        Parent: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("eum"),
    }, operations.CloudresourcemanagerTagKeysListSecurity{
        Option1: &operations.CloudresourcemanagerTagKeysListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagKeysResponse != nil {
        // handle response
    }
}
```
