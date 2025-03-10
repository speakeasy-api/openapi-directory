// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// Team - Successful response
type Team struct {
	// Will be NULL, for future development.
	Address *string `json:"address,omitempty"`
	// City of team derived from parsing the address registered with FIRST.
	City *string `json:"city,omitempty"`
	// Country of team derived from parsing the address registered with FIRST.
	Country *string `json:"country,omitempty"`
	// Will be NULL, for future development.
	GmapsPlaceID *string `json:"gmaps_place_id,omitempty"`
	// Will be NULL, for future development.
	GmapsURL *string `json:"gmaps_url,omitempty"`
	// Location of the team's home championship each year as a key-value pair. The year (as a string) is the key, and the city is the value.
	HomeChampionship map[string]interface{} `json:"home_championship,omitempty"`
	// TBA team key with the format `frcXXXX` with `XXXX` representing the team number.
	Key string `json:"key"`
	// Will be NULL, for future development.
	Lat *float64 `json:"lat,omitempty"`
	// Will be NULL, for future development.
	Lng *float64 `json:"lng,omitempty"`
	// Will be NULL, for future development.
	LocationName *string `json:"location_name,omitempty"`
	// Team's motto as provided by FIRST. This field is deprecated and will return null - will be removed at end-of-season in 2019.
	Motto *string `json:"motto,omitempty"`
	// Official long name registered with FIRST.
	Name string `json:"name"`
	// Team nickname provided by FIRST.
	Nickname *string `json:"nickname,omitempty"`
	// Postal code from the team address.
	PostalCode *string `json:"postal_code,omitempty"`
	// First year the team officially competed.
	RookieYear *int64 `json:"rookie_year,omitempty"`
	// Name of team school or affilited group registered with FIRST.
	SchoolName *string `json:"school_name,omitempty"`
	// State of team derived from parsing the address registered with FIRST.
	StateProv *string `json:"state_prov,omitempty"`
	// Official team number issued by FIRST.
	TeamNumber int64 `json:"team_number"`
	// Official website associated with the team.
	Website *string `json:"website,omitempty"`
}
