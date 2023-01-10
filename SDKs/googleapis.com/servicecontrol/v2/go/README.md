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
            ServiceName: "repellendus",
        },
        QueryParams: operations.ServicecontrolServicesCheckQueryParams{
            DollarXgafv: "2",
            AccessToken: "corrupti",
            Alt: "media",
            Callback: "et",
            Fields: "sint",
            Key: "ullam",
            OauthToken: "ea",
            PrettyPrint: true,
            QuotaUser: "ratione",
            UploadType: "qui",
            UploadProtocol: "totam",
        },
        Request: &shared.CheckRequest{
            Attributes: &shared.AttributeContext{
                API: &shared.API{
                    Operation: "ut",
                    Protocol: "iste",
                    Service: "consequatur",
                    Version: "est",
                },
                Destination: &shared.Peer{
                    IP: "quia",
                    Labels: map[string]string{
                        "vero": "at",
                        "accusantium": "beatae",
                    },
                    Port: "aut",
                    Principal: "dolorem",
                    RegionCode: "ipsa",
                },
                Extensions: []map[string]interface{}{
                    map[string]interface{}{
                        "ea": "voluptas",
                    },
                    map[string]interface{}{
                        "placeat": "enim",
                        "enim": "dignissimos",
                    },
                    map[string]interface{}{
                        "quisquam": "est",
                        "aliquam": "dolores",
                        "ea": "iusto",
                    },
                },
                Origin: &shared.Peer{
                    IP: "reprehenderit",
                    Labels: map[string]string{
                        "dolorum": "incidunt",
                        "qui": "quis",
                    },
                    Port: "qui",
                    Principal: "temporibus",
                    RegionCode: "natus",
                },
                Request: &shared.Request{
                    Auth: &shared.Auth{
                        AccessLevels: []string{
                            "quod",
                            "facere",
                            "in",
                        },
                        Audiences: []string{
                            "dolores",
                            "voluptatem",
                        },
                        Claims: map[string]interface{}{
                            "eos": "tenetur",
                            "libero": "aut",
                            "at": "voluptates",
                        },
                        Presenter: "earum",
                        Principal: "omnis",
                    },
                    Headers: map[string]string{
                        "eligendi": "alias",
                        "itaque": "sint",
                        "et": "sit",
                    },
                    Host: "quia",
                    ID: "repudiandae",
                    Method: "similique",
                    Path: "necessitatibus",
                    Protocol: "doloremque",
                    Query: "officiis",
                    Reason: "expedita",
                    Scheme: "repellendus",
                    Size: "harum",
                    Time: "ratione",
                },
                Resource: &shared.Resource{
                    Annotations: map[string]string{
                        "et": "ad",
                        "ullam": "placeat",
                        "repellat": "eius",
                    },
                    CreateTime: "ducimus",
                    DeleteTime: "quia",
                    DisplayName: "sit",
                    Etag: "laudantium",
                    Labels: map[string]string{
                        "odio": "placeat",
                    },
                    Location: "aut",
                    Name: "dolorem",
                    Service: "at",
                    Type: "quis",
                    UID: "vel",
                    UpdateTime: "corrupti",
                },
                Response: &shared.Response{
                    BackendLatency: "dolorem",
                    Code: "deleniti",
                    Headers: map[string]string{
                        "praesentium": "adipisci",
                        "suscipit": "sed",
                    },
                    Size: "aut",
                    Time: "quis",
                },
                Source: &shared.Peer{
                    IP: "est",
                    Labels: map[string]string{
                        "natus": "consequatur",
                        "aut": "enim",
                        "voluptas": "molestiae",
                    },
                    Port: "cum",
                    Principal: "sunt",
                    RegionCode: "officiis",
                },
            },
            Flags: "doloremque",
            Resources: []shared.ResourceInfo{
                shared.ResourceInfo{
                    Container: "a",
                    Location: "consequatur",
                    Name: "rerum",
                    Permission: "omnis",
                    Type: "dolores",
                },
                shared.ResourceInfo{
                    Container: "ut",
                    Location: "quasi",
                    Name: "ullam",
                    Permission: "placeat",
                    Type: "exercitationem",
                },
                shared.ResourceInfo{
                    Container: "explicabo",
                    Location: "porro",
                    Name: "qui",
                    Permission: "aut",
                    Type: "enim",
                },
            },
            ServiceConfigID: "minima",
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
