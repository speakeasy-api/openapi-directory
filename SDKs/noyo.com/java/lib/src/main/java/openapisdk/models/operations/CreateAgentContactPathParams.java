package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAgentContactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agent_id")
    public String agentId;
    public CreateAgentContactPathParams withAgentId(String agentId) {
        this.agentId = agentId;
        return this;
    }
}