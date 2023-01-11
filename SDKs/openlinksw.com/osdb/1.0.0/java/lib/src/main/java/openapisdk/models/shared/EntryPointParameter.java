package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EntryPointParameter {
    @JsonProperty("description")
    public String description;
    public EntryPointParameter withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("display_name")
    public String displayName;
    public EntryPointParameter withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonProperty("parameter_name")
    public String parameterName;
    public EntryPointParameter withParameterName(String parameterName) {
        this.parameterName = parameterName;
        return this;
    }
    @JsonProperty("permitted_values")
    public String[] permittedValues;
    public EntryPointParameter withPermittedValues(String[] permittedValues) {
        this.permittedValues = permittedValues;
        return this;
    }
    @JsonProperty("required")
    public Integer required;
    public EntryPointParameter withRequired(Integer required) {
        this.required = required;
        return this;
    }
    @JsonProperty("type")
    public EntryPointParameterTypeEnum type;
    public EntryPointParameter withType(EntryPointParameterTypeEnum type) {
        this.type = type;
        return this;
    }
}