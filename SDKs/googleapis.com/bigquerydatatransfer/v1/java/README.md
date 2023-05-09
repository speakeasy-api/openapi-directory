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
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsResponse;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption1;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption2;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest req = new BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quibusdam", "unde");
                    put("nulla", "corrupti");
                    put("illum", "vel");
                }};
                accessToken = "error";
                alt = AltEnum.MEDIA;
                callback = "suscipit";
                fields = "iure";
                key = "magnam";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "delectus";
                uploadProtocol = "tempora";
            }};            

            BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsResponse res = sdk.projects.bigquerydatatransferProjectsLocationsDataSourcesCheckValidCreds(req, new BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity() {{
                option1 = new BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption1("suscipit", "molestiae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.checkValidCredsResponse != null) {
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


### [projects](docs/projects/README.md)

* [bigquerydatatransferProjectsLocationsDataSourcesCheckValidCreds](docs/projects/README.md#bigquerydatatransferprojectslocationsdatasourcescheckvalidcreds) - Returns true if valid credentials exist for the given data source and requesting user.
* [bigquerydatatransferProjectsLocationsDataSourcesList](docs/projects/README.md#bigquerydatatransferprojectslocationsdatasourceslist) - Lists supported data sources and returns their settings.
* [bigquerydatatransferProjectsLocationsEnrollDataSources](docs/projects/README.md#bigquerydatatransferprojectslocationsenrolldatasources) - Enroll data sources in a user project. This allows users to create transfer configurations for these data sources. They will also appear in the ListDataSources RPC and as such, will appear in the [BigQuery UI](https://console.cloud.google.com/bigquery), and the documents can be found in the public guide for [BigQuery Web UI](https://cloud.google.com/bigquery/bigquery-web-ui) and [Data Transfer Service](https://cloud.google.com/bigquery/docs/working-with-transfers).
* [bigquerydatatransferProjectsLocationsList](docs/projects/README.md#bigquerydatatransferprojectslocationslist) - Lists information about the supported locations for this service.
* [bigquerydatatransferProjectsTransferConfigsCreate](docs/projects/README.md#bigquerydatatransferprojectstransferconfigscreate) - Creates a new data transfer configuration.
* [bigquerydatatransferProjectsTransferConfigsList](docs/projects/README.md#bigquerydatatransferprojectstransferconfigslist) - Returns information about all transfer configs owned by a project in the specified location.
* [bigquerydatatransferProjectsTransferConfigsPatch](docs/projects/README.md#bigquerydatatransferprojectstransferconfigspatch) - Updates a data transfer configuration. All fields must be set, even if they are not updated.
* [bigquerydatatransferProjectsTransferConfigsRunsDelete](docs/projects/README.md#bigquerydatatransferprojectstransferconfigsrunsdelete) - Deletes the specified transfer run.
* [bigquerydatatransferProjectsTransferConfigsRunsGet](docs/projects/README.md#bigquerydatatransferprojectstransferconfigsrunsget) - Returns information about the particular transfer run.
* [bigquerydatatransferProjectsTransferConfigsRunsList](docs/projects/README.md#bigquerydatatransferprojectstransferconfigsrunslist) - Returns information about running and completed transfer runs.
* [bigquerydatatransferProjectsTransferConfigsRunsTransferLogsList](docs/projects/README.md#bigquerydatatransferprojectstransferconfigsrunstransferlogslist) - Returns log messages for the transfer run.
* [bigquerydatatransferProjectsTransferConfigsScheduleRuns](docs/projects/README.md#bigquerydatatransferprojectstransferconfigsscheduleruns) - Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.
* [bigquerydatatransferProjectsTransferConfigsStartManualRuns](docs/projects/README.md#bigquerydatatransferprojectstransferconfigsstartmanualruns) - Start manual transfer runs to be executed now with schedule_time equal to current time. The transfer runs can be created for a time range where the run_time is between start_time (inclusive) and end_time (exclusive), or for a specific run_time.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
