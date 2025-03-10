// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// TeamDriveList - A list of Team Drives.
type TeamDriveList struct {
	// The list of Team Drives.
	Items []TeamDrive `json:"items,omitempty"`
	// This is always drive#teamDriveList
	Kind *string `json:"kind,omitempty"`
	// The page token for the next page of Team Drives.
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
