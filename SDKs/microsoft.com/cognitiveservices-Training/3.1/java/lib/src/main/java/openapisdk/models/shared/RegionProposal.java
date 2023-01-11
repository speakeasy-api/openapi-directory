package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegionProposal {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boundingBox")
    public BoundingBox boundingBox;
    public RegionProposal withBoundingBox(BoundingBox boundingBox) {
        this.boundingBox = boundingBox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidence")
    public Float confidence;
    public RegionProposal withConfidence(Float confidence) {
        this.confidence = confidence;
        return this;
    }
}