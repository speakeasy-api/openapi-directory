package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLocationListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public String groupId;
    public GetLocationListPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}