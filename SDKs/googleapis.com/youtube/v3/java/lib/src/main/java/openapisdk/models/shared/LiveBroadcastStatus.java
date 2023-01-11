package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LiveBroadcastStatus
 * Live broadcast state.
**/
public class LiveBroadcastStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifeCycleStatus")
    public LiveBroadcastStatusLifeCycleStatusEnum lifeCycleStatus;
    public LiveBroadcastStatus withLifeCycleStatus(LiveBroadcastStatusLifeCycleStatusEnum lifeCycleStatus) {
        this.lifeCycleStatus = lifeCycleStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("liveBroadcastPriority")
    public LiveBroadcastStatusLiveBroadcastPriorityEnum liveBroadcastPriority;
    public LiveBroadcastStatus withLiveBroadcastPriority(LiveBroadcastStatusLiveBroadcastPriorityEnum liveBroadcastPriority) {
        this.liveBroadcastPriority = liveBroadcastPriority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("madeForKids")
    public Boolean madeForKids;
    public LiveBroadcastStatus withMadeForKids(Boolean madeForKids) {
        this.madeForKids = madeForKids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacyStatus")
    public LiveBroadcastStatusPrivacyStatusEnum privacyStatus;
    public LiveBroadcastStatus withPrivacyStatus(LiveBroadcastStatusPrivacyStatusEnum privacyStatus) {
        this.privacyStatus = privacyStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recordingStatus")
    public LiveBroadcastStatusRecordingStatusEnum recordingStatus;
    public LiveBroadcastStatus withRecordingStatus(LiveBroadcastStatusRecordingStatusEnum recordingStatus) {
        this.recordingStatus = recordingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfDeclaredMadeForKids")
    public Boolean selfDeclaredMadeForKids;
    public LiveBroadcastStatus withSelfDeclaredMadeForKids(Boolean selfDeclaredMadeForKids) {
        this.selfDeclaredMadeForKids = selfDeclaredMadeForKids;
        return this;
    }
}