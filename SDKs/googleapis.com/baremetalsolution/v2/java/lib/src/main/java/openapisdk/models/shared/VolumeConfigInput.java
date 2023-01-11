package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeConfigInput
 * Configuration parameters for a new volume.
**/
public class VolumeConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcpService")
    public String gcpService;
    public VolumeConfigInput withGcpService(String gcpService) {
        this.gcpService = gcpService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public VolumeConfigInput withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lunRanges")
    public LunRange[] lunRanges;
    public VolumeConfigInput withLunRanges(LunRange[] lunRanges) {
        this.lunRanges = lunRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineIds")
    public String[] machineIds;
    public VolumeConfigInput withMachineIds(String[] machineIds) {
        this.machineIds = machineIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nfsExports")
    public NfsExport[] nfsExports;
    public VolumeConfigInput withNfsExports(NfsExport[] nfsExports) {
        this.nfsExports = nfsExports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performanceTier")
    public VolumeConfigPerformanceTierEnum performanceTier;
    public VolumeConfigInput withPerformanceTier(VolumeConfigPerformanceTierEnum performanceTier) {
        this.performanceTier = performanceTier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public VolumeConfigProtocolEnum protocol;
    public VolumeConfigInput withProtocol(VolumeConfigProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sizeGb")
    public Integer sizeGb;
    public VolumeConfigInput withSizeGb(Integer sizeGb) {
        this.sizeGb = sizeGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapshotsEnabled")
    public Boolean snapshotsEnabled;
    public VolumeConfigInput withSnapshotsEnabled(Boolean snapshotsEnabled) {
        this.snapshotsEnabled = snapshotsEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public VolumeConfigTypeEnum type;
    public VolumeConfigInput withType(VolumeConfigTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userNote")
    public String userNote;
    public VolumeConfigInput withUserNote(String userNote) {
        this.userNote = userNote;
        return this;
    }
}