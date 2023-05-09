# Uninstallation

## Overview

アプリをアンインストールするAPIです。

### Available Operations

* [DeleteInstallation](#deleteinstallation) - アプリストアアプリのアンインストール

## DeleteInstallation

このAPIは OAuth のアクセストークンに紐付くアプリケーションをショップから削除します。
このAPIを利用した場合、ショップオーナーがアンインストールした場合と異なり、アンインストールフックは実行されません。
代わりにアンインストールフックで通知される情報は、このAPIのレスポンスに含まれています。

アンインストール時の注意点については、[アプリのアンインストール](https://app.shop-pro.jp/open_api#section/API/アプリのインストール)を参照して下さい。


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
    res, err := s.Uninstallation.DeleteInstallation(ctx, operations.DeleteInstallationSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteInstallation200ApplicationJSONObject != nil {
        // handle response
    }
}
```
