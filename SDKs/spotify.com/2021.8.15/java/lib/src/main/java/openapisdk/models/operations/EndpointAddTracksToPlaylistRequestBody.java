package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EndpointAddTracksToPlaylistRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public Integer position;
    public EndpointAddTracksToPlaylistRequestBody withPosition(Integer position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uris")
    public String[] uris;
    public EndpointAddTracksToPlaylistRequestBody withUris(String[] uris) {
        this.uris = uris;
        return this;
    }
}