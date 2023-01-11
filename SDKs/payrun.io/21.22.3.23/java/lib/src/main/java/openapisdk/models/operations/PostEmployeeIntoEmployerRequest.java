package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEmployeeIntoEmployerRequest {
    public PostEmployeeIntoEmployerPathParams pathParams;
    public PostEmployeeIntoEmployerRequest withPathParams(PostEmployeeIntoEmployerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostEmployeeIntoEmployerHeaders headers;
    public PostEmployeeIntoEmployerRequest withHeaders(PostEmployeeIntoEmployerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Employee request;
    public PostEmployeeIntoEmployerRequest withRequest(openapisdk.models.shared.Employee request) {
        this.request = request;
        return this;
    }
}