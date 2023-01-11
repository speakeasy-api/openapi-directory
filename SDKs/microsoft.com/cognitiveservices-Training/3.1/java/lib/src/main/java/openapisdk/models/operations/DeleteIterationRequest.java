package openapisdk.models.operations;



public class DeleteIterationRequest {
    public DeleteIterationPathParams pathParams;
    public DeleteIterationRequest withPathParams(DeleteIterationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteIterationHeaders headers;
    public DeleteIterationRequest withHeaders(DeleteIterationHeaders headers) {
        this.headers = headers;
        return this;
    }
}