# externalEmails

## Overview

External Emails

### Available Operations

* [postV2ExternalEmailsJson](#postv2externalemailsjson) - Create an External Email

## postV2ExternalEmailsJson

Creates an external email object.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV2ExternalEmailsJsonRequestBody;
import org.openapis.openapi.models.operations.PostV2ExternalEmailsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV2ExternalEmailsJsonRequestBody req = new PostV2ExternalEmailsJsonRequestBody("nulla", "quas");            

            PostV2ExternalEmailsJsonResponse res = sdk.externalEmails.postV2ExternalEmailsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
