package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditEmployeeRequest {
    public EditEmployeePathParams pathParams;
    public EditEmployeeRequest withPathParams(EditEmployeePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EmployeeEditRequest request;
    public EditEmployeeRequest withRequest(openapisdk.models.shared.EmployeeEditRequest request) {
        this.request = request;
        return this;
    }
}