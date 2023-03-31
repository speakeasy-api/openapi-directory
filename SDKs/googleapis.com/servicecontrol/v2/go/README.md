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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Services

* `ServicecontrolServicesCheck` - Private Preview. This feature is only available for approved services. This method provides admission control for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It checks whether an operation should be allowed based on the service configuration and relevant policies. It must be called before the operation is executed. For more information, see [Admission Control](https://cloud.google.com/service-infrastructure/docs/admission-control). NOTE: The admission control has an expected policy propagation delay of 60s. The caller **must** not depend on the most recent policy changes. NOTE: The admission control has a hard limit of 1 referenced resources per call. If an operation refers to more than 1 resources, the caller must call the Check method multiple times. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
* `ServicecontrolServicesReport` - Private Preview. This feature is only available for approved services. This method provides telemetry reporting for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It reports a list of operations that have occurred on a service. It must be called after the operations have been executed. For more information, see [Telemetry Reporting](https://cloud.google.com/service-infrastructure/docs/telemetry-reporting). NOTE: The telemetry reporting has a hard limit of 1000 operations and 1MB per Report call. It is recommended to have no more than 100 operations per call. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
