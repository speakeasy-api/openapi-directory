// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"time"
)

type GetOrganizationFirmwareUpgradesPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type GetOrganizationFirmwareUpgradesQueryParams struct {
	// The product type in a given upgrade ID
	ProductType []string `queryParam:"style=form,explode=false,name=productType"`
	// The status of an upgrade
	Status []string `queryParam:"style=form,explode=false,name=status"`
}

type GetOrganizationFirmwareUpgradesRequest struct {
	PathParams  GetOrganizationFirmwareUpgradesPathParams
	QueryParams GetOrganizationFirmwareUpgradesQueryParams
}

// GetOrganizationFirmwareUpgrades200ApplicationJSONFromVersion - ID of the upgrade's starting version
type GetOrganizationFirmwareUpgrades200ApplicationJSONFromVersion struct {
	// Firmware version ID
	ID *string `json:"id,omitempty"`
	// Release date of the firmware version
	ReleaseDate *time.Time `json:"releaseDate,omitempty"`
	// Release type of the firmware version
	ReleaseType *string `json:"releaseType,omitempty"`
	// Firmware version short name
	ShortName *string `json:"shortName,omitempty"`
}

// GetOrganizationFirmwareUpgrades200ApplicationJSONNetwork - Network of the upgrade
type GetOrganizationFirmwareUpgrades200ApplicationJSONNetwork struct {
	// ID of network
	ID *string `json:"id,omitempty"`
	// The network
	Name *string `json:"name,omitempty"`
}

// GetOrganizationFirmwareUpgrades200ApplicationJSONToVersion - ID of the upgrade's target version
type GetOrganizationFirmwareUpgrades200ApplicationJSONToVersion struct {
	// Firmware version ID
	ID *string `json:"id,omitempty"`
	// Release date of the firmware version
	ReleaseDate *time.Time `json:"releaseDate,omitempty"`
	// Release type of the firmware version
	ReleaseType *string `json:"releaseType,omitempty"`
	// Firmware version short name
	ShortName *string `json:"shortName,omitempty"`
}

type GetOrganizationFirmwareUpgrades200ApplicationJSON struct {
	// Timestamp when upgrade completed. Null if status pending.
	CompletedAt *string `json:"completedAt,omitempty"`
	// ID of the upgrade's starting version
	FromVersion *GetOrganizationFirmwareUpgrades200ApplicationJSONFromVersion `json:"fromVersion,omitempty"`
	// Network of the upgrade
	Network *GetOrganizationFirmwareUpgrades200ApplicationJSONNetwork `json:"network,omitempty"`
	// product upgraded [wireless, appliance, switch, systemsManager, camera, cellularGateway, sensor]
	ProductType *string `json:"productType,omitempty"`
	// Status of upgrade event: [Cancelled, Completed]
	Status *string `json:"status,omitempty"`
	// Scheduled start time
	Time *time.Time `json:"time,omitempty"`
	// ID of the upgrade's target version
	ToVersion *GetOrganizationFirmwareUpgrades200ApplicationJSONToVersion `json:"toVersion,omitempty"`
	// The upgrade batch
	UpgradeBatchID *string `json:"upgradeBatchId,omitempty"`
	// The upgrade
	UpgradeID *string `json:"upgradeId,omitempty"`
}

type GetOrganizationFirmwareUpgradesResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Successful operation
	GetOrganizationFirmwareUpgrades200ApplicationJSONObjects []GetOrganizationFirmwareUpgrades200ApplicationJSON
}
