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
                    Operation: sdk.String("provident"),
                    Protocol: sdk.String("distinctio"),
                    Service: sdk.String("quibusdam"),
                    Version: sdk.String("unde"),
                },
                Destination: &shared.Peer{
                    IP: sdk.String("nulla"),
                    Labels: map[string]string{
                        "illum": "vel",
                        "error": "deserunt",
                        "suscipit": "iure",
                    },
                    Port: sdk.String("magnam"),
                    Principal: sdk.String("debitis"),
                    RegionCode: sdk.String("ipsa"),
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
                    IP: sdk.String("quod"),
                    Labels: map[string]string{
                        "totam": "porro",
                        "dolorum": "dicta",
                    },
                    Port: sdk.String("nam"),
                    Principal: sdk.String("officia"),
                    RegionCode: sdk.String("occaecati"),
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
                        Presenter: sdk.String("esse"),
                        Principal: sdk.String("ipsum"),
                    },
                    Headers: map[string]string{
                        "aspernatur": "perferendis",
                        "ad": "natus",
                        "sed": "iste",
                    },
                    Host: sdk.String("dolor"),
                    ID: sdk.String("96fea759-6eb1-40fa-aa23-52c5955907af"),
                    Method: sdk.String("sapiente"),
                    Path: sdk.String("architecto"),
                    Protocol: sdk.String("mollitia"),
                    Query: sdk.String("dolorem"),
                    Reason: sdk.String("culpa"),
                    Scheme: sdk.String("consequuntur"),
                    Size: sdk.String("repellat"),
                    Time: sdk.String("mollitia"),
                },
                Resource: &shared.Resource{
                    Annotations: map[string]string{
                        "numquam": "commodi",
                        "quam": "molestiae",
                        "velit": "error",
                    },
                    CreateTime: sdk.String("quia"),
                    DeleteTime: sdk.String("quis"),
                    DisplayName: sdk.String("vitae"),
                    Etag: sdk.String("laborum"),
                    Labels: map[string]string{
                        "enim": "odit",
                        "quo": "sequi",
                        "tenetur": "ipsam",
                    },
                    Location: sdk.String("id"),
                    Name: sdk.String("Richard Boyer"),
                    Service: sdk.String("laborum"),
                    Type: sdk.String("quasi"),
                    UID: sdk.String("reiciendis"),
                    UpdateTime: sdk.String("voluptatibus"),
                },
                Response: &shared.Response{
                    BackendLatency: sdk.String("vero"),
                    Code: sdk.String("nihil"),
                    Headers: map[string]string{
                        "voluptatibus": "ipsa",
                        "omnis": "voluptate",
                        "cum": "perferendis",
                    },
                    Size: sdk.String("doloremque"),
                    Time: sdk.String("reprehenderit"),
                },
                Source: &shared.Peer{
                    IP: sdk.String("ut"),
                    Labels: map[string]string{
                        "dicta": "corporis",
                        "dolore": "iusto",
                        "dicta": "harum",
                        "enim": "accusamus",
                    },
                    Port: sdk.String("commodi"),
                    Principal: sdk.String("repudiandae"),
                    RegionCode: sdk.String("quae"),
                },
            },
            Flags: sdk.String("ipsum"),
            Resources: []shared.ResourceInfo{
                shared.ResourceInfo{
                    Container: sdk.String("molestias"),
                    Location: sdk.String("excepturi"),
                    Name: sdk.String("Joel Lang"),
                    Permission: sdk.String("quasi"),
                    Type: sdk.String("repudiandae"),
                },
                shared.ResourceInfo{
                    Container: sdk.String("sint"),
                    Location: sdk.String("veritatis"),
                    Name: sdk.String("Miss Randall Hamill"),
                    Permission: sdk.String("explicabo"),
                    Type: sdk.String("deserunt"),
                },
                shared.ResourceInfo{
                    Container: sdk.String("distinctio"),
                    Location: sdk.String("quibusdam"),
                    Name: sdk.String("Pauline Deckow"),
                    Permission: sdk.String("quos"),
                    Type: sdk.String("perferendis"),
                },
            },
            ServiceConfigID: sdk.String("magni"),
        },
        AccessToken: sdk.String("assumenda"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("alias"),
        Fields: sdk.String("fugit"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        ServiceName: "facilis",
        UploadType: sdk.String("tempore"),
        UploadProtocol: sdk.String("labore"),
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Services](docs/services/README.md)

* [ServicecontrolServicesCheck](docs/services/README.md#servicecontrolservicescheck) - Private Preview. This feature is only available for approved services. This method provides admission control for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It checks whether an operation should be allowed based on the service configuration and relevant policies. It must be called before the operation is executed. For more information, see [Admission Control](https://cloud.google.com/service-infrastructure/docs/admission-control). NOTE: The admission control has an expected policy propagation delay of 60s. The caller **must** not depend on the most recent policy changes. NOTE: The admission control has a hard limit of 1 referenced resources per call. If an operation refers to more than 1 resources, the caller must call the Check method multiple times. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
* [ServicecontrolServicesReport](docs/services/README.md#servicecontrolservicesreport) - Private Preview. This feature is only available for approved services. This method provides telemetry reporting for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It reports a list of operations that have occurred on a service. It must be called after the operations have been executed. For more information, see [Telemetry Reporting](https://cloud.google.com/service-infrastructure/docs/telemetry-reporting). NOTE: The telemetry reporting has a hard limit of 1000 operations and 1MB per Report call. It is recommended to have no more than 100 operations per call. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
