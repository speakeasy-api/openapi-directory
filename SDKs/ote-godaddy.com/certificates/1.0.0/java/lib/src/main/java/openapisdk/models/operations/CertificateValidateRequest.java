package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateValidateRequest {
    public CertificateValidateHeaders headers;
    public CertificateValidateRequest withHeaders(CertificateValidateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CertificateValidateRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}