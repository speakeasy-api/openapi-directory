package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGenBankProteinMappingUsingPostRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RgdidListRequest request;
    public GetGenBankProteinMappingUsingPostRequest withRequest(openapisdk.models.shared.RgdidListRequest request) {
        this.request = request;
        return this;
    }
}