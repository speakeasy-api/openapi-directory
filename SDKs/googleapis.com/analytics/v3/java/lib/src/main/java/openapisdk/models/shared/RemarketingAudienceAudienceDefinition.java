package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RemarketingAudienceAudienceDefinition
 * The simple audience definition that will cause a user to be added to an audience.
**/
public class RemarketingAudienceAudienceDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeConditions")
    public IncludeConditions includeConditions;
    public RemarketingAudienceAudienceDefinition withIncludeConditions(IncludeConditions includeConditions) {
        this.includeConditions = includeConditions;
        return this;
    }
}