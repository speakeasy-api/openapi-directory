package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContentOutstreamPositionAssignedTargetingOptionDetails
 * Assigned content outstream position targeting option details. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`.
**/
public class ContentOutstreamPositionAssignedTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adType")
    public ContentOutstreamPositionAssignedTargetingOptionDetailsAdTypeEnum adType;
    public ContentOutstreamPositionAssignedTargetingOptionDetails withAdType(ContentOutstreamPositionAssignedTargetingOptionDetailsAdTypeEnum adType) {
        this.adType = adType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentOutstreamPosition")
    public ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum contentOutstreamPosition;
    public ContentOutstreamPositionAssignedTargetingOptionDetails withContentOutstreamPosition(ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum contentOutstreamPosition) {
        this.contentOutstreamPosition = contentOutstreamPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingOptionId")
    public String targetingOptionId;
    public ContentOutstreamPositionAssignedTargetingOptionDetails withTargetingOptionId(String targetingOptionId) {
        this.targetingOptionId = targetingOptionId;
        return this;
    }
}