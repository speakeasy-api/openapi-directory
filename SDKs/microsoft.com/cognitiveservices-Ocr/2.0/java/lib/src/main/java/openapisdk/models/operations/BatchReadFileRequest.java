package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchReadFileRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImageUrl request;
    public BatchReadFileRequest withRequest(openapisdk.models.shared.ImageUrl request) {
        this.request = request;
        return this;
    }
}