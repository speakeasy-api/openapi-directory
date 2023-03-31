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

    req := operations.ServicecontrolServicesCheckRequest{
        DollarXgafv: "2",
        CheckRequest: &shared.CheckRequest{
            Attributes: &shared.AttributeContext{
                API: &shared.API{
                    Operation: "provident",
                    Protocol: "distinctio",
                    Service: "quibusdam",
                    Version: "unde",
                },
                Destination: &shared.Peer{
                    IP: "nulla",
                    Labels: map[string]string{
                        "illum": "vel",
                        "error": "deserunt",
                        "suscipit": "iure",
                    },
                    Port: "magnam",
                    Principal: "debitis",
                    RegionCode: "ipsa",
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
                    IP: "quod",
                    Labels: map[string]string{
                        "totam": "porro",
                        "dolorum": "dicta",
                    },
                    Port: "nam",
                    Principal: "officia",
                    RegionCode: "occaecati",
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
                        Presenter: "esse",
                        Principal: "ipsum",
                    },
                    Headers: map[string]string{
                        "aspernatur": "perferendis",
                        "ad": "natus",
                        "sed": "iste",
                    },
                    Host: "dolor",
                    ID: "natus",
                    Method: "laboriosam",
                    Path: "hic",
                    Protocol: "saepe",
                    Query: "fuga",
                    Reason: "in",
                    Scheme: "corporis",
                    Size: "iste",
                    Time: "iure",
                },
                Resource: &shared.Resource{
                    Annotations: map[string]string{
                        "quidem": "architecto",
                        "ipsa": "reiciendis",
                        "est": "mollitia",
                        "laborum": "dolores",
                    },
                    CreateTime: "dolorem",
                    DeleteTime: "corporis",
                    DisplayName: "explicabo",
                    Etag: "nobis",
                    Labels: map[string]string{
                        "omnis": "nemo",
                        "minima": "excepturi",
                    },
                    Location: "accusantium",
                    Name: "iure",
                    Service: "culpa",
                    Type: "doloribus",
                    UID: "sapiente",
                    UpdateTime: "architecto",
                },
                Response: &shared.Response{
                    BackendLatency: "mollitia",
                    Code: "dolorem",
                    Headers: map[string]string{
                        "consequuntur": "repellat",
                        "mollitia": "occaecati",
                        "numquam": "commodi",
                    },
                    Size: "quam",
                    Time: "molestiae",
                },
                Source: &shared.Peer{
                    IP: "velit",
                    Labels: map[string]string{
                        "quia": "quis",
                        "vitae": "laborum",
                        "animi": "enim",
                    },
                    Port: "odit",
                    Principal: "quo",
                    RegionCode: "sequi",
                },
            },
            Flags: "tenetur",
            Resources: []shared.ResourceInfo{
                shared.ResourceInfo{
                    Container: "id",
                    Location: "possimus",
                    Name: "aut",
                    Permission: "quasi",
                    Type: "error",
                },
                shared.ResourceInfo{
                    Container: "temporibus",
                    Location: "laborum",
                    Name: "quasi",
                    Permission: "reiciendis",
                    Type: "voluptatibus",
                },
            },
            ServiceConfigID: "vero",
        },
        AccessToken: "nihil",
        Alt: "media",
        Callback: "voluptatibus",
        Fields: "ipsa",
        Key: "omnis",
        OauthToken: "voluptate",
        PrettyPrint: false,
        QuotaUser: "cum",
        ServiceName: "perferendis",
        UploadType: "doloremque",
        UploadProtocol: "reprehenderit",
    }

    ctx := context.Background()
    res, err := s.Services.ServicecontrolServicesCheck(ctx, req, operations.ServicecontrolServicesCheckSecurity{
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