# Familysharing

### Available Operations

* [BooksFamilysharingGetFamilyInfo](#booksfamilysharinggetfamilyinfo) - Gets information regarding the family that the user is part of.
* [BooksFamilysharingShare](#booksfamilysharingshare) - Initiates sharing of the content with the user's family. Empty response indicates success.
* [BooksFamilysharingUnshare](#booksfamilysharingunshare) - Initiates revoking content that has already been shared with the user's family. Empty response indicates success.

## BooksFamilysharingGetFamilyInfo

Gets information regarding the family that the user is part of.

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
    res, err := s.Familysharing.BooksFamilysharingGetFamilyInfo(ctx, operations.BooksFamilysharingGetFamilyInfoRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolorem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("repellat"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        Source: sdk.String("commodi"),
        UploadType: sdk.String("quam"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.BooksFamilysharingGetFamilyInfoSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FamilyInfo != nil {
        // handle response
    }
}
```

## BooksFamilysharingShare

Initiates sharing of the content with the user's family. Empty response indicates success.

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
    res, err := s.Familysharing.BooksFamilysharingShare(ctx, operations.BooksFamilysharingShareRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        DocID: sdk.String("vitae"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("animi"),
        OauthToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        Source: sdk.String("quo"),
        UploadType: sdk.String("sequi"),
        UploadProtocol: sdk.String("tenetur"),
        VolumeID: sdk.String("ipsam"),
    }, operations.BooksFamilysharingShareSecurity{
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

## BooksFamilysharingUnshare

Initiates revoking content that has already been shared with the user's family. Empty response indicates success.

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
    res, err := s.Familysharing.BooksFamilysharingUnshare(ctx, operations.BooksFamilysharingUnshareRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("possimus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quasi"),
        DocID: sdk.String("error"),
        Fields: sdk.String("temporibus"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        Source: sdk.String("voluptatibus"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("nihil"),
        VolumeID: sdk.String("praesentium"),
    }, operations.BooksFamilysharingUnshareSecurity{
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
