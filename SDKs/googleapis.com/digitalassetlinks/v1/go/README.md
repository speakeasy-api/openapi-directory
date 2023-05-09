# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/digitalassetlinks/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Assetlinks](docs/assetlinks/README.md)

* [DigitalassetlinksAssetlinksBulkCheck](docs/assetlinks/README.md#digitalassetlinksassetlinksbulkcheck) - Send a bundle of statement checks in a single RPC to minimize latency and service load. Statements need not be all for the same source and/or target. We recommend using this method when you need to check more than one statement in a short period of time.
* [DigitalassetlinksAssetlinksCheck](docs/assetlinks/README.md#digitalassetlinksassetlinkscheck) - Determines whether the specified (directional) relationship exists between the specified source and target assets. The relation describes the intent of the link between the two assets as claimed by the source asset. An example for such relationships is the delegation of privileges or permissions. This command is most often used by infrastructure systems to check preconditions for an action. For example, a client may want to know if it is OK to send a web URL to a particular mobile app instead. The client can check for the relevant asset link from the website to the mobile app to decide if the operation should be allowed. A note about security: if you specify a secure asset as the source, such as an HTTPS website or an Android app, the API will ensure that any statements used to generate the response have been made in a secure way by the owner of that asset. Conversely, if the source asset is an insecure HTTP website (that is, the URL starts with `http://` instead of `https://`), the API cannot verify its statements securely, and it is not possible to ensure that the website's statements have not been altered by a third party. For more information, see the [Digital Asset Links technical design specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md).

### [Statements](docs/statements/README.md)

* [DigitalassetlinksStatementsList](docs/statements/README.md#digitalassetlinksstatementslist) - Retrieves a list of all statements from a given source that match the specified target and statement string. The API guarantees that all statements with secure source assets, such as HTTPS websites or Android apps, have been made in a secure way by the owner of those assets, as described in the [Digital Asset Links technical design specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md). Specifically, you should consider that for insecure websites (that is, where the URL starts with `http://` instead of `https://`), this guarantee cannot be made. The `List` command is most useful in cases where the API client wants to know all the ways in which two assets are related, or enumerate all the relationships from a particular source asset. Example: a feature that helps users navigate to related items. When a mobile app is running on a device, the feature would make it easy to navigate to the corresponding web site or Google+ profile.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
