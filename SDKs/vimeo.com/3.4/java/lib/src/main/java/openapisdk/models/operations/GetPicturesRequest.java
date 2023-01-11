package openapisdk.models.operations;



public class GetPicturesRequest {
    public GetPicturesPathParams pathParams;
    public GetPicturesRequest withPathParams(GetPicturesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPicturesQueryParams queryParams;
    public GetPicturesRequest withQueryParams(GetPicturesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}