package openapisdk.models.operations;



public class GetTrainedModelLearningCurve1Request {
    public GetTrainedModelLearningCurve1PathParams pathParams;
    public GetTrainedModelLearningCurve1Request withPathParams(GetTrainedModelLearningCurve1PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTrainedModelLearningCurve1QueryParams queryParams;
    public GetTrainedModelLearningCurve1Request withQueryParams(GetTrainedModelLearningCurve1QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTrainedModelLearningCurve1Security security;
    public GetTrainedModelLearningCurve1Request withSecurity(GetTrainedModelLearningCurve1Security security) {
        this.security = security;
        return this;
    }
}