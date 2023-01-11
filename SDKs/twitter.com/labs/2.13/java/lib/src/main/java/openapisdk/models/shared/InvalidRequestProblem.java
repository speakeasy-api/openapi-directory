package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InvalidRequestProblem
 * A problem that indicates this request is invalid.
**/
public class InvalidRequestProblem {
    @JsonProperty("detail")
    public String detail;
    public InvalidRequestProblem withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public InvalidRequestProblemErrors[] errors;
    public InvalidRequestProblem withErrors(InvalidRequestProblemErrors[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public InvalidRequestProblem withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public InvalidRequestProblem withType(String type) {
        this.type = type;
        return this;
    }
}