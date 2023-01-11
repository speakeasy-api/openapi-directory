package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Link400ApplicationJsonErrors
 * Map that sums up all received values that seemed incorrect
**/
public class Link400ApplicationJsonErrors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public java.util.Map<String, String> fields;
    public Link400ApplicationJsonErrors withFields(java.util.Map<String, String> fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public Link400ApplicationJsonErrorsParameters parameters;
    public Link400ApplicationJsonErrors withParameters(Link400ApplicationJsonErrorsParameters parameters) {
        this.parameters = parameters;
        return this;
    }
}