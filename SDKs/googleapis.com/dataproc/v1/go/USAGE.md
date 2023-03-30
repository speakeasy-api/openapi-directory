<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DataprocProjectsLocationsBatchesCreateRequest{
        Security: operations.DataprocProjectsLocationsBatchesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DataprocProjectsLocationsBatchesCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.DataprocProjectsLocationsBatchesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            BatchID: "unde",
            Callback: "nulla",
            Fields: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            RequestID: "deserunt",
            UploadType: "suscipit",
            UploadProtocol: "iure",
        },
        Request: &shared.BatchInput{
            EnvironmentConfig: &shared.EnvironmentConfig{
                ExecutionConfig: &shared.ExecutionConfig{
                    IdleTTL: "magnam",
                    KmsKey: "debitis",
                    NetworkTags: []string{
                        "delectus",
                    },
                    NetworkURI: "tempora",
                    ServiceAccount: "suscipit",
                    StagingBucket: "molestiae",
                    SubnetworkURI: "minus",
                    TTL: "placeat",
                },
                PeripheralsConfig: &shared.PeripheralsConfig{
                    MetastoreService: "voluptatum",
                    SparkHistoryServerConfig: &shared.SparkHistoryServerConfig{
                        DataprocCluster: "iusto",
                    },
                },
            },
            Labels: map[string]string{
                "nisi": "recusandae",
                "temporibus": "ab",
                "quis": "veritatis",
            },
            PysparkBatch: &shared.PySparkBatch{
                ArchiveUris: []string{
                    "perferendis",
                    "ipsam",
                    "repellendus",
                },
                Args: []string{
                    "quo",
                    "odit",
                    "at",
                    "at",
                },
                FileUris: []string{
                    "molestiae",
                    "quod",
                    "quod",
                    "esse",
                },
                JarFileUris: []string{
                    "porro",
                    "dolorum",
                    "dicta",
                },
                MainPythonFileURI: "nam",
                PythonFileUris: []string{
                    "occaecati",
                    "fugit",
                    "deleniti",
                },
            },
            RuntimeConfig: &shared.RuntimeConfig{
                ContainerImage: "hic",
                Properties: map[string]string{
                    "totam": "beatae",
                    "commodi": "molestiae",
                    "modi": "qui",
                    "impedit": "cum",
                },
                Version: "esse",
            },
            RuntimeInfo: &shared.RuntimeInfoInput{
                ApproximateUsage: &shared.UsageMetrics{
                    MilliDcuSeconds: "ipsum",
                    ShuffleStorageGbSeconds: "excepturi",
                },
                CurrentUsage: &shared.UsageSnapshot{
                    MilliDcu: "aspernatur",
                    ShuffleStorageGb: "perferendis",
                    SnapshotTime: "ad",
                },
            },
            SparkBatch: &shared.SparkBatch{
                ArchiveUris: []string{
                    "sed",
                    "iste",
                    "dolor",
                },
                Args: []string{
                    "laboriosam",
                    "hic",
                    "saepe",
                },
                FileUris: []string{
                    "in",
                    "corporis",
                    "iste",
                },
                JarFileUris: []string{
                    "saepe",
                    "quidem",
                },
                MainClass: "architecto",
                MainJarFileURI: "ipsa",
            },
            SparkRBatch: &shared.SparkRBatch{
                ArchiveUris: []string{
                    "est",
                    "mollitia",
                    "laborum",
                    "dolores",
                },
                Args: []string{
                    "corporis",
                },
                FileUris: []string{
                    "nobis",
                },
                MainRFileURI: "enim",
            },
            SparkSQLBatch: &shared.SparkSQLBatch{
                JarFileUris: []string{
                    "nemo",
                    "minima",
                    "excepturi",
                },
                QueryFileURI: "accusantium",
                QueryVariables: map[string]string{
                    "culpa": "doloribus",
                    "sapiente": "architecto",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.DataprocProjectsLocationsBatchesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->