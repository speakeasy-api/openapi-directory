# projects

### Available Operations

* [dataplexProjectsLocationsDataAttributeBindingsCreate](#dataplexprojectslocationsdataattributebindingscreate) - Create a DataAttributeBinding resource.
* [dataplexProjectsLocationsDataAttributeBindingsList](#dataplexprojectslocationsdataattributebindingslist) - Lists DataAttributeBinding resources in a project and location.
* [dataplexProjectsLocationsDataScansCreate](#dataplexprojectslocationsdatascanscreate) - Creates a DataScan resource.
* [dataplexProjectsLocationsDataScansList](#dataplexprojectslocationsdatascanslist) - Lists DataScans.
* [dataplexProjectsLocationsDataTaxonomiesAttributesCreate](#dataplexprojectslocationsdatataxonomiesattributescreate) - Create a DataAttribute resource.
* [dataplexProjectsLocationsDataTaxonomiesAttributesList](#dataplexprojectslocationsdatataxonomiesattributeslist) - Lists Data Attribute resources in a DataTaxonomy.
* [dataplexProjectsLocationsDataTaxonomiesCreate](#dataplexprojectslocationsdatataxonomiescreate) - Create a DataTaxonomy resource.
* [dataplexProjectsLocationsDataTaxonomiesList](#dataplexprojectslocationsdatataxonomieslist) - Lists DataTaxonomy resources in a project and location.
* [dataplexProjectsLocationsLakesContentCreate](#dataplexprojectslocationslakescontentcreate) - Create a content.
* [dataplexProjectsLocationsLakesContentList](#dataplexprojectslocationslakescontentlist) - List content.
* [dataplexProjectsLocationsLakesContentitemsCreate](#dataplexprojectslocationslakescontentitemscreate) - Create a content.
* [dataplexProjectsLocationsLakesContentitemsList](#dataplexprojectslocationslakescontentitemslist) - List content.
* [dataplexProjectsLocationsLakesCreate](#dataplexprojectslocationslakescreate) - Creates a lake resource.
* [dataplexProjectsLocationsLakesEnvironmentsCreate](#dataplexprojectslocationslakesenvironmentscreate) - Create an environment resource.
* [dataplexProjectsLocationsLakesEnvironmentsList](#dataplexprojectslocationslakesenvironmentslist) - Lists environments under the given lake.
* [dataplexProjectsLocationsLakesEnvironmentsSessionsList](#dataplexprojectslocationslakesenvironmentssessionslist) - Lists session resources in an environment.
* [dataplexProjectsLocationsLakesList](#dataplexprojectslocationslakeslist) - Lists lake resources in a project and location.
* [dataplexProjectsLocationsLakesTasksCreate](#dataplexprojectslocationslakestaskscreate) - Creates a task resource within a lake.
* [dataplexProjectsLocationsLakesTasksJobsList](#dataplexprojectslocationslakestasksjobslist) - Lists Jobs under the given task.
* [dataplexProjectsLocationsLakesTasksList](#dataplexprojectslocationslakestaskslist) - Lists tasks under the given lake.
* [dataplexProjectsLocationsLakesTasksRun](#dataplexprojectslocationslakestasksrun) - Run an on demand execution of a Task.
* [dataplexProjectsLocationsLakesZonesAssetsActionsList](#dataplexprojectslocationslakeszonesassetsactionslist) - Lists action resources in an asset.
* [dataplexProjectsLocationsLakesZonesAssetsCreate](#dataplexprojectslocationslakeszonesassetscreate) - Creates an asset resource.
* [dataplexProjectsLocationsLakesZonesAssetsGetIamPolicy](#dataplexprojectslocationslakeszonesassetsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [dataplexProjectsLocationsLakesZonesAssetsList](#dataplexprojectslocationslakeszonesassetslist) - Lists asset resources in a zone.
* [dataplexProjectsLocationsLakesZonesAssetsPatch](#dataplexprojectslocationslakeszonesassetspatch) - Updates an asset resource.
* [dataplexProjectsLocationsLakesZonesAssetsSetIamPolicy](#dataplexprojectslocationslakeszonesassetssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* [dataplexProjectsLocationsLakesZonesAssetsTestIamPermissions](#dataplexprojectslocationslakeszonesassetstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [dataplexProjectsLocationsLakesZonesCreate](#dataplexprojectslocationslakeszonescreate) - Creates a zone resource within a lake.
* [dataplexProjectsLocationsLakesZonesEntitiesCreate](#dataplexprojectslocationslakeszonesentitiescreate) - Create a metadata entity.
* [dataplexProjectsLocationsLakesZonesEntitiesList](#dataplexprojectslocationslakeszonesentitieslist) - List metadata entities in a zone.
* [dataplexProjectsLocationsLakesZonesEntitiesPartitionsCreate](#dataplexprojectslocationslakeszonesentitiespartitionscreate) - Create a metadata partition.
* [dataplexProjectsLocationsLakesZonesEntitiesPartitionsList](#dataplexprojectslocationslakeszonesentitiespartitionslist) - List metadata partitions of an entity.
* [dataplexProjectsLocationsLakesZonesEntitiesUpdate](#dataplexprojectslocationslakeszonesentitiesupdate) - Update a metadata entity. Only supports full resource update.
* [dataplexProjectsLocationsLakesZonesList](#dataplexprojectslocationslakeszoneslist) - Lists zone resources in a lake.
* [dataplexProjectsLocationsList](#dataplexprojectslocationslist) - Lists information about the supported locations for this service.
* [dataplexProjectsLocationsOperationsCancel](#dataplexprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* [dataplexProjectsLocationsOperationsDelete](#dataplexprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
* [dataplexProjectsLocationsOperationsGet](#dataplexprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [dataplexProjectsLocationsOperationsList](#dataplexprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

## dataplexProjectsLocationsDataAttributeBindingsCreate

Create a DataAttributeBinding resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataAttributeBindingsCreateRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataAttributeBindingsCreateResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataAttributeBindingsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataAttributeBindingInput;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataAttributeBindingPath;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsDataAttributeBindingsCreateRequest req = new DataplexProjectsLocationsDataAttributeBindingsCreateRequest("ipsum") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDataplexV1DataAttributeBindingInput = new GoogleCloudDataplexV1DataAttributeBindingInput() {{
                    attributes = new String[]{{
                        add("perferendis"),
                    }};
                    description = "ad";
                    displayName = "natus";
                    etag = "sed";
                    labels = new java.util.HashMap<String, String>() {{
                        put("dolor", "natus");
                        put("laboriosam", "hic");
                        put("saepe", "fuga");
                    }};
                    paths = new org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataAttributeBindingPath[]{{
                        add(new GoogleCloudDataplexV1DataAttributeBindingPath() {{
                            attributes = new String[]{{
                                add("iste"),
                                add("iure"),
                            }};
                            name = "Dr. Rickey Boyle";
                        }}),
                        add(new GoogleCloudDataplexV1DataAttributeBindingPath() {{
                            attributes = new String[]{{
                                add("laborum"),
                                add("dolores"),
                                add("dolorem"),
                            }};
                            name = "Rose Rolfson";
                        }}),
                    }};
                    resource = "nemo";
                }};;
                accessToken = "minima";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                dataAttributeBindingId = "iure";
                fields = "culpa";
                key = "doloribus";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "mollitia";
                uploadProtocol = "dolorem";
                validateOnly = false;
            }};            

            DataplexProjectsLocationsDataAttributeBindingsCreateResponse res = sdk.projects.dataplexProjectsLocationsDataAttributeBindingsCreate(req, new DataplexProjectsLocationsDataAttributeBindingsCreateSecurity("culpa", "consequuntur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsDataAttributeBindingsList

Lists DataAttributeBinding resources in a project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataAttributeBindingsListRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataAttributeBindingsListResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataAttributeBindingsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsDataAttributeBindingsListRequest req = new DataplexProjectsLocationsDataAttributeBindingsListRequest("repellat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "commodi";
                fields = "quam";
                filter = "molestiae";
                key = "velit";
                oauthToken = "error";
                orderBy = "quia";
                pageSize = 338007L;
                pageToken = "vitae";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "animi";
                uploadProtocol = "enim";
            }};            

            DataplexProjectsLocationsDataAttributeBindingsListResponse res = sdk.projects.dataplexProjectsLocationsDataAttributeBindingsList(req, new DataplexProjectsLocationsDataAttributeBindingsListSecurity("odit", "quo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDataplexV1ListDataAttributeBindingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsDataScansCreate

Creates a DataScan resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataScansCreateRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataScansCreateResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataScansCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataProfileResult;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataProfileResultProfile;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataProfileResultProfileField;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataProfileSpec;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataQualityDimensionResult;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataQualityResult;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataQualityRule;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataQualityRuleRangeExpectation;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataQualityRuleRegexExpectation;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataQualityRuleResult;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataQualityRuleSetExpectation;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataQualitySpec;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataScanExecutionSpec;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataScanExecutionStatus;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataScanInput;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataSource;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1ScannedData;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1ScannedDataIncrementalField;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1Trigger;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1TriggerSchedule;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsDataScansCreateRequest req = new DataplexProjectsLocationsDataScansCreateRequest("sequi") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDataplexV1DataScanInput = new GoogleCloudDataplexV1DataScanInput() {{
                    data = new GoogleCloudDataplexV1DataSource() {{
                        entity = "ipsam";
                        resource = "id";
                    }};;
                    dataProfileResult = new GoogleCloudDataplexV1DataProfileResult() {{
                        profile = new GoogleCloudDataplexV1DataProfileResultProfile() {{
                            fields = new org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataProfileResultProfileField[]{{
                                add(new GoogleCloudDataplexV1DataProfileResultProfileField() {{
                                    mode = "aut";
                                    name = "Sabrina Smitham DVM";
                                    profile = new GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo() {{
                                        distinctRatio = 9764.6;
                                        doubleProfile = new GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo() {{
                                            average = 8781.94;
                                            max = 4686.51;
                                            min = 5096.24;
                                            quartiles = new Double[]{{
                                                add(557.14),
                                                add(6048.46),
                                                add(4511.59),
                                                add(7392.64),
                                            }};
                                            standardDeviation = 199.87;
                                        }};
                                        integerProfile = new GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo() {{
                                            average = 391.87;
                                            max = "reprehenderit";
                                            min = "ut";
                                            quartiles = new String[]{{
                                                add("dicta"),
                                                add("corporis"),
                                                add("dolore"),
                                                add("iusto"),
                                            }};
                                            standardDeviation = 1187.27;
                                        }};
                                        nullRatio = 6886.61;
                                        stringProfile = new GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo() {{
                                            averageLength = 3179.83;
                                            maxLength = "accusamus";
                                            minLength = "commodi";
                                        }};
                                        topNValues = new org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue[]{{
                                            add(new GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue() {{
                                                count = "quae";
                                                value = "ipsum";
                                            }}),
                                            add(new GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue() {{
                                                count = "quidem";
                                                value = "molestias";
                                            }}),
                                            add(new GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue() {{
                                                count = "excepturi";
                                                value = "pariatur";
                                            }}),
                                            add(new GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue() {{
                                                count = "modi";
                                                value = "praesentium";
                                            }}),
                                        }};
                                    }};
                                    type = "rem";
                                }}),
                                add(new GoogleCloudDataplexV1DataProfileResultProfileField() {{
                                    mode = "voluptates";
                                    name = "Dr. Casey Mayer";
                                    profile = new GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo() {{
                                        distinctRatio = 3185.69;
                                        doubleProfile = new GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo() {{
                                            average = 93.56;
                                            max = 6674.11;
                                            min = 8423.42;
                                            quartiles = new Double[]{{
                                                add(6471.74),
                                            }};
                                            standardDeviation = 7163.27;
                                        }};
                                        integerProfile = new GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo() {{
                                            average = 8413.86;
                                            max = "labore";
                                            min = "modi";
                                            quartiles = new String[]{{
                                                add("aliquid"),
                                            }};
                                            standardDeviation = 5865.13;
                                        }};
                                        nullRatio = 5528.22;
                                        stringProfile = new GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo() {{
                                            averageLength = 201.07;
                                            maxLength = "magni";
                                            minLength = "assumenda";
                                        }};
                                        topNValues = new org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue[]{{
                                            add(new GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue() {{
                                                count = "alias";
                                                value = "fugit";
                                            }}),
                                            add(new GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue() {{
                                                count = "dolorum";
                                                value = "excepturi";
                                            }}),
                                        }};
                                    }};
                                    type = "tempora";
                                }}),
                                add(new GoogleCloudDataplexV1DataProfileResultProfileField() {{
                                    mode = "facilis";
                                    name = "Francisco Windler";
                                    profile = new GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo() {{
                                        distinctRatio = 7561.07;
                                        doubleProfile = new GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo() {{
                                            average = 5761.57;
                                            max = 3960.98;
                                            min = 5920.42;
                                            quartiles = new Double[]{{
                                                add(5722.52),
                                                add(6389.21),
                                                add(2230.81),
                                                add(8915.55),
                                            }};
                                            standardDeviation = 9527.49;
                                        }};
                                        integerProfile = new GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo() {{
                                            average = 6800.56;
                                            max = "in";
                                            min = "in";
                                            quartiles = new String[]{{
                                                add("maiores"),
                                                add("rerum"),
                                                add("dicta"),
                                                add("magnam"),
                                            }};
                                            standardDeviation = 7670.24;
                                        }};
                                        nullRatio = 8137.98;
                                        stringProfile = new GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo() {{
                                            averageLength = 4118.2;
                                            maxLength = "aliquid";
                                            minLength = "laborum";
                                        }};
                                        topNValues = new org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue[]{{
                                            add(new GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue() {{
                                                count = "non";
                                                value = "occaecati";
                                            }}),
                                            add(new GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue() {{
                                                count = "enim";
                                                value = "accusamus";
                                            }}),
                                            add(new GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue() {{
                                                count = "delectus";
                                                value = "quidem";
                                            }}),
                                            add(new GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue() {{
                                                count = "provident";
                                                value = "nam";
                                            }}),
                                        }};
                                    }};
                                    type = "id";
                                }}),
                                add(new GoogleCloudDataplexV1DataProfileResultProfileField() {{
                                    mode = "blanditiis";
                                    name = "Timmy Feeney";
                                    profile = new GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo() {{
                                        distinctRatio = 4238.55;
                                        doubleProfile = new GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo() {{
                                            average = 6188.09;
                                            max = 6063.93;
                                            min = 4748.67;
                                            quartiles = new Double[]{{
                                                add(4701.32),
                                            }};
                                            standardDeviation = 3015.75;
                                        }};
                                        integerProfile = new GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo() {{
                                            average = 7160.75;
                                            max = "id";
                                            min = "labore";
                                            quartiles = new String[]{{
                                                add("suscipit"),
                                                add("natus"),
                                            }};
                                            standardDeviation = 7491.7;
                                        }};
                                        nullRatio = 4287.69;
                                        stringProfile = new GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo() {{
                                            averageLength = 8784.53;
                                            maxLength = "aspernatur";
                                            minLength = "architecto";
                                        }};
                                        topNValues = new org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue[]{{
                                            add(new GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue() {{
                                                count = "et";
                                                value = "excepturi";
                                            }}),
                                            add(new GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue() {{
                                                count = "ullam";
                                                value = "provident";
                                            }}),
                                        }};
                                    }};
                                    type = "quos";
                                }}),
                            }};
                        }};;
                        rowCount = "sint";
                        scannedData = new GoogleCloudDataplexV1ScannedData() {{
                            incrementalField = new GoogleCloudDataplexV1ScannedDataIncrementalField() {{
                                end = "accusantium";
                                field = "mollitia";
                                start = "reiciendis";
                            }};;
                        }};;
                    }};;
                    dataProfileSpec = new GoogleCloudDataplexV1DataProfileSpec() {{
                        rowFilter = "mollitia";
                        samplingPercent = 3209.97;
                    }};;
                    dataQualityResult = new GoogleCloudDataplexV1DataQualityResult() {{
                        dimensions = new org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataQualityDimensionResult[]{{
                            add(new GoogleCloudDataplexV1DataQualityDimensionResult() {{
                                passed = false;
                            }}),
                            add(new GoogleCloudDataplexV1DataQualityDimensionResult() {{
                                passed = false;
                            }}),
                        }};
                        passed = false;
                        rowCount = "dolor";
                        rules = new org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataQualityRuleResult[]{{
                            add(new GoogleCloudDataplexV1DataQualityRuleResult() {{
                                evaluatedCount = "odit";
                                failingRowsQuery = "nemo";
                                nullCount = "quasi";
                                passRatio = 4358.65;
                                passed = false;
                                passedCount = "doloribus";
                                rule = new GoogleCloudDataplexV1DataQualityRule() {{
                                    column = "debitis";
                                    dimension = "eius";
                                    ignoreNull = false;
                                    nonNullExpectation = new java.util.HashMap<String, Object>() {{
                                        put("deleniti", "facilis");
                                        put("in", "architecto");
                                        put("architecto", "repudiandae");
                                        put("ullam", "expedita");
                                    }};
                                    rangeExpectation = new GoogleCloudDataplexV1DataQualityRuleRangeExpectation() {{
                                        maxValue = "nihil";
                                        minValue = "repellat";
                                        strictMaxEnabled = false;
                                        strictMinEnabled = false;
                                    }};
                                    regexExpectation = new GoogleCloudDataplexV1DataQualityRuleRegexExpectation() {{
                                        regex = "quibusdam";
                                    }};
                                    rowConditionExpectation = new GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation() {{
                                        sqlExpression = "sed";
                                    }};
                                    setExpectation = new GoogleCloudDataplexV1DataQualityRuleSetExpectation() {{
                                        values = new String[]{{
                                            add("pariatur"),
                                            add("accusantium"),
                                            add("consequuntur"),
                                            add("praesentium"),
                                        }};
                                    }};
                                    statisticRangeExpectation = new GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation() {{
                                        maxValue = "natus";
                                        minValue = "magni";
                                        statistic = GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnum.STATISTIC_UNDEFINED;
                                        strictMaxEnabled = false;
                                        strictMinEnabled = false;
                                    }};
                                    tableConditionExpectation = new GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation() {{
                                        sqlExpression = "quo";
                                    }};
                                    threshold = 8480.09;
                                    uniquenessExpectation = new java.util.HashMap<String, Object>() {{
                                        put("maxime", "ea");
                                        put("excepturi", "odit");
                                        put("ea", "accusantium");
                                        put("ab", "maiores");
                                    }};
                                }};
                            }}),
                            add(new GoogleCloudDataplexV1DataQualityRuleResult() {{
                                evaluatedCount = "quidem";
                                failingRowsQuery = "ipsam";
                                nullCount = "voluptate";
                                passRatio = 4200.75;
                                passed = false;
                                passedCount = "nam";
                                rule = new GoogleCloudDataplexV1DataQualityRule() {{
                                    column = "eaque";
                                    dimension = "pariatur";
                                    ignoreNull = false;
                                    nonNullExpectation = new java.util.HashMap<String, Object>() {{
                                        put("voluptatibus", "perferendis");
                                        put("fugiat", "amet");
                                    }};
                                    rangeExpectation = new GoogleCloudDataplexV1DataQualityRuleRangeExpectation() {{
                                        maxValue = "aut";
                                        minValue = "cumque";
                                        strictMaxEnabled = false;
                                        strictMinEnabled = false;
                                    }};
                                    regexExpectation = new GoogleCloudDataplexV1DataQualityRuleRegexExpectation() {{
                                        regex = "corporis";
                                    }};
                                    rowConditionExpectation = new GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation() {{
                                        sqlExpression = "hic";
                                    }};
                                    setExpectation = new GoogleCloudDataplexV1DataQualityRuleSetExpectation() {{
                                        values = new String[]{{
                                            add("nobis"),
                                            add("dolores"),
                                            add("quis"),
                                        }};
                                    }};
                                    statisticRangeExpectation = new GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation() {{
                                        maxValue = "totam";
                                        minValue = "dignissimos";
                                        statistic = GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnum.STATISTIC_UNDEFINED;
                                        strictMaxEnabled = false;
                                        strictMinEnabled = false;
                                    }};
                                    tableConditionExpectation = new GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation() {{
                                        sqlExpression = "quis";
                                    }};
                                    threshold = 1999.96;
                                    uniquenessExpectation = new java.util.HashMap<String, Object>() {{
                                        put("perferendis", "dolores");
                                    }};
                                }};
                            }}),
                            add(new GoogleCloudDataplexV1DataQualityRuleResult() {{
                                evaluatedCount = "minus";
                                failingRowsQuery = "quam";
                                nullCount = "dolor";
                                passRatio = 8745.73;
                                passed = false;
                                passedCount = "nostrum";
                                rule = new GoogleCloudDataplexV1DataQualityRule() {{
                                    column = "hic";
                                    dimension = "recusandae";
                                    ignoreNull = false;
                                    nonNullExpectation = new java.util.HashMap<String, Object>() {{
                                        put("facilis", "perspiciatis");
                                        put("voluptatem", "porro");
                                        put("consequuntur", "blanditiis");
                                    }};
                                    rangeExpectation = new GoogleCloudDataplexV1DataQualityRuleRangeExpectation() {{
                                        maxValue = "error";
                                        minValue = "eaque";
                                        strictMaxEnabled = false;
                                        strictMinEnabled = false;
                                    }};
                                    regexExpectation = new GoogleCloudDataplexV1DataQualityRuleRegexExpectation() {{
                                        regex = "occaecati";
                                    }};
                                    rowConditionExpectation = new GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation() {{
                                        sqlExpression = "rerum";
                                    }};
                                    setExpectation = new GoogleCloudDataplexV1DataQualityRuleSetExpectation() {{
                                        values = new String[]{{
                                            add("asperiores"),
                                        }};
                                    }};
                                    statisticRangeExpectation = new GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation() {{
                                        maxValue = "earum";
                                        minValue = "modi";
                                        statistic = GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnum.MIN;
                                        strictMaxEnabled = false;
                                        strictMinEnabled = false;
                                    }};
                                    tableConditionExpectation = new GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation() {{
                                        sqlExpression = "dolorum";
                                    }};
                                    threshold = 5356.33;
                                    uniquenessExpectation = new java.util.HashMap<String, Object>() {{
                                        put("provident", "nobis");
                                        put("libero", "delectus");
                                        put("quaerat", "quos");
                                        put("aliquid", "dolorem");
                                    }};
                                }};
                            }}),
                            add(new GoogleCloudDataplexV1DataQualityRuleResult() {{
                                evaluatedCount = "dolorem";
                                failingRowsQuery = "dolor";
                                nullCount = "qui";
                                passRatio = 2187.49;
                                passed = false;
                                passedCount = "hic";
                                rule = new GoogleCloudDataplexV1DataQualityRule() {{
                                    column = "excepturi";
                                    dimension = "cum";
                                    ignoreNull = false;
                                    nonNullExpectation = new java.util.HashMap<String, Object>() {{
                                        put("dignissimos", "reiciendis");
                                        put("amet", "dolorum");
                                    }};
                                    rangeExpectation = new GoogleCloudDataplexV1DataQualityRuleRangeExpectation() {{
                                        maxValue = "numquam";
                                        minValue = "veritatis";
                                        strictMaxEnabled = false;
                                        strictMinEnabled = false;
                                    }};
                                    regexExpectation = new GoogleCloudDataplexV1DataQualityRuleRegexExpectation() {{
                                        regex = "ipsa";
                                    }};
                                    rowConditionExpectation = new GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation() {{
                                        sqlExpression = "ipsa";
                                    }};
                                    setExpectation = new GoogleCloudDataplexV1DataQualityRuleSetExpectation() {{
                                        values = new String[]{{
                                            add("odio"),
                                            add("quaerat"),
                                        }};
                                    }};
                                    statisticRangeExpectation = new GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation() {{
                                        maxValue = "accusamus";
                                        minValue = "quidem";
                                        statistic = GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnum.MAX;
                                        strictMaxEnabled = false;
                                        strictMinEnabled = false;
                                    }};
                                    tableConditionExpectation = new GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation() {{
                                        sqlExpression = "voluptas";
                                    }};
                                    threshold = 6176.58;
                                    uniquenessExpectation = new java.util.HashMap<String, Object>() {{
                                        put("atque", "sit");
                                    }};
                                }};
                            }}),
                        }};
                        scannedData = new GoogleCloudDataplexV1ScannedData() {{
                            incrementalField = new GoogleCloudDataplexV1ScannedDataIncrementalField() {{
                                end = "fugiat";
                                field = "ab";
                                start = "soluta";
                            }};;
                        }};;
                    }};;
                    dataQualitySpec = new GoogleCloudDataplexV1DataQualitySpec() {{
                        rowFilter = "dolorum";
                        rules = new org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataQualityRule[]{{
                            add(new GoogleCloudDataplexV1DataQualityRule() {{
                                column = "voluptate";
                                dimension = "dolorum";
                                ignoreNull = false;
                                nonNullExpectation = new java.util.HashMap<String, Object>() {{
                                    put("omnis", "necessitatibus");
                                    put("distinctio", "asperiores");
                                    put("nihil", "ipsum");
                                }};
                                rangeExpectation = new GoogleCloudDataplexV1DataQualityRuleRangeExpectation() {{
                                    maxValue = "voluptate";
                                    minValue = "id";
                                    strictMaxEnabled = false;
                                    strictMinEnabled = false;
                                }};
                                regexExpectation = new GoogleCloudDataplexV1DataQualityRuleRegexExpectation() {{
                                    regex = "saepe";
                                }};
                                rowConditionExpectation = new GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation() {{
                                    sqlExpression = "eius";
                                }};
                                setExpectation = new GoogleCloudDataplexV1DataQualityRuleSetExpectation() {{
                                    values = new String[]{{
                                        add("perferendis"),
                                    }};
                                }};
                                statisticRangeExpectation = new GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation() {{
                                    maxValue = "amet";
                                    minValue = "optio";
                                    statistic = GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnum.MAX;
                                    strictMaxEnabled = false;
                                    strictMinEnabled = false;
                                }};
                                tableConditionExpectation = new GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation() {{
                                    sqlExpression = "ad";
                                }};
                                threshold = 9044.25;
                                uniquenessExpectation = new java.util.HashMap<String, Object>() {{
                                    put("deserunt", "provident");
                                    put("minima", "repellendus");
                                }};
                            }}),
                            add(new GoogleCloudDataplexV1DataQualityRule() {{
                                column = "totam";
                                dimension = "similique";
                                ignoreNull = false;
                                nonNullExpectation = new java.util.HashMap<String, Object>() {{
                                    put("at", "quaerat");
                                }};
                                rangeExpectation = new GoogleCloudDataplexV1DataQualityRuleRangeExpectation() {{
                                    maxValue = "tempora";
                                    minValue = "vel";
                                    strictMaxEnabled = false;
                                    strictMinEnabled = false;
                                }};
                                regexExpectation = new GoogleCloudDataplexV1DataQualityRuleRegexExpectation() {{
                                    regex = "quod";
                                }};
                                rowConditionExpectation = new GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation() {{
                                    sqlExpression = "officiis";
                                }};
                                setExpectation = new GoogleCloudDataplexV1DataQualityRuleSetExpectation() {{
                                    values = new String[]{{
                                        add("dolorum"),
                                    }};
                                }};
                                statisticRangeExpectation = new GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation() {{
                                    maxValue = "a";
                                    minValue = "esse";
                                    statistic = GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnum.MIN;
                                    strictMaxEnabled = false;
                                    strictMinEnabled = false;
                                }};
                                tableConditionExpectation = new GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation() {{
                                    sqlExpression = "iusto";
                                }};
                                threshold = 2155.07;
                                uniquenessExpectation = new java.util.HashMap<String, Object>() {{
                                    put("tenetur", "amet");
                                    put("tempore", "accusamus");
                                    put("numquam", "enim");
                                    put("dolorem", "sapiente");
                                }};
                            }}),
                        }};
                        samplingPercent = 5182.01;
                    }};;
                    description = "nihil";
                    displayName = "sit";
                    executionSpec = new GoogleCloudDataplexV1DataScanExecutionSpec() {{
                        field = "expedita";
                        trigger = new GoogleCloudDataplexV1Trigger() {{
                            onDemand = new java.util.HashMap<String, Object>() {{
                                put("sed", "vel");
                            }};
                            schedule = new GoogleCloudDataplexV1TriggerSchedule() {{
                                cron = "libero";
                            }};;
                        }};;
                    }};;
                    executionStatus = new GoogleCloudDataplexV1DataScanExecutionStatus() {{
                        latestJobEndTime = "voluptas";
                        latestJobStartTime = "deserunt";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("ipsum", "incidunt");
                        put("qui", "cupiditate");
                    }};
                }};;
                accessToken = "maxime";
                alt = AltEnum.PROTO;
                callback = "soluta";
                dataScanId = "dicta";
                fields = "laborum";
                key = "totam";
                oauthToken = "incidunt";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "dolores";
                uploadProtocol = "distinctio";
                validateOnly = false;
            }};            

            DataplexProjectsLocationsDataScansCreateResponse res = sdk.projects.dataplexProjectsLocationsDataScansCreate(req, new DataplexProjectsLocationsDataScansCreateSecurity("facilis", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsDataScansList

Lists DataScans.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataScansListRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataScansListResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataScansListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsDataScansListRequest req = new DataplexProjectsLocationsDataScansListRequest("quam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "temporibus";
                alt = AltEnum.JSON;
                callback = "neque";
                fields = "fugit";
                filter = "magni";
                key = "odio";
                oauthToken = "sunt";
                orderBy = "ullam";
                pageSize = 722081L;
                pageToken = "hic";
                prettyPrint = false;
                quotaUser = "voluptatem";
                uploadType = "cumque";
                uploadProtocol = "soluta";
            }};            

            DataplexProjectsLocationsDataScansListResponse res = sdk.projects.dataplexProjectsLocationsDataScansList(req, new DataplexProjectsLocationsDataScansListSecurity("nobis", "et") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDataplexV1ListDataScansResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsDataTaxonomiesAttributesCreate

Create a DataAttribute resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataTaxonomiesAttributesCreateRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataTaxonomiesAttributesCreateResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataTaxonomiesAttributesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataAccessSpec;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataAttributeInput;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1ResourceAccessSpec;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsDataTaxonomiesAttributesCreateRequest req = new DataplexProjectsLocationsDataTaxonomiesAttributesCreateRequest("saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDataplexV1DataAttributeInput = new GoogleCloudDataplexV1DataAttributeInput() {{
                    dataAccessSpec = new GoogleCloudDataplexV1DataAccessSpec() {{
                        readers = new String[]{{
                            add("nobis"),
                        }};
                    }};;
                    description = "quos";
                    displayName = "tempore";
                    etag = "cupiditate";
                    labels = new java.util.HashMap<String, String>() {{
                        put("delectus", "dolorem");
                    }};
                    parentId = "dolore";
                    resourceAccessSpec = new GoogleCloudDataplexV1ResourceAccessSpec() {{
                        owners = new String[]{{
                            add("adipisci"),
                            add("dolorum"),
                        }};
                        readers = new String[]{{
                            add("quae"),
                        }};
                        writers = new String[]{{
                            add("quas"),
                        }};
                    }};;
                }};;
                accessToken = "itaque";
                alt = AltEnum.JSON;
                callback = "est";
                dataAttributeId = "repellendus";
                fields = "porro";
                key = "doloribus";
                oauthToken = "ut";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "cupiditate";
                uploadProtocol = "qui";
                validateOnly = false;
            }};            

            DataplexProjectsLocationsDataTaxonomiesAttributesCreateResponse res = sdk.projects.dataplexProjectsLocationsDataTaxonomiesAttributesCreate(req, new DataplexProjectsLocationsDataTaxonomiesAttributesCreateSecurity("quae", "laudantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsDataTaxonomiesAttributesList

Lists Data Attribute resources in a DataTaxonomy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataTaxonomiesAttributesListRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataTaxonomiesAttributesListResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataTaxonomiesAttributesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsDataTaxonomiesAttributesListRequest req = new DataplexProjectsLocationsDataTaxonomiesAttributesListRequest("odio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatibus";
                alt = AltEnum.PROTO;
                callback = "vero";
                fields = "omnis";
                filter = "quis";
                key = "ipsum";
                oauthToken = "delectus";
                orderBy = "voluptate";
                pageSize = 231701L;
                pageToken = "vero";
                prettyPrint = false;
                quotaUser = "tenetur";
                uploadType = "dignissimos";
                uploadProtocol = "hic";
            }};            

            DataplexProjectsLocationsDataTaxonomiesAttributesListResponse res = sdk.projects.dataplexProjectsLocationsDataTaxonomiesAttributesList(req, new DataplexProjectsLocationsDataTaxonomiesAttributesListSecurity("distinctio", "quod") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDataplexV1ListDataAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsDataTaxonomiesCreate

Create a DataTaxonomy resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataTaxonomiesCreateRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataTaxonomiesCreateResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataTaxonomiesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1DataTaxonomyInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsDataTaxonomiesCreateRequest req = new DataplexProjectsLocationsDataTaxonomiesCreateRequest("odio") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDataplexV1DataTaxonomyInput = new GoogleCloudDataplexV1DataTaxonomyInput() {{
                    description = "facilis";
                    displayName = "vero";
                    etag = "ducimus";
                    labels = new java.util.HashMap<String, String>() {{
                        put("quibusdam", "illum");
                        put("sequi", "natus");
                    }};
                }};;
                accessToken = "impedit";
                alt = AltEnum.JSON;
                callback = "voluptatibus";
                dataTaxonomyId = "exercitationem";
                fields = "nulla";
                key = "fugit";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "doloribus";
                uploadProtocol = "iusto";
                validateOnly = false;
            }};            

            DataplexProjectsLocationsDataTaxonomiesCreateResponse res = sdk.projects.dataplexProjectsLocationsDataTaxonomiesCreate(req, new DataplexProjectsLocationsDataTaxonomiesCreateSecurity("eligendi", "ducimus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsDataTaxonomiesList

Lists DataTaxonomy resources in a project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataTaxonomiesListRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataTaxonomiesListResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsDataTaxonomiesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsDataTaxonomiesListRequest req = new DataplexProjectsLocationsDataTaxonomiesListRequest("alias") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "ea";
                fields = "aspernatur";
                filter = "vel";
                key = "possimus";
                oauthToken = "magnam";
                orderBy = "ratione";
                pageSize = 401132L;
                pageToken = "laudantium";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "dolor";
                uploadProtocol = "maiores";
            }};            

            DataplexProjectsLocationsDataTaxonomiesListResponse res = sdk.projects.dataplexProjectsLocationsDataTaxonomiesList(req, new DataplexProjectsLocationsDataTaxonomiesListSecurity("quasi", "ex") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDataplexV1ListDataTaxonomiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsLakesContentCreate

Create a content.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesContentCreateRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesContentCreateResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesContentCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1ContentInput;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1ContentNotebook;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1ContentNotebookKernelTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1ContentSqlScript;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1ContentSqlScriptEngineEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsLakesContentCreateRequest req = new DataplexProjectsLocationsLakesContentCreateRequest("nulla") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDataplexV1ContentInput = new GoogleCloudDataplexV1ContentInput() {{
                    dataText = "voluptatibus";
                    description = "nostrum";
                    labels = new java.util.HashMap<String, String>() {{
                        put("quisquam", "saepe");
                        put("ea", "impedit");
                        put("corporis", "veniam");
                        put("aliquid", "inventore");
                    }};
                    notebook = new GoogleCloudDataplexV1ContentNotebook() {{
                        kernelType = GoogleCloudDataplexV1ContentNotebookKernelTypeEnum.KERNEL_TYPE_UNSPECIFIED;
                    }};;
                    path = "ea";
                    sqlScript = new GoogleCloudDataplexV1ContentSqlScript() {{
                        engine = GoogleCloudDataplexV1ContentSqlScriptEngineEnum.SPARK;
                    }};;
                }};;
                accessToken = "consectetur";
                alt = AltEnum.PROTO;
                callback = "aspernatur";
                fields = "minima";
                key = "eaque";
                oauthToken = "a";
                prettyPrint = false;
                quotaUser = "libero";
                uploadType = "aut";
                uploadProtocol = "aut";
                validateOnly = false;
            }};            

            DataplexProjectsLocationsLakesContentCreateResponse res = sdk.projects.dataplexProjectsLocationsLakesContentCreate(req, new DataplexProjectsLocationsLakesContentCreateSecurity("deleniti", "impedit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDataplexV1Content != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsLakesContentList

List content.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesContentListRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesContentListResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesContentListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsLakesContentListRequest req = new DataplexProjectsLocationsLakesContentListRequest("aliquam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "accusamus";
                alt = AltEnum.JSON;
                callback = "non";
                fields = "et";
                filter = "dolorum";
                key = "laborum";
                oauthToken = "placeat";
                pageSize = 245367L;
                pageToken = "eum";
                prettyPrint = false;
                quotaUser = "autem";
                uploadType = "nobis";
                uploadProtocol = "quas";
            }};            

            DataplexProjectsLocationsLakesContentListResponse res = sdk.projects.dataplexProjectsLocationsLakesContentList(req, new DataplexProjectsLocationsLakesContentListSecurity("assumenda", "nulla") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDataplexV1ListContentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsLakesContentitemsCreate

Create a content.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesContentitemsCreateRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesContentitemsCreateResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesContentitemsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1ContentInput;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1ContentNotebook;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1ContentNotebookKernelTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1ContentSqlScript;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1ContentSqlScriptEngineEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsLakesContentitemsCreateRequest req = new DataplexProjectsLocationsLakesContentitemsCreateRequest("voluptas") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDataplexV1ContentInput = new GoogleCloudDataplexV1ContentInput() {{
                    dataText = "quasi";
                    description = "tempora";
                    labels = new java.util.HashMap<String, String>() {{
                        put("explicabo", "provident");
                        put("ipsa", "molestiae");
                    }};
                    notebook = new GoogleCloudDataplexV1ContentNotebook() {{
                        kernelType = GoogleCloudDataplexV1ContentNotebookKernelTypeEnum.KERNEL_TYPE_UNSPECIFIED;
                    }};;
                    path = "odio";
                    sqlScript = new GoogleCloudDataplexV1ContentSqlScript() {{
                        engine = GoogleCloudDataplexV1ContentSqlScriptEngineEnum.QUERY_ENGINE_UNSPECIFIED;
                    }};;
                }};;
                accessToken = "esse";
                alt = AltEnum.MEDIA;
                callback = "rem";
                fields = "fuga";
                key = "reprehenderit";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "fugiat";
                uploadType = "ut";
                uploadProtocol = "eum";
                validateOnly = false;
            }};            

            DataplexProjectsLocationsLakesContentitemsCreateResponse res = sdk.projects.dataplexProjectsLocationsLakesContentitemsCreate(req, new DataplexProjectsLocationsLakesContentitemsCreateSecurity("suscipit", "assumenda") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDataplexV1Content != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsLakesContentitemsList

List content.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesContentitemsListRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesContentitemsListResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesContentitemsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsLakesContentitemsListRequest req = new DataplexProjectsLocationsLakesContentitemsListRequest("eos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quisquam";
                alt = AltEnum.JSON;
                callback = "ipsa";
                fields = "id";
                filter = "quidem";
                key = "neque";
                oauthToken = "quo";
                pageSize = 847276L;
                pageToken = "quo";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "eius";
                uploadProtocol = "eos";
            }};            

            DataplexProjectsLocationsLakesContentitemsListResponse res = sdk.projects.dataplexProjectsLocationsLakesContentitemsList(req, new DataplexProjectsLocationsLakesContentitemsListSecurity("voluptas", "ab") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDataplexV1ListContentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsLakesCreate

Creates a lake resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesCreateRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesCreateResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1AssetStatus;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1LakeInput;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1LakeMetastore;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1LakeMetastoreStatus;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1LakeMetastoreStatusStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsLakesCreateRequest req = new DataplexProjectsLocationsLakesCreateRequest("cupiditate") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDataplexV1LakeInput = new GoogleCloudDataplexV1LakeInput() {{
                    assetStatus = new GoogleCloudDataplexV1AssetStatus() {{
                        activeAssets = 272822;
                        securityPolicyApplyingAssets = 892050;
                        updateTime = "ipsam";
                    }};;
                    description = "aspernatur";
                    displayName = "sequi";
                    labels = new java.util.HashMap<String, String>() {{
                        put("esse", "recusandae");
                        put("aperiam", "distinctio");
                        put("quod", "dignissimos");
                        put("inventore", "nihil");
                    }};
                    metastore = new GoogleCloudDataplexV1LakeMetastore() {{
                        service = "totam";
                    }};;
                    metastoreStatus = new GoogleCloudDataplexV1LakeMetastoreStatus() {{
                        endpoint = "accusamus";
                        message = "aliquam";
                        state = GoogleCloudDataplexV1LakeMetastoreStatusStateEnum.READY;
                        updateTime = "occaecati";
                    }};;
                }};;
                accessToken = "commodi";
                alt = AltEnum.PROTO;
                callback = "dolores";
                fields = "deserunt";
                key = "molestiae";
                lakeId = "accusantium";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "quas";
                uploadProtocol = "praesentium";
                validateOnly = false;
            }};            

            DataplexProjectsLocationsLakesCreateResponse res = sdk.projects.dataplexProjectsLocationsLakesCreate(req, new DataplexProjectsLocationsLakesCreateSecurity("consequuntur", "deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsLakesEnvironmentsCreate

Create an environment resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesEnvironmentsCreateRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesEnvironmentsCreateResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesEnvironmentsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1EnvironmentInfrastructureSpec;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1EnvironmentInput;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1EnvironmentSessionSpec;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsLakesEnvironmentsCreateRequest req = new DataplexProjectsLocationsLakesEnvironmentsCreateRequest("fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDataplexV1EnvironmentInput = new GoogleCloudDataplexV1EnvironmentInput() {{
                    description = "mollitia";
                    displayName = "incidunt";
                    infrastructureSpec = new GoogleCloudDataplexV1EnvironmentInfrastructureSpec() {{
                        compute = new GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources() {{
                            diskSizeGb = 539224;
                            maxNodeCount = 128860;
                            nodeCount = 325685;
                        }};;
                        osImage = new GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime() {{
                            imageVersion = "nisi";
                            javaLibraries = new String[]{{
                                add("sapiente"),
                            }};
                            properties = new java.util.HashMap<String, String>() {{
                                put("ratione", "explicabo");
                            }};
                            pythonPackages = new String[]{{
                                add("occaecati"),
                                add("atque"),
                                add("et"),
                                add("esse"),
                            }};
                        }};;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("accusamus", "veritatis");
                        put("esse", "quod");
                        put("nam", "vero");
                        put("aliquid", "quasi");
                    }};
                    sessionSpec = new GoogleCloudDataplexV1EnvironmentSessionSpec() {{
                        enableFastStartup = false;
                        maxIdleDuration = "saepe";
                    }};;
                }};;
                accessToken = "vel";
                alt = AltEnum.PROTO;
                callback = "molestiae";
                environmentId = "rerum";
                fields = "occaecati";
                key = "minima";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "sit";
                uploadProtocol = "culpa";
                validateOnly = false;
            }};            

            DataplexProjectsLocationsLakesEnvironmentsCreateResponse res = sdk.projects.dataplexProjectsLocationsLakesEnvironmentsCreate(req, new DataplexProjectsLocationsLakesEnvironmentsCreateSecurity("tempore", "adipisci") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsLakesEnvironmentsList

Lists environments under the given lake.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesEnvironmentsListRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesEnvironmentsListResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesEnvironmentsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsLakesEnvironmentsListRequest req = new DataplexProjectsLocationsLakesEnvironmentsListRequest("cumque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "consequatur";
                alt = AltEnum.PROTO;
                callback = "quaerat";
                fields = "sapiente";
                filter = "consectetur";
                key = "esse";
                oauthToken = "blanditiis";
                orderBy = "provident";
                pageSize = 953722L;
                pageToken = "nulla";
                prettyPrint = false;
                quotaUser = "quas";
                uploadType = "esse";
                uploadProtocol = "quasi";
            }};            

            DataplexProjectsLocationsLakesEnvironmentsListResponse res = sdk.projects.dataplexProjectsLocationsLakesEnvironmentsList(req, new DataplexProjectsLocationsLakesEnvironmentsListSecurity("a", "error") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDataplexV1ListEnvironmentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsLakesEnvironmentsSessionsList

Lists session resources in an environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesEnvironmentsSessionsListRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesEnvironmentsSessionsListResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesEnvironmentsSessionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsLakesEnvironmentsSessionsListRequest req = new DataplexProjectsLocationsLakesEnvironmentsSessionsListRequest("sint") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "possimus";
                alt = AltEnum.JSON;
                callback = "eveniet";
                fields = "asperiores";
                filter = "facere";
                key = "veritatis";
                oauthToken = "consequuntur";
                pageSize = 94458L;
                pageToken = "similique";
                prettyPrint = false;
                quotaUser = "culpa";
                uploadType = "aliquid";
                uploadProtocol = "tenetur";
            }};            

            DataplexProjectsLocationsLakesEnvironmentsSessionsListResponse res = sdk.projects.dataplexProjectsLocationsLakesEnvironmentsSessionsList(req, new DataplexProjectsLocationsLakesEnvironmentsSessionsListSecurity("quae", "earum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDataplexV1ListSessionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsLakesList

Lists lake resources in a project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesListRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesListResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsLakesListRequest req = new DataplexProjectsLocationsLakesListRequest("vel") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eius";
                alt = AltEnum.PROTO;
                callback = "illum";
                fields = "soluta";
                filter = "accusantium";
                key = "aliquam";
                oauthToken = "sapiente";
                orderBy = "dicta";
                pageSize = 355369L;
                pageToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "nisi";
                uploadProtocol = "aut";
            }};            

            DataplexProjectsLocationsLakesListResponse res = sdk.projects.dataplexProjectsLocationsLakesList(req, new DataplexProjectsLocationsLakesListSecurity("voluptatum", "qui") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDataplexV1ListLakesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsLakesTasksCreate

Creates a task resource within a lake.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesTasksCreateRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesTasksCreateResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesTasksCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1TaskExecutionSpec;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1TaskInfrastructureSpec;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1TaskInput;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1TaskNotebookTaskConfig;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1TaskSparkTaskConfig;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1TaskTriggerSpec;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1TaskTriggerSpecTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsLakesTasksCreateRequest req = new DataplexProjectsLocationsLakesTasksCreateRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDataplexV1TaskInput = new GoogleCloudDataplexV1TaskInput() {{
                    description = "deleniti";
                    displayName = "itaque";
                    executionSpec = new GoogleCloudDataplexV1TaskExecutionSpec() {{
                        args = new java.util.HashMap<String, String>() {{
                            put("architecto", "omnis");
                            put("tenetur", "quasi");
                            put("at", "et");
                        }};
                        kmsKey = "voluptate";
                        maxJobExecutionLifetime = "ipsa";
                        project = "minima";
                        serviceAccount = "veritatis";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("adipisci", "iste");
                    }};
                    notebook = new GoogleCloudDataplexV1TaskNotebookTaskConfig() {{
                        archiveUris = new String[]{{
                            add("accusantium"),
                            add("rem"),
                            add("aut"),
                            add("laudantium"),
                        }};
                        fileUris = new String[]{{
                            add("mollitia"),
                            add("ab"),
                        }};
                        infrastructureSpec = new GoogleCloudDataplexV1TaskInfrastructureSpec() {{
                            batch = new GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources() {{
                                executorsCount = 544591;
                                maxExecutorsCount = 251941;
                            }};;
                            containerImage = new GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime() {{
                                image = "voluptatem";
                                javaJars = new String[]{{
                                    add("occaecati"),
                                }};
                                properties = new java.util.HashMap<String, String>() {{
                                    put("impedit", "explicabo");
                                    put("voluptas", "aut");
                                }};
                                pythonPackages = new String[]{{
                                    add("dicta"),
                                    add("maiores"),
                                }};
                            }};;
                            vpcNetwork = new GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork() {{
                                network = "natus";
                                networkTags = new String[]{{
                                    add("voluptatibus"),
                                }};
                                subNetwork = "voluptas";
                            }};;
                        }};;
                        notebook = "asperiores";
                    }};;
                    spark = new GoogleCloudDataplexV1TaskSparkTaskConfig() {{
                        archiveUris = new String[]{{
                            add("ea"),
                        }};
                        fileUris = new String[]{{
                            add("consequuntur"),
                            add("repellendus"),
                        }};
                        infrastructureSpec = new GoogleCloudDataplexV1TaskInfrastructureSpec() {{
                            batch = new GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources() {{
                                executorsCount = 638762;
                                maxExecutorsCount = 807023;
                            }};;
                            containerImage = new GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime() {{
                                image = "dignissimos";
                                javaJars = new String[]{{
                                    add("asperiores"),
                                    add("nemo"),
                                    add("quae"),
                                }};
                                properties = new java.util.HashMap<String, String>() {{
                                    put("porro", "quod");
                                    put("labore", "ab");
                                }};
                                pythonPackages = new String[]{{
                                    add("fuga"),
                                }};
                            }};;
                            vpcNetwork = new GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork() {{
                                network = "id";
                                networkTags = new String[]{{
                                    add("velit"),
                                    add("culpa"),
                                }};
                                subNetwork = "est";
                            }};;
                        }};;
                        mainClass = "recusandae";
                        mainJarFileUri = "totam";
                        pythonScriptFile = "fugiat";
                        sqlScript = "vel";
                        sqlScriptFile = "ducimus";
                    }};;
                    triggerSpec = new GoogleCloudDataplexV1TaskTriggerSpec() {{
                        disabled = false;
                        maxRetries = 554688;
                        schedule = "vel";
                        startTime = "labore";
                        type = GoogleCloudDataplexV1TaskTriggerSpecTypeEnum.RECURRING;
                    }};;
                }};;
                accessToken = "facilis";
                alt = AltEnum.PROTO;
                callback = "commodi";
                fields = "in";
                key = "corporis";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "assumenda";
                taskId = "nemo";
                uploadType = "recusandae";
                uploadProtocol = "aliquid";
                validateOnly = false;
            }};            

            DataplexProjectsLocationsLakesTasksCreateResponse res = sdk.projects.dataplexProjectsLocationsLakesTasksCreate(req, new DataplexProjectsLocationsLakesTasksCreateSecurity("aperiam", "cum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsLakesTasksJobsList

Lists Jobs under the given task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesTasksJobsListRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesTasksJobsListResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesTasksJobsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsLakesTasksJobsListRequest req = new DataplexProjectsLocationsLakesTasksJobsListRequest("consectetur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "exercitationem";
                alt = AltEnum.PROTO;
                callback = "facere";
                fields = "numquam";
                key = "doloribus";
                oauthToken = "suscipit";
                pageSize = 968972L;
                pageToken = "quidem";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "necessitatibus";
                uploadProtocol = "dolore";
            }};            

            DataplexProjectsLocationsLakesTasksJobsListResponse res = sdk.projects.dataplexProjectsLocationsLakesTasksJobsList(req, new DataplexProjectsLocationsLakesTasksJobsListSecurity("sunt", "asperiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDataplexV1ListJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsLakesTasksList

Lists tasks under the given lake.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesTasksListRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesTasksListResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesTasksListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsLakesTasksListRequest req = new DataplexProjectsLocationsLakesTasksListRequest("adipisci") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "amet";
                alt = AltEnum.JSON;
                callback = "dignissimos";
                fields = "a";
                filter = "debitis";
                key = "consectetur";
                oauthToken = "corporis";
                orderBy = "harum";
                pageSize = 385237L;
                pageToken = "ipsa";
                prettyPrint = false;
                quotaUser = "voluptates";
                uploadType = "libero";
                uploadProtocol = "vitae";
            }};            

            DataplexProjectsLocationsLakesTasksListResponse res = sdk.projects.dataplexProjectsLocationsLakesTasksList(req, new DataplexProjectsLocationsLakesTasksListSecurity("accusamus", "similique") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDataplexV1ListTasksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsLakesTasksRun

Run an on demand execution of a Task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesTasksRunRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesTasksRunResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesTasksRunSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsLakesTasksRunRequest req = new DataplexProjectsLocationsLakesTasksRunRequest("tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("voluptas", "voluptas");
                    put("minima", "nobis");
                }};
                accessToken = "dolorum";
                alt = AltEnum.JSON;
                callback = "minus";
                fields = "dolores";
                key = "blanditiis";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "dolore";
                uploadType = "aliquam";
                uploadProtocol = "officiis";
            }};            

            DataplexProjectsLocationsLakesTasksRunResponse res = sdk.projects.dataplexProjectsLocationsLakesTasksRun(req, new DataplexProjectsLocationsLakesTasksRunSecurity("temporibus", "ullam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDataplexV1RunTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsLakesZonesAssetsActionsList

Lists action resources in an asset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesAssetsActionsListRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesAssetsActionsListResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesAssetsActionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsLakesZonesAssetsActionsListRequest req = new DataplexProjectsLocationsLakesZonesAssetsActionsListRequest("adipisci") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "blanditiis";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "nesciunt";
                key = "culpa";
                oauthToken = "corrupti";
                pageSize = 867290L;
                pageToken = "totam";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "exercitationem";
                uploadProtocol = "nobis";
            }};            

            DataplexProjectsLocationsLakesZonesAssetsActionsListResponse res = sdk.projects.dataplexProjectsLocationsLakesZonesAssetsActionsList(req, new DataplexProjectsLocationsLakesZonesAssetsActionsListSecurity("sit", "rerum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDataplexV1ListActionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsLakesZonesAssetsCreate

Creates an asset resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesAssetsCreateRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesAssetsCreateResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesAssetsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1AssetDiscoverySpec;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1AssetDiscoveryStatus;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1AssetDiscoveryStatusStats;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1AssetInput;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1AssetResourceSpec;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1AssetResourceSpecReadAccessModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1AssetResourceSpecTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1AssetResourceStatusInput;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1AssetResourceStatusStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1AssetSecurityStatus;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1AssetSecurityStatusStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsLakesZonesAssetsCreateRequest req = new DataplexProjectsLocationsLakesZonesAssetsCreateRequest("sed") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDataplexV1AssetInput = new GoogleCloudDataplexV1AssetInput() {{
                    description = "explicabo";
                    discoverySpec = new GoogleCloudDataplexV1AssetDiscoverySpec() {{
                        csvOptions = new GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions() {{
                            delimiter = "asperiores";
                            disableTypeInference = false;
                            encoding = "facilis";
                            headerRows = 451822;
                        }};;
                        enabled = false;
                        excludePatterns = new String[]{{
                            add("ab"),
                            add("iste"),
                            add("dolore"),
                        }};
                        includePatterns = new String[]{{
                            add("sed"),
                            add("in"),
                            add("commodi"),
                        }};
                        jsonOptions = new GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions() {{
                            disableTypeInference = false;
                            encoding = "quidem";
                        }};;
                        schedule = "explicabo";
                    }};;
                    discoveryStatus = new GoogleCloudDataplexV1AssetDiscoveryStatus() {{
                        lastRunDuration = "voluptas";
                        lastRunTime = "unde";
                        message = "architecto";
                        state = GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum.SCHEDULED;
                        stats = new GoogleCloudDataplexV1AssetDiscoveryStatusStats() {{
                            dataItems = "sapiente";
                            dataSize = "debitis";
                            filesets = "illo";
                            tables = "reiciendis";
                        }};;
                        updateTime = "perferendis";
                    }};;
                    displayName = "corrupti";
                    labels = new java.util.HashMap<String, String>() {{
                        put("incidunt", "sed");
                        put("provident", "eius");
                        put("necessitatibus", "ipsum");
                        put("ea", "occaecati");
                    }};
                    resourceSpec = new GoogleCloudDataplexV1AssetResourceSpec() {{
                        name = "Courtney Goldner";
                        readAccessMode = GoogleCloudDataplexV1AssetResourceSpecReadAccessModeEnum.MANAGED;
                        type = GoogleCloudDataplexV1AssetResourceSpecTypeEnum.STORAGE_BUCKET;
                    }};;
                    resourceStatus = new GoogleCloudDataplexV1AssetResourceStatusInput() {{
                        message = "sit";
                        state = GoogleCloudDataplexV1AssetResourceStatusStateEnum.STATE_UNSPECIFIED;
                        updateTime = "officiis";
                    }};;
                    securityStatus = new GoogleCloudDataplexV1AssetSecurityStatus() {{
                        message = "praesentium";
                        state = GoogleCloudDataplexV1AssetSecurityStatusStateEnum.APPLYING;
                        updateTime = "quaerat";
                    }};;
                }};;
                accessToken = "incidunt";
                alt = AltEnum.MEDIA;
                assetId = "debitis";
                callback = "rem";
                fields = "sit";
                key = "nobis";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "veniam";
                uploadType = "minima";
                uploadProtocol = "recusandae";
                validateOnly = false;
            }};            

            DataplexProjectsLocationsLakesZonesAssetsCreateResponse res = sdk.projects.dataplexProjectsLocationsLakesZonesAssetsCreate(req, new DataplexProjectsLocationsLakesZonesAssetsCreateSecurity("reiciendis", "nulla") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsLakesZonesAssetsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesAssetsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesAssetsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesAssetsGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsLakesZonesAssetsGetIamPolicyRequest req = new DataplexProjectsLocationsLakesZonesAssetsGetIamPolicyRequest("magni") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "saepe";
                alt = AltEnum.JSON;
                callback = "veniam";
                fields = "in";
                key = "officiis";
                oauthToken = "beatae";
                optionsRequestedPolicyVersion = 512452L;
                prettyPrint = false;
                quotaUser = "exercitationem";
                uploadType = "praesentium";
                uploadProtocol = "cum";
            }};            

            DataplexProjectsLocationsLakesZonesAssetsGetIamPolicyResponse res = sdk.projects.dataplexProjectsLocationsLakesZonesAssetsGetIamPolicy(req, new DataplexProjectsLocationsLakesZonesAssetsGetIamPolicySecurity("laboriosam", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleIamV1Policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsLakesZonesAssetsList

Lists asset resources in a zone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesAssetsListRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesAssetsListResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesAssetsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsLakesZonesAssetsListRequest req = new DataplexProjectsLocationsLakesZonesAssetsListRequest("voluptatum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "debitis";
                fields = "neque";
                filter = "dolorum";
                key = "nostrum";
                oauthToken = "officia";
                orderBy = "dolorum";
                pageSize = 548361L;
                pageToken = "accusamus";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "atque";
                uploadProtocol = "fugit";
            }};            

            DataplexProjectsLocationsLakesZonesAssetsListResponse res = sdk.projects.dataplexProjectsLocationsLakesZonesAssetsList(req, new DataplexProjectsLocationsLakesZonesAssetsListSecurity("ut", "fugiat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDataplexV1ListAssetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsLakesZonesAssetsPatch

Updates an asset resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesAssetsPatchRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesAssetsPatchResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesAssetsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1AssetDiscoverySpec;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1AssetDiscoveryStatus;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1AssetDiscoveryStatusStats;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1AssetInput;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1AssetResourceSpec;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1AssetResourceSpecReadAccessModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1AssetResourceSpecTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1AssetResourceStatusInput;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1AssetResourceStatusStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1AssetSecurityStatus;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1AssetSecurityStatusStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsLakesZonesAssetsPatchRequest req = new DataplexProjectsLocationsLakesZonesAssetsPatchRequest("voluptatem") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDataplexV1AssetInput = new GoogleCloudDataplexV1AssetInput() {{
                    description = "expedita";
                    discoverySpec = new GoogleCloudDataplexV1AssetDiscoverySpec() {{
                        csvOptions = new GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions() {{
                            delimiter = "magnam";
                            disableTypeInference = false;
                            encoding = "consequatur";
                            headerRows = 460220;
                        }};;
                        enabled = false;
                        excludePatterns = new String[]{{
                            add("sit"),
                            add("voluptatum"),
                        }};
                        includePatterns = new String[]{{
                            add("repudiandae"),
                            add("corporis"),
                            add("et"),
                        }};
                        jsonOptions = new GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions() {{
                            disableTypeInference = false;
                            encoding = "blanditiis";
                        }};;
                        schedule = "ex";
                    }};;
                    discoveryStatus = new GoogleCloudDataplexV1AssetDiscoveryStatus() {{
                        lastRunDuration = "sed";
                        lastRunTime = "sit";
                        message = "vel";
                        state = GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum.SCHEDULED;
                        stats = new GoogleCloudDataplexV1AssetDiscoveryStatusStats() {{
                            dataItems = "saepe";
                            dataSize = "error";
                            filesets = "consequatur";
                            tables = "incidunt";
                        }};;
                        updateTime = "reiciendis";
                    }};;
                    displayName = "dolorem";
                    labels = new java.util.HashMap<String, String>() {{
                        put("dicta", "architecto");
                        put("occaecati", "labore");
                        put("quidem", "atque");
                    }};
                    resourceSpec = new GoogleCloudDataplexV1AssetResourceSpec() {{
                        name = "Marco White I";
                        readAccessMode = GoogleCloudDataplexV1AssetResourceSpecReadAccessModeEnum.DIRECT;
                        type = GoogleCloudDataplexV1AssetResourceSpecTypeEnum.STORAGE_BUCKET;
                    }};;
                    resourceStatus = new GoogleCloudDataplexV1AssetResourceStatusInput() {{
                        message = "unde";
                        state = GoogleCloudDataplexV1AssetResourceStatusStateEnum.ERROR;
                        updateTime = "provident";
                    }};;
                    securityStatus = new GoogleCloudDataplexV1AssetSecurityStatus() {{
                        message = "repellendus";
                        state = GoogleCloudDataplexV1AssetSecurityStatusStateEnum.ERROR;
                        updateTime = "voluptates";
                    }};;
                }};;
                accessToken = "perferendis";
                alt = AltEnum.PROTO;
                callback = "quidem";
                fields = "reprehenderit";
                key = "facere";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "praesentium";
                updateMask = "mollitia";
                uploadType = "veniam";
                uploadProtocol = "voluptatem";
                validateOnly = false;
            }};            

            DataplexProjectsLocationsLakesZonesAssetsPatchResponse res = sdk.projects.dataplexProjectsLocationsLakesZonesAssetsPatch(req, new DataplexProjectsLocationsLakesZonesAssetsPatchSecurity("quisquam", "repudiandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsLakesZonesAssetsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesAssetsSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleIamV1AuditConfig;
import org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig;
import org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.GoogleIamV1Binding;
import org.openapis.openapi.models.shared.GoogleIamV1Policy;
import org.openapis.openapi.models.shared.GoogleIamV1SetIamPolicyRequest;
import org.openapis.openapi.models.shared.GoogleTypeExpr;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyRequest req = new DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                googleIamV1SetIamPolicyRequest = new GoogleIamV1SetIamPolicyRequest() {{
                    policy = new GoogleIamV1Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditConfig[]{{
                            add(new GoogleIamV1AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("suscipit"),
                                            add("quidem"),
                                            add("maxime"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("amet"),
                                            add("assumenda"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("error"),
                                            add("officiis"),
                                            add("officiis"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("minima"),
                                            add("aspernatur"),
                                            add("ex"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "corrupti";
                            }}),
                            add(new GoogleIamV1AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("blanditiis"),
                                            add("suscipit"),
                                            add("repudiandae"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sunt"),
                                            add("recusandae"),
                                            add("dolorum"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("reiciendis"),
                                            add("doloremque"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("accusantium"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "dolores";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.GoogleIamV1Binding[]{{
                            add(new GoogleIamV1Binding() {{
                                condition = new GoogleTypeExpr() {{
                                    description = "laboriosam";
                                    expression = "velit";
                                    location = "a";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("saepe"),
                                    add("consequuntur"),
                                }};
                                role = "occaecati";
                            }}),
                            add(new GoogleIamV1Binding() {{
                                condition = new GoogleTypeExpr() {{
                                    description = "officiis";
                                    expression = "perspiciatis";
                                    location = "in";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("occaecati"),
                                    add("consequuntur"),
                                    add("fugit"),
                                    add("id"),
                                }};
                                role = "quis";
                            }}),
                        }};
                        etag = "reprehenderit";
                        version = 625528;
                    }};;
                    updateMask = "illo";
                }};;
                accessToken = "corporis";
                alt = AltEnum.PROTO;
                callback = "eveniet";
                fields = "non";
                key = "vero";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "ipsa";
                uploadProtocol = "totam";
            }};            

            DataplexProjectsLocationsLakesZonesAssetsSetIamPolicyResponse res = sdk.projects.dataplexProjectsLocationsLakesZonesAssetsSetIamPolicy(req, new DataplexProjectsLocationsLakesZonesAssetsSetIamPolicySecurity("quae", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleIamV1Policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsLakesZonesAssetsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesAssetsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesAssetsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesAssetsTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleIamV1TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsLakesZonesAssetsTestIamPermissionsRequest req = new DataplexProjectsLocationsLakesZonesAssetsTestIamPermissionsRequest("eveniet") {{
                dollarXgafv = XgafvEnum.ONE;
                googleIamV1TestIamPermissionsRequest = new GoogleIamV1TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("iure"),
                        add("necessitatibus"),
                        add("ratione"),
                    }};
                }};;
                accessToken = "laborum";
                alt = AltEnum.PROTO;
                callback = "voluptatum";
                fields = "rem";
                key = "aliquam";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "repellat";
                uploadType = "alias";
                uploadProtocol = "corporis";
            }};            

            DataplexProjectsLocationsLakesZonesAssetsTestIamPermissionsResponse res = sdk.projects.dataplexProjectsLocationsLakesZonesAssetsTestIamPermissions(req, new DataplexProjectsLocationsLakesZonesAssetsTestIamPermissionsSecurity("perspiciatis", "nihil") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleIamV1TestIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsLakesZonesCreate

Creates a zone resource within a lake.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesCreateRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesCreateResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1AssetStatus;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1ZoneDiscoverySpec;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1ZoneInput;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1ZoneResourceSpec;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1ZoneResourceSpecLocationTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1ZoneTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsLakesZonesCreateRequest req = new DataplexProjectsLocationsLakesZonesCreateRequest("mollitia") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDataplexV1ZoneInput = new GoogleCloudDataplexV1ZoneInput() {{
                    assetStatus = new GoogleCloudDataplexV1AssetStatus() {{
                        activeAssets = 5189;
                        securityPolicyApplyingAssets = 979527;
                        updateTime = "reiciendis";
                    }};;
                    description = "dolores";
                    discoverySpec = new GoogleCloudDataplexV1ZoneDiscoverySpec() {{
                        csvOptions = new GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions() {{
                            delimiter = "id";
                            disableTypeInference = false;
                            encoding = "minima";
                            headerRows = 293144;
                        }};;
                        enabled = false;
                        excludePatterns = new String[]{{
                            add("nesciunt"),
                            add("quae"),
                            add("recusandae"),
                        }};
                        includePatterns = new String[]{{
                            add("quaerat"),
                            add("molestiae"),
                            add("ex"),
                        }};
                        jsonOptions = new GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions() {{
                            disableTypeInference = false;
                            encoding = "ut";
                        }};;
                        schedule = "culpa";
                    }};;
                    displayName = "adipisci";
                    labels = new java.util.HashMap<String, String>() {{
                        put("laudantium", "eum");
                        put("nemo", "recusandae");
                        put("esse", "provident");
                        put("quis", "eum");
                    }};
                    resourceSpec = new GoogleCloudDataplexV1ZoneResourceSpec() {{
                        locationType = GoogleCloudDataplexV1ZoneResourceSpecLocationTypeEnum.MULTI_REGION;
                    }};;
                    type = GoogleCloudDataplexV1ZoneTypeEnum.RAW;
                }};;
                accessToken = "aspernatur";
                alt = AltEnum.MEDIA;
                callback = "quasi";
                fields = "animi";
                key = "nostrum";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "possimus";
                uploadProtocol = "animi";
                validateOnly = false;
                zoneId = "ex";
            }};            

            DataplexProjectsLocationsLakesZonesCreateResponse res = sdk.projects.dataplexProjectsLocationsLakesZonesCreate(req, new DataplexProjectsLocationsLakesZonesCreateSecurity("aliquid", "accusantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsLakesZonesEntitiesCreate

Create a metadata entity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesEntitiesCreateRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesEntitiesCreateResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesEntitiesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1EntityInput;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1EntitySystemEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1EntityTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1Schema;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1SchemaPartitionField;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1SchemaPartitionStyleEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1SchemaSchemaField;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1SchemaSchemaFieldModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1StorageFormatCompressionFormatEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1StorageFormatCsvOptions;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1StorageFormatIcebergOptions;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1StorageFormatInput;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1StorageFormatJsonOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsLakesZonesEntitiesCreateRequest req = new DataplexProjectsLocationsLakesZonesEntitiesCreateRequest("repellat") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDataplexV1EntityInput = new GoogleCloudDataplexV1EntityInput() {{
                    asset = "ullam";
                    dataPath = "in";
                    dataPathPattern = "nam";
                    description = "earum";
                    displayName = "officia";
                    etag = "laborum";
                    format = new GoogleCloudDataplexV1StorageFormatInput() {{
                        compressionFormat = GoogleCloudDataplexV1StorageFormatCompressionFormatEnum.BZIP2;
                        csv = new GoogleCloudDataplexV1StorageFormatCsvOptions() {{
                            delimiter = "modi";
                            encoding = "voluptatibus";
                            headerRows = 564064;
                            quote = "officiis";
                        }};;
                        iceberg = new GoogleCloudDataplexV1StorageFormatIcebergOptions() {{
                            metadataLocation = "sapiente";
                        }};;
                        json = new GoogleCloudDataplexV1StorageFormatJsonOptions() {{
                            encoding = "cumque";
                        }};;
                        mimeType = "vitae";
                    }};;
                    id = "b4512c10-3264-48dc-af61-5199ebfd0e9f";
                    schema = new GoogleCloudDataplexV1Schema() {{
                        fields = new org.openapis.openapi.models.shared.GoogleCloudDataplexV1SchemaSchemaField[]{{
                            add(new GoogleCloudDataplexV1SchemaSchemaField() {{
                                description = "aliquid";
                                fields = new org.openapis.openapi.models.shared.GoogleCloudDataplexV1SchemaSchemaField[]{{
                                    add(new GoogleCloudDataplexV1SchemaSchemaField() {{}}),
                                    add(new GoogleCloudDataplexV1SchemaSchemaField() {{}}),
                                    add(new GoogleCloudDataplexV1SchemaSchemaField() {{}}),
                                    add(new GoogleCloudDataplexV1SchemaSchemaField() {{}}),
                                }};
                                mode = GoogleCloudDataplexV1SchemaSchemaFieldModeEnum.REQUIRED;
                                name = "Denise Runolfsdottir";
                                type = GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum.BINARY;
                            }}),
                            add(new GoogleCloudDataplexV1SchemaSchemaField() {{
                                description = "necessitatibus";
                                fields = new org.openapis.openapi.models.shared.GoogleCloudDataplexV1SchemaSchemaField[]{{
                                    add(new GoogleCloudDataplexV1SchemaSchemaField() {{}}),
                                    add(new GoogleCloudDataplexV1SchemaSchemaField() {{}}),
                                    add(new GoogleCloudDataplexV1SchemaSchemaField() {{}}),
                                    add(new GoogleCloudDataplexV1SchemaSchemaField() {{}}),
                                }};
                                mode = GoogleCloudDataplexV1SchemaSchemaFieldModeEnum.MODE_UNSPECIFIED;
                                name = "Catherine Kuphal";
                                type = GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum.FLOAT;
                            }}),
                            add(new GoogleCloudDataplexV1SchemaSchemaField() {{
                                description = "adipisci";
                                fields = new org.openapis.openapi.models.shared.GoogleCloudDataplexV1SchemaSchemaField[]{{
                                    add(new GoogleCloudDataplexV1SchemaSchemaField() {{}}),
                                }};
                                mode = GoogleCloudDataplexV1SchemaSchemaFieldModeEnum.MODE_UNSPECIFIED;
                                name = "Mrs. Orville Treutel";
                                type = GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum.DOUBLE;
                            }}),
                            add(new GoogleCloudDataplexV1SchemaSchemaField() {{
                                description = "dicta";
                                fields = new org.openapis.openapi.models.shared.GoogleCloudDataplexV1SchemaSchemaField[]{{
                                    add(new GoogleCloudDataplexV1SchemaSchemaField() {{}}),
                                    add(new GoogleCloudDataplexV1SchemaSchemaField() {{}}),
                                }};
                                mode = GoogleCloudDataplexV1SchemaSchemaFieldModeEnum.REQUIRED;
                                name = "Emilio Wisoky PhD";
                                type = GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum.TYPE_UNSPECIFIED;
                            }}),
                        }};
                        partitionFields = new org.openapis.openapi.models.shared.GoogleCloudDataplexV1SchemaPartitionField[]{{
                            add(new GoogleCloudDataplexV1SchemaPartitionField() {{
                                name = "Anita Koch";
                                type = GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum.FLOAT;
                            }}),
                        }};
                        partitionStyle = GoogleCloudDataplexV1SchemaPartitionStyleEnum.PARTITION_STYLE_UNSPECIFIED;
                        userManaged = false;
                    }};;
                    system = GoogleCloudDataplexV1EntitySystemEnum.BIGQUERY;
                    type = GoogleCloudDataplexV1EntityTypeEnum.TYPE_UNSPECIFIED;
                }};;
                accessToken = "nostrum";
                alt = AltEnum.PROTO;
                callback = "expedita";
                fields = "aliquid";
                key = "officia";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "perferendis";
                uploadProtocol = "eum";
                validateOnly = false;
            }};            

            DataplexProjectsLocationsLakesZonesEntitiesCreateResponse res = sdk.projects.dataplexProjectsLocationsLakesZonesEntitiesCreate(req, new DataplexProjectsLocationsLakesZonesEntitiesCreateSecurity("voluptas", "iste") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDataplexV1Entity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsLakesZonesEntitiesList

List metadata entities in a zone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesEntitiesListRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesEntitiesListResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesEntitiesListSecurity;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesEntitiesListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsLakesZonesEntitiesListRequest req = new DataplexProjectsLocationsLakesZonesEntitiesListRequest("id") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "error";
                alt = AltEnum.PROTO;
                callback = "voluptates";
                fields = "mollitia";
                filter = "laborum";
                key = "libero";
                oauthToken = "ad";
                pageSize = 536923L;
                pageToken = "enim";
                prettyPrint = false;
                quotaUser = "vitae";
                uploadType = "repellendus";
                uploadProtocol = "ex";
                view = DataplexProjectsLocationsLakesZonesEntitiesListViewEnum.FILESETS;
            }};            

            DataplexProjectsLocationsLakesZonesEntitiesListResponse res = sdk.projects.dataplexProjectsLocationsLakesZonesEntitiesList(req, new DataplexProjectsLocationsLakesZonesEntitiesListSecurity("ex", "ut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDataplexV1ListEntitiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsLakesZonesEntitiesPartitionsCreate

Create a metadata partition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1PartitionInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateRequest req = new DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateRequest("ad") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDataplexV1PartitionInput = new GoogleCloudDataplexV1PartitionInput() {{
                    etag = "voluptatem";
                    location = "molestias";
                    values = new String[]{{
                        add("aliquid"),
                        add("beatae"),
                        add("voluptatum"),
                    }};
                }};;
                accessToken = "omnis";
                alt = AltEnum.JSON;
                callback = "rerum";
                fields = "est";
                key = "culpa";
                oauthToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "officiis";
                uploadProtocol = "architecto";
                validateOnly = false;
            }};            

            DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateResponse res = sdk.projects.dataplexProjectsLocationsLakesZonesEntitiesPartitionsCreate(req, new DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateSecurity("fuga", "pariatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDataplexV1Partition != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsLakesZonesEntitiesPartitionsList

List metadata partitions of an entity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesEntitiesPartitionsListRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesEntitiesPartitionsListResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesEntitiesPartitionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsLakesZonesEntitiesPartitionsListRequest req = new DataplexProjectsLocationsLakesZonesEntitiesPartitionsListRequest("debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "alias";
                alt = AltEnum.MEDIA;
                callback = "earum";
                fields = "ex";
                filter = "sapiente";
                key = "rem";
                oauthToken = "minus";
                pageSize = 365100L;
                pageToken = "asperiores";
                prettyPrint = false;
                quotaUser = "ratione";
                uploadType = "ullam";
                uploadProtocol = "perferendis";
            }};            

            DataplexProjectsLocationsLakesZonesEntitiesPartitionsListResponse res = sdk.projects.dataplexProjectsLocationsLakesZonesEntitiesPartitionsList(req, new DataplexProjectsLocationsLakesZonesEntitiesPartitionsListSecurity("illum", "totam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDataplexV1ListPartitionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsLakesZonesEntitiesUpdate

Update a metadata entity. Only supports full resource update.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesEntitiesUpdateRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesEntitiesUpdateResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesEntitiesUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1EntityInput;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1EntitySystemEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1EntityTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1Schema;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1SchemaPartitionField;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1SchemaPartitionStyleEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1SchemaSchemaField;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1SchemaSchemaFieldModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1StorageFormatCompressionFormatEnum;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1StorageFormatCsvOptions;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1StorageFormatIcebergOptions;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1StorageFormatInput;
import org.openapis.openapi.models.shared.GoogleCloudDataplexV1StorageFormatJsonOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsLakesZonesEntitiesUpdateRequest req = new DataplexProjectsLocationsLakesZonesEntitiesUpdateRequest("impedit") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDataplexV1EntityInput = new GoogleCloudDataplexV1EntityInput() {{
                    asset = "nam";
                    dataPath = "ipsam";
                    dataPathPattern = "culpa";
                    description = "dolor";
                    displayName = "aliquam";
                    etag = "inventore";
                    format = new GoogleCloudDataplexV1StorageFormatInput() {{
                        compressionFormat = GoogleCloudDataplexV1StorageFormatCompressionFormatEnum.GZIP;
                        csv = new GoogleCloudDataplexV1StorageFormatCsvOptions() {{
                            delimiter = "veritatis";
                            encoding = "tempora";
                            headerRows = 221396;
                            quote = "consequatur";
                        }};;
                        iceberg = new GoogleCloudDataplexV1StorageFormatIcebergOptions() {{
                            metadataLocation = "architecto";
                        }};;
                        json = new GoogleCloudDataplexV1StorageFormatJsonOptions() {{
                            encoding = "sit";
                        }};;
                        mimeType = "modi";
                    }};;
                    id = "21813d52-08ec-4e7e-a53b-668451c6c6e2";
                    schema = new GoogleCloudDataplexV1Schema() {{
                        fields = new org.openapis.openapi.models.shared.GoogleCloudDataplexV1SchemaSchemaField[]{{
                            add(new GoogleCloudDataplexV1SchemaSchemaField() {{
                                description = "exercitationem";
                                fields = new org.openapis.openapi.models.shared.GoogleCloudDataplexV1SchemaSchemaField[]{{
                                    add(new GoogleCloudDataplexV1SchemaSchemaField() {{}}),
                                    add(new GoogleCloudDataplexV1SchemaSchemaField() {{}}),
                                    add(new GoogleCloudDataplexV1SchemaSchemaField() {{}}),
                                    add(new GoogleCloudDataplexV1SchemaSchemaField() {{}}),
                                }};
                                mode = GoogleCloudDataplexV1SchemaSchemaFieldModeEnum.MODE_UNSPECIFIED;
                                name = "Teri Thiel";
                                type = GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum.INT16;
                            }}),
                        }};
                        partitionFields = new org.openapis.openapi.models.shared.GoogleCloudDataplexV1SchemaPartitionField[]{{
                            add(new GoogleCloudDataplexV1SchemaPartitionField() {{
                                name = "Earnest McClure";
                                type = GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum.DECIMAL;
                            }}),
                            add(new GoogleCloudDataplexV1SchemaPartitionField() {{
                                name = "Hector Funk";
                                type = GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum.INT32;
                            }}),
                            add(new GoogleCloudDataplexV1SchemaPartitionField() {{
                                name = "Caroline Dooley";
                                type = GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum.INT32;
                            }}),
                            add(new GoogleCloudDataplexV1SchemaPartitionField() {{
                                name = "Mrs. Hilda Stark";
                                type = GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum.INT16;
                            }}),
                        }};
                        partitionStyle = GoogleCloudDataplexV1SchemaPartitionStyleEnum.PARTITION_STYLE_UNSPECIFIED;
                        userManaged = false;
                    }};;
                    system = GoogleCloudDataplexV1EntitySystemEnum.CLOUD_STORAGE;
                    type = GoogleCloudDataplexV1EntityTypeEnum.FILESET;
                }};;
                accessToken = "soluta";
                alt = AltEnum.JSON;
                callback = "omnis";
                fields = "eos";
                key = "occaecati";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "inventore";
                uploadProtocol = "fuga";
                validateOnly = false;
            }};            

            DataplexProjectsLocationsLakesZonesEntitiesUpdateResponse res = sdk.projects.dataplexProjectsLocationsLakesZonesEntitiesUpdate(req, new DataplexProjectsLocationsLakesZonesEntitiesUpdateSecurity("accusamus", "voluptatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDataplexV1Entity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsLakesZonesList

Lists zone resources in a lake.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesListRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesListResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsLakesZonesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsLakesZonesListRequest req = new DataplexProjectsLocationsLakesZonesListRequest("distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "praesentium";
                fields = "maxime";
                filter = "magnam";
                key = "temporibus";
                oauthToken = "quos";
                orderBy = "commodi";
                pageSize = 930819L;
                pageToken = "commodi";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "earum";
                uploadProtocol = "modi";
            }};            

            DataplexProjectsLocationsLakesZonesListResponse res = sdk.projects.dataplexProjectsLocationsLakesZonesList(req, new DataplexProjectsLocationsLakesZonesListSecurity("nam", "vero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDataplexV1ListZonesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsListRequest req = new DataplexProjectsLocationsListRequest("voluptatem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vel";
                alt = AltEnum.JSON;
                callback = "quasi";
                fields = "non";
                filter = "maiores";
                key = "enim";
                oauthToken = "sint";
                pageSize = 858778L;
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "nemo";
                uploadProtocol = "reprehenderit";
            }};            

            DataplexProjectsLocationsListResponse res = sdk.projects.dataplexProjectsLocationsList(req, new DataplexProjectsLocationsListSecurity("est", "quis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudLocationListLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsOperationsCancelRequest req = new DataplexProjectsLocationsOperationsCancelRequest("sint") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("hic", "necessitatibus");
                    put("asperiores", "ex");
                    put("voluptas", "debitis");
                    put("delectus", "quae");
                }};
                accessToken = "minus";
                alt = AltEnum.PROTO;
                callback = "laborum";
                fields = "consectetur";
                key = "velit";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "impedit";
                uploadProtocol = "magni";
            }};            

            DataplexProjectsLocationsOperationsCancelResponse res = sdk.projects.dataplexProjectsLocationsOperationsCancel(req, new DataplexProjectsLocationsOperationsCancelSecurity("soluta", "repudiandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsOperationsDeleteRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsOperationsDeleteResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsOperationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsOperationsDeleteRequest req = new DataplexProjectsLocationsOperationsDeleteRequest("nam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iusto";
                alt = AltEnum.MEDIA;
                callback = "sequi";
                etag = "dignissimos";
                fields = "neque";
                key = "quo";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "quibusdam";
                uploadType = "iure";
                uploadProtocol = "odit";
            }};            

            DataplexProjectsLocationsOperationsDeleteResponse res = sdk.projects.dataplexProjectsLocationsOperationsDelete(req, new DataplexProjectsLocationsOperationsDeleteSecurity("voluptatibus", "vel") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsOperationsGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsOperationsGetRequest req = new DataplexProjectsLocationsOperationsGetRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "inventore";
                alt = AltEnum.PROTO;
                callback = "libero";
                fields = "architecto";
                key = "voluptatibus";
                oauthToken = "quia";
                prettyPrint = false;
                quotaUser = "porro";
                uploadType = "aliquam";
                uploadProtocol = "velit";
                view = DataplexProjectsLocationsOperationsGetViewEnum.ENTITY_VIEW_UNSPECIFIED;
            }};            

            DataplexProjectsLocationsOperationsGetResponse res = sdk.projects.dataplexProjectsLocationsOperationsGet(req, new DataplexProjectsLocationsOperationsGetSecurity("accusantium", "vel") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataplexProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.DataplexProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataplexProjectsLocationsOperationsListRequest req = new DataplexProjectsLocationsOperationsListRequest("ea") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vero";
                alt = AltEnum.MEDIA;
                callback = "eum";
                fields = "velit";
                filter = "ut";
                key = "perspiciatis";
                oauthToken = "earum";
                pageSize = 117525L;
                pageToken = "impedit";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "iste";
                uploadProtocol = "itaque";
            }};            

            DataplexProjectsLocationsOperationsListResponse res = sdk.projects.dataplexProjectsLocationsOperationsList(req, new DataplexProjectsLocationsOperationsListSecurity("alias", "nisi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningListOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
