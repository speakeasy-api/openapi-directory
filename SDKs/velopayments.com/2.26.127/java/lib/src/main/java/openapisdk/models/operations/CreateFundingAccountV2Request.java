package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFundingAccountV2Request {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateFundingAccountRequestV2 request;
    public CreateFundingAccountV2Request withRequest(openapisdk.models.shared.CreateFundingAccountRequestV2 request) {
        this.request = request;
        return this;
    }
}