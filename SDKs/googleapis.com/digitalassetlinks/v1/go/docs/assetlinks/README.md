# Assetlinks

### Available Operations

* [DigitalassetlinksAssetlinksBulkCheck](#digitalassetlinksassetlinksbulkcheck) - Send a bundle of statement checks in a single RPC to minimize latency and service load. Statements need not be all for the same source and/or target. We recommend using this method when you need to check more than one statement in a short period of time.
* [DigitalassetlinksAssetlinksCheck](#digitalassetlinksassetlinkscheck) - Determines whether the specified (directional) relationship exists between the specified source and target assets. The relation describes the intent of the link between the two assets as claimed by the source asset. An example for such relationships is the delegation of privileges or permissions. This command is most often used by infrastructure systems to check preconditions for an action. For example, a client may want to know if it is OK to send a web URL to a particular mobile app instead. The client can check for the relevant asset link from the website to the mobile app to decide if the operation should be allowed. A note about security: if you specify a secure asset as the source, such as an HTTPS website or an Android app, the API will ensure that any statements used to generate the response have been made in a secure way by the owner of that asset. Conversely, if the source asset is an insecure HTTP website (that is, the URL starts with `http://` instead of `https://`), the API cannot verify its statements securely, and it is not possible to ensure that the website's statements have not been altered by a third party. For more information, see the [Digital Asset Links technical design specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md).

## DigitalassetlinksAssetlinksBulkCheck

Send a bundle of statement checks in a single RPC to minimize latency and service load. Statements need not be all for the same source and/or target. We recommend using this method when you need to check more than one statement in a short period of time.

### Example Usage

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BulkCheckRequest: &shared.BulkCheckRequest{
            AllowGoogleInternalDataSources: sdk.Bool(false),
            DefaultRelation: sdk.String("ipsam"),
            DefaultSource: &shared.Asset{
                AndroidApp: &shared.AndroidAppAsset{
                    Certificate: &shared.CertificateInfo{
                        Sha256Fingerprint: sdk.String("repellendus"),
                    },
                    PackageName: sdk.String("sapiente"),
                },
                Web: &shared.WebAsset{
                    Site: sdk.String("quo"),
                },
            },
            DefaultTarget: &shared.Asset{
                AndroidApp: &shared.AndroidAppAsset{
                    Certificate: &shared.CertificateInfo{
                        Sha256Fingerprint: sdk.String("odit"),
                    },
                    PackageName: sdk.String("at"),
                },
                Web: &shared.WebAsset{
                    Site: sdk.String("at"),
                },
            },
            SkipCacheLookup: sdk.Bool(false),
            Statements: []shared.StatementTemplate{
                shared.StatementTemplate{
                    Relation: sdk.String("molestiae"),
                    Source: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: sdk.String("quod"),
                            },
                            PackageName: sdk.String("quod"),
                        },
                        Web: &shared.WebAsset{
                            Site: sdk.String("esse"),
                        },
                    },
                    Target: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: sdk.String("totam"),
                            },
                            PackageName: sdk.String("porro"),
                        },
                        Web: &shared.WebAsset{
                            Site: sdk.String("dolorum"),
                        },
                    },
                },
                shared.StatementTemplate{
                    Relation: sdk.String("dicta"),
                    Source: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: sdk.String("nam"),
                            },
                            PackageName: sdk.String("officia"),
                        },
                        Web: &shared.WebAsset{
                            Site: sdk.String("occaecati"),
                        },
                    },
                    Target: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: sdk.String("fugit"),
                            },
                            PackageName: sdk.String("deleniti"),
                        },
                        Web: &shared.WebAsset{
                            Site: sdk.String("hic"),
                        },
                    },
                },
                shared.StatementTemplate{
                    Relation: sdk.String("optio"),
                    Source: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: sdk.String("totam"),
                            },
                            PackageName: sdk.String("beatae"),
                        },
                        Web: &shared.WebAsset{
                            Site: sdk.String("commodi"),
                        },
                    },
                    Target: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: sdk.String("molestiae"),
                            },
                            PackageName: sdk.String("modi"),
                        },
                        Web: &shared.WebAsset{
                            Site: sdk.String("qui"),
                        },
                    },
                },
                shared.StatementTemplate{
                    Relation: sdk.String("impedit"),
                    Source: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: sdk.String("cum"),
                            },
                            PackageName: sdk.String("esse"),
                        },
                        Web: &shared.WebAsset{
                            Site: sdk.String("ipsum"),
                        },
                    },
                    Target: &shared.Asset{
                        AndroidApp: &shared.AndroidAppAsset{
                            Certificate: &shared.CertificateInfo{
                                Sha256Fingerprint: sdk.String("excepturi"),
                            },
                            PackageName: sdk.String("aspernatur"),
                        },
                        Web: &shared.WebAsset{
                            Site: sdk.String("perferendis"),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("ad"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sed"),
        Fields: sdk.String("iste"),
        Key: sdk.String("dolor"),
        OauthToken: sdk.String("natus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laboriosam"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkCheckResponse != nil {
        // handle response
    }
}
```

## DigitalassetlinksAssetlinksCheck

Determines whether the specified (directional) relationship exists between the specified source and target assets. The relation describes the intent of the link between the two assets as claimed by the source asset. An example for such relationships is the delegation of privileges or permissions. This command is most often used by infrastructure systems to check preconditions for an action. For example, a client may want to know if it is OK to send a web URL to a particular mobile app instead. The client can check for the relevant asset link from the website to the mobile app to decide if the operation should be allowed. A note about security: if you specify a secure asset as the source, such as an HTTPS website or an Android app, the API will ensure that any statements used to generate the response have been made in a secure way by the owner of that asset. Conversely, if the source asset is an insecure HTTP website (that is, the URL starts with `http://` instead of `https://`), the API cannot verify its statements securely, and it is not possible to ensure that the website's statements have not been altered by a third party. For more information, see the [Digital Asset Links technical design specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md).

### Example Usage

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
    res, err := s.Assetlinks.DigitalassetlinksAssetlinksCheck(ctx, operations.DigitalassetlinksAssetlinksCheckRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iste"),
        Fields: sdk.String("iure"),
        Key: sdk.String("saepe"),
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        Relation: sdk.String("ipsa"),
        SourceAndroidAppCertificateSha256Fingerprint: sdk.String("reiciendis"),
        SourceAndroidAppPackageName: sdk.String("est"),
        SourceWebSite: sdk.String("mollitia"),
        TargetAndroidAppCertificateSha256Fingerprint: sdk.String("laborum"),
        TargetAndroidAppPackageName: sdk.String("dolores"),
        TargetWebSite: sdk.String("dolorem"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("explicabo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckResponse != nil {
        // handle response
    }
}
```
