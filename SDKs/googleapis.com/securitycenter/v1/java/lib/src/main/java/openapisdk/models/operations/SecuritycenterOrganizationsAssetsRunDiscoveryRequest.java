package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterOrganizationsAssetsRunDiscoveryRequest {
    public SecuritycenterOrganizationsAssetsRunDiscoveryPathParams pathParams;
    public SecuritycenterOrganizationsAssetsRunDiscoveryRequest withPathParams(SecuritycenterOrganizationsAssetsRunDiscoveryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecuritycenterOrganizationsAssetsRunDiscoveryQueryParams queryParams;
    public SecuritycenterOrganizationsAssetsRunDiscoveryRequest withQueryParams(SecuritycenterOrganizationsAssetsRunDiscoveryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public SecuritycenterOrganizationsAssetsRunDiscoveryRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public SecuritycenterOrganizationsAssetsRunDiscoverySecurity security;
    public SecuritycenterOrganizationsAssetsRunDiscoveryRequest withSecurity(SecuritycenterOrganizationsAssetsRunDiscoverySecurity security) {
        this.security = security;
        return this;
    }
}