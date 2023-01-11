package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCertificatesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostCertificatesCreateCertificateRequest request;
    public PostCertificatesRequest withRequest(PostCertificatesCreateCertificateRequest request) {
        this.request = request;
        return this;
    }
}