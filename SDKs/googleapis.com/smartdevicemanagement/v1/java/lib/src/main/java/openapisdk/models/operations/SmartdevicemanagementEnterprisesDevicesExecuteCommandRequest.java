package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest {
    public SmartdevicemanagementEnterprisesDevicesExecuteCommandPathParams pathParams;
    public SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest withPathParams(SmartdevicemanagementEnterprisesDevicesExecuteCommandPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SmartdevicemanagementEnterprisesDevicesExecuteCommandQueryParams queryParams;
    public SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest withQueryParams(SmartdevicemanagementEnterprisesDevicesExecuteCommandQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest request;
    public SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest withRequest(openapisdk.models.shared.GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest request) {
        this.request = request;
        return this;
    }
    public SmartdevicemanagementEnterprisesDevicesExecuteCommandSecurity security;
    public SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest withSecurity(SmartdevicemanagementEnterprisesDevicesExecuteCommandSecurity security) {
        this.security = security;
        return this;
    }
}