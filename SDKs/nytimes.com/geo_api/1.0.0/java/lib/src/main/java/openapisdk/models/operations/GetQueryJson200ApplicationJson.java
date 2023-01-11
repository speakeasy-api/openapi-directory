package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetQueryJson200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public openapisdk.models.shared.Event[] results;
    public GetQueryJson200ApplicationJson withResults(openapisdk.models.shared.Event[] results) {
        this.results = results;
        return this;
    }
}