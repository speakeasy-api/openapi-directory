package openapisdk.models.operations;



public class DeleteTagRequest {
    public DeleteTagPathParams pathParams;
    public DeleteTagRequest withPathParams(DeleteTagPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteTagHeaders headers;
    public DeleteTagRequest withHeaders(DeleteTagHeaders headers) {
        this.headers = headers;
        return this;
    }
}