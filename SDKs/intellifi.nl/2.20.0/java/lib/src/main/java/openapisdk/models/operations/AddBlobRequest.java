package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddBlobRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BlobInput request;
    public AddBlobRequest withRequest(openapisdk.models.shared.BlobInput request) {
        this.request = request;
        return this;
    }
}