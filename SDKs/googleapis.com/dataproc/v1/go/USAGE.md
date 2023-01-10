<!-- Start SDK Example Usage -->
```go
package main

import (
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
            Parent: "dolorem",
        },
        QueryParams: operations.DataprocProjectsLocationsBatchesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "adipisci",
            Alt: "json",
            BatchID: "officia",
            Callback: "eligendi",
            Fields: "doloremque",
            Key: "et",
            OauthToken: "perspiciatis",
            PrettyPrint: true,
            QuotaUser: "esse",
            RequestID: "est",
            UploadType: "accusamus",
            UploadProtocol: "quibusdam",
        },
        Request: &shared.BatchInput{
            EnvironmentConfig: &shared.EnvironmentConfig{
                ExecutionConfig: &shared.ExecutionConfig{
                    IdleTTL: "reiciendis",
                    KmsKey: "esse",
                    NetworkTags: []string{
                        "expedita",
                        "nulla",
                    },
                    NetworkURI: "quaerat",
                    ServiceAccount: "odit",
                    SubnetworkURI: "veritatis",
                },
                PeripheralsConfig: &shared.PeripheralsConfig{
                    MetastoreService: "iusto",
                    SparkHistoryServerConfig: &shared.SparkHistoryServerConfig{
                        DataprocCluster: "deserunt",
                    },
                },
            },
            Labels: map[string]string{
                "unde": "architecto",
                "qui": "dolor",
            },
            PysparkBatch: &shared.PySparkBatch{
                ArchiveUris: []string{
                    "voluptatem",
                },
                Args: []string{
                    "aut",
                    "qui",
                },
                FileUris: []string{
                    "rerum",
                },
                JarFileUris: []string{
                    "molestias",
                    "et",
                    "officia",
                },
                MainPythonFileURI: "ipsum",
                PythonFileUris: []string{
                    "velit",
                },
            },
            RuntimeConfig: &shared.RuntimeConfig{
                ContainerImage: "sed",
                Properties: map[string]string{
                    "nisi": "eos",
                    "in": "expedita",
                },
                Version: "quisquam",
            },
            RuntimeInfo: &shared.RuntimeInfoInput{
                ApproximateUsage: &shared.UsageMetrics{
                    MilliDcuSeconds: "consequatur",
                    ShuffleStorageGbSeconds: "aperiam",
                },
            },
            SparkBatch: &shared.SparkBatch{
                ArchiveUris: []string{
                    "consequatur",
                    "alias",
                },
                Args: []string{
                    "quia",
                    "quibusdam",
                    "error",
                },
                FileUris: []string{
                    "architecto",
                    "hic",
                    "quia",
                },
                JarFileUris: []string{
                    "voluptatem",
                    "recusandae",
                },
                MainClass: "a",
                MainJarFileURI: "ipsam",
            },
            SparkRBatch: &shared.SparkRBatch{
                ArchiveUris: []string{
                    "temporibus",
                    "qui",
                },
                Args: []string{
                    "ex",
                },
                FileUris: []string{
                    "sed",
                },
                MainRFileURI: "dolorum",
            },
            SparkSQLBatch: &shared.SparkSQLBatch{
                JarFileUris: []string{
                    "ut",
                    "corporis",
                },
                QueryFileURI: "nesciunt",
                QueryVariables: map[string]string{
                    "in": "consequatur",
                    "dolores": "a",
                },
            },
        },
    }
    
    res, err := s.Projects.DataprocProjectsLocationsBatchesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->