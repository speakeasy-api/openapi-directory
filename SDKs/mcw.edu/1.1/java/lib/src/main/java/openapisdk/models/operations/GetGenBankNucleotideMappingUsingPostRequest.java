package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGenBankNucleotideMappingUsingPostRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RgdidListRequest request;
    public GetGenBankNucleotideMappingUsingPostRequest withRequest(openapisdk.models.shared.RgdidListRequest request) {
        this.request = request;
        return this;
    }
}