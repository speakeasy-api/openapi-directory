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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Assetlinks

* `DigitalassetlinksAssetlinksBulkCheck` - Send a bundle of statement checks in a single RPC to minimize latency and service load. Statements need not be all for the same source and/or target. We recommend using this method when you need to check more than one statement in a short period of time.
* `DigitalassetlinksAssetlinksCheck` - Determines whether the specified (directional) relationship exists between the specified source and target assets. The relation describes the intent of the link between the two assets as claimed by the source asset. An example for such relationships is the delegation of privileges or permissions. This command is most often used by infrastructure systems to check preconditions for an action. For example, a client may want to know if it is OK to send a web URL to a particular mobile app instead. The client can check for the relevant asset link from the website to the mobile app to decide if the operation should be allowed. A note about security: if you specify a secure asset as the source, such as an HTTPS website or an Android app, the API will ensure that any statements used to generate the response have been made in a secure way by the owner of that asset. Conversely, if the source asset is an insecure HTTP website (that is, the URL starts with `http://` instead of `https://`), the API cannot verify its statements securely, and it is not possible to ensure that the website's statements have not been altered by a third party. For more information, see the [Digital Asset Links technical design specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md).

### Statements

* `DigitalassetlinksStatementsList` - Retrieves a list of all statements from a given source that match the specified target and statement string. The API guarantees that all statements with secure source assets, such as HTTPS websites or Android apps, have been made in a secure way by the owner of those assets, as described in the [Digital Asset Links technical design specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md). Specifically, you should consider that for insecure websites (that is, where the URL starts with `http://` instead of `https://`), this guarantee cannot be made. The `List` command is most useful in cases where the API client wants to know all the ways in which two assets are related, or enumerate all the relationships from a particular source asset. Example: a feature that helps users navigate to related items. When a mobile app is running on a device, the feature would make it easy to navigate to the corresponding web site or Google+ profile.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
