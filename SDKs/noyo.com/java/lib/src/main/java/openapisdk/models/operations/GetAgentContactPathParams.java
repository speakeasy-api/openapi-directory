package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAgentContactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agent_id")
    public String agentId;
    public GetAgentContactPathParams withAgentId(String agentId) {
        this.agentId = agentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=contact_id")
    public String contactId;
    public GetAgentContactPathParams withContactId(String contactId) {
        this.contactId = contactId;
        return this;
    }
}