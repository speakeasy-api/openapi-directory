package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HomegraphAgentUsersDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentUserId")
    public String agentUserId;
    public HomegraphAgentUsersDeletePathParams withAgentUserId(String agentUserId) {
        this.agentUserId = agentUserId;
        return this;
    }
}