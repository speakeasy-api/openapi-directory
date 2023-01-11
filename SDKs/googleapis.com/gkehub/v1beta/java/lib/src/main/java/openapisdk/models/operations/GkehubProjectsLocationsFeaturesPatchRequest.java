package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkehubProjectsLocationsFeaturesPatchRequest {
    public GkehubProjectsLocationsFeaturesPatchPathParams pathParams;
    public GkehubProjectsLocationsFeaturesPatchRequest withPathParams(GkehubProjectsLocationsFeaturesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GkehubProjectsLocationsFeaturesPatchQueryParams queryParams;
    public GkehubProjectsLocationsFeaturesPatchRequest withQueryParams(GkehubProjectsLocationsFeaturesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FeatureInput request;
    public GkehubProjectsLocationsFeaturesPatchRequest withRequest(openapisdk.models.shared.FeatureInput request) {
        this.request = request;
        return this;
    }
    public GkehubProjectsLocationsFeaturesPatchSecurity security;
    public GkehubProjectsLocationsFeaturesPatchRequest withSecurity(GkehubProjectsLocationsFeaturesPatchSecurity security) {
        this.security = security;
        return this;
    }
}