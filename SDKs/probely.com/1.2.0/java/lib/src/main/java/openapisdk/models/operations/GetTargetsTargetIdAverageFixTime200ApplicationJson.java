package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTargetsTargetIdAverageFixTime200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public GetTargetsTargetIdAverageFixTime200ApplicationJsonResults results;
    public GetTargetsTargetIdAverageFixTime200ApplicationJson withResults(GetTargetsTargetIdAverageFixTime200ApplicationJsonResults results) {
        this.results = results;
        return this;
    }
}