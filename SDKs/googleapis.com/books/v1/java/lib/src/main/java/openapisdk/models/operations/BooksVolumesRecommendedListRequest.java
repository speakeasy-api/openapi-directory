package openapisdk.models.operations;



public class BooksVolumesRecommendedListRequest {
    public BooksVolumesRecommendedListQueryParams queryParams;
    public BooksVolumesRecommendedListRequest withQueryParams(BooksVolumesRecommendedListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BooksVolumesRecommendedListSecurity security;
    public BooksVolumesRecommendedListRequest withSecurity(BooksVolumesRecommendedListSecurity security) {
        this.security = security;
        return this;
    }
}