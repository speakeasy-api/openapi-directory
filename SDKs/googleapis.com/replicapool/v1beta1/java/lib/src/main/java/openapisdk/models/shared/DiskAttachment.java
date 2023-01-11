package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DiskAttachment
 * Specifies how to attach a disk to a Replica.
**/
public class DiskAttachment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceName")
    public String deviceName;
    public DiskAttachment withDeviceName(String deviceName) {
        this.deviceName = deviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("index")
    public Long index;
    public DiskAttachment withIndex(Long index) {
        this.index = index;
        return this;
    }
}