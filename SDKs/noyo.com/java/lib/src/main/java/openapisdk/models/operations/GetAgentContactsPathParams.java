package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAgentContactsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agent_id")
    public String agentId;
    public GetAgentContactsPathParams withAgentId(String agentId) {
        this.agentId = agentId;
        return this;
    }
}