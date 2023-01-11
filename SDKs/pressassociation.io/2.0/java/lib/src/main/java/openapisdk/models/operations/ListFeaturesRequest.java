package openapisdk.models.operations;



public class ListFeaturesRequest {
    public ListFeaturesQueryParams queryParams;
    public ListFeaturesRequest withQueryParams(ListFeaturesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFeaturesSecurity security;
    public ListFeaturesRequest withSecurity(ListFeaturesSecurity security) {
        this.security = security;
        return this;
    }
}