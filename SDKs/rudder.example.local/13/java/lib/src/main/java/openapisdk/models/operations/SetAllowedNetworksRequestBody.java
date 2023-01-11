package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SetAllowedNetworksRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public java.util.Map<String, Object> value;
    public SetAllowedNetworksRequestBody withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}