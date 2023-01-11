package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPermissionAppsAppIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userId")
    public String userId;
    public GetPermissionAppsAppIdQueryParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}