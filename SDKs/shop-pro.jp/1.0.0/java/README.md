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

import org.openapis.openapi.models.operations.CreateUsageChargeSecurity;
import org.openapis.openapi.models.operations.CreateUsageChargePathParams;
import org.openapis.openapi.models.operations.CreateUsageChargeHeaders;
import org.openapis.openapi.models.operations.CreateUsageChargeRequestBodyUsageCharge;
import org.openapis.openapi.models.operations.CreateUsageChargeRequestBody;
import org.openapis.openapi.models.operations.CreateUsageChargeRequest;
import org.openapis.openapi.models.operations.CreateUsageChargeResponse;
import org.openapis.openapi.models.shared.SchemeOAuth2;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateUsageChargeRequest req = new CreateUsageChargeRequest() {{
                security = new CreateUsageChargeSecurity() {{
                    oAuth2 = new SchemeOAuth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CreateUsageChargePathParams() {{
                    recurringApplicationChargeId = "corrupti";
                }};
                headers = new CreateUsageChargeHeaders() {{
                    xAppstoreUsageChargeToken = "provident";
                }};
                request = new CreateUsageChargeRequestBody() {{
                    usageCharge = new CreateUsageChargeRequestBodyUsageCharge() {{
                        description = "2019/4 メール送信分";
                        point = 100;
                    }};
                }};
            }};            

            CreateUsageChargeResponse res = sdk.applicationCharge.createUsageCharge(req);

            if (res.createUsageCharge201ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
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
