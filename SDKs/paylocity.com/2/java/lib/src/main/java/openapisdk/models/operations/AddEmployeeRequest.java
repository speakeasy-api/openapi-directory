package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddEmployeeRequest {
    public AddEmployeePathParams pathParams;
    public AddEmployeeRequest withPathParams(AddEmployeePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Employee request;
    public AddEmployeeRequest withRequest(openapisdk.models.shared.Employee request) {
        this.request = request;
        return this;
    }
    public AddEmployeeSecurity security;
    public AddEmployeeRequest withSecurity(AddEmployeeSecurity security) {
        this.security = security;
        return this;
    }
}