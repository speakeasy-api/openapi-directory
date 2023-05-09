# Projects

### Available Operations

* [FirebasestorageProjectsBucketsAddFirebase](#firebasestorageprojectsbucketsaddfirebase) - Links a Google Cloud Storage bucket to a Firebase project.
* [FirebasestorageProjectsBucketsGet](#firebasestorageprojectsbucketsget) - Gets a single linked storage bucket.
* [FirebasestorageProjectsBucketsList](#firebasestorageprojectsbucketslist) - Lists the linked storage buckets for a project.
* [FirebasestorageProjectsBucketsRemoveFirebase](#firebasestorageprojectsbucketsremovefirebase) - Unlinks a linked Google Cloud Storage bucket from a Firebase project.

## FirebasestorageProjectsBucketsAddFirebase

Links a Google Cloud Storage bucket to a Firebase project.

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
    res, err := s.Projects.FirebasestorageProjectsBucketsAddFirebase(ctx, operations.FirebasestorageProjectsBucketsAddFirebaseRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "minus": "placeat",
            "voluptatum": "iusto",
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Bucket: "recusandae",
        Callback: sdk.String("temporibus"),
        Fields: sdk.String("ab"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.FirebasestorageProjectsBucketsAddFirebaseSecurity{
        Option1: &operations.FirebasestorageProjectsBucketsAddFirebaseSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Bucket != nil {
        // handle response
    }
}
```

## FirebasestorageProjectsBucketsGet

Gets a single linked storage bucket.

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
    res, err := s.Projects.FirebasestorageProjectsBucketsGet(ctx, operations.FirebasestorageProjectsBucketsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("odit"),
        Fields: sdk.String("at"),
        Key: sdk.String("at"),
        Name: "Javier Schmidt",
        OauthToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.FirebasestorageProjectsBucketsGetSecurity{
        Option1: &operations.FirebasestorageProjectsBucketsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Bucket != nil {
        // handle response
    }
}
```

## FirebasestorageProjectsBucketsList

Lists the linked storage buckets for a project.

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
    res, err := s.Projects.FirebasestorageProjectsBucketsList(ctx, operations.FirebasestorageProjectsBucketsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("officia"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("optio"),
        PageSize: sdk.Int64(521848),
        PageToken: sdk.String("beatae"),
        Parent: "commodi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("qui"),
    }, operations.FirebasestorageProjectsBucketsListSecurity{
        Option1: &operations.FirebasestorageProjectsBucketsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBucketsResponse != nil {
        // handle response
    }
}
```

## FirebasestorageProjectsBucketsRemoveFirebase

Unlinks a linked Google Cloud Storage bucket from a Firebase project.

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
    res, err := s.Projects.FirebasestorageProjectsBucketsRemoveFirebase(ctx, operations.FirebasestorageProjectsBucketsRemoveFirebaseRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "esse": "ipsum",
            "excepturi": "aspernatur",
            "perferendis": "ad",
        },
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "iste",
        Callback: sdk.String("dolor"),
        Fields: sdk.String("natus"),
        Key: sdk.String("laboriosam"),
        OauthToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("in"),
    }, operations.FirebasestorageProjectsBucketsRemoveFirebaseSecurity{
        Option1: &operations.FirebasestorageProjectsBucketsRemoveFirebaseSecurityOption1{
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
