# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BadWordFilterRequestBody;
import org.openapis.openapi.models.operations.BadWordFilterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti", "provident") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    userId = "YOUR_API_KEY_HERE";
                }})
                .build();

            BadWordFilterRequestBody req = new BadWordFilterRequestBody("distinctio") {{
                catalog = "quibusdam";
                censorCharacter = "unde";
            }};            

            BadWordFilterResponse res = sdk.dataTools.badWordFilter(req);

            if (res.badWordFilterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [dataTools](docs/datatools/README.md)

* [badWordFilter](docs/datatools/README.md#badwordfilter) - Bad Word Filter
* [emailValidate](docs/datatools/README.md#emailvalidate) - Email Validate
* [phoneValidate](docs/datatools/README.md#phonevalidate) - Phone Validate
* [uaLookup](docs/datatools/README.md#ualookup) - UA Lookup

### [eCommerce](docs/ecommerce/README.md)

* [binListDownload](docs/ecommerce/README.md#binlistdownload) - BIN List Download
* [binLookup](docs/ecommerce/README.md#binlookup) - BIN Lookup
* [convert](docs/ecommerce/README.md#convert) - Convert

### [geolocation](docs/geolocation/README.md)

* [geocodeAddress](docs/geolocation/README.md#geocodeaddress) - Geocode Address
* [geocodeReverse](docs/geolocation/README.md#geocodereverse) - Geocode Reverse
* [ipInfo](docs/geolocation/README.md#ipinfo) - IP Info

### [imaging](docs/imaging/README.md)

* [htmlRender](docs/imaging/README.md#htmlrender) - HTML Render
* [imageResize](docs/imaging/README.md#imageresize) - Image Resize
* [imageWatermark](docs/imaging/README.md#imagewatermark) - Image Watermark
* [qrCode](docs/imaging/README.md#qrcode) - QR Code

### [securityAndNetworking](docs/securityandnetworking/README.md)

* [domainLookup](docs/securityandnetworking/README.md#domainlookup) - Domain Lookup
* [emailVerify](docs/securityandnetworking/README.md#emailverify) - Email Verify
* [hostReputation](docs/securityandnetworking/README.md#hostreputation) - Host Reputation
* [ipBlocklist](docs/securityandnetworking/README.md#ipblocklist) - IP Blocklist
* [ipBlocklistDownload](docs/securityandnetworking/README.md#ipblocklistdownload) - IP Blocklist Download
* [ipProbe](docs/securityandnetworking/README.md#ipprobe) - IP Probe

### [telephony](docs/telephony/README.md)

* [hlrLookup](docs/telephony/README.md#hlrlookup) - HLR Lookup
* [phonePlayback](docs/telephony/README.md#phoneplayback) - Phone Playback
* [phoneVerify](docs/telephony/README.md#phoneverify) - Phone Verify
* [smsVerify](docs/telephony/README.md#smsverify) - SMS Verify
* [verifySecurityCode](docs/telephony/README.md#verifysecuritycode) - Verify Security Code

### [www](docs/www/README.md)

* [browserBot](docs/www/README.md#browserbot) - Browser Bot
* [htmlClean](docs/www/README.md#htmlclean) - HTML Clean
* [urlInfo](docs/www/README.md#urlinfo) - URL Info
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
