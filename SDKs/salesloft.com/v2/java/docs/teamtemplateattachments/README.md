# teamTemplateAttachments

## Overview

Team Template Attachments

### Available Operations

* [getV2TeamTemplateAttachmentsJson](#getv2teamtemplateattachmentsjson) - List team template attachments

## getV2TeamTemplateAttachmentsJson

Fetches multiple team template attachment records. The records can be filtered and paged according to
the respective parameters.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2TeamTemplateAttachmentsJsonRequest;
import org.openapis.openapi.models.operations.GetV2TeamTemplateAttachmentsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2TeamTemplateAttachmentsJsonRequest req = new GetV2TeamTemplateAttachmentsJsonRequest() {{
                ids = new Long[]{{
                    add(90233L),
                }};
                includePagingCounts = false;
                limitPagingCounts = false;
                page = 497777L;
                perPage = 619183L;
                teamTemplateId = new Long[]{{
                    add(382440L),
                    add(241557L),
                    add(96562L),
                }};
            }};            

            GetV2TeamTemplateAttachmentsJsonResponse res = sdk.teamTemplateAttachments.getV2TeamTemplateAttachmentsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
