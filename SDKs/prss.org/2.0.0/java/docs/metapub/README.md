# metaPub

## Overview

Endpoints to access MetaPub ingest functionality such as synchronizing producer metadata to programs and episodes. These API operations are deprecated. Use the pieces endpoints instead.

### Available Operations

* [~~getApiV2MetapubProgramInformationBatchBatchId~~](#getapiv2metapubprograminformationbatchbatchid) - Get an EPG batch operation. :warning: **Deprecated**
* [~~postApiV2MetapubProgramInformationBatch~~](#postapiv2metapubprograminformationbatch) - Create a batch operation on EPG information. :warning: **Deprecated**

## ~~getApiV2MetapubProgramInformationBatchBatchId~~

Gets the batch information which can be used to check the status of the operation or retrieve more details if the batch fails.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV2MetapubProgramInformationBatchBatchIdRequest;
import org.openapis.openapi.models.operations.GetApiV2MetapubProgramInformationBatchBatchIdResponse;
import org.openapis.openapi.models.operations.GetApiV2MetapubProgramInformationBatchBatchIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2MetapubProgramInformationBatchBatchIdRequest req = new GetApiV2MetapubProgramInformationBatchBatchIdRequest(758616L);            

            GetApiV2MetapubProgramInformationBatchBatchIdResponse res = sdk.metaPub.getApiV2MetapubProgramInformationBatchBatchId(req, new GetApiV2MetapubProgramInformationBatchBatchIdSecurity("totam") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.programInformationBatch != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~postApiV2MetapubProgramInformationBatch~~

Create a batch to process the metadata of one or more electronic program guide (EPG) programs using metadata that has been uploaded to the customer's CD Drive. If multiple EPG programs are present in the metadata, they will all be updated, however updates across programs are not atomic. Note that an EPG program maps to the ContentDepot concept of an episode which is also known as a "program instance".

A batch operation must be explicitly created rather than the server attempting to detect new metadata in order to allow for all the content to be uploaded including any supporting content like images. A batch operation is accepted and queued for asynchronous processing at a later time. A client can poll the batch periodically to determine when it completes and the resulting state.


Find RadioDns to ContentDepot Mapping here
</api/epg-cd-mapping.html>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV2MetapubProgramInformationBatchRequestBody;
import org.openapis.openapi.models.operations.PostApiV2MetapubProgramInformationBatchRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.PostApiV2MetapubProgramInformationBatchRequestBodyProgram;
import org.openapis.openapi.models.operations.PostApiV2MetapubProgramInformationBatchResponse;
import org.openapis.openapi.models.operations.PostApiV2MetapubProgramInformationBatchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV2MetapubProgramInformationBatchRequestBody req = new PostApiV2MetapubProgramInformationBatchRequestBody(PostApiV2MetapubProgramInformationBatchRequestBodyFormatEnum.RADIODNS, "http://immense-investor.biz") {{
                name = "Krista Rippin";
                program = new PostApiV2MetapubProgramInformationBatchRequestBodyProgram("excepturi", "aspernatur");;
            }};            

            PostApiV2MetapubProgramInformationBatchResponse res = sdk.metaPub.postApiV2MetapubProgramInformationBatch(req, new PostApiV2MetapubProgramInformationBatchSecurity("perferendis") {{
                cdOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.programInformationBatch != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
