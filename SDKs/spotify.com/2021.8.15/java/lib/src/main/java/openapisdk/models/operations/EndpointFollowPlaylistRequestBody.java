package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EndpointFollowPlaylistRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public")
    public Boolean public_;
    public EndpointFollowPlaylistRequestBody withPublic(Boolean public_) {
        this.public_ = public_;
        return this;
    }
}