package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityDevicesDeviceUsersWipeRequest {
    public CloudidentityDevicesDeviceUsersWipePathParams pathParams;
    public CloudidentityDevicesDeviceUsersWipeRequest withPathParams(CloudidentityDevicesDeviceUsersWipePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudidentityDevicesDeviceUsersWipeQueryParams queryParams;
    public CloudidentityDevicesDeviceUsersWipeRequest withQueryParams(CloudidentityDevicesDeviceUsersWipeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CloudidentityDevicesDeviceUsersWipeRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public CloudidentityDevicesDeviceUsersWipeSecurity security;
    public CloudidentityDevicesDeviceUsersWipeRequest withSecurity(CloudidentityDevicesDeviceUsersWipeSecurity security) {
        this.security = security;
        return this;
    }
}