# base

## Overview

This is the "home page" of the API you can get important autentication information for the user making the request and get links to other resources.

### Available Operations

* [baseRead](#baseread) - Root

## baseRead

#### Returns
A JSON object with `meta` and `links` keys.

The `meta` key contains information such as a welcome message from the API, the specified version of the request, and the full representation of the current user, if authentication credentials were provided in the request.

The `links` key contains links to the following entity collections: [addons](#tag/Addons), [collections](), [institutions](#tag/Institutions), [licenses](#tag/Licenses), [registration schemas](#tag/Registration Schemas), [nodes](#tag/Nodes), [registrations](#tag/Registrations), [users](#tag/Users)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaseReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaseReadResponse res = sdk.base.baseRead();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
