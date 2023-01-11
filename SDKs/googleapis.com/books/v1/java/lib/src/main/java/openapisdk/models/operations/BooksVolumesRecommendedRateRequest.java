package openapisdk.models.operations;



public class BooksVolumesRecommendedRateRequest {
    public BooksVolumesRecommendedRateQueryParams queryParams;
    public BooksVolumesRecommendedRateRequest withQueryParams(BooksVolumesRecommendedRateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksVolumesRecommendedRateSecurity security;
    public BooksVolumesRecommendedRateRequest withSecurity(BooksVolumesRecommendedRateSecurity security) {
        this.security = security;
        return this;
    }
}