package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListShortCodeListShortCodeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListShortCodeListShortCodeResponseMeta meta;
    public ListShortCodeListShortCodeResponse withMeta(ListShortCodeListShortCodeResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("short_codes")
    public openapisdk.models.shared.MessagingV1ServiceShortCode[] shortCodes;
    public ListShortCodeListShortCodeResponse withShortCodes(openapisdk.models.shared.MessagingV1ServiceShortCode[] shortCodes) {
        this.shortCodes = shortCodes;
        return this;
    }
}