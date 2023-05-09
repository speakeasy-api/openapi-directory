# monitor

### Available Operations

* [generateDeviceCameraSnapshot](#generatedevicecamerasnapshot) - Generate a snapshot of what the camera sees at the specified time and return a link to that image.
* [getAdministeredIdentitiesMe](#getadministeredidentitiesme) - Returns the identity of the current user.
* [getDeviceApplianceDhcpSubnets](#getdeviceappliancedhcpsubnets) - Return the DHCP subnet information for an appliance
* [getDeviceAppliancePerformance](#getdeviceapplianceperformance) - Return the performance score for a single MX
* [getDeviceAppliancePrefixesDelegated](#getdeviceapplianceprefixesdelegated) - Return current delegated IPv6 prefixes on an appliance.
* [getDeviceAppliancePrefixesDelegatedVlanAssignments](#getdeviceapplianceprefixesdelegatedvlanassignments) - Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
* [getDeviceCameraAnalyticsLive](#getdevicecameraanalyticslive) - Returns live state from camera of analytics zones
* [getDeviceCameraAnalyticsOverview](#getdevicecameraanalyticsoverview) - Returns an overview of aggregate analytics data for a timespan
* [getDeviceCameraAnalyticsRecent](#getdevicecameraanalyticsrecent) - Returns most recent record for analytics zones
* [getDeviceCameraAnalyticsZoneHistory](#getdevicecameraanalyticszonehistory) - Return historical records for analytic zones
* [getDeviceCameraAnalyticsZones](#getdevicecameraanalyticszones) - Returns all configured analytic zones for this camera
* [getDeviceClients](#getdeviceclients) - List the clients of a device, up to a maximum of a month ago
* [getDeviceLldpCdp](#getdevicelldpcdp) - List LLDP and CDP information for a device
* [getDeviceLossAndLatencyHistory](#getdevicelossandlatencyhistory) - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
* [getDeviceSwitchPortsStatuses](#getdeviceswitchportsstatuses) - Return the status for all the ports of a switch
* [getDeviceSwitchPortsStatusesPackets](#getdeviceswitchportsstatusespackets) - Return the packet counters for all the ports of a switch
* [getDeviceWirelessConnectionStats](#getdevicewirelessconnectionstats) - Aggregated connectivity info for a given AP on this network
* [getDeviceWirelessLatencyStats](#getdevicewirelesslatencystats) - Aggregated latency info for a given AP on this network
* [getDeviceWirelessStatus](#getdevicewirelessstatus) - Return the SSID statuses of an access point
* [getNetworkAlertsHistory](#getnetworkalertshistory) - Return the alert history for this network
* [getNetworkApplianceClientSecurityEvents](#getnetworkapplianceclientsecurityevents) - List the security events for a client
* [getNetworkApplianceSecurityEvents](#getnetworkappliancesecurityevents) - List the security events for a network
* [getNetworkApplianceUplinksUsageHistory](#getnetworkapplianceuplinksusagehistory) - Get the sent and received bytes for each uplink of a network.
* [getNetworkBluetoothClient](#getnetworkbluetoothclient) - Return a Bluetooth client
* [getNetworkBluetoothClients](#getnetworkbluetoothclients) - List the Bluetooth clients seen by APs in this network
* [getNetworkClient](#getnetworkclient) - Return the client associated with the given identifier
* [getNetworkClientTrafficHistory](#getnetworkclienttraffichistory) - Return the client's network traffic data over time
* [getNetworkClientUsageHistory](#getnetworkclientusagehistory) - Return the client's daily usage history
* [getNetworkClients](#getnetworkclients) - List the clients that have used this network in the timespan
* [getNetworkClientsApplicationUsage](#getnetworkclientsapplicationusage) - Return the application usage data for clients
* [getNetworkClientsBandwidthUsageHistory](#getnetworkclientsbandwidthusagehistory) - Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
* [getNetworkClientsOverview](#getnetworkclientsoverview) - Return overview statistics for network clients
* [getNetworkClientsUsageHistories](#getnetworkclientsusagehistories) - Return the usage histories for clients
* [getNetworkEvents](#getnetworkevents) - List the events for the network
* [getNetworkEventsEventTypes](#getnetworkeventseventtypes) - List the event type to human-readable description
* [getNetworkInsightApplicationHealthByTime](#getnetworkinsightapplicationhealthbytime) - Get application health by time
* [getNetworkNetworkHealthChannelUtilization](#getnetworknetworkhealthchannelutilization) - Get the channel utilization over each radio for all APs in a network.
* [getNetworkSensorAlertsCurrentOverviewByMetric](#getnetworksensoralertscurrentoverviewbymetric) - Return an overview of currently alerting sensors by metric
* [getNetworkSensorAlertsOverviewByMetric](#getnetworksensoralertsoverviewbymetric) - Return an overview of alert occurrences over a timespan, by metric
* [getNetworkSmDeviceCellularUsageHistory](#getnetworksmdevicecellularusagehistory) - Return the client's daily cellular data usage history
* [getNetworkSmDeviceConnectivity](#getnetworksmdeviceconnectivity) - Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
* [getNetworkSmDeviceDesktopLogs](#getnetworksmdevicedesktoplogs) - Return historical records of various Systems Manager network connection details for desktop devices.
* [getNetworkSmDeviceDeviceCommandLogs](#getnetworksmdevicedevicecommandlogs) - Return historical records of commands sent to Systems Manager devices
* [getNetworkSmDevicePerformanceHistory](#getnetworksmdeviceperformancehistory) - Return historical records of various Systems Manager client metrics for desktop devices.
* [getNetworkSplashLoginAttempts](#getnetworksplashloginattempts) - List the splash login attempts for a network
* [getNetworkTopologyLinkLayer](#getnetworktopologylinklayer) - List the LLDP and CDP information for all discovered devices and connections in a network.
* [getNetworkTraffic](#getnetworktraffic) - Return the traffic analysis data for this network
* [getNetworkWirelessAirMarshal](#getnetworkwirelessairmarshal) - List Air Marshal scan results from a network
* [getNetworkWirelessChannelUtilizationHistory](#getnetworkwirelesschannelutilizationhistory) - Return AP channel utilization over time for a device or network client
* [getNetworkWirelessClientConnectionStats](#getnetworkwirelessclientconnectionstats) - Aggregated connectivity info for a given client on this network
* [getNetworkWirelessClientConnectivityEvents](#getnetworkwirelessclientconnectivityevents) - List the wireless connectivity events for a client within a network in the timespan.
* [getNetworkWirelessClientCountHistory](#getnetworkwirelessclientcounthistory) - Return wireless client counts over time for a network, device, or network client
* [getNetworkWirelessClientLatencyHistory](#getnetworkwirelessclientlatencyhistory) - Return the latency history for a client
* [getNetworkWirelessClientLatencyStats](#getnetworkwirelessclientlatencystats) - Aggregated latency info for a given client on this network
* [getNetworkWirelessClientsConnectionStats](#getnetworkwirelessclientsconnectionstats) - Aggregated connectivity info for this network, grouped by clients
* [getNetworkWirelessClientsLatencyStats](#getnetworkwirelessclientslatencystats) - Aggregated latency info for this network, grouped by clients
* [getNetworkWirelessConnectionStats](#getnetworkwirelessconnectionstats) - Aggregated connectivity info for this network
* [getNetworkWirelessDataRateHistory](#getnetworkwirelessdataratehistory) - Return PHY data rates over time for a network, device, or network client
* [getNetworkWirelessDevicesConnectionStats](#getnetworkwirelessdevicesconnectionstats) - Aggregated connectivity info for this network, grouped by node
* [getNetworkWirelessDevicesLatencyStats](#getnetworkwirelessdeviceslatencystats) - Aggregated latency info for this network, grouped by node
* [getNetworkWirelessFailedConnections](#getnetworkwirelessfailedconnections) - List of all failed client connection events on this network in a given time range
* [getNetworkWirelessLatencyHistory](#getnetworkwirelesslatencyhistory) - Return average wireless latency over time for a network, device, or network client
* [getNetworkWirelessLatencyStats](#getnetworkwirelesslatencystats) - Aggregated latency info for this network
* [getNetworkWirelessMeshStatuses](#getnetworkwirelessmeshstatuses) - List wireless mesh statuses for repeaters
* [getNetworkWirelessSignalQualityHistory](#getnetworkwirelesssignalqualityhistory) - Return signal quality (SNR/RSSI) over time for a device or network client
* [getNetworkWirelessUsageHistory](#getnetworkwirelessusagehistory) - Return AP usage over time for a device or network client
* [getOrganizationAdaptivePolicyOverview](#getorganizationadaptivepolicyoverview) - Returns adaptive policy aggregate statistics for an organization
* [getOrganizationApiRequests](#getorganizationapirequests) - List the API requests made by an organization
* [getOrganizationApiRequestsOverview](#getorganizationapirequestsoverview) - Return an aggregated overview of API requests data
* [getOrganizationApiRequestsOverviewResponseCodesByInterval](#getorganizationapirequestsoverviewresponsecodesbyinterval) - Tracks organizations' API requests by response code across a given time period
* [getOrganizationApplianceSecurityEvents](#getorganizationappliancesecurityevents) - List the security events for an organization
* [getOrganizationApplianceUplinkStatuses](#getorganizationapplianceuplinkstatuses) - List the uplink status of every Meraki MX and Z series appliances in the organization
* [getOrganizationApplianceVpnStats](#getorganizationappliancevpnstats) - Show VPN history stat for networks in an organization
* [getOrganizationApplianceVpnStatuses](#getorganizationappliancevpnstatuses) - Show VPN status for networks in an organization
* [getOrganizationCellularGatewayUplinkStatuses](#getorganizationcellulargatewayuplinkstatuses) - List the uplink status of every Meraki MG cellular gateway in the organization
* [getOrganizationClientsBandwidthUsageHistory](#getorganizationclientsbandwidthusagehistory) - Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.
* [getOrganizationClientsOverview](#getorganizationclientsoverview) - Return summary information around client data usage (in mb) across the given organization.
* [getOrganizationConfigurationChanges](#getorganizationconfigurationchanges) - View the Change Log for your organization
* [getOrganizationDevicesAvailabilities](#getorganizationdevicesavailabilities) - List the availability information for devices in an organization
* [getOrganizationDevicesPowerModulesStatusesByDevice](#getorganizationdevicespowermodulesstatusesbydevice) - List the power status information for devices in an organization
* [getOrganizationDevicesStatuses](#getorganizationdevicesstatuses) - List the status of every Meraki device in the organization
* [getOrganizationDevicesStatusesOverview](#getorganizationdevicesstatusesoverview) - Return an overview of current device statuses
* [getOrganizationDevicesUplinksAddressesByDevice](#getorganizationdevicesuplinksaddressesbydevice) - List the current uplink addresses for devices in an organization.
* [getOrganizationDevicesUplinksLossAndLatency](#getorganizationdevicesuplinkslossandlatency) - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* [getOrganizationLicensesOverview](#getorganizationlicensesoverview) - Return an overview of the license state for an organization
* [getOrganizationOpenapiSpec](#getorganizationopenapispec) - Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
* [getOrganizationSensorReadingsHistory](#getorganizationsensorreadingshistory) - Return all reported readings from sensors in a given timespan, sorted by timestamp
* [getOrganizationSensorReadingsLatest](#getorganizationsensorreadingslatest) - Return the latest available reading for each metric from each sensor, sorted by sensor serial
* [getOrganizationSummaryTopAppliancesByUtilization](#getorganizationsummarytopappliancesbyutilization) - Return the top 10 appliances sorted by utilization over given time range.
* [getOrganizationSummaryTopClientsByUsage](#getorganizationsummarytopclientsbyusage) - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* [getOrganizationSummaryTopClientsManufacturersByUsage](#getorganizationsummarytopclientsmanufacturersbyusage) - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* [getOrganizationSummaryTopDevicesByUsage](#getorganizationsummarytopdevicesbyusage) - Return metrics for organization's top 10 devices sorted by data usage over given time range
* [getOrganizationSummaryTopDevicesModelsByUsage](#getorganizationsummarytopdevicesmodelsbyusage) - Return metrics for organization's top 10 device models sorted by data usage over given time range
* [getOrganizationSummaryTopSsidsByUsage](#getorganizationsummarytopssidsbyusage) - Return metrics for organization's top 10 ssids by data usage over given time range
* [getOrganizationSummaryTopSwitchesByEnergyUsage](#getorganizationsummarytopswitchesbyenergyusage) - Return metrics for organization's top 10 switches by energy usage over given time range
* [getOrganizationUplinksStatuses](#getorganizationuplinksstatuses) - List the uplink status of every Meraki MX, MG and Z series devices in the organization
* [getOrganizationWebhooksAlertTypes](#getorganizationwebhooksalerttypes) - Return a list of alert types to be used with managing webhook alerts
* [getOrganizationWebhooksLogs](#getorganizationwebhookslogs) - Return the log of webhook POSTs sent

## generateDeviceCameraSnapshot

Generate a snapshot of what the camera sees at the specified time and return a link to that image.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateDeviceCameraSnapshotRequest;
import org.openapis.openapi.models.operations.GenerateDeviceCameraSnapshotRequestBody;
import org.openapis.openapi.models.operations.GenerateDeviceCameraSnapshotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GenerateDeviceCameraSnapshotRequest req = new GenerateDeviceCameraSnapshotRequest("ducimus") {{
                requestBody = new GenerateDeviceCameraSnapshotRequestBody() {{
                    fullframe = false;
                    timestamp = OffsetDateTime.parse("2022-03-24T13:46:23.514Z");
                }};;
            }};            

            GenerateDeviceCameraSnapshotResponse res = sdk.monitor.generateDeviceCameraSnapshot(req);

            if (res.generateDeviceCameraSnapshot202ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAdministeredIdentitiesMe

Returns the identity of the current user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAdministeredIdentitiesMeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAdministeredIdentitiesMeResponse res = sdk.monitor.getAdministeredIdentitiesMe();

            if (res.getAdministeredIdentitiesMe200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceApplianceDhcpSubnets

Return the DHCP subnet information for an appliance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceApplianceDhcpSubnetsRequest;
import org.openapis.openapi.models.operations.GetDeviceApplianceDhcpSubnetsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceApplianceDhcpSubnetsRequest req = new GetDeviceApplianceDhcpSubnetsRequest("ducimus");            

            GetDeviceApplianceDhcpSubnetsResponse res = sdk.monitor.getDeviceApplianceDhcpSubnets(req);

            if (res.getDeviceApplianceDhcpSubnets200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceAppliancePerformance

Return the performance score for a single MX. Only primary MX devices supported. If no data is available, a 204 error code is returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceAppliancePerformanceRequest;
import org.openapis.openapi.models.operations.GetDeviceAppliancePerformanceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceAppliancePerformanceRequest req = new GetDeviceAppliancePerformanceRequest("vitae");            

            GetDeviceAppliancePerformanceResponse res = sdk.monitor.getDeviceAppliancePerformance(req);

            if (res.getDeviceAppliancePerformance200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceAppliancePrefixesDelegated

Return current delegated IPv6 prefixes on an appliance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceAppliancePrefixesDelegatedRequest;
import org.openapis.openapi.models.operations.GetDeviceAppliancePrefixesDelegatedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceAppliancePrefixesDelegatedRequest req = new GetDeviceAppliancePrefixesDelegatedRequest("vero");            

            GetDeviceAppliancePrefixesDelegatedResponse res = sdk.monitor.getDeviceAppliancePrefixesDelegated(req);

            if (res.getDeviceAppliancePrefixesDelegated200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceAppliancePrefixesDelegatedVlanAssignments

Return prefixes assigned to all IPv6 enabled VLANs on an appliance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceAppliancePrefixesDelegatedVlanAssignmentsRequest;
import org.openapis.openapi.models.operations.GetDeviceAppliancePrefixesDelegatedVlanAssignmentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceAppliancePrefixesDelegatedVlanAssignmentsRequest req = new GetDeviceAppliancePrefixesDelegatedVlanAssignmentsRequest("aliquid");            

            GetDeviceAppliancePrefixesDelegatedVlanAssignmentsResponse res = sdk.monitor.getDeviceAppliancePrefixesDelegatedVlanAssignments(req);

            if (res.getDeviceAppliancePrefixesDelegatedVlanAssignments200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceCameraAnalyticsLive

Returns live state from camera of analytics zones

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsLiveRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsLiveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraAnalyticsLiveRequest req = new GetDeviceCameraAnalyticsLiveRequest("omnis");            

            GetDeviceCameraAnalyticsLiveResponse res = sdk.monitor.getDeviceCameraAnalyticsLive(req);

            if (res.getDeviceCameraAnalyticsLive200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceCameraAnalyticsOverview

Returns an overview of aggregate analytics data for a timespan

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsOverviewObjectTypeEnum;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsOverviewRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsOverviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraAnalyticsOverviewRequest req = new GetDeviceCameraAnalyticsOverviewRequest("voluptatibus") {{
                objectType = GetDeviceCameraAnalyticsOverviewObjectTypeEnum.VEHICLE;
                t0 = "cupiditate";
                t1 = "minus";
                timespan = 5080.81;
            }};            

            GetDeviceCameraAnalyticsOverviewResponse res = sdk.monitor.getDeviceCameraAnalyticsOverview(req);

            if (res.getDeviceCameraAnalyticsOverview200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceCameraAnalyticsRecent

Returns most recent record for analytics zones

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsRecentObjectTypeEnum;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsRecentRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsRecentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraAnalyticsRecentRequest req = new GetDeviceCameraAnalyticsRecentRequest("eveniet") {{
                objectType = GetDeviceCameraAnalyticsRecentObjectTypeEnum.PERSON;
            }};            

            GetDeviceCameraAnalyticsRecentResponse res = sdk.monitor.getDeviceCameraAnalyticsRecent(req);

            if (res.getDeviceCameraAnalyticsRecent200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceCameraAnalyticsZoneHistory

Return historical records for analytic zones

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsZoneHistoryRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsZoneHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraAnalyticsZoneHistoryRequest req = new GetDeviceCameraAnalyticsZoneHistoryRequest("molestiae", "voluptate") {{
                objectType = GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum.VEHICLE;
                resolution = 682564L;
                t0 = "quod";
                t1 = "dolorum";
                timespan = 5286.82;
            }};            

            GetDeviceCameraAnalyticsZoneHistoryResponse res = sdk.monitor.getDeviceCameraAnalyticsZoneHistory(req);

            if (res.getDeviceCameraAnalyticsZoneHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceCameraAnalyticsZones

Returns all configured analytic zones for this camera

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsZonesRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsZonesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraAnalyticsZonesRequest req = new GetDeviceCameraAnalyticsZonesRequest("nemo");            

            GetDeviceCameraAnalyticsZonesResponse res = sdk.monitor.getDeviceCameraAnalyticsZones(req);

            if (res.getDeviceCameraAnalyticsZones200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceClients

List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceClientsRequest;
import org.openapis.openapi.models.operations.GetDeviceClientsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceClientsRequest req = new GetDeviceClientsRequest("aliquam") {{
                t0 = "excepturi";
                timespan = 8804.87;
            }};            

            GetDeviceClientsResponse res = sdk.monitor.getDeviceClients(req);

            if (res.getDeviceClients200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceLldpCdp

List LLDP and CDP information for a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceLldpCdpRequest;
import org.openapis.openapi.models.operations.GetDeviceLldpCdpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceLldpCdpRequest req = new GetDeviceLldpCdpRequest("totam");            

            GetDeviceLldpCdpResponse res = sdk.monitor.getDeviceLldpCdp(req);

            if (res.getDeviceLldpCdp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceLossAndLatencyHistory

Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceLossAndLatencyHistoryRequest;
import org.openapis.openapi.models.operations.GetDeviceLossAndLatencyHistoryResponse;
import org.openapis.openapi.models.operations.GetDeviceLossAndLatencyHistoryUplinkEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceLossAndLatencyHistoryRequest req = new GetDeviceLossAndLatencyHistoryRequest("magni", "optio") {{
                resolution = 795979L;
                t0 = "expedita";
                t1 = "magnam";
                timespan = 9281.55;
                uplink = GetDeviceLossAndLatencyHistoryUplinkEnum.CELLULAR;
            }};            

            GetDeviceLossAndLatencyHistoryResponse res = sdk.monitor.getDeviceLossAndLatencyHistory(req);

            if (res.getDeviceLossAndLatencyHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceSwitchPortsStatuses

Return the status for all the ports of a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceSwitchPortsStatusesRequest;
import org.openapis.openapi.models.operations.GetDeviceSwitchPortsStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchPortsStatusesRequest req = new GetDeviceSwitchPortsStatusesRequest("sit") {{
                t0 = "nihil";
                timespan = 3094.31;
            }};            

            GetDeviceSwitchPortsStatusesResponse res = sdk.monitor.getDeviceSwitchPortsStatuses(req);

            if (res.getDeviceSwitchPortsStatuses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceSwitchPortsStatusesPackets

Return the packet counters for all the ports of a switch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceSwitchPortsStatusesPacketsRequest;
import org.openapis.openapi.models.operations.GetDeviceSwitchPortsStatusesPacketsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSwitchPortsStatusesPacketsRequest req = new GetDeviceSwitchPortsStatusesPacketsRequest("soluta") {{
                t0 = "voluptatibus";
                timespan = 8371.71;
            }};            

            GetDeviceSwitchPortsStatusesPacketsResponse res = sdk.monitor.getDeviceSwitchPortsStatusesPackets(req);

            if (res.getDeviceSwitchPortsStatusesPackets200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceWirelessConnectionStats

Aggregated connectivity info for a given AP on this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceWirelessConnectionStatsBandEnum;
import org.openapis.openapi.models.operations.GetDeviceWirelessConnectionStatsRequest;
import org.openapis.openapi.models.operations.GetDeviceWirelessConnectionStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceWirelessConnectionStatsRequest req = new GetDeviceWirelessConnectionStatsRequest("itaque") {{
                apTag = "animi";
                band = GetDeviceWirelessConnectionStatsBandEnum.SIX;
                ssid = 439492L;
                t0 = "reiciendis";
                t1 = "soluta";
                timespan = 1336.1;
                vlan = 58488L;
            }};            

            GetDeviceWirelessConnectionStatsResponse res = sdk.monitor.getDeviceWirelessConnectionStats(req);

            if (res.getDeviceWirelessConnectionStats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceWirelessLatencyStats

Aggregated latency info for a given AP on this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceWirelessLatencyStatsBandEnum;
import org.openapis.openapi.models.operations.GetDeviceWirelessLatencyStatsRequest;
import org.openapis.openapi.models.operations.GetDeviceWirelessLatencyStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceWirelessLatencyStatsRequest req = new GetDeviceWirelessLatencyStatsRequest("sit") {{
                apTag = "cum";
                band = GetDeviceWirelessLatencyStatsBandEnum.SIX;
                fields = "dignissimos";
                ssid = 129523L;
                t0 = "incidunt";
                t1 = "placeat";
                timespan = 4527.73;
                vlan = 394467L;
            }};            

            GetDeviceWirelessLatencyStatsResponse res = sdk.monitor.getDeviceWirelessLatencyStats(req);

            if (res.getDeviceWirelessLatencyStats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceWirelessStatus

Return the SSID statuses of an access point

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceWirelessStatusRequest;
import org.openapis.openapi.models.operations.GetDeviceWirelessStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceWirelessStatusRequest req = new GetDeviceWirelessStatusRequest("a");            

            GetDeviceWirelessStatusResponse res = sdk.monitor.getDeviceWirelessStatus(req);

            if (res.getDeviceWirelessStatus200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkAlertsHistory

Return the alert history for this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkAlertsHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkAlertsHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkAlertsHistoryRequest req = new GetNetworkAlertsHistoryRequest("quae") {{
                endingBefore = "aliquam";
                perPage = 502886L;
                startingAfter = "eaque";
            }};            

            GetNetworkAlertsHistoryResponse res = sdk.monitor.getNetworkAlertsHistory(req);

            if (res.getNetworkAlertsHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceClientSecurityEvents

List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceClientSecurityEventsRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceClientSecurityEventsResponse;
import org.openapis.openapi.models.operations.GetNetworkApplianceClientSecurityEventsSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceClientSecurityEventsRequest req = new GetNetworkApplianceClientSecurityEventsRequest("impedit", "architecto") {{
                endingBefore = "consequatur";
                perPage = 541143L;
                sortOrder = GetNetworkApplianceClientSecurityEventsSortOrderEnum.ASCENDING;
                startingAfter = "consequatur";
                t0 = "iure";
                t1 = "dolorem";
                timespan = 5772.11;
            }};            

            GetNetworkApplianceClientSecurityEventsResponse res = sdk.monitor.getNetworkApplianceClientSecurityEvents(req);

            if (res.getNetworkApplianceClientSecurityEvents200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceSecurityEvents

List the security events for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceSecurityEventsRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceSecurityEventsResponse;
import org.openapis.openapi.models.operations.GetNetworkApplianceSecurityEventsSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceSecurityEventsRequest req = new GetNetworkApplianceSecurityEventsRequest("cupiditate") {{
                endingBefore = "exercitationem";
                perPage = 702989L;
                sortOrder = GetNetworkApplianceSecurityEventsSortOrderEnum.DESCENDING;
                startingAfter = "numquam";
                t0 = "labore";
                t1 = "iure";
                timespan = 3221.33;
            }};            

            GetNetworkApplianceSecurityEventsResponse res = sdk.monitor.getNetworkApplianceSecurityEvents(req);

            if (res.getNetworkApplianceSecurityEvents200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceUplinksUsageHistory

Get the sent and received bytes for each uplink of a network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceUplinksUsageHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceUplinksUsageHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceUplinksUsageHistoryRequest req = new GetNetworkApplianceUplinksUsageHistoryRequest("eveniet") {{
                resolution = 206812L;
                t0 = "dolores";
                t1 = "nisi";
                timespan = 6245.8;
            }};            

            GetNetworkApplianceUplinksUsageHistoryResponse res = sdk.monitor.getNetworkApplianceUplinksUsageHistory(req);

            if (res.getNetworkApplianceUplinksUsageHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkBluetoothClient

Return a Bluetooth client. Bluetooth clients can be identified by their ID or their MAC.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkBluetoothClientRequest;
import org.openapis.openapi.models.operations.GetNetworkBluetoothClientResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkBluetoothClientRequest req = new GetNetworkBluetoothClientRequest("aliquid", "optio") {{
                connectivityHistoryTimespan = 65139L;
                includeConnectivityHistory = false;
            }};            

            GetNetworkBluetoothClientResponse res = sdk.monitor.getNetworkBluetoothClient(req);

            if (res.getNetworkBluetoothClient200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkBluetoothClients

List the Bluetooth clients seen by APs in this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkBluetoothClientsRequest;
import org.openapis.openapi.models.operations.GetNetworkBluetoothClientsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkBluetoothClientsRequest req = new GetNetworkBluetoothClientsRequest("quod") {{
                endingBefore = "necessitatibus";
                includeConnectivityHistory = false;
                perPage = 998109L;
                startingAfter = "doloribus";
                t0 = "autem";
                timespan = 2122.06;
            }};            

            GetNetworkBluetoothClientsResponse res = sdk.monitor.getNetworkBluetoothClients(req);

            if (res.getNetworkBluetoothClients200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkClient

Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientRequest;
import org.openapis.openapi.models.operations.GetNetworkClientResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientRequest req = new GetNetworkClientRequest("ullam", "temporibus");            

            GetNetworkClientResponse res = sdk.monitor.getNetworkClient(req);

            if (res.getNetworkClient200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkClientTrafficHistory

Return the client's network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide > General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientTrafficHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkClientTrafficHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientTrafficHistoryRequest req = new GetNetworkClientTrafficHistoryRequest("quisquam", "adipisci") {{
                endingBefore = "blanditiis";
                perPage = 606775L;
                startingAfter = "ut";
            }};            

            GetNetworkClientTrafficHistoryResponse res = sdk.monitor.getNetworkClientTrafficHistory(req);

            if (res.getNetworkClientTrafficHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkClientUsageHistory

Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientUsageHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkClientUsageHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientUsageHistoryRequest req = new GetNetworkClientUsageHistoryRequest("non", "veniam");            

            GetNetworkClientUsageHistoryResponse res = sdk.monitor.getNetworkClientUsageHistory(req);

            if (res.getNetworkClientUsageHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkClients

List the clients that have used this network in the timespan

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientsRecentDeviceConnectionsEnum;
import org.openapis.openapi.models.operations.GetNetworkClientsRequest;
import org.openapis.openapi.models.operations.GetNetworkClientsResponse;
import org.openapis.openapi.models.operations.GetNetworkClientsStatusesEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientsRequest req = new GetNetworkClientsRequest("quas") {{
                description = "illo";
                endingBefore = "magnam";
                ip = "provident";
                ip6 = "deserunt";
                ip6Local = "dignissimos";
                mac = "quidem";
                os = "dignissimos";
                perPage = 436871L;
                recentDeviceConnections = new org.openapis.openapi.models.operations.GetNetworkClientsRecentDeviceConnectionsEnum[]{{
                    add(GetNetworkClientsRecentDeviceConnectionsEnum.WIRELESS),
                    add(GetNetworkClientsRecentDeviceConnectionsEnum.WIRED),
                    add(GetNetworkClientsRecentDeviceConnectionsEnum.WIRED),
                    add(GetNetworkClientsRecentDeviceConnectionsEnum.WIRELESS),
                }};
                startingAfter = "labore";
                statuses = new org.openapis.openapi.models.operations.GetNetworkClientsStatusesEnum[]{{
                    add(GetNetworkClientsStatusesEnum.OFFLINE),
                    add(GetNetworkClientsStatusesEnum.ONLINE),
                }};
                t0 = "dolores";
                timespan = 1666.76;
                vlan = "impedit";
            }};            

            GetNetworkClientsResponse res = sdk.monitor.getNetworkClients(req);

            if (res.getNetworkClients200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkClientsApplicationUsage

Return the application usage data for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientsApplicationUsageRequest;
import org.openapis.openapi.models.operations.GetNetworkClientsApplicationUsageResponse;
import org.openapis.openapi.models.operations.GetNetworkClientsApplicationUsageSsidNumberEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientsApplicationUsageRequest req = new GetNetworkClientsApplicationUsageRequest("non", "laborum") {{
                endingBefore = "sequi";
                perPage = 795071L;
                ssidNumber = GetNetworkClientsApplicationUsageSsidNumberEnum.NINE;
                startingAfter = "repellat";
                t0 = "dignissimos";
                t1 = "fuga";
                timespan = 8630.38;
            }};            

            GetNetworkClientsApplicationUsageResponse res = sdk.monitor.getNetworkClientsApplicationUsage(req);

            if (res.getNetworkClientsApplicationUsage200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkClientsBandwidthUsageHistory

Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientsBandwidthUsageHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkClientsBandwidthUsageHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientsBandwidthUsageHistoryRequest req = new GetNetworkClientsBandwidthUsageHistoryRequest("neque") {{
                endingBefore = "rerum";
                perPage = 577662L;
                startingAfter = "optio";
                t0 = "mollitia";
                t1 = "esse";
                timespan = 2659.89;
            }};            

            GetNetworkClientsBandwidthUsageHistoryResponse res = sdk.monitor.getNetworkClientsBandwidthUsageHistory(req);

            if (res.getNetworkClientsBandwidthUsageHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkClientsOverview

Return overview statistics for network clients

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientsOverviewRequest;
import org.openapis.openapi.models.operations.GetNetworkClientsOverviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientsOverviewRequest req = new GetNetworkClientsOverviewRequest("dolores") {{
                resolution = 218081L;
                t0 = "totam";
                t1 = "perferendis";
                timespan = 6126.71;
            }};            

            GetNetworkClientsOverviewResponse res = sdk.monitor.getNetworkClientsOverview(req);

            if (res.getNetworkClientsOverview200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkClientsUsageHistories

Return the usage histories for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientsUsageHistoriesRequest;
import org.openapis.openapi.models.operations.GetNetworkClientsUsageHistoriesResponse;
import org.openapis.openapi.models.operations.GetNetworkClientsUsageHistoriesSsidNumberEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientsUsageHistoriesRequest req = new GetNetworkClientsUsageHistoriesRequest("excepturi", "exercitationem") {{
                endingBefore = "sint";
                perPage = 758592L;
                ssidNumber = GetNetworkClientsUsageHistoriesSsidNumberEnum.SEVEN;
                startingAfter = "explicabo";
                t0 = "neque";
                t1 = "laborum";
                timespan = 6794.08;
            }};            

            GetNetworkClientsUsageHistoriesResponse res = sdk.monitor.getNetworkClientsUsageHistories(req);

            if (res.getNetworkClientsUsageHistories200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkEvents

List the events for the network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkEventsProductTypeEnum;
import org.openapis.openapi.models.operations.GetNetworkEventsRequest;
import org.openapis.openapi.models.operations.GetNetworkEventsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkEventsRequest req = new GetNetworkEventsRequest("praesentium") {{
                clientIp = "perspiciatis";
                clientMac = "temporibus";
                clientName = "sit";
                deviceMac = "maxime";
                deviceName = "quidem";
                deviceSerial = "atque";
                endingBefore = "minus";
                excludedEventTypes = new String[]{{
                    add("commodi"),
                    add("totam"),
                }};
                includedEventTypes = new String[]{{
                    add("repudiandae"),
                    add("consectetur"),
                }};
                perPage = 524940L;
                productType = GetNetworkEventsProductTypeEnum.WIRELESS;
                smDeviceMac = "deleniti";
                smDeviceName = "nihil";
                startingAfter = "totam";
            }};            

            GetNetworkEventsResponse res = sdk.monitor.getNetworkEvents(req);

            if (res.getNetworkEvents200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkEventsEventTypes

List the event type to human-readable description

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkEventsEventTypesRequest;
import org.openapis.openapi.models.operations.GetNetworkEventsEventTypesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkEventsEventTypesRequest req = new GetNetworkEventsEventTypesRequest("voluptatibus");            

            GetNetworkEventsEventTypesResponse res = sdk.monitor.getNetworkEventsEventTypes(req);

            if (res.getNetworkEventsEventTypes200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkInsightApplicationHealthByTime

Get application health by time

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkInsightApplicationHealthByTimeRequest;
import org.openapis.openapi.models.operations.GetNetworkInsightApplicationHealthByTimeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkInsightApplicationHealthByTimeRequest req = new GetNetworkInsightApplicationHealthByTimeRequest("necessitatibus", "fugit") {{
                resolution = 406608L;
                t0 = "magni";
                t1 = "molestiae";
                timespan = 2622.39;
            }};            

            GetNetworkInsightApplicationHealthByTimeResponse res = sdk.monitor.getNetworkInsightApplicationHealthByTime(req);

            if (res.getNetworkInsightApplicationHealthByTime200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkNetworkHealthChannelUtilization

Get the channel utilization over each radio for all APs in a network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkNetworkHealthChannelUtilizationRequest;
import org.openapis.openapi.models.operations.GetNetworkNetworkHealthChannelUtilizationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkNetworkHealthChannelUtilizationRequest req = new GetNetworkNetworkHealthChannelUtilizationRequest("nulla") {{
                endingBefore = "aperiam";
                perPage = 323940L;
                resolution = 955001L;
                startingAfter = "officiis";
                t0 = "sequi";
                t1 = "similique";
                timespan = 6219.37;
            }};            

            GetNetworkNetworkHealthChannelUtilizationResponse res = sdk.monitor.getNetworkNetworkHealthChannelUtilization(req);

            if (res.getNetworkNetworkHealthChannelUtilization200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSensorAlertsCurrentOverviewByMetric

Return an overview of currently alerting sensors by metric

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSensorAlertsCurrentOverviewByMetricRequest;
import org.openapis.openapi.models.operations.GetNetworkSensorAlertsCurrentOverviewByMetricResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSensorAlertsCurrentOverviewByMetricRequest req = new GetNetworkSensorAlertsCurrentOverviewByMetricRequest("vero");            

            GetNetworkSensorAlertsCurrentOverviewByMetricResponse res = sdk.monitor.getNetworkSensorAlertsCurrentOverviewByMetric(req);

            if (res.getNetworkSensorAlertsCurrentOverviewByMetric200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSensorAlertsOverviewByMetric

Return an overview of alert occurrences over a timespan, by metric

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSensorAlertsOverviewByMetricRequest;
import org.openapis.openapi.models.operations.GetNetworkSensorAlertsOverviewByMetricResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSensorAlertsOverviewByMetricRequest req = new GetNetworkSensorAlertsOverviewByMetricRequest("labore") {{
                interval = 48192L;
                t0 = "temporibus";
                t1 = "voluptate";
                timespan = 3596.11;
            }};            

            GetNetworkSensorAlertsOverviewByMetricResponse res = sdk.monitor.getNetworkSensorAlertsOverviewByMetric(req);

            if (res.getNetworkSensorAlertsOverviewByMetric200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmDeviceCellularUsageHistory

Return the client's daily cellular data usage history. Usage data is in kilobytes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceCellularUsageHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceCellularUsageHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceCellularUsageHistoryRequest req = new GetNetworkSmDeviceCellularUsageHistoryRequest("tempore", "quis");            

            GetNetworkSmDeviceCellularUsageHistoryResponse res = sdk.monitor.getNetworkSmDeviceCellularUsageHistory(req);

            if (res.getNetworkSmDeviceCellularUsageHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmDeviceConnectivity

Returns historical connectivity data (whether a device is regularly checking in to Dashboard).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceConnectivityRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceConnectivityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceConnectivityRequest req = new GetNetworkSmDeviceConnectivityRequest("a", "nostrum") {{
                endingBefore = "officia";
                perPage = 565389L;
                startingAfter = "asperiores";
            }};            

            GetNetworkSmDeviceConnectivityResponse res = sdk.monitor.getNetworkSmDeviceConnectivity(req);

            if (res.getNetworkSmDeviceConnectivity200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmDeviceDesktopLogs

Return historical records of various Systems Manager network connection details for desktop devices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceDesktopLogsRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceDesktopLogsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceDesktopLogsRequest req = new GetNetworkSmDeviceDesktopLogsRequest("quod", "voluptates") {{
                endingBefore = "praesentium";
                perPage = 715636L;
                startingAfter = "consequuntur";
            }};            

            GetNetworkSmDeviceDesktopLogsResponse res = sdk.monitor.getNetworkSmDeviceDesktopLogs(req);

            if (res.getNetworkSmDeviceDesktopLogs200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmDeviceDeviceCommandLogs

Return historical records of commands sent to Systems Manager devices. Note that this will include the name of the Dashboard user who initiated the command if it was generated by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out of any reports.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceDeviceCommandLogsRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceDeviceCommandLogsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceDeviceCommandLogsRequest req = new GetNetworkSmDeviceDeviceCommandLogsRequest("mollitia", "ratione") {{
                endingBefore = "sed";
                perPage = 677296L;
                startingAfter = "ex";
            }};            

            GetNetworkSmDeviceDeviceCommandLogsResponse res = sdk.monitor.getNetworkSmDeviceDeviceCommandLogs(req);

            if (res.getNetworkSmDeviceDeviceCommandLogs200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmDevicePerformanceHistory

Return historical records of various Systems Manager client metrics for desktop devices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDevicePerformanceHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDevicePerformanceHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDevicePerformanceHistoryRequest req = new GetNetworkSmDevicePerformanceHistoryRequest("dignissimos", "reprehenderit") {{
                endingBefore = "ducimus";
                perPage = 786580L;
                startingAfter = "non";
            }};            

            GetNetworkSmDevicePerformanceHistoryResponse res = sdk.monitor.getNetworkSmDevicePerformanceHistory(req);

            if (res.getNetworkSmDevicePerformanceHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSplashLoginAttempts

List the splash login attempts for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSplashLoginAttemptsRequest;
import org.openapis.openapi.models.operations.GetNetworkSplashLoginAttemptsResponse;
import org.openapis.openapi.models.operations.GetNetworkSplashLoginAttemptsSsidNumberEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSplashLoginAttemptsRequest req = new GetNetworkSplashLoginAttemptsRequest("sit") {{
                loginIdentifier = "nesciunt";
                ssidNumber = GetNetworkSplashLoginAttemptsSsidNumberEnum.EIGHT;
                timespan = 662085L;
            }};            

            GetNetworkSplashLoginAttemptsResponse res = sdk.monitor.getNetworkSplashLoginAttempts(req);

            if (res.getNetworkSplashLoginAttempts200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkTopologyLinkLayer

List the LLDP and CDP information for all discovered devices and connections in a network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkTopologyLinkLayerRequest;
import org.openapis.openapi.models.operations.GetNetworkTopologyLinkLayerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkTopologyLinkLayerRequest req = new GetNetworkTopologyLinkLayerRequest("corporis");            

            GetNetworkTopologyLinkLayerResponse res = sdk.monitor.getNetworkTopologyLinkLayer(req);

            if (res.getNetworkTopologyLinkLayer200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkTraffic

Return the traffic analysis data for this network. Traffic analysis with hostname visibility must be enabled on the network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkTrafficDeviceTypeEnum;
import org.openapis.openapi.models.operations.GetNetworkTrafficRequest;
import org.openapis.openapi.models.operations.GetNetworkTrafficResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkTrafficRequest req = new GetNetworkTrafficRequest("repellendus") {{
                deviceType = GetNetworkTrafficDeviceTypeEnum.SWITCH_;
                t0 = "corporis";
                timespan = 1150;
            }};            

            GetNetworkTrafficResponse res = sdk.monitor.getNetworkTraffic(req);

            if (res.getNetworkTraffic200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessAirMarshal

List Air Marshal scan results from a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessAirMarshalRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessAirMarshalResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessAirMarshalRequest req = new GetNetworkWirelessAirMarshalRequest("asperiores") {{
                t0 = "ullam";
                timespan = 7400.6;
            }};            

            GetNetworkWirelessAirMarshalResponse res = sdk.monitor.getNetworkWirelessAirMarshal(req);

            if (res.getNetworkWirelessAirMarshal200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessChannelUtilizationHistory

Return AP channel utilization over time for a device or network client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessChannelUtilizationHistoryBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessChannelUtilizationHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessChannelUtilizationHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessChannelUtilizationHistoryRequest req = new GetNetworkWirelessChannelUtilizationHistoryRequest("nemo") {{
                apTag = "alias";
                autoResolution = false;
                band = GetNetworkWirelessChannelUtilizationHistoryBandEnum.SIX;
                clientId = "reiciendis";
                deviceSerial = "architecto";
                resolution = 890104L;
                t0 = "vero";
                t1 = "ratione";
                timespan = 6588.74;
            }};            

            GetNetworkWirelessChannelUtilizationHistoryResponse res = sdk.monitor.getNetworkWirelessChannelUtilizationHistory(req);

            if (res.getNetworkWirelessChannelUtilizationHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessClientConnectionStats

Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectionStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectionStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectionStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessClientConnectionStatsRequest req = new GetNetworkWirelessClientConnectionStatsRequest("inventore", "repudiandae") {{
                apTag = "iure";
                band = GetNetworkWirelessClientConnectionStatsBandEnum.SIX;
                ssid = 596759L;
                t0 = "ipsam";
                t1 = "error";
                timespan = 7414.77;
                vlan = 737007L;
            }};            

            GetNetworkWirelessClientConnectionStatsResponse res = sdk.monitor.getNetworkWirelessClientConnectionStats(req);

            if (res.getNetworkWirelessClientConnectionStats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessClientConnectivityEvents

List the wireless connectivity events for a client within a network in the timespan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsResponse;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsSsidNumberEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsTypesEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessClientConnectivityEventsRequest req = new GetNetworkWirelessClientConnectivityEventsRequest("animi", "temporibus") {{
                band = GetNetworkWirelessClientConnectivityEventsBandEnum.FIVE;
                deviceSerial = "natus";
                endingBefore = "possimus";
                includedSeverities = new org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum[]{{
                    add(GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum.BAD),
                    add(GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum.INFO),
                    add(GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum.WARN),
                }};
                perPage = 565450L;
                ssidNumber = GetNetworkWirelessClientConnectivityEventsSsidNumberEnum.SIX;
                startingAfter = "facilis";
                t0 = "ut";
                t1 = "veritatis";
                timespan = 4896.18;
                types = new org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsTypesEnum[]{{
                    add(GetNetworkWirelessClientConnectivityEventsTypesEnum.STICKY),
                }};
            }};            

            GetNetworkWirelessClientConnectivityEventsResponse res = sdk.monitor.getNetworkWirelessClientConnectivityEvents(req);

            if (res.getNetworkWirelessClientConnectivityEvents200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessClientCountHistory

Return wireless client counts over time for a network, device, or network client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientCountHistoryBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientCountHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientCountHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessClientCountHistoryRequest req = new GetNetworkWirelessClientCountHistoryRequest("repudiandae") {{
                apTag = "eius";
                autoResolution = false;
                band = GetNetworkWirelessClientCountHistoryBandEnum.SIX;
                clientId = "blanditiis";
                deviceSerial = "dolor";
                resolution = 684080L;
                ssid = 285971L;
                t0 = "nisi";
                t1 = "assumenda";
                timespan = 8640.67;
            }};            

            GetNetworkWirelessClientCountHistoryResponse res = sdk.monitor.getNetworkWirelessClientCountHistory(req);

            if (res.getNetworkWirelessClientCountHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessClientLatencyHistory

Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientLatencyHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientLatencyHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessClientLatencyHistoryRequest req = new GetNetworkWirelessClientLatencyHistoryRequest("fugit", "velit") {{
                resolution = 971771L;
                t0 = "at";
                t1 = "temporibus";
                timespan = 9041.35;
            }};            

            GetNetworkWirelessClientLatencyHistoryResponse res = sdk.monitor.getNetworkWirelessClientLatencyHistory(req);

            if (res.getNetworkWirelessClientLatencyHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessClientLatencyStats

Aggregated latency info for a given client on this network. Clients are identified by their MAC.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientLatencyStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientLatencyStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientLatencyStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessClientLatencyStatsRequest req = new GetNetworkWirelessClientLatencyStatsRequest("culpa", "consequatur") {{
                apTag = "doloribus";
                band = GetNetworkWirelessClientLatencyStatsBandEnum.TWO4;
                fields = "quos";
                ssid = 864786L;
                t0 = "nulla";
                t1 = "pariatur";
                timespan = 3032.22;
                vlan = 790209L;
            }};            

            GetNetworkWirelessClientLatencyStatsResponse res = sdk.monitor.getNetworkWirelessClientLatencyStats(req);

            if (res.getNetworkWirelessClientLatencyStats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessClientsConnectionStats

Aggregated connectivity info for this network, grouped by clients

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientsConnectionStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientsConnectionStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientsConnectionStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessClientsConnectionStatsRequest req = new GetNetworkWirelessClientsConnectionStatsRequest("voluptatum") {{
                apTag = "corporis";
                band = GetNetworkWirelessClientsConnectionStatsBandEnum.SIX;
                ssid = 99549L;
                t0 = "totam";
                t1 = "quia";
                timespan = 6108.79;
                vlan = 633452L;
            }};            

            GetNetworkWirelessClientsConnectionStatsResponse res = sdk.monitor.getNetworkWirelessClientsConnectionStats(req);

            if (res.getNetworkWirelessClientsConnectionStats200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessClientsLatencyStats

Aggregated latency info for this network, grouped by clients

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientsLatencyStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientsLatencyStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientsLatencyStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessClientsLatencyStatsRequest req = new GetNetworkWirelessClientsLatencyStatsRequest("eligendi") {{
                apTag = "cum";
                band = GetNetworkWirelessClientsLatencyStatsBandEnum.TWO4;
                fields = "suscipit";
                ssid = 469513L;
                t0 = "magni";
                t1 = "porro";
                timespan = 884.17;
                vlan = 526984L;
            }};            

            GetNetworkWirelessClientsLatencyStatsResponse res = sdk.monitor.getNetworkWirelessClientsLatencyStats(req);

            if (res.getNetworkWirelessClientsLatencyStats200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessConnectionStats

Aggregated connectivity info for this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessConnectionStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessConnectionStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessConnectionStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessConnectionStatsRequest req = new GetNetworkWirelessConnectionStatsRequest("autem") {{
                apTag = "veniam";
                band = GetNetworkWirelessConnectionStatsBandEnum.TWO4;
                ssid = 842680L;
                t0 = "vitae";
                t1 = "quasi";
                timespan = 3330.46;
                vlan = 325565L;
            }};            

            GetNetworkWirelessConnectionStatsResponse res = sdk.monitor.getNetworkWirelessConnectionStats(req);

            if (res.getNetworkWirelessConnectionStats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessDataRateHistory

Return PHY data rates over time for a network, device, or network client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessDataRateHistoryBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessDataRateHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessDataRateHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessDataRateHistoryRequest req = new GetNetworkWirelessDataRateHistoryRequest("vero") {{
                apTag = "nemo";
                autoResolution = false;
                band = GetNetworkWirelessDataRateHistoryBandEnum.FIVE;
                clientId = "illo";
                deviceSerial = "eaque";
                resolution = 226019L;
                ssid = 626887L;
                t0 = "laudantium";
                t1 = "aliquid";
                timespan = 9916.14;
            }};            

            GetNetworkWirelessDataRateHistoryResponse res = sdk.monitor.getNetworkWirelessDataRateHistory(req);

            if (res.getNetworkWirelessDataRateHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessDevicesConnectionStats

Aggregated connectivity info for this network, grouped by node

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessDevicesConnectionStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessDevicesConnectionStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessDevicesConnectionStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessDevicesConnectionStatsRequest req = new GetNetworkWirelessDevicesConnectionStatsRequest("commodi") {{
                apTag = "temporibus";
                band = GetNetworkWirelessDevicesConnectionStatsBandEnum.FIVE;
                ssid = 719002L;
                t0 = "ut";
                t1 = "labore";
                timespan = 5577.21;
                vlan = 176859L;
            }};            

            GetNetworkWirelessDevicesConnectionStatsResponse res = sdk.monitor.getNetworkWirelessDevicesConnectionStats(req);

            if (res.getNetworkWirelessDevicesConnectionStats200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessDevicesLatencyStats

Aggregated latency info for this network, grouped by node

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessDevicesLatencyStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessDevicesLatencyStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessDevicesLatencyStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessDevicesLatencyStatsRequest req = new GetNetworkWirelessDevicesLatencyStatsRequest("distinctio") {{
                apTag = "est";
                band = GetNetworkWirelessDevicesLatencyStatsBandEnum.SIX;
                fields = "repellat";
                ssid = 161698L;
                t0 = "tenetur";
                t1 = "hic";
                timespan = 8433.59;
                vlan = 625987L;
            }};            

            GetNetworkWirelessDevicesLatencyStatsResponse res = sdk.monitor.getNetworkWirelessDevicesLatencyStats(req);

            if (res.getNetworkWirelessDevicesLatencyStats200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessFailedConnections

List of all failed client connection events on this network in a given time range

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessFailedConnectionsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessFailedConnectionsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessFailedConnectionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessFailedConnectionsRequest req = new GetNetworkWirelessFailedConnectionsRequest("neque") {{
                apTag = "eligendi";
                band = GetNetworkWirelessFailedConnectionsBandEnum.TWO4;
                clientId = "natus";
                serial = "error";
                ssid = 745815L;
                t0 = "consequuntur";
                t1 = "voluptatibus";
                timespan = 7992.73;
                vlan = 220474L;
            }};            

            GetNetworkWirelessFailedConnectionsResponse res = sdk.monitor.getNetworkWirelessFailedConnections(req);

            if (res.getNetworkWirelessFailedConnections200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessLatencyHistory

Return average wireless latency over time for a network, device, or network client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessLatencyHistoryAccessCategoryEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessLatencyHistoryBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessLatencyHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessLatencyHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessLatencyHistoryRequest req = new GetNetworkWirelessLatencyHistoryRequest("corporis") {{
                accessCategory = GetNetworkWirelessLatencyHistoryAccessCategoryEnum.BEST_EFFORT_TRAFFIC;
                apTag = "quos";
                autoResolution = false;
                band = GetNetworkWirelessLatencyHistoryBandEnum.FIVE;
                clientId = "quis";
                deviceSerial = "consectetur";
                resolution = 864625L;
                ssid = 14286L;
                t0 = "atque";
                t1 = "maxime";
                timespan = 52.53;
            }};            

            GetNetworkWirelessLatencyHistoryResponse res = sdk.monitor.getNetworkWirelessLatencyHistory(req);

            if (res.getNetworkWirelessLatencyHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessLatencyStats

Aggregated latency info for this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessLatencyStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessLatencyStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessLatencyStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessLatencyStatsRequest req = new GetNetworkWirelessLatencyStatsRequest("eveniet") {{
                apTag = "deserunt";
                band = GetNetworkWirelessLatencyStatsBandEnum.FIVE;
                fields = "incidunt";
                ssid = 686035L;
                t0 = "soluta";
                t1 = "praesentium";
                timespan = 604.88;
                vlan = 614111L;
            }};            

            GetNetworkWirelessLatencyStatsResponse res = sdk.monitor.getNetworkWirelessLatencyStats(req);

            if (res.getNetworkWirelessLatencyStats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessMeshStatuses

List wireless mesh statuses for repeaters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessMeshStatusesRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessMeshStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessMeshStatusesRequest req = new GetNetworkWirelessMeshStatusesRequest("maiores") {{
                endingBefore = "maxime";
                perPage = 441796L;
                startingAfter = "alias";
            }};            

            GetNetworkWirelessMeshStatusesResponse res = sdk.monitor.getNetworkWirelessMeshStatuses(req);

            if (res.getNetworkWirelessMeshStatuses200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSignalQualityHistory

Return signal quality (SNR/RSSI) over time for a device or network client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSignalQualityHistoryBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessSignalQualityHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSignalQualityHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSignalQualityHistoryRequest req = new GetNetworkWirelessSignalQualityHistoryRequest("nesciunt") {{
                apTag = "nulla";
                autoResolution = false;
                band = GetNetworkWirelessSignalQualityHistoryBandEnum.SIX;
                clientId = "beatae";
                deviceSerial = "alias";
                resolution = 581340L;
                ssid = 102623L;
                t0 = "esse";
                t1 = "accusantium";
                timespan = 9921.75;
            }};            

            GetNetworkWirelessSignalQualityHistoryResponse res = sdk.monitor.getNetworkWirelessSignalQualityHistory(req);

            if (res.getNetworkWirelessSignalQualityHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessUsageHistory

Return AP usage over time for a device or network client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessUsageHistoryBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessUsageHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessUsageHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessUsageHistoryRequest req = new GetNetworkWirelessUsageHistoryRequest("earum") {{
                apTag = "magnam";
                autoResolution = false;
                band = GetNetworkWirelessUsageHistoryBandEnum.TWO4;
                clientId = "qui";
                deviceSerial = "quasi";
                resolution = 533834L;
                ssid = 453638L;
                t0 = "quibusdam";
                t1 = "perferendis";
                timespan = 9588.81;
            }};            

            GetNetworkWirelessUsageHistoryResponse res = sdk.monitor.getNetworkWirelessUsageHistory(req);

            if (res.getNetworkWirelessUsageHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationAdaptivePolicyOverview

Returns adaptive policy aggregate statistics for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationAdaptivePolicyOverviewRequest;
import org.openapis.openapi.models.operations.GetOrganizationAdaptivePolicyOverviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ducimus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationAdaptivePolicyOverviewRequest req = new GetOrganizationAdaptivePolicyOverviewRequest("magni");            

            GetOrganizationAdaptivePolicyOverviewResponse res = sdk.monitor.getOrganizationAdaptivePolicyOverview(req);

            if (res.getOrganizationAdaptivePolicyOverview200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationApiRequests

List the API requests made by an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsMethodEnum;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsRequest;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsResponse;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApiRequestsRequest req = new GetOrganizationApiRequestsRequest("ab") {{
                adminId = "accusamus";
                endingBefore = "soluta";
                method = GetOrganizationApiRequestsMethodEnum.PUT;
                operationIds = new String[]{{
                    add("voluptates"),
                }};
                path = "non";
                perPage = 913945L;
                responseCode = 485026L;
                sourceIp = "veniam";
                startingAfter = "non";
                t0 = "laboriosam";
                t1 = "sint";
                timespan = 8142.14;
                userAgent = "ipsam";
                version = GetOrganizationApiRequestsVersionEnum.ZERO;
            }};            

            GetOrganizationApiRequestsResponse res = sdk.monitor.getOrganizationApiRequests(req);

            if (res.getOrganizationApiRequests200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationApiRequestsOverview

Return an aggregated overview of API requests data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsOverviewRequest;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsOverviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApiRequestsOverviewRequest req = new GetOrganizationApiRequestsOverviewRequest("sed") {{
                t0 = "fugit";
                t1 = "voluptate";
                timespan = 414.91;
            }};            

            GetOrganizationApiRequestsOverviewResponse res = sdk.monitor.getOrganizationApiRequestsOverview(req);

            if (res.getOrganizationApiRequestsOverview200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationApiRequestsOverviewResponseCodesByInterval

Tracks organizations' API requests by response code across a given time period

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsOverviewResponseCodesByIntervalRequest;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsOverviewResponseCodesByIntervalResponse;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsOverviewResponseCodesByIntervalVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApiRequestsOverviewResponseCodesByIntervalRequest req = new GetOrganizationApiRequestsOverviewResponseCodesByIntervalRequest("officia") {{
                adminIds = new String[]{{
                    add("dignissimos"),
                }};
                interval = 350413L;
                operationIds = new String[]{{
                    add("sapiente"),
                    add("enim"),
                    add("recusandae"),
                }};
                sourceIps = new String[]{{
                    add("reiciendis"),
                    add("adipisci"),
                    add("sint"),
                    add("nulla"),
                }};
                t0 = "beatae";
                t1 = "nesciunt";
                timespan = 2269.88;
                userAgent = "rerum";
                version = GetOrganizationApiRequestsOverviewResponseCodesByIntervalVersionEnum.ZERO;
            }};            

            GetOrganizationApiRequestsOverviewResponseCodesByIntervalResponse res = sdk.monitor.getOrganizationApiRequestsOverviewResponseCodesByInterval(req);

            if (res.getOrganizationApiRequestsOverviewResponseCodesByInterval200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationApplianceSecurityEvents

List the security events for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApplianceSecurityEventsRequest;
import org.openapis.openapi.models.operations.GetOrganizationApplianceSecurityEventsResponse;
import org.openapis.openapi.models.operations.GetOrganizationApplianceSecurityEventsSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApplianceSecurityEventsRequest req = new GetOrganizationApplianceSecurityEventsRequest("ratione") {{
                endingBefore = "atque";
                perPage = 888343L;
                sortOrder = GetOrganizationApplianceSecurityEventsSortOrderEnum.DESCENDING;
                startingAfter = "neque";
                t0 = "voluptates";
                t1 = "voluptas";
                timespan = 1633.19;
            }};            

            GetOrganizationApplianceSecurityEventsResponse res = sdk.monitor.getOrganizationApplianceSecurityEvents(req);

            if (res.getOrganizationApplianceSecurityEvents200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationApplianceUplinkStatuses

List the uplink status of every Meraki MX and Z series appliances in the organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApplianceUplinkStatusesRequest;
import org.openapis.openapi.models.operations.GetOrganizationApplianceUplinkStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApplianceUplinkStatusesRequest req = new GetOrganizationApplianceUplinkStatusesRequest("ipsam") {{
                endingBefore = "accusantium";
                iccids = new String[]{{
                    add("tenetur"),
                    add("excepturi"),
                }};
                networkIds = new String[]{{
                    add("temporibus"),
                    add("iure"),
                    add("ullam"),
                    add("magni"),
                }};
                perPage = 516893L;
                serials = new String[]{{
                    add("aperiam"),
                    add("iure"),
                    add("sit"),
                    add("corrupti"),
                }};
                startingAfter = "nemo";
            }};            

            GetOrganizationApplianceUplinkStatusesResponse res = sdk.monitor.getOrganizationApplianceUplinkStatuses(req);

            if (res.getOrganizationApplianceUplinkStatuses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationApplianceVpnStats

Show VPN history stat for networks in an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApplianceVpnStatsRequest;
import org.openapis.openapi.models.operations.GetOrganizationApplianceVpnStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApplianceVpnStatsRequest req = new GetOrganizationApplianceVpnStatsRequest("nobis") {{
                endingBefore = "incidunt";
                networkIds = new String[]{{
                    add("eius"),
                }};
                perPage = 369331L;
                startingAfter = "odit";
                t0 = "fugit";
                t1 = "debitis";
                timespan = 733.27;
            }};            

            GetOrganizationApplianceVpnStatsResponse res = sdk.monitor.getOrganizationApplianceVpnStats(req);

            if (res.getOrganizationApplianceVpnStats200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationApplianceVpnStatuses

Show VPN status for networks in an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApplianceVpnStatusesRequest;
import org.openapis.openapi.models.operations.GetOrganizationApplianceVpnStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApplianceVpnStatusesRequest req = new GetOrganizationApplianceVpnStatusesRequest("officia") {{
                endingBefore = "voluptatem";
                networkIds = new String[]{{
                    add("doloribus"),
                    add("et"),
                    add("hic"),
                }};
                perPage = 939083L;
                startingAfter = "nam";
            }};            

            GetOrganizationApplianceVpnStatusesResponse res = sdk.monitor.getOrganizationApplianceVpnStatuses(req);

            if (res.getOrganizationApplianceVpnStatuses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationCellularGatewayUplinkStatuses

List the uplink status of every Meraki MG cellular gateway in the organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationCellularGatewayUplinkStatusesRequest;
import org.openapis.openapi.models.operations.GetOrganizationCellularGatewayUplinkStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationCellularGatewayUplinkStatusesRequest req = new GetOrganizationCellularGatewayUplinkStatusesRequest("quibusdam") {{
                endingBefore = "praesentium";
                iccids = new String[]{{
                    add("esse"),
                }};
                networkIds = new String[]{{
                    add("odit"),
                }};
                perPage = 864218L;
                serials = new String[]{{
                    add("corporis"),
                    add("est"),
                    add("ad"),
                }};
                startingAfter = "sapiente";
            }};            

            GetOrganizationCellularGatewayUplinkStatusesResponse res = sdk.monitor.getOrganizationCellularGatewayUplinkStatuses(req);

            if (res.getOrganizationCellularGatewayUplinkStatuses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationClientsBandwidthUsageHistory

Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationClientsBandwidthUsageHistoryRequest;
import org.openapis.openapi.models.operations.GetOrganizationClientsBandwidthUsageHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationClientsBandwidthUsageHistoryRequest req = new GetOrganizationClientsBandwidthUsageHistoryRequest("vitae") {{
                t0 = "eligendi";
                t1 = "similique";
                timespan = 6136.86;
            }};            

            GetOrganizationClientsBandwidthUsageHistoryResponse res = sdk.monitor.getOrganizationClientsBandwidthUsageHistory(req);

            if (res.getOrganizationClientsBandwidthUsageHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationClientsOverview

Return summary information around client data usage (in mb) across the given organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationClientsOverviewRequest;
import org.openapis.openapi.models.operations.GetOrganizationClientsOverviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationClientsOverviewRequest req = new GetOrganizationClientsOverviewRequest("quasi") {{
                t0 = "assumenda";
                t1 = "nemo";
                timespan = 8855.11;
            }};            

            GetOrganizationClientsOverviewResponse res = sdk.monitor.getOrganizationClientsOverview(req);

            if (res.getOrganizationClientsOverview200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationConfigurationChanges

View the Change Log for your organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationConfigurationChangesRequest;
import org.openapis.openapi.models.operations.GetOrganizationConfigurationChangesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationConfigurationChangesRequest req = new GetOrganizationConfigurationChangesRequest("perferendis") {{
                adminId = "quasi";
                endingBefore = "ab";
                networkId = "libero";
                perPage = 813845L;
                startingAfter = "tempora";
                t0 = "pariatur";
                t1 = "consequuntur";
                timespan = 9996.28;
            }};            

            GetOrganizationConfigurationChangesResponse res = sdk.monitor.getOrganizationConfigurationChanges(req);

            if (res.getOrganizationConfigurationChanges200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationDevicesAvailabilities

List the availability information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationDevicesAvailabilitiesRequest;
import org.openapis.openapi.models.operations.GetOrganizationDevicesAvailabilitiesResponse;
import org.openapis.openapi.models.operations.GetOrganizationDevicesAvailabilitiesTagsFilterTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationDevicesAvailabilitiesRequest req = new GetOrganizationDevicesAvailabilitiesRequest("maiores") {{
                endingBefore = "possimus";
                networkIds = new String[]{{
                    add("fuga"),
                }};
                perPage = 428942L;
                productTypes = new String[]{{
                    add("ipsam"),
                    add("magni"),
                }};
                serials = new String[]{{
                    add("facere"),
                    add("possimus"),
                }};
                startingAfter = "recusandae";
                tags = new String[]{{
                    add("pariatur"),
                    add("doloribus"),
                    add("non"),
                }};
                tagsFilterType = GetOrganizationDevicesAvailabilitiesTagsFilterTypeEnum.WITH_ANY_TAGS;
            }};            

            GetOrganizationDevicesAvailabilitiesResponse res = sdk.monitor.getOrganizationDevicesAvailabilities(req);

            if (res.getOrganizationDevicesAvailabilities200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationDevicesPowerModulesStatusesByDevice

List the power status information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationDevicesPowerModulesStatusesByDeviceRequest;
import org.openapis.openapi.models.operations.GetOrganizationDevicesPowerModulesStatusesByDeviceResponse;
import org.openapis.openapi.models.operations.GetOrganizationDevicesPowerModulesStatusesByDeviceTagsFilterTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationDevicesPowerModulesStatusesByDeviceRequest req = new GetOrganizationDevicesPowerModulesStatusesByDeviceRequest("mollitia") {{
                endingBefore = "blanditiis";
                networkIds = new String[]{{
                    add("impedit"),
                    add("sed"),
                    add("maiores"),
                    add("facere"),
                }};
                perPage = 915872L;
                productTypes = new String[]{{
                    add("voluptatem"),
                }};
                serials = new String[]{{
                    add("sit"),
                }};
                startingAfter = "iure";
                tags = new String[]{{
                    add("ex"),
                    add("explicabo"),
                    add("dolorum"),
                }};
                tagsFilterType = GetOrganizationDevicesPowerModulesStatusesByDeviceTagsFilterTypeEnum.WITH_ANY_TAGS;
            }};            

            GetOrganizationDevicesPowerModulesStatusesByDeviceResponse res = sdk.monitor.getOrganizationDevicesPowerModulesStatusesByDevice(req);

            if (res.getOrganizationDevicesPowerModulesStatusesByDevice200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationDevicesStatuses

List the status of every Meraki device in the organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesProductTypesEnum;
import org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesRequest;
import org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesResponse;
import org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesStatusesEnum;
import org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesTagsFilterTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationDevicesStatusesRequest req = new GetOrganizationDevicesStatusesRequest("consequatur") {{
                endingBefore = "repellendus";
                models = new String[]{{
                    add("ipsum"),
                    add("laboriosam"),
                    add("quaerat"),
                }};
                networkIds = new String[]{{
                    add("facere"),
                    add("quidem"),
                    add("cumque"),
                    add("molestiae"),
                }};
                perPage = 440950L;
                productTypes = new org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesProductTypesEnum[]{{
                    add(GetOrganizationDevicesStatusesProductTypesEnum.SENSOR),
                    add(GetOrganizationDevicesStatusesProductTypesEnum.APPLIANCE),
                    add(GetOrganizationDevicesStatusesProductTypesEnum.CAMERA),
                }};
                serials = new String[]{{
                    add("quia"),
                    add("officia"),
                    add("nisi"),
                }};
                startingAfter = "facere";
                statuses = new org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesStatusesEnum[]{{
                    add(GetOrganizationDevicesStatusesStatusesEnum.ALERTING),
                    add(GetOrganizationDevicesStatusesStatusesEnum.DORMANT),
                    add(GetOrganizationDevicesStatusesStatusesEnum.ALERTING),
                    add(GetOrganizationDevicesStatusesStatusesEnum.OFFLINE),
                }};
                tags = new String[]{{
                    add("eum"),
                    add("quos"),
                    add("magnam"),
                }};
                tagsFilterType = GetOrganizationDevicesStatusesTagsFilterTypeEnum.WITH_ALL_TAGS;
            }};            

            GetOrganizationDevicesStatusesResponse res = sdk.monitor.getOrganizationDevicesStatuses(req);

            if (res.getOrganizationDevicesStatuses200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationDevicesStatusesOverview

Return an overview of current device statuses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesOverviewProductTypesEnum;
import org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesOverviewRequest;
import org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesOverviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationDevicesStatusesOverviewRequest req = new GetOrganizationDevicesStatusesOverviewRequest("sit") {{
                networkIds = new String[]{{
                    add("repellendus"),
                    add("vitae"),
                    add("labore"),
                    add("placeat"),
                }};
                productTypes = new org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesOverviewProductTypesEnum[]{{
                    add(GetOrganizationDevicesStatusesOverviewProductTypesEnum.SWITCH_),
                    add(GetOrganizationDevicesStatusesOverviewProductTypesEnum.SENSOR),
                }};
            }};            

            GetOrganizationDevicesStatusesOverviewResponse res = sdk.monitor.getOrganizationDevicesStatusesOverview(req);

            if (res.getOrganizationDevicesStatusesOverview200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationDevicesUplinksAddressesByDevice

List the current uplink addresses for devices in an organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationDevicesUplinksAddressesByDeviceRequest;
import org.openapis.openapi.models.operations.GetOrganizationDevicesUplinksAddressesByDeviceResponse;
import org.openapis.openapi.models.operations.GetOrganizationDevicesUplinksAddressesByDeviceTagsFilterTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationDevicesUplinksAddressesByDeviceRequest req = new GetOrganizationDevicesUplinksAddressesByDeviceRequest("corrupti") {{
                endingBefore = "quasi";
                networkIds = new String[]{{
                    add("odio"),
                }};
                perPage = 498711L;
                productTypes = new String[]{{
                    add("recusandae"),
                    add("ipsum"),
                    add("nesciunt"),
                    add("praesentium"),
                }};
                serials = new String[]{{
                    add("et"),
                    add("voluptatibus"),
                    add("placeat"),
                }};
                startingAfter = "iusto";
                tags = new String[]{{
                    add("saepe"),
                    add("odit"),
                    add("accusantium"),
                    add("error"),
                }};
                tagsFilterType = GetOrganizationDevicesUplinksAddressesByDeviceTagsFilterTypeEnum.WITH_ANY_TAGS;
            }};            

            GetOrganizationDevicesUplinksAddressesByDeviceResponse res = sdk.monitor.getOrganizationDevicesUplinksAddressesByDevice(req);

            if (res.getOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationDevicesUplinksLossAndLatency

Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationDevicesUplinksLossAndLatencyRequest;
import org.openapis.openapi.models.operations.GetOrganizationDevicesUplinksLossAndLatencyResponse;
import org.openapis.openapi.models.operations.GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationDevicesUplinksLossAndLatencyRequest req = new GetOrganizationDevicesUplinksLossAndLatencyRequest("alias") {{
                ip = "blanditiis";
                t0 = "tempora";
                t1 = "perspiciatis";
                timespan = 9166.33;
                uplink = GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum.CELLULAR;
            }};            

            GetOrganizationDevicesUplinksLossAndLatencyResponse res = sdk.monitor.getOrganizationDevicesUplinksLossAndLatency(req);

            if (res.getOrganizationDevicesUplinksLossAndLatency200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationLicensesOverview

Return an overview of the license state for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationLicensesOverviewRequest;
import org.openapis.openapi.models.operations.GetOrganizationLicensesOverviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationLicensesOverviewRequest req = new GetOrganizationLicensesOverviewRequest("autem");            

            GetOrganizationLicensesOverviewResponse res = sdk.monitor.getOrganizationLicensesOverview(req);

            if (res.getOrganizationLicensesOverview200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationOpenapiSpec

Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationOpenapiSpecRequest;
import org.openapis.openapi.models.operations.GetOrganizationOpenapiSpecResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationOpenapiSpecRequest req = new GetOrganizationOpenapiSpecRequest("cumque");            

            GetOrganizationOpenapiSpecResponse res = sdk.monitor.getOrganizationOpenapiSpec(req);

            if (res.getOrganizationOpenapiSpec200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSensorReadingsHistory

Return all reported readings from sensors in a given timespan, sorted by timestamp

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSensorReadingsHistoryRequest;
import org.openapis.openapi.models.operations.GetOrganizationSensorReadingsHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSensorReadingsHistoryRequest req = new GetOrganizationSensorReadingsHistoryRequest("iusto") {{
                endingBefore = "cum";
                metrics = new String[]{{
                    add("aliquid"),
                }};
                networkIds = new String[]{{
                    add("laudantium"),
                    add("incidunt"),
                }};
                perPage = 63427L;
                serials = new String[]{{
                    add("expedita"),
                }};
                startingAfter = "porro";
                t0 = "deleniti";
                t1 = "commodi";
                timespan = 9735.69;
            }};            

            GetOrganizationSensorReadingsHistoryResponse res = sdk.monitor.getOrganizationSensorReadingsHistory(req);

            if (res.getOrganizationSensorReadingsHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSensorReadingsLatest

Return the latest available reading for each metric from each sensor, sorted by sensor serial

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSensorReadingsLatestRequest;
import org.openapis.openapi.models.operations.GetOrganizationSensorReadingsLatestResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSensorReadingsLatestRequest req = new GetOrganizationSensorReadingsLatestRequest("at") {{
                endingBefore = "assumenda";
                metrics = new String[]{{
                    add("nisi"),
                    add("ipsam"),
                }};
                networkIds = new String[]{{
                    add("id"),
                    add("cupiditate"),
                }};
                perPage = 458447L;
                serials = new String[]{{
                    add("quos"),
                    add("vitae"),
                }};
                startingAfter = "reiciendis";
            }};            

            GetOrganizationSensorReadingsLatestResponse res = sdk.monitor.getOrganizationSensorReadingsLatest(req);

            if (res.getOrganizationSensorReadingsLatest200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSummaryTopAppliancesByUtilization

Return the top 10 appliances sorted by utilization over given time range.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopAppliancesByUtilizationRequest;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopAppliancesByUtilizationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopAppliancesByUtilizationRequest req = new GetOrganizationSummaryTopAppliancesByUtilizationRequest("et") {{
                t0 = "maiores";
                t1 = "perspiciatis";
                timespan = 371.57;
            }};            

            GetOrganizationSummaryTopAppliancesByUtilizationResponse res = sdk.monitor.getOrganizationSummaryTopAppliancesByUtilization(req);

            if (res.getOrganizationSummaryTopAppliancesByUtilization200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSummaryTopClientsByUsage

Return metrics for organization's top 10 clients by data usage (in mb) over given time range.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopClientsByUsageRequest;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopClientsByUsageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopClientsByUsageRequest req = new GetOrganizationSummaryTopClientsByUsageRequest("quaerat") {{
                t0 = "ipsum";
                t1 = "nisi";
                timespan = 5860.95;
            }};            

            GetOrganizationSummaryTopClientsByUsageResponse res = sdk.monitor.getOrganizationSummaryTopClientsByUsage(req);

            if (res.getOrganizationSummaryTopClientsByUsage200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSummaryTopClientsManufacturersByUsage

Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopClientsManufacturersByUsageRequest;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopClientsManufacturersByUsageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopClientsManufacturersByUsageRequest req = new GetOrganizationSummaryTopClientsManufacturersByUsageRequest("quo") {{
                t0 = "facilis";
                t1 = "ut";
                timespan = 5958.99;
            }};            

            GetOrganizationSummaryTopClientsManufacturersByUsageResponse res = sdk.monitor.getOrganizationSummaryTopClientsManufacturersByUsage(req);

            if (res.getOrganizationSummaryTopClientsManufacturersByUsage200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSummaryTopDevicesByUsage

Return metrics for organization's top 10 devices sorted by data usage over given time range. Default unit is megabytes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopDevicesByUsageRequest;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopDevicesByUsageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopDevicesByUsageRequest req = new GetOrganizationSummaryTopDevicesByUsageRequest("impedit") {{
                t0 = "explicabo";
                t1 = "ullam";
                timespan = 4739.27;
            }};            

            GetOrganizationSummaryTopDevicesByUsageResponse res = sdk.monitor.getOrganizationSummaryTopDevicesByUsage(req);

            if (res.getOrganizationSummaryTopDevicesByUsage200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSummaryTopDevicesModelsByUsage

Return metrics for organization's top 10 device models sorted by data usage over given time range. Default unit is megabytes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopDevicesModelsByUsageRequest;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopDevicesModelsByUsageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopDevicesModelsByUsageRequest req = new GetOrganizationSummaryTopDevicesModelsByUsageRequest("libero") {{
                t0 = "cum";
                t1 = "reprehenderit";
                timespan = 8422.46;
            }};            

            GetOrganizationSummaryTopDevicesModelsByUsageResponse res = sdk.monitor.getOrganizationSummaryTopDevicesModelsByUsage(req);

            if (res.getOrganizationSummaryTopDevicesModelsByUsage200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSummaryTopSsidsByUsage

Return metrics for organization's top 10 ssids by data usage over given time range. Default unit is megabytes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopSsidsByUsageRequest;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopSsidsByUsageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopSsidsByUsageRequest req = new GetOrganizationSummaryTopSsidsByUsageRequest("repellat") {{
                t0 = "molestiae";
                t1 = "dolores";
                timespan = 536.13;
            }};            

            GetOrganizationSummaryTopSsidsByUsageResponse res = sdk.monitor.getOrganizationSummaryTopSsidsByUsage(req);

            if (res.getOrganizationSummaryTopSsidsByUsage200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSummaryTopSwitchesByEnergyUsage

Return metrics for organization's top 10 switches by energy usage over given time range. Default unit is joules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopSwitchesByEnergyUsageRequest;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopSwitchesByEnergyUsageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopSwitchesByEnergyUsageRequest req = new GetOrganizationSummaryTopSwitchesByEnergyUsageRequest("ad") {{
                t0 = "dolore";
                t1 = "veritatis";
                timespan = 7838.69;
            }};            

            GetOrganizationSummaryTopSwitchesByEnergyUsageResponse res = sdk.monitor.getOrganizationSummaryTopSwitchesByEnergyUsage(req);

            if (res.getOrganizationSummaryTopSwitchesByEnergyUsage200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationUplinksStatuses

List the uplink status of every Meraki MX, MG and Z series devices in the organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationUplinksStatusesRequest;
import org.openapis.openapi.models.operations.GetOrganizationUplinksStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationUplinksStatusesRequest req = new GetOrganizationUplinksStatusesRequest("eligendi") {{
                endingBefore = "molestiae";
                iccids = new String[]{{
                    add("ea"),
                    add("eligendi"),
                    add("optio"),
                    add("maiores"),
                }};
                networkIds = new String[]{{
                    add("aliquid"),
                    add("commodi"),
                    add("delectus"),
                }};
                perPage = 133898L;
                serials = new String[]{{
                    add("iusto"),
                }};
                startingAfter = "voluptate";
            }};            

            GetOrganizationUplinksStatusesResponse res = sdk.monitor.getOrganizationUplinksStatuses(req);

            if (res.getOrganizationUplinksStatuses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationWebhooksAlertTypes

Return a list of alert types to be used with managing webhook alerts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationWebhooksAlertTypesProductTypeEnum;
import org.openapis.openapi.models.operations.GetOrganizationWebhooksAlertTypesRequest;
import org.openapis.openapi.models.operations.GetOrganizationWebhooksAlertTypesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationWebhooksAlertTypesRequest req = new GetOrganizationWebhooksAlertTypesRequest("beatae") {{
                productType = GetOrganizationWebhooksAlertTypesProductTypeEnum.HEALTH;
            }};            

            GetOrganizationWebhooksAlertTypesResponse res = sdk.monitor.getOrganizationWebhooksAlertTypes(req);

            if (res.getOrganizationWebhooksAlertTypes200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationWebhooksLogs

Return the log of webhook POSTs sent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationWebhooksLogsRequest;
import org.openapis.openapi.models.operations.GetOrganizationWebhooksLogsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationWebhooksLogsRequest req = new GetOrganizationWebhooksLogsRequest("accusamus") {{
                endingBefore = "voluptatibus";
                perPage = 275887L;
                startingAfter = "veritatis";
                t0 = "eum";
                t1 = "deserunt";
                timespan = 314.8;
                url = "non";
            }};            

            GetOrganizationWebhooksLogsResponse res = sdk.monitor.getOrganizationWebhooksLogs(req);

            if (res.getOrganizationWebhooksLogs200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
