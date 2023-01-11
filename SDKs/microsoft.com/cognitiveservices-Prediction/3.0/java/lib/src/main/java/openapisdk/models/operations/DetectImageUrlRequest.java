package openapisdk.models.operations;



public class DetectImageUrlRequest {
    public DetectImageUrlPathParams pathParams;
    public DetectImageUrlRequest withPathParams(DetectImageUrlPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DetectImageUrlQueryParams queryParams;
    public DetectImageUrlRequest withQueryParams(DetectImageUrlQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DetectImageUrlRequests request;
    public DetectImageUrlRequest withRequest(DetectImageUrlRequests request) {
        this.request = request;
        return this;
    }
}