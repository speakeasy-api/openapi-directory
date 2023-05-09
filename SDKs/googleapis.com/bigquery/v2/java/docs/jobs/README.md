# jobs

### Available Operations

* [bigqueryJobsCancel](#bigqueryjobscancel) - Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.
* [bigqueryJobsDelete](#bigqueryjobsdelete) - Requests the deletion of the metadata of a job. This call returns when the job's metadata is deleted.
* [bigqueryJobsGet](#bigqueryjobsget) - Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.
* [bigqueryJobsGetQueryResults](#bigqueryjobsgetqueryresults) - Retrieves the results of a query job.
* [bigqueryJobsInsert](#bigqueryjobsinsert) - Starts a new asynchronous job. Requires the Can View project role.
* [bigqueryJobsList](#bigqueryjobslist) - Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.
* [bigqueryJobsQuery](#bigqueryjobsquery) - Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.

## bigqueryJobsCancel

Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryJobsCancelRequest;
import org.openapis.openapi.models.operations.BigqueryJobsCancelResponse;
import org.openapis.openapi.models.operations.BigqueryJobsCancelSecurity;
import org.openapis.openapi.models.operations.BigqueryJobsCancelSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryJobsCancelSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryJobsCancelRequest req = new BigqueryJobsCancelRequest("iste", "dolorum") {{
                alt = AltEnum.JSON;
                fields = "deleniti";
                key = "pariatur";
                location = "provident";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "libero";
                userIp = "delectus";
            }};            

            BigqueryJobsCancelResponse res = sdk.jobs.bigqueryJobsCancel(req, new BigqueryJobsCancelSecurity() {{
                option1 = new BigqueryJobsCancelSecurityOption1("quaerat", "quos") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.jobCancelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryJobsDelete

Requests the deletion of the metadata of a job. This call returns when the job's metadata is deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryJobsDeleteRequest;
import org.openapis.openapi.models.operations.BigqueryJobsDeleteResponse;
import org.openapis.openapi.models.operations.BigqueryJobsDeleteSecurity;
import org.openapis.openapi.models.operations.BigqueryJobsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryJobsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryJobsDeleteRequest req = new BigqueryJobsDeleteRequest("aliquid", "dolorem") {{
                alt = AltEnum.JSON;
                fields = "dolorem";
                key = "dolor";
                location = "qui";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "hic";
                userIp = "excepturi";
            }};            

            BigqueryJobsDeleteResponse res = sdk.jobs.bigqueryJobsDelete(req, new BigqueryJobsDeleteSecurity() {{
                option1 = new BigqueryJobsDeleteSecurityOption1("cum", "voluptate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryJobsGet

Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryJobsGetRequest;
import org.openapis.openapi.models.operations.BigqueryJobsGetResponse;
import org.openapis.openapi.models.operations.BigqueryJobsGetSecurity;
import org.openapis.openapi.models.operations.BigqueryJobsGetSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryJobsGetSecurityOption2;
import org.openapis.openapi.models.operations.BigqueryJobsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryJobsGetRequest req = new BigqueryJobsGetRequest("dignissimos", "reiciendis") {{
                alt = AltEnum.JSON;
                fields = "amet";
                key = "dolorum";
                location = "numquam";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "ipsa";
                userIp = "ipsa";
            }};            

            BigqueryJobsGetResponse res = sdk.jobs.bigqueryJobsGet(req, new BigqueryJobsGetSecurity() {{
                option1 = new BigqueryJobsGetSecurityOption1("iure", "odio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.job != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryJobsGetQueryResults

Retrieves the results of a query job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryJobsGetQueryResultsRequest;
import org.openapis.openapi.models.operations.BigqueryJobsGetQueryResultsResponse;
import org.openapis.openapi.models.operations.BigqueryJobsGetQueryResultsSecurity;
import org.openapis.openapi.models.operations.BigqueryJobsGetQueryResultsSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryJobsGetQueryResultsSecurityOption2;
import org.openapis.openapi.models.operations.BigqueryJobsGetQueryResultsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryJobsGetQueryResultsRequest req = new BigqueryJobsGetQueryResultsRequest("quaerat", "accusamus") {{
                alt = AltEnum.JSON;
                fields = "quidem";
                key = "voluptatibus";
                location = "voluptas";
                maxResults = 617658L;
                oauthToken = "eos";
                pageToken = "atque";
                prettyPrint = false;
                quotaUser = "sit";
                startIndex = "fugiat";
                timeoutMs = 67249L;
                userIp = "soluta";
            }};            

            BigqueryJobsGetQueryResultsResponse res = sdk.jobs.bigqueryJobsGetQueryResults(req, new BigqueryJobsGetQueryResultsSecurity() {{
                option1 = new BigqueryJobsGetQueryResultsSecurityOption1("dolorum", "iusto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.getQueryResultsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryJobsInsert

Starts a new asynchronous job. Requires the Can View project role.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryJobsInsertRequest;
import org.openapis.openapi.models.operations.BigqueryJobsInsertResponse;
import org.openapis.openapi.models.operations.BigqueryJobsInsertSecurity;
import org.openapis.openapi.models.operations.BigqueryJobsInsertSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryJobsInsertSecurityOption2;
import org.openapis.openapi.models.operations.BigqueryJobsInsertSecurityOption3;
import org.openapis.openapi.models.operations.BigqueryJobsInsertSecurityOption4;
import org.openapis.openapi.models.operations.BigqueryJobsInsertSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AvroOptions;
import org.openapis.openapi.models.shared.BiEngineReason;
import org.openapis.openapi.models.shared.BiEngineStatistics;
import org.openapis.openapi.models.shared.BigQueryModelTraining;
import org.openapis.openapi.models.shared.BigtableColumn;
import org.openapis.openapi.models.shared.BigtableColumnFamily;
import org.openapis.openapi.models.shared.BigtableOptions;
import org.openapis.openapi.models.shared.Clustering;
import org.openapis.openapi.models.shared.ConnectionProperty;
import org.openapis.openapi.models.shared.CsvOptions;
import org.openapis.openapi.models.shared.DataMaskingStatistics;
import org.openapis.openapi.models.shared.DatasetReference;
import org.openapis.openapi.models.shared.DestinationTableProperties;
import org.openapis.openapi.models.shared.DmlStatistics;
import org.openapis.openapi.models.shared.EncryptionConfiguration;
import org.openapis.openapi.models.shared.ErrorProto;
import org.openapis.openapi.models.shared.ExplainQueryStage;
import org.openapis.openapi.models.shared.ExplainQueryStep;
import org.openapis.openapi.models.shared.ExternalDataConfiguration;
import org.openapis.openapi.models.shared.GoogleSheetsOptions;
import org.openapis.openapi.models.shared.HivePartitioningOptions;
import org.openapis.openapi.models.shared.IndexUnusedReason;
import org.openapis.openapi.models.shared.IterationResult;
import org.openapis.openapi.models.shared.Job;
import org.openapis.openapi.models.shared.JobConfiguration;
import org.openapis.openapi.models.shared.JobConfigurationExtract;
import org.openapis.openapi.models.shared.JobConfigurationLoad;
import org.openapis.openapi.models.shared.JobConfigurationQuery;
import org.openapis.openapi.models.shared.JobConfigurationTableCopy;
import org.openapis.openapi.models.shared.JobReference;
import org.openapis.openapi.models.shared.JobStatistics2;
import org.openapis.openapi.models.shared.JobStatistics2ReservationUsage;
import org.openapis.openapi.models.shared.JobStatistics3;
import org.openapis.openapi.models.shared.JobStatistics4;
import org.openapis.openapi.models.shared.JobStatistics5;
import org.openapis.openapi.models.shared.JobStatistics;
import org.openapis.openapi.models.shared.JobStatisticsReservationUsage;
import org.openapis.openapi.models.shared.JobStatus;
import org.openapis.openapi.models.shared.MlStatistics;
import org.openapis.openapi.models.shared.ModelReference;
import org.openapis.openapi.models.shared.ParquetOptions;
import org.openapis.openapi.models.shared.QueryParameter;
import org.openapis.openapi.models.shared.QueryParameterType;
import org.openapis.openapi.models.shared.QueryParameterTypeStructTypes;
import org.openapis.openapi.models.shared.QueryParameterValue;
import org.openapis.openapi.models.shared.QueryTimelineSample;
import org.openapis.openapi.models.shared.RangePartitioning;
import org.openapis.openapi.models.shared.RangePartitioningRange;
import org.openapis.openapi.models.shared.RoutineReference;
import org.openapis.openapi.models.shared.RowAccessPolicyReference;
import org.openapis.openapi.models.shared.RowLevelSecurityStatistics;
import org.openapis.openapi.models.shared.ScriptStackFrame;
import org.openapis.openapi.models.shared.ScriptStatistics;
import org.openapis.openapi.models.shared.SearchStatistics;
import org.openapis.openapi.models.shared.SessionInfo;
import org.openapis.openapi.models.shared.SparkLoggingInfo;
import org.openapis.openapi.models.shared.SparkStatistics;
import org.openapis.openapi.models.shared.TableFieldSchema;
import org.openapis.openapi.models.shared.TableFieldSchemaCategories;
import org.openapis.openapi.models.shared.TableFieldSchemaPolicyTags;
import org.openapis.openapi.models.shared.TableReference;
import org.openapis.openapi.models.shared.TableSchema;
import org.openapis.openapi.models.shared.TimePartitioning;
import org.openapis.openapi.models.shared.TransactionInfo;
import org.openapis.openapi.models.shared.UserDefinedFunctionResource;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryJobsInsertRequest req = new BigqueryJobsInsertRequest("voluptate") {{
                requestBody = "dolorum".getBytes();
                alt = AltEnum.JSON;
                fields = "deleniti";
                key = "omnis";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "distinctio";
                userIp = "asperiores";
            }};            

            BigqueryJobsInsertResponse res = sdk.jobs.bigqueryJobsInsert(req, new BigqueryJobsInsertSecurity() {{
                option1 = new BigqueryJobsInsertSecurityOption1("nihil", "ipsum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.job != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryJobsList

Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryJobsListProjectionEnum;
import org.openapis.openapi.models.operations.BigqueryJobsListRequest;
import org.openapis.openapi.models.operations.BigqueryJobsListResponse;
import org.openapis.openapi.models.operations.BigqueryJobsListSecurity;
import org.openapis.openapi.models.operations.BigqueryJobsListSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryJobsListSecurityOption2;
import org.openapis.openapi.models.operations.BigqueryJobsListSecurityOption3;
import org.openapis.openapi.models.operations.BigqueryJobsListStateFilterEnum;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryJobsListRequest req = new BigqueryJobsListRequest("voluptate") {{
                allUsers = false;
                alt = AltEnum.JSON;
                fields = "id";
                key = "saepe";
                maxCreationTime = "eius";
                maxResults = 137220L;
                minCreationTime = "perferendis";
                oauthToken = "amet";
                pageToken = "optio";
                parentJobId = "accusamus";
                prettyPrint = false;
                projection = BigqueryJobsListProjectionEnum.FULL;
                quotaUser = "saepe";
                stateFilter = new org.openapis.openapi.models.operations.BigqueryJobsListStateFilterEnum[]{{
                    add(BigqueryJobsListStateFilterEnum.PENDING),
                    add(BigqueryJobsListStateFilterEnum.PENDING),
                }};
                userIp = "minima";
            }};            

            BigqueryJobsListResponse res = sdk.jobs.bigqueryJobsList(req, new BigqueryJobsListSecurity() {{
                option1 = new BigqueryJobsListSecurityOption1("repellendus", "totam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.jobList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryJobsQuery

Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryJobsQueryRequest;
import org.openapis.openapi.models.operations.BigqueryJobsQueryResponse;
import org.openapis.openapi.models.operations.BigqueryJobsQuerySecurity;
import org.openapis.openapi.models.operations.BigqueryJobsQuerySecurityOption1;
import org.openapis.openapi.models.operations.BigqueryJobsQuerySecurityOption2;
import org.openapis.openapi.models.operations.BigqueryJobsQuerySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConnectionProperty;
import org.openapis.openapi.models.shared.DatasetReference;
import org.openapis.openapi.models.shared.QueryParameter;
import org.openapis.openapi.models.shared.QueryParameterType;
import org.openapis.openapi.models.shared.QueryParameterTypeStructTypes;
import org.openapis.openapi.models.shared.QueryParameterValue;
import org.openapis.openapi.models.shared.QueryRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryJobsQueryRequest req = new BigqueryJobsQueryRequest("similique") {{
                queryRequest = new QueryRequest() {{
                    connectionProperties = new org.openapis.openapi.models.shared.ConnectionProperty[]{{
                        add(new ConnectionProperty() {{
                            key = "at";
                            value = "quaerat";
                        }}),
                    }};
                    continuous = false;
                    createSession = false;
                    defaultDataset = new DatasetReference() {{
                        datasetId = "tempora";
                        projectId = "vel";
                    }};;
                    dryRun = false;
                    kind = "quod";
                    labels = new java.util.HashMap<String, String>() {{
                        put("qui", "dolorum");
                        put("a", "esse");
                        put("harum", "iusto");
                        put("ipsum", "quisquam");
                    }};
                    location = "tenetur";
                    maxResults = 229442L;
                    maximumBytesBilled = "tempore";
                    parameterMode = "accusamus";
                    preserveNulls = false;
                    query = "numquam";
                    queryParameters = new org.openapis.openapi.models.shared.QueryParameter[]{{
                        add(new QueryParameter() {{
                            name = "Jeannie Leannon MD";
                            parameterType = new QueryParameterType() {{
                                arrayType = new QueryParameterType() {{}};
                                structTypes = new org.openapis.openapi.models.shared.QueryParameterTypeStructTypes[]{{
                                    add(new QueryParameterTypeStructTypes() {{
                                        description = "sed";
                                        name = "Kelli Hintz";
                                        type = new QueryParameterType() {{}};
                                    }}),
                                }};
                                type = "ipsum";
                            }};
                            parameterValue = new QueryParameterValue() {{
                                arrayValues = new org.openapis.openapi.models.shared.QueryParameterValue[]{{
                                    add(new QueryParameterValue() {{}}),
                                    add(new QueryParameterValue() {{}}),
                                }};
                                structValues = new java.util.HashMap<String, org.openapis.openapi.models.shared.QueryParameterValue>() {{
                                    put("cupiditate", new QueryParameterValue() {{}});
                                }};
                                value = "maxime";
                            }};
                        }}),
                        add(new QueryParameter() {{
                            name = "Dominic Carroll";
                            parameterType = new QueryParameterType() {{
                                arrayType = new QueryParameterType() {{}};
                                structTypes = new org.openapis.openapi.models.shared.QueryParameterTypeStructTypes[]{{
                                    add(new QueryParameterTypeStructTypes() {{
                                        description = "aspernatur";
                                        name = "Verna Purdy";
                                        type = new QueryParameterType() {{}};
                                    }}),
                                    add(new QueryParameterTypeStructTypes() {{
                                        description = "molestias";
                                        name = "Shawn Doyle";
                                        type = new QueryParameterType() {{}};
                                    }}),
                                }};
                                type = "odio";
                            }};
                            parameterValue = new QueryParameterValue() {{
                                arrayValues = new org.openapis.openapi.models.shared.QueryParameterValue[]{{
                                    add(new QueryParameterValue() {{}}),
                                }};
                                structValues = new java.util.HashMap<String, org.openapis.openapi.models.shared.QueryParameterValue>() {{
                                    put("nam", new QueryParameterValue() {{}});
                                    put("hic", new QueryParameterValue() {{}});
                                }};
                                value = "voluptatem";
                            }};
                        }}),
                    }};
                    requestId = "cumque";
                    timeoutMs = 746994L;
                    useLegacySql = false;
                    useQueryCache = false;
                }};;
                alt = AltEnum.JSON;
                fields = "nobis";
                key = "et";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "ipsum";
                userIp = "veritatis";
            }};            

            BigqueryJobsQueryResponse res = sdk.jobs.bigqueryJobsQuery(req, new BigqueryJobsQuerySecurity() {{
                option1 = new BigqueryJobsQuerySecurityOption1("nobis", "quos") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.queryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
