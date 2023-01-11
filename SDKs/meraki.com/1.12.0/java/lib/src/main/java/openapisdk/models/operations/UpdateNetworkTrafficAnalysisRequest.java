package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkTrafficAnalysisRequest {
    public UpdateNetworkTrafficAnalysisPathParams pathParams;
    public UpdateNetworkTrafficAnalysisRequest withPathParams(UpdateNetworkTrafficAnalysisPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkTrafficAnalysisRequestBody request;
    public UpdateNetworkTrafficAnalysisRequest withRequest(UpdateNetworkTrafficAnalysisRequestBody request) {
        this.request = request;
        return this;
    }
}