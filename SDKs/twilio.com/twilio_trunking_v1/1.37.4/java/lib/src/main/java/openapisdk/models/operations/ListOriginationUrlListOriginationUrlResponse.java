package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListOriginationUrlListOriginationUrlResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListOriginationUrlListOriginationUrlResponseMeta meta;
    public ListOriginationUrlListOriginationUrlResponse withMeta(ListOriginationUrlListOriginationUrlResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("origination_urls")
    public openapisdk.models.shared.TrunkingV1TrunkOriginationUrl[] originationUrls;
    public ListOriginationUrlListOriginationUrlResponse withOriginationUrls(openapisdk.models.shared.TrunkingV1TrunkOriginationUrl[] originationUrls) {
        this.originationUrls = originationUrls;
        return this;
    }
}