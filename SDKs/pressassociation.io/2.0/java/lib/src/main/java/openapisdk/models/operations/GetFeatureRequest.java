package openapisdk.models.operations;



public class GetFeatureRequest {
    public GetFeaturePathParams pathParams;
    public GetFeatureRequest withPathParams(GetFeaturePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetFeatureSecurity security;
    public GetFeatureRequest withSecurity(GetFeatureSecurity security) {
        this.security = security;
        return this;
    }
}