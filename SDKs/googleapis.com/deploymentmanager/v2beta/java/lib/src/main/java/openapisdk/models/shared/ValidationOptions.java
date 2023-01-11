package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ValidationOptions
 * Options for how to validate and process properties on a resource.
**/
public class ValidationOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemaValidation")
    public ValidationOptionsSchemaValidationEnum schemaValidation;
    public ValidationOptions withSchemaValidation(ValidationOptionsSchemaValidationEnum schemaValidation) {
        this.schemaValidation = schemaValidation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("undeclaredProperties")
    public ValidationOptionsUndeclaredPropertiesEnum undeclaredProperties;
    public ValidationOptions withUndeclaredProperties(ValidationOptionsUndeclaredPropertiesEnum undeclaredProperties) {
        this.undeclaredProperties = undeclaredProperties;
        return this;
    }
}