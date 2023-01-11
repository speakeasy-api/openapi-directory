package openapisdk.models.operations;



public class PredictImageUrlRequest {
    public PredictImageUrlPathParams pathParams;
    public PredictImageUrlRequest withPathParams(PredictImageUrlPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PredictImageUrlQueryParams queryParams;
    public PredictImageUrlRequest withQueryParams(PredictImageUrlQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PredictImageUrlHeaders headers;
    public PredictImageUrlRequest withHeaders(PredictImageUrlHeaders headers) {
        this.headers = headers;
        return this;
    }
    public PredictImageUrlRequests request;
    public PredictImageUrlRequest withRequest(PredictImageUrlRequests request) {
        this.request = request;
        return this;
    }
}