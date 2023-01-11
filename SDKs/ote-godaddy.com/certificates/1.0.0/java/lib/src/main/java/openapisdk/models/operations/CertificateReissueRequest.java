package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateReissueRequest {
    public CertificateReissuePathParams pathParams;
    public CertificateReissueRequest withPathParams(CertificateReissuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CertificateReissueRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}