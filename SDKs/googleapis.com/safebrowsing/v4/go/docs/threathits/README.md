# ThreatHits

### Available Operations

* [SafebrowsingThreatHitsCreate](#safebrowsingthreathitscreate) - Reports a Safe Browsing threat list hit to Google. Only projects with TRUSTED_REPORTER visibility can use this method.

## SafebrowsingThreatHitsCreate

Reports a Safe Browsing threat list hit to Google. Only projects with TRUSTED_REPORTER visibility can use this method.

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
    res, err := s.ThreatHits.SafebrowsingThreatHitsCreate(ctx, operations.SafebrowsingThreatHitsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleSecuritySafebrowsingV4ThreatHit: &shared.GoogleSecuritySafebrowsingV4ThreatHit{
            ClientInfo: &shared.GoogleSecuritySafebrowsingV4ClientInfo{
                ClientID: sdk.String("saepe"),
                ClientVersion: sdk.String("fuga"),
            },
            Entry: &shared.GoogleSecuritySafebrowsingV4ThreatEntry{
                Digest: sdk.String("in"),
                Hash: sdk.String("corporis"),
                URL: sdk.String("iste"),
            },
            PlatformType: shared.GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnumAndroid.ToPointer(),
            Resources: []shared.GoogleSecuritySafebrowsingV4ThreatHitThreatSource{
                shared.GoogleSecuritySafebrowsingV4ThreatHitThreatSource{
                    Referrer: sdk.String("quidem"),
                    RemoteIP: sdk.String("architecto"),
                    Type: shared.GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnumThreatSourceTypeUnspecified.ToPointer(),
                    URL: sdk.String("reiciendis"),
                },
                shared.GoogleSecuritySafebrowsingV4ThreatHitThreatSource{
                    Referrer: sdk.String("est"),
                    RemoteIP: sdk.String("mollitia"),
                    Type: shared.GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnumTabRedirect.ToPointer(),
                    URL: sdk.String("dolores"),
                },
                shared.GoogleSecuritySafebrowsingV4ThreatHitThreatSource{
                    Referrer: sdk.String("dolorem"),
                    RemoteIP: sdk.String("corporis"),
                    Type: shared.GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnumThreatSourceTypeUnspecified.ToPointer(),
                    URL: sdk.String("nobis"),
                },
                shared.GoogleSecuritySafebrowsingV4ThreatHitThreatSource{
                    Referrer: sdk.String("enim"),
                    RemoteIP: sdk.String("omnis"),
                    Type: shared.GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnumMatchingURL.ToPointer(),
                    URL: sdk.String("minima"),
                },
            },
            ThreatType: shared.GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnumClientIncident.ToPointer(),
            UserInfo: &shared.GoogleSecuritySafebrowsingV4ThreatHitUserInfo{
                RegionCode: sdk.String("accusantium"),
                UserID: sdk.String("iure"),
            },
        },
        AccessToken: sdk.String("culpa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("architecto"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("dolorem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("repellat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```
