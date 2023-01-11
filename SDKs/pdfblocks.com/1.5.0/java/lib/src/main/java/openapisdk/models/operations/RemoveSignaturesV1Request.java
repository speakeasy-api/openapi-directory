package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveSignaturesV1Request {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public RemoveSignaturesV1RequestBody request;
    public RemoveSignaturesV1Request withRequest(RemoveSignaturesV1RequestBody request) {
        this.request = request;
        return this;
    }
}