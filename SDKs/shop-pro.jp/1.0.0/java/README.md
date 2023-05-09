# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUsageChargeRequest;
import org.openapis.openapi.models.operations.CreateUsageChargeRequestBody;
import org.openapis.openapi.models.operations.CreateUsageChargeRequestBodyUsageCharge;
import org.openapis.openapi.models.operations.CreateUsageChargeResponse;
import org.openapis.openapi.models.operations.CreateUsageChargeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateUsageChargeRequest req = new CreateUsageChargeRequest(                new CreateUsageChargeRequestBody() {{
                                usageCharge = new CreateUsageChargeRequestBodyUsageCharge("2019/4 メール送信分", 100L);;
                            }};, "corrupti") {{
                xAppstoreUsageChargeToken = "provident";
            }};            

            CreateUsageChargeResponse res = sdk.applicationCharge.createUsageCharge(req, new CreateUsageChargeSecurity("distinctio") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createUsageCharge201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [applicationCharge](docs/applicationcharge/README.md)

* [createUsageCharge](docs/applicationcharge/README.md#createusagecharge) - 従量課金データの作成
* [postApplicationCharge](docs/applicationcharge/README.md#postapplicationcharge) - アプリ内課金データの作成

### [inlineScript](docs/inlinescript/README.md)

* [createInlineScriptTag](docs/inlinescript/README.md#createinlinescripttag) - インラインスクリプトタグの登録
* [deleteInlineScriptTag](docs/inlinescript/README.md#deleteinlinescripttag) - インラインスクリプトタグの削除
* [getInlineScriptTag](docs/inlinescript/README.md#getinlinescripttag) - インラインスクリプトタグの取得
* [getInlineScriptTags](docs/inlinescript/README.md#getinlinescripttags) - インラインスクリプトタグの取得
* [updateInlineScriptTag](docs/inlinescript/README.md#updateinlinescripttag) - インラインスクリプトタグの更新

### [script](docs/script/README.md)

* [createShopScriptTag](docs/script/README.md#createshopscripttag) - スクリプトタグの作成
* [deleteScriptTag](docs/script/README.md#deletescripttag) - スクリプトタグの削除
* [getShopScriptTag](docs/script/README.md#getshopscripttag) - スクリプトタグの取得
* [getShopScriptTags](docs/script/README.md#getshopscripttags) - スクリプトタグの取得
* [updateShopScriptTag](docs/script/README.md#updateshopscripttag) - スクリプトタグの更新

### [scriptDeprecated](docs/scriptdeprecated/README.md)

* [createScriptTag](docs/scriptdeprecated/README.md#createscripttag) - スクリプトタグの作成
* [deleteV1ScriptTagsScriptTagIdJson](docs/scriptdeprecated/README.md#deletev1scripttagsscripttagidjson) - スクリプトタグの削除
* [getScriptTag](docs/scriptdeprecated/README.md#getscripttag) - スクリプトタグの取得
* [getScriptTags](docs/scriptdeprecated/README.md#getscripttags) - スクリプトタグの取得
* [updateScriptTag](docs/scriptdeprecated/README.md#updatescripttag) - スクリプトタグの更新

### [uninstallation](docs/uninstallation/README.md)

* [deleteInstallation](docs/uninstallation/README.md#deleteinstallation) - アプリストアアプリのアンインストール
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
