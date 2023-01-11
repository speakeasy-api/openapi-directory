package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTargetsTargetIdScheduledscansExpanded200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public openapisdk.models.shared.Scheduled[] results;
    public GetTargetsTargetIdScheduledscansExpanded200ApplicationJson withResults(openapisdk.models.shared.Scheduled[] results) {
        this.results = results;
        return this;
    }
}