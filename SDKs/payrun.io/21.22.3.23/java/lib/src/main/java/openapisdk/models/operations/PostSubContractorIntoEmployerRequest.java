package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSubContractorIntoEmployerRequest {
    public PostSubContractorIntoEmployerPathParams pathParams;
    public PostSubContractorIntoEmployerRequest withPathParams(PostSubContractorIntoEmployerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostSubContractorIntoEmployerHeaders headers;
    public PostSubContractorIntoEmployerRequest withHeaders(PostSubContractorIntoEmployerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubContractor request;
    public PostSubContractorIntoEmployerRequest withRequest(openapisdk.models.shared.SubContractor request) {
        this.request = request;
        return this;
    }
}