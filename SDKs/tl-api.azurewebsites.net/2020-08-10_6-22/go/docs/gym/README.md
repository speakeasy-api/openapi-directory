# Gym

### Available Operations

* [GymGet](#gymget) - Get gym details
This will return all properties related to gym entity
            

## GymGet

Get gym details
This will return all properties related to gym entity
            

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
            Bearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Gym.GymGet(ctx, operations.GymGetRequest{
        GymID: 230533,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DefaultResponseDTOOfGymDTO != nil {
        // handle response
    }
}
```
