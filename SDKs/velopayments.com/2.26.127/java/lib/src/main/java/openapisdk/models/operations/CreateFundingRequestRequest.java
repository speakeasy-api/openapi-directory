package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFundingRequestRequest {
    public CreateFundingRequestPathParams pathParams;
    public CreateFundingRequestRequest withPathParams(CreateFundingRequestPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FundingRequestV2 request;
    public CreateFundingRequestRequest withRequest(openapisdk.models.shared.FundingRequestV2 request) {
        this.request = request;
        return this;
    }
}