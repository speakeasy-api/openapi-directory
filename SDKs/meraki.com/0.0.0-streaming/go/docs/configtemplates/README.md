# ConfigTemplates

### Available Operations

* [DeleteOrganizationConfigTemplate](#deleteorganizationconfigtemplate) - Remove a configuration template
* [GetOrganizationConfigTemplates](#getorganizationconfigtemplates) - List the configuration templates for this organization

## DeleteOrganizationConfigTemplate

Remove a configuration template

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
    res, err := s.ConfigTemplates.DeleteOrganizationConfigTemplate(ctx, operations.DeleteOrganizationConfigTemplateRequest{
        ConfigTemplateID: "aliquam",
        OrganizationID: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOrganizationConfigTemplates

List the configuration templates for this organization

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
    res, err := s.ConfigTemplates.GetOrganizationConfigTemplates(ctx, operations.GetOrganizationConfigTemplatesRequest{
        OrganizationID: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationConfigTemplates200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
