package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeviceManagementInterfaceRequest {
    public UpdateDeviceManagementInterfacePathParams pathParams;
    public UpdateDeviceManagementInterfaceRequest withPathParams(UpdateDeviceManagementInterfacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDeviceManagementInterfaceRequestBody request;
    public UpdateDeviceManagementInterfaceRequest withRequest(UpdateDeviceManagementInterfaceRequestBody request) {
        this.request = request;
        return this;
    }
}