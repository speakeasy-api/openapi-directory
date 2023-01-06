# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### services

* `ServicecontrolServicesCheck` - Private Preview. This feature is only available for approved services. This method provides admission control for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It checks whether an operation should be allowed based on the service configuration and relevant policies. It must be called before the operation is executed. For more information, see [Admission Control](https://cloud.google.com/service-infrastructure/docs/admission-control). NOTE: The admission control has an expected policy propagation delay of 60s. The caller **must** not depend on the most recent policy changes. NOTE: The admission control has a hard limit of 1 referenced resources per call. If an operation refers to more than 1 resources, the caller must call the Check method multiple times. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
* `ServicecontrolServicesReport` - Private Preview. This feature is only available for approved services. This method provides telemetry reporting for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It reports a list of operations that have occurred on a service. It must be called after the operations have been executed. For more information, see [Telemetry Reporting](https://cloud.google.com/service-infrastructure/docs/telemetry-reporting). NOTE: The telemetry reporting has a hard limit of 1000 operations and 1MB per Report call. It is recommended to have no more than 100 operations per call. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
