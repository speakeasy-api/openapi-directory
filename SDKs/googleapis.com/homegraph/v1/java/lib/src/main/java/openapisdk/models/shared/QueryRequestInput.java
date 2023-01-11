package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryRequestInput
 * Device ID inputs to QueryRequest.
**/
public class QueryRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payload")
    public QueryRequestPayload payload;
    public QueryRequestInput withPayload(QueryRequestPayload payload) {
        this.payload = payload;
        return this;
    }
}