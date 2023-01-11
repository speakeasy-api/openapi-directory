package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChangeRequestChanges {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public ChangeRequestChangesRules[] rules;
    public ChangeRequestChanges withRules(ChangeRequestChangesRules[] rules) {
        this.rules = rules;
        return this;
    }
}