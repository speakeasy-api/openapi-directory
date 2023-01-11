package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCallSummariesListCallSummariesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_summaries")
    public openapisdk.models.shared.InsightsV1CallSummaries[] callSummaries;
    public ListCallSummariesListCallSummariesResponse withCallSummaries(openapisdk.models.shared.InsightsV1CallSummaries[] callSummaries) {
        this.callSummaries = callSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListCallSummariesListCallSummariesResponseMeta meta;
    public ListCallSummariesListCallSummariesResponse withMeta(ListCallSummariesListCallSummariesResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}