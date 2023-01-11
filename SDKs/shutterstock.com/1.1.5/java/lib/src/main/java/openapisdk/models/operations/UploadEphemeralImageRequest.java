package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadEphemeralImageRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImageCreateRequest request;
    public UploadEphemeralImageRequest withRequest(openapisdk.models.shared.ImageCreateRequest request) {
        this.request = request;
        return this;
    }
    public UploadEphemeralImageSecurity security;
    public UploadEphemeralImageRequest withSecurity(UploadEphemeralImageSecurity security) {
        this.security = security;
        return this;
    }
}