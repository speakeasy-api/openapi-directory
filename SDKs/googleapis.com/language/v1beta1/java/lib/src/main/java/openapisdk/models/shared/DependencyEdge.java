package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DependencyEdge
 * Represents dependency parse tree information for a token.
**/
public class DependencyEdge {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headTokenIndex")
    public Integer headTokenIndex;
    public DependencyEdge withHeadTokenIndex(Integer headTokenIndex) {
        this.headTokenIndex = headTokenIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public DependencyEdgeLabelEnum label;
    public DependencyEdge withLabel(DependencyEdgeLabelEnum label) {
        this.label = label;
        return this;
    }
}