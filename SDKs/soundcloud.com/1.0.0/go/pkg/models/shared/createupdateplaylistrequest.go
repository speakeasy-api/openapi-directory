package shared

type CreateUpdatePlaylistRequestPlaylistSharingEnum string

const (
	CreateUpdatePlaylistRequestPlaylistSharingEnumPublic  CreateUpdatePlaylistRequestPlaylistSharingEnum = "public"
	CreateUpdatePlaylistRequestPlaylistSharingEnumPrivate CreateUpdatePlaylistRequestPlaylistSharingEnum = "private"
)

type CreateUpdatePlaylistRequestPlaylistTracks struct {
	ID string `json:"id"`
}

type CreateUpdatePlaylistRequestPlaylist struct {
	Description *string                                         `json:"description,omitempty"`
	Sharing     *CreateUpdatePlaylistRequestPlaylistSharingEnum `json:"sharing,omitempty"`
	Title       *string                                         `json:"title,omitempty"`
	Tracks      []CreateUpdatePlaylistRequestPlaylistTracks     `json:"tracks,omitempty"`
}

type CreateUpdatePlaylistRequest struct {
	Playlist *CreateUpdatePlaylistRequestPlaylist `json:"playlist,omitempty"`
}
