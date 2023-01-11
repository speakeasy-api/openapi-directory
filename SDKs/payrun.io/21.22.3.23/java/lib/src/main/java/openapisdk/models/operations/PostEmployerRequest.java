package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEmployerRequest {
    public PostEmployerHeaders headers;
    public PostEmployerRequest withHeaders(PostEmployerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Employer request;
    public PostEmployerRequest withRequest(openapisdk.models.shared.Employer request) {
        this.request = request;
        return this;
    }
}