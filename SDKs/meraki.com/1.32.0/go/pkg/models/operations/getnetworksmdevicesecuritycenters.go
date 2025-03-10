// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type GetNetworkSmDeviceSecurityCentersRequest struct {
	DeviceID  string `pathParam:"style=simple,explode=false,name=deviceId"`
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkSmDeviceSecurityCenters200ApplicationJSON struct {
	// The name of the Antivirus.
	AntiVirusName *string `json:"antiVirusName,omitempty"`
	// The name of the Firewall.
	FireWallName *string `json:"fireWallName,omitempty"`
	// Boolean indicating if the device has Antivirus.
	HasAntiVirus *bool `json:"hasAntiVirus,omitempty"`
	// Boolean indicating if the device has a Firewall installed.
	HasFireWallInstalled *bool `json:"hasFireWallInstalled,omitempty"`
	// The Meraki identifier for the security center record.
	ID *string `json:"id,omitempty"`
	// Boolean indicating if the device has auto login disabled.
	IsAutoLoginDisabled *bool `json:"isAutoLoginDisabled,omitempty"`
	// Boolean indicating if the device has disk encryption.
	IsDiskEncrypted *bool `json:"isDiskEncrypted,omitempty"`
	// Boolean indicating if the device has a Firewall enabled.
	IsFireWallEnabled *bool `json:"isFireWallEnabled,omitempty"`
	// Boolean indicating if the device is rooted.
	IsRooted *bool `json:"isRooted,omitempty"`
	// A comma seperated list of procs running on the device.
	RunningProcs *string `json:"runningProcs,omitempty"`
}

type GetNetworkSmDeviceSecurityCentersResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Successful operation
	GetNetworkSmDeviceSecurityCenters200ApplicationJSONObjects []GetNetworkSmDeviceSecurityCenters200ApplicationJSON
}
