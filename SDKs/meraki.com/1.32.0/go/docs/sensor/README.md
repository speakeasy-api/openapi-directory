# Sensor

### Available Operations

* [CreateNetworkSensorAlertsProfile](#createnetworksensoralertsprofile) - Creates a sensor alert profile for a network.
* [DeleteNetworkSensorAlertsProfile](#deletenetworksensoralertsprofile) - Deletes a sensor alert profile from a network.
* [GetDeviceSensorRelationships](#getdevicesensorrelationships) - List the sensor roles for a given sensor or camera device.
* [GetNetworkSensorAlertsCurrentOverviewByMetric](#getnetworksensoralertscurrentoverviewbymetric) - Return an overview of currently alerting sensors by metric
* [GetNetworkSensorAlertsOverviewByMetric](#getnetworksensoralertsoverviewbymetric) - Return an overview of alert occurrences over a timespan, by metric
* [GetNetworkSensorAlertsProfile](#getnetworksensoralertsprofile) - Show details of a sensor alert profile for a network.
* [GetNetworkSensorAlertsProfiles](#getnetworksensoralertsprofiles) - Lists all sensor alert profiles for a network.
* [GetNetworkSensorRelationships](#getnetworksensorrelationships) - List the sensor roles for devices in a given network
* [GetOrganizationSensorReadingsHistory](#getorganizationsensorreadingshistory) - Return all reported readings from sensors in a given timespan, sorted by timestamp
* [GetOrganizationSensorReadingsLatest](#getorganizationsensorreadingslatest) - Return the latest available reading for each metric from each sensor, sorted by sensor serial
* [UpdateDeviceSensorRelationships](#updatedevicesensorrelationships) - Assign one or more sensor roles to a given sensor or camera device.
* [UpdateNetworkSensorAlertsProfile](#updatenetworksensoralertsprofile) - Updates a sensor alert profile for a network.

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
    res, err := s.Sensor.CreateNetworkSensorAlertsProfile(ctx, operations.CreateNetworkSensorAlertsProfileRequest{
        RequestBody: operations.CreateNetworkSensorAlertsProfileRequestBody{
            Conditions: []CreateNetworkSensorAlertsProfileRequestBodyConditions{
                operations.CreateNetworkSensorAlertsProfileRequestBodyConditions{
                    Direction: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnumAbove.ToPointer(),
                    Duration: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnumOneHundredAndTwenty.ToPointer(),
                    Metric: "voluptate",
                    Threshold: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThreshold{
                        Door: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor{
                            Open: false,
                        },
                        Humidity: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity{
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnumInadequate.ToPointer(),
                            RelativePercentage: sdk.Int64(562289),
                        },
                        IndoorAirQuality: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality{
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnumFair.ToPointer(),
                            Score: sdk.Int64(576867),
                        },
                        Noise: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise{
                            Ambient: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient{
                                Level: sdk.Int64(124468),
                                Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnumPoor.ToPointer(),
                            },
                        },
                        Pm25: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25{
                            Concentration: sdk.Int64(401186),
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnumGood.ToPointer(),
                        },
                        Temperature: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature{
                            Celsius: sdk.Float32(1031.2),
                            Fahrenheit: sdk.Float32(4005.28),
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnumInadequate.ToPointer(),
                        },
                        Tvoc: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc{
                            Concentration: sdk.Int64(172829),
                            Quality: operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnumPoor.ToPointer(),
                        },
                        Water: &operations.CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater{
                            Present: false,
                        },
                    },
                },
            },
            Name: "Ms. Javier Swaniawski",
            Recipients: &operations.CreateNetworkSensorAlertsProfileRequestBodyRecipients{
                Emails: []string{
                    "adipisci",
                },
                HTTPServerIds: []string{
                    "suscipit",
                },
                SmsNumbers: []string{
                    "sequi",
                },
            },
            Schedule: &operations.CreateNetworkSensorAlertsProfileRequestBodySchedule{
                ID: sdk.String("5aed5d0c-58c8-4338-898d-be64ae5c556d"),
            },
            Serials: []string{
                "alias",
                "neque",
                "sed",
                "reiciendis",
            },
        },
        NetworkID: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSensorAlertsProfile200ApplicationJSONObject != nil {
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
    res, err := s.Sensor.DeleteNetworkSensorAlertsProfile(ctx, operations.DeleteNetworkSensorAlertsProfileRequest{
        ID: "4171477b-625d-44a0-acf7-4493b2cfe904",
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

## GetDeviceSensorRelationships

List the sensor roles for a given sensor or camera device.

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
    res, err := s.Sensor.GetDeviceSensorRelationships(ctx, operations.GetDeviceSensorRelationshipsRequest{
        Serial: "eius",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSensorRelationships200ApplicationJSONObjects != nil {
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
    res, err := s.Sensor.GetNetworkSensorAlertsCurrentOverviewByMetric(ctx, operations.GetNetworkSensorAlertsCurrentOverviewByMetricRequest{
        NetworkID: "molestiae",
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
    res, err := s.Sensor.GetNetworkSensorAlertsOverviewByMetric(ctx, operations.GetNetworkSensorAlertsOverviewByMetricRequest{
        Interval: sdk.Int64(993475),
        NetworkID: "nihil",
        T0: sdk.String("deserunt"),
        T1: sdk.String("quis"),
        Timespan: sdk.Float32(1632.49),
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
    res, err := s.Sensor.GetNetworkSensorAlertsProfile(ctx, operations.GetNetworkSensorAlertsProfileRequest{
        ID: "fc06ca49-6221-4ac4-b4b9-04ff8f6bc268",
        NetworkID: "harum",
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
    res, err := s.Sensor.GetNetworkSensorAlertsProfiles(ctx, operations.GetNetworkSensorAlertsProfilesRequest{
        NetworkID: "eaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSensorAlertsProfiles200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSensorRelationships

List the sensor roles for devices in a given network

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
    res, err := s.Sensor.GetNetworkSensorRelationships(ctx, operations.GetNetworkSensorRelationshipsRequest{
        NetworkID: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSensorRelationships200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationSensorReadingsHistory

Return all reported readings from sensors in a given timespan, sorted by timestamp

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
    res, err := s.Sensor.GetOrganizationSensorReadingsHistory(ctx, operations.GetOrganizationSensorReadingsHistoryRequest{
        EndingBefore: sdk.String("iure"),
        Metrics: []string{
            "ab",
            "corrupti",
            "aliquid",
            "libero",
        },
        NetworkIds: []string{
            "hic",
            "doloremque",
            "autem",
            "tempore",
        },
        OrganizationID: "architecto",
        PerPage: sdk.Int64(678644),
        Serials: []string{
            "sapiente",
        },
        StartingAfter: sdk.String("molestiae"),
        T0: sdk.String("incidunt"),
        T1: sdk.String("sint"),
        Timespan: sdk.Float32(4097.99),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSensorReadingsHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

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
    res, err := s.Sensor.GetOrganizationSensorReadingsLatest(ctx, operations.GetOrganizationSensorReadingsLatestRequest{
        EndingBefore: sdk.String("ullam"),
        Metrics: []string{
            "odio",
            "magni",
        },
        NetworkIds: []string{
            "natus",
        },
        OrganizationID: "consequuntur",
        PerPage: sdk.Int64(861777),
        Serials: []string{
            "itaque",
            "eos",
            "expedita",
            "deleniti",
        },
        StartingAfter: sdk.String("laudantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSensorReadingsLatest200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateDeviceSensorRelationships

Assign one or more sensor roles to a given sensor or camera device.

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
    res, err := s.Sensor.UpdateDeviceSensorRelationships(ctx, operations.UpdateDeviceSensorRelationshipsRequest{
        RequestBody: &operations.UpdateDeviceSensorRelationshipsRequestBody{
            Livestream: &operations.UpdateDeviceSensorRelationshipsRequestBodyLivestream{
                RelatedDevices: []UpdateDeviceSensorRelationshipsRequestBodyLivestreamRelatedDevices{
                    operations.UpdateDeviceSensorRelationshipsRequestBodyLivestreamRelatedDevices{
                        Serial: "cum",
                    },
                    operations.UpdateDeviceSensorRelationshipsRequestBodyLivestreamRelatedDevices{
                        Serial: "tenetur",
                    },
                },
            },
        },
        Serial: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceSensorRelationships200ApplicationJSONObject != nil {
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
    res, err := s.Sensor.UpdateNetworkSensorAlertsProfile(ctx, operations.UpdateNetworkSensorAlertsProfileRequest{
        RequestBody: &operations.UpdateNetworkSensorAlertsProfileRequestBody{
            Conditions: []UpdateNetworkSensorAlertsProfileRequestBodyConditions{
                operations.UpdateNetworkSensorAlertsProfileRequestBodyConditions{
                    Direction: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnumAbove.ToPointer(),
                    Duration: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnumOneHundredAndTwenty.ToPointer(),
                    Metric: "cum",
                    Threshold: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThreshold{
                        Door: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor{
                            Open: false,
                        },
                        Humidity: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity{
                            Quality: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnumGood.ToPointer(),
                            RelativePercentage: sdk.Int64(992138),
                        },
                        IndoorAirQuality: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality{
                            Quality: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnumGood.ToPointer(),
                            Score: sdk.Int64(381593),
                        },
                        Noise: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise{
                            Ambient: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient{
                                Level: sdk.Int64(96454),
                                Quality: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnumPoor.ToPointer(),
                            },
                        },
                        Pm25: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25{
                            Concentration: sdk.Int64(154672),
                            Quality: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnumFair.ToPointer(),
                        },
                        Temperature: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature{
                            Celsius: sdk.Float32(8655.85),
                            Fahrenheit: sdk.Float32(2727.2),
                            Quality: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnumGood.ToPointer(),
                        },
                        Tvoc: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc{
                            Concentration: sdk.Int64(278434),
                            Quality: operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnumFair.ToPointer(),
                        },
                        Water: &operations.UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater{
                            Present: false,
                        },
                    },
                },
            },
            Name: sdk.String("Grady Skiles"),
            Recipients: &operations.UpdateNetworkSensorAlertsProfileRequestBodyRecipients{
                Emails: []string{
                    "maxime",
                    "vero",
                },
                HTTPServerIds: []string{
                    "cum",
                    "consequuntur",
                },
                SmsNumbers: []string{
                    "debitis",
                    "inventore",
                    "dolorum",
                    "natus",
                },
            },
            Schedule: &operations.UpdateNetworkSensorAlertsProfileRequestBodySchedule{
                ID: sdk.String("2452947b-5a75-4c1d-9892-7d571e7d42d5"),
            },
            Serials: []string{
                "aliquam",
                "commodi",
                "a",
            },
        },
        ID: "e98fd59e-fe1e-4c50-811c-9b198e5600f1",
        NetworkID: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSensorAlertsProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```
