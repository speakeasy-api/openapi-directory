# settings

### Available Operations

* [getDeviceApplianceUplinksSettings](#getdeviceapplianceuplinkssettings) - Return the uplink settings for an MX appliance
* [getDeviceCameraVideoSettings](#getdevicecameravideosettings) - Returns video settings for the given camera
* [getDeviceWirelessBluetoothSettings](#getdevicewirelessbluetoothsettings) - Return the bluetooth settings for a wireless device
* [getDeviceWirelessRadioSettings](#getdevicewirelessradiosettings) - Return the radio settings of a device
* [getNetworkAlertsSettings](#getnetworkalertssettings) - Return the alert configuration for this network
* [getNetworkApplianceFirewallSettings](#getnetworkappliancefirewallsettings) - Return the firewall settings for this network
* [getNetworkApplianceSettings](#getnetworkappliancesettings) - Return the appliance settings for a network
* [getNetworkApplianceVlansSettings](#getnetworkappliancevlanssettings) - Returns the enabled status of VLANs for the network
* [getNetworkSettings](#getnetworksettings) - Return the settings for a network
* [getNetworkSwitchSettings](#getnetworkswitchsettings) - Returns the switch network settings
* [getNetworkWirelessBluetoothSettings](#getnetworkwirelessbluetoothsettings) - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* [getNetworkWirelessSettings](#getnetworkwirelesssettings) - Return the wireless settings for a network
* [getNetworkWirelessSsidSplashSettings](#getnetworkwirelessssidsplashsettings) - Display the splash page settings for the given SSID
* [getOrganizationAdaptivePolicySettings](#getorganizationadaptivepolicysettings) - Returns global adaptive policy settings in an organization
* [updateDeviceApplianceUplinksSettings](#updatedeviceapplianceuplinkssettings) - Update the uplink settings for an MX appliance
* [updateDeviceCameraVideoSettings](#updatedevicecameravideosettings) - Update video settings for the given camera
* [updateDeviceWirelessBluetoothSettings](#updatedevicewirelessbluetoothsettings) - Update the bluetooth settings for a wireless device
* [updateDeviceWirelessRadioSettings](#updatedevicewirelessradiosettings) - Update the radio settings of a device
* [updateNetworkAlertsSettings](#updatenetworkalertssettings) - Update the alert configuration for this network
* [updateNetworkApplianceFirewallSettings](#updatenetworkappliancefirewallsettings) - Update the firewall settings for this network
* [updateNetworkApplianceSettings](#updatenetworkappliancesettings) - Update the appliance settings for a network
* [updateNetworkApplianceVlansSettings](#updatenetworkappliancevlanssettings) - Enable/Disable VLANs for the given network
* [updateNetworkSettings](#updatenetworksettings) - Update the settings for a network
* [updateNetworkSwitchSettings](#updatenetworkswitchsettings) - Update switch network settings
* [updateNetworkWirelessBluetoothSettings](#updatenetworkwirelessbluetoothsettings) - Update the Bluetooth settings for a network
* [updateNetworkWirelessSettings](#updatenetworkwirelesssettings) - Update the wireless settings for a network
* [updateNetworkWirelessSsidSplashSettings](#updatenetworkwirelessssidsplashsettings) - Modify the splash page settings for the given SSID
* [updateOrganizationAdaptivePolicySettings](#updateorganizationadaptivepolicysettings) - Update global adaptive policy settings

## getDeviceApplianceUplinksSettings

Return the uplink settings for an MX appliance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceApplianceUplinksSettingsRequest;
import org.openapis.openapi.models.operations.GetDeviceApplianceUplinksSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceApplianceUplinksSettingsRequest req = new GetDeviceApplianceUplinksSettingsRequest("blanditiis");            

            GetDeviceApplianceUplinksSettingsResponse res = sdk.settings.getDeviceApplianceUplinksSettings(req);

            if (res.getDeviceApplianceUplinksSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceCameraVideoSettings

Returns video settings for the given camera

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraVideoSettingsRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraVideoSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraVideoSettingsRequest req = new GetDeviceCameraVideoSettingsRequest("adipisci");            

            GetDeviceCameraVideoSettingsResponse res = sdk.settings.getDeviceCameraVideoSettings(req);

            if (res.getDeviceCameraVideoSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceWirelessBluetoothSettings

Return the bluetooth settings for a wireless device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceWirelessBluetoothSettingsRequest;
import org.openapis.openapi.models.operations.GetDeviceWirelessBluetoothSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceWirelessBluetoothSettingsRequest req = new GetDeviceWirelessBluetoothSettingsRequest("magnam");            

            GetDeviceWirelessBluetoothSettingsResponse res = sdk.settings.getDeviceWirelessBluetoothSettings(req);

            if (res.getDeviceWirelessBluetoothSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceWirelessRadioSettings

Return the radio settings of a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceWirelessRadioSettingsRequest;
import org.openapis.openapi.models.operations.GetDeviceWirelessRadioSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceWirelessRadioSettingsRequest req = new GetDeviceWirelessRadioSettingsRequest("omnis");            

            GetDeviceWirelessRadioSettingsResponse res = sdk.settings.getDeviceWirelessRadioSettings(req);

            if (res.getDeviceWirelessRadioSettings200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("iusto") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkAlertsSettingsRequest req = new GetNetworkAlertsSettingsRequest("itaque");            

            GetNetworkAlertsSettingsResponse res = sdk.settings.getNetworkAlertsSettings(req);

            if (res.getNetworkAlertsSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceFirewallSettings

Return the firewall settings for this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceFirewallSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceFirewallSettingsRequest req = new GetNetworkApplianceFirewallSettingsRequest("tenetur");            

            GetNetworkApplianceFirewallSettingsResponse res = sdk.settings.getNetworkApplianceFirewallSettings(req);

            if (res.getNetworkApplianceFirewallSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceSettings

Return the appliance settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceSettingsRequest req = new GetNetworkApplianceSettingsRequest("quidem");            

            GetNetworkApplianceSettingsResponse res = sdk.settings.getNetworkApplianceSettings(req);

            if (res.getNetworkApplianceSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceVlansSettings

Returns the enabled status of VLANs for the network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceVlansSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceVlansSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceVlansSettingsRequest req = new GetNetworkApplianceVlansSettingsRequest("alias");            

            GetNetworkApplianceVlansSettingsResponse res = sdk.settings.getNetworkApplianceVlansSettings(req);

            if (res.getNetworkApplianceVlansSettings200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("quisquam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSettingsRequest req = new GetNetworkSettingsRequest("eos");            

            GetNetworkSettingsResponse res = sdk.settings.getNetworkSettings(req);

            if (res.getNetworkSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchSettings

Returns the switch network settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchSettingsRequest req = new GetNetworkSwitchSettingsRequest("sit");            

            GetNetworkSwitchSettingsResponse res = sdk.settings.getNetworkSwitchSettings(req);

            if (res.getNetworkSwitchSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessBluetoothSettings

Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessBluetoothSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessBluetoothSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessBluetoothSettingsRequest req = new GetNetworkWirelessBluetoothSettingsRequest("vitae");            

            GetNetworkWirelessBluetoothSettingsResponse res = sdk.settings.getNetworkWirelessBluetoothSettings(req);

            if (res.getNetworkWirelessBluetoothSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSettings

Return the wireless settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSettingsRequest req = new GetNetworkWirelessSettingsRequest("exercitationem");            

            GetNetworkWirelessSettingsResponse res = sdk.settings.getNetworkWirelessSettings(req);

            if (res.getNetworkWirelessSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsidSplashSettings

Display the splash page settings for the given SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidSplashSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidSplashSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidSplashSettingsRequest req = new GetNetworkWirelessSsidSplashSettingsRequest("velit", "sunt");            

            GetNetworkWirelessSsidSplashSettingsResponse res = sdk.settings.getNetworkWirelessSsidSplashSettings(req);

            if (res.getNetworkWirelessSsidSplashSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationAdaptivePolicySettings

Returns global adaptive policy settings in an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationAdaptivePolicySettingsRequest;
import org.openapis.openapi.models.operations.GetOrganizationAdaptivePolicySettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationAdaptivePolicySettingsRequest req = new GetOrganizationAdaptivePolicySettingsRequest("veniam");            

            GetOrganizationAdaptivePolicySettingsResponse res = sdk.settings.getOrganizationAdaptivePolicySettings(req);

            if (res.getOrganizationAdaptivePolicySettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceApplianceUplinksSettings

Update the uplink settings for an MX appliance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequest;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfaces;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Pppoe;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1PppoeAuthentication;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Svis;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4AssignmentModeEnum;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4Nameservers;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6AssignmentModeEnum;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6Nameservers;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1VlanTagging;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Pppoe;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2PppoeAuthentication;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Svis;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4AssignmentModeEnum;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4Nameservers;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6AssignmentModeEnum;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6Nameservers;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2VlanTagging;
import org.openapis.openapi.models.operations.UpdateDeviceApplianceUplinksSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceApplianceUplinksSettingsRequest req = new UpdateDeviceApplianceUplinksSettingsRequest(                new UpdateDeviceApplianceUplinksSettingsRequestBody(                new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfaces() {{
                                                wan1 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1() {{
                                                    enabled = false;
                                                    pppoe = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Pppoe() {{
                                                        authentication = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1PppoeAuthentication() {{
                                                            enabled = false;
                                                            password = "sapiente";
                                                            username = "Santiago59";
                                                        }};;
                                                        enabled = false;
                                                    }};;
                                                    svis = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1Svis() {{
                                                        ipv4 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4() {{
                                                            address = "5940 Vandervort Villages";
                                                            assignmentMode = UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4AssignmentModeEnum.STATIC_;
                                                            gateway = "animi";
                                                            nameservers = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv4Nameservers() {{
                                                                addresses = new String[]{{
                                                                    add("et"),
                                                                    add("placeat"),
                                                                    add("expedita"),
                                                                }};
                                                            }};;
                                                        }};;
                                                        ipv6 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6() {{
                                                            address = "44695 West Ways";
                                                            assignmentMode = UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6AssignmentModeEnum.STATIC_;
                                                            gateway = "sint";
                                                            nameservers = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1SvisIpv6Nameservers() {{
                                                                addresses = new String[]{{
                                                                    add("labore"),
                                                                    add("iusto"),
                                                                    add("voluptatum"),
                                                                }};
                                                            }};;
                                                        }};;
                                                    }};;
                                                    vlanTagging = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan1VlanTagging() {{
                                                        enabled = false;
                                                        vlanId = 617540L;
                                                    }};;
                                                }};;
                                                wan2 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2() {{
                                                    enabled = false;
                                                    pppoe = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Pppoe() {{
                                                        authentication = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2PppoeAuthentication() {{
                                                            enabled = false;
                                                            password = "ad";
                                                            username = "Cooper_Green5";
                                                        }};;
                                                        enabled = false;
                                                    }};;
                                                    svis = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2Svis() {{
                                                        ipv4 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4() {{
                                                            address = "528 Herta Dam";
                                                            assignmentMode = UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4AssignmentModeEnum.STATIC_;
                                                            gateway = "vitae";
                                                            nameservers = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv4Nameservers() {{
                                                                addresses = new String[]{{
                                                                    add("laboriosam"),
                                                                    add("unde"),
                                                                    add("voluptates"),
                                                                    add("omnis"),
                                                                }};
                                                            }};;
                                                        }};;
                                                        ipv6 = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6() {{
                                                            address = "7409 Wintheiser Extension";
                                                            assignmentMode = UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6AssignmentModeEnum.STATIC_;
                                                            gateway = "eum";
                                                            nameservers = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2SvisIpv6Nameservers() {{
                                                                addresses = new String[]{{
                                                                    add("similique"),
                                                                    add("culpa"),
                                                                    add("suscipit"),
                                                                }};
                                                            }};;
                                                        }};;
                                                    }};;
                                                    vlanTagging = new UpdateDeviceApplianceUplinksSettingsRequestBodyInterfacesWan2VlanTagging() {{
                                                        enabled = false;
                                                        vlanId = 368785L;
                                                    }};;
                                                }};;
                                            }};);, "debitis");            

            UpdateDeviceApplianceUplinksSettingsResponse res = sdk.settings.updateDeviceApplianceUplinksSettings(req);

            if (res.updateDeviceApplianceUplinksSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceCameraVideoSettings

Update video settings for the given camera

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceCameraVideoSettingsRequest;
import org.openapis.openapi.models.operations.UpdateDeviceCameraVideoSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceCameraVideoSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceCameraVideoSettingsRequest req = new UpdateDeviceCameraVideoSettingsRequest("cumque") {{
                requestBody = new UpdateDeviceCameraVideoSettingsRequestBody() {{
                    externalRtspEnabled = false;
                }};;
            }};            

            UpdateDeviceCameraVideoSettingsResponse res = sdk.settings.updateDeviceCameraVideoSettings(req);

            if (res.updateDeviceCameraVideoSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceWirelessBluetoothSettings

Update the bluetooth settings for a wireless device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessBluetoothSettingsRequest;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessBluetoothSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessBluetoothSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceWirelessBluetoothSettingsRequest req = new UpdateDeviceWirelessBluetoothSettingsRequest("culpa") {{
                requestBody = new UpdateDeviceWirelessBluetoothSettingsRequestBody() {{
                    major = 655148L;
                    minor = 278183L;
                    uuid = "66005147-2821-4e7a-b72d-3504dda72150";
                }};;
            }};            

            UpdateDeviceWirelessBluetoothSettingsResponse res = sdk.settings.updateDeviceWirelessBluetoothSettings(req);

            if (res.updateDeviceWirelessBluetoothSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceWirelessRadioSettings

Update the radio settings of a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessRadioSettingsRequest;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessRadioSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelEnum;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelWidthEnum;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettingsChannelEnum;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessRadioSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceWirelessRadioSettingsRequest req = new UpdateDeviceWirelessRadioSettingsRequest("cum") {{
                requestBody = new UpdateDeviceWirelessRadioSettingsRequestBody() {{
                    fiveGhzSettings = new UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings() {{
                        channel = UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelEnum.ONE_HUNDRED_AND_SEVENTY_THREE;
                        channelWidth = UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelWidthEnum.EIGHTY;
                        targetPower = 963993L;
                    }};;
                    rfProfileId = "porro";
                    twoFourGhzSettings = new UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings() {{
                        channel = UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettingsChannelEnum.THREE;
                        targetPower = 4942L;
                    }};;
                }};;
            }};            

            UpdateDeviceWirelessRadioSettingsResponse res = sdk.settings.updateDeviceWirelessRadioSettings(req);

            if (res.updateDeviceWirelessRadioSettings200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("nulla") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkAlertsSettingsRequest req = new UpdateNetworkAlertsSettingsRequest("ut") {{
                requestBody = new UpdateNetworkAlertsSettingsRequestBody() {{
                    alerts = new org.openapis.openapi.models.operations.UpdateNetworkAlertsSettingsRequestBodyAlerts[]{{
                        add(new UpdateNetworkAlertsSettingsRequestBodyAlerts("eveniet") {{
                            alertDestinations = new UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations() {{
                                allAdmins = false;
                                emails = new String[]{{
                                    add("doloremque"),
                                    add("fuga"),
                                    add("ipsa"),
                                }};
                                httpServerIds = new String[]{{
                                    add("a"),
                                    add("et"),
                                }};
                                snmp = false;
                            }};
                            enabled = false;
                            filters = new java.util.HashMap<String, Object>() {{
                                put("autem", "facilis");
                            }};
                            type = "molestias";
                        }}),
                        add(new UpdateNetworkAlertsSettingsRequestBodyAlerts("veniam") {{
                            alertDestinations = new UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations() {{
                                allAdmins = false;
                                emails = new String[]{{
                                    add("repellat"),
                                    add("eum"),
                                    add("occaecati"),
                                    add("animi"),
                                }};
                                httpServerIds = new String[]{{
                                    add("illum"),
                                    add("repellat"),
                                    add("reprehenderit"),
                                }};
                                snmp = false;
                            }};
                            enabled = false;
                            filters = new java.util.HashMap<String, Object>() {{
                                put("quia", "expedita");
                            }};
                            type = "quisquam";
                        }}),
                    }};
                    defaultDestinations = new UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations() {{
                        allAdmins = false;
                        emails = new String[]{{
                            add("deserunt"),
                            add("fuga"),
                            add("quod"),
                            add("omnis"),
                        }};
                        httpServerIds = new String[]{{
                            add("accusamus"),
                            add("deleniti"),
                        }};
                        snmp = false;
                    }};;
                }};;
            }};            

            UpdateNetworkAlertsSettingsResponse res = sdk.settings.updateNetworkAlertsSettings(req);

            if (res.updateNetworkAlertsSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceFirewallSettings

Update the firewall settings for this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtection;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIpSourceGuard;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIpSourceGuardModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceFirewallSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceFirewallSettingsRequest req = new UpdateNetworkApplianceFirewallSettingsRequest("ab") {{
                requestBody = new UpdateNetworkApplianceFirewallSettingsRequestBody() {{
                    spoofingProtection = new UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtection() {{
                        ipSourceGuard = new UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIpSourceGuard() {{
                            mode = UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIpSourceGuardModeEnum.BLOCK;
                        }};;
                    }};;
                }};;
            }};            

            UpdateNetworkApplianceFirewallSettingsResponse res = sdk.settings.updateNetworkApplianceFirewallSettings(req);

            if (res.updateNetworkApplianceFirewallSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceSettings

Update the appliance settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSettingsRequestBodyClientTrackingMethodEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSettingsRequestBodyDeploymentModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSettingsRequestBodyDynamicDns;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceSettingsRequest req = new UpdateNetworkApplianceSettingsRequest("assumenda") {{
                requestBody = new UpdateNetworkApplianceSettingsRequestBody() {{
                    clientTrackingMethod = UpdateNetworkApplianceSettingsRequestBodyClientTrackingMethodEnum.UNIQUE_CLIENT_IDENTIFIER;
                    deploymentMode = UpdateNetworkApplianceSettingsRequestBodyDeploymentModeEnum.PASSTHROUGH;
                    dynamicDns = new UpdateNetworkApplianceSettingsRequestBodyDynamicDns() {{
                        enabled = false;
                        prefix = "placeat";
                    }};;
                }};;
            }};            

            UpdateNetworkApplianceSettingsResponse res = sdk.settings.updateNetworkApplianceSettings(req);

            if (res.updateNetworkApplianceSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceVlansSettings

Enable/Disable VLANs for the given network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlansSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlansSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceVlansSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceVlansSettingsRequest req = new UpdateNetworkApplianceVlansSettingsRequest("quia") {{
                requestBody = new UpdateNetworkApplianceVlansSettingsRequestBody() {{
                    vlansEnabled = false;
                }};;
            }};            

            UpdateNetworkApplianceVlansSettingsResponse res = sdk.settings.updateNetworkApplianceVlansSettings(req);

            if (res.updateNetworkApplianceVlansSettings200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("nisi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSettingsRequest req = new UpdateNetworkSettingsRequest("dignissimos") {{
                requestBody = new UpdateNetworkSettingsRequestBody() {{
                    localStatusPage = new UpdateNetworkSettingsRequestBodyLocalStatusPage() {{
                        authentication = new UpdateNetworkSettingsRequestBodyLocalStatusPageAuthentication() {{
                            enabled = false;
                            password = "adipisci";
                        }};;
                    }};;
                    localStatusPageEnabled = false;
                    remoteStatusPageEnabled = false;
                    securePort = new UpdateNetworkSettingsRequestBodySecurePort() {{
                        enabled = false;
                    }};;
                }};;
            }};            

            UpdateNetworkSettingsResponse res = sdk.settings.updateNetworkSettings(req);

            if (res.updateNetworkSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchSettings

Update switch network settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptions;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchSettingsRequest req = new UpdateNetworkSwitchSettingsRequest("quisquam") {{
                requestBody = new UpdateNetworkSwitchSettingsRequestBody() {{
                    powerExceptions = new org.openapis.openapi.models.operations.UpdateNetworkSwitchSettingsRequestBodyPowerExceptions[]{{
                        add(new UpdateNetworkSwitchSettingsRequestBodyPowerExceptions(UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum.USE_NETWORK_SETTING, "consequuntur") {{
                            powerType = UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum.REDUNDANT;
                            serial = "dicta";
                        }}),
                        add(new UpdateNetworkSwitchSettingsRequestBodyPowerExceptions(UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum.USE_NETWORK_SETTING, "quibusdam") {{
                            powerType = UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum.REDUNDANT;
                            serial = "labore";
                        }}),
                    }};
                    useCombinedPower = false;
                    vlan = 881754L;
                }};;
            }};            

            UpdateNetworkSwitchSettingsResponse res = sdk.settings.updateNetworkSwitchSettings(req);

            if (res.updateNetworkSwitchSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessBluetoothSettings

Update the Bluetooth settings for a network. See the docs page for <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessBluetoothSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessBluetoothSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessBluetoothSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessBluetoothSettingsRequest req = new UpdateNetworkWirelessBluetoothSettingsRequest("similique") {{
                requestBody = new UpdateNetworkWirelessBluetoothSettingsRequestBody() {{
                    advertisingEnabled = false;
                    major = 315758L;
                    majorMinorAssignmentMode = UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum.UNIQUE;
                    minor = 55067L;
                    scanningEnabled = false;
                    uuid = "69789b3b-0b17-4ff9-90b1-ec955b1bfb60";
                }};;
            }};            

            UpdateNetworkWirelessBluetoothSettingsResponse res = sdk.settings.updateNetworkWirelessBluetoothSettings(req);

            if (res.updateNetworkWirelessBluetoothSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSettings

Update the wireless settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSettingsRequest req = new UpdateNetworkWirelessSettingsRequest("modi") {{
                requestBody = new UpdateNetworkWirelessSettingsRequestBody() {{
                    ipv6BridgeEnabled = false;
                    ledLightsOn = false;
                    locationAnalyticsEnabled = false;
                    meshingEnabled = false;
                    upgradeStrategy = UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum.MINIMIZE_UPGRADE_TIME;
                }};;
            }};            

            UpdateNetworkWirelessSettingsResponse res = sdk.settings.updateNetworkWirelessSettings(req);

            if (res.updateNetworkWirelessSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsidSplashSettings

Modify the splash page settings for the given SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImage;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImageFormatEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImage;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImageFormatEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImage;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImageFormatEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidSplashSettingsRequest req = new UpdateNetworkWirelessSsidSplashSettingsRequest("iusto", "beatae") {{
                requestBody = new UpdateNetworkWirelessSsidSplashSettingsRequestBody() {{
                    allowSimultaneousLogins = false;
                    billing = new UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling() {{
                        freeAccess = new UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess() {{
                            durationInMinutes = 385076L;
                            enabled = false;
                        }};;
                        prepaidAccessFastLoginEnabled = false;
                        replyToEmailAddress = "in";
                    }};;
                    blockAllTrafficBeforeSignOn = false;
                    controllerDisconnectionBehavior = UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum.RESTRICTED;
                    guestSponsorship = new UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship() {{
                        durationInMinutes = 916179L;
                        guestCanRequestTimeframe = false;
                    }};;
                    redirectUrl = "voluptatibus";
                    sentryEnrollment = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment() {{
                        enforcedSystems = new String[]{{
                            add("earum"),
                        }};
                        strength = UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum.CLICK_THROUGH;
                        systemsManagerNetwork = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork("sequi");;
                    }};;
                    splashImage = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage() {{
                        extension = "voluptate";
                        image = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImage() {{
                            contents = "iste";
                            format = UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImageFormatEnum.JPG;
                        }};;
                        md5 = "architecto";
                    }};;
                    splashLogo = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo() {{
                        extension = "dolorum";
                        image = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImage() {{
                            contents = "quae";
                            format = UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImageFormatEnum.GIF;
                        }};;
                        md5 = "vero";
                    }};;
                    splashPrepaidFront = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront() {{
                        extension = "aliquid";
                        image = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImage() {{
                            contents = "nemo";
                            format = UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImageFormatEnum.PNG;
                        }};;
                        md5 = "et";
                    }};;
                    splashTimeout = 615805L;
                    splashUrl = "dolorem";
                    useRedirectUrl = false;
                    useSplashUrl = false;
                    welcomeMessage = "nihil";
                }};;
            }};            

            UpdateNetworkWirelessSsidSplashSettingsResponse res = sdk.settings.updateNetworkWirelessSsidSplashSettings(req);

            if (res.updateNetworkWirelessSsidSplashSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationAdaptivePolicySettings

Update global adaptive policy settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicySettingsRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicySettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicySettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationAdaptivePolicySettingsRequest req = new UpdateOrganizationAdaptivePolicySettingsRequest("excepturi") {{
                requestBody = new UpdateOrganizationAdaptivePolicySettingsRequestBody() {{
                    enabledNetworks = new String[]{{
                        add("voluptatum"),
                    }};
                }};;
            }};            

            UpdateOrganizationAdaptivePolicySettingsResponse res = sdk.settings.updateOrganizationAdaptivePolicySettings(req);

            if (res.updateOrganizationAdaptivePolicySettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
