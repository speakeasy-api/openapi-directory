# CameraQualityRetentionProfiles

### Available Operations

* [CreateNetworkCameraQualityRetentionProfile](#createnetworkcameraqualityretentionprofile) - Creates new quality retention profile for this network.
* [DeleteNetworkCameraQualityRetentionProfile](#deletenetworkcameraqualityretentionprofile) - Delete an existing quality retention profile for this network.
* [GetNetworkCameraQualityRetentionProfile](#getnetworkcameraqualityretentionprofile) - Retrieve a single quality retention profile
* [GetNetworkCameraQualityRetentionProfiles](#getnetworkcameraqualityretentionprofiles) - List the quality retention profiles for this network
* [UpdateNetworkCameraQualityRetentionProfile](#updatenetworkcameraqualityretentionprofile) - Update an existing quality retention profile for this network.

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
    res, err := s.CameraQualityRetentionProfiles.CreateNetworkCameraQualityRetentionProfile(ctx, operations.CreateNetworkCameraQualityRetentionProfileRequest{
        RequestBody: operations.CreateNetworkCameraQualityRetentionProfileRequestBody{
            AudioRecordingEnabled: sdk.Bool(false),
            CloudArchiveEnabled: sdk.Bool(false),
            MaxRetentionDays: sdk.Int64(730856),
            MotionBasedRetentionEnabled: sdk.Bool(false),
            MotionDetectorVersion: sdk.Int64(880298),
            Name: "Darlene Effertz",
            RestrictedBandwidthModeEnabled: sdk.Bool(false),
            ScheduleID: sdk.String("nihil"),
            VideoSettings: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings{
                Mv12Mv22Mv72: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnumEnhanced,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnumOneThousandNineHundredAndTwentyx1080,
                },
                Mv12We: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WE{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEQualityEnumEnhanced,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEResolutionEnumOneThousandTwoHundredAndEightyx720,
                },
                Mv13: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13QualityEnumHigh,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13ResolutionEnumTwoThousandSixHundredAndEightyEightx1512,
                },
                Mv21Mv71: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnumHigh,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnumOneThousandTwoHundredAndEightyx720,
                },
                Mv22XMv72X: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnumHigh,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnumOneThousandNineHundredAndTwentyx1080,
                },
                Mv32: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnumEnhanced,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnumOneThousandAndEightyx1080,
                },
                Mv33: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33QualityEnumEnhanced,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33ResolutionEnumTwoThousandOneHundredAndTwelvex2112,
                },
                Mv52: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52QualityEnumStandard,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52ResolutionEnumThreeThousandEightHundredAndFortyx2160,
                },
                Mv63: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63QualityEnumStandard,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63ResolutionEnumOneThousandNineHundredAndTwentyx1080,
                },
                Mv63X: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63X{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XQualityEnumStandard,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XResolutionEnumTwoThousandSixHundredAndEightyEightx1512,
                },
                Mv93: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93QualityEnumEnhanced,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93ResolutionEnumOneThousandAndEightyx1080,
                },
                Mv93X: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93X{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XQualityEnumEnhanced,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XResolutionEnumTwoThousandEightHundredAndEightyx2880,
                },
            },
        },
        NetworkID: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkCameraQualityRetentionProfile200ApplicationJSONObject != nil {
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
    res, err := s.CameraQualityRetentionProfiles.DeleteNetworkCameraQualityRetentionProfile(ctx, operations.DeleteNetworkCameraQualityRetentionProfileRequest{
        NetworkID: "aliquid",
        QualityRetentionProfileID: "quam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
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
    res, err := s.CameraQualityRetentionProfiles.GetNetworkCameraQualityRetentionProfile(ctx, operations.GetNetworkCameraQualityRetentionProfileRequest{
        NetworkID: "molestias",
        QualityRetentionProfileID: "temporibus",
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
    res, err := s.CameraQualityRetentionProfiles.GetNetworkCameraQualityRetentionProfiles(ctx, operations.GetNetworkCameraQualityRetentionProfilesRequest{
        NetworkID: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkCameraQualityRetentionProfiles200ApplicationJSONObjects != nil {
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
    res, err := s.CameraQualityRetentionProfiles.UpdateNetworkCameraQualityRetentionProfile(ctx, operations.UpdateNetworkCameraQualityRetentionProfileRequest{
        RequestBody: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBody{
            AudioRecordingEnabled: sdk.Bool(false),
            CloudArchiveEnabled: sdk.Bool(false),
            MaxRetentionDays: sdk.Int64(204865),
            MotionBasedRetentionEnabled: sdk.Bool(false),
            MotionDetectorVersion: sdk.Int64(144847),
            Name: sdk.String("Courtney Cassin"),
            RestrictedBandwidthModeEnabled: sdk.Bool(false),
            ScheduleID: sdk.String("hic"),
            VideoSettings: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings{
                Mv12Mv22Mv72: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnumEnhanced,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnumOneThousandNineHundredAndTwentyx1080,
                },
                Mv12We: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WE{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEQualityEnumStandard,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEResolutionEnumOneThousandNineHundredAndTwentyx1080,
                },
                Mv13: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13QualityEnumEnhanced,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13ResolutionEnumTwoThousandSixHundredAndEightyEightx1512,
                },
                Mv21Mv71: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnumEnhanced,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnumOneThousandTwoHundredAndEightyx720,
                },
                Mv22XMv72X: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnumEnhanced,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnumTwoThousandSixHundredAndEightyEightx1512,
                },
                Mv32: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnumHigh,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnumTwoThousandAndFiftyEightx2058,
                },
                Mv33: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33QualityEnumHigh,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33ResolutionEnumOneThousandAndEightyx1080,
                },
                Mv52: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52QualityEnumStandard,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52ResolutionEnumOneThousandTwoHundredAndEightyx720,
                },
                Mv63: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63QualityEnumEnhanced,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63ResolutionEnumOneThousandNineHundredAndTwentyx1080,
                },
                Mv63X: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63X{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XQualityEnumEnhanced,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XResolutionEnumThreeThousandEightHundredAndFortyx2160,
                },
                Mv93: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93QualityEnumEnhanced,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93ResolutionEnumOneThousandAndEightyx1080,
                },
                Mv93X: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93X{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XQualityEnumEnhanced,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XResolutionEnumTwoThousandOneHundredAndTwelvex2112,
                },
            },
        },
        NetworkID: "itaque",
        QualityRetentionProfileID: "consequatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkCameraQualityRetentionProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```
