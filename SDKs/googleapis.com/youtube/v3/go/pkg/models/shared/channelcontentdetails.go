// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type ChannelContentDetailsRelatedPlaylists struct {
	// The ID of the playlist that contains the channel"s favorite videos. Use the playlistItems.insert and playlistItems.delete to add or remove items from that list.
	Favorites *string `json:"favorites,omitempty"`
	// The ID of the playlist that contains the channel"s liked videos. Use the playlistItems.insert and playlistItems.delete to add or remove items from that list.
	Likes *string `json:"likes,omitempty"`
	// The ID of the playlist that contains the channel"s uploaded videos. Use the videos.insert method to upload new videos and the videos.delete method to delete previously uploaded videos.
	Uploads *string `json:"uploads,omitempty"`
	// The ID of the playlist that contains the channel"s watch history. Use the playlistItems.insert and playlistItems.delete to add or remove items from that list.
	WatchHistory *string `json:"watchHistory,omitempty"`
	// The ID of the playlist that contains the channel"s watch later playlist. Use the playlistItems.insert and playlistItems.delete to add or remove items from that list.
	WatchLater *string `json:"watchLater,omitempty"`
}

// ChannelContentDetails - Details about the content of a channel.
type ChannelContentDetails struct {
	RelatedPlaylists *ChannelContentDetailsRelatedPlaylists `json:"relatedPlaylists,omitempty"`
}
