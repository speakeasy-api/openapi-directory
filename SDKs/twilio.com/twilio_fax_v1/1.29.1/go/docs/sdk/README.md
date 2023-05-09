# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [DeleteFax](#deletefax) - Delete a specific fax and its associated media.
* [DeleteFaxMedia](#deletefaxmedia) - Delete a specific fax media instance.
* [FetchFax](#fetchfax) - Fetch a specific fax.
* [FetchFaxMedia](#fetchfaxmedia) - Fetch a specific fax media instance.
* [ListFax](#listfax) - Retrieve a list of all faxes.
* [ListFaxMedia](#listfaxmedia) - Retrieve a list of all fax media instances for the specified fax.

## DeleteFax

Delete a specific fax and its associated media.

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
    res, err := s.SDK.DeleteFax(ctx, operations.DeleteFaxRequest{
        Sid: "provident",
    }, operations.DeleteFaxSecurity{
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

## DeleteFaxMedia

Delete a specific fax media instance.

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
    res, err := s.SDK.DeleteFaxMedia(ctx, operations.DeleteFaxMediaRequest{
        FaxSid: "distinctio",
        Sid: "quibusdam",
    }, operations.DeleteFaxMediaSecurity{
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

## FetchFax

Fetch a specific fax.

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
    res, err := s.SDK.FetchFax(ctx, operations.FetchFaxRequest{
        Sid: "unde",
    }, operations.FetchFaxSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FaxV1Fax != nil {
        // handle response
    }
}
```

## FetchFaxMedia

Fetch a specific fax media instance.

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
    res, err := s.SDK.FetchFaxMedia(ctx, operations.FetchFaxMediaRequest{
        FaxSid: "nulla",
        Sid: "corrupti",
    }, operations.FetchFaxMediaSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FaxV1FaxFaxMedia != nil {
        // handle response
    }
}
```

## ListFax

Retrieve a list of all faxes.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListFax(ctx, operations.ListFaxRequest{
        DateCreatedAfter: types.MustTimeFromString("2021-09-24T02:21:06.409Z"),
        DateCreatedOnOrBefore: types.MustTimeFromString("2021-09-16T11:56:06.019Z"),
        From: sdk.String("suscipit"),
        PageSize: sdk.Int64(437587),
        To: sdk.String("magnam"),
    }, operations.ListFaxSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFaxResponse != nil {
        // handle response
    }
}
```

## ListFaxMedia

Retrieve a list of all fax media instances for the specified fax.

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
    res, err := s.SDK.ListFaxMedia(ctx, operations.ListFaxMediaRequest{
        FaxSid: "debitis",
        PageSize: sdk.Int64(56713),
    }, operations.ListFaxMediaSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFaxMediaResponse != nil {
        // handle response
    }
}
```
