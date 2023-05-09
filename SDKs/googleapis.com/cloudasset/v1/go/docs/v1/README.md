# V1

### Available Operations

* [CloudassetAnalyzeIamPolicy](#cloudassetanalyzeiampolicy) - Analyzes IAM policies to answer which identities have what accesses on which resources.
* [CloudassetAnalyzeIamPolicyLongrunning](#cloudassetanalyzeiampolicylongrunning) - Analyzes IAM policies asynchronously to answer which identities have what accesses on which resources, and writes the analysis results to a Google Cloud Storage or a BigQuery destination. For Cloud Storage destination, the output format is the JSON format that represents a AnalyzeIamPolicyResponse. This method implements the google.longrunning.Operation, which allows you to track the operation status. We recommend intervals of at least 2 seconds with exponential backoff retry to poll the operation result. The metadata contains the metadata for the long-running operation.
* [CloudassetAnalyzeMove](#cloudassetanalyzemove) - Analyze moving a resource to a specified destination without kicking off the actual move. The analysis is best effort depending on the user's permissions of viewing different hierarchical policies and configurations. The policies and configuration are subject to change before the actual resource migration takes place.
* [CloudassetAnalyzeOrgPolicies](#cloudassetanalyzeorgpolicies) - Analyzes organization policies under a scope.
* [CloudassetAnalyzeOrgPolicyGovernedAssets](#cloudassetanalyzeorgpolicygovernedassets) - Analyzes organization policies governed assets (Google Cloud resources or policies) under a scope. This RPC supports custom constraints and the following 10 canned constraints: * storage.uniformBucketLevelAccess * iam.disableServiceAccountKeyCreation * iam.allowedPolicyMemberDomains * compute.vmExternalIpAccess * appengine.enforceServiceAccountActAsCheck * gcp.resourceLocations * compute.trustedImageProjects * compute.skipDefaultNetworkCreation * compute.requireOsLogin * compute.disableNestedVirtualization This RPC only returns either resources of types supported by [searchable asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types#searchable_asset_types), or IAM policies.
* [CloudassetAnalyzeOrgPolicyGovernedContainers](#cloudassetanalyzeorgpolicygovernedcontainers) - Analyzes organization policies governed containers (projects, folders or organization) under a scope.
* [CloudassetBatchGetAssetsHistory](#cloudassetbatchgetassetshistory) - Batch gets the update history of assets that overlap a time window. For IAM_POLICY content, this API outputs history when the asset and its attached IAM POLICY both exist. This can create gaps in the output history. Otherwise, this API outputs history with asset in both non-delete or deleted status. If a specified asset does not exist, this API returns an INVALID_ARGUMENT error.
* [CloudassetExportAssets](#cloudassetexportassets) - Exports assets with time and resource types to a given Cloud Storage location/BigQuery table. For Cloud Storage location destinations, the output format is newline-delimited JSON. Each line represents a google.cloud.asset.v1.Asset in the JSON format; for BigQuery table destinations, the output table stores the fields in asset Protobuf as columns. This API implements the google.longrunning.Operation API, which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.
* [CloudassetQueryAssets](#cloudassetqueryassets) - Issue a job that queries assets using a SQL statement compatible with [BigQuery Standard SQL](http://cloud/bigquery/docs/reference/standard-sql/enabling-standard-sql). If the query execution finishes within timeout and there's no pagination, the full query results will be returned in the `QueryAssetsResponse`. Otherwise, full query results can be obtained by issuing extra requests with the `job_reference` from the a previous `QueryAssets` call. Note, the query result has approximately 10 GB limitation enforced by BigQuery https://cloud.google.com/bigquery/docs/best-practices-performance-output, queries return larger results will result in errors.
* [CloudassetSearchAllIamPolicies](#cloudassetsearchalliampolicies) - Searches all IAM policies within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllIamPolicies` permission on the desired scope, otherwise the request will be rejected.
* [CloudassetSearchAllResources](#cloudassetsearchallresources) - Searches all Google Cloud resources within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllResources` permission on the desired scope, otherwise the request will be rejected.

## CloudassetAnalyzeIamPolicy

Analyzes IAM policies to answer which identities have what accesses on which resources.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V1.CloudassetAnalyzeIamPolicy(ctx, operations.CloudassetAnalyzeIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumProto.ToPointer(),
        AnalysisQueryAccessSelectorPermissions: []string{
            "ea",
            "aliquid",
            "laborum",
            "accusamus",
        },
        AnalysisQueryAccessSelectorRoles: []string{
            "occaecati",
        },
        AnalysisQueryConditionContextAccessTime: sdk.String("enim"),
        AnalysisQueryIdentitySelectorIdentity: sdk.String("accusamus"),
        AnalysisQueryOptionsAnalyzeServiceAccountImpersonation: sdk.Bool(false),
        AnalysisQueryOptionsExpandGroups: sdk.Bool(false),
        AnalysisQueryOptionsExpandResources: sdk.Bool(false),
        AnalysisQueryOptionsExpandRoles: sdk.Bool(false),
        AnalysisQueryOptionsIncludeDenyPolicyAnalysis: sdk.Bool(false),
        AnalysisQueryOptionsOutputGroupEdges: sdk.Bool(false),
        AnalysisQueryOptionsOutputResourceEdges: sdk.Bool(false),
        AnalysisQueryResourceSelectorFullResourceName: sdk.String("delectus"),
        Callback: sdk.String("quidem"),
        ExecutionTimeout: sdk.String("provident"),
        Fields: sdk.String("nam"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("blanditiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        SavedAnalysisQuery: sdk.String("sapiente"),
        Scope: "amet",
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("nisi"),
    }, operations.CloudassetAnalyzeIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyzeIamPolicyResponse != nil {
        // handle response
    }
}
```

## CloudassetAnalyzeIamPolicyLongrunning

Analyzes IAM policies asynchronously to answer which identities have what accesses on which resources, and writes the analysis results to a Google Cloud Storage or a BigQuery destination. For Cloud Storage destination, the output format is the JSON format that represents a AnalyzeIamPolicyResponse. This method implements the google.longrunning.Operation, which allows you to track the operation status. We recommend intervals of at least 2 seconds with exponential backoff retry to poll the operation result. The metadata contains the metadata for the long-running operation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V1.CloudassetAnalyzeIamPolicyLongrunning(ctx, operations.CloudassetAnalyzeIamPolicyLongrunningRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AnalyzeIamPolicyLongrunningRequest: &shared.AnalyzeIamPolicyLongrunningRequest{
            AnalysisQuery: &shared.IamPolicyAnalysisQuery{
                AccessSelector: &shared.AccessSelector{
                    Permissions: []string{
                        "omnis",
                        "molestiae",
                        "perferendis",
                    },
                    Roles: []string{
                        "magnam",
                        "distinctio",
                    },
                },
                ConditionContext: &shared.ConditionContext{
                    AccessTime: sdk.String("id"),
                },
                IdentitySelector: &shared.IdentitySelector{
                    Identity: sdk.String("labore"),
                },
                Options: &shared.Options{
                    AnalyzeServiceAccountImpersonation: sdk.Bool(false),
                    ExpandGroups: sdk.Bool(false),
                    ExpandResources: sdk.Bool(false),
                    ExpandRoles: sdk.Bool(false),
                    IncludeDenyPolicyAnalysis: sdk.Bool(false),
                    OutputGroupEdges: sdk.Bool(false),
                    OutputResourceEdges: sdk.Bool(false),
                },
                ResourceSelector: &shared.ResourceSelector{
                    FullResourceName: sdk.String("labore"),
                },
                Scope: sdk.String("suscipit"),
            },
            OutputConfig: &shared.IamPolicyAnalysisOutputConfig{
                BigqueryDestination: &shared.GoogleCloudAssetV1BigQueryDestination{
                    Dataset: sdk.String("natus"),
                    PartitionKey: shared.GoogleCloudAssetV1BigQueryDestinationPartitionKeyEnumRequestTime.ToPointer(),
                    TablePrefix: sdk.String("eum"),
                    WriteDisposition: sdk.String("vero"),
                },
                GcsDestination: &shared.GoogleCloudAssetV1GcsDestination{
                    URI: sdk.String("http://buzzing-efficiency.com"),
                },
            },
            SavedAnalysisQuery: sdk.String("excepturi"),
        },
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("sint"),
        Key: sdk.String("accusantium"),
        OauthToken: sdk.String("mollitia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        Scope: "mollitia",
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("eum"),
    }, operations.CloudassetAnalyzeIamPolicyLongrunningSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## CloudassetAnalyzeMove

Analyze moving a resource to a specified destination without kicking off the actual move. The analysis is best effort depending on the user's permissions of viewing different hierarchical policies and configurations. The policies and configuration are subject to change before the actual resource migration takes place.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V1.CloudassetAnalyzeMove(ctx, operations.CloudassetAnalyzeMoveRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nemo"),
        DestinationParent: sdk.String("quasi"),
        Fields: sdk.String("iure"),
        Key: sdk.String("doloribus"),
        OauthToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eius"),
        Resource: "maxime",
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("facilis"),
        View: operations.CloudassetAnalyzeMoveViewEnumFull.ToPointer(),
    }, operations.CloudassetAnalyzeMoveSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyzeMoveResponse != nil {
        // handle response
    }
}
```

## CloudassetAnalyzeOrgPolicies

Analyzes organization policies under a scope.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V1.CloudassetAnalyzeOrgPolicies(ctx, operations.CloudassetAnalyzeOrgPoliciesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ullam"),
        Constraint: sdk.String("expedita"),
        Fields: sdk.String("nihil"),
        Filter: sdk.String("repellat"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("sed"),
        PageSize: sdk.Int64(904648),
        PageToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        Scope: "consequuntur",
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("natus"),
    }, operations.CloudassetAnalyzeOrgPoliciesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyzeOrgPoliciesResponse != nil {
        // handle response
    }
}
```

## CloudassetAnalyzeOrgPolicyGovernedAssets

Analyzes organization policies governed assets (Google Cloud resources or policies) under a scope. This RPC supports custom constraints and the following 10 canned constraints: * storage.uniformBucketLevelAccess * iam.disableServiceAccountKeyCreation * iam.allowedPolicyMemberDomains * compute.vmExternalIpAccess * appengine.enforceServiceAccountActAsCheck * gcp.resourceLocations * compute.trustedImageProjects * compute.skipDefaultNetworkCreation * compute.requireOsLogin * compute.disableNestedVirtualization This RPC only returns either resources of types supported by [searchable asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types#searchable_asset_types), or IAM policies.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V1.CloudassetAnalyzeOrgPolicyGovernedAssets(ctx, operations.CloudassetAnalyzeOrgPolicyGovernedAssetsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("sunt"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("illum"),
        Constraint: sdk.String("pariatur"),
        Fields: sdk.String("maxime"),
        Filter: sdk.String("ea"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("odit"),
        PageSize: sdk.Int64(407183),
        PageToken: sdk.String("accusantium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ab"),
        Scope: "maiores",
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.CloudassetAnalyzeOrgPolicyGovernedAssetsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyzeOrgPolicyGovernedAssetsResponse != nil {
        // handle response
    }
}
```

## CloudassetAnalyzeOrgPolicyGovernedContainers

Analyzes organization policies governed containers (projects, folders or organization) under a scope.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V1.CloudassetAnalyzeOrgPolicyGovernedContainers(ctx, operations.CloudassetAnalyzeOrgPolicyGovernedContainersRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("autem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eaque"),
        Constraint: sdk.String("pariatur"),
        Fields: sdk.String("nemo"),
        Filter: sdk.String("voluptatibus"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("fugiat"),
        PageSize: sdk.Int64(230742),
        PageToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cumque"),
        Scope: "corporis",
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("libero"),
    }, operations.CloudassetAnalyzeOrgPolicyGovernedContainersSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyzeOrgPolicyGovernedContainersResponse != nil {
        // handle response
    }
}
```

## CloudassetBatchGetAssetsHistory

Batch gets the update history of assets that overlap a time window. For IAM_POLICY content, this API outputs history when the asset and its attached IAM POLICY both exist. This can create gaps in the output history. Otherwise, this API outputs history with asset in both non-delete or deleted status. If a specified asset does not exist, this API returns an INVALID_ARGUMENT error.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V1.CloudassetBatchGetAssetsHistory(ctx, operations.CloudassetBatchGetAssetsHistoryRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AssetNames: []string{
            "dignissimos",
            "eaque",
            "quis",
        },
        Callback: sdk.String("nesciunt"),
        ContentType: operations.CloudassetBatchGetAssetsHistoryContentTypeEnumResource.ToPointer(),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("dolores"),
        OauthToken: sdk.String("minus"),
        Parent: "quam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        ReadTimeWindowEndTime: sdk.String("vero"),
        ReadTimeWindowStartTime: sdk.String("nostrum"),
        RelationshipTypes: []string{
            "recusandae",
            "omnis",
            "facilis",
            "perspiciatis",
        },
        UploadType: sdk.String("voluptatem"),
        UploadProtocol: sdk.String("porro"),
    }, operations.CloudassetBatchGetAssetsHistorySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetAssetsHistoryResponse != nil {
        // handle response
    }
}
```

## CloudassetExportAssets

Exports assets with time and resource types to a given Cloud Storage location/BigQuery table. For Cloud Storage location destinations, the output format is newline-delimited JSON. Each line represents a google.cloud.asset.v1.Asset in the JSON format; for BigQuery table destinations, the output table stores the fields in asset Protobuf as columns. This API implements the google.longrunning.Operation API, which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V1.CloudassetExportAssets(ctx, operations.CloudassetExportAssetsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ExportAssetsRequest: &shared.ExportAssetsRequest{
            AssetTypes: []string{
                "error",
                "eaque",
                "occaecati",
            },
            ContentType: shared.ExportAssetsRequestContentTypeEnumAccessPolicy.ToPointer(),
            OutputConfig: &shared.OutputConfig{
                BigqueryDestination: &shared.BigQueryDestination{
                    Dataset: sdk.String("adipisci"),
                    Force: sdk.Bool(false),
                    PartitionSpec: &shared.PartitionSpec{
                        PartitionKey: shared.PartitionSpecPartitionKeyEnumRequestTime.ToPointer(),
                    },
                    SeparateTablesPerAssetType: sdk.Bool(false),
                    Table: sdk.String("earum"),
                },
                GcsDestination: &shared.GcsDestination{
                    URI: sdk.String("http://peaceful-popularity.name"),
                    URIPrefix: sdk.String("pariatur"),
                },
            },
            ReadTime: sdk.String("provident"),
            RelationshipTypes: []string{
                "libero",
                "delectus",
                "quaerat",
                "quos",
            },
        },
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("dolor"),
        Key: sdk.String("qui"),
        OauthToken: sdk.String("ipsum"),
        Parent: "hic",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("voluptate"),
    }, operations.CloudassetExportAssetsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## CloudassetQueryAssets

Issue a job that queries assets using a SQL statement compatible with [BigQuery Standard SQL](http://cloud/bigquery/docs/reference/standard-sql/enabling-standard-sql). If the query execution finishes within timeout and there's no pagination, the full query results will be returned in the `QueryAssetsResponse`. Otherwise, full query results can be obtained by issuing extra requests with the `job_reference` from the a previous `QueryAssets` call. Note, the query result has approximately 10 GB limitation enforced by BigQuery https://cloud.google.com/bigquery/docs/best-practices-performance-output, queries return larger results will result in errors.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V1.CloudassetQueryAssets(ctx, operations.CloudassetQueryAssetsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        QueryAssetsRequest: &shared.QueryAssetsRequest{
            JobReference: sdk.String("reiciendis"),
            OutputConfig: &shared.QueryAssetsOutputConfig{
                BigqueryDestination: &shared.GoogleCloudAssetV1QueryAssetsOutputConfigBigQueryDestination{
                    Dataset: sdk.String("amet"),
                    Table: sdk.String("dolorum"),
                    WriteDisposition: sdk.String("numquam"),
                },
            },
            PageSize: sdk.Int(85295),
            PageToken: sdk.String("ipsa"),
            ReadTime: sdk.String("ipsa"),
            ReadTimeWindow: &shared.TimeWindow{
                EndTime: sdk.String("iure"),
                StartTime: sdk.String("odio"),
            },
            Statement: sdk.String("quaerat"),
            Timeout: sdk.String("accusamus"),
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("natus"),
        Key: sdk.String("eos"),
        OauthToken: sdk.String("atque"),
        Parent: "sit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugiat"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("soluta"),
    }, operations.CloudassetQueryAssetsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryAssetsResponse != nil {
        // handle response
    }
}
```

## CloudassetSearchAllIamPolicies

Searches all IAM policies within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllIamPolicies` permission on the desired scope, otherwise the request will be rejected.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V1.CloudassetSearchAllIamPolicies(ctx, operations.CloudassetSearchAllIamPoliciesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AssetTypes: []string{
            "deleniti",
            "omnis",
            "necessitatibus",
        },
        Callback: sdk.String("distinctio"),
        Fields: sdk.String("asperiores"),
        Key: sdk.String("nihil"),
        OauthToken: sdk.String("ipsum"),
        OrderBy: sdk.String("voluptate"),
        PageSize: sdk.Int64(663078),
        PageToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("eius"),
        QuotaUser: sdk.String("aspernatur"),
        Scope: "perferendis",
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("optio"),
    }, operations.CloudassetSearchAllIamPoliciesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchAllIamPoliciesResponse != nil {
        // handle response
    }
}
```

## CloudassetSearchAllResources

Searches all Google Cloud resources within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllResources` permission on the desired scope, otherwise the request will be rejected.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V1.CloudassetSearchAllResources(ctx, operations.CloudassetSearchAllResourcesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ad"),
        Alt: shared.AltEnumProto.ToPointer(),
        AssetTypes: []string{
            "deserunt",
            "provident",
        },
        Callback: sdk.String("minima"),
        Fields: sdk.String("repellendus"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("similique"),
        OrderBy: sdk.String("alias"),
        PageSize: sdk.Int64(872651),
        PageToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("tempora"),
        QuotaUser: sdk.String("vel"),
        ReadMask: sdk.String("quod"),
        Scope: "officiis",
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.CloudassetSearchAllResourcesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchAllResourcesResponse != nil {
        // handle response
    }
}
```
