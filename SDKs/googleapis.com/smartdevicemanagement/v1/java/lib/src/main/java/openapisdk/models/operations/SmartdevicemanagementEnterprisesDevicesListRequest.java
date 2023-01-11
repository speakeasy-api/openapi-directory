package openapisdk.models.operations;



public class SmartdevicemanagementEnterprisesDevicesListRequest {
    public SmartdevicemanagementEnterprisesDevicesListPathParams pathParams;
    public SmartdevicemanagementEnterprisesDevicesListRequest withPathParams(SmartdevicemanagementEnterprisesDevicesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SmartdevicemanagementEnterprisesDevicesListQueryParams queryParams;
    public SmartdevicemanagementEnterprisesDevicesListRequest withQueryParams(SmartdevicemanagementEnterprisesDevicesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SmartdevicemanagementEnterprisesDevicesListSecurity security;
    public SmartdevicemanagementEnterprisesDevicesListRequest withSecurity(SmartdevicemanagementEnterprisesDevicesListSecurity security) {
        this.security = security;
        return this;
    }
}