package openapisdk.models.operations;



public class GetTaggedImagesRequest {
    public GetTaggedImagesPathParams pathParams;
    public GetTaggedImagesRequest withPathParams(GetTaggedImagesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTaggedImagesQueryParams queryParams;
    public GetTaggedImagesRequest withQueryParams(GetTaggedImagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}