# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/shop-pro.jp/1.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CreateUsageChargeRequest{
        RequestBody: operations.CreateUsageChargeRequestBody{
            UsageCharge: &operations.CreateUsageChargeRequestBodyUsageCharge{
                Description: "2019/4 メール送信分",
                Point: 100,
            },
        },
        XAppstoreUsageChargeToken: "corrupti",
        RecurringApplicationChargeID: "provident",
    }

    ctx := context.Background()
    res, err := s.ApplicationCharge.CreateUsageCharge(ctx, req, operations.CreateUsageChargeSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateUsageCharge201ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### ApplicationCharge

* `CreateUsageCharge` - 従量課金データの作成
* `PostApplicationCharge` - アプリ内課金データの作成

### InlineScript

* `CreateInlineScriptTag` - インラインスクリプトタグの登録
* `DeleteInlineScriptTag` - インラインスクリプトタグの削除
* `GetInlineScriptTag` - インラインスクリプトタグの取得
* `GetInlineScriptTags` - インラインスクリプトタグの取得
* `UpdateInlineScriptTag` - インラインスクリプトタグの更新

### Script

* `CreateShopScriptTag` - スクリプトタグの作成
* `DeleteScriptTag` - スクリプトタグの削除
* `GetShopScriptTag` - スクリプトタグの取得
* `GetShopScriptTags` - スクリプトタグの取得
* `UpdateShopScriptTag` - スクリプトタグの更新

### ScriptDeprecated

* `CreateScriptTag` - スクリプトタグの作成
* `DeleteV1ScriptTagsScriptTagIDJSON` - スクリプトタグの削除
* `GetScriptTag` - スクリプトタグの取得
* `GetScriptTags` - スクリプトタグの取得
* `UpdateScriptTag` - スクリプトタグの更新

### Uninstallation

* `DeleteInstallation` - アプリストアアプリのアンインストール
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
