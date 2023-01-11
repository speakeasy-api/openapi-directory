package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditAgentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agent_id")
    public String agentId;
    public EditAgentPathParams withAgentId(String agentId) {
        this.agentId = agentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public EditAgentPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}