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
    res, err := s.Services.ServicecontrolServicesCheck(ctx, operations.ServicecontrolServicesCheckRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CheckRequest: &shared.CheckRequest{
            Attributes: &shared.AttributeContext{
                API: &shared.API{
                    Operation: sdk.String("provident"),
                    Protocol: sdk.String("distinctio"),
                    Service: sdk.String("quibusdam"),
                    Version: sdk.String("unde"),
                },
                Destination: &shared.Peer{
                    IP: sdk.String("nulla"),
                    Labels: map[string]string{
                        "illum": "vel",
                        "error": "deserunt",
                        "suscipit": "iure",
                    },
                    Port: sdk.String("magnam"),
                    Principal: sdk.String("debitis"),
                    RegionCode: sdk.String("ipsa"),
                },
                Extensions: []map[string]interface{}{
                    map[string]interface{}{
                        "suscipit": "molestiae",
                        "minus": "placeat",
                    },
                    map[string]interface{}{
                        "iusto": "excepturi",
                        "nisi": "recusandae",
                        "temporibus": "ab",
                    },
                    map[string]interface{}{
                        "veritatis": "deserunt",
                        "perferendis": "ipsam",
                    },
                    map[string]interface{}{
                        "sapiente": "quo",
                        "odit": "at",
                        "at": "maiores",
                        "molestiae": "quod",
                    },
                },
                Origin: &shared.Peer{
                    IP: sdk.String("quod"),
                    Labels: map[string]string{
                        "totam": "porro",
                        "dolorum": "dicta",
                    },
                    Port: sdk.String("nam"),
                    Principal: sdk.String("officia"),
                    RegionCode: sdk.String("occaecati"),
                },
                Request: &shared.Request{
                    Auth: &shared.Auth{
                        AccessLevels: []string{
                            "deleniti",
                        },
                        Audiences: []string{
                            "optio",
                            "totam",
                            "beatae",
                            "commodi",
                        },
                        Claims: map[string]interface{}{
                            "modi": "qui",
                            "impedit": "cum",
                        },
                        Presenter: sdk.String("esse"),
                        Principal: sdk.String("ipsum"),
                    },
                    Headers: map[string]string{
                        "aspernatur": "perferendis",
                        "ad": "natus",
                        "sed": "iste",
                    },
                    Host: sdk.String("dolor"),
                    ID: sdk.String("96fea759-6eb1-40fa-aa23-52c5955907af"),
                    Method: sdk.String("sapiente"),
                    Path: sdk.String("architecto"),
                    Protocol: sdk.String("mollitia"),
                    Query: sdk.String("dolorem"),
                    Reason: sdk.String("culpa"),
                    Scheme: sdk.String("consequuntur"),
                    Size: sdk.String("repellat"),
                    Time: sdk.String("mollitia"),
                },
                Resource: &shared.Resource{
                    Annotations: map[string]string{
                        "numquam": "commodi",
                        "quam": "molestiae",
                        "velit": "error",
                    },
                    CreateTime: sdk.String("quia"),
                    DeleteTime: sdk.String("quis"),
                    DisplayName: sdk.String("vitae"),
                    Etag: sdk.String("laborum"),
                    Labels: map[string]string{
                        "enim": "odit",
                        "quo": "sequi",
                        "tenetur": "ipsam",
                    },
                    Location: sdk.String("id"),
                    Name: sdk.String("Richard Boyer"),
                    Service: sdk.String("laborum"),
                    Type: sdk.String("quasi"),
                    UID: sdk.String("reiciendis"),
                    UpdateTime: sdk.String("voluptatibus"),
                },
                Response: &shared.Response{
                    BackendLatency: sdk.String("vero"),
                    Code: sdk.String("nihil"),
                    Headers: map[string]string{
                        "voluptatibus": "ipsa",
                        "omnis": "voluptate",
                        "cum": "perferendis",
                    },
                    Size: sdk.String("doloremque"),
                    Time: sdk.String("reprehenderit"),
                },
                Source: &shared.Peer{
                    IP: sdk.String("ut"),
                    Labels: map[string]string{
                        "dicta": "corporis",
                        "dolore": "iusto",
                        "dicta": "harum",
                        "enim": "accusamus",
                    },
                    Port: sdk.String("commodi"),
                    Principal: sdk.String("repudiandae"),
                    RegionCode: sdk.String("quae"),
                },
            },
            Flags: sdk.String("ipsum"),
            Resources: []shared.ResourceInfo{
                shared.ResourceInfo{
                    Container: sdk.String("molestias"),
                    Location: sdk.String("excepturi"),
                    Name: sdk.String("Joel Lang"),
                    Permission: sdk.String("quasi"),
                    Type: sdk.String("repudiandae"),
                },
                shared.ResourceInfo{
                    Container: sdk.String("sint"),
                    Location: sdk.String("veritatis"),
                    Name: sdk.String("Miss Randall Hamill"),
                    Permission: sdk.String("explicabo"),
                    Type: sdk.String("deserunt"),
                },
                shared.ResourceInfo{
                    Container: sdk.String("distinctio"),
                    Location: sdk.String("quibusdam"),
                    Name: sdk.String("Pauline Deckow"),
                    Permission: sdk.String("quos"),
                    Type: sdk.String("perferendis"),
                },
            },
            ServiceConfigID: sdk.String("magni"),
        },
        AccessToken: sdk.String("assumenda"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("alias"),
        Fields: sdk.String("fugit"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        ServiceName: "facilis",
        UploadType: sdk.String("tempore"),
        UploadProtocol: sdk.String("labore"),
    }, operations.ServicecontrolServicesCheckSecurity{
        Option1: &operations.ServicecontrolServicesCheckSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->