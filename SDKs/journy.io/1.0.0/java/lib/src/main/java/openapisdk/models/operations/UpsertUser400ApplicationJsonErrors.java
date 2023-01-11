package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpsertUser400ApplicationJsonErrors
 * Map that sums up all received values that seemed incorrect
**/
public class UpsertUser400ApplicationJsonErrors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public java.util.Map<String, String> fields;
    public UpsertUser400ApplicationJsonErrors withFields(java.util.Map<String, String> fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public UpsertUser400ApplicationJsonErrorsParameters parameters;
    public UpsertUser400ApplicationJsonErrors withParameters(UpsertUser400ApplicationJsonErrorsParameters parameters) {
        this.parameters = parameters;
        return this;
    }
}