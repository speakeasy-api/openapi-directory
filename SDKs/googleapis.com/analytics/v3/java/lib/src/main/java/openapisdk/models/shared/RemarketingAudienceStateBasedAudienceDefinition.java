package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RemarketingAudienceStateBasedAudienceDefinition
 * A state based audience definition that will cause a user to be added or removed from an audience.
**/
public class RemarketingAudienceStateBasedAudienceDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludeConditions")
    public RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions excludeConditions;
    public RemarketingAudienceStateBasedAudienceDefinition withExcludeConditions(RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions excludeConditions) {
        this.excludeConditions = excludeConditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeConditions")
    public IncludeConditions includeConditions;
    public RemarketingAudienceStateBasedAudienceDefinition withIncludeConditions(IncludeConditions includeConditions) {
        this.includeConditions = includeConditions;
        return this;
    }
}