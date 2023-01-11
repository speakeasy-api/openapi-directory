package openapisdk.models.operations;



public class PutUserTagRequest {
    public PutUserTagPathParams pathParams;
    public PutUserTagRequest withPathParams(PutUserTagPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutUserTagHeaders headers;
    public PutUserTagRequest withHeaders(PutUserTagHeaders headers) {
        this.headers = headers;
        return this;
    }
}