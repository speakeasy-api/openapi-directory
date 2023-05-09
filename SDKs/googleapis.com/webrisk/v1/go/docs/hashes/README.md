# Hashes

### Available Operations

* [WebriskHashesSearch](#webriskhashessearch) - Gets the full hashes that match the requested hash prefix. This is used after a hash prefix is looked up in a threatList and there is a match. The client side threatList only holds partial hashes so the client must query this method to determine if there is a full hash match of a threat.

## WebriskHashesSearch

Gets the full hashes that match the requested hash prefix. This is used after a hash prefix is looked up in a threatList and there is a match. The client side threatList only holds partial hashes so the client must query this method to determine if there is a full hash match of a threat.

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
    res, err := s.Hashes.WebriskHashesSearch(ctx, operations.WebriskHashesSearchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("molestiae"),
        HashPrefix: sdk.String("minus"),
        Key: sdk.String("placeat"),
        OauthToken: sdk.String("voluptatum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        ThreatTypes: []WebriskHashesSearchThreatTypesEnum{
            operations.WebriskHashesSearchThreatTypesEnumMalware,
            operations.WebriskHashesSearchThreatTypesEnumSocialEngineeringExtendedCoverage,
            operations.WebriskHashesSearchThreatTypesEnumSocialEngineeringExtendedCoverage,
        },
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("quis"),
    }, operations.WebriskHashesSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudWebriskV1SearchHashesResponse != nil {
        // handle response
    }
}
```
