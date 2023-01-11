package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEmployeeRequest {
    public UpdateEmployeePathParams pathParams;
    public UpdateEmployeeRequest withPathParams(UpdateEmployeePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Employee request;
    public UpdateEmployeeRequest withRequest(openapisdk.models.shared.Employee request) {
        this.request = request;
        return this;
    }
    public UpdateEmployeeSecurity security;
    public UpdateEmployeeRequest withSecurity(UpdateEmployeeSecurity security) {
        this.security = security;
        return this;
    }
}