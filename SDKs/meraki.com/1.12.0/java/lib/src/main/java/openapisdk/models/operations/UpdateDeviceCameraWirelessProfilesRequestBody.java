package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateDeviceCameraWirelessProfilesRequestBody {
    @JsonProperty("ids")
    public UpdateDeviceCameraWirelessProfilesRequestBodyIds ids;
    public UpdateDeviceCameraWirelessProfilesRequestBody withIds(UpdateDeviceCameraWirelessProfilesRequestBodyIds ids) {
        this.ids = ids;
        return this;
    }
}