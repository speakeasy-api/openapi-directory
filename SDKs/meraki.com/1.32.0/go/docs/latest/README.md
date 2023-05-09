# Latest

### Available Operations

* [GetOrganizationSensorReadingsLatest](#getorganizationsensorreadingslatest) - Return the latest available reading for each metric from each sensor, sorted by sensor serial

## GetOrganizationSensorReadingsLatest

Return the latest available reading for each metric from each sensor, sorted by sensor serial

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Latest.GetOrganizationSensorReadingsLatest(ctx, operations.GetOrganizationSensorReadingsLatestRequest{
        EndingBefore: sdk.String("ex"),
        Metrics: []string{
            "nisi",
        },
        NetworkIds: []string{
            "similique",
            "exercitationem",
        },
        OrganizationID: "voluptatem",
        PerPage: sdk.Int64(493438),
        Serials: []string{
            "facilis",
            "officiis",
        },
        StartingAfter: sdk.String("repellat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSensorReadingsLatest200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
