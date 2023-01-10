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
            DollarXgafv: "2",
            AccessToken: "ut",
            Alt: "media",
            Callback: "quisquam",
            Fields: "quae",
            Key: "eum",
            OauthToken: "qui",
            PrettyPrint: true,
            QuotaUser: "vel",
            UploadType: "minima",
            UploadProtocol: "qui",
        },
        Request: &shared.BulkCheckRequest{
            AllowGoogleInternalDataSources: true,
            DefaultRelation: "dolor",
            DefaultSource: &shared.Asset{
                AndroidApp: &shared.AndroidAppAsset{
                    Certificate: &shared.CertificateInfo{
                        Sha256Fingerprint: "earum",
                    },
                    PackageName: "asperiores",
                },
                Web: &shared.WebAsset{
                    Site: "minima",
                },
            },
            DefaultTarget: &shared.Asset{
                AndroidApp: &shared.AndroidAppAsset{
                    Certificate: &shared.CertificateInfo{
                        Sha256Fingerprint: "dolores",
                    },
                    PackageName: "vitae",
                },
                Web: &shared.WebAsset{
                    Site: "et",
                },
            },
            SkipCacheLookup: true,
            Statements: []shared.StatementTemplate{
                shared.StatementTemplate{
                    Relation: "quo",
                    Source: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: "dignissimos",
                            },
                            PackageName: "quo",
                        },
                        Web: &shared.WebAsset{
                            Site: "sint",
                        },
                    },
                    Target: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: "sit",
                            },
                            PackageName: "ducimus",
                        },
                        Web: &shared.WebAsset{
                            Site: "quo",
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