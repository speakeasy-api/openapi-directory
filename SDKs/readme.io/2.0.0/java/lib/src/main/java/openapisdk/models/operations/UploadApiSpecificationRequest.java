package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadApiSpecificationRequest {
    public UploadApiSpecificationHeaders headers;
    public UploadApiSpecificationRequest withHeaders(UploadApiSpecificationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UploadApiSpecificationRequestBody request;
    public UploadApiSpecificationRequest withRequest(UploadApiSpecificationRequestBody request) {
        this.request = request;
        return this;
    }
    public UploadApiSpecificationSecurity security;
    public UploadApiSpecificationRequest withSecurity(UploadApiSpecificationSecurity security) {
        this.security = security;
        return this;
    }
}