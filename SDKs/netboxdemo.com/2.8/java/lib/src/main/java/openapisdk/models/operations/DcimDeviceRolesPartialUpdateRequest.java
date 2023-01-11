package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimDeviceRolesPartialUpdateRequest {
    public DcimDeviceRolesPartialUpdatePathParams pathParams;
    public DcimDeviceRolesPartialUpdateRequest withPathParams(DcimDeviceRolesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeviceRoleInput request;
    public DcimDeviceRolesPartialUpdateRequest withRequest(openapisdk.models.shared.DeviceRoleInput request) {
        this.request = request;
        return this;
    }
}