package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceId
 * A resource id is a generic reference that points to another YouTube resource.
**/
public class ResourceId {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelId")
    public String channelId;
    public ResourceId withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ResourceId withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playlistId")
    public String playlistId;
    public ResourceId withPlaylistId(String playlistId) {
        this.playlistId = playlistId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoId")
    public String videoId;
    public ResourceId withVideoId(String videoId) {
        this.videoId = videoId;
        return this;
    }
}