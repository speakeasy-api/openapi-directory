package openapisdk.models.operations;



public class CloudidentityDevicesDeviceUsersLookupRequest {
    public CloudidentityDevicesDeviceUsersLookupPathParams pathParams;
    public CloudidentityDevicesDeviceUsersLookupRequest withPathParams(CloudidentityDevicesDeviceUsersLookupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudidentityDevicesDeviceUsersLookupQueryParams queryParams;
    public CloudidentityDevicesDeviceUsersLookupRequest withQueryParams(CloudidentityDevicesDeviceUsersLookupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudidentityDevicesDeviceUsersLookupSecurity security;
    public CloudidentityDevicesDeviceUsersLookupRequest withSecurity(CloudidentityDevicesDeviceUsersLookupSecurity security) {
        this.security = security;
        return this;
    }
}