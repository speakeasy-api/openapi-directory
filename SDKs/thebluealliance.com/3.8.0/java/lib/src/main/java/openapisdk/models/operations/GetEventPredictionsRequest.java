package openapisdk.models.operations;



public class GetEventPredictionsRequest {
    public GetEventPredictionsPathParams pathParams;
    public GetEventPredictionsRequest withPathParams(GetEventPredictionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEventPredictionsHeaders headers;
    public GetEventPredictionsRequest withHeaders(GetEventPredictionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetEventPredictionsSecurity security;
    public GetEventPredictionsRequest withSecurity(GetEventPredictionsSecurity security) {
        this.security = security;
        return this;
    }
}