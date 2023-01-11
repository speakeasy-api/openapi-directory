package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSimCompareRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CompareInput request;
    public PostSimCompareRequest withRequest(openapisdk.models.shared.CompareInput request) {
        this.request = request;
        return this;
    }
}