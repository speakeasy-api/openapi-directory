package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSubContractorIntoEmployerRequest {
    public PutSubContractorIntoEmployerPathParams pathParams;
    public PutSubContractorIntoEmployerRequest withPathParams(PutSubContractorIntoEmployerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutSubContractorIntoEmployerHeaders headers;
    public PutSubContractorIntoEmployerRequest withHeaders(PutSubContractorIntoEmployerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubContractor request;
    public PutSubContractorIntoEmployerRequest withRequest(openapisdk.models.shared.SubContractor request) {
        this.request = request;
        return this;
    }
}