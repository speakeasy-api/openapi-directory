package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FormatComplexity
 * Information on the complexity of this Format.
**/
public class FormatComplexity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lodHint")
    public Integer lodHint;
    public FormatComplexity withLodHint(Integer lodHint) {
        this.lodHint = lodHint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triangleCount")
    public String triangleCount;
    public FormatComplexity withTriangleCount(String triangleCount) {
        this.triangleCount = triangleCount;
        return this;
    }
}