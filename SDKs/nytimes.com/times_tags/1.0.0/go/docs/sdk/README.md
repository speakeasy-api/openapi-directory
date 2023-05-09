# SDK

## Overview

With the TimesTags API, you can mine the riches of the New York Times tag set. The TimesTags service matches your query to the controlled vocabularies that fuel NYTimes.com metadata. You supply a string of characters, and the service returns a ranked list of suggested terms.

<http://developer.nytimes.com/>
### Available Operations

* [GetTimestags](#gettimestags)

## GetTimestags

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetTimestags(ctx, operations.GetTimestagsRequest{
        Filter: operations.GetTimestagsFilterEnumPer.ToPointer(),
        Max: sdk.Int64(602763),
        Query: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTimestags200ApplicationJSONArrays != nil {
        // handle response
    }
}
```
