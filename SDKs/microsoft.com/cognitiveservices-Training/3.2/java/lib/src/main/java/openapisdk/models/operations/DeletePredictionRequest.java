package openapisdk.models.operations;



public class DeletePredictionRequest {
    public DeletePredictionPathParams pathParams;
    public DeletePredictionRequest withPathParams(DeletePredictionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeletePredictionQueryParams queryParams;
    public DeletePredictionRequest withQueryParams(DeletePredictionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}