# Devices

### Available Operations

* [HomegraphDevicesQuery](#homegraphdevicesquery) - Gets the current states in Home Graph for the given set of the third-party user's devices. The third-party user's identity is passed in via the `agent_user_id` (see QueryRequest). This request must be authorized using service account credentials from your Actions console project.
* [HomegraphDevicesReportStateAndNotification](#homegraphdevicesreportstateandnotification) - Reports device state and optionally sends device notifications. Called by your smart home Action when the state of a third-party device changes or you need to send a notification about the device. See [Implement Report State](https://developers.home.google.com/cloud-to-cloud/integration/report-state) for more information. This method updates the device state according to its declared [traits](https://developers.home.google.com/cloud-to-cloud/primer/device-types-and-traits). Publishing a new state value outside of these traits will result in an `INVALID_ARGUMENT` error response. The third-party user's identity is passed in via the `agent_user_id` (see ReportStateAndNotificationRequest). This request must be authorized using service account credentials from your Actions console project.
* [HomegraphDevicesRequestSync](#homegraphdevicesrequestsync) - Requests Google to send an `action.devices.SYNC` [intent](https://developers.home.google.com/cloud-to-cloud/intents/sync) to your smart home Action to update device metadata for the given user. The third-party user's identity is passed via the `agent_user_id` (see RequestSyncDevicesRequest). This request must be authorized using service account credentials from your Actions console project.
* [HomegraphDevicesSync](#homegraphdevicessync) - Gets all the devices associated with the given third-party user. The third-party user's identity is passed in via the `agent_user_id` (see SyncRequest). This request must be authorized using service account credentials from your Actions console project.

## HomegraphDevicesQuery

Gets the current states in Home Graph for the given set of the third-party user's devices. The third-party user's identity is passed in via the `agent_user_id` (see QueryRequest). This request must be authorized using service account credentials from your Actions console project.

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
    res, err := s.Devices.HomegraphDevicesQuery(ctx, operations.HomegraphDevicesQueryRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        QueryRequest: &shared.QueryRequest{
            AgentUserID: sdk.String("nisi"),
            Inputs: []shared.QueryRequestInput{
                shared.QueryRequestInput{
                    Payload: &shared.QueryRequestPayload{
                        Devices: []shared.AgentDeviceID{
                            shared.AgentDeviceID{
                                ID: sdk.String("151a05df-c2dd-4f7c-878c-a1ba928fc816"),
                            },
                            shared.AgentDeviceID{
                                ID: sdk.String("742cb739-2059-4293-96fe-a7596eb10faa"),
                            },
                            shared.AgentDeviceID{
                                ID: sdk.String("a2352c59-5590-47af-b1a3-a2fa94677392"),
                            },
                            shared.AgentDeviceID{
                                ID: sdk.String("51aa52c3-f5ad-4019-9a1f-fe78f097b007"),
                            },
                        },
                    },
                },
                shared.QueryRequestInput{
                    Payload: &shared.QueryRequestPayload{
                        Devices: []shared.AgentDeviceID{
                            shared.AgentDeviceID{
                                ID: sdk.String("f15471b5-e6e1-43b9-9d48-8e1e91e450ad"),
                            },
                            shared.AgentDeviceID{
                                ID: sdk.String("2abd4426-9802-4d50-aa94-bb4f63c969e9"),
                            },
                        },
                    },
                },
                shared.QueryRequestInput{
                    Payload: &shared.QueryRequestPayload{
                        Devices: []shared.AgentDeviceID{
                            shared.AgentDeviceID{
                                ID: sdk.String("3efa77df-b14c-4d66-ae39-5efb9ba88f3a"),
                            },
                            shared.AgentDeviceID{
                                ID: sdk.String("66997074-ba44-469b-ae21-41959890afa5"),
                            },
                            shared.AgentDeviceID{
                                ID: sdk.String("63e2516f-e4c8-4b71-9e5b-7fd2ed028921"),
                            },
                        },
                    },
                },
                shared.QueryRequestInput{
                    Payload: &shared.QueryRequestPayload{
                        Devices: []shared.AgentDeviceID{
                            shared.AgentDeviceID{
                                ID: sdk.String("ddc69260-1fb5-476b-8d5f-0d30c5fbb258"),
                            },
                            shared.AgentDeviceID{
                                ID: sdk.String("7053202c-73d5-4fe9-b90c-28909b3fe49a"),
                            },
                            shared.AgentDeviceID{
                                ID: sdk.String("8d9cbf48-6333-423f-9b77-f3a4100674eb"),
                            },
                            shared.AgentDeviceID{
                                ID: sdk.String("f69280d1-ba77-4a89-abf7-37ae4203ce5e"),
                            },
                        },
                    },
                },
            },
            RequestID: sdk.String("suscipit"),
        },
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("minima"),
        Fields: sdk.String("repellendus"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("similique"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("quaerat"),
    }, operations.HomegraphDevicesQuerySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryResponse != nil {
        // handle response
    }
}
```

## HomegraphDevicesReportStateAndNotification

Reports device state and optionally sends device notifications. Called by your smart home Action when the state of a third-party device changes or you need to send a notification about the device. See [Implement Report State](https://developers.home.google.com/cloud-to-cloud/integration/report-state) for more information. This method updates the device state according to its declared [traits](https://developers.home.google.com/cloud-to-cloud/primer/device-types-and-traits). Publishing a new state value outside of these traits will result in an `INVALID_ARGUMENT` error response. The third-party user's identity is passed in via the `agent_user_id` (see ReportStateAndNotificationRequest). This request must be authorized using service account credentials from your Actions console project.

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
    res, err := s.Devices.HomegraphDevicesReportStateAndNotification(ctx, operations.HomegraphDevicesReportStateAndNotificationRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ReportStateAndNotificationRequest: &shared.ReportStateAndNotificationRequest{
            AgentUserID: sdk.String("vel"),
            EventID: sdk.String("quod"),
            FollowUpToken: sdk.String("officiis"),
            Payload: &shared.StateAndNotificationPayload{
                Devices: &shared.ReportStateAndNotificationDevice{
                    Notifications: map[string]interface{}{
                        "dolorum": "a",
                    },
                    States: map[string]interface{}{
                        "harum": "iusto",
                        "ipsum": "quisquam",
                    },
                },
            },
            RequestID: sdk.String("tenetur"),
        },
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("numquam"),
        Key: sdk.String("enim"),
        OauthToken: sdk.String("dolorem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("nihil"),
    }, operations.HomegraphDevicesReportStateAndNotificationSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportStateAndNotificationResponse != nil {
        // handle response
    }
}
```

## HomegraphDevicesRequestSync

Requests Google to send an `action.devices.SYNC` [intent](https://developers.home.google.com/cloud-to-cloud/intents/sync) to your smart home Action to update device metadata for the given user. The third-party user's identity is passed via the `agent_user_id` (see RequestSyncDevicesRequest). This request must be authorized using service account credentials from your Actions console project.

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
    res, err := s.Devices.HomegraphDevicesRequestSync(ctx, operations.HomegraphDevicesRequestSyncRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestSyncDevicesRequest: &shared.RequestSyncDevicesRequest{
            AgentUserID: sdk.String("expedita"),
            Async: sdk.Bool(false),
        },
        AccessToken: sdk.String("neque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("vel"),
        Fields: sdk.String("libero"),
        Key: sdk.String("voluptas"),
        OauthToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quam"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("incidunt"),
    }, operations.HomegraphDevicesRequestSyncSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RequestSyncDevicesResponse != nil {
        // handle response
    }
}
```

## HomegraphDevicesSync

Gets all the devices associated with the given third-party user. The third-party user's identity is passed in via the `agent_user_id` (see SyncRequest). This request must be authorized using service account credentials from your Actions console project.

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
    res, err := s.Devices.HomegraphDevicesSync(ctx, operations.HomegraphDevicesSyncRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SyncRequest: &shared.SyncRequest{
            AgentUserID: sdk.String("cupiditate"),
            RequestID: sdk.String("maxime"),
        },
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("incidunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("distinctio"),
    }, operations.HomegraphDevicesSyncSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncResponse != nil {
        // handle response
    }
}
```
