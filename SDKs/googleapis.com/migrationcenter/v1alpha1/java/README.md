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

import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsAssetsAggregateValuesSecurity;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsAssetsAggregateValuesPathParams;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsAssetsAggregateValuesQueryParams;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsAssetsAggregateValuesRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsAssetsAggregateValuesResponse;
import org.openapis.openapi.models.shared.AggregateAssetsValuesRequest;
import org.openapis.openapi.models.shared.Aggregation;
import org.openapis.openapi.models.shared.AggregationHistogram;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsAssetsAggregateValuesRequest req = new MigrationcenterProjectsLocationsAssetsAggregateValuesRequest() {{
                security = new MigrationcenterProjectsLocationsAssetsAggregateValuesSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new MigrationcenterProjectsLocationsAssetsAggregateValuesPathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new MigrationcenterProjectsLocationsAssetsAggregateValuesQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new AggregateAssetsValuesRequest() {{
                    aggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                        add(new Aggregation() {{
                            count = new java.util.HashMap<String, Object>() {{
                                put("magnam", "debitis");
                                put("ipsa", "delectus");
                            }};
                            field = "tempora";
                            frequency = new java.util.HashMap<String, Object>() {{
                                put("molestiae", "minus");
                                put("placeat", "voluptatum");
                            }};
                            histogram = new AggregationHistogram() {{
                                lowerBounds = new Double[]{{
                                    add(5680.45),
                                    add(3927.85),
                                }};
                            }};
                            sum = new java.util.HashMap<String, Object>() {{
                                put("temporibus", "ab");
                                put("quis", "veritatis");
                                put("deserunt", "perferendis");
                                put("ipsam", "repellendus");
                            }};
                        }}),
                        add(new Aggregation() {{
                            count = new java.util.HashMap<String, Object>() {{
                                put("quo", "odit");
                                put("at", "at");
                                put("maiores", "molestiae");
                                put("quod", "quod");
                            }};
                            field = "esse";
                            frequency = new java.util.HashMap<String, Object>() {{
                                put("porro", "dolorum");
                                put("dicta", "nam");
                                put("officia", "occaecati");
                            }};
                            histogram = new AggregationHistogram() {{
                                lowerBounds = new Double[]{{
                                    add(5373.73),
                                }};
                            }};
                            sum = new java.util.HashMap<String, Object>() {{
                                put("optio", "totam");
                                put("beatae", "commodi");
                                put("molestiae", "modi");
                                put("qui", "impedit");
                            }};
                        }}),
                    }};
                    filter = "cum";
                }};
            }};            

            MigrationcenterProjectsLocationsAssetsAggregateValuesResponse res = sdk.projects.migrationcenterProjectsLocationsAssetsAggregateValues(req);

            if (res.aggregateAssetsValuesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### projects

* `migrationcenterProjectsLocationsAssetsAggregateValues` - Aggregates the requested fields based on provided function.
* `migrationcenterProjectsLocationsAssetsBatchDelete` - Deletes list of Assets.
* `migrationcenterProjectsLocationsAssetsBatchUpdate` - Updates the parameters of a list of assets.
* `migrationcenterProjectsLocationsAssetsList` - Lists all the assets in a given project and location.
* `migrationcenterProjectsLocationsAssetsReportAssetFrames` - Reports a set of frames.
* `migrationcenterProjectsLocationsGroupsAddAssets` - Adds assets to a group.
* `migrationcenterProjectsLocationsGroupsCreate` - Creates a new group in a given project and location.
* `migrationcenterProjectsLocationsGroupsList` - Lists all groups in a given project and location.
* `migrationcenterProjectsLocationsGroupsRemoveAssets` - Removes assets from a group.
* `migrationcenterProjectsLocationsImportJobsCreate` - Creates an import job.
* `migrationcenterProjectsLocationsImportJobsImportDataFilesCreate` - Creates an import data file.
* `migrationcenterProjectsLocationsImportJobsImportDataFilesList` - List import data files.
* `migrationcenterProjectsLocationsImportJobsList` - Lists all import jobs.
* `migrationcenterProjectsLocationsImportJobsRun` - Runs an import job.
* `migrationcenterProjectsLocationsImportJobsValidate` - Validates an import job.
* `migrationcenterProjectsLocationsList` - Lists information about the supported locations for this service.
* `migrationcenterProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `migrationcenterProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `migrationcenterProjectsLocationsPreferenceSetsCreate` - Creates a new preference set in a given project and location.
* `migrationcenterProjectsLocationsPreferenceSetsList` - Lists all the preference sets in a given project and location.
* `migrationcenterProjectsLocationsSourcesCreate` - Creates a new source in a given project and location.
* `migrationcenterProjectsLocationsSourcesDelete` - Deletes a source.
* `migrationcenterProjectsLocationsSourcesGet` - Gets the details of a source.
* `migrationcenterProjectsLocationsSourcesList` - Lists all the sources in a given project and location.
* `migrationcenterProjectsLocationsSourcesPatch` - Updates the parameters of a source.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
