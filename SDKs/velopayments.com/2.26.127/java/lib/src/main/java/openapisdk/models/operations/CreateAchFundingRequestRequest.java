package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAchFundingRequestRequest {
    public CreateAchFundingRequestPathParams pathParams;
    public CreateAchFundingRequestRequest withPathParams(CreateAchFundingRequestPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FundingRequestV1 request;
    public CreateAchFundingRequestRequest withRequest(openapisdk.models.shared.FundingRequestV1 request) {
        this.request = request;
        return this;
    }
}