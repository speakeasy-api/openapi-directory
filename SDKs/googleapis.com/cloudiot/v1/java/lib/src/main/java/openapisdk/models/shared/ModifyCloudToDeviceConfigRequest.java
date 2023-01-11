package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ModifyCloudToDeviceConfigRequest
 * Request for `ModifyCloudToDeviceConfig`.
**/
public class ModifyCloudToDeviceConfigRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("binaryData")
    public String binaryData;
    public ModifyCloudToDeviceConfigRequest withBinaryData(String binaryData) {
        this.binaryData = binaryData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionToUpdate")
    public String versionToUpdate;
    public ModifyCloudToDeviceConfigRequest withVersionToUpdate(String versionToUpdate) {
        this.versionToUpdate = versionToUpdate;
        return this;
    }
}