# FullHashes

### Available Operations

* [SafebrowsingFullHashesFind](#safebrowsingfullhashesfind) - Finds the full hashes that match the requested hash prefixes.

## SafebrowsingFullHashesFind

Finds the full hashes that match the requested hash prefixes.

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
    res, err := s.FullHashes.SafebrowsingFullHashesFind(ctx, operations.SafebrowsingFullHashesFindRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleSecuritySafebrowsingV4FindFullHashesRequest: &shared.GoogleSecuritySafebrowsingV4FindFullHashesRequest{
            APIClient: &shared.GoogleSecuritySafebrowsingV4ClientInfo{
                ClientID: sdk.String("maiores"),
                ClientVersion: sdk.String("molestiae"),
            },
            Client: &shared.GoogleSecuritySafebrowsingV4ClientInfo{
                ClientID: sdk.String("quod"),
                ClientVersion: sdk.String("quod"),
            },
            ClientStates: []string{
                "totam",
                "porro",
            },
            ThreatInfo: &shared.GoogleSecuritySafebrowsingV4ThreatInfo{
                PlatformTypes: []shared.GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum{
                    shared.GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnumWindows,
                    shared.GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnumAnyPlatform,
                    shared.GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnumIos,
                },
                ThreatEntries: []shared.GoogleSecuritySafebrowsingV4ThreatEntry{
                    shared.GoogleSecuritySafebrowsingV4ThreatEntry{
                        Digest: sdk.String("fugit"),
                        Hash: sdk.String("deleniti"),
                        URL: sdk.String("hic"),
                    },
                    shared.GoogleSecuritySafebrowsingV4ThreatEntry{
                        Digest: sdk.String("optio"),
                        Hash: sdk.String("totam"),
                        URL: sdk.String("beatae"),
                    },
                    shared.GoogleSecuritySafebrowsingV4ThreatEntry{
                        Digest: sdk.String("commodi"),
                        Hash: sdk.String("molestiae"),
                        URL: sdk.String("modi"),
                    },
                },
                ThreatEntryTypes: []shared.GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum{
                    shared.GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnumFilename,
                },
                ThreatTypes: []shared.GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum{
                    shared.GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnumCsdWhitelist,
                    shared.GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnumUnwantedSoftware,
                    shared.GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnumClientIncident,
                },
            },
        },
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ad"),
        Fields: sdk.String("natus"),
        Key: sdk.String("sed"),
        OauthToken: sdk.String("iste"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("laboriosam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleSecuritySafebrowsingV4FindFullHashesResponse != nil {
        // handle response
    }
}
```
