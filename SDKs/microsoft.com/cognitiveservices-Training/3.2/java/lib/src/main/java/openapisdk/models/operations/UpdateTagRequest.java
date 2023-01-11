package openapisdk.models.operations;



public class UpdateTagRequest {
    public UpdateTagPathParams pathParams;
    public UpdateTagRequest withPathParams(UpdateTagPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateTagRequestsInput request;
    public UpdateTagRequest withRequest(UpdateTagRequestsInput request) {
        this.request = request;
        return this;
    }
}