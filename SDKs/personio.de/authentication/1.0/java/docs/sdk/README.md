# SDK

## Overview

Personio Authentication API

### Available Operations

* [postAuth](#postauth) - Request Authentication Token

## postAuth

Request Authentication Token

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAuthRequest;
import org.openapis.openapi.models.operations.PostAuthResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAuthRequest req = new PostAuthRequest("distinctio", "quibusdam");            

            PostAuthResponse res = sdk.sdk.postAuth(req);

            if (res.authenticationTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
