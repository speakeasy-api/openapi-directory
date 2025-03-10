// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// LeaderboardConfigurationDetail - A leaderboard configuration detail.
type LeaderboardConfigurationDetail struct {
	// The icon url of this leaderboard. Writes to this field are ignored.
	IconURL *string `json:"iconUrl,omitempty"`
	// Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#leaderboardConfigurationDetail`.
	Kind *string `json:"kind,omitempty"`
	// A localized string bundle resource.
	Name *LocalizedStringBundle `json:"name,omitempty"`
	// A number format resource.
	ScoreFormat *GamesNumberFormatConfiguration `json:"scoreFormat,omitempty"`
	// The sort rank of this leaderboard. Writes to this field are ignored.
	SortRank *int `json:"sortRank,omitempty"`
}
