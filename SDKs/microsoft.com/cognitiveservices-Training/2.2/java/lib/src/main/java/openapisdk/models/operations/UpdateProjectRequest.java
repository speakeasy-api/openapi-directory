package openapisdk.models.operations;



public class UpdateProjectRequest {
    public UpdateProjectPathParams pathParams;
    public UpdateProjectRequest withPathParams(UpdateProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateProjectHeaders headers;
    public UpdateProjectRequest withHeaders(UpdateProjectHeaders headers) {
        this.headers = headers;
        return this;
    }
    public UpdateProjectRequestsInput request;
    public UpdateProjectRequest withRequest(UpdateProjectRequestsInput request) {
        this.request = request;
        return this;
    }
}