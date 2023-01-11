package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityDevicesDeviceUsersApproveRequest {
    public CloudidentityDevicesDeviceUsersApprovePathParams pathParams;
    public CloudidentityDevicesDeviceUsersApproveRequest withPathParams(CloudidentityDevicesDeviceUsersApprovePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudidentityDevicesDeviceUsersApproveQueryParams queryParams;
    public CloudidentityDevicesDeviceUsersApproveRequest withQueryParams(CloudidentityDevicesDeviceUsersApproveQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CloudidentityDevicesDeviceUsersApproveRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public CloudidentityDevicesDeviceUsersApproveSecurity security;
    public CloudidentityDevicesDeviceUsersApproveRequest withSecurity(CloudidentityDevicesDeviceUsersApproveSecurity security) {
        this.security = security;
        return this;
    }
}