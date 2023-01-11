package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchSubContractorRequest {
    public PatchSubContractorPathParams pathParams;
    public PatchSubContractorRequest withPathParams(PatchSubContractorPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatchSubContractorHeaders headers;
    public PatchSubContractorRequest withHeaders(PatchSubContractorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubContractor request;
    public PatchSubContractorRequest withRequest(openapisdk.models.shared.SubContractor request) {
        this.request = request;
        return this;
    }
}