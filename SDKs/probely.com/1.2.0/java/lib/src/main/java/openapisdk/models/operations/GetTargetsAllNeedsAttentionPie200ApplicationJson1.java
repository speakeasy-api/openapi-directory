package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetTargetsAllNeedsAttentionPie200ApplicationJson1
 * These are arrays, they are being displayed as objects with numerical indexes due to limitations of the framework.
 * 
**/
public class GetTargetsAllNeedsAttentionPie200ApplicationJson1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("0")
    public String zero;
    public GetTargetsAllNeedsAttentionPie200ApplicationJson1 withZero(String zero) {
        this.zero = zero;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("1")
    public Long one;
    public GetTargetsAllNeedsAttentionPie200ApplicationJson1 withOne(Long one) {
        this.one = one;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("2")
    public String two;
    public GetTargetsAllNeedsAttentionPie200ApplicationJson1 withTwo(String two) {
        this.two = two;
        return this;
    }
}