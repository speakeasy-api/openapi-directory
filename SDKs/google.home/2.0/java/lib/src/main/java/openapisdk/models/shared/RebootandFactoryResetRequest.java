package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RebootandFactoryResetRequest {
    @JsonProperty("params")
    public String params;
    public RebootandFactoryResetRequest withParams(String params) {
        this.params = params;
        return this;
    }
}