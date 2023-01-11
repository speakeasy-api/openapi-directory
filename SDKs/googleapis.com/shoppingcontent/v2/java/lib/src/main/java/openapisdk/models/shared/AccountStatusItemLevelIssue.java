package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountStatusItemLevelIssue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributeName")
    public String attributeName;
    public AccountStatusItemLevelIssue withAttributeName(String attributeName) {
        this.attributeName = attributeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public AccountStatusItemLevelIssue withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public AccountStatusItemLevelIssue withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public AccountStatusItemLevelIssue withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentation")
    public String documentation;
    public AccountStatusItemLevelIssue withDocumentation(String documentation) {
        this.documentation = documentation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numItems")
    public String numItems;
    public AccountStatusItemLevelIssue withNumItems(String numItems) {
        this.numItems = numItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolution")
    public String resolution;
    public AccountStatusItemLevelIssue withResolution(String resolution) {
        this.resolution = resolution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("servability")
    public String servability;
    public AccountStatusItemLevelIssue withServability(String servability) {
        this.servability = servability;
        return this;
    }
}