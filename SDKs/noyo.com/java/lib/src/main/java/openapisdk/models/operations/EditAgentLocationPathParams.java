package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditAgentLocationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agent_id")
    public String agentId;
    public EditAgentLocationPathParams withAgentId(String agentId) {
        this.agentId = agentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=location_id")
    public String locationId;
    public EditAgentLocationPathParams withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public EditAgentLocationPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}