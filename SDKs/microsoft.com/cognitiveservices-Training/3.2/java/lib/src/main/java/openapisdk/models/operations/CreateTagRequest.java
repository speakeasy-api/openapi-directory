package openapisdk.models.operations;



public class CreateTagRequest {
    public CreateTagPathParams pathParams;
    public CreateTagRequest withPathParams(CreateTagPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateTagQueryParams queryParams;
    public CreateTagRequest withQueryParams(CreateTagQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}