package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePermissionAppsAppIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userId")
    public String userId;
    public DeletePermissionAppsAppIdQueryParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}