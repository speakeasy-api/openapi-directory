package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListFunctionsResponse
 * Response for the `ListFunctions` method.
**/
public class ListFunctionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("functions")
    public Function[] functions;
    public ListFunctionsResponse withFunctions(Function[] functions) {
        this.functions = functions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListFunctionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListFunctionsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}