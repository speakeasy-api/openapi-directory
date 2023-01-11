package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DiskStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeSpaceBytes")
    public String freeSpaceBytes;
    public DiskStatus withFreeSpaceBytes(String freeSpaceBytes) {
        this.freeSpaceBytes = freeSpaceBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSpaceBytes")
    public String totalSpaceBytes;
    public DiskStatus withTotalSpaceBytes(String totalSpaceBytes) {
        this.totalSpaceBytes = totalSpaceBytes;
        return this;
    }
}