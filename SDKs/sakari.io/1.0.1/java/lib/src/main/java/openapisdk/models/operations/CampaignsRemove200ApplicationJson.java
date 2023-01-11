package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CampaignsRemove200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public CampaignsRemove200ApplicationJson withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}