# validation

## Overview

Validation functions

### Available Operations

* [getBadge](#getbadge) - Return a redirect to a badge svg file depending on a source definition's validity
* [validate](#validate) - Validate an OpenAPI 3.0.x definition supplied in the body of the request
* [validateUrl](#validateurl) - Validate an OpenAPI 3.0.x definition

## getBadge

Return a redirect to a badge svg file depending on a source definition's validity

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBadgeRequest;
import org.openapis.openapi.models.operations.GetBadgeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBadgeRequest req = new GetBadgeRequest("http://physical-pegboard.info");            

            GetBadgeResponse res = sdk.validation.getBadge(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## validate

Validate an OpenAPI 3.0.x definition supplied in the body of the request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ValidateRequestBody;
import org.openapis.openapi.models.operations.ValidateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ValidateRequestBody req = new ValidateRequestBody() {{
                filename = "iure";
                source = "magnam";
            }};            

            ValidateResponse res = sdk.validation.validate(req);

            if (res.validationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## validateUrl

Validate an OpenAPI 3.0.x definition

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ValidateUrlRequest;
import org.openapis.openapi.models.operations.ValidateUrlResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ValidateUrlRequest req = new ValidateUrlRequest("https://awesome-voter.biz");            

            ValidateUrlResponse res = sdk.validation.validateUrl(req);

            if (res.validationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
