package openapisdk.models.operations;



public class GetTrainedModelLearningCurveRequest {
    public GetTrainedModelLearningCurvePathParams pathParams;
    public GetTrainedModelLearningCurveRequest withPathParams(GetTrainedModelLearningCurvePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTrainedModelLearningCurveQueryParams queryParams;
    public GetTrainedModelLearningCurveRequest withQueryParams(GetTrainedModelLearningCurveQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTrainedModelLearningCurveSecurity security;
    public GetTrainedModelLearningCurveRequest withSecurity(GetTrainedModelLearningCurveSecurity security) {
        this.security = security;
        return this;
    }
}