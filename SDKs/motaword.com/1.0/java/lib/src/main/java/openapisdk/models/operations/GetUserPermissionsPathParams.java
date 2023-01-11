package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public Long userId;
    public GetUserPermissionsPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}