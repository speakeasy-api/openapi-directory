package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SessionsIdViewsPostRequest {
    public SessionsIdViewsPostPathParams pathParams;
    public SessionsIdViewsPostRequest withPathParams(SessionsIdViewsPostPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SessionsIdViewsPostRequiredParametersToCreateAView request;
    public SessionsIdViewsPostRequest withRequest(SessionsIdViewsPostRequiredParametersToCreateAView request) {
        this.request = request;
        return this;
    }
}