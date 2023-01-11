package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMgiMappingUsingPostRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RgdidListRequest request;
    public GetMgiMappingUsingPostRequest withRequest(openapisdk.models.shared.RgdidListRequest request) {
        this.request = request;
        return this;
    }
}