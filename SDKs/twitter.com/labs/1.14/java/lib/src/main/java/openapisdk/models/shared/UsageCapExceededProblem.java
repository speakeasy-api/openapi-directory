package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UsageCapExceededProblem
 * A problem that indicates that a usage cap has been exceeded.
**/
public class UsageCapExceededProblem {
    @JsonProperty("detail")
    public String detail;
    public UsageCapExceededProblem withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("period")
    public UsageCapExceededProblemPeriodEnum period;
    public UsageCapExceededProblem withPeriod(UsageCapExceededProblemPeriodEnum period) {
        this.period = period;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public UsageCapExceededProblemScopeEnum scope;
    public UsageCapExceededProblem withScope(UsageCapExceededProblemScopeEnum scope) {
        this.scope = scope;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public UsageCapExceededProblem withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public UsageCapExceededProblem withType(String type) {
        this.type = type;
        return this;
    }
}