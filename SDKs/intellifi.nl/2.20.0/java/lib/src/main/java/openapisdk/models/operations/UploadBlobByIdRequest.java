package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadBlobByIdRequest {
    public UploadBlobByIdPathParams pathParams;
    public UploadBlobByIdRequest withPathParams(UploadBlobByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public Object request;
    public UploadBlobByIdRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}