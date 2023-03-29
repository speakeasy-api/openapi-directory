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
            ServiceName: "unde",
        },
        QueryParams: operations.ServicecontrolServicesCheckQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.CheckRequest{
            Attributes: &shared.AttributeContext{
                API: &shared.API{
                    Operation: "eum",
                    Protocol: "iusto",
                    Service: "ullam",
                    Version: "saepe",
                },
                Destination: &shared.Peer{
                    IP: "inventore",
                    Labels: map[string]string{
                        "enim": "eum",
                        "voluptatum": "autem",
                        "vel": "non",
                        "deleniti": "similique",
                    },
                    Port: "reprehenderit",
                    Principal: "molestiae",
                    RegionCode: "quo",
                },
                Extensions: []map[string]interface{}{
                    map[string]interface{}{
                        "dicta": "est",
                        "voluptatem": "consequatur",
                    },
                },
                Origin: &shared.Peer{
                    IP: "fugiat",
                    Labels: map[string]string{
                        "omnis": "eos",
                        "accusamus": "accusamus",
                        "reiciendis": "rem",
                        "quibusdam": "et",
                    },
                    Port: "praesentium",
                    Principal: "occaecati",
                    RegionCode: "dolor",
                },
                Request: &shared.Request{
                    Auth: &shared.Auth{
                        AccessLevels: []string{
                            "sed",
                            "quisquam",
                            "rerum",
                        },
                        Audiences: []string{
                            "qui",
                            "sed",
                            "rerum",
                        },
                        Claims: map[string]interface{}{
                            "occaecati": "odit",
                            "esse": "rem",
                            "voluptatem": "amet",
                            "est": "id",
                        },
                        Presenter: "blanditiis",
                        Principal: "numquam",
                    },
                    Headers: map[string]string{
                        "dolores": "sit",
                        "quia": "et",
                        "voluptatem": "laborum",
                    },
                    Host: "modi",
                    ID: "et",
                    Method: "iure",
                    Path: "earum",
                    Protocol: "ut",
                    Query: "soluta",
                    Reason: "qui",
                    Scheme: "ea",
                    Size: "laborum",
                    Time: "iusto",
                },
                Resource: &shared.Resource{
                    Annotations: map[string]string{
                        "optio": "aspernatur",
                        "inventore": "ut",
                        "libero": "et",
                        "libero": "ipsum",
                    },
                    CreateTime: "non",
                    DeleteTime: "ea",
                    DisplayName: "magni",
                    Etag: "placeat",
                    Labels: map[string]string{
                        "est": "commodi",
                        "quia": "similique",
                    },
                    Location: "eaque",
                    Name: "odio",
                    Service: "harum",
                    Type: "doloribus",
                    UID: "a",
                    UpdateTime: "aut",
                },
                Response: &shared.Response{
                    BackendLatency: "et",
                    Code: "non",
                    Headers: map[string]string{
                        "neque": "asperiores",
                        "et": "culpa",
                        "aliquam": "esse",
                    },
                    Size: "totam",
                    Time: "voluptatum",
                },
                Source: &shared.Peer{
                    IP: "et",
                    Labels: map[string]string{
                        "nesciunt": "laboriosam",
                        "aut": "cum",
                        "expedita": "ipsam",
                    },
                    Port: "eos",
                    Principal: "omnis",
                    RegionCode: "adipisci",
                },
            },
            Flags: "hic",
            Resources: []shared.ResourceInfo{
                shared.ResourceInfo{
                    Container: "distinctio",
                    Location: "qui",
                    Name: "perferendis",
                    Permission: "aspernatur",
                    Type: "fuga",
                },
                shared.ResourceInfo{
                    Container: "quo",
                    Location: "tempore",
                    Name: "explicabo",
                    Permission: "aut",
                    Type: "reiciendis",
                },
            },
            ServiceConfigID: "debitis",
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