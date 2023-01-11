package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dr-callback-url")
    public String drCallbackUrl;
    public AccountSettings withDrCallbackUrl(String drCallbackUrl) {
        this.drCallbackUrl = drCallbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max-calls-per-second")
    public Long maxCallsPerSecond;
    public AccountSettings withMaxCallsPerSecond(Long maxCallsPerSecond) {
        this.maxCallsPerSecond = maxCallsPerSecond;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max-inbound-request")
    public Long maxInboundRequest;
    public AccountSettings withMaxInboundRequest(Long maxInboundRequest) {
        this.maxInboundRequest = maxInboundRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max-outbound-request")
    public Long maxOutboundRequest;
    public AccountSettings withMaxOutboundRequest(Long maxOutboundRequest) {
        this.maxOutboundRequest = maxOutboundRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mo-callback-url")
    public String moCallbackUrl;
    public AccountSettings withMoCallbackUrl(String moCallbackUrl) {
        this.moCallbackUrl = moCallbackUrl;
        return this;
    }
}