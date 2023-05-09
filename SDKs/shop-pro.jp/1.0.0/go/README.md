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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ApplicationCharge.CreateUsageCharge(ctx, operations.CreateUsageChargeRequest{
        RequestBody: operations.CreateUsageChargeRequestBody{
            UsageCharge: &operations.CreateUsageChargeRequestBodyUsageCharge{
                Description: "2019/4 メール送信分",
                Point: 100,
            },
        },
        XAppstoreUsageChargeToken: sdk.String("corrupti"),
        RecurringApplicationChargeID: "provident",
    }, operations.CreateUsageChargeSecurity{
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


### [ApplicationCharge](docs/applicationcharge/README.md)

* [CreateUsageCharge](docs/applicationcharge/README.md#createusagecharge) - 従量課金データの作成
* [PostApplicationCharge](docs/applicationcharge/README.md#postapplicationcharge) - アプリ内課金データの作成

### [InlineScript](docs/inlinescript/README.md)

* [CreateInlineScriptTag](docs/inlinescript/README.md#createinlinescripttag) - インラインスクリプトタグの登録
* [DeleteInlineScriptTag](docs/inlinescript/README.md#deleteinlinescripttag) - インラインスクリプトタグの削除
* [GetInlineScriptTag](docs/inlinescript/README.md#getinlinescripttag) - インラインスクリプトタグの取得
* [GetInlineScriptTags](docs/inlinescript/README.md#getinlinescripttags) - インラインスクリプトタグの取得
* [UpdateInlineScriptTag](docs/inlinescript/README.md#updateinlinescripttag) - インラインスクリプトタグの更新

### [Script](docs/script/README.md)

* [CreateShopScriptTag](docs/script/README.md#createshopscripttag) - スクリプトタグの作成
* [DeleteScriptTag](docs/script/README.md#deletescripttag) - スクリプトタグの削除
* [GetShopScriptTag](docs/script/README.md#getshopscripttag) - スクリプトタグの取得
* [GetShopScriptTags](docs/script/README.md#getshopscripttags) - スクリプトタグの取得
* [UpdateShopScriptTag](docs/script/README.md#updateshopscripttag) - スクリプトタグの更新

### [ScriptDeprecated](docs/scriptdeprecated/README.md)

* [CreateScriptTag](docs/scriptdeprecated/README.md#createscripttag) - スクリプトタグの作成
* [DeleteV1ScriptTagsScriptTagIDJSON](docs/scriptdeprecated/README.md#deletev1scripttagsscripttagidjson) - スクリプトタグの削除
* [GetScriptTag](docs/scriptdeprecated/README.md#getscripttag) - スクリプトタグの取得
* [GetScriptTags](docs/scriptdeprecated/README.md#getscripttags) - スクリプトタグの取得
* [UpdateScriptTag](docs/scriptdeprecated/README.md#updatescripttag) - スクリプトタグの更新

### [Uninstallation](docs/uninstallation/README.md)

* [DeleteInstallation](docs/uninstallation/README.md#deleteinstallation) - アプリストアアプリのアンインストール
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
