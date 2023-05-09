# Programs

## Overview

Program information including searching for existing programs or fetching a specific program. A program is a collection of episodes that are delivered by ContentDepot as a live stream or pre-recorded files.

### Available Operations

* [GetAPIV2ProgramsSearch](#getapiv2programssearch) - Optimized free-text search for programs using various filters.
* [GetAPIV2ProgramsID](#getapiv2programsid) - Returns the program matching the given ID.

## GetAPIV2ProgramsSearch

Optimized free-text search for programs using various filters.

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
    res, err := s.Programs.GetAPIV2ProgramsSearch(ctx, operations.GetAPIV2ProgramsSearchRequest{
        Keywords: sdk.String("sed"),
        PageSize: sdk.Int(612096),
        PageStart: sdk.Int(222321),
    }, operations.GetAPIV2ProgramsSearchSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Programs != nil {
        // handle response
    }
}
```

## GetAPIV2ProgramsID

Returns the program matching the given ID.

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
    res, err := s.Programs.GetAPIV2ProgramsID(ctx, operations.GetAPIV2ProgramsIDRequest{
        ID: 616934,
    }, operations.GetAPIV2ProgramsIDSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Program != nil {
        // handle response
    }
}
```
