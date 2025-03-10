// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// AirQualityPointData - Successful Response
type AirQualityPointData struct {
	Data []AirQualityPointHourlyData `json:"data"`
	// Elevation above sea level in metres (for units 'metric', 'uk', 'ca') or feet (for units 'us')
	Elevation int64 `json:"elevation"`
	// Latitude of the point, always in the format <float><N/S>, for example ``23.5S``
	Lat string `json:"lat"`
	// Longitude of the point, always in the format <float><E/W>, for example ``23.5W``
	Lon string `json:"lon"`
	// Name of the timezone in format like 'Europe/London'. Available only when the place is specified through place ID.
	Timezone *string `json:"timezone,omitempty"`
}
