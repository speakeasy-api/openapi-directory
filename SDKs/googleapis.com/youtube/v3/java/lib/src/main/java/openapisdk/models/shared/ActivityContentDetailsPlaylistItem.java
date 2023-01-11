package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityContentDetailsPlaylistItem
 * Information about a new playlist item.
**/
public class ActivityContentDetailsPlaylistItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playlistId")
    public String playlistId;
    public ActivityContentDetailsPlaylistItem withPlaylistId(String playlistId) {
        this.playlistId = playlistId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playlistItemId")
    public String playlistItemId;
    public ActivityContentDetailsPlaylistItem withPlaylistItemId(String playlistItemId) {
        this.playlistItemId = playlistItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceId")
    public ResourceId resourceId;
    public ActivityContentDetailsPlaylistItem withResourceId(ResourceId resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}