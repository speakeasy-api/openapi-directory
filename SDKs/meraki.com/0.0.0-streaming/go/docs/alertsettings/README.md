# AlertSettings

### Available Operations

* [GetNetworkAlertSettings](#getnetworkalertsettings) - Return the alert configuration for this network
* [UpdateNetworkAlertSettings](#updatenetworkalertsettings) - Update the alert configuration for this network

## GetNetworkAlertSettings

Return the alert configuration for this network

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
    res, err := s.AlertSettings.GetNetworkAlertSettings(ctx, operations.GetNetworkAlertSettingsRequest{
        NetworkID: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkAlertSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkAlertSettings

Update the alert configuration for this network

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
    res, err := s.AlertSettings.UpdateNetworkAlertSettings(ctx, operations.UpdateNetworkAlertSettingsRequest{
        RequestBody: &operations.UpdateNetworkAlertSettingsRequestBody{
            Alerts: []UpdateNetworkAlertSettingsRequestBodyAlerts{
                operations.UpdateNetworkAlertSettingsRequestBodyAlerts{
                    AlertDestinations: &operations.UpdateNetworkAlertSettingsRequestBodyAlertsAlertDestinations{
                        AllAdmins: sdk.Bool(false),
                        Emails: []string{
                            "ea",
                            "excepturi",
                            "odit",
                            "ea",
                        },
                        HTTPServerIds: []string{
                            "ab",
                        },
                        Snmp: sdk.Bool(false),
                    },
                    Enabled: sdk.Bool(false),
                    Filters: map[string]interface{}{
                        "quidem": "ipsam",
                        "voluptate": "autem",
                        "nam": "eaque",
                        "pariatur": "nemo",
                    },
                    Type: "voluptatibus",
                },
                operations.UpdateNetworkAlertSettingsRequestBodyAlerts{
                    AlertDestinations: &operations.UpdateNetworkAlertSettingsRequestBodyAlertsAlertDestinations{
                        AllAdmins: sdk.Bool(false),
                        Emails: []string{
                            "fugiat",
                        },
                        HTTPServerIds: []string{
                            "aut",
                        },
                        Snmp: sdk.Bool(false),
                    },
                    Enabled: sdk.Bool(false),
                    Filters: map[string]interface{}{
                        "corporis": "hic",
                        "libero": "nobis",
                        "dolores": "quis",
                        "totam": "dignissimos",
                    },
                    Type: "eaque",
                },
                operations.UpdateNetworkAlertSettingsRequestBodyAlerts{
                    AlertDestinations: &operations.UpdateNetworkAlertSettingsRequestBodyAlertsAlertDestinations{
                        AllAdmins: sdk.Bool(false),
                        Emails: []string{
                            "nesciunt",
                            "eos",
                        },
                        HTTPServerIds: []string{
                            "dolores",
                        },
                        Snmp: sdk.Bool(false),
                    },
                    Enabled: sdk.Bool(false),
                    Filters: map[string]interface{}{
                        "quam": "dolor",
                        "vero": "nostrum",
                        "hic": "recusandae",
                        "omnis": "facilis",
                    },
                    Type: "perspiciatis",
                },
                operations.UpdateNetworkAlertSettingsRequestBodyAlerts{
                    AlertDestinations: &operations.UpdateNetworkAlertSettingsRequestBodyAlertsAlertDestinations{
                        AllAdmins: sdk.Bool(false),
                        Emails: []string{
                            "porro",
                        },
                        HTTPServerIds: []string{
                            "blanditiis",
                        },
                        Snmp: sdk.Bool(false),
                    },
                    Enabled: sdk.Bool(false),
                    Filters: map[string]interface{}{
                        "eaque": "occaecati",
                        "rerum": "adipisci",
                        "asperiores": "earum",
                    },
                    Type: "modi",
                },
            },
            DefaultDestinations: &operations.UpdateNetworkAlertSettingsRequestBodyDefaultDestinations{
                AllAdmins: sdk.Bool(false),
                Emails: []string{
                    "dolorum",
                    "deleniti",
                    "pariatur",
                },
                HTTPServerIds: []string{
                    "nobis",
                    "libero",
                    "delectus",
                },
                Snmp: sdk.Bool(false),
            },
        },
        NetworkID: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkAlertSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```
