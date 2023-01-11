package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchEmployeeRequest {
    public PatchEmployeePathParams pathParams;
    public PatchEmployeeRequest withPathParams(PatchEmployeePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatchEmployeeHeaders headers;
    public PatchEmployeeRequest withHeaders(PatchEmployeeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Employee request;
    public PatchEmployeeRequest withRequest(openapisdk.models.shared.Employee request) {
        this.request = request;
        return this;
    }
}