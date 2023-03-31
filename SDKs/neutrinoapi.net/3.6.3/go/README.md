# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/neutrinoapi.net/3.6.3/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
            UserID: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.BadWordFilterRequestBody{
        Catalog: "corrupti",
        CensorCharacter: "provident",
        Content: "distinctio",
    }

    ctx := context.Background()
    res, err := s.DataTools.BadWordFilter(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BadWordFilterResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### DataTools

* `BadWordFilter` - Bad Word Filter
* `EmailValidate` - Email Validate
* `PhoneValidate` - Phone Validate
* `UALookup` - UA Lookup

### ECommerce

* `BINListDownload` - BIN List Download
* `BINLookup` - BIN Lookup
* `Convert` - Convert

### Geolocation

* `GeocodeAddress` - Geocode Address
* `GeocodeReverse` - Geocode Reverse
* `IPInfo` - IP Info

### Imaging

* `HTMLRender` - HTML Render
* `ImageResize` - Image Resize
* `ImageWatermark` - Image Watermark
* `QRCode` - QR Code

### SecurityAndNetworking

* `EmailVerify` - Email Verify
* `HostReputation` - Host Reputation
* `IPBlocklist` - IP Blocklist
* `IPBlocklistDownload` - IP Blocklist Download
* `IPProbe` - IP Probe

### Telephony

* `HLRLookup` - HLR Lookup
* `PhonePlayback` - Phone Playback
* `PhoneVerify` - Phone Verify
* `SMSVerify` - SMS Verify
* `VerifySecurityCode` - Verify Security Code

### Www

* `BrowserBot` - Browser Bot
* `HTMLClean` - HTML Clean
* `URLInfo` - URL Info
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
