package openapisdk.models.operations;



public class QuickTestImageUrlRequest {
    public QuickTestImageUrlPathParams pathParams;
    public QuickTestImageUrlRequest withPathParams(QuickTestImageUrlPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public QuickTestImageUrlQueryParams queryParams;
    public QuickTestImageUrlRequest withQueryParams(QuickTestImageUrlQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public QuickTestImageUrlRequests request;
    public QuickTestImageUrlRequest withRequest(QuickTestImageUrlRequests request) {
        this.request = request;
        return this;
    }
}