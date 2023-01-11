package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCaPoolsFetchCaCertsRequest {
    public PrivatecaProjectsLocationsCaPoolsFetchCaCertsPathParams pathParams;
    public PrivatecaProjectsLocationsCaPoolsFetchCaCertsRequest withPathParams(PrivatecaProjectsLocationsCaPoolsFetchCaCertsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivatecaProjectsLocationsCaPoolsFetchCaCertsQueryParams queryParams;
    public PrivatecaProjectsLocationsCaPoolsFetchCaCertsRequest withQueryParams(PrivatecaProjectsLocationsCaPoolsFetchCaCertsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FetchCaCertsRequest request;
    public PrivatecaProjectsLocationsCaPoolsFetchCaCertsRequest withRequest(openapisdk.models.shared.FetchCaCertsRequest request) {
        this.request = request;
        return this;
    }
    public PrivatecaProjectsLocationsCaPoolsFetchCaCertsSecurity security;
    public PrivatecaProjectsLocationsCaPoolsFetchCaCertsRequest withSecurity(PrivatecaProjectsLocationsCaPoolsFetchCaCertsSecurity security) {
        this.security = security;
        return this;
    }
}