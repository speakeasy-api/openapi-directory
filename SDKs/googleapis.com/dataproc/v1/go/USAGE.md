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
            Parent: "sit",
        },
        QueryParams: operations.DataprocProjectsLocationsBatchesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            BatchID: "consequuntur",
            Callback: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            RequestID: "rerum",
            UploadType: "dicta",
            UploadProtocol: "debitis",
        },
        Request: &shared.BatchInput{
            EnvironmentConfig: &shared.EnvironmentConfig{
                ExecutionConfig: &shared.ExecutionConfig{
                    IdleTTL: "voluptatum",
                    KmsKey: "et",
                    NetworkTags: []string{
                        "dolorem",
                        "et",
                        "voluptate",
                    },
                    NetworkURI: "iste",
                    ServiceAccount: "vitae",
                    SubnetworkURI: "totam",
                },
                PeripheralsConfig: &shared.PeripheralsConfig{
                    MetastoreService: "dolores",
                    SparkHistoryServerConfig: &shared.SparkHistoryServerConfig{
                        DataprocCluster: "illum",
                    },
                },
            },
            Labels: map[string]string{
                "vel": "odio",
            },
            PysparkBatch: &shared.PySparkBatch{
                ArchiveUris: []string{
                    "id",
                    "aspernatur",
                },
                Args: []string{
                    "totam",
                    "commodi",
                    "quis",
                },
                FileUris: []string{
                    "aut",
                    "odit",
                },
                JarFileUris: []string{
                    "voluptas",
                    "omnis",
                    "aut",
                },
                MainPythonFileURI: "illo",
                PythonFileUris: []string{
                    "officiis",
                    "autem",
                    "consectetur",
                },
            },
            RuntimeConfig: &shared.RuntimeConfig{
                ContainerImage: "nobis",
                Properties: map[string]string{
                    "qui": "recusandae",
                },
                Version: "at",
            },
            RuntimeInfo: &shared.RuntimeInfoInput{
                ApproximateUsage: &shared.UsageMetrics{
                    MilliDcuSeconds: "ipsum",
                    ShuffleStorageGbSeconds: "eveniet",
                },
            },
            SparkBatch: &shared.SparkBatch{
                ArchiveUris: []string{
                    "sint",
                    "inventore",
                },
                Args: []string{
                    "exercitationem",
                    "aut",
                    "reprehenderit",
                },
                FileUris: []string{
                    "maiores",
                    "incidunt",
                    "dolor",
                },
                JarFileUris: []string{
                    "veritatis",
                    "in",
                    "et",
                },
                MainClass: "omnis",
                MainJarFileURI: "ipsum",
            },
            SparkRBatch: &shared.SparkRBatch{
                ArchiveUris: []string{
                    "dolores",
                },
                Args: []string{
                    "vel",
                },
                FileUris: []string{
                    "mollitia",
                    "voluptas",
                    "quam",
                },
                MainRFileURI: "reprehenderit",
            },
            SparkSQLBatch: &shared.SparkSQLBatch{
                JarFileUris: []string{
                    "qui",
                },
                QueryFileURI: "unde",
                QueryVariables: map[string]string{
                    "autem": "qui",
                    "ut": "itaque",
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