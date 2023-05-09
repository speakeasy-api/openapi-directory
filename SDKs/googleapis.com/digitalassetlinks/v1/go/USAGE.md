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
    res, err := s.Assetlinks.DigitalassetlinksAssetlinksBulkCheck(ctx, operations.DigitalassetlinksAssetlinksBulkCheckRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BulkCheckRequest: &shared.BulkCheckRequest{
            AllowGoogleInternalDataSources: sdk.Bool(false),
            DefaultRelation: sdk.String("provident"),
            DefaultSource: &shared.Asset{
                AndroidApp: &shared.AndroidAppAsset{
                    Certificate: &shared.CertificateInfo{
                        Sha256Fingerprint: sdk.String("distinctio"),
                    },
                    PackageName: sdk.String("quibusdam"),
                },
                Web: &shared.WebAsset{
                    Site: sdk.String("unde"),
                },
            },
            DefaultTarget: &shared.Asset{
                AndroidApp: &shared.AndroidAppAsset{
                    Certificate: &shared.CertificateInfo{
                        Sha256Fingerprint: sdk.String("nulla"),
                    },
                    PackageName: sdk.String("corrupti"),
                },
                Web: &shared.WebAsset{
                    Site: sdk.String("illum"),
                },
            },
            SkipCacheLookup: sdk.Bool(false),
            Statements: []shared.StatementTemplate{
                shared.StatementTemplate{
                    Relation: sdk.String("error"),
                    Source: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: sdk.String("deserunt"),
                            },
                            PackageName: sdk.String("suscipit"),
                        },
                        Web: &shared.WebAsset{
                            Site: sdk.String("iure"),
                        },
                    },
                    Target: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: sdk.String("magnam"),
                            },
                            PackageName: sdk.String("debitis"),
                        },
                        Web: &shared.WebAsset{
                            Site: sdk.String("ipsa"),
                        },
                    },
                },
                shared.StatementTemplate{
                    Relation: sdk.String("delectus"),
                    Source: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: sdk.String("tempora"),
                            },
                            PackageName: sdk.String("suscipit"),
                        },
                        Web: &shared.WebAsset{
                            Site: sdk.String("molestiae"),
                        },
                    },
                    Target: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: sdk.String("minus"),
                            },
                            PackageName: sdk.String("placeat"),
                        },
                        Web: &shared.WebAsset{
                            Site: sdk.String("voluptatum"),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nisi"),
        Fields: sdk.String("recusandae"),
        Key: sdk.String("temporibus"),
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkCheckResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->