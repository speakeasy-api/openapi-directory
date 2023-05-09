# SDK

## Overview

<div class="Vlt-callout Vlt-callout--critical"> <i></i> <div class="Vlt-callout__content">
  <h4>Applications V1 is deprecated</h4>
  This version of the API has been deprecated. Please use <a href="/api/application.v2">version 2</a> going forwards
</div> </div>
A Nexmo application contains the security and configuration information you need to connect to Nexmo endpoints and easily use our products.

<https://developer.nexmo.com/api/developer/application>
### Available Operations

* [CreateApplication](#createapplication) - Create Application
* [DeleteApplication](#deleteapplication) - Destroy Application
* [RetrieveApplication](#retrieveapplication) - Retrieve Application
* [RetrieveApplications](#retrieveapplications) - Retrieve all Applications
* [UpdateApplication](#updateapplication) - Update Application

## CreateApplication

You use a `POST` request to create a new application.

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
    res, err := s.SDK.CreateApplication(ctx, operations.CreateApplicationRequestBody{
        AnswerMethod: sdk.String("GET"),
        AnswerURL: sdk.String("https://example.com/webhooks/answer"),
        APIKey: "ap1k3y",
        APISecret: "230e6cf0709417176df1b4fc1e083adc",
        EventMethod: sdk.String("POST"),
        EventURL: sdk.String("https://example.com/webhooks/event"),
        InboundMethod: sdk.String("POST"),
        InboundURL: sdk.String("https://example.com/webhooks/inbound"),
        Name: "My Application",
        StatusMethod: sdk.String("POST"),
        StatusURL: sdk.String("https://example.com/webhooks/status"),
        Type: operations.CreateApplicationRequestBodyTypeEnumVoice,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplicationCreated != nil {
        // handle response
    }
}
```

## DeleteApplication

You use a `DELETE` request to delete a single application.

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
    res, err := s.SDK.DeleteApplication(ctx, operations.DeleteApplicationRequest{
        AppID: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RetrieveApplication

You use a `GET` request to retrieve details about a single application.

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
    res, err := s.SDK.RetrieveApplication(ctx, operations.RetrieveApplicationRequest{
        APIKey: "provident",
        APISecret: "distinctio",
        AppID: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Application != nil {
        // handle response
    }
}
```

## RetrieveApplications

You use a `GET` request to retrieve details of all applications associated with your account.

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
    res, err := s.SDK.RetrieveApplications(ctx, operations.RetrieveApplicationsRequest{
        APIKey: "unde",
        APISecret: "nulla",
        PageIndex: sdk.Int64(544883),
        PageSize: sdk.Int64(847252),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Applications != nil {
        // handle response
    }
}
```

## UpdateApplication

You use a `PUT` request to update an existing application.

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
    res, err := s.SDK.UpdateApplication(ctx, operations.UpdateApplicationRequest{
        RequestBody: &operations.UpdateApplicationRequestBody{
            AnswerMethod: sdk.String("GET"),
            AnswerURL: sdk.String("https://example.com/webhooks/answer"),
            APIKey: "ap1k3y",
            APISecret: "230e6cf0709417176df1b4fc1e083adc",
            EventMethod: sdk.String("POST"),
            EventURL: sdk.String("https://example.com/webhooks/event"),
            Name: "UpdatedApplication",
            Type: operations.UpdateApplicationRequestBodyTypeEnumVoice,
        },
        AppID: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Application != nil {
        // handle response
    }
}
```
