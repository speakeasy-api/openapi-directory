# QualityRetentionProfiles

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
    res, err := s.QualityRetentionProfiles.CreateNetworkCameraQualityRetentionProfile(ctx, operations.CreateNetworkCameraQualityRetentionProfileRequest{
        RequestBody: operations.CreateNetworkCameraQualityRetentionProfileRequestBody{
            AudioRecordingEnabled: sdk.Bool(false),
            CloudArchiveEnabled: sdk.Bool(false),
            MaxRetentionDays: sdk.Int64(992914),
            MotionBasedRetentionEnabled: sdk.Bool(false),
            MotionDetectorVersion: sdk.Int64(338577),
            Name: "Tom Fritsch",
            RestrictedBandwidthModeEnabled: sdk.Bool(false),
            ScheduleID: sdk.String("excepturi"),
            VideoSettings: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings{
                Mv12Mv22Mv72: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnumStandard,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnumOneThousandTwoHundredAndEightyx720,
                },
                Mv12We: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WE{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEQualityEnumHigh,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEResolutionEnumOneThousandTwoHundredAndEightyx720,
                },
                Mv13: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13QualityEnumEnhanced,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13ResolutionEnumTwoThousandSixHundredAndEightyEightx1512,
                },
                Mv21Mv71: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnumEnhanced,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnumOneThousandTwoHundredAndEightyx720,
                },
                Mv22XMv72X: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnumHigh,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnumOneThousandTwoHundredAndEightyx720,
                },
                Mv32: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnumStandard,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnumOneThousandAndEightyx1080,
                },
                Mv33: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33QualityEnumEnhanced,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33ResolutionEnumTwoThousandOneHundredAndTwelvex2112,
                },
                Mv52: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52QualityEnumStandard,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52ResolutionEnumTwoThousandSixHundredAndEightyEightx1512,
                },
                Mv63: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63QualityEnumEnhanced,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63ResolutionEnumOneThousandNineHundredAndTwentyx1080,
                },
                Mv63X: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63X{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XQualityEnumEnhanced,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XResolutionEnumOneThousandNineHundredAndTwentyx1080,
                },
                Mv93: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93QualityEnumStandard,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93ResolutionEnumOneThousandAndEightyx1080,
                },
                Mv93X: &operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93X{
                    Quality: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XQualityEnumEnhanced,
                    Resolution: operations.CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XResolutionEnumOneThousandAndEightyx1080,
                },
            },
        },
        NetworkID: "sint",
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
    res, err := s.QualityRetentionProfiles.DeleteNetworkCameraQualityRetentionProfile(ctx, operations.DeleteNetworkCameraQualityRetentionProfileRequest{
        NetworkID: "quis",
        QualityRetentionProfileID: "eos",
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
    res, err := s.QualityRetentionProfiles.GetNetworkCameraQualityRetentionProfile(ctx, operations.GetNetworkCameraQualityRetentionProfileRequest{
        NetworkID: "ut",
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
    res, err := s.QualityRetentionProfiles.GetNetworkCameraQualityRetentionProfiles(ctx, operations.GetNetworkCameraQualityRetentionProfilesRequest{
        NetworkID: "nam",
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
    res, err := s.QualityRetentionProfiles.UpdateNetworkCameraQualityRetentionProfile(ctx, operations.UpdateNetworkCameraQualityRetentionProfileRequest{
        RequestBody: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBody{
            AudioRecordingEnabled: sdk.Bool(false),
            CloudArchiveEnabled: sdk.Bool(false),
            MaxRetentionDays: sdk.Int64(628321),
            MotionBasedRetentionEnabled: sdk.Bool(false),
            MotionDetectorVersion: sdk.Int64(566989),
            Name: sdk.String("Juan Klein"),
            RestrictedBandwidthModeEnabled: sdk.Bool(false),
            ScheduleID: sdk.String("quaerat"),
            VideoSettings: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings{
                Mv12Mv22Mv72: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnumStandard,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnumOneThousandNineHundredAndTwentyx1080,
                },
                Mv12We: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WE{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEQualityEnumStandard,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WEResolutionEnumOneThousandTwoHundredAndEightyx720,
                },
                Mv13: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13QualityEnumHigh,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv13ResolutionEnumOneThousandAndEightyx1080,
                },
                Mv21Mv71: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnumStandard,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnumOneThousandTwoHundredAndEightyx720,
                },
                Mv22XMv72X: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnumEnhanced,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnumTwoThousandSixHundredAndEightyEightx1512,
                },
                Mv32: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnumHigh,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnumOneThousandAndEightyx1080,
                },
                Mv33: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33QualityEnumEnhanced,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33ResolutionEnumTwoThousandOneHundredAndTwelvex2112,
                },
                Mv52: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52QualityEnumHigh,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv52ResolutionEnumOneThousandTwoHundredAndEightyx720,
                },
                Mv63: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63QualityEnumStandard,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63ResolutionEnumTwoThousandSixHundredAndEightyEightx1512,
                },
                Mv63X: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63X{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XQualityEnumHigh,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv63XResolutionEnumThreeThousandEightHundredAndFortyx2160,
                },
                Mv93: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93QualityEnumStandard,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93ResolutionEnumTwoThousandOneHundredAndTwelvex2112,
                },
                Mv93X: &operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93X{
                    Quality: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XQualityEnumStandard,
                    Resolution: operations.UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv93XResolutionEnumOneThousandAndEightyx1080,
                },
            },
        },
        NetworkID: "sed",
        QualityRetentionProfileID: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkCameraQualityRetentionProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```
