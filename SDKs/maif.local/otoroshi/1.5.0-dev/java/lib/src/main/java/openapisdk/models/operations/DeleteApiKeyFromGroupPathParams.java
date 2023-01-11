package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteApiKeyFromGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=clientId")
    public String clientId;
    public DeleteApiKeyFromGroupPathParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public DeleteApiKeyFromGroupPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}