package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityDevicesDeviceUsersBlockRequest {
    public CloudidentityDevicesDeviceUsersBlockPathParams pathParams;
    public CloudidentityDevicesDeviceUsersBlockRequest withPathParams(CloudidentityDevicesDeviceUsersBlockPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudidentityDevicesDeviceUsersBlockQueryParams queryParams;
    public CloudidentityDevicesDeviceUsersBlockRequest withQueryParams(CloudidentityDevicesDeviceUsersBlockQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CloudidentityDevicesDeviceUsersBlockRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public CloudidentityDevicesDeviceUsersBlockSecurity security;
    public CloudidentityDevicesDeviceUsersBlockRequest withSecurity(CloudidentityDevicesDeviceUsersBlockSecurity security) {
        this.security = security;
        return this;
    }
}