package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnpackRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public Object request;
    public UnpackRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}