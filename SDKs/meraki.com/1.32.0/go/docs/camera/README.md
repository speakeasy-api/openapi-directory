# Camera

### Available Operations

* [CreateNetworkCameraQualityRetentionProfile](#createnetworkcameraqualityretentionprofile) - Creates new quality retention profile for this network.
* [CreateNetworkCameraWirelessProfile](#createnetworkcamerawirelessprofile) - Creates a new camera wireless profile for this network.
* [CreateOrganizationCameraCustomAnalyticsArtifact](#createorganizationcameracustomanalyticsartifact) - Create custom analytics artifact
* [DeleteNetworkCameraQualityRetentionProfile](#deletenetworkcameraqualityretentionprofile) - Delete an existing quality retention profile for this network.
* [DeleteNetworkCameraWirelessProfile](#deletenetworkcamerawirelessprofile) - Delete an existing camera wireless profile for this network.
* [DeleteOrganizationCameraCustomAnalyticsArtifact](#deleteorganizationcameracustomanalyticsartifact) - Delete Custom Analytics Artifact
* [GenerateDeviceCameraSnapshot](#generatedevicecamerasnapshot) - Generate a snapshot of what the camera sees at the specified time and return a link to that image.
* [GetDeviceCameraAnalyticsLive](#getdevicecameraanalyticslive) - Returns live state from camera of analytics zones
* [GetDeviceCameraAnalyticsOverview](#getdevicecameraanalyticsoverview) - Returns an overview of aggregate analytics data for a timespan
* [GetDeviceCameraAnalyticsRecent](#getdevicecameraanalyticsrecent) - Returns most recent record for analytics zones
* [GetDeviceCameraAnalyticsZoneHistory](#getdevicecameraanalyticszonehistory) - Return historical records for analytic zones
* [GetDeviceCameraAnalyticsZones](#getdevicecameraanalyticszones) - Returns all configured analytic zones for this camera
* [GetDeviceCameraCustomAnalytics](#getdevicecameracustomanalytics) - Return custom analytics settings for a camera
* [GetDeviceCameraQualityAndRetention](#getdevicecameraqualityandretention) - Returns quality and retention settings for the given camera
* [GetDeviceCameraSense](#getdevicecamerasense) - Returns sense settings for a given camera
* [GetDeviceCameraSenseObjectDetectionModels](#getdevicecamerasenseobjectdetectionmodels) - Returns the MV Sense object detection model list for the given camera
* [GetDeviceCameraVideoLink](#getdevicecameravideolink) - Returns video link to the specified camera
* [GetDeviceCameraVideoSettings](#getdevicecameravideosettings) - Returns video settings for the given camera
* [GetDeviceCameraWirelessProfiles](#getdevicecamerawirelessprofiles) - Returns wireless profile assigned to the given camera
* [GetNetworkCameraQualityRetentionProfile](#getnetworkcameraqualityretentionprofile) - Retrieve a single quality retention profile
* [GetNetworkCameraQualityRetentionProfiles](#getnetworkcameraqualityretentionprofiles) - List the quality retention profiles for this network
* [GetNetworkCameraSchedules](#getnetworkcameraschedules) - Returns a list of all camera recording schedules.
* [GetNetworkCameraWirelessProfile](#getnetworkcamerawirelessprofile) - Retrieve a single camera wireless profile.
* [GetNetworkCameraWirelessProfiles](#getnetworkcamerawirelessprofiles) - List the camera wireless profiles for this network.
* [GetOrganizationCameraCustomAnalyticsArtifact](#getorganizationcameracustomanalyticsartifact) - Get Custom Analytics Artifact
* [GetOrganizationCameraCustomAnalyticsArtifacts](#getorganizationcameracustomanalyticsartifacts) - List Custom Analytics Artifacts
* [GetOrganizationCameraOnboardingStatuses](#getorganizationcameraonboardingstatuses) - Fetch onboarding status of cameras
* [UpdateDeviceCameraCustomAnalytics](#updatedevicecameracustomanalytics) - Update custom analytics settings for a camera
* [UpdateDeviceCameraQualityAndRetention](#updatedevicecameraqualityandretention) - Update quality and retention settings for the given camera
* [UpdateDeviceCameraSense](#updatedevicecamerasense) - Update sense settings for the given camera
* [UpdateDeviceCameraVideoSettings](#updatedevicecameravideosettings) - Update video settings for the given camera
* [UpdateDeviceCameraWirelessProfiles](#updatedevicecamerawirelessprofiles) - Assign wireless profiles to the given camera
* [UpdateNetworkCameraQualityRetentionProfile](#updatenetworkcameraqualityretentionprofile) - Update an existing quality retention profile for this network.
* [UpdateNetworkCameraWirelessProfile](#updatenetworkcamerawirelessprofile) - Update an existing camera wireless profile in this network.
* [UpdateOrganizationCameraOnboardingStatuses](#updateorganizationcameraonboardingstatuses) - Notify that credential handoff to camera has completed

## CreateNetworkCameraQualityRetentionProfile

Creates new quality retention profile for this network.

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
    res, err := s.Camera.CreateNetworkCameraQualityRetentionProfile(ctx, operations.CreateNetworkCameraQualityRetentionProfileRequest{
        RequestBody: operations.CreateNetworkCameraQualityRetentionProfileRequestBody{
            AudioRecordingEnabled: sdk.Bool(false),
            CloudArchiveEnabled: sdk.Bool(false),
            MaxRetentionDays: sdk.Int64(550799),
            MotionBasedRetentionEnabled: sdk.Bool(false),
            MotionDetectorVersion: sdk.Int64(849690),
            Name: "Kenneth Friesen IV",
            RestrictedBandwidthModeEnabled: sdk.Bool(false),
            ScheduleID: sdk.String("repellendus"),
            VideoSettings: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings{
                Mv12Mv22Mv72: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnumHigh,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnumOneThousandNineHundredAndTwentyx1080,
                },
                Mv12We: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WE{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEQualityEnumEnhanced,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEResolutionEnumOneThousandTwoHundredAndEightyx720,
                },
                Mv13: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13QualityEnumEnhanced,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13ResolutionEnumTwoThousandSixHundredAndEightyEightx1512,
                },
                Mv21Mv71: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnumStandard,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnumOneThousandTwoHundredAndEightyx720,
                },
                Mv22XMv72X: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnumStandard,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnumOneThousandTwoHundredAndEightyx720,
                },
                Mv32: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnumEnhanced,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnumOneThousandAndEightyx1080,
                },
                Mv33: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33QualityEnumHigh,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33ResolutionEnumOneThousandAndEightyx1080,
                },
                Mv52: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52QualityEnumHigh,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52ResolutionEnumThreeThousandEightHundredAndFortyx2160,
                },
                Mv63: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63QualityEnumEnhanced,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63ResolutionEnumOneThousandNineHundredAndTwentyx1080,
                },
                Mv63X: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63X{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XQualityEnumHigh,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XResolutionEnumOneThousandNineHundredAndTwentyx1080,
                },
                Mv93: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93QualityEnumStandard,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93ResolutionEnumOneThousandAndEightyx1080,
                },
                Mv93X: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93X{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XQualityEnumHigh,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XResolutionEnumTwoThousandEightHundredAndEightyx2880,
                },
            },
        },
        NetworkID: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkCameraQualityRetentionProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkCameraWirelessProfile

Creates a new camera wireless profile for this network.

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
    res, err := s.Camera.CreateNetworkCameraWirelessProfile(ctx, operations.CreateNetworkCameraWirelessProfileRequest{
        RequestBody: operations.CreateNetworkCameraWirelessProfileRequestBody{
            Identity: &operations.CreateNetworkCameraWirelessProfileRequestBodyIdentity{
                Password: sdk.String("neque"),
                Username: sdk.String("Floyd80"),
            },
            Name: "Dr. Clay Lubowitz",
            Ssid: operations.CreateNetworkCameraWirelessProfileRequestBodySsid{
                AuthMode: operations.CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnumEightThousandAndTwentyOnexRadius.ToPointer(),
                EncryptionMode: sdk.String("soluta"),
                Name: sdk.String("Jimmy Walsh"),
                Psk: sdk.String("magni"),
            },
        },
        NetworkID: "aperiam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkCameraWirelessProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateOrganizationCameraCustomAnalyticsArtifact

Create custom analytics artifact. Returns an artifact upload URL with expiry time. Upload the artifact file with a put request to the returned upload URL before its expiry.

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
    res, err := s.Camera.CreateOrganizationCameraCustomAnalyticsArtifact(ctx, operations.CreateOrganizationCameraCustomAnalyticsArtifactRequest{
        RequestBody: &operations.CreateOrganizationCameraCustomAnalyticsArtifactRequestBody{
            Name: sdk.String("Desiree Kshlerin III"),
        },
        OrganizationID: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationCameraCustomAnalyticsArtifact201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetworkCameraQualityRetentionProfile

Delete an existing quality retention profile for this network.

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
    res, err := s.Camera.DeleteNetworkCameraQualityRetentionProfile(ctx, operations.DeleteNetworkCameraQualityRetentionProfileRequest{
        NetworkID: "voluptate",
        QualityRetentionProfileID: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkCameraWirelessProfile

Delete an existing camera wireless profile for this network.

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
    res, err := s.Camera.DeleteNetworkCameraWirelessProfile(ctx, operations.DeleteNetworkCameraWirelessProfileRequest{
        NetworkID: "minima",
        WirelessProfileID: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteOrganizationCameraCustomAnalyticsArtifact

Delete Custom Analytics Artifact

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
    res, err := s.Camera.DeleteOrganizationCameraCustomAnalyticsArtifact(ctx, operations.DeleteOrganizationCameraCustomAnalyticsArtifactRequest{
        ArtifactID: "vel",
        OrganizationID: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GenerateDeviceCameraSnapshot

Generate a snapshot of what the camera sees at the specified time and return a link to that image.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Camera.GenerateDeviceCameraSnapshot(ctx, operations.GenerateDeviceCameraSnapshotRequest{
        RequestBody: &operations.GenerateDeviceCameraSnapshotRequestBody{
            Fullframe: sdk.Bool(false),
            Timestamp: types.MustTimeFromString("2022-11-27T15:29:14.022Z"),
        },
        Serial: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateDeviceCameraSnapshot202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceCameraAnalyticsLive

Returns live state from camera of analytics zones

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
    res, err := s.Camera.GetDeviceCameraAnalyticsLive(ctx, operations.GetDeviceCameraAnalyticsLiveRequest{
        Serial: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraAnalyticsLive200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceCameraAnalyticsOverview

Returns an overview of aggregate analytics data for a timespan

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
    res, err := s.Camera.GetDeviceCameraAnalyticsOverview(ctx, operations.GetDeviceCameraAnalyticsOverviewRequest{
        ObjectType: operations.GetDeviceCameraAnalyticsOverviewObjectTypeEnumPerson.ToPointer(),
        Serial: "assumenda",
        T0: sdk.String("provident"),
        T1: sdk.String("facere"),
        Timespan: sdk.Float32(1528.87),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraAnalyticsOverview200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceCameraAnalyticsRecent

Returns most recent record for analytics zones

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
    res, err := s.Camera.GetDeviceCameraAnalyticsRecent(ctx, operations.GetDeviceCameraAnalyticsRecentRequest{
        ObjectType: operations.GetDeviceCameraAnalyticsRecentObjectTypeEnumPerson.ToPointer(),
        Serial: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraAnalyticsRecent200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceCameraAnalyticsZoneHistory

Return historical records for analytic zones

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
    res, err := s.Camera.GetDeviceCameraAnalyticsZoneHistory(ctx, operations.GetDeviceCameraAnalyticsZoneHistoryRequest{
        ObjectType: operations.GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnumVehicle.ToPointer(),
        Resolution: sdk.Int64(645609),
        Serial: "repellendus",
        T0: sdk.String("consequatur"),
        T1: sdk.String("adipisci"),
        Timespan: sdk.Float32(390.69),
        ZoneID: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraAnalyticsZoneHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceCameraAnalyticsZones

Returns all configured analytic zones for this camera

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
    res, err := s.Camera.GetDeviceCameraAnalyticsZones(ctx, operations.GetDeviceCameraAnalyticsZonesRequest{
        Serial: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraAnalyticsZones200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceCameraCustomAnalytics

Return custom analytics settings for a camera

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
    res, err := s.Camera.GetDeviceCameraCustomAnalytics(ctx, operations.GetDeviceCameraCustomAnalyticsRequest{
        Serial: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraCustomAnalytics200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceCameraQualityAndRetention

Returns quality and retention settings for the given camera

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
    res, err := s.Camera.GetDeviceCameraQualityAndRetention(ctx, operations.GetDeviceCameraQualityAndRetentionRequest{
        Serial: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraQualityAndRetention200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceCameraSense

Returns sense settings for a given camera

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
    res, err := s.Camera.GetDeviceCameraSense(ctx, operations.GetDeviceCameraSenseRequest{
        Serial: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraSense200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceCameraSenseObjectDetectionModels

Returns the MV Sense object detection model list for the given camera

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
    res, err := s.Camera.GetDeviceCameraSenseObjectDetectionModels(ctx, operations.GetDeviceCameraSenseObjectDetectionModelsRequest{
        Serial: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraSenseObjectDetectionModels200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceCameraVideoLink

Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Camera.GetDeviceCameraVideoLink(ctx, operations.GetDeviceCameraVideoLinkRequest{
        Serial: "beatae",
        Timestamp: types.MustTimeFromString("2022-12-25T09:16:06.861Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraVideoLink200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceCameraVideoSettings

Returns video settings for the given camera

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
    res, err := s.Camera.GetDeviceCameraVideoSettings(ctx, operations.GetDeviceCameraVideoSettingsRequest{
        Serial: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraVideoSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceCameraWirelessProfiles

Returns wireless profile assigned to the given camera

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
    res, err := s.Camera.GetDeviceCameraWirelessProfiles(ctx, operations.GetDeviceCameraWirelessProfilesRequest{
        Serial: "ratione",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraWirelessProfiles200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkCameraQualityRetentionProfile

Retrieve a single quality retention profile

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
    res, err := s.Camera.GetNetworkCameraQualityRetentionProfile(ctx, operations.GetNetworkCameraQualityRetentionProfileRequest{
        NetworkID: "iure",
        QualityRetentionProfileID: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkCameraQualityRetentionProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkCameraQualityRetentionProfiles

List the quality retention profiles for this network

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
    res, err := s.Camera.GetNetworkCameraQualityRetentionProfiles(ctx, operations.GetNetworkCameraQualityRetentionProfilesRequest{
        NetworkID: "eos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkCameraQualityRetentionProfiles200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkCameraSchedules

Returns a list of all camera recording schedules.

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
    res, err := s.Camera.GetNetworkCameraSchedules(ctx, operations.GetNetworkCameraSchedulesRequest{
        NetworkID: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkCameraSchedules200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkCameraWirelessProfile

Retrieve a single camera wireless profile.

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
    res, err := s.Camera.GetNetworkCameraWirelessProfile(ctx, operations.GetNetworkCameraWirelessProfileRequest{
        NetworkID: "voluptatem",
        WirelessProfileID: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkCameraWirelessProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkCameraWirelessProfiles

List the camera wireless profiles for this network.

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
    res, err := s.Camera.GetNetworkCameraWirelessProfiles(ctx, operations.GetNetworkCameraWirelessProfilesRequest{
        NetworkID: "laudantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkCameraWirelessProfiles200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationCameraCustomAnalyticsArtifact

Get Custom Analytics Artifact

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
    res, err := s.Camera.GetOrganizationCameraCustomAnalyticsArtifact(ctx, operations.GetOrganizationCameraCustomAnalyticsArtifactRequest{
        ArtifactID: "facilis",
        OrganizationID: "laudantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationCameraCustomAnalyticsArtifact200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationCameraCustomAnalyticsArtifacts

List Custom Analytics Artifacts

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
    res, err := s.Camera.GetOrganizationCameraCustomAnalyticsArtifacts(ctx, operations.GetOrganizationCameraCustomAnalyticsArtifactsRequest{
        OrganizationID: "ullam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationCameraCustomAnalyticsArtifacts200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationCameraOnboardingStatuses

Fetch onboarding status of cameras

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
    res, err := s.Camera.GetOrganizationCameraOnboardingStatuses(ctx, operations.GetOrganizationCameraOnboardingStatusesRequest{
        NetworkIds: []string{
            "quia",
        },
        OrganizationID: "officia",
        Serials: []string{
            "corporis",
            "accusamus",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationCameraOnboardingStatuses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateDeviceCameraCustomAnalytics

Update custom analytics settings for a camera

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
    res, err := s.Camera.UpdateDeviceCameraCustomAnalytics(ctx, operations.UpdateDeviceCameraCustomAnalyticsRequest{
        RequestBody: &operations.UpdateDeviceCameraCustomAnalyticsRequestBody{
            ArtifactID: sdk.String("iusto"),
            Enabled: sdk.Bool(false),
            Parameters: []UpdateDeviceCameraCustomAnalyticsRequestBodyParameters{
                operations.UpdateDeviceCameraCustomAnalyticsRequestBodyParameters{
                    Name: "Rita Predovic",
                    Value: "tempora",
                },
                operations.UpdateDeviceCameraCustomAnalyticsRequestBodyParameters{
                    Name: "Gretchen Dietrich MD",
                    Value: "amet",
                },
                operations.UpdateDeviceCameraCustomAnalyticsRequestBodyParameters{
                    Name: "Natasha Wiza",
                    Value: "dolorum",
                },
                operations.UpdateDeviceCameraCustomAnalyticsRequestBodyParameters{
                    Name: "Darin Mante",
                    Value: "impedit",
                },
            },
        },
        Serial: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceCameraCustomAnalytics200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceCameraQualityAndRetention

Update quality and retention settings for the given camera

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
    res, err := s.Camera.UpdateDeviceCameraQualityAndRetention(ctx, operations.UpdateDeviceCameraQualityAndRetentionRequest{
        RequestBody: &operations.UpdateDeviceCameraQualityAndRetentionRequestBody{
            AudioRecordingEnabled: sdk.Bool(false),
            MotionBasedRetentionEnabled: sdk.Bool(false),
            MotionDetectorVersion: operations.UpdateDeviceCameraQualityAndRetentionRequestBodyMotionDetectorVersionEnumTwo.ToPointer(),
            ProfileID: sdk.String("voluptatum"),
            Quality: operations.UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnumHigh.ToPointer(),
            Resolution: operations.UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnumTwoThousandAndFiftyEightx2058.ToPointer(),
            RestrictedBandwidthModeEnabled: sdk.Bool(false),
        },
        Serial: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceCameraQualityAndRetention200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceCameraSense

Update sense settings for the given camera

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
    res, err := s.Camera.UpdateDeviceCameraSense(ctx, operations.UpdateDeviceCameraSenseRequest{
        RequestBody: &operations.UpdateDeviceCameraSenseRequestBody{
            AudioDetection: &operations.UpdateDeviceCameraSenseRequestBodyAudioDetection{
                Enabled: sdk.Bool(false),
            },
            DetectionModelID: sdk.String("optio"),
            MqttBrokerID: sdk.String("incidunt"),
            SenseEnabled: sdk.Bool(false),
        },
        Serial: "eos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceCameraSense200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceCameraVideoSettings

Update video settings for the given camera

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
    res, err := s.Camera.UpdateDeviceCameraVideoSettings(ctx, operations.UpdateDeviceCameraVideoSettingsRequest{
        RequestBody: &operations.UpdateDeviceCameraVideoSettingsRequestBody{
            ExternalRtspEnabled: sdk.Bool(false),
        },
        Serial: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceCameraVideoSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceCameraWirelessProfiles

Assign wireless profiles to the given camera. Incremental updates are not supported, all profile assignment need to be supplied at once.

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
    res, err := s.Camera.UpdateDeviceCameraWirelessProfiles(ctx, operations.UpdateDeviceCameraWirelessProfilesRequest{
        RequestBody: operations.UpdateDeviceCameraWirelessProfilesRequestBody{
            Ids: operations.UpdateDeviceCameraWirelessProfilesRequestBodyIds{
                Backup: sdk.String("dolores"),
                Primary: sdk.String("aliquid"),
                Secondary: sdk.String("eum"),
            },
        },
        Serial: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceCameraWirelessProfiles200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkCameraQualityRetentionProfile

Update an existing quality retention profile for this network.

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
    res, err := s.Camera.UpdateNetworkCameraQualityRetentionProfile(ctx, operations.UpdateNetworkCameraQualityRetentionProfileRequest{
        RequestBody: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBody{
            AudioRecordingEnabled: sdk.Bool(false),
            CloudArchiveEnabled: sdk.Bool(false),
            MaxRetentionDays: sdk.Int64(320748),
            MotionBasedRetentionEnabled: sdk.Bool(false),
            MotionDetectorVersion: sdk.Int64(552287),
            Name: sdk.String("Laurie Sporer"),
            RestrictedBandwidthModeEnabled: sdk.Bool(false),
            ScheduleID: sdk.String("culpa"),
            VideoSettings: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings{
                Mv12Mv22Mv72: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnumHigh,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnumOneThousandNineHundredAndTwentyx1080,
                },
                Mv12We: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WE{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEQualityEnumStandard,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEResolutionEnumOneThousandTwoHundredAndEightyx720,
                },
                Mv13: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13QualityEnumEnhanced,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13ResolutionEnumTwoThousandSixHundredAndEightyEightx1512,
                },
                Mv21Mv71: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnumStandard,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnumOneThousandTwoHundredAndEightyx720,
                },
                Mv22XMv72X: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnumStandard,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnumOneThousandTwoHundredAndEightyx720,
                },
                Mv32: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnumStandard,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnumOneThousandAndEightyx1080,
                },
                Mv33: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33QualityEnumHigh,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33ResolutionEnumOneThousandAndEightyx1080,
                },
                Mv52: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52QualityEnumStandard,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52ResolutionEnumThreeThousandEightHundredAndFortyx2160,
                },
                Mv63: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63QualityEnumEnhanced,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63ResolutionEnumOneThousandNineHundredAndTwentyx1080,
                },
                Mv63X: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63X{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XQualityEnumStandard,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XResolutionEnumThreeThousandEightHundredAndFortyx2160,
                },
                Mv93: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93QualityEnumHigh,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93ResolutionEnumTwoThousandOneHundredAndTwelvex2112,
                },
                Mv93X: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93X{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XQualityEnumStandard,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XResolutionEnumOneThousandAndEightyx1080,
                },
            },
        },
        NetworkID: "accusamus",
        QualityRetentionProfileID: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkCameraQualityRetentionProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkCameraWirelessProfile

Update an existing camera wireless profile in this network.

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
    res, err := s.Camera.UpdateNetworkCameraWirelessProfile(ctx, operations.UpdateNetworkCameraWirelessProfileRequest{
        RequestBody: &operations.UpdateNetworkCameraWirelessProfileRequestBody{
            Identity: &operations.UpdateNetworkCameraWirelessProfileRequestBodyIdentity{
                Password: sdk.String("quam"),
                Username: sdk.String("Lizzie_Windler74"),
            },
            Name: sdk.String("Daryl Ankunding"),
            Ssid: &operations.UpdateNetworkCameraWirelessProfileRequestBodySsid{
                AuthMode: operations.UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnumEightThousandAndTwentyOnexRadius.ToPointer(),
                EncryptionMode: sdk.String("numquam"),
                Name: sdk.String("Otis Greenholt"),
                Psk: sdk.String("iste"),
            },
        },
        NetworkID: "amet",
        WirelessProfileID: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkCameraWirelessProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationCameraOnboardingStatuses

Notify that credential handoff to camera has completed

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
    res, err := s.Camera.UpdateOrganizationCameraOnboardingStatuses(ctx, operations.UpdateOrganizationCameraOnboardingStatusesRequest{
        RequestBody: &operations.UpdateOrganizationCameraOnboardingStatusesRequestBody{
            Serial: sdk.String("aut"),
            WirelessCredentialsSent: sdk.Bool(false),
        },
        OrganizationID: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationCameraOnboardingStatuses200ApplicationJSONObject != nil {
        // handle response
    }
}
```
