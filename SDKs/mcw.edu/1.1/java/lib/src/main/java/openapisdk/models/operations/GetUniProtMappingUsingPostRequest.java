package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUniProtMappingUsingPostRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RgdidListRequest request;
    public GetUniProtMappingUsingPostRequest withRequest(openapisdk.models.shared.RgdidListRequest request) {
        this.request = request;
        return this;
    }
}