package openapisdk.models.operations;



public class TrainProjectRequest {
    public TrainProjectPathParams pathParams;
    public TrainProjectRequest withPathParams(TrainProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TrainProjectQueryParams queryParams;
    public TrainProjectRequest withQueryParams(TrainProjectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TrainProjectRequests request;
    public TrainProjectRequest withRequest(TrainProjectRequests request) {
        this.request = request;
        return this;
    }
}