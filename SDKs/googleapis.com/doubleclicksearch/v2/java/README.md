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

import org.openapis.openapi.models.operations.DoubleclicksearchConversionGetSecurity;
import org.openapis.openapi.models.operations.DoubleclicksearchConversionGetPathParams;
import org.openapis.openapi.models.operations.DoubleclicksearchConversionGetQueryParams;
import org.openapis.openapi.models.operations.DoubleclicksearchConversionGetRequest;
import org.openapis.openapi.models.operations.DoubleclicksearchConversionGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoubleclicksearchConversionGetRequest req = new DoubleclicksearchConversionGetRequest() {{
                security = new DoubleclicksearchConversionGetSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new DoubleclicksearchConversionGetPathParams() {{
                    advertiserId = "corrupti";
                    agencyId = "provident";
                    engineAccountId = "distinctio";
                }};
                queryParams = new DoubleclicksearchConversionGetQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "unde";
                    adGroupId = "nulla";
                    adId = "corrupti";
                    alt = "proto";
                    callback = "vel";
                    campaignId = "error";
                    criterionId = "deserunt";
                    customerId = "suscipit";
                    endDate = 437587;
                    fields = "magnam";
                    key = "debitis";
                    oauthToken = "ipsa";
                    prettyPrint = false;
                    quotaUser = "delectus";
                    rowCount = 272656;
                    startDate = 383441;
                    startRow = 477665;
                    uploadType = "minus";
                    uploadProtocol = "placeat";
                }};
            }};            

            DoubleclicksearchConversionGetResponse res = sdk.conversion.doubleclicksearchConversionGet(req);

            if (res.conversionList.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### conversion

* `doubleclicksearchConversionGet` - Retrieves a list of conversions from a DoubleClick Search engine account.
* `doubleclicksearchConversionGetByCustomerId` - Retrieves a list of conversions from a DoubleClick Search engine account.
* `doubleclicksearchConversionInsert` - Inserts a batch of new conversions into DoubleClick Search.
* `doubleclicksearchConversionUpdate` - Updates a batch of conversions in DoubleClick Search.
* `doubleclicksearchConversionUpdateAvailability` - Updates the availabilities of a batch of floodlight activities in DoubleClick Search.

### reports

* `doubleclicksearchReportsGenerate` - Generates and returns a report immediately.
* `doubleclicksearchReportsGet` - Polls for the status of a report request.
* `doubleclicksearchReportsGetFile` - Downloads a report file encoded in UTF-8.
* `doubleclicksearchReportsGetIdMappingFile` - Downloads a csv file(encoded in UTF-8) that contains ID mappings between legacy SA360 and new SA360. The file includes all children entities of the given advertiser(e.g. engine accounts, campaigns, ad groups, etc.) that exist in both legacy SA360 and new SA360.
* `doubleclicksearchReportsRequest` - Inserts a report request into the reporting system.

### savedColumns

* `doubleclicksearchSavedColumnsList` - Retrieve the list of saved columns for a specified advertiser.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
