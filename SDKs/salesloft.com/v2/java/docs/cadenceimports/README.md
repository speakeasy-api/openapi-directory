# cadenceImports

## Overview

Cadence Importing

### Available Operations

* [postV2CadenceImportsJson](#postv2cadenceimportsjson) - Import cadences from JSON

## postV2CadenceImportsJson

New cadences can be created or steps can be imported onto existing cadences which do not have steps.
<a href="/cadence-imports.html" target="_blank" rel="noopener noreferrer">Visit here for more details</a>.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV2CadenceImportsJsonRequestBody;
import org.openapis.openapi.models.operations.PostV2CadenceImportsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV2CadenceImportsJsonRequestBody req = new PostV2CadenceImportsJsonRequestBody() {{
                cadenceContent = new java.util.HashMap<String, Object>() {{
                    put("libero", "voluptas");
                    put("deserunt", "quam");
                }};
                settings = new java.util.HashMap<String, Object>() {{
                    put("incidunt", "qui");
                }};
                sharingSettings = new java.util.HashMap<String, Object>() {{
                    put("maxime", "pariatur");
                    put("soluta", "dicta");
                    put("laborum", "totam");
                }};
            }};            

            PostV2CadenceImportsJsonResponse res = sdk.cadenceImports.postV2CadenceImportsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
