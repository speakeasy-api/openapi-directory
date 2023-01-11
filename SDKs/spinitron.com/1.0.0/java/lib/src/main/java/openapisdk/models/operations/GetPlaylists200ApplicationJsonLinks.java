package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPlaylists200ApplicationJsonLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public openapisdk.models.shared.Link self;
    public GetPlaylists200ApplicationJsonLinks withSelf(openapisdk.models.shared.Link self) {
        this.self = self;
        return this;
    }
}