# projects

### Available Operations

* [automlProjectsLocationsDatasetsCreate](#automlprojectslocationsdatasetscreate) - Creates a dataset.
* [automlProjectsLocationsDatasetsExportData](#automlprojectslocationsdatasetsexportdata) - Exports dataset's data to the provided output location. Returns an empty response in the response field when it completes.
* [automlProjectsLocationsDatasetsImportData](#automlprojectslocationsdatasetsimportdata) - Imports data into a dataset. For Tables this method can only be called on an empty Dataset. For Tables: * A schema_inference_version parameter must be explicitly set. Returns an empty response in the response field when it completes.
* [automlProjectsLocationsDatasetsList](#automlprojectslocationsdatasetslist) - Lists datasets in a project.
* [automlProjectsLocationsDatasetsTableSpecsColumnSpecsList](#automlprojectslocationsdatasetstablespecscolumnspecslist) - Lists column specs in a table spec.
* [automlProjectsLocationsDatasetsTableSpecsColumnSpecsPatch](#automlprojectslocationsdatasetstablespecscolumnspecspatch) - Updates a column spec.
* [automlProjectsLocationsDatasetsTableSpecsList](#automlprojectslocationsdatasetstablespecslist) - Lists table specs in a dataset.
* [automlProjectsLocationsList](#automlprojectslocationslist) - Lists information about the supported locations for this service.
* [automlProjectsLocationsModelsBatchPredict](#automlprojectslocationsmodelsbatchpredict) - Perform a batch prediction. Unlike the online Predict, batch prediction result won't be immediately available in the response. Instead, a long running operation object is returned. User can poll the operation result via GetOperation method. Once the operation is done, BatchPredictResult is returned in the response field. Available for following ML problems: * Image Classification * Image Object Detection * Video Classification * Video Object Tracking * Text Extraction * Tables
* [automlProjectsLocationsModelsCreate](#automlprojectslocationsmodelscreate) - Creates a model. Returns a Model in the response field when it completes. When you create a model, several model evaluations are created for it: a global evaluation, and one evaluation for each annotation spec.
* [automlProjectsLocationsModelsDeploy](#automlprojectslocationsmodelsdeploy) - Deploys a model. If a model is already deployed, deploying it with the same parameters has no effect. Deploying with different parametrs (as e.g. changing node_number) will reset the deployment state without pausing the model's availability. Only applicable for Text Classification, Image Object Detection , Tables, and Image Segmentation; all other domains manage deployment automatically. Returns an empty response in the response field when it completes.
* [automlProjectsLocationsModelsExport](#automlprojectslocationsmodelsexport) - Exports a trained, "export-able", model to a user specified Google Cloud Storage location. A model is considered export-able if and only if it has an export format defined for it in ModelExportOutputConfig. Returns an empty response in the response field when it completes.
* [automlProjectsLocationsModelsExportEvaluatedExamples](#automlprojectslocationsmodelsexportevaluatedexamples) - Exports examples on which the model was evaluated (i.e. which were in the TEST set of the dataset the model was created from), together with their ground truth annotations and the annotations created (predicted) by the model. The examples, ground truth and predictions are exported in the state they were at the moment the model was evaluated. This export is available only for 30 days since the model evaluation is created. Currently only available for Tables. Returns an empty response in the response field when it completes.
* [automlProjectsLocationsModelsGetIamPolicy](#automlprojectslocationsmodelsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [automlProjectsLocationsModelsList](#automlprojectslocationsmodelslist) - Lists models.
* [automlProjectsLocationsModelsModelEvaluationsList](#automlprojectslocationsmodelsmodelevaluationslist) - Lists model evaluations.
* [automlProjectsLocationsModelsPredict](#automlprojectslocationsmodelspredict) - Perform an online prediction. The prediction result will be directly returned in the response. Available for following ML problems, and their expected request payloads: * Image Classification - Image in .JPEG, .GIF or .PNG format, image_bytes up to 30MB. * Image Object Detection - Image in .JPEG, .GIF or .PNG format, image_bytes up to 30MB. * Text Classification - TextSnippet, content up to 60,000 characters, UTF-8 encoded. * Text Extraction - TextSnippet, content up to 30,000 characters, UTF-8 NFC encoded. * Translation - TextSnippet, content up to 25,000 characters, UTF-8 encoded. * Tables - Row, with column values matching the columns of the model, up to 5MB. Not available for FORECASTING prediction_type. * Text Sentiment - TextSnippet, content up 500 characters, UTF-8 encoded.
* [automlProjectsLocationsModelsSetIamPolicy](#automlprojectslocationsmodelssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [automlProjectsLocationsModelsUndeploy](#automlprojectslocationsmodelsundeploy) - Undeploys a model. If the model is not deployed this method has no effect. Only applicable for Text Classification, Image Object Detection and Tables; all other domains manage deployment automatically. Returns an empty response in the response field when it completes.
* [automlProjectsLocationsOperationsCancel](#automlprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [automlProjectsLocationsOperationsDelete](#automlprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [automlProjectsLocationsOperationsGet](#automlprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [automlProjectsLocationsOperationsList](#automlprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [automlProjectsLocationsOperationsWait](#automlprojectslocationsoperationswait) - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* [automlProjectsLocationsTestIamPermissions](#automlprojectslocationstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## automlProjectsLocationsDatasetsCreate

Creates a dataset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsCreateRequest;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsCreateResponse;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CorrelationStats;
import org.openapis.openapi.models.shared.Dataset;
import org.openapis.openapi.models.shared.ImageClassificationDatasetMetadata;
import org.openapis.openapi.models.shared.ImageClassificationDatasetMetadataClassificationTypeEnum;
import org.openapis.openapi.models.shared.TablesDatasetMetadata;
import org.openapis.openapi.models.shared.TextClassificationDatasetMetadata;
import org.openapis.openapi.models.shared.TextClassificationDatasetMetadataClassificationTypeEnum;
import org.openapis.openapi.models.shared.TextSentimentDatasetMetadata;
import org.openapis.openapi.models.shared.TranslationDatasetMetadata;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutomlProjectsLocationsDatasetsCreateRequest req = new AutomlProjectsLocationsDatasetsCreateRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                dataset = new Dataset() {{
                    createTime = "perferendis";
                    description = "ad";
                    displayName = "natus";
                    etag = "sed";
                    exampleCount = 612096;
                    imageClassificationDatasetMetadata = new ImageClassificationDatasetMetadata() {{
                        classificationType = ImageClassificationDatasetMetadataClassificationTypeEnum.CLASSIFICATION_TYPE_UNSPECIFIED;
                    }};;
                    imageObjectDetectionDatasetMetadata = new java.util.HashMap<String, Object>() {{
                        put("laboriosam", "hic");
                        put("saepe", "fuga");
                        put("in", "corporis");
                    }};
                    name = "Brad Turcotte Jr.";
                    tablesDatasetMetadata = new TablesDatasetMetadata() {{
                        mlUseColumnSpecId = "reiciendis";
                        primaryTableSpecId = "est";
                        statsUpdateTime = "mollitia";
                        targetColumnCorrelations = new java.util.HashMap<String, org.openapis.openapi.models.shared.CorrelationStats>() {{
                            put("dolores", new CorrelationStats() {{
                                cramersV = 2103.82;
                            }});
                            put("corporis", new CorrelationStats() {{
                                cramersV = 1289.26;
                            }});
                            put("nobis", new CorrelationStats() {{
                                cramersV = 3154.28;
                            }});
                        }};
                        targetColumnSpecId = "omnis";
                        weightColumnSpecId = "nemo";
                    }};;
                    textClassificationDatasetMetadata = new TextClassificationDatasetMetadata() {{
                        classificationType = TextClassificationDatasetMetadataClassificationTypeEnum.CLASSIFICATION_TYPE_UNSPECIFIED;
                    }};;
                    textExtractionDatasetMetadata = new java.util.HashMap<String, Object>() {{
                        put("accusantium", "iure");
                        put("culpa", "doloribus");
                        put("sapiente", "architecto");
                    }};
                    textSentimentDatasetMetadata = new TextSentimentDatasetMetadata() {{
                        sentimentMax = 652790;
                    }};;
                    translationDatasetMetadata = new TranslationDatasetMetadata() {{
                        sourceLanguageCode = "dolorem";
                        targetLanguageCode = "culpa";
                    }};;
                    videoClassificationDatasetMetadata = new java.util.HashMap<String, Object>() {{
                        put("repellat", "mollitia");
                    }};
                    videoObjectTrackingDatasetMetadata = new java.util.HashMap<String, Object>() {{
                        put("numquam", "commodi");
                        put("quam", "molestiae");
                        put("velit", "error");
                    }};
                }};;
                accessToken = "quia";
                alt = AltEnum.MEDIA;
                callback = "vitae";
                fields = "laborum";
                key = "animi";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "quo";
                uploadProtocol = "sequi";
            }};            

            AutomlProjectsLocationsDatasetsCreateResponse res = sdk.projects.automlProjectsLocationsDatasetsCreate(req, new AutomlProjectsLocationsDatasetsCreateSecurity("tenetur", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.dataset != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## automlProjectsLocationsDatasetsExportData

Exports dataset's data to the provided output location. Returns an empty response in the response field when it completes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsExportDataRequest;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsExportDataResponse;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsExportDataSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BigQueryDestination;
import org.openapis.openapi.models.shared.ExportDataRequest;
import org.openapis.openapi.models.shared.GcsDestination;
import org.openapis.openapi.models.shared.OutputConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutomlProjectsLocationsDatasetsExportDataRequest req = new AutomlProjectsLocationsDatasetsExportDataRequest("id") {{
                dollarXgafv = XgafvEnum.TWO;
                exportDataRequest = new ExportDataRequest() {{
                    outputConfig = new OutputConfig() {{
                        bigqueryDestination = new BigQueryDestination() {{
                            outputUri = "aut";
                        }};;
                        gcsDestination = new GcsDestination() {{
                            outputUriPrefix = "quasi";
                        }};;
                    }};;
                }};;
                accessToken = "error";
                alt = AltEnum.PROTO;
                callback = "laborum";
                fields = "quasi";
                key = "reiciendis";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "nihil";
                uploadProtocol = "praesentium";
            }};            

            AutomlProjectsLocationsDatasetsExportDataResponse res = sdk.projects.automlProjectsLocationsDatasetsExportData(req, new AutomlProjectsLocationsDatasetsExportDataSecurity("voluptatibus", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## automlProjectsLocationsDatasetsImportData

Imports data into a dataset. For Tables this method can only be called on an empty Dataset. For Tables: * A schema_inference_version parameter must be explicitly set. Returns an empty response in the response field when it completes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsImportDataRequest;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsImportDataResponse;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsImportDataSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BigQuerySource;
import org.openapis.openapi.models.shared.GcsSource;
import org.openapis.openapi.models.shared.ImportDataRequest;
import org.openapis.openapi.models.shared.InputConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutomlProjectsLocationsDatasetsImportDataRequest req = new AutomlProjectsLocationsDatasetsImportDataRequest("omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                importDataRequest = new ImportDataRequest() {{
                    inputConfig = new InputConfig() {{
                        bigquerySource = new BigQuerySource() {{
                            inputUri = "cum";
                        }};;
                        gcsSource = new GcsSource() {{
                            inputUris = new String[]{{
                                add("doloremque"),
                            }};
                        }};;
                        params = new java.util.HashMap<String, String>() {{
                            put("ut", "maiores");
                            put("dicta", "corporis");
                        }};
                    }};;
                }};;
                accessToken = "dolore";
                alt = AltEnum.MEDIA;
                callback = "dicta";
                fields = "harum";
                key = "enim";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "repudiandae";
                uploadProtocol = "quae";
            }};            

            AutomlProjectsLocationsDatasetsImportDataResponse res = sdk.projects.automlProjectsLocationsDatasetsImportData(req, new AutomlProjectsLocationsDatasetsImportDataSecurity("ipsum", "quidem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## automlProjectsLocationsDatasetsList

Lists datasets in a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsListRequest;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsListResponse;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutomlProjectsLocationsDatasetsListRequest req = new AutomlProjectsLocationsDatasetsListRequest("molestias") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "pariatur";
                alt = AltEnum.JSON;
                callback = "praesentium";
                fields = "rem";
                filter = "voluptates";
                key = "quasi";
                oauthToken = "repudiandae";
                pageSize = 575947L;
                pageToken = "veritatis";
                prettyPrint = false;
                quotaUser = "itaque";
                uploadType = "incidunt";
                uploadProtocol = "enim";
            }};            

            AutomlProjectsLocationsDatasetsListResponse res = sdk.projects.automlProjectsLocationsDatasetsList(req, new AutomlProjectsLocationsDatasetsListSecurity("consequatur", "est") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listDatasetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## automlProjectsLocationsDatasetsTableSpecsColumnSpecsList

Lists column specs in a table spec.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsListRequest;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsListResponse;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsListRequest req = new AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsListRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fieldMask = "labore";
                fields = "modi";
                filter = "qui";
                key = "aliquid";
                oauthToken = "cupiditate";
                pageSize = 552822L;
                pageToken = "perferendis";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "assumenda";
                uploadProtocol = "ipsam";
            }};            

            AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsListResponse res = sdk.projects.automlProjectsLocationsDatasetsTableSpecsColumnSpecsList(req, new AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsListSecurity("alias", "fugit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listColumnSpecsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## automlProjectsLocationsDatasetsTableSpecsColumnSpecsPatch

Updates a column spec.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsPatchRequest;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsPatchResponse;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ArrayStats;
import org.openapis.openapi.models.shared.CategoryStats;
import org.openapis.openapi.models.shared.ColumnSpec;
import org.openapis.openapi.models.shared.CorrelatedColumn;
import org.openapis.openapi.models.shared.CorrelationStats;
import org.openapis.openapi.models.shared.DataStats;
import org.openapis.openapi.models.shared.DataType;
import org.openapis.openapi.models.shared.DataTypeTypeCodeEnum;
import org.openapis.openapi.models.shared.Float64Stats;
import org.openapis.openapi.models.shared.GranularStats;
import org.openapis.openapi.models.shared.HistogramBucket;
import org.openapis.openapi.models.shared.SingleCategoryStats;
import org.openapis.openapi.models.shared.StringStats;
import org.openapis.openapi.models.shared.StructStats;
import org.openapis.openapi.models.shared.StructType;
import org.openapis.openapi.models.shared.TimestampStats;
import org.openapis.openapi.models.shared.UnigramStats;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsPatchRequest req = new AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsPatchRequest("dolorum") {{
                dollarXgafv = XgafvEnum.TWO;
                columnSpec = new ColumnSpec() {{
                    dataStats = new DataStats() {{
                        arrayStats = new ArrayStats() {{
                            memberStats = new DataStats();;
                        }};;
                        categoryStats = new CategoryStats() {{
                            topCategoryStats = new org.openapis.openapi.models.shared.SingleCategoryStats[]{{
                                add(new SingleCategoryStats() {{
                                    count = "facilis";
                                    value = "tempore";
                                }}),
                                add(new SingleCategoryStats() {{
                                    count = "labore";
                                    value = "delectus";
                                }}),
                            }};
                        }};;
                        distinctValueCount = "eum";
                        float64Stats = new Float64Stats() {{
                            histogramBuckets = new org.openapis.openapi.models.shared.HistogramBucket[]{{
                                add(new HistogramBucket() {{
                                    count = "eligendi";
                                    max = 5761.57;
                                    min = 3960.98;
                                }}),
                            }};
                            mean = 5920.42;
                            quantiles = new Double[]{{
                                add(5722.52),
                                add(6389.21),
                                add(2230.81),
                                add(8915.55),
                            }};
                            standardDeviation = 9527.49;
                        }};;
                        nullValueCount = "dolorum";
                        stringStats = new StringStats() {{
                            topUnigramStats = new org.openapis.openapi.models.shared.UnigramStats[]{{
                                add(new UnigramStats() {{
                                    count = "in";
                                    value = "illum";
                                }}),
                                add(new UnigramStats() {{
                                    count = "maiores";
                                    value = "rerum";
                                }}),
                            }};
                        }};;
                        structStats = new StructStats() {{
                            fieldStats = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataStats>() {{
                                put("magnam", new DataStats() {{}});
                            }};
                        }};;
                        timestampStats = new TimestampStats() {{
                            granularStats = new java.util.HashMap<String, org.openapis.openapi.models.shared.GranularStats>() {{
                                put("facere", new GranularStats() {{
                                    buckets = new java.util.HashMap<String, String>() {{
                                        put("aliquid", "laborum");
                                        put("accusamus", "non");
                                    }};
                                }});
                                put("occaecati", new GranularStats() {{
                                    buckets = new java.util.HashMap<String, String>() {{
                                        put("accusamus", "delectus");
                                        put("quidem", "provident");
                                    }};
                                }});
                                put("nam", new GranularStats() {{
                                    buckets = new java.util.HashMap<String, String>() {{
                                        put("blanditiis", "deleniti");
                                        put("sapiente", "amet");
                                        put("deserunt", "nisi");
                                    }};
                                }});
                                put("vel", new GranularStats() {{
                                    buckets = new java.util.HashMap<String, String>() {{
                                        put("omnis", "molestiae");
                                        put("perferendis", "nihil");
                                        put("magnam", "distinctio");
                                    }};
                                }});
                            }};
                        }};;
                        validValueCount = "id";
                    }};;
                    dataType = new DataType() {{
                        listElementType = new DataType();;
                        nullable = false;
                        structType = new StructType() {{
                            fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataType>() {{
                                put("labore", new DataType() {{}});
                                put("suscipit", new DataType() {{}});
                            }};
                        }};;
                        timeFormat = "natus";
                        typeCode = DataTypeTypeCodeEnum.STRUCT;
                    }};;
                    displayName = "eum";
                    etag = "vero";
                    name = "Ms. Julie Gusikowski";
                    topCorrelatedColumns = new org.openapis.openapi.models.shared.CorrelatedColumn[]{{
                        add(new CorrelatedColumn() {{
                            columnSpecId = "quos";
                            correlationStats = new CorrelationStats() {{
                                cramersV = 5743.25;
                            }};
                        }}),
                        add(new CorrelatedColumn() {{
                            columnSpecId = "accusantium";
                            correlationStats = new CorrelationStats() {{
                                cramersV = 6532.01;
                            }};
                        }}),
                        add(new CorrelatedColumn() {{
                            columnSpecId = "reiciendis";
                            correlationStats = new CorrelationStats() {{
                                cramersV = 6521.03;
                            }};
                        }}),
                    }};
                }};;
                accessToken = "ad";
                alt = AltEnum.MEDIA;
                callback = "dolor";
                fields = "necessitatibus";
                key = "odit";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "quasi";
                updateMask = "iure";
                uploadType = "doloribus";
                uploadProtocol = "debitis";
            }};            

            AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsPatchResponse res = sdk.projects.automlProjectsLocationsDatasetsTableSpecsColumnSpecsPatch(req, new AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsPatchSecurity("eius", "maxime") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.columnSpec != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## automlProjectsLocationsDatasetsTableSpecsList

Lists table specs in a dataset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsTableSpecsListRequest;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsTableSpecsListResponse;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsTableSpecsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutomlProjectsLocationsDatasetsTableSpecsListRequest req = new AutomlProjectsLocationsDatasetsTableSpecsListRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "in";
                alt = AltEnum.JSON;
                callback = "architecto";
                fieldMask = "repudiandae";
                fields = "ullam";
                filter = "expedita";
                key = "nihil";
                oauthToken = "repellat";
                pageSize = 841140L;
                pageToken = "sed";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "pariatur";
                uploadProtocol = "accusantium";
            }};            

            AutomlProjectsLocationsDatasetsTableSpecsListResponse res = sdk.projects.automlProjectsLocationsDatasetsTableSpecsList(req, new AutomlProjectsLocationsDatasetsTableSpecsListSecurity("consequuntur", "praesentium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listTableSpecsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## automlProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutomlProjectsLocationsListRequest req = new AutomlProjectsLocationsListRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sunt";
                alt = AltEnum.PROTO;
                callback = "illum";
                fields = "pariatur";
                filter = "maxime";
                key = "ea";
                oauthToken = "excepturi";
                pageSize = 139972L;
                pageToken = "ea";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "ab";
                uploadProtocol = "maiores";
            }};            

            AutomlProjectsLocationsListResponse res = sdk.projects.automlProjectsLocationsList(req, new AutomlProjectsLocationsListSecurity("quidem", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## automlProjectsLocationsModelsBatchPredict

Perform a batch prediction. Unlike the online Predict, batch prediction result won't be immediately available in the response. Instead, a long running operation object is returned. User can poll the operation result via GetOperation method. Once the operation is done, BatchPredictResult is returned in the response field. Available for following ML problems: * Image Classification * Image Object Detection * Video Classification * Video Object Tracking * Text Extraction * Tables

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsBatchPredictRequest;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsBatchPredictResponse;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsBatchPredictSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchPredictInputConfig;
import org.openapis.openapi.models.shared.BatchPredictOutputConfig;
import org.openapis.openapi.models.shared.BatchPredictRequest;
import org.openapis.openapi.models.shared.BigQueryDestination;
import org.openapis.openapi.models.shared.BigQuerySource;
import org.openapis.openapi.models.shared.GcsDestination;
import org.openapis.openapi.models.shared.GcsSource;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutomlProjectsLocationsModelsBatchPredictRequest req = new AutomlProjectsLocationsModelsBatchPredictRequest("voluptate") {{
                dollarXgafv = XgafvEnum.ONE;
                batchPredictRequest = new BatchPredictRequest() {{
                    inputConfig = new BatchPredictInputConfig() {{
                        bigquerySource = new BigQuerySource() {{
                            inputUri = "nam";
                        }};;
                        gcsSource = new GcsSource() {{
                            inputUris = new String[]{{
                                add("pariatur"),
                            }};
                        }};;
                    }};;
                    outputConfig = new BatchPredictOutputConfig() {{
                        bigqueryDestination = new BigQueryDestination() {{
                            outputUri = "nemo";
                        }};;
                        gcsDestination = new GcsDestination() {{
                            outputUriPrefix = "voluptatibus";
                        }};;
                    }};;
                    params = new java.util.HashMap<String, String>() {{
                        put("fugiat", "amet");
                    }};
                }};;
                accessToken = "aut";
                alt = AltEnum.PROTO;
                callback = "corporis";
                fields = "hic";
                key = "libero";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "quis";
                uploadProtocol = "totam";
            }};            

            AutomlProjectsLocationsModelsBatchPredictResponse res = sdk.projects.automlProjectsLocationsModelsBatchPredict(req, new AutomlProjectsLocationsModelsBatchPredictSecurity("dignissimos", "eaque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## automlProjectsLocationsModelsCreate

Creates a model. Returns a Model in the response field when it completes. When you create a model, several model evaluations are created for it: a global evaluation, and one evaluation for each annotation spec.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsCreateRequest;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsCreateResponse;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ArrayStats;
import org.openapis.openapi.models.shared.CategoryStats;
import org.openapis.openapi.models.shared.ColumnSpec;
import org.openapis.openapi.models.shared.CorrelatedColumn;
import org.openapis.openapi.models.shared.CorrelationStats;
import org.openapis.openapi.models.shared.DataStats;
import org.openapis.openapi.models.shared.DataType;
import org.openapis.openapi.models.shared.DataTypeTypeCodeEnum;
import org.openapis.openapi.models.shared.Float64Stats;
import org.openapis.openapi.models.shared.GranularStats;
import org.openapis.openapi.models.shared.HistogramBucket;
import org.openapis.openapi.models.shared.ImageClassificationModelMetadata;
import org.openapis.openapi.models.shared.ImageObjectDetectionModelMetadata;
import org.openapis.openapi.models.shared.ModelDeploymentStateEnum;
import org.openapis.openapi.models.shared.ModelInput;
import org.openapis.openapi.models.shared.SingleCategoryStats;
import org.openapis.openapi.models.shared.StringStats;
import org.openapis.openapi.models.shared.StructStats;
import org.openapis.openapi.models.shared.StructType;
import org.openapis.openapi.models.shared.TablesModelColumnInfo;
import org.openapis.openapi.models.shared.TablesModelMetadata;
import org.openapis.openapi.models.shared.TextClassificationModelMetadata;
import org.openapis.openapi.models.shared.TextClassificationModelMetadataClassificationTypeEnum;
import org.openapis.openapi.models.shared.TextExtractionModelMetadata;
import org.openapis.openapi.models.shared.TimestampStats;
import org.openapis.openapi.models.shared.TranslationModelMetadata;
import org.openapis.openapi.models.shared.UnigramStats;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutomlProjectsLocationsModelsCreateRequest req = new AutomlProjectsLocationsModelsCreateRequest("quis") {{
                dollarXgafv = XgafvEnum.ONE;
                modelInput = new ModelInput() {{
                    createTime = "eos";
                    datasetId = "perferendis";
                    deploymentState = ModelDeploymentStateEnum.DEPLOYMENT_STATE_UNSPECIFIED;
                    displayName = "minus";
                    imageClassificationModelMetadata = new ImageClassificationModelMetadata() {{
                        baseModelId = "quam";
                        modelType = "dolor";
                        nodeCount = "vero";
                        nodeQps = 3453.52;
                        stopReason = "hic";
                        trainBudget = "recusandae";
                        trainCost = "omnis";
                    }};;
                    imageObjectDetectionModelMetadata = new ImageObjectDetectionModelMetadata() {{
                        modelType = "facilis";
                        nodeCount = "perspiciatis";
                        nodeQps = 318.38;
                        stopReason = "porro";
                        trainBudgetMilliNodeHours = "consequuntur";
                        trainCostMilliNodeHours = "blanditiis";
                    }};;
                    name = "Gary Mayert";
                    tablesModelMetadata = new TablesModelMetadata() {{
                        disableEarlyStopping = false;
                        inputFeatureColumnSpecs = new org.openapis.openapi.models.shared.ColumnSpec[]{{
                            add(new ColumnSpec() {{
                                dataStats = new DataStats() {{
                                    arrayStats = new ArrayStats() {{
                                        memberStats = new DataStats() {{}};
                                    }};
                                    categoryStats = new CategoryStats() {{
                                        topCategoryStats = new org.openapis.openapi.models.shared.SingleCategoryStats[]{{
                                            add(new SingleCategoryStats() {{
                                                count = "modi";
                                                value = "iste";
                                            }}),
                                            add(new SingleCategoryStats() {{
                                                count = "dolorum";
                                                value = "deleniti";
                                            }}),
                                            add(new SingleCategoryStats() {{
                                                count = "pariatur";
                                                value = "provident";
                                            }}),
                                            add(new SingleCategoryStats() {{
                                                count = "nobis";
                                                value = "libero";
                                            }}),
                                        }};
                                    }};
                                    distinctValueCount = "delectus";
                                    float64Stats = new Float64Stats() {{
                                        histogramBuckets = new org.openapis.openapi.models.shared.HistogramBucket[]{{
                                            add(new HistogramBucket() {{
                                                count = "quos";
                                                max = 3982.21;
                                                min = 2123.9;
                                            }}),
                                            add(new HistogramBucket() {{
                                                count = "dolorem";
                                                max = 2224.43;
                                                min = 1861.93;
                                            }}),
                                        }};
                                        mean = 2187.49;
                                        quantiles = new Double[]{{
                                            add(5695.74),
                                            add(7395.51),
                                            add(4521.09),
                                            add(4904.59),
                                        }};
                                        standardDeviation = 9702.37;
                                    }};
                                    nullValueCount = "amet";
                                    stringStats = new StringStats() {{
                                        topUnigramStats = new org.openapis.openapi.models.shared.UnigramStats[]{{
                                            add(new UnigramStats() {{
                                                count = "numquam";
                                                value = "veritatis";
                                            }}),
                                            add(new UnigramStats() {{
                                                count = "ipsa";
                                                value = "ipsa";
                                            }}),
                                            add(new UnigramStats() {{
                                                count = "iure";
                                                value = "odio";
                                            }}),
                                        }};
                                    }};
                                    structStats = new StructStats() {{
                                        fieldStats = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataStats>() {{
                                            put("accusamus", new DataStats() {{}});
                                            put("quidem", new DataStats() {{}});
                                        }};
                                    }};
                                    timestampStats = new TimestampStats() {{
                                        granularStats = new java.util.HashMap<String, org.openapis.openapi.models.shared.GranularStats>() {{
                                            put("voluptas", new GranularStats() {{
                                                buckets = new java.util.HashMap<String, String>() {{
                                                    put("eos", "atque");
                                                    put("sit", "fugiat");
                                                    put("ab", "soluta");
                                                }};
                                            }});
                                            put("dolorum", new GranularStats() {{
                                                buckets = new java.util.HashMap<String, String>() {{
                                                    put("voluptate", "dolorum");
                                                    put("deleniti", "omnis");
                                                }};
                                            }});
                                            put("necessitatibus", new GranularStats() {{
                                                buckets = new java.util.HashMap<String, String>() {{
                                                    put("asperiores", "nihil");
                                                    put("ipsum", "voluptate");
                                                    put("id", "saepe");
                                                }};
                                            }});
                                            put("eius", new GranularStats() {{
                                                buckets = new java.util.HashMap<String, String>() {{
                                                    put("perferendis", "amet");
                                                }};
                                            }});
                                        }};
                                    }};
                                    validValueCount = "optio";
                                }};
                                dataType = new DataType() {{
                                    listElementType = new DataType() {{}};
                                    nullable = false;
                                    structType = new StructType() {{
                                        fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataType>() {{
                                            put("ad", new DataType() {{}});
                                            put("saepe", new DataType() {{}});
                                            put("suscipit", new DataType() {{}});
                                            put("deserunt", new DataType() {{}});
                                        }};
                                    }};
                                    timeFormat = "provident";
                                    typeCode = DataTypeTypeCodeEnum.TIMESTAMP;
                                }};
                                displayName = "repellendus";
                                etag = "totam";
                                name = "James Swaniawski";
                                topCorrelatedColumns = new org.openapis.openapi.models.shared.CorrelatedColumn[]{{
                                    add(new CorrelatedColumn() {{
                                        columnSpecId = "quod";
                                        correlationStats = new CorrelationStats() {{
                                            cramersV = 8853.38;
                                        }};
                                    }}),
                                    add(new CorrelatedColumn() {{
                                        columnSpecId = "qui";
                                        correlationStats = new CorrelationStats() {{
                                            cramersV = 6798.8;
                                        }};
                                    }}),
                                }};
                            }}),
                            add(new ColumnSpec() {{
                                dataStats = new DataStats() {{
                                    arrayStats = new ArrayStats() {{
                                        memberStats = new DataStats() {{}};
                                    }};
                                    categoryStats = new CategoryStats() {{
                                        topCategoryStats = new org.openapis.openapi.models.shared.SingleCategoryStats[]{{
                                            add(new SingleCategoryStats() {{
                                                count = "esse";
                                                value = "harum";
                                            }}),
                                            add(new SingleCategoryStats() {{
                                                count = "iusto";
                                                value = "ipsum";
                                            }}),
                                            add(new SingleCategoryStats() {{
                                                count = "quisquam";
                                                value = "tenetur";
                                            }}),
                                            add(new SingleCategoryStats() {{
                                                count = "amet";
                                                value = "tempore";
                                            }}),
                                        }};
                                    }};
                                    distinctValueCount = "accusamus";
                                    float64Stats = new Float64Stats() {{
                                        histogramBuckets = new org.openapis.openapi.models.shared.HistogramBucket[]{{
                                            add(new HistogramBucket() {{
                                                count = "enim";
                                                max = 2133.12;
                                                min = 9574.51;
                                            }}),
                                            add(new HistogramBucket() {{
                                                count = "totam";
                                                max = 4717.52;
                                                min = 256.62;
                                            }}),
                                        }};
                                        mean = 7115.84;
                                        quantiles = new Double[]{{
                                            add(1536.94),
                                        }};
                                        standardDeviation = 4246.85;
                                    }};
                                    nullValueCount = "libero";
                                    stringStats = new StringStats() {{
                                        topUnigramStats = new org.openapis.openapi.models.shared.UnigramStats[]{{
                                            add(new UnigramStats() {{
                                                count = "deserunt";
                                                value = "quam";
                                            }}),
                                            add(new UnigramStats() {{
                                                count = "ipsum";
                                                value = "incidunt";
                                            }}),
                                        }};
                                    }};
                                    structStats = new StructStats() {{
                                        fieldStats = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataStats>() {{
                                            put("cupiditate", new DataStats() {{}});
                                        }};
                                    }};
                                    timestampStats = new TimestampStats() {{
                                        granularStats = new java.util.HashMap<String, org.openapis.openapi.models.shared.GranularStats>() {{
                                            put("pariatur", new GranularStats() {{
                                                buckets = new java.util.HashMap<String, String>() {{
                                                    put("dicta", "laborum");
                                                    put("totam", "incidunt");
                                                    put("aspernatur", "dolores");
                                                }};
                                            }});
                                            put("distinctio", new GranularStats() {{
                                                buckets = new java.util.HashMap<String, String>() {{
                                                    put("aliquid", "quam");
                                                    put("molestias", "temporibus");
                                                    put("qui", "neque");
                                                }};
                                            }});
                                            put("fugit", new GranularStats() {{
                                                buckets = new java.util.HashMap<String, String>() {{
                                                    put("odio", "sunt");
                                                }};
                                            }});
                                            put("ullam", new GranularStats() {{
                                                buckets = new java.util.HashMap<String, String>() {{
                                                    put("hic", "voluptatem");
                                                    put("cumque", "soluta");
                                                    put("nobis", "et");
                                                }};
                                            }});
                                        }};
                                    }};
                                    validValueCount = "saepe";
                                }};
                                dataType = new DataType() {{
                                    listElementType = new DataType() {{}};
                                    nullable = false;
                                    structType = new StructType() {{
                                        fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataType>() {{
                                            put("veritatis", new DataType() {{}});
                                        }};
                                    }};
                                    timeFormat = "nobis";
                                    typeCode = DataTypeTypeCodeEnum.STRING;
                                }};
                                displayName = "tempore";
                                etag = "cupiditate";
                                name = "Dixie Durgan";
                                topCorrelatedColumns = new org.openapis.openapi.models.shared.CorrelatedColumn[]{{
                                    add(new CorrelatedColumn() {{
                                        columnSpecId = "dolorum";
                                        correlationStats = new CorrelationStats() {{
                                            cramersV = 1002.94;
                                        }};
                                    }}),
                                }};
                            }}),
                            add(new ColumnSpec() {{
                                dataStats = new DataStats() {{
                                    arrayStats = new ArrayStats() {{
                                        memberStats = new DataStats() {{}};
                                    }};
                                    categoryStats = new CategoryStats() {{
                                        topCategoryStats = new org.openapis.openapi.models.shared.SingleCategoryStats[]{{
                                            add(new SingleCategoryStats() {{
                                                count = "aut";
                                                value = "quas";
                                            }}),
                                        }};
                                    }};
                                    distinctValueCount = "itaque";
                                    float64Stats = new Float64Stats() {{
                                        histogramBuckets = new org.openapis.openapi.models.shared.HistogramBucket[]{{
                                            add(new HistogramBucket() {{
                                                count = "est";
                                                max = 8330.38;
                                                min = 7851.53;
                                            }}),
                                        }};
                                        mean = 9843.3;
                                        quantiles = new Double[]{{
                                            add(7034.95),
                                            add(5864.1),
                                        }};
                                        standardDeviation = 1816.31;
                                    }};
                                    nullValueCount = "quae";
                                    stringStats = new StringStats() {{
                                        topUnigramStats = new org.openapis.openapi.models.shared.UnigramStats[]{{
                                            add(new UnigramStats() {{
                                                count = "odio";
                                                value = "occaecati";
                                            }}),
                                            add(new UnigramStats() {{
                                                count = "voluptatibus";
                                                value = "quisquam";
                                            }}),
                                            add(new UnigramStats() {{
                                                count = "vero";
                                                value = "omnis";
                                            }}),
                                        }};
                                    }};
                                    structStats = new StructStats() {{
                                        fieldStats = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataStats>() {{
                                            put("ipsum", new DataStats() {{}});
                                            put("delectus", new DataStats() {{}});
                                        }};
                                    }};
                                    timestampStats = new TimestampStats() {{
                                        granularStats = new java.util.HashMap<String, org.openapis.openapi.models.shared.GranularStats>() {{
                                            put("consectetur", new GranularStats() {{
                                                buckets = new java.util.HashMap<String, String>() {{
                                                    put("tenetur", "dignissimos");
                                                    put("hic", "distinctio");
                                                    put("quod", "odio");
                                                    put("similique", "facilis");
                                                }};
                                            }});
                                            put("vero", new GranularStats() {{
                                                buckets = new java.util.HashMap<String, String>() {{
                                                    put("dolore", "quibusdam");
                                                    put("illum", "sequi");
                                                }};
                                            }});
                                        }};
                                    }};
                                    validValueCount = "natus";
                                }};
                                dataType = new DataType() {{
                                    listElementType = new DataType() {{}};
                                    nullable = false;
                                    structType = new StructType() {{
                                        fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataType>() {{
                                            put("aut", new DataType() {{}});
                                            put("voluptatibus", new DataType() {{}});
                                            put("exercitationem", new DataType() {{}});
                                            put("nulla", new DataType() {{}});
                                        }};
                                    }};
                                    timeFormat = "fugit";
                                    typeCode = DataTypeTypeCodeEnum.STRUCT;
                                }};
                                displayName = "maiores";
                                etag = "doloribus";
                                name = "Miss Vicky Kuphal";
                                topCorrelatedColumns = new org.openapis.openapi.models.shared.CorrelatedColumn[]{{
                                    add(new CorrelatedColumn() {{
                                        columnSpecId = "ea";
                                        correlationStats = new CorrelationStats() {{
                                            cramersV = 1369;
                                        }};
                                    }}),
                                    add(new CorrelatedColumn() {{
                                        columnSpecId = "vel";
                                        correlationStats = new CorrelationStats() {{
                                            cramersV = 8221.18;
                                        }};
                                    }}),
                                }};
                            }}),
                            add(new ColumnSpec() {{
                                dataStats = new DataStats() {{
                                    arrayStats = new ArrayStats() {{
                                        memberStats = new DataStats() {{}};
                                    }};
                                    categoryStats = new CategoryStats() {{
                                        topCategoryStats = new org.openapis.openapi.models.shared.SingleCategoryStats[]{{
                                            add(new SingleCategoryStats() {{
                                                count = "ratione";
                                                value = "ex";
                                            }}),
                                            add(new SingleCategoryStats() {{
                                                count = "laudantium";
                                                value = "dicta";
                                            }}),
                                        }};
                                    }};
                                    distinctValueCount = "dolor";
                                    float64Stats = new Float64Stats() {{
                                        histogramBuckets = new org.openapis.openapi.models.shared.HistogramBucket[]{{
                                            add(new HistogramBucket() {{
                                                count = "quasi";
                                                max = 4061.2;
                                                min = 8621.92;
                                            }}),
                                            add(new HistogramBucket() {{
                                                count = "excepturi";
                                                max = 9729.2;
                                                min = 3436.05;
                                            }}),
                                            add(new HistogramBucket() {{
                                                count = "sapiente";
                                                max = 7888.73;
                                                min = 9065.56;
                                            }}),
                                            add(new HistogramBucket() {{
                                                count = "ea";
                                                max = 7740.48;
                                                min = 3592.71;
                                            }}),
                                        }};
                                        mean = 3331.45;
                                        quantiles = new Double[]{{
                                            add(811.01),
                                            add(3018.31),
                                        }};
                                        standardDeviation = 4072.41;
                                    }};
                                    nullValueCount = "quo";
                                    stringStats = new StringStats() {{
                                        topUnigramStats = new org.openapis.openapi.models.shared.UnigramStats[]{{
                                            add(new UnigramStats() {{
                                                count = "recusandae";
                                                value = "aspernatur";
                                            }}),
                                        }};
                                    }};
                                    structStats = new StructStats() {{
                                        fieldStats = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataStats>() {{
                                            put("eaque", new DataStats() {{}});
                                            put("a", new DataStats() {{}});
                                        }};
                                    }};
                                    timestampStats = new TimestampStats() {{
                                        granularStats = new java.util.HashMap<String, org.openapis.openapi.models.shared.GranularStats>() {{
                                            put("aut", new GranularStats() {{
                                                buckets = new java.util.HashMap<String, String>() {{
                                                    put("deleniti", "impedit");
                                                }};
                                            }});
                                            put("aliquam", new GranularStats() {{
                                                buckets = new java.util.HashMap<String, String>() {{
                                                    put("accusamus", "inventore");
                                                }};
                                            }});
                                            put("non", new GranularStats() {{
                                                buckets = new java.util.HashMap<String, String>() {{
                                                    put("dolorum", "laborum");
                                                }};
                                            }});
                                        }};
                                    }};
                                    validValueCount = "placeat";
                                }};
                                dataType = new DataType() {{
                                    listElementType = new DataType() {{}};
                                    nullable = false;
                                    structType = new StructType() {{
                                        fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataType>() {{
                                            put("eum", new DataType() {{}});
                                        }};
                                    }};
                                    timeFormat = "autem";
                                    typeCode = DataTypeTypeCodeEnum.STRUCT;
                                }};
                                displayName = "quas";
                                etag = "assumenda";
                                name = "Mrs. Shane Reinger";
                                topCorrelatedColumns = new org.openapis.openapi.models.shared.CorrelatedColumn[]{{
                                    add(new CorrelatedColumn() {{
                                        columnSpecId = "provident";
                                        correlationStats = new CorrelationStats() {{
                                            cramersV = 553.74;
                                        }};
                                    }}),
                                }};
                            }}),
                        }};
                        optimizationObjective = "molestiae";
                        optimizationObjectivePrecisionValue = 3015.98;
                        optimizationObjectiveRecallValue = 4879.35;
                        tablesModelColumnInfo = new org.openapis.openapi.models.shared.TablesModelColumnInfo[]{{
                            add(new TablesModelColumnInfo() {{
                                columnDisplayName = "esse";
                                columnSpecName = "esse";
                                featureImportance = 5245.93;
                            }}),
                            add(new TablesModelColumnInfo() {{
                                columnDisplayName = "fuga";
                                columnSpecName = "reprehenderit";
                                featureImportance = 6956.26;
                            }}),
                        }};
                        targetColumnSpec = new ColumnSpec() {{
                            dataStats = new DataStats() {{
                                arrayStats = new ArrayStats() {{
                                    memberStats = new DataStats();;
                                }};;
                                categoryStats = new CategoryStats() {{
                                    topCategoryStats = new org.openapis.openapi.models.shared.SingleCategoryStats[]{{
                                        add(new SingleCategoryStats() {{
                                            count = "ut";
                                            value = "eum";
                                        }}),
                                        add(new SingleCategoryStats() {{
                                            count = "suscipit";
                                            value = "assumenda";
                                        }}),
                                        add(new SingleCategoryStats() {{
                                            count = "eos";
                                            value = "praesentium";
                                        }}),
                                        add(new SingleCategoryStats() {{
                                            count = "quisquam";
                                            value = "veritatis";
                                        }}),
                                    }};
                                }};;
                                distinctValueCount = "ipsa";
                                float64Stats = new Float64Stats() {{
                                    histogramBuckets = new org.openapis.openapi.models.shared.HistogramBucket[]{{
                                        add(new HistogramBucket() {{
                                            count = "quidem";
                                            max = 2065.94;
                                            min = 7786.96;
                                        }}),
                                        add(new HistogramBucket() {{
                                            count = "illum";
                                            max = 7774.08;
                                            min = 6813.59;
                                        }}),
                                        add(new HistogramBucket() {{
                                            count = "eius";
                                            max = 1783.67;
                                            min = 3738.13;
                                        }}),
                                    }};
                                    mean = 698.59;
                                    quantiles = new Double[]{{
                                        add(96.88),
                                        add(2728.22),
                                        add(8920.5),
                                    }};
                                    standardDeviation = 3708.53;
                                }};;
                                nullValueCount = "aspernatur";
                                stringStats = new StringStats() {{
                                    topUnigramStats = new org.openapis.openapi.models.shared.UnigramStats[]{{
                                        add(new UnigramStats() {{
                                            count = "quo";
                                            value = "esse";
                                        }}),
                                    }};
                                }};;
                                structStats = new StructStats() {{
                                    fieldStats = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataStats>() {{
                                        put("aperiam", new DataStats() {{}});
                                        put("distinctio", new DataStats() {{}});
                                        put("quod", new DataStats() {{}});
                                        put("dignissimos", new DataStats() {{}});
                                    }};
                                }};;
                                timestampStats = new TimestampStats() {{
                                    granularStats = new java.util.HashMap<String, org.openapis.openapi.models.shared.GranularStats>() {{
                                        put("nihil", new GranularStats() {{
                                            buckets = new java.util.HashMap<String, String>() {{
                                                put("accusamus", "aliquam");
                                                put("odio", "occaecati");
                                                put("commodi", "sapiente");
                                            }};
                                        }});
                                    }};
                                }};;
                                validValueCount = "dolores";
                            }};;
                            dataType = new DataType() {{
                                listElementType = new DataType();;
                                nullable = false;
                                structType = new StructType() {{
                                    fields = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataType>() {{
                                        put("molestiae", new DataType() {{}});
                                        put("accusantium", new DataType() {{}});
                                        put("porro", new DataType() {{}});
                                    }};
                                }};;
                                timeFormat = "eum";
                                typeCode = DataTypeTypeCodeEnum.STRING;
                            }};;
                            displayName = "praesentium";
                            etag = "consequuntur";
                            name = "Wayne Parker";
                            topCorrelatedColumns = new org.openapis.openapi.models.shared.CorrelatedColumn[]{{
                                add(new CorrelatedColumn() {{
                                    columnSpecId = "explicabo";
                                    correlationStats = new CorrelationStats() {{
                                        cramersV = 3256.85;
                                    }};
                                }}),
                                add(new CorrelatedColumn() {{
                                    columnSpecId = "nisi";
                                    correlationStats = new CorrelationStats() {{
                                        cramersV = 1470.14;
                                    }};
                                }}),
                                add(new CorrelatedColumn() {{
                                    columnSpecId = "sapiente";
                                    correlationStats = new CorrelationStats() {{
                                        cramersV = 1598.7;
                                    }};
                                }}),
                            }};
                        }};;
                        trainBudgetMilliNodeHours = "ratione";
                        trainCostMilliNodeHours = "explicabo";
                    }};;
                    textClassificationModelMetadata = new TextClassificationModelMetadata() {{
                        classificationType = TextClassificationModelMetadataClassificationTypeEnum.MULTILABEL;
                    }};;
                    textExtractionModelMetadata = new TextExtractionModelMetadata() {{
                        modelHint = "occaecati";
                    }};;
                    textSentimentModelMetadata = new java.util.HashMap<String, Object>() {{
                        put("et", "esse");
                        put("eveniet", "accusamus");
                        put("veritatis", "esse");
                    }};
                    translationModelMetadata = new TranslationModelMetadata() {{
                        baseModel = "quod";
                        sourceLanguageCode = "nam";
                        targetLanguageCode = "vero";
                    }};;
                    updateTime = "aliquid";
                    videoClassificationModelMetadata = new java.util.HashMap<String, Object>() {{
                        put("saepe", "vel");
                    }};
                    videoObjectTrackingModelMetadata = new java.util.HashMap<String, Object>() {{
                        put("molestiae", "rerum");
                        put("occaecati", "minima");
                        put("distinctio", "eligendi");
                    }};
                }};;
                accessToken = "sit";
                alt = AltEnum.MEDIA;
                callback = "tempore";
                fields = "adipisci";
                key = "cumque";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "consequatur";
                uploadType = "minus";
                uploadProtocol = "quaerat";
            }};            

            AutomlProjectsLocationsModelsCreateResponse res = sdk.projects.automlProjectsLocationsModelsCreate(req, new AutomlProjectsLocationsModelsCreateSecurity("sapiente", "consectetur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## automlProjectsLocationsModelsDeploy

Deploys a model. If a model is already deployed, deploying it with the same parameters has no effect. Deploying with different parametrs (as e.g. changing node_number) will reset the deployment state without pausing the model's availability. Only applicable for Text Classification, Image Object Detection , Tables, and Image Segmentation; all other domains manage deployment automatically. Returns an empty response in the response field when it completes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsDeployRequest;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsDeployResponse;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsDeploySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DeployModelRequest;
import org.openapis.openapi.models.shared.ImageClassificationModelDeploymentMetadata;
import org.openapis.openapi.models.shared.ImageObjectDetectionModelDeploymentMetadata;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutomlProjectsLocationsModelsDeployRequest req = new AutomlProjectsLocationsModelsDeployRequest("esse") {{
                dollarXgafv = XgafvEnum.TWO;
                deployModelRequest = new DeployModelRequest() {{
                    imageClassificationModelDeploymentMetadata = new ImageClassificationModelDeploymentMetadata() {{
                        nodeCount = "provident";
                    }};;
                    imageObjectDetectionModelDeploymentMetadata = new ImageObjectDetectionModelDeploymentMetadata() {{
                        nodeCount = "a";
                    }};;
                }};;
                accessToken = "nulla";
                alt = AltEnum.MEDIA;
                callback = "esse";
                fields = "quasi";
                key = "a";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "pariatur";
                uploadProtocol = "possimus";
            }};            

            AutomlProjectsLocationsModelsDeployResponse res = sdk.projects.automlProjectsLocationsModelsDeploy(req, new AutomlProjectsLocationsModelsDeploySecurity("quia", "eveniet") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## automlProjectsLocationsModelsExport

Exports a trained, "export-able", model to a user specified Google Cloud Storage location. A model is considered export-able if and only if it has an export format defined for it in ModelExportOutputConfig. Returns an empty response in the response field when it completes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsExportRequest;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsExportResponse;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsExportSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ExportModelRequest;
import org.openapis.openapi.models.shared.GcrDestination;
import org.openapis.openapi.models.shared.GcsDestination;
import org.openapis.openapi.models.shared.ModelExportOutputConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutomlProjectsLocationsModelsExportRequest req = new AutomlProjectsLocationsModelsExportRequest("asperiores") {{
                dollarXgafv = XgafvEnum.TWO;
                exportModelRequest = new ExportModelRequest() {{
                    outputConfig = new ModelExportOutputConfig() {{
                        gcrDestination = new GcrDestination() {{
                            outputUri = "veritatis";
                        }};;
                        gcsDestination = new GcsDestination() {{
                            outputUriPrefix = "consequuntur";
                        }};;
                        modelFormat = "quasi";
                        params = new java.util.HashMap<String, String>() {{
                            put("culpa", "aliquid");
                            put("tenetur", "quae");
                            put("earum", "vel");
                        }};
                    }};;
                }};;
                accessToken = "in";
                alt = AltEnum.JSON;
                callback = "libero";
                fields = "illum";
                key = "soluta";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "aliquam";
                uploadType = "sapiente";
                uploadProtocol = "dicta";
            }};            

            AutomlProjectsLocationsModelsExportResponse res = sdk.projects.automlProjectsLocationsModelsExport(req, new AutomlProjectsLocationsModelsExportSecurity("ullam", "reprehenderit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## automlProjectsLocationsModelsExportEvaluatedExamples

Exports examples on which the model was evaluated (i.e. which were in the TEST set of the dataset the model was created from), together with their ground truth annotations and the annotations created (predicted) by the model. The examples, ground truth and predictions are exported in the state they were at the moment the model was evaluated. This export is available only for 30 days since the model evaluation is created. Currently only available for Tables. Returns an empty response in the response field when it completes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsExportEvaluatedExamplesRequest;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsExportEvaluatedExamplesResponse;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsExportEvaluatedExamplesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BigQueryDestination;
import org.openapis.openapi.models.shared.ExportEvaluatedExamplesOutputConfig;
import org.openapis.openapi.models.shared.ExportEvaluatedExamplesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutomlProjectsLocationsModelsExportEvaluatedExamplesRequest req = new AutomlProjectsLocationsModelsExportEvaluatedExamplesRequest("ullam") {{
                dollarXgafv = XgafvEnum.ONE;
                exportEvaluatedExamplesRequest = new ExportEvaluatedExamplesRequest() {{
                    outputConfig = new ExportEvaluatedExamplesOutputConfig() {{
                        bigqueryDestination = new BigQueryDestination() {{
                            outputUri = "aut";
                        }};;
                    }};;
                }};;
                accessToken = "voluptatum";
                alt = AltEnum.JSON;
                callback = "quibusdam";
                fields = "ex";
                key = "deleniti";
                oauthToken = "itaque";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "architecto";
                uploadProtocol = "omnis";
            }};            

            AutomlProjectsLocationsModelsExportEvaluatedExamplesResponse res = sdk.projects.automlProjectsLocationsModelsExportEvaluatedExamples(req, new AutomlProjectsLocationsModelsExportEvaluatedExamplesSecurity("tenetur", "quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## automlProjectsLocationsModelsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutomlProjectsLocationsModelsGetIamPolicyRequest req = new AutomlProjectsLocationsModelsGetIamPolicyRequest("at") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptate";
                alt = AltEnum.JSON;
                callback = "minima";
                fields = "veritatis";
                key = "consectetur";
                oauthToken = "adipisci";
                optionsRequestedPolicyVersion = 614465L;
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "accusantium";
                uploadProtocol = "rem";
            }};            

            AutomlProjectsLocationsModelsGetIamPolicyResponse res = sdk.projects.automlProjectsLocationsModelsGetIamPolicy(req, new AutomlProjectsLocationsModelsGetIamPolicySecurity("aut", "laudantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## automlProjectsLocationsModelsList

Lists models.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsListRequest;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsListResponse;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutomlProjectsLocationsModelsListRequest req = new AutomlProjectsLocationsModelsListRequest("eum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ab";
                alt = AltEnum.MEDIA;
                callback = "non";
                fields = "voluptatem";
                filter = "dolor";
                key = "occaecati";
                oauthToken = "numquam";
                pageSize = 771089L;
                pageToken = "explicabo";
                prettyPrint = false;
                quotaUser = "voluptas";
                uploadType = "aut";
                uploadProtocol = "dignissimos";
            }};            

            AutomlProjectsLocationsModelsListResponse res = sdk.projects.automlProjectsLocationsModelsList(req, new AutomlProjectsLocationsModelsListSecurity("dicta", "maiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listModelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## automlProjectsLocationsModelsModelEvaluationsList

Lists model evaluations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsModelEvaluationsListRequest;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsModelEvaluationsListResponse;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsModelEvaluationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutomlProjectsLocationsModelsModelEvaluationsListRequest req = new AutomlProjectsLocationsModelsModelEvaluationsListRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptatibus";
                alt = AltEnum.MEDIA;
                callback = "asperiores";
                fields = "aperiam";
                filter = "ea";
                key = "quaerat";
                oauthToken = "consequuntur";
                pageSize = 831520L;
                pageToken = "officia";
                prettyPrint = false;
                quotaUser = "maxime";
                uploadType = "dignissimos";
                uploadProtocol = "officia";
            }};            

            AutomlProjectsLocationsModelsModelEvaluationsListResponse res = sdk.projects.automlProjectsLocationsModelsModelEvaluationsList(req, new AutomlProjectsLocationsModelsModelEvaluationsListSecurity("asperiores", "nemo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listModelEvaluationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## automlProjectsLocationsModelsPredict

Perform an online prediction. The prediction result will be directly returned in the response. Available for following ML problems, and their expected request payloads: * Image Classification - Image in .JPEG, .GIF or .PNG format, image_bytes up to 30MB. * Image Object Detection - Image in .JPEG, .GIF or .PNG format, image_bytes up to 30MB. * Text Classification - TextSnippet, content up to 60,000 characters, UTF-8 encoded. * Text Extraction - TextSnippet, content up to 30,000 characters, UTF-8 NFC encoded. * Translation - TextSnippet, content up to 25,000 characters, UTF-8 encoded. * Tables - Row, with column values matching the columns of the model, up to 5MB. Not available for FORECASTING prediction_type. * Text Sentiment - TextSnippet, content up 500 characters, UTF-8 encoded.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsPredictRequest;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsPredictResponse;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsPredictSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BigQuerySource;
import org.openapis.openapi.models.shared.BoundingPoly;
import org.openapis.openapi.models.shared.Document;
import org.openapis.openapi.models.shared.DocumentDimensions;
import org.openapis.openapi.models.shared.DocumentDimensionsUnitEnum;
import org.openapis.openapi.models.shared.DocumentInputConfig;
import org.openapis.openapi.models.shared.ExamplePayload;
import org.openapis.openapi.models.shared.GcsSource;
import org.openapis.openapi.models.shared.Image;
import org.openapis.openapi.models.shared.InputConfig;
import org.openapis.openapi.models.shared.Layout;
import org.openapis.openapi.models.shared.LayoutTextSegmentTypeEnum;
import org.openapis.openapi.models.shared.NormalizedVertex;
import org.openapis.openapi.models.shared.PredictRequest;
import org.openapis.openapi.models.shared.Row;
import org.openapis.openapi.models.shared.TextSegment;
import org.openapis.openapi.models.shared.TextSnippet;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutomlProjectsLocationsModelsPredictRequest req = new AutomlProjectsLocationsModelsPredictRequest("quae") {{
                dollarXgafv = XgafvEnum.ONE;
                predictRequest = new PredictRequest() {{
                    params = new java.util.HashMap<String, String>() {{
                        put("quod", "labore");
                        put("ab", "adipisci");
                        put("fuga", "id");
                        put("suscipit", "velit");
                    }};
                    payload = new ExamplePayload() {{
                        document = new Document() {{
                            documentDimensions = new DocumentDimensions() {{
                                height = 6339.31;
                                unit = DocumentDimensionsUnitEnum.CENTIMETER;
                                width = 9268.8;
                            }};;
                            documentText = new TextSnippet() {{
                                content = "totam";
                                contentUri = "fugiat";
                                mimeType = "vel";
                            }};;
                            inputConfig = new DocumentInputConfig() {{
                                gcsSource = new GcsSource() {{
                                    inputUris = new String[]{{
                                        add("quos"),
                                        add("vel"),
                                    }};
                                }};;
                            }};;
                            layout = new org.openapis.openapi.models.shared.Layout[]{{
                                add(new Layout() {{
                                    boundingPoly = new BoundingPoly() {{
                                        normalizedVertices = new org.openapis.openapi.models.shared.NormalizedVertex[]{{
                                            add(new NormalizedVertex() {{
                                                x = 7065.75;
                                                y = 7382.27;
                                            }}),
                                            add(new NormalizedVertex() {{
                                                x = 4148.57;
                                                y = 4471.44;
                                            }}),
                                            add(new NormalizedVertex() {{
                                                x = 3605.45;
                                                y = 9689.04;
                                            }}),
                                            add(new NormalizedVertex() {{
                                                x = 8286.57;
                                                y = 3631.61;
                                            }}),
                                        }};
                                    }};
                                    pageNumber = 924967;
                                    textSegment = new TextSegment() {{
                                        content = "aliquid";
                                        endOffset = "aperiam";
                                        startOffset = "cum";
                                    }};
                                    textSegmentType = LayoutTextSegmentTypeEnum.PARAGRAPH;
                                }}),
                                add(new Layout() {{
                                    boundingPoly = new BoundingPoly() {{
                                        normalizedVertices = new org.openapis.openapi.models.shared.NormalizedVertex[]{{
                                            add(new NormalizedVertex() {{
                                                x = 3485.19;
                                                y = 9372.85;
                                            }}),
                                            add(new NormalizedVertex() {{
                                                x = 8149.67;
                                                y = 2572.33;
                                            }}),
                                        }};
                                    }};
                                    pageNumber = 985492;
                                    textSegment = new TextSegment() {{
                                        content = "suscipit";
                                        endOffset = "reiciendis";
                                        startOffset = "quidem";
                                    }};
                                    textSegmentType = LayoutTextSegmentTypeEnum.TABLE_CELL;
                                }}),
                            }};
                            pageCount = 897071;
                        }};;
                        image = new Image() {{
                            imageBytes = "dolore";
                            inputConfig = new InputConfig() {{
                                bigquerySource = new BigQuerySource() {{
                                    inputUri = "sunt";
                                }};;
                                gcsSource = new GcsSource() {{
                                    inputUris = new String[]{{
                                        add("adipisci"),
                                        add("non"),
                                        add("amet"),
                                        add("beatae"),
                                    }};
                                }};;
                                params = new java.util.HashMap<String, String>() {{
                                    put("a", "debitis");
                                    put("consectetur", "corporis");
                                }};
                            }};;
                            thumbnailUri = "harum";
                        }};;
                        row = new Row() {{
                            columnSpecIds = new String[]{{
                                add("ipsa"),
                                add("voluptates"),
                            }};
                            values = new Object[]{{
                                add("vitae"),
                                add("accusamus"),
                                add("similique"),
                            }};
                        }};;
                        textSnippet = new TextSnippet() {{
                            content = "tempora";
                            contentUri = "aspernatur";
                            mimeType = "voluptas";
                        }};;
                    }};;
                }};;
                accessToken = "voluptas";
                alt = AltEnum.MEDIA;
                callback = "minima";
                fields = "nobis";
                key = "dolorum";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "minus";
                uploadType = "dolores";
                uploadProtocol = "blanditiis";
            }};            

            AutomlProjectsLocationsModelsPredictResponse res = sdk.projects.automlProjectsLocationsModelsPredict(req, new AutomlProjectsLocationsModelsPredictSecurity("in", "dolore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.predictResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## automlProjectsLocationsModelsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.SetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutomlProjectsLocationsModelsSetIamPolicyRequest req = new AutomlProjectsLocationsModelsSetIamPolicyRequest("aliquam") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "ullam";
                                    expression = "adipisci";
                                    location = "cum";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("hic"),
                                    add("nesciunt"),
                                    add("culpa"),
                                }};
                                role = "corrupti";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "pariatur";
                                    expression = "totam";
                                    location = "hic";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("sit"),
                                    add("rerum"),
                                    add("sed"),
                                    add("reiciendis"),
                                }};
                                role = "explicabo";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "asperiores";
                                    expression = "facilis";
                                    location = "voluptate";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("iste"),
                                }};
                                role = "dolore";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "laborum";
                                    expression = "sed";
                                    location = "in";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("explicabo"),
                                    add("voluptas"),
                                    add("unde"),
                                }};
                                role = "architecto";
                            }}),
                        }};
                        etag = "suscipit";
                        version = 960257;
                    }};;
                }};;
                accessToken = "debitis";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                fields = "perferendis";
                key = "corrupti";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "incidunt";
                uploadType = "sed";
                uploadProtocol = "provident";
            }};            

            AutomlProjectsLocationsModelsSetIamPolicyResponse res = sdk.projects.automlProjectsLocationsModelsSetIamPolicy(req, new AutomlProjectsLocationsModelsSetIamPolicySecurity("eius", "necessitatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## automlProjectsLocationsModelsUndeploy

Undeploys a model. If the model is not deployed this method has no effect. Only applicable for Text Classification, Image Object Detection and Tables; all other domains manage deployment automatically. Returns an empty response in the response field when it completes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsUndeployRequest;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsUndeployResponse;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsModelsUndeploySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutomlProjectsLocationsModelsUndeployRequest req = new AutomlProjectsLocationsModelsUndeployRequest("ipsum") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quos", "voluptatibus");
                    put("tempora", "tempora");
                    put("voluptate", "reiciendis");
                }};
                accessToken = "ex";
                alt = AltEnum.JSON;
                callback = "non";
                fields = "officiis";
                key = "praesentium";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "incidunt";
                uploadProtocol = "ipsam";
            }};            

            AutomlProjectsLocationsModelsUndeployResponse res = sdk.projects.automlProjectsLocationsModelsUndeploy(req, new AutomlProjectsLocationsModelsUndeploySecurity("debitis", "rem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## automlProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutomlProjectsLocationsOperationsCancelRequest req = new AutomlProjectsLocationsOperationsCancelRequest("sit") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("veniam", "minima");
                    put("recusandae", "reiciendis");
                    put("nulla", "magni");
                }};
                accessToken = "aperiam";
                alt = AltEnum.PROTO;
                callback = "numquam";
                fields = "veniam";
                key = "in";
                oauthToken = "officiis";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "laudantium";
                uploadProtocol = "exercitationem";
            }};            

            AutomlProjectsLocationsOperationsCancelResponse res = sdk.projects.automlProjectsLocationsOperationsCancel(req, new AutomlProjectsLocationsOperationsCancelSecurity("praesentium", "cum") {{
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

## automlProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsOperationsDeleteRequest;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsOperationsDeleteResponse;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsOperationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutomlProjectsLocationsOperationsDeleteRequest req = new AutomlProjectsLocationsOperationsDeleteRequest("laboriosam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatum";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "expedita";
                key = "debitis";
                oauthToken = "neque";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "nostrum";
                uploadProtocol = "officia";
            }};            

            AutomlProjectsLocationsOperationsDeleteResponse res = sdk.projects.automlProjectsLocationsOperationsDelete(req, new AutomlProjectsLocationsOperationsDeleteSecurity("dolorum", "corrupti") {{
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

## automlProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutomlProjectsLocationsOperationsGetRequest req = new AutomlProjectsLocationsOperationsGetRequest("accusamus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "atque";
                alt = AltEnum.JSON;
                callback = "ut";
                fieldMask = "fugiat";
                fields = "voluptatem";
                key = "culpa";
                oauthToken = "expedita";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "consequatur";
                uploadProtocol = "esse";
            }};            

            AutomlProjectsLocationsOperationsGetResponse res = sdk.projects.automlProjectsLocationsOperationsGet(req, new AutomlProjectsLocationsOperationsGetSecurity("ipsam", "sit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## automlProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutomlProjectsLocationsOperationsListRequest req = new AutomlProjectsLocationsOperationsListRequest("voluptatum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "repudiandae";
                alt = AltEnum.MEDIA;
                callback = "et";
                fields = "blanditiis";
                filter = "ex";
                key = "sed";
                oauthToken = "sit";
                pageSize = 425508L;
                pageToken = "nostrum";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "error";
                uploadProtocol = "consequatur";
            }};            

            AutomlProjectsLocationsOperationsListResponse res = sdk.projects.automlProjectsLocationsOperationsList(req, new AutomlProjectsLocationsOperationsListSecurity("incidunt", "reiciendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## automlProjectsLocationsOperationsWait

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsOperationsWaitRequest;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsOperationsWaitResponse;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsOperationsWaitSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.WaitOperationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutomlProjectsLocationsOperationsWaitRequest req = new AutomlProjectsLocationsOperationsWaitRequest("dolorem") {{
                dollarXgafv = XgafvEnum.TWO;
                waitOperationRequest = new WaitOperationRequest() {{
                    timeout = "dicta";
                }};;
                accessToken = "architecto";
                alt = AltEnum.MEDIA;
                callback = "labore";
                fields = "quidem";
                key = "atque";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "tenetur";
                uploadProtocol = "laboriosam";
            }};            

            AutomlProjectsLocationsOperationsWaitResponse res = sdk.projects.automlProjectsLocationsOperationsWait(req, new AutomlProjectsLocationsOperationsWaitSecurity("alias", "amet") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## automlProjectsLocationsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutomlProjectsLocationsTestIamPermissionsRequest req = new AutomlProjectsLocationsTestIamPermissionsRequest("deserunt") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("reiciendis"),
                        add("provident"),
                        add("repellendus"),
                    }};
                }};;
                accessToken = "delectus";
                alt = AltEnum.PROTO;
                callback = "perferendis";
                fields = "est";
                key = "quidem";
                oauthToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "facere";
                uploadType = "fuga";
                uploadProtocol = "praesentium";
            }};            

            AutomlProjectsLocationsTestIamPermissionsResponse res = sdk.projects.automlProjectsLocationsTestIamPermissions(req, new AutomlProjectsLocationsTestIamPermissionsSecurity("mollitia", "veniam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.testIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
