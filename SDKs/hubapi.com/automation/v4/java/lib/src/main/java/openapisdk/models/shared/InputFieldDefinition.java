package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InputFieldDefinition
 * Configuration for an input field on the custom action
**/
public class InputFieldDefinition {
    @JsonProperty("isRequired")
    public Boolean isRequired;
    public InputFieldDefinition withIsRequired(Boolean isRequired) {
        this.isRequired = isRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportedValueTypes")
    public InputFieldDefinitionSupportedValueTypesEnum[] supportedValueTypes;
    public InputFieldDefinition withSupportedValueTypes(InputFieldDefinitionSupportedValueTypesEnum[] supportedValueTypes) {
        this.supportedValueTypes = supportedValueTypes;
        return this;
    }
    @JsonProperty("typeDefinition")
    public FieldTypeDefinition typeDefinition;
    public InputFieldDefinition withTypeDefinition(FieldTypeDefinition typeDefinition) {
        this.typeDefinition = typeDefinition;
        return this;
    }
}