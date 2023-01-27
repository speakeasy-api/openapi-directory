package shared

// Target
// Information about the target of activity. For more information on how activity history is shared with users, see [Activity history visibility](https://developers.google.com/drive/activity/v2#activityhistory).
type Target struct {
	Drive       *Drive       `json:"drive,omitempty"`
	DriveItem   *DriveItem   `json:"driveItem,omitempty"`
	FileComment *FileComment `json:"fileComment,omitempty"`
	TeamDrive   *TeamDrive   `json:"teamDrive,omitempty"`
}
