package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CriteriaTargeting
 * Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. This cannot be filtered using list filter syntax.
**/
public class CriteriaTargeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedCriteriaIds")
    public String[] excludedCriteriaIds;
    public CriteriaTargeting withExcludedCriteriaIds(String[] excludedCriteriaIds) {
        this.excludedCriteriaIds = excludedCriteriaIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetedCriteriaIds")
    public String[] targetedCriteriaIds;
    public CriteriaTargeting withTargetedCriteriaIds(String[] targetedCriteriaIds) {
        this.targetedCriteriaIds = targetedCriteriaIds;
        return this;
    }
}