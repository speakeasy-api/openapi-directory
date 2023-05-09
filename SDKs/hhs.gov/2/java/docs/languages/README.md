# languages

## Overview

Information about languages

### Available Operations

* [getResourcesLanguagesJson](#getresourceslanguagesjson) - Get Languages
* [getResourcesLanguagesIdJson](#getresourceslanguagesidjson) - Get Language by ID

## getResourcesLanguagesJson

Language Listings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesLanguagesJsonRequest;
import org.openapis.openapi.models.operations.GetResourcesLanguagesJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesLanguagesJsonRequest req = new GetResourcesLanguagesJsonRequest() {{
                max = 891773;
                offset = 56713;
                sort = "delectus";
            }};            

            GetResourcesLanguagesJsonResponse res = sdk.languages.getResourcesLanguagesJson(req);

            if (res.languageWrappeds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcesLanguagesIdJson

Information about a specific language

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesLanguagesIdJsonRequest;
import org.openapis.openapi.models.operations.GetResourcesLanguagesIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesLanguagesIdJsonRequest req = new GetResourcesLanguagesIdJsonRequest(272656L);            

            GetResourcesLanguagesIdJsonResponse res = sdk.languages.getResourcesLanguagesIdJson(req);

            if (res.languageWrappeds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
