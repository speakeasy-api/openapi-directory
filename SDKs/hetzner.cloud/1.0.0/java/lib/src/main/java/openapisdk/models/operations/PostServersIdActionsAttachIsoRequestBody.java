package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsAttachIsoRequestBody {
    @JsonProperty("iso")
    public String iso;
    public PostServersIdActionsAttachIsoRequestBody withIso(String iso) {
        this.iso = iso;
        return this;
    }
}