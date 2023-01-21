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
            ServiceName: "sit",
        },
        QueryParams: operations.ServicecontrolServicesCheckQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.CheckRequest{
            Attributes: &shared.AttributeContext{
                API: &shared.API{
                    Operation: "dicta",
                    Protocol: "debitis",
                    Service: "voluptatum",
                    Version: "et",
                },
                Destination: &shared.Peer{
                    IP: "ut",
                    Labels: map[string]string{
                        "et": "voluptate",
                        "iste": "vitae",
                        "totam": "dolores",
                    },
                    Port: "illum",
                    Principal: "debitis",
                    RegionCode: "vel",
                },
                Extensions: []map[string]interface{}{
                    map[string]interface{}{
                        "id": "aspernatur",
                        "accusantium": "totam",
                    },
                },
                Origin: &shared.Peer{
                    IP: "commodi",
                    Labels: map[string]string{
                        "est": "aut",
                        "odit": "non",
                        "voluptas": "omnis",
                    },
                    Port: "aut",
                    Principal: "illo",
                    RegionCode: "sed",
                },
                Request: &shared.Request{
                    Auth: &shared.Auth{
                        AccessLevels: []string{
                            "autem",
                            "consectetur",
                        },
                        Audiences: []string{
                            "odio",
                        },
                        Claims: map[string]interface{}{
                            "recusandae": "at",
                        },
                        Presenter: "ipsum",
                        Principal: "eveniet",
                    },
                    Headers: map[string]string{
                        "sint": "inventore",
                        "ut": "exercitationem",
                    },
                    Host: "aut",
                    ID: "reprehenderit",
                    Method: "tempore",
                    Path: "maiores",
                    Protocol: "incidunt",
                    Query: "dolor",
                    Reason: "beatae",
                    Scheme: "veritatis",
                    Size: "in",
                    Time: "et",
                },
                Resource: &shared.Resource{
                    Annotations: map[string]string{
                        "ipsum": "ex",
                        "dolores": "placeat",
                    },
                    CreateTime: "vel",
                    DeleteTime: "rerum",
                    DisplayName: "mollitia",
                    Etag: "voluptas",
                    Labels: map[string]string{
                        "reprehenderit": "qui",
                    },
                    Location: "qui",
                    Name: "unde",
                    Service: "in",
                    Type: "autem",
                    UID: "qui",
                    UpdateTime: "ut",
                },
                Response: &shared.Response{
                    BackendLatency: "itaque",
                    Code: "ab",
                    Headers: map[string]string{
                        "ullam": "et",
                    },
                    Size: "accusantium",
                    Time: "esse",
                },
                Source: &shared.Peer{
                    IP: "architecto",
                    Labels: map[string]string{
                        "velit": "cumque",
                    },
                    Port: "soluta",
                    Principal: "sunt",
                    RegionCode: "voluptates",
                },
            },
            Flags: "magni",
            Resources: []shared.ResourceInfo{
                shared.ResourceInfo{
                    Container: "optio",
                    Location: "qui",
                    Name: "earum",
                    Permission: "illo",
                    Type: "omnis",
                },
                shared.ResourceInfo{
                    Container: "ut",
                    Location: "consequatur",
                    Name: "dolor",
                    Permission: "commodi",
                    Type: "error",
                },
                shared.ResourceInfo{
                    Container: "reprehenderit",
                    Location: "consectetur",
                    Name: "nostrum",
                    Permission: "ut",
                    Type: "laboriosam",
                },
            },
            ServiceConfigID: "sed",
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