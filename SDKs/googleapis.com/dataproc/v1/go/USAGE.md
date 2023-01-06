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
            Parent: "nemo",
        },
        QueryParams: operations.DataprocProjectsLocationsBatchesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "voluptatem",
            Alt: "proto",
            BatchID: "rem",
            Callback: "eveniet",
            Fields: "blanditiis",
            Key: "consectetur",
            OauthToken: "autem",
            PrettyPrint: true,
            QuotaUser: "et",
            RequestID: "mollitia",
            UploadType: "commodi",
            UploadProtocol: "quis",
        },
        Request: &shared.BatchInput{
            EnvironmentConfig: &shared.EnvironmentConfig{
                ExecutionConfig: &shared.ExecutionConfig{
                    IdleTTL: "dicta",
                    KmsKey: "et",
                    NetworkTags: []string{
                        "quia",
                        "a",
                        "amet",
                    },
                    NetworkURI: "mollitia",
                    ServiceAccount: "consequatur",
                    SubnetworkURI: "non",
                },
                PeripheralsConfig: &shared.PeripheralsConfig{
                    MetastoreService: "id",
                    SparkHistoryServerConfig: &shared.SparkHistoryServerConfig{
                        DataprocCluster: "consequatur",
                    },
                },
            },
            Labels: map[string]string{
                "odit": "similique",
            },
            PysparkBatch: &shared.PySparkBatch{
                ArchiveUris: []string{
                    "eum",
                },
                Args: []string{
                    "odit",
                    "vitae",
                },
                FileUris: []string{
                    "est",
                },
                JarFileUris: []string{
                    "ut",
                },
                MainPythonFileURI: "omnis",
                PythonFileUris: []string{
                    "tempora",
                },
            },
            RuntimeConfig: &shared.RuntimeConfig{
                ContainerImage: "aliquam",
                Properties: map[string]string{
                    "odio": "minima",
                },
                Version: "maxime",
            },
            RuntimeInfo: &shared.RuntimeInfoInput{
                ApproximateUsage: &shared.UsageMetrics{
                    MilliDcuSeconds: "eum",
                    ShuffleStorageGbSeconds: "et",
                },
            },
            SparkBatch: &shared.SparkBatch{
                ArchiveUris: []string{
                    "totam",
                    "dolorum",
                    "repellat",
                },
                Args: []string{
                    "velit",
                    "qui",
                },
                FileUris: []string{
                    "tenetur",
                    "itaque",
                },
                JarFileUris: []string{
                    "repudiandae",
                    "illum",
                },
                MainClass: "est",
                MainJarFileURI: "officia",
            },
            SparkRBatch: &shared.SparkRBatch{
                ArchiveUris: []string{
                    "qui",
                    "cumque",
                },
                Args: []string{
                    "ut",
                },
                FileUris: []string{
                    "laboriosam",
                    "cumque",
                },
                MainRFileURI: "quo",
            },
            SparkSQLBatch: &shared.SparkSQLBatch{
                JarFileUris: []string{
                    "animi",
                },
                QueryFileURI: "repellendus",
                QueryVariables: map[string]string{
                    "animi": "autem",
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