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
import org.openapis.openapi.models.operations.DoubleclicksearchConversionGetRequest;
import org.openapis.openapi.models.operations.DoubleclicksearchConversionGetResponse;
import org.openapis.openapi.models.operations.DoubleclicksearchConversionGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoubleclicksearchConversionGetRequest req = new DoubleclicksearchConversionGetRequest("corrupti", "provident", 715190L, "quibusdam", 602763L, 857946L, 544883L) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "vel";
                adGroupId = "error";
                adId = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "iure";
                campaignId = "magnam";
                criterionId = "debitis";
                customerId = "ipsa";
                fields = "delectus";
                key = "tempora";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "minus";
                uploadProtocol = "placeat";
            }};            

            DoubleclicksearchConversionGetResponse res = sdk.conversion.doubleclicksearchConversionGet(req, new DoubleclicksearchConversionGetSecurity("voluptatum", "iusto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.conversionList != null) {
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


### [conversion](docs/conversion/README.md)

* [doubleclicksearchConversionGet](docs/conversion/README.md#doubleclicksearchconversionget) - Retrieves a list of conversions from a DoubleClick Search engine account.
* [doubleclicksearchConversionGetByCustomerId](docs/conversion/README.md#doubleclicksearchconversiongetbycustomerid) - Retrieves a list of conversions from a DoubleClick Search engine account.
* [doubleclicksearchConversionInsert](docs/conversion/README.md#doubleclicksearchconversioninsert) - Inserts a batch of new conversions into DoubleClick Search.
* [doubleclicksearchConversionUpdate](docs/conversion/README.md#doubleclicksearchconversionupdate) - Updates a batch of conversions in DoubleClick Search.
* [doubleclicksearchConversionUpdateAvailability](docs/conversion/README.md#doubleclicksearchconversionupdateavailability) - Updates the availabilities of a batch of floodlight activities in DoubleClick Search.

### [reports](docs/reports/README.md)

* [doubleclicksearchReportsGenerate](docs/reports/README.md#doubleclicksearchreportsgenerate) - Generates and returns a report immediately.
* [doubleclicksearchReportsGet](docs/reports/README.md#doubleclicksearchreportsget) - Polls for the status of a report request.
* [doubleclicksearchReportsGetFile](docs/reports/README.md#doubleclicksearchreportsgetfile) - Downloads a report file encoded in UTF-8.
* [doubleclicksearchReportsGetIdMappingFile](docs/reports/README.md#doubleclicksearchreportsgetidmappingfile) - Downloads a csv file(encoded in UTF-8) that contains ID mappings between legacy SA360 and new SA360. The file includes all children entities of the given advertiser(e.g. engine accounts, campaigns, ad groups, etc.) that exist in both legacy SA360 and new SA360.
* [doubleclicksearchReportsRequest](docs/reports/README.md#doubleclicksearchreportsrequest) - Inserts a report request into the reporting system.

### [savedColumns](docs/savedcolumns/README.md)

* [doubleclicksearchSavedColumnsList](docs/savedcolumns/README.md#doubleclicksearchsavedcolumnslist) - Retrieve the list of saved columns for a specified advertiser.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
