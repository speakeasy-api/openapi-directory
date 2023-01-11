package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TpuProjectsLocationsGenerateServiceIdentityRequest {
    public TpuProjectsLocationsGenerateServiceIdentityPathParams pathParams;
    public TpuProjectsLocationsGenerateServiceIdentityRequest withPathParams(TpuProjectsLocationsGenerateServiceIdentityPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TpuProjectsLocationsGenerateServiceIdentityQueryParams queryParams;
    public TpuProjectsLocationsGenerateServiceIdentityRequest withQueryParams(TpuProjectsLocationsGenerateServiceIdentityQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public TpuProjectsLocationsGenerateServiceIdentityRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public TpuProjectsLocationsGenerateServiceIdentitySecurity security;
    public TpuProjectsLocationsGenerateServiceIdentityRequest withSecurity(TpuProjectsLocationsGenerateServiceIdentitySecurity security) {
        this.security = security;
        return this;
    }
}