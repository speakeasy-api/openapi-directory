package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MergeDocumentsV1Request {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public MergeDocumentsV1RequestBody request;
    public MergeDocumentsV1Request withRequest(MergeDocumentsV1RequestBody request) {
        this.request = request;
        return this;
    }
}