# Organization

## Overview

An organization is a Fitbit Plus customer. No data is accessible across organizations.

### Available Operations

* [FetchOrganization](#fetchorganization) - Get an organization

## FetchOrganization

Get an organization record by id.

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
    res, err := s.Organization.FetchOrganization(ctx, operations.FetchOrganizationRequest{
        ID: "fbe2fd57-0757-4792-9177-deac646ecb57",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchOrganizationResponse != nil {
        // handle response
    }
}
```
