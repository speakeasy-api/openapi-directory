package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDeviceMetadataRequest
 * Request to set metadata for a device.
**/
public class UpdateDeviceMetadataRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceMetadata")
    public DeviceMetadata deviceMetadata;
    public UpdateDeviceMetadataRequest withDeviceMetadata(DeviceMetadata deviceMetadata) {
        this.deviceMetadata = deviceMetadata;
        return this;
    }
}