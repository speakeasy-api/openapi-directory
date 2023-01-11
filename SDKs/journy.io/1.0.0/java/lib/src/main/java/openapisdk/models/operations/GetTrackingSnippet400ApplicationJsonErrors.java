package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetTrackingSnippet400ApplicationJsonErrors
 * Map that sums up all received values that seemed incorrect
**/
public class GetTrackingSnippet400ApplicationJsonErrors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public java.util.Map<String, String> fields;
    public GetTrackingSnippet400ApplicationJsonErrors withFields(java.util.Map<String, String> fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public GetTrackingSnippet400ApplicationJsonErrorsParameters parameters;
    public GetTrackingSnippet400ApplicationJsonErrors withParameters(GetTrackingSnippet400ApplicationJsonErrorsParameters parameters) {
        this.parameters = parameters;
        return this;
    }
}