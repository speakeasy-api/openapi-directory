# inlineScript

## Overview

インラインスクリプトを挿入するAPIです。※新規デベロッパーはこのエンドポイントを利用できません

### Available Operations

* [createInlineScriptTag](#createinlinescripttag) - インラインスクリプトタグの登録
* [deleteInlineScriptTag](#deleteinlinescripttag) - インラインスクリプトタグの削除
* [getInlineScriptTag](#getinlinescripttag) - インラインスクリプトタグの取得
* [getInlineScriptTags](#getinlinescripttags) - インラインスクリプトタグの取得
* [updateInlineScriptTag](#updateinlinescripttag) - インラインスクリプトタグの更新

## createInlineScriptTag

インラインスクリプトタグの登録

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInlineScriptTagRequestBody;
import org.openapis.openapi.models.operations.CreateInlineScriptTagRequestBodyInlineScriptTag;
import org.openapis.openapi.models.operations.CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum;
import org.openapis.openapi.models.operations.CreateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum;
import org.openapis.openapi.models.operations.CreateInlineScriptTagResponse;
import org.openapis.openapi.models.operations.CreateInlineScriptTagSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateInlineScriptTagRequestBody req = new CreateInlineScriptTagRequestBody() {{
                inlineScriptTag = new CreateInlineScriptTagRequestBodyInlineScriptTag() {{
                    displayScope = CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum.CART;
                    script = "console.log("aaaaa")";
                    triggerEvent = CreateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum.OBJECT_BUILDED;
                }};;
            }};            

            CreateInlineScriptTagResponse res = sdk.inlineScript.createInlineScriptTag(req, new CreateInlineScriptTagSecurity("vel") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createInlineScriptTag201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteInlineScriptTag

インラインスクリプトタグの削除

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteInlineScriptTagRequest;
import org.openapis.openapi.models.operations.DeleteInlineScriptTagResponse;
import org.openapis.openapi.models.operations.DeleteInlineScriptTagSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteInlineScriptTagRequest req = new DeleteInlineScriptTagRequest(623564L);            

            DeleteInlineScriptTagResponse res = sdk.inlineScript.deleteInlineScriptTag(req, new DeleteInlineScriptTagSecurity("deserunt") {{
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

## getInlineScriptTag

インラインスクリプトタグの取得

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInlineScriptTagRequest;
import org.openapis.openapi.models.operations.GetInlineScriptTagResponse;
import org.openapis.openapi.models.operations.GetInlineScriptTagSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInlineScriptTagRequest req = new GetInlineScriptTagRequest(384382L);            

            GetInlineScriptTagResponse res = sdk.inlineScript.getInlineScriptTag(req, new GetInlineScriptTagSecurity("iure") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getInlineScriptTag200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInlineScriptTags

インラインスクリプトタグの取得

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInlineScriptTagsResponse;
import org.openapis.openapi.models.operations.GetInlineScriptTagsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInlineScriptTagsResponse res = sdk.inlineScript.getInlineScriptTags(new GetInlineScriptTagsSecurity("magnam") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getInlineScriptTags200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateInlineScriptTag

インラインスクリプトタグの更新

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateInlineScriptTagRequest;
import org.openapis.openapi.models.operations.UpdateInlineScriptTagRequestBody;
import org.openapis.openapi.models.operations.UpdateInlineScriptTagRequestBodyInlineScriptTag;
import org.openapis.openapi.models.operations.UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum;
import org.openapis.openapi.models.operations.UpdateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum;
import org.openapis.openapi.models.operations.UpdateInlineScriptTagResponse;
import org.openapis.openapi.models.operations.UpdateInlineScriptTagSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateInlineScriptTagRequest req = new UpdateInlineScriptTagRequest(891773L) {{
                requestBody = new UpdateInlineScriptTagRequestBody() {{
                    inlineScriptTag = new UpdateInlineScriptTagRequestBodyInlineScriptTag() {{
                        displayScope = UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum.ALL;
                        script = "console.log("aaaaa")";
                        triggerEvent = UpdateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum.OBJECT_BUILDED;
                    }};;
                }};;
            }};            

            UpdateInlineScriptTagResponse res = sdk.inlineScript.updateInlineScriptTag(req, new UpdateInlineScriptTagSecurity("delectus") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.updateInlineScriptTag200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
