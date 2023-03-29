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
            Parent: "unde",
        },
        QueryParams: operations.DataprocProjectsLocationsBatchesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            BatchID: "id",
            Callback: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            RequestID: "facilis",
            UploadType: "eum",
            UploadProtocol: "iusto",
        },
        Request: &shared.BatchInput{
            EnvironmentConfig: &shared.EnvironmentConfig{
                ExecutionConfig: &shared.ExecutionConfig{
                    IdleTTL: "ullam",
                    KmsKey: "saepe",
                    NetworkTags: []string{
                        "sapiente",
                    },
                    NetworkURI: "enim",
                    ServiceAccount: "eum",
                    StagingBucket: "voluptatum",
                    SubnetworkURI: "autem",
                    TTL: "vel",
                },
                PeripheralsConfig: &shared.PeripheralsConfig{
                    MetastoreService: "non",
                    SparkHistoryServerConfig: &shared.SparkHistoryServerConfig{
                        DataprocCluster: "deleniti",
                    },
                },
            },
            Labels: map[string]string{
                "reprehenderit": "molestiae",
                "quo": "quasi",
                "laboriosam": "dicta",
            },
            PysparkBatch: &shared.PySparkBatch{
                ArchiveUris: []string{
                    "voluptatem",
                    "consequatur",
                    "fugiat",
                },
                Args: []string{
                    "omnis",
                    "eos",
                    "accusamus",
                    "accusamus",
                },
                FileUris: []string{
                    "rem",
                    "quibusdam",
                    "et",
                    "praesentium",
                },
                JarFileUris: []string{
                    "dolor",
                    "soluta",
                    "sed",
                },
                MainPythonFileURI: "quisquam",
                PythonFileUris: []string{
                    "culpa",
                    "qui",
                    "sed",
                },
            },
            RuntimeConfig: &shared.RuntimeConfig{
                ContainerImage: "rerum",
                Properties: map[string]string{
                    "occaecati": "odit",
                    "esse": "rem",
                    "voluptatem": "amet",
                    "est": "id",
                },
                Version: "blanditiis",
            },
            RuntimeInfo: &shared.RuntimeInfoInput{
                ApproximateUsage: &shared.UsageMetrics{
                    MilliDcuSeconds: "numquam",
                    ShuffleStorageGbSeconds: "similique",
                },
                CurrentUsage: &shared.UsageSnapshot{
                    MilliDcu: "dolores",
                    ShuffleStorageGb: "sit",
                    SnapshotTime: "quia",
                },
            },
            SparkBatch: &shared.SparkBatch{
                ArchiveUris: []string{
                    "voluptatem",
                    "laborum",
                    "modi",
                },
                Args: []string{
                    "iure",
                    "earum",
                    "ut",
                },
                FileUris: []string{
                    "qui",
                    "ea",
                    "laborum",
                },
                JarFileUris: []string{
                    "ut",
                    "optio",
                },
                MainClass: "aspernatur",
                MainJarFileURI: "inventore",
            },
            SparkRBatch: &shared.SparkRBatch{
                ArchiveUris: []string{
                    "libero",
                    "et",
                    "libero",
                    "ipsum",
                },
                Args: []string{
                    "ea",
                },
                FileUris: []string{
                    "placeat",
                },
                MainRFileURI: "ipsam",
            },
            SparkSQLBatch: &shared.SparkSQLBatch{
                JarFileUris: []string{
                    "commodi",
                    "quia",
                    "similique",
                },
                QueryFileURI: "eaque",
                QueryVariables: map[string]string{
                    "harum": "doloribus",
                    "a": "aut",
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