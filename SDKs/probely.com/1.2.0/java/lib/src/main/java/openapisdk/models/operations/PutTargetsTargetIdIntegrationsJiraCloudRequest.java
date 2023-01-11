package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutTargetsTargetIdIntegrationsJiraCloudRequest {
    public PutTargetsTargetIdIntegrationsJiraCloudPathParams pathParams;
    public PutTargetsTargetIdIntegrationsJiraCloudRequest withPathParams(PutTargetsTargetIdIntegrationsJiraCloudPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.JiraScope request;
    public PutTargetsTargetIdIntegrationsJiraCloudRequest withRequest(openapisdk.models.shared.JiraScope request) {
        this.request = request;
        return this;
    }
}