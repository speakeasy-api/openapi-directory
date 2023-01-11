package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNcbiGeneMappingUsingPostRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RgdidListRequest request;
    public GetNcbiGeneMappingUsingPostRequest withRequest(openapisdk.models.shared.RgdidListRequest request) {
        this.request = request;
        return this;
    }
}