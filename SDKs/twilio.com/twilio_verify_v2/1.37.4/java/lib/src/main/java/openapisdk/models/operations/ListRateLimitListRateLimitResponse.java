package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRateLimitListRateLimitResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListRateLimitListRateLimitResponseMeta meta;
    public ListRateLimitListRateLimitResponse withMeta(ListRateLimitListRateLimitResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate_limits")
    public openapisdk.models.shared.VerifyV2ServiceRateLimit[] rateLimits;
    public ListRateLimitListRateLimitResponse withRateLimits(openapisdk.models.shared.VerifyV2ServiceRateLimit[] rateLimits) {
        this.rateLimits = rateLimits;
        return this;
    }
}