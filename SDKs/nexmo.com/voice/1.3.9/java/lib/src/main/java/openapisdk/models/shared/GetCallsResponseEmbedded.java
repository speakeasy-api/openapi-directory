package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetCallsResponseEmbedded
 * A list of call objects. See the [get details of a specific call](#getCall) response fields for a description of the nested objects
**/
public class GetCallsResponseEmbedded {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calls")
    public GetCallResponse[] calls;
    public GetCallsResponseEmbedded withCalls(GetCallResponse[] calls) {
        this.calls = calls;
        return this;
    }
}