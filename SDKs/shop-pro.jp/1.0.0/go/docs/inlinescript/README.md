# InlineScript

## Overview

インラインスクリプトを挿入するAPIです。※新規デベロッパーはこのエンドポイントを利用できません

### Available Operations

* [CreateInlineScriptTag](#createinlinescripttag) - インラインスクリプトタグの登録
* [DeleteInlineScriptTag](#deleteinlinescripttag) - インラインスクリプトタグの削除
* [GetInlineScriptTag](#getinlinescripttag) - インラインスクリプトタグの取得
* [GetInlineScriptTags](#getinlinescripttags) - インラインスクリプトタグの取得
* [UpdateInlineScriptTag](#updateinlinescripttag) - インラインスクリプトタグの更新

## CreateInlineScriptTag

インラインスクリプトタグの登録

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
    res, err := s.InlineScript.CreateInlineScriptTag(ctx, operations.CreateInlineScriptTagRequestBody{
        InlineScriptTag: &operations.CreateInlineScriptTagRequestBodyInlineScriptTag{
            DisplayScope: operations.CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnumThanksPage.ToPointer(),
            Script: sdk.String("console.log("aaaaa")"),
            TriggerEvent: operations.CreateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnumObjectBuilded.ToPointer(),
        },
    }, operations.CreateInlineScriptTagSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateInlineScriptTag201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteInlineScriptTag

インラインスクリプトタグの削除

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
    res, err := s.InlineScript.DeleteInlineScriptTag(ctx, operations.DeleteInlineScriptTagRequest{
        InlineScriptTagID: 857946,
    }, operations.DeleteInlineScriptTagSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetInlineScriptTag

インラインスクリプトタグの取得

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
    res, err := s.InlineScript.GetInlineScriptTag(ctx, operations.GetInlineScriptTagRequest{
        InlineScriptTagID: 544883,
    }, operations.GetInlineScriptTagSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInlineScriptTag200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetInlineScriptTags

インラインスクリプトタグの取得

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
    res, err := s.InlineScript.GetInlineScriptTags(ctx, operations.GetInlineScriptTagsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInlineScriptTags200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateInlineScriptTag

インラインスクリプトタグの更新

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
    res, err := s.InlineScript.UpdateInlineScriptTag(ctx, operations.UpdateInlineScriptTagRequest{
        RequestBody: &operations.UpdateInlineScriptTagRequestBody{
            InlineScriptTag: &operations.UpdateInlineScriptTagRequestBodyInlineScriptTag{
                DisplayScope: operations.UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnumCart.ToPointer(),
                Script: sdk.String("console.log("aaaaa")"),
                TriggerEvent: operations.UpdateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnumObjectBuilded.ToPointer(),
            },
        },
        InlineScriptTagID: 423655,
    }, operations.UpdateInlineScriptTagSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateInlineScriptTag200ApplicationJSONObject != nil {
        // handle response
    }
}
```
