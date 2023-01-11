package openapisdk.models.operations;



public class GetTrainedModelMetricsRequest {
    public GetTrainedModelMetricsPathParams pathParams;
    public GetTrainedModelMetricsRequest withPathParams(GetTrainedModelMetricsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTrainedModelMetricsSecurity security;
    public GetTrainedModelMetricsRequest withSecurity(GetTrainedModelMetricsSecurity security) {
        this.security = security;
        return this;
    }
}