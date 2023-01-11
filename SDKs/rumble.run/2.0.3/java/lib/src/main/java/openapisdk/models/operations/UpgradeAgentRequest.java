package openapisdk.models.operations;



public class UpgradeAgentRequest {
    public UpgradeAgentPathParams pathParams;
    public UpgradeAgentRequest withPathParams(UpgradeAgentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpgradeAgentSecurity security;
    public UpgradeAgentRequest withSecurity(UpgradeAgentSecurity security) {
        this.security = security;
        return this;
    }
}