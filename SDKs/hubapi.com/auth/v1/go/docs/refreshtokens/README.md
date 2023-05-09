# RefreshTokens

### Available Operations

* [DeleteOauthV1RefreshTokensTokenArchive](#deleteoauthv1refreshtokenstokenarchive)
* [GetOauthV1RefreshTokensTokenGet](#getoauthv1refreshtokenstokenget)

## DeleteOauthV1RefreshTokensTokenArchive

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.RefreshTokens.DeleteOauthV1RefreshTokensTokenArchive(ctx, operations.DeleteOauthV1RefreshTokensTokenArchiveRequest{
        Token: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOauthV1RefreshTokensTokenGet

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.RefreshTokens.GetOauthV1RefreshTokensTokenGet(ctx, operations.GetOauthV1RefreshTokensTokenGetRequest{
        Token: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RefreshTokenInfoResponse != nil {
        // handle response
    }
}
```
