package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAlphaSenderListAlphaSenderResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alpha_senders")
    public openapisdk.models.shared.MessagingV1ServiceAlphaSender[] alphaSenders;
    public ListAlphaSenderListAlphaSenderResponse withAlphaSenders(openapisdk.models.shared.MessagingV1ServiceAlphaSender[] alphaSenders) {
        this.alphaSenders = alphaSenders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListAlphaSenderListAlphaSenderResponseMeta meta;
    public ListAlphaSenderListAlphaSenderResponse withMeta(ListAlphaSenderListAlphaSenderResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}