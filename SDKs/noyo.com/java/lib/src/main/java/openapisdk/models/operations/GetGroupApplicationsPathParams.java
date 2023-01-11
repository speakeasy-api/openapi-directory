package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupApplicationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public String groupId;
    public GetGroupApplicationsPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}