# ThreatMatches

### Available Operations

* [SafebrowsingThreatMatchesFind](#safebrowsingthreatmatchesfind) - Finds the threat entries that match the Safe Browsing lists.

## SafebrowsingThreatMatchesFind

Finds the threat entries that match the Safe Browsing lists.

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
    res, err := s.ThreatMatches.SafebrowsingThreatMatchesFind(ctx, operations.SafebrowsingThreatMatchesFindRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleSecuritySafebrowsingV4FindThreatMatchesRequest: &shared.GoogleSecuritySafebrowsingV4FindThreatMatchesRequest{
            Client: &shared.GoogleSecuritySafebrowsingV4ClientInfo{
                ClientID: sdk.String("harum"),
                ClientVersion: sdk.String("enim"),
            },
            ThreatInfo: &shared.GoogleSecuritySafebrowsingV4ThreatInfo{
                PlatformTypes: []shared.GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum{
                    shared.GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnumAndroid,
                    shared.GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnumChrome,
                    shared.GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnumPlatformTypeUnspecified,
                    shared.GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnumWindows,
                },
                ThreatEntries: []shared.GoogleSecuritySafebrowsingV4ThreatEntry{
                    shared.GoogleSecuritySafebrowsingV4ThreatEntry{
                        Digest: sdk.String("molestias"),
                        Hash: sdk.String("excepturi"),
                        URL: sdk.String("pariatur"),
                    },
                    shared.GoogleSecuritySafebrowsingV4ThreatEntry{
                        Digest: sdk.String("modi"),
                        Hash: sdk.String("praesentium"),
                        URL: sdk.String("rem"),
                    },
                    shared.GoogleSecuritySafebrowsingV4ThreatEntry{
                        Digest: sdk.String("voluptates"),
                        Hash: sdk.String("quasi"),
                        URL: sdk.String("repudiandae"),
                    },
                },
                ThreatEntryTypes: []shared.GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum{
                    shared.GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnumThreatEntryTypeUnspecified,
                    shared.GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnumCert,
                    shared.GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnumURL,
                },
                ThreatTypes: []shared.GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum{
                    shared.GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnumThreatTypeUnspecified,
                    shared.GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnumApkMalwareOffline,
                },
            },
        },
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleSecuritySafebrowsingV4FindThreatMatchesResponse != nil {
        // handle response
    }
}
```
