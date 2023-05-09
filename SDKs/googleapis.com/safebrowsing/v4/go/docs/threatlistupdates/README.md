# ThreatListUpdates

### Available Operations

* [SafebrowsingThreatListUpdatesFetch](#safebrowsingthreatlistupdatesfetch) - Fetches the most recent threat list updates. A client can request updates for multiple lists at once.

## SafebrowsingThreatListUpdatesFetch

Fetches the most recent threat list updates. A client can request updates for multiple lists at once.

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
    res, err := s.ThreatListUpdates.SafebrowsingThreatListUpdatesFetch(ctx, operations.SafebrowsingThreatListUpdatesFetchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest: &shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest{
            Client: &shared.GoogleSecuritySafebrowsingV4ClientInfo{
                ClientID: sdk.String("occaecati"),
                ClientVersion: sdk.String("numquam"),
            },
            ListUpdateRequests: []shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest{
                shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest{
                    Constraints: &shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints{
                        DeviceLocation: sdk.String("quam"),
                        Language: sdk.String("molestiae"),
                        MaxDatabaseEntries: sdk.Int(244425),
                        MaxUpdateEntries: sdk.Int(623510),
                        Region: sdk.String("quia"),
                        SupportedCompressions: []shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnum{
                            shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnumCompressionTypeUnspecified,
                            shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnumRice,
                        },
                    },
                    PlatformType: shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformTypeEnumIos.ToPointer(),
                    State: sdk.String("enim"),
                    ThreatEntryType: shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryTypeEnumThreatEntryTypeUnspecified.ToPointer(),
                    ThreatType: shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatTypeEnumSuspicious.ToPointer(),
                },
                shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest{
                    Constraints: &shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints{
                        DeviceLocation: sdk.String("sequi"),
                        Language: sdk.String("tenetur"),
                        MaxDatabaseEntries: sdk.Int(368725),
                        MaxUpdateEntries: sdk.Int(662527),
                        Region: sdk.String("possimus"),
                        SupportedCompressions: []shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnum{
                            shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnumCompressionTypeUnspecified,
                        },
                    },
                    PlatformType: shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformTypeEnumIos.ToPointer(),
                    State: sdk.String("temporibus"),
                    ThreatEntryType: shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryTypeEnumChromeExtension.ToPointer(),
                    ThreatType: shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatTypeEnumMalware.ToPointer(),
                },
            },
        },
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vero"),
        Fields: sdk.String("nihil"),
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse != nil {
        // handle response
    }
}
```
