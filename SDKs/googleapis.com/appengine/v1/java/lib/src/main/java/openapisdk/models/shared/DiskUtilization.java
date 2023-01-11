package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DiskUtilization
 * Target scaling by disk usage. Only applicable in the App Engine flexible environment.
**/
public class DiskUtilization {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetReadBytesPerSecond")
    public Integer targetReadBytesPerSecond;
    public DiskUtilization withTargetReadBytesPerSecond(Integer targetReadBytesPerSecond) {
        this.targetReadBytesPerSecond = targetReadBytesPerSecond;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetReadOpsPerSecond")
    public Integer targetReadOpsPerSecond;
    public DiskUtilization withTargetReadOpsPerSecond(Integer targetReadOpsPerSecond) {
        this.targetReadOpsPerSecond = targetReadOpsPerSecond;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetWriteBytesPerSecond")
    public Integer targetWriteBytesPerSecond;
    public DiskUtilization withTargetWriteBytesPerSecond(Integer targetWriteBytesPerSecond) {
        this.targetWriteBytesPerSecond = targetWriteBytesPerSecond;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetWriteOpsPerSecond")
    public Integer targetWriteOpsPerSecond;
    public DiskUtilization withTargetWriteOpsPerSecond(Integer targetWriteOpsPerSecond) {
        this.targetWriteOpsPerSecond = targetWriteOpsPerSecond;
        return this;
    }
}