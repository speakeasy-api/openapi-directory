# SDK

## Overview

Obtains end-user authorization grants for use with other Google APIs.

<https://developers.google.com/identity/protocols/oauth2/>
### Available Operations

* [Oauth2Tokeninfo](#oauth2tokeninfo) - Get token info

## Oauth2Tokeninfo

Get token info

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
    res, err := s.SDK.Oauth2Tokeninfo(ctx, operations.Oauth2TokeninfoRequest{
        AccessToken: sdk.String("illum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("vel"),
        IDToken: sdk.String("error"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UserIP: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tokeninfo != nil {
        // handle response
    }
}
```
