package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAgentSiteRequest {
    public UpdateAgentSitePathParams pathParams;
    public UpdateAgentSiteRequest withPathParams(UpdateAgentSitePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AgentSiteId request;
    public UpdateAgentSiteRequest withRequest(openapisdk.models.shared.AgentSiteId request) {
        this.request = request;
        return this;
    }
    public UpdateAgentSiteSecurity security;
    public UpdateAgentSiteRequest withSecurity(UpdateAgentSiteSecurity security) {
        this.security = security;
        return this;
    }
}