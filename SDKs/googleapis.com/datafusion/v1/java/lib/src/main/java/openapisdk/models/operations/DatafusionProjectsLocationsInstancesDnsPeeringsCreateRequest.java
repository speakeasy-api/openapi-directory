package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatafusionProjectsLocationsInstancesDnsPeeringsCreateRequest {
    public DatafusionProjectsLocationsInstancesDnsPeeringsCreatePathParams pathParams;
    public DatafusionProjectsLocationsInstancesDnsPeeringsCreateRequest withPathParams(DatafusionProjectsLocationsInstancesDnsPeeringsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatafusionProjectsLocationsInstancesDnsPeeringsCreateQueryParams queryParams;
    public DatafusionProjectsLocationsInstancesDnsPeeringsCreateRequest withQueryParams(DatafusionProjectsLocationsInstancesDnsPeeringsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DnsPeering request;
    public DatafusionProjectsLocationsInstancesDnsPeeringsCreateRequest withRequest(openapisdk.models.shared.DnsPeering request) {
        this.request = request;
        return this;
    }
    public DatafusionProjectsLocationsInstancesDnsPeeringsCreateSecurity security;
    public DatafusionProjectsLocationsInstancesDnsPeeringsCreateRequest withSecurity(DatafusionProjectsLocationsInstancesDnsPeeringsCreateSecurity security) {
        this.security = security;
        return this;
    }
}