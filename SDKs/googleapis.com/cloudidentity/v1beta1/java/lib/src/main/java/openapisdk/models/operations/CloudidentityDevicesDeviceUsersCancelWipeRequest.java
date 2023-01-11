package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityDevicesDeviceUsersCancelWipeRequest {
    public CloudidentityDevicesDeviceUsersCancelWipePathParams pathParams;
    public CloudidentityDevicesDeviceUsersCancelWipeRequest withPathParams(CloudidentityDevicesDeviceUsersCancelWipePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudidentityDevicesDeviceUsersCancelWipeQueryParams queryParams;
    public CloudidentityDevicesDeviceUsersCancelWipeRequest withQueryParams(CloudidentityDevicesDeviceUsersCancelWipeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CloudidentityDevicesDeviceUsersCancelWipeRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public CloudidentityDevicesDeviceUsersCancelWipeSecurity security;
    public CloudidentityDevicesDeviceUsersCancelWipeRequest withSecurity(CloudidentityDevicesDeviceUsersCancelWipeSecurity security) {
        this.security = security;
        return this;
    }
}