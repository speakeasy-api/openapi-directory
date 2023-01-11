package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkUtilization
 * Target scaling by network usage. Only applicable in the App Engine flexible environment.
**/
public class NetworkUtilization {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetReceivedBytesPerSecond")
    public Integer targetReceivedBytesPerSecond;
    public NetworkUtilization withTargetReceivedBytesPerSecond(Integer targetReceivedBytesPerSecond) {
        this.targetReceivedBytesPerSecond = targetReceivedBytesPerSecond;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetReceivedPacketsPerSecond")
    public Integer targetReceivedPacketsPerSecond;
    public NetworkUtilization withTargetReceivedPacketsPerSecond(Integer targetReceivedPacketsPerSecond) {
        this.targetReceivedPacketsPerSecond = targetReceivedPacketsPerSecond;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetSentBytesPerSecond")
    public Integer targetSentBytesPerSecond;
    public NetworkUtilization withTargetSentBytesPerSecond(Integer targetSentBytesPerSecond) {
        this.targetSentBytesPerSecond = targetSentBytesPerSecond;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetSentPacketsPerSecond")
    public Integer targetSentPacketsPerSecond;
    public NetworkUtilization withTargetSentPacketsPerSecond(Integer targetSentPacketsPerSecond) {
        this.targetSentPacketsPerSecond = targetSentPacketsPerSecond;
        return this;
    }
}