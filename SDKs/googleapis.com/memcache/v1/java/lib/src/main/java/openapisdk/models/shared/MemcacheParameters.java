package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MemcacheParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public MemcacheParameters withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("params")
    public java.util.Map<String, String> params;
    public MemcacheParameters withParams(java.util.Map<String, String> params) {
        this.params = params;
        return this;
    }
}