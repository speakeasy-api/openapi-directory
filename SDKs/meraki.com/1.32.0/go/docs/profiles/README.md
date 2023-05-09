# Profiles

### Available Operations

* [CreateNetworkSensorAlertsProfile](#createnetworksensoralertsprofile) - Creates a sensor alert profile for a network.
* [CreateOrganizationAlertsProfile](#createorganizationalertsprofile) - Create an organization-wide alert configuration
* [DeleteNetworkSensorAlertsProfile](#deletenetworksensoralertsprofile) - Deletes a sensor alert profile from a network.
* [DeleteOrganizationAlertsProfile](#deleteorganizationalertsprofile) - Removes an organization-wide alert config
* [GetNetworkSensorAlertsProfile](#getnetworksensoralertsprofile) - Show details of a sensor alert profile for a network.
* [GetNetworkSensorAlertsProfiles](#getnetworksensoralertsprofiles) - Lists all sensor alert profiles for a network.
* [GetNetworkSmProfiles](#getnetworksmprofiles) - List all profiles in a network
* [GetOrganizationAlertsProfiles](#getorganizationalertsprofiles) - List all organization-wide alert configurations
* [GetOrganizationConfigTemplateSwitchProfilePort](#getorganizationconfigtemplateswitchprofileport) - Return a switch profile port
* [GetOrganizationConfigTemplateSwitchProfilePorts](#getorganizationconfigtemplateswitchprofileports) - Return all the ports of a switch profile
* [GetOrganizationConfigTemplateSwitchProfiles](#getorganizationconfigtemplateswitchprofiles) - List the switch profiles for your switch template configuration
* [UpdateNetworkSensorAlertsProfile](#updatenetworksensoralertsprofile) - Updates a sensor alert profile for a network.
* [UpdateOrganizationAlertsProfile](#updateorganizationalertsprofile) - Update an organization-wide alert config
* [UpdateOrganizationConfigTemplateSwitchProfilePort](#updateorganizationconfigtemplateswitchprofileport) - Update a switch profile port

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
    res, err := s.Profiles.CreateNetworkSensorAlertsProfile(ctx, operations.CreateNetworkSensorAlertsProfileRequest{
        RequestBody: operations.CreateNetworkSensorAlertsProfileRequestBody{
            Conditions: []CreateNetworkSensorAlertsProfileRequestBodyConditions{
                operations.CreateNetworkSensorAlertsProfileRequestBodyConditions{
                    Direction: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnumAbove.ToPointer(),
                    Duration: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnumOneHundredAndEighty.ToPointer(),
                    Metric: "eligendi",
                    Threshold: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThreshold{
                        Door: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor{
                            Open: false,
                        },
                        Humidity: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity{
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnumPoor.ToPointer(),
                            RelativePercentage: sdk.Int64(692721),
                        },
                        IndoorAirQuality: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality{
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnumPoor.ToPointer(),
                            Score: sdk.Int64(477640),
                        },
                        Noise: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise{
                            Ambient: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient{
                                Level: sdk.Int64(440950),
                                Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnumInadequate.ToPointer(),
                            },
                        },
                        Pm25: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25{
                            Concentration: sdk.Int64(502157),
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnumFair.ToPointer(),
                        },
                        Temperature: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature{
                            Celsius: sdk.Float32(2278.99),
                            Fahrenheit: sdk.Float32(6483.6),
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnumFair.ToPointer(),
                        },
                        Tvoc: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc{
                            Concentration: sdk.Int64(640755),
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnumGood.ToPointer(),
                        },
                        Water: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater{
                            Present: false,
                        },
                    },
                },
            },
            Name: "Wilbert Beatty",
            Recipients: &operations.CreateNetworkSensorAlertsProfileRequestBodyRecipients{
                Emails: []string{
                    "id",
                    "eum",
                    "quos",
                },
                HTTPServerIds: []string{
                    "commodi",
                    "voluptate",
                },
                SmsNumbers: []string{
                    "quisquam",
                },
            },
            Schedule: &operations.CreateNetworkSensorAlertsProfileRequestBodySchedule{
                ID: sdk.String("d14c597e-8137-47fe-b388-1fc7de209840"),
            },
            Serials: []string{
                "tempora",
                "perspiciatis",
                "voluptates",
            },
        },
        NetworkID: "aliquam",
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
    res, err := s.Profiles.CreateOrganizationAlertsProfile(ctx, operations.CreateOrganizationAlertsProfileRequest{
        RequestBody: operations.CreateOrganizationAlertsProfileRequestBody{
            AlertCondition: operations.CreateOrganizationAlertsProfileRequestBodyAlertCondition{
                BitRateBps: sdk.Int64(415447),
                Duration: sdk.Int64(417987),
                Interface: operations.CreateOrganizationAlertsProfileRequestBodyAlertConditionInterfaceEnumWan1.ToPointer(),
                JitterMs: sdk.Int64(768861),
                LatencyMs: sdk.Int64(403074),
                LossRatio: sdk.Float32(4808.28),
                Mos: sdk.Float32(7394.69),
                Window: sdk.Int64(193157),
            },
            Description: sdk.String("aliquid"),
            NetworkTags: []string{
                "laudantium",
                "incidunt",
            },
            Recipients: operations.CreateOrganizationAlertsProfileRequestBodyRecipients{
                Emails: []string{
                    "consequuntur",
                },
                HTTPServerIds: []string{
                    "porro",
                    "deleniti",
                    "commodi",
                },
            },
            Type: operations.CreateOrganizationAlertsProfileRequestBodyTypeEnumWanUtilization,
        },
        OrganizationID: "omnis",
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
    res, err := s.Profiles.DeleteNetworkSensorAlertsProfile(ctx, operations.DeleteNetworkSensorAlertsProfileRequest{
        ID: "dd5655a9-7781-4f81-b90a-43699cb49fc2",
        NetworkID: "ullam",
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
    res, err := s.Profiles.DeleteOrganizationAlertsProfile(ctx, operations.DeleteOrganizationAlertsProfileRequest{
        AlertConfigID: "molestiae",
        OrganizationID: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
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
    res, err := s.Profiles.GetNetworkSensorAlertsProfile(ctx, operations.GetNetworkSensorAlertsProfileRequest{
        ID: "bb7d8f72-0e54-41cc-87d6-ccfa66f22773",
        NetworkID: "beatae",
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
    res, err := s.Profiles.GetNetworkSensorAlertsProfiles(ctx, operations.GetNetworkSensorAlertsProfilesRequest{
        NetworkID: "autem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSensorAlertsProfiles200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmProfiles

List all profiles in a network

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
    res, err := s.Profiles.GetNetworkSmProfiles(ctx, operations.GetNetworkSmProfilesRequest{
        NetworkID: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmProfiles200ApplicationJSONObjects != nil {
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
    res, err := s.Profiles.GetOrganizationAlertsProfiles(ctx, operations.GetOrganizationAlertsProfilesRequest{
        OrganizationID: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAlertsProfiles200ApplicationJSONObjects != nil {
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
    res, err := s.Profiles.GetOrganizationConfigTemplateSwitchProfilePort(ctx, operations.GetOrganizationConfigTemplateSwitchProfilePortRequest{
        ConfigTemplateID: "voluptatibus",
        OrganizationID: "incidunt",
        PortID: "veritatis",
        ProfileID: "eum",
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
    res, err := s.Profiles.GetOrganizationConfigTemplateSwitchProfilePorts(ctx, operations.GetOrganizationConfigTemplateSwitchProfilePortsRequest{
        ConfigTemplateID: "deserunt",
        OrganizationID: "voluptatem",
        ProfileID: "non",
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
    res, err := s.Profiles.GetOrganizationConfigTemplateSwitchProfiles(ctx, operations.GetOrganizationConfigTemplateSwitchProfilesRequest{
        ConfigTemplateID: "debitis",
        OrganizationID: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationConfigTemplateSwitchProfiles200ApplicationJSONObject != nil {
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
    res, err := s.Profiles.UpdateNetworkSensorAlertsProfile(ctx, operations.UpdateNetworkSensorAlertsProfileRequest{
        RequestBody: &operations.UpdateNetworkSensorAlertsProfileRequestBody{
            Conditions: []UpdateNetworkSensorAlertsProfileRequestBodyConditions{
                operations.UpdateNetworkSensorAlertsProfileRequestBodyConditions{
                    Direction: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnumBelow.ToPointer(),
                    Duration: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnumSixHundred.ToPointer(),
                    Metric: "quos",
                    Threshold: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThreshold{
                        Door: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor{
                            Open: false,
                        },
                        Humidity: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity{
                            Quality: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnumPoor.ToPointer(),
                            RelativePercentage: sdk.Int64(187590),
                        },
                        IndoorAirQuality: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality{
                            Quality: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnumPoor.ToPointer(),
                            Score: sdk.Int64(450929),
                        },
                        Noise: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise{
                            Ambient: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient{
                                Level: sdk.Int64(30958),
                                Quality: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnumInadequate.ToPointer(),
                            },
                        },
                        Pm25: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25{
                            Concentration: sdk.Int64(270207),
                            Quality: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnumGood.ToPointer(),
                        },
                        Temperature: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature{
                            Celsius: sdk.Float32(1077.06),
                            Fahrenheit: sdk.Float32(6397.99),
                            Quality: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnumGood.ToPointer(),
                        },
                        Tvoc: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc{
                            Concentration: sdk.Int64(520422),
                            Quality: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnumGood.ToPointer(),
                        },
                        Water: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater{
                            Present: false,
                        },
                    },
                },
            },
            Name: sdk.String("Victor Klein"),
            Recipients: &operations.UpdateNetworkSensorAlertsProfileRequestBodyRecipients{
                Emails: []string{
                    "nam",
                    "aliquid",
                },
                HTTPServerIds: []string{
                    "magnam",
                    "beatae",
                    "labore",
                },
                SmsNumbers: []string{
                    "autem",
                    "ipsa",
                    "ea",
                },
            },
            Schedule: &operations.UpdateNetworkSensorAlertsProfileRequestBodySchedule{
                ID: sdk.String("e87bf1d1-c271-482f-87d3-c5095aa82028"),
            },
            Serials: []string{
                "eum",
            },
        },
        ID: "24aeac44-406d-47be-9ac5-cca7b9aa6578",
        NetworkID: "harum",
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
    res, err := s.Profiles.UpdateOrganizationAlertsProfile(ctx, operations.UpdateOrganizationAlertsProfileRequest{
        RequestBody: &operations.UpdateOrganizationAlertsProfileRequestBody{
            AlertCondition: &operations.UpdateOrganizationAlertsProfileRequestBodyAlertCondition{
                BitRateBps: sdk.Int64(101063),
                Duration: sdk.Int64(732349),
                Interface: operations.UpdateOrganizationAlertsProfileRequestBodyAlertConditionInterfaceEnumWan2.ToPointer(),
                JitterMs: sdk.Int64(844260),
                LatencyMs: sdk.Int64(952417),
                LossRatio: sdk.Float32(4432.68),
                Mos: sdk.Float32(9018.39),
                Window: sdk.Int64(84872),
            },
            Description: sdk.String("aperiam"),
            Enabled: sdk.Bool(false),
            NetworkTags: []string{
                "fugiat",
                "repellat",
                "quibusdam",
                "iusto",
            },
            Recipients: &operations.UpdateOrganizationAlertsProfileRequestBodyRecipients{
                Emails: []string{
                    "deleniti",
                },
                HTTPServerIds: []string{
                    "accusamus",
                    "eaque",
                    "a",
                },
            },
            Type: operations.UpdateOrganizationAlertsProfileRequestBodyTypeEnumWanStatus.ToPointer(),
        },
        AlertConfigID: "numquam",
        OrganizationID: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationAlertsProfile200ApplicationJSONObject != nil {
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
    res, err := s.Profiles.UpdateOrganizationConfigTemplateSwitchProfilePort(ctx, operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequest{
        RequestBody: &operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody{
            AccessPolicyNumber: sdk.Int64(127342),
            AccessPolicyType: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnumStickyMacAllowList.ToPointer(),
            AllowedVlans: sdk.String("sequi"),
            DaiTrusted: sdk.Bool(false),
            Enabled: sdk.Bool(false),
            FlexibleStackingEnabled: sdk.Bool(false),
            IsolationEnabled: sdk.Bool(false),
            LinkNegotiation: sdk.String("eum"),
            MacAllowList: []string{
                "ducimus",
                "nulla",
            },
            Name: sdk.String("Karla Langosh"),
            PoeEnabled: sdk.Bool(false),
            PortScheduleID: sdk.String("nam"),
            Profile: &operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyProfile{
                Enabled: sdk.Bool(false),
                ID: sdk.String("dc08a19d-97b9-4b31-bbdd-00d5a3a09d58"),
                Iname: sdk.String("voluptate"),
            },
            RstpEnabled: sdk.Bool(false),
            StickyMacAllowList: []string{
                "repellendus",
                "ipsum",
                "tempora",
            },
            StickyMacAllowListLimit: sdk.Int64(124657),
            StormControlEnabled: sdk.Bool(false),
            StpGuard: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnumLoopGuard.ToPointer(),
            Tags: []string{
                "ipsam",
            },
            Type: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnumTrunk.ToPointer(),
            Udld: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnumEnforce.ToPointer(),
            Vlan: sdk.Int64(258457),
            VoiceVlan: sdk.Int64(133643),
        },
        ConfigTemplateID: "natus",
        OrganizationID: "consequatur",
        PortID: "ullam",
        ProfileID: "nesciunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject != nil {
        // handle response
    }
}
```
