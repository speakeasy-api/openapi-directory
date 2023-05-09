# SwitchProfiles

### Available Operations

* [GetOrganizationConfigTemplateSwitchProfiles](#getorganizationconfigtemplateswitchprofiles) - List the switch profiles for your switch template configuration

## GetOrganizationConfigTemplateSwitchProfiles

List the switch profiles for your switch template configuration

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
    res, err := s.SwitchProfiles.GetOrganizationConfigTemplateSwitchProfiles(ctx, operations.GetOrganizationConfigTemplateSwitchProfilesRequest{
        ConfigTemplateID: "enim",
        OrganizationID: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationConfigTemplateSwitchProfiles200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
