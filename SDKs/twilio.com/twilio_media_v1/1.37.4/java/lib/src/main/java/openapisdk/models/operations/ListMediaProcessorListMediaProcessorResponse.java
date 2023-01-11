package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMediaProcessorListMediaProcessorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media_processors")
    public openapisdk.models.shared.MediaV1MediaProcessor[] mediaProcessors;
    public ListMediaProcessorListMediaProcessorResponse withMediaProcessors(openapisdk.models.shared.MediaV1MediaProcessor[] mediaProcessors) {
        this.mediaProcessors = mediaProcessors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListMediaProcessorListMediaProcessorResponseMeta meta;
    public ListMediaProcessorListMediaProcessorResponse withMeta(ListMediaProcessorListMediaProcessorResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}