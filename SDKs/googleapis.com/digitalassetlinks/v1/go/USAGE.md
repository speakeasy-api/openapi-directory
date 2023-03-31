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
        DollarXgafv: "2",
        BulkCheckRequest: &shared.BulkCheckRequest{
            AllowGoogleInternalDataSources: false,
            DefaultRelation: "provident",
            DefaultSource: &shared.Asset{
                AndroidApp: &shared.AndroidAppAsset{
                    Certificate: &shared.CertificateInfo{
                        Sha256Fingerprint: "distinctio",
                    },
                    PackageName: "quibusdam",
                },
                Web: &shared.WebAsset{
                    Site: "unde",
                },
            },
            DefaultTarget: &shared.Asset{
                AndroidApp: &shared.AndroidAppAsset{
                    Certificate: &shared.CertificateInfo{
                        Sha256Fingerprint: "nulla",
                    },
                    PackageName: "corrupti",
                },
                Web: &shared.WebAsset{
                    Site: "illum",
                },
            },
            SkipCacheLookup: false,
            Statements: []shared.StatementTemplate{
                shared.StatementTemplate{
                    Relation: "error",
                    Source: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: "deserunt",
                            },
                            PackageName: "suscipit",
                        },
                        Web: &shared.WebAsset{
                            Site: "iure",
                        },
                    },
                    Target: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: "magnam",
                            },
                            PackageName: "debitis",
                        },
                        Web: &shared.WebAsset{
                            Site: "ipsa",
                        },
                    },
                },
                shared.StatementTemplate{
                    Relation: "delectus",
                    Source: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: "tempora",
                            },
                            PackageName: "suscipit",
                        },
                        Web: &shared.WebAsset{
                            Site: "molestiae",
                        },
                    },
                    Target: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: "minus",
                            },
                            PackageName: "placeat",
                        },
                        Web: &shared.WebAsset{
                            Site: "voluptatum",
                        },
                    },
                },
            },
        },
        AccessToken: "iusto",
        Alt: "media",
        Callback: "nisi",
        Fields: "recusandae",
        Key: "temporibus",
        OauthToken: "ab",
        PrettyPrint: false,
        QuotaUser: "quis",
        UploadType: "veritatis",
        UploadProtocol: "deserunt",
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