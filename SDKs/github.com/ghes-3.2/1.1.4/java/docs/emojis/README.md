# emojis

## Overview

List emojis available to use on GitHub.

### Available Operations

* [emojisGet](#emojisget) - Get emojis

## emojisGet

Lists all the emojis available to use on GitHub Enterprise Server.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/emojis#get-emojis>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EmojisGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EmojisGetResponse res = sdk.emojis.emojisGet();

            if (res.emojisGet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
