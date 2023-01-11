package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddUserToAccount400ApplicationJsonErrorsParameters
 * All query-, header- and path- parameters that seemed incorrect
**/
public class AddUserToAccount400ApplicationJsonErrorsParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("header")
    public java.util.Map<String, String> header;
    public AddUserToAccount400ApplicationJsonErrorsParameters withHeader(java.util.Map<String, String> header) {
        this.header = header;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public java.util.Map<String, String> path;
    public AddUserToAccount400ApplicationJsonErrorsParameters withPath(java.util.Map<String, String> path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query")
    public java.util.Map<String, String> query;
    public AddUserToAccount400ApplicationJsonErrorsParameters withQuery(java.util.Map<String, String> query) {
        this.query = query;
        return this;
    }
}