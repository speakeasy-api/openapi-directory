package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Rule
 * A rule to be applied in a Policy.
**/
public class Rule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public RuleActionEnum action;
    public Rule withAction(RuleActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conditions")
    public Condition[] conditions;
    public Rule withConditions(Condition[] conditions) {
        this.conditions = conditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Rule withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in")
    public String[] in;
    public Rule withIn(String[] in) {
        this.in = in;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logConfig")
    public LogConfig[] logConfig;
    public Rule withLogConfig(LogConfig[] logConfig) {
        this.logConfig = logConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notIn")
    public String[] notIn;
    public Rule withNotIn(String[] notIn) {
        this.notIn = notIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public String[] permissions;
    public Rule withPermissions(String[] permissions) {
        this.permissions = permissions;
        return this;
    }
}