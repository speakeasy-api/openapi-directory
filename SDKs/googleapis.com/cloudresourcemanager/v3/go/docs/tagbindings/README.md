# TagBindings

### Available Operations

* [CloudresourcemanagerTagBindingsCreate](#cloudresourcemanagertagbindingscreate) - Creates a TagBinding between a TagValue and a Google Cloud resource.
* [CloudresourcemanagerTagBindingsList](#cloudresourcemanagertagbindingslist) - Lists the TagBindings for the given Google Cloud resource, as specified with `parent`. NOTE: The `parent` field is expected to be a full resource name: https://cloud.google.com/apis/design/resource_names#full_resource_name

## CloudresourcemanagerTagBindingsCreate

Creates a TagBinding between a TagValue and a Google Cloud resource.

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
    res, err := s.TagBindings.CloudresourcemanagerTagBindingsCreate(ctx, operations.CloudresourcemanagerTagBindingsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TagBindingInput: &shared.TagBindingInput{
            Parent: sdk.String("fugit"),
            TagValue: sdk.String("dolorum"),
            TagValueNamespacedName: sdk.String("excepturi"),
        },
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempore"),
        Fields: sdk.String("labore"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("eum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("non"),
        UploadType: sdk.String("eligendi"),
        UploadProtocol: sdk.String("sint"),
        ValidateOnly: sdk.Bool(false),
    }, operations.CloudresourcemanagerTagBindingsCreateSecurity{
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

## CloudresourcemanagerTagBindingsList

Lists the TagBindings for the given Google Cloud resource, as specified with `parent`. NOTE: The `parent` field is expected to be a full resource name: https://cloud.google.com/apis/design/resource_names#full_resource_name

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
    res, err := s.TagBindings.CloudresourcemanagerTagBindingsList(ctx, operations.CloudresourcemanagerTagBindingsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("officia"),
        Key: sdk.String("dolor"),
        OauthToken: sdk.String("debitis"),
        PageSize: sdk.Int64(952749),
        PageToken: sdk.String("dolorum"),
        Parent: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("illum"),
        UploadProtocol: sdk.String("maiores"),
    }, operations.CloudresourcemanagerTagBindingsListSecurity{
        Option1: &operations.CloudresourcemanagerTagBindingsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagBindingsResponse != nil {
        // handle response
    }
}
```
