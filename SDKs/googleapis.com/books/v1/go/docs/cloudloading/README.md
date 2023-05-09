# Cloudloading

### Available Operations

* [BooksCloudloadingAddBook](#bookscloudloadingaddbook) - Add a user-upload volume and triggers processing.
* [BooksCloudloadingDeleteBook](#bookscloudloadingdeletebook) - Remove the book and its contents
* [BooksCloudloadingUpdateBook](#bookscloudloadingupdatebook) - Updates a user-upload volume.

## BooksCloudloadingAddBook

Add a user-upload volume and triggers processing.

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
    res, err := s.Cloudloading.BooksCloudloadingAddBook(ctx, operations.BooksCloudloadingAddBookRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("totam"),
        DriveDocumentID: sdk.String("beatae"),
        Fields: sdk.String("commodi"),
        Key: sdk.String("molestiae"),
        MimeType: sdk.String("modi"),
        Name: sdk.String("Krista Rippin"),
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("perferendis"),
        UploadClientToken: sdk.String("ad"),
        UploadProtocol: sdk.String("natus"),
    }, operations.BooksCloudloadingAddBookSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BooksCloudloadingResource != nil {
        // handle response
    }
}
```

## BooksCloudloadingDeleteBook

Remove the book and its contents

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
    res, err := s.Cloudloading.BooksCloudloadingDeleteBook(ctx, operations.BooksCloudloadingDeleteBookRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("laboriosam"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fuga"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("corporis"),
        VolumeID: "iste",
    }, operations.BooksCloudloadingDeleteBookSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## BooksCloudloadingUpdateBook

Updates a user-upload volume.

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
    res, err := s.Cloudloading.BooksCloudloadingUpdateBook(ctx, operations.BooksCloudloadingUpdateBookRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BooksCloudloadingResource: &shared.BooksCloudloadingResource{
            Author: sdk.String("saepe"),
            ProcessingState: sdk.String("quidem"),
            Title: sdk.String("Mr."),
            VolumeID: sdk.String("ipsa"),
        },
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("dolores"),
        OauthToken: sdk.String("dolorem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("nobis"),
    }, operations.BooksCloudloadingUpdateBookSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BooksCloudloadingResource != nil {
        // handle response
    }
}
```
