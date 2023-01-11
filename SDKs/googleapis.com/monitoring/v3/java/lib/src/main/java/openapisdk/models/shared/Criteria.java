package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Criteria
 * Criteria specific to the AlertPolicys that this Snooze applies to. The Snooze will suppress alerts that come from one of the AlertPolicys whose names are supplied.
**/
public class Criteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policies")
    public String[] policies;
    public Criteria withPolicies(String[] policies) {
        this.policies = policies;
        return this;
    }
}