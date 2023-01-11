package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RemoveUserFromAccount400ApplicationJsonErrors
 * Map that sums up all received values that seemed incorrect
**/
public class RemoveUserFromAccount400ApplicationJsonErrors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public java.util.Map<String, String> fields;
    public RemoveUserFromAccount400ApplicationJsonErrors withFields(java.util.Map<String, String> fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public RemoveUserFromAccount400ApplicationJsonErrorsParameters parameters;
    public RemoveUserFromAccount400ApplicationJsonErrors withParameters(RemoveUserFromAccount400ApplicationJsonErrorsParameters parameters) {
        this.parameters = parameters;
        return this;
    }
}