package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateRenewRequest {
    public CertificateRenewPathParams pathParams;
    public CertificateRenewRequest withPathParams(CertificateRenewPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CertificateRenewRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}