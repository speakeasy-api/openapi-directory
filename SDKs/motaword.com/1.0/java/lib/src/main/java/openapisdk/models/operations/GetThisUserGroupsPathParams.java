package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetThisUserGroupsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public Long userId;
    public GetThisUserGroupsPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}