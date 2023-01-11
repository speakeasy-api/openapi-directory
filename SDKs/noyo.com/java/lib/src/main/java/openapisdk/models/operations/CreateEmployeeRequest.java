package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEmployeeRequest {
    public CreateEmployeePathParams pathParams;
    public CreateEmployeeRequest withPathParams(CreateEmployeePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EmployeeCreateRequest request;
    public CreateEmployeeRequest withRequest(openapisdk.models.shared.EmployeeCreateRequest request) {
        this.request = request;
        return this;
    }
}