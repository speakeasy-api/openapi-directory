# ScriptDeprecated

## Overview

スクリプトタグを挿入するAPIです。※新規デベロッパーはこのエンドポイントを利用できません。代わりに [スクリプトタグ](/open_api#tag/script) をご利用ください

### Available Operations

* [CreateScriptTag](#createscripttag) - スクリプトタグの作成
* [DeleteV1ScriptTagsScriptTagIDJSON](#deletev1scripttagsscripttagidjson) - スクリプトタグの削除
* [GetScriptTag](#getscripttag) - スクリプトタグの取得
* [GetScriptTags](#getscripttags) - スクリプトタグの取得
* [UpdateScriptTag](#updatescripttag) - スクリプトタグの更新

## CreateScriptTag

スクリプトタグの作成

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
    res, err := s.ScriptDeprecated.CreateScriptTag(ctx, operations.CreateScriptTagRequestBody{
        ScriptTag: &operations.CreateScriptTagRequestBodyScriptTag{
            DisplayScope: operations.CreateScriptTagRequestBodyScriptTagDisplayScopeEnumShop.ToPointer(),
            Src: sdk.String("https://example.com/example.js"),
        },
    }, operations.CreateScriptTagSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateScriptTag200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteV1ScriptTagsScriptTagIDJSON

スクリプトタグの削除

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
    res, err := s.ScriptDeprecated.DeleteV1ScriptTagsScriptTagIDJSON(ctx, operations.DeleteV1ScriptTagsScriptTagIDJSONRequest{
        ScriptTagID: 437587,
    }, operations.DeleteV1ScriptTagsScriptTagIDJSONSecurity{
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

## GetScriptTag

スクリプトタグの取得

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
    res, err := s.ScriptDeprecated.GetScriptTag(ctx, operations.GetScriptTagRequest{
        ScriptTagID: 297534,
    }, operations.GetScriptTagSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetScriptTag200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetScriptTags

スクリプトタグの取得

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
    res, err := s.ScriptDeprecated.GetScriptTags(ctx, operations.GetScriptTagsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetScriptTags200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateScriptTag

スクリプトタグの更新

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
    res, err := s.ScriptDeprecated.UpdateScriptTag(ctx, operations.UpdateScriptTagRequest{
        RequestBody: &operations.UpdateScriptTagRequestBody{
            ScriptTag: &operations.UpdateScriptTagRequestBodyScriptTag{
                DisplayScope: operations.UpdateScriptTagRequestBodyScriptTagDisplayScopeEnumShop.ToPointer(),
                Src: sdk.String("https://example.com/example.js"),
            },
        },
        ScriptTagID: 891773,
    }, operations.UpdateScriptTagSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateScriptTag200ApplicationJSONObject != nil {
        // handle response
    }
}
```
