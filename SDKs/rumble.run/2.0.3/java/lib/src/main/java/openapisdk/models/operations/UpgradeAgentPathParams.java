package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpgradeAgentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agent_id")
    public String agentId;
    public UpgradeAgentPathParams withAgentId(String agentId) {
        this.agentId = agentId;
        return this;
    }
}