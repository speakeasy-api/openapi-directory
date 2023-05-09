# uplinkSelection

### Available Operations

* [getNetworkApplianceTrafficShapingUplinkSelection](#getnetworkappliancetrafficshapinguplinkselection) - Show uplink selection settings for an MX network
* [updateNetworkApplianceTrafficShapingUplinkSelection](#updatenetworkappliancetrafficshapinguplinkselection) - Update uplink selection settings for an MX network

## getNetworkApplianceTrafficShapingUplinkSelection

Show uplink selection settings for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingUplinkSelectionRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceTrafficShapingUplinkSelectionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceTrafficShapingUplinkSelectionRequest req = new GetNetworkApplianceTrafficShapingUplinkSelectionRequest("eaque");            

            GetNetworkApplianceTrafficShapingUplinkSelectionResponse res = sdk.uplinkSelection.getNetworkApplianceTrafficShapingUplinkSelection(req);

            if (res.getNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceTrafficShapingUplinkSelection

Update uplink selection settings for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailback;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailbackImmediate;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest req = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest("fuga") {{
                requestBody = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody() {{
                    activeActiveAutoVpnEnabled = false;
                    defaultUplink = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum.WAN1;
                    failoverAndFailback = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailback() {{
                        immediate = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailbackImmediate(false);;
                    }};;
                    loadBalancingEnabled = false;
                    vpnTrafficUplinkPreferences = new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences[]{{
                        add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum.WAN2,                 new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters[]{{
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                                destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "vitae";
                                                                    fqdn = "quas";
                                                                    host = 992878L;
                                                                    network = "odit";
                                                                    port = "ea";
                                                                    vlan = 331021L;
                                                                }};;
                                                                id = "8199ab6f-11dc-449c-833f-6417d397addb";
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP;
                                                                source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "voluptate";
                                                                    host = 3006L;
                                                                    network = "et";
                                                                    port = "natus";
                                                                    vlan = 33570L;
                                                                }};;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "veritatis";
                                                        fqdn = "beatae";
                                                        host = 649610L;
                                                        network = "sed";
                                                        port = "ipsam";
                                                        vlan = 367788L;
                                                    }};
                                                    id = "a428e1bd-facf-48da-956f-544d0c016e37";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "animi";
                                                        host = 585668L;
                                                        network = "aut";
                                                        port = "mollitia";
                                                        vlan = 543874L;
                                                    }};
                                                }};
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                                destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "pariatur";
                                                                    fqdn = "quas";
                                                                    host = 890316L;
                                                                    network = "eaque";
                                                                    port = "quae";
                                                                    vlan = 647450L;
                                                                }};;
                                                                id = "b459f1a1-9915-4c97-88b8-8b923bc92bc9";
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                                source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "et";
                                                                    host = 51089L;
                                                                    network = "ipsa";
                                                                    port = "repellendus";
                                                                    vlan = 666171L;
                                                                }};;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "incidunt";
                                                        fqdn = "quo";
                                                        host = 722183L;
                                                        network = "omnis";
                                                        port = "dignissimos";
                                                        vlan = 282171L;
                                                    }};
                                                    id = "54ac1931-6937-4dc5-8188-eb9ae087bff1";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "mollitia";
                                                        host = 274281L;
                                                        network = "dignissimos";
                                                        port = "nobis";
                                                        vlan = 458565L;
                                                    }};
                                                }};
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                                destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "quidem";
                                                                    fqdn = "distinctio";
                                                                    host = 752837L;
                                                                    network = "expedita";
                                                                    port = "fugit";
                                                                    vlan = 172276L;
                                                                }};;
                                                                id = "81d3db73-b4fc-45c3-91cf-21de2038cc59";
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                                source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "dolorum";
                                                                    host = 629748L;
                                                                    network = "error";
                                                                    port = "totam";
                                                                    vlan = 315225L;
                                                                }};;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "nemo";
                                                        fqdn = "dolorum";
                                                        host = 954270L;
                                                        network = "ratione";
                                                        port = "blanditiis";
                                                        vlan = 501189L;
                                                    }};
                                                    id = "e2c28f4d-fb0c-46b7-93bd-c273d9a2b38f";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "laboriosam";
                                                        host = 648891L;
                                                        network = "numquam";
                                                        port = "soluta";
                                                        vlan = 592564L;
                                                    }};
                                                }};
                                            }}),
                                        }}) {{
                            failOverCriterion = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum.UPLINK_DOWN;
                            performanceClass = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum.CUSTOM) {{
                                builtinPerformanceClassName = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum.VO_IP;
                                customPerformanceClassId = "quam";
                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum.BUILTIN;
                            }};
                            preferredUplink = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum.LOAD_BALANCING;
                            trafficFilters = new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters[]{{
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "praesentium";
                                                        fqdn = "provident";
                                                        host = 613303L;
                                                        network = "cupiditate";
                                                        port = "sunt";
                                                        vlan = 794385L;
                                                    }};;
                                                    id = "4656a0df-757d-4f37-b98d-96345a05130a";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "totam";
                                                        host = 978833L;
                                                        network = "qui";
                                                        port = "similique";
                                                        vlan = 635783L;
                                                    }};;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "illo";
                                            fqdn = "ut";
                                            host = 387079L;
                                            network = "natus";
                                            port = "recusandae";
                                            vlan = 404125L;
                                        }};
                                        id = "14be4b47-a027-4cec-a9b4-0f21fbd7b256";
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "ipsa";
                                            host = 746912L;
                                            network = "laboriosam";
                                            port = "ipsa";
                                            vlan = 192146L;
                                        }};
                                    }};
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "aliquam";
                                                        fqdn = "quam";
                                                        host = 999969L;
                                                        network = "quae";
                                                        port = "autem";
                                                        vlan = 719018L;
                                                    }};;
                                                    id = "6d43c4c0-4296-4fc3-b125-d09417b2ed4e";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "pariatur";
                                                        host = 286018L;
                                                        network = "optio";
                                                        port = "eligendi";
                                                        vlan = 254690L;
                                                    }};;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "quos";
                                            fqdn = "voluptatem";
                                            host = 191344L;
                                            network = "magni";
                                            port = "labore";
                                            vlan = 372401L;
                                        }};
                                        id = "801931cb-5788-4cc2-b9c2-06b70a8e8305";
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "necessitatibus";
                                            host = 565139L;
                                            network = "mollitia";
                                            port = "perspiciatis";
                                            vlan = 589564L;
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                        add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum.WAN1,                 new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters[]{{
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                                destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "occaecati";
                                                                    fqdn = "omnis";
                                                                    host = 28806L;
                                                                    network = "numquam";
                                                                    port = "excepturi";
                                                                    vlan = 40713L;
                                                                }};;
                                                                id = "6c0da273-a07c-4f66-9e83-bbd3ea1bd5cf";
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                                source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "iusto";
                                                                    host = 922967L;
                                                                    network = "sapiente";
                                                                    port = "maiores";
                                                                    vlan = 107832L;
                                                                }};;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "quas";
                                                        fqdn = "veritatis";
                                                        host = 269383L;
                                                        network = "nisi";
                                                        port = "officia";
                                                        vlan = 533039L;
                                                    }};
                                                    id = "b896c6ac-512f-4dfc-a088-822938619ba7";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "eius";
                                                        host = 54243L;
                                                        network = "velit";
                                                        port = "non";
                                                        vlan = 321132L;
                                                    }};
                                                }};
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                                destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "itaque";
                                                                    fqdn = "molestias";
                                                                    host = 924861L;
                                                                    network = "et";
                                                                    port = "tempore";
                                                                    vlan = 818986L;
                                                                }};;
                                                                id = "870167d6-f66a-41eb-af3a-273885642376";
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                                                source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "animi";
                                                                    host = 623881L;
                                                                    network = "hic";
                                                                    port = "reprehenderit";
                                                                    vlan = 894921L;
                                                                }};;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "corporis";
                                                        fqdn = "nemo";
                                                        host = 461428L;
                                                        network = "facilis";
                                                        port = "laboriosam";
                                                        vlan = 268464L;
                                                    }};
                                                    id = "8e14033e-f4c4-4a56-b328-79582567ab7b";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "aut";
                                                        host = 887066L;
                                                        network = "provident";
                                                        port = "quaerat";
                                                        vlan = 748792L;
                                                    }};
                                                }};
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                                destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "delectus";
                                                                    fqdn = "adipisci";
                                                                    host = 353973L;
                                                                    network = "tenetur";
                                                                    port = "libero";
                                                                    vlan = 111706L;
                                                                }};;
                                                                id = "db2ef895-f6a3-44fe-a30a-2a2e3e225031";
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                                source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "nihil";
                                                                    host = 895852L;
                                                                    network = "nam";
                                                                    port = "neque";
                                                                    vlan = 626579L;
                                                                }};;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "assumenda";
                                                        fqdn = "consequuntur";
                                                        host = 821606L;
                                                        network = "reprehenderit";
                                                        port = "id";
                                                        vlan = 18639L;
                                                    }};
                                                    id = "02ef9fc0-dcb6-4bcc-b8e6-293e40e253fc";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "omnis";
                                                        host = 865758L;
                                                        network = "quas";
                                                        port = "illum";
                                                        vlan = 874174L;
                                                    }};
                                                }};
                                            }}),
                                        }}) {{
                            failOverCriterion = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum.UPLINK_DOWN;
                            performanceClass = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum.BUILTIN) {{
                                builtinPerformanceClassName = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum.VO_IP;
                                customPerformanceClassId = "iste";
                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum.CUSTOM;
                            }};
                            preferredUplink = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum.WAN2;
                            trafficFilters = new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters[]{{
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "soluta";
                                                        fqdn = "possimus";
                                                        host = 31717L;
                                                        network = "quos";
                                                        port = "qui";
                                                        vlan = 156186L;
                                                    }};;
                                                    id = "4496dee9-f992-48f5-84ca-4bc7a24ced95";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "fugiat";
                                                        host = 451960L;
                                                        network = "minus";
                                                        port = "repellat";
                                                        vlan = 154236L;
                                                    }};;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "doloremque";
                                            fqdn = "quia";
                                            host = 533802L;
                                            network = "cum";
                                            port = "in";
                                            vlan = 892397L;
                                        }};
                                        id = "3eff8c76-4b3b-475b-a6b7-368ad7abcfe5";
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "libero";
                                            host = 229770L;
                                            network = "rerum";
                                            port = "amet";
                                            vlan = 664306L;
                                        }};
                                    }};
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "tempora";
                                                        fqdn = "cupiditate";
                                                        host = 711983L;
                                                        network = "accusamus";
                                                        port = "libero";
                                                        vlan = 457648L;
                                                    }};;
                                                    id = "77f424df-546e-4657-b642-42eec2e1ae64";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "et";
                                                        host = 62512L;
                                                        network = "necessitatibus";
                                                        port = "voluptatem";
                                                        vlan = 125133L;
                                                    }};;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "vitae";
                                            fqdn = "aliquam";
                                            host = 628722L;
                                            network = "dolores";
                                            port = "laborum";
                                            vlan = 12743L;
                                        }};
                                        id = "1181533e-49f2-4158-9d82-3bfa894cb712";
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "quibusdam";
                                            host = 242978L;
                                            network = "at";
                                            port = "odit";
                                            vlan = 438566L;
                                        }};
                                    }};
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "dolore";
                                                        fqdn = "amet";
                                                        host = 81064L;
                                                        network = "amet";
                                                        port = "autem";
                                                        vlan = 452277L;
                                                    }};;
                                                    id = "bec5a210-7eed-4d2b-b628-22e2aef12fe3";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "in";
                                                        host = 306263L;
                                                        network = "itaque";
                                                        port = "dolorum";
                                                        vlan = 240300L;
                                                    }};;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "iusto";
                                            fqdn = "et";
                                            host = 259552L;
                                            network = "voluptatem";
                                            port = "minima";
                                            vlan = 835778L;
                                        }};
                                        id = "e489df24-5e86-45c9-ac26-e56ede5fd9be";
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "magni";
                                            host = 165858L;
                                            network = "veniam";
                                            port = "reiciendis";
                                            vlan = 642978L;
                                        }};
                                    }};
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "cupiditate";
                                                        fqdn = "veniam";
                                                        host = 458341L;
                                                        network = "amet";
                                                        port = "veritatis";
                                                        vlan = 118114L;
                                                    }};;
                                                    id = "51beb401-a003-45bb-abf3-83c5eb0e3cb7";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "impedit";
                                                        host = 42608L;
                                                        network = "modi";
                                                        port = "modi";
                                                        vlan = 135744L;
                                                    }};;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "sit";
                                            fqdn = "quo";
                                            host = 599658L;
                                            network = "a";
                                            port = "quas";
                                            vlan = 355636L;
                                        }};
                                        id = "8ca95d57-f41f-4c2b-80e9-1bc2298c551f";
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "voluptatem";
                                            host = 299758L;
                                            network = "exercitationem";
                                            port = "blanditiis";
                                            vlan = 999681L;
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                        add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum.WAN1,                 new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters[]{{
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                                destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "quis";
                                                                    fqdn = "accusantium";
                                                                    host = 704055L;
                                                                    network = "necessitatibus";
                                                                    port = "et";
                                                                    vlan = 171398L;
                                                                }};;
                                                                id = "15cbae43-c634-47a0-8a94-30221dd21fe6";
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP;
                                                                source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "harum";
                                                                    host = 617133L;
                                                                    network = "quibusdam";
                                                                    port = "tempore";
                                                                    vlan = 982971L;
                                                                }};;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "quo";
                                                        fqdn = "vitae";
                                                        host = 570630L;
                                                        network = "enim";
                                                        port = "optio";
                                                        vlan = 22199L;
                                                    }};
                                                    id = "4f75ca1f-2fa7-420f-b100-c50cca59880a";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "pariatur";
                                                        host = 246956L;
                                                        network = "consectetur";
                                                        port = "laudantium";
                                                        vlan = 970996L;
                                                    }};
                                                }};
                                            }}),
                                        }}) {{
                            failOverCriterion = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum.UPLINK_DOWN;
                            performanceClass = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum.BUILTIN) {{
                                builtinPerformanceClassName = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum.VO_IP;
                                customPerformanceClassId = "incidunt";
                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum.CUSTOM;
                            }};
                            preferredUplink = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum.WAN1;
                            trafficFilters = new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters[]{{
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "temporibus";
                                                        fqdn = "harum";
                                                        host = 545416L;
                                                        network = "voluptates";
                                                        port = "ipsa";
                                                        vlan = 942920L;
                                                    }};;
                                                    id = "b2cc04ef-83b5-4f47-b55e-39232bfde7a3";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "nihil";
                                                        host = 986131L;
                                                        network = "molestiae";
                                                        port = "corporis";
                                                        vlan = 611561L;
                                                    }};;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "quibusdam";
                                            fqdn = "ipsum";
                                            host = 255334L;
                                            network = "dolore";
                                            port = "suscipit";
                                            vlan = 87508L;
                                        }};
                                        id = "df8c12b1-4c28-4018-8b25-8182f311f39d";
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "ducimus";
                                            host = 480411L;
                                            network = "quia";
                                            port = "aspernatur";
                                            vlan = 547374L;
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                        add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum.WAN2,                 new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters[]{{
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                                destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "nostrum";
                                                                    fqdn = "perferendis";
                                                                    host = 783514L;
                                                                    network = "nostrum";
                                                                    port = "vitae";
                                                                    vlan = 725579L;
                                                                }};;
                                                                id = "3347815c-ea3e-4ae4-b589-feff621e8093";
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                                source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "eius";
                                                                    host = 809121L;
                                                                    network = "repellat";
                                                                    port = "consequuntur";
                                                                    vlan = 422498L;
                                                                }};;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "consectetur";
                                                        fqdn = "eligendi";
                                                        host = 228521L;
                                                        network = "accusantium";
                                                        port = "a";
                                                        vlan = 23095L;
                                                    }};
                                                    id = "0dac7f38-b120-478a-96ed-36b1bc21a033";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP6;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "laboriosam";
                                                        host = 645772L;
                                                        network = "maxime";
                                                        port = "nulla";
                                                        vlan = 585450L;
                                                    }};
                                                }};
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                                destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "facere";
                                                                    fqdn = "illo";
                                                                    host = 643785L;
                                                                    network = "totam";
                                                                    port = "doloribus";
                                                                    vlan = 920416L;
                                                                }};;
                                                                id = "b479309d-9e7c-47e2-a452-0f2391ceb44d";
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP;
                                                                source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "accusantium";
                                                                    host = 191809L;
                                                                    network = "iste";
                                                                    port = "dignissimos";
                                                                    vlan = 224741L;
                                                                }};;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "ad";
                                                        fqdn = "enim";
                                                        host = 112134L;
                                                        network = "recusandae";
                                                        port = "ut";
                                                        vlan = 585675L;
                                                    }};
                                                    id = "a91d2c2c-7b88-4e08-92c6-17d4035184c5";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "laboriosam";
                                                        host = 153867L;
                                                        network = "hic";
                                                        port = "voluptatem";
                                                        vlan = 359759L;
                                                    }};
                                                }};
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                                destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "sunt";
                                                                    fqdn = "perferendis";
                                                                    host = 48266L;
                                                                    network = "laborum";
                                                                    port = "voluptas";
                                                                    vlan = 206620L;
                                                                }};;
                                                                id = "56873c0e-2dc4-40d7-addd-29f12ba207e2";
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP;
                                                                source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "nostrum";
                                                                    host = 827387L;
                                                                    network = "minus";
                                                                    port = "maxime";
                                                                    vlan = 489658L;
                                                                }};;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "tenetur";
                                                        fqdn = "amet";
                                                        host = 310646L;
                                                        network = "modi";
                                                        port = "tempore";
                                                        vlan = 17762L;
                                                    }};
                                                    id = "257f45f0-760d-4810-81e4-4f5d845c2758";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "eum";
                                                        host = 581921L;
                                                        network = "doloremque";
                                                        port = "non";
                                                        vlan = 675855L;
                                                    }};
                                                }};
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                                destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "eum";
                                                                    fqdn = "illo";
                                                                    host = 438433L;
                                                                    network = "eum";
                                                                    port = "doloremque";
                                                                    vlan = 450875L;
                                                                }};;
                                                                id = "2b9eed75-0c6d-491e-87ae-e9ca3d575374";
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP6;
                                                                source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "dolorem";
                                                                    host = 351769L;
                                                                    network = "nihil";
                                                                    port = "occaecati";
                                                                    vlan = 969714L;
                                                                }};;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "ullam";
                                                        fqdn = "cupiditate";
                                                        host = 46268L;
                                                        network = "corporis";
                                                        port = "a";
                                                        vlan = 808576L;
                                                    }};
                                                    id = "45dac9bb-e0cc-413a-a442-0ab51a9b8f13";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "ea";
                                                        host = 781497L;
                                                        network = "sequi";
                                                        port = "ex";
                                                        vlan = 781699L;
                                                    }};
                                                }};
                                            }}),
                                        }}) {{
                            failOverCriterion = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum.UPLINK_DOWN;
                            performanceClass = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum.CUSTOM) {{
                                builtinPerformanceClassName = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum.VO_IP;
                                customPerformanceClassId = "velit";
                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum.BUILTIN;
                            }};
                            preferredUplink = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum.WAN1;
                            trafficFilters = new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters[]{{
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION_CATEGORY,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "quisquam";
                                                        fqdn = "similique";
                                                        host = 634544L;
                                                        network = "nulla";
                                                        port = "earum";
                                                        vlan = 700012L;
                                                    }};;
                                                    id = "b0f60032-1968-4a12-897a-34e81e241c6f";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "cum";
                                                        host = 492849L;
                                                        network = "beatae";
                                                        port = "aliquam";
                                                        vlan = 18575L;
                                                    }};;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "quibusdam";
                                            fqdn = "adipisci";
                                            host = 918025L;
                                            network = "ullam";
                                            port = "atque";
                                            vlan = 631520L;
                                        }};
                                        id = "b91e631c-11e9-45f4-b622-0b786d91f52d";
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "nesciunt";
                                            host = 597778L;
                                            network = "reprehenderit";
                                            port = "id";
                                            vlan = 839300L;
                                        }};
                                    }};
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "numquam";
                                                        fqdn = "expedita";
                                                        host = 736057L;
                                                        network = "officia";
                                                        port = "iste";
                                                        vlan = 364357L;
                                                    }};;
                                                    id = "8580e37e-e54a-496e-98ed-9ace0c45fb9b";
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "unde";
                                                        host = 778601L;
                                                        network = "deleniti";
                                                        port = "nam";
                                                        vlan = 398450L;
                                                    }};;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum.APPLICATION;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue() {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "sequi";
                                            fqdn = "porro";
                                            host = 626115L;
                                            network = "alias";
                                            port = "repellat";
                                            vlan = 347508L;
                                        }};
                                        id = "66eb1c19-d8ae-4f63-b7b3-1a5ed679f13a";
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "possimus";
                                            host = 644535L;
                                            network = "eveniet";
                                            port = "necessitatibus";
                                            vlan = 547120L;
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                    wanTrafficUplinkPreferences = new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences[]{{
                        add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum.WAN1,                 new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters[]{{
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                                cidr = "nobis";
                                                                                port = "ratione";
                                                                            }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                                cidr = "quod";
                                                                                host = 270875L;
                                                                                port = "eos";
                                                                                vlan = 905302L;
                                                                            }};) {{
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "neque";
                                                                    port = "voluptatibus";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "cumque";
                                                                    host = 13594L;
                                                                    port = "ut";
                                                                    vlan = 476932L;
                                                                }};) {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "assumenda";
                                                        port = "tempore";
                                                    }};
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "vel";
                                                        host = 85964L;
                                                        port = "ratione";
                                                        vlan = 66043L;
                                                    }};
                                                }};
                                            }}),
                                        }}) {{
                            preferredUplink = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum.WAN2;
                            trafficFilters = new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters[]{{
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "quam";
                                                                    port = "repellendus";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "ex";
                                                                    host = 435309L;
                                                                    port = "esse";
                                                                    vlan = 679954L;
                                                                }};) {{
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "eveniet";
                                                        port = "ullam";
                                                    }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "fugiat";
                                                        host = 862965L;
                                                        port = "neque";
                                                        vlan = 127984L;
                                                    }};) {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "tempora";
                                            port = "suscipit";
                                        }};
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "expedita";
                                            host = 827344L;
                                            port = "cupiditate";
                                            vlan = 877624L;
                                        }};
                                    }};
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "maxime";
                                                                    port = "voluptatibus";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "dignissimos";
                                                                    host = 574349L;
                                                                    port = "corporis";
                                                                    vlan = 324449L;
                                                                }};) {{
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "repudiandae";
                                                        port = "beatae";
                                                    }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "libero";
                                                        host = 305173L;
                                                        port = "mollitia";
                                                        vlan = 750457L;
                                                    }};) {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "saepe";
                                            port = "ea";
                                        }};
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "architecto";
                                            host = 853242L;
                                            port = "porro";
                                            vlan = 132247L;
                                        }};
                                    }};
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "quaerat";
                                                                    port = "explicabo";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "repellat";
                                                                    host = 764175L;
                                                                    port = "vitae";
                                                                    vlan = 248215L;
                                                                }};) {{
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "magnam";
                                                        port = "temporibus";
                                                    }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "ad";
                                                        host = 730025L;
                                                        port = "sunt";
                                                        vlan = 742157L;
                                                    }};) {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "beatae";
                                            port = "minus";
                                        }};
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "facere";
                                            host = 532464L;
                                            port = "ex";
                                            vlan = 189455L;
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                        add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum.WAN1,                 new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters[]{{
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                                cidr = "natus";
                                                                                port = "tempora";
                                                                            }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                                cidr = "voluptatum";
                                                                                host = 311543L;
                                                                                port = "soluta";
                                                                                vlan = 144498L;
                                                                            }};) {{
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP6;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "itaque";
                                                                    port = "minima";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "quas";
                                                                    host = 440536L;
                                                                    port = "ipsum";
                                                                    vlan = 441230L;
                                                                }};) {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "ipsum";
                                                        port = "ad";
                                                    }};
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "quibusdam";
                                                        host = 360531L;
                                                        port = "rem";
                                                        vlan = 291933L;
                                                    }};
                                                }};
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                                cidr = "dolorem";
                                                                                port = "atque";
                                                                            }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                                cidr = "quis";
                                                                                host = 11189L;
                                                                                port = "vitae";
                                                                                vlan = 453577L;
                                                                            }};) {{
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP6;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "quo";
                                                                    port = "doloremque";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "esse";
                                                                    host = 351046L;
                                                                    port = "cum";
                                                                    vlan = 917371L;
                                                                }};) {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "alias";
                                                        port = "sapiente";
                                                    }};
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "veniam";
                                                        host = 853591L;
                                                        port = "voluptatem";
                                                        vlan = 28021L;
                                                    }};
                                                }};
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                                cidr = "ipsam";
                                                                                port = "nemo";
                                                                            }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                                cidr = "facilis";
                                                                                host = 235427L;
                                                                                port = "beatae";
                                                                                vlan = 371220L;
                                                                            }};) {{
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "sint";
                                                                    port = "libero";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "esse";
                                                                    host = 486367L;
                                                                    port = "tempore";
                                                                    vlan = 473425L;
                                                                }};) {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "tenetur";
                                                        port = "accusantium";
                                                    }};
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "mollitia";
                                                        host = 73581L;
                                                        port = "occaecati";
                                                        vlan = 41660L;
                                                    }};
                                                }};
                                            }}),
                                        }}) {{
                            preferredUplink = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum.WAN2;
                            trafficFilters = new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters[]{{
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "labore";
                                                                    port = "velit";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "doloremque";
                                                                    host = 191590L;
                                                                    port = "et";
                                                                    vlan = 478520L;
                                                                }};) {{
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "officia";
                                                        port = "ut";
                                                    }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "incidunt";
                                                        host = 932928L;
                                                        port = "non";
                                                        vlan = 347476L;
                                                    }};) {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "occaecati";
                                            port = "ipsa";
                                        }};
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "praesentium";
                                            host = 651501L;
                                            port = "officiis";
                                            vlan = 761081L;
                                        }};
                                    }};
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "suscipit";
                                                                    port = "maiores";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "animi";
                                                                    host = 362741L;
                                                                    port = "ea";
                                                                    vlan = 241299L;
                                                                }};) {{
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "aliquam";
                                                        port = "enim";
                                                    }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "minus";
                                                        host = 320697L;
                                                        port = "aut";
                                                        vlan = 308870L;
                                                    }};) {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "rerum";
                                            port = "rem";
                                        }};
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "inventore";
                                            host = 213368L;
                                            port = "voluptatum";
                                            vlan = 565577L;
                                        }};
                                    }};
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "placeat";
                                                                    port = "quasi";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "adipisci";
                                                                    host = 894776L;
                                                                    port = "nisi";
                                                                    vlan = 397287L;
                                                                }};) {{
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP6;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "exercitationem";
                                                        port = "libero";
                                                    }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "cumque";
                                                        host = 712685L;
                                                        port = "illo";
                                                        vlan = 695117L;
                                                    }};) {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "earum";
                                            port = "excepturi";
                                        }};
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "quos";
                                            host = 530182L;
                                            port = "consequuntur";
                                            vlan = 462640L;
                                        }};
                                    }};
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "ea";
                                                                    port = "suscipit";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "assumenda";
                                                                    host = 936338L;
                                                                    port = "voluptates";
                                                                    vlan = 390428L;
                                                                }};) {{
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "alias";
                                                        port = "cupiditate";
                                                    }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "maxime";
                                                        host = 925689L;
                                                        port = "sequi";
                                                        vlan = 43938L;
                                                    }};) {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "perspiciatis";
                                            port = "neque";
                                        }};
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP6;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "voluptates";
                                            host = 901074L;
                                            port = "harum";
                                            vlan = 525719L;
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                        add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum.WAN2,                 new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters[]{{
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                                cidr = "minima";
                                                                                port = "repudiandae";
                                                                            }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                                cidr = "pariatur";
                                                                                host = 834007L;
                                                                                port = "quidem";
                                                                                vlan = 545554L;
                                                                            }};) {{
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "cumque";
                                                                    port = "amet";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "ipsa";
                                                                    host = 799520L;
                                                                    port = "dolore";
                                                                    vlan = 877159L;
                                                                }};) {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "mollitia";
                                                        port = "similique";
                                                    }};
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "doloremque";
                                                        host = 805315L;
                                                        port = "fugiat";
                                                        vlan = 36330L;
                                                    }};
                                                }};
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                                cidr = "perferendis";
                                                                                port = "quasi";
                                                                            }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                                cidr = "aut";
                                                                                host = 551998L;
                                                                                port = "voluptate";
                                                                                vlan = 398207L;
                                                                            }};) {{
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "labore";
                                                                    port = "natus";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "tenetur";
                                                                    host = 675138L;
                                                                    port = "ducimus";
                                                                    vlan = 650901L;
                                                                }};) {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "odio";
                                                        port = "sed";
                                                    }};
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "unde";
                                                        host = 946641L;
                                                        port = "quaerat";
                                                        vlan = 520929L;
                                                    }};
                                                }};
                                            }}),
                                        }}) {{
                            preferredUplink = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum.WAN2;
                            trafficFilters = new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters[]{{
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "unde";
                                                                    port = "nobis";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "libero";
                                                                    host = 621922L;
                                                                    port = "aut";
                                                                    vlan = 11939L;
                                                                }};) {{
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "neque";
                                                        port = "quaerat";
                                                    }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "earum";
                                                        host = 153869L;
                                                        port = "laborum";
                                                        vlan = 249131L;
                                                    }};) {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "qui";
                                            port = "ullam";
                                        }};
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "repellat";
                                            host = 721368L;
                                            port = "at";
                                            vlan = 111547L;
                                        }};
                                    }};
                                }}),
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "nesciunt";
                                                                    port = "ipsa";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "adipisci";
                                                                    host = 153893L;
                                                                    port = "quod";
                                                                    vlan = 656093L;
                                                                }};) {{
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "pariatur";
                                                        port = "magni";
                                                    }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "itaque";
                                                        host = 777086L;
                                                        port = "eos";
                                                        vlan = 308572L;
                                                    }};) {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "voluptatibus";
                                            port = "assumenda";
                                        }};
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "perferendis";
                                            host = 286092L;
                                            port = "voluptatum";
                                            vlan = 665182L;
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                        add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum.WAN2,                 new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters[]{{
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                                cidr = "quae";
                                                                                port = "aspernatur";
                                                                            }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                                cidr = "magni";
                                                                                host = 697942L;
                                                                                port = "non";
                                                                                vlan = 322213L;
                                                                            }};) {{
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP6;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "consequatur";
                                                                    port = "corporis";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "asperiores";
                                                                    host = 222852L;
                                                                    port = "exercitationem";
                                                                    vlan = 267728L;
                                                                }};) {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "ab";
                                                        port = "quia";
                                                    }};
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "libero";
                                                        host = 481557L;
                                                        port = "error";
                                                        vlan = 6797L;
                                                    }};
                                                }};
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                                cidr = "impedit";
                                                                                port = "impedit";
                                                                            }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                                cidr = "recusandae";
                                                                                host = 91155L;
                                                                                port = "accusamus";
                                                                                vlan = 733598L;
                                                                            }};) {{
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP6;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "dolores";
                                                                    port = "eos";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "labore";
                                                                    host = 508957L;
                                                                    port = "accusamus";
                                                                    vlan = 416129L;
                                                                }};) {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "magni";
                                                        port = "facilis";
                                                    }};
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.UDP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "quo";
                                                        host = 850149L;
                                                        port = "asperiores";
                                                        vlan = 618116L;
                                                    }};
                                                }};
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                                cidr = "atque";
                                                                                port = "sit";
                                                                            }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                                cidr = "aspernatur";
                                                                                host = 143632L;
                                                                                port = "porro";
                                                                                vlan = 746699L;
                                                                            }};) {{
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "excepturi";
                                                                    port = "tempore";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "distinctio";
                                                                    host = 561426L;
                                                                    port = "debitis";
                                                                    vlan = 827118L;
                                                                }};) {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "atque";
                                                        port = "a";
                                                    }};
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "possimus";
                                                        host = 576186L;
                                                        port = "eveniet";
                                                        vlan = 762217L;
                                                    }};
                                                }};
                                            }}),
                                            add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                                cidr = "perferendis";
                                                                                port = "modi";
                                                                            }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                                cidr = "quasi";
                                                                                host = 745272L;
                                                                                port = "minima";
                                                                                vlan = 551900L;
                                                                            }};) {{
                                                                protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ICMP6;
                                                            }};) {{
                                                type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                                value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "a";
                                                                    port = "sed";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "debitis";
                                                                    host = 846241L;
                                                                    port = "rem";
                                                                    vlan = 443262L;
                                                                }};) {{
                                                    destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "assumenda";
                                                        port = "perferendis";
                                                    }};
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.ANY;
                                                    source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "voluptatibus";
                                                        host = 778769L;
                                                        port = "explicabo";
                                                        vlan = 471654L;
                                                    }};
                                                }};
                                            }}),
                                        }}) {{
                            preferredUplink = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum.WAN1;
                            trafficFilters = new org.openapis.openapi.models.operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters[]{{
                                add(new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                                    cidr = "possimus";
                                                                    port = "aliquid";
                                                                }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                                    cidr = "est";
                                                                    host = 404859L;
                                                                    port = "saepe";
                                                                    vlan = 880550L;
                                                                }};) {{
                                                    protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                                }};) {{
                                    type = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum.CUSTOM;
                                    value = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue(                new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                                        cidr = "fugiat";
                                                        port = "quae";
                                                    }};,                 new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                                        cidr = "ad";
                                                        host = 171531L;
                                                        port = "quisquam";
                                                        vlan = 121989L;
                                                    }};) {{
                                        destination = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination() {{
                                            cidr = "tenetur";
                                            port = "tempore";
                                        }};
                                        protocol = UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum.TCP;
                                        source = new UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource() {{
                                            cidr = "incidunt";
                                            host = 530903L;
                                            port = "ex";
                                            vlan = 150907L;
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse res = sdk.uplinkSelection.updateNetworkApplianceTrafficShapingUplinkSelection(req);

            if (res.updateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
