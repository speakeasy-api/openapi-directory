package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RulesCapProblem
 * You have exceeded the maximum number of rules.
**/
public class RulesCapProblem {
    @JsonProperty("detail")
    public String detail;
    public RulesCapProblem withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public RulesCapProblem withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public RulesCapProblem withType(String type) {
        this.type = type;
        return this;
    }
}