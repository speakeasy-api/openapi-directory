package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoUsersBulkEditAssignedUserRolesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public DisplayvideoUsersBulkEditAssignedUserRolesPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}