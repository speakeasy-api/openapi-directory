package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PairwiseMatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lcs")
    public IcNode lcs;
    public PairwiseMatch withLcs(IcNode lcs) {
        this.lcs = lcs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("match")
    public IcNode match;
    public PairwiseMatch withMatch(IcNode match) {
        this.match = match;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reference")
    public IcNode reference;
    public PairwiseMatch withReference(IcNode reference) {
        this.reference = reference;
        return this;
    }
}