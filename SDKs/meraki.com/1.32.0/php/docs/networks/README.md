# networks

### Available Operations

* [bindNetwork](#bindnetwork) - Bind a network to a template.
* [claimNetworkDevices](#claimnetworkdevices) - Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
* [combineOrganizationNetworks](#combineorganizationnetworks) - Combine multiple networks into a single network
* [createNetworkFirmwareUpgradesRollback](#createnetworkfirmwareupgradesrollback) - Rollback a Firmware Upgrade For A Network
* [createNetworkFirmwareUpgradesStagedEvent](#createnetworkfirmwareupgradesstagedevent) - Create a Staged Upgrade Event for a network
* [createNetworkFirmwareUpgradesStagedGroup](#createnetworkfirmwareupgradesstagedgroup) - Create a Staged Upgrade Group for a network
* [createNetworkFloorPlan](#createnetworkfloorplan) - Upload a floor plan
* [createNetworkGroupPolicy](#createnetworkgrouppolicy) - Create a group policy
* [createNetworkMerakiAuthUser](#createnetworkmerakiauthuser) - Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
* [createNetworkMqttBroker](#createnetworkmqttbroker) - Add an MQTT broker
* [createNetworkPiiRequest](#createnetworkpiirequest) - Submit a new delete or restrict processing PII request
* [createNetworkWebhooksHttpServer](#createnetworkwebhookshttpserver) - Add an HTTP server to a network
* [createNetworkWebhooksPayloadTemplate](#createnetworkwebhookspayloadtemplate) - Create a webhook payload template for a network
* [createNetworkWebhooksWebhookTest](#createnetworkwebhookswebhooktest) - Send a test webhook for a network
* [createOrganizationNetwork](#createorganizationnetwork) - Create a network
* [deferNetworkFirmwareUpgradesStagedEvents](#defernetworkfirmwareupgradesstagedevents) - Postpone by 1 week all pending staged upgrade stages for a network
* [deleteNetwork](#deletenetwork) - Delete a network
* [deleteNetworkFirmwareUpgradesStagedGroup](#deletenetworkfirmwareupgradesstagedgroup) - Delete a Staged Upgrade Group
* [deleteNetworkFloorPlan](#deletenetworkfloorplan) - Destroy a floor plan
* [deleteNetworkGroupPolicy](#deletenetworkgrouppolicy) - Delete a group policy
* [deleteNetworkMerakiAuthUser](#deletenetworkmerakiauthuser) - Deauthorize a user
* [deleteNetworkMqttBroker](#deletenetworkmqttbroker) - Delete an MQTT broker
* [deleteNetworkPiiRequest](#deletenetworkpiirequest) - Delete a restrict processing PII request
* [deleteNetworkWebhooksHttpServer](#deletenetworkwebhookshttpserver) - Delete an HTTP server from a network
* [deleteNetworkWebhooksPayloadTemplate](#deletenetworkwebhookspayloadtemplate) - Destroy a webhook payload template for a network
* [getNetwork](#getnetwork) - Return a network
* [getNetworkAlertsHistory](#getnetworkalertshistory) - Return the alert history for this network
* [getNetworkAlertsSettings](#getnetworkalertssettings) - Return the alert configuration for this network
* [getNetworkBluetoothClient](#getnetworkbluetoothclient) - Return a Bluetooth client
* [getNetworkBluetoothClients](#getnetworkbluetoothclients) - List the Bluetooth clients seen by APs in this network
* [getNetworkClient](#getnetworkclient) - Return the client associated with the given identifier
* [getNetworkClientPolicy](#getnetworkclientpolicy) - Return the policy assigned to a client on the network
* [getNetworkClientSplashAuthorizationStatus](#getnetworkclientsplashauthorizationstatus) - Return the splash authorization for a client, for each SSID they've associated with through splash
* [getNetworkClientTrafficHistory](#getnetworkclienttraffichistory) - Return the client's network traffic data over time
* [getNetworkClientUsageHistory](#getnetworkclientusagehistory) - Return the client's daily usage history
* [getNetworkClients](#getnetworkclients) - List the clients that have used this network in the timespan
* [getNetworkClientsApplicationUsage](#getnetworkclientsapplicationusage) - Return the application usage data for clients
* [getNetworkClientsBandwidthUsageHistory](#getnetworkclientsbandwidthusagehistory) - Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
* [getNetworkClientsOverview](#getnetworkclientsoverview) - Return overview statistics for network clients
* [getNetworkClientsUsageHistories](#getnetworkclientsusagehistories) - Return the usage histories for clients
* [getNetworkDevices](#getnetworkdevices) - List the devices in a network
* [getNetworkEvents](#getnetworkevents) - List the events for the network
* [getNetworkEventsEventTypes](#getnetworkeventseventtypes) - List the event type to human-readable description
* [getNetworkFirmwareUpgrades](#getnetworkfirmwareupgrades) - Get firmware upgrade information for a network
* [getNetworkFirmwareUpgradesStagedEvents](#getnetworkfirmwareupgradesstagedevents) - Get the Staged Upgrade Event from a network
* [getNetworkFirmwareUpgradesStagedGroup](#getnetworkfirmwareupgradesstagedgroup) - Get a Staged Upgrade Group from a network
* [getNetworkFirmwareUpgradesStagedGroups](#getnetworkfirmwareupgradesstagedgroups) - List of Staged Upgrade Groups in a network
* [getNetworkFirmwareUpgradesStagedStages](#getnetworkfirmwareupgradesstagedstages) - Order of Staged Upgrade Groups in a network
* [getNetworkFloorPlan](#getnetworkfloorplan) - Find a floor plan by ID
* [getNetworkFloorPlans](#getnetworkfloorplans) - List the floor plans that belong to your network
* [getNetworkGroupPolicies](#getnetworkgrouppolicies) - List the group policies in a network
* [getNetworkGroupPolicy](#getnetworkgrouppolicy) - Display a group policy
* [getNetworkHealthAlerts](#getnetworkhealthalerts) - Return all global alerts on this network
* [getNetworkMerakiAuthUser](#getnetworkmerakiauthuser) - Return the Meraki Auth splash guest, RADIUS, or client VPN user
* [getNetworkMerakiAuthUsers](#getnetworkmerakiauthusers) - List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
* [getNetworkMqttBroker](#getnetworkmqttbroker) - Return an MQTT broker
* [getNetworkMqttBrokers](#getnetworkmqttbrokers) - List the MQTT brokers for this network
* [getNetworkNetflow](#getnetworknetflow) - Return the NetFlow traffic reporting settings for a network
* [getNetworkNetworkHealthChannelUtilization](#getnetworknetworkhealthchannelutilization) - Get the channel utilization over each radio for all APs in a network.
* [getNetworkPiiPiiKeys](#getnetworkpiipiikeys) - List the keys required to access Personally Identifiable Information (PII) for a given identifier
* [getNetworkPiiRequest](#getnetworkpiirequest) - Return a PII request
* [getNetworkPiiRequests](#getnetworkpiirequests) - List the PII requests for this network or organization
* [getNetworkPiiSmDevicesForKey](#getnetworkpiismdevicesforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
* [getNetworkPiiSmOwnersForKey](#getnetworkpiismownersforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier
* [getNetworkPoliciesByClient](#getnetworkpoliciesbyclient) - Get policies for all clients with policies
* [getNetworkSettings](#getnetworksettings) - Return the settings for a network
* [getNetworkSnmp](#getnetworksnmp) - Return the SNMP settings for a network
* [getNetworkSplashLoginAttempts](#getnetworksplashloginattempts) - List the splash login attempts for a network
* [getNetworkSyslogServers](#getnetworksyslogservers) - List the syslog servers for a network
* [getNetworkTopologyLinkLayer](#getnetworktopologylinklayer) - List the LLDP and CDP information for all discovered devices and connections in a network.
* [getNetworkTraffic](#getnetworktraffic) - Return the traffic analysis data for this network
* [getNetworkTrafficAnalysis](#getnetworktrafficanalysis) - Return the traffic analysis settings for a network
* [getNetworkTrafficShapingApplicationCategories](#getnetworktrafficshapingapplicationcategories) - Returns the application categories for traffic shaping rules.
* [getNetworkTrafficShapingDscpTaggingOptions](#getnetworktrafficshapingdscptaggingoptions) - Returns the available DSCP tagging options for your traffic shaping rules.
* [getNetworkWebhooksHttpServer](#getnetworkwebhookshttpserver) - Return an HTTP server for a network
* [getNetworkWebhooksHttpServers](#getnetworkwebhookshttpservers) - List the HTTP servers for a network
* [getNetworkWebhooksPayloadTemplate](#getnetworkwebhookspayloadtemplate) - Get the webhook payload template for a network
* [getNetworkWebhooksPayloadTemplates](#getnetworkwebhookspayloadtemplates) - List the webhook payload templates for a network
* [getNetworkWebhooksWebhookTest](#getnetworkwebhookswebhooktest) - Return the status of a webhook test for a network
* [getOrganizationInventoryOnboardingCloudMonitoringNetworks](#getorganizationinventoryonboardingcloudmonitoringnetworks) - Returns list of networks eligible for adding cloud monitored device
* [getOrganizationNetworks](#getorganizationnetworks) - List the networks that the user has privileges on in an organization
* [provisionNetworkClients](#provisionnetworkclients) - Provisions a client with a name and policy
* [removeNetworkDevices](#removenetworkdevices) - Remove a single device
* [rollbacksNetworkFirmwareUpgradesStagedEvents](#rollbacksnetworkfirmwareupgradesstagedevents) - Rollback a Staged Upgrade Event for a network
* [splitNetwork](#splitnetwork) - Split a combined network into individual networks for each type of device
* [unbindNetwork](#unbindnetwork) - Unbind a network from a template.
* [updateNetwork](#updatenetwork) - Update a network
* [updateNetworkAlertsSettings](#updatenetworkalertssettings) - Update the alert configuration for this network
* [updateNetworkClientPolicy](#updatenetworkclientpolicy) - Update the policy assigned to a client on the network
* [updateNetworkClientSplashAuthorizationStatus](#updatenetworkclientsplashauthorizationstatus) - Update a client's splash authorization
* [updateNetworkFirmwareUpgrades](#updatenetworkfirmwareupgrades) - Update firmware upgrade information for a network
* [updateNetworkFirmwareUpgradesStagedEvents](#updatenetworkfirmwareupgradesstagedevents) - Update the Staged Upgrade Event for a network
* [updateNetworkFirmwareUpgradesStagedGroup](#updatenetworkfirmwareupgradesstagedgroup) - Update a Staged Upgrade Group for a network
* [updateNetworkFirmwareUpgradesStagedStages](#updatenetworkfirmwareupgradesstagedstages) - Assign Staged Upgrade Group order in the sequence.
* [updateNetworkFloorPlan](#updatenetworkfloorplan) - Update a floor plan's geolocation and other meta data
* [updateNetworkGroupPolicy](#updatenetworkgrouppolicy) - Update a group policy
* [updateNetworkMerakiAuthUser](#updatenetworkmerakiauthuser) - Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)
* [updateNetworkMqttBroker](#updatenetworkmqttbroker) - Update an MQTT broker
* [updateNetworkNetflow](#updatenetworknetflow) - Update the NetFlow traffic reporting settings for a network
* [updateNetworkSettings](#updatenetworksettings) - Update the settings for a network
* [updateNetworkSnmp](#updatenetworksnmp) - Update the SNMP settings for a network
* [updateNetworkSyslogServers](#updatenetworksyslogservers) - Update the syslog servers for a network
* [updateNetworkTrafficAnalysis](#updatenetworktrafficanalysis) - Update the traffic analysis settings for a network
* [updateNetworkWebhooksHttpServer](#updatenetworkwebhookshttpserver) - Update an HTTP server
* [updateNetworkWebhooksPayloadTemplate](#updatenetworkwebhookspayloadtemplate) - Update a webhook payload template for a network
* [vmxNetworkDevicesClaim](#vmxnetworkdevicesclaim) - Claim a vMX into a network

## bindNetwork

Bind a network to a template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BindNetworkRequest;
use \OpenAPI\OpenAPI\Models\Operations\BindNetworkRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BindNetworkRequest();
    $request->requestBody = new BindNetworkRequestBody();
    $request->requestBody->autoBind = false;
    $request->requestBody->configTemplateId = 'quaerat';
    $request->networkId = 'nobis';

    $response = $sdk->networks->bindNetwork($request);

    if ($response->bindNetwork200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## claimNetworkDevices

Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ClaimNetworkDevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ClaimNetworkDevicesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClaimNetworkDevicesRequest();
    $request->requestBody = new ClaimNetworkDevicesRequestBody();
    $request->requestBody->serials = [
        'quidem',
    ];
    $request->networkId = 'unde';

    $response = $sdk->networks->claimNetworkDevices($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## combineOrganizationNetworks

Combine multiple networks into a single network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CombineOrganizationNetworksRequest;
use \OpenAPI\OpenAPI\Models\Operations\CombineOrganizationNetworksRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CombineOrganizationNetworksRequest();
    $request->requestBody = new CombineOrganizationNetworksRequestBody();
    $request->requestBody->enrollmentString = 'fugiat';
    $request->requestBody->name = 'Esther Lind';
    $request->requestBody->networkIds = [
        'unde',
        'ad',
    ];
    $request->organizationId = 'officia';

    $response = $sdk->networks->combineOrganizationNetworks($request);

    if ($response->combineOrganizationNetworks200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkFirmwareUpgradesRollback

Rollback a Firmware Upgrade For A Network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesRollbackRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesRollbackRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkFirmwareUpgradesRollbackRequest();
    $request->requestBody = new CreateNetworkFirmwareUpgradesRollbackRequestBody();
    $request->requestBody->product = CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum::SWITCH;
    $request->requestBody->reasons = [
        new CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons(),
        new CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons(),
    ];
    $request->requestBody->time = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-04T14:30:32.542Z');
    $request->requestBody->toVersion = new CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion();
    $request->requestBody->toVersion->id = 'c405669f-69a0-406d-a124-9450819d7c3b';
    $request->networkId = 'et';

    $response = $sdk->networks->createNetworkFirmwareUpgradesRollback($request);

    if ($response->createNetworkFirmwareUpgradesRollback200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkFirmwareUpgradesStagedEvent

Create a Staged Upgrade Event for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedEventRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedEventRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedEventRequestBodyProducts;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitch;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgrade;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgradeToVersion;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesGroup;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesMilestones;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkFirmwareUpgradesStagedEventRequest();
    $request->requestBody = new CreateNetworkFirmwareUpgradesStagedEventRequestBody();
    $request->requestBody->products = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyProducts();
    $request->requestBody->products->switch = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitch();
    $request->requestBody->products->switch->nextUpgrade = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgrade();
    $request->requestBody->products->switch->nextUpgrade->toVersion = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgradeToVersion();
    $request->requestBody->products->switch->nextUpgrade->toVersion->id = 'b4184406-0e00-4310-9023-dc901f5afd2a';
    $request->requestBody->stages = [
        new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages(),
        new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages(),
    ];
    $request->networkId = 'quo';

    $response = $sdk->networks->createNetworkFirmwareUpgradesStagedEvent($request);

    if ($response->createNetworkFirmwareUpgradesStagedEvent200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkFirmwareUpgradesStagedGroup

Create a Staged Upgrade Group for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkFirmwareUpgradesStagedGroupRequest();
    $request->requestBody = new CreateNetworkFirmwareUpgradesStagedGroupRequestBody();
    $request->requestBody->assignedDevices = new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices();
    $request->requestBody->assignedDevices->devices = [
        new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices(),
        new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices(),
    ];
    $request->requestBody->assignedDevices->switchStacks = [
        new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks(),
        new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks(),
    ];
    $request->requestBody->description = 'praesentium';
    $request->requestBody->isDefault = false;
    $request->requestBody->name = 'Vera O'Reilly';
    $request->networkId = 'assumenda';

    $response = $sdk->networks->createNetworkFirmwareUpgradesStagedGroup($request);

    if ($response->createNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkFloorPlan

Upload a floor plan

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFloorPlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFloorPlanRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFloorPlanRequestBodyBottomLeftCorner;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFloorPlanRequestBodyBottomRightCorner;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFloorPlanRequestBodyCenter;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFloorPlanRequestBodyTopLeftCorner;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkFloorPlanRequestBodyTopRightCorner;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkFloorPlanRequest();
    $request->requestBody = new CreateNetworkFloorPlanRequestBody();
    $request->requestBody->bottomLeftCorner = new CreateNetworkFloorPlanRequestBodyBottomLeftCorner();
    $request->requestBody->bottomLeftCorner->lat = 5056.63;
    $request->requestBody->bottomLeftCorner->lng = 5803.79;
    $request->requestBody->bottomRightCorner = new CreateNetworkFloorPlanRequestBodyBottomRightCorner();
    $request->requestBody->bottomRightCorner->lat = 1772.55;
    $request->requestBody->bottomRightCorner->lng = 3338.45;
    $request->requestBody->center = new CreateNetworkFloorPlanRequestBodyCenter();
    $request->requestBody->center->lat = 2306.48;
    $request->requestBody->center->lng = 7511.3;
    $request->requestBody->imageContents = 'quos';
    $request->requestBody->name = 'Angel Crooks';
    $request->requestBody->topLeftCorner = new CreateNetworkFloorPlanRequestBodyTopLeftCorner();
    $request->requestBody->topLeftCorner->lat = 5528.22;
    $request->requestBody->topLeftCorner->lng = 5683.23;
    $request->requestBody->topRightCorner = new CreateNetworkFloorPlanRequestBodyTopRightCorner();
    $request->requestBody->topRightCorner->lat = 4317.12;
    $request->requestBody->topRightCorner->lng = 6999.62;
    $request->networkId = 'a';

    $response = $sdk->networks->createNetworkFloorPlan($request);

    if ($response->createNetworkFloorPlan201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkGroupPolicy

Create a group policy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyBandwidth;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyBonjourForwarding;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyContentFiltering;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyScheduling;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodySchedulingFriday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodySchedulingMonday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodySchedulingSaturday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodySchedulingSunday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodySchedulingThursday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodySchedulingTuesday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodySchedulingWednesday;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyVlanTagging;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkGroupPolicyRequest();
    $request->requestBody = new CreateNetworkGroupPolicyRequestBody();
    $request->requestBody->bandwidth = new CreateNetworkGroupPolicyRequestBodyBandwidth();
    $request->requestBody->bandwidth->bandwidthLimits = new CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits();
    $request->requestBody->bandwidth->bandwidthLimits->limitDown = 320504;
    $request->requestBody->bandwidth->bandwidthLimits->limitUp = 91613;
    $request->requestBody->bandwidth->settings = CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum::NETWORK_DEFAULT;
    $request->requestBody->bonjourForwarding = new CreateNetworkGroupPolicyRequestBodyBonjourForwarding();
    $request->requestBody->bonjourForwarding->rules = [
        new CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules(),
        new CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules(),
    ];
    $request->requestBody->bonjourForwarding->settings = CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum::IGNORE;
    $request->requestBody->contentFiltering = new CreateNetworkGroupPolicyRequestBodyContentFiltering();
    $request->requestBody->contentFiltering->allowedUrlPatterns = new CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns();
    $request->requestBody->contentFiltering->allowedUrlPatterns->patterns = [
        'sed',
        'fugiat',
    ];
    $request->requestBody->contentFiltering->allowedUrlPatterns->settings = CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum::APPEND;
    $request->requestBody->contentFiltering->blockedUrlCategories = new CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories();
    $request->requestBody->contentFiltering->blockedUrlCategories->categories = [
        'nesciunt',
        'aliquam',
        'consectetur',
        'at',
    ];
    $request->requestBody->contentFiltering->blockedUrlCategories->settings = CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum::NETWORK_DEFAULT;
    $request->requestBody->contentFiltering->blockedUrlPatterns = new CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns();
    $request->requestBody->contentFiltering->blockedUrlPatterns->patterns = [
        'quam',
    ];
    $request->requestBody->contentFiltering->blockedUrlPatterns->settings = CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum::NETWORK_DEFAULT;
    $request->requestBody->firewallAndTrafficShaping = new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping();
    $request->requestBody->firewallAndTrafficShaping->l3FirewallRules = [
        new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules(),
        new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules(),
        new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules(),
    ];
    $request->requestBody->firewallAndTrafficShaping->l7FirewallRules = [
        new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules(),
        new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules(),
        new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules(),
    ];
    $request->requestBody->firewallAndTrafficShaping->settings = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum::NETWORK_DEFAULT;
    $request->requestBody->firewallAndTrafficShaping->trafficShapingRules = [
        new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules(),
        new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules(),
    ];
    $request->requestBody->name = 'Andrew Daugherty';
    $request->requestBody->scheduling = new CreateNetworkGroupPolicyRequestBodyScheduling();
    $request->requestBody->scheduling->enabled = false;
    $request->requestBody->scheduling->friday = new CreateNetworkGroupPolicyRequestBodySchedulingFriday();
    $request->requestBody->scheduling->friday->active = false;
    $request->requestBody->scheduling->friday->from = 'odio';
    $request->requestBody->scheduling->friday->to = 'magni';
    $request->requestBody->scheduling->monday = new CreateNetworkGroupPolicyRequestBodySchedulingMonday();
    $request->requestBody->scheduling->monday->active = false;
    $request->requestBody->scheduling->monday->from = 'enim';
    $request->requestBody->scheduling->monday->to = 'eveniet';
    $request->requestBody->scheduling->saturday = new CreateNetworkGroupPolicyRequestBodySchedulingSaturday();
    $request->requestBody->scheduling->saturday->active = false;
    $request->requestBody->scheduling->saturday->from = 'commodi';
    $request->requestBody->scheduling->saturday->to = 'magni';
    $request->requestBody->scheduling->sunday = new CreateNetworkGroupPolicyRequestBodySchedulingSunday();
    $request->requestBody->scheduling->sunday->active = false;
    $request->requestBody->scheduling->sunday->from = 'et';
    $request->requestBody->scheduling->sunday->to = 'iste';
    $request->requestBody->scheduling->thursday = new CreateNetworkGroupPolicyRequestBodySchedulingThursday();
    $request->requestBody->scheduling->thursday->active = false;
    $request->requestBody->scheduling->thursday->from = 'aut';
    $request->requestBody->scheduling->thursday->to = 'occaecati';
    $request->requestBody->scheduling->tuesday = new CreateNetworkGroupPolicyRequestBodySchedulingTuesday();
    $request->requestBody->scheduling->tuesday->active = false;
    $request->requestBody->scheduling->tuesday->from = 'vero';
    $request->requestBody->scheduling->tuesday->to = 'error';
    $request->requestBody->scheduling->wednesday = new CreateNetworkGroupPolicyRequestBodySchedulingWednesday();
    $request->requestBody->scheduling->wednesday->active = false;
    $request->requestBody->scheduling->wednesday->from = 'inventore';
    $request->requestBody->scheduling->wednesday->to = 'ipsa';
    $request->requestBody->splashAuthSettings = CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum::BYPASS;
    $request->requestBody->vlanTagging = new CreateNetworkGroupPolicyRequestBodyVlanTagging();
    $request->requestBody->vlanTagging->settings = CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum::CUSTOM;
    $request->requestBody->vlanTagging->vlanId = 'id';
    $request->networkId = 'ullam';

    $response = $sdk->networks->createNetworkGroupPolicy($request);

    if ($response->createNetworkGroupPolicy201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkMerakiAuthUser

Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkMerakiAuthUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkMerakiAuthUserRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkMerakiAuthUserRequestBodyAuthorizations;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkMerakiAuthUserRequest();
    $request->requestBody = new CreateNetworkMerakiAuthUserRequestBody();
    $request->requestBody->accountType = CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum::GUEST;
    $request->requestBody->authorizations = [
        new CreateNetworkMerakiAuthUserRequestBodyAuthorizations(),
        new CreateNetworkMerakiAuthUserRequestBodyAuthorizations(),
        new CreateNetworkMerakiAuthUserRequestBodyAuthorizations(),
        new CreateNetworkMerakiAuthUserRequestBodyAuthorizations(),
    ];
    $request->requestBody->email = 'Leola.OHara49@gmail.com';
    $request->requestBody->emailPasswordToUser = false;
    $request->requestBody->isAdmin = false;
    $request->requestBody->name = 'Beth Jast DDS';
    $request->requestBody->password = 'delectus';
    $request->networkId = 'et';

    $response = $sdk->networks->createNetworkMerakiAuthUser($request);

    if ($response->createNetworkMerakiAuthUser201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkMqttBroker

Add an MQTT broker

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkMqttBrokerRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkMqttBrokerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkMqttBrokerRequestBodySecurity;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkMqttBrokerRequestBodySecuritySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkMqttBrokerRequest();
    $request->requestBody = new CreateNetworkMqttBrokerRequestBody();
    $request->requestBody->authentication = [
        'a' => 'quis',
        'unde' => 'consectetur',
        'qui' => 'aliquid',
        'doloremque' => 'enim',
    ];
    $request->requestBody->host = 'explicabo';
    $request->requestBody->name = 'Teresa VonRueden';
    $request->requestBody->port = 691991;
    $request->requestBody->security = new CreateNetworkMqttBrokerRequestBodySecurity();
    $request->requestBody->security->mode = 'cum';
    $request->requestBody->security->security = new CreateNetworkMqttBrokerRequestBodySecuritySecurity();
    $request->requestBody->security->security->caCertificate = 'non';
    $request->requestBody->security->security->verifyHostnames = false;
    $request->networkId = 'quia';

    $response = $sdk->networks->createNetworkMqttBroker($request);

    if ($response->createNetworkMqttBroker201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkPiiRequest

Submit a new delete or restrict processing PII request

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkPiiRequestRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkPiiRequestRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkPiiRequestRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkPiiRequestRequest();
    $request->requestBody = new CreateNetworkPiiRequestRequestBody();
    $request->requestBody->datasets = [
        'deleniti',
        'molestias',
    ];
    $request->requestBody->email = 'Raphaelle_McLaughlin@yahoo.com';
    $request->requestBody->mac = 'qui';
    $request->requestBody->smDeviceId = 'nulla';
    $request->requestBody->smUserId = 'velit';
    $request->requestBody->type = CreateNetworkPiiRequestRequestBodyTypeEnum::DELETE;
    $request->requestBody->username = 'Gabriella.Homenick';
    $request->networkId = 'accusamus';

    $response = $sdk->networks->createNetworkPiiRequest($request);

    if ($response->createNetworkPiiRequest201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkWebhooksHttpServer

Add an HTTP server to a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWebhooksHttpServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWebhooksHttpServerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWebhooksHttpServerRequestBodyPayloadTemplate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkWebhooksHttpServerRequest();
    $request->requestBody = new CreateNetworkWebhooksHttpServerRequestBody();
    $request->requestBody->name = 'Melvin Weber';
    $request->requestBody->payloadTemplate = new CreateNetworkWebhooksHttpServerRequestBodyPayloadTemplate();
    $request->requestBody->payloadTemplate->name = 'Dominick Hammes';
    $request->requestBody->payloadTemplate->payloadTemplateId = 'dolorem';
    $request->requestBody->sharedSecret = 'ipsam';
    $request->requestBody->url = 'voluptatum';
    $request->networkId = 'dolorum';

    $response = $sdk->networks->createNetworkWebhooksHttpServer($request);

    if ($response->createNetworkWebhooksHttpServer201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkWebhooksPayloadTemplate

Create a webhook payload template for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWebhooksPayloadTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWebhooksPayloadTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkWebhooksPayloadTemplateRequest();
    $request->requestBody = new CreateNetworkWebhooksPayloadTemplateRequestBody();
    $request->requestBody->body = 'officia';
    $request->requestBody->bodyFile = 'earum';
    $request->requestBody->headers = [
        new CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders(),
        new CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders(),
        new CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders(),
    ];
    $request->requestBody->headersFile = 'quisquam';
    $request->requestBody->name = 'Frankie Dickens';
    $request->networkId = 'deserunt';

    $response = $sdk->networks->createNetworkWebhooksPayloadTemplate($request);

    if ($response->createNetworkWebhooksPayloadTemplate201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkWebhooksWebhookTest

Send a test webhook for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWebhooksWebhookTestRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWebhooksWebhookTestRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkWebhooksWebhookTestRequest();
    $request->requestBody = new CreateNetworkWebhooksWebhookTestRequestBody();
    $request->requestBody->alertTypeId = 'adipisci';
    $request->requestBody->payloadTemplateId = 'inventore';
    $request->requestBody->payloadTemplateName = 'tempore';
    $request->requestBody->sharedSecret = 'maiores';
    $request->requestBody->url = 'ducimus';
    $request->networkId = 'rerum';

    $response = $sdk->networks->createNetworkWebhooksWebhookTest($request);

    if ($response->createNetworkWebhooksWebhookTest201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganizationNetwork

Create a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationNetworkRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationNetworkRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationNetworkRequestBodyProductTypesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationNetworkRequest();
    $request->requestBody = new CreateOrganizationNetworkRequestBody();
    $request->requestBody->copyFromNetworkId = 'laborum';
    $request->requestBody->name = 'Bernadette Schimmel';
    $request->requestBody->notes = 'nihil';
    $request->requestBody->productTypes = [
        CreateOrganizationNetworkRequestBodyProductTypesEnum::CELLULAR_GATEWAY,
    ];
    $request->requestBody->tags = [
        'deleniti',
        'accusantium',
        'sed',
        'minus',
    ];
    $request->requestBody->timeZone = 'quisquam';
    $request->organizationId = 'sint';

    $response = $sdk->networks->createOrganizationNetwork($request);

    if ($response->createOrganizationNetwork201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deferNetworkFirmwareUpgradesStagedEvents

Postpone by 1 week all pending staged upgrade stages for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeferNetworkFirmwareUpgradesStagedEventsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeferNetworkFirmwareUpgradesStagedEventsRequest();
    $request->networkId = 'voluptates';

    $response = $sdk->networks->deferNetworkFirmwareUpgradesStagedEvents($request);

    if ($response->deferNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetwork

Delete a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkRequest();
    $request->networkId = 'alias';

    $response = $sdk->networks->deleteNetwork($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkFirmwareUpgradesStagedGroup

Delete a Staged Upgrade Group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkFirmwareUpgradesStagedGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkFirmwareUpgradesStagedGroupRequest();
    $request->groupId = 'placeat';
    $request->networkId = 'in';

    $response = $sdk->networks->deleteNetworkFirmwareUpgradesStagedGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkFloorPlan

Destroy a floor plan

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkFloorPlanRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkFloorPlanRequest();
    $request->floorPlanId = 'possimus';
    $request->networkId = 'iste';

    $response = $sdk->networks->deleteNetworkFloorPlan($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkGroupPolicy

Delete a group policy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkGroupPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkGroupPolicyRequest();
    $request->groupPolicyId = 'assumenda';
    $request->networkId = 'neque';

    $response = $sdk->networks->deleteNetworkGroupPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkMerakiAuthUser

Deauthorize a user. To reauthorize a user after deauthorizing them, POST to this endpoint. (Currently, 802.1X RADIUS, splash guest, and client VPN users can be deauthorized.)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkMerakiAuthUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkMerakiAuthUserRequest();
    $request->merakiAuthUserId = 'dolores';
    $request->networkId = 'consectetur';

    $response = $sdk->networks->deleteNetworkMerakiAuthUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkMqttBroker

Delete an MQTT broker

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkMqttBrokerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkMqttBrokerRequest();
    $request->mqttBrokerId = 'repellat';
    $request->networkId = 'quae';

    $response = $sdk->networks->deleteNetworkMqttBroker($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkPiiRequest

Delete a restrict processing PII request

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests/{requestId}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkPiiRequestRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkPiiRequestRequest();
    $request->networkId = 'animi';
    $request->requestId = 'est';

    $response = $sdk->networks->deleteNetworkPiiRequest($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkWebhooksHttpServer

Delete an HTTP server from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkWebhooksHttpServerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkWebhooksHttpServerRequest();
    $request->httpServerId = 'autem';
    $request->networkId = 'sequi';

    $response = $sdk->networks->deleteNetworkWebhooksHttpServer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkWebhooksPayloadTemplate

Destroy a webhook payload template for a network. Does not work for included templates ('wpt_00001', 'wpt_00002', 'wpt_00003', 'wpt_00004', 'wpt_00005' or 'wpt_00006')

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkWebhooksPayloadTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkWebhooksPayloadTemplateRequest();
    $request->networkId = 'officiis';
    $request->payloadTemplateId = 'nulla';

    $response = $sdk->networks->deleteNetworkWebhooksPayloadTemplate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetwork

Return a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkRequest();
    $request->networkId = 'occaecati';

    $response = $sdk->networks->getNetwork($request);

    if ($response->getNetwork200ApplicationJSONObject !== null) {
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
    $request->endingBefore = 'optio';
    $request->networkId = 'asperiores';
    $request->perPage = 92960;
    $request->startingAfter = 'nobis';

    $response = $sdk->networks->getNetworkAlertsHistory($request);

    if ($response->getNetworkAlertsHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkAlertsSettings

Return the alert configuration for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkAlertsSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkAlertsSettingsRequest();
    $request->networkId = 'quas';

    $response = $sdk->networks->getNetworkAlertsSettings($request);

    if ($response->getNetworkAlertsSettings200ApplicationJSONObject !== null) {
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
    $request->bluetoothClientId = 'nemo';
    $request->connectivityHistoryTimespan = 412509;
    $request->includeConnectivityHistory = false;
    $request->networkId = 'soluta';

    $response = $sdk->networks->getNetworkBluetoothClient($request);

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
    $request->endingBefore = 'quo';
    $request->includeConnectivityHistory = false;
    $request->networkId = 'libero';
    $request->perPage = 662191;
    $request->startingAfter = 'quaerat';
    $request->t0 = 'inventore';
    $request->timespan = 8841.76;

    $response = $sdk->networks->getNetworkBluetoothClients($request);

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
    $request->clientId = 'maiores';
    $request->networkId = 'odit';

    $response = $sdk->networks->getNetworkClient($request);

    if ($response->getNetworkClient200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClientPolicy

Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientPolicyRequest();
    $request->clientId = 'numquam';
    $request->networkId = 'nemo';

    $response = $sdk->networks->getNetworkClientPolicy($request);

    if ($response->getNetworkClientPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClientSplashAuthorizationStatus

Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientSplashAuthorizationStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientSplashAuthorizationStatusRequest();
    $request->clientId = 'numquam';
    $request->networkId = 'culpa';

    $response = $sdk->networks->getNetworkClientSplashAuthorizationStatus($request);

    if ($response->getNetworkClientSplashAuthorizationStatus200ApplicationJSONObject !== null) {
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
    $request->clientId = 'aliquam';
    $request->endingBefore = 'iusto';
    $request->networkId = 'voluptatibus';
    $request->perPage = 678156;
    $request->startingAfter = 'maxime';

    $response = $sdk->networks->getNetworkClientTrafficHistory($request);

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
    $request->clientId = 'repellat';
    $request->networkId = 'veritatis';

    $response = $sdk->networks->getNetworkClientUsageHistory($request);

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
    $request->description = 'inventore';
    $request->endingBefore = 'autem';
    $request->ip = 'optio';
    $request->ip6 = 'fugiat';
    $request->ip6Local = 'facere';
    $request->mac = 'exercitationem';
    $request->networkId = 'ut';
    $request->os = 'dolore';
    $request->perPage = 255156;
    $request->recentDeviceConnections = [
        GetNetworkClientsRecentDeviceConnectionsEnum::WIRED,
        GetNetworkClientsRecentDeviceConnectionsEnum::WIRED,
        GetNetworkClientsRecentDeviceConnectionsEnum::WIRED,
    ];
    $request->startingAfter = 'consequuntur';
    $request->statuses = [
        GetNetworkClientsStatusesEnum::OFFLINE,
        GetNetworkClientsStatusesEnum::OFFLINE,
        GetNetworkClientsStatusesEnum::ONLINE,
    ];
    $request->t0 = 'dignissimos';
    $request->timespan = 8445.24;
    $request->vlan = 'placeat';

    $response = $sdk->networks->getNetworkClients($request);

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
    $request->clients = 'natus';
    $request->endingBefore = 'accusamus';
    $request->networkId = 'repellat';
    $request->perPage = 666762;
    $request->ssidNumber = GetNetworkClientsApplicationUsageSsidNumberEnum::FOURTEEN;
    $request->startingAfter = 'labore';
    $request->t0 = 'adipisci';
    $request->t1 = 'at';
    $request->timespan = 7709.21;

    $response = $sdk->networks->getNetworkClientsApplicationUsage($request);

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
    $request->endingBefore = 'autem';
    $request->networkId = 'qui';
    $request->perPage = 231807;
    $request->startingAfter = 'ea';
    $request->t0 = 'aspernatur';
    $request->t1 = 'consequatur';
    $request->timespan = 9616.69;

    $response = $sdk->networks->getNetworkClientsBandwidthUsageHistory($request);

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
    $request->networkId = 'nesciunt';
    $request->resolution = 87979;
    $request->t0 = 'dolor';
    $request->t1 = 'voluptatum';
    $request->timespan = 9877.63;

    $response = $sdk->networks->getNetworkClientsOverview($request);

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
    $request->clients = 'nesciunt';
    $request->endingBefore = 'doloremque';
    $request->networkId = 'at';
    $request->perPage = 945852;
    $request->ssidNumber = GetNetworkClientsUsageHistoriesSsidNumberEnum::TWO;
    $request->startingAfter = 'temporibus';
    $request->t0 = 'cum';
    $request->t1 = 'sit';
    $request->timespan = 1651.16;

    $response = $sdk->networks->getNetworkClientsUsageHistories($request);

    if ($response->getNetworkClientsUsageHistories200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkDevices

List the devices in a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkDevicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkDevicesRequest();
    $request->networkId = 'aspernatur';

    $response = $sdk->networks->getNetworkDevices($request);

    if ($response->getNetworkDevices200ApplicationJSONObjects !== null) {
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
    $request->clientIp = 'earum';
    $request->clientMac = 'similique';
    $request->clientName = 'id';
    $request->deviceMac = 'exercitationem';
    $request->deviceName = 'commodi';
    $request->deviceSerial = 'nostrum';
    $request->endingBefore = 'delectus';
    $request->excludedEventTypes = [
        'rem',
        'repellat',
        'suscipit',
    ];
    $request->includedEventTypes = [
        'consequuntur',
        'repudiandae',
    ];
    $request->networkId = 'nam';
    $request->perPage = 728442;
    $request->productType = GetNetworkEventsProductTypeEnum::SWITCH;
    $request->smDeviceMac = 'illum';
    $request->smDeviceName = 'dolor';
    $request->startingAfter = 'praesentium';

    $response = $sdk->networks->getNetworkEvents($request);

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
    $request->networkId = 'non';

    $response = $sdk->networks->getNetworkEventsEventTypes($request);

    if ($response->getNetworkEventsEventTypes200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkFirmwareUpgrades

Get firmware upgrade information for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkFirmwareUpgradesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkFirmwareUpgradesRequest();
    $request->networkId = 'deleniti';

    $response = $sdk->networks->getNetworkFirmwareUpgrades($request);

    if ($response->getNetworkFirmwareUpgrades200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkFirmwareUpgradesStagedEvents

Get the Staged Upgrade Event from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkFirmwareUpgradesStagedEventsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkFirmwareUpgradesStagedEventsRequest();
    $request->networkId = 'dolor';

    $response = $sdk->networks->getNetworkFirmwareUpgradesStagedEvents($request);

    if ($response->getNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkFirmwareUpgradesStagedGroup

Get a Staged Upgrade Group from a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkFirmwareUpgradesStagedGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkFirmwareUpgradesStagedGroupRequest();
    $request->groupId = 'corrupti';
    $request->networkId = 'ducimus';

    $response = $sdk->networks->getNetworkFirmwareUpgradesStagedGroup($request);

    if ($response->getNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkFirmwareUpgradesStagedGroups

List of Staged Upgrade Groups in a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkFirmwareUpgradesStagedGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkFirmwareUpgradesStagedGroupsRequest();
    $request->networkId = 'molestias';

    $response = $sdk->networks->getNetworkFirmwareUpgradesStagedGroups($request);

    if ($response->getNetworkFirmwareUpgradesStagedGroups200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkFirmwareUpgradesStagedStages

Order of Staged Upgrade Groups in a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkFirmwareUpgradesStagedStagesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkFirmwareUpgradesStagedStagesRequest();
    $request->networkId = 'aperiam';

    $response = $sdk->networks->getNetworkFirmwareUpgradesStagedStages($request);

    if ($response->getNetworkFirmwareUpgradesStagedStages200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkFloorPlan

Find a floor plan by ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkFloorPlanRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkFloorPlanRequest();
    $request->floorPlanId = 'fugit';
    $request->networkId = 'labore';

    $response = $sdk->networks->getNetworkFloorPlan($request);

    if ($response->getNetworkFloorPlan200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkFloorPlans

List the floor plans that belong to your network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkFloorPlansRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkFloorPlansRequest();
    $request->networkId = 'neque';

    $response = $sdk->networks->getNetworkFloorPlans($request);

    if ($response->getNetworkFloorPlans200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkGroupPolicies

List the group policies in a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkGroupPoliciesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkGroupPoliciesRequest();
    $request->networkId = 'cum';

    $response = $sdk->networks->getNetworkGroupPolicies($request);

    if ($response->getNetworkGroupPolicies200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkGroupPolicy

Display a group policy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkGroupPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkGroupPolicyRequest();
    $request->groupPolicyId = 'sed';
    $request->networkId = 'error';

    $response = $sdk->networks->getNetworkGroupPolicy($request);

    if ($response->getNetworkGroupPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkHealthAlerts

Return all global alerts on this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkHealthAlertsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkHealthAlertsRequest();
    $request->networkId = 'ratione';

    $response = $sdk->networks->getNetworkHealthAlerts($request);

    if ($response->getNetworkHealthAlerts200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkMerakiAuthUser

Return the Meraki Auth splash guest, RADIUS, or client VPN user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkMerakiAuthUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkMerakiAuthUserRequest();
    $request->merakiAuthUserId = 'facere';
    $request->networkId = 'est';

    $response = $sdk->networks->getNetworkMerakiAuthUser($request);

    if ($response->getNetworkMerakiAuthUser200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkMerakiAuthUsers

List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkMerakiAuthUsersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkMerakiAuthUsersRequest();
    $request->networkId = 'soluta';

    $response = $sdk->networks->getNetworkMerakiAuthUsers($request);

    if ($response->getNetworkMerakiAuthUsers200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkMqttBroker

Return an MQTT broker

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkMqttBrokerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkMqttBrokerRequest();
    $request->mqttBrokerId = 'neque';
    $request->networkId = 'perferendis';

    $response = $sdk->networks->getNetworkMqttBroker($request);

    if ($response->getNetworkMqttBroker200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkMqttBrokers

List the MQTT brokers for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkMqttBrokersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkMqttBrokersRequest();
    $request->networkId = 'vero';

    $response = $sdk->networks->getNetworkMqttBrokers($request);

    if ($response->getNetworkMqttBrokers200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkNetflow

Return the NetFlow traffic reporting settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkNetflowRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkNetflowRequest();
    $request->networkId = 'excepturi';

    $response = $sdk->networks->getNetworkNetflow($request);

    if ($response->getNetworkNetflow200ApplicationJSONObject !== null) {
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
    $request->endingBefore = 'dicta';
    $request->networkId = 'iure';
    $request->perPage = 988741;
    $request->resolution = 361300;
    $request->startingAfter = 'alias';
    $request->t0 = 'asperiores';
    $request->t1 = 'quibusdam';
    $request->timespan = 6569.64;

    $response = $sdk->networks->getNetworkNetworkHealthChannelUtilization($request);

    if ($response->getNetworkNetworkHealthChannelUtilization200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkPiiPiiKeys

List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key "0" containing the applicable keys.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/piiKeys
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkPiiPiiKeysRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkPiiPiiKeysRequest();
    $request->bluetoothMac = 'alias';
    $request->email = 'Pablo.Lesch69@gmail.com';
    $request->imei = 'soluta';
    $request->mac = 'exercitationem';
    $request->networkId = 'exercitationem';
    $request->serial = 'similique';
    $request->username = 'Cathy73';

    $response = $sdk->networks->getNetworkPiiPiiKeys($request);

    if ($response->getNetworkPiiPiiKeys200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkPiiRequest

Return a PII request

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests/{requestId}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkPiiRequestRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkPiiRequestRequest();
    $request->networkId = 'aut';
    $request->requestId = 'expedita';

    $response = $sdk->networks->getNetworkPiiRequest($request);

    if ($response->getNetworkPiiRequest200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkPiiRequests

List the PII requests for this network or organization

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkPiiRequestsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkPiiRequestsRequest();
    $request->networkId = 'quo';

    $response = $sdk->networks->getNetworkPiiRequests($request);

    if ($response->getNetworkPiiRequests200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkPiiSmDevicesForKey

Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/smDevicesForKey
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkPiiSmDevicesForKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkPiiSmDevicesForKeyRequest();
    $request->bluetoothMac = 'non';
    $request->email = 'Melyna30@hotmail.com';
    $request->imei = 'laboriosam';
    $request->mac = 'nisi';
    $request->networkId = 'labore';
    $request->serial = 'accusamus';
    $request->username = 'Myrtis.Cartwright24';

    $response = $sdk->networks->getNetworkPiiSmDevicesForKey($request);

    if ($response->getNetworkPiiSmDevicesForKey200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkPiiSmOwnersForKey

Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/smOwnersForKey
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkPiiSmOwnersForKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkPiiSmOwnersForKeyRequest();
    $request->bluetoothMac = 'ipsum';
    $request->email = 'Jovan82@yahoo.com';
    $request->imei = 'architecto';
    $request->mac = 'libero';
    $request->networkId = 'rerum';
    $request->serial = 'architecto';
    $request->username = 'Isaias_Paucek91';

    $response = $sdk->networks->getNetworkPiiSmOwnersForKey($request);

    if ($response->getNetworkPiiSmOwnersForKey200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkPoliciesByClient

Get policies for all clients with policies

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkPoliciesByClientRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkPoliciesByClientRequest();
    $request->endingBefore = 'reprehenderit';
    $request->networkId = 'incidunt';
    $request->perPage = 742608;
    $request->startingAfter = 'voluptas';
    $request->t0 = 'delectus';
    $request->timespan = 9181.72;

    $response = $sdk->networks->getNetworkPoliciesByClient($request);

    if ($response->getNetworkPoliciesByClient200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSettings

Return the settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSettingsRequest();
    $request->networkId = 'quidem';

    $response = $sdk->networks->getNetworkSettings($request);

    if ($response->getNetworkSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSnmp

Return the SNMP settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSnmpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSnmpRequest();
    $request->networkId = 'occaecati';

    $response = $sdk->networks->getNetworkSnmp($request);

    if ($response->getNetworkSnmp200ApplicationJSONObject !== null) {
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
    $request->loginIdentifier = 'labore';
    $request->networkId = 'ipsam';
    $request->ssidNumber = GetNetworkSplashLoginAttemptsSsidNumberEnum::SIX;
    $request->timespan = 800407;

    $response = $sdk->networks->getNetworkSplashLoginAttempts($request);

    if ($response->getNetworkSplashLoginAttempts200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSyslogServers

List the syslog servers for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSyslogServersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSyslogServersRequest();
    $request->networkId = 'nihil';

    $response = $sdk->networks->getNetworkSyslogServers($request);

    if ($response->getNetworkSyslogServers200ApplicationJSONObject !== null) {
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
    $request->networkId = 'recusandae';

    $response = $sdk->networks->getNetworkTopologyLinkLayer($request);

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
    $request->deviceType = GetNetworkTrafficDeviceTypeEnum::WIRELESS;
    $request->networkId = 'laborum';
    $request->t0 = 'reiciendis';
    $request->timespan = 2309.03;

    $response = $sdk->networks->getNetworkTraffic($request);

    if ($response->getNetworkTraffic200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkTrafficAnalysis

Return the traffic analysis settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkTrafficAnalysisRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkTrafficAnalysisRequest();
    $request->networkId = 'provident';

    $response = $sdk->networks->getNetworkTrafficAnalysis($request);

    if ($response->getNetworkTrafficAnalysis200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkTrafficShapingApplicationCategories

Returns the application categories for traffic shaping rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkTrafficShapingApplicationCategoriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkTrafficShapingApplicationCategoriesRequest();
    $request->networkId = 'possimus';

    $response = $sdk->networks->getNetworkTrafficShapingApplicationCategories($request);

    if ($response->getNetworkTrafficShapingApplicationCategories200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkTrafficShapingDscpTaggingOptions

Returns the available DSCP tagging options for your traffic shaping rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkTrafficShapingDscpTaggingOptionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkTrafficShapingDscpTaggingOptionsRequest();
    $request->networkId = 'illo';

    $response = $sdk->networks->getNetworkTrafficShapingDscpTaggingOptions($request);

    if ($response->getNetworkTrafficShapingDscpTaggingOptions200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWebhooksHttpServer

Return an HTTP server for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWebhooksHttpServerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWebhooksHttpServerRequest();
    $request->httpServerId = 'autem';
    $request->networkId = 'tenetur';

    $response = $sdk->networks->getNetworkWebhooksHttpServer($request);

    if ($response->getNetworkWebhooksHttpServer200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWebhooksHttpServers

List the HTTP servers for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWebhooksHttpServersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWebhooksHttpServersRequest();
    $request->networkId = 'rerum';

    $response = $sdk->networks->getNetworkWebhooksHttpServers($request);

    if ($response->getNetworkWebhooksHttpServers200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWebhooksPayloadTemplate

Get the webhook payload template for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWebhooksPayloadTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWebhooksPayloadTemplateRequest();
    $request->networkId = 'asperiores';
    $request->payloadTemplateId = 'odio';

    $response = $sdk->networks->getNetworkWebhooksPayloadTemplate($request);

    if ($response->getNetworkWebhooksPayloadTemplate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWebhooksPayloadTemplates

List the webhook payload templates for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWebhooksPayloadTemplatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWebhooksPayloadTemplatesRequest();
    $request->networkId = 'nisi';

    $response = $sdk->networks->getNetworkWebhooksPayloadTemplates($request);

    if ($response->getNetworkWebhooksPayloadTemplates200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWebhooksWebhookTest

Return the status of a webhook test for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWebhooksWebhookTestRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWebhooksWebhookTestRequest();
    $request->networkId = 'hic';
    $request->webhookTestId = 'assumenda';

    $response = $sdk->networks->getNetworkWebhooksWebhookTest($request);

    if ($response->getNetworkWebhooksWebhookTest200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationInventoryOnboardingCloudMonitoringNetworks

Returns list of networks eligible for adding cloud monitored device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationInventoryOnboardingCloudMonitoringNetworksRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationInventoryOnboardingCloudMonitoringNetworksDeviceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationInventoryOnboardingCloudMonitoringNetworksRequest();
    $request->deviceType = GetOrganizationInventoryOnboardingCloudMonitoringNetworksDeviceTypeEnum::SWITCH;
    $request->endingBefore = 'eum';
    $request->organizationId = 'quia';
    $request->perPage = 695463;
    $request->startingAfter = 'sequi';

    $response = $sdk->networks->getOrganizationInventoryOnboardingCloudMonitoringNetworks($request);

    if ($response->getOrganizationInventoryOnboardingCloudMonitoringNetworks202ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationNetworks

List the networks that the user has privileges on in an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationNetworksRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationNetworksTagsFilterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationNetworksRequest();
    $request->configTemplateId = 'doloremque';
    $request->endingBefore = 'dolor';
    $request->isBoundToConfigTemplate = false;
    $request->organizationId = 'debitis';
    $request->perPage = 235427;
    $request->startingAfter = 'aperiam';
    $request->tags = [
        'dolor',
    ];
    $request->tagsFilterType = GetOrganizationNetworksTagsFilterTypeEnum::WITH_ANY_TAGS;

    $response = $sdk->networks->getOrganizationNetworks($request);

    if ($response->getOrganizationNetworks200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## provisionNetworkClients

Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyClients;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyDevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid0;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid1;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid10;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid11;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid12;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid13;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid14;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid2;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid3;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid4;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid5;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid6;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid7;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid8;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid9;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProvisionNetworkClientsRequest();
    $request->requestBody = new ProvisionNetworkClientsRequestBody();
    $request->requestBody->clients = [
        new ProvisionNetworkClientsRequestBodyClients(),
        new ProvisionNetworkClientsRequestBodyClients(),
        new ProvisionNetworkClientsRequestBodyClients(),
    ];
    $request->requestBody->devicePolicy = ProvisionNetworkClientsRequestBodyDevicePolicyEnum::BLOCKED;
    $request->requestBody->groupPolicyId = 'accusamus';
    $request->requestBody->policiesBySecurityAppliance = new ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance();
    $request->requestBody->policiesBySecurityAppliance->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum::ALLOWED;
    $request->requestBody->policiesBySsid = new ProvisionNetworkClientsRequestBodyPoliciesBySsid();
    $request->requestBody->policiesBySsid->zero = new ProvisionNetworkClientsRequestBodyPoliciesBySsid0();
    $request->requestBody->policiesBySsid->zero->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum::BLOCKED;
    $request->requestBody->policiesBySsid->zero->groupPolicyId = 'sequi';
    $request->requestBody->policiesBySsid->one = new ProvisionNetworkClientsRequestBodyPoliciesBySsid1();
    $request->requestBody->policiesBySsid->one->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum::ALLOWED;
    $request->requestBody->policiesBySsid->one->groupPolicyId = 'aliquid';
    $request->requestBody->policiesBySsid->ten = new ProvisionNetworkClientsRequestBodyPoliciesBySsid10();
    $request->requestBody->policiesBySsid->ten->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum::NORMAL;
    $request->requestBody->policiesBySsid->ten->groupPolicyId = 'sapiente';
    $request->requestBody->policiesBySsid->eleven = new ProvisionNetworkClientsRequestBodyPoliciesBySsid11();
    $request->requestBody->policiesBySsid->eleven->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum::BLOCKED;
    $request->requestBody->policiesBySsid->eleven->groupPolicyId = 'nemo';
    $request->requestBody->policiesBySsid->twelve = new ProvisionNetworkClientsRequestBodyPoliciesBySsid12();
    $request->requestBody->policiesBySsid->twelve->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum::GROUP_POLICY;
    $request->requestBody->policiesBySsid->twelve->groupPolicyId = 'magnam';
    $request->requestBody->policiesBySsid->thirteen = new ProvisionNetworkClientsRequestBodyPoliciesBySsid13();
    $request->requestBody->policiesBySsid->thirteen->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum::ALLOWED;
    $request->requestBody->policiesBySsid->thirteen->groupPolicyId = 'ab';
    $request->requestBody->policiesBySsid->fourteen = new ProvisionNetworkClientsRequestBodyPoliciesBySsid14();
    $request->requestBody->policiesBySsid->fourteen->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum::ALLOWED;
    $request->requestBody->policiesBySsid->fourteen->groupPolicyId = 'ullam';
    $request->requestBody->policiesBySsid->two = new ProvisionNetworkClientsRequestBodyPoliciesBySsid2();
    $request->requestBody->policiesBySsid->two->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum::BLOCKED;
    $request->requestBody->policiesBySsid->two->groupPolicyId = 'consectetur';
    $request->requestBody->policiesBySsid->three = new ProvisionNetworkClientsRequestBodyPoliciesBySsid3();
    $request->requestBody->policiesBySsid->three->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum::NORMAL;
    $request->requestBody->policiesBySsid->three->groupPolicyId = 'optio';
    $request->requestBody->policiesBySsid->four = new ProvisionNetworkClientsRequestBodyPoliciesBySsid4();
    $request->requestBody->policiesBySsid->four->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum::NORMAL;
    $request->requestBody->policiesBySsid->four->groupPolicyId = 'vitae';
    $request->requestBody->policiesBySsid->five = new ProvisionNetworkClientsRequestBodyPoliciesBySsid5();
    $request->requestBody->policiesBySsid->five->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum::NORMAL;
    $request->requestBody->policiesBySsid->five->groupPolicyId = 'fugit';
    $request->requestBody->policiesBySsid->six = new ProvisionNetworkClientsRequestBodyPoliciesBySsid6();
    $request->requestBody->policiesBySsid->six->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum::ALLOWED;
    $request->requestBody->policiesBySsid->six->groupPolicyId = 'incidunt';
    $request->requestBody->policiesBySsid->seven = new ProvisionNetworkClientsRequestBodyPoliciesBySsid7();
    $request->requestBody->policiesBySsid->seven->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum::NORMAL;
    $request->requestBody->policiesBySsid->seven->groupPolicyId = 'labore';
    $request->requestBody->policiesBySsid->eight = new ProvisionNetworkClientsRequestBodyPoliciesBySsid8();
    $request->requestBody->policiesBySsid->eight->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum::GROUP_POLICY;
    $request->requestBody->policiesBySsid->eight->groupPolicyId = 'illum';
    $request->requestBody->policiesBySsid->nine = new ProvisionNetworkClientsRequestBodyPoliciesBySsid9();
    $request->requestBody->policiesBySsid->nine->devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum::NORMAL;
    $request->requestBody->policiesBySsid->nine->groupPolicyId = 'minus';
    $request->networkId = 'sint';

    $response = $sdk->networks->provisionNetworkClients($request);

    if ($response->provisionNetworkClients201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeNetworkDevices

Remove a single device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveNetworkDevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveNetworkDevicesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveNetworkDevicesRequest();
    $request->requestBody = new RemoveNetworkDevicesRequestBody();
    $request->requestBody->serial = 'occaecati';
    $request->networkId = 'voluptatem';

    $response = $sdk->networks->removeNetworkDevices($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rollbacksNetworkFirmwareUpgradesStagedEvents

Rollback a Staged Upgrade Event for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RollbacksNetworkFirmwareUpgradesStagedEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\RollbacksNetworkFirmwareUpgradesStagedEventsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons;
use \OpenAPI\OpenAPI\Models\Operations\RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages;
use \OpenAPI\OpenAPI\Models\Operations\RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup;
use \OpenAPI\OpenAPI\Models\Operations\RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RollbacksNetworkFirmwareUpgradesStagedEventsRequest();
    $request->requestBody = new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBody();
    $request->requestBody->reasons = [
        new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons(),
        new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons(),
    ];
    $request->requestBody->stages = [
        new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages(),
        new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages(),
        new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages(),
        new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages(),
    ];
    $request->networkId = 'ad';

    $response = $sdk->networks->rollbacksNetworkFirmwareUpgradesStagedEvents($request);

    if ($response->rollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## splitNetwork

Split a combined network into individual networks for each type of device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SplitNetworkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SplitNetworkRequest();
    $request->networkId = 'illo';

    $response = $sdk->networks->splitNetwork($request);

    if ($response->splitNetwork200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unbindNetwork

Unbind a network from a template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnbindNetworkRequest;
use \OpenAPI\OpenAPI\Models\Operations\UnbindNetworkRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnbindNetworkRequest();
    $request->requestBody = new UnbindNetworkRequestBody();
    $request->requestBody->retainConfigs = false;
    $request->networkId = 'provident';

    $response = $sdk->networks->unbindNetwork($request);

    if ($response->unbindNetwork200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetwork

Update a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkRequest();
    $request->requestBody = new UpdateNetworkRequestBody();
    $request->requestBody->enrollmentString = 'exercitationem';
    $request->requestBody->name = 'Dave Hoppe';
    $request->requestBody->notes = 'optio';
    $request->requestBody->tags = [
        'voluptatibus',
        'mollitia',
        'quam',
        'deleniti',
    ];
    $request->requestBody->timeZone = 'a';
    $request->networkId = 'ab';

    $response = $sdk->networks->updateNetwork($request);

    if ($response->updateNetwork200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkAlertsSettings

Update the alert configuration for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAlertsSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAlertsSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAlertsSettingsRequestBodyAlerts;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkAlertsSettingsRequest();
    $request->requestBody = new UpdateNetworkAlertsSettingsRequestBody();
    $request->requestBody->alerts = [
        new UpdateNetworkAlertsSettingsRequestBodyAlerts(),
        new UpdateNetworkAlertsSettingsRequestBodyAlerts(),
        new UpdateNetworkAlertsSettingsRequestBodyAlerts(),
        new UpdateNetworkAlertsSettingsRequestBodyAlerts(),
    ];
    $request->requestBody->defaultDestinations = new UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations();
    $request->requestBody->defaultDestinations->allAdmins = false;
    $request->requestBody->defaultDestinations->emails = [
        'facere',
    ];
    $request->requestBody->defaultDestinations->httpServerIds = [
        'libero',
    ];
    $request->requestBody->defaultDestinations->snmp = false;
    $request->networkId = 'error';

    $response = $sdk->networks->updateNetworkAlertsSettings($request);

    if ($response->updateNetworkAlertsSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkClientPolicy

Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientPolicyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkClientPolicyRequest();
    $request->requestBody = new UpdateNetworkClientPolicyRequestBody();
    $request->requestBody->devicePolicy = 'perferendis';
    $request->requestBody->groupPolicyId = 'beatae';
    $request->clientId = 'saepe';
    $request->networkId = 'voluptatem';

    $response = $sdk->networks->updateNetworkClientPolicy($request);

    if ($response->updateNetworkClientPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkClientSplashAuthorizationStatus

Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkClientSplashAuthorizationStatusRequest();
    $request->requestBody = new UpdateNetworkClientSplashAuthorizationStatusRequestBody();
    $request->requestBody->ssids = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids();
    $request->requestBody->ssids->zero = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0();
    $request->requestBody->ssids->zero->isAuthorized = false;
    $request->requestBody->ssids->one = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1();
    $request->requestBody->ssids->one->isAuthorized = false;
    $request->requestBody->ssids->ten = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10();
    $request->requestBody->ssids->ten->isAuthorized = false;
    $request->requestBody->ssids->eleven = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11();
    $request->requestBody->ssids->eleven->isAuthorized = false;
    $request->requestBody->ssids->twelve = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12();
    $request->requestBody->ssids->twelve->isAuthorized = false;
    $request->requestBody->ssids->thirteen = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13();
    $request->requestBody->ssids->thirteen->isAuthorized = false;
    $request->requestBody->ssids->fourteen = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14();
    $request->requestBody->ssids->fourteen->isAuthorized = false;
    $request->requestBody->ssids->two = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2();
    $request->requestBody->ssids->two->isAuthorized = false;
    $request->requestBody->ssids->three = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3();
    $request->requestBody->ssids->three->isAuthorized = false;
    $request->requestBody->ssids->four = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4();
    $request->requestBody->ssids->four->isAuthorized = false;
    $request->requestBody->ssids->five = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5();
    $request->requestBody->ssids->five->isAuthorized = false;
    $request->requestBody->ssids->six = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6();
    $request->requestBody->ssids->six->isAuthorized = false;
    $request->requestBody->ssids->seven = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7();
    $request->requestBody->ssids->seven->isAuthorized = false;
    $request->requestBody->ssids->eight = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8();
    $request->requestBody->ssids->eight->isAuthorized = false;
    $request->requestBody->ssids->nine = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9();
    $request->requestBody->ssids->nine->isAuthorized = false;
    $request->clientId = 'sint';
    $request->networkId = 'corporis';

    $response = $sdk->networks->updateNetworkClientSplashAuthorizationStatus($request);

    if ($response->updateNetworkClientSplashAuthorizationStatus200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkFirmwareUpgrades

Update firmware upgrade information for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProducts;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkFirmwareUpgradesRequest();
    $request->requestBody = new UpdateNetworkFirmwareUpgradesRequestBody();
    $request->requestBody->products = new UpdateNetworkFirmwareUpgradesRequestBodyProducts();
    $request->requestBody->products->appliance = new UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance();
    $request->requestBody->products->appliance->nextUpgrade = new UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade();
    $request->requestBody->products->appliance->nextUpgrade->time = 'explicabo';
    $request->requestBody->products->appliance->nextUpgrade->toVersion = new UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion();
    $request->requestBody->products->appliance->nextUpgrade->toVersion->id = 'bbb4cbb1-9f71-43d9-9a41-69c1387271e1';
    $request->requestBody->products->appliance->participateInNextBetaRelease = false;
    $request->requestBody->products->camera = new UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera();
    $request->requestBody->products->camera->nextUpgrade = new UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade();
    $request->requestBody->products->camera->nextUpgrade->time = 'quos';
    $request->requestBody->products->camera->nextUpgrade->toVersion = new UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion();
    $request->requestBody->products->camera->nextUpgrade->toVersion->id = 'ea9e4511-8c2c-4c57-bbd6-0b1a78ed29a9';
    $request->requestBody->products->camera->participateInNextBetaRelease = false;
    $request->requestBody->products->cellularGateway = new UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway();
    $request->requestBody->products->cellularGateway->nextUpgrade = new UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade();
    $request->requestBody->products->cellularGateway->nextUpgrade->time = 'pariatur';
    $request->requestBody->products->cellularGateway->nextUpgrade->toVersion = new UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion();
    $request->requestBody->products->cellularGateway->nextUpgrade->toVersion->id = '4eea8565-8c2d-44f4-888b-e4f278fd9667';
    $request->requestBody->products->cellularGateway->participateInNextBetaRelease = false;
    $request->requestBody->products->sensor = new UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor();
    $request->requestBody->products->sensor->nextUpgrade = new UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade();
    $request->requestBody->products->sensor->nextUpgrade->time = 'accusamus';
    $request->requestBody->products->sensor->nextUpgrade->toVersion = new UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion();
    $request->requestBody->products->sensor->nextUpgrade->toVersion->id = '46c51d2f-faa5-48dc-af23-4c955b9bdf21';
    $request->requestBody->products->sensor->participateInNextBetaRelease = false;
    $request->requestBody->products->switch = new UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch();
    $request->requestBody->products->switch->nextUpgrade = new UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade();
    $request->requestBody->products->switch->nextUpgrade->time = 'error';
    $request->requestBody->products->switch->nextUpgrade->toVersion = new UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion();
    $request->requestBody->products->switch->nextUpgrade->toVersion->id = '0abd9bbc-c272-45ec-a659-ce0280840c69';
    $request->requestBody->products->switch->participateInNextBetaRelease = false;
    $request->requestBody->products->wireless = new UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless();
    $request->requestBody->products->wireless->nextUpgrade = new UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade();
    $request->requestBody->products->wireless->nextUpgrade->time = 'eveniet';
    $request->requestBody->products->wireless->nextUpgrade->toVersion = new UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion();
    $request->requestBody->products->wireless->nextUpgrade->toVersion->id = 'f68e45c8-addf-4ac7-9450-0430c6632b43';
    $request->requestBody->products->wireless->participateInNextBetaRelease = false;
    $request->requestBody->timezone = 'provident';
    $request->requestBody->upgradeWindow = new UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow();
    $request->requestBody->upgradeWindow->dayOfWeek = UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum::FRIDAY;
    $request->requestBody->upgradeWindow->hourOfDay = UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum::EIGHT00;
    $request->networkId = 'temporibus';

    $response = $sdk->networks->updateNetworkFirmwareUpgrades($request);

    if ($response->updateNetworkFirmwareUpgrades200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkFirmwareUpgradesStagedEvents

Update the Staged Upgrade Event for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedEventsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkFirmwareUpgradesStagedEventsRequest();
    $request->requestBody = new UpdateNetworkFirmwareUpgradesStagedEventsRequestBody();
    $request->requestBody->stages = [
        new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages(),
        new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages(),
        new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages(),
        new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages(),
    ];
    $request->networkId = 'ipsa';

    $response = $sdk->networks->updateNetworkFirmwareUpgradesStagedEvents($request);

    if ($response->updateNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkFirmwareUpgradesStagedGroup

Update a Staged Upgrade Group for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkFirmwareUpgradesStagedGroupRequest();
    $request->requestBody = new UpdateNetworkFirmwareUpgradesStagedGroupRequestBody();
    $request->requestBody->assignedDevices = new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices();
    $request->requestBody->assignedDevices->devices = [
        new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices(),
    ];
    $request->requestBody->assignedDevices->switchStacks = [
        new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks(),
        new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks(),
        new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks(),
        new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks(),
    ];
    $request->requestBody->description = 'adipisci';
    $request->requestBody->isDefault = false;
    $request->requestBody->name = 'Wade Breitenberg';
    $request->groupId = 'maiores';
    $request->networkId = 'voluptate';

    $response = $sdk->networks->updateNetworkFirmwareUpgradesStagedGroup($request);

    if ($response->updateNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkFirmwareUpgradesStagedStages

Assign Staged Upgrade Group order in the sequence.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedStagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedStagesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJson;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJsonGroup;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkFirmwareUpgradesStagedStagesRequest();
    $request->requestBody = new UpdateNetworkFirmwareUpgradesStagedStagesRequestBody();
    $request->requestBody->json = [
        new UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJson(),
        new UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJson(),
        new UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJson(),
    ];
    $request->networkId = 'quod';

    $response = $sdk->networks->updateNetworkFirmwareUpgradesStagedStages($request);

    if ($response->updateNetworkFirmwareUpgradesStagedStages200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkFloorPlan

Update a floor plan's geolocation and other meta data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFloorPlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFloorPlanRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFloorPlanRequestBodyBottomLeftCorner;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFloorPlanRequestBodyBottomRightCorner;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFloorPlanRequestBodyCenter;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFloorPlanRequestBodyTopLeftCorner;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkFloorPlanRequestBodyTopRightCorner;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkFloorPlanRequest();
    $request->requestBody = new UpdateNetworkFloorPlanRequestBody();
    $request->requestBody->bottomLeftCorner = new UpdateNetworkFloorPlanRequestBodyBottomLeftCorner();
    $request->requestBody->bottomLeftCorner->lat = 4116.38;
    $request->requestBody->bottomLeftCorner->lng = 6234.8;
    $request->requestBody->bottomRightCorner = new UpdateNetworkFloorPlanRequestBodyBottomRightCorner();
    $request->requestBody->bottomRightCorner->lat = 8727.98;
    $request->requestBody->bottomRightCorner->lng = 2782.73;
    $request->requestBody->center = new UpdateNetworkFloorPlanRequestBodyCenter();
    $request->requestBody->center->lat = 4193.32;
    $request->requestBody->center->lng = 14.69;
    $request->requestBody->imageContents = 'est';
    $request->requestBody->name = 'Courtney Trantow';
    $request->requestBody->topLeftCorner = new UpdateNetworkFloorPlanRequestBodyTopLeftCorner();
    $request->requestBody->topLeftCorner->lat = 7355.86;
    $request->requestBody->topLeftCorner->lng = 1252.97;
    $request->requestBody->topRightCorner = new UpdateNetworkFloorPlanRequestBodyTopRightCorner();
    $request->requestBody->topRightCorner->lat = 3906.94;
    $request->requestBody->topRightCorner->lng = 8606.77;
    $request->floorPlanId = 'architecto';
    $request->networkId = 'accusantium';

    $response = $sdk->networks->updateNetworkFloorPlan($request);

    if ($response->updateNetworkFloorPlan200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkGroupPolicy

Update a group policy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyBandwidth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyBonjourForwarding;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyContentFiltering;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyScheduling;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodySchedulingFriday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodySchedulingMonday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodySchedulingSaturday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodySchedulingSunday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodySchedulingThursday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodySchedulingTuesday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodySchedulingWednesday;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyVlanTagging;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkGroupPolicyRequest();
    $request->requestBody = new UpdateNetworkGroupPolicyRequestBody();
    $request->requestBody->bandwidth = new UpdateNetworkGroupPolicyRequestBodyBandwidth();
    $request->requestBody->bandwidth->bandwidthLimits = new UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits();
    $request->requestBody->bandwidth->bandwidthLimits->limitDown = 951768;
    $request->requestBody->bandwidth->bandwidthLimits->limitUp = 92349;
    $request->requestBody->bandwidth->settings = UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum::NETWORK_DEFAULT;
    $request->requestBody->bonjourForwarding = new UpdateNetworkGroupPolicyRequestBodyBonjourForwarding();
    $request->requestBody->bonjourForwarding->rules = [
        new UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules(),
        new UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules(),
        new UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules(),
        new UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules(),
    ];
    $request->requestBody->bonjourForwarding->settings = UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum::CUSTOM;
    $request->requestBody->contentFiltering = new UpdateNetworkGroupPolicyRequestBodyContentFiltering();
    $request->requestBody->contentFiltering->allowedUrlPatterns = new UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns();
    $request->requestBody->contentFiltering->allowedUrlPatterns->patterns = [
        'neque',
        'ab',
    ];
    $request->requestBody->contentFiltering->allowedUrlPatterns->settings = UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum::OVERRIDE;
    $request->requestBody->contentFiltering->blockedUrlCategories = new UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories();
    $request->requestBody->contentFiltering->blockedUrlCategories->categories = [
        'quisquam',
        'aperiam',
    ];
    $request->requestBody->contentFiltering->blockedUrlCategories->settings = UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum::OVERRIDE;
    $request->requestBody->contentFiltering->blockedUrlPatterns = new UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns();
    $request->requestBody->contentFiltering->blockedUrlPatterns->patterns = [
        'repellat',
    ];
    $request->requestBody->contentFiltering->blockedUrlPatterns->settings = UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum::NETWORK_DEFAULT;
    $request->requestBody->firewallAndTrafficShaping = new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping();
    $request->requestBody->firewallAndTrafficShaping->l3FirewallRules = [
        new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules(),
        new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules(),
    ];
    $request->requestBody->firewallAndTrafficShaping->l7FirewallRules = [
        new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules(),
    ];
    $request->requestBody->firewallAndTrafficShaping->settings = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum::NETWORK_DEFAULT;
    $request->requestBody->firewallAndTrafficShaping->trafficShapingRules = [
        new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules(),
        new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules(),
        new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules(),
    ];
    $request->requestBody->name = 'Leo Roob';
    $request->requestBody->scheduling = new UpdateNetworkGroupPolicyRequestBodyScheduling();
    $request->requestBody->scheduling->enabled = false;
    $request->requestBody->scheduling->friday = new UpdateNetworkGroupPolicyRequestBodySchedulingFriday();
    $request->requestBody->scheduling->friday->active = false;
    $request->requestBody->scheduling->friday->from = 'doloribus';
    $request->requestBody->scheduling->friday->to = 'illum';
    $request->requestBody->scheduling->monday = new UpdateNetworkGroupPolicyRequestBodySchedulingMonday();
    $request->requestBody->scheduling->monday->active = false;
    $request->requestBody->scheduling->monday->from = 'non';
    $request->requestBody->scheduling->monday->to = 'repudiandae';
    $request->requestBody->scheduling->saturday = new UpdateNetworkGroupPolicyRequestBodySchedulingSaturday();
    $request->requestBody->scheduling->saturday->active = false;
    $request->requestBody->scheduling->saturday->from = 'quae';
    $request->requestBody->scheduling->saturday->to = 'tempore';
    $request->requestBody->scheduling->sunday = new UpdateNetworkGroupPolicyRequestBodySchedulingSunday();
    $request->requestBody->scheduling->sunday->active = false;
    $request->requestBody->scheduling->sunday->from = 'incidunt';
    $request->requestBody->scheduling->sunday->to = 'deserunt';
    $request->requestBody->scheduling->thursday = new UpdateNetworkGroupPolicyRequestBodySchedulingThursday();
    $request->requestBody->scheduling->thursday->active = false;
    $request->requestBody->scheduling->thursday->from = 'non';
    $request->requestBody->scheduling->thursday->to = 'officia';
    $request->requestBody->scheduling->tuesday = new UpdateNetworkGroupPolicyRequestBodySchedulingTuesday();
    $request->requestBody->scheduling->tuesday->active = false;
    $request->requestBody->scheduling->tuesday->from = 'magnam';
    $request->requestBody->scheduling->tuesday->to = 'quia';
    $request->requestBody->scheduling->wednesday = new UpdateNetworkGroupPolicyRequestBodySchedulingWednesday();
    $request->requestBody->scheduling->wednesday->active = false;
    $request->requestBody->scheduling->wednesday->from = 'ullam';
    $request->requestBody->scheduling->wednesday->to = 'dolor';
    $request->requestBody->splashAuthSettings = UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum::NETWORK_DEFAULT;
    $request->requestBody->vlanTagging = new UpdateNetworkGroupPolicyRequestBodyVlanTagging();
    $request->requestBody->vlanTagging->settings = UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum::CUSTOM;
    $request->requestBody->vlanTagging->vlanId = 'ipsa';
    $request->groupPolicyId = 'consequuntur';
    $request->networkId = 'ullam';

    $response = $sdk->networks->updateNetworkGroupPolicy($request);

    if ($response->updateNetworkGroupPolicy200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkMerakiAuthUser

Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkMerakiAuthUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkMerakiAuthUserRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkMerakiAuthUserRequestBodyAuthorizations;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkMerakiAuthUserRequest();
    $request->requestBody = new UpdateNetworkMerakiAuthUserRequestBody();
    $request->requestBody->authorizations = [
        new UpdateNetworkMerakiAuthUserRequestBodyAuthorizations(),
        new UpdateNetworkMerakiAuthUserRequestBodyAuthorizations(),
    ];
    $request->requestBody->emailPasswordToUser = false;
    $request->requestBody->name = 'Rebecca Wunsch';
    $request->requestBody->password = 'maxime';
    $request->merakiAuthUserId = 'iusto';
    $request->networkId = 'recusandae';

    $response = $sdk->networks->updateNetworkMerakiAuthUser($request);

    if ($response->updateNetworkMerakiAuthUser200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkMqttBroker

Update an MQTT broker

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkMqttBrokerRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkMqttBrokerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkMqttBrokerRequestBodySecurity;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkMqttBrokerRequestBodySecuritySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkMqttBrokerRequest();
    $request->requestBody = new UpdateNetworkMqttBrokerRequestBody();
    $request->requestBody->authentication = [
        'pariatur' => 'porro',
        'enim' => 'tempora',
    ];
    $request->requestBody->host = 'voluptatum';
    $request->requestBody->name = 'Bradford Balistreri';
    $request->requestBody->port = 255229;
    $request->requestBody->security = new UpdateNetworkMqttBrokerRequestBodySecurity();
    $request->requestBody->security->mode = 'architecto';
    $request->requestBody->security->security = new UpdateNetworkMqttBrokerRequestBodySecuritySecurity();
    $request->requestBody->security->security->caCertificate = 'fuga';
    $request->requestBody->security->security->verifyHostnames = false;
    $request->mqttBrokerId = 'iusto';
    $request->networkId = 'culpa';

    $response = $sdk->networks->updateNetworkMqttBroker($request);

    if ($response->updateNetworkMqttBroker200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkNetflow

Update the NetFlow traffic reporting settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkNetflowRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkNetflowRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkNetflowRequest();
    $request->requestBody = new UpdateNetworkNetflowRequestBody();
    $request->requestBody->collectorIp = 'dolores';
    $request->requestBody->collectorPort = 81673;
    $request->requestBody->etaDstPort = 368617;
    $request->requestBody->etaEnabled = false;
    $request->requestBody->reportingEnabled = false;
    $request->networkId = 'impedit';

    $response = $sdk->networks->updateNetworkNetflow($request);

    if ($response->updateNetworkNetflow200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSettings

Update the settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSettingsRequestBodyLocalStatusPage;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSettingsRequestBodyLocalStatusPageAuthentication;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSettingsRequestBodySecurePort;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSettingsRequest();
    $request->requestBody = new UpdateNetworkSettingsRequestBody();
    $request->requestBody->localStatusPage = new UpdateNetworkSettingsRequestBodyLocalStatusPage();
    $request->requestBody->localStatusPage->authentication = new UpdateNetworkSettingsRequestBodyLocalStatusPageAuthentication();
    $request->requestBody->localStatusPage->authentication->enabled = false;
    $request->requestBody->localStatusPage->authentication->password = 'officia';
    $request->requestBody->localStatusPageEnabled = false;
    $request->requestBody->remoteStatusPageEnabled = false;
    $request->requestBody->securePort = new UpdateNetworkSettingsRequestBodySecurePort();
    $request->requestBody->securePort->enabled = false;
    $request->networkId = 'et';

    $response = $sdk->networks->updateNetworkSettings($request);

    if ($response->updateNetworkSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSnmp

Update the SNMP settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSnmpRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSnmpRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSnmpRequestBodyAccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSnmpRequestBodyUsers;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSnmpRequest();
    $request->requestBody = new UpdateNetworkSnmpRequestBody();
    $request->requestBody->access = UpdateNetworkSnmpRequestBodyAccessEnum::COMMUNITY;
    $request->requestBody->communityString = 'similique';
    $request->requestBody->users = [
        new UpdateNetworkSnmpRequestBodyUsers(),
        new UpdateNetworkSnmpRequestBodyUsers(),
    ];
    $request->networkId = 'harum';

    $response = $sdk->networks->updateNetworkSnmp($request);

    if ($response->updateNetworkSnmp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSyslogServers

Update the syslog servers for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSyslogServersRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSyslogServersRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSyslogServersRequestBodyServers;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSyslogServersRequest();
    $request->requestBody = new UpdateNetworkSyslogServersRequestBody();
    $request->requestBody->servers = [
        new UpdateNetworkSyslogServersRequestBodyServers(),
        new UpdateNetworkSyslogServersRequestBodyServers(),
        new UpdateNetworkSyslogServersRequestBodyServers(),
    ];
    $request->networkId = 'provident';

    $response = $sdk->networks->updateNetworkSyslogServers($request);

    if ($response->updateNetworkSyslogServers200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkTrafficAnalysis

Update the traffic analysis settings for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkTrafficAnalysisRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkTrafficAnalysisRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkTrafficAnalysisRequestBodyModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkTrafficAnalysisRequest();
    $request->requestBody = new UpdateNetworkTrafficAnalysisRequestBody();
    $request->requestBody->customPieChartItems = [
        new UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems(),
        new UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems(),
        new UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems(),
        new UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems(),
    ];
    $request->requestBody->mode = UpdateNetworkTrafficAnalysisRequestBodyModeEnum::DETAILED;
    $request->networkId = 'provident';

    $response = $sdk->networks->updateNetworkTrafficAnalysis($request);

    if ($response->updateNetworkTrafficAnalysis200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWebhooksHttpServer

Update an HTTP server. To change a URL, create a new HTTP server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWebhooksHttpServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWebhooksHttpServerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWebhooksHttpServerRequestBodyPayloadTemplate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWebhooksHttpServerRequest();
    $request->requestBody = new UpdateNetworkWebhooksHttpServerRequestBody();
    $request->requestBody->name = 'Ms. Jordan Lueilwitz';
    $request->requestBody->payloadTemplate = new UpdateNetworkWebhooksHttpServerRequestBodyPayloadTemplate();
    $request->requestBody->payloadTemplate->payloadTemplateId = 'placeat';
    $request->requestBody->sharedSecret = 'sapiente';
    $request->httpServerId = 'assumenda';
    $request->networkId = 'alias';

    $response = $sdk->networks->updateNetworkWebhooksHttpServer($request);

    if ($response->updateNetworkWebhooksHttpServer200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWebhooksPayloadTemplate

Update a webhook payload template for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWebhooksPayloadTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWebhooksPayloadTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWebhooksPayloadTemplateRequest();
    $request->requestBody = new UpdateNetworkWebhooksPayloadTemplateRequestBody();
    $request->requestBody->body = 'eligendi';
    $request->requestBody->bodyFile = 'odio';
    $request->requestBody->headers = [
        new UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders(),
        new UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders(),
    ];
    $request->requestBody->headersFile = 'eligendi';
    $request->requestBody->name = 'Dawn Thiel';
    $request->networkId = 'dignissimos';
    $request->payloadTemplateId = 'facere';

    $response = $sdk->networks->updateNetworkWebhooksPayloadTemplate($request);

    if ($response->updateNetworkWebhooksPayloadTemplate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vmxNetworkDevicesClaim

Claim a vMX into a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\VmxNetworkDevicesClaimRequest;
use \OpenAPI\OpenAPI\Models\Operations\VmxNetworkDevicesClaimRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\VmxNetworkDevicesClaimRequestBodySizeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VmxNetworkDevicesClaimRequest();
    $request->requestBody = new VmxNetworkDevicesClaimRequestBody();
    $request->requestBody->size = VmxNetworkDevicesClaimRequestBodySizeEnum::LARGE;
    $request->networkId = 'accusamus';

    $response = $sdk->networks->vmxNetworkDevicesClaim($request);

    if ($response->vmxNetworkDevicesClaim200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
