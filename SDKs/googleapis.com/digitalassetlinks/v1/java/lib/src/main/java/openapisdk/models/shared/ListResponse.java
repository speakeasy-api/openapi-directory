package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListResponse
 * Response message for the List call.
**/
public class ListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debugString")
    public String debugString;
    public ListResponse withDebugString(String debugString) {
        this.debugString = debugString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCode")
    public ListResponseErrorCodeEnum[] errorCode;
    public ListResponse withErrorCode(ListResponseErrorCodeEnum[] errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxAge")
    public String maxAge;
    public ListResponse withMaxAge(String maxAge) {
        this.maxAge = maxAge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statements")
    public Statement[] statements;
    public ListResponse withStatements(Statement[] statements) {
        this.statements = statements;
        return this;
    }
}