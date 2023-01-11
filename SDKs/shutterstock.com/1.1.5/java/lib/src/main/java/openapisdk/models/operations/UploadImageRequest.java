package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadImageRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImageCreateRequest request;
    public UploadImageRequest withRequest(openapisdk.models.shared.ImageCreateRequest request) {
        this.request = request;
        return this;
    }
    public UploadImageSecurity security;
    public UploadImageRequest withSecurity(UploadImageSecurity security) {
        this.security = security;
        return this;
    }
}