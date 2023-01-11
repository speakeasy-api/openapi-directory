package openapisdk.models.operations;



public class GetImagesRequest {
    public GetImagesPathParams pathParams;
    public GetImagesRequest withPathParams(GetImagesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetImagesQueryParams queryParams;
    public GetImagesRequest withQueryParams(GetImagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}