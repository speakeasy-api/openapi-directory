package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class KeyValuePairUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kv_value")
    public Object kvValue;
    public KeyValuePairUpdate withKvValue(Object kvValue) {
        this.kvValue = kvValue;
        return this;
    }
}