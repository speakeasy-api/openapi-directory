package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadInventoryRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UploadInventoryRequestBody request;
    public UploadInventoryRequest withRequest(UploadInventoryRequestBody request) {
        this.request = request;
        return this;
    }
}