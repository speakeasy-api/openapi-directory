package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelContentDetails
 * Details about the content of a channel.
**/
public class ChannelContentDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relatedPlaylists")
    public ChannelContentDetailsRelatedPlaylists relatedPlaylists;
    public ChannelContentDetails withRelatedPlaylists(ChannelContentDetailsRelatedPlaylists relatedPlaylists) {
        this.relatedPlaylists = relatedPlaylists;
        return this;
    }
}