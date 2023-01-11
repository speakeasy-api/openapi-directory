package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecognizeTextRequest {
    public RecognizeTextQueryParams queryParams;
    public RecognizeTextRequest withQueryParams(RecognizeTextQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImageUrl request;
    public RecognizeTextRequest withRequest(openapisdk.models.shared.ImageUrl request) {
        this.request = request;
        return this;
    }
}