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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BindNetworkRequest;
import org.openapis.openapi.models.operations.BindNetworkRequestBody;
import org.openapis.openapi.models.operations.BindNetworkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            BindNetworkRequest req = new BindNetworkRequest(                new BindNetworkRequestBody("necessitatibus") {{
                                autoBind = false;
                            }};, "eius");            

            BindNetworkResponse res = sdk.networks.bindNetwork(req);

            if (res.bindNetwork200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## claimNetworkDevices

Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClaimNetworkDevicesRequest;
import org.openapis.openapi.models.operations.ClaimNetworkDevicesRequestBody;
import org.openapis.openapi.models.operations.ClaimNetworkDevicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ClaimNetworkDevicesRequest req = new ClaimNetworkDevicesRequest(                new ClaimNetworkDevicesRequestBody(                new String[]{{
                                                add("consequatur"),
                                                add("ullam"),
                                                add("nesciunt"),
                                            }});, "reprehenderit");            

            ClaimNetworkDevicesResponse res = sdk.networks.claimNetworkDevices(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## combineOrganizationNetworks

Combine multiple networks into a single network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CombineOrganizationNetworksRequest;
import org.openapis.openapi.models.operations.CombineOrganizationNetworksRequestBody;
import org.openapis.openapi.models.operations.CombineOrganizationNetworksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CombineOrganizationNetworksRequest req = new CombineOrganizationNetworksRequest(                new CombineOrganizationNetworksRequestBody("fugiat",                 new String[]{{
                                                add("tempore"),
                                                add("dolorum"),
                                                add("quis"),
                                            }}) {{
                                enrollmentString = "alias";
                            }};, "necessitatibus");            

            CombineOrganizationNetworksResponse res = sdk.networks.combineOrganizationNetworks(req);

            if (res.combineOrganizationNetworks200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkFirmwareUpgradesRollback

Rollback a Firmware Upgrade For A Network

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesRollbackRequest;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesRollbackRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesRollbackResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkFirmwareUpgradesRollbackRequest req = new CreateNetworkFirmwareUpgradesRollbackRequest(                new CreateNetworkFirmwareUpgradesRollbackRequestBody(                new org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons[]{{
                                                add(new CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons(CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum.OTHER, "quisquam") {{
                                                    category = CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum.TESTING;
                                                    comment = "nobis";
                                                }}),
                                                add(new CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons(CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum.TESTING, "rem") {{
                                                    category = CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum.OTHER;
                                                    comment = "corporis";
                                                }}),
                                            }}) {{
                                product = CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum.CAMERA;
                                time = OffsetDateTime.parse("2022-09-26T13:40:55.154Z");
                                toVersion = new CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion() {{
                                    id = "91bdea90-e0f5-4844-9a9b-1a10a363f32f";
                                }};;
                            }};, "illum");            

            CreateNetworkFirmwareUpgradesRollbackResponse res = sdk.networks.createNetworkFirmwareUpgradesRollback(req);

            if (res.createNetworkFirmwareUpgradesRollback200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkFirmwareUpgradesStagedEvent

Create a Staged Upgrade Event for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedEventRequest;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedEventRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyProducts;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitch;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgrade;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgradeToVersion;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesGroup;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesMilestones;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedEventResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkFirmwareUpgradesStagedEventRequest req = new CreateNetworkFirmwareUpgradesStagedEventRequest(                new CreateNetworkFirmwareUpgradesStagedEventRequestBody(                new org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages[]{{
                                                add(new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages() {{
                                                    group = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesGroup("vitae") {{
                                                        id = "342b0049-524d-4ba9-a17a-84fbb792d2b8";
                                                    }};
                                                    milestones = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesMilestones("doloribus") {{
                                                        scheduledFor = "ut";
                                                    }};
                                                }}),
                                            }}) {{
                                products = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyProducts() {{
                                    switch_ = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitch() {{
                                        nextUpgrade = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgrade() {{
                                            toVersion = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgradeToVersion("suscipit");;
                                        }};;
                                    }};;
                                }};;
                            }};, "dicta");            

            CreateNetworkFirmwareUpgradesStagedEventResponse res = sdk.networks.createNetworkFirmwareUpgradesStagedEvent(req);

            if (res.createNetworkFirmwareUpgradesStagedEvent200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkFirmwareUpgradesStagedGroup

Create a Staged Upgrade Group for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedGroupRequest;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkFirmwareUpgradesStagedGroupRequest req = new CreateNetworkFirmwareUpgradesStagedGroupRequest(                new CreateNetworkFirmwareUpgradesStagedGroupRequestBody(false, "cumque") {{
                                assignedDevices = new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices() {{
                                    devices = new org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices[]{{
                                        add(new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices("architecto") {{
                                            name = "Ignacio Leannon Sr.";
                                            serial = "cum";
                                        }}),
                                        add(new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices("placeat") {{
                                            name = "Sandy Braun";
                                            serial = "tempore";
                                        }}),
                                        add(new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices("tempora") {{
                                            name = "Geoffrey Yundt";
                                            serial = "aliquam";
                                        }}),
                                    }};
                                    switchStacks = new org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks[]{{
                                        add(new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks("vitae") {{
                                            id = "c8c4df61-ea60-4b99-b5e3-1a1e3601a4d6";
                                            name = "Rosemary Dickinson";
                                        }}),
                                        add(new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks("temporibus") {{
                                            id = "c1e222a2-50a4-4293-b368-d63af9000d5d";
                                            name = "Irving Mante Jr.";
                                        }}),
                                        add(new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks("aliquid") {{
                                            id = "c26611fe-a0de-4223-b638-2724d0605a3a";
                                            name = "Bob McDermott";
                                        }}),
                                        add(new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks("mollitia") {{
                                            id = "3ee8381e-af4a-4279-8752-695a9b444865";
                                            name = "Kate Treutel V";
                                        }}),
                                    }};
                                }};;
                                description = "voluptatum";
                            }};, "possimus");            

            CreateNetworkFirmwareUpgradesStagedGroupResponse res = sdk.networks.createNetworkFirmwareUpgradesStagedGroup(req);

            if (res.createNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkFloorPlan

Upload a floor plan

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkFloorPlanRequest;
import org.openapis.openapi.models.operations.CreateNetworkFloorPlanRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkFloorPlanRequestBodyBottomLeftCorner;
import org.openapis.openapi.models.operations.CreateNetworkFloorPlanRequestBodyBottomRightCorner;
import org.openapis.openapi.models.operations.CreateNetworkFloorPlanRequestBodyCenter;
import org.openapis.openapi.models.operations.CreateNetworkFloorPlanRequestBodyTopLeftCorner;
import org.openapis.openapi.models.operations.CreateNetworkFloorPlanRequestBodyTopRightCorner;
import org.openapis.openapi.models.operations.CreateNetworkFloorPlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkFloorPlanRequest req = new CreateNetworkFloorPlanRequest(                new CreateNetworkFloorPlanRequestBody("ex", "necessitatibus") {{
                                bottomLeftCorner = new CreateNetworkFloorPlanRequestBodyBottomLeftCorner() {{
                                    lat = 1692.36;
                                    lng = 9874.08;
                                }};;
                                bottomRightCorner = new CreateNetworkFloorPlanRequestBodyBottomRightCorner() {{
                                    lat = 2135.29;
                                    lng = 2403.87;
                                }};;
                                center = new CreateNetworkFloorPlanRequestBodyCenter() {{
                                    lat = 7736.96;
                                    lng = 4823.66;
                                }};;
                                topLeftCorner = new CreateNetworkFloorPlanRequestBodyTopLeftCorner() {{
                                    lat = 3642.79;
                                    lng = 4528.07;
                                }};;
                                topRightCorner = new CreateNetworkFloorPlanRequestBodyTopRightCorner() {{
                                    lat = 7216.13;
                                    lng = 7014.92;
                                }};;
                            }};, "earum");            

            CreateNetworkFloorPlanResponse res = sdk.networks.createNetworkFloorPlan(req);

            if (res.createNetworkFloorPlan201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkGroupPolicy

Create a group policy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequest;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyBandwidth;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyBonjourForwarding;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyContentFiltering;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyScheduling;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodySchedulingFriday;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodySchedulingMonday;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodySchedulingSaturday;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodySchedulingSunday;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodySchedulingThursday;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodySchedulingTuesday;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodySchedulingWednesday;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyVlanTagging;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum;
import org.openapis.openapi.models.operations.CreateNetworkGroupPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkGroupPolicyRequest req = new CreateNetworkGroupPolicyRequest(                new CreateNetworkGroupPolicyRequestBody("rem") {{
                                bandwidth = new CreateNetworkGroupPolicyRequestBodyBandwidth() {{
                                    bandwidthLimits = new CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits() {{
                                        limitDown = 418356L;
                                        limitUp = 1694L;
                                    }};;
                                    settings = CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum.IGNORE;
                                }};;
                                bonjourForwarding = new CreateNetworkGroupPolicyRequestBodyBonjourForwarding() {{
                                    rules = new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules[]{{
                                        add(new CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules(                new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[]{{
                                                            add(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.SAMBA),
                                                            add(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.I_CHAT),
                                                            add(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.FTP),
                                                        }}, "dolorum") {{
                                            description = "quam";
                                            services = new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[]{{
                                                add(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.SCANNERS),
                                                add(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.AFP),
                                                add(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.PRINTERS),
                                            }};
                                            vlanId = "repellat";
                                        }}),
                                        add(new CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules(                new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[]{{
                                                            add(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.SCANNERS),
                                                            add(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.I_TUNES),
                                                        }}, "ullam") {{
                                            description = "rem";
                                            services = new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[]{{
                                                add(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.I_TUNES),
                                                add(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.PRINTERS),
                                            }};
                                            vlanId = "distinctio";
                                        }}),
                                    }};
                                    settings = CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum.IGNORE;
                                }};;
                                contentFiltering = new CreateNetworkGroupPolicyRequestBodyContentFiltering() {{
                                    allowedUrlPatterns = new CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns() {{
                                        patterns = new String[]{{
                                            add("voluptates"),
                                            add("fuga"),
                                        }};
                                        settings = CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum.OVERRIDE;
                                    }};;
                                    blockedUrlCategories = new CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories() {{
                                        categories = new String[]{{
                                            add("soluta"),
                                            add("porro"),
                                            add("nesciunt"),
                                        }};
                                        settings = CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum.OVERRIDE;
                                    }};;
                                    blockedUrlPatterns = new CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns() {{
                                        patterns = new String[]{{
                                            add("nesciunt"),
                                            add("deserunt"),
                                        }};
                                        settings = CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum.NETWORK_DEFAULT;
                                    }};;
                                }};;
                                firewallAndTrafficShaping = new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping() {{
                                    l3FirewallRules = new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules[]{{
                                        add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules("unde", "corrupti", "deserunt") {{
                                            comment = "cum";
                                            destCidr = "consequuntur";
                                            destPort = "voluptate";
                                            policy = "iusto";
                                            protocol = "possimus";
                                        }}),
                                        add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules("exercitationem", "reprehenderit", "suscipit") {{
                                            comment = "itaque";
                                            destCidr = "iste";
                                            destPort = "quibusdam";
                                            policy = "dolore";
                                            protocol = "similique";
                                        }}),
                                    }};
                                    l7FirewallRules = new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules[]{{
                                        add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules() {{
                                            policy = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum.DENY;
                                            type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum.APPLICATION_CATEGORY;
                                            value = "ad";
                                        }}),
                                        add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules() {{
                                            policy = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum.DENY;
                                            type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum.APPLICATION_CATEGORY;
                                            value = "numquam";
                                        }}),
                                        add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules() {{
                                            policy = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum.DENY;
                                            type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum.HOST;
                                            value = "sunt";
                                        }}),
                                        add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules() {{
                                            policy = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum.DENY;
                                            type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum.APPLICATION;
                                            value = "dolor";
                                        }}),
                                    }};
                                    settings = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum.CUSTOM;
                                    trafficShapingRules = new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules[]{{
                                        add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules(                new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[]{{
                                                            add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION, "eos") {{
                                                                type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.LOCAL_NET;
                                                                value = "facere";
                                                            }}),
                                                            add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.PORT, "consectetur") {{
                                                                type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION;
                                                                value = "accusamus";
                                                            }}),
                                                            add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION_CATEGORY, "nam") {{
                                                                type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.PORT;
                                                                value = "illo";
                                                            }}),
                                                            add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.LOCAL_NET, "nulla") {{
                                                                type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION_CATEGORY;
                                                                value = "eaque";
                                                            }}),
                                                        }}) {{
                                            definitions = new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[]{{
                                                add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.HOST, "ex") {{
                                                    type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.PORT;
                                                    value = "aperiam";
                                                }}),
                                                add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION_CATEGORY, "voluptatibus") {{
                                                    type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION_CATEGORY;
                                                    value = "nobis";
                                                }}),
                                                add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.LOCAL_NET, "numquam") {{
                                                    type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.LOCAL_NET;
                                                    value = "ducimus";
                                                }}),
                                            }};
                                            dscpTagValue = 950823L;
                                            pcpTagValue = 627954L;
                                            perClientBandwidthLimits = new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits() {{
                                                bandwidthLimits = new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits() {{
                                                    limitDown = 7571L;
                                                    limitUp = 144941L;
                                                }};
                                                settings = "sequi";
                                            }};
                                            priority = "itaque";
                                        }}),
                                        add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules(                new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[]{{
                                                            add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.HOST, "ex") {{
                                                                type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION_CATEGORY;
                                                                value = "accusamus";
                                                            }}),
                                                        }}) {{
                                            definitions = new org.openapis.openapi.models.operations.CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[]{{
                                                add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION, "corporis") {{
                                                    type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.LOCAL_NET;
                                                    value = "numquam";
                                                }}),
                                                add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.IP_RANGE, "quam") {{
                                                    type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.PORT;
                                                    value = "corporis";
                                                }}),
                                                add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.PORT, "quas") {{
                                                    type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION;
                                                    value = "eius";
                                                }}),
                                                add(new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.PORT, "aliquid") {{
                                                    type = CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.PORT;
                                                    value = "repellendus";
                                                }}),
                                            }};
                                            dscpTagValue = 901121L;
                                            pcpTagValue = 280175L;
                                            perClientBandwidthLimits = new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits() {{
                                                bandwidthLimits = new CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits() {{
                                                    limitDown = 556432L;
                                                    limitUp = 934489L;
                                                }};
                                                settings = "necessitatibus";
                                            }};
                                            priority = "quos";
                                        }}),
                                    }};
                                }};;
                                scheduling = new CreateNetworkGroupPolicyRequestBodyScheduling() {{
                                    enabled = false;
                                    friday = new CreateNetworkGroupPolicyRequestBodySchedulingFriday() {{
                                        active = false;
                                        from = "blanditiis";
                                        to = "quaerat";
                                    }};;
                                    monday = new CreateNetworkGroupPolicyRequestBodySchedulingMonday() {{
                                        active = false;
                                        from = "et";
                                        to = "maiores";
                                    }};;
                                    saturday = new CreateNetworkGroupPolicyRequestBodySchedulingSaturday() {{
                                        active = false;
                                        from = "accusantium";
                                        to = "consectetur";
                                    }};;
                                    sunday = new CreateNetworkGroupPolicyRequestBodySchedulingSunday() {{
                                        active = false;
                                        from = "expedita";
                                        to = "quibusdam";
                                    }};;
                                    thursday = new CreateNetworkGroupPolicyRequestBodySchedulingThursday() {{
                                        active = false;
                                        from = "soluta";
                                        to = "veniam";
                                    }};;
                                    tuesday = new CreateNetworkGroupPolicyRequestBodySchedulingTuesday() {{
                                        active = false;
                                        from = "nihil";
                                        to = "beatae";
                                    }};;
                                    wednesday = new CreateNetworkGroupPolicyRequestBodySchedulingWednesday() {{
                                        active = false;
                                        from = "pariatur";
                                        to = "accusantium";
                                    }};;
                                }};;
                                splashAuthSettings = CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum.NETWORK_DEFAULT;
                                vlanTagging = new CreateNetworkGroupPolicyRequestBodyVlanTagging() {{
                                    settings = CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum.NETWORK_DEFAULT;
                                    vlanId = "eligendi";
                                }};;
                            }};, "veritatis");            

            CreateNetworkGroupPolicyResponse res = sdk.networks.createNetworkGroupPolicy(req);

            if (res.createNetworkGroupPolicy201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkMerakiAuthUser

Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkMerakiAuthUserRequest;
import org.openapis.openapi.models.operations.CreateNetworkMerakiAuthUserRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum;
import org.openapis.openapi.models.operations.CreateNetworkMerakiAuthUserRequestBodyAuthorizations;
import org.openapis.openapi.models.operations.CreateNetworkMerakiAuthUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkMerakiAuthUserRequest req = new CreateNetworkMerakiAuthUserRequest(                new CreateNetworkMerakiAuthUserRequestBody(                new org.openapis.openapi.models.operations.CreateNetworkMerakiAuthUserRequestBodyAuthorizations[]{{
                                                add(new CreateNetworkMerakiAuthUserRequestBodyAuthorizations() {{
                                                    expiresAt = "quisquam";
                                                    ssidNumber = 385251L;
                                                }}),
                                                add(new CreateNetworkMerakiAuthUserRequestBodyAuthorizations() {{
                                                    expiresAt = "quaerat";
                                                    ssidNumber = 779156L;
                                                }}),
                                            }}, "dicta") {{
                                accountType = CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum.CLIENT_VPN;
                                emailPasswordToUser = false;
                                isAdmin = false;
                                name = "Kayla Hudson I";
                                password = "cum";
                            }};, "recusandae");            

            CreateNetworkMerakiAuthUserResponse res = sdk.networks.createNetworkMerakiAuthUser(req);

            if (res.createNetworkMerakiAuthUser201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkMqttBroker

Add an MQTT broker

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkMqttBrokerRequest;
import org.openapis.openapi.models.operations.CreateNetworkMqttBrokerRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkMqttBrokerRequestBodySecurity;
import org.openapis.openapi.models.operations.CreateNetworkMqttBrokerRequestBodySecuritySecurity;
import org.openapis.openapi.models.operations.CreateNetworkMqttBrokerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkMqttBrokerRequest req = new CreateNetworkMqttBrokerRequest(                new CreateNetworkMqttBrokerRequestBody("dicta", "tempore", 467716L) {{
                                authentication = new java.util.HashMap<String, Object>() {{
                                    put("dignissimos", "aut");
                                    put("totam", "at");
                                }};
                                security = new CreateNetworkMqttBrokerRequestBodySecurity() {{
                                    mode = "laborum";
                                    security = new CreateNetworkMqttBrokerRequestBodySecuritySecurity() {{
                                        caCertificate = "repudiandae";
                                        verifyHostnames = false;
                                    }};;
                                }};;
                            }};, "perferendis");            

            CreateNetworkMqttBrokerResponse res = sdk.networks.createNetworkMqttBroker(req);

            if (res.createNetworkMqttBroker201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkPiiRequest

Submit a new delete or restrict processing PII request

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkPiiRequestRequest;
import org.openapis.openapi.models.operations.CreateNetworkPiiRequestRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkPiiRequestRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.CreateNetworkPiiRequestResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkPiiRequestRequest req = new CreateNetworkPiiRequestRequest("explicabo") {{
                requestBody = new CreateNetworkPiiRequestRequestBody() {{
                    datasets = new String[]{{
                        add("esse"),
                        add("quae"),
                        add("non"),
                    }};
                    email = "Bailey.Boehm@hotmail.com";
                    mac = "natus";
                    smDeviceId = "magnam";
                    smUserId = "non";
                    type = CreateNetworkPiiRequestRequestBodyTypeEnum.RESTRICT_PROCESSING;
                    username = "Oral.Koepp7";
                }};;
            }};            

            CreateNetworkPiiRequestResponse res = sdk.networks.createNetworkPiiRequest(req);

            if (res.createNetworkPiiRequest201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkWebhooksHttpServer

Add an HTTP server to a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksHttpServerRequest;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksHttpServerRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksHttpServerRequestBodyPayloadTemplate;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksHttpServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkWebhooksHttpServerRequest req = new CreateNetworkWebhooksHttpServerRequest(                new CreateNetworkWebhooksHttpServerRequestBody("necessitatibus", "reprehenderit") {{
                                payloadTemplate = new CreateNetworkWebhooksHttpServerRequestBodyPayloadTemplate() {{
                                    name = "Saul Hudson";
                                    payloadTemplateId = "quo";
                                }};;
                                sharedSecret = "unde";
                            }};, "dolores");            

            CreateNetworkWebhooksHttpServerResponse res = sdk.networks.createNetworkWebhooksHttpServer(req);

            if (res.createNetworkWebhooksHttpServer201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkWebhooksPayloadTemplate

Create a webhook payload template for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksPayloadTemplateRequest;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksPayloadTemplateRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksPayloadTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkWebhooksPayloadTemplateRequest req = new CreateNetworkWebhooksPayloadTemplateRequest(                new CreateNetworkWebhooksPayloadTemplateRequestBody("officia") {{
                                body = "amet";
                                bodyFile = "amet";
                                headers = new org.openapis.openapi.models.operations.CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders[]{{
                                    add(new CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders() {{
                                        name = "Kenny Littel";
                                        template = "reprehenderit";
                                    }}),
                                    add(new CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders() {{
                                        name = "Juana Dickens";
                                        template = "recusandae";
                                    }}),
                                }};
                                headersFile = "quis";
                            }};, "animi");            

            CreateNetworkWebhooksPayloadTemplateResponse res = sdk.networks.createNetworkWebhooksPayloadTemplate(req);

            if (res.createNetworkWebhooksPayloadTemplate201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkWebhooksWebhookTest

Send a test webhook for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksWebhookTestRequest;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksWebhookTestRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkWebhooksWebhookTestResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkWebhooksWebhookTestRequest req = new CreateNetworkWebhooksWebhookTestRequest(                new CreateNetworkWebhooksWebhookTestRequestBody("ipsum") {{
                                alertTypeId = "rerum";
                                payloadTemplateId = "fugiat";
                                payloadTemplateName = "aspernatur";
                                sharedSecret = "dolor";
                            }};, "dicta");            

            CreateNetworkWebhooksWebhookTestResponse res = sdk.networks.createNetworkWebhooksWebhookTest(req);

            if (res.createNetworkWebhooksWebhookTest201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createOrganizationNetwork

Create a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrganizationNetworkRequest;
import org.openapis.openapi.models.operations.CreateOrganizationNetworkRequestBody;
import org.openapis.openapi.models.operations.CreateOrganizationNetworkRequestBodyProductTypesEnum;
import org.openapis.openapi.models.operations.CreateOrganizationNetworkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationNetworkRequest req = new CreateOrganizationNetworkRequest(                new CreateOrganizationNetworkRequestBody("blanditiis",                 new org.openapis.openapi.models.operations.CreateOrganizationNetworkRequestBodyProductTypesEnum[]{{
                                                add(CreateOrganizationNetworkRequestBodyProductTypesEnum.CELLULAR_GATEWAY),
                                                add(CreateOrganizationNetworkRequestBodyProductTypesEnum.CAMERA),
                                                add(CreateOrganizationNetworkRequestBodyProductTypesEnum.CAMERA),
                                                add(CreateOrganizationNetworkRequestBodyProductTypesEnum.CAMERA),
                                            }}) {{
                                copyFromNetworkId = "laborum";
                                notes = "totam";
                                tags = new String[]{{
                                    add("earum"),
                                    add("fuga"),
                                }};
                                timeZone = "sint";
                            }};, "suscipit");            

            CreateOrganizationNetworkResponse res = sdk.networks.createOrganizationNetwork(req);

            if (res.createOrganizationNetwork201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deferNetworkFirmwareUpgradesStagedEvents

Postpone by 1 week all pending staged upgrade stages for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeferNetworkFirmwareUpgradesStagedEventsRequest;
import org.openapis.openapi.models.operations.DeferNetworkFirmwareUpgradesStagedEventsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeferNetworkFirmwareUpgradesStagedEventsRequest req = new DeferNetworkFirmwareUpgradesStagedEventsRequest("assumenda");            

            DeferNetworkFirmwareUpgradesStagedEventsResponse res = sdk.networks.deferNetworkFirmwareUpgradesStagedEvents(req);

            if (res.deferNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetwork

Delete a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkRequest;
import org.openapis.openapi.models.operations.DeleteNetworkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkRequest req = new DeleteNetworkRequest("sint");            

            DeleteNetworkResponse res = sdk.networks.deleteNetwork(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkFirmwareUpgradesStagedGroup

Delete a Staged Upgrade Group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkFirmwareUpgradesStagedGroupRequest;
import org.openapis.openapi.models.operations.DeleteNetworkFirmwareUpgradesStagedGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkFirmwareUpgradesStagedGroupRequest req = new DeleteNetworkFirmwareUpgradesStagedGroupRequest("placeat", "animi");            

            DeleteNetworkFirmwareUpgradesStagedGroupResponse res = sdk.networks.deleteNetworkFirmwareUpgradesStagedGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkFloorPlan

Destroy a floor plan

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkFloorPlanRequest;
import org.openapis.openapi.models.operations.DeleteNetworkFloorPlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkFloorPlanRequest req = new DeleteNetworkFloorPlanRequest("nihil", "corporis");            

            DeleteNetworkFloorPlanResponse res = sdk.networks.deleteNetworkFloorPlan(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkGroupPolicy

Delete a group policy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkGroupPolicyRequest;
import org.openapis.openapi.models.operations.DeleteNetworkGroupPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkGroupPolicyRequest req = new DeleteNetworkGroupPolicyRequest("laboriosam", "laboriosam");            

            DeleteNetworkGroupPolicyResponse res = sdk.networks.deleteNetworkGroupPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkMerakiAuthUser

Deauthorize a user. To reauthorize a user after deauthorizing them, POST to this endpoint. (Currently, 802.1X RADIUS, splash guest, and client VPN users can be deauthorized.)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkMerakiAuthUserRequest;
import org.openapis.openapi.models.operations.DeleteNetworkMerakiAuthUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkMerakiAuthUserRequest req = new DeleteNetworkMerakiAuthUserRequest("dolores", "voluptatem");            

            DeleteNetworkMerakiAuthUserResponse res = sdk.networks.deleteNetworkMerakiAuthUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkMqttBroker

Delete an MQTT broker

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkMqttBrokerRequest;
import org.openapis.openapi.models.operations.DeleteNetworkMqttBrokerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkMqttBrokerRequest req = new DeleteNetworkMqttBrokerRequest("dolores", "molestiae");            

            DeleteNetworkMqttBrokerResponse res = sdk.networks.deleteNetworkMqttBroker(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkPiiRequest

Delete a restrict processing PII request

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests/{requestId}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkPiiRequestRequest;
import org.openapis.openapi.models.operations.DeleteNetworkPiiRequestResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkPiiRequestRequest req = new DeleteNetworkPiiRequestRequest("minus", "soluta");            

            DeleteNetworkPiiRequestResponse res = sdk.networks.deleteNetworkPiiRequest(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkWebhooksHttpServer

Delete an HTTP server from a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkWebhooksHttpServerRequest;
import org.openapis.openapi.models.operations.DeleteNetworkWebhooksHttpServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkWebhooksHttpServerRequest req = new DeleteNetworkWebhooksHttpServerRequest("fugiat", "ratione");            

            DeleteNetworkWebhooksHttpServerResponse res = sdk.networks.deleteNetworkWebhooksHttpServer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkWebhooksPayloadTemplate

Destroy a webhook payload template for a network. Does not work for included templates ('wpt_00001', 'wpt_00002', 'wpt_00003', 'wpt_00004', 'wpt_00005' or 'wpt_00006')

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkWebhooksPayloadTemplateRequest;
import org.openapis.openapi.models.operations.DeleteNetworkWebhooksPayloadTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkWebhooksPayloadTemplateRequest req = new DeleteNetworkWebhooksPayloadTemplateRequest("tempore", "maiores");            

            DeleteNetworkWebhooksPayloadTemplateResponse res = sdk.networks.deleteNetworkWebhooksPayloadTemplate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetwork

Return a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkRequest;
import org.openapis.openapi.models.operations.GetNetworkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkRequest req = new GetNetworkRequest("repudiandae");            

            GetNetworkResponse res = sdk.networks.getNetwork(req);

            if (res.getNetwork200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("illum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkAlertsHistoryRequest req = new GetNetworkAlertsHistoryRequest("autem") {{
                endingBefore = "nesciunt";
                perPage = 788509L;
                startingAfter = "autem";
            }};            

            GetNetworkAlertsHistoryResponse res = sdk.networks.getNetworkAlertsHistory(req);

            if (res.getNetworkAlertsHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkAlertsSettings

Return the alert configuration for this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkAlertsSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkAlertsSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkAlertsSettingsRequest req = new GetNetworkAlertsSettingsRequest("amet");            

            GetNetworkAlertsSettingsResponse res = sdk.networks.getNetworkAlertsSettings(req);

            if (res.getNetworkAlertsSettings200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("itaque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkBluetoothClientRequest req = new GetNetworkBluetoothClientRequest("reprehenderit", "repellat") {{
                connectivityHistoryTimespan = 980514L;
                includeConnectivityHistory = false;
            }};            

            GetNetworkBluetoothClientResponse res = sdk.networks.getNetworkBluetoothClient(req);

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
                .setSecurity(new Security("tempore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkBluetoothClientsRequest req = new GetNetworkBluetoothClientsRequest("iusto") {{
                endingBefore = "veniam";
                includeConnectivityHistory = false;
                perPage = 995123L;
                startingAfter = "delectus";
                t0 = "architecto";
                timespan = 409.49;
            }};            

            GetNetworkBluetoothClientsResponse res = sdk.networks.getNetworkBluetoothClients(req);

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
                .setSecurity(new Security("dolores") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientRequest req = new GetNetworkClientRequest("ea", "explicabo");            

            GetNetworkClientResponse res = sdk.networks.getNetworkClient(req);

            if (res.getNetworkClient200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkClientPolicy

Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientPolicyRequest;
import org.openapis.openapi.models.operations.GetNetworkClientPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientPolicyRequest req = new GetNetworkClientPolicyRequest("ea", "laudantium");            

            GetNetworkClientPolicyResponse res = sdk.networks.getNetworkClientPolicy(req);

            if (res.getNetworkClientPolicy200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkClientSplashAuthorizationStatus

Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientSplashAuthorizationStatusRequest;
import org.openapis.openapi.models.operations.GetNetworkClientSplashAuthorizationStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientSplashAuthorizationStatusRequest req = new GetNetworkClientSplashAuthorizationStatusRequest("dolor", "temporibus");            

            GetNetworkClientSplashAuthorizationStatusResponse res = sdk.networks.getNetworkClientSplashAuthorizationStatus(req);

            if (res.getNetworkClientSplashAuthorizationStatus200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("ex") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientTrafficHistoryRequest req = new GetNetworkClientTrafficHistoryRequest("totam", "expedita") {{
                endingBefore = "fugiat";
                perPage = 777583L;
                startingAfter = "a";
            }};            

            GetNetworkClientTrafficHistoryResponse res = sdk.networks.getNetworkClientTrafficHistory(req);

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
                .setSecurity(new Security("distinctio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientUsageHistoryRequest req = new GetNetworkClientUsageHistoryRequest("alias", "perferendis");            

            GetNetworkClientUsageHistoryResponse res = sdk.networks.getNetworkClientUsageHistory(req);

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
                .setSecurity(new Security("magni") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientsRequest req = new GetNetworkClientsRequest("laborum") {{
                description = "eos";
                endingBefore = "adipisci";
                ip = "asperiores";
                ip6 = "deserunt";
                ip6Local = "necessitatibus";
                mac = "suscipit";
                os = "beatae";
                perPage = 573501L;
                recentDeviceConnections = new org.openapis.openapi.models.operations.GetNetworkClientsRecentDeviceConnectionsEnum[]{{
                    add(GetNetworkClientsRecentDeviceConnectionsEnum.WIRED),
                    add(GetNetworkClientsRecentDeviceConnectionsEnum.WIRED),
                    add(GetNetworkClientsRecentDeviceConnectionsEnum.WIRELESS),
                    add(GetNetworkClientsRecentDeviceConnectionsEnum.WIRED),
                }};
                startingAfter = "saepe";
                statuses = new org.openapis.openapi.models.operations.GetNetworkClientsStatusesEnum[]{{
                    add(GetNetworkClientsStatusesEnum.OFFLINE),
                    add(GetNetworkClientsStatusesEnum.OFFLINE),
                    add(GetNetworkClientsStatusesEnum.OFFLINE),
                    add(GetNetworkClientsStatusesEnum.OFFLINE),
                }};
                t0 = "earum";
                timespan = 4614.81;
                vlan = "corrupti";
            }};            

            GetNetworkClientsResponse res = sdk.networks.getNetworkClients(req);

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
                .setSecurity(new Security("illo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientsApplicationUsageRequest req = new GetNetworkClientsApplicationUsageRequest("repellendus", "fuga") {{
                endingBefore = "tenetur";
                perPage = 100655L;
                ssidNumber = GetNetworkClientsApplicationUsageSsidNumberEnum.THIRTEEN;
                startingAfter = "delectus";
                t0 = "totam";
                t1 = "necessitatibus";
                timespan = 9773.11;
            }};            

            GetNetworkClientsApplicationUsageResponse res = sdk.networks.getNetworkClientsApplicationUsage(req);

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
                .setSecurity(new Security("eaque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientsBandwidthUsageHistoryRequest req = new GetNetworkClientsBandwidthUsageHistoryRequest("iure") {{
                endingBefore = "doloremque";
                perPage = 249728L;
                startingAfter = "vero";
                t0 = "at";
                t1 = "veritatis";
                timespan = 8820.22;
            }};            

            GetNetworkClientsBandwidthUsageHistoryResponse res = sdk.networks.getNetworkClientsBandwidthUsageHistory(req);

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
                .setSecurity(new Security("consequuntur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientsOverviewRequest req = new GetNetworkClientsOverviewRequest("ipsa") {{
                resolution = 633301L;
                t0 = "cum";
                t1 = "dolorem";
                timespan = 3351.33;
            }};            

            GetNetworkClientsOverviewResponse res = sdk.networks.getNetworkClientsOverview(req);

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
                .setSecurity(new Security("quis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientsUsageHistoriesRequest req = new GetNetworkClientsUsageHistoriesRequest("nulla", "cum") {{
                endingBefore = "velit";
                perPage = 245500L;
                ssidNumber = GetNetworkClientsUsageHistoriesSsidNumberEnum.EIGHT;
                startingAfter = "dicta";
                t0 = "explicabo";
                t1 = "quod";
                timespan = 8833.3;
            }};            

            GetNetworkClientsUsageHistoriesResponse res = sdk.networks.getNetworkClientsUsageHistories(req);

            if (res.getNetworkClientsUsageHistories200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkDevices

List the devices in a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkDevicesRequest;
import org.openapis.openapi.models.operations.GetNetworkDevicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkDevicesRequest req = new GetNetworkDevicesRequest("aspernatur");            

            GetNetworkDevicesResponse res = sdk.networks.getNetworkDevices(req);

            if (res.getNetworkDevices200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("tempora") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkEventsRequest req = new GetNetworkEventsRequest("deserunt") {{
                clientIp = "minima";
                clientMac = "amet";
                clientName = "incidunt";
                deviceMac = "eligendi";
                deviceName = "debitis";
                deviceSerial = "qui";
                endingBefore = "dicta";
                excludedEventTypes = new String[]{{
                    add("eaque"),
                    add("praesentium"),
                    add("dicta"),
                    add("facilis"),
                }};
                includedEventTypes = new String[]{{
                    add("totam"),
                }};
                perPage = 28052L;
                productType = GetNetworkEventsProductTypeEnum.SWITCH_;
                smDeviceMac = "modi";
                smDeviceName = "omnis";
                startingAfter = "impedit";
            }};            

            GetNetworkEventsResponse res = sdk.networks.getNetworkEvents(req);

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
                .setSecurity(new Security("amet") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkEventsEventTypesRequest req = new GetNetworkEventsEventTypesRequest("accusantium");            

            GetNetworkEventsEventTypesResponse res = sdk.networks.getNetworkEventsEventTypes(req);

            if (res.getNetworkEventsEventTypes200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkFirmwareUpgrades

Get firmware upgrade information for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkFirmwareUpgradesRequest;
import org.openapis.openapi.models.operations.GetNetworkFirmwareUpgradesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkFirmwareUpgradesRequest req = new GetNetworkFirmwareUpgradesRequest("repellendus");            

            GetNetworkFirmwareUpgradesResponse res = sdk.networks.getNetworkFirmwareUpgrades(req);

            if (res.getNetworkFirmwareUpgrades200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkFirmwareUpgradesStagedEvents

Get the Staged Upgrade Event from a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkFirmwareUpgradesStagedEventsRequest;
import org.openapis.openapi.models.operations.GetNetworkFirmwareUpgradesStagedEventsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkFirmwareUpgradesStagedEventsRequest req = new GetNetworkFirmwareUpgradesStagedEventsRequest("quam");            

            GetNetworkFirmwareUpgradesStagedEventsResponse res = sdk.networks.getNetworkFirmwareUpgradesStagedEvents(req);

            if (res.getNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkFirmwareUpgradesStagedGroup

Get a Staged Upgrade Group from a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkFirmwareUpgradesStagedGroupRequest;
import org.openapis.openapi.models.operations.GetNetworkFirmwareUpgradesStagedGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkFirmwareUpgradesStagedGroupRequest req = new GetNetworkFirmwareUpgradesStagedGroupRequest("voluptates", "ducimus");            

            GetNetworkFirmwareUpgradesStagedGroupResponse res = sdk.networks.getNetworkFirmwareUpgradesStagedGroup(req);

            if (res.getNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkFirmwareUpgradesStagedGroups

List of Staged Upgrade Groups in a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkFirmwareUpgradesStagedGroupsRequest;
import org.openapis.openapi.models.operations.GetNetworkFirmwareUpgradesStagedGroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkFirmwareUpgradesStagedGroupsRequest req = new GetNetworkFirmwareUpgradesStagedGroupsRequest("amet");            

            GetNetworkFirmwareUpgradesStagedGroupsResponse res = sdk.networks.getNetworkFirmwareUpgradesStagedGroups(req);

            if (res.getNetworkFirmwareUpgradesStagedGroups200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkFirmwareUpgradesStagedStages

Order of Staged Upgrade Groups in a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkFirmwareUpgradesStagedStagesRequest;
import org.openapis.openapi.models.operations.GetNetworkFirmwareUpgradesStagedStagesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkFirmwareUpgradesStagedStagesRequest req = new GetNetworkFirmwareUpgradesStagedStagesRequest("natus");            

            GetNetworkFirmwareUpgradesStagedStagesResponse res = sdk.networks.getNetworkFirmwareUpgradesStagedStages(req);

            if (res.getNetworkFirmwareUpgradesStagedStages200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkFloorPlan

Find a floor plan by ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkFloorPlanRequest;
import org.openapis.openapi.models.operations.GetNetworkFloorPlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkFloorPlanRequest req = new GetNetworkFloorPlanRequest("magnam", "et");            

            GetNetworkFloorPlanResponse res = sdk.networks.getNetworkFloorPlan(req);

            if (res.getNetworkFloorPlan200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkFloorPlans

List the floor plans that belong to your network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkFloorPlansRequest;
import org.openapis.openapi.models.operations.GetNetworkFloorPlansResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkFloorPlansRequest req = new GetNetworkFloorPlansRequest("eveniet");            

            GetNetworkFloorPlansResponse res = sdk.networks.getNetworkFloorPlans(req);

            if (res.getNetworkFloorPlans200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkGroupPolicies

List the group policies in a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkGroupPoliciesRequest;
import org.openapis.openapi.models.operations.GetNetworkGroupPoliciesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkGroupPoliciesRequest req = new GetNetworkGroupPoliciesRequest("nihil");            

            GetNetworkGroupPoliciesResponse res = sdk.networks.getNetworkGroupPolicies(req);

            if (res.getNetworkGroupPolicies200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkGroupPolicy

Display a group policy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkGroupPolicyRequest;
import org.openapis.openapi.models.operations.GetNetworkGroupPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkGroupPolicyRequest req = new GetNetworkGroupPolicyRequest("iusto", "hic");            

            GetNetworkGroupPolicyResponse res = sdk.networks.getNetworkGroupPolicy(req);

            if (res.getNetworkGroupPolicy200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkHealthAlerts

Return all global alerts on this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkHealthAlertsRequest;
import org.openapis.openapi.models.operations.GetNetworkHealthAlertsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkHealthAlertsRequest req = new GetNetworkHealthAlertsRequest("commodi");            

            GetNetworkHealthAlertsResponse res = sdk.networks.getNetworkHealthAlerts(req);

            if (res.getNetworkHealthAlerts200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkMerakiAuthUser

Return the Meraki Auth splash guest, RADIUS, or client VPN user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkMerakiAuthUserRequest;
import org.openapis.openapi.models.operations.GetNetworkMerakiAuthUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkMerakiAuthUserRequest req = new GetNetworkMerakiAuthUserRequest("consequatur", "distinctio");            

            GetNetworkMerakiAuthUserResponse res = sdk.networks.getNetworkMerakiAuthUser(req);

            if (res.getNetworkMerakiAuthUser200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkMerakiAuthUsers

List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkMerakiAuthUsersRequest;
import org.openapis.openapi.models.operations.GetNetworkMerakiAuthUsersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkMerakiAuthUsersRequest req = new GetNetworkMerakiAuthUsersRequest("rerum");            

            GetNetworkMerakiAuthUsersResponse res = sdk.networks.getNetworkMerakiAuthUsers(req);

            if (res.getNetworkMerakiAuthUsers200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkMqttBroker

Return an MQTT broker

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkMqttBrokerRequest;
import org.openapis.openapi.models.operations.GetNetworkMqttBrokerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkMqttBrokerRequest req = new GetNetworkMqttBrokerRequest("dicta", "corporis");            

            GetNetworkMqttBrokerResponse res = sdk.networks.getNetworkMqttBroker(req);

            if (res.getNetworkMqttBroker200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkMqttBrokers

List the MQTT brokers for this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkMqttBrokersRequest;
import org.openapis.openapi.models.operations.GetNetworkMqttBrokersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkMqttBrokersRequest req = new GetNetworkMqttBrokersRequest("illum");            

            GetNetworkMqttBrokersResponse res = sdk.networks.getNetworkMqttBrokers(req);

            if (res.getNetworkMqttBrokers200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkNetflow

Return the NetFlow traffic reporting settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkNetflowRequest;
import org.openapis.openapi.models.operations.GetNetworkNetflowResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkNetflowRequest req = new GetNetworkNetflowRequest("laboriosam");            

            GetNetworkNetflowResponse res = sdk.networks.getNetworkNetflow(req);

            if (res.getNetworkNetflow200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("praesentium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkNetworkHealthChannelUtilizationRequest req = new GetNetworkNetworkHealthChannelUtilizationRequest("magnam") {{
                endingBefore = "voluptatem";
                perPage = 800727L;
                resolution = 766898L;
                startingAfter = "illo";
                t0 = "ad";
                t1 = "vero";
                timespan = 4367.22;
            }};            

            GetNetworkNetworkHealthChannelUtilizationResponse res = sdk.networks.getNetworkNetworkHealthChannelUtilization(req);

            if (res.getNetworkNetworkHealthChannelUtilization200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkPiiPiiKeys

List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key "0" containing the applicable keys.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/piiKeys
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkPiiPiiKeysRequest;
import org.openapis.openapi.models.operations.GetNetworkPiiPiiKeysResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("autem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkPiiPiiKeysRequest req = new GetNetworkPiiPiiKeysRequest("accusamus") {{
                bluetoothMac = "minima";
                email = "Daisha_Anderson@hotmail.com";
                imei = "tenetur";
                mac = "optio";
                serial = "ullam";
                username = "Vernon.Feeney96";
            }};            

            GetNetworkPiiPiiKeysResponse res = sdk.networks.getNetworkPiiPiiKeys(req);

            if (res.getNetworkPiiPiiKeys200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkPiiRequest

Return a PII request

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests/{requestId}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkPiiRequestRequest;
import org.openapis.openapi.models.operations.GetNetworkPiiRequestResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkPiiRequestRequest req = new GetNetworkPiiRequestRequest("maxime", "adipisci");            

            GetNetworkPiiRequestResponse res = sdk.networks.getNetworkPiiRequest(req);

            if (res.getNetworkPiiRequest200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkPiiRequests

List the PII requests for this network or organization

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkPiiRequestsRequest;
import org.openapis.openapi.models.operations.GetNetworkPiiRequestsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkPiiRequestsRequest req = new GetNetworkPiiRequestsRequest("deserunt");            

            GetNetworkPiiRequestsResponse res = sdk.networks.getNetworkPiiRequests(req);

            if (res.getNetworkPiiRequests200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkPiiSmDevicesForKey

Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/smDevicesForKey
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkPiiSmDevicesForKeyRequest;
import org.openapis.openapi.models.operations.GetNetworkPiiSmDevicesForKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkPiiSmDevicesForKeyRequest req = new GetNetworkPiiSmDevicesForKeyRequest("expedita") {{
                bluetoothMac = "excepturi";
                email = "Pinkie16@yahoo.com";
                imei = "nostrum";
                mac = "distinctio";
                serial = "aspernatur";
                username = "Gus20";
            }};            

            GetNetworkPiiSmDevicesForKeyResponse res = sdk.networks.getNetworkPiiSmDevicesForKey(req);

            if (res.getNetworkPiiSmDevicesForKey200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkPiiSmOwnersForKey

Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/smOwnersForKey
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkPiiSmOwnersForKeyRequest;
import org.openapis.openapi.models.operations.GetNetworkPiiSmOwnersForKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkPiiSmOwnersForKeyRequest req = new GetNetworkPiiSmOwnersForKeyRequest("optio") {{
                bluetoothMac = "magni";
                email = "Wilburn_Roberts@hotmail.com";
                imei = "omnis";
                mac = "consequatur";
                serial = "eum";
                username = "Bessie75";
            }};            

            GetNetworkPiiSmOwnersForKeyResponse res = sdk.networks.getNetworkPiiSmOwnersForKey(req);

            if (res.getNetworkPiiSmOwnersForKey200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkPoliciesByClient

Get policies for all clients with policies

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkPoliciesByClientRequest;
import org.openapis.openapi.models.operations.GetNetworkPoliciesByClientResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkPoliciesByClientRequest req = new GetNetworkPoliciesByClientRequest("aperiam") {{
                endingBefore = "fuga";
                perPage = 641371L;
                startingAfter = "consequuntur";
                t0 = "reiciendis";
                timespan = 5181.25;
            }};            

            GetNetworkPoliciesByClientResponse res = sdk.networks.getNetworkPoliciesByClient(req);

            if (res.getNetworkPoliciesByClient200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSettings

Return the settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSettingsRequest req = new GetNetworkSettingsRequest("perferendis");            

            GetNetworkSettingsResponse res = sdk.networks.getNetworkSettings(req);

            if (res.getNetworkSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSnmp

Return the SNMP settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSnmpRequest;
import org.openapis.openapi.models.operations.GetNetworkSnmpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSnmpRequest req = new GetNetworkSnmpRequest("vel");            

            GetNetworkSnmpResponse res = sdk.networks.getNetworkSnmp(req);

            if (res.getNetworkSnmp200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("iste") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSplashLoginAttemptsRequest req = new GetNetworkSplashLoginAttemptsRequest("impedit") {{
                loginIdentifier = "in";
                ssidNumber = GetNetworkSplashLoginAttemptsSsidNumberEnum.TWO;
                timespan = 584575L;
            }};            

            GetNetworkSplashLoginAttemptsResponse res = sdk.networks.getNetworkSplashLoginAttempts(req);

            if (res.getNetworkSplashLoginAttempts200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSyslogServers

List the syslog servers for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSyslogServersRequest;
import org.openapis.openapi.models.operations.GetNetworkSyslogServersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSyslogServersRequest req = new GetNetworkSyslogServersRequest("molestias");            

            GetNetworkSyslogServersResponse res = sdk.networks.getNetworkSyslogServers(req);

            if (res.getNetworkSyslogServers200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("optio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkTopologyLinkLayerRequest req = new GetNetworkTopologyLinkLayerRequest("tempore");            

            GetNetworkTopologyLinkLayerResponse res = sdk.networks.getNetworkTopologyLinkLayer(req);

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
                .setSecurity(new Security("quidem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkTrafficRequest req = new GetNetworkTrafficRequest("ad") {{
                deviceType = GetNetworkTrafficDeviceTypeEnum.APPLIANCE;
                t0 = "eum";
                timespan = 9416.4;
            }};            

            GetNetworkTrafficResponse res = sdk.networks.getNetworkTraffic(req);

            if (res.getNetworkTraffic200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkTrafficAnalysis

Return the traffic analysis settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkTrafficAnalysisRequest;
import org.openapis.openapi.models.operations.GetNetworkTrafficAnalysisResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkTrafficAnalysisRequest req = new GetNetworkTrafficAnalysisRequest("quod");            

            GetNetworkTrafficAnalysisResponse res = sdk.networks.getNetworkTrafficAnalysis(req);

            if (res.getNetworkTrafficAnalysis200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkTrafficShapingApplicationCategories

Returns the application categories for traffic shaping rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkTrafficShapingApplicationCategoriesRequest;
import org.openapis.openapi.models.operations.GetNetworkTrafficShapingApplicationCategoriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkTrafficShapingApplicationCategoriesRequest req = new GetNetworkTrafficShapingApplicationCategoriesRequest("qui");            

            GetNetworkTrafficShapingApplicationCategoriesResponse res = sdk.networks.getNetworkTrafficShapingApplicationCategories(req);

            if (res.getNetworkTrafficShapingApplicationCategories200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkTrafficShapingDscpTaggingOptions

Returns the available DSCP tagging options for your traffic shaping rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkTrafficShapingDscpTaggingOptionsRequest;
import org.openapis.openapi.models.operations.GetNetworkTrafficShapingDscpTaggingOptionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkTrafficShapingDscpTaggingOptionsRequest req = new GetNetworkTrafficShapingDscpTaggingOptionsRequest("porro");            

            GetNetworkTrafficShapingDscpTaggingOptionsResponse res = sdk.networks.getNetworkTrafficShapingDscpTaggingOptions(req);

            if (res.getNetworkTrafficShapingDscpTaggingOptions200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWebhooksHttpServer

Return an HTTP server for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWebhooksHttpServerRequest;
import org.openapis.openapi.models.operations.GetNetworkWebhooksHttpServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWebhooksHttpServerRequest req = new GetNetworkWebhooksHttpServerRequest("numquam", "eos");            

            GetNetworkWebhooksHttpServerResponse res = sdk.networks.getNetworkWebhooksHttpServer(req);

            if (res.getNetworkWebhooksHttpServer200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWebhooksHttpServers

List the HTTP servers for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWebhooksHttpServersRequest;
import org.openapis.openapi.models.operations.GetNetworkWebhooksHttpServersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWebhooksHttpServersRequest req = new GetNetworkWebhooksHttpServersRequest("distinctio");            

            GetNetworkWebhooksHttpServersResponse res = sdk.networks.getNetworkWebhooksHttpServers(req);

            if (res.getNetworkWebhooksHttpServers200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWebhooksPayloadTemplate

Get the webhook payload template for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWebhooksPayloadTemplateRequest;
import org.openapis.openapi.models.operations.GetNetworkWebhooksPayloadTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWebhooksPayloadTemplateRequest req = new GetNetworkWebhooksPayloadTemplateRequest("beatae", "culpa");            

            GetNetworkWebhooksPayloadTemplateResponse res = sdk.networks.getNetworkWebhooksPayloadTemplate(req);

            if (res.getNetworkWebhooksPayloadTemplate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWebhooksPayloadTemplates

List the webhook payload templates for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWebhooksPayloadTemplatesRequest;
import org.openapis.openapi.models.operations.GetNetworkWebhooksPayloadTemplatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWebhooksPayloadTemplatesRequest req = new GetNetworkWebhooksPayloadTemplatesRequest("animi");            

            GetNetworkWebhooksPayloadTemplatesResponse res = sdk.networks.getNetworkWebhooksPayloadTemplates(req);

            if (res.getNetworkWebhooksPayloadTemplates200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWebhooksWebhookTest

Return the status of a webhook test for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWebhooksWebhookTestRequest;
import org.openapis.openapi.models.operations.GetNetworkWebhooksWebhookTestResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWebhooksWebhookTestRequest req = new GetNetworkWebhooksWebhookTestRequest("illo", "fuga");            

            GetNetworkWebhooksWebhookTestResponse res = sdk.networks.getNetworkWebhooksWebhookTest(req);

            if (res.getNetworkWebhooksWebhookTest200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationInventoryOnboardingCloudMonitoringNetworks

Returns list of networks eligible for adding cloud monitored device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationInventoryOnboardingCloudMonitoringNetworksDeviceTypeEnum;
import org.openapis.openapi.models.operations.GetOrganizationInventoryOnboardingCloudMonitoringNetworksRequest;
import org.openapis.openapi.models.operations.GetOrganizationInventoryOnboardingCloudMonitoringNetworksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationInventoryOnboardingCloudMonitoringNetworksRequest req = new GetOrganizationInventoryOnboardingCloudMonitoringNetworksRequest(GetOrganizationInventoryOnboardingCloudMonitoringNetworksDeviceTypeEnum.WIRELESS_CONTROLLER, "officiis") {{
                endingBefore = "expedita";
                perPage = 311881L;
                startingAfter = "dolor";
            }};            

            GetOrganizationInventoryOnboardingCloudMonitoringNetworksResponse res = sdk.networks.getOrganizationInventoryOnboardingCloudMonitoringNetworks(req);

            if (res.getOrganizationInventoryOnboardingCloudMonitoringNetworks202ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationNetworks

List the networks that the user has privileges on in an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationNetworksRequest;
import org.openapis.openapi.models.operations.GetOrganizationNetworksResponse;
import org.openapis.openapi.models.operations.GetOrganizationNetworksTagsFilterTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationNetworksRequest req = new GetOrganizationNetworksRequest("possimus") {{
                configTemplateId = "esse";
                endingBefore = "velit";
                isBoundToConfigTemplate = false;
                perPage = 186833L;
                startingAfter = "repellendus";
                tags = new String[]{{
                    add("provident"),
                    add("porro"),
                    add("laudantium"),
                    add("explicabo"),
                }};
                tagsFilterType = GetOrganizationNetworksTagsFilterTypeEnum.WITH_ANY_TAGS;
            }};            

            GetOrganizationNetworksResponse res = sdk.networks.getOrganizationNetworks(req);

            if (res.getOrganizationNetworks200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## provisionNetworkClients

Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequest;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBody;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyClients;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyDevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid0;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid10;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid11;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid12;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid13;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid14;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid1;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid2;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid3;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid4;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid5;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid6;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid7;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid8;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid9;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid;
import org.openapis.openapi.models.operations.ProvisionNetworkClientsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProvisionNetworkClientsRequest req = new ProvisionNetworkClientsRequest(                new ProvisionNetworkClientsRequestBody(                new org.openapis.openapi.models.operations.ProvisionNetworkClientsRequestBodyClients[]{{
                                                add(new ProvisionNetworkClientsRequestBodyClients("eius") {{
                                                    mac = "fugit";
                                                    name = "Kristen Koelpin";
                                                }}),
                                                add(new ProvisionNetworkClientsRequestBodyClients("officia") {{
                                                    mac = "natus";
                                                    name = "Sidney Wintheiser";
                                                }}),
                                            }}, ProvisionNetworkClientsRequestBodyDevicePolicyEnum.BLOCKED) {{
                                groupPolicyId = "recusandae";
                                policiesBySecurityAppliance = new ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance() {{
                                    devicePolicy = ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum.NORMAL;
                                }};;
                                policiesBySsid = new ProvisionNetworkClientsRequestBodyPoliciesBySsid() {{
                                    zero = new ProvisionNetworkClientsRequestBodyPoliciesBySsid0(ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum.GROUP_POLICY) {{
                                        groupPolicyId = "modi";
                                    }};;
                                    one = new ProvisionNetworkClientsRequestBodyPoliciesBySsid1(ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum.ALLOWED) {{
                                        groupPolicyId = "officiis";
                                    }};;
                                    ten = new ProvisionNetworkClientsRequestBodyPoliciesBySsid10(ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum.NORMAL) {{
                                        groupPolicyId = "optio";
                                    }};;
                                    eleven = new ProvisionNetworkClientsRequestBodyPoliciesBySsid11(ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum.ALLOWED) {{
                                        groupPolicyId = "autem";
                                    }};;
                                    twelve = new ProvisionNetworkClientsRequestBodyPoliciesBySsid12(ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum.GROUP_POLICY) {{
                                        groupPolicyId = "tempore";
                                    }};;
                                    thirteen = new ProvisionNetworkClientsRequestBodyPoliciesBySsid13(ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum.ALLOWED) {{
                                        groupPolicyId = "alias";
                                    }};;
                                    fourteen = new ProvisionNetworkClientsRequestBodyPoliciesBySsid14(ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum.ALLOWED) {{
                                        groupPolicyId = "porro";
                                    }};;
                                    two = new ProvisionNetworkClientsRequestBodyPoliciesBySsid2(ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum.NORMAL) {{
                                        groupPolicyId = "cum";
                                    }};;
                                    three = new ProvisionNetworkClientsRequestBodyPoliciesBySsid3(ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum.ALLOWED) {{
                                        groupPolicyId = "voluptas";
                                    }};;
                                    four = new ProvisionNetworkClientsRequestBodyPoliciesBySsid4(ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum.ALLOWED) {{
                                        groupPolicyId = "ab";
                                    }};;
                                    five = new ProvisionNetworkClientsRequestBodyPoliciesBySsid5(ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum.BLOCKED) {{
                                        groupPolicyId = "eum";
                                    }};;
                                    six = new ProvisionNetworkClientsRequestBodyPoliciesBySsid6(ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum.GROUP_POLICY) {{
                                        groupPolicyId = "alias";
                                    }};;
                                    seven = new ProvisionNetworkClientsRequestBodyPoliciesBySsid7(ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum.ALLOWED) {{
                                        groupPolicyId = "aspernatur";
                                    }};;
                                    eight = new ProvisionNetworkClientsRequestBodyPoliciesBySsid8(ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum.GROUP_POLICY) {{
                                        groupPolicyId = "numquam";
                                    }};;
                                    nine = new ProvisionNetworkClientsRequestBodyPoliciesBySsid9(ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum.NORMAL) {{
                                        groupPolicyId = "accusantium";
                                    }};;
                                }};;
                            }};, "ducimus");            

            ProvisionNetworkClientsResponse res = sdk.networks.provisionNetworkClients(req);

            if (res.provisionNetworkClients201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeNetworkDevices

Remove a single device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveNetworkDevicesRequest;
import org.openapis.openapi.models.operations.RemoveNetworkDevicesRequestBody;
import org.openapis.openapi.models.operations.RemoveNetworkDevicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveNetworkDevicesRequest req = new RemoveNetworkDevicesRequest(                new RemoveNetworkDevicesRequestBody("sunt");, "necessitatibus");            

            RemoveNetworkDevicesResponse res = sdk.networks.removeNetworkDevices(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rollbacksNetworkFirmwareUpgradesStagedEvents

Rollback a Staged Upgrade Event for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequest;
import org.openapis.openapi.models.operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBody;
import org.openapis.openapi.models.operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons;
import org.openapis.openapi.models.operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum;
import org.openapis.openapi.models.operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages;
import org.openapis.openapi.models.operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup;
import org.openapis.openapi.models.operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones;
import org.openapis.openapi.models.operations.RollbacksNetworkFirmwareUpgradesStagedEventsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RollbacksNetworkFirmwareUpgradesStagedEventsRequest req = new RollbacksNetworkFirmwareUpgradesStagedEventsRequest(                new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBody(                new org.openapis.openapi.models.operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages[]{{
                                                add(new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages() {{
                                                    group = new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup("ipsam") {{
                                                        id = "fbd19edd-6d7f-41f5-aefd-49bed6ff3fd9";
                                                    }};
                                                    milestones = new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones("omnis") {{
                                                        scheduledFor = "eaque";
                                                    }};
                                                }}),
                                                add(new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages() {{
                                                    group = new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup("magnam") {{
                                                        id = "e5ecf076-451a-4e3b-ac4c-0df1c5fdfb7c";
                                                    }};
                                                    milestones = new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones("debitis") {{
                                                        scheduledFor = "optio";
                                                    }};
                                                }}),
                                            }}) {{
                                reasons = new org.openapis.openapi.models.operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons[]{{
                                    add(new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons(RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum.OTHER, "veritatis") {{
                                        category = RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum.BROKE_OLD_FEATURES;
                                        comment = "assumenda";
                                    }}),
                                }};
                            }};, "corrupti");            

            RollbacksNetworkFirmwareUpgradesStagedEventsResponse res = sdk.networks.rollbacksNetworkFirmwareUpgradesStagedEvents(req);

            if (res.rollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## splitNetwork

Split a combined network into individual networks for each type of device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SplitNetworkRequest;
import org.openapis.openapi.models.operations.SplitNetworkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            SplitNetworkRequest req = new SplitNetworkRequest("sequi");            

            SplitNetworkResponse res = sdk.networks.splitNetwork(req);

            if (res.splitNetwork200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unbindNetwork

Unbind a network from a template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnbindNetworkRequest;
import org.openapis.openapi.models.operations.UnbindNetworkRequestBody;
import org.openapis.openapi.models.operations.UnbindNetworkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UnbindNetworkRequest req = new UnbindNetworkRequest("voluptas") {{
                requestBody = new UnbindNetworkRequestBody() {{
                    retainConfigs = false;
                }};;
            }};            

            UnbindNetworkResponse res = sdk.networks.unbindNetwork(req);

            if (res.unbindNetwork200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetwork

Update a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkRequest;
import org.openapis.openapi.models.operations.UpdateNetworkRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkRequest req = new UpdateNetworkRequest("perspiciatis") {{
                requestBody = new UpdateNetworkRequestBody() {{
                    enrollmentString = "sequi";
                    name = "Jerry Sipes";
                    notes = "porro";
                    tags = new String[]{{
                        add("mollitia"),
                        add("quo"),
                        add("asperiores"),
                    }};
                    timeZone = "consequuntur";
                }};;
            }};            

            UpdateNetworkResponse res = sdk.networks.updateNetwork(req);

            if (res.updateNetwork200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkAlertsSettings

Update the alert configuration for this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkAlertsSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkAlertsSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkAlertsSettingsRequestBodyAlerts;
import org.openapis.openapi.models.operations.UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations;
import org.openapis.openapi.models.operations.UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations;
import org.openapis.openapi.models.operations.UpdateNetworkAlertsSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkAlertsSettingsRequest req = new UpdateNetworkAlertsSettingsRequest("temporibus") {{
                requestBody = new UpdateNetworkAlertsSettingsRequestBody() {{
                    alerts = new org.openapis.openapi.models.operations.UpdateNetworkAlertsSettingsRequestBodyAlerts[]{{
                        add(new UpdateNetworkAlertsSettingsRequestBodyAlerts("sunt") {{
                            alertDestinations = new UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations() {{
                                allAdmins = false;
                                emails = new String[]{{
                                    add("ea"),
                                    add("magni"),
                                }};
                                httpServerIds = new String[]{{
                                    add("nisi"),
                                }};
                                snmp = false;
                            }};
                            enabled = false;
                            filters = new java.util.HashMap<String, Object>() {{
                                put("quasi", "nulla");
                                put("at", "quis");
                            }};
                            type = "nostrum";
                        }}),
                        add(new UpdateNetworkAlertsSettingsRequestBodyAlerts("reprehenderit") {{
                            alertDestinations = new UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations() {{
                                allAdmins = false;
                                emails = new String[]{{
                                    add("voluptatum"),
                                }};
                                httpServerIds = new String[]{{
                                    add("omnis"),
                                    add("architecto"),
                                    add("dicta"),
                                    add("quod"),
                                }};
                                snmp = false;
                            }};
                            enabled = false;
                            filters = new java.util.HashMap<String, Object>() {{
                                put("minus", "praesentium");
                                put("at", "cupiditate");
                                put("eius", "accusantium");
                                put("voluptatibus", "ipsum");
                            }};
                            type = "in";
                        }}),
                        add(new UpdateNetworkAlertsSettingsRequestBodyAlerts("illum") {{
                            alertDestinations = new UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations() {{
                                allAdmins = false;
                                emails = new String[]{{
                                    add("architecto"),
                                    add("adipisci"),
                                    add("libero"),
                                }};
                                httpServerIds = new String[]{{
                                    add("ipsum"),
                                    add("ipsam"),
                                    add("corporis"),
                                    add("hic"),
                                }};
                                snmp = false;
                            }};
                            enabled = false;
                            filters = new java.util.HashMap<String, Object>() {{
                                put("et", "numquam");
                            }};
                            type = "natus";
                        }}),
                    }};
                    defaultDestinations = new UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations() {{
                        allAdmins = false;
                        emails = new String[]{{
                            add("deleniti"),
                            add("mollitia"),
                        }};
                        httpServerIds = new String[]{{
                            add("voluptatibus"),
                            add("neque"),
                            add("dolor"),
                        }};
                        snmp = false;
                    }};;
                }};;
            }};            

            UpdateNetworkAlertsSettingsResponse res = sdk.networks.updateNetworkAlertsSettings(req);

            if (res.updateNetworkAlertsSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkClientPolicy

Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkClientPolicyRequest;
import org.openapis.openapi.models.operations.UpdateNetworkClientPolicyRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkClientPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkClientPolicyRequest req = new UpdateNetworkClientPolicyRequest(                new UpdateNetworkClientPolicyRequestBody("delectus") {{
                                groupPolicyId = "cupiditate";
                            }};, "ab", "ratione");            

            UpdateNetworkClientPolicyResponse res = sdk.networks.updateNetworkClientPolicy(req);

            if (res.updateNetworkClientPolicy200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkClientSplashAuthorizationStatus

Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequest;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkClientSplashAuthorizationStatusRequest req = new UpdateNetworkClientSplashAuthorizationStatusRequest(                new UpdateNetworkClientSplashAuthorizationStatusRequestBody(                new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids() {{
                                                zero = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0() {{
                                                    isAuthorized = false;
                                                }};;
                                                one = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1() {{
                                                    isAuthorized = false;
                                                }};;
                                                ten = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10() {{
                                                    isAuthorized = false;
                                                }};;
                                                eleven = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11() {{
                                                    isAuthorized = false;
                                                }};;
                                                twelve = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12() {{
                                                    isAuthorized = false;
                                                }};;
                                                thirteen = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13() {{
                                                    isAuthorized = false;
                                                }};;
                                                fourteen = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14() {{
                                                    isAuthorized = false;
                                                }};;
                                                two = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2() {{
                                                    isAuthorized = false;
                                                }};;
                                                three = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3() {{
                                                    isAuthorized = false;
                                                }};;
                                                four = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4() {{
                                                    isAuthorized = false;
                                                }};;
                                                five = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5() {{
                                                    isAuthorized = false;
                                                }};;
                                                six = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6() {{
                                                    isAuthorized = false;
                                                }};;
                                                seven = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7() {{
                                                    isAuthorized = false;
                                                }};;
                                                eight = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8() {{
                                                    isAuthorized = false;
                                                }};;
                                                nine = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9() {{
                                                    isAuthorized = false;
                                                }};;
                                            }};);, "sequi", "harum");            

            UpdateNetworkClientSplashAuthorizationStatusResponse res = sdk.networks.updateNetworkClientSplashAuthorizationStatus(req);

            if (res.updateNetworkClientSplashAuthorizationStatus200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkFirmwareUpgrades

Update firmware upgrade information for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProducts;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkFirmwareUpgradesRequest req = new UpdateNetworkFirmwareUpgradesRequest("consequatur") {{
                requestBody = new UpdateNetworkFirmwareUpgradesRequestBody() {{
                    products = new UpdateNetworkFirmwareUpgradesRequestBodyProducts() {{
                        appliance = new UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance() {{
                            nextUpgrade = new UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade() {{
                                time = "optio";
                                toVersion = new UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion() {{
                                    id = "b13ebd52-ff95-4be3-9a2a-7e014798291d";
                                }};;
                            }};;
                            participateInNextBetaRelease = false;
                        }};;
                        camera = new UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera() {{
                            nextUpgrade = new UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade() {{
                                time = "ex";
                                toVersion = new UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion() {{
                                    id = "416a2c97-d179-4132-a335-aed5d0c58c83";
                                }};;
                            }};;
                            participateInNextBetaRelease = false;
                        }};;
                        cellularGateway = new UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway() {{
                            nextUpgrade = new UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade() {{
                                time = "nesciunt";
                                toVersion = new UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion() {{
                                    id = "8098dbe6-4ae5-4c55-add0-32f74171477b";
                                }};;
                            }};;
                            participateInNextBetaRelease = false;
                        }};;
                        sensor = new UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor() {{
                            nextUpgrade = new UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade() {{
                                time = "aliquid";
                                toVersion = new UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion() {{
                                    id = "25d4a0ec-f744-493b-acfe-904547f7a52f";
                                }};;
                            }};;
                            participateInNextBetaRelease = false;
                        }};;
                        switch_ = new UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch() {{
                            nextUpgrade = new UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade() {{
                                time = "quod";
                                toVersion = new UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion() {{
                                    id = "06ca4962-21ac-4434-b904-ff8f6bc268a0";
                                }};;
                            }};;
                            participateInNextBetaRelease = false;
                        }};;
                        wireless = new UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless() {{
                            nextUpgrade = new UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade() {{
                                time = "sit";
                                toVersion = new UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion() {{
                                    id = "6e186bdf-06b1-4a0f-b496-5572292dee2b";
                                }};;
                            }};;
                            participateInNextBetaRelease = false;
                        }};;
                    }};;
                    timezone = "deleniti";
                    upgradeWindow = new UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow() {{
                        dayOfWeek = UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum.SUNDAY;
                        hourOfDay = UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum.SIXTEEN00;
                    }};;
                }};;
            }};            

            UpdateNetworkFirmwareUpgradesResponse res = sdk.networks.updateNetworkFirmwareUpgrades(req);

            if (res.updateNetworkFirmwareUpgrades200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkFirmwareUpgradesStagedEvents

Update the Staged Upgrade Event for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedEventsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedEventsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkFirmwareUpgradesStagedEventsRequest req = new UpdateNetworkFirmwareUpgradesStagedEventsRequest(                new UpdateNetworkFirmwareUpgradesStagedEventsRequestBody(                new org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages[]{{
                                                add(new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages() {{
                                                    group = new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup("inventore") {{
                                                        id = "d123b4f5-61f2-43d4-b429-edbf4ce5b2fe";
                                                    }};
                                                    milestones = new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones("natus") {{
                                                        scheduledFor = "dolorum";
                                                    }};
                                                }}),
                                                add(new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages() {{
                                                    group = new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup("quidem") {{
                                                        id = "2452947b-5a75-4c1d-9892-7d571e7d42d5";
                                                    }};
                                                    milestones = new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones("commodi") {{
                                                        scheduledFor = "aliquam";
                                                    }};
                                                }}),
                                                add(new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages() {{
                                                    group = new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup("illo") {{
                                                        id = "fe98fd59-efe1-4ec5-8411-c9b198e5600f";
                                                    }};
                                                    milestones = new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones("nam") {{
                                                        scheduledFor = "quibusdam";
                                                    }};
                                                }}),
                                                add(new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages() {{
                                                    group = new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup("architecto") {{
                                                        id = "c4d96733-2bb0-4ca2-bf19-4be37b90c9dc";
                                                    }};
                                                    milestones = new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones("voluptatum") {{
                                                        scheduledFor = "eaque";
                                                    }};
                                                }}),
                                            }});, "ipsam");            

            UpdateNetworkFirmwareUpgradesStagedEventsResponse res = sdk.networks.updateNetworkFirmwareUpgradesStagedEvents(req);

            if (res.updateNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkFirmwareUpgradesStagedGroup

Update a Staged Upgrade Group for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedGroupRequest;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkFirmwareUpgradesStagedGroupRequest req = new UpdateNetworkFirmwareUpgradesStagedGroupRequest(                new UpdateNetworkFirmwareUpgradesStagedGroupRequestBody(false, "fugit") {{
                                assignedDevices = new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices() {{
                                    devices = new org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices[]{{
                                        add(new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices("officia") {{
                                            name = "Mrs. Irvin Pagac";
                                            serial = "nisi";
                                        }}),
                                        add(new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices("optio") {{
                                            name = "Lucy Will";
                                            serial = "laboriosam";
                                        }}),
                                        add(new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices("itaque") {{
                                            name = "Simon Kris";
                                            serial = "est";
                                        }}),
                                    }};
                                    switchStacks = new org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks[]{{
                                        add(new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks("necessitatibus") {{
                                            id = "b9a4b822-497d-4622-a54b-405a357e14ef";
                                            name = "Nicolas Turner";
                                        }}),
                                        add(new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks("ut") {{
                                            id = "c4e756d2-e8b0-45f9-a9d9-484892ca55b9";
                                            name = "Danielle Bins V";
                                        }}),
                                        add(new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks("eius") {{
                                            id = "b8b4b4d8-f07d-4498-91f5-4539d5ba77ee";
                                            name = "Miss Joan Balistreri";
                                        }}),
                                    }};
                                }};;
                                description = "eius";
                            }};, "ad", "vel");            

            UpdateNetworkFirmwareUpgradesStagedGroupResponse res = sdk.networks.updateNetworkFirmwareUpgradesStagedGroup(req);

            if (res.updateNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkFirmwareUpgradesStagedStages

Assign Staged Upgrade Group order in the sequence.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedStagesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJson;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJsonGroup;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedStagesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkFirmwareUpgradesStagedStagesRequest req = new UpdateNetworkFirmwareUpgradesStagedStagesRequest("maiores") {{
                requestBody = new UpdateNetworkFirmwareUpgradesStagedStagesRequestBody() {{
                    json = new org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJson[]{{
                        add(new UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJson() {{
                            group = new UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJsonGroup("ab") {{
                                id = "ec58b95c-6f0b-420c-9fcc-0ee4a530600f";
                            }};
                        }}),
                        add(new UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJson() {{
                            group = new UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJsonGroup("dolores") {{
                                id = "3833424f-7a60-4044-a7fd-4f9284e0025b";
                            }};
                        }}),
                        add(new UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJson() {{
                            group = new UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJsonGroup("et") {{
                                id = "dc16bd68-6ff7-4551-b22a-ab09bcc82ae0";
                            }};
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkFirmwareUpgradesStagedStagesResponse res = sdk.networks.updateNetworkFirmwareUpgradesStagedStages(req);

            if (res.updateNetworkFirmwareUpgradesStagedStages200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkFloorPlan

Update a floor plan's geolocation and other meta data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkFloorPlanRequest;
import org.openapis.openapi.models.operations.UpdateNetworkFloorPlanRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkFloorPlanRequestBodyBottomLeftCorner;
import org.openapis.openapi.models.operations.UpdateNetworkFloorPlanRequestBodyBottomRightCorner;
import org.openapis.openapi.models.operations.UpdateNetworkFloorPlanRequestBodyCenter;
import org.openapis.openapi.models.operations.UpdateNetworkFloorPlanRequestBodyTopLeftCorner;
import org.openapis.openapi.models.operations.UpdateNetworkFloorPlanRequestBodyTopRightCorner;
import org.openapis.openapi.models.operations.UpdateNetworkFloorPlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkFloorPlanRequest req = new UpdateNetworkFloorPlanRequest("soluta", "veniam") {{
                requestBody = new UpdateNetworkFloorPlanRequestBody() {{
                    bottomLeftCorner = new UpdateNetworkFloorPlanRequestBodyBottomLeftCorner() {{
                        lat = 9149.16;
                        lng = 2673.76;
                    }};;
                    bottomRightCorner = new UpdateNetworkFloorPlanRequestBodyBottomRightCorner() {{
                        lat = 6451.2;
                        lng = 4126.26;
                    }};;
                    center = new UpdateNetworkFloorPlanRequestBodyCenter() {{
                        lat = 5671.4;
                        lng = 5197.19;
                    }};;
                    imageContents = "nam";
                    name = "Carmen Thiel";
                    topLeftCorner = new UpdateNetworkFloorPlanRequestBodyTopLeftCorner() {{
                        lat = 8335.18;
                        lng = 4911.99;
                    }};;
                    topRightCorner = new UpdateNetworkFloorPlanRequestBodyTopRightCorner() {{
                        lat = 904.96;
                        lng = 873.65;
                    }};;
                }};;
            }};            

            UpdateNetworkFloorPlanResponse res = sdk.networks.updateNetworkFloorPlan(req);

            if (res.updateNetworkFloorPlan200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkGroupPolicy

Update a group policy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequest;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyBandwidth;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwarding;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyContentFiltering;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyScheduling;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodySchedulingFriday;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodySchedulingMonday;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodySchedulingSaturday;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodySchedulingSunday;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodySchedulingThursday;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodySchedulingTuesday;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodySchedulingWednesday;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyVlanTagging;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum;
import org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkGroupPolicyRequest req = new UpdateNetworkGroupPolicyRequest("velit", "officiis") {{
                requestBody = new UpdateNetworkGroupPolicyRequestBody() {{
                    bandwidth = new UpdateNetworkGroupPolicyRequestBodyBandwidth() {{
                        bandwidthLimits = new UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits() {{
                            limitDown = 793394L;
                            limitUp = 82014L;
                        }};;
                        settings = UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum.IGNORE;
                    }};;
                    bonjourForwarding = new UpdateNetworkGroupPolicyRequestBodyBonjourForwarding() {{
                        rules = new org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules[]{{
                            add(new UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules(                new org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[]{{
                                                add(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.SCANNERS),
                                                add(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.SCANNERS),
                                                add(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.SSH),
                                                add(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.FTP),
                                            }}, "dolor") {{
                                description = "numquam";
                                services = new org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[]{{
                                    add(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum.AFP),
                                }};
                                vlanId = "beatae";
                            }}),
                        }};
                        settings = UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum.CUSTOM;
                    }};;
                    contentFiltering = new UpdateNetworkGroupPolicyRequestBodyContentFiltering() {{
                        allowedUrlPatterns = new UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns() {{
                            patterns = new String[]{{
                                add("voluptate"),
                                add("sint"),
                            }};
                            settings = UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum.APPEND;
                        }};;
                        blockedUrlCategories = new UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories() {{
                            categories = new String[]{{
                                add("praesentium"),
                                add("corporis"),
                                add("autem"),
                            }};
                            settings = UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum.NETWORK_DEFAULT;
                        }};;
                        blockedUrlPatterns = new UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns() {{
                            patterns = new String[]{{
                                add("nisi"),
                                add("deserunt"),
                                add("consequuntur"),
                            }};
                            settings = UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum.APPEND;
                        }};;
                    }};;
                    firewallAndTrafficShaping = new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping() {{
                        l3FirewallRules = new org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules[]{{
                            add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules("ut", "reprehenderit", "in") {{
                                comment = "iure";
                                destCidr = "natus";
                                destPort = "atque";
                                policy = "esse";
                                protocol = "quia";
                            }}),
                        }};
                        l7FirewallRules = new org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules[]{{
                            add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules() {{
                                policy = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum.DENY;
                                type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum.APPLICATION;
                                value = "eligendi";
                            }}),
                            add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules() {{
                                policy = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum.DENY;
                                type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum.APPLICATION_CATEGORY;
                                value = "nemo";
                            }}),
                        }};
                        settings = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum.IGNORE;
                        trafficShapingRules = new org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules[]{{
                            add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules(                new org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[]{{
                                                add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION, "vel") {{
                                                    type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION_CATEGORY;
                                                    value = "sequi";
                                                }}),
                                                add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.IP_RANGE, "quaerat") {{
                                                    type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.PORT;
                                                    value = "sequi";
                                                }}),
                                                add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION, "voluptatem") {{
                                                    type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION_CATEGORY;
                                                    value = "consectetur";
                                                }}),
                                            }}) {{
                                definitions = new org.openapis.openapi.models.operations.UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[]{{
                                    add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.HOST, "velit") {{
                                        type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION_CATEGORY;
                                        value = "ducimus";
                                    }}),
                                    add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.IP_RANGE, "ipsum") {{
                                        type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.IP_RANGE;
                                        value = "reprehenderit";
                                    }}),
                                    add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.LOCAL_NET, "itaque") {{
                                        type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.HOST;
                                        value = "eveniet";
                                    }}),
                                    add(new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.APPLICATION, "nobis") {{
                                        type = UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum.HOST;
                                        value = "eaque";
                                    }}),
                                }};
                                dscpTagValue = 145645L;
                                pcpTagValue = 439211L;
                                perClientBandwidthLimits = new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits() {{
                                    bandwidthLimits = new UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits() {{
                                        limitDown = 674068L;
                                        limitUp = 825580L;
                                    }};
                                    settings = "officia";
                                }};
                                priority = "provident";
                            }}),
                        }};
                    }};;
                    name = "Mathew Prohaska";
                    scheduling = new UpdateNetworkGroupPolicyRequestBodyScheduling() {{
                        enabled = false;
                        friday = new UpdateNetworkGroupPolicyRequestBodySchedulingFriday() {{
                            active = false;
                            from = "laboriosam";
                            to = "perferendis";
                        }};;
                        monday = new UpdateNetworkGroupPolicyRequestBodySchedulingMonday() {{
                            active = false;
                            from = "quasi";
                            to = "debitis";
                        }};;
                        saturday = new UpdateNetworkGroupPolicyRequestBodySchedulingSaturday() {{
                            active = false;
                            from = "nihil";
                            to = "iure";
                        }};;
                        sunday = new UpdateNetworkGroupPolicyRequestBodySchedulingSunday() {{
                            active = false;
                            from = "sint";
                            to = "illo";
                        }};;
                        thursday = new UpdateNetworkGroupPolicyRequestBodySchedulingThursday() {{
                            active = false;
                            from = "ut";
                            to = "expedita";
                        }};;
                        tuesday = new UpdateNetworkGroupPolicyRequestBodySchedulingTuesday() {{
                            active = false;
                            from = "delectus";
                            to = "nihil";
                        }};;
                        wednesday = new UpdateNetworkGroupPolicyRequestBodySchedulingWednesday() {{
                            active = false;
                            from = "nostrum";
                            to = "laboriosam";
                        }};;
                    }};;
                    splashAuthSettings = UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum.BYPASS;
                    vlanTagging = new UpdateNetworkGroupPolicyRequestBodyVlanTagging() {{
                        settings = UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum.IGNORE;
                        vlanId = "dolorem";
                    }};;
                }};;
            }};            

            UpdateNetworkGroupPolicyResponse res = sdk.networks.updateNetworkGroupPolicy(req);

            if (res.updateNetworkGroupPolicy200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkMerakiAuthUser

Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkMerakiAuthUserRequest;
import org.openapis.openapi.models.operations.UpdateNetworkMerakiAuthUserRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkMerakiAuthUserRequestBodyAuthorizations;
import org.openapis.openapi.models.operations.UpdateNetworkMerakiAuthUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkMerakiAuthUserRequest req = new UpdateNetworkMerakiAuthUserRequest("eveniet", "adipisci") {{
                requestBody = new UpdateNetworkMerakiAuthUserRequestBody() {{
                    authorizations = new org.openapis.openapi.models.operations.UpdateNetworkMerakiAuthUserRequestBodyAuthorizations[]{{
                        add(new UpdateNetworkMerakiAuthUserRequestBodyAuthorizations(804572L) {{
                            expiresAt = "eveniet";
                            ssidNumber = 996654L;
                        }}),
                        add(new UpdateNetworkMerakiAuthUserRequestBodyAuthorizations(503323L) {{
                            expiresAt = "maiores";
                            ssidNumber = 332956L;
                        }}),
                        add(new UpdateNetworkMerakiAuthUserRequestBodyAuthorizations(755803L) {{
                            expiresAt = "labore";
                            ssidNumber = 635803L;
                        }}),
                    }};
                    emailPasswordToUser = false;
                    name = "Ms. Pat Sauer";
                    password = "molestias";
                }};;
            }};            

            UpdateNetworkMerakiAuthUserResponse res = sdk.networks.updateNetworkMerakiAuthUser(req);

            if (res.updateNetworkMerakiAuthUser200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkMqttBroker

Update an MQTT broker

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkMqttBrokerRequest;
import org.openapis.openapi.models.operations.UpdateNetworkMqttBrokerRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkMqttBrokerRequestBodySecurity;
import org.openapis.openapi.models.operations.UpdateNetworkMqttBrokerRequestBodySecuritySecurity;
import org.openapis.openapi.models.operations.UpdateNetworkMqttBrokerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkMqttBrokerRequest req = new UpdateNetworkMqttBrokerRequest("animi", "quasi") {{
                requestBody = new UpdateNetworkMqttBrokerRequestBody() {{
                    authentication = new java.util.HashMap<String, Object>() {{
                        put("natus", "minima");
                        put("ad", "non");
                        put("itaque", "dolores");
                    }};
                    host = "maxime";
                    name = "Victor Dach";
                    port = 253262L;
                    security = new UpdateNetworkMqttBrokerRequestBodySecurity() {{
                        mode = "veniam";
                        security = new UpdateNetworkMqttBrokerRequestBodySecuritySecurity() {{
                            caCertificate = "labore";
                            verifyHostnames = false;
                        }};;
                    }};;
                }};;
            }};            

            UpdateNetworkMqttBrokerResponse res = sdk.networks.updateNetworkMqttBroker(req);

            if (res.updateNetworkMqttBroker200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkNetflow

Update the NetFlow traffic reporting settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkNetflowRequest;
import org.openapis.openapi.models.operations.UpdateNetworkNetflowRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkNetflowResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkNetflowRequest req = new UpdateNetworkNetflowRequest("doloribus") {{
                requestBody = new UpdateNetworkNetflowRequestBody() {{
                    collectorIp = "adipisci";
                    collectorPort = 114944L;
                    etaDstPort = 19117L;
                    etaEnabled = false;
                    reportingEnabled = false;
                }};;
            }};            

            UpdateNetworkNetflowResponse res = sdk.networks.updateNetworkNetflow(req);

            if (res.updateNetworkNetflow200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSettings

Update the settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSettingsRequestBodyLocalStatusPage;
import org.openapis.openapi.models.operations.UpdateNetworkSettingsRequestBodyLocalStatusPageAuthentication;
import org.openapis.openapi.models.operations.UpdateNetworkSettingsRequestBodySecurePort;
import org.openapis.openapi.models.operations.UpdateNetworkSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSettingsRequest req = new UpdateNetworkSettingsRequest("quam") {{
                requestBody = new UpdateNetworkSettingsRequestBody() {{
                    localStatusPage = new UpdateNetworkSettingsRequestBodyLocalStatusPage() {{
                        authentication = new UpdateNetworkSettingsRequestBodyLocalStatusPageAuthentication() {{
                            enabled = false;
                            password = "soluta";
                        }};;
                    }};;
                    localStatusPageEnabled = false;
                    remoteStatusPageEnabled = false;
                    securePort = new UpdateNetworkSettingsRequestBodySecurePort() {{
                        enabled = false;
                    }};;
                }};;
            }};            

            UpdateNetworkSettingsResponse res = sdk.networks.updateNetworkSettings(req);

            if (res.updateNetworkSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSnmp

Update the SNMP settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSnmpRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSnmpRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSnmpRequestBodyAccessEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSnmpRequestBodyUsers;
import org.openapis.openapi.models.operations.UpdateNetworkSnmpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSnmpRequest req = new UpdateNetworkSnmpRequest("dolorem") {{
                requestBody = new UpdateNetworkSnmpRequestBody() {{
                    access = UpdateNetworkSnmpRequestBodyAccessEnum.USERS;
                    communityString = "accusamus";
                    users = new org.openapis.openapi.models.operations.UpdateNetworkSnmpRequestBodyUsers[]{{
                        add(new UpdateNetworkSnmpRequestBodyUsers("quisquam", "expedita") {{
                            passphrase = "et";
                            username = "Lizeth.Raynor";
                        }}),
                        add(new UpdateNetworkSnmpRequestBodyUsers("mollitia", "repellat") {{
                            passphrase = "ipsa";
                            username = "Libbie.Johns";
                        }}),
                        add(new UpdateNetworkSnmpRequestBodyUsers("quaerat", "possimus") {{
                            passphrase = "est";
                            username = "Maximillia.Moore37";
                        }}),
                        add(new UpdateNetworkSnmpRequestBodyUsers("veniam", "doloribus") {{
                            passphrase = "vero";
                            username = "Felipe33";
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkSnmpResponse res = sdk.networks.updateNetworkSnmp(req);

            if (res.updateNetworkSnmp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSyslogServers

Update the syslog servers for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSyslogServersRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSyslogServersRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSyslogServersRequestBodyServers;
import org.openapis.openapi.models.operations.UpdateNetworkSyslogServersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSyslogServersRequest req = new UpdateNetworkSyslogServersRequest(                new UpdateNetworkSyslogServersRequestBody(                new org.openapis.openapi.models.operations.UpdateNetworkSyslogServersRequestBodyServers[]{{
                                                add(new UpdateNetworkSyslogServersRequestBodyServers("molestiae", 21340L,                 new String[]{{
                                                                    add("cumque"),
                                                                }}) {{
                                                    host = "cum";
                                                    port = 712252L;
                                                    roles = new String[]{{
                                                        add("neque"),
                                                        add("corrupti"),
                                                        add("consectetur"),
                                                        add("magni"),
                                                    }};
                                                }}),
                                                add(new UpdateNetworkSyslogServersRequestBodyServers("dolorum", 453344L,                 new String[]{{
                                                                    add("repudiandae"),
                                                                    add("debitis"),
                                                                }}) {{
                                                    host = "necessitatibus";
                                                    port = 544933L;
                                                    roles = new String[]{{
                                                        add("rem"),
                                                        add("ullam"),
                                                    }};
                                                }}),
                                                add(new UpdateNetworkSyslogServersRequestBodyServers("placeat", 432668L,                 new String[]{{
                                                                    add("aperiam"),
                                                                    add("doloremque"),
                                                                    add("rem"),
                                                                    add("unde"),
                                                                }}) {{
                                                    host = "eveniet";
                                                    port = 115335L;
                                                    roles = new String[]{{
                                                        add("nesciunt"),
                                                        add("corrupti"),
                                                    }};
                                                }}),
                                                add(new UpdateNetworkSyslogServersRequestBodyServers("officia", 73208L,                 new String[]{{
                                                                    add("magni"),
                                                                }}) {{
                                                    host = "cumque";
                                                    port = 687765L;
                                                    roles = new String[]{{
                                                        add("eos"),
                                                        add("tempore"),
                                                        add("ex"),
                                                        add("neque"),
                                                    }};
                                                }}),
                                            }});, "quas");            

            UpdateNetworkSyslogServersResponse res = sdk.networks.updateNetworkSyslogServers(req);

            if (res.updateNetworkSyslogServers200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkTrafficAnalysis

Update the traffic analysis settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkTrafficAnalysisRequest;
import org.openapis.openapi.models.operations.UpdateNetworkTrafficAnalysisRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems;
import org.openapis.openapi.models.operations.UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkTrafficAnalysisRequestBodyModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkTrafficAnalysisResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkTrafficAnalysisRequest req = new UpdateNetworkTrafficAnalysisRequest("reprehenderit") {{
                requestBody = new UpdateNetworkTrafficAnalysisRequestBody() {{
                    customPieChartItems = new org.openapis.openapi.models.operations.UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems[]{{
                        add(new UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems("deleniti", UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum.IP_RANGE, "ea") {{
                            name = "Gladys Goodwin";
                            type = UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum.HOST;
                            value = "deserunt";
                        }}),
                        add(new UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems("est", UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum.IP_RANGE, "delectus") {{
                            name = "Ricky Bergnaum";
                            type = UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum.HOST;
                            value = "voluptate";
                        }}),
                        add(new UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems("mollitia", UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum.PORT, "ea") {{
                            name = "Rickey Langworth";
                            type = UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum.PORT;
                            value = "doloremque";
                        }}),
                        add(new UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems("consequatur", UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum.IP_RANGE, "voluptas") {{
                            name = "Edith Moore";
                            type = UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum.IP_RANGE;
                            value = "facilis";
                        }}),
                    }};
                    mode = UpdateNetworkTrafficAnalysisRequestBodyModeEnum.DISABLED;
                }};;
            }};            

            UpdateNetworkTrafficAnalysisResponse res = sdk.networks.updateNetworkTrafficAnalysis(req);

            if (res.updateNetworkTrafficAnalysis200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWebhooksHttpServer

Update an HTTP server. To change a URL, create a new HTTP server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWebhooksHttpServerRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWebhooksHttpServerRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWebhooksHttpServerRequestBodyPayloadTemplate;
import org.openapis.openapi.models.operations.UpdateNetworkWebhooksHttpServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWebhooksHttpServerRequest req = new UpdateNetworkWebhooksHttpServerRequest("vero", "nulla") {{
                requestBody = new UpdateNetworkWebhooksHttpServerRequestBody() {{
                    name = "Rodney Rosenbaum";
                    payloadTemplate = new UpdateNetworkWebhooksHttpServerRequestBodyPayloadTemplate() {{
                        payloadTemplateId = "nesciunt";
                    }};;
                    sharedSecret = "debitis";
                }};;
            }};            

            UpdateNetworkWebhooksHttpServerResponse res = sdk.networks.updateNetworkWebhooksHttpServer(req);

            if (res.updateNetworkWebhooksHttpServer200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWebhooksPayloadTemplate

Update a webhook payload template for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWebhooksPayloadTemplateRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWebhooksPayloadTemplateRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders;
import org.openapis.openapi.models.operations.UpdateNetworkWebhooksPayloadTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWebhooksPayloadTemplateRequest req = new UpdateNetworkWebhooksPayloadTemplateRequest("molestias", "mollitia") {{
                requestBody = new UpdateNetworkWebhooksPayloadTemplateRequestBody() {{
                    body = "repellendus";
                    bodyFile = "cumque";
                    headers = new org.openapis.openapi.models.operations.UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders[]{{
                        add(new UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders() {{
                            name = "Gerard Sipes";
                            template = "alias";
                        }}),
                        add(new UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders() {{
                            name = "Dwight Stehr I";
                            template = "odit";
                        }}),
                        add(new UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders() {{
                            name = "Aubrey Fay";
                            template = "similique";
                        }}),
                    }};
                    headersFile = "reiciendis";
                    name = "Ms. Guy Howell";
                }};;
            }};            

            UpdateNetworkWebhooksPayloadTemplateResponse res = sdk.networks.updateNetworkWebhooksPayloadTemplate(req);

            if (res.updateNetworkWebhooksPayloadTemplate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vmxNetworkDevicesClaim

Claim a vMX into a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmxNetworkDevicesClaimRequest;
import org.openapis.openapi.models.operations.VmxNetworkDevicesClaimRequestBody;
import org.openapis.openapi.models.operations.VmxNetworkDevicesClaimRequestBodySizeEnum;
import org.openapis.openapi.models.operations.VmxNetworkDevicesClaimResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            VmxNetworkDevicesClaimRequest req = new VmxNetworkDevicesClaimRequest(                new VmxNetworkDevicesClaimRequestBody(VmxNetworkDevicesClaimRequestBodySizeEnum.ONE_HUNDRED);, "molestiae");            

            VmxNetworkDevicesClaimResponse res = sdk.networks.vmxNetworkDevicesClaim(req);

            if (res.vmxNetworkDevicesClaim200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
