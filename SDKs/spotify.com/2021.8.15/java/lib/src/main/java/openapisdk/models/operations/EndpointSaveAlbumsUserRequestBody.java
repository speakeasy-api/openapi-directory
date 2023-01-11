package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EndpointSaveAlbumsUserRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ids")
    public String[] ids;
    public EndpointSaveAlbumsUserRequestBody withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
}