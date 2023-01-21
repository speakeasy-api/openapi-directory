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
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            OauthToken: "expedita",
            PrettyPrint: true,
            QuotaUser: "fugit",
            UploadType: "et",
            UploadProtocol: "nihil",
        },
        Request: &shared.BulkCheckRequest{
            AllowGoogleInternalDataSources: true,
            DefaultRelation: "dicta",
            DefaultSource: &shared.Asset{
                AndroidApp: &shared.AndroidAppAsset{
                    Certificate: &shared.CertificateInfo{
                        Sha256Fingerprint: "debitis",
                    },
                    PackageName: "voluptatum",
                },
                Web: &shared.WebAsset{
                    Site: "et",
                },
            },
            DefaultTarget: &shared.Asset{
                AndroidApp: &shared.AndroidAppAsset{
                    Certificate: &shared.CertificateInfo{
                        Sha256Fingerprint: "ut",
                    },
                    PackageName: "dolorem",
                },
                Web: &shared.WebAsset{
                    Site: "et",
                },
            },
            SkipCacheLookup: false,
            Statements: []shared.StatementTemplate{
                shared.StatementTemplate{
                    Relation: "vitae",
                    Source: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: "totam",
                            },
                            PackageName: "dolores",
                        },
                        Web: &shared.WebAsset{
                            Site: "illum",
                        },
                    },
                    Target: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: "debitis",
                            },
                            PackageName: "vel",
                        },
                        Web: &shared.WebAsset{
                            Site: "odio",
                        },
                    },
                },
                shared.StatementTemplate{
                    Relation: "dolore",
                    Source: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: "id",
                            },
                            PackageName: "aspernatur",
                        },
                        Web: &shared.WebAsset{
                            Site: "accusantium",
                        },
                    },
                    Target: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: "totam",
                            },
                            PackageName: "commodi",
                        },
                        Web: &shared.WebAsset{
                            Site: "quis",
                        },
                    },
                },
                shared.StatementTemplate{
                    Relation: "est",
                    Source: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: "aut",
                            },
                            PackageName: "odit",
                        },
                        Web: &shared.WebAsset{
                            Site: "non",
                        },
                    },
                    Target: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: "voluptas",
                            },
                            PackageName: "omnis",
                        },
                        Web: &shared.WebAsset{
                            Site: "aut",
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