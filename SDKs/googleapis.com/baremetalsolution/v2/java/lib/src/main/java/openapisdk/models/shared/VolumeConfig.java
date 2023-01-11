package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeConfig
 * Configuration parameters for a new volume.
**/
public class VolumeConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcpService")
    public String gcpService;
    public VolumeConfig withGcpService(String gcpService) {
        this.gcpService = gcpService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public VolumeConfig withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lunRanges")
    public LunRange[] lunRanges;
    public VolumeConfig withLunRanges(LunRange[] lunRanges) {
        this.lunRanges = lunRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineIds")
    public String[] machineIds;
    public VolumeConfig withMachineIds(String[] machineIds) {
        this.machineIds = machineIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public VolumeConfig withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nfsExports")
    public NfsExport[] nfsExports;
    public VolumeConfig withNfsExports(NfsExport[] nfsExports) {
        this.nfsExports = nfsExports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performanceTier")
    public VolumeConfigPerformanceTierEnum performanceTier;
    public VolumeConfig withPerformanceTier(VolumeConfigPerformanceTierEnum performanceTier) {
        this.performanceTier = performanceTier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public VolumeConfigProtocolEnum protocol;
    public VolumeConfig withProtocol(VolumeConfigProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sizeGb")
    public Integer sizeGb;
    public VolumeConfig withSizeGb(Integer sizeGb) {
        this.sizeGb = sizeGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapshotsEnabled")
    public Boolean snapshotsEnabled;
    public VolumeConfig withSnapshotsEnabled(Boolean snapshotsEnabled) {
        this.snapshotsEnabled = snapshotsEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public VolumeConfigTypeEnum type;
    public VolumeConfig withType(VolumeConfigTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userNote")
    public String userNote;
    public VolumeConfig withUserNote(String userNote) {
        this.userNote = userNote;
        return this;
    }
}