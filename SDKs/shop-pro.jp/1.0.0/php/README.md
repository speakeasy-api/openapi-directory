# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### applicationCharge

* `createUsageCharge` - 従量課金データの作成
* `postApplicationCharge` - アプリ内課金データの作成

### inlineScript

* `createInlineScriptTag` - インラインスクリプトタグの登録
* `deleteInlineScriptTag` - インラインスクリプトタグの削除
* `getInlineScriptTag` - インラインスクリプトタグの取得
* `getInlineScriptTags` - インラインスクリプトタグの取得
* `updateInlineScriptTag` - インラインスクリプトタグの更新

### script

* `createShopScriptTag` - スクリプトタグの作成
* `deleteScriptTag` - スクリプトタグの削除
* `getShopScriptTag` - スクリプトタグの取得
* `getShopScriptTags` - スクリプトタグの取得
* `updateShopScriptTag` - スクリプトタグの更新

### scriptDeprecated

* `createScriptTag` - スクリプトタグの作成
* `deleteV1ScriptTagsScriptTagIdJson` - スクリプトタグの削除
* `getScriptTag` - スクリプトタグの取得
* `getScriptTags` - スクリプトタグの取得
* `updateScriptTag` - スクリプトタグの更新

### uninstallation

* `deleteInstallation` - アプリストアアプリのアンインストール
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
