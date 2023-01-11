package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTargetsAllNeedsAttentionPie200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("0")
    public GetTargetsAllNeedsAttentionPie200ApplicationJson0 zero;
    public GetTargetsAllNeedsAttentionPie200ApplicationJson withZero(GetTargetsAllNeedsAttentionPie200ApplicationJson0 zero) {
        this.zero = zero;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("1")
    public GetTargetsAllNeedsAttentionPie200ApplicationJson1 one;
    public GetTargetsAllNeedsAttentionPie200ApplicationJson withOne(GetTargetsAllNeedsAttentionPie200ApplicationJson1 one) {
        this.one = one;
        return this;
    }
}