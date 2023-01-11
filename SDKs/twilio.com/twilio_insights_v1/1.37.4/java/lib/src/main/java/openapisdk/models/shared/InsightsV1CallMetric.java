package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InsightsV1CallMetric {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public InsightsV1CallMetric withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_sid")
    public String callSid;
    public InsightsV1CallMetric withCallSid(String callSid) {
        this.callSid = callSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier_edge")
    public Object carrierEdge;
    public InsightsV1CallMetric withCarrierEdge(Object carrierEdge) {
        this.carrierEdge = carrierEdge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_edge")
    public Object clientEdge;
    public InsightsV1CallMetric withClientEdge(Object clientEdge) {
        this.clientEdge = clientEdge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direction")
    public MetricEnumStreamDirectionEnum direction;
    public InsightsV1CallMetric withDirection(MetricEnumStreamDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("edge")
    public MetricEnumTwilioEdgeEnum edge;
    public InsightsV1CallMetric withEdge(MetricEnumTwilioEdgeEnum edge) {
        this.edge = edge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sdk_edge")
    public Object sdkEdge;
    public InsightsV1CallMetric withSDKEdge(Object sdkEdge) {
        this.sdkEdge = sdkEdge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sip_edge")
    public Object sipEdge;
    public InsightsV1CallMetric withSipEdge(Object sipEdge) {
        this.sipEdge = sipEdge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public String timestamp;
    public InsightsV1CallMetric withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}