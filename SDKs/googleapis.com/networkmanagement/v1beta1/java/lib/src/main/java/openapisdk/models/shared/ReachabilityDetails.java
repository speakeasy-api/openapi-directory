package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReachabilityDetails
 * Results of the configuration analysis from the last run of the test.
**/
public class ReachabilityDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Status error;
    public ReachabilityDetails withError(Status error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public ReachabilityDetailsResultEnum result;
    public ReachabilityDetails withResult(ReachabilityDetailsResultEnum result) {
        this.result = result;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("traces")
    public Trace[] traces;
    public ReachabilityDetails withTraces(Trace[] traces) {
        this.traces = traces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verifyTime")
    public String verifyTime;
    public ReachabilityDetails withVerifyTime(String verifyTime) {
        this.verifyTime = verifyTime;
        return this;
    }
}