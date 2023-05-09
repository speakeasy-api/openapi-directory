# tools

## Overview

Tools to assist with sending and receiving messages, such as file sharing, translation, etc.

### Available Operations

* [toolsShareFileMultipart](#toolssharefilemultipart) - Share file - use to host a file and generate a short link to be used directly in a message or as a link to media for a MMS
* [toolsShareFileRaw](#toolssharefileraw) - Share file - use to host a file and generate a short link to be used directly in a message or as a link to media for a MMS

## toolsShareFileMultipart

Share file - use to host a file and generate a short link to be used directly in a message or as a link to media for a MMS

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToolsShareFileMultipartFormData;
import org.openapis.openapi.models.operations.ToolsShareFileMultipartFormDataMedia;
import org.openapis.openapi.models.operations.ToolsShareFileMultipartResponse;
import org.openapis.openapi.models.operations.ToolsShareFileMultipartSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToolsShareFileMultipartFormData req = new ToolsShareFileMultipartFormData() {{
                media = new ToolsShareFileMultipartFormDataMedia("natus".getBytes(), "magni");;
            }};            

            ToolsShareFileMultipartResponse res = sdk.tools.toolsShareFileMultipart(req, new ToolsShareFileMultipartSecurity("sunt") {{
                sakariAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.shareFileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## toolsShareFileRaw

Share file - use to host a file and generate a short link to be used directly in a message or as a link to media for a MMS

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToolsShareFileRawResponse;
import org.openapis.openapi.models.operations.ToolsShareFileRawSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "quo".getBytes()            

            ToolsShareFileRawResponse res = sdk.tools.toolsShareFileRaw(req, new ToolsShareFileRawSecurity("illum") {{
                sakariAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.shareFileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
