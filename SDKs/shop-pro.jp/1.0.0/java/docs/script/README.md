# script

## Overview

ショップページにスクリプトタグを挿入するAPIです。

スクリプトタグエンドポイントを利用する場合、以下の点にご注意ください。
- スクリプトを配信するサーバは、適切なCORSヘッダ(e.g. `Access-Control-Allow-Origin`) をレスポンスに付与する必要があります
- 登録済みスクリプトの内容を変更した場合は、都度更新リクエストにて適切な `integrity` パラメータを送信する必要があります
- 登録するスクリプトのURLスキームは `https` のみになります
- 登録・更新時にカラーミーAPIがスクリプトを取得します。スクリプトが取得できない場合は登録できません
- スクリプトタグAPIで挿入されたスクリプトタグは、アプリがアンインストールされると自動で削除されます


### Available Operations

* [createShopScriptTag](#createshopscripttag) - スクリプトタグの作成
* [deleteScriptTag](#deletescripttag) - スクリプトタグの削除
* [getShopScriptTag](#getshopscripttag) - スクリプトタグの取得
* [getShopScriptTags](#getshopscripttags) - スクリプトタグの取得
* [updateShopScriptTag](#updateshopscripttag) - スクリプトタグの更新

## createShopScriptTag

スクリプトタグの作成

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateShopScriptTagRequestBody;
import org.openapis.openapi.models.operations.CreateShopScriptTagRequestBodyScriptTag;
import org.openapis.openapi.models.operations.CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum;
import org.openapis.openapi.models.operations.CreateShopScriptTagResponse;
import org.openapis.openapi.models.operations.CreateShopScriptTagSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateShopScriptTagRequestBody req = new CreateShopScriptTagRequestBody() {{
                scriptTag = new CreateShopScriptTagRequestBodyScriptTag() {{
                    displayScope = CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum.SHOP;
                    integrity = "sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC";
                    src = "https://example.com/example.js";
                }};;
            }};            

            CreateShopScriptTagResponse res = sdk.script.createShopScriptTag(req, new CreateShopScriptTagSecurity("tempora") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createShopScriptTag200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteScriptTag

スクリプトタグの削除

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteScriptTagRequest;
import org.openapis.openapi.models.operations.DeleteScriptTagResponse;
import org.openapis.openapi.models.operations.DeleteScriptTagSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteScriptTagRequest req = new DeleteScriptTagRequest(383441L);            

            DeleteScriptTagResponse res = sdk.script.deleteScriptTag(req, new DeleteScriptTagSecurity("molestiae") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getShopScriptTag

スクリプトタグの取得

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetShopScriptTagRequest;
import org.openapis.openapi.models.operations.GetShopScriptTagResponse;
import org.openapis.openapi.models.operations.GetShopScriptTagSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetShopScriptTagRequest req = new GetShopScriptTagRequest(791725L);            

            GetShopScriptTagResponse res = sdk.script.getShopScriptTag(req, new GetShopScriptTagSecurity("placeat") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getShopScriptTag200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getShopScriptTags

スクリプトタグの取得

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetShopScriptTagsResponse;
import org.openapis.openapi.models.operations.GetShopScriptTagsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetShopScriptTagsResponse res = sdk.script.getShopScriptTags(new GetShopScriptTagsSecurity("voluptatum") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getShopScriptTags200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateShopScriptTag

スクリプトタグの更新

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateShopScriptTagRequest;
import org.openapis.openapi.models.operations.UpdateShopScriptTagRequestBody;
import org.openapis.openapi.models.operations.UpdateShopScriptTagRequestBodyScriptTag;
import org.openapis.openapi.models.operations.UpdateShopScriptTagRequestBodyScriptTagDisplayScopeEnum;
import org.openapis.openapi.models.operations.UpdateShopScriptTagResponse;
import org.openapis.openapi.models.operations.UpdateShopScriptTagSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateShopScriptTagRequest req = new UpdateShopScriptTagRequest(479977L) {{
                requestBody = new UpdateShopScriptTagRequestBody() {{
                    scriptTag = new UpdateShopScriptTagRequestBodyScriptTag() {{
                        displayScope = UpdateShopScriptTagRequestBodyScriptTagDisplayScopeEnum.SHOP;
                        integrity = "sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC";
                        src = "https://example.com/example.js";
                    }};;
                }};;
            }};            

            UpdateShopScriptTagResponse res = sdk.script.updateShopScriptTag(req, new UpdateShopScriptTagSecurity("excepturi") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.updateShopScriptTag200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
