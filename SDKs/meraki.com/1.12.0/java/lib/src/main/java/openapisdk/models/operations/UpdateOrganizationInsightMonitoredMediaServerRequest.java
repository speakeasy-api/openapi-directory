package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationInsightMonitoredMediaServerRequest {
    public UpdateOrganizationInsightMonitoredMediaServerPathParams pathParams;
    public UpdateOrganizationInsightMonitoredMediaServerRequest withPathParams(UpdateOrganizationInsightMonitoredMediaServerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateOrganizationInsightMonitoredMediaServerRequestBody request;
    public UpdateOrganizationInsightMonitoredMediaServerRequest withRequest(UpdateOrganizationInsightMonitoredMediaServerRequestBody request) {
        this.request = request;
        return this;
    }
}