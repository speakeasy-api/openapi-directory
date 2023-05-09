# Services

### Available Operations

* [ServicecontrolServicesCheck](#servicecontrolservicescheck) - Private Preview. This feature is only available for approved services. This method provides admission control for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It checks whether an operation should be allowed based on the service configuration and relevant policies. It must be called before the operation is executed. For more information, see [Admission Control](https://cloud.google.com/service-infrastructure/docs/admission-control). NOTE: The admission control has an expected policy propagation delay of 60s. The caller **must** not depend on the most recent policy changes. NOTE: The admission control has a hard limit of 1 referenced resources per call. If an operation refers to more than 1 resources, the caller must call the Check method multiple times. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
* [ServicecontrolServicesReport](#servicecontrolservicesreport) - Private Preview. This feature is only available for approved services. This method provides telemetry reporting for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It reports a list of operations that have occurred on a service. It must be called after the operations have been executed. For more information, see [Telemetry Reporting](https://cloud.google.com/service-infrastructure/docs/telemetry-reporting). NOTE: The telemetry reporting has a hard limit of 1000 operations and 1MB per Report call. It is recommended to have no more than 100 operations per call. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).

## ServicecontrolServicesCheck

Private Preview. This feature is only available for approved services. This method provides admission control for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It checks whether an operation should be allowed based on the service configuration and relevant policies. It must be called before the operation is executed. For more information, see [Admission Control](https://cloud.google.com/service-infrastructure/docs/admission-control). NOTE: The admission control has an expected policy propagation delay of 60s. The caller **must** not depend on the most recent policy changes. NOTE: The admission control has a hard limit of 1 referenced resources per call. If an operation refers to more than 1 resources, the caller must call the Check method multiple times. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).

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
    res, err := s.Services.ServicecontrolServicesCheck(ctx, operations.ServicecontrolServicesCheckRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CheckRequest: &shared.CheckRequest{
            Attributes: &shared.AttributeContext{
                API: &shared.API{
                    Operation: sdk.String("eum"),
                    Protocol: sdk.String("non"),
                    Service: sdk.String("eligendi"),
                    Version: sdk.String("sint"),
                },
                Destination: &shared.Peer{
                    IP: sdk.String("aliquid"),
                    Labels: map[string]string{
                        "necessitatibus": "sint",
                        "officia": "dolor",
                        "debitis": "a",
                    },
                    Port: sdk.String("dolorum"),
                    Principal: sdk.String("in"),
                    RegionCode: sdk.String("in"),
                },
                Extensions: []map[string]interface{}{
                    map[string]interface{}{
                        "rerum": "dicta",
                        "magnam": "cumque",
                        "facere": "ea",
                        "aliquid": "laborum",
                    },
                    map[string]interface{}{
                        "non": "occaecati",
                        "enim": "accusamus",
                        "delectus": "quidem",
                        "provident": "nam",
                    },
                    map[string]interface{}{
                        "blanditiis": "deleniti",
                        "sapiente": "amet",
                        "deserunt": "nisi",
                    },
                    map[string]interface{}{
                        "natus": "omnis",
                        "molestiae": "perferendis",
                    },
                },
                Origin: &shared.Peer{
                    IP: sdk.String("nihil"),
                    Labels: map[string]string{
                        "distinctio": "id",
                        "labore": "labore",
                    },
                    Port: sdk.String("suscipit"),
                    Principal: sdk.String("natus"),
                    RegionCode: sdk.String("nobis"),
                },
                Request: &shared.Request{
                    Auth: &shared.Auth{
                        AccessLevels: []string{
                            "vero",
                            "aspernatur",
                        },
                        Audiences: []string{
                            "magnam",
                        },
                        Claims: map[string]interface{}{
                            "excepturi": "ullam",
                        },
                        Presenter: sdk.String("provident"),
                        Principal: sdk.String("quos"),
                    },
                    Headers: map[string]string{
                        "accusantium": "mollitia",
                        "reiciendis": "mollitia",
                        "ad": "eum",
                    },
                    Host: sdk.String("dolor"),
                    ID: sdk.String("e2516fe4-c8b7-411e-9b7f-d2ed028921cd"),
                    Method: sdk.String("pariatur"),
                    Path: sdk.String("maxime"),
                    Protocol: sdk.String("ea"),
                    Query: sdk.String("excepturi"),
                    Reason: sdk.String("odit"),
                    Scheme: sdk.String("ea"),
                    Size: sdk.String("accusantium"),
                    Time: sdk.String("ab"),
                },
                Resource: &shared.Resource{
                    Annotations: map[string]string{
                        "quidem": "ipsam",
                        "voluptate": "autem",
                        "nam": "eaque",
                        "pariatur": "nemo",
                    },
                    CreateTime: sdk.String("voluptatibus"),
                    DeleteTime: sdk.String("perferendis"),
                    DisplayName: sdk.String("fugiat"),
                    Etag: sdk.String("amet"),
                    Labels: map[string]string{
                        "cumque": "corporis",
                    },
                    Location: sdk.String("hic"),
                    Name: sdk.String("Robin D'Amore"),
                    Service: sdk.String("dignissimos"),
                    Type: sdk.String("eaque"),
                    UID: sdk.String("quis"),
                    UpdateTime: sdk.String("nesciunt"),
                },
                Response: &shared.Response{
                    BackendLatency: sdk.String("eos"),
                    Code: sdk.String("perferendis"),
                    Headers: map[string]string{
                        "minus": "quam",
                    },
                    Size: sdk.String("dolor"),
                    Time: sdk.String("vero"),
                },
                Source: &shared.Peer{
                    IP: sdk.String("nostrum"),
                    Labels: map[string]string{
                        "recusandae": "omnis",
                        "facilis": "perspiciatis",
                        "voluptatem": "porro",
                        "consequuntur": "blanditiis",
                    },
                    Port: sdk.String("error"),
                    Principal: sdk.String("eaque"),
                    RegionCode: sdk.String("occaecati"),
                },
            },
            Flags: sdk.String("rerum"),
            Resources: []shared.ResourceInfo{
                shared.ResourceInfo{
                    Container: sdk.String("asperiores"),
                    Location: sdk.String("earum"),
                    Name: sdk.String("Sheryl Parisian"),
                    Permission: sdk.String("provident"),
                    Type: sdk.String("nobis"),
                },
            },
            ServiceConfigID: sdk.String("libero"),
        },
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("dolorem"),
        OauthToken: sdk.String("dolorem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        ServiceName: "qui",
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("hic"),
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

## ServicecontrolServicesReport

Private Preview. This feature is only available for approved services. This method provides telemetry reporting for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It reports a list of operations that have occurred on a service. It must be called after the operations have been executed. For more information, see [Telemetry Reporting](https://cloud.google.com/service-infrastructure/docs/telemetry-reporting). NOTE: The telemetry reporting has a hard limit of 1000 operations and 1MB per Report call. It is recommended to have no more than 100 operations per call. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).

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
    res, err := s.Services.ServicecontrolServicesReport(ctx, operations.ServicecontrolServicesReportRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ReportRequest: &shared.ReportRequest{
            Operations: []shared.AttributeContext{
                shared.AttributeContext{
                    API: &shared.API{
                        Operation: sdk.String("voluptate"),
                        Protocol: sdk.String("dignissimos"),
                        Service: sdk.String("reiciendis"),
                        Version: sdk.String("amet"),
                    },
                    Destination: &shared.Peer{
                        IP: sdk.String("dolorum"),
                        Labels: map[string]string{
                            "veritatis": "ipsa",
                            "ipsa": "iure",
                        },
                        Port: sdk.String("odio"),
                        Principal: sdk.String("quaerat"),
                        RegionCode: sdk.String("accusamus"),
                    },
                    Extensions: []map[string]interface{}{
                        map[string]interface{}{
                            "voluptas": "natus",
                            "eos": "atque",
                            "sit": "fugiat",
                            "ab": "soluta",
                        },
                        map[string]interface{}{
                            "iusto": "voluptate",
                            "dolorum": "deleniti",
                            "omnis": "necessitatibus",
                        },
                        map[string]interface{}{
                            "asperiores": "nihil",
                            "ipsum": "voluptate",
                            "id": "saepe",
                        },
                    },
                    Origin: &shared.Peer{
                        IP: sdk.String("eius"),
                        Labels: map[string]string{
                            "perferendis": "amet",
                        },
                        Port: sdk.String("optio"),
                        Principal: sdk.String("accusamus"),
                        RegionCode: sdk.String("ad"),
                    },
                    Request: &shared.Request{
                        Auth: &shared.Auth{
                            AccessLevels: []string{
                                "suscipit",
                                "deserunt",
                                "provident",
                                "minima",
                            },
                            Audiences: []string{
                                "totam",
                                "similique",
                                "alias",
                                "at",
                            },
                            Claims: map[string]interface{}{
                                "tempora": "vel",
                                "quod": "officiis",
                            },
                            Presenter: sdk.String("qui"),
                            Principal: sdk.String("dolorum"),
                        },
                        Headers: map[string]string{
                            "esse": "harum",
                            "iusto": "ipsum",
                            "quisquam": "tenetur",
                            "amet": "tempore",
                        },
                        Host: sdk.String("accusamus"),
                        ID: sdk.String("453f870b-326b-45a7-b429-cdb1a8422bb6"),
                        Method: sdk.String("quam"),
                        Path: sdk.String("molestias"),
                        Protocol: sdk.String("temporibus"),
                        Query: sdk.String("qui"),
                        Reason: sdk.String("neque"),
                        Scheme: sdk.String("fugit"),
                        Size: sdk.String("magni"),
                        Time: sdk.String("odio"),
                    },
                    Resource: &shared.Resource{
                        Annotations: map[string]string{
                            "ullam": "nam",
                        },
                        CreateTime: sdk.String("hic"),
                        DeleteTime: sdk.String("voluptatem"),
                        DisplayName: sdk.String("cumque"),
                        Etag: sdk.String("soluta"),
                        Labels: map[string]string{
                            "et": "saepe",
                            "ipsum": "veritatis",
                            "nobis": "quos",
                        },
                        Location: sdk.String("tempore"),
                        Name: sdk.String("Kevin Willms"),
                        Service: sdk.String("labore"),
                        Type: sdk.String("adipisci"),
                        UID: sdk.String("dolorum"),
                        UpdateTime: sdk.String("architecto"),
                    },
                    Response: &shared.Response{
                        BackendLatency: sdk.String("quae"),
                        Code: sdk.String("aut"),
                        Headers: map[string]string{
                            "itaque": "consequatur",
                            "est": "repellendus",
                            "porro": "doloribus",
                        },
                        Size: sdk.String("ut"),
                        Time: sdk.String("facilis"),
                    },
                    Source: &shared.Peer{
                        IP: sdk.String("cupiditate"),
                        Labels: map[string]string{
                            "quae": "laudantium",
                        },
                        Port: sdk.String("odio"),
                        Principal: sdk.String("occaecati"),
                        RegionCode: sdk.String("voluptatibus"),
                    },
                },
                shared.AttributeContext{
                    API: &shared.API{
                        Operation: sdk.String("quisquam"),
                        Protocol: sdk.String("vero"),
                        Service: sdk.String("omnis"),
                        Version: sdk.String("quis"),
                    },
                    Destination: &shared.Peer{
                        IP: sdk.String("ipsum"),
                        Labels: map[string]string{
                            "voluptate": "consectetur",
                            "vero": "tenetur",
                            "dignissimos": "hic",
                            "distinctio": "quod",
                        },
                        Port: sdk.String("odio"),
                        Principal: sdk.String("similique"),
                        RegionCode: sdk.String("facilis"),
                    },
                    Extensions: []map[string]interface{}{
                        map[string]interface{}{
                            "dolore": "quibusdam",
                            "illum": "sequi",
                        },
                        map[string]interface{}{
                            "impedit": "aut",
                            "voluptatibus": "exercitationem",
                            "nulla": "fugit",
                        },
                        map[string]interface{}{
                            "maiores": "doloribus",
                            "iusto": "eligendi",
                            "ducimus": "alias",
                            "officia": "tempora",
                        },
                        map[string]interface{}{
                            "ea": "aspernatur",
                            "vel": "possimus",
                        },
                    },
                    Origin: &shared.Peer{
                        IP: sdk.String("magnam"),
                        Labels: map[string]string{
                            "ex": "laudantium",
                        },
                        Port: sdk.String("dicta"),
                        Principal: sdk.String("dolor"),
                        RegionCode: sdk.String("maiores"),
                    },
                    Request: &shared.Request{
                        Auth: &shared.Auth{
                            AccessLevels: []string{
                                "ex",
                            },
                            Audiences: []string{
                                "excepturi",
                                "voluptatibus",
                                "nostrum",
                                "sapiente",
                            },
                            Claims: map[string]interface{}{
                                "saepe": "ea",
                                "impedit": "corporis",
                                "veniam": "aliquid",
                                "inventore": "magnam",
                            },
                            Presenter: sdk.String("ea"),
                            Principal: sdk.String("quo"),
                        },
                        Headers: map[string]string{
                            "recusandae": "aspernatur",
                        },
                        Host: sdk.String("minima"),
                        ID: sdk.String("0fb008c4-2e14-41aa-8366-c8dd6b144290"),
                        Method: sdk.String("molestiae"),
                        Path: sdk.String("magnam"),
                        Protocol: sdk.String("odio"),
                        Query: sdk.String("eius"),
                        Reason: sdk.String("esse"),
                        Scheme: sdk.String("esse"),
                        Size: sdk.String("rem"),
                        Time: sdk.String("fuga"),
                    },
                    Resource: &shared.Resource{
                        Annotations: map[string]string{
                            "quidem": "fugiat",
                            "ut": "eum",
                        },
                        CreateTime: sdk.String("suscipit"),
                        DeleteTime: sdk.String("assumenda"),
                        DisplayName: sdk.String("eos"),
                        Etag: sdk.String("praesentium"),
                        Labels: map[string]string{
                            "veritatis": "ipsa",
                            "id": "quidem",
                            "neque": "quo",
                            "illum": "quo",
                        },
                        Location: sdk.String("fuga"),
                        Name: sdk.String("Ms. Ruby Hintz II"),
                        Service: sdk.String("debitis"),
                        Type: sdk.String("ipsam"),
                        UID: sdk.String("aspernatur"),
                        UpdateTime: sdk.String("sequi"),
                    },
                    Response: &shared.Response{
                        BackendLatency: sdk.String("quo"),
                        Code: sdk.String("esse"),
                        Headers: map[string]string{
                            "aperiam": "distinctio",
                            "quod": "dignissimos",
                            "inventore": "nihil",
                            "totam": "accusamus",
                        },
                        Size: sdk.String("aliquam"),
                        Time: sdk.String("odio"),
                    },
                    Source: &shared.Peer{
                        IP: sdk.String("occaecati"),
                        Labels: map[string]string{
                            "sapiente": "dolores",
                            "deserunt": "molestiae",
                        },
                        Port: sdk.String("accusantium"),
                        Principal: sdk.String("porro"),
                        RegionCode: sdk.String("eum"),
                    },
                },
                shared.AttributeContext{
                    API: &shared.API{
                        Operation: sdk.String("quas"),
                        Protocol: sdk.String("praesentium"),
                        Service: sdk.String("consequuntur"),
                        Version: sdk.String("deleniti"),
                    },
                    Destination: &shared.Peer{
                        IP: sdk.String("fugit"),
                        Labels: map[string]string{
                            "mollitia": "incidunt",
                            "atque": "explicabo",
                            "minima": "nisi",
                        },
                        Port: sdk.String("fugit"),
                        Principal: sdk.String("sapiente"),
                        RegionCode: sdk.String("consequuntur"),
                    },
                    Extensions: []map[string]interface{}{
                        map[string]interface{}{
                            "saepe": "occaecati",
                        },
                    },
                    Origin: &shared.Peer{
                        IP: sdk.String("atque"),
                        Labels: map[string]string{
                            "esse": "eveniet",
                        },
                        Port: sdk.String("accusamus"),
                        Principal: sdk.String("veritatis"),
                        RegionCode: sdk.String("esse"),
                    },
                    Request: &shared.Request{
                        Auth: &shared.Auth{
                            AccessLevels: []string{
                                "nam",
                                "vero",
                                "aliquid",
                                "quasi",
                            },
                            Audiences: []string{
                                "vel",
                                "harum",
                                "molestiae",
                                "rerum",
                            },
                            Claims: map[string]interface{}{
                                "minima": "distinctio",
                                "eligendi": "sit",
                                "culpa": "tempore",
                            },
                            Presenter: sdk.String("adipisci"),
                            Principal: sdk.String("cumque"),
                        },
                        Headers: map[string]string{
                            "consequatur": "minus",
                        },
                        Host: sdk.String("quaerat"),
                        ID: sdk.String("f3789fd8-71f9-49dd-aefd-121aa6f1e674"),
                        Method: sdk.String("libero"),
                        Path: sdk.String("illum"),
                        Protocol: sdk.String("soluta"),
                        Query: sdk.String("accusantium"),
                        Reason: sdk.String("aliquam"),
                        Scheme: sdk.String("sapiente"),
                        Size: sdk.String("dicta"),
                        Time: sdk.String("ullam"),
                    },
                    Resource: &shared.Resource{
                        Annotations: map[string]string{
                            "ullam": "nisi",
                            "aut": "voluptatum",
                        },
                        CreateTime: sdk.String("qui"),
                        DeleteTime: sdk.String("quibusdam"),
                        DisplayName: sdk.String("ex"),
                        Etag: sdk.String("deleniti"),
                        Labels: map[string]string{
                            "dolorum": "architecto",
                            "omnis": "tenetur",
                            "quasi": "at",
                            "et": "voluptate",
                        },
                        Location: sdk.String("ipsa"),
                        Name: sdk.String("Marie Feest"),
                        Service: sdk.String("temporibus"),
                        Type: sdk.String("accusantium"),
                        UID: sdk.String("rem"),
                        UpdateTime: sdk.String("aut"),
                    },
                    Response: &shared.Response{
                        BackendLatency: sdk.String("laudantium"),
                        Code: sdk.String("eum"),
                        Headers: map[string]string{
                            "ab": "corrupti",
                            "non": "voluptatem",
                            "dolor": "occaecati",
                        },
                        Size: sdk.String("numquam"),
                        Time: sdk.String("impedit"),
                    },
                    Source: &shared.Peer{
                        IP: sdk.String("explicabo"),
                        Labels: map[string]string{
                            "aut": "dignissimos",
                            "dicta": "maiores",
                        },
                        Port: sdk.String("natus"),
                        Principal: sdk.String("velit"),
                        RegionCode: sdk.String("voluptatibus"),
                    },
                },
            },
            ServiceConfigID: sdk.String("voluptas"),
        },
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ea"),
        Fields: sdk.String("quaerat"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        ServiceName: "maxime",
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("officia"),
    }, operations.ServicecontrolServicesReportSecurity{
        Option1: &operations.ServicecontrolServicesReportSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportResponse != nil {
        // handle response
    }
}
```
