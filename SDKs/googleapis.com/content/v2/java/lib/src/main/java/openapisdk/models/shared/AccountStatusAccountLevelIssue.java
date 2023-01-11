package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountStatusAccountLevelIssue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public AccountStatusAccountLevelIssue withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public String destination;
    public AccountStatusAccountLevelIssue withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public AccountStatusAccountLevelIssue withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentation")
    public String documentation;
    public AccountStatusAccountLevelIssue withDocumentation(String documentation) {
        this.documentation = documentation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AccountStatusAccountLevelIssue withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public String severity;
    public AccountStatusAccountLevelIssue withSeverity(String severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public AccountStatusAccountLevelIssue withTitle(String title) {
        this.title = title;
        return this;
    }
}