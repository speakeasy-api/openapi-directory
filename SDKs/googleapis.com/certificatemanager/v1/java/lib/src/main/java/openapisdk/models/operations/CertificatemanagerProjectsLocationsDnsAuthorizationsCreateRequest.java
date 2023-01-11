package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificatemanagerProjectsLocationsDnsAuthorizationsCreateRequest {
    public CertificatemanagerProjectsLocationsDnsAuthorizationsCreatePathParams pathParams;
    public CertificatemanagerProjectsLocationsDnsAuthorizationsCreateRequest withPathParams(CertificatemanagerProjectsLocationsDnsAuthorizationsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CertificatemanagerProjectsLocationsDnsAuthorizationsCreateQueryParams queryParams;
    public CertificatemanagerProjectsLocationsDnsAuthorizationsCreateRequest withQueryParams(CertificatemanagerProjectsLocationsDnsAuthorizationsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DnsAuthorizationInput request;
    public CertificatemanagerProjectsLocationsDnsAuthorizationsCreateRequest withRequest(openapisdk.models.shared.DnsAuthorizationInput request) {
        this.request = request;
        return this;
    }
    public CertificatemanagerProjectsLocationsDnsAuthorizationsCreateSecurity security;
    public CertificatemanagerProjectsLocationsDnsAuthorizationsCreateRequest withSecurity(CertificatemanagerProjectsLocationsDnsAuthorizationsCreateSecurity security) {
        this.security = security;
        return this;
    }
}