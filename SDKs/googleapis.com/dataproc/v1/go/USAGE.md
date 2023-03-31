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
        DollarXgafv: "2",
        BatchInput: &shared.BatchInput{
            EnvironmentConfig: &shared.EnvironmentConfig{
                ExecutionConfig: &shared.ExecutionConfig{
                    IdleTTL: "provident",
                    KmsKey: "distinctio",
                    NetworkTags: []string{
                        "unde",
                        "nulla",
                        "corrupti",
                        "illum",
                    },
                    NetworkURI: "vel",
                    ServiceAccount: "error",
                    StagingBucket: "deserunt",
                    SubnetworkURI: "suscipit",
                    TTL: "iure",
                },
                PeripheralsConfig: &shared.PeripheralsConfig{
                    MetastoreService: "magnam",
                    SparkHistoryServerConfig: &shared.SparkHistoryServerConfig{
                        DataprocCluster: "debitis",
                    },
                },
            },
            Labels: map[string]string{
                "delectus": "tempora",
            },
            PysparkBatch: &shared.PySparkBatch{
                ArchiveUris: []string{
                    "molestiae",
                    "minus",
                },
                Args: []string{
                    "voluptatum",
                    "iusto",
                    "excepturi",
                    "nisi",
                },
                FileUris: []string{
                    "temporibus",
                    "ab",
                    "quis",
                    "veritatis",
                },
                JarFileUris: []string{
                    "perferendis",
                    "ipsam",
                    "repellendus",
                },
                MainPythonFileURI: "sapiente",
                PythonFileUris: []string{
                    "odit",
                    "at",
                    "at",
                    "maiores",
                },
            },
            RuntimeConfig: &shared.RuntimeConfig{
                ContainerImage: "molestiae",
                Properties: map[string]string{
                    "quod": "esse",
                    "totam": "porro",
                    "dolorum": "dicta",
                    "nam": "officia",
                },
                Version: "occaecati",
            },
            RuntimeInfo: &shared.RuntimeInfoInput{
                ApproximateUsage: &shared.UsageMetrics{
                    MilliDcuSeconds: "fugit",
                    ShuffleStorageGbSeconds: "deleniti",
                },
                CurrentUsage: &shared.UsageSnapshot{
                    MilliDcu: "hic",
                    ShuffleStorageGb: "optio",
                    SnapshotTime: "totam",
                },
            },
            SparkBatch: &shared.SparkBatch{
                ArchiveUris: []string{
                    "commodi",
                },
                Args: []string{
                    "modi",
                    "qui",
                },
                FileUris: []string{
                    "cum",
                    "esse",
                    "ipsum",
                    "excepturi",
                },
                JarFileUris: []string{
                    "perferendis",
                },
                MainClass: "ad",
                MainJarFileURI: "natus",
            },
            SparkRBatch: &shared.SparkRBatch{
                ArchiveUris: []string{
                    "iste",
                },
                Args: []string{
                    "natus",
                },
                FileUris: []string{
                    "hic",
                    "saepe",
                },
                MainRFileURI: "fuga",
            },
            SparkSQLBatch: &shared.SparkSQLBatch{
                JarFileUris: []string{
                    "corporis",
                    "iste",
                },
                QueryFileURI: "iure",
                QueryVariables: map[string]string{
                    "quidem": "architecto",
                    "ipsa": "reiciendis",
                    "est": "mollitia",
                    "laborum": "dolores",
                },
            },
        },
        AccessToken: "dolorem",
        Alt: "media",
        BatchID: "explicabo",
        Callback: "nobis",
        Fields: "enim",
        Key: "omnis",
        OauthToken: "nemo",
        Parent: "minima",
        PrettyPrint: false,
        QuotaUser: "excepturi",
        RequestID: "accusantium",
        UploadType: "iure",
        UploadProtocol: "culpa",
    }

    ctx := context.Background()
    res, err := s.Projects.DataprocProjectsLocationsBatchesCreate(ctx, req, operations.DataprocProjectsLocationsBatchesCreateSecurity{
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
<!-- End SDK Example Usage -->