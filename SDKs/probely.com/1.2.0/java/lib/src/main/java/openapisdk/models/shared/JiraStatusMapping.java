package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class JiraStatusMapping {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accepted")
    public String accepted;
    public JiraStatusMapping withAccepted(String accepted) {
        this.accepted = accepted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixed")
    public String fixed;
    public JiraStatusMapping withFixed(String fixed) {
        this.fixed = fixed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invalid")
    public String invalid;
    public JiraStatusMapping withInvalid(String invalid) {
        this.invalid = invalid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notfixed")
    public String notfixed;
    public JiraStatusMapping withNotfixed(String notfixed) {
        this.notfixed = notfixed;
        return this;
    }
}