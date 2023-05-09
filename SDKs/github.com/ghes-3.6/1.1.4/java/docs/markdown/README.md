# markdown

## Overview

Render GitHub flavored markdown

### Available Operations

* [markdownRender](#markdownrender) - Render a Markdown document
* [markdownRenderRaw](#markdownrenderraw) - Render a Markdown document in raw mode

## markdownRender

Render a Markdown document

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/markdown#render-a-markdown-document>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MarkdownRenderRequestBody;
import org.openapis.openapi.models.operations.MarkdownRenderRequestBodyModeEnum;
import org.openapis.openapi.models.operations.MarkdownRenderResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MarkdownRenderRequestBody req = new MarkdownRenderRequestBody("delectus") {{
                context = "quae";
                mode = MarkdownRenderRequestBodyModeEnum.MARKDOWN;
            }};            

            MarkdownRenderResponse res = sdk.markdown.markdownRender(req);

            if (res.markdownRender200TextHTMLString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## markdownRenderRaw

You must send Markdown as plain text (using a `Content-Type` header of `text/plain` or `text/x-markdown`) to this endpoint, rather than using JSON format. In raw mode, [GitHub Flavored Markdown](https://github.github.com/gfm/) is not supported and Markdown will be rendered in plain format like a README.md file. Markdown content must be 400 KB or less.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/markdown#render-a-markdown-document-in-raw-mode>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MarkdownRenderRawResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "minus"            

            MarkdownRenderRawResponse res = sdk.markdown.markdownRenderRaw(req);

            if (res.markdownRenderRaw200TextHTMLString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
