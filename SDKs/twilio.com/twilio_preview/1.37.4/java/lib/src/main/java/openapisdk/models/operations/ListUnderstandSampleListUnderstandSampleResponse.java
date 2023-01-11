package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListUnderstandSampleListUnderstandSampleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListUnderstandSampleListUnderstandSampleResponseMeta meta;
    public ListUnderstandSampleListUnderstandSampleResponse withMeta(ListUnderstandSampleListUnderstandSampleResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("samples")
    public openapisdk.models.shared.PreviewUnderstandAssistantTaskSample[] samples;
    public ListUnderstandSampleListUnderstandSampleResponse withSamples(openapisdk.models.shared.PreviewUnderstandAssistantTaskSample[] samples) {
        this.samples = samples;
        return this;
    }
}