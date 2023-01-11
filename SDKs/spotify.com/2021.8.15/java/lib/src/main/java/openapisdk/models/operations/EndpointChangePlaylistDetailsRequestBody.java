package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EndpointChangePlaylistDetailsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collaborative")
    public Boolean collaborative;
    public EndpointChangePlaylistDetailsRequestBody withCollaborative(Boolean collaborative) {
        this.collaborative = collaborative;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public EndpointChangePlaylistDetailsRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public EndpointChangePlaylistDetailsRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public")
    public Boolean public_;
    public EndpointChangePlaylistDetailsRequestBody withPublic(Boolean public_) {
        this.public_ = public_;
        return this;
    }
}