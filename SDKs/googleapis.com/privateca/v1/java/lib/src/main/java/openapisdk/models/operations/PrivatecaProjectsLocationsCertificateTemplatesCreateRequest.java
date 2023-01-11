package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCertificateTemplatesCreateRequest {
    public PrivatecaProjectsLocationsCertificateTemplatesCreatePathParams pathParams;
    public PrivatecaProjectsLocationsCertificateTemplatesCreateRequest withPathParams(PrivatecaProjectsLocationsCertificateTemplatesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivatecaProjectsLocationsCertificateTemplatesCreateQueryParams queryParams;
    public PrivatecaProjectsLocationsCertificateTemplatesCreateRequest withQueryParams(PrivatecaProjectsLocationsCertificateTemplatesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CertificateTemplateInput request;
    public PrivatecaProjectsLocationsCertificateTemplatesCreateRequest withRequest(openapisdk.models.shared.CertificateTemplateInput request) {
        this.request = request;
        return this;
    }
    public PrivatecaProjectsLocationsCertificateTemplatesCreateSecurity security;
    public PrivatecaProjectsLocationsCertificateTemplatesCreateRequest withSecurity(PrivatecaProjectsLocationsCertificateTemplatesCreateSecurity security) {
        this.security = security;
        return this;
    }
}