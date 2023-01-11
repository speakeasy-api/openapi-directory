package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MemcacheParametersInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("params")
    public java.util.Map<String, String> params;
    public MemcacheParametersInput withParams(java.util.Map<String, String> params) {
        this.params = params;
        return this;
    }
}