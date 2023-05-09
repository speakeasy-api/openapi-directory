# uninstallation

## Overview

アプリをアンインストールするAPIです。

### Available Operations

* [deleteInstallation](#deleteinstallation) - アプリストアアプリのアンインストール

## deleteInstallation

このAPIは OAuth のアクセストークンに紐付くアプリケーションをショップから削除します。
このAPIを利用した場合、ショップオーナーがアンインストールした場合と異なり、アンインストールフックは実行されません。
代わりにアンインストールフックで通知される情報は、このAPIのレスポンスに含まれています。

アンインストール時の注意点については、[アプリのアンインストール](https://app.shop-pro.jp/open_api#section/API/アプリのインストール)を参照して下さい。


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteInstallationResponse;
import org.openapis.openapi.models.operations.DeleteInstallationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteInstallationResponse res = sdk.uninstallation.deleteInstallation(new DeleteInstallationSecurity("ipsam") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.deleteInstallation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
