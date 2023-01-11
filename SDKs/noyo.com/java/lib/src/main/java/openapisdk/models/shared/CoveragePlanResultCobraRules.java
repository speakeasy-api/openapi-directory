package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CoveragePlanResultCobraRules
 * COBRA rules for the group medical plan
**/
public class CoveragePlanResultCobraRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eligible")
    public Boolean eligible;
    public CoveragePlanResultCobraRules withEligible(Boolean eligible) {
        this.eligible = eligible;
        return this;
    }
}