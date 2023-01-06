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
    
    req := operations.DigitalassetlinksAssetlinksBulkCheckRequest{
        QueryParams: operations.DigitalassetlinksAssetlinksBulkCheckQueryParams{
            DollarXgafv: "1",
            AccessToken: "distinctio",
            Alt: "json",
            Callback: "qui",
            Fields: "quidem",
            Key: "quo",
            OauthToken: "aut",
            PrettyPrint: true,
            QuotaUser: "aliquam",
            UploadType: "voluptas",
            UploadProtocol: "et",
        },
        Request: &shared.BulkCheckRequest{
            AllowGoogleInternalDataSources: true,
            DefaultRelation: "accusantium",
            DefaultSource: &shared.Asset{
                AndroidApp: &shared.AndroidAppAsset{
                    Certificate: &shared.CertificateInfo{
                        Sha256Fingerprint: "officiis",
                    },
                    PackageName: "possimus",
                },
                Web: &shared.WebAsset{
                    Site: "velit",
                },
            },
            DefaultTarget: &shared.Asset{
                AndroidApp: &shared.AndroidAppAsset{
                    Certificate: &shared.CertificateInfo{
                        Sha256Fingerprint: "dolorem",
                    },
                    PackageName: "qui",
                },
                Web: &shared.WebAsset{
                    Site: "ut",
                },
            },
            SkipCacheLookup: false,
            Statements: []shared.StatementTemplate{
                shared.StatementTemplate{
                    Relation: "optio",
                    Source: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: "totam",
                            },
                            PackageName: "consequuntur",
                        },
                        Web: &shared.WebAsset{
                            Site: "aut",
                        },
                    },
                    Target: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: "temporibus",
                            },
                            PackageName: "quod",
                        },
                        Web: &shared.WebAsset{
                            Site: "nemo",
                        },
                    },
                },
                shared.StatementTemplate{
                    Relation: "qui",
                    Source: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: "non",
                            },
                            PackageName: "modi",
                        },
                        Web: &shared.WebAsset{
                            Site: "iusto",
                        },
                    },
                    Target: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: "qui",
                            },
                            PackageName: "laborum",
                        },
                        Web: &shared.WebAsset{
                            Site: "atque",
                        },
                    },
                },
                shared.StatementTemplate{
                    Relation: "illo",
                    Source: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: "fuga",
                            },
                            PackageName: "dolores",
                        },
                        Web: &shared.WebAsset{
                            Site: "accusantium",
                        },
                    },
                    Target: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: "deserunt",
                            },
                            PackageName: "cupiditate",
                        },
                        Web: &shared.WebAsset{
                            Site: "a",
                        },
                    },
                },
            },
        },
    }
    
    res, err := s.Assetlinks.DigitalassetlinksAssetlinksBulkCheck(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkCheckResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->