# Monitor

### Available Operations

* [GenerateDeviceCameraSnapshot](#generatedevicecamerasnapshot) - Generate a snapshot of what the camera sees at the specified time and return a link to that image.
* [GetAdministeredIdentitiesMe](#getadministeredidentitiesme) - Returns the identity of the current user.
* [GetDeviceApplianceDhcpSubnets](#getdeviceappliancedhcpsubnets) - Return the DHCP subnet information for an appliance
* [GetDeviceAppliancePerformance](#getdeviceapplianceperformance) - Return the performance score for a single MX
* [GetDeviceAppliancePrefixesDelegated](#getdeviceapplianceprefixesdelegated) - Return current delegated IPv6 prefixes on an appliance.
* [GetDeviceAppliancePrefixesDelegatedVlanAssignments](#getdeviceapplianceprefixesdelegatedvlanassignments) - Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
* [GetDeviceCameraAnalyticsLive](#getdevicecameraanalyticslive) - Returns live state from camera of analytics zones
* [GetDeviceCameraAnalyticsOverview](#getdevicecameraanalyticsoverview) - Returns an overview of aggregate analytics data for a timespan
* [GetDeviceCameraAnalyticsRecent](#getdevicecameraanalyticsrecent) - Returns most recent record for analytics zones
* [GetDeviceCameraAnalyticsZoneHistory](#getdevicecameraanalyticszonehistory) - Return historical records for analytic zones
* [GetDeviceCameraAnalyticsZones](#getdevicecameraanalyticszones) - Returns all configured analytic zones for this camera
* [GetDeviceClients](#getdeviceclients) - List the clients of a device, up to a maximum of a month ago
* [GetDeviceLldpCdp](#getdevicelldpcdp) - List LLDP and CDP information for a device
* [GetDeviceLossAndLatencyHistory](#getdevicelossandlatencyhistory) - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
* [GetDeviceSwitchPortsStatuses](#getdeviceswitchportsstatuses) - Return the status for all the ports of a switch
* [GetDeviceSwitchPortsStatusesPackets](#getdeviceswitchportsstatusespackets) - Return the packet counters for all the ports of a switch
* [GetDeviceWirelessConnectionStats](#getdevicewirelessconnectionstats) - Aggregated connectivity info for a given AP on this network
* [GetDeviceWirelessLatencyStats](#getdevicewirelesslatencystats) - Aggregated latency info for a given AP on this network
* [GetDeviceWirelessStatus](#getdevicewirelessstatus) - Return the SSID statuses of an access point
* [GetNetworkAlertsHistory](#getnetworkalertshistory) - Return the alert history for this network
* [GetNetworkApplianceClientSecurityEvents](#getnetworkapplianceclientsecurityevents) - List the security events for a client
* [GetNetworkApplianceSecurityEvents](#getnetworkappliancesecurityevents) - List the security events for a network
* [GetNetworkApplianceUplinksUsageHistory](#getnetworkapplianceuplinksusagehistory) - Get the sent and received bytes for each uplink of a network.
* [GetNetworkBluetoothClient](#getnetworkbluetoothclient) - Return a Bluetooth client
* [GetNetworkBluetoothClients](#getnetworkbluetoothclients) - List the Bluetooth clients seen by APs in this network
* [GetNetworkClient](#getnetworkclient) - Return the client associated with the given identifier
* [GetNetworkClientTrafficHistory](#getnetworkclienttraffichistory) - Return the client's network traffic data over time
* [GetNetworkClientUsageHistory](#getnetworkclientusagehistory) - Return the client's daily usage history
* [GetNetworkClients](#getnetworkclients) - List the clients that have used this network in the timespan
* [GetNetworkClientsApplicationUsage](#getnetworkclientsapplicationusage) - Return the application usage data for clients
* [GetNetworkClientsBandwidthUsageHistory](#getnetworkclientsbandwidthusagehistory) - Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
* [GetNetworkClientsOverview](#getnetworkclientsoverview) - Return overview statistics for network clients
* [GetNetworkClientsUsageHistories](#getnetworkclientsusagehistories) - Return the usage histories for clients
* [GetNetworkEvents](#getnetworkevents) - List the events for the network
* [GetNetworkEventsEventTypes](#getnetworkeventseventtypes) - List the event type to human-readable description
* [GetNetworkInsightApplicationHealthByTime](#getnetworkinsightapplicationhealthbytime) - Get application health by time
* [GetNetworkNetworkHealthChannelUtilization](#getnetworknetworkhealthchannelutilization) - Get the channel utilization over each radio for all APs in a network.
* [GetNetworkSensorAlertsCurrentOverviewByMetric](#getnetworksensoralertscurrentoverviewbymetric) - Return an overview of currently alerting sensors by metric
* [GetNetworkSensorAlertsOverviewByMetric](#getnetworksensoralertsoverviewbymetric) - Return an overview of alert occurrences over a timespan, by metric
* [GetNetworkSmDeviceCellularUsageHistory](#getnetworksmdevicecellularusagehistory) - Return the client's daily cellular data usage history
* [GetNetworkSmDeviceConnectivity](#getnetworksmdeviceconnectivity) - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
* [GetNetworkSmDeviceDesktopLogs](#getnetworksmdevicedesktoplogs) - Return historical records of various Systems Manager network connection details for desktop devices.
* [GetNetworkSmDeviceDeviceCommandLogs](#getnetworksmdevicedevicecommandlogs) - Return historical records of commands sent to Systems Manager devices
* [GetNetworkSmDevicePerformanceHistory](#getnetworksmdeviceperformancehistory) - Return historical records of various Systems Manager client metrics for desktop devices.
* [GetNetworkSplashLoginAttempts](#getnetworksplashloginattempts) - List the splash login attempts for a network
* [GetNetworkTopologyLinkLayer](#getnetworktopologylinklayer) - List the LLDP and CDP information for all discovered devices and connections in a network.
* [GetNetworkTraffic](#getnetworktraffic) - Return the traffic analysis data for this network
* [GetNetworkWirelessAirMarshal](#getnetworkwirelessairmarshal) - List Air Marshal scan results from a network
* [GetNetworkWirelessChannelUtilizationHistory](#getnetworkwirelesschannelutilizationhistory) - Return AP channel utilization over time for a device or network client
* [GetNetworkWirelessClientConnectionStats](#getnetworkwirelessclientconnectionstats) - Aggregated connectivity info for a given client on this network
* [GetNetworkWirelessClientConnectivityEvents](#getnetworkwirelessclientconnectivityevents) - List the wireless connectivity events for a client within a network in the timespan.
* [GetNetworkWirelessClientCountHistory](#getnetworkwirelessclientcounthistory) - Return wireless client counts over time for a network, device, or network client
* [GetNetworkWirelessClientLatencyHistory](#getnetworkwirelessclientlatencyhistory) - Return the latency history for a client
* [GetNetworkWirelessClientLatencyStats](#getnetworkwirelessclientlatencystats) - Aggregated latency info for a given client on this network
* [GetNetworkWirelessClientsConnectionStats](#getnetworkwirelessclientsconnectionstats) - Aggregated connectivity info for this network, grouped by clients
* [GetNetworkWirelessClientsLatencyStats](#getnetworkwirelessclientslatencystats) - Aggregated latency info for this network, grouped by clients
* [GetNetworkWirelessConnectionStats](#getnetworkwirelessconnectionstats) - Aggregated connectivity info for this network
* [GetNetworkWirelessDataRateHistory](#getnetworkwirelessdataratehistory) - Return PHY data rates over time for a network, device, or network client
* [GetNetworkWirelessDevicesConnectionStats](#getnetworkwirelessdevicesconnectionstats) - Aggregated connectivity info for this network, grouped by node
* [GetNetworkWirelessDevicesLatencyStats](#getnetworkwirelessdeviceslatencystats) - Aggregated latency info for this network, grouped by node
* [GetNetworkWirelessFailedConnections](#getnetworkwirelessfailedconnections) - List of all failed client connection events on this network in a given time range
* [GetNetworkWirelessLatencyHistory](#getnetworkwirelesslatencyhistory) - Return average wireless latency over time for a network, device, or network client
* [GetNetworkWirelessLatencyStats](#getnetworkwirelesslatencystats) - Aggregated latency info for this network
* [GetNetworkWirelessMeshStatuses](#getnetworkwirelessmeshstatuses) - List wireless mesh statuses for repeaters
* [GetNetworkWirelessSignalQualityHistory](#getnetworkwirelesssignalqualityhistory) - Return signal quality (SNR/RSSI) over time for a device or network client
* [GetNetworkWirelessUsageHistory](#getnetworkwirelessusagehistory) - Return AP usage over time for a device or network client
* [GetOrganizationAdaptivePolicyOverview](#getorganizationadaptivepolicyoverview) - Returns adaptive policy aggregate statistics for an organization
* [GetOrganizationAPIRequests](#getorganizationapirequests) - List the API requests made by an organization
* [GetOrganizationAPIRequestsOverview](#getorganizationapirequestsoverview) - Return an aggregated overview of API requests data
* [GetOrganizationAPIRequestsOverviewResponseCodesByInterval](#getorganizationapirequestsoverviewresponsecodesbyinterval) - Tracks organizations' API requests by response code across a given time period
* [GetOrganizationApplianceSecurityEvents](#getorganizationappliancesecurityevents) - List the security events for an organization
* [GetOrganizationApplianceUplinkStatuses](#getorganizationapplianceuplinkstatuses) - List the uplink status of every Meraki MX and Z series appliances in the organization
* [GetOrganizationApplianceVpnStats](#getorganizationappliancevpnstats) - Show VPN history stat for networks in an organization
* [GetOrganizationApplianceVpnStatuses](#getorganizationappliancevpnstatuses) - Show VPN status for networks in an organization
* [GetOrganizationCellularGatewayUplinkStatuses](#getorganizationcellulargatewayuplinkstatuses) - List the uplink status of every Meraki MG cellular gateway in the organization
* [GetOrganizationClientsBandwidthUsageHistory](#getorganizationclientsbandwidthusagehistory) - Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.
* [GetOrganizationClientsOverview](#getorganizationclientsoverview) - Return summary information around client data usage (in mb) across the given organization.
* [GetOrganizationConfigurationChanges](#getorganizationconfigurationchanges) - View the Change Log for your organization
* [GetOrganizationDevicesAvailabilities](#getorganizationdevicesavailabilities) - List the availability information for devices in an organization
* [GetOrganizationDevicesPowerModulesStatusesByDevice](#getorganizationdevicespowermodulesstatusesbydevice) - List the power status information for devices in an organization
* [GetOrganizationDevicesStatuses](#getorganizationdevicesstatuses) - List the status of every Meraki device in the organization
* [GetOrganizationDevicesStatusesOverview](#getorganizationdevicesstatusesoverview) - Return an overview of current device statuses
* [GetOrganizationDevicesUplinksAddressesByDevice](#getorganizationdevicesuplinksaddressesbydevice) - List the current uplink addresses for devices in an organization.
* [GetOrganizationDevicesUplinksLossAndLatency](#getorganizationdevicesuplinkslossandlatency) - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* [GetOrganizationLicensesOverview](#getorganizationlicensesoverview) - Return an overview of the license state for an organization
* [GetOrganizationOpenapiSpec](#getorganizationopenapispec) - Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
* [GetOrganizationSensorReadingsHistory](#getorganizationsensorreadingshistory) - Return all reported readings from sensors in a given timespan, sorted by timestamp
* [GetOrganizationSensorReadingsLatest](#getorganizationsensorreadingslatest) - Return the latest available reading for each metric from each sensor, sorted by sensor serial
* [GetOrganizationSummaryTopAppliancesByUtilization](#getorganizationsummarytopappliancesbyutilization) - Return the top 10 appliances sorted by utilization over given time range.
* [GetOrganizationSummaryTopClientsByUsage](#getorganizationsummarytopclientsbyusage) - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* [GetOrganizationSummaryTopClientsManufacturersByUsage](#getorganizationsummarytopclientsmanufacturersbyusage) - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* [GetOrganizationSummaryTopDevicesByUsage](#getorganizationsummarytopdevicesbyusage) - Return metrics for organization's top 10 devices sorted by data usage over given time range
* [GetOrganizationSummaryTopDevicesModelsByUsage](#getorganizationsummarytopdevicesmodelsbyusage) - Return metrics for organization's top 10 device models sorted by data usage over given time range
* [GetOrganizationSummaryTopSsidsByUsage](#getorganizationsummarytopssidsbyusage) - Return metrics for organization's top 10 ssids by data usage over given time range
* [GetOrganizationSummaryTopSwitchesByEnergyUsage](#getorganizationsummarytopswitchesbyenergyusage) - Return metrics for organization's top 10 switches by energy usage over given time range
* [GetOrganizationUplinksStatuses](#getorganizationuplinksstatuses) - List the uplink status of every Meraki MX, MG and Z series devices in the organization
* [GetOrganizationWebhooksAlertTypes](#getorganizationwebhooksalerttypes) - Return a list of alert types to be used with managing webhook alerts
* [GetOrganizationWebhooksLogs](#getorganizationwebhookslogs) - Return the log of webhook POSTs sent

## GenerateDeviceCameraSnapshot

Generate a snapshot of what the camera sees at the specified time and return a link to that image.

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
    res, err := s.Monitor.GenerateDeviceCameraSnapshot(ctx, operations.GenerateDeviceCameraSnapshotRequest{
        RequestBody: &operations.GenerateDeviceCameraSnapshotRequestBody{
            Fullframe: sdk.Bool(false),
            Timestamp: types.MustTimeFromString("2022-08-06T21:50:25.107Z"),
        },
        Serial: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateDeviceCameraSnapshot202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetAdministeredIdentitiesMe

Returns the identity of the current user.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Monitor.GetAdministeredIdentitiesMe(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAdministeredIdentitiesMe200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceApplianceDhcpSubnets

Return the DHCP subnet information for an appliance

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
    res, err := s.Monitor.GetDeviceApplianceDhcpSubnets(ctx, operations.GetDeviceApplianceDhcpSubnetsRequest{
        Serial: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceApplianceDhcpSubnets200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceAppliancePerformance

Return the performance score for a single MX. Only primary MX devices supported. If no data is available, a 204 error code is returned.

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
    res, err := s.Monitor.GetDeviceAppliancePerformance(ctx, operations.GetDeviceAppliancePerformanceRequest{
        Serial: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceAppliancePerformance200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceAppliancePrefixesDelegated

Return current delegated IPv6 prefixes on an appliance.

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
    res, err := s.Monitor.GetDeviceAppliancePrefixesDelegated(ctx, operations.GetDeviceAppliancePrefixesDelegatedRequest{
        Serial: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceAppliancePrefixesDelegated200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceAppliancePrefixesDelegatedVlanAssignments

Return prefixes assigned to all IPv6 enabled VLANs on an appliance.

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
    res, err := s.Monitor.GetDeviceAppliancePrefixesDelegatedVlanAssignments(ctx, operations.GetDeviceAppliancePrefixesDelegatedVlanAssignmentsRequest{
        Serial: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceAppliancePrefixesDelegatedVlanAssignments200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceCameraAnalyticsLive

Returns live state from camera of analytics zones

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
    res, err := s.Monitor.GetDeviceCameraAnalyticsLive(ctx, operations.GetDeviceCameraAnalyticsLiveRequest{
        Serial: "reprehenderit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraAnalyticsLive200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceCameraAnalyticsOverview

Returns an overview of aggregate analytics data for a timespan

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
    res, err := s.Monitor.GetDeviceCameraAnalyticsOverview(ctx, operations.GetDeviceCameraAnalyticsOverviewRequest{
        ObjectType: operations.GetDeviceCameraAnalyticsOverviewObjectTypeEnumPerson.ToPointer(),
        Serial: "ipsam",
        T0: sdk.String("perspiciatis"),
        T1: sdk.String("molestias"),
        Timespan: sdk.Float32(4404.89),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraAnalyticsOverview200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceCameraAnalyticsRecent

Returns most recent record for analytics zones

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
    res, err := s.Monitor.GetDeviceCameraAnalyticsRecent(ctx, operations.GetDeviceCameraAnalyticsRecentRequest{
        ObjectType: operations.GetDeviceCameraAnalyticsRecentObjectTypeEnumPerson.ToPointer(),
        Serial: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraAnalyticsRecent200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceCameraAnalyticsZoneHistory

Return historical records for analytic zones

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
    res, err := s.Monitor.GetDeviceCameraAnalyticsZoneHistory(ctx, operations.GetDeviceCameraAnalyticsZoneHistoryRequest{
        ObjectType: operations.GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnumVehicle.ToPointer(),
        Resolution: sdk.Int64(9183),
        Serial: "optio",
        T0: sdk.String("vero"),
        T1: sdk.String("eligendi"),
        Timespan: sdk.Float32(7037.79),
        ZoneID: "quisquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraAnalyticsZoneHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceCameraAnalyticsZones

Returns all configured analytic zones for this camera

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
    res, err := s.Monitor.GetDeviceCameraAnalyticsZones(ctx, operations.GetDeviceCameraAnalyticsZonesRequest{
        Serial: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraAnalyticsZones200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceClients

List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.

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
    res, err := s.Monitor.GetDeviceClients(ctx, operations.GetDeviceClientsRequest{
        Serial: "atque",
        T0: sdk.String("libero"),
        Timespan: sdk.Float32(8200.68),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceClients200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceLldpCdp

List LLDP and CDP information for a device

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
    res, err := s.Monitor.GetDeviceLldpCdp(ctx, operations.GetDeviceLldpCdpRequest{
        Serial: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceLldpCdp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceLossAndLatencyHistory

Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.

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
    res, err := s.Monitor.GetDeviceLossAndLatencyHistory(ctx, operations.GetDeviceLossAndLatencyHistoryRequest{
        IP: "modi",
        Resolution: sdk.Int64(522246),
        Serial: "voluptates",
        T0: sdk.String("cumque"),
        T1: sdk.String("ex"),
        Timespan: sdk.Float32(9125.46),
        Uplink: operations.GetDeviceLossAndLatencyHistoryUplinkEnumWan1.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceLossAndLatencyHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceSwitchPortsStatuses

Return the status for all the ports of a switch

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
    res, err := s.Monitor.GetDeviceSwitchPortsStatuses(ctx, operations.GetDeviceSwitchPortsStatusesRequest{
        Serial: "distinctio",
        T0: sdk.String("magni"),
        Timespan: sdk.Float32(3059.72),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchPortsStatuses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceSwitchPortsStatusesPackets

Return the packet counters for all the ports of a switch

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
    res, err := s.Monitor.GetDeviceSwitchPortsStatusesPackets(ctx, operations.GetDeviceSwitchPortsStatusesPacketsRequest{
        Serial: "accusantium",
        T0: sdk.String("distinctio"),
        Timespan: sdk.Float32(917.54),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchPortsStatusesPackets200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceWirelessConnectionStats

Aggregated connectivity info for a given AP on this network

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
    res, err := s.Monitor.GetDeviceWirelessConnectionStats(ctx, operations.GetDeviceWirelessConnectionStatsRequest{
        ApTag: sdk.String("quo"),
        Band: operations.GetDeviceWirelessConnectionStatsBandEnumTwo4.ToPointer(),
        Serial: "eum",
        Ssid: sdk.Int64(770626),
        T0: sdk.String("perspiciatis"),
        T1: sdk.String("optio"),
        Timespan: sdk.Float32(64.46),
        Vlan: sdk.Int64(416757),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceWirelessConnectionStats200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceWirelessLatencyStats

Aggregated latency info for a given AP on this network

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
    res, err := s.Monitor.GetDeviceWirelessLatencyStats(ctx, operations.GetDeviceWirelessLatencyStatsRequest{
        ApTag: sdk.String("modi"),
        Band: operations.GetDeviceWirelessLatencyStatsBandEnumFive.ToPointer(),
        Fields: sdk.String("nulla"),
        Serial: "sed",
        Ssid: sdk.Int64(716481),
        T0: sdk.String("quibusdam"),
        T1: sdk.String("fugiat"),
        Timespan: sdk.Float32(6210.66),
        Vlan: sdk.Int64(898267),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceWirelessLatencyStats200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceWirelessStatus

Return the SSID statuses of an access point

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
    res, err := s.Monitor.GetDeviceWirelessStatus(ctx, operations.GetDeviceWirelessStatusRequest{
        Serial: "ullam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceWirelessStatus200ApplicationJSONObject != nil {
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
    res, err := s.Monitor.GetNetworkAlertsHistory(ctx, operations.GetNetworkAlertsHistoryRequest{
        EndingBefore: sdk.String("deleniti"),
        NetworkID: "fugiat",
        PerPage: sdk.Int64(835995),
        StartingAfter: sdk.String("expedita"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkAlertsHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkApplianceClientSecurityEvents

List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

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
    res, err := s.Monitor.GetNetworkApplianceClientSecurityEvents(ctx, operations.GetNetworkApplianceClientSecurityEventsRequest{
        ClientID: "et",
        EndingBefore: sdk.String("autem"),
        NetworkID: "voluptas",
        PerPage: sdk.Int64(363121),
        SortOrder: operations.GetNetworkApplianceClientSecurityEventsSortOrderEnumDescending.ToPointer(),
        StartingAfter: sdk.String("nesciunt"),
        T0: sdk.String("illo"),
        T1: sdk.String("dolores"),
        Timespan: sdk.Float32(7638.92),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceClientSecurityEvents200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkApplianceSecurityEvents

List the security events for a network

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
    res, err := s.Monitor.GetNetworkApplianceSecurityEvents(ctx, operations.GetNetworkApplianceSecurityEventsRequest{
        EndingBefore: sdk.String("voluptate"),
        NetworkID: "delectus",
        PerPage: sdk.Int64(369976),
        SortOrder: operations.GetNetworkApplianceSecurityEventsSortOrderEnumAscending.ToPointer(),
        StartingAfter: sdk.String("quae"),
        T0: sdk.String("at"),
        T1: sdk.String("quaerat"),
        Timespan: sdk.Float32(4834.48),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceSecurityEvents200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkApplianceUplinksUsageHistory

Get the sent and received bytes for each uplink of a network.

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
    res, err := s.Monitor.GetNetworkApplianceUplinksUsageHistory(ctx, operations.GetNetworkApplianceUplinksUsageHistoryRequest{
        NetworkID: "aspernatur",
        Resolution: sdk.Int64(122474),
        T0: sdk.String("quod"),
        T1: sdk.String("veritatis"),
        Timespan: sdk.Float32(4782.16),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceUplinksUsageHistory200ApplicationJSONObjects != nil {
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
    res, err := s.Monitor.GetNetworkBluetoothClient(ctx, operations.GetNetworkBluetoothClientRequest{
        BluetoothClientID: "aliquid",
        ConnectivityHistoryTimespan: sdk.Int64(184149),
        IncludeConnectivityHistory: sdk.Bool(false),
        NetworkID: "error",
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
    res, err := s.Monitor.GetNetworkBluetoothClients(ctx, operations.GetNetworkBluetoothClientsRequest{
        EndingBefore: sdk.String("consequuntur"),
        IncludeConnectivityHistory: sdk.Bool(false),
        NetworkID: "nulla",
        PerPage: sdk.Int64(818633),
        StartingAfter: sdk.String("voluptate"),
        T0: sdk.String("quas"),
        Timespan: sdk.Float32(4748.14),
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
    res, err := s.Monitor.GetNetworkClient(ctx, operations.GetNetworkClientRequest{
        ClientID: "blanditiis",
        NetworkID: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClient200ApplicationJSONObject != nil {
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
    res, err := s.Monitor.GetNetworkClientTrafficHistory(ctx, operations.GetNetworkClientTrafficHistoryRequest{
        ClientID: "in",
        EndingBefore: sdk.String("dicta"),
        NetworkID: "soluta",
        PerPage: sdk.Int64(963321),
        StartingAfter: sdk.String("quos"),
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
    res, err := s.Monitor.GetNetworkClientUsageHistory(ctx, operations.GetNetworkClientUsageHistoryRequest{
        ClientID: "quo",
        NetworkID: "dicta",
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
    res, err := s.Monitor.GetNetworkClients(ctx, operations.GetNetworkClientsRequest{
        Description: sdk.String("numquam"),
        EndingBefore: sdk.String("ab"),
        IP: sdk.String("quos"),
        Ip6: sdk.String("modi"),
        Ip6Local: sdk.String("vitae"),
        Mac: sdk.String("voluptatibus"),
        NetworkID: "officiis",
        Os: sdk.String("inventore"),
        PerPage: sdk.Int64(954008),
        RecentDeviceConnections: []GetNetworkClientsRecentDeviceConnectionsEnum{
            operations.GetNetworkClientsRecentDeviceConnectionsEnumWired,
            operations.GetNetworkClientsRecentDeviceConnectionsEnumWireless,
            operations.GetNetworkClientsRecentDeviceConnectionsEnumWireless,
        },
        StartingAfter: sdk.String("illo"),
        Statuses: []GetNetworkClientsStatusesEnum{
            operations.GetNetworkClientsStatusesEnumOffline,
        },
        T0: sdk.String("deserunt"),
        Timespan: sdk.Float32(6209.88),
        Vlan: sdk.String("voluptatum"),
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
    res, err := s.Monitor.GetNetworkClientsApplicationUsage(ctx, operations.GetNetworkClientsApplicationUsageRequest{
        Clients: "aut",
        EndingBefore: sdk.String("laboriosam"),
        NetworkID: "recusandae",
        PerPage: sdk.Int64(671945),
        SsidNumber: operations.GetNetworkClientsApplicationUsageSsidNumberEnumOne.ToPointer(),
        StartingAfter: sdk.String("commodi"),
        T0: sdk.String("ipsa"),
        T1: sdk.String("suscipit"),
        Timespan: sdk.Float32(1922.29),
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
    res, err := s.Monitor.GetNetworkClientsBandwidthUsageHistory(ctx, operations.GetNetworkClientsBandwidthUsageHistoryRequest{
        EndingBefore: sdk.String("cupiditate"),
        NetworkID: "iste",
        PerPage: sdk.Int64(880780),
        StartingAfter: sdk.String("hic"),
        T0: sdk.String("beatae"),
        T1: sdk.String("iusto"),
        Timespan: sdk.Float32(7395.23),
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
    res, err := s.Monitor.GetNetworkClientsOverview(ctx, operations.GetNetworkClientsOverviewRequest{
        NetworkID: "deleniti",
        Resolution: sdk.Int64(122140),
        T0: sdk.String("reprehenderit"),
        T1: sdk.String("ullam"),
        Timespan: sdk.Float32(5363.47),
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
    res, err := s.Monitor.GetNetworkClientsUsageHistories(ctx, operations.GetNetworkClientsUsageHistoriesRequest{
        Clients: "repellendus",
        EndingBefore: sdk.String("tempora"),
        NetworkID: "laborum",
        PerPage: sdk.Int64(694927),
        SsidNumber: operations.GetNetworkClientsUsageHistoriesSsidNumberEnumFour.ToPointer(),
        StartingAfter: sdk.String("expedita"),
        T0: sdk.String("impedit"),
        T1: sdk.String("totam"),
        Timespan: sdk.Float32(50.62),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientsUsageHistories200ApplicationJSONObjects != nil {
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
    res, err := s.Monitor.GetNetworkEvents(ctx, operations.GetNetworkEventsRequest{
        ClientIP: sdk.String("nulla"),
        ClientMac: sdk.String("accusamus"),
        ClientName: sdk.String("id"),
        DeviceMac: sdk.String("reprehenderit"),
        DeviceName: sdk.String("dignissimos"),
        DeviceSerial: sdk.String("doloribus"),
        EndingBefore: sdk.String("quibusdam"),
        ExcludedEventTypes: []string{
            "cupiditate",
            "dolor",
            "illo",
        },
        IncludedEventTypes: []string{
            "maxime",
            "molestias",
            "quibusdam",
            "quasi",
        },
        NetworkID: "aperiam",
        PerPage: sdk.Int64(396955),
        ProductType: operations.GetNetworkEventsProductTypeEnumSystemsManager.ToPointer(),
        SmDeviceMac: sdk.String("tenetur"),
        SmDeviceName: sdk.String("maiores"),
        StartingAfter: sdk.String("magni"),
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
    res, err := s.Monitor.GetNetworkEventsEventTypes(ctx, operations.GetNetworkEventsEventTypesRequest{
        NetworkID: "quisquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkEventsEventTypes200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkInsightApplicationHealthByTime

Get application health by time

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
    res, err := s.Monitor.GetNetworkInsightApplicationHealthByTime(ctx, operations.GetNetworkInsightApplicationHealthByTimeRequest{
        ApplicationID: "dolores",
        NetworkID: "aliquid",
        Resolution: sdk.Int64(637090),
        T0: sdk.String("distinctio"),
        T1: sdk.String("corrupti"),
        Timespan: sdk.Float32(2921.74),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkInsightApplicationHealthByTime200ApplicationJSONObjects != nil {
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
    res, err := s.Monitor.GetNetworkNetworkHealthChannelUtilization(ctx, operations.GetNetworkNetworkHealthChannelUtilizationRequest{
        EndingBefore: sdk.String("doloremque"),
        NetworkID: "animi",
        PerPage: sdk.Int64(158059),
        Resolution: sdk.Int64(517521),
        StartingAfter: sdk.String("repudiandae"),
        T0: sdk.String("id"),
        T1: sdk.String("aperiam"),
        Timespan: sdk.Float32(4138.36),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkNetworkHealthChannelUtilization200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSensorAlertsCurrentOverviewByMetric

Return an overview of currently alerting sensors by metric

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
    res, err := s.Monitor.GetNetworkSensorAlertsCurrentOverviewByMetric(ctx, operations.GetNetworkSensorAlertsCurrentOverviewByMetricRequest{
        NetworkID: "ducimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSensorAlertsCurrentOverviewByMetric200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSensorAlertsOverviewByMetric

Return an overview of alert occurrences over a timespan, by metric

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
    res, err := s.Monitor.GetNetworkSensorAlertsOverviewByMetric(ctx, operations.GetNetworkSensorAlertsOverviewByMetricRequest{
        Interval: sdk.Int64(154167),
        NetworkID: "quibusdam",
        T0: sdk.String("autem"),
        T1: sdk.String("soluta"),
        Timespan: sdk.Float32(4774.09),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSensorAlertsOverviewByMetric200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceCellularUsageHistory

Return the client's daily cellular data usage history. Usage data is in kilobytes.

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
    res, err := s.Monitor.GetNetworkSmDeviceCellularUsageHistory(ctx, operations.GetNetworkSmDeviceCellularUsageHistoryRequest{
        DeviceID: "neque",
        NetworkID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceCellularUsageHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceConnectivity

Returns historical connectivity data (whether a device is regularly checking in to Dashboard).

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
    res, err := s.Monitor.GetNetworkSmDeviceConnectivity(ctx, operations.GetNetworkSmDeviceConnectivityRequest{
        DeviceID: "sequi",
        EndingBefore: sdk.String("ut"),
        NetworkID: "maxime",
        PerPage: sdk.Int64(645651),
        StartingAfter: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceConnectivity200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceDesktopLogs

Return historical records of various Systems Manager network connection details for desktop devices.

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
    res, err := s.Monitor.GetNetworkSmDeviceDesktopLogs(ctx, operations.GetNetworkSmDeviceDesktopLogsRequest{
        DeviceID: "consectetur",
        EndingBefore: sdk.String("incidunt"),
        NetworkID: "cumque",
        PerPage: sdk.Int64(845583),
        StartingAfter: sdk.String("nam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceDesktopLogs200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDeviceDeviceCommandLogs

Return historical records of commands sent to Systems Manager devices. Note that this will include the name of the Dashboard user who initiated the command if it was generated by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out of any reports.

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
    res, err := s.Monitor.GetNetworkSmDeviceDeviceCommandLogs(ctx, operations.GetNetworkSmDeviceDeviceCommandLogsRequest{
        DeviceID: "adipisci",
        EndingBefore: sdk.String("dicta"),
        NetworkID: "tempora",
        PerPage: sdk.Int64(592655),
        StartingAfter: sdk.String("fuga"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceDeviceCommandLogs200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmDevicePerformanceHistory

Return historical records of various Systems Manager client metrics for desktop devices.

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
    res, err := s.Monitor.GetNetworkSmDevicePerformanceHistory(ctx, operations.GetNetworkSmDevicePerformanceHistoryRequest{
        DeviceID: "et",
        EndingBefore: sdk.String("molestias"),
        NetworkID: "reiciendis",
        PerPage: sdk.Int64(185440),
        StartingAfter: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDevicePerformanceHistory200ApplicationJSONObjects != nil {
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
    res, err := s.Monitor.GetNetworkSplashLoginAttempts(ctx, operations.GetNetworkSplashLoginAttemptsRequest{
        LoginIdentifier: sdk.String("sed"),
        NetworkID: "perferendis",
        SsidNumber: operations.GetNetworkSplashLoginAttemptsSsidNumberEnumSeven.ToPointer(),
        Timespan: sdk.Int64(503615),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSplashLoginAttempts200ApplicationJSONObjects != nil {
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
    res, err := s.Monitor.GetNetworkTopologyLinkLayer(ctx, operations.GetNetworkTopologyLinkLayerRequest{
        NetworkID: "similique",
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
    res, err := s.Monitor.GetNetworkTraffic(ctx, operations.GetNetworkTrafficRequest{
        DeviceType: operations.GetNetworkTrafficDeviceTypeEnumAppliance.ToPointer(),
        NetworkID: "praesentium",
        T0: sdk.String("mollitia"),
        Timespan: sdk.Float32(3015.78),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkTraffic200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessAirMarshal

List Air Marshal scan results from a network

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
    res, err := s.Monitor.GetNetworkWirelessAirMarshal(ctx, operations.GetNetworkWirelessAirMarshalRequest{
        NetworkID: "tempore",
        T0: sdk.String("consequatur"),
        Timespan: sdk.Float32(8592.66),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessAirMarshal200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessChannelUtilizationHistory

Return AP channel utilization over time for a device or network client

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
    res, err := s.Monitor.GetNetworkWirelessChannelUtilizationHistory(ctx, operations.GetNetworkWirelessChannelUtilizationHistoryRequest{
        ApTag: sdk.String("fuga"),
        AutoResolution: sdk.Bool(false),
        Band: operations.GetNetworkWirelessChannelUtilizationHistoryBandEnumSix.ToPointer(),
        ClientID: sdk.String("repellendus"),
        DeviceSerial: sdk.String("quaerat"),
        NetworkID: "quidem",
        Resolution: sdk.Int64(357760),
        T0: sdk.String("placeat"),
        T1: sdk.String("voluptatibus"),
        Timespan: sdk.Float32(102.01),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessChannelUtilizationHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessClientConnectionStats

Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.

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
    res, err := s.Monitor.GetNetworkWirelessClientConnectionStats(ctx, operations.GetNetworkWirelessClientConnectionStatsRequest{
        ApTag: sdk.String("eum"),
        Band: operations.GetNetworkWirelessClientConnectionStatsBandEnumTwo4.ToPointer(),
        ClientID: "ex",
        NetworkID: "accusamus",
        Ssid: sdk.Int64(925361),
        T0: sdk.String("perspiciatis"),
        T1: sdk.String("ratione"),
        Timespan: sdk.Float32(1578.31),
        Vlan: sdk.Int64(474076),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessClientConnectionStats200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessClientConnectivityEvents

List the wireless connectivity events for a client within a network in the timespan.

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
    res, err := s.Monitor.GetNetworkWirelessClientConnectivityEvents(ctx, operations.GetNetworkWirelessClientConnectivityEventsRequest{
        Band: operations.GetNetworkWirelessClientConnectivityEventsBandEnumFive.ToPointer(),
        ClientID: "odio",
        DeviceSerial: sdk.String("exercitationem"),
        EndingBefore: sdk.String("soluta"),
        IncludedSeverities: []GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum{
            operations.GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnumGood,
            operations.GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnumBad,
            operations.GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnumWarn,
            operations.GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnumInfo,
        },
        NetworkID: "est",
        PerPage: sdk.Int64(31927),
        SsidNumber: operations.GetNetworkWirelessClientConnectivityEventsSsidNumberEnumThirteen.ToPointer(),
        StartingAfter: sdk.String("quae"),
        T0: sdk.String("eius"),
        T1: sdk.String("unde"),
        Timespan: sdk.Float32(8124.03),
        Types: []GetNetworkWirelessClientConnectivityEventsTypesEnum{
            operations.GetNetworkWirelessClientConnectivityEventsTypesEnumAuth,
            operations.GetNetworkWirelessClientConnectivityEventsTypesEnumRoam,
            operations.GetNetworkWirelessClientConnectivityEventsTypesEnumRoam,
            operations.GetNetworkWirelessClientConnectivityEventsTypesEnumRoam,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessClientConnectivityEvents200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessClientCountHistory

Return wireless client counts over time for a network, device, or network client

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
    res, err := s.Monitor.GetNetworkWirelessClientCountHistory(ctx, operations.GetNetworkWirelessClientCountHistoryRequest{
        ApTag: sdk.String("illum"),
        AutoResolution: sdk.Bool(false),
        Band: operations.GetNetworkWirelessClientCountHistoryBandEnumTwo4.ToPointer(),
        ClientID: sdk.String("ea"),
        DeviceSerial: sdk.String("magni"),
        NetworkID: "rerum",
        Resolution: sdk.Int64(695796),
        Ssid: sdk.Int64(968703),
        T0: sdk.String("sint"),
        T1: sdk.String("qui"),
        Timespan: sdk.Float32(2258.7),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessClientCountHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessClientLatencyHistory

Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.

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
    res, err := s.Monitor.GetNetworkWirelessClientLatencyHistory(ctx, operations.GetNetworkWirelessClientLatencyHistoryRequest{
        ClientID: "natus",
        NetworkID: "alias",
        Resolution: sdk.Int64(47430),
        T0: sdk.String("illo"),
        T1: sdk.String("quis"),
        Timespan: sdk.Float32(9544.71),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessClientLatencyHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessClientLatencyStats

Aggregated latency info for a given client on this network. Clients are identified by their MAC.

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
    res, err := s.Monitor.GetNetworkWirelessClientLatencyStats(ctx, operations.GetNetworkWirelessClientLatencyStatsRequest{
        ApTag: sdk.String("odit"),
        Band: operations.GetNetworkWirelessClientLatencyStatsBandEnumFive.ToPointer(),
        ClientID: "deleniti",
        Fields: sdk.String("excepturi"),
        NetworkID: "unde",
        Ssid: sdk.Int64(761275),
        T0: sdk.String("asperiores"),
        T1: sdk.String("numquam"),
        Timespan: sdk.Float32(9668.03),
        Vlan: sdk.Int64(963986),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessClientLatencyStats200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessClientsConnectionStats

Aggregated connectivity info for this network, grouped by clients

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
    res, err := s.Monitor.GetNetworkWirelessClientsConnectionStats(ctx, operations.GetNetworkWirelessClientsConnectionStatsRequest{
        ApTag: sdk.String("accusamus"),
        Band: operations.GetNetworkWirelessClientsConnectionStatsBandEnumSix.ToPointer(),
        NetworkID: "excepturi",
        Ssid: sdk.Int64(709118),
        T0: sdk.String("officiis"),
        T1: sdk.String("impedit"),
        Timespan: sdk.Float32(3549.18),
        Vlan: sdk.Int64(45580),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessClientsConnectionStats200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessClientsLatencyStats

Aggregated latency info for this network, grouped by clients

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
    res, err := s.Monitor.GetNetworkWirelessClientsLatencyStats(ctx, operations.GetNetworkWirelessClientsLatencyStatsRequest{
        ApTag: sdk.String("nesciunt"),
        Band: operations.GetNetworkWirelessClientsLatencyStatsBandEnumTwo4.ToPointer(),
        Fields: sdk.String("rem"),
        NetworkID: "laborum",
        Ssid: sdk.Int64(531209),
        T0: sdk.String("vitae"),
        T1: sdk.String("eveniet"),
        Timespan: sdk.Float32(7101.42),
        Vlan: sdk.Int64(5736),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessClientsLatencyStats200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessConnectionStats

Aggregated connectivity info for this network

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
    res, err := s.Monitor.GetNetworkWirelessConnectionStats(ctx, operations.GetNetworkWirelessConnectionStatsRequest{
        ApTag: sdk.String("beatae"),
        Band: operations.GetNetworkWirelessConnectionStatsBandEnumSix.ToPointer(),
        NetworkID: "eos",
        Ssid: sdk.Int64(608236),
        T0: sdk.String("iusto"),
        T1: sdk.String("hic"),
        Timespan: sdk.Float32(4886.42),
        Vlan: sdk.Int64(745216),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessConnectionStats200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessDataRateHistory

Return PHY data rates over time for a network, device, or network client

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
    res, err := s.Monitor.GetNetworkWirelessDataRateHistory(ctx, operations.GetNetworkWirelessDataRateHistoryRequest{
        ApTag: sdk.String("incidunt"),
        AutoResolution: sdk.Bool(false),
        Band: operations.GetNetworkWirelessDataRateHistoryBandEnumFive.ToPointer(),
        ClientID: sdk.String("suscipit"),
        DeviceSerial: sdk.String("culpa"),
        NetworkID: "quas",
        Resolution: sdk.Int64(369720),
        Ssid: sdk.Int64(316416),
        T0: sdk.String("repudiandae"),
        T1: sdk.String("nostrum"),
        Timespan: sdk.Float32(196.84),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessDataRateHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessDevicesConnectionStats

Aggregated connectivity info for this network, grouped by node

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
    res, err := s.Monitor.GetNetworkWirelessDevicesConnectionStats(ctx, operations.GetNetworkWirelessDevicesConnectionStatsRequest{
        ApTag: sdk.String("rem"),
        Band: operations.GetNetworkWirelessDevicesConnectionStatsBandEnumFive.ToPointer(),
        NetworkID: "maxime",
        Ssid: sdk.Int64(507331),
        T0: sdk.String("id"),
        T1: sdk.String("ratione"),
        Timespan: sdk.Float32(1654.91),
        Vlan: sdk.Int64(428147),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessDevicesConnectionStats200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessDevicesLatencyStats

Aggregated latency info for this network, grouped by node

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
    res, err := s.Monitor.GetNetworkWirelessDevicesLatencyStats(ctx, operations.GetNetworkWirelessDevicesLatencyStatsRequest{
        ApTag: sdk.String("dolorem"),
        Band: operations.GetNetworkWirelessDevicesLatencyStatsBandEnumTwo4.ToPointer(),
        Fields: sdk.String("beatae"),
        NetworkID: "laborum",
        Ssid: sdk.Int64(776972),
        T0: sdk.String("eligendi"),
        T1: sdk.String("quod"),
        Timespan: sdk.Float32(7713.96),
        Vlan: sdk.Int64(636010),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessDevicesLatencyStats200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessFailedConnections

List of all failed client connection events on this network in a given time range

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
    res, err := s.Monitor.GetNetworkWirelessFailedConnections(ctx, operations.GetNetworkWirelessFailedConnectionsRequest{
        ApTag: sdk.String("nisi"),
        Band: operations.GetNetworkWirelessFailedConnectionsBandEnumFive.ToPointer(),
        ClientID: sdk.String("ratione"),
        NetworkID: "facere",
        Serial: sdk.String("dolore"),
        Ssid: sdk.Int64(638661),
        T0: sdk.String("deleniti"),
        T1: sdk.String("ad"),
        Timespan: sdk.Float32(6153.03),
        Vlan: sdk.Int64(360204),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessFailedConnections200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessLatencyHistory

Return average wireless latency over time for a network, device, or network client

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
    res, err := s.Monitor.GetNetworkWirelessLatencyHistory(ctx, operations.GetNetworkWirelessLatencyHistoryRequest{
        AccessCategory: operations.GetNetworkWirelessLatencyHistoryAccessCategoryEnumVoiceTraffic.ToPointer(),
        ApTag: sdk.String("dicta"),
        AutoResolution: sdk.Bool(false),
        Band: operations.GetNetworkWirelessLatencyHistoryBandEnumSix.ToPointer(),
        ClientID: sdk.String("amet"),
        DeviceSerial: sdk.String("dolores"),
        NetworkID: "quidem",
        Resolution: sdk.Int64(743991),
        Ssid: sdk.Int64(165566),
        T0: sdk.String("vitae"),
        T1: sdk.String("consectetur"),
        Timespan: sdk.Float32(9177.55),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessLatencyHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessLatencyStats

Aggregated latency info for this network

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
    res, err := s.Monitor.GetNetworkWirelessLatencyStats(ctx, operations.GetNetworkWirelessLatencyStatsRequest{
        ApTag: sdk.String("nesciunt"),
        Band: operations.GetNetworkWirelessLatencyStatsBandEnumSix.ToPointer(),
        Fields: sdk.String("dolor"),
        NetworkID: "vitae",
        Ssid: sdk.Int64(783111),
        T0: sdk.String("temporibus"),
        T1: sdk.String("ea"),
        Timespan: sdk.Float32(6784.19),
        Vlan: sdk.Int64(350295),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessLatencyStats200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessMeshStatuses

List wireless mesh statuses for repeaters

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
    res, err := s.Monitor.GetNetworkWirelessMeshStatuses(ctx, operations.GetNetworkWirelessMeshStatusesRequest{
        EndingBefore: sdk.String("expedita"),
        NetworkID: "repudiandae",
        PerPage: sdk.Int64(487429),
        StartingAfter: sdk.String("incidunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessMeshStatuses200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSignalQualityHistory

Return signal quality (SNR/RSSI) over time for a device or network client

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
    res, err := s.Monitor.GetNetworkWirelessSignalQualityHistory(ctx, operations.GetNetworkWirelessSignalQualityHistoryRequest{
        ApTag: sdk.String("omnis"),
        AutoResolution: sdk.Bool(false),
        Band: operations.GetNetworkWirelessSignalQualityHistoryBandEnumTwo4.ToPointer(),
        ClientID: sdk.String("vel"),
        DeviceSerial: sdk.String("expedita"),
        NetworkID: "excepturi",
        Resolution: sdk.Int64(424322),
        Ssid: sdk.Int64(789791),
        T0: sdk.String("iure"),
        T1: sdk.String("nesciunt"),
        Timespan: sdk.Float32(4238.27),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSignalQualityHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessUsageHistory

Return AP usage over time for a device or network client

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
    res, err := s.Monitor.GetNetworkWirelessUsageHistory(ctx, operations.GetNetworkWirelessUsageHistoryRequest{
        ApTag: sdk.String("vero"),
        AutoResolution: sdk.Bool(false),
        Band: operations.GetNetworkWirelessUsageHistoryBandEnumFive.ToPointer(),
        ClientID: sdk.String("aliquam"),
        DeviceSerial: sdk.String("repellendus"),
        NetworkID: "fugit",
        Resolution: sdk.Int64(518898),
        Ssid: sdk.Int64(634549),
        T0: sdk.String("quaerat"),
        T1: sdk.String("rem"),
        Timespan: sdk.Float32(920.55),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessUsageHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationAdaptivePolicyOverview

Returns adaptive policy aggregate statistics for an organization

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
    res, err := s.Monitor.GetOrganizationAdaptivePolicyOverview(ctx, operations.GetOrganizationAdaptivePolicyOverviewRequest{
        OrganizationID: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAdaptivePolicyOverview200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationAPIRequests

List the API requests made by an organization

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
    res, err := s.Monitor.GetOrganizationAPIRequests(ctx, operations.GetOrganizationAPIRequestsRequest{
        AdminID: sdk.String("excepturi"),
        EndingBefore: sdk.String("similique"),
        Method: operations.GetOrganizationAPIRequestsMethodEnumDelete.ToPointer(),
        OperationIds: []string{
            "rem",
            "tempora",
            "veritatis",
        },
        OrganizationID: "dicta",
        Path: sdk.String("perspiciatis"),
        PerPage: sdk.Int64(510305),
        ResponseCode: sdk.Int64(410333),
        SourceIP: sdk.String("ut"),
        StartingAfter: sdk.String("aut"),
        T0: sdk.String("minima"),
        T1: sdk.String("laudantium"),
        Timespan: sdk.Float32(4939.69),
        UserAgent: sdk.String("vel"),
        Version: operations.GetOrganizationAPIRequestsVersionEnumOne.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAPIRequests200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationAPIRequestsOverview

Return an aggregated overview of API requests data

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
    res, err := s.Monitor.GetOrganizationAPIRequestsOverview(ctx, operations.GetOrganizationAPIRequestsOverviewRequest{
        OrganizationID: "dolorem",
        T0: sdk.String("aut"),
        T1: sdk.String("quos"),
        Timespan: sdk.Float32(4782.17),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAPIRequestsOverview200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationAPIRequestsOverviewResponseCodesByInterval

Tracks organizations' API requests by response code across a given time period

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
    res, err := s.Monitor.GetOrganizationAPIRequestsOverviewResponseCodesByInterval(ctx, operations.GetOrganizationAPIRequestsOverviewResponseCodesByIntervalRequest{
        AdminIds: []string{
            "sunt",
        },
        Interval: sdk.Int64(246855),
        OperationIds: []string{
            "recusandae",
            "eius",
            "aut",
            "ex",
        },
        OrganizationID: "inventore",
        SourceIps: []string{
            "corrupti",
        },
        T0: sdk.String("sed"),
        T1: sdk.String("nulla"),
        Timespan: sdk.Float32(17.89),
        UserAgent: sdk.String("provident"),
        Version: operations.GetOrganizationAPIRequestsOverviewResponseCodesByIntervalVersionEnumZero.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAPIRequestsOverviewResponseCodesByInterval200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationApplianceSecurityEvents

List the security events for an organization

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
    res, err := s.Monitor.GetOrganizationApplianceSecurityEvents(ctx, operations.GetOrganizationApplianceSecurityEventsRequest{
        EndingBefore: sdk.String("dolorem"),
        OrganizationID: "placeat",
        PerPage: sdk.Int64(561728),
        SortOrder: operations.GetOrganizationApplianceSecurityEventsSortOrderEnumDescending.ToPointer(),
        StartingAfter: sdk.String("nobis"),
        T0: sdk.String("temporibus"),
        T1: sdk.String("sint"),
        Timespan: sdk.Float32(1754.58),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationApplianceSecurityEvents200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationApplianceUplinkStatuses

List the uplink status of every Meraki MX and Z series appliances in the organization

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
    res, err := s.Monitor.GetOrganizationApplianceUplinkStatuses(ctx, operations.GetOrganizationApplianceUplinkStatusesRequest{
        EndingBefore: sdk.String("odio"),
        Iccids: []string{
            "ad",
            "soluta",
            "officia",
        },
        NetworkIds: []string{
            "exercitationem",
            "vitae",
        },
        OrganizationID: "illo",
        PerPage: sdk.Int64(742203),
        Serials: []string{
            "totam",
            "ipsum",
            "nihil",
        },
        StartingAfter: sdk.String("accusantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationApplianceUplinkStatuses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationApplianceVpnStats

Show VPN history stat for networks in an organization

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
    res, err := s.Monitor.GetOrganizationApplianceVpnStats(ctx, operations.GetOrganizationApplianceVpnStatsRequest{
        EndingBefore: sdk.String("temporibus"),
        NetworkIds: []string{
            "dignissimos",
            "rem",
            "dolore",
        },
        OrganizationID: "voluptatibus",
        PerPage: sdk.Int64(748432),
        StartingAfter: sdk.String("architecto"),
        T0: sdk.String("tempora"),
        T1: sdk.String("eum"),
        Timespan: sdk.Float32(2762.85),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationApplianceVpnStats200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationApplianceVpnStatuses

Show VPN status for networks in an organization

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
    res, err := s.Monitor.GetOrganizationApplianceVpnStatuses(ctx, operations.GetOrganizationApplianceVpnStatusesRequest{
        EndingBefore: sdk.String("ducimus"),
        NetworkIds: []string{
            "sequi",
        },
        OrganizationID: "architecto",
        PerPage: sdk.Int64(710874),
        StartingAfter: sdk.String("quod"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationApplianceVpnStatuses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationCellularGatewayUplinkStatuses

List the uplink status of every Meraki MG cellular gateway in the organization

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
    res, err := s.Monitor.GetOrganizationCellularGatewayUplinkStatuses(ctx, operations.GetOrganizationCellularGatewayUplinkStatusesRequest{
        EndingBefore: sdk.String("minima"),
        Iccids: []string{
            "voluptates",
            "suscipit",
            "veritatis",
        },
        NetworkIds: []string{
            "velit",
            "sapiente",
            "dolorem",
        },
        OrganizationID: "quam",
        PerPage: sdk.Int64(108159),
        Serials: []string{
            "dolores",
            "voluptatum",
        },
        StartingAfter: sdk.String("reprehenderit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationCellularGatewayUplinkStatuses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationClientsBandwidthUsageHistory

Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.

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
    res, err := s.Monitor.GetOrganizationClientsBandwidthUsageHistory(ctx, operations.GetOrganizationClientsBandwidthUsageHistoryRequest{
        OrganizationID: "modi",
        T0: sdk.String("minus"),
        T1: sdk.String("non"),
        Timespan: sdk.Float32(4478.78),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationClientsBandwidthUsageHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationClientsOverview

Return summary information around client data usage (in mb) across the given organization.

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
    res, err := s.Monitor.GetOrganizationClientsOverview(ctx, operations.GetOrganizationClientsOverviewRequest{
        OrganizationID: "odio",
        T0: sdk.String("placeat"),
        T1: sdk.String("blanditiis"),
        Timespan: sdk.Float32(8194.39),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationClientsOverview200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationConfigurationChanges

View the Change Log for your organization

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
    res, err := s.Monitor.GetOrganizationConfigurationChanges(ctx, operations.GetOrganizationConfigurationChangesRequest{
        AdminID: sdk.String("labore"),
        EndingBefore: sdk.String("consectetur"),
        NetworkID: sdk.String("occaecati"),
        OrganizationID: "voluptates",
        PerPage: sdk.Int64(770792),
        StartingAfter: sdk.String("ea"),
        T0: sdk.String("harum"),
        T1: sdk.String("assumenda"),
        Timespan: sdk.Float32(1471.08),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationConfigurationChanges200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationDevicesAvailabilities

List the availability information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.

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
    res, err := s.Monitor.GetOrganizationDevicesAvailabilities(ctx, operations.GetOrganizationDevicesAvailabilitiesRequest{
        EndingBefore: sdk.String("placeat"),
        NetworkIds: []string{
            "illum",
            "alias",
            "aperiam",
        },
        OrganizationID: "nisi",
        PerPage: sdk.Int64(842789),
        ProductTypes: []string{
            "esse",
            "minus",
        },
        Serials: []string{
            "accusamus",
            "soluta",
        },
        StartingAfter: sdk.String("distinctio"),
        Tags: []string{
            "quo",
            "iste",
            "itaque",
        },
        TagsFilterType: operations.GetOrganizationDevicesAvailabilitiesTagsFilterTypeEnumWithAnyTags.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationDevicesAvailabilities200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationDevicesPowerModulesStatusesByDevice

List the power status information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.

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
    res, err := s.Monitor.GetOrganizationDevicesPowerModulesStatusesByDevice(ctx, operations.GetOrganizationDevicesPowerModulesStatusesByDeviceRequest{
        EndingBefore: sdk.String("odio"),
        NetworkIds: []string{
            "incidunt",
            "eligendi",
        },
        OrganizationID: "ipsam",
        PerPage: sdk.Int64(695290),
        ProductTypes: []string{
            "numquam",
            "enim",
        },
        Serials: []string{
            "aliquam",
            "est",
            "maiores",
        },
        StartingAfter: sdk.String("quia"),
        Tags: []string{
            "eligendi",
            "deserunt",
            "distinctio",
            "placeat",
        },
        TagsFilterType: operations.GetOrganizationDevicesPowerModulesStatusesByDeviceTagsFilterTypeEnumWithAnyTags.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationDevicesPowerModulesStatusesByDevice200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationDevicesStatuses

List the status of every Meraki device in the organization

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
    res, err := s.Monitor.GetOrganizationDevicesStatuses(ctx, operations.GetOrganizationDevicesStatusesRequest{
        EndingBefore: sdk.String("nam"),
        Models: []string{
            "fuga",
            "nesciunt",
            "fugit",
            "excepturi",
        },
        NetworkIds: []string{
            "quis",
        },
        OrganizationID: "officiis",
        PerPage: sdk.Int64(737172),
        ProductTypes: []GetOrganizationDevicesStatusesProductTypesEnum{
            operations.GetOrganizationDevicesStatusesProductTypesEnumCellularGateway,
        },
        Serials: []string{
            "autem",
            "maxime",
            "est",
        },
        StartingAfter: sdk.String("distinctio"),
        Statuses: []GetOrganizationDevicesStatusesStatusesEnum{
            operations.GetOrganizationDevicesStatusesStatusesEnumAlerting,
            operations.GetOrganizationDevicesStatusesStatusesEnumAlerting,
            operations.GetOrganizationDevicesStatusesStatusesEnumOffline,
            operations.GetOrganizationDevicesStatusesStatusesEnumAlerting,
        },
        Tags: []string{
            "asperiores",
        },
        TagsFilterType: operations.GetOrganizationDevicesStatusesTagsFilterTypeEnumWithAllTags.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationDevicesStatuses200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationDevicesStatusesOverview

Return an overview of current device statuses

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
    res, err := s.Monitor.GetOrganizationDevicesStatusesOverview(ctx, operations.GetOrganizationDevicesStatusesOverviewRequest{
        NetworkIds: []string{
            "animi",
            "nihil",
        },
        OrganizationID: "ipsam",
        ProductTypes: []GetOrganizationDevicesStatusesOverviewProductTypesEnum{
            operations.GetOrganizationDevicesStatusesOverviewProductTypesEnumSensor,
            operations.GetOrganizationDevicesStatusesOverviewProductTypesEnumWireless,
            operations.GetOrganizationDevicesStatusesOverviewProductTypesEnumWireless,
            operations.GetOrganizationDevicesStatusesOverviewProductTypesEnumCamera,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationDevicesStatusesOverview200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationDevicesUplinksAddressesByDevice

List the current uplink addresses for devices in an organization.

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
    res, err := s.Monitor.GetOrganizationDevicesUplinksAddressesByDevice(ctx, operations.GetOrganizationDevicesUplinksAddressesByDeviceRequest{
        EndingBefore: sdk.String("quaerat"),
        NetworkIds: []string{
            "dolores",
            "harum",
        },
        OrganizationID: "eveniet",
        PerPage: sdk.Int64(857014),
        ProductTypes: []string{
            "modi",
            "ducimus",
        },
        Serials: []string{
            "a",
        },
        StartingAfter: sdk.String("impedit"),
        Tags: []string{
            "blanditiis",
            "minus",
        },
        TagsFilterType: operations.GetOrganizationDevicesUplinksAddressesByDeviceTagsFilterTypeEnumWithAllTags.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationDevicesUplinksLossAndLatency

Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

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
    res, err := s.Monitor.GetOrganizationDevicesUplinksLossAndLatency(ctx, operations.GetOrganizationDevicesUplinksLossAndLatencyRequest{
        IP: sdk.String("quas"),
        OrganizationID: "dolores",
        T0: sdk.String("harum"),
        T1: sdk.String("praesentium"),
        Timespan: sdk.Float32(4706.44),
        Uplink: operations.GetOrganizationDevicesUplinksLossAndLatencyUplinkEnumCellular.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationDevicesUplinksLossAndLatency200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationLicensesOverview

Return an overview of the license state for an organization

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
    res, err := s.Monitor.GetOrganizationLicensesOverview(ctx, operations.GetOrganizationLicensesOverviewRequest{
        OrganizationID: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationLicensesOverview200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationOpenapiSpec

Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON

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
    res, err := s.Monitor.GetOrganizationOpenapiSpec(ctx, operations.GetOrganizationOpenapiSpecRequest{
        OrganizationID: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationOpenapiSpec200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationSensorReadingsHistory

Return all reported readings from sensors in a given timespan, sorted by timestamp

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
    res, err := s.Monitor.GetOrganizationSensorReadingsHistory(ctx, operations.GetOrganizationSensorReadingsHistoryRequest{
        EndingBefore: sdk.String("fugit"),
        Metrics: []string{
            "doloribus",
            "aliquid",
        },
        NetworkIds: []string{
            "et",
            "voluptate",
            "minima",
        },
        OrganizationID: "dignissimos",
        PerPage: sdk.Int64(540977),
        Serials: []string{
            "ratione",
        },
        StartingAfter: sdk.String("voluptatem"),
        T0: sdk.String("incidunt"),
        T1: sdk.String("maxime"),
        Timespan: sdk.Float32(2728.81),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSensorReadingsHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationSensorReadingsLatest

Return the latest available reading for each metric from each sensor, sorted by sensor serial

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
    res, err := s.Monitor.GetOrganizationSensorReadingsLatest(ctx, operations.GetOrganizationSensorReadingsLatestRequest{
        EndingBefore: sdk.String("aperiam"),
        Metrics: []string{
            "impedit",
            "magni",
            "expedita",
        },
        NetworkIds: []string{
            "dolorum",
            "temporibus",
        },
        OrganizationID: "corrupti",
        PerPage: sdk.Int64(176895),
        Serials: []string{
            "ut",
            "voluptatibus",
        },
        StartingAfter: sdk.String("nulla"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSensorReadingsLatest200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationSummaryTopAppliancesByUtilization

Return the top 10 appliances sorted by utilization over given time range.

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
    res, err := s.Monitor.GetOrganizationSummaryTopAppliancesByUtilization(ctx, operations.GetOrganizationSummaryTopAppliancesByUtilizationRequest{
        OrganizationID: "eveniet",
        T0: sdk.String("velit"),
        T1: sdk.String("molestiae"),
        Timespan: sdk.Float32(4746.19),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSummaryTopAppliancesByUtilization200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationSummaryTopClientsByUsage

Return metrics for organization's top 10 clients by data usage (in mb) over given time range.

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
    res, err := s.Monitor.GetOrganizationSummaryTopClientsByUsage(ctx, operations.GetOrganizationSummaryTopClientsByUsageRequest{
        OrganizationID: "dolores",
        T0: sdk.String("incidunt"),
        T1: sdk.String("consectetur"),
        Timespan: sdk.Float32(3496.91),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSummaryTopClientsByUsage200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationSummaryTopClientsManufacturersByUsage

Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.

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
    res, err := s.Monitor.GetOrganizationSummaryTopClientsManufacturersByUsage(ctx, operations.GetOrganizationSummaryTopClientsManufacturersByUsageRequest{
        OrganizationID: "aut",
        T0: sdk.String("officiis"),
        T1: sdk.String("at"),
        Timespan: sdk.Float32(5355.77),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSummaryTopClientsManufacturersByUsage200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationSummaryTopDevicesByUsage

Return metrics for organization's top 10 devices sorted by data usage over given time range. Default unit is megabytes.

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
    res, err := s.Monitor.GetOrganizationSummaryTopDevicesByUsage(ctx, operations.GetOrganizationSummaryTopDevicesByUsageRequest{
        OrganizationID: "nemo",
        T0: sdk.String("dolorum"),
        T1: sdk.String("odio"),
        Timespan: sdk.Float32(9625.25),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSummaryTopDevicesByUsage200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationSummaryTopDevicesModelsByUsage

Return metrics for organization's top 10 device models sorted by data usage over given time range. Default unit is megabytes.

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
    res, err := s.Monitor.GetOrganizationSummaryTopDevicesModelsByUsage(ctx, operations.GetOrganizationSummaryTopDevicesModelsByUsageRequest{
        OrganizationID: "rem",
        T0: sdk.String("placeat"),
        T1: sdk.String("minus"),
        Timespan: sdk.Float32(1602.06),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSummaryTopDevicesModelsByUsage200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationSummaryTopSsidsByUsage

Return metrics for organization's top 10 ssids by data usage over given time range. Default unit is megabytes.

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
    res, err := s.Monitor.GetOrganizationSummaryTopSsidsByUsage(ctx, operations.GetOrganizationSummaryTopSsidsByUsageRequest{
        OrganizationID: "iste",
        T0: sdk.String("veritatis"),
        T1: sdk.String("ab"),
        Timespan: sdk.Float32(6807.62),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSummaryTopSsidsByUsage200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationSummaryTopSwitchesByEnergyUsage

Return metrics for organization's top 10 switches by energy usage over given time range. Default unit is joules.

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
    res, err := s.Monitor.GetOrganizationSummaryTopSwitchesByEnergyUsage(ctx, operations.GetOrganizationSummaryTopSwitchesByEnergyUsageRequest{
        OrganizationID: "voluptas",
        T0: sdk.String("quidem"),
        T1: sdk.String("esse"),
        Timespan: sdk.Float32(8914.03),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSummaryTopSwitchesByEnergyUsage200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationUplinksStatuses

List the uplink status of every Meraki MX, MG and Z series devices in the organization

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
    res, err := s.Monitor.GetOrganizationUplinksStatuses(ctx, operations.GetOrganizationUplinksStatusesRequest{
        EndingBefore: sdk.String("distinctio"),
        Iccids: []string{
            "porro",
            "commodi",
            "alias",
            "doloremque",
        },
        NetworkIds: []string{
            "sapiente",
            "voluptatem",
            "sunt",
        },
        OrganizationID: "temporibus",
        PerPage: sdk.Int64(848389),
        Serials: []string{
            "atque",
        },
        StartingAfter: sdk.String("veniam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationUplinksStatuses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationWebhooksAlertTypes

Return a list of alert types to be used with managing webhook alerts

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
    res, err := s.Monitor.GetOrganizationWebhooksAlertTypes(ctx, operations.GetOrganizationWebhooksAlertTypesRequest{
        OrganizationID: "sed",
        ProductType: operations.GetOrganizationWebhooksAlertTypesProductTypeEnumCellularGateway.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationWebhooksAlertTypes200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationWebhooksLogs

Return the log of webhook POSTs sent

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
    res, err := s.Monitor.GetOrganizationWebhooksLogs(ctx, operations.GetOrganizationWebhooksLogsRequest{
        EndingBefore: sdk.String("quo"),
        OrganizationID: "pariatur",
        PerPage: sdk.Int64(658464),
        StartingAfter: sdk.String("magnam"),
        T0: sdk.String("officiis"),
        T1: sdk.String("soluta"),
        Timespan: sdk.Float32(7194.55),
        URL: sdk.String("iste"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationWebhooksLogs200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
