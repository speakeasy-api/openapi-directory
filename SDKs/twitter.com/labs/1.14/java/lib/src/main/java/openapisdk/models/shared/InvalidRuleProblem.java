package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InvalidRuleProblem
 * The rule you have submitted is invalid.
**/
public class InvalidRuleProblem {
    @JsonProperty("detail")
    public String detail;
    public InvalidRuleProblem withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public InvalidRuleProblem withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public InvalidRuleProblem withType(String type) {
        this.type = type;
        return this;
    }
}