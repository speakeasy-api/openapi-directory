package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutEmployeeIntoEmployerRequest {
    public PutEmployeeIntoEmployerPathParams pathParams;
    public PutEmployeeIntoEmployerRequest withPathParams(PutEmployeeIntoEmployerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutEmployeeIntoEmployerHeaders headers;
    public PutEmployeeIntoEmployerRequest withHeaders(PutEmployeeIntoEmployerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Employee request;
    public PutEmployeeIntoEmployerRequest withRequest(openapisdk.models.shared.Employee request) {
        this.request = request;
        return this;
    }
}