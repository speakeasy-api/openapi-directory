package openapisdk.models.operations;



public class CloudidentityDevicesListRequest {
    public CloudidentityDevicesListQueryParams queryParams;
    public CloudidentityDevicesListRequest withQueryParams(CloudidentityDevicesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudidentityDevicesListSecurity security;
    public CloudidentityDevicesListRequest withSecurity(CloudidentityDevicesListSecurity security) {
        this.security = security;
        return this;
    }
}