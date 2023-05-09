# projects

### Available Operations

* [datalabelingProjectsAnnotationSpecSetsCreate](#datalabelingprojectsannotationspecsetscreate) - Creates an annotation spec set by providing a set of labels.
* [datalabelingProjectsAnnotationSpecSetsList](#datalabelingprojectsannotationspecsetslist) - Lists annotation spec sets for a project. Pagination is supported.
* [datalabelingProjectsDatasetsAnnotatedDatasetsExamplesList](#datalabelingprojectsdatasetsannotateddatasetsexampleslist) - Lists examples in an annotated dataset. Pagination is supported.
* [datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreate](#datalabelingprojectsdatasetsannotateddatasetsfeedbackthreadsfeedbackmessagescreate) - Create a FeedbackMessage object.
* [datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesList](#datalabelingprojectsdatasetsannotateddatasetsfeedbackthreadsfeedbackmessageslist) - List FeedbackMessages with pagination.
* [datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsList](#datalabelingprojectsdatasetsannotateddatasetsfeedbackthreadslist) - List FeedbackThreads with pagination.
* [datalabelingProjectsDatasetsAnnotatedDatasetsList](#datalabelingprojectsdatasetsannotateddatasetslist) - Lists annotated datasets for a dataset. Pagination is supported.
* [datalabelingProjectsDatasetsCreate](#datalabelingprojectsdatasetscreate) - Creates dataset. If success return a Dataset resource.
* [datalabelingProjectsDatasetsDataItemsList](#datalabelingprojectsdatasetsdataitemslist) - Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported.
* [datalabelingProjectsDatasetsEvaluationsExampleComparisonsSearch](#datalabelingprojectsdatasetsevaluationsexamplecomparisonssearch) - Searches example comparisons from an evaluation. The return format is a list of example comparisons that show ground truth and prediction(s) for a single input. Search by providing an evaluation ID.
* [datalabelingProjectsDatasetsExportData](#datalabelingprojectsdatasetsexportdata) - Exports data and annotations from dataset.
* [datalabelingProjectsDatasetsImageLabel](#datalabelingprojectsdatasetsimagelabel) - Starts a labeling task for image. The type of image labeling task is configured by feature in the request.
* [datalabelingProjectsDatasetsImportData](#datalabelingprojectsdatasetsimportdata) - Imports data into dataset based on source locations defined in request. It can be called multiple times for the same dataset. Each dataset can only have one long running operation running on it. For example, no labeling task (also long running operation) can be started while importing is still ongoing. Vice versa.
* [datalabelingProjectsDatasetsList](#datalabelingprojectsdatasetslist) - Lists datasets under a project. Pagination is supported.
* [datalabelingProjectsDatasetsTextLabel](#datalabelingprojectsdatasetstextlabel) - Starts a labeling task for text. The type of text labeling task is configured by feature in the request.
* [datalabelingProjectsDatasetsVideoLabel](#datalabelingprojectsdatasetsvideolabel) - Starts a labeling task for video. The type of video labeling task is configured by feature in the request.
* [datalabelingProjectsEvaluationJobsCreate](#datalabelingprojectsevaluationjobscreate) - Creates an evaluation job.
* [datalabelingProjectsEvaluationJobsList](#datalabelingprojectsevaluationjobslist) - Lists all evaluation jobs within a project with possible filters. Pagination is supported.
* [datalabelingProjectsEvaluationJobsPatch](#datalabelingprojectsevaluationjobspatch) - Updates an evaluation job. You can only update certain fields of the job's EvaluationJobConfig: `humanAnnotationConfig.instruction`, `exampleCount`, and `exampleSamplePercentage`. If you want to change any other aspect of the evaluation job, you must delete the job and create a new one.
* [datalabelingProjectsEvaluationJobsPause](#datalabelingprojectsevaluationjobspause) - Pauses an evaluation job. Pausing an evaluation job that is already in a `PAUSED` state is a no-op.
* [datalabelingProjectsEvaluationJobsResume](#datalabelingprojectsevaluationjobsresume) - Resumes a paused evaluation job. A deleted evaluation job can't be resumed. Resuming a running or scheduled evaluation job is a no-op.
* [datalabelingProjectsEvaluationsSearch](#datalabelingprojectsevaluationssearch) - Searches evaluations within a project.
* [datalabelingProjectsInstructionsCreate](#datalabelingprojectsinstructionscreate) - Creates an instruction for how data should be labeled.
* [datalabelingProjectsInstructionsList](#datalabelingprojectsinstructionslist) - Lists instructions for a project. Pagination is supported.
* [datalabelingProjectsOperationsCancel](#datalabelingprojectsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [datalabelingProjectsOperationsDelete](#datalabelingprojectsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [datalabelingProjectsOperationsGet](#datalabelingprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [datalabelingProjectsOperationsList](#datalabelingprojectsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## datalabelingProjectsAnnotationSpecSetsCreate

Creates an annotation spec set by providing a set of labels.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalabelingProjectsAnnotationSpecSetsCreateRequest;
import org.openapis.openapi.models.operations.DatalabelingProjectsAnnotationSpecSetsCreateResponse;
import org.openapis.openapi.models.operations.DatalabelingProjectsAnnotationSpecSetsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1AnnotationSpec;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1AnnotationSpecSet;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalabelingProjectsAnnotationSpecSetsCreateRequest req = new DatalabelingProjectsAnnotationSpecSetsCreateRequest("ipsam") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest = new GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest() {{
                    annotationSpecSet = new GoogleCloudDatalabelingV1beta1AnnotationSpecSet() {{
                        annotationSpecs = new org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1AnnotationSpec[]{{
                            add(new GoogleCloudDatalabelingV1beta1AnnotationSpec() {{
                                description = "quo";
                                displayName = "odit";
                                index = 870013;
                            }}),
                            add(new GoogleCloudDatalabelingV1beta1AnnotationSpec() {{
                                description = "at";
                                displayName = "maiores";
                                index = 473608;
                            }}),
                            add(new GoogleCloudDatalabelingV1beta1AnnotationSpec() {{
                                description = "quod";
                                displayName = "quod";
                                index = 461479;
                            }}),
                            add(new GoogleCloudDatalabelingV1beta1AnnotationSpec() {{
                                description = "totam";
                                displayName = "porro";
                                index = 678880;
                            }}),
                        }};
                        blockingResources = new String[]{{
                            add("nam"),
                        }};
                        description = "officia";
                        displayName = "occaecati";
                        name = "Cassandra Welch";
                    }};;
                }};;
                accessToken = "beatae";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "modi";
                key = "qui";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "esse";
                uploadProtocol = "ipsum";
            }};            

            DatalabelingProjectsAnnotationSpecSetsCreateResponse res = sdk.projects.datalabelingProjectsAnnotationSpecSetsCreate(req, new DatalabelingProjectsAnnotationSpecSetsCreateSecurity("excepturi", "aspernatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatalabelingV1beta1AnnotationSpecSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datalabelingProjectsAnnotationSpecSetsList

Lists annotation spec sets for a project. Pagination is supported.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalabelingProjectsAnnotationSpecSetsListRequest;
import org.openapis.openapi.models.operations.DatalabelingProjectsAnnotationSpecSetsListResponse;
import org.openapis.openapi.models.operations.DatalabelingProjectsAnnotationSpecSetsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalabelingProjectsAnnotationSpecSetsListRequest req = new DatalabelingProjectsAnnotationSpecSetsListRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "natus";
                alt = AltEnum.JSON;
                callback = "iste";
                fields = "dolor";
                filter = "natus";
                key = "laboriosam";
                oauthToken = "hic";
                pageSize = 902599L;
                pageToken = "fuga";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "corporis";
                uploadProtocol = "iste";
            }};            

            DatalabelingProjectsAnnotationSpecSetsListResponse res = sdk.projects.datalabelingProjectsAnnotationSpecSetsList(req, new DatalabelingProjectsAnnotationSpecSetsListSecurity("iure", "saepe") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datalabelingProjectsDatasetsAnnotatedDatasetsExamplesList

Lists examples in an annotated dataset. Pagination is supported.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListRequest;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListResponse;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListRequest req = new DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListRequest("quidem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "est";
                fields = "mollitia";
                filter = "laborum";
                key = "dolores";
                oauthToken = "dolorem";
                pageSize = 358152L;
                pageToken = "explicabo";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "enim";
                uploadProtocol = "omnis";
            }};            

            DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListResponse res = sdk.projects.datalabelingProjectsDatasetsAnnotatedDatasetsExamplesList(req, new DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListSecurity("nemo", "minima") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatalabelingV1beta1ListExamplesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreate

Create a FeedbackMessage object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreateRequest;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreateResponse;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1FeedbackMessage;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreateRequest req = new DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreateRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDatalabelingV1beta1FeedbackMessage = new GoogleCloudDatalabelingV1beta1FeedbackMessage() {{
                    body = "iure";
                    createTime = "culpa";
                    image = "doloribus";
                    name = "Juan O'Hara";
                    operatorFeedbackMetadata = new java.util.HashMap<String, Object>() {{
                        put("repellat", "mollitia");
                    }};
                    requesterFeedbackMetadata = new java.util.HashMap<String, Object>() {{
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

            DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreateResponse res = sdk.projects.datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreate(req, new DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreateSecurity("tenetur", "ipsam") {{
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

## datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesList

List FeedbackMessages with pagination.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListRequest;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListResponse;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListRequest req = new DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListRequest("id") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aut";
                alt = AltEnum.JSON;
                callback = "error";
                fields = "temporibus";
                key = "laborum";
                oauthToken = "quasi";
                pageSize = 971945L;
                pageToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "nihil";
                uploadProtocol = "praesentium";
            }};            

            DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListResponse res = sdk.projects.datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesList(req, new DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListSecurity("voluptatibus", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatalabelingV1beta1ListFeedbackMessagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsList

List FeedbackThreads with pagination.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListRequest;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListResponse;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListRequest req = new DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListRequest("omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cum";
                alt = AltEnum.JSON;
                callback = "doloremque";
                fields = "reprehenderit";
                key = "ut";
                oauthToken = "maiores";
                pageSize = 120196L;
                pageToken = "corporis";
                prettyPrint = false;
                quotaUser = "dolore";
                uploadType = "iusto";
                uploadProtocol = "dicta";
            }};            

            DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListResponse res = sdk.projects.datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsList(req, new DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListSecurity("harum", "enim") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatalabelingV1beta1ListFeedbackThreadsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datalabelingProjectsDatasetsAnnotatedDatasetsList

Lists annotated datasets for a dataset. Pagination is supported.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsAnnotatedDatasetsListRequest;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsAnnotatedDatasetsListResponse;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsAnnotatedDatasetsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalabelingProjectsDatasetsAnnotatedDatasetsListRequest req = new DatalabelingProjectsDatasetsAnnotatedDatasetsListRequest("accusamus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repudiandae";
                alt = AltEnum.JSON;
                callback = "ipsum";
                fields = "quidem";
                filter = "molestias";
                key = "excepturi";
                oauthToken = "pariatur";
                pageSize = 265389L;
                pageToken = "praesentium";
                prettyPrint = false;
                quotaUser = "rem";
                uploadType = "voluptates";
                uploadProtocol = "quasi";
            }};            

            DatalabelingProjectsDatasetsAnnotatedDatasetsListResponse res = sdk.projects.datalabelingProjectsDatasetsAnnotatedDatasetsList(req, new DatalabelingProjectsDatasetsAnnotatedDatasetsListSecurity("repudiandae", "sint") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datalabelingProjectsDatasetsCreate

Creates dataset. If success return a Dataset resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsCreateRequest;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsCreateResponse;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1BigQuerySource;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1ClassificationMetadata;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1CreateDatasetRequest;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1Dataset;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1GcsSource;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1InputConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1TextMetadata;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalabelingProjectsDatasetsCreateRequest req = new DatalabelingProjectsDatasetsCreateRequest("veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDatalabelingV1beta1CreateDatasetRequest = new GoogleCloudDatalabelingV1beta1CreateDatasetRequest() {{
                    dataset = new GoogleCloudDatalabelingV1beta1Dataset() {{
                        blockingResources = new String[]{{
                            add("enim"),
                            add("consequatur"),
                        }};
                        createTime = "est";
                        dataItemCount = "quibusdam";
                        description = "explicabo";
                        displayName = "deserunt";
                        inputConfigs = new org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1InputConfig[]{{
                            add(new GoogleCloudDatalabelingV1beta1InputConfig() {{
                                annotationType = GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum.TEXT_CLASSIFICATION_ANNOTATION;
                                bigquerySource = new GoogleCloudDatalabelingV1beta1BigQuerySource() {{
                                    inputUri = "labore";
                                }};
                                classificationMetadata = new GoogleCloudDatalabelingV1beta1ClassificationMetadata() {{
                                    isMultiLabel = false;
                                }};
                                dataType = GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum.IMAGE;
                                gcsSource = new GoogleCloudDatalabelingV1beta1GcsSource() {{
                                    inputUri = "qui";
                                    mimeType = "aliquid";
                                }};
                                textMetadata = new GoogleCloudDatalabelingV1beta1TextMetadata() {{
                                    languageCode = "cupiditate";
                                }};
                            }}),
                            add(new GoogleCloudDatalabelingV1beta1InputConfig() {{
                                annotationType = GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum.VIDEO_SHOTS_CLASSIFICATION_ANNOTATION;
                                bigquerySource = new GoogleCloudDatalabelingV1beta1BigQuerySource() {{
                                    inputUri = "perferendis";
                                }};
                                classificationMetadata = new GoogleCloudDatalabelingV1beta1ClassificationMetadata() {{
                                    isMultiLabel = false;
                                }};
                                dataType = GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum.DATA_TYPE_UNSPECIFIED;
                                gcsSource = new GoogleCloudDatalabelingV1beta1GcsSource() {{
                                    inputUri = "assumenda";
                                    mimeType = "ipsam";
                                }};
                                textMetadata = new GoogleCloudDatalabelingV1beta1TextMetadata() {{
                                    languageCode = "alias";
                                }};
                            }}),
                            add(new GoogleCloudDatalabelingV1beta1InputConfig() {{
                                annotationType = GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum.IMAGE_BOUNDING_BOX_ANNOTATION;
                                bigquerySource = new GoogleCloudDatalabelingV1beta1BigQuerySource() {{
                                    inputUri = "dolorum";
                                }};
                                classificationMetadata = new GoogleCloudDatalabelingV1beta1ClassificationMetadata() {{
                                    isMultiLabel = false;
                                }};
                                dataType = GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum.VIDEO;
                                gcsSource = new GoogleCloudDatalabelingV1beta1GcsSource() {{
                                    inputUri = "tempora";
                                    mimeType = "facilis";
                                }};
                                textMetadata = new GoogleCloudDatalabelingV1beta1TextMetadata() {{
                                    languageCode = "tempore";
                                }};
                            }}),
                        }};
                        lastMigrateTime = "labore";
                        name = "Andre Franey";
                    }};;
                }};;
                accessToken = "aliquid";
                alt = AltEnum.MEDIA;
                callback = "necessitatibus";
                fields = "sint";
                key = "officia";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "a";
                uploadProtocol = "dolorum";
            }};            

            DatalabelingProjectsDatasetsCreateResponse res = sdk.projects.datalabelingProjectsDatasetsCreate(req, new DatalabelingProjectsDatasetsCreateSecurity("in", "in") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatalabelingV1beta1Dataset != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datalabelingProjectsDatasetsDataItemsList

Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsDataItemsListRequest;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsDataItemsListResponse;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsDataItemsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalabelingProjectsDatasetsDataItemsListRequest req = new DatalabelingProjectsDatasetsDataItemsListRequest("illum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "rerum";
                alt = AltEnum.JSON;
                callback = "magnam";
                fields = "cumque";
                filter = "facere";
                key = "ea";
                oauthToken = "aliquid";
                pageSize = 675439L;
                pageToken = "accusamus";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "occaecati";
                uploadProtocol = "enim";
            }};            

            DatalabelingProjectsDatasetsDataItemsListResponse res = sdk.projects.datalabelingProjectsDatasetsDataItemsList(req, new DatalabelingProjectsDatasetsDataItemsListSecurity("accusamus", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatalabelingV1beta1ListDataItemsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datalabelingProjectsDatasetsEvaluationsExampleComparisonsSearch

Searches example comparisons from an evaluation. The return format is a list of example comparisons that show ground truth and prediction(s) for a single input. Search by providing an evaluation ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchRequest;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchResponse;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchRequest req = new DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchRequest("quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDatalabelingV1beta1SearchExampleComparisonsRequest = new GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest() {{
                    pageSize = 725255;
                    pageToken = "id";
                }};;
                accessToken = "blanditiis";
                alt = AltEnum.MEDIA;
                callback = "sapiente";
                fields = "amet";
                key = "deserunt";
                oauthToken = "nisi";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "natus";
                uploadProtocol = "omnis";
            }};            

            DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchResponse res = sdk.projects.datalabelingProjectsDatasetsEvaluationsExampleComparisonsSearch(req, new DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchSecurity("molestiae", "perferendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatalabelingV1beta1SearchExampleComparisonsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datalabelingProjectsDatasetsExportData

Exports data and annotations from dataset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsExportDataRequest;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsExportDataResponse;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsExportDataSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1ExportDataRequest;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1GcsDestination;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1GcsFolderDestination;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1OutputConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalabelingProjectsDatasetsExportDataRequest req = new DatalabelingProjectsDatasetsExportDataRequest("nihil") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDatalabelingV1beta1ExportDataRequest = new GoogleCloudDatalabelingV1beta1ExportDataRequest() {{
                    annotatedDataset = "distinctio";
                    filter = "id";
                    outputConfig = new GoogleCloudDatalabelingV1beta1OutputConfig() {{
                        gcsDestination = new GoogleCloudDatalabelingV1beta1GcsDestination() {{
                            mimeType = "labore";
                            outputUri = "labore";
                        }};;
                        gcsFolderDestination = new GoogleCloudDatalabelingV1beta1GcsFolderDestination() {{
                            outputFolderUri = "suscipit";
                        }};;
                    }};;
                    userEmailAddress = "natus";
                }};;
                accessToken = "nobis";
                alt = AltEnum.MEDIA;
                callback = "vero";
                fields = "aspernatur";
                key = "architecto";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "et";
                uploadType = "excepturi";
                uploadProtocol = "ullam";
            }};            

            DatalabelingProjectsDatasetsExportDataResponse res = sdk.projects.datalabelingProjectsDatasetsExportData(req, new DatalabelingProjectsDatasetsExportDataSecurity("provident", "quos") {{
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

## datalabelingProjectsDatasetsImageLabel

Starts a labeling task for image. The type of image labeling task is configured by feature in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsImageLabelRequest;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsImageLabelResponse;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsImageLabelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1BoundingPolyConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1ImageClassificationConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1LabelImageRequest;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1PolylineConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1SegmentationConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalabelingProjectsDatasetsImageLabelRequest req = new DatalabelingProjectsDatasetsImageLabelRequest("sint") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDatalabelingV1beta1LabelImageRequest = new GoogleCloudDatalabelingV1beta1LabelImageRequest() {{
                    basicConfig = new GoogleCloudDatalabelingV1beta1HumanAnnotationConfig() {{
                        annotatedDatasetDescription = "mollitia";
                        annotatedDatasetDisplayName = "reiciendis";
                        contributorEmails = new String[]{{
                            add("ad"),
                            add("eum"),
                            add("dolor"),
                        }};
                        instruction = "necessitatibus";
                        labelGroup = "odit";
                        languageCode = "nemo";
                        questionDuration = "quasi";
                        replicaCount = 435865;
                        userEmailAddress = "doloribus";
                    }};;
                    boundingPolyConfig = new GoogleCloudDatalabelingV1beta1BoundingPolyConfig() {{
                        annotationSpecSet = "debitis";
                        instructionMessage = "eius";
                    }};;
                    feature = GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnum.POLYLINE;
                    imageClassificationConfig = new GoogleCloudDatalabelingV1beta1ImageClassificationConfig() {{
                        allowMultiLabel = false;
                        annotationSpecSet = "deleniti";
                        answerAggregationType = GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnum.UNANIMOUS_VOTE;
                    }};;
                    polylineConfig = new GoogleCloudDatalabelingV1beta1PolylineConfig() {{
                        annotationSpecSet = "in";
                        instructionMessage = "architecto";
                    }};;
                    segmentationConfig = new GoogleCloudDatalabelingV1beta1SegmentationConfig() {{
                        annotationSpecSet = "architecto";
                        instructionMessage = "repudiandae";
                    }};;
                }};;
                accessToken = "ullam";
                alt = AltEnum.PROTO;
                callback = "nihil";
                fields = "repellat";
                key = "quibusdam";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "pariatur";
                uploadProtocol = "accusantium";
            }};            

            DatalabelingProjectsDatasetsImageLabelResponse res = sdk.projects.datalabelingProjectsDatasetsImageLabel(req, new DatalabelingProjectsDatasetsImageLabelSecurity("consequuntur", "praesentium") {{
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

## datalabelingProjectsDatasetsImportData

Imports data into dataset based on source locations defined in request. It can be called multiple times for the same dataset. Each dataset can only have one long running operation running on it. For example, no labeling task (also long running operation) can be started while importing is still ongoing. Vice versa.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsImportDataRequest;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsImportDataResponse;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsImportDataSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1BigQuerySource;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1ClassificationMetadata;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1GcsSource;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1ImportDataRequest;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1InputConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1TextMetadata;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalabelingProjectsDatasetsImportDataRequest req = new DatalabelingProjectsDatasetsImportDataRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDatalabelingV1beta1ImportDataRequest = new GoogleCloudDatalabelingV1beta1ImportDataRequest() {{
                    inputConfig = new GoogleCloudDatalabelingV1beta1InputConfig() {{
                        annotationType = GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum.IMAGE_CLASSIFICATION_ANNOTATION;
                        bigquerySource = new GoogleCloudDatalabelingV1beta1BigQuerySource() {{
                            inputUri = "quo";
                        }};;
                        classificationMetadata = new GoogleCloudDatalabelingV1beta1ClassificationMetadata() {{
                            isMultiLabel = false;
                        }};;
                        dataType = GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum.GENERAL_DATA;
                        gcsSource = new GoogleCloudDatalabelingV1beta1GcsSource() {{
                            inputUri = "pariatur";
                            mimeType = "maxime";
                        }};;
                        textMetadata = new GoogleCloudDatalabelingV1beta1TextMetadata() {{
                            languageCode = "ea";
                        }};;
                    }};;
                    userEmailAddress = "excepturi";
                }};;
                accessToken = "odit";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "ab";
                key = "maiores";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "voluptate";
                uploadProtocol = "autem";
            }};            

            DatalabelingProjectsDatasetsImportDataResponse res = sdk.projects.datalabelingProjectsDatasetsImportData(req, new DatalabelingProjectsDatasetsImportDataSecurity("nam", "eaque") {{
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

## datalabelingProjectsDatasetsList

Lists datasets under a project. Pagination is supported.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsListRequest;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsListResponse;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalabelingProjectsDatasetsListRequest req = new DatalabelingProjectsDatasetsListRequest("pariatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptatibus";
                alt = AltEnum.JSON;
                callback = "fugiat";
                fields = "amet";
                filter = "aut";
                key = "cumque";
                oauthToken = "corporis";
                pageSize = 944124L;
                pageToken = "libero";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "dolores";
                uploadProtocol = "quis";
            }};            

            DatalabelingProjectsDatasetsListResponse res = sdk.projects.datalabelingProjectsDatasetsList(req, new DatalabelingProjectsDatasetsListSecurity("totam", "dignissimos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatalabelingV1beta1ListDatasetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datalabelingProjectsDatasetsTextLabel

Starts a labeling task for text. The type of text labeling task is configured by feature in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsTextLabelRequest;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsTextLabelResponse;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsTextLabelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1LabelTextRequest;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1SentimentConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1TextClassificationConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalabelingProjectsDatasetsTextLabelRequest req = new DatalabelingProjectsDatasetsTextLabelRequest("eaque") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDatalabelingV1beta1LabelTextRequest = new GoogleCloudDatalabelingV1beta1LabelTextRequest() {{
                    basicConfig = new GoogleCloudDatalabelingV1beta1HumanAnnotationConfig() {{
                        annotatedDatasetDescription = "nesciunt";
                        annotatedDatasetDisplayName = "eos";
                        contributorEmails = new String[]{{
                            add("dolores"),
                        }};
                        instruction = "minus";
                        labelGroup = "quam";
                        languageCode = "dolor";
                        questionDuration = "vero";
                        replicaCount = 345352;
                        userEmailAddress = "hic";
                    }};;
                    feature = GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum.TEXT_ENTITY_EXTRACTION;
                    textClassificationConfig = new GoogleCloudDatalabelingV1beta1TextClassificationConfig() {{
                        allowMultiLabel = false;
                        annotationSpecSet = "omnis";
                        sentimentConfig = new GoogleCloudDatalabelingV1beta1SentimentConfig() {{
                            enableLabelSentimentSelection = false;
                        }};;
                    }};;
                    textEntityExtractionConfig = new GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig() {{
                        annotationSpecSet = "facilis";
                    }};;
                }};;
                accessToken = "perspiciatis";
                alt = AltEnum.JSON;
                callback = "porro";
                fields = "consequuntur";
                key = "blanditiis";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "eaque";
                uploadType = "occaecati";
                uploadProtocol = "rerum";
            }};            

            DatalabelingProjectsDatasetsTextLabelResponse res = sdk.projects.datalabelingProjectsDatasetsTextLabel(req, new DatalabelingProjectsDatasetsTextLabelSecurity("adipisci", "asperiores") {{
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

## datalabelingProjectsDatasetsVideoLabel

Starts a labeling task for video. The type of video labeling task is configured by feature in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsVideoLabelRequest;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsVideoLabelResponse;
import org.openapis.openapi.models.operations.DatalabelingProjectsDatasetsVideoLabelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1EventConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1LabelVideoRequest;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1ObjectDetectionConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1ObjectTrackingConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1VideoClassificationConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalabelingProjectsDatasetsVideoLabelRequest req = new DatalabelingProjectsDatasetsVideoLabelRequest("earum") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDatalabelingV1beta1LabelVideoRequest = new GoogleCloudDatalabelingV1beta1LabelVideoRequest() {{
                    basicConfig = new GoogleCloudDatalabelingV1beta1HumanAnnotationConfig() {{
                        annotatedDatasetDescription = "iste";
                        annotatedDatasetDisplayName = "dolorum";
                        contributorEmails = new String[]{{
                            add("pariatur"),
                            add("provident"),
                            add("nobis"),
                        }};
                        instruction = "libero";
                        labelGroup = "delectus";
                        languageCode = "quaerat";
                        questionDuration = "quos";
                        replicaCount = 398221;
                        userEmailAddress = "dolorem";
                    }};;
                    eventConfig = new GoogleCloudDatalabelingV1beta1EventConfig() {{
                        annotationSpecSets = new String[]{{
                            add("dolor"),
                        }};
                        clipLength = 186193;
                        overlapLength = 218749;
                    }};;
                    feature = GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum.EVENT;
                    objectDetectionConfig = new GoogleCloudDatalabelingV1beta1ObjectDetectionConfig() {{
                        annotationSpecSet = "excepturi";
                        extractionFrameRate = 7395.51;
                    }};;
                    objectTrackingConfig = new GoogleCloudDatalabelingV1beta1ObjectTrackingConfig() {{
                        annotationSpecSet = "voluptate";
                        clipLength = 490459;
                        overlapLength = 970237;
                    }};;
                    videoClassificationConfig = new GoogleCloudDatalabelingV1beta1VideoClassificationConfig() {{
                        annotationSpecSetConfigs = new org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig[]{{
                            add(new GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig() {{
                                allowMultiLabel = false;
                                annotationSpecSet = "dolorum";
                            }}),
                        }};
                        applyShotDetection = false;
                    }};;
                }};;
                accessToken = "numquam";
                alt = AltEnum.JSON;
                callback = "ipsa";
                fields = "ipsa";
                key = "iure";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "accusamus";
                uploadProtocol = "quidem";
            }};            

            DatalabelingProjectsDatasetsVideoLabelResponse res = sdk.projects.datalabelingProjectsDatasetsVideoLabel(req, new DatalabelingProjectsDatasetsVideoLabelSecurity("voluptatibus", "voluptas") {{
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

## datalabelingProjectsEvaluationJobsCreate

Creates an evaluation job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalabelingProjectsEvaluationJobsCreateRequest;
import org.openapis.openapi.models.operations.DatalabelingProjectsEvaluationJobsCreateResponse;
import org.openapis.openapi.models.operations.DatalabelingProjectsEvaluationJobsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1Attempt;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1BigQuerySource;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1BoundingPolyConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1ClassificationMetadata;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1EvaluationConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1EvaluationJob;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1EvaluationJobConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1GcsSource;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1ImageClassificationConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1InputConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1SentimentConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1TextClassificationConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1TextMetadata;
import org.openapis.openapi.models.shared.GoogleRpcStatus;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalabelingProjectsEvaluationJobsCreateRequest req = new DatalabelingProjectsEvaluationJobsCreateRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDatalabelingV1beta1CreateEvaluationJobRequest = new GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest() {{
                    job = new GoogleCloudDatalabelingV1beta1EvaluationJob() {{
                        annotationSpecSet = "atque";
                        attempts = new org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1Attempt[]{{
                            add(new GoogleCloudDatalabelingV1beta1Attempt() {{
                                attemptTime = "fugiat";
                                partialFailures = new org.openapis.openapi.models.shared.GoogleRpcStatus[]{{
                                    add(new GoogleRpcStatus() {{
                                        code = 743835;
                                        details = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("voluptate", "dolorum");
                                                put("deleniti", "omnis");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("distinctio", "asperiores");
                                                put("nihil", "ipsum");
                                                put("voluptate", "id");
                                                put("saepe", "eius");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("perferendis", "amet");
                                            }}),
                                        }};
                                        message = "optio";
                                    }}),
                                }};
                            }}),
                        }};
                        createTime = "accusamus";
                        description = "ad";
                        evaluationJobConfig = new GoogleCloudDatalabelingV1beta1EvaluationJobConfig() {{
                            bigqueryImportKeys = new java.util.HashMap<String, String>() {{
                                put("suscipit", "deserunt");
                                put("provident", "minima");
                                put("repellendus", "totam");
                                put("similique", "alias");
                            }};
                            boundingPolyConfig = new GoogleCloudDatalabelingV1beta1BoundingPolyConfig() {{
                                annotationSpecSet = "at";
                                instructionMessage = "quaerat";
                            }};;
                            evaluationConfig = new GoogleCloudDatalabelingV1beta1EvaluationConfig() {{
                                boundingBoxEvaluationOptions = new GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions() {{
                                    iouThreshold = 2735.42;
                                }};;
                            }};;
                            evaluationJobAlertConfig = new GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig() {{
                                email = "Pierre67@yahoo.com";
                                minAcceptableMeanAveragePrecision = 9527.92;
                            }};;
                            exampleCount = 456130;
                            exampleSamplePercentage = 6874.88;
                            humanAnnotationConfig = new GoogleCloudDatalabelingV1beta1HumanAnnotationConfig() {{
                                annotatedDatasetDescription = "iusto";
                                annotatedDatasetDisplayName = "ipsum";
                                contributorEmails = new String[]{{
                                    add("tenetur"),
                                    add("amet"),
                                    add("tempore"),
                                    add("accusamus"),
                                }};
                                instruction = "numquam";
                                labelGroup = "enim";
                                languageCode = "dolorem";
                                questionDuration = "sapiente";
                                replicaCount = 518201;
                                userEmailAddress = "nihil";
                            }};;
                            imageClassificationConfig = new GoogleCloudDatalabelingV1beta1ImageClassificationConfig() {{
                                allowMultiLabel = false;
                                annotationSpecSet = "sit";
                                answerAggregationType = GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnum.UNANIMOUS_VOTE;
                            }};;
                            inputConfig = new GoogleCloudDatalabelingV1beta1InputConfig() {{
                                annotationType = GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum.IMAGE_BOUNDING_BOX_ANNOTATION;
                                bigquerySource = new GoogleCloudDatalabelingV1beta1BigQuerySource() {{
                                    inputUri = "sed";
                                }};;
                                classificationMetadata = new GoogleCloudDatalabelingV1beta1ClassificationMetadata() {{
                                    isMultiLabel = false;
                                }};;
                                dataType = GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum.VIDEO;
                                gcsSource = new GoogleCloudDatalabelingV1beta1GcsSource() {{
                                    inputUri = "libero";
                                    mimeType = "voluptas";
                                }};;
                                textMetadata = new GoogleCloudDatalabelingV1beta1TextMetadata() {{
                                    languageCode = "deserunt";
                                }};;
                            }};;
                            textClassificationConfig = new GoogleCloudDatalabelingV1beta1TextClassificationConfig() {{
                                allowMultiLabel = false;
                                annotationSpecSet = "quam";
                                sentimentConfig = new GoogleCloudDatalabelingV1beta1SentimentConfig() {{
                                    enableLabelSentimentSelection = false;
                                }};;
                            }};;
                        }};;
                        labelMissingGroundTruth = false;
                        modelVersion = "ipsum";
                        name = "Norma McGlynn";
                        schedule = "soluta";
                        state = GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum.STATE_UNSPECIFIED;
                    }};;
                }};;
                accessToken = "laborum";
                alt = AltEnum.MEDIA;
                callback = "incidunt";
                fields = "aspernatur";
                key = "dolores";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "aliquid";
                uploadProtocol = "quam";
            }};            

            DatalabelingProjectsEvaluationJobsCreateResponse res = sdk.projects.datalabelingProjectsEvaluationJobsCreate(req, new DatalabelingProjectsEvaluationJobsCreateSecurity("molestias", "temporibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatalabelingV1beta1EvaluationJob != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datalabelingProjectsEvaluationJobsList

Lists all evaluation jobs within a project with possible filters. Pagination is supported.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalabelingProjectsEvaluationJobsListRequest;
import org.openapis.openapi.models.operations.DatalabelingProjectsEvaluationJobsListResponse;
import org.openapis.openapi.models.operations.DatalabelingProjectsEvaluationJobsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalabelingProjectsEvaluationJobsListRequest req = new DatalabelingProjectsEvaluationJobsListRequest("qui") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "fugit";
                alt = AltEnum.JSON;
                callback = "odio";
                fields = "sunt";
                filter = "ullam";
                key = "nam";
                oauthToken = "hic";
                pageSize = 30452L;
                pageToken = "cumque";
                prettyPrint = false;
                quotaUser = "soluta";
                uploadType = "nobis";
                uploadProtocol = "et";
            }};            

            DatalabelingProjectsEvaluationJobsListResponse res = sdk.projects.datalabelingProjectsEvaluationJobsList(req, new DatalabelingProjectsEvaluationJobsListSecurity("saepe", "ipsum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatalabelingV1beta1ListEvaluationJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datalabelingProjectsEvaluationJobsPatch

Updates an evaluation job. You can only update certain fields of the job's EvaluationJobConfig: `humanAnnotationConfig.instruction`, `exampleCount`, and `exampleSamplePercentage`. If you want to change any other aspect of the evaluation job, you must delete the job and create a new one.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalabelingProjectsEvaluationJobsPatchRequest;
import org.openapis.openapi.models.operations.DatalabelingProjectsEvaluationJobsPatchResponse;
import org.openapis.openapi.models.operations.DatalabelingProjectsEvaluationJobsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1Attempt;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1BigQuerySource;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1BoundingPolyConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1ClassificationMetadata;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1EvaluationConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1EvaluationJob;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1EvaluationJobConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1GcsSource;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1ImageClassificationConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1InputConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1SentimentConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1TextClassificationConfig;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1TextMetadata;
import org.openapis.openapi.models.shared.GoogleRpcStatus;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalabelingProjectsEvaluationJobsPatchRequest req = new DatalabelingProjectsEvaluationJobsPatchRequest("veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDatalabelingV1beta1EvaluationJob = new GoogleCloudDatalabelingV1beta1EvaluationJob() {{
                    annotationSpecSet = "quos";
                    attempts = new org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1Attempt[]{{
                        add(new GoogleCloudDatalabelingV1beta1Attempt() {{
                            attemptTime = "cupiditate";
                            partialFailures = new org.openapis.openapi.models.shared.GoogleRpcStatus[]{{
                                add(new GoogleRpcStatus() {{
                                    code = 961937;
                                    details = new java.util.HashMap<String, Object>[]{{
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("labore", "adipisci");
                                            put("dolorum", "architecto");
                                        }}),
                                    }};
                                    message = "quae";
                                }}),
                            }};
                        }}),
                        add(new GoogleCloudDatalabelingV1beta1Attempt() {{
                            attemptTime = "aut";
                            partialFailures = new org.openapis.openapi.models.shared.GoogleRpcStatus[]{{
                                add(new GoogleRpcStatus() {{
                                    code = 929530;
                                    details = new java.util.HashMap<String, Object>[]{{
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("repellendus", "porro");
                                            put("doloribus", "ut");
                                            put("facilis", "cupiditate");
                                        }}),
                                    }};
                                    message = "qui";
                                }}),
                                add(new GoogleRpcStatus() {{
                                    code = 63955;
                                    details = new java.util.HashMap<String, Object>[]{{
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("occaecati", "voluptatibus");
                                            put("quisquam", "vero");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("quis", "ipsum");
                                            put("delectus", "voluptate");
                                            put("consectetur", "vero");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("dignissimos", "hic");
                                            put("distinctio", "quod");
                                            put("odio", "similique");
                                            put("facilis", "vero");
                                        }}),
                                    }};
                                    message = "ducimus";
                                }}),
                                add(new GoogleRpcStatus() {{
                                    code = 293020;
                                    details = new java.util.HashMap<String, Object>[]{{
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("sequi", "natus");
                                            put("impedit", "aut");
                                            put("voluptatibus", "exercitationem");
                                            put("nulla", "fugit");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("maiores", "doloribus");
                                            put("iusto", "eligendi");
                                            put("ducimus", "alias");
                                            put("officia", "tempora");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("ea", "aspernatur");
                                            put("vel", "possimus");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("ratione", "ex");
                                            put("laudantium", "dicta");
                                        }}),
                                    }};
                                    message = "dolor";
                                }}),
                            }};
                        }}),
                        add(new GoogleCloudDatalabelingV1beta1Attempt() {{
                            attemptTime = "maiores";
                            partialFailures = new org.openapis.openapi.models.shared.GoogleRpcStatus[]{{
                                add(new GoogleRpcStatus() {{
                                    code = 406120;
                                    details = new java.util.HashMap<String, Object>[]{{
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("voluptatibus", "nostrum");
                                            put("sapiente", "quisquam");
                                            put("saepe", "ea");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("corporis", "veniam");
                                            put("aliquid", "inventore");
                                            put("magnam", "ea");
                                            put("quo", "consectetur");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("aspernatur", "minima");
                                            put("eaque", "a");
                                            put("libero", "aut");
                                            put("aut", "deleniti");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("aliquam", "fugit");
                                            put("accusamus", "inventore");
                                            put("non", "et");
                                            put("dolorum", "laborum");
                                        }}),
                                    }};
                                    message = "placeat";
                                }}),
                            }};
                        }}),
                    }};
                    createTime = "velit";
                    description = "eum";
                    evaluationJobConfig = new GoogleCloudDatalabelingV1beta1EvaluationJobConfig() {{
                        bigqueryImportKeys = new java.util.HashMap<String, String>() {{
                            put("nobis", "quas");
                            put("assumenda", "nulla");
                        }};
                        boundingPolyConfig = new GoogleCloudDatalabelingV1beta1BoundingPolyConfig() {{
                            annotationSpecSet = "voluptas";
                            instructionMessage = "libero";
                        }};;
                        evaluationConfig = new GoogleCloudDatalabelingV1beta1EvaluationConfig() {{
                            boundingBoxEvaluationOptions = new GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions() {{
                                iouThreshold = 965.49;
                            }};;
                        }};;
                        evaluationJobAlertConfig = new GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig() {{
                            email = "Derrick.Cole@gmail.com";
                            minAcceptableMeanAveragePrecision = 4764.77;
                        }};;
                        exampleCount = 301598;
                        exampleSamplePercentage = 4879.35;
                        humanAnnotationConfig = new GoogleCloudDatalabelingV1beta1HumanAnnotationConfig() {{
                            annotatedDatasetDescription = "eius";
                            annotatedDatasetDisplayName = "esse";
                            contributorEmails = new String[]{{
                                add("rem"),
                                add("fuga"),
                            }};
                            instruction = "reprehenderit";
                            labelGroup = "quidem";
                            languageCode = "fugiat";
                            questionDuration = "ut";
                            replicaCount = 433439;
                            userEmailAddress = "suscipit";
                        }};;
                        imageClassificationConfig = new GoogleCloudDatalabelingV1beta1ImageClassificationConfig() {{
                            allowMultiLabel = false;
                            annotationSpecSet = "assumenda";
                            answerAggregationType = GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnum.STRING_AGGREGATION_TYPE_UNSPECIFIED;
                        }};;
                        inputConfig = new GoogleCloudDatalabelingV1beta1InputConfig() {{
                            annotationType = GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum.VIDEO_SHOTS_CLASSIFICATION_ANNOTATION;
                            bigquerySource = new GoogleCloudDatalabelingV1beta1BigQuerySource() {{
                                inputUri = "quisquam";
                            }};;
                            classificationMetadata = new GoogleCloudDatalabelingV1beta1ClassificationMetadata() {{
                                isMultiLabel = false;
                            }};;
                            dataType = GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum.DATA_TYPE_UNSPECIFIED;
                            gcsSource = new GoogleCloudDatalabelingV1beta1GcsSource() {{
                                inputUri = "ipsa";
                                mimeType = "id";
                            }};;
                            textMetadata = new GoogleCloudDatalabelingV1beta1TextMetadata() {{
                                languageCode = "quidem";
                            }};;
                        }};;
                        textClassificationConfig = new GoogleCloudDatalabelingV1beta1TextClassificationConfig() {{
                            allowMultiLabel = false;
                            annotationSpecSet = "neque";
                            sentimentConfig = new GoogleCloudDatalabelingV1beta1SentimentConfig() {{
                                enableLabelSentimentSelection = false;
                            }};;
                        }};;
                    }};;
                    labelMissingGroundTruth = false;
                    modelVersion = "quo";
                    name = "Salvatore Parker";
                    schedule = "voluptas";
                    state = GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum.STATE_UNSPECIFIED;
                }};;
                accessToken = "cupiditate";
                alt = AltEnum.JSON;
                callback = "tempora";
                fields = "debitis";
                key = "ipsam";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "sequi";
                updateMask = "quo";
                uploadType = "esse";
                uploadProtocol = "recusandae";
            }};            

            DatalabelingProjectsEvaluationJobsPatchResponse res = sdk.projects.datalabelingProjectsEvaluationJobsPatch(req, new DatalabelingProjectsEvaluationJobsPatchSecurity("aperiam", "distinctio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatalabelingV1beta1EvaluationJob != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datalabelingProjectsEvaluationJobsPause

Pauses an evaluation job. Pausing an evaluation job that is already in a `PAUSED` state is a no-op.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalabelingProjectsEvaluationJobsPauseRequest;
import org.openapis.openapi.models.operations.DatalabelingProjectsEvaluationJobsPauseResponse;
import org.openapis.openapi.models.operations.DatalabelingProjectsEvaluationJobsPauseSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalabelingProjectsEvaluationJobsPauseRequest req = new DatalabelingProjectsEvaluationJobsPauseRequest("quod") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("nihil", "totam");
                }};
                accessToken = "accusamus";
                alt = AltEnum.JSON;
                callback = "odio";
                fields = "occaecati";
                key = "commodi";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "deserunt";
                uploadProtocol = "molestiae";
            }};            

            DatalabelingProjectsEvaluationJobsPauseResponse res = sdk.projects.datalabelingProjectsEvaluationJobsPause(req, new DatalabelingProjectsEvaluationJobsPauseSecurity("accusantium", "porro") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datalabelingProjectsEvaluationJobsResume

Resumes a paused evaluation job. A deleted evaluation job can't be resumed. Resuming a running or scheduled evaluation job is a no-op.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalabelingProjectsEvaluationJobsResumeRequest;
import org.openapis.openapi.models.operations.DatalabelingProjectsEvaluationJobsResumeResponse;
import org.openapis.openapi.models.operations.DatalabelingProjectsEvaluationJobsResumeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalabelingProjectsEvaluationJobsResumeRequest req = new DatalabelingProjectsEvaluationJobsResumeRequest("eum") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("consequuntur", "deleniti");
                    put("fugit", "fuga");
                    put("mollitia", "incidunt");
                }};
                accessToken = "atque";
                alt = AltEnum.JSON;
                callback = "minima";
                fields = "nisi";
                key = "fugit";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "ratione";
                uploadProtocol = "explicabo";
            }};            

            DatalabelingProjectsEvaluationJobsResumeResponse res = sdk.projects.datalabelingProjectsEvaluationJobsResume(req, new DatalabelingProjectsEvaluationJobsResumeSecurity("saepe", "occaecati") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datalabelingProjectsEvaluationsSearch

Searches evaluations within a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalabelingProjectsEvaluationsSearchRequest;
import org.openapis.openapi.models.operations.DatalabelingProjectsEvaluationsSearchResponse;
import org.openapis.openapi.models.operations.DatalabelingProjectsEvaluationsSearchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalabelingProjectsEvaluationsSearchRequest req = new DatalabelingProjectsEvaluationsSearchRequest("atque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "esse";
                alt = AltEnum.PROTO;
                callback = "accusamus";
                fields = "veritatis";
                filter = "esse";
                key = "quod";
                oauthToken = "nam";
                pageSize = 877131L;
                pageToken = "aliquid";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "saepe";
                uploadProtocol = "vel";
            }};            

            DatalabelingProjectsEvaluationsSearchResponse res = sdk.projects.datalabelingProjectsEvaluationsSearch(req, new DatalabelingProjectsEvaluationsSearchSecurity("harum", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatalabelingV1beta1SearchEvaluationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datalabelingProjectsInstructionsCreate

Creates an instruction for how data should be labeled.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalabelingProjectsInstructionsCreateRequest;
import org.openapis.openapi.models.operations.DatalabelingProjectsInstructionsCreateResponse;
import org.openapis.openapi.models.operations.DatalabelingProjectsInstructionsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1CreateInstructionRequest;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1CsvInstruction;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1Instruction;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatalabelingV1beta1PdfInstruction;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalabelingProjectsInstructionsCreateRequest req = new DatalabelingProjectsInstructionsCreateRequest("rerum") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDatalabelingV1beta1CreateInstructionRequest = new GoogleCloudDatalabelingV1beta1CreateInstructionRequest() {{
                    instruction = new GoogleCloudDatalabelingV1beta1Instruction() {{
                        blockingResources = new String[]{{
                            add("distinctio"),
                            add("eligendi"),
                        }};
                        createTime = "sit";
                        csvInstruction = new GoogleCloudDatalabelingV1beta1CsvInstruction() {{
                            gcsFileUri = "culpa";
                        }};;
                        dataType = GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum.TEXT;
                        description = "adipisci";
                        displayName = "cumque";
                        name = "Elizabeth Schinner";
                        pdfInstruction = new GoogleCloudDatalabelingV1beta1PdfInstruction() {{
                            gcsFileUri = "consectetur";
                        }};;
                        updateTime = "esse";
                    }};;
                }};;
                accessToken = "blanditiis";
                alt = AltEnum.MEDIA;
                callback = "a";
                fields = "nulla";
                key = "quas";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "a";
                uploadProtocol = "error";
            }};            

            DatalabelingProjectsInstructionsCreateResponse res = sdk.projects.datalabelingProjectsInstructionsCreate(req, new DatalabelingProjectsInstructionsCreateSecurity("sint", "pariatur") {{
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

## datalabelingProjectsInstructionsList

Lists instructions for a project. Pagination is supported.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalabelingProjectsInstructionsListRequest;
import org.openapis.openapi.models.operations.DatalabelingProjectsInstructionsListResponse;
import org.openapis.openapi.models.operations.DatalabelingProjectsInstructionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalabelingProjectsInstructionsListRequest req = new DatalabelingProjectsInstructionsListRequest("possimus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eveniet";
                alt = AltEnum.PROTO;
                callback = "facere";
                fields = "veritatis";
                filter = "consequuntur";
                key = "quasi";
                oauthToken = "similique";
                pageSize = 633608L;
                pageToken = "aliquid";
                prettyPrint = false;
                quotaUser = "tenetur";
                uploadType = "quae";
                uploadProtocol = "earum";
            }};            

            DatalabelingProjectsInstructionsListResponse res = sdk.projects.datalabelingProjectsInstructionsList(req, new DatalabelingProjectsInstructionsListSecurity("vel", "in") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatalabelingV1beta1ListInstructionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datalabelingProjectsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalabelingProjectsOperationsCancelRequest;
import org.openapis.openapi.models.operations.DatalabelingProjectsOperationsCancelResponse;
import org.openapis.openapi.models.operations.DatalabelingProjectsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalabelingProjectsOperationsCancelRequest req = new DatalabelingProjectsOperationsCancelRequest("eius") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "illum";
                alt = AltEnum.PROTO;
                callback = "accusantium";
                fields = "aliquam";
                key = "sapiente";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "reprehenderit";
                uploadProtocol = "ullam";
            }};            

            DatalabelingProjectsOperationsCancelResponse res = sdk.projects.datalabelingProjectsOperationsCancel(req, new DatalabelingProjectsOperationsCancelSecurity("nisi", "aut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datalabelingProjectsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalabelingProjectsOperationsDeleteRequest;
import org.openapis.openapi.models.operations.DatalabelingProjectsOperationsDeleteResponse;
import org.openapis.openapi.models.operations.DatalabelingProjectsOperationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalabelingProjectsOperationsDeleteRequest req = new DatalabelingProjectsOperationsDeleteRequest("voluptatum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quibusdam";
                alt = AltEnum.MEDIA;
                callback = "deleniti";
                fields = "itaque";
                key = "dolorum";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "tenetur";
                uploadProtocol = "quasi";
            }};            

            DatalabelingProjectsOperationsDeleteResponse res = sdk.projects.datalabelingProjectsOperationsDelete(req, new DatalabelingProjectsOperationsDeleteSecurity("at", "et") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datalabelingProjectsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalabelingProjectsOperationsGetRequest;
import org.openapis.openapi.models.operations.DatalabelingProjectsOperationsGetResponse;
import org.openapis.openapi.models.operations.DatalabelingProjectsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalabelingProjectsOperationsGetRequest req = new DatalabelingProjectsOperationsGetRequest("voluptate") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "minima";
                alt = AltEnum.JSON;
                callback = "consectetur";
                fields = "adipisci";
                filter = "iste";
                key = "temporibus";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "rem";
                uploadType = "aut";
                uploadProtocol = "laudantium";
            }};            

            DatalabelingProjectsOperationsGetResponse res = sdk.projects.datalabelingProjectsOperationsGet(req, new DatalabelingProjectsOperationsGetSecurity("eum", "mollitia") {{
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

## datalabelingProjectsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalabelingProjectsOperationsListRequest;
import org.openapis.openapi.models.operations.DatalabelingProjectsOperationsListResponse;
import org.openapis.openapi.models.operations.DatalabelingProjectsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalabelingProjectsOperationsListRequest req = new DatalabelingProjectsOperationsListRequest("ab") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "non";
                alt = AltEnum.JSON;
                callback = "dolor";
                fields = "occaecati";
                filter = "numquam";
                key = "impedit";
                oauthToken = "explicabo";
                pageSize = 376226L;
                pageToken = "aut";
                prettyPrint = false;
                quotaUser = "dignissimos";
                uploadType = "dicta";
                uploadProtocol = "maiores";
            }};            

            DatalabelingProjectsOperationsListResponse res = sdk.projects.datalabelingProjectsOperationsList(req, new DatalabelingProjectsOperationsListSecurity("natus", "velit") {{
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
