package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RemoveRestrictionsV14XxApplicationProblemPlusJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public java.util.Map<String, Object> errors;
    public RemoveRestrictionsV14XxApplicationProblemPlusJson withErrors(java.util.Map<String, Object> errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public RemoveRestrictionsV14XxApplicationProblemPlusJson withStatus(Long status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public RemoveRestrictionsV14XxApplicationProblemPlusJson withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public RemoveRestrictionsV14XxApplicationProblemPlusJson withType(String type) {
        this.type = type;
        return this;
    }
}