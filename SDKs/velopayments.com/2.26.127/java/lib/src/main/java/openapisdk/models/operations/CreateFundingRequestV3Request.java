package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFundingRequestV3Request {
    public CreateFundingRequestV3PathParams pathParams;
    public CreateFundingRequestV3Request withPathParams(CreateFundingRequestV3PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FundingRequestV3 request;
    public CreateFundingRequestV3Request withRequest(openapisdk.models.shared.FundingRequestV3 request) {
        this.request = request;
        return this;
    }
}