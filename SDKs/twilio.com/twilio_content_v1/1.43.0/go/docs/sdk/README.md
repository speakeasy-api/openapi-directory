# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [DeleteContent](#deletecontent) - Deletes a Content resource
* [FetchApprovalFetch](#fetchapprovalfetch) - Fetch a Content resource's approval status by its unique Content Sid
* [FetchContent](#fetchcontent) - Fetch a Content resource by its unique Content Sid
* [ListContent](#listcontent) - Retrieve a list of Contents belonging to the account used to make the request
* [ListContentAndApprovals](#listcontentandapprovals) - Retrieve a list of Contents with approval statuses belonging to the account used to make the request
* [ListLegacyContent](#listlegacycontent) - Retrieve a list of Legacy Contents belonging to the account used to make the request

## DeleteContent

Deletes a Content resource

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
    res, err := s.SDK.DeleteContent(ctx, operations.DeleteContentRequest{
        Sid: "provident",
    }, operations.DeleteContentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FetchApprovalFetch

Fetch a Content resource's approval status by its unique Content Sid

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
    res, err := s.SDK.FetchApprovalFetch(ctx, operations.FetchApprovalFetchRequest{
        Sid: "distinctio",
    }, operations.FetchApprovalFetchSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContentV1ContentApprovalFetch != nil {
        // handle response
    }
}
```

## FetchContent

Fetch a Content resource by its unique Content Sid

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
    res, err := s.SDK.FetchContent(ctx, operations.FetchContentRequest{
        Sid: "quibusdam",
    }, operations.FetchContentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContentV1Content != nil {
        // handle response
    }
}
```

## ListContent

Retrieve a list of Contents belonging to the account used to make the request

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
    res, err := s.SDK.ListContent(ctx, operations.ListContentRequest{
        Page: sdk.Int64(602763),
        PageSize: sdk.Int64(857946),
        PageToken: sdk.String("corrupti"),
    }, operations.ListContentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListContentResponse != nil {
        // handle response
    }
}
```

## ListContentAndApprovals

Retrieve a list of Contents with approval statuses belonging to the account used to make the request

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
    res, err := s.SDK.ListContentAndApprovals(ctx, operations.ListContentAndApprovalsRequest{
        Page: sdk.Int64(847252),
        PageSize: sdk.Int64(423655),
        PageToken: sdk.String("error"),
    }, operations.ListContentAndApprovalsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListContentAndApprovalsResponse != nil {
        // handle response
    }
}
```

## ListLegacyContent

Retrieve a list of Legacy Contents belonging to the account used to make the request

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
    res, err := s.SDK.ListLegacyContent(ctx, operations.ListLegacyContentRequest{
        Page: sdk.Int64(645894),
        PageSize: sdk.Int64(384382),
        PageToken: sdk.String("iure"),
    }, operations.ListLegacyContentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLegacyContentResponse != nil {
        // handle response
    }
}
```
