// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// UpdateNetworkL3FirewallRulesRequestBodyRulesPolicyEnum - 'allow' or 'deny' traffic specified by this rule
type UpdateNetworkL3FirewallRulesRequestBodyRulesPolicyEnum string

const (
	UpdateNetworkL3FirewallRulesRequestBodyRulesPolicyEnumAllow UpdateNetworkL3FirewallRulesRequestBodyRulesPolicyEnum = "allow"
	UpdateNetworkL3FirewallRulesRequestBodyRulesPolicyEnumDeny  UpdateNetworkL3FirewallRulesRequestBodyRulesPolicyEnum = "deny"
)

func (e UpdateNetworkL3FirewallRulesRequestBodyRulesPolicyEnum) ToPointer() *UpdateNetworkL3FirewallRulesRequestBodyRulesPolicyEnum {
	return &e
}

func (e *UpdateNetworkL3FirewallRulesRequestBodyRulesPolicyEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "allow":
		fallthrough
	case "deny":
		*e = UpdateNetworkL3FirewallRulesRequestBodyRulesPolicyEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for UpdateNetworkL3FirewallRulesRequestBodyRulesPolicyEnum: %v", v)
	}
}

// UpdateNetworkL3FirewallRulesRequestBodyRulesProtocolEnum - The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')
type UpdateNetworkL3FirewallRulesRequestBodyRulesProtocolEnum string

const (
	UpdateNetworkL3FirewallRulesRequestBodyRulesProtocolEnumAny   UpdateNetworkL3FirewallRulesRequestBodyRulesProtocolEnum = "any"
	UpdateNetworkL3FirewallRulesRequestBodyRulesProtocolEnumIcmp  UpdateNetworkL3FirewallRulesRequestBodyRulesProtocolEnum = "icmp"
	UpdateNetworkL3FirewallRulesRequestBodyRulesProtocolEnumIcmp6 UpdateNetworkL3FirewallRulesRequestBodyRulesProtocolEnum = "icmp6"
	UpdateNetworkL3FirewallRulesRequestBodyRulesProtocolEnumTCP   UpdateNetworkL3FirewallRulesRequestBodyRulesProtocolEnum = "tcp"
	UpdateNetworkL3FirewallRulesRequestBodyRulesProtocolEnumUDP   UpdateNetworkL3FirewallRulesRequestBodyRulesProtocolEnum = "udp"
)

func (e UpdateNetworkL3FirewallRulesRequestBodyRulesProtocolEnum) ToPointer() *UpdateNetworkL3FirewallRulesRequestBodyRulesProtocolEnum {
	return &e
}

func (e *UpdateNetworkL3FirewallRulesRequestBodyRulesProtocolEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "any":
		fallthrough
	case "icmp":
		fallthrough
	case "icmp6":
		fallthrough
	case "tcp":
		fallthrough
	case "udp":
		*e = UpdateNetworkL3FirewallRulesRequestBodyRulesProtocolEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for UpdateNetworkL3FirewallRulesRequestBodyRulesProtocolEnum: %v", v)
	}
}

type UpdateNetworkL3FirewallRulesRequestBodyRules struct {
	// Description of the rule (optional)
	Comment *string `json:"comment,omitempty"`
	// Comma-separated list of destination IP address(es) (in IP or CIDR notation), fully-qualified domain names (FQDN) or 'any'
	DestCidr string `json:"destCidr"`
	// Comma-separated list of destination port(s) (integer in the range 1-65535), or 'any'
	DestPort *string `json:"destPort,omitempty"`
	// 'allow' or 'deny' traffic specified by this rule
	Policy UpdateNetworkL3FirewallRulesRequestBodyRulesPolicyEnum `json:"policy"`
	// The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')
	Protocol UpdateNetworkL3FirewallRulesRequestBodyRulesProtocolEnum `json:"protocol"`
	// Comma-separated list of source IP address(es) (in IP or CIDR notation), or 'any' (note: FQDN not supported for source addresses)
	SrcCidr string `json:"srcCidr"`
	// Comma-separated list of source port(s) (integer in the range 1-65535), or 'any'
	SrcPort *string `json:"srcPort,omitempty"`
	// Log this rule to syslog (true or false, boolean value) - only applicable if a syslog has been configured (optional)
	SyslogEnabled *bool `json:"syslogEnabled,omitempty"`
}

type UpdateNetworkL3FirewallRulesRequestBody struct {
	// An ordered array of the firewall rules (not including the default rule)
	Rules []UpdateNetworkL3FirewallRulesRequestBodyRules `json:"rules,omitempty"`
	// Log the special default rule (boolean value - enable only if you've configured a syslog server) (optional)
	SyslogDefaultRule *bool `json:"syslogDefaultRule,omitempty"`
}

type UpdateNetworkL3FirewallRulesRequest struct {
	RequestBody *UpdateNetworkL3FirewallRulesRequestBody `request:"mediaType=application/json"`
	NetworkID   string                                   `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkL3FirewallRulesResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Successful operation
	UpdateNetworkL3FirewallRules200ApplicationJSONObjects []map[string]interface{}
}
