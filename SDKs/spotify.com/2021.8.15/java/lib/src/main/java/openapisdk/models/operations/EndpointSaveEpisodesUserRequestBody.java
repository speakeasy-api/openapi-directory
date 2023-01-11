package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EndpointSaveEpisodesUserRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ids")
    public String[] ids;
    public EndpointSaveEpisodesUserRequestBody withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
}