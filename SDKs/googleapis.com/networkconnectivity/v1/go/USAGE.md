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
    res, err := s.Projects.NetworkconnectivityProjectsLocationsGlobalHubsCreate(ctx, operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        HubInput: &shared.HubInput{
            Description: sdk.String("provident"),
            Labels: map[string]string{
                "quibusdam": "unde",
                "nulla": "corrupti",
                "illum": "vel",
            },
            Name: sdk.String("Doug Hoppe"),
            RoutingVpcs: []shared.RoutingVPCInput{
                shared.RoutingVPCInput{
                    URI: sdk.String("http://whirlwind-diver.info"),
                },
                shared.RoutingVPCInput{
                    URI: sdk.String("http://spotted-skyline.name"),
                },
                shared.RoutingVPCInput{
                    URI: sdk.String("http://nice-gorilla.org"),
                },
                shared.RoutingVPCInput{
                    URI: sdk.String("https://bite-sized-favorite.com"),
                },
            },
        },
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("repellendus"),
        HubID: sdk.String("sapiente"),
        Key: sdk.String("quo"),
        OauthToken: sdk.String("odit"),
        Parent: "at",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        RequestID: sdk.String("maiores"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("quod"),
    }, operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->