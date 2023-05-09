# emailTemplateAttachments

## Overview

Email Template Attachments

### Available Operations

* [getV2EmailTemplateAttachmentsJson](#getv2emailtemplateattachmentsjson) - List email template attachments

## getV2EmailTemplateAttachmentsJson

Fetches multiple email template attachment records. The records can be filtered and paged according to
the respective parameters.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2EmailTemplateAttachmentsJsonRequest;
import org.openapis.openapi.models.operations.GetV2EmailTemplateAttachmentsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2EmailTemplateAttachmentsJsonRequest req = new GetV2EmailTemplateAttachmentsJsonRequest() {{
                emailTemplateId = new Long[]{{
                    add(587600L),
                }};
                ids = new Long[]{{
                    add(272822L),
                }};
                includePagingCounts = false;
                limitPagingCounts = false;
                page = 892050L;
                perPage = 370853L;
            }};            

            GetV2EmailTemplateAttachmentsJsonResponse res = sdk.emailTemplateAttachments.getV2EmailTemplateAttachmentsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
