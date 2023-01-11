package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoTargeting
 * Represents targeting information about video.
**/
public class VideoTargeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedPositionTypes")
    public VideoTargetingExcludedPositionTypesEnum[] excludedPositionTypes;
    public VideoTargeting withExcludedPositionTypes(VideoTargetingExcludedPositionTypesEnum[] excludedPositionTypes) {
        this.excludedPositionTypes = excludedPositionTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetedPositionTypes")
    public VideoTargetingTargetedPositionTypesEnum[] targetedPositionTypes;
    public VideoTargeting withTargetedPositionTypes(VideoTargetingTargetedPositionTypesEnum[] targetedPositionTypes) {
        this.targetedPositionTypes = targetedPositionTypes;
        return this;
    }
}