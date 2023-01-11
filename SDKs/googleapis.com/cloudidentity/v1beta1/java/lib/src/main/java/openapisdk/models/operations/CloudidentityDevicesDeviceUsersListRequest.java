package openapisdk.models.operations;



public class CloudidentityDevicesDeviceUsersListRequest {
    public CloudidentityDevicesDeviceUsersListPathParams pathParams;
    public CloudidentityDevicesDeviceUsersListRequest withPathParams(CloudidentityDevicesDeviceUsersListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudidentityDevicesDeviceUsersListQueryParams queryParams;
    public CloudidentityDevicesDeviceUsersListRequest withQueryParams(CloudidentityDevicesDeviceUsersListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudidentityDevicesDeviceUsersListSecurity security;
    public CloudidentityDevicesDeviceUsersListRequest withSecurity(CloudidentityDevicesDeviceUsersListSecurity security) {
        this.security = security;
        return this;
    }
}