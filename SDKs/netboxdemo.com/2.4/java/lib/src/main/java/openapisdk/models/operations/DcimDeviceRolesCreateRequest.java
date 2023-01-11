package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimDeviceRolesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeviceRoleInput request;
    public DcimDeviceRolesCreateRequest withRequest(openapisdk.models.shared.DeviceRoleInput request) {
        this.request = request;
        return this;
    }
}