package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateCreateRequest {
    public CertificateCreateHeaders headers;
    public CertificateCreateRequest withHeaders(CertificateCreateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CertificateCreateRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}