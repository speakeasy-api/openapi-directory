package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAgentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agent_id")
    public String agentId;
    public GetAgentPathParams withAgentId(String agentId) {
        this.agentId = agentId;
        return this;
    }
}