package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificatemanagerProjectsLocationsDnsAuthorizationsPatchRequest {
    public CertificatemanagerProjectsLocationsDnsAuthorizationsPatchPathParams pathParams;
    public CertificatemanagerProjectsLocationsDnsAuthorizationsPatchRequest withPathParams(CertificatemanagerProjectsLocationsDnsAuthorizationsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CertificatemanagerProjectsLocationsDnsAuthorizationsPatchQueryParams queryParams;
    public CertificatemanagerProjectsLocationsDnsAuthorizationsPatchRequest withQueryParams(CertificatemanagerProjectsLocationsDnsAuthorizationsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DnsAuthorizationInput request;
    public CertificatemanagerProjectsLocationsDnsAuthorizationsPatchRequest withRequest(openapisdk.models.shared.DnsAuthorizationInput request) {
        this.request = request;
        return this;
    }
    public CertificatemanagerProjectsLocationsDnsAuthorizationsPatchSecurity security;
    public CertificatemanagerProjectsLocationsDnsAuthorizationsPatchRequest withSecurity(CertificatemanagerProjectsLocationsDnsAuthorizationsPatchSecurity security) {
        this.security = security;
        return this;
    }
}