# MetaPub

## Overview

Endpoints to access MetaPub ingest functionality such as synchronizing producer metadata to programs and episodes. These API operations are deprecated. Use the pieces endpoints instead.

### Available Operations

* [~~GetAPIV2MetapubProgramInformationBatchBatchID~~](#getapiv2metapubprograminformationbatchbatchid) - Get an EPG batch operation. :warning: **Deprecated**
* [~~PostAPIV2MetapubProgramInformationBatch~~](#postapiv2metapubprograminformationbatch) - Create a batch operation on EPG information. :warning: **Deprecated**

## ~~GetAPIV2MetapubProgramInformationBatchBatchID~~

Gets the batch information which can be used to check the status of the operation or retrieve more details if the batch fails.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MetaPub.GetAPIV2MetapubProgramInformationBatchBatchID(ctx, operations.GetAPIV2MetapubProgramInformationBatchBatchIDRequest{
        BatchID: 800911,
    }, operations.GetAPIV2MetapubProgramInformationBatchBatchIDSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProgramInformationBatch != nil {
        // handle response
    }
}
```

## ~~PostAPIV2MetapubProgramInformationBatch~~

Create a batch to process the metadata of one or more electronic program guide (EPG) programs using metadata that has been uploaded to the customer's CD Drive. If multiple EPG programs are present in the metadata, they will all be updated, however updates across programs are not atomic. Note that an EPG program maps to the ContentDepot concept of an episode which is also known as a "program instance".

A batch operation must be explicitly created rather than the server attempting to detect new metadata in order to allow for all the content to be uploaded including any supporting content like images. A batch operation is accepted and queued for asynchronous processing at a later time. A client can poll the batch periodically to determine when it completes and the resulting state.


Find RadioDns to ContentDepot Mapping here
</api/epg-cd-mapping.html>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MetaPub.PostAPIV2MetapubProgramInformationBatch(ctx, operations.PostAPIV2MetapubProgramInformationBatchRequestBody{
        Format: operations.PostAPIV2MetapubProgramInformationBatchRequestBodyFormatEnumRadiodns,
        Name: sdk.String("Deanna Sauer MD"),
        Program: &operations.PostAPIV2MetapubProgramInformationBatchRequestBodyProgram{
            AirDate: "officia",
            Title: "Ms.",
        },
        URI: "http://miserly-usage.net",
    }, operations.PostAPIV2MetapubProgramInformationBatchSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProgramInformationBatch != nil {
        // handle response
    }
}
```
