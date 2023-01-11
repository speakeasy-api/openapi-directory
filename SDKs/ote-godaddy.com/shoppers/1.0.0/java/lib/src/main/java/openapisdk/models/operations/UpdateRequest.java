package openapisdk.models.operations;



public class UpdateRequest {
    public UpdatePathParams pathParams;
    public UpdateRequest withPathParams(UpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateRequests request;
    public UpdateRequest withRequest(UpdateRequests request) {
        this.request = request;
        return this;
    }
}