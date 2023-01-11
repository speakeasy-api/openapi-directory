package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAgentSitePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agent_id")
    public String agentId;
    public UpdateAgentSitePathParams withAgentId(String agentId) {
        this.agentId = agentId;
        return this;
    }
}