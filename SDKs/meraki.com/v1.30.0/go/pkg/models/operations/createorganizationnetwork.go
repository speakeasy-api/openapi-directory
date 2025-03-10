// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type CreateOrganizationNetworkPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type CreateOrganizationNetworkRequestBodyProductTypesEnum string

const (
	CreateOrganizationNetworkRequestBodyProductTypesEnumAppliance       CreateOrganizationNetworkRequestBodyProductTypesEnum = "appliance"
	CreateOrganizationNetworkRequestBodyProductTypesEnumCamera          CreateOrganizationNetworkRequestBodyProductTypesEnum = "camera"
	CreateOrganizationNetworkRequestBodyProductTypesEnumCellularGateway CreateOrganizationNetworkRequestBodyProductTypesEnum = "cellularGateway"
	CreateOrganizationNetworkRequestBodyProductTypesEnumSensor          CreateOrganizationNetworkRequestBodyProductTypesEnum = "sensor"
	CreateOrganizationNetworkRequestBodyProductTypesEnumSwitch          CreateOrganizationNetworkRequestBodyProductTypesEnum = "switch"
	CreateOrganizationNetworkRequestBodyProductTypesEnumSystemsManager  CreateOrganizationNetworkRequestBodyProductTypesEnum = "systemsManager"
	CreateOrganizationNetworkRequestBodyProductTypesEnumWireless        CreateOrganizationNetworkRequestBodyProductTypesEnum = "wireless"
)

func (e *CreateOrganizationNetworkRequestBodyProductTypesEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "appliance":
		fallthrough
	case "camera":
		fallthrough
	case "cellularGateway":
		fallthrough
	case "sensor":
		fallthrough
	case "switch":
		fallthrough
	case "systemsManager":
		fallthrough
	case "wireless":
		*e = CreateOrganizationNetworkRequestBodyProductTypesEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for CreateOrganizationNetworkRequestBodyProductTypesEnum: %s", s)
	}
}

type CreateOrganizationNetworkRequestBody struct {
	// The ID of the network to copy configuration from. Other provided parameters will override the copied configuration, except type which must match this network's type exactly.
	CopyFromNetworkID *string `json:"copyFromNetworkId,omitempty"`
	// The name of the new network
	Name string `json:"name"`
	// Add any notes or additional information about this network here.
	Notes *string `json:"notes,omitempty"`
	// The product type(s) of the new network. If more than one type is included, the network will be a combined network.
	ProductTypes []CreateOrganizationNetworkRequestBodyProductTypesEnum `json:"productTypes"`
	// A list of tags to be applied to the network
	Tags []string `json:"tags,omitempty"`
	// The timezone of the network. For a list of allowed timezones, please see the 'TZ' column in the table in <a target='_blank' href='https://en.wikipedia.org/wiki/List_of_tz_database_time_zones'>this article.</a>
	TimeZone *string `json:"timeZone,omitempty"`
}

type CreateOrganizationNetworkRequest struct {
	PathParams CreateOrganizationNetworkPathParams
	Request    CreateOrganizationNetworkRequestBody `request:"mediaType=application/json"`
}

// CreateOrganizationNetwork201ApplicationJSON - Successful operation
type CreateOrganizationNetwork201ApplicationJSON struct {
	// Enrollment string for the network
	EnrollmentString *string `json:"enrollmentString,omitempty"`
	// Network ID
	ID *string `json:"id,omitempty"`
	// If the network is bound to a config template
	IsBoundToConfigTemplate *bool `json:"isBoundToConfigTemplate,omitempty"`
	// Network name
	Name *string `json:"name,omitempty"`
	// Notes for the network
	Notes *string `json:"notes,omitempty"`
	// Organization ID
	OrganizationID *string `json:"organizationId,omitempty"`
	// List of the product types that the network supports
	ProductTypes []string `json:"productTypes,omitempty"`
	// Network tags
	Tags []string `json:"tags,omitempty"`
	// Timezone of the network
	TimeZone *string `json:"timeZone,omitempty"`
	// URL to the network Dashboard UI
	URL *string `json:"url,omitempty"`
}

type CreateOrganizationNetworkResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Successful operation
	CreateOrganizationNetwork201ApplicationJSONObject *CreateOrganizationNetwork201ApplicationJSON
}
