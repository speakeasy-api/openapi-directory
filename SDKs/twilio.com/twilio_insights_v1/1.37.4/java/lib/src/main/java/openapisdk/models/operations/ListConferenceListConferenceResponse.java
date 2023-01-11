package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListConferenceListConferenceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conferences")
    public openapisdk.models.shared.InsightsV1Conference[] conferences;
    public ListConferenceListConferenceResponse withConferences(openapisdk.models.shared.InsightsV1Conference[] conferences) {
        this.conferences = conferences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListConferenceListConferenceResponseMeta meta;
    public ListConferenceListConferenceResponse withMeta(ListConferenceListConferenceResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}