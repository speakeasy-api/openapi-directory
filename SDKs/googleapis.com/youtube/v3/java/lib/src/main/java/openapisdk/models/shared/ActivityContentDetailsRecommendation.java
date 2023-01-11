package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityContentDetailsRecommendation
 * Information that identifies the recommended resource.
**/
public class ActivityContentDetailsRecommendation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public ActivityContentDetailsRecommendationReasonEnum reason;
    public ActivityContentDetailsRecommendation withReason(ActivityContentDetailsRecommendationReasonEnum reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceId")
    public ResourceId resourceId;
    public ActivityContentDetailsRecommendation withResourceId(ResourceId resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seedResourceId")
    public ResourceId seedResourceId;
    public ActivityContentDetailsRecommendation withSeedResourceId(ResourceId seedResourceId) {
        this.seedResourceId = seedResourceId;
        return this;
    }
}