# pendingEmails

## Overview

Pending Emails

### Available Operations

* [getV2PendingEmailsJson](#getv2pendingemailsjson) - Fetches a list of emails ready to be sent by an external email service. Only emails sent with an External Email Client will appear here.
* [putV2PendingEmailsIdJson](#putv2pendingemailsidjson) - Updates the status of an email sent by an External Email Client

## getV2PendingEmailsJson

Fetches a list of emails ready to be sent by an external email service.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2PendingEmailsJsonRequest;
import org.openapis.openapi.models.operations.GetV2PendingEmailsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2PendingEmailsJsonRequest req = new GetV2PendingEmailsJsonRequest() {{
                includePagingCounts = false;
                limitPagingCounts = false;
                page = 814967L;
                perPage = 257233L;
            }};            

            GetV2PendingEmailsJsonResponse res = sdk.pendingEmails.getV2PendingEmailsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putV2PendingEmailsIdJson

Updates the status of an email sent by an External Email Client. Does not affect lofted emails.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutV2PendingEmailsIdJsonRequest;
import org.openapis.openapi.models.operations.PutV2PendingEmailsIdJsonRequestBody;
import org.openapis.openapi.models.operations.PutV2PendingEmailsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutV2PendingEmailsIdJsonRequest req = new PutV2PendingEmailsIdJsonRequest(                new PutV2PendingEmailsIdJsonRequestBody("doloribus", "suscipit") {{
                                errorMessage = "reiciendis";
                                sentAt = "quidem";
                            }};, "saepe");            

            PutV2PendingEmailsIdJsonResponse res = sdk.pendingEmails.putV2PendingEmailsIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
