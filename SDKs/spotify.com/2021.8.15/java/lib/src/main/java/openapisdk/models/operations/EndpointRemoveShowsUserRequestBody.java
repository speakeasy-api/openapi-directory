package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EndpointRemoveShowsUserRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ids")
    public String[] ids;
    public EndpointRemoveShowsUserRequestBody withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
}