package openapisdk.models.operations;



public class UpdateIterationRequest {
    public UpdateIterationPathParams pathParams;
    public UpdateIterationRequest withPathParams(UpdateIterationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateIterationHeaders headers;
    public UpdateIterationRequest withHeaders(UpdateIterationHeaders headers) {
        this.headers = headers;
        return this;
    }
    public UpdateIterationRequestsInput request;
    public UpdateIterationRequest withRequest(UpdateIterationRequestsInput request) {
        this.request = request;
        return this;
    }
}