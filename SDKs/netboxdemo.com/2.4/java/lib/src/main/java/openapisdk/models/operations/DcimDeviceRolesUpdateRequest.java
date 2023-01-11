package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimDeviceRolesUpdateRequest {
    public DcimDeviceRolesUpdatePathParams pathParams;
    public DcimDeviceRolesUpdateRequest withPathParams(DcimDeviceRolesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeviceRoleInput request;
    public DcimDeviceRolesUpdateRequest withRequest(openapisdk.models.shared.DeviceRoleInput request) {
        this.request = request;
        return this;
    }
}