package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UploadsCreateRequestBody request;
    public UploadsCreateRequest withRequest(UploadsCreateRequestBody request) {
        this.request = request;
        return this;
    }
}