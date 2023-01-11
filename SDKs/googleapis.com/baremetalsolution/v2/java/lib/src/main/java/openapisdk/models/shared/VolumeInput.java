package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeInput
 * A storage volume.
**/
public class VolumeInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoGrownSizeGib")
    public String autoGrownSizeGib;
    public VolumeInput withAutoGrownSizeGib(String autoGrownSizeGib) {
        this.autoGrownSizeGib = autoGrownSizeGib;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentSizeGib")
    public String currentSizeGib;
    public VolumeInput withCurrentSizeGib(String currentSizeGib) {
        this.currentSizeGib = currentSizeGib;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emergencySizeGib")
    public String emergencySizeGib;
    public VolumeInput withEmergencySizeGib(String emergencySizeGib) {
        this.emergencySizeGib = emergencySizeGib;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public VolumeInput withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public VolumeInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxSizeGib")
    public String maxSizeGib;
    public VolumeInput withMaxSizeGib(String maxSizeGib) {
        this.maxSizeGib = maxSizeGib;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public VolumeInput withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originallyRequestedSizeGib")
    public String originallyRequestedSizeGib;
    public VolumeInput withOriginallyRequestedSizeGib(String originallyRequestedSizeGib) {
        this.originallyRequestedSizeGib = originallyRequestedSizeGib;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performanceTier")
    public VolumePerformanceTierEnum performanceTier;
    public VolumeInput withPerformanceTier(VolumePerformanceTierEnum performanceTier) {
        this.performanceTier = performanceTier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pod")
    public String pod;
    public VolumeInput withPod(String pod) {
        this.pod = pod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remainingSpaceGib")
    public String remainingSpaceGib;
    public VolumeInput withRemainingSpaceGib(String remainingSpaceGib) {
        this.remainingSpaceGib = remainingSpaceGib;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedSizeGib")
    public String requestedSizeGib;
    public VolumeInput withRequestedSizeGib(String requestedSizeGib) {
        this.requestedSizeGib = requestedSizeGib;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapshotAutoDeleteBehavior")
    public VolumeSnapshotAutoDeleteBehaviorEnum snapshotAutoDeleteBehavior;
    public VolumeInput withSnapshotAutoDeleteBehavior(VolumeSnapshotAutoDeleteBehaviorEnum snapshotAutoDeleteBehavior) {
        this.snapshotAutoDeleteBehavior = snapshotAutoDeleteBehavior;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapshotEnabled")
    public Boolean snapshotEnabled;
    public VolumeInput withSnapshotEnabled(Boolean snapshotEnabled) {
        this.snapshotEnabled = snapshotEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapshotReservationDetail")
    public SnapshotReservationDetail snapshotReservationDetail;
    public VolumeInput withSnapshotReservationDetail(SnapshotReservationDetail snapshotReservationDetail) {
        this.snapshotReservationDetail = snapshotReservationDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapshotSchedulePolicy")
    public String snapshotSchedulePolicy;
    public VolumeInput withSnapshotSchedulePolicy(String snapshotSchedulePolicy) {
        this.snapshotSchedulePolicy = snapshotSchedulePolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public VolumeStateEnum state;
    public VolumeInput withState(VolumeStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageType")
    public VolumeStorageTypeEnum storageType;
    public VolumeInput withStorageType(VolumeStorageTypeEnum storageType) {
        this.storageType = storageType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workloadProfile")
    public VolumeWorkloadProfileEnum workloadProfile;
    public VolumeInput withWorkloadProfile(VolumeWorkloadProfileEnum workloadProfile) {
        this.workloadProfile = workloadProfile;
        return this;
    }
}