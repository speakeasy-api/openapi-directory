package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchApiKeyFromGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=clientId")
    public String clientId;
    public PatchApiKeyFromGroupPathParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public PatchApiKeyFromGroupPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}