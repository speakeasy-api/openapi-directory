# Networks

### Available Operations

* [BindNetwork](#bindnetwork) - Bind a network to a template.
* [ClaimNetworkDevices](#claimnetworkdevices) - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
* [CombineOrganizationNetworks](#combineorganizationnetworks) - Combine multiple networks into a single network
* [CreateNetworkFirmwareUpgradesRollback](#createnetworkfirmwareupgradesrollback) - Rollback a Firmware Upgrade For A Network
* [CreateNetworkFirmwareUpgradesStagedEvent](#createnetworkfirmwareupgradesstagedevent) - Create a Staged Upgrade Event for a network
* [CreateNetworkFirmwareUpgradesStagedGroup](#createnetworkfirmwareupgradesstagedgroup) - Create a Staged Upgrade Group for a network
* [CreateNetworkFloorPlan](#createnetworkfloorplan) - Upload a floor plan
* [CreateNetworkGroupPolicy](#createnetworkgrouppolicy) - Create a group policy
* [CreateNetworkMerakiAuthUser](#createnetworkmerakiauthuser) - Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
* [CreateNetworkMqttBroker](#createnetworkmqttbroker) - Add an MQTT broker
* [CreateNetworkPiiRequest](#createnetworkpiirequest) - Submit a new delete or restrict processing PII request
* [CreateNetworkWebhooksHTTPServer](#createnetworkwebhookshttpserver) - Add an HTTP server to a network
* [CreateNetworkWebhooksPayloadTemplate](#createnetworkwebhookspayloadtemplate) - Create a webhook payload template for a network
* [CreateNetworkWebhooksWebhookTest](#createnetworkwebhookswebhooktest) - Send a test webhook for a network
* [CreateOrganizationNetwork](#createorganizationnetwork) - Create a network
* [DeferNetworkFirmwareUpgradesStagedEvents](#defernetworkfirmwareupgradesstagedevents) - Postpone by 1 week all pending staged upgrade stages for a network
* [DeleteNetwork](#deletenetwork) - Delete a network
* [DeleteNetworkFirmwareUpgradesStagedGroup](#deletenetworkfirmwareupgradesstagedgroup) - Delete a Staged Upgrade Group
* [DeleteNetworkFloorPlan](#deletenetworkfloorplan) - Destroy a floor plan
* [DeleteNetworkGroupPolicy](#deletenetworkgrouppolicy) - Delete a group policy
* [DeleteNetworkMerakiAuthUser](#deletenetworkmerakiauthuser) - Deauthorize a user
* [DeleteNetworkMqttBroker](#deletenetworkmqttbroker) - Delete an MQTT broker
* [DeleteNetworkPiiRequest](#deletenetworkpiirequest) - Delete a restrict processing PII request
* [DeleteNetworkWebhooksHTTPServer](#deletenetworkwebhookshttpserver) - Delete an HTTP server from a network
* [DeleteNetworkWebhooksPayloadTemplate](#deletenetworkwebhookspayloadtemplate) - Destroy a webhook payload template for a network
* [GetNetwork](#getnetwork) - Return a network
* [GetNetworkAlertsHistory](#getnetworkalertshistory) - Return the alert history for this network
* [GetNetworkAlertsSettings](#getnetworkalertssettings) - Return the alert configuration for this network
* [GetNetworkBluetoothClient](#getnetworkbluetoothclient) - Return a Bluetooth client
* [GetNetworkBluetoothClients](#getnetworkbluetoothclients) - List the Bluetooth clients seen by APs in this network
* [GetNetworkClient](#getnetworkclient) - Return the client associated with the given identifier
* [GetNetworkClientPolicy](#getnetworkclientpolicy) - Return the policy assigned to a client on the network
* [GetNetworkClientSplashAuthorizationStatus](#getnetworkclientsplashauthorizationstatus) - Return the splash authorization for a client, for each SSID they've associated with through splash
* [GetNetworkClientTrafficHistory](#getnetworkclienttraffichistory) - Return the client's network traffic data over time
* [GetNetworkClientUsageHistory](#getnetworkclientusagehistory) - Return the client's daily usage history
* [GetNetworkClients](#getnetworkclients) - List the clients that have used this network in the timespan
* [GetNetworkClientsApplicationUsage](#getnetworkclientsapplicationusage) - Return the application usage data for clients
* [GetNetworkClientsBandwidthUsageHistory](#getnetworkclientsbandwidthusagehistory) - Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
* [GetNetworkClientsOverview](#getnetworkclientsoverview) - Return overview statistics for network clients
* [GetNetworkClientsUsageHistories](#getnetworkclientsusagehistories) - Return the usage histories for clients
* [GetNetworkDevices](#getnetworkdevices) - List the devices in a network
* [GetNetworkEvents](#getnetworkevents) - List the events for the network
* [GetNetworkEventsEventTypes](#getnetworkeventseventtypes) - List the event type to human-readable description
* [GetNetworkFirmwareUpgrades](#getnetworkfirmwareupgrades) - Get firmware upgrade information for a network
* [GetNetworkFirmwareUpgradesStagedEvents](#getnetworkfirmwareupgradesstagedevents) - Get the Staged Upgrade Event from a network
* [GetNetworkFirmwareUpgradesStagedGroup](#getnetworkfirmwareupgradesstagedgroup) - Get a Staged Upgrade Group from a network
* [GetNetworkFirmwareUpgradesStagedGroups](#getnetworkfirmwareupgradesstagedgroups) - List of Staged Upgrade Groups in a network
* [GetNetworkFirmwareUpgradesStagedStages](#getnetworkfirmwareupgradesstagedstages) - Order of Staged Upgrade Groups in a network
* [GetNetworkFloorPlan](#getnetworkfloorplan) - Find a floor plan by ID
* [GetNetworkFloorPlans](#getnetworkfloorplans) - List the floor plans that belong to your network
* [GetNetworkGroupPolicies](#getnetworkgrouppolicies) - List the group policies in a network
* [GetNetworkGroupPolicy](#getnetworkgrouppolicy) - Display a group policy
* [GetNetworkHealthAlerts](#getnetworkhealthalerts) - Return all global alerts on this network
* [GetNetworkMerakiAuthUser](#getnetworkmerakiauthuser) - Return the Meraki Auth splash guest, RADIUS, or client VPN user
* [GetNetworkMerakiAuthUsers](#getnetworkmerakiauthusers) - List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
* [GetNetworkMqttBroker](#getnetworkmqttbroker) - Return an MQTT broker
* [GetNetworkMqttBrokers](#getnetworkmqttbrokers) - List the MQTT brokers for this network
* [GetNetworkNetflow](#getnetworknetflow) - Return the NetFlow traffic reporting settings for a network
* [GetNetworkNetworkHealthChannelUtilization](#getnetworknetworkhealthchannelutilization) - Get the channel utilization over each radio for all APs in a network.
* [GetNetworkPiiPiiKeys](#getnetworkpiipiikeys) - List the keys required to access Personally Identifiable Information (PII) for a given identifier
* [GetNetworkPiiRequest](#getnetworkpiirequest) - Return a PII request
* [GetNetworkPiiRequests](#getnetworkpiirequests) - List the PII requests for this network or organization
* [GetNetworkPiiSmDevicesForKey](#getnetworkpiismdevicesforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
* [GetNetworkPiiSmOwnersForKey](#getnetworkpiismownersforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier
* [GetNetworkPoliciesByClient](#getnetworkpoliciesbyclient) - Get policies for all clients with policies
* [GetNetworkSettings](#getnetworksettings) - Return the settings for a network
* [GetNetworkSnmp](#getnetworksnmp) - Return the SNMP settings for a network
* [GetNetworkSplashLoginAttempts](#getnetworksplashloginattempts) - List the splash login attempts for a network
* [GetNetworkSyslogServers](#getnetworksyslogservers) - List the syslog servers for a network
* [GetNetworkTopologyLinkLayer](#getnetworktopologylinklayer) - List the LLDP and CDP information for all discovered devices and connections in a network.
* [GetNetworkTraffic](#getnetworktraffic) - Return the traffic analysis data for this network
* [GetNetworkTrafficAnalysis](#getnetworktrafficanalysis) - Return the traffic analysis settings for a network
* [GetNetworkTrafficShapingApplicationCategories](#getnetworktrafficshapingapplicationcategories) - Returns the application categories for traffic shaping rules.
* [GetNetworkTrafficShapingDscpTaggingOptions](#getnetworktrafficshapingdscptaggingoptions) - Returns the available DSCP tagging options for your traffic shaping rules.
* [GetNetworkWebhooksHTTPServer](#getnetworkwebhookshttpserver) - Return an HTTP server for a network
* [GetNetworkWebhooksHTTPServers](#getnetworkwebhookshttpservers) - List the HTTP servers for a network
* [GetNetworkWebhooksPayloadTemplate](#getnetworkwebhookspayloadtemplate) - Get the webhook payload template for a network
* [GetNetworkWebhooksPayloadTemplates](#getnetworkwebhookspayloadtemplates) - List the webhook payload templates for a network
* [GetNetworkWebhooksWebhookTest](#getnetworkwebhookswebhooktest) - Return the status of a webhook test for a network
* [GetOrganizationInventoryOnboardingCloudMonitoringNetworks](#getorganizationinventoryonboardingcloudmonitoringnetworks) - Returns list of networks eligible for adding cloud monitored device
* [GetOrganizationNetworks](#getorganizationnetworks) - List the networks that the user has privileges on in an organization
* [ProvisionNetworkClients](#provisionnetworkclients) - Provisions a client with a name and policy
* [RemoveNetworkDevices](#removenetworkdevices) - Remove a single device
* [RollbacksNetworkFirmwareUpgradesStagedEvents](#rollbacksnetworkfirmwareupgradesstagedevents) - Rollback a Staged Upgrade Event for a network
* [SplitNetwork](#splitnetwork) - Split a combined network into individual networks for each type of device
* [UnbindNetwork](#unbindnetwork) - Unbind a network from a template.
* [UpdateNetwork](#updatenetwork) - Update a network
* [UpdateNetworkAlertsSettings](#updatenetworkalertssettings) - Update the alert configuration for this network
* [UpdateNetworkClientPolicy](#updatenetworkclientpolicy) - Update the policy assigned to a client on the network
* [UpdateNetworkClientSplashAuthorizationStatus](#updatenetworkclientsplashauthorizationstatus) - Update a client's splash authorization
* [UpdateNetworkFirmwareUpgrades](#updatenetworkfirmwareupgrades) - Update firmware upgrade information for a network
* [UpdateNetworkFirmwareUpgradesStagedEvents](#updatenetworkfirmwareupgradesstagedevents) - Update the Staged Upgrade Event for a network
* [UpdateNetworkFirmwareUpgradesStagedGroup](#updatenetworkfirmwareupgradesstagedgroup) - Update a Staged Upgrade Group for a network
* [UpdateNetworkFirmwareUpgradesStagedStages](#updatenetworkfirmwareupgradesstagedstages) - Assign Staged Upgrade Group order in the sequence.
* [UpdateNetworkFloorPlan](#updatenetworkfloorplan) - Update a floor plan's geolocation and other meta data
* [UpdateNetworkGroupPolicy](#updatenetworkgrouppolicy) - Update a group policy
* [UpdateNetworkMerakiAuthUser](#updatenetworkmerakiauthuser) - Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)
* [UpdateNetworkMqttBroker](#updatenetworkmqttbroker) - Update an MQTT broker
* [UpdateNetworkNetflow](#updatenetworknetflow) - Update the NetFlow traffic reporting settings for a network
* [UpdateNetworkSettings](#updatenetworksettings) - Update the settings for a network
* [UpdateNetworkSnmp](#updatenetworksnmp) - Update the SNMP settings for a network
* [UpdateNetworkSyslogServers](#updatenetworksyslogservers) - Update the syslog servers for a network
* [UpdateNetworkTrafficAnalysis](#updatenetworktrafficanalysis) - Update the traffic analysis settings for a network
* [UpdateNetworkWebhooksHTTPServer](#updatenetworkwebhookshttpserver) - Update an HTTP server
* [UpdateNetworkWebhooksPayloadTemplate](#updatenetworkwebhookspayloadtemplate) - Update a webhook payload template for a network
* [VmxNetworkDevicesClaim](#vmxnetworkdevicesclaim) - Claim a vMX into a network

## BindNetwork

Bind a network to a template.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.BindNetwork(ctx, operations.BindNetworkRequest{
        RequestBody: operations.BindNetworkRequestBody{
            AutoBind: sdk.Bool(false),
            ConfigTemplateID: "ullam",
        },
        NetworkID: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BindNetwork200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ClaimNetworkDevices

Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.ClaimNetworkDevices(ctx, operations.ClaimNetworkDevicesRequest{
        RequestBody: operations.ClaimNetworkDevicesRequestBody{
            Serials: []string{
                "necessitatibus",
            },
        },
        NetworkID: "consectetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CombineOrganizationNetworks

Combine multiple networks into a single network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.CombineOrganizationNetworks(ctx, operations.CombineOrganizationNetworksRequest{
        RequestBody: operations.CombineOrganizationNetworksRequestBody{
            EnrollmentString: sdk.String("odio"),
            Name: "Annie Johnson",
            NetworkIds: []string{
                "reprehenderit",
            },
        },
        OrganizationID: "culpa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CombineOrganizationNetworks200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkFirmwareUpgradesRollback

Rollback a Firmware Upgrade For A Network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.CreateNetworkFirmwareUpgradesRollback(ctx, operations.CreateNetworkFirmwareUpgradesRollbackRequest{
        RequestBody: operations.CreateNetworkFirmwareUpgradesRollbackRequestBody{
            Product: operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnumCamera.ToPointer(),
            Reasons: []CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons{
                operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons{
                    Category: operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnumOther,
                    Comment: "excepturi",
                },
                operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons{
                    Category: operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnumPerformance,
                    Comment: "officia",
                },
                operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons{
                    Category: operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnumTesting,
                    Comment: "dolore",
                },
                operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons{
                    Category: operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnumBrokeOldFeatures,
                    Comment: "facilis",
                },
            },
            Time: types.MustTimeFromString("2021-03-03T22:13:47.475Z"),
            ToVersion: &operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion{
                ID: sdk.String("2053ae8c-3153-425b-9e02-294725d88138"),
            },
        },
        NetworkID: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkFirmwareUpgradesRollback200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkFirmwareUpgradesStagedEvent

Create a Staged Upgrade Event for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.CreateNetworkFirmwareUpgradesStagedEvent(ctx, operations.CreateNetworkFirmwareUpgradesStagedEventRequest{
        RequestBody: operations.CreateNetworkFirmwareUpgradesStagedEventRequestBody{
            Products: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyProducts{
                Switch: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitch{
                    NextUpgrade: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgrade{
                        ToVersion: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgradeToVersion{
                            ID: "ace6dd2a-0991-4b6d-9760-043c799a2a18",
                        },
                    },
                },
            },
            Stages: []CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages{
                operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages{
                    Group: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesGroup{
                        ID: "b129dc52-4abb-47b1-8caf-244de103d083",
                    },
                    Milestones: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesMilestones{
                        ScheduledFor: "voluptatem",
                    },
                },
                operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages{
                    Group: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesGroup{
                        ID: "ac4d070c-4e39-46e5-a2c5-ccb16373314d",
                    },
                    Milestones: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesMilestones{
                        ScheduledFor: "fuga",
                    },
                },
                operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages{
                    Group: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesGroup{
                        ID: "d58b8905-42e5-4a55-a10f-d8ac0f482f9e",
                    },
                    Milestones: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesMilestones{
                        ScheduledFor: "excepturi",
                    },
                },
                operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages{
                    Group: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesGroup{
                        ID: "a53c304d-ae12-42f0-bfec-c41932d704b3",
                    },
                    Milestones: &operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesMilestones{
                        ScheduledFor: "fuga",
                    },
                },
            },
        },
        NetworkID: "eveniet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkFirmwareUpgradesStagedEvent200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkFirmwareUpgradesStagedGroup

Create a Staged Upgrade Group for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.CreateNetworkFirmwareUpgradesStagedGroup(ctx, operations.CreateNetworkFirmwareUpgradesStagedGroupRequest{
        RequestBody: operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBody{
            AssignedDevices: &operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices{
                Devices: []CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices{
                    operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices{
                        Name: sdk.String("Bobbie Emard"),
                        Serial: "provident",
                    },
                    operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices{
                        Name: sdk.String("Roderick Rohan"),
                        Serial: "fugit",
                    },
                },
                SwitchStacks: []CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks{
                    operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks{
                        ID: "f6f71b06-52fe-4653-afb3-0a414aa294d6",
                        Name: sdk.String("Erma Berge"),
                    },
                    operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks{
                        ID: "2ec1a807-151a-4354-ba1a-6d7ddc39917b",
                        Name: sdk.String("Jay Friesen"),
                    },
                    operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks{
                        ID: "502a99e6-2f49-446c-a2d7-266cd7638127",
                        Name: sdk.String("Ethel Nitzsche I"),
                    },
                },
            },
            Description: sdk.String("earum"),
            IsDefault: false,
            Name: "Dr. Marvin Nienow PhD",
        },
        NetworkID: "quam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkFloorPlan

Upload a floor plan

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.CreateNetworkFloorPlan(ctx, operations.CreateNetworkFloorPlanRequest{
        RequestBody: operations.CreateNetworkFloorPlanRequestBody{
            BottomLeftCorner: &operations.CreateNetworkFloorPlanRequestBodyBottomLeftCorner{
                Lat: sdk.Float32(6684.99),
                Lng: sdk.Float32(6945.05),
            },
            BottomRightCorner: &operations.CreateNetworkFloorPlanRequestBodyBottomRightCorner{
                Lat: sdk.Float32(2134.26),
                Lng: sdk.Float32(9343.48),
            },
            Center: &operations.CreateNetworkFloorPlanRequestBodyCenter{
                Lat: sdk.Float32(602.25),
                Lng: sdk.Float32(4572.46),
            },
            ImageContents: "nobis",
            Name: "Mr. Stacy Towne",
            TopLeftCorner: &operations.CreateNetworkFloorPlanRequestBodyTopLeftCorner{
                Lat: sdk.Float32(7078.91),
                Lng: sdk.Float32(5370.65),
            },
            TopRightCorner: &operations.CreateNetworkFloorPlanRequestBodyTopRightCorner{
                Lat: sdk.Float32(5244.49),
                Lng: sdk.Float32(9490.13),
            },
        },
        NetworkID: "minima",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkFloorPlan201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkGroupPolicy

Create a group policy

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.CreateNetworkGroupPolicy(ctx, operations.CreateNetworkGroupPolicyRequest{
        RequestBody: operations.CreateNetworkGroupPolicyRequestBody{
            Bandwidth: &operations.CreateNetworkGroupPolicyRequestBodyBandwidth{
                BandwidthLimits: &operations.CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits{
                    LimitDown: sdk.Int64(578874),
                    LimitUp: sdk.Int64(87619),
                },
                Settings: operations.CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnumNetworkDefault.ToPointer(),
            },
            BonjourForwarding: &operations.CreateNetworkGroupPolicyRequestBodyBonjourForwarding{
                Rules: []CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules{
                    operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules{
                        Description: sdk.String("corrupti"),
                        Services: []CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum{
                            operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumAirPlay,
                        },
                        VlanID: "unde",
                    },
                    operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules{
                        Description: sdk.String("delectus"),
                        Services: []CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum{
                            operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumAfp,
                            operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumSSH,
                            operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumAllServices,
                        },
                        VlanID: "consequuntur",
                    },
                    operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules{
                        Description: sdk.String("repellat"),
                        Services: []CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum{
                            operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumScanners,
                            operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumSamba,
                        },
                        VlanID: "quibusdam",
                    },
                },
                Settings: operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnumCustom.ToPointer(),
            },
            ContentFiltering: &operations.CreateNetworkGroupPolicyRequestBodyContentFiltering{
                AllowedURLPatterns: &operations.CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatterns{
                    Patterns: []string{
                        "distinctio",
                        "voluptas",
                    },
                    Settings: operations.CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnumNetworkDefault.ToPointer(),
                },
                BlockedURLCategories: &operations.CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategories{
                    Categories: []string{
                        "corporis",
                        "eaque",
                    },
                    Settings: operations.CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnumAppend.ToPointer(),
                },
                BlockedURLPatterns: &operations.CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatterns{
                    Patterns: []string{
                        "mollitia",
                    },
                    Settings: operations.CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnumAppend.ToPointer(),
                },
            },
            FirewallAndTrafficShaping: &operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping{
                L3FirewallRules: []CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules{
                    operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules{
                        Comment: sdk.String("dolor"),
                        DestCidr: "vel",
                        DestPort: sdk.String("est"),
                        Policy: "sed",
                        Protocol: "magni",
                    },
                    operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules{
                        Comment: sdk.String("sunt"),
                        DestCidr: "eveniet",
                        DestPort: sdk.String("ratione"),
                        Policy: "reiciendis",
                        Protocol: "asperiores",
                    },
                    operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules{
                        Comment: sdk.String("molestiae"),
                        DestCidr: "in",
                        DestPort: sdk.String("eaque"),
                        Policy: "animi",
                        Protocol: "dolores",
                    },
                },
                L7FirewallRules: []CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules{
                    operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules{
                        Policy: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnumDeny.ToPointer(),
                        Type: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnumApplicationCategory.ToPointer(),
                        Value: sdk.String("aspernatur"),
                    },
                    operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules{
                        Policy: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnumDeny.ToPointer(),
                        Type: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnumPort.ToPointer(),
                        Value: sdk.String("nostrum"),
                    },
                    operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules{
                        Policy: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnumDeny.ToPointer(),
                        Type: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnumPort.ToPointer(),
                        Value: sdk.String("fugiat"),
                    },
                },
                Settings: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnumNetworkDefault.ToPointer(),
                TrafficShapingRules: []CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules{
                    operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules{
                        Definitions: []CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                            operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumIPRange,
                                Value: "dolores",
                            },
                            operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumIPRange,
                                Value: "rem",
                            },
                        },
                        DscpTagValue: sdk.Int64(462439),
                        PcpTagValue: sdk.Int64(344358),
                        PerClientBandwidthLimits: &operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits{
                            BandwidthLimits: &operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits{
                                LimitDown: sdk.Int64(759615),
                                LimitUp: sdk.Int64(398131),
                            },
                            Settings: sdk.String("laborum"),
                        },
                        Priority: sdk.String("voluptate"),
                    },
                    operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules{
                        Definitions: []CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                            operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumApplication,
                                Value: "saepe",
                            },
                        },
                        DscpTagValue: sdk.Int64(324599),
                        PcpTagValue: sdk.Int64(254859),
                        PerClientBandwidthLimits: &operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits{
                            BandwidthLimits: &operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits{
                                LimitDown: sdk.Int64(743213),
                                LimitUp: sdk.Int64(309060),
                            },
                            Settings: sdk.String("iusto"),
                        },
                        Priority: sdk.String("accusamus"),
                    },
                },
            },
            Name: "Charlie Pacocha",
            Scheduling: &operations.CreateNetworkGroupPolicyRequestBodyScheduling{
                Enabled: sdk.Bool(false),
                Friday: &operations.CreateNetworkGroupPolicyRequestBodySchedulingFriday{
                    Active: sdk.Bool(false),
                    From: sdk.String("molestias"),
                    To: sdk.String("harum"),
                },
                Monday: &operations.CreateNetworkGroupPolicyRequestBodySchedulingMonday{
                    Active: sdk.Bool(false),
                    From: sdk.String("assumenda"),
                    To: sdk.String("quas"),
                },
                Saturday: &operations.CreateNetworkGroupPolicyRequestBodySchedulingSaturday{
                    Active: sdk.Bool(false),
                    From: sdk.String("adipisci"),
                    To: sdk.String("quia"),
                },
                Sunday: &operations.CreateNetworkGroupPolicyRequestBodySchedulingSunday{
                    Active: sdk.Bool(false),
                    From: sdk.String("molestiae"),
                    To: sdk.String("repudiandae"),
                },
                Thursday: &operations.CreateNetworkGroupPolicyRequestBodySchedulingThursday{
                    Active: sdk.Bool(false),
                    From: sdk.String("rem"),
                    To: sdk.String("repellat"),
                },
                Tuesday: &operations.CreateNetworkGroupPolicyRequestBodySchedulingTuesday{
                    Active: sdk.Bool(false),
                    From: sdk.String("esse"),
                    To: sdk.String("quibusdam"),
                },
                Wednesday: &operations.CreateNetworkGroupPolicyRequestBodySchedulingWednesday{
                    Active: sdk.Bool(false),
                    From: sdk.String("non"),
                    To: sdk.String("quasi"),
                },
            },
            SplashAuthSettings: operations.CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnumBypass.ToPointer(),
            VlanTagging: &operations.CreateNetworkGroupPolicyRequestBodyVlanTagging{
                Settings: operations.CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnumCustom.ToPointer(),
                VlanID: sdk.String("incidunt"),
            },
        },
        NetworkID: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkGroupPolicy201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkMerakiAuthUser

Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.CreateNetworkMerakiAuthUser(ctx, operations.CreateNetworkMerakiAuthUserRequest{
        RequestBody: operations.CreateNetworkMerakiAuthUserRequestBody{
            AccountType: operations.CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnumGuest.ToPointer(),
            Authorizations: []CreateNetworkMerakiAuthUserRequestBodyAuthorizations{
                operations.CreateNetworkMerakiAuthUserRequestBodyAuthorizations{
                    ExpiresAt: sdk.String("vero"),
                    SsidNumber: sdk.Int64(826905),
                },
                operations.CreateNetworkMerakiAuthUserRequestBodyAuthorizations{
                    ExpiresAt: sdk.String("praesentium"),
                    SsidNumber: sdk.Int64(180815),
                },
                operations.CreateNetworkMerakiAuthUserRequestBodyAuthorizations{
                    ExpiresAt: sdk.String("ratione"),
                    SsidNumber: sdk.Int64(625240),
                },
            },
            Email: "Carmine43@hotmail.com",
            EmailPasswordToUser: sdk.Bool(false),
            IsAdmin: sdk.Bool(false),
            Name: sdk.String("Velma Stoltenberg"),
            Password: sdk.String("sit"),
        },
        NetworkID: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkMerakiAuthUser201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkMqttBroker

Add an MQTT broker

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.CreateNetworkMqttBroker(ctx, operations.CreateNetworkMqttBrokerRequest{
        RequestBody: operations.CreateNetworkMqttBrokerRequestBody{
            Authentication: map[string]interface{}{
                "nisi": "iure",
                "modi": "suscipit",
            },
            Host: "itaque",
            Name: "Nathaniel Hilpert",
            Port: 72222,
            Security: &operations.CreateNetworkMqttBrokerRequestBodySecurity{
                Mode: sdk.String("rem"),
                Security: &operations.CreateNetworkMqttBrokerRequestBodySecuritySecurity{
                    CaCertificate: sdk.String("ab"),
                    VerifyHostnames: sdk.Bool(false),
                },
            },
        },
        NetworkID: "quam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkMqttBroker201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkPiiRequest

Submit a new delete or restrict processing PII request

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests
```

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.CreateNetworkPiiRequest(ctx, operations.CreateNetworkPiiRequestRequest{
        RequestBody: &operations.CreateNetworkPiiRequestRequestBody{
            Datasets: []string{
                "fugiat",
                "itaque",
                "sit",
                "culpa",
            },
            Email: sdk.String("Stella.Larson12@hotmail.com"),
            Mac: sdk.String("aspernatur"),
            SmDeviceID: sdk.String("ab"),
            SmUserID: sdk.String("consectetur"),
            Type: operations.CreateNetworkPiiRequestRequestBodyTypeEnumRestrictProcessing.ToPointer(),
            Username: sdk.String("Elmore62"),
        },
        NetworkID: "eaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkPiiRequest201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkWebhooksHTTPServer

Add an HTTP server to a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.CreateNetworkWebhooksHTTPServer(ctx, operations.CreateNetworkWebhooksHTTPServerRequest{
        RequestBody: operations.CreateNetworkWebhooksHTTPServerRequestBody{
            Name: "Edith Larkin",
            PayloadTemplate: &operations.CreateNetworkWebhooksHTTPServerRequestBodyPayloadTemplate{
                Name: sdk.String("Beulah Durgan"),
                PayloadTemplateID: sdk.String("repellat"),
            },
            SharedSecret: sdk.String("fugiat"),
            URL: "neque",
        },
        NetworkID: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkWebhooksHTTPServer201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkWebhooksPayloadTemplate

Create a webhook payload template for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.CreateNetworkWebhooksPayloadTemplate(ctx, operations.CreateNetworkWebhooksPayloadTemplateRequest{
        RequestBody: operations.CreateNetworkWebhooksPayloadTemplateRequestBody{
            Body: sdk.String("iure"),
            BodyFile: sdk.String("amet"),
            Headers: []CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders{
                operations.CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders{
                    Name: sdk.String("Kenneth Kulas V"),
                    Template: sdk.String("corrupti"),
                },
                operations.CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders{
                    Name: sdk.String("Adrian Haley"),
                    Template: sdk.String("voluptate"),
                },
            },
            HeadersFile: sdk.String("hic"),
            Name: "Mr. Craig O'Keefe",
        },
        NetworkID: "rerum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkWebhooksPayloadTemplate201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkWebhooksWebhookTest

Send a test webhook for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.CreateNetworkWebhooksWebhookTest(ctx, operations.CreateNetworkWebhooksWebhookTestRequest{
        RequestBody: operations.CreateNetworkWebhooksWebhookTestRequestBody{
            AlertTypeID: sdk.String("eaque"),
            PayloadTemplateID: sdk.String("reprehenderit"),
            PayloadTemplateName: sdk.String("ut"),
            SharedSecret: sdk.String("quod"),
            URL: "at",
        },
        NetworkID: "aliquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkWebhooksWebhookTest201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateOrganizationNetwork

Create a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.CreateOrganizationNetwork(ctx, operations.CreateOrganizationNetworkRequest{
        RequestBody: operations.CreateOrganizationNetworkRequestBody{
            CopyFromNetworkID: sdk.String("incidunt"),
            Name: "Todd Franey MD",
            Notes: sdk.String("sunt"),
            ProductTypes: []CreateOrganizationNetworkRequestBodyProductTypesEnum{
                operations.CreateOrganizationNetworkRequestBodyProductTypesEnumCamera,
            },
            Tags: []string{
                "illo",
                "debitis",
                "pariatur",
            },
            TimeZone: sdk.String("vel"),
        },
        OrganizationID: "atque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationNetwork201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeferNetworkFirmwareUpgradesStagedEvents

Postpone by 1 week all pending staged upgrade stages for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.DeferNetworkFirmwareUpgradesStagedEvents(ctx, operations.DeferNetworkFirmwareUpgradesStagedEventsRequest{
        NetworkID: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeferNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetwork

Delete a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.DeleteNetwork(ctx, operations.DeleteNetworkRequest{
        NetworkID: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkFirmwareUpgradesStagedGroup

Delete a Staged Upgrade Group

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.DeleteNetworkFirmwareUpgradesStagedGroup(ctx, operations.DeleteNetworkFirmwareUpgradesStagedGroupRequest{
        GroupID: "quidem",
        NetworkID: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkFloorPlan

Destroy a floor plan

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.DeleteNetworkFloorPlan(ctx, operations.DeleteNetworkFloorPlanRequest{
        FloorPlanID: "amet",
        NetworkID: "quisquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkGroupPolicy

Delete a group policy

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.DeleteNetworkGroupPolicy(ctx, operations.DeleteNetworkGroupPolicyRequest{
        GroupPolicyID: "eveniet",
        NetworkID: "possimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkMerakiAuthUser

Deauthorize a user. To reauthorize a user after deauthorizing them, POST to this endpoint. (Currently, 802.1X RADIUS, splash guest, and client VPN users can be deauthorized.)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.DeleteNetworkMerakiAuthUser(ctx, operations.DeleteNetworkMerakiAuthUserRequest{
        MerakiAuthUserID: "autem",
        NetworkID: "quas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkMqttBroker

Delete an MQTT broker

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.DeleteNetworkMqttBroker(ctx, operations.DeleteNetworkMqttBrokerRequest{
        MqttBrokerID: "odio",
        NetworkID: "harum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkPiiRequest

Delete a restrict processing PII request

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests/{requestId}
```

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.DeleteNetworkPiiRequest(ctx, operations.DeleteNetworkPiiRequestRequest{
        NetworkID: "quidem",
        RequestID: "eius",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkWebhooksHTTPServer

Delete an HTTP server from a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.DeleteNetworkWebhooksHTTPServer(ctx, operations.DeleteNetworkWebhooksHTTPServerRequest{
        HTTPServerID: "corporis",
        NetworkID: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkWebhooksPayloadTemplate

Destroy a webhook payload template for a network. Does not work for included templates ('wpt_00001', 'wpt_00002', 'wpt_00003', 'wpt_00004', 'wpt_00005' or 'wpt_00006')

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.DeleteNetworkWebhooksPayloadTemplate(ctx, operations.DeleteNetworkWebhooksPayloadTemplateRequest{
        NetworkID: "hic",
        PayloadTemplateID: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetwork

Return a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetwork(ctx, operations.GetNetworkRequest{
        NetworkID: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetwork200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkAlertsHistory

Return the alert history for this network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkAlertsHistory(ctx, operations.GetNetworkAlertsHistoryRequest{
        EndingBefore: sdk.String("harum"),
        NetworkID: "delectus",
        PerPage: sdk.Int64(269611),
        StartingAfter: sdk.String("laboriosam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkAlertsHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkAlertsSettings

Return the alert configuration for this network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkAlertsSettings(ctx, operations.GetNetworkAlertsSettingsRequest{
        NetworkID: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkAlertsSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkBluetoothClient

Return a Bluetooth client. Bluetooth clients can be identified by their ID or their MAC.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkBluetoothClient(ctx, operations.GetNetworkBluetoothClientRequest{
        BluetoothClientID: "porro",
        ConnectivityHistoryTimespan: sdk.Int64(496495),
        IncludeConnectivityHistory: sdk.Bool(false),
        NetworkID: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkBluetoothClient200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkBluetoothClients

List the Bluetooth clients seen by APs in this network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkBluetoothClients(ctx, operations.GetNetworkBluetoothClientsRequest{
        EndingBefore: sdk.String("expedita"),
        IncludeConnectivityHistory: sdk.Bool(false),
        NetworkID: "error",
        PerPage: sdk.Int64(121703),
        StartingAfter: sdk.String("placeat"),
        T0: sdk.String("dignissimos"),
        Timespan: sdk.Float32(5907.45),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkBluetoothClients200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkClient

Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkClient(ctx, operations.GetNetworkClientRequest{
        ClientID: "accusamus",
        NetworkID: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClient200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkClientPolicy

Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkClientPolicy(ctx, operations.GetNetworkClientPolicyRequest{
        ClientID: "laboriosam",
        NetworkID: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkClientSplashAuthorizationStatus

Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkClientSplashAuthorizationStatus(ctx, operations.GetNetworkClientSplashAuthorizationStatusRequest{
        ClientID: "quibusdam",
        NetworkID: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientSplashAuthorizationStatus200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkClientTrafficHistory

Return the client's network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide > General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkClientTrafficHistory(ctx, operations.GetNetworkClientTrafficHistoryRequest{
        ClientID: "adipisci",
        EndingBefore: sdk.String("quia"),
        NetworkID: "amet",
        PerPage: sdk.Int64(505366),
        StartingAfter: sdk.String("reprehenderit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientTrafficHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkClientUsageHistory

Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkClientUsageHistory(ctx, operations.GetNetworkClientUsageHistoryRequest{
        ClientID: "enim",
        NetworkID: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientUsageHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkClients

List the clients that have used this network in the timespan

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkClients(ctx, operations.GetNetworkClientsRequest{
        Description: sdk.String("labore"),
        EndingBefore: sdk.String("animi"),
        IP: sdk.String("magni"),
        Ip6: sdk.String("earum"),
        Ip6Local: sdk.String("corrupti"),
        Mac: sdk.String("voluptate"),
        NetworkID: "quibusdam",
        Os: sdk.String("voluptatum"),
        PerPage: sdk.Int64(496921),
        RecentDeviceConnections: []GetNetworkClientsRecentDeviceConnectionsEnum{
            operations.GetNetworkClientsRecentDeviceConnectionsEnumWired,
            operations.GetNetworkClientsRecentDeviceConnectionsEnumWired,
            operations.GetNetworkClientsRecentDeviceConnectionsEnumWireless,
        },
        StartingAfter: sdk.String("dolores"),
        Statuses: []GetNetworkClientsStatusesEnum{
            operations.GetNetworkClientsStatusesEnumOnline,
        },
        T0: sdk.String("iusto"),
        Timespan: sdk.Float32(4753.57),
        Vlan: sdk.String("optio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClients200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkClientsApplicationUsage

Return the application usage data for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkClientsApplicationUsage(ctx, operations.GetNetworkClientsApplicationUsageRequest{
        Clients: "sit",
        EndingBefore: sdk.String("necessitatibus"),
        NetworkID: "autem",
        PerPage: sdk.Int64(927781),
        SsidNumber: operations.GetNetworkClientsApplicationUsageSsidNumberEnumOne.ToPointer(),
        StartingAfter: sdk.String("vitae"),
        T0: sdk.String("porro"),
        T1: sdk.String("atque"),
        Timespan: sdk.Float32(5470.97),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientsApplicationUsage200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkClientsBandwidthUsageHistory

Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkClientsBandwidthUsageHistory(ctx, operations.GetNetworkClientsBandwidthUsageHistoryRequest{
        EndingBefore: sdk.String("dolorem"),
        NetworkID: "ratione",
        PerPage: sdk.Int64(177168),
        StartingAfter: sdk.String("laboriosam"),
        T0: sdk.String("pariatur"),
        T1: sdk.String("minus"),
        Timespan: sdk.Float32(3690.73),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientsBandwidthUsageHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkClientsOverview

Return overview statistics for network clients

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkClientsOverview(ctx, operations.GetNetworkClientsOverviewRequest{
        NetworkID: "harum",
        Resolution: sdk.Int64(106063),
        T0: sdk.String("aperiam"),
        T1: sdk.String("ipsum"),
        Timespan: sdk.Float32(319.34),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientsOverview200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkClientsUsageHistories

Return the usage histories for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkClientsUsageHistories(ctx, operations.GetNetworkClientsUsageHistoriesRequest{
        Clients: "suscipit",
        EndingBefore: sdk.String("in"),
        NetworkID: "mollitia",
        PerPage: sdk.Int64(548574),
        SsidNumber: operations.GetNetworkClientsUsageHistoriesSsidNumberEnumNine.ToPointer(),
        StartingAfter: sdk.String("excepturi"),
        T0: sdk.String("recusandae"),
        T1: sdk.String("aspernatur"),
        Timespan: sdk.Float32(3152.94),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientsUsageHistories200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkDevices

List the devices in a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkDevices(ctx, operations.GetNetworkDevicesRequest{
        NetworkID: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkDevices200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkEvents

List the events for the network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkEvents(ctx, operations.GetNetworkEventsRequest{
        ClientIP: sdk.String("aliquid"),
        ClientMac: sdk.String("dolorum"),
        ClientName: sdk.String("ut"),
        DeviceMac: sdk.String("quisquam"),
        DeviceName: sdk.String("dicta"),
        DeviceSerial: sdk.String("non"),
        EndingBefore: sdk.String("sapiente"),
        ExcludedEventTypes: []string{
            "quasi",
            "molestias",
            "molestiae",
            "tempora",
        },
        IncludedEventTypes: []string{
            "molestiae",
            "rerum",
            "architecto",
        },
        NetworkID: "tempora",
        PerPage: sdk.Int64(10625),
        ProductType: operations.GetNetworkEventsProductTypeEnumSwitch.ToPointer(),
        SmDeviceMac: sdk.String("et"),
        SmDeviceName: sdk.String("laboriosam"),
        StartingAfter: sdk.String("velit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkEvents200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkEventsEventTypes

List the event type to human-readable description

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkEventsEventTypes(ctx, operations.GetNetworkEventsEventTypesRequest{
        NetworkID: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkEventsEventTypes200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkFirmwareUpgrades

Get firmware upgrade information for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkFirmwareUpgrades(ctx, operations.GetNetworkFirmwareUpgradesRequest{
        NetworkID: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkFirmwareUpgrades200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkFirmwareUpgradesStagedEvents

Get the Staged Upgrade Event from a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkFirmwareUpgradesStagedEvents(ctx, operations.GetNetworkFirmwareUpgradesStagedEventsRequest{
        NetworkID: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkFirmwareUpgradesStagedGroup

Get a Staged Upgrade Group from a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkFirmwareUpgradesStagedGroup(ctx, operations.GetNetworkFirmwareUpgradesStagedGroupRequest{
        GroupID: "laboriosam",
        NetworkID: "ex",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkFirmwareUpgradesStagedGroups

List of Staged Upgrade Groups in a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkFirmwareUpgradesStagedGroups(ctx, operations.GetNetworkFirmwareUpgradesStagedGroupsRequest{
        NetworkID: "voluptatem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkFirmwareUpgradesStagedGroups200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkFirmwareUpgradesStagedStages

Order of Staged Upgrade Groups in a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkFirmwareUpgradesStagedStages(ctx, operations.GetNetworkFirmwareUpgradesStagedStagesRequest{
        NetworkID: "alias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkFirmwareUpgradesStagedStages200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkFloorPlan

Find a floor plan by ID

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkFloorPlan(ctx, operations.GetNetworkFloorPlanRequest{
        FloorPlanID: "reprehenderit",
        NetworkID: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkFloorPlan200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkFloorPlans

List the floor plans that belong to your network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkFloorPlans(ctx, operations.GetNetworkFloorPlansRequest{
        NetworkID: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkFloorPlans200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkGroupPolicies

List the group policies in a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkGroupPolicies(ctx, operations.GetNetworkGroupPoliciesRequest{
        NetworkID: "eaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkGroupPolicies200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkGroupPolicy

Display a group policy

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkGroupPolicy(ctx, operations.GetNetworkGroupPolicyRequest{
        GroupPolicyID: "soluta",
        NetworkID: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkGroupPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkHealthAlerts

Return all global alerts on this network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkHealthAlerts(ctx, operations.GetNetworkHealthAlertsRequest{
        NetworkID: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkHealthAlerts200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkMerakiAuthUser

Return the Meraki Auth splash guest, RADIUS, or client VPN user

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkMerakiAuthUser(ctx, operations.GetNetworkMerakiAuthUserRequest{
        MerakiAuthUserID: "officiis",
        NetworkID: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkMerakiAuthUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkMerakiAuthUsers

List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkMerakiAuthUsers(ctx, operations.GetNetworkMerakiAuthUsersRequest{
        NetworkID: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkMerakiAuthUsers200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkMqttBroker

Return an MQTT broker

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkMqttBroker(ctx, operations.GetNetworkMqttBrokerRequest{
        MqttBrokerID: "ad",
        NetworkID: "consequatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkMqttBroker200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkMqttBrokers

List the MQTT brokers for this network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkMqttBrokers(ctx, operations.GetNetworkMqttBrokersRequest{
        NetworkID: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkMqttBrokers200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkNetflow

Return the NetFlow traffic reporting settings for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkNetflow(ctx, operations.GetNetworkNetflowRequest{
        NetworkID: "animi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkNetflow200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkNetworkHealthChannelUtilization

Get the channel utilization over each radio for all APs in a network.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkNetworkHealthChannelUtilization(ctx, operations.GetNetworkNetworkHealthChannelUtilizationRequest{
        EndingBefore: sdk.String("modi"),
        NetworkID: "labore",
        PerPage: sdk.Int64(68571),
        Resolution: sdk.Int64(69879),
        StartingAfter: sdk.String("perferendis"),
        T0: sdk.String("architecto"),
        T1: sdk.String("porro"),
        Timespan: sdk.Float32(667.33),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkNetworkHealthChannelUtilization200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkPiiPiiKeys

List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key "0" containing the applicable keys.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/piiKeys
```

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkPiiPiiKeys(ctx, operations.GetNetworkPiiPiiKeysRequest{
        BluetoothMac: sdk.String("ipsum"),
        Email: sdk.String("Moses.Hackett@yahoo.com"),
        Imei: sdk.String("natus"),
        Mac: sdk.String("fugit"),
        NetworkID: "non",
        Serial: sdk.String("temporibus"),
        Username: sdk.String("Enrique.Bahringer36"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkPiiPiiKeys200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkPiiRequest

Return a PII request

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests/{requestId}
```

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkPiiRequest(ctx, operations.GetNetworkPiiRequestRequest{
        NetworkID: "illo",
        RequestID: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkPiiRequest200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkPiiRequests

List the PII requests for this network or organization

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests
```

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkPiiRequests(ctx, operations.GetNetworkPiiRequestsRequest{
        NetworkID: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkPiiRequests200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkPiiSmDevicesForKey

Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/smDevicesForKey
```

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkPiiSmDevicesForKey(ctx, operations.GetNetworkPiiSmDevicesForKeyRequest{
        BluetoothMac: sdk.String("praesentium"),
        Email: sdk.String("Madelynn63@yahoo.com"),
        Imei: sdk.String("corrupti"),
        Mac: sdk.String("voluptas"),
        NetworkID: "eligendi",
        Serial: sdk.String("porro"),
        Username: sdk.String("Cierra_Okuneva55"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkPiiSmDevicesForKey200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkPiiSmOwnersForKey

Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/smOwnersForKey
```

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkPiiSmOwnersForKey(ctx, operations.GetNetworkPiiSmOwnersForKeyRequest{
        BluetoothMac: sdk.String("ullam"),
        Email: sdk.String("Isabella.Casper42@gmail.com"),
        Imei: sdk.String("nemo"),
        Mac: sdk.String("adipisci"),
        NetworkID: "excepturi",
        Serial: sdk.String("consequatur"),
        Username: sdk.String("Camron_Gorczany3"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkPiiSmOwnersForKey200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkPoliciesByClient

Get policies for all clients with policies

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkPoliciesByClient(ctx, operations.GetNetworkPoliciesByClientRequest{
        EndingBefore: sdk.String("provident"),
        NetworkID: "assumenda",
        PerPage: sdk.Int64(4650),
        StartingAfter: sdk.String("a"),
        T0: sdk.String("quisquam"),
        Timespan: sdk.Float32(4124.34),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkPoliciesByClient200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSettings

Return the settings for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkSettings(ctx, operations.GetNetworkSettingsRequest{
        NetworkID: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSnmp

Return the SNMP settings for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkSnmp(ctx, operations.GetNetworkSnmpRequest{
        NetworkID: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSnmp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSplashLoginAttempts

List the splash login attempts for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkSplashLoginAttempts(ctx, operations.GetNetworkSplashLoginAttemptsRequest{
        LoginIdentifier: sdk.String("a"),
        NetworkID: "doloribus",
        SsidNumber: operations.GetNetworkSplashLoginAttemptsSsidNumberEnumSeven.ToPointer(),
        Timespan: sdk.Int64(941780),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSplashLoginAttempts200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSyslogServers

List the syslog servers for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkSyslogServers(ctx, operations.GetNetworkSyslogServersRequest{
        NetworkID: "eveniet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSyslogServers200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkTopologyLinkLayer

List the LLDP and CDP information for all discovered devices and connections in a network.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkTopologyLinkLayer(ctx, operations.GetNetworkTopologyLinkLayerRequest{
        NetworkID: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkTopologyLinkLayer200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkTraffic

Return the traffic analysis data for this network. Traffic analysis with hostname visibility must be enabled on the network.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkTraffic(ctx, operations.GetNetworkTrafficRequest{
        DeviceType: operations.GetNetworkTrafficDeviceTypeEnumWireless.ToPointer(),
        NetworkID: "eaque",
        T0: sdk.String("officiis"),
        Timespan: sdk.Float32(2694.99),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkTraffic200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkTrafficAnalysis

Return the traffic analysis settings for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkTrafficAnalysis(ctx, operations.GetNetworkTrafficAnalysisRequest{
        NetworkID: "voluptas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkTrafficAnalysis200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkTrafficShapingApplicationCategories

Returns the application categories for traffic shaping rules.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkTrafficShapingApplicationCategories(ctx, operations.GetNetworkTrafficShapingApplicationCategoriesRequest{
        NetworkID: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkTrafficShapingApplicationCategories200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkTrafficShapingDscpTaggingOptions

Returns the available DSCP tagging options for your traffic shaping rules.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkTrafficShapingDscpTaggingOptions(ctx, operations.GetNetworkTrafficShapingDscpTaggingOptionsRequest{
        NetworkID: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkTrafficShapingDscpTaggingOptions200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWebhooksHTTPServer

Return an HTTP server for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkWebhooksHTTPServer(ctx, operations.GetNetworkWebhooksHTTPServerRequest{
        HTTPServerID: "fugit",
        NetworkID: "exercitationem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWebhooksHTTPServer200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWebhooksHTTPServers

List the HTTP servers for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkWebhooksHTTPServers(ctx, operations.GetNetworkWebhooksHTTPServersRequest{
        NetworkID: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWebhooksHTTPServers200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWebhooksPayloadTemplate

Get the webhook payload template for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkWebhooksPayloadTemplate(ctx, operations.GetNetworkWebhooksPayloadTemplateRequest{
        NetworkID: "aspernatur",
        PayloadTemplateID: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWebhooksPayloadTemplate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWebhooksPayloadTemplates

List the webhook payload templates for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkWebhooksPayloadTemplates(ctx, operations.GetNetworkWebhooksPayloadTemplatesRequest{
        NetworkID: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWebhooksPayloadTemplates200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWebhooksWebhookTest

Return the status of a webhook test for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetNetworkWebhooksWebhookTest(ctx, operations.GetNetworkWebhooksWebhookTestRequest{
        NetworkID: "reprehenderit",
        WebhookTestID: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWebhooksWebhookTest200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationInventoryOnboardingCloudMonitoringNetworks

Returns list of networks eligible for adding cloud monitored device

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetOrganizationInventoryOnboardingCloudMonitoringNetworks(ctx, operations.GetOrganizationInventoryOnboardingCloudMonitoringNetworksRequest{
        DeviceType: operations.GetOrganizationInventoryOnboardingCloudMonitoringNetworksDeviceTypeEnumWirelessController,
        EndingBefore: sdk.String("non"),
        OrganizationID: "excepturi",
        PerPage: sdk.Int64(819983),
        StartingAfter: sdk.String("blanditiis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationInventoryOnboardingCloudMonitoringNetworks202ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationNetworks

List the networks that the user has privileges on in an organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.GetOrganizationNetworks(ctx, operations.GetOrganizationNetworksRequest{
        ConfigTemplateID: sdk.String("esse"),
        EndingBefore: sdk.String("omnis"),
        IsBoundToConfigTemplate: sdk.Bool(false),
        OrganizationID: "consequatur",
        PerPage: sdk.Int64(907495),
        StartingAfter: sdk.String("sed"),
        Tags: []string{
            "autem",
            "eaque",
            "inventore",
            "labore",
        },
        TagsFilterType: operations.GetOrganizationNetworksTagsFilterTypeEnumWithAnyTags.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationNetworks200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## ProvisionNetworkClients

Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.ProvisionNetworkClients(ctx, operations.ProvisionNetworkClientsRequest{
        RequestBody: operations.ProvisionNetworkClientsRequestBody{
            Clients: []ProvisionNetworkClientsRequestBodyClients{
                operations.ProvisionNetworkClientsRequestBodyClients{
                    Mac: "sequi",
                    Name: sdk.String("Miss Enrique Kshlerin"),
                },
            },
            DevicePolicy: operations.ProvisionNetworkClientsRequestBodyDevicePolicyEnumNormal,
            GroupPolicyID: sdk.String("minima"),
            PoliciesBySecurityAppliance: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance{
                DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnumAllowed.ToPointer(),
            },
            PoliciesBySsid: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid{
                Zero: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid0{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnumAllowed,
                    GroupPolicyID: sdk.String("rerum"),
                },
                One: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid1{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnumNormal,
                    GroupPolicyID: sdk.String("cum"),
                },
                Ten: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid10{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnumAllowed,
                    GroupPolicyID: sdk.String("doloremque"),
                },
                Eleven: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid11{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnumNormal,
                    GroupPolicyID: sdk.String("possimus"),
                },
                Twelve: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid12{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnumGroupPolicy,
                    GroupPolicyID: sdk.String("dolor"),
                },
                Thirteen: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid13{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnumNormal,
                    GroupPolicyID: sdk.String("rem"),
                },
                Fourteen: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid14{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnumNormal,
                    GroupPolicyID: sdk.String("veniam"),
                },
                Two: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid2{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnumNormal,
                    GroupPolicyID: sdk.String("dolor"),
                },
                Three: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid3{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnumGroupPolicy,
                    GroupPolicyID: sdk.String("explicabo"),
                },
                Four: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid4{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnumNormal,
                    GroupPolicyID: sdk.String("fugit"),
                },
                Five: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid5{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnumAllowed,
                    GroupPolicyID: sdk.String("dolorum"),
                },
                Six: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid6{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnumBlocked,
                    GroupPolicyID: sdk.String("ducimus"),
                },
                Seven: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid7{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnumNormal,
                    GroupPolicyID: sdk.String("rerum"),
                },
                Eight: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid8{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnumBlocked,
                    GroupPolicyID: sdk.String("deserunt"),
                },
                Nine: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid9{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnumNormal,
                    GroupPolicyID: sdk.String("ab"),
                },
            },
        },
        NetworkID: "tempore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProvisionNetworkClients201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RemoveNetworkDevices

Remove a single device

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.RemoveNetworkDevices(ctx, operations.RemoveNetworkDevicesRequest{
        RequestBody: operations.RemoveNetworkDevicesRequestBody{
            Serial: "suscipit",
        },
        NetworkID: "neque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RollbacksNetworkFirmwareUpgradesStagedEvents

Rollback a Staged Upgrade Event for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.RollbacksNetworkFirmwareUpgradesStagedEvents(ctx, operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequest{
        RequestBody: operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBody{
            Reasons: []RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons{
                operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons{
                    Category: operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnumTesting,
                    Comment: "pariatur",
                },
                operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons{
                    Category: operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnumUnifyingNetworksVersions,
                    Comment: "alias",
                },
                operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons{
                    Category: operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnumStability,
                    Comment: "aperiam",
                },
                operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons{
                    Category: operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnumUnifyingNetworksVersions,
                    Comment: "rerum",
                },
            },
            Stages: []RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                    Group: &operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup{
                        ID: "0c05636c-53d4-4159-955c-5c717604597f",
                    },
                    Milestones: &operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones{
                        ScheduledFor: "consectetur",
                    },
                },
                operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                    Group: &operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup{
                        ID: "7719dd8c-8482-4c02-a5d9-2c4c8c9f8a0a",
                    },
                    Milestones: &operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones{
                        ScheduledFor: "impedit",
                    },
                },
                operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                    Group: &operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup{
                        ID: "1e04d2ac-eb0c-4de0-8e8e-cf818a9303e9",
                    },
                    Milestones: &operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones{
                        ScheduledFor: "dolorem",
                    },
                },
            },
        },
        NetworkID: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SplitNetwork

Split a combined network into individual networks for each type of device

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.SplitNetwork(ctx, operations.SplitNetworkRequest{
        NetworkID: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SplitNetwork200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UnbindNetwork

Unbind a network from a template.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.UnbindNetwork(ctx, operations.UnbindNetworkRequest{
        RequestBody: &operations.UnbindNetworkRequestBody{
            RetainConfigs: sdk.Bool(false),
        },
        NetworkID: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UnbindNetwork200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetwork

Update a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.UpdateNetwork(ctx, operations.UpdateNetworkRequest{
        RequestBody: &operations.UpdateNetworkRequestBody{
            EnrollmentString: sdk.String("culpa"),
            Name: sdk.String("Mr. Leona Rath"),
            Notes: sdk.String("consequatur"),
            Tags: []string{
                "nulla",
                "modi",
            },
            TimeZone: sdk.String("temporibus"),
        },
        NetworkID: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetwork200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkAlertsSettings

Update the alert configuration for this network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.UpdateNetworkAlertsSettings(ctx, operations.UpdateNetworkAlertsSettingsRequest{
        RequestBody: &operations.UpdateNetworkAlertsSettingsRequestBody{
            Alerts: []UpdateNetworkAlertsSettingsRequestBodyAlerts{
                operations.UpdateNetworkAlertsSettingsRequestBodyAlerts{
                    AlertDestinations: &operations.UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations{
                        AllAdmins: sdk.Bool(false),
                        Emails: []string{
                            "ullam",
                            "consequuntur",
                            "assumenda",
                        },
                        HTTPServerIds: []string{
                            "praesentium",
                        },
                        Snmp: sdk.Bool(false),
                    },
                    Enabled: sdk.Bool(false),
                    Filters: map[string]interface{}{
                        "voluptates": "ab",
                        "at": "expedita",
                        "ipsa": "ab",
                    },
                    Type: "at",
                },
                operations.UpdateNetworkAlertsSettingsRequestBodyAlerts{
                    AlertDestinations: &operations.UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations{
                        AllAdmins: sdk.Bool(false),
                        Emails: []string{
                            "error",
                            "sunt",
                        },
                        HTTPServerIds: []string{
                            "doloribus",
                            "praesentium",
                            "consectetur",
                        },
                        Snmp: sdk.Bool(false),
                    },
                    Enabled: sdk.Bool(false),
                    Filters: map[string]interface{}{
                        "nemo": "cupiditate",
                    },
                    Type: "dolorem",
                },
            },
            DefaultDestinations: &operations.UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations{
                AllAdmins: sdk.Bool(false),
                Emails: []string{
                    "atque",
                    "dolore",
                    "repudiandae",
                },
                HTTPServerIds: []string{
                    "iusto",
                    "pariatur",
                    "soluta",
                },
                Snmp: sdk.Bool(false),
            },
        },
        NetworkID: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkAlertsSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkClientPolicy

Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.UpdateNetworkClientPolicy(ctx, operations.UpdateNetworkClientPolicyRequest{
        RequestBody: operations.UpdateNetworkClientPolicyRequestBody{
            DevicePolicy: "ullam",
            GroupPolicyID: sdk.String("quod"),
        },
        ClientID: "ut",
        NetworkID: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkClientPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkClientSplashAuthorizationStatus

Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.UpdateNetworkClientSplashAuthorizationStatus(ctx, operations.UpdateNetworkClientSplashAuthorizationStatusRequest{
        RequestBody: operations.UpdateNetworkClientSplashAuthorizationStatusRequestBody{
            Ssids: operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids{
                Zero: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0{
                    IsAuthorized: sdk.Bool(false),
                },
                One: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1{
                    IsAuthorized: sdk.Bool(false),
                },
                Ten: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10{
                    IsAuthorized: sdk.Bool(false),
                },
                Eleven: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11{
                    IsAuthorized: sdk.Bool(false),
                },
                Twelve: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12{
                    IsAuthorized: sdk.Bool(false),
                },
                Thirteen: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13{
                    IsAuthorized: sdk.Bool(false),
                },
                Fourteen: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14{
                    IsAuthorized: sdk.Bool(false),
                },
                Two: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2{
                    IsAuthorized: sdk.Bool(false),
                },
                Three: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3{
                    IsAuthorized: sdk.Bool(false),
                },
                Four: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4{
                    IsAuthorized: sdk.Bool(false),
                },
                Five: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5{
                    IsAuthorized: sdk.Bool(false),
                },
                Six: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6{
                    IsAuthorized: sdk.Bool(false),
                },
                Seven: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7{
                    IsAuthorized: sdk.Bool(false),
                },
                Eight: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8{
                    IsAuthorized: sdk.Bool(false),
                },
                Nine: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9{
                    IsAuthorized: sdk.Bool(false),
                },
            },
        },
        ClientID: "quasi",
        NetworkID: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkClientSplashAuthorizationStatus200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkFirmwareUpgrades

Update firmware upgrade information for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.UpdateNetworkFirmwareUpgrades(ctx, operations.UpdateNetworkFirmwareUpgradesRequest{
        RequestBody: &operations.UpdateNetworkFirmwareUpgradesRequestBody{
            Products: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProducts{
                Appliance: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance{
                    NextUpgrade: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade{
                        Time: sdk.String("reiciendis"),
                        ToVersion: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion{
                            ID: sdk.String("e6cd097a-6755-497e-8beb-7982baf9a7da"),
                        },
                    },
                    ParticipateInNextBetaRelease: sdk.Bool(false),
                },
                Camera: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera{
                    NextUpgrade: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade{
                        Time: sdk.String("ex"),
                        ToVersion: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion{
                            ID: sdk.String("c29b938e-51a7-4e6e-96f7-ff04fda04669"),
                        },
                    },
                    ParticipateInNextBetaRelease: sdk.Bool(false),
                },
                CellularGateway: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway{
                    NextUpgrade: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade{
                        Time: sdk.String("officiis"),
                        ToVersion: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion{
                            ID: sdk.String("ae818240-3655-4aa9-a3c4-9919ebd1cf77"),
                        },
                    },
                    ParticipateInNextBetaRelease: sdk.Bool(false),
                },
                Sensor: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor{
                    NextUpgrade: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade{
                        Time: sdk.String("iste"),
                        ToVersion: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion{
                            ID: sdk.String("538cbbfc-df4e-4ce9-aac4-fb42c3304961"),
                        },
                    },
                    ParticipateInNextBetaRelease: sdk.Bool(false),
                },
                Switch: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch{
                    NextUpgrade: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade{
                        Time: sdk.String("reprehenderit"),
                        ToVersion: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion{
                            ID: sdk.String("cb71ddc2-50b6-40c7-91d2-aebe8b9828e2"),
                        },
                    },
                    ParticipateInNextBetaRelease: sdk.Bool(false),
                },
                Wireless: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless{
                    NextUpgrade: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade{
                        Time: sdk.String("vel"),
                        ToVersion: &operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion{
                            ID: sdk.String("471a5ecb-87f7-494f-84f4-1446f793d3b1"),
                        },
                    },
                    ParticipateInNextBetaRelease: sdk.Bool(false),
                },
            },
            Timezone: sdk.String("aperiam"),
            UpgradeWindow: &operations.UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow{
                DayOfWeek: operations.UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnumFri.ToPointer(),
                HourOfDay: operations.UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnumTwelve00.ToPointer(),
            },
        },
        NetworkID: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkFirmwareUpgrades200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkFirmwareUpgradesStagedEvents

Update the Staged Upgrade Event for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.UpdateNetworkFirmwareUpgradesStagedEvents(ctx, operations.UpdateNetworkFirmwareUpgradesStagedEventsRequest{
        RequestBody: operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBody{
            Stages: []UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages{
                    Group: &operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup{
                        ID: "47cd1b83-160b-43e3-a989-60a0aafc7a86",
                    },
                    Milestones: &operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones{
                        ScheduledFor: "esse",
                    },
                },
            },
        },
        NetworkID: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkFirmwareUpgradesStagedGroup

Update a Staged Upgrade Group for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.UpdateNetworkFirmwareUpgradesStagedGroup(ctx, operations.UpdateNetworkFirmwareUpgradesStagedGroupRequest{
        RequestBody: operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBody{
            AssignedDevices: &operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices{
                Devices: []UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices{
                    operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices{
                        Name: sdk.String("Miss Leo Beer"),
                        Serial: "hic",
                    },
                    operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices{
                        Name: sdk.String("Brooke Rogahn"),
                        Serial: "eveniet",
                    },
                    operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices{
                        Name: sdk.String("Reginald Rowe"),
                        Serial: "qui",
                    },
                },
                SwitchStacks: []UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks{
                    operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks{
                        ID: "5d556158-8032-412f-bb59-b7154642b9e3",
                        Name: sdk.String("Rachael MacGyver"),
                    },
                },
            },
            Description: sdk.String("sequi"),
            IsDefault: false,
            Name: "Manuel Runolfsdottir",
        },
        GroupID: "sint",
        NetworkID: "illo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkFirmwareUpgradesStagedStages

Assign Staged Upgrade Group order in the sequence.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.UpdateNetworkFirmwareUpgradesStagedStages(ctx, operations.UpdateNetworkFirmwareUpgradesStagedStagesRequest{
        RequestBody: &operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBody{
            JSON: []UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJSON{
                operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJSON{
                    Group: &operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJSONGroup{
                        ID: "3797888d-156f-401a-a36b-b8d0028e3e1d",
                    },
                },
                operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJSON{
                    Group: &operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJSONGroup{
                        ID: "c9059f7e-f0f1-4385-b67c-24673ac98f6d",
                    },
                },
                operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJSON{
                    Group: &operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJSONGroup{
                        ID: "268f92a6-bb08-4615-a225-b05728e7a201",
                    },
                },
            },
        },
        NetworkID: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkFirmwareUpgradesStagedStages200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateNetworkFloorPlan

Update a floor plan's geolocation and other meta data

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.UpdateNetworkFloorPlan(ctx, operations.UpdateNetworkFloorPlanRequest{
        RequestBody: &operations.UpdateNetworkFloorPlanRequestBody{
            BottomLeftCorner: &operations.UpdateNetworkFloorPlanRequestBodyBottomLeftCorner{
                Lat: sdk.Float32(7591.65),
                Lng: sdk.Float32(9676.09),
            },
            BottomRightCorner: &operations.UpdateNetworkFloorPlanRequestBodyBottomRightCorner{
                Lat: sdk.Float32(7488.76),
                Lng: sdk.Float32(4507.8),
            },
            Center: &operations.UpdateNetworkFloorPlanRequestBodyCenter{
                Lat: sdk.Float32(2969.64),
                Lng: sdk.Float32(9858.84),
            },
            ImageContents: sdk.String("dolorum"),
            Name: sdk.String("Terrell Hane"),
            TopLeftCorner: &operations.UpdateNetworkFloorPlanRequestBodyTopLeftCorner{
                Lat: sdk.Float32(2954.18),
                Lng: sdk.Float32(9762.41),
            },
            TopRightCorner: &operations.UpdateNetworkFloorPlanRequestBodyTopRightCorner{
                Lat: sdk.Float32(1332.3),
                Lng: sdk.Float32(7111.22),
            },
        },
        FloorPlanID: "eaque",
        NetworkID: "culpa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkFloorPlan200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkGroupPolicy

Update a group policy

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.UpdateNetworkGroupPolicy(ctx, operations.UpdateNetworkGroupPolicyRequest{
        RequestBody: &operations.UpdateNetworkGroupPolicyRequestBody{
            Bandwidth: &operations.UpdateNetworkGroupPolicyRequestBodyBandwidth{
                BandwidthLimits: &operations.UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits{
                    LimitDown: sdk.Int64(503728),
                    LimitUp: sdk.Int64(357843),
                },
                Settings: operations.UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnumIgnore.ToPointer(),
            },
            BonjourForwarding: &operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwarding{
                Rules: []UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules{
                    operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules{
                        Description: sdk.String("nobis"),
                        Services: []UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum{
                            operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumScanners,
                            operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumSSH,
                            operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumAfp,
                            operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumITunes,
                        },
                        VlanID: "reiciendis",
                    },
                    operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules{
                        Description: sdk.String("sequi"),
                        Services: []UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum{
                            operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumSamba,
                            operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumFtp,
                        },
                        VlanID: "et",
                    },
                    operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules{
                        Description: sdk.String("sint"),
                        Services: []UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum{
                            operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnumAfp,
                        },
                        VlanID: "neque",
                    },
                },
                Settings: operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnumNetworkDefault.ToPointer(),
            },
            ContentFiltering: &operations.UpdateNetworkGroupPolicyRequestBodyContentFiltering{
                AllowedURLPatterns: &operations.UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatterns{
                    Patterns: []string{
                        "ratione",
                    },
                    Settings: operations.UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnumAppend.ToPointer(),
                },
                BlockedURLCategories: &operations.UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategories{
                    Categories: []string{
                        "blanditiis",
                        "velit",
                        "porro",
                        "commodi",
                    },
                    Settings: operations.UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnumOverride.ToPointer(),
                },
                BlockedURLPatterns: &operations.UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatterns{
                    Patterns: []string{
                        "ex",
                    },
                    Settings: operations.UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnumNetworkDefault.ToPointer(),
                },
            },
            FirewallAndTrafficShaping: &operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping{
                L3FirewallRules: []UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules{
                    operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules{
                        Comment: sdk.String("voluptas"),
                        DestCidr: "expedita",
                        DestPort: sdk.String("adipisci"),
                        Policy: "error",
                        Protocol: "quibusdam",
                    },
                    operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules{
                        Comment: sdk.String("ullam"),
                        DestCidr: "rerum",
                        DestPort: sdk.String("repellat"),
                        Policy: "nihil",
                        Protocol: "unde",
                    },
                },
                L7FirewallRules: []UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules{
                    operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules{
                        Policy: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnumDeny.ToPointer(),
                        Type: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnumApplication.ToPointer(),
                        Value: sdk.String("at"),
                    },
                    operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules{
                        Policy: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnumDeny.ToPointer(),
                        Type: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnumApplicationCategory.ToPointer(),
                        Value: sdk.String("autem"),
                    },
                },
                Settings: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnumNetworkDefault.ToPointer(),
                TrafficShapingRules: []UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules{
                    operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules{
                        Definitions: []UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                            operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumApplicationCategory,
                                Value: "iste",
                            },
                        },
                        DscpTagValue: sdk.Int64(833921),
                        PcpTagValue: sdk.Int64(253573),
                        PerClientBandwidthLimits: &operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits{
                            BandwidthLimits: &operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits{
                                LimitDown: sdk.Int64(549905),
                                LimitUp: sdk.Int64(565293),
                            },
                            Settings: sdk.String("animi"),
                        },
                        Priority: sdk.String("hic"),
                    },
                    operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules{
                        Definitions: []UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                            operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumApplication,
                                Value: "perferendis",
                            },
                            operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions{
                                Type: operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnumHost,
                                Value: "magnam",
                            },
                        },
                        DscpTagValue: sdk.Int64(379655),
                        PcpTagValue: sdk.Int64(20672),
                        PerClientBandwidthLimits: &operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits{
                            BandwidthLimits: &operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits{
                                LimitDown: sdk.Int64(719596),
                                LimitUp: sdk.Int64(29928),
                            },
                            Settings: sdk.String("ullam"),
                        },
                        Priority: sdk.String("doloribus"),
                    },
                },
            },
            Name: sdk.String("Ann Trantow"),
            Scheduling: &operations.UpdateNetworkGroupPolicyRequestBodyScheduling{
                Enabled: sdk.Bool(false),
                Friday: &operations.UpdateNetworkGroupPolicyRequestBodySchedulingFriday{
                    Active: sdk.Bool(false),
                    From: sdk.String("temporibus"),
                    To: sdk.String("totam"),
                },
                Monday: &operations.UpdateNetworkGroupPolicyRequestBodySchedulingMonday{
                    Active: sdk.Bool(false),
                    From: sdk.String("autem"),
                    To: sdk.String("ut"),
                },
                Saturday: &operations.UpdateNetworkGroupPolicyRequestBodySchedulingSaturday{
                    Active: sdk.Bool(false),
                    From: sdk.String("non"),
                    To: sdk.String("excepturi"),
                },
                Sunday: &operations.UpdateNetworkGroupPolicyRequestBodySchedulingSunday{
                    Active: sdk.Bool(false),
                    From: sdk.String("commodi"),
                    To: sdk.String("voluptatum"),
                },
                Thursday: &operations.UpdateNetworkGroupPolicyRequestBodySchedulingThursday{
                    Active: sdk.Bool(false),
                    From: sdk.String("possimus"),
                    To: sdk.String("temporibus"),
                },
                Tuesday: &operations.UpdateNetworkGroupPolicyRequestBodySchedulingTuesday{
                    Active: sdk.Bool(false),
                    From: sdk.String("aperiam"),
                    To: sdk.String("repellendus"),
                },
                Wednesday: &operations.UpdateNetworkGroupPolicyRequestBodySchedulingWednesday{
                    Active: sdk.Bool(false),
                    From: sdk.String("odio"),
                    To: sdk.String("in"),
                },
            },
            SplashAuthSettings: operations.UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnumBypass.ToPointer(),
            VlanTagging: &operations.UpdateNetworkGroupPolicyRequestBodyVlanTagging{
                Settings: operations.UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnumIgnore.ToPointer(),
                VlanID: sdk.String("ipsa"),
            },
        },
        GroupPolicyID: "quam",
        NetworkID: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkGroupPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkMerakiAuthUser

Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.UpdateNetworkMerakiAuthUser(ctx, operations.UpdateNetworkMerakiAuthUserRequest{
        RequestBody: &operations.UpdateNetworkMerakiAuthUserRequestBody{
            Authorizations: []UpdateNetworkMerakiAuthUserRequestBodyAuthorizations{
                operations.UpdateNetworkMerakiAuthUserRequestBodyAuthorizations{
                    ExpiresAt: sdk.String("aut"),
                    SsidNumber: 483599,
                },
            },
            EmailPasswordToUser: sdk.Bool(false),
            Name: sdk.String("Rachael Lockman"),
            Password: sdk.String("facere"),
        },
        MerakiAuthUserID: "necessitatibus",
        NetworkID: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkMerakiAuthUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkMqttBroker

Update an MQTT broker

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.UpdateNetworkMqttBroker(ctx, operations.UpdateNetworkMqttBrokerRequest{
        RequestBody: &operations.UpdateNetworkMqttBrokerRequestBody{
            Authentication: map[string]interface{}{
                "occaecati": "qui",
                "a": "iste",
            },
            Host: sdk.String("vero"),
            Name: sdk.String("Byron Howell I"),
            Port: sdk.Int64(661646),
            Security: &operations.UpdateNetworkMqttBrokerRequestBodySecurity{
                Mode: sdk.String("quod"),
                Security: &operations.UpdateNetworkMqttBrokerRequestBodySecuritySecurity{
                    CaCertificate: sdk.String("adipisci"),
                    VerifyHostnames: sdk.Bool(false),
                },
            },
        },
        MqttBrokerID: "voluptatibus",
        NetworkID: "sed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkMqttBroker200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkNetflow

Update the NetFlow traffic reporting settings for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.UpdateNetworkNetflow(ctx, operations.UpdateNetworkNetflowRequest{
        RequestBody: &operations.UpdateNetworkNetflowRequestBody{
            CollectorIP: sdk.String("dolor"),
            CollectorPort: sdk.Int64(820937),
            EtaDstPort: sdk.Int64(803978),
            EtaEnabled: sdk.Bool(false),
            ReportingEnabled: sdk.Bool(false),
        },
        NetworkID: "blanditiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkNetflow200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSettings

Update the settings for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.UpdateNetworkSettings(ctx, operations.UpdateNetworkSettingsRequest{
        RequestBody: &operations.UpdateNetworkSettingsRequestBody{
            LocalStatusPage: &operations.UpdateNetworkSettingsRequestBodyLocalStatusPage{
                Authentication: &operations.UpdateNetworkSettingsRequestBodyLocalStatusPageAuthentication{
                    Enabled: sdk.Bool(false),
                    Password: sdk.String("non"),
                },
            },
            LocalStatusPageEnabled: sdk.Bool(false),
            RemoteStatusPageEnabled: sdk.Bool(false),
            SecurePort: &operations.UpdateNetworkSettingsRequestBodySecurePort{
                Enabled: sdk.Bool(false),
            },
        },
        NetworkID: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSnmp

Update the SNMP settings for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.UpdateNetworkSnmp(ctx, operations.UpdateNetworkSnmpRequest{
        RequestBody: &operations.UpdateNetworkSnmpRequestBody{
            Access: operations.UpdateNetworkSnmpRequestBodyAccessEnumCommunity.ToPointer(),
            CommunityString: sdk.String("eligendi"),
            Users: []UpdateNetworkSnmpRequestBodyUsers{
                operations.UpdateNetworkSnmpRequestBodyUsers{
                    Passphrase: "nihil",
                    Username: "Hudson.Moore",
                },
            },
        },
        NetworkID: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSnmp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSyslogServers

Update the syslog servers for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.UpdateNetworkSyslogServers(ctx, operations.UpdateNetworkSyslogServersRequest{
        RequestBody: operations.UpdateNetworkSyslogServersRequestBody{
            Servers: []UpdateNetworkSyslogServersRequestBodyServers{
                operations.UpdateNetworkSyslogServersRequestBodyServers{
                    Host: "ad",
                    Port: 565566,
                    Roles: []string{
                        "saepe",
                    },
                },
                operations.UpdateNetworkSyslogServersRequestBodyServers{
                    Host: "voluptatibus",
                    Port: 898830,
                    Roles: []string{
                        "optio",
                        "inventore",
                        "corrupti",
                    },
                },
                operations.UpdateNetworkSyslogServersRequestBodyServers{
                    Host: "fuga",
                    Port: 654220,
                    Roles: []string{
                        "dolor",
                        "pariatur",
                        "repudiandae",
                    },
                },
                operations.UpdateNetworkSyslogServersRequestBodyServers{
                    Host: "facilis",
                    Port: 859736,
                    Roles: []string{
                        "quisquam",
                    },
                },
            },
        },
        NetworkID: "perspiciatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSyslogServers200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkTrafficAnalysis

Update the traffic analysis settings for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.UpdateNetworkTrafficAnalysis(ctx, operations.UpdateNetworkTrafficAnalysisRequest{
        RequestBody: &operations.UpdateNetworkTrafficAnalysisRequestBody{
            CustomPieChartItems: []UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems{
                operations.UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems{
                    Name: "Lillian Hammes",
                    Type: operations.UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnumPort,
                    Value: "et",
                },
            },
            Mode: operations.UpdateNetworkTrafficAnalysisRequestBodyModeEnumDisabled.ToPointer(),
        },
        NetworkID: "aperiam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkTrafficAnalysis200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWebhooksHTTPServer

Update an HTTP server. To change a URL, create a new HTTP server.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.UpdateNetworkWebhooksHTTPServer(ctx, operations.UpdateNetworkWebhooksHTTPServerRequest{
        RequestBody: &operations.UpdateNetworkWebhooksHTTPServerRequestBody{
            Name: sdk.String("Ruby Gerhold"),
            PayloadTemplate: &operations.UpdateNetworkWebhooksHTTPServerRequestBodyPayloadTemplate{
                PayloadTemplateID: sdk.String("non"),
            },
            SharedSecret: sdk.String("ipsam"),
        },
        HTTPServerID: "nesciunt",
        NetworkID: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWebhooksHTTPServer200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWebhooksPayloadTemplate

Update a webhook payload template for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.UpdateNetworkWebhooksPayloadTemplate(ctx, operations.UpdateNetworkWebhooksPayloadTemplateRequest{
        RequestBody: &operations.UpdateNetworkWebhooksPayloadTemplateRequestBody{
            Body: sdk.String("sapiente"),
            BodyFile: sdk.String("magnam"),
            Headers: []UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders{
                operations.UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders{
                    Name: sdk.String("Clifford Dare"),
                    Template: sdk.String("culpa"),
                },
            },
            HeadersFile: sdk.String("molestiae"),
            Name: sdk.String("Monica Waters"),
        },
        NetworkID: "incidunt",
        PayloadTemplateID: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWebhooksPayloadTemplate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## VmxNetworkDevicesClaim

Claim a vMX into a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Networks.VmxNetworkDevicesClaim(ctx, operations.VmxNetworkDevicesClaimRequest{
        RequestBody: operations.VmxNetworkDevicesClaimRequestBody{
            Size: operations.VmxNetworkDevicesClaimRequestBodySizeEnumMedium,
        },
        NetworkID: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VmxNetworkDevicesClaim200ApplicationJSONObject != nil {
        // handle response
    }
}
```
