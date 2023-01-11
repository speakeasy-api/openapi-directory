package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditAgentContactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agent_id")
    public String agentId;
    public EditAgentContactPathParams withAgentId(String agentId) {
        this.agentId = agentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=contact_id")
    public String contactId;
    public EditAgentContactPathParams withContactId(String contactId) {
        this.contactId = contactId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public EditAgentContactPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}