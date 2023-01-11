package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupVideosPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public Double groupId;
    public GetGroupVideosPathParams withGroupId(Double groupId) {
        this.groupId = groupId;
        return this;
    }
}