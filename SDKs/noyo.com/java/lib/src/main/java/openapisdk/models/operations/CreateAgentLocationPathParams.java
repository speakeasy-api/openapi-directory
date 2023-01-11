package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAgentLocationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agent_id")
    public String agentId;
    public CreateAgentLocationPathParams withAgentId(String agentId) {
        this.agentId = agentId;
        return this;
    }
}