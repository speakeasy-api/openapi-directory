package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LocationRuleUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conditions")
    public LocationRuleUpdateConditions conditions;
    public LocationRuleUpdate withConditions(LocationRuleUpdateConditions conditions) {
        this.conditions = conditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public LocationRuleUpdate withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public LocationRuleUpdate withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public java.util.Map<String, Object> parameters;
    public LocationRuleUpdate withParameters(java.util.Map<String, Object> parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public LocationRuleTypeEnum type;
    public LocationRuleUpdate withType(LocationRuleTypeEnum type) {
        this.type = type;
        return this;
    }
}