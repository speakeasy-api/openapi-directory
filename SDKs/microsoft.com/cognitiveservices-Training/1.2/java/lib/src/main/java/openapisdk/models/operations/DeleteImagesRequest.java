package openapisdk.models.operations;



public class DeleteImagesRequest {
    public DeleteImagesPathParams pathParams;
    public DeleteImagesRequest withPathParams(DeleteImagesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteImagesQueryParams queryParams;
    public DeleteImagesRequest withQueryParams(DeleteImagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteImagesHeaders headers;
    public DeleteImagesRequest withHeaders(DeleteImagesHeaders headers) {
        this.headers = headers;
        return this;
    }
}