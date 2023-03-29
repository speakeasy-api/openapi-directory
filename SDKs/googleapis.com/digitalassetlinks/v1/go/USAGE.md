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

    req := operations.DigitalassetlinksAssetlinksBulkCheckRequest{
        QueryParams: operations.DigitalassetlinksAssetlinksBulkCheckQueryParams{
            DollarXgafv: "2",
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            PrettyPrint: false,
            QuotaUser: "nulla",
            UploadType: "nihil",
            UploadProtocol: "fuga",
        },
        Request: &shared.BulkCheckRequest{
            AllowGoogleInternalDataSources: false,
            DefaultRelation: "facilis",
            DefaultSource: &shared.Asset{
                AndroidApp: &shared.AndroidAppAsset{
                    Certificate: &shared.CertificateInfo{
                        Sha256Fingerprint: "eum",
                    },
                    PackageName: "iusto",
                },
                Web: &shared.WebAsset{
                    Site: "ullam",
                },
            },
            DefaultTarget: &shared.Asset{
                AndroidApp: &shared.AndroidAppAsset{
                    Certificate: &shared.CertificateInfo{
                        Sha256Fingerprint: "saepe",
                    },
                    PackageName: "inventore",
                },
                Web: &shared.WebAsset{
                    Site: "sapiente",
                },
            },
            SkipCacheLookup: false,
            Statements: []shared.StatementTemplate{
                shared.StatementTemplate{
                    Relation: "eum",
                    Source: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: "voluptatum",
                            },
                            PackageName: "autem",
                        },
                        Web: &shared.WebAsset{
                            Site: "vel",
                        },
                    },
                    Target: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: "non",
                            },
                            PackageName: "deleniti",
                        },
                        Web: &shared.WebAsset{
                            Site: "similique",
                        },
                    },
                },
                shared.StatementTemplate{
                    Relation: "reprehenderit",
                    Source: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: "molestiae",
                            },
                            PackageName: "quo",
                        },
                        Web: &shared.WebAsset{
                            Site: "quasi",
                        },
                    },
                    Target: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: "laboriosam",
                            },
                            PackageName: "dicta",
                        },
                        Web: &shared.WebAsset{
                            Site: "est",
                        },
                    },
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Assetlinks.DigitalassetlinksAssetlinksBulkCheck(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkCheckResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->