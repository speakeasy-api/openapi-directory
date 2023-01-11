package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveAgentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agent_id")
    public String agentId;
    public RemoveAgentPathParams withAgentId(String agentId) {
        this.agentId = agentId;
        return this;
    }
}