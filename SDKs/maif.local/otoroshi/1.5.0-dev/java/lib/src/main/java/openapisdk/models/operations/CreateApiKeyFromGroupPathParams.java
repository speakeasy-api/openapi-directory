package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateApiKeyFromGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public CreateApiKeyFromGroupPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}