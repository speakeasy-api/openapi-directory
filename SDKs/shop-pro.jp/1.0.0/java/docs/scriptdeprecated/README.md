# scriptDeprecated

## Overview

スクリプトタグを挿入するAPIです。※新規デベロッパーはこのエンドポイントを利用できません。代わりに [スクリプトタグ](/open_api#tag/script) をご利用ください

### Available Operations

* [createScriptTag](#createscripttag) - スクリプトタグの作成
* [deleteV1ScriptTagsScriptTagIdJson](#deletev1scripttagsscripttagidjson) - スクリプトタグの削除
* [getScriptTag](#getscripttag) - スクリプトタグの取得
* [getScriptTags](#getscripttags) - スクリプトタグの取得
* [updateScriptTag](#updatescripttag) - スクリプトタグの更新

## createScriptTag

スクリプトタグの作成

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateScriptTagRequestBody;
import org.openapis.openapi.models.operations.CreateScriptTagRequestBodyScriptTag;
import org.openapis.openapi.models.operations.CreateScriptTagRequestBodyScriptTagDisplayScopeEnum;
import org.openapis.openapi.models.operations.CreateScriptTagResponse;
import org.openapis.openapi.models.operations.CreateScriptTagSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateScriptTagRequestBody req = new CreateScriptTagRequestBody() {{
                scriptTag = new CreateScriptTagRequestBodyScriptTag() {{
                    displayScope = CreateScriptTagRequestBodyScriptTagDisplayScopeEnum.SHOP;
                    src = "https://example.com/example.js";
                }};;
            }};            

            CreateScriptTagResponse res = sdk.scriptDeprecated.createScriptTag(req, new CreateScriptTagSecurity("nisi") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createScriptTag200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteV1ScriptTagsScriptTagIdJson

スクリプトタグの削除

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteV1ScriptTagsScriptTagIdJsonRequest;
import org.openapis.openapi.models.operations.DeleteV1ScriptTagsScriptTagIdJsonResponse;
import org.openapis.openapi.models.operations.DeleteV1ScriptTagsScriptTagIdJsonSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteV1ScriptTagsScriptTagIdJsonRequest req = new DeleteV1ScriptTagsScriptTagIdJsonRequest(925597L);            

            DeleteV1ScriptTagsScriptTagIdJsonResponse res = sdk.scriptDeprecated.deleteV1ScriptTagsScriptTagIdJson(req, new DeleteV1ScriptTagsScriptTagIdJsonSecurity("temporibus") {{
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

## getScriptTag

スクリプトタグの取得

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetScriptTagRequest;
import org.openapis.openapi.models.operations.GetScriptTagResponse;
import org.openapis.openapi.models.operations.GetScriptTagSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetScriptTagRequest req = new GetScriptTagRequest(71036L);            

            GetScriptTagResponse res = sdk.scriptDeprecated.getScriptTag(req, new GetScriptTagSecurity("quis") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getScriptTag200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getScriptTags

スクリプトタグの取得

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetScriptTagsResponse;
import org.openapis.openapi.models.operations.GetScriptTagsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetScriptTagsResponse res = sdk.scriptDeprecated.getScriptTags(new GetScriptTagsSecurity("veritatis") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getScriptTags200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateScriptTag

スクリプトタグの更新

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateScriptTagRequest;
import org.openapis.openapi.models.operations.UpdateScriptTagRequestBody;
import org.openapis.openapi.models.operations.UpdateScriptTagRequestBodyScriptTag;
import org.openapis.openapi.models.operations.UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum;
import org.openapis.openapi.models.operations.UpdateScriptTagResponse;
import org.openapis.openapi.models.operations.UpdateScriptTagSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateScriptTagRequest req = new UpdateScriptTagRequest(648172L) {{
                requestBody = new UpdateScriptTagRequestBody() {{
                    scriptTag = new UpdateScriptTagRequestBodyScriptTag() {{
                        displayScope = UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum.SHOP;
                        src = "https://example.com/example.js";
                    }};;
                }};;
            }};            

            UpdateScriptTagResponse res = sdk.scriptDeprecated.updateScriptTag(req, new UpdateScriptTagSecurity("perferendis") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.updateScriptTag200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
