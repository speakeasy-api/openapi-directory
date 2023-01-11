package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAgentLocationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agent_id")
    public String agentId;
    public GetAgentLocationsPathParams withAgentId(String agentId) {
        this.agentId = agentId;
        return this;
    }
}