package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EndpointCreatePlaylistRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collaborative")
    public Boolean collaborative;
    public EndpointCreatePlaylistRequestBody withCollaborative(Boolean collaborative) {
        this.collaborative = collaborative;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public EndpointCreatePlaylistRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public EndpointCreatePlaylistRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public")
    public Boolean public_;
    public EndpointCreatePlaylistRequestBody withPublic(Boolean public_) {
        this.public_ = public_;
        return this;
    }
}