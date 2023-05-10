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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GenerateDeviceCameraSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\GenerateDeviceCameraSnapshotRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenerateDeviceCameraSnapshotRequest();
    $request->requestBody = new GenerateDeviceCameraSnapshotRequestBody();
    $request->requestBody->fullframe = false;
    $request->requestBody->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-08T07:16:23.612Z');
    $request->serial = 'quis';

    $response = $sdk->monitor->generateDeviceCameraSnapshot($request);

    if ($response->generateDeviceCameraSnapshot202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAdministeredIdentitiesMe

Returns the identity of the current user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->monitor->getAdministeredIdentitiesMe();

    if ($response->getAdministeredIdentitiesMe200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceApplianceDhcpSubnets

Return the DHCP subnet information for an appliance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceApplianceDhcpSubnetsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceApplianceDhcpSubnetsRequest();
    $request->serial = 'doloremque';

    $response = $sdk->monitor->getDeviceApplianceDhcpSubnets($request);

    if ($response->getDeviceApplianceDhcpSubnets200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceAppliancePerformance

Return the performance score for a single MX. Only primary MX devices supported. If no data is available, a 204 error code is returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceAppliancePerformanceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceAppliancePerformanceRequest();
    $request->serial = 'similique';

    $response = $sdk->monitor->getDeviceAppliancePerformance($request);

    if ($response->getDeviceAppliancePerformance200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceAppliancePrefixesDelegated

Return current delegated IPv6 prefixes on an appliance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceAppliancePrefixesDelegatedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceAppliancePrefixesDelegatedRequest();
    $request->serial = 'eum';

    $response = $sdk->monitor->getDeviceAppliancePrefixesDelegated($request);

    if ($response->getDeviceAppliancePrefixesDelegated200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceAppliancePrefixesDelegatedVlanAssignments

Return prefixes assigned to all IPv6 enabled VLANs on an appliance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceAppliancePrefixesDelegatedVlanAssignmentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceAppliancePrefixesDelegatedVlanAssignmentsRequest();
    $request->serial = 'quis';

    $response = $sdk->monitor->getDeviceAppliancePrefixesDelegatedVlanAssignments($request);

    if ($response->getDeviceAppliancePrefixesDelegatedVlanAssignments200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCameraAnalyticsLive

Returns live state from camera of analytics zones

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraAnalyticsLiveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraAnalyticsLiveRequest();
    $request->serial = 'commodi';

    $response = $sdk->monitor->getDeviceCameraAnalyticsLive($request);

    if ($response->getDeviceCameraAnalyticsLive200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCameraAnalyticsOverview

Returns an overview of aggregate analytics data for a timespan

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraAnalyticsOverviewRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraAnalyticsOverviewObjectTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraAnalyticsOverviewRequest();
    $request->objectType = GetDeviceCameraAnalyticsOverviewObjectTypeEnum::VEHICLE;
    $request->serial = 'possimus';
    $request->t0 = 'dolor';
    $request->t1 = 'ratione';
    $request->timespan = 2437.43;

    $response = $sdk->monitor->getDeviceCameraAnalyticsOverview($request);

    if ($response->getDeviceCameraAnalyticsOverview200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCameraAnalyticsRecent

Returns most recent record for analytics zones

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraAnalyticsRecentRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraAnalyticsRecentObjectTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraAnalyticsRecentRequest();
    $request->objectType = GetDeviceCameraAnalyticsRecentObjectTypeEnum::VEHICLE;
    $request->serial = 'cum';

    $response = $sdk->monitor->getDeviceCameraAnalyticsRecent($request);

    if ($response->getDeviceCameraAnalyticsRecent200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCameraAnalyticsZoneHistory

Return historical records for analytic zones

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraAnalyticsZoneHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraAnalyticsZoneHistoryRequest();
    $request->objectType = GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum::PERSON;
    $request->resolution = 777399;
    $request->serial = 'officiis';
    $request->t0 = 'laudantium';
    $request->t1 = 'est';
    $request->timespan = 6847.08;
    $request->zoneId = 'autem';

    $response = $sdk->monitor->getDeviceCameraAnalyticsZoneHistory($request);

    if ($response->getDeviceCameraAnalyticsZoneHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceCameraAnalyticsZones

Returns all configured analytic zones for this camera

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraAnalyticsZonesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraAnalyticsZonesRequest();
    $request->serial = 'quis';

    $response = $sdk->monitor->getDeviceCameraAnalyticsZones($request);

    if ($response->getDeviceCameraAnalyticsZones200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceClients

List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceClientsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceClientsRequest();
    $request->serial = 'modi';
    $request->t0 = 'consectetur';
    $request->timespan = 1844.01;

    $response = $sdk->monitor->getDeviceClients($request);

    if ($response->getDeviceClients200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceLldpCdp

List LLDP and CDP information for a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceLldpCdpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceLldpCdpRequest();
    $request->serial = 'officia';

    $response = $sdk->monitor->getDeviceLldpCdp($request);

    if ($response->getDeviceLldpCdp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceLossAndLatencyHistory

Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceLossAndLatencyHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceLossAndLatencyHistoryUplinkEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceLossAndLatencyHistoryRequest();
    $request->ip = 'cupiditate';
    $request->resolution = 525089;
    $request->serial = 'ea';
    $request->t0 = 'debitis';
    $request->t1 = 'soluta';
    $request->timespan = 4878.01;
    $request->uplink = GetDeviceLossAndLatencyHistoryUplinkEnum::WAN2;

    $response = $sdk->monitor->getDeviceLossAndLatencyHistory($request);

    if ($response->getDeviceLossAndLatencyHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSwitchPortsStatuses

Return the status for all the ports of a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchPortsStatusesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchPortsStatusesRequest();
    $request->serial = 'beatae';
    $request->t0 = 'dolore';
    $request->timespan = 7908.42;

    $response = $sdk->monitor->getDeviceSwitchPortsStatuses($request);

    if ($response->getDeviceSwitchPortsStatuses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSwitchPortsStatusesPackets

Return the packet counters for all the ports of a switch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSwitchPortsStatusesPacketsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSwitchPortsStatusesPacketsRequest();
    $request->serial = 'mollitia';
    $request->t0 = 'ipsam';
    $request->timespan = 4227.22;

    $response = $sdk->monitor->getDeviceSwitchPortsStatusesPackets($request);

    if ($response->getDeviceSwitchPortsStatusesPackets200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceWirelessConnectionStats

Aggregated connectivity info for a given AP on this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceWirelessConnectionStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceWirelessConnectionStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceWirelessConnectionStatsRequest();
    $request->apTag = 'non';
    $request->band = GetDeviceWirelessConnectionStatsBandEnum::TWO4;
    $request->serial = 'atque';
    $request->ssid = 615433;
    $request->t0 = 'beatae';
    $request->t1 = 'nemo';
    $request->timespan = 530.57;
    $request->vlan = 13726;

    $response = $sdk->monitor->getDeviceWirelessConnectionStats($request);

    if ($response->getDeviceWirelessConnectionStats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceWirelessLatencyStats

Aggregated latency info for a given AP on this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceWirelessLatencyStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceWirelessLatencyStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceWirelessLatencyStatsRequest();
    $request->apTag = 'natus';
    $request->band = GetDeviceWirelessLatencyStatsBandEnum::FIVE;
    $request->fields = 'accusantium';
    $request->serial = 'et';
    $request->ssid = 603306;
    $request->t0 = 'similique';
    $request->t1 = 'eius';
    $request->timespan = 5264.96;
    $request->vlan = 965494;

    $response = $sdk->monitor->getDeviceWirelessLatencyStats($request);

    if ($response->getDeviceWirelessLatencyStats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceWirelessStatus

Return the SSID statuses of an access point

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceWirelessStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceWirelessStatusRequest();
    $request->serial = 'blanditiis';

    $response = $sdk->monitor->getDeviceWirelessStatus($request);

    if ($response->getDeviceWirelessStatus200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkAlertsHistory

Return the alert history for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkAlertsHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkAlertsHistoryRequest();
    $request->endingBefore = 'laudantium';
    $request->networkId = 'earum';
    $request->perPage = 773873;
    $request->startingAfter = 'accusamus';

    $response = $sdk->monitor->getNetworkAlertsHistory($request);

    if ($response->getNetworkAlertsHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceClientSecurityEvents

List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceClientSecurityEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceClientSecurityEventsSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceClientSecurityEventsRequest();
    $request->clientId = 'reprehenderit';
    $request->endingBefore = 'expedita';
    $request->networkId = 'hic';
    $request->perPage = 577541;
    $request->sortOrder = GetNetworkApplianceClientSecurityEventsSortOrderEnum::ASCENDING;
    $request->startingAfter = 'non';
    $request->t0 = 'saepe';
    $request->t1 = 'consequatur';
    $request->timespan = 1008.76;

    $response = $sdk->monitor->getNetworkApplianceClientSecurityEvents($request);

    if ($response->getNetworkApplianceClientSecurityEvents200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceSecurityEvents

List the security events for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceSecurityEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceSecurityEventsSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceSecurityEventsRequest();
    $request->endingBefore = 'dicta';
    $request->networkId = 'sit';
    $request->perPage = 320294;
    $request->sortOrder = GetNetworkApplianceSecurityEventsSortOrderEnum::DESCENDING;
    $request->startingAfter = 'sequi';
    $request->t0 = 'laudantium';
    $request->t1 = 'excepturi';
    $request->timespan = 44.31;

    $response = $sdk->monitor->getNetworkApplianceSecurityEvents($request);

    if ($response->getNetworkApplianceSecurityEvents200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceUplinksUsageHistory

Get the sent and received bytes for each uplink of a network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceUplinksUsageHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceUplinksUsageHistoryRequest();
    $request->networkId = 'deleniti';
    $request->resolution = 98172;
    $request->t0 = 'laboriosam';
    $request->t1 = 'aspernatur';
    $request->timespan = 8005.45;

    $response = $sdk->monitor->getNetworkApplianceUplinksUsageHistory($request);

    if ($response->getNetworkApplianceUplinksUsageHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkBluetoothClient

Return a Bluetooth client. Bluetooth clients can be identified by their ID or their MAC.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkBluetoothClientRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkBluetoothClientRequest();
    $request->bluetoothClientId = 'suscipit';
    $request->connectivityHistoryTimespan = 731157;
    $request->includeConnectivityHistory = false;
    $request->networkId = 'recusandae';

    $response = $sdk->monitor->getNetworkBluetoothClient($request);

    if ($response->getNetworkBluetoothClient200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkBluetoothClients

List the Bluetooth clients seen by APs in this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkBluetoothClientsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkBluetoothClientsRequest();
    $request->endingBefore = 'harum';
    $request->includeConnectivityHistory = false;
    $request->networkId = 'nisi';
    $request->perPage = 502675;
    $request->startingAfter = 'culpa';
    $request->t0 = 'doloremque';
    $request->timespan = 9856.83;

    $response = $sdk->monitor->getNetworkBluetoothClients($request);

    if ($response->getNetworkBluetoothClients200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClient

Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientRequest();
    $request->clientId = 'vel';
    $request->networkId = 'enim';

    $response = $sdk->monitor->getNetworkClient($request);

    if ($response->getNetworkClient200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClientTrafficHistory

Return the client's network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide > General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientTrafficHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientTrafficHistoryRequest();
    $request->clientId = 'ducimus';
    $request->endingBefore = 'quidem';
    $request->networkId = 'in';
    $request->perPage = 870547;
    $request->startingAfter = 'alias';

    $response = $sdk->monitor->getNetworkClientTrafficHistory($request);

    if ($response->getNetworkClientTrafficHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClientUsageHistory

Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientUsageHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientUsageHistoryRequest();
    $request->clientId = 'consectetur';
    $request->networkId = 'mollitia';

    $response = $sdk->monitor->getNetworkClientUsageHistory($request);

    if ($response->getNetworkClientUsageHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClients

List the clients that have used this network in the timespan

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientsRecentDeviceConnectionsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientsStatusesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientsRequest();
    $request->description = 'beatae';
    $request->endingBefore = 'numquam';
    $request->ip = 'praesentium';
    $request->ip6 = 'aperiam';
    $request->ip6Local = 'hic';
    $request->mac = 'blanditiis';
    $request->networkId = 'at';
    $request->os = 'repudiandae';
    $request->perPage = 217136;
    $request->recentDeviceConnections = [
        GetNetworkClientsRecentDeviceConnectionsEnum::WIRELESS,
    ];
    $request->startingAfter = 'aut';
    $request->statuses = [
        GetNetworkClientsStatusesEnum::ONLINE,
        GetNetworkClientsStatusesEnum::ONLINE,
    ];
    $request->t0 = 'atque';
    $request->timespan = 1068;
    $request->vlan = 'aut';

    $response = $sdk->monitor->getNetworkClients($request);

    if ($response->getNetworkClients200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClientsApplicationUsage

Return the application usage data for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientsApplicationUsageRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientsApplicationUsageSsidNumberEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientsApplicationUsageRequest();
    $request->clients = 'commodi';
    $request->endingBefore = 'architecto';
    $request->networkId = 'atque';
    $request->perPage = 836395;
    $request->ssidNumber = GetNetworkClientsApplicationUsageSsidNumberEnum::NINE;
    $request->startingAfter = 'voluptate';
    $request->t0 = 'debitis';
    $request->t1 = 'sunt';
    $request->timespan = 3206.89;

    $response = $sdk->monitor->getNetworkClientsApplicationUsage($request);

    if ($response->getNetworkClientsApplicationUsage200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClientsBandwidthUsageHistory

Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientsBandwidthUsageHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientsBandwidthUsageHistoryRequest();
    $request->endingBefore = 'quia';
    $request->networkId = 'aspernatur';
    $request->perPage = 611423;
    $request->startingAfter = 'molestiae';
    $request->t0 = 'minima';
    $request->t1 = 'et';
    $request->timespan = 257.05;

    $response = $sdk->monitor->getNetworkClientsBandwidthUsageHistory($request);

    if ($response->getNetworkClientsBandwidthUsageHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClientsOverview

Return overview statistics for network clients

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientsOverviewRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientsOverviewRequest();
    $request->networkId = 'quibusdam';
    $request->resolution = 636019;
    $request->t0 = 'voluptatum';
    $request->t1 = 'voluptatem';
    $request->timespan = 2289.77;

    $response = $sdk->monitor->getNetworkClientsOverview($request);

    if ($response->getNetworkClientsOverview200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClientsUsageHistories

Return the usage histories for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientsUsageHistoriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientsUsageHistoriesSsidNumberEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientsUsageHistoriesRequest();
    $request->clients = 'vitae';
    $request->endingBefore = 'explicabo';
    $request->networkId = 'quia';
    $request->perPage = 591082;
    $request->ssidNumber = GetNetworkClientsUsageHistoriesSsidNumberEnum::TWO;
    $request->startingAfter = 'nobis';
    $request->t0 = 'optio';
    $request->t1 = 'laboriosam';
    $request->timespan = 934.45;

    $response = $sdk->monitor->getNetworkClientsUsageHistories($request);

    if ($response->getNetworkClientsUsageHistories200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkEvents

List the events for the network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkEventsProductTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkEventsRequest();
    $request->clientIp = 'porro';
    $request->clientMac = 'sed';
    $request->clientName = 'laborum';
    $request->deviceMac = 'in';
    $request->deviceName = 'eaque';
    $request->deviceSerial = 'odit';
    $request->endingBefore = 'distinctio';
    $request->excludedEventTypes = [
        'sint',
        'odio',
        'repudiandae',
    ];
    $request->includedEventTypes = [
        'quasi',
        'accusantium',
        'dolores',
        'fugiat',
    ];
    $request->networkId = 'id';
    $request->perPage = 153811;
    $request->productType = GetNetworkEventsProductTypeEnum::WIRELESS;
    $request->smDeviceMac = 'recusandae';
    $request->smDeviceName = 'neque';
    $request->startingAfter = 'minima';

    $response = $sdk->monitor->getNetworkEvents($request);

    if ($response->getNetworkEvents200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkEventsEventTypes

List the event type to human-readable description

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkEventsEventTypesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkEventsEventTypesRequest();
    $request->networkId = 'tenetur';

    $response = $sdk->monitor->getNetworkEventsEventTypes($request);

    if ($response->getNetworkEventsEventTypes200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkInsightApplicationHealthByTime

Get application health by time

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkInsightApplicationHealthByTimeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkInsightApplicationHealthByTimeRequest();
    $request->applicationId = 'praesentium';
    $request->networkId = 'officiis';
    $request->resolution = 23694;
    $request->t0 = 'quasi';
    $request->t1 = 'libero';
    $request->timespan = 9452.18;

    $response = $sdk->monitor->getNetworkInsightApplicationHealthByTime($request);

    if ($response->getNetworkInsightApplicationHealthByTime200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkNetworkHealthChannelUtilization

Get the channel utilization over each radio for all APs in a network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkNetworkHealthChannelUtilizationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkNetworkHealthChannelUtilizationRequest();
    $request->endingBefore = 'dolorem';
    $request->networkId = 'adipisci';
    $request->perPage = 916617;
    $request->resolution = 626457;
    $request->startingAfter = 'id';
    $request->t0 = 'quidem';
    $request->t1 = 'ut';
    $request->timespan = 3304.68;

    $response = $sdk->monitor->getNetworkNetworkHealthChannelUtilization($request);

    if ($response->getNetworkNetworkHealthChannelUtilization200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSensorAlertsCurrentOverviewByMetric

Return an overview of currently alerting sensors by metric

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSensorAlertsCurrentOverviewByMetricRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSensorAlertsCurrentOverviewByMetricRequest();
    $request->networkId = 'eius';

    $response = $sdk->monitor->getNetworkSensorAlertsCurrentOverviewByMetric($request);

    if ($response->getNetworkSensorAlertsCurrentOverviewByMetric200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSensorAlertsOverviewByMetric

Return an overview of alert occurrences over a timespan, by metric

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSensorAlertsOverviewByMetricRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSensorAlertsOverviewByMetricRequest();
    $request->interval = 61954;
    $request->networkId = 'dolores';
    $request->t0 = 'dolorum';
    $request->t1 = 'quod';
    $request->timespan = 1218.6;

    $response = $sdk->monitor->getNetworkSensorAlertsOverviewByMetric($request);

    if ($response->getNetworkSensorAlertsOverviewByMetric200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmDeviceCellularUsageHistory

Return the client's daily cellular data usage history. Usage data is in kilobytes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceCellularUsageHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmDeviceCellularUsageHistoryRequest();
    $request->deviceId = 'iure';
    $request->networkId = 'voluptatem';

    $response = $sdk->monitor->getNetworkSmDeviceCellularUsageHistory($request);

    if ($response->getNetworkSmDeviceCellularUsageHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmDeviceConnectivity

Returns historical connectivity data (whether a device is regularly checking in to Dashboard).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceConnectivityRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmDeviceConnectivityRequest();
    $request->deviceId = 'incidunt';
    $request->endingBefore = 'soluta';
    $request->networkId = 'a';
    $request->perPage = 110823;
    $request->startingAfter = 'maxime';

    $response = $sdk->monitor->getNetworkSmDeviceConnectivity($request);

    if ($response->getNetworkSmDeviceConnectivity200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmDeviceDesktopLogs

Return historical records of various Systems Manager network connection details for desktop devices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceDesktopLogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmDeviceDesktopLogsRequest();
    $request->deviceId = 'placeat';
    $request->endingBefore = 'cupiditate';
    $request->networkId = 'asperiores';
    $request->perPage = 802449;
    $request->startingAfter = 'ex';

    $response = $sdk->monitor->getNetworkSmDeviceDesktopLogs($request);

    if ($response->getNetworkSmDeviceDesktopLogs200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmDeviceDeviceCommandLogs

Return historical records of commands sent to Systems Manager devices. Note that this will include the name of the Dashboard user who initiated the command if it was generated by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out of any reports.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceDeviceCommandLogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmDeviceDeviceCommandLogsRequest();
    $request->deviceId = 'dicta';
    $request->endingBefore = 'deserunt';
    $request->networkId = 'laborum';
    $request->perPage = 929941;
    $request->startingAfter = 'ad';

    $response = $sdk->monitor->getNetworkSmDeviceDeviceCommandLogs($request);

    if ($response->getNetworkSmDeviceDeviceCommandLogs200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmDevicePerformanceHistory

Return historical records of various Systems Manager client metrics for desktop devices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDevicePerformanceHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmDevicePerformanceHistoryRequest();
    $request->deviceId = 'voluptates';
    $request->endingBefore = 'harum';
    $request->networkId = 'quaerat';
    $request->perPage = 961658;
    $request->startingAfter = 'sit';

    $response = $sdk->monitor->getNetworkSmDevicePerformanceHistory($request);

    if ($response->getNetworkSmDevicePerformanceHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSplashLoginAttempts

List the splash login attempts for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSplashLoginAttemptsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSplashLoginAttemptsSsidNumberEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSplashLoginAttemptsRequest();
    $request->loginIdentifier = 'porro';
    $request->networkId = 'labore';
    $request->ssidNumber = GetNetworkSplashLoginAttemptsSsidNumberEnum::EIGHT;
    $request->timespan = 185877;

    $response = $sdk->monitor->getNetworkSplashLoginAttempts($request);

    if ($response->getNetworkSplashLoginAttempts200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkTopologyLinkLayer

List the LLDP and CDP information for all discovered devices and connections in a network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkTopologyLinkLayerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkTopologyLinkLayerRequest();
    $request->networkId = 'soluta';

    $response = $sdk->monitor->getNetworkTopologyLinkLayer($request);

    if ($response->getNetworkTopologyLinkLayer200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkTraffic

Return the traffic analysis data for this network. Traffic analysis with hostname visibility must be enabled on the network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkTrafficRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkTrafficDeviceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkTrafficRequest();
    $request->deviceType = GetNetworkTrafficDeviceTypeEnum::COMBINED;
    $request->networkId = 'nihil';
    $request->t0 = 'ut';
    $request->timespan = 2799.45;

    $response = $sdk->monitor->getNetworkTraffic($request);

    if ($response->getNetworkTraffic200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessAirMarshal

List Air Marshal scan results from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessAirMarshalRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessAirMarshalRequest();
    $request->networkId = 'quibusdam';
    $request->t0 = 'doloremque';
    $request->timespan = 5244.63;

    $response = $sdk->monitor->getNetworkWirelessAirMarshal($request);

    if ($response->getNetworkWirelessAirMarshal200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessChannelUtilizationHistory

Return AP channel utilization over time for a device or network client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessChannelUtilizationHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessChannelUtilizationHistoryBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessChannelUtilizationHistoryRequest();
    $request->apTag = 'dolorum';
    $request->autoResolution = false;
    $request->band = GetNetworkWirelessChannelUtilizationHistoryBandEnum::TWO4;
    $request->clientId = 'odit';
    $request->deviceSerial = 'laboriosam';
    $request->networkId = 'esse';
    $request->resolution = 665948;
    $request->t0 = 'est';
    $request->t1 = 'accusamus';
    $request->timespan = 8912.94;

    $response = $sdk->monitor->getNetworkWirelessChannelUtilizationHistory($request);

    if ($response->getNetworkWirelessChannelUtilizationHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessClientConnectionStats

Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientConnectionStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientConnectionStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessClientConnectionStatsRequest();
    $request->apTag = 'esse';
    $request->band = GetNetworkWirelessClientConnectionStatsBandEnum::FIVE;
    $request->clientId = 'repudiandae';
    $request->networkId = 'ipsum';
    $request->ssid = 796326;
    $request->t0 = 'molestiae';
    $request->t1 = 'illo';
    $request->timespan = 6676.2;
    $request->vlan = 812857;

    $response = $sdk->monitor->getNetworkWirelessClientConnectionStats($request);

    if ($response->getNetworkWirelessClientConnectionStats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessClientConnectivityEvents

List the wireless connectivity events for a client within a network in the timespan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientConnectivityEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientConnectivityEventsBandEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientConnectivityEventsSsidNumberEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientConnectivityEventsTypesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessClientConnectivityEventsRequest();
    $request->band = GetNetworkWirelessClientConnectivityEventsBandEnum::TWO4;
    $request->clientId = 'et';
    $request->deviceSerial = 'tempore';
    $request->endingBefore = 'voluptates';
    $request->includedSeverities = [
        GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum::INFO,
        GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum::INFO,
        GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum::BAD,
        GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum::WARN,
    ];
    $request->networkId = 'magni';
    $request->perPage = 224740;
    $request->ssidNumber = GetNetworkWirelessClientConnectivityEventsSsidNumberEnum::SIX;
    $request->startingAfter = 'deleniti';
    $request->t0 = 'mollitia';
    $request->t1 = 'debitis';
    $request->timespan = 2035.85;
    $request->types = [
        GetNetworkWirelessClientConnectivityEventsTypesEnum::STICKY,
        GetNetworkWirelessClientConnectivityEventsTypesEnum::ROAM,
        GetNetworkWirelessClientConnectivityEventsTypesEnum::AUTH,
    ];

    $response = $sdk->monitor->getNetworkWirelessClientConnectivityEvents($request);

    if ($response->getNetworkWirelessClientConnectivityEvents200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessClientCountHistory

Return wireless client counts over time for a network, device, or network client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientCountHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientCountHistoryBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessClientCountHistoryRequest();
    $request->apTag = 'dolor';
    $request->autoResolution = false;
    $request->band = GetNetworkWirelessClientCountHistoryBandEnum::SIX;
    $request->clientId = 'sint';
    $request->deviceSerial = 'eius';
    $request->networkId = 'ad';
    $request->resolution = 45570;
    $request->ssid = 658917;
    $request->t0 = 'unde';
    $request->t1 = 'rem';
    $request->timespan = 4354.11;

    $response = $sdk->monitor->getNetworkWirelessClientCountHistory($request);

    if ($response->getNetworkWirelessClientCountHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessClientLatencyHistory

Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientLatencyHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessClientLatencyHistoryRequest();
    $request->clientId = 'error';
    $request->networkId = 'aliquam';
    $request->resolution = 617670;
    $request->t0 = 'ad';
    $request->t1 = 'cum';
    $request->timespan = 6786.3;

    $response = $sdk->monitor->getNetworkWirelessClientLatencyHistory($request);

    if ($response->getNetworkWirelessClientLatencyHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessClientLatencyStats

Aggregated latency info for a given client on this network. Clients are identified by their MAC.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientLatencyStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientLatencyStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessClientLatencyStatsRequest();
    $request->apTag = 'quod';
    $request->band = GetNetworkWirelessClientLatencyStatsBandEnum::FIVE;
    $request->clientId = 'quae';
    $request->fields = 'ducimus';
    $request->networkId = 'tenetur';
    $request->ssid = 52074;
    $request->t0 = 'ex';
    $request->t1 = 'rerum';
    $request->timespan = 1700.97;
    $request->vlan = 515192;

    $response = $sdk->monitor->getNetworkWirelessClientLatencyStats($request);

    if ($response->getNetworkWirelessClientLatencyStats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessClientsConnectionStats

Aggregated connectivity info for this network, grouped by clients

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientsConnectionStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientsConnectionStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessClientsConnectionStatsRequest();
    $request->apTag = 'repudiandae';
    $request->band = GetNetworkWirelessClientsConnectionStatsBandEnum::SIX;
    $request->networkId = 'porro';
    $request->ssid = 543122;
    $request->t0 = 'autem';
    $request->t1 = 'eius';
    $request->timespan = 5999.15;
    $request->vlan = 126210;

    $response = $sdk->monitor->getNetworkWirelessClientsConnectionStats($request);

    if ($response->getNetworkWirelessClientsConnectionStats200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessClientsLatencyStats

Aggregated latency info for this network, grouped by clients

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientsLatencyStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessClientsLatencyStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessClientsLatencyStatsRequest();
    $request->apTag = 'amet';
    $request->band = GetNetworkWirelessClientsLatencyStatsBandEnum::FIVE;
    $request->fields = 'commodi';
    $request->networkId = 'a';
    $request->ssid = 400940;
    $request->t0 = 'qui';
    $request->t1 = 'eligendi';
    $request->timespan = 5986.81;
    $request->vlan = 431723;

    $response = $sdk->monitor->getNetworkWirelessClientsLatencyStats($request);

    if ($response->getNetworkWirelessClientsLatencyStats200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessConnectionStats

Aggregated connectivity info for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessConnectionStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessConnectionStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessConnectionStatsRequest();
    $request->apTag = 'sint';
    $request->band = GetNetworkWirelessConnectionStatsBandEnum::SIX;
    $request->networkId = 'incidunt';
    $request->ssid = 790080;
    $request->t0 = 'quod';
    $request->t1 = 'laboriosam';
    $request->timespan = 6970.56;
    $request->vlan = 440063;

    $response = $sdk->monitor->getNetworkWirelessConnectionStats($request);

    if ($response->getNetworkWirelessConnectionStats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessDataRateHistory

Return PHY data rates over time for a network, device, or network client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessDataRateHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessDataRateHistoryBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessDataRateHistoryRequest();
    $request->apTag = 'praesentium';
    $request->autoResolution = false;
    $request->band = GetNetworkWirelessDataRateHistoryBandEnum::FIVE;
    $request->clientId = 'error';
    $request->deviceSerial = 'alias';
    $request->networkId = 'deserunt';
    $request->resolution = 195055;
    $request->ssid = 959833;
    $request->t0 = 'illum';
    $request->t1 = 'nesciunt';
    $request->timespan = 7609.41;

    $response = $sdk->monitor->getNetworkWirelessDataRateHistory($request);

    if ($response->getNetworkWirelessDataRateHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessDevicesConnectionStats

Aggregated connectivity info for this network, grouped by node

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessDevicesConnectionStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessDevicesConnectionStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessDevicesConnectionStatsRequest();
    $request->apTag = 'corrupti';
    $request->band = GetNetworkWirelessDevicesConnectionStatsBandEnum::TWO4;
    $request->networkId = 'quibusdam';
    $request->ssid = 634898;
    $request->t0 = 'dicta';
    $request->t1 = 'perferendis';
    $request->timespan = 9901.69;
    $request->vlan = 534204;

    $response = $sdk->monitor->getNetworkWirelessDevicesConnectionStats($request);

    if ($response->getNetworkWirelessDevicesConnectionStats200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessDevicesLatencyStats

Aggregated latency info for this network, grouped by node

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessDevicesLatencyStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessDevicesLatencyStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessDevicesLatencyStatsRequest();
    $request->apTag = 'optio';
    $request->band = GetNetworkWirelessDevicesLatencyStatsBandEnum::TWO4;
    $request->fields = 'non';
    $request->networkId = 'fugiat';
    $request->ssid = 974775;
    $request->t0 = 'iste';
    $request->t1 = 'amet';
    $request->timespan = 639.82;
    $request->vlan = 862971;

    $response = $sdk->monitor->getNetworkWirelessDevicesLatencyStats($request);

    if ($response->getNetworkWirelessDevicesLatencyStats200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessFailedConnections

List of all failed client connection events on this network in a given time range

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessFailedConnectionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessFailedConnectionsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessFailedConnectionsRequest();
    $request->apTag = 'officia';
    $request->band = GetNetworkWirelessFailedConnectionsBandEnum::TWO4;
    $request->clientId = 'debitis';
    $request->networkId = 'facere';
    $request->serial = 'tempore';
    $request->ssid = 326712;
    $request->t0 = 'vitae';
    $request->t1 = 'repellat';
    $request->timespan = 6650.93;
    $request->vlan = 814962;

    $response = $sdk->monitor->getNetworkWirelessFailedConnections($request);

    if ($response->getNetworkWirelessFailedConnections200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessLatencyHistory

Return average wireless latency over time for a network, device, or network client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessLatencyHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessLatencyHistoryAccessCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessLatencyHistoryBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessLatencyHistoryRequest();
    $request->accessCategory = GetNetworkWirelessLatencyHistoryAccessCategoryEnum::VIDEO_TRAFFIC;
    $request->apTag = 'numquam';
    $request->autoResolution = false;
    $request->band = GetNetworkWirelessLatencyHistoryBandEnum::FIVE;
    $request->clientId = 'optio';
    $request->deviceSerial = 'minus';
    $request->networkId = 'sint';
    $request->resolution = 304419;
    $request->ssid = 232470;
    $request->t0 = 'ullam';
    $request->t1 = 'dicta';
    $request->timespan = 2018.16;

    $response = $sdk->monitor->getNetworkWirelessLatencyHistory($request);

    if ($response->getNetworkWirelessLatencyHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessLatencyStats

Aggregated latency info for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessLatencyStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessLatencyStatsBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessLatencyStatsRequest();
    $request->apTag = 'reprehenderit';
    $request->band = GetNetworkWirelessLatencyStatsBandEnum::FIVE;
    $request->fields = 'magni';
    $request->networkId = 'ea';
    $request->ssid = 842162;
    $request->t0 = 'veritatis';
    $request->t1 = 'ad';
    $request->timespan = 2426.06;
    $request->vlan = 158451;

    $response = $sdk->monitor->getNetworkWirelessLatencyStats($request);

    if ($response->getNetworkWirelessLatencyStats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessMeshStatuses

List wireless mesh statuses for repeaters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessMeshStatusesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessMeshStatusesRequest();
    $request->endingBefore = 'dicta';
    $request->networkId = 'nam';
    $request->perPage = 554508;
    $request->startingAfter = 'velit';

    $response = $sdk->monitor->getNetworkWirelessMeshStatuses($request);

    if ($response->getNetworkWirelessMeshStatuses200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSignalQualityHistory

Return signal quality (SNR/RSSI) over time for a device or network client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSignalQualityHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSignalQualityHistoryBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSignalQualityHistoryRequest();
    $request->apTag = 'ratione';
    $request->autoResolution = false;
    $request->band = GetNetworkWirelessSignalQualityHistoryBandEnum::SIX;
    $request->clientId = 'minima';
    $request->deviceSerial = 'aliquid';
    $request->networkId = 'facere';
    $request->resolution = 389091;
    $request->ssid = 571849;
    $request->t0 = 'architecto';
    $request->t1 = 'totam';
    $request->timespan = 13.2;

    $response = $sdk->monitor->getNetworkWirelessSignalQualityHistory($request);

    if ($response->getNetworkWirelessSignalQualityHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessUsageHistory

Return AP usage over time for a device or network client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessUsageHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessUsageHistoryBandEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessUsageHistoryRequest();
    $request->apTag = 'hic';
    $request->autoResolution = false;
    $request->band = GetNetworkWirelessUsageHistoryBandEnum::SIX;
    $request->clientId = 'iure';
    $request->deviceSerial = 'consequatur';
    $request->networkId = 'accusamus';
    $request->resolution = 741534;
    $request->ssid = 577854;
    $request->t0 = 'fuga';
    $request->t1 = 'ex';
    $request->timespan = 4224.44;

    $response = $sdk->monitor->getNetworkWirelessUsageHistory($request);

    if ($response->getNetworkWirelessUsageHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationAdaptivePolicyOverview

Returns adaptive policy aggregate statistics for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationAdaptivePolicyOverviewRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationAdaptivePolicyOverviewRequest();
    $request->organizationId = 'nostrum';

    $response = $sdk->monitor->getOrganizationAdaptivePolicyOverview($request);

    if ($response->getOrganizationAdaptivePolicyOverview200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationApiRequests

List the API requests made by an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApiRequestsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApiRequestsMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApiRequestsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApiRequestsRequest();
    $request->adminId = 'atque';
    $request->endingBefore = 'saepe';
    $request->method = GetOrganizationApiRequestsMethodEnum::GET;
    $request->operationIds = [
        'fuga',
        'non',
        'nam',
    ];
    $request->organizationId = 'totam';
    $request->path = 'ut';
    $request->perPage = 249771;
    $request->responseCode = 849421;
    $request->sourceIp = 'adipisci';
    $request->startingAfter = 'totam';
    $request->t0 = 'explicabo';
    $request->t1 = 'quibusdam';
    $request->timespan = 6893.09;
    $request->userAgent = 'itaque';
    $request->version = GetOrganizationApiRequestsVersionEnum::ONE;

    $response = $sdk->monitor->getOrganizationApiRequests($request);

    if ($response->getOrganizationApiRequests200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationApiRequestsOverview

Return an aggregated overview of API requests data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApiRequestsOverviewRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApiRequestsOverviewRequest();
    $request->organizationId = 'ducimus';
    $request->t0 = 'ad';
    $request->t1 = 'optio';
    $request->timespan = 4092.97;

    $response = $sdk->monitor->getOrganizationApiRequestsOverview($request);

    if ($response->getOrganizationApiRequestsOverview200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationApiRequestsOverviewResponseCodesByInterval

Tracks organizations' API requests by response code across a given time period

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApiRequestsOverviewResponseCodesByIntervalRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApiRequestsOverviewResponseCodesByIntervalVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApiRequestsOverviewResponseCodesByIntervalRequest();
    $request->adminIds = [
        'minus',
        'autem',
        'aut',
    ];
    $request->interval = 391499;
    $request->operationIds = [
        'cupiditate',
        'aliquam',
    ];
    $request->organizationId = 'suscipit';
    $request->sourceIps = [
        'minus',
        'debitis',
        'neque',
    ];
    $request->t0 = 'doloremque';
    $request->t1 = 'tempora';
    $request->timespan = 8427.72;
    $request->userAgent = 'deleniti';
    $request->version = GetOrganizationApiRequestsOverviewResponseCodesByIntervalVersionEnum::ONE;

    $response = $sdk->monitor->getOrganizationApiRequestsOverviewResponseCodesByInterval($request);

    if ($response->getOrganizationApiRequestsOverviewResponseCodesByInterval200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationApplianceSecurityEvents

List the security events for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApplianceSecurityEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApplianceSecurityEventsSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApplianceSecurityEventsRequest();
    $request->endingBefore = 'magnam';
    $request->organizationId = 'cupiditate';
    $request->perPage = 708811;
    $request->sortOrder = GetOrganizationApplianceSecurityEventsSortOrderEnum::DESCENDING;
    $request->startingAfter = 'deleniti';
    $request->t0 = 'explicabo';
    $request->t1 = 'veritatis';
    $request->timespan = 2766.43;

    $response = $sdk->monitor->getOrganizationApplianceSecurityEvents($request);

    if ($response->getOrganizationApplianceSecurityEvents200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationApplianceUplinkStatuses

List the uplink status of every Meraki MX and Z series appliances in the organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApplianceUplinkStatusesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApplianceUplinkStatusesRequest();
    $request->endingBefore = 'eligendi';
    $request->iccids = [
        'ipsum',
    ];
    $request->networkIds = [
        'hic',
        'occaecati',
    ];
    $request->organizationId = 'iure';
    $request->perPage = 727863;
    $request->serials = [
        'eaque',
        'porro',
        'vel',
    ];
    $request->startingAfter = 'omnis';

    $response = $sdk->monitor->getOrganizationApplianceUplinkStatuses($request);

    if ($response->getOrganizationApplianceUplinkStatuses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationApplianceVpnStats

Show VPN history stat for networks in an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApplianceVpnStatsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApplianceVpnStatsRequest();
    $request->endingBefore = 'recusandae';
    $request->networkIds = [
        'quam',
    ];
    $request->organizationId = 'fugit';
    $request->perPage = 817623;
    $request->startingAfter = 'libero';
    $request->t0 = 'vitae';
    $request->t1 = 'non';
    $request->timespan = 2896.81;

    $response = $sdk->monitor->getOrganizationApplianceVpnStats($request);

    if ($response->getOrganizationApplianceVpnStats200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationApplianceVpnStatuses

Show VPN status for networks in an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApplianceVpnStatusesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApplianceVpnStatusesRequest();
    $request->endingBefore = 'incidunt';
    $request->networkIds = [
        'deserunt',
        'error',
        'doloribus',
    ];
    $request->organizationId = 'reprehenderit';
    $request->perPage = 525679;
    $request->startingAfter = 'est';

    $response = $sdk->monitor->getOrganizationApplianceVpnStatuses($request);

    if ($response->getOrganizationApplianceVpnStatuses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationCellularGatewayUplinkStatuses

List the uplink status of every Meraki MG cellular gateway in the organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationCellularGatewayUplinkStatusesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationCellularGatewayUplinkStatusesRequest();
    $request->endingBefore = 'quis';
    $request->iccids = [
        'accusantium',
        'necessitatibus',
        'facere',
        'reprehenderit',
    ];
    $request->networkIds = [
        'officia',
        'soluta',
        'suscipit',
    ];
    $request->organizationId = 'explicabo';
    $request->perPage = 927050;
    $request->serials = [
        'iusto',
        'aspernatur',
        'ea',
    ];
    $request->startingAfter = 'architecto';

    $response = $sdk->monitor->getOrganizationCellularGatewayUplinkStatuses($request);

    if ($response->getOrganizationCellularGatewayUplinkStatuses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationClientsBandwidthUsageHistory

Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationClientsBandwidthUsageHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationClientsBandwidthUsageHistoryRequest();
    $request->organizationId = 'earum';
    $request->t0 = 'cum';
    $request->t1 = 'alias';
    $request->timespan = 8016.71;

    $response = $sdk->monitor->getOrganizationClientsBandwidthUsageHistory($request);

    if ($response->getOrganizationClientsBandwidthUsageHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationClientsOverview

Return summary information around client data usage (in mb) across the given organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationClientsOverviewRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationClientsOverviewRequest();
    $request->organizationId = 'veniam';
    $request->t0 = 'corrupti';
    $request->t1 = 'temporibus';
    $request->timespan = 1407.11;

    $response = $sdk->monitor->getOrganizationClientsOverview($request);

    if ($response->getOrganizationClientsOverview200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationConfigurationChanges

View the Change Log for your organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationConfigurationChangesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationConfigurationChangesRequest();
    $request->adminId = 'voluptate';
    $request->endingBefore = 'nobis';
    $request->networkId = 'exercitationem';
    $request->organizationId = 'beatae';
    $request->perPage = 587817;
    $request->startingAfter = 'cupiditate';
    $request->t0 = 'ex';
    $request->t1 = 'tempore';
    $request->timespan = 3295.03;

    $response = $sdk->monitor->getOrganizationConfigurationChanges($request);

    if ($response->getOrganizationConfigurationChanges200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationDevicesAvailabilities

List the availability information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesAvailabilitiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesAvailabilitiesTagsFilterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationDevicesAvailabilitiesRequest();
    $request->endingBefore = 'expedita';
    $request->networkIds = [
        'expedita',
        'quaerat',
    ];
    $request->organizationId = 'accusantium';
    $request->perPage = 924162;
    $request->productTypes = [
        'sapiente',
        'iusto',
        'quasi',
        'odit',
    ];
    $request->serials = [
        'ducimus',
        'animi',
        'ducimus',
    ];
    $request->startingAfter = 'similique';
    $request->tags = [
        'voluptatem',
        'adipisci',
        'tempora',
    ];
    $request->tagsFilterType = GetOrganizationDevicesAvailabilitiesTagsFilterTypeEnum::WITH_ALL_TAGS;

    $response = $sdk->monitor->getOrganizationDevicesAvailabilities($request);

    if ($response->getOrganizationDevicesAvailabilities200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationDevicesPowerModulesStatusesByDevice

List the power status information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesPowerModulesStatusesByDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesPowerModulesStatusesByDeviceTagsFilterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationDevicesPowerModulesStatusesByDeviceRequest();
    $request->endingBefore = 'soluta';
    $request->networkIds = [
        'ducimus',
    ];
    $request->organizationId = 'vitae';
    $request->perPage = 23888;
    $request->productTypes = [
        'rem',
        'deleniti',
    ];
    $request->serials = [
        'necessitatibus',
        'vero',
        'facilis',
        'necessitatibus',
    ];
    $request->startingAfter = 'asperiores';
    $request->tags = [
        'perspiciatis',
        'quam',
        'earum',
    ];
    $request->tagsFilterType = GetOrganizationDevicesPowerModulesStatusesByDeviceTagsFilterTypeEnum::WITH_ALL_TAGS;

    $response = $sdk->monitor->getOrganizationDevicesPowerModulesStatusesByDevice($request);

    if ($response->getOrganizationDevicesPowerModulesStatusesByDevice200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationDevicesStatuses

List the status of every Meraki device in the organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesStatusesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesStatusesProductTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesStatusesStatusesEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesStatusesTagsFilterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationDevicesStatusesRequest();
    $request->endingBefore = 'fugiat';
    $request->models = [
        'voluptatem',
        'quod',
        'minus',
        'pariatur',
    ];
    $request->networkIds = [
        'amet',
    ];
    $request->organizationId = 'tenetur';
    $request->perPage = 97903;
    $request->productTypes = [
        GetOrganizationDevicesStatusesProductTypesEnum::SWITCH,
    ];
    $request->serials = [
        'voluptates',
    ];
    $request->startingAfter = 'aliquam';
    $request->statuses = [
        GetOrganizationDevicesStatusesStatusesEnum::ALERTING,
        GetOrganizationDevicesStatusesStatusesEnum::OFFLINE,
        GetOrganizationDevicesStatusesStatusesEnum::ALERTING,
        GetOrganizationDevicesStatusesStatusesEnum::OFFLINE,
    ];
    $request->tags = [
        'vitae',
        'ipsa',
        'incidunt',
    ];
    $request->tagsFilterType = GetOrganizationDevicesStatusesTagsFilterTypeEnum::WITH_ALL_TAGS;

    $response = $sdk->monitor->getOrganizationDevicesStatuses($request);

    if ($response->getOrganizationDevicesStatuses200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationDevicesStatusesOverview

Return an overview of current device statuses

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesStatusesOverviewRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesStatusesOverviewProductTypesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationDevicesStatusesOverviewRequest();
    $request->networkIds = [
        'eum',
        'accusamus',
        'optio',
    ];
    $request->organizationId = 'odio';
    $request->productTypes = [
        GetOrganizationDevicesStatusesOverviewProductTypesEnum::SWITCH,
        GetOrganizationDevicesStatusesOverviewProductTypesEnum::WIRELESS,
    ];

    $response = $sdk->monitor->getOrganizationDevicesStatusesOverview($request);

    if ($response->getOrganizationDevicesStatusesOverview200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationDevicesUplinksAddressesByDevice

List the current uplink addresses for devices in an organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesUplinksAddressesByDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesUplinksAddressesByDeviceTagsFilterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationDevicesUplinksAddressesByDeviceRequest();
    $request->endingBefore = 'ipsa';
    $request->networkIds = [
        'delectus',
    ];
    $request->organizationId = 'dolor';
    $request->perPage = 492427;
    $request->productTypes = [
        'consequuntur',
    ];
    $request->serials = [
        'quis',
        'cumque',
        'laudantium',
        'recusandae',
    ];
    $request->startingAfter = 'odit';
    $request->tags = [
        'sequi',
        'consequatur',
        'voluptates',
        'culpa',
    ];
    $request->tagsFilterType = GetOrganizationDevicesUplinksAddressesByDeviceTagsFilterTypeEnum::WITH_ANY_TAGS;

    $response = $sdk->monitor->getOrganizationDevicesUplinksAddressesByDevice($request);

    if ($response->getOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationDevicesUplinksLossAndLatency

Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesUplinksLossAndLatencyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationDevicesUplinksLossAndLatencyRequest();
    $request->ip = 'dolorem';
    $request->organizationId = 'sunt';
    $request->t0 = 'ipsa';
    $request->t1 = 'incidunt';
    $request->timespan = 9798.92;
    $request->uplink = GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum::WAN1;

    $response = $sdk->monitor->getOrganizationDevicesUplinksLossAndLatency($request);

    if ($response->getOrganizationDevicesUplinksLossAndLatency200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationLicensesOverview

Return an overview of the license state for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationLicensesOverviewRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationLicensesOverviewRequest();
    $request->organizationId = 'dolore';

    $response = $sdk->monitor->getOrganizationLicensesOverview($request);

    if ($response->getOrganizationLicensesOverview200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationOpenapiSpec

Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationOpenapiSpecRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationOpenapiSpecRequest();
    $request->organizationId = 'eius';

    $response = $sdk->monitor->getOrganizationOpenapiSpec($request);

    if ($response->getOrganizationOpenapiSpec200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSensorReadingsHistory

Return all reported readings from sensors in a given timespan, sorted by timestamp

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSensorReadingsHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSensorReadingsHistoryRequest();
    $request->endingBefore = 'iure';
    $request->metrics = [
        'molestiae',
    ];
    $request->networkIds = [
        'voluptatibus',
        'sequi',
        'ducimus',
    ];
    $request->organizationId = 'minima';
    $request->perPage = 726144;
    $request->serials = [
        'tempora',
        'sed',
    ];
    $request->startingAfter = 'quas';
    $request->t0 = 'aspernatur';
    $request->t1 = 'laudantium';
    $request->timespan = 1449.13;

    $response = $sdk->monitor->getOrganizationSensorReadingsHistory($request);

    if ($response->getOrganizationSensorReadingsHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSensorReadingsLatest

Return the latest available reading for each metric from each sensor, sorted by sensor serial

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSensorReadingsLatestRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSensorReadingsLatestRequest();
    $request->endingBefore = 'et';
    $request->metrics = [
        'nulla',
        'libero',
        'sed',
        'hic',
    ];
    $request->networkIds = [
        'sint',
        'eveniet',
    ];
    $request->organizationId = 'veniam';
    $request->perPage = 602681;
    $request->serials = [
        'laboriosam',
    ];
    $request->startingAfter = 'iusto';

    $response = $sdk->monitor->getOrganizationSensorReadingsLatest($request);

    if ($response->getOrganizationSensorReadingsLatest200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSummaryTopAppliancesByUtilization

Return the top 10 appliances sorted by utilization over given time range.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSummaryTopAppliancesByUtilizationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSummaryTopAppliancesByUtilizationRequest();
    $request->organizationId = 'quisquam';
    $request->t0 = 'dignissimos';
    $request->t1 = 'ab';
    $request->timespan = 7774.7;

    $response = $sdk->monitor->getOrganizationSummaryTopAppliancesByUtilization($request);

    if ($response->getOrganizationSummaryTopAppliancesByUtilization200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSummaryTopClientsByUsage

Return metrics for organization's top 10 clients by data usage (in mb) over given time range.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSummaryTopClientsByUsageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSummaryTopClientsByUsageRequest();
    $request->organizationId = 'optio';
    $request->t0 = 'voluptatum';
    $request->t1 = 'pariatur';
    $request->timespan = 1948.5;

    $response = $sdk->monitor->getOrganizationSummaryTopClientsByUsage($request);

    if ($response->getOrganizationSummaryTopClientsByUsage200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSummaryTopClientsManufacturersByUsage

Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSummaryTopClientsManufacturersByUsageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSummaryTopClientsManufacturersByUsageRequest();
    $request->organizationId = 'quo';
    $request->t0 = 'facere';
    $request->t1 = 'labore';
    $request->timespan = 1479.16;

    $response = $sdk->monitor->getOrganizationSummaryTopClientsManufacturersByUsage($request);

    if ($response->getOrganizationSummaryTopClientsManufacturersByUsage200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSummaryTopDevicesByUsage

Return metrics for organization's top 10 devices sorted by data usage over given time range. Default unit is megabytes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSummaryTopDevicesByUsageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSummaryTopDevicesByUsageRequest();
    $request->organizationId = 'quis';
    $request->t0 = 'voluptatum';
    $request->t1 = 'temporibus';
    $request->timespan = 424.69;

    $response = $sdk->monitor->getOrganizationSummaryTopDevicesByUsage($request);

    if ($response->getOrganizationSummaryTopDevicesByUsage200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSummaryTopDevicesModelsByUsage

Return metrics for organization's top 10 device models sorted by data usage over given time range. Default unit is megabytes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSummaryTopDevicesModelsByUsageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSummaryTopDevicesModelsByUsageRequest();
    $request->organizationId = 'amet';
    $request->t0 = 'ipsam';
    $request->t1 = 'deleniti';
    $request->timespan = 6718.73;

    $response = $sdk->monitor->getOrganizationSummaryTopDevicesModelsByUsage($request);

    if ($response->getOrganizationSummaryTopDevicesModelsByUsage200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSummaryTopSsidsByUsage

Return metrics for organization's top 10 ssids by data usage over given time range. Default unit is megabytes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSummaryTopSsidsByUsageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSummaryTopSsidsByUsageRequest();
    $request->organizationId = 'quas';
    $request->t0 = 'odit';
    $request->t1 = 'placeat';
    $request->timespan = 5248.8;

    $response = $sdk->monitor->getOrganizationSummaryTopSsidsByUsage($request);

    if ($response->getOrganizationSummaryTopSsidsByUsage200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSummaryTopSwitchesByEnergyUsage

Return metrics for organization's top 10 switches by energy usage over given time range. Default unit is joules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSummaryTopSwitchesByEnergyUsageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSummaryTopSwitchesByEnergyUsageRequest();
    $request->organizationId = 'aut';
    $request->t0 = 'atque';
    $request->t1 = 'repellat';
    $request->timespan = 9093.56;

    $response = $sdk->monitor->getOrganizationSummaryTopSwitchesByEnergyUsage($request);

    if ($response->getOrganizationSummaryTopSwitchesByEnergyUsage200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationUplinksStatuses

List the uplink status of every Meraki MX, MG and Z series devices in the organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationUplinksStatusesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationUplinksStatusesRequest();
    $request->endingBefore = 'odit';
    $request->iccids = [
        'ullam',
        'inventore',
    ];
    $request->networkIds = [
        'fugit',
        'perferendis',
        'incidunt',
    ];
    $request->organizationId = 'ducimus';
    $request->perPage = 798954;
    $request->serials = [
        'numquam',
    ];
    $request->startingAfter = 'numquam';

    $response = $sdk->monitor->getOrganizationUplinksStatuses($request);

    if ($response->getOrganizationUplinksStatuses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationWebhooksAlertTypes

Return a list of alert types to be used with managing webhook alerts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationWebhooksAlertTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationWebhooksAlertTypesProductTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationWebhooksAlertTypesRequest();
    $request->organizationId = 'omnis';
    $request->productType = GetOrganizationWebhooksAlertTypesProductTypeEnum::WIRELESS;

    $response = $sdk->monitor->getOrganizationWebhooksAlertTypes($request);

    if ($response->getOrganizationWebhooksAlertTypes200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationWebhooksLogs

Return the log of webhook POSTs sent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationWebhooksLogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationWebhooksLogsRequest();
    $request->endingBefore = 'inventore';
    $request->organizationId = 'quaerat';
    $request->perPage = 202145;
    $request->startingAfter = 'hic';
    $request->t0 = 'natus';
    $request->t1 = 'laboriosam';
    $request->timespan = 981.38;
    $request->url = 'excepturi';

    $response = $sdk->monitor->getOrganizationWebhooksLogs($request);

    if ($response->getOrganizationWebhooksLogs200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
