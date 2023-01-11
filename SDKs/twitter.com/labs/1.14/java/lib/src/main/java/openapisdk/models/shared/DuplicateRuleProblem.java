package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DuplicateRuleProblem
 * The rule you have submitted is a duplicate.
**/
public class DuplicateRuleProblem {
    @JsonProperty("detail")
    public String detail;
    public DuplicateRuleProblem withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public DuplicateRuleProblem withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public DuplicateRuleProblem withType(String type) {
        this.type = type;
        return this;
    }
}