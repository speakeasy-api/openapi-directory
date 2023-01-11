package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TwoHundredResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public Object[] result;
    public TwoHundredResult withResult(Object[] result) {
        this.result = result;
        return this;
    }
}