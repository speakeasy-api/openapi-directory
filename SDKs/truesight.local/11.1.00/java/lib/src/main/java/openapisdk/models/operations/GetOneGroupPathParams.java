package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOneGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public GetOneGroupPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}