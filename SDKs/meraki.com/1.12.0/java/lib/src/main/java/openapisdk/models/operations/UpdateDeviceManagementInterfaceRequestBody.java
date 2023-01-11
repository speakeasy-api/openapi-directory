package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDeviceManagementInterfaceRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wan1")
    public UpdateDeviceManagementInterfaceRequestBodyWan1 wan1;
    public UpdateDeviceManagementInterfaceRequestBody withWan1(UpdateDeviceManagementInterfaceRequestBodyWan1 wan1) {
        this.wan1 = wan1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wan2")
    public UpdateDeviceManagementInterfaceRequestBodyWan2 wan2;
    public UpdateDeviceManagementInterfaceRequestBody withWan2(UpdateDeviceManagementInterfaceRequestBodyWan2 wan2) {
        this.wan2 = wan2;
        return this;
    }
}