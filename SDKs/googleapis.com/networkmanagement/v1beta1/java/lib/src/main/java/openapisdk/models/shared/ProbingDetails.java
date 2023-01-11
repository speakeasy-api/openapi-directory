package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProbingDetails
 * Results of active probing from the last run of the test.
**/
public class ProbingDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("abortCause")
    public ProbingDetailsAbortCauseEnum abortCause;
    public ProbingDetails withAbortCause(ProbingDetailsAbortCauseEnum abortCause) {
        this.abortCause = abortCause;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationEgressLocation")
    public EdgeLocation destinationEgressLocation;
    public ProbingDetails withDestinationEgressLocation(EdgeLocation destinationEgressLocation) {
        this.destinationEgressLocation = destinationEgressLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpointInfo")
    public EndpointInfo endpointInfo;
    public ProbingDetails withEndpointInfo(EndpointInfo endpointInfo) {
        this.endpointInfo = endpointInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Status error;
    public ProbingDetails withError(Status error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("probingLatency")
    public LatencyDistribution probingLatency;
    public ProbingDetails withProbingLatency(LatencyDistribution probingLatency) {
        this.probingLatency = probingLatency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public ProbingDetailsResultEnum result;
    public ProbingDetails withResult(ProbingDetailsResultEnum result) {
        this.result = result;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sentProbeCount")
    public Integer sentProbeCount;
    public ProbingDetails withSentProbeCount(Integer sentProbeCount) {
        this.sentProbeCount = sentProbeCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successfulProbeCount")
    public Integer successfulProbeCount;
    public ProbingDetails withSuccessfulProbeCount(Integer successfulProbeCount) {
        this.successfulProbeCount = successfulProbeCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verifyTime")
    public String verifyTime;
    public ProbingDetails withVerifyTime(String verifyTime) {
        this.verifyTime = verifyTime;
        return this;
    }
}