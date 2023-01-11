package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Volume
 * A storage volume.
**/
public class Volume {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoGrownSizeGib")
    public String autoGrownSizeGib;
    public Volume withAutoGrownSizeGib(String autoGrownSizeGib) {
        this.autoGrownSizeGib = autoGrownSizeGib;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootVolume")
    public Boolean bootVolume;
    public Volume withBootVolume(Boolean bootVolume) {
        this.bootVolume = bootVolume;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentSizeGib")
    public String currentSizeGib;
    public Volume withCurrentSizeGib(String currentSizeGib) {
        this.currentSizeGib = currentSizeGib;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emergencySizeGib")
    public String emergencySizeGib;
    public Volume withEmergencySizeGib(String emergencySizeGib) {
        this.emergencySizeGib = emergencySizeGib;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Volume withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Volume withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxSizeGib")
    public String maxSizeGib;
    public Volume withMaxSizeGib(String maxSizeGib) {
        this.maxSizeGib = maxSizeGib;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Volume withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public Volume withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originallyRequestedSizeGib")
    public String originallyRequestedSizeGib;
    public Volume withOriginallyRequestedSizeGib(String originallyRequestedSizeGib) {
        this.originallyRequestedSizeGib = originallyRequestedSizeGib;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performanceTier")
    public VolumePerformanceTierEnum performanceTier;
    public Volume withPerformanceTier(VolumePerformanceTierEnum performanceTier) {
        this.performanceTier = performanceTier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pod")
    public String pod;
    public Volume withPod(String pod) {
        this.pod = pod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public VolumeProtocolEnum protocol;
    public Volume withProtocol(VolumeProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remainingSpaceGib")
    public String remainingSpaceGib;
    public Volume withRemainingSpaceGib(String remainingSpaceGib) {
        this.remainingSpaceGib = remainingSpaceGib;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedSizeGib")
    public String requestedSizeGib;
    public Volume withRequestedSizeGib(String requestedSizeGib) {
        this.requestedSizeGib = requestedSizeGib;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapshotAutoDeleteBehavior")
    public VolumeSnapshotAutoDeleteBehaviorEnum snapshotAutoDeleteBehavior;
    public Volume withSnapshotAutoDeleteBehavior(VolumeSnapshotAutoDeleteBehaviorEnum snapshotAutoDeleteBehavior) {
        this.snapshotAutoDeleteBehavior = snapshotAutoDeleteBehavior;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapshotEnabled")
    public Boolean snapshotEnabled;
    public Volume withSnapshotEnabled(Boolean snapshotEnabled) {
        this.snapshotEnabled = snapshotEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapshotReservationDetail")
    public SnapshotReservationDetail snapshotReservationDetail;
    public Volume withSnapshotReservationDetail(SnapshotReservationDetail snapshotReservationDetail) {
        this.snapshotReservationDetail = snapshotReservationDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapshotSchedulePolicy")
    public String snapshotSchedulePolicy;
    public Volume withSnapshotSchedulePolicy(String snapshotSchedulePolicy) {
        this.snapshotSchedulePolicy = snapshotSchedulePolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public VolumeStateEnum state;
    public Volume withState(VolumeStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageType")
    public VolumeStorageTypeEnum storageType;
    public Volume withStorageType(VolumeStorageTypeEnum storageType) {
        this.storageType = storageType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workloadProfile")
    public VolumeWorkloadProfileEnum workloadProfile;
    public Volume withWorkloadProfile(VolumeWorkloadProfileEnum workloadProfile) {
        this.workloadProfile = workloadProfile;
        return this;
    }
}