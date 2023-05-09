# Uris

### Available Operations

* [WebriskUrisSearch](#webriskurissearch) - This method is used to check whether a URI is on a given threatList. Multiple threatLists may be searched in a single query. The response will list all requested threatLists the URI was found to match. If the URI is not found on any of the requested ThreatList an empty response will be returned.

## WebriskUrisSearch

This method is used to check whether a URI is on a given threatList. Multiple threatLists may be searched in a single query. The response will list all requested threatLists the URI was found to match. If the URI is not found on any of the requested ThreatList an empty response will be returned.

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
    res, err := s.Uris.WebriskUrisSearch(ctx, operations.WebriskUrisSearchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aut"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("temporibus"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        ThreatTypes: []WebriskUrisSearchThreatTypesEnum{
            operations.WebriskUrisSearchThreatTypesEnumSocialEngineeringExtendedCoverage,
            operations.WebriskUrisSearchThreatTypesEnumSocialEngineering,
            operations.WebriskUrisSearchThreatTypesEnumSocialEngineering,
            operations.WebriskUrisSearchThreatTypesEnumSocialEngineeringExtendedCoverage,
        },
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("omnis"),
        URI: sdk.String("http://shadowy-alfalfa.com"),
    }, operations.WebriskUrisSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudWebriskV1SearchUrisResponse != nil {
        // handle response
    }
}
```
