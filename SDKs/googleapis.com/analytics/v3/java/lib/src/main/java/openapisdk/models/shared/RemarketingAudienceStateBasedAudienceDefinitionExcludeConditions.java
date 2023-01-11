package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions
 * Defines the conditions to exclude users from the audience.
**/
public class RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exclusionDuration")
    public String exclusionDuration;
    public RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions withExclusionDuration(String exclusionDuration) {
        this.exclusionDuration = exclusionDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segment")
    public String segment;
    public RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions withSegment(String segment) {
        this.segment = segment;
        return this;
    }
}