package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectAnalyticsRequest {
    public CollectAnalyticsPathParams pathParams;
    public CollectAnalyticsRequest withPathParams(CollectAnalyticsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AnalyticsCollection request;
    public CollectAnalyticsRequest withRequest(openapisdk.models.shared.AnalyticsCollection request) {
        this.request = request;
        return this;
    }
}