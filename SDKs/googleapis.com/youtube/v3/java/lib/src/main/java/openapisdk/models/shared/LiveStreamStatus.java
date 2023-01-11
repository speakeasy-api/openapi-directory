package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LiveStreamStatus
 * Brief description of the live stream status.
**/
public class LiveStreamStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthStatus")
    public LiveStreamHealthStatus healthStatus;
    public LiveStreamStatus withHealthStatus(LiveStreamHealthStatus healthStatus) {
        this.healthStatus = healthStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamStatus")
    public LiveStreamStatusStreamStatusEnum streamStatus;
    public LiveStreamStatus withStreamStatus(LiveStreamStatusStreamStatusEnum streamStatus) {
        this.streamStatus = streamStatus;
        return this;
    }
}