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
            AccessToken: "provident",
            Alt: "proto",
            Callback: "quibusdam",
            Fields: "unde",
            Key: "nulla",
            OauthToken: "corrupti",
            PrettyPrint: false,
            QuotaUser: "illum",
            UploadType: "vel",
            UploadProtocol: "error",
        },
        Request: &shared.BulkCheckRequest{
            AllowGoogleInternalDataSources: false,
            DefaultRelation: "deserunt",
            DefaultSource: &shared.Asset{
                AndroidApp: &shared.AndroidAppAsset{
                    Certificate: &shared.CertificateInfo{
                        Sha256Fingerprint: "suscipit",
                    },
                    PackageName: "iure",
                },
                Web: &shared.WebAsset{
                    Site: "magnam",
                },
            },
            DefaultTarget: &shared.Asset{
                AndroidApp: &shared.AndroidAppAsset{
                    Certificate: &shared.CertificateInfo{
                        Sha256Fingerprint: "debitis",
                    },
                    PackageName: "ipsa",
                },
                Web: &shared.WebAsset{
                    Site: "delectus",
                },
            },
            SkipCacheLookup: false,
            Statements: []shared.StatementTemplate{
                shared.StatementTemplate{
                    Relation: "suscipit",
                    Source: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: "molestiae",
                            },
                            PackageName: "minus",
                        },
                        Web: &shared.WebAsset{
                            Site: "placeat",
                        },
                    },
                    Target: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: "voluptatum",
                            },
                            PackageName: "iusto",
                        },
                        Web: &shared.WebAsset{
                            Site: "excepturi",
                        },
                    },
                },
                shared.StatementTemplate{
                    Relation: "nisi",
                    Source: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: "recusandae",
                            },
                            PackageName: "temporibus",
                        },
                        Web: &shared.WebAsset{
                            Site: "ab",
                        },
                    },
                    Target: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: "quis",
                            },
                            PackageName: "veritatis",
                        },
                        Web: &shared.WebAsset{
                            Site: "deserunt",
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