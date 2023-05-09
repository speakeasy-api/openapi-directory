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
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateRequest;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateResponse;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurity;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption10;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption11;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption1;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption2;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption3;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption4;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption5;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption6;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption7;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption8;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption9;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Application;
import org.openapis.openapi.models.shared.DataSource;
import org.openapis.openapi.models.shared.DataSourceDataQualityStandardEnum;
import org.openapis.openapi.models.shared.DataSourceTypeEnum;
import org.openapis.openapi.models.shared.DataType;
import org.openapis.openapi.models.shared.DataTypeField;
import org.openapis.openapi.models.shared.DataTypeFieldFormatEnum;
import org.openapis.openapi.models.shared.Device;
import org.openapis.openapi.models.shared.DeviceTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FitnessUsersDataSourcesCreateRequest req = new FitnessUsersDataSourcesCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                dataSource = new DataSource() {{
                    application = new Application() {{
                        detailsUrl = "distinctio";
                        name = "Stuart Stiedemann";
                        packageName = "vel";
                        version = "error";
                    }};;
                    dataQualityStandard = new org.openapis.openapi.models.shared.DataSourceDataQualityStandardEnum[]{{
                        add(DataSourceDataQualityStandardEnum.DATA_QUALITY_BLOOD_PRESSURE_AAMI),
                        add(DataSourceDataQualityStandardEnum.DATA_QUALITY_BLOOD_PRESSURE_BHS_AA),
                        add(DataSourceDataQualityStandardEnum.DATA_QUALITY_BLOOD_PRESSURE_ESH2010),
                    }};
                    dataStreamId = "debitis";
                    dataStreamName = "ipsa";
                    dataType = new DataType() {{
                        field = new org.openapis.openapi.models.shared.DataTypeField[]{{
                            add(new DataTypeField() {{
                                format = DataTypeFieldFormatEnum.FLOAT_POINT;
                                name = "Minnie Schiller";
                                optional = false;
                            }}),
                            add(new DataTypeField() {{
                                format = DataTypeFieldFormatEnum.MAP;
                                name = "Charlie Walsh II";
                                optional = false;
                            }}),
                            add(new DataTypeField() {{
                                format = DataTypeFieldFormatEnum.INTEGER;
                                name = "Christopher Hills";
                                optional = false;
                            }}),
                            add(new DataTypeField() {{
                                format = DataTypeFieldFormatEnum.FLOAT_LIST;
                                name = "Teri Strosin";
                                optional = false;
                            }}),
                        }};
                        name = "Forrest Koepp";
                    }};;
                    device = new Device() {{
                        manufacturer = "dolorum";
                        model = "dicta";
                        type = DeviceTypeEnum.SCALE;
                        uid = "officia";
                        version = "occaecati";
                    }};;
                    name = "Cassandra Welch";
                    type = DataSourceTypeEnum.RAW;
                }};;
                accessToken = "commodi";
                alt = AltEnum.MEDIA;
                callback = "modi";
                fields = "qui";
                key = "impedit";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "ipsum";
                uploadProtocol = "excepturi";
            }};            

            FitnessUsersDataSourcesCreateResponse res = sdk.users.fitnessUsersDataSourcesCreate(req, new FitnessUsersDataSourcesCreateSecurity() {{
                option1 = new FitnessUsersDataSourcesCreateSecurityOption1("aspernatur", "perferendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.dataSource != null) {
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


### [users](docs/users/README.md)

* [fitnessUsersDataSourcesCreate](docs/users/README.md#fitnessusersdatasourcescreate) - Creates a new data source that is unique across all data sources belonging to this user. A data source is a unique source of sensor data. Data sources can expose raw data coming from hardware sensors on local or companion devices. They can also expose derived data, created by transforming or merging other data sources. Multiple data sources can exist for the same data type. Every data point in every dataset inserted into or read from the Fitness API has an associated data source. Each data source produces a unique stream of dataset updates, with a unique data source identifier. Not all changes to data source affect the data stream ID, so that data collected by updated versions of the same application/device can still be considered to belong to the same data source. Data sources are identified using a string generated by the server, based on the contents of the source being created. The dataStreamId field should not be set when invoking this method. It will be automatically generated by the server with the correct format. If a dataStreamId is set, it must match the format that the server would generate. This format is a combination of some fields from the data source, and has a specific order. If it doesn't match, the request will fail with an error. Specifying a DataType which is not a known type (beginning with "com.google.") will create a DataSource with a *custom data type*. Custom data types are only readable by the application that created them. Custom data types are *deprecated*; use standard data types instead. In addition to the data source fields included in the data source ID, the developer project number that is authenticated when creating the data source is included. This developer project number is obfuscated when read by any other developer reading public data types.
* [fitnessUsersDataSourcesDataPointChangesList](docs/users/README.md#fitnessusersdatasourcesdatapointchangeslist) - Queries for user's data point changes for a particular data source.
* [fitnessUsersDataSourcesDatasetsDelete](docs/users/README.md#fitnessusersdatasourcesdatasetsdelete) - Performs an inclusive delete of all data points whose start and end times have any overlap with the time range specified by the dataset ID. For most data types, the entire data point will be deleted. For data types where the time span represents a consistent value (such as com.google.activity.segment), and a data point straddles either end point of the dataset, only the overlapping portion of the data point will be deleted.
* [fitnessUsersDataSourcesDatasetsGet](docs/users/README.md#fitnessusersdatasourcesdatasetsget) - Returns a dataset containing all data points whose start and end times overlap with the specified range of the dataset minimum start time and maximum end time. Specifically, any data point whose start time is less than or equal to the dataset end time and whose end time is greater than or equal to the dataset start time.
* [fitnessUsersDataSourcesDatasetsPatch](docs/users/README.md#fitnessusersdatasourcesdatasetspatch) - Adds data points to a dataset. The dataset need not be previously created. All points within the given dataset will be returned with subsquent calls to retrieve this dataset. Data points can belong to more than one dataset. This method does not use patch semantics: the data points provided are merely inserted, with no existing data replaced.
* [fitnessUsersDataSourcesDelete](docs/users/README.md#fitnessusersdatasourcesdelete) - Deletes the specified data source. The request will fail if the data source contains any data points.
* [fitnessUsersDataSourcesGet](docs/users/README.md#fitnessusersdatasourcesget) - Returns the specified data source.
* [fitnessUsersDataSourcesList](docs/users/README.md#fitnessusersdatasourceslist) - Lists all data sources that are visible to the developer, using the OAuth scopes provided. The list is not exhaustive; the user may have private data sources that are only visible to other developers, or calls using other scopes.
* [fitnessUsersDataSourcesUpdate](docs/users/README.md#fitnessusersdatasourcesupdate) - Updates the specified data source. The dataStreamId, dataType, type, dataStreamName, and device properties with the exception of version, cannot be modified. Data sources are identified by their dataStreamId.
* [fitnessUsersDatasetAggregate](docs/users/README.md#fitnessusersdatasetaggregate) - Aggregates data of a certain type or stream into buckets divided by a given type of boundary. Multiple data sets of multiple types and from multiple sources can be aggregated into exactly one bucket type per request.
* [fitnessUsersSessionsDelete](docs/users/README.md#fitnessuserssessionsdelete) - Deletes a session specified by the given session ID.
* [fitnessUsersSessionsList](docs/users/README.md#fitnessuserssessionslist) - Lists sessions previously created.
* [fitnessUsersSessionsUpdate](docs/users/README.md#fitnessuserssessionsupdate) - Updates or insert a given session.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
