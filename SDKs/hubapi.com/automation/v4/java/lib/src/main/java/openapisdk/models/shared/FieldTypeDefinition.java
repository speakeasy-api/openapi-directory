package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FieldTypeDefinition
 * The data type expected by an input field.
**/
public class FieldTypeDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldType")
    public FieldTypeDefinitionFieldTypeEnum fieldType;
    public FieldTypeDefinition withFieldType(FieldTypeDefinitionFieldTypeEnum fieldType) {
        this.fieldType = fieldType;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public FieldTypeDefinition withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("options")
    public Option[] options;
    public FieldTypeDefinition withOptions(Option[] options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("optionsUrl")
    public String optionsUrl;
    public FieldTypeDefinition withOptionsUrl(String optionsUrl) {
        this.optionsUrl = optionsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referencedObjectType")
    public FieldTypeDefinitionReferencedObjectTypeEnum referencedObjectType;
    public FieldTypeDefinition withReferencedObjectType(FieldTypeDefinitionReferencedObjectTypeEnum referencedObjectType) {
        this.referencedObjectType = referencedObjectType;
        return this;
    }
    @JsonProperty("type")
    public FieldTypeDefinitionTypeEnum type;
    public FieldTypeDefinition withType(FieldTypeDefinitionTypeEnum type) {
        this.type = type;
        return this;
    }
}