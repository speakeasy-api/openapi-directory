package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class KeyValuePairInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kv_key")
    public String kvKey;
    public KeyValuePairInput withKvKey(String kvKey) {
        this.kvKey = kvKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kv_value")
    public Object kvValue;
    public KeyValuePairInput withKvValue(Object kvValue) {
        this.kvValue = kvValue;
        return this;
    }
}