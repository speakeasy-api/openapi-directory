# Script

## Overview

ショップページにスクリプトタグを挿入するAPIです。

スクリプトタグエンドポイントを利用する場合、以下の点にご注意ください。
- スクリプトを配信するサーバは、適切なCORSヘッダ(e.g. `Access-Control-Allow-Origin`) をレスポンスに付与する必要があります
- 登録済みスクリプトの内容を変更した場合は、都度更新リクエストにて適切な `integrity` パラメータを送信する必要があります
- 登録するスクリプトのURLスキームは `https` のみになります
- 登録・更新時にカラーミーAPIがスクリプトを取得します。スクリプトが取得できない場合は登録できません
- スクリプトタグAPIで挿入されたスクリプトタグは、アプリがアンインストールされると自動で削除されます


### Available Operations

* [CreateShopScriptTag](#createshopscripttag) - スクリプトタグの作成
* [DeleteScriptTag](#deletescripttag) - スクリプトタグの削除
* [GetShopScriptTag](#getshopscripttag) - スクリプトタグの取得
* [GetShopScriptTags](#getshopscripttags) - スクリプトタグの取得
* [UpdateShopScriptTag](#updateshopscripttag) - スクリプトタグの更新

## CreateShopScriptTag

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
    res, err := s.Script.CreateShopScriptTag(ctx, operations.CreateShopScriptTagRequestBody{
        ScriptTag: &operations.CreateShopScriptTagRequestBodyScriptTag{
            DisplayScope: operations.CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnumShop.ToPointer(),
            Integrity: sdk.String("sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"),
            Src: sdk.String("https://example.com/example.js"),
        },
    }, operations.CreateShopScriptTagSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateShopScriptTag200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteScriptTag

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
    res, err := s.Script.DeleteScriptTag(ctx, operations.DeleteScriptTagRequest{
        ScriptTagID: 623564,
    }, operations.DeleteScriptTagSecurity{
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

## GetShopScriptTag

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
    res, err := s.Script.GetShopScriptTag(ctx, operations.GetShopScriptTagRequest{
        ScriptTagID: 645894,
    }, operations.GetShopScriptTagSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetShopScriptTag200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetShopScriptTags

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
    res, err := s.Script.GetShopScriptTags(ctx, operations.GetShopScriptTagsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetShopScriptTags200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateShopScriptTag

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
    res, err := s.Script.UpdateShopScriptTag(ctx, operations.UpdateShopScriptTagRequest{
        RequestBody: &operations.UpdateShopScriptTagRequestBody{
            ScriptTag: &operations.UpdateShopScriptTagRequestBodyScriptTag{
                DisplayScope: operations.UpdateShopScriptTagRequestBodyScriptTagDisplayScopeEnumShop.ToPointer(),
                Integrity: sdk.String("sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"),
                Src: sdk.String("https://example.com/example.js"),
            },
        },
        ScriptTagID: 384382,
    }, operations.UpdateShopScriptTagSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateShopScriptTag200ApplicationJSONObject != nil {
        // handle response
    }
}
```
