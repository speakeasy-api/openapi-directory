# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/servicecontrol/v2/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Services

* `ServicecontrolServicesCheck` - Private Preview. This feature is only available for approved services. This method provides admission control for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It checks whether an operation should be allowed based on the service configuration and relevant policies. It must be called before the operation is executed. For more information, see [Admission Control](https://cloud.google.com/service-infrastructure/docs/admission-control). NOTE: The admission control has an expected policy propagation delay of 60s. The caller **must** not depend on the most recent policy changes. NOTE: The admission control has a hard limit of 1 referenced resources per call. If an operation refers to more than 1 resources, the caller must call the Check method multiple times. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
* `ServicecontrolServicesReport` - Private Preview. This feature is only available for approved services. This method provides telemetry reporting for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It reports a list of operations that have occurred on a service. It must be called after the operations have been executed. For more information, see [Telemetry Reporting](https://cloud.google.com/service-infrastructure/docs/telemetry-reporting). NOTE: The telemetry reporting has a hard limit of 1000 operations and 1MB per Report call. It is recommended to have no more than 100 operations per call. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
