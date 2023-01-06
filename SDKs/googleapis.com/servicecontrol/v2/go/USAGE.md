<!-- Start SDK Example Usage -->
```go
package main

import (
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
            ServiceName: "nesciunt",
        },
        QueryParams: operations.ServicecontrolServicesCheckQueryParams{
            DollarXgafv: "1",
            AccessToken: "inventore",
            Alt: "json",
            Callback: "temporibus",
            Fields: "explicabo",
            Key: "quidem",
            OauthToken: "officiis",
            PrettyPrint: true,
            QuotaUser: "ut",
            UploadType: "eaque",
            UploadProtocol: "placeat",
        },
        Request: &shared.CheckRequest{
            Attributes: &shared.AttributeContext{
                API: &shared.API{
                    Operation: "magni",
                    Protocol: "qui",
                    Service: "exercitationem",
                    Version: "et",
                },
                Destination: &shared.Peer{
                    IP: "recusandae",
                    Labels: map[string]string{
                        "quam": "facilis",
                        "provident": "illum",
                    },
                    Port: "est",
                    Principal: "ut",
                    RegionCode: "illum",
                },
                Extensions: []map[string]interface{}{
                    map[string]interface{}{
                        "quae": "consectetur",
                        "quia": "aut",
                        "praesentium": "saepe",
                    },
                },
                Origin: &shared.Peer{
                    IP: "labore",
                    Labels: map[string]string{
                        "dicta": "molestias",
                        "voluptatibus": "dolores",
                        "ut": "et",
                    },
                    Port: "tempora",
                    Principal: "voluptas",
                    RegionCode: "consequatur",
                },
                Request: &shared.Request{
                    Auth: &shared.Auth{
                        AccessLevels: []string{
                            "qui",
                        },
                        Audiences: []string{
                            "nihil",
                            "modi",
                        },
                        Claims: map[string]interface{}{
                            "incidunt": "iusto",
                        },
                        Presenter: "voluptatibus",
                        Principal: "laboriosam",
                    },
                    Headers: map[string]string{
                        "id": "quidem",
                        "autem": "consequatur",
                    },
                    Host: "officiis",
                    ID: "tenetur",
                    Method: "voluptate",
                    Path: "doloribus",
                    Protocol: "nesciunt",
                    Query: "exercitationem",
                    Reason: "et",
                    Scheme: "ut",
                    Size: "et",
                    Time: "illum",
                },
                Resource: &shared.Resource{
                    Annotations: map[string]string{
                        "et": "quia",
                        "error": "et",
                    },
                    CreateTime: "molestias",
                    DeleteTime: "sequi",
                    DisplayName: "ut",
                    Etag: "id",
                    Labels: map[string]string{
                        "nulla": "omnis",
                    },
                    Location: "molestias",
                    Name: "nemo",
                    Service: "provident",
                    Type: "in",
                    UID: "officiis",
                    UpdateTime: "et",
                },
                Response: &shared.Response{
                    BackendLatency: "eaque",
                    Code: "a",
                    Headers: map[string]string{
                        "velit": "est",
                        "sunt": "nisi",
                    },
                    Size: "commodi",
                    Time: "facere",
                },
                Source: &shared.Peer{
                    IP: "pariatur",
                    Labels: map[string]string{
                        "et": "voluptatum",
                    },
                    Port: "perferendis",
                    Principal: "quis",
                    RegionCode: "ab",
                },
            },
            Flags: "et",
            Resources: []shared.ResourceInfo{
                shared.ResourceInfo{
                    Container: "doloremque",
                    Location: "voluptas",
                    Name: "earum",
                    Permission: "consequatur",
                    Type: "alias",
                },
            },
            ServiceConfigID: "maiores",
        },
    }
    
    res, err := s.Services.ServicecontrolServicesCheck(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->