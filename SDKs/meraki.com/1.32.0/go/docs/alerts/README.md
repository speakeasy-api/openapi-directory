# Alerts

### Available Operations

* [CreateNetworkSensorAlertsProfile](#createnetworksensoralertsprofile) - Creates a sensor alert profile for a network.
* [CreateOrganizationAlertsProfile](#createorganizationalertsprofile) - Create an organization-wide alert configuration
* [DeleteNetworkSensorAlertsProfile](#deletenetworksensoralertsprofile) - Deletes a sensor alert profile from a network.
* [DeleteOrganizationAlertsProfile](#deleteorganizationalertsprofile) - Removes an organization-wide alert config
* [GetNetworkAlertsHistory](#getnetworkalertshistory) - Return the alert history for this network
* [GetNetworkAlertsSettings](#getnetworkalertssettings) - Return the alert configuration for this network
* [GetNetworkHealthAlerts](#getnetworkhealthalerts) - Return all global alerts on this network
* [GetNetworkSensorAlertsCurrentOverviewByMetric](#getnetworksensoralertscurrentoverviewbymetric) - Return an overview of currently alerting sensors by metric
* [GetNetworkSensorAlertsOverviewByMetric](#getnetworksensoralertsoverviewbymetric) - Return an overview of alert occurrences over a timespan, by metric
* [GetNetworkSensorAlertsProfile](#getnetworksensoralertsprofile) - Show details of a sensor alert profile for a network.
* [GetNetworkSensorAlertsProfiles](#getnetworksensoralertsprofiles) - Lists all sensor alert profiles for a network.
* [GetOrganizationAlertsProfiles](#getorganizationalertsprofiles) - List all organization-wide alert configurations
* [UpdateNetworkAlertsSettings](#updatenetworkalertssettings) - Update the alert configuration for this network
* [UpdateNetworkSensorAlertsProfile](#updatenetworksensoralertsprofile) - Updates a sensor alert profile for a network.
* [UpdateOrganizationAlertsProfile](#updateorganizationalertsprofile) - Update an organization-wide alert config

## CreateNetworkSensorAlertsProfile

Creates a sensor alert profile for a network.

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
    res, err := s.Alerts.CreateNetworkSensorAlertsProfile(ctx, operations.CreateNetworkSensorAlertsProfileRequest{
        RequestBody: operations.CreateNetworkSensorAlertsProfileRequestBody{
            Conditions: []CreateNetworkSensorAlertsProfileRequestBodyConditions{
                operations.CreateNetworkSensorAlertsProfileRequestBodyConditions{
                    Direction: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnumBelow.ToPointer(),
                    Duration: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnumTwoHundredAndForty.ToPointer(),
                    Metric: "adipisci",
                    Threshold: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThreshold{
                        Door: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor{
                            Open: false,
                        },
                        Humidity: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity{
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnumPoor.ToPointer(),
                            RelativePercentage: sdk.Int64(580887),
                        },
                        IndoorAirQuality: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality{
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnumFair.ToPointer(),
                            Score: sdk.Int64(145870),
                        },
                        Noise: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise{
                            Ambient: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient{
                                Level: sdk.Int64(661118),
                                Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnumGood.ToPointer(),
                            },
                        },
                        Pm25: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25{
                            Concentration: sdk.Int64(440264),
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnumInadequate.ToPointer(),
                        },
                        Temperature: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature{
                            Celsius: sdk.Float32(764.86),
                            Fahrenheit: sdk.Float32(3613.06),
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnumInadequate.ToPointer(),
                        },
                        Tvoc: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc{
                            Concentration: sdk.Int64(910994),
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnumFair.ToPointer(),
                        },
                        Water: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater{
                            Present: false,
                        },
                    },
                },
                operations.CreateNetworkSensorAlertsProfileRequestBodyConditions{
                    Direction: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnumBelow.ToPointer(),
                    Duration: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnumZero.ToPointer(),
                    Metric: "iure",
                    Threshold: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThreshold{
                        Door: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor{
                            Open: false,
                        },
                        Humidity: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity{
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnumFair.ToPointer(),
                            RelativePercentage: sdk.Int64(517612),
                        },
                        IndoorAirQuality: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality{
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnumFair.ToPointer(),
                            Score: sdk.Int64(474668),
                        },
                        Noise: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise{
                            Ambient: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient{
                                Level: sdk.Int64(907733),
                                Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnumFair.ToPointer(),
                            },
                        },
                        Pm25: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25{
                            Concentration: sdk.Int64(739884),
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnumGood.ToPointer(),
                        },
                        Temperature: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature{
                            Celsius: sdk.Float32(8980.63),
                            Fahrenheit: sdk.Float32(1875.52),
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnumInadequate.ToPointer(),
                        },
                        Tvoc: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc{
                            Concentration: sdk.Int64(715208),
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnumInadequate.ToPointer(),
                        },
                        Water: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater{
                            Present: false,
                        },
                    },
                },
                operations.CreateNetworkSensorAlertsProfileRequestBodyConditions{
                    Direction: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnumBelow.ToPointer(),
                    Duration: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnumOneHundredAndEighty.ToPointer(),
                    Metric: "ad",
                    Threshold: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThreshold{
                        Door: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor{
                            Open: false,
                        },
                        Humidity: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity{
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnumPoor.ToPointer(),
                            RelativePercentage: sdk.Int64(3099),
                        },
                        IndoorAirQuality: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality{
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnumGood.ToPointer(),
                            Score: sdk.Int64(597303),
                        },
                        Noise: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise{
                            Ambient: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient{
                                Level: sdk.Int64(470649),
                                Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnumInadequate.ToPointer(),
                            },
                        },
                        Pm25: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25{
                            Concentration: sdk.Int64(378245),
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnumFair.ToPointer(),
                        },
                        Temperature: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature{
                            Celsius: sdk.Float32(9795.27),
                            Fahrenheit: sdk.Float32(9702.22),
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnumFair.ToPointer(),
                        },
                        Tvoc: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc{
                            Concentration: sdk.Int64(663866),
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnumGood.ToPointer(),
                        },
                        Water: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater{
                            Present: false,
                        },
                    },
                },
                operations.CreateNetworkSensorAlertsProfileRequestBodyConditions{
                    Direction: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnumAbove.ToPointer(),
                    Duration: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnumSixHundred.ToPointer(),
                    Metric: "nesciunt",
                    Threshold: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThreshold{
                        Door: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor{
                            Open: false,
                        },
                        Humidity: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity{
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnumFair.ToPointer(),
                            RelativePercentage: sdk.Int64(925703),
                        },
                        IndoorAirQuality: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality{
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnumInadequate.ToPointer(),
                            Score: sdk.Int64(309251),
                        },
                        Noise: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise{
                            Ambient: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient{
                                Level: sdk.Int64(477646),
                                Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnumGood.ToPointer(),
                            },
                        },
                        Pm25: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25{
                            Concentration: sdk.Int64(284000),
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnumInadequate.ToPointer(),
                        },
                        Temperature: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature{
                            Celsius: sdk.Float32(2384.13),
                            Fahrenheit: sdk.Float32(8906.53),
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnumInadequate.ToPointer(),
                        },
                        Tvoc: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc{
                            Concentration: sdk.Int64(432606),
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnumGood.ToPointer(),
                        },
                        Water: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater{
                            Present: false,
                        },
                    },
                },
            },
            Name: "Cory Medhurst",
            Recipients: &operations.CreateNetworkSensorAlertsProfileRequestBodyRecipients{
                Emails: []string{
                    "provident",
                    "aspernatur",
                    "ullam",
                    "quasi",
                },
                HTTPServerIds: []string{
                    "nostrum",
                    "mollitia",
                    "provident",
                },
                SmsNumbers: []string{
                    "animi",
                    "ex",
                    "aliquid",
                    "accusantium",
                },
            },
            Schedule: &operations.CreateNetworkSensorAlertsProfileRequestBodySchedule{
                ID: sdk.String("ff57bfaa-d4f9-4efc-9b45-12c1032648dc"),
            },
            Serials: []string{
                "sapiente",
            },
        },
        NetworkID: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSensorAlertsProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateOrganizationAlertsProfile

Create an organization-wide alert configuration

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
    res, err := s.Alerts.CreateOrganizationAlertsProfile(ctx, operations.CreateOrganizationAlertsProfileRequest{
        RequestBody: operations.CreateOrganizationAlertsProfileRequestBody{
            AlertCondition: operations.CreateOrganizationAlertsProfileRequestBodyAlertCondition{
                BitRateBps: sdk.Int64(117320),
                Duration: sdk.Int64(325118),
                Interface: operations.CreateOrganizationAlertsProfileRequestBodyAlertConditionInterfaceEnumCellular.ToPointer(),
                JitterMs: sdk.Int64(583404),
                LatencyMs: sdk.Int64(589695),
                LossRatio: sdk.Float32(9364.69),
                Mos: sdk.Float32(7453.98),
                Window: sdk.Int64(940782),
            },
            Description: sdk.String("illum"),
            NetworkTags: []string{
                "earum",
            },
            Recipients: operations.CreateOrganizationAlertsProfileRequestBodyRecipients{
                Emails: []string{
                    "maiores",
                    "debitis",
                    "aliquid",
                },
                HTTPServerIds: []string{
                    "suscipit",
                    "dolorem",
                    "fugit",
                    "cumque",
                },
            },
            Type: operations.CreateOrganizationAlertsProfileRequestBodyTypeEnumWanPacketLoss,
        },
        OrganizationID: "ratione",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationAlertsProfile201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetworkSensorAlertsProfile

Deletes a sensor alert profile from a network.

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
    res, err := s.Alerts.DeleteNetworkSensorAlertsProfile(ctx, operations.DeleteNetworkSensorAlertsProfileRequest{
        ID: "aed01179-9631-42fd-a047-71778ff61d01",
        NetworkID: "odio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteOrganizationAlertsProfile

Removes an organization-wide alert config

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
    res, err := s.Alerts.DeleteOrganizationAlertsProfile(ctx, operations.DeleteOrganizationAlertsProfileRequest{
        AlertConfigID: "tempora",
        OrganizationID: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworkAlertsHistory

Return the alert history for this network

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
    res, err := s.Alerts.GetNetworkAlertsHistory(ctx, operations.GetNetworkAlertsHistoryRequest{
        EndingBefore: sdk.String("ex"),
        NetworkID: "consectetur",
        PerPage: sdk.Int64(399812),
        StartingAfter: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkAlertsHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkAlertsSettings

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
    res, err := s.Alerts.GetNetworkAlertsSettings(ctx, operations.GetNetworkAlertsSettingsRequest{
        NetworkID: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkAlertsSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkHealthAlerts

Return all global alerts on this network

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
    res, err := s.Alerts.GetNetworkHealthAlerts(ctx, operations.GetNetworkHealthAlertsRequest{
        NetworkID: "sunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkHealthAlerts200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSensorAlertsCurrentOverviewByMetric

Return an overview of currently alerting sensors by metric

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
    res, err := s.Alerts.GetNetworkSensorAlertsCurrentOverviewByMetric(ctx, operations.GetNetworkSensorAlertsCurrentOverviewByMetricRequest{
        NetworkID: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSensorAlertsCurrentOverviewByMetric200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSensorAlertsOverviewByMetric

Return an overview of alert occurrences over a timespan, by metric

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
    res, err := s.Alerts.GetNetworkSensorAlertsOverviewByMetric(ctx, operations.GetNetworkSensorAlertsOverviewByMetricRequest{
        Interval: sdk.Int64(856756),
        NetworkID: "expedita",
        T0: sdk.String("aliquid"),
        T1: sdk.String("officia"),
        Timespan: sdk.Float32(3813.97),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSensorAlertsOverviewByMetric200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSensorAlertsProfile

Show details of a sensor alert profile for a network.

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
    res, err := s.Alerts.GetNetworkSensorAlertsProfile(ctx, operations.GetNetworkSensorAlertsProfileRequest{
        ID: "60659a1a-deaa-4b58-91d6-c645b08b6189",
        NetworkID: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSensorAlertsProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSensorAlertsProfiles

Lists all sensor alert profiles for a network.

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
    res, err := s.Alerts.GetNetworkSensorAlertsProfiles(ctx, operations.GetNetworkSensorAlertsProfilesRequest{
        NetworkID: "rerum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSensorAlertsProfiles200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationAlertsProfiles

List all organization-wide alert configurations

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
    res, err := s.Alerts.GetOrganizationAlertsProfiles(ctx, operations.GetOrganizationAlertsProfilesRequest{
        OrganizationID: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAlertsProfiles200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateNetworkAlertsSettings

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
    res, err := s.Alerts.UpdateNetworkAlertsSettings(ctx, operations.UpdateNetworkAlertsSettingsRequest{
        RequestBody: &operations.UpdateNetworkAlertsSettingsRequestBody{
            Alerts: []UpdateNetworkAlertsSettingsRequestBodyAlerts{
                operations.UpdateNetworkAlertsSettingsRequestBodyAlerts{
                    AlertDestinations: &operations.UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations{
                        AllAdmins: sdk.Bool(false),
                        Emails: []string{
                            "sapiente",
                        },
                        HTTPServerIds: []string{
                            "architecto",
                            "fuga",
                            "pariatur",
                            "debitis",
                        },
                        Snmp: sdk.Bool(false),
                    },
                    Enabled: sdk.Bool(false),
                    Filters: map[string]interface{}{
                        "alias": "deleniti",
                    },
                    Type: "earum",
                },
                operations.UpdateNetworkAlertsSettingsRequestBodyAlerts{
                    AlertDestinations: &operations.UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations{
                        AllAdmins: sdk.Bool(false),
                        Emails: []string{
                            "sapiente",
                            "rem",
                        },
                        HTTPServerIds: []string{
                            "nemo",
                            "asperiores",
                            "ratione",
                            "ullam",
                        },
                        Snmp: sdk.Bool(false),
                    },
                    Enabled: sdk.Bool(false),
                    Filters: map[string]interface{}{
                        "illum": "totam",
                    },
                    Type: "impedit",
                },
                operations.UpdateNetworkAlertsSettingsRequestBodyAlerts{
                    AlertDestinations: &operations.UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations{
                        AllAdmins: sdk.Bool(false),
                        Emails: []string{
                            "nam",
                            "ipsam",
                            "culpa",
                            "dolor",
                        },
                        HTTPServerIds: []string{
                            "inventore",
                            "deleniti",
                        },
                        Snmp: sdk.Bool(false),
                    },
                    Enabled: sdk.Bool(false),
                    Filters: map[string]interface{}{
                        "tempora": "dolor",
                    },
                    Type: "consequatur",
                },
            },
            DefaultDestinations: &operations.UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations{
                AllAdmins: sdk.Bool(false),
                Emails: []string{
                    "sit",
                },
                HTTPServerIds: []string{
                    "fugit",
                    "ab",
                },
                Snmp: sdk.Bool(false),
            },
        },
        NetworkID: "laudantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkAlertsSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSensorAlertsProfile

Updates a sensor alert profile for a network.

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
    res, err := s.Alerts.UpdateNetworkSensorAlertsProfile(ctx, operations.UpdateNetworkSensorAlertsProfileRequest{
        RequestBody: &operations.UpdateNetworkSensorAlertsProfileRequestBody{
            Conditions: []UpdateNetworkSensorAlertsProfileRequestBodyConditions{
                operations.UpdateNetworkSensorAlertsProfileRequestBodyConditions{
                    Direction: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnumAbove.ToPointer(),
                    Duration: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnumOneThousandEightHundred.ToPointer(),
                    Metric: "ipsam",
                    Threshold: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThreshold{
                        Door: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor{
                            Open: false,
                        },
                        Humidity: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity{
                            Quality: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnumFair.ToPointer(),
                            RelativePercentage: sdk.Int64(55107),
                        },
                        IndoorAirQuality: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality{
                            Quality: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnumInadequate.ToPointer(),
                            Score: sdk.Int64(911198),
                        },
                        Noise: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise{
                            Ambient: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient{
                                Level: sdk.Int64(773456),
                                Quality: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnumPoor.ToPointer(),
                            },
                        },
                        Pm25: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25{
                            Concentration: sdk.Int64(456410),
                            Quality: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnumPoor.ToPointer(),
                        },
                        Temperature: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature{
                            Celsius: sdk.Float32(1533.69),
                            Fahrenheit: sdk.Float32(3321.91),
                            Quality: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnumFair.ToPointer(),
                        },
                        Tvoc: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc{
                            Concentration: sdk.Int64(712927),
                            Quality: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnumGood.ToPointer(),
                        },
                        Water: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater{
                            Present: false,
                        },
                    },
                },
            },
            Name: sdk.String("Jennie Gutkowski DDS"),
            Recipients: &operations.UpdateNetworkSensorAlertsProfileRequestBodyRecipients{
                Emails: []string{
                    "nobis",
                    "laboriosam",
                },
                HTTPServerIds: []string{
                    "consequuntur",
                    "voluptatem",
                    "exercitationem",
                    "necessitatibus",
                },
                SmsNumbers: []string{
                    "nisi",
                },
            },
            Schedule: &operations.UpdateNetworkSensorAlertsProfileRequestBodySchedule{
                ID: sdk.String("deab3fec-9578-4a64-9842-73a8418d1623"),
            },
            Serials: []string{
                "cupiditate",
            },
        },
        ID: "fb092992-1aef-4b9f-98c4-d86e68e4be05",
        NetworkID: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSensorAlertsProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationAlertsProfile

Update an organization-wide alert config

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
    res, err := s.Alerts.UpdateOrganizationAlertsProfile(ctx, operations.UpdateOrganizationAlertsProfileRequest{
        RequestBody: &operations.UpdateOrganizationAlertsProfileRequestBody{
            AlertCondition: &operations.UpdateOrganizationAlertsProfileRequestBodyAlertCondition{
                BitRateBps: sdk.Int64(1383),
                Duration: sdk.Int64(93894),
                Interface: operations.UpdateOrganizationAlertsProfileRequestBodyAlertConditionInterfaceEnumCellular.ToPointer(),
                JitterMs: sdk.Int64(978548),
                LatencyMs: sdk.Int64(318233),
                LossRatio: sdk.Float32(5752.13),
                Mos: sdk.Float32(8587.78),
                Window: sdk.Int64(643678),
            },
            Description: sdk.String("esse"),
            Enabled: sdk.Bool(false),
            NetworkTags: []string{
                "reprehenderit",
                "est",
            },
            Recipients: &operations.UpdateOrganizationAlertsProfileRequestBodyRecipients{
                Emails: []string{
                    "sint",
                    "accusamus",
                },
                HTTPServerIds: []string{
                    "hic",
                    "necessitatibus",
                    "asperiores",
                    "ex",
                },
            },
            Type: operations.UpdateOrganizationAlertsProfileRequestBodyTypeEnumVoipPacketLoss.ToPointer(),
        },
        AlertConfigID: "debitis",
        OrganizationID: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationAlertsProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```
