package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkehubProjectsLocationsFeaturesCreateRequest {
    public GkehubProjectsLocationsFeaturesCreatePathParams pathParams;
    public GkehubProjectsLocationsFeaturesCreateRequest withPathParams(GkehubProjectsLocationsFeaturesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GkehubProjectsLocationsFeaturesCreateQueryParams queryParams;
    public GkehubProjectsLocationsFeaturesCreateRequest withQueryParams(GkehubProjectsLocationsFeaturesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FeatureInput request;
    public GkehubProjectsLocationsFeaturesCreateRequest withRequest(openapisdk.models.shared.FeatureInput request) {
        this.request = request;
        return this;
    }
    public GkehubProjectsLocationsFeaturesCreateSecurity security;
    public GkehubProjectsLocationsFeaturesCreateRequest withSecurity(GkehubProjectsLocationsFeaturesCreateSecurity security) {
        this.security = security;
        return this;
    }
}