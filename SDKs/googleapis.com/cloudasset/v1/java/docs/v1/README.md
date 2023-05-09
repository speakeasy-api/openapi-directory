# v1

### Available Operations

* [cloudassetAnalyzeIamPolicy](#cloudassetanalyzeiampolicy) - Analyzes IAM policies to answer which identities have what accesses on which resources.
* [cloudassetAnalyzeIamPolicyLongrunning](#cloudassetanalyzeiampolicylongrunning) - Analyzes IAM policies asynchronously to answer which identities have what accesses on which resources, and writes the analysis results to a Google Cloud Storage or a BigQuery destination. For Cloud Storage destination, the output format is the JSON format that represents a AnalyzeIamPolicyResponse. This method implements the google.longrunning.Operation, which allows you to track the operation status. We recommend intervals of at least 2 seconds with exponential backoff retry to poll the operation result. The metadata contains the metadata for the long-running operation.
* [cloudassetAnalyzeMove](#cloudassetanalyzemove) - Analyze moving a resource to a specified destination without kicking off the actual move. The analysis is best effort depending on the user's permissions of viewing different hierarchical policies and configurations. The policies and configuration are subject to change before the actual resource migration takes place.
* [cloudassetAnalyzeOrgPolicies](#cloudassetanalyzeorgpolicies) - Analyzes organization policies under a scope.
* [cloudassetAnalyzeOrgPolicyGovernedAssets](#cloudassetanalyzeorgpolicygovernedassets) - Analyzes organization policies governed assets (Google Cloud resources or policies) under a scope. This RPC supports custom constraints and the following 10 canned constraints: * storage.uniformBucketLevelAccess * iam.disableServiceAccountKeyCreation * iam.allowedPolicyMemberDomains * compute.vmExternalIpAccess * appengine.enforceServiceAccountActAsCheck * gcp.resourceLocations * compute.trustedImageProjects * compute.skipDefaultNetworkCreation * compute.requireOsLogin * compute.disableNestedVirtualization This RPC only returns either resources of types supported by [searchable asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types#searchable_asset_types), or IAM policies.
* [cloudassetAnalyzeOrgPolicyGovernedContainers](#cloudassetanalyzeorgpolicygovernedcontainers) - Analyzes organization policies governed containers (projects, folders or organization) under a scope.
* [cloudassetBatchGetAssetsHistory](#cloudassetbatchgetassetshistory) - Batch gets the update history of assets that overlap a time window. For IAM_POLICY content, this API outputs history when the asset and its attached IAM POLICY both exist. This can create gaps in the output history. Otherwise, this API outputs history with asset in both non-delete or deleted status. If a specified asset does not exist, this API returns an INVALID_ARGUMENT error.
* [cloudassetExportAssets](#cloudassetexportassets) - Exports assets with time and resource types to a given Cloud Storage location/BigQuery table. For Cloud Storage location destinations, the output format is newline-delimited JSON. Each line represents a google.cloud.asset.v1.Asset in the JSON format; for BigQuery table destinations, the output table stores the fields in asset Protobuf as columns. This API implements the google.longrunning.Operation API, which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.
* [cloudassetQueryAssets](#cloudassetqueryassets) - Issue a job that queries assets using a SQL statement compatible with [BigQuery Standard SQL](http://cloud/bigquery/docs/reference/standard-sql/enabling-standard-sql). If the query execution finishes within timeout and there's no pagination, the full query results will be returned in the `QueryAssetsResponse`. Otherwise, full query results can be obtained by issuing extra requests with the `job_reference` from the a previous `QueryAssets` call. Note, the query result has approximately 10 GB limitation enforced by BigQuery https://cloud.google.com/bigquery/docs/best-practices-performance-output, queries return larger results will result in errors.
* [cloudassetSearchAllIamPolicies](#cloudassetsearchalliampolicies) - Searches all IAM policies within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllIamPolicies` permission on the desired scope, otherwise the request will be rejected.
* [cloudassetSearchAllResources](#cloudassetsearchallresources) - Searches all Google Cloud resources within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllResources` permission on the desired scope, otherwise the request will be rejected.

## cloudassetAnalyzeIamPolicy

Analyzes IAM policies to answer which identities have what accesses on which resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudassetAnalyzeIamPolicyRequest;
import org.openapis.openapi.models.operations.CloudassetAnalyzeIamPolicyResponse;
import org.openapis.openapi.models.operations.CloudassetAnalyzeIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetAnalyzeIamPolicyRequest req = new CloudassetAnalyzeIamPolicyRequest("accusamus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                analysisQueryAccessSelectorPermissions = new String[]{{
                    add("delectus"),
                    add("quidem"),
                    add("provident"),
                    add("nam"),
                }};
                analysisQueryAccessSelectorRoles = new String[]{{
                    add("blanditiis"),
                    add("deleniti"),
                    add("sapiente"),
                }};
                analysisQueryConditionContextAccessTime = "amet";
                analysisQueryIdentitySelectorIdentity = "deserunt";
                analysisQueryOptionsAnalyzeServiceAccountImpersonation = false;
                analysisQueryOptionsExpandGroups = false;
                analysisQueryOptionsExpandResources = false;
                analysisQueryOptionsExpandRoles = false;
                analysisQueryOptionsIncludeDenyPolicyAnalysis = false;
                analysisQueryOptionsOutputGroupEdges = false;
                analysisQueryOptionsOutputResourceEdges = false;
                analysisQueryResourceSelectorFullResourceName = "nisi";
                callback = "vel";
                executionTimeout = "natus";
                fields = "omnis";
                key = "molestiae";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "nihil";
                savedAnalysisQuery = "magnam";
                uploadType = "distinctio";
                uploadProtocol = "id";
            }};            

            CloudassetAnalyzeIamPolicyResponse res = sdk.v1.cloudassetAnalyzeIamPolicy(req, new CloudassetAnalyzeIamPolicySecurity("labore", "labore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.analyzeIamPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudassetAnalyzeIamPolicyLongrunning

Analyzes IAM policies asynchronously to answer which identities have what accesses on which resources, and writes the analysis results to a Google Cloud Storage or a BigQuery destination. For Cloud Storage destination, the output format is the JSON format that represents a AnalyzeIamPolicyResponse. This method implements the google.longrunning.Operation, which allows you to track the operation status. We recommend intervals of at least 2 seconds with exponential backoff retry to poll the operation result. The metadata contains the metadata for the long-running operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudassetAnalyzeIamPolicyLongrunningRequest;
import org.openapis.openapi.models.operations.CloudassetAnalyzeIamPolicyLongrunningResponse;
import org.openapis.openapi.models.operations.CloudassetAnalyzeIamPolicyLongrunningSecurity;
import org.openapis.openapi.models.shared.AccessSelector;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AnalyzeIamPolicyLongrunningRequest;
import org.openapis.openapi.models.shared.ConditionContext;
import org.openapis.openapi.models.shared.GoogleCloudAssetV1BigQueryDestination;
import org.openapis.openapi.models.shared.GoogleCloudAssetV1BigQueryDestinationPartitionKeyEnum;
import org.openapis.openapi.models.shared.GoogleCloudAssetV1GcsDestination;
import org.openapis.openapi.models.shared.IamPolicyAnalysisOutputConfig;
import org.openapis.openapi.models.shared.IamPolicyAnalysisQuery;
import org.openapis.openapi.models.shared.IdentitySelector;
import org.openapis.openapi.models.shared.Options;
import org.openapis.openapi.models.shared.ResourceSelector;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetAnalyzeIamPolicyLongrunningRequest req = new CloudassetAnalyzeIamPolicyLongrunningRequest("suscipit") {{
                dollarXgafv = XgafvEnum.TWO;
                analyzeIamPolicyLongrunningRequest = new AnalyzeIamPolicyLongrunningRequest() {{
                    analysisQuery = new IamPolicyAnalysisQuery() {{
                        accessSelector = new AccessSelector() {{
                            permissions = new String[]{{
                                add("eum"),
                                add("vero"),
                                add("aspernatur"),
                            }};
                            roles = new String[]{{
                                add("magnam"),
                            }};
                        }};;
                        conditionContext = new ConditionContext() {{
                            accessTime = "et";
                        }};;
                        identitySelector = new IdentitySelector() {{
                            identity = "excepturi";
                        }};;
                        options = new Options() {{
                            analyzeServiceAccountImpersonation = false;
                            expandGroups = false;
                            expandResources = false;
                            expandRoles = false;
                            includeDenyPolicyAnalysis = false;
                            outputGroupEdges = false;
                            outputResourceEdges = false;
                        }};;
                        resourceSelector = new ResourceSelector() {{
                            fullResourceName = "ullam";
                        }};;
                        scope = "provident";
                    }};;
                    outputConfig = new IamPolicyAnalysisOutputConfig() {{
                        bigqueryDestination = new GoogleCloudAssetV1BigQueryDestination() {{
                            dataset = "quos";
                            partitionKey = GoogleCloudAssetV1BigQueryDestinationPartitionKeyEnum.REQUEST_TIME;
                            tablePrefix = "accusantium";
                            writeDisposition = "mollitia";
                        }};;
                        gcsDestination = new GoogleCloudAssetV1GcsDestination() {{
                            uri = "https://private-examiner.info";
                        }};;
                    }};;
                    savedAnalysisQuery = "dolor";
                }};;
                accessToken = "necessitatibus";
                alt = AltEnum.JSON;
                callback = "nemo";
                fields = "quasi";
                key = "iure";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "eius";
                uploadProtocol = "maxime";
            }};            

            CloudassetAnalyzeIamPolicyLongrunningResponse res = sdk.v1.cloudassetAnalyzeIamPolicyLongrunning(req, new CloudassetAnalyzeIamPolicyLongrunningSecurity("deleniti", "facilis") {{
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

## cloudassetAnalyzeMove

Analyze moving a resource to a specified destination without kicking off the actual move. The analysis is best effort depending on the user's permissions of viewing different hierarchical policies and configurations. The policies and configuration are subject to change before the actual resource migration takes place.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudassetAnalyzeMoveRequest;
import org.openapis.openapi.models.operations.CloudassetAnalyzeMoveResponse;
import org.openapis.openapi.models.operations.CloudassetAnalyzeMoveSecurity;
import org.openapis.openapi.models.operations.CloudassetAnalyzeMoveViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetAnalyzeMoveRequest req = new CloudassetAnalyzeMoveRequest("in") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "architecto";
                alt = AltEnum.PROTO;
                callback = "ullam";
                destinationParent = "expedita";
                fields = "nihil";
                key = "repellat";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "saepe";
                uploadProtocol = "pariatur";
                view = CloudassetAnalyzeMoveViewEnum.ANALYSIS_VIEW_UNSPECIFIED;
            }};            

            CloudassetAnalyzeMoveResponse res = sdk.v1.cloudassetAnalyzeMove(req, new CloudassetAnalyzeMoveSecurity("consequuntur", "praesentium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.analyzeMoveResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudassetAnalyzeOrgPolicies

Analyzes organization policies under a scope.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudassetAnalyzeOrgPoliciesRequest;
import org.openapis.openapi.models.operations.CloudassetAnalyzeOrgPoliciesResponse;
import org.openapis.openapi.models.operations.CloudassetAnalyzeOrgPoliciesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetAnalyzeOrgPoliciesRequest req = new CloudassetAnalyzeOrgPoliciesRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sunt";
                alt = AltEnum.PROTO;
                callback = "illum";
                constraint = "pariatur";
                fields = "maxime";
                filter = "ea";
                key = "excepturi";
                oauthToken = "odit";
                pageSize = 407183L;
                pageToken = "accusantium";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "maiores";
                uploadProtocol = "quidem";
            }};            

            CloudassetAnalyzeOrgPoliciesResponse res = sdk.v1.cloudassetAnalyzeOrgPolicies(req, new CloudassetAnalyzeOrgPoliciesSecurity("ipsam", "voluptate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.analyzeOrgPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudassetAnalyzeOrgPolicyGovernedAssets

Analyzes organization policies governed assets (Google Cloud resources or policies) under a scope. This RPC supports custom constraints and the following 10 canned constraints: * storage.uniformBucketLevelAccess * iam.disableServiceAccountKeyCreation * iam.allowedPolicyMemberDomains * compute.vmExternalIpAccess * appengine.enforceServiceAccountActAsCheck * gcp.resourceLocations * compute.trustedImageProjects * compute.skipDefaultNetworkCreation * compute.requireOsLogin * compute.disableNestedVirtualization This RPC only returns either resources of types supported by [searchable asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types#searchable_asset_types), or IAM policies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudassetAnalyzeOrgPolicyGovernedAssetsRequest;
import org.openapis.openapi.models.operations.CloudassetAnalyzeOrgPolicyGovernedAssetsResponse;
import org.openapis.openapi.models.operations.CloudassetAnalyzeOrgPolicyGovernedAssetsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetAnalyzeOrgPolicyGovernedAssetsRequest req = new CloudassetAnalyzeOrgPolicyGovernedAssetsRequest("autem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eaque";
                alt = AltEnum.PROTO;
                callback = "nemo";
                constraint = "voluptatibus";
                fields = "perferendis";
                filter = "fugiat";
                key = "amet";
                oauthToken = "aut";
                pageSize = 764912L;
                pageToken = "corporis";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "libero";
                uploadProtocol = "nobis";
            }};            

            CloudassetAnalyzeOrgPolicyGovernedAssetsResponse res = sdk.v1.cloudassetAnalyzeOrgPolicyGovernedAssets(req, new CloudassetAnalyzeOrgPolicyGovernedAssetsSecurity("dolores", "quis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.analyzeOrgPolicyGovernedAssetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudassetAnalyzeOrgPolicyGovernedContainers

Analyzes organization policies governed containers (projects, folders or organization) under a scope.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudassetAnalyzeOrgPolicyGovernedContainersRequest;
import org.openapis.openapi.models.operations.CloudassetAnalyzeOrgPolicyGovernedContainersResponse;
import org.openapis.openapi.models.operations.CloudassetAnalyzeOrgPolicyGovernedContainersSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetAnalyzeOrgPolicyGovernedContainersRequest req = new CloudassetAnalyzeOrgPolicyGovernedContainersRequest("totam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eaque";
                alt = AltEnum.MEDIA;
                callback = "nesciunt";
                constraint = "eos";
                fields = "perferendis";
                filter = "dolores";
                key = "minus";
                oauthToken = "quam";
                pageSize = 223924L;
                pageToken = "vero";
                prettyPrint = false;
                quotaUser = "nostrum";
                uploadType = "hic";
                uploadProtocol = "recusandae";
            }};            

            CloudassetAnalyzeOrgPolicyGovernedContainersResponse res = sdk.v1.cloudassetAnalyzeOrgPolicyGovernedContainers(req, new CloudassetAnalyzeOrgPolicyGovernedContainersSecurity("omnis", "facilis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.analyzeOrgPolicyGovernedContainersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudassetBatchGetAssetsHistory

Batch gets the update history of assets that overlap a time window. For IAM_POLICY content, this API outputs history when the asset and its attached IAM POLICY both exist. This can create gaps in the output history. Otherwise, this API outputs history with asset in both non-delete or deleted status. If a specified asset does not exist, this API returns an INVALID_ARGUMENT error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudassetBatchGetAssetsHistoryContentTypeEnum;
import org.openapis.openapi.models.operations.CloudassetBatchGetAssetsHistoryRequest;
import org.openapis.openapi.models.operations.CloudassetBatchGetAssetsHistoryResponse;
import org.openapis.openapi.models.operations.CloudassetBatchGetAssetsHistorySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetBatchGetAssetsHistoryRequest req = new CloudassetBatchGetAssetsHistoryRequest("perspiciatis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "porro";
                alt = AltEnum.JSON;
                assetNames = new String[]{{
                    add("error"),
                    add("eaque"),
                    add("occaecati"),
                }};
                callback = "rerum";
                contentType = CloudassetBatchGetAssetsHistoryContentTypeEnum.RESOURCE;
                fields = "asperiores";
                key = "earum";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "iste";
                readTimeWindowEndTime = "dolorum";
                readTimeWindowStartTime = "deleniti";
                relationshipTypes = new String[]{{
                    add("provident"),
                    add("nobis"),
                    add("libero"),
                    add("delectus"),
                }};
                uploadType = "quaerat";
                uploadProtocol = "quos";
            }};            

            CloudassetBatchGetAssetsHistoryResponse res = sdk.v1.cloudassetBatchGetAssetsHistory(req, new CloudassetBatchGetAssetsHistorySecurity("aliquid", "dolorem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchGetAssetsHistoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudassetExportAssets

Exports assets with time and resource types to a given Cloud Storage location/BigQuery table. For Cloud Storage location destinations, the output format is newline-delimited JSON. Each line represents a google.cloud.asset.v1.Asset in the JSON format; for BigQuery table destinations, the output table stores the fields in asset Protobuf as columns. This API implements the google.longrunning.Operation API, which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudassetExportAssetsRequest;
import org.openapis.openapi.models.operations.CloudassetExportAssetsResponse;
import org.openapis.openapi.models.operations.CloudassetExportAssetsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BigQueryDestination;
import org.openapis.openapi.models.shared.ExportAssetsRequest;
import org.openapis.openapi.models.shared.ExportAssetsRequestContentTypeEnum;
import org.openapis.openapi.models.shared.GcsDestination;
import org.openapis.openapi.models.shared.OutputConfig;
import org.openapis.openapi.models.shared.PartitionSpec;
import org.openapis.openapi.models.shared.PartitionSpecPartitionKeyEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetExportAssetsRequest req = new CloudassetExportAssetsRequest("dolorem") {{
                dollarXgafv = XgafvEnum.ONE;
                exportAssetsRequest = new ExportAssetsRequest() {{
                    assetTypes = new String[]{{
                        add("ipsum"),
                    }};
                    contentType = ExportAssetsRequestContentTypeEnum.RELATIONSHIP;
                    outputConfig = new OutputConfig() {{
                        bigqueryDestination = new BigQueryDestination() {{
                            dataset = "excepturi";
                            force = false;
                            partitionSpec = new PartitionSpec() {{
                                partitionKey = PartitionSpecPartitionKeyEnum.REQUEST_TIME;
                            }};;
                            separateTablesPerAssetType = false;
                            table = "voluptate";
                        }};;
                        gcsDestination = new GcsDestination() {{
                            uri = "http://wild-crumb.net";
                            uriPrefix = "numquam";
                        }};;
                    }};;
                    readTime = "veritatis";
                    relationshipTypes = new String[]{{
                        add("ipsa"),
                    }};
                }};;
                accessToken = "iure";
                alt = AltEnum.MEDIA;
                callback = "quaerat";
                fields = "accusamus";
                key = "quidem";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "voluptas";
                uploadType = "natus";
                uploadProtocol = "eos";
            }};            

            CloudassetExportAssetsResponse res = sdk.v1.cloudassetExportAssets(req, new CloudassetExportAssetsSecurity("atque", "sit") {{
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

## cloudassetQueryAssets

Issue a job that queries assets using a SQL statement compatible with [BigQuery Standard SQL](http://cloud/bigquery/docs/reference/standard-sql/enabling-standard-sql). If the query execution finishes within timeout and there's no pagination, the full query results will be returned in the `QueryAssetsResponse`. Otherwise, full query results can be obtained by issuing extra requests with the `job_reference` from the a previous `QueryAssets` call. Note, the query result has approximately 10 GB limitation enforced by BigQuery https://cloud.google.com/bigquery/docs/best-practices-performance-output, queries return larger results will result in errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudassetQueryAssetsRequest;
import org.openapis.openapi.models.operations.CloudassetQueryAssetsResponse;
import org.openapis.openapi.models.operations.CloudassetQueryAssetsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudAssetV1QueryAssetsOutputConfigBigQueryDestination;
import org.openapis.openapi.models.shared.QueryAssetsOutputConfig;
import org.openapis.openapi.models.shared.QueryAssetsRequest;
import org.openapis.openapi.models.shared.TimeWindow;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetQueryAssetsRequest req = new CloudassetQueryAssetsRequest("fugiat") {{
                dollarXgafv = XgafvEnum.ONE;
                queryAssetsRequest = new QueryAssetsRequest() {{
                    jobReference = "soluta";
                    outputConfig = new QueryAssetsOutputConfig() {{
                        bigqueryDestination = new GoogleCloudAssetV1QueryAssetsOutputConfigBigQueryDestination() {{
                            dataset = "dolorum";
                            table = "iusto";
                            writeDisposition = "voluptate";
                        }};;
                    }};;
                    pageSize = 677082;
                    pageToken = "deleniti";
                    readTime = "omnis";
                    readTimeWindow = new TimeWindow() {{
                        endTime = "necessitatibus";
                        startTime = "distinctio";
                    }};;
                    statement = "asperiores";
                    timeout = "nihil";
                }};;
                accessToken = "ipsum";
                alt = AltEnum.MEDIA;
                callback = "id";
                fields = "saepe";
                key = "eius";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "amet";
                uploadProtocol = "optio";
            }};            

            CloudassetQueryAssetsResponse res = sdk.v1.cloudassetQueryAssets(req, new CloudassetQueryAssetsSecurity("accusamus", "ad") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.queryAssetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudassetSearchAllIamPolicies

Searches all IAM policies within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllIamPolicies` permission on the desired scope, otherwise the request will be rejected.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudassetSearchAllIamPoliciesRequest;
import org.openapis.openapi.models.operations.CloudassetSearchAllIamPoliciesResponse;
import org.openapis.openapi.models.operations.CloudassetSearchAllIamPoliciesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetSearchAllIamPoliciesRequest req = new CloudassetSearchAllIamPoliciesRequest("saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                assetTypes = new String[]{{
                    add("repellendus"),
                    add("totam"),
                }};
                callback = "similique";
                fields = "alias";
                key = "at";
                oauthToken = "quaerat";
                orderBy = "tempora";
                pageSize = 425451L;
                pageToken = "quod";
                prettyPrint = false;
                query = "officiis";
                quotaUser = "qui";
                uploadType = "dolorum";
                uploadProtocol = "a";
            }};            

            CloudassetSearchAllIamPoliciesResponse res = sdk.v1.cloudassetSearchAllIamPolicies(req, new CloudassetSearchAllIamPoliciesSecurity("esse", "harum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.searchAllIamPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudassetSearchAllResources

Searches all Google Cloud resources within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllResources` permission on the desired scope, otherwise the request will be rejected.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudassetSearchAllResourcesRequest;
import org.openapis.openapi.models.operations.CloudassetSearchAllResourcesResponse;
import org.openapis.openapi.models.operations.CloudassetSearchAllResourcesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetSearchAllResourcesRequest req = new CloudassetSearchAllResourcesRequest("iusto") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quisquam";
                alt = AltEnum.PROTO;
                assetTypes = new String[]{{
                    add("tempore"),
                }};
                callback = "accusamus";
                fields = "numquam";
                key = "enim";
                oauthToken = "dolorem";
                orderBy = "sapiente";
                pageSize = 518201L;
                pageToken = "nihil";
                prettyPrint = false;
                query = "sit";
                quotaUser = "expedita";
                readMask = "neque";
                uploadType = "sed";
                uploadProtocol = "vel";
            }};            

            CloudassetSearchAllResourcesResponse res = sdk.v1.cloudassetSearchAllResources(req, new CloudassetSearchAllResourcesSecurity("libero", "voluptas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.searchAllResourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
