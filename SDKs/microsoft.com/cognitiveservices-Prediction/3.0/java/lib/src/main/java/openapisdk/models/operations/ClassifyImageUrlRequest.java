package openapisdk.models.operations;



public class ClassifyImageUrlRequest {
    public ClassifyImageUrlPathParams pathParams;
    public ClassifyImageUrlRequest withPathParams(ClassifyImageUrlPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ClassifyImageUrlQueryParams queryParams;
    public ClassifyImageUrlRequest withQueryParams(ClassifyImageUrlQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ClassifyImageUrlRequests request;
    public ClassifyImageUrlRequest withRequest(ClassifyImageUrlRequests request) {
        this.request = request;
        return this;
    }
}