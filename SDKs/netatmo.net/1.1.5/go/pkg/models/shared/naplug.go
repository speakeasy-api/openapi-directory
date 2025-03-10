// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type NAPlug struct {
	ID                  *string        `json:"_id,omitempty"`
	Firmware            *int           `json:"firmware,omitempty"`
	LastBilan           *NAYearMonth   `json:"last_bilan,omitempty"`
	LastPlugSeen        *int           `json:"last_plug_seen,omitempty"`
	LastStatusStore     *int           `json:"last_status_store,omitempty"`
	Modules             []NAThermostat `json:"modules,omitempty"`
	Place               *NAPlace       `json:"place,omitempty"`
	PlugConnectedBoiler *int           `json:"plug_connected_boiler,omitempty"`
	StationName         *string        `json:"station_name,omitempty"`
	Syncing             *bool          `json:"syncing,omitempty"`
	// Included in every device or module. It defines the type of the device/module. Its values are among :
	// NAMain : for the base station
	// NAModule1 : for the outdoor module
	// NAModule4 : for the additionnal indoor module
	// NAModule3 : for the rain gauge module
	// NAPlug : for the thermostat relay/plug
	// NATherm1 : for the thermostat module
	//
	Type    *string `json:"type,omitempty"`
	UDPConn *bool   `json:"udp_conn,omitempty"`
	// It contains the current wifi status. The different thresholds to take into account are
	// RSSI_THRESHOLD_0 = 86 bad signal
	// RSSI_THRESHOLD_1 = 71 middle quality signal
	// RSSI_THRESHOLD_2 = 56 good signal
	//
	WifiStatus *int `json:"wifi_status,omitempty"`
}
