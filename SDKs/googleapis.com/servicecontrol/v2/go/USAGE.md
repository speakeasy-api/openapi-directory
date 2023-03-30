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
        Security: operations.ServicecontrolServicesCheckSecurity{
            Option1: &operations.ServicecontrolServicesCheckSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.ServicecontrolServicesCheckPathParams{
            ServiceName: "corrupti",
        },
        QueryParams: operations.ServicecontrolServicesCheckQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.CheckRequest{
            Attributes: &shared.AttributeContext{
                API: &shared.API{
                    Operation: "suscipit",
                    Protocol: "iure",
                    Service: "magnam",
                    Version: "debitis",
                },
                Destination: &shared.Peer{
                    IP: "ipsa",
                    Labels: map[string]string{
                        "tempora": "suscipit",
                        "molestiae": "minus",
                        "placeat": "voluptatum",
                        "iusto": "excepturi",
                    },
                    Port: "nisi",
                    Principal: "recusandae",
                    RegionCode: "temporibus",
                },
                Extensions: []map[string]interface{}{
                    map[string]interface{}{
                        "veritatis": "deserunt",
                        "perferendis": "ipsam",
                    },
                },
                Origin: &shared.Peer{
                    IP: "repellendus",
                    Labels: map[string]string{
                        "quo": "odit",
                        "at": "at",
                        "maiores": "molestiae",
                        "quod": "quod",
                    },
                    Port: "esse",
                    Principal: "totam",
                    RegionCode: "porro",
                },
                Request: &shared.Request{
                    Auth: &shared.Auth{
                        AccessLevels: []string{
                            "dicta",
                            "nam",
                            "officia",
                        },
                        Audiences: []string{
                            "fugit",
                            "deleniti",
                            "hic",
                        },
                        Claims: map[string]interface{}{
                            "totam": "beatae",
                            "commodi": "molestiae",
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
    }

    ctx := context.Background()
    res, err := s.Services.ServicecontrolServicesCheck(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->