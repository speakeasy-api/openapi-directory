package shared

type Playlists struct {
	Collection []Playlist `json:"collection,omitempty"`
	NextHref   *string    `json:"next_href,omitempty"`
}
