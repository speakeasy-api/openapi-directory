# Splash

### Available Operations

* [GetNetworkWirelessSsidSplashSettings](#getnetworkwirelessssidsplashsettings) - Display the splash page settings for the given SSID
* [UpdateNetworkWirelessSsidSplashSettings](#updatenetworkwirelessssidsplashsettings) - Modify the splash page settings for the given SSID

## GetNetworkWirelessSsidSplashSettings

Display the splash page settings for the given SSID

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
    res, err := s.Splash.GetNetworkWirelessSsidSplashSettings(ctx, operations.GetNetworkWirelessSsidSplashSettingsRequest{
        NetworkID: "omnis",
        Number: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidSplashSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidSplashSettings

Modify the splash page settings for the given SSID

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
    res, err := s.Splash.UpdateNetworkWirelessSsidSplashSettings(ctx, operations.UpdateNetworkWirelessSsidSplashSettingsRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBody{
            AllowSimultaneousLogins: sdk.Bool(false),
            Billing: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling{
                FreeAccess: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess{
                    DurationInMinutes: sdk.Int64(924347),
                    Enabled: sdk.Bool(false),
                },
                PrepaidAccessFastLoginEnabled: sdk.Bool(false),
                ReplyToEmailAddress: sdk.String("error"),
            },
            BlockAllTrafficBeforeSignOn: sdk.Bool(false),
            ControllerDisconnectionBehavior: operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnumDefault.ToPointer(),
            GuestSponsorship: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship{
                DurationInMinutes: sdk.Int64(35626),
                GuestCanRequestTimeframe: sdk.Bool(false),
            },
            RedirectURL: sdk.String("eum"),
            SentryEnrollment: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment{
                EnforcedSystems: []string{
                    "impedit",
                    "aspernatur",
                },
                Strength: operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnumStrict.ToPointer(),
                SystemsManagerNetwork: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork{
                    ID: "2a72299f-14f1-4909-9706-eae1e6a7058d",
                },
            },
            SplashImage: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage{
                Extension: sdk.String("inventore"),
                Image: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImage{
                    Contents: sdk.String("voluptate"),
                    Format: operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImageFormatEnumGif.ToPointer(),
                },
                Md5: sdk.String("vero"),
            },
            SplashLogo: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo{
                Extension: sdk.String("ipsa"),
                Image: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImage{
                    Contents: sdk.String("pariatur"),
                    Format: operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImageFormatEnumGif.ToPointer(),
                },
                Md5: sdk.String("cum"),
            },
            SplashPrepaidFront: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront{
                Extension: sdk.String("voluptatum"),
                Image: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImage{
                    Contents: sdk.String("odit"),
                    Format: operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImageFormatEnumJpg.ToPointer(),
                },
                Md5: sdk.String("accusantium"),
            },
            SplashTimeout: sdk.Int64(776876),
            SplashURL: sdk.String("magnam"),
            UseRedirectURL: sdk.Bool(false),
            UseSplashURL: sdk.Bool(false),
            WelcomeMessage: sdk.String("porro"),
        },
        NetworkID: "blanditiis",
        Number: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```
