<!-- Start SDK Example Usage -->
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
    res, err := s.Projects.DataprocProjectsLocationsBatchesCreate(ctx, operations.DataprocProjectsLocationsBatchesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BatchInput: &shared.BatchInput{
            EnvironmentConfig: &shared.EnvironmentConfig{
                ExecutionConfig: &shared.ExecutionConfig{
                    IdleTTL: sdk.String("provident"),
                    KmsKey: sdk.String("distinctio"),
                    NetworkTags: []string{
                        "unde",
                        "nulla",
                        "corrupti",
                        "illum",
                    },
                    NetworkURI: sdk.String("vel"),
                    ServiceAccount: sdk.String("error"),
                    StagingBucket: sdk.String("deserunt"),
                    SubnetworkURI: sdk.String("suscipit"),
                    TTL: sdk.String("iure"),
                },
                PeripheralsConfig: &shared.PeripheralsConfig{
                    MetastoreService: sdk.String("magnam"),
                    SparkHistoryServerConfig: &shared.SparkHistoryServerConfig{
                        DataprocCluster: sdk.String("debitis"),
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
                MainPythonFileURI: sdk.String("sapiente"),
                PythonFileUris: []string{
                    "odit",
                    "at",
                    "at",
                    "maiores",
                },
            },
            RuntimeConfig: &shared.RuntimeConfig{
                ContainerImage: sdk.String("molestiae"),
                Properties: map[string]string{
                    "quod": "esse",
                    "totam": "porro",
                    "dolorum": "dicta",
                    "nam": "officia",
                },
                Version: sdk.String("occaecati"),
            },
            RuntimeInfo: &shared.RuntimeInfoInput{
                ApproximateUsage: &shared.UsageMetrics{
                    MilliDcuSeconds: sdk.String("fugit"),
                    ShuffleStorageGbSeconds: sdk.String("deleniti"),
                },
                CurrentUsage: &shared.UsageSnapshot{
                    MilliDcu: sdk.String("hic"),
                    ShuffleStorageGb: sdk.String("optio"),
                    SnapshotTime: sdk.String("totam"),
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
                MainClass: sdk.String("ad"),
                MainJarFileURI: sdk.String("natus"),
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
                MainRFileURI: sdk.String("fuga"),
            },
            SparkSQLBatch: &shared.SparkSQLBatch{
                JarFileUris: []string{
                    "corporis",
                    "iste",
                },
                QueryFileURI: sdk.String("iure"),
                QueryVariables: map[string]string{
                    "quidem": "architecto",
                    "ipsa": "reiciendis",
                    "est": "mollitia",
                    "laborum": "dolores",
                },
            },
        },
        AccessToken: sdk.String("dolorem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BatchID: sdk.String("explicabo"),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("enim"),
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("nemo"),
        Parent: "minima",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        RequestID: sdk.String("accusantium"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("culpa"),
    }, operations.DataprocProjectsLocationsBatchesCreateSecurity{
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