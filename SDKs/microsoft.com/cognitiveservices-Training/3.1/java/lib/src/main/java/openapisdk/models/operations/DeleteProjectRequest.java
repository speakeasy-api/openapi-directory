package openapisdk.models.operations;



public class DeleteProjectRequest {
    public DeleteProjectPathParams pathParams;
    public DeleteProjectRequest withPathParams(DeleteProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteProjectHeaders headers;
    public DeleteProjectRequest withHeaders(DeleteProjectHeaders headers) {
        this.headers = headers;
        return this;
    }
}