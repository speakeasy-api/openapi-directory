# EmergencyContacts

### Available Operations

* [AddOrUpdateEmergencyContacts](#addorupdateemergencycontacts) - Add/update emergency contacts

## AddOrUpdateEmergencyContacts

Sends new or updated employee emergency contacts directly to Web Pay.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EmergencyContacts.AddOrUpdateEmergencyContacts(ctx, operations.AddOrUpdateEmergencyContactsRequest{
        CompanyID: "dolor",
        EmergencyContact: shared.EmergencyContact{
            Address1: sdk.String("natus"),
            Address2: sdk.String("laboriosam"),
            City: sdk.String("Toms River"),
            Country: sdk.String("Palestinian Territory"),
            County: sdk.String("in"),
            Email: sdk.String("Leslie_Kertzmann9@yahoo.com"),
            FirstName: "Andy",
            HomePhone: sdk.String("reiciendis"),
            LastName: "Orn",
            MobilePhone: sdk.String("mollitia"),
            Notes: sdk.String("laborum"),
            Pager: sdk.String("dolores"),
            PrimaryPhone: sdk.String("dolorem"),
            Priority: sdk.String("corporis"),
            Relationship: sdk.String("explicabo"),
            State: sdk.String("nobis"),
            SyncEmployeeInfo: sdk.Bool(false),
            WorkExtension: sdk.String("enim"),
            WorkPhone: sdk.String("omnis"),
            Zip: sdk.String("nemo"),
        },
        EmployeeID: "minima",
    }, operations.AddOrUpdateEmergencyContactsSecurity{
        PaylocityAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
