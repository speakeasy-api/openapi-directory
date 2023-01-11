package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelSectionContentDetails
 * Details about a channelsection, including playlists and channels.
**/
public class ChannelSectionContentDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channels")
    public String[] channels;
    public ChannelSectionContentDetails withChannels(String[] channels) {
        this.channels = channels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playlists")
    public String[] playlists;
    public ChannelSectionContentDetails withPlaylists(String[] playlists) {
        this.playlists = playlists;
        return this;
    }
}