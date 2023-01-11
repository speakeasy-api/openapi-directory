package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutTargetsTargetIdIntegrationsJiraServerRequest {
    public PutTargetsTargetIdIntegrationsJiraServerPathParams pathParams;
    public PutTargetsTargetIdIntegrationsJiraServerRequest withPathParams(PutTargetsTargetIdIntegrationsJiraServerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.JiraScope request;
    public PutTargetsTargetIdIntegrationsJiraServerRequest withRequest(openapisdk.models.shared.JiraScope request) {
        this.request = request;
        return this;
    }
}