package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CustomFieldDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public CustomFieldDefinition withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultValue")
    public String defaultValue;
    public CustomFieldDefinition withDefaultValue(String defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isRequired")
    public Boolean isRequired;
    public CustomFieldDefinition withIsRequired(Boolean isRequired) {
        this.isRequired = isRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public CustomFieldDefinition withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public CustomFieldDefinition withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public CustomFieldDefinitionValues[] values;
    public CustomFieldDefinition withValues(CustomFieldDefinitionValues[] values) {
        this.values = values;
        return this;
    }
}