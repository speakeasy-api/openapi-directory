package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddUserToAccount400ApplicationJsonErrors
 * Map that sums up all received values that seemed incorrect
**/
public class AddUserToAccount400ApplicationJsonErrors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public java.util.Map<String, String> fields;
    public AddUserToAccount400ApplicationJsonErrors withFields(java.util.Map<String, String> fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public AddUserToAccount400ApplicationJsonErrorsParameters parameters;
    public AddUserToAccount400ApplicationJsonErrors withParameters(AddUserToAccount400ApplicationJsonErrorsParameters parameters) {
        this.parameters = parameters;
        return this;
    }
}