// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// UpdateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6 - The IPv6 settings of the interface.
type UpdateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6 struct {
	// The IPv6 address of the interface. Required if assignmentMode is included and set as 'static'. Must not be included if assignmentMode is 'eui-64'.
	Address *string `json:"address,omitempty"`
	// The IPv6 assignment mode for the interface. Can be either 'eui-64' or 'static'.
	AssignmentMode *string `json:"assignmentMode,omitempty"`
	// The IPv6 default gateway of the interface. Required if prefix is defined and this is the first interface with IPv6 configured for the stack.
	Gateway *string `json:"gateway,omitempty"`
	// The IPv6 prefix of the interface. Required if IPv6 object is included and interface does not already have ipv6.prefix configured
	Prefix *string `json:"prefix,omitempty"`
}

// UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum - Enable multicast support if, multicast routing between VLANs is required. Options are, 'disabled', 'enabled' or 'IGMP snooping querier'.
type UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum string

const (
	UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnumIgmpSnoopingQuerier UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum = "IGMP snooping querier"
	UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnumDisabled            UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum = "disabled"
	UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnumEnabled             UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum = "enabled"
)

func (e *UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "IGMP snooping querier":
		fallthrough
	case "disabled":
		fallthrough
	case "enabled":
		*e = UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum: %s", s)
	}
}

// UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings - The OSPF routing settings of the interface.
type UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings struct {
	// The OSPF area to which this interface should belong. Can be either 'disabled' or the identifier of an existing OSPF area.
	Area *string `json:"area,omitempty"`
	// The path cost for this interface. Defaults to 1, but can be increased up to 65535 to give lower priority.
	Cost *int64 `json:"cost,omitempty"`
	// When enabled, OSPF will not run on the interface, but the subnet will still be advertised.
	IsPassiveEnabled *bool `json:"isPassiveEnabled,omitempty"`
}

type UpdateNetworkSwitchStackRoutingInterfaceRequestBody struct {
	// The next hop for any traffic that isn't going to a directly connected subnet or over a static route. This IP address must exist in a subnet with a routed interface.
	DefaultGateway *string `json:"defaultGateway,omitempty"`
	// The IP address this switch stack will use for layer 3 routing on this VLAN or subnet. This cannot be the same as the switch's management IP.
	InterfaceIP *string `json:"interfaceIp,omitempty"`
	// The IPv6 settings of the interface.
	Ipv6 *UpdateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6 `json:"ipv6,omitempty"`
	// Enable multicast support if, multicast routing between VLANs is required. Options are, 'disabled', 'enabled' or 'IGMP snooping querier'.
	MulticastRouting *UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum `json:"multicastRouting,omitempty"`
	// A friendly name or description for the interface or VLAN.
	Name *string `json:"name,omitempty"`
	// The OSPF routing settings of the interface.
	OspfSettings *UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings `json:"ospfSettings,omitempty"`
	// The network that this routed interface is on, in CIDR notation (ex. 10.1.1.0/24).
	Subnet *string `json:"subnet,omitempty"`
	// The VLAN this routed interface is on. VLAN must be between 1 and 4094.
	VlanID *int64 `json:"vlanId,omitempty"`
}

type UpdateNetworkSwitchStackRoutingInterfaceRequest struct {
	RequestBody   *UpdateNetworkSwitchStackRoutingInterfaceRequestBody `request:"mediaType=application/json"`
	InterfaceID   string                                               `pathParam:"style=simple,explode=false,name=interfaceId"`
	NetworkID     string                                               `pathParam:"style=simple,explode=false,name=networkId"`
	SwitchStackID string                                               `pathParam:"style=simple,explode=false,name=switchStackId"`
}

type UpdateNetworkSwitchStackRoutingInterfaceResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Successful operation
	UpdateNetworkSwitchStackRoutingInterface200ApplicationJSONObject map[string]interface{}
}
