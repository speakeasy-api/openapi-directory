package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOrganizationInsightMonitoredMediaServerRequest {
    public CreateOrganizationInsightMonitoredMediaServerPathParams pathParams;
    public CreateOrganizationInsightMonitoredMediaServerRequest withPathParams(CreateOrganizationInsightMonitoredMediaServerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateOrganizationInsightMonitoredMediaServerRequestBody request;
    public CreateOrganizationInsightMonitoredMediaServerRequest withRequest(CreateOrganizationInsightMonitoredMediaServerRequestBody request) {
        this.request = request;
        return this;
    }
}