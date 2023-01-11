package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateRevokeRequest {
    public CertificateRevokePathParams pathParams;
    public CertificateRevokeRequest withPathParams(CertificateRevokePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CertificateRevokeRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}