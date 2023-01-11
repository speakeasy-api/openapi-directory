package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkerStatus
 * The status of the worker VM.
**/
public class WorkerStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachedDisks")
    public java.util.Map<String, DiskStatus> attachedDisks;
    public WorkerStatus withAttachedDisks(java.util.Map<String, DiskStatus> attachedDisks) {
        this.attachedDisks = attachedDisks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootDisk")
    public DiskStatus bootDisk;
    public WorkerStatus withBootDisk(DiskStatus bootDisk) {
        this.bootDisk = bootDisk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeRamBytes")
    public String freeRamBytes;
    public WorkerStatus withFreeRamBytes(String freeRamBytes) {
        this.freeRamBytes = freeRamBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalRamBytes")
    public String totalRamBytes;
    public WorkerStatus withTotalRamBytes(String totalRamBytes) {
        this.totalRamBytes = totalRamBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uptimeSeconds")
    public String uptimeSeconds;
    public WorkerStatus withUptimeSeconds(String uptimeSeconds) {
        this.uptimeSeconds = uptimeSeconds;
        return this;
    }
}