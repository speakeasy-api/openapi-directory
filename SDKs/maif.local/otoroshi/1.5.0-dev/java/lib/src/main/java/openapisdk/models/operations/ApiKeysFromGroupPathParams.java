package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApiKeysFromGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public ApiKeysFromGroupPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}