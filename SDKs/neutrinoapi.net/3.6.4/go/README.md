# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/neutrinoapi.net/3.6.4/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
            APIKey: "YOUR_API_KEY_HERE",
            UserID: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DataTools.BadWordFilter(ctx, operations.BadWordFilterRequestBody{
        Catalog: sdk.String("corrupti"),
        CensorCharacter: sdk.String("provident"),
        Content: "distinctio",
    })
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


### [DataTools](docs/datatools/README.md)

* [BadWordFilter](docs/datatools/README.md#badwordfilter) - Bad Word Filter
* [EmailValidate](docs/datatools/README.md#emailvalidate) - Email Validate
* [PhoneValidate](docs/datatools/README.md#phonevalidate) - Phone Validate
* [UALookup](docs/datatools/README.md#ualookup) - UA Lookup

### [ECommerce](docs/ecommerce/README.md)

* [BINListDownload](docs/ecommerce/README.md#binlistdownload) - BIN List Download
* [BINLookup](docs/ecommerce/README.md#binlookup) - BIN Lookup
* [Convert](docs/ecommerce/README.md#convert) - Convert

### [Geolocation](docs/geolocation/README.md)

* [GeocodeAddress](docs/geolocation/README.md#geocodeaddress) - Geocode Address
* [GeocodeReverse](docs/geolocation/README.md#geocodereverse) - Geocode Reverse
* [IPInfo](docs/geolocation/README.md#ipinfo) - IP Info

### [Imaging](docs/imaging/README.md)

* [HTMLRender](docs/imaging/README.md#htmlrender) - HTML Render
* [ImageResize](docs/imaging/README.md#imageresize) - Image Resize
* [ImageWatermark](docs/imaging/README.md#imagewatermark) - Image Watermark
* [QRCode](docs/imaging/README.md#qrcode) - QR Code

### [SecurityAndNetworking](docs/securityandnetworking/README.md)

* [DomainLookup](docs/securityandnetworking/README.md#domainlookup) - Domain Lookup
* [EmailVerify](docs/securityandnetworking/README.md#emailverify) - Email Verify
* [HostReputation](docs/securityandnetworking/README.md#hostreputation) - Host Reputation
* [IPBlocklist](docs/securityandnetworking/README.md#ipblocklist) - IP Blocklist
* [IPBlocklistDownload](docs/securityandnetworking/README.md#ipblocklistdownload) - IP Blocklist Download
* [IPProbe](docs/securityandnetworking/README.md#ipprobe) - IP Probe

### [Telephony](docs/telephony/README.md)

* [HLRLookup](docs/telephony/README.md#hlrlookup) - HLR Lookup
* [PhonePlayback](docs/telephony/README.md#phoneplayback) - Phone Playback
* [PhoneVerify](docs/telephony/README.md#phoneverify) - Phone Verify
* [SMSVerify](docs/telephony/README.md#smsverify) - SMS Verify
* [VerifySecurityCode](docs/telephony/README.md#verifysecuritycode) - Verify Security Code

### [Www](docs/www/README.md)

* [BrowserBot](docs/www/README.md#browserbot) - Browser Bot
* [HTMLClean](docs/www/README.md#htmlclean) - HTML Clean
* [URLInfo](docs/www/README.md#urlinfo) - URL Info
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
