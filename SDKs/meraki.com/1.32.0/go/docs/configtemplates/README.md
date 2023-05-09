# ConfigTemplates

### Available Operations

* [CreateOrganizationConfigTemplate](#createorganizationconfigtemplate) - Create a new configuration template
* [DeleteOrganizationConfigTemplate](#deleteorganizationconfigtemplate) - Remove a configuration template
* [GetOrganizationConfigTemplate](#getorganizationconfigtemplate) - Return a single configuration template
* [GetOrganizationConfigTemplateSwitchProfilePort](#getorganizationconfigtemplateswitchprofileport) - Return a switch profile port
* [GetOrganizationConfigTemplateSwitchProfilePorts](#getorganizationconfigtemplateswitchprofileports) - Return all the ports of a switch profile
* [GetOrganizationConfigTemplateSwitchProfiles](#getorganizationconfigtemplateswitchprofiles) - List the switch profiles for your switch template configuration
* [GetOrganizationConfigTemplates](#getorganizationconfigtemplates) - List the configuration templates for this organization
* [UpdateOrganizationConfigTemplate](#updateorganizationconfigtemplate) - Update a configuration template
* [UpdateOrganizationConfigTemplateSwitchProfilePort](#updateorganizationconfigtemplateswitchprofileport) - Update a switch profile port

## CreateOrganizationConfigTemplate

Create a new configuration template

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
    res, err := s.ConfigTemplates.CreateOrganizationConfigTemplate(ctx, operations.CreateOrganizationConfigTemplateRequest{
        RequestBody: operations.CreateOrganizationConfigTemplateRequestBody{
            CopyFromNetworkID: sdk.String("saepe"),
            Name: "Verna Kautzer",
            TimeZone: sdk.String("nesciunt"),
        },
        OrganizationID: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationConfigTemplate201ApplicationJSONObject != nil {
        // handle response
    }
}
```

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
        ConfigTemplateID: "cupiditate",
        OrganizationID: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOrganizationConfigTemplate

Return a single configuration template

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
    res, err := s.ConfigTemplates.GetOrganizationConfigTemplate(ctx, operations.GetOrganizationConfigTemplateRequest{
        ConfigTemplateID: "ullam",
        OrganizationID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationConfigTemplate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationConfigTemplateSwitchProfilePort

Return a switch profile port

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
    res, err := s.ConfigTemplates.GetOrganizationConfigTemplateSwitchProfilePort(ctx, operations.GetOrganizationConfigTemplateSwitchProfilePortRequest{
        ConfigTemplateID: "soluta",
        OrganizationID: "cum",
        PortID: "in",
        ProfileID: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationConfigTemplateSwitchProfilePorts

Return all the ports of a switch profile

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
    res, err := s.ConfigTemplates.GetOrganizationConfigTemplateSwitchProfilePorts(ctx, operations.GetOrganizationConfigTemplateSwitchProfilePortsRequest{
        ConfigTemplateID: "commodi",
        OrganizationID: "commodi",
        ProfileID: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

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
    res, err := s.ConfigTemplates.GetOrganizationConfigTemplateSwitchProfiles(ctx, operations.GetOrganizationConfigTemplateSwitchProfilesRequest{
        ConfigTemplateID: "ullam",
        OrganizationID: "ullam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationConfigTemplateSwitchProfiles200ApplicationJSONObject != nil {
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
        OrganizationID: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationConfigTemplates200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateOrganizationConfigTemplate

Update a configuration template

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
    res, err := s.ConfigTemplates.UpdateOrganizationConfigTemplate(ctx, operations.UpdateOrganizationConfigTemplateRequest{
        RequestBody: &operations.UpdateOrganizationConfigTemplateRequestBody{
            Name: sdk.String("Clarence Lang"),
            TimeZone: sdk.String("qui"),
        },
        ConfigTemplateID: "deserunt",
        OrganizationID: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationConfigTemplate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationConfigTemplateSwitchProfilePort

Update a switch profile port

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
    res, err := s.ConfigTemplates.UpdateOrganizationConfigTemplateSwitchProfilePort(ctx, operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequest{
        RequestBody: &operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody{
            AccessPolicyNumber: sdk.Int64(275837),
            AccessPolicyType: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnumOpen.ToPointer(),
            AllowedVlans: sdk.String("dolor"),
            DaiTrusted: sdk.Bool(false),
            Enabled: sdk.Bool(false),
            FlexibleStackingEnabled: sdk.Bool(false),
            IsolationEnabled: sdk.Bool(false),
            LinkNegotiation: sdk.String("est"),
            MacAllowList: []string{
                "possimus",
                "odit",
                "consectetur",
                "inventore",
            },
            Name: sdk.String("Olivia Quitzon"),
            PoeEnabled: sdk.Bool(false),
            PortScheduleID: sdk.String("ipsam"),
            Profile: &operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyProfile{
                Enabled: sdk.Bool(false),
                ID: sdk.String("0164e06f-5bf6-4ae5-91bc-8bdef3612b63"),
                Iname: sdk.String("quod"),
            },
            RstpEnabled: sdk.Bool(false),
            StickyMacAllowList: []string{
                "alias",
            },
            StickyMacAllowListLimit: sdk.Int64(319807),
            StormControlEnabled: sdk.Bool(false),
            StpGuard: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnumRootGuard.ToPointer(),
            Tags: []string{
                "id",
                "atque",
                "quaerat",
                "aperiam",
            },
            Type: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnumAccess.ToPointer(),
            Udld: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnumAlertOnly.ToPointer(),
            Vlan: sdk.Int64(264073),
            VoiceVlan: sdk.Int64(683980),
        },
        ConfigTemplateID: "iure",
        OrganizationID: "deleniti",
        PortID: "officia",
        ProfileID: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject != nil {
        // handle response
    }
}
```
