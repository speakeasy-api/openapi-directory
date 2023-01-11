package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCertificateTemplatesPatchRequest {
    public PrivatecaProjectsLocationsCertificateTemplatesPatchPathParams pathParams;
    public PrivatecaProjectsLocationsCertificateTemplatesPatchRequest withPathParams(PrivatecaProjectsLocationsCertificateTemplatesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivatecaProjectsLocationsCertificateTemplatesPatchQueryParams queryParams;
    public PrivatecaProjectsLocationsCertificateTemplatesPatchRequest withQueryParams(PrivatecaProjectsLocationsCertificateTemplatesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CertificateTemplateInput request;
    public PrivatecaProjectsLocationsCertificateTemplatesPatchRequest withRequest(openapisdk.models.shared.CertificateTemplateInput request) {
        this.request = request;
        return this;
    }
    public PrivatecaProjectsLocationsCertificateTemplatesPatchSecurity security;
    public PrivatecaProjectsLocationsCertificateTemplatesPatchRequest withSecurity(PrivatecaProjectsLocationsCertificateTemplatesPatchSecurity security) {
        this.security = security;
        return this;
    }
}