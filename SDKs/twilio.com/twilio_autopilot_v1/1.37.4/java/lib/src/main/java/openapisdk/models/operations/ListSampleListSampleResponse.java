package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSampleListSampleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListSampleListSampleResponseMeta meta;
    public ListSampleListSampleResponse withMeta(ListSampleListSampleResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("samples")
    public openapisdk.models.shared.AutopilotV1AssistantTaskSample[] samples;
    public ListSampleListSampleResponse withSamples(openapisdk.models.shared.AutopilotV1AssistantTaskSample[] samples) {
        this.samples = samples;
        return this;
    }
}