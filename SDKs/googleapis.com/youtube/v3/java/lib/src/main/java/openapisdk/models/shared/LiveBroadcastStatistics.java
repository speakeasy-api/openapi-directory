package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LiveBroadcastStatistics
 * Statistics about the live broadcast. These represent a snapshot of the values at the time of the request. Statistics are only returned for live broadcasts.
**/
public class LiveBroadcastStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("concurrentViewers")
    public String concurrentViewers;
    public LiveBroadcastStatistics withConcurrentViewers(String concurrentViewers) {
        this.concurrentViewers = concurrentViewers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalChatCount")
    public String totalChatCount;
    public LiveBroadcastStatistics withTotalChatCount(String totalChatCount) {
        this.totalChatCount = totalChatCount;
        return this;
    }
}