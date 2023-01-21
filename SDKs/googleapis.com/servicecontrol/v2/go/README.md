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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### services

* `ServicecontrolServicesCheck` - Private Preview. This feature is only available for approved services. This method provides admission control for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It checks whether an operation should be allowed based on the service configuration and relevant policies. It must be called before the operation is executed. For more information, see [Admission Control](https://cloud.google.com/service-infrastructure/docs/admission-control). NOTE: The admission control has an expected policy propagation delay of 60s. The caller **must** not depend on the most recent policy changes. NOTE: The admission control has a hard limit of 1 referenced resources per call. If an operation refers to more than 1 resources, the caller must call the Check method multiple times. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
* `ServicecontrolServicesReport` - Private Preview. This feature is only available for approved services. This method provides telemetry reporting for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It reports a list of operations that have occurred on a service. It must be called after the operations have been executed. For more information, see [Telemetry Reporting](https://cloud.google.com/service-infrastructure/docs/telemetry-reporting). NOTE: The telemetry reporting has a hard limit of 1000 operations and 1MB per Report call. It is recommended to have no more than 100 operations per call. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
