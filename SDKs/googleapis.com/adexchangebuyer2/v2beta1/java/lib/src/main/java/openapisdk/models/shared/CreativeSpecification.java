package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreativeSpecification
 * Represents information for a creative that is associated with a Programmatic Guaranteed/Preferred Deal in Ad Manager.
**/
public class CreativeSpecification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeCompanionSizes")
    public AdSize[] creativeCompanionSizes;
    public CreativeSpecification withCreativeCompanionSizes(AdSize[] creativeCompanionSizes) {
        this.creativeCompanionSizes = creativeCompanionSizes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeSize")
    public AdSize creativeSize;
    public CreativeSpecification withCreativeSize(AdSize creativeSize) {
        this.creativeSize = creativeSize;
        return this;
    }
}