# PicoLoadmanagementGroup

### Available Operations

* [PicoLoadmanagementGroupGet](#picoloadmanagementgroupget) - GET: api/pico/loadmanagementgroup
            
            Returns a pico load management group by it's id
* [GetAPIPicoLoadmanagementgroup](#getapipicoloadmanagementgroup) - GET: api/pico/loadmanagementgroup
            
            Returns all available load management groups

## PicoLoadmanagementGroupGet

GET: api/pico/loadmanagementgroup
            
            Returns a pico load management group by it's id

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
    res, err := s.PicoLoadmanagementGroup.PicoLoadmanagementGroupGet(ctx, operations.PicoLoadmanagementGroupGetRequest{
        ID: "2a57a15b-e3e0-4608-87e2-b6e3ab8845f0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PicoLoadmanagementGroupDto != nil {
        // handle response
    }
}
```

## GetAPIPicoLoadmanagementgroup

GET: api/pico/loadmanagementgroup
            
            Returns all available load management groups

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PicoLoadmanagementGroup.GetAPIPicoLoadmanagementgroup(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PicoLoadmanagementGroupDtos != nil {
        // handle response
    }
}
```
