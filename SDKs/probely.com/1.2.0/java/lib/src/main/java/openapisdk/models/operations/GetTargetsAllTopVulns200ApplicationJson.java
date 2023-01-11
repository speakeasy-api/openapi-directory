package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTargetsAllTopVulns200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("0")
    public String zero;
    public GetTargetsAllTopVulns200ApplicationJson withZero(String zero) {
        this.zero = zero;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("1")
    public String one;
    public GetTargetsAllTopVulns200ApplicationJson withOne(String one) {
        this.one = one;
        return this;
    }
}