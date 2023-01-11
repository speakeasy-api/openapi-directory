package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RestoreArchive200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directive")
    public String directive;
    public RestoreArchive200ApplicationJsonData withDirective(String directive) {
        this.directive = directive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("full")
    public String full;
    public RestoreArchive200ApplicationJsonData withFull(String full) {
        this.full = full;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groups")
    public String groups;
    public RestoreArchive200ApplicationJsonData withGroups(String groups) {
        this.groups = groups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public String parameters;
    public RestoreArchive200ApplicationJsonData withParameters(String parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public String rules;
    public RestoreArchive200ApplicationJsonData withRules(String rules) {
        this.rules = rules;
        return this;
    }
}