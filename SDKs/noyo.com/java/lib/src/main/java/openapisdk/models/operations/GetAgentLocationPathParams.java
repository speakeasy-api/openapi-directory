package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAgentLocationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agent_id")
    public String agentId;
    public GetAgentLocationPathParams withAgentId(String agentId) {
        this.agentId = agentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=location_id")
    public String locationId;
    public GetAgentLocationPathParams withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
}