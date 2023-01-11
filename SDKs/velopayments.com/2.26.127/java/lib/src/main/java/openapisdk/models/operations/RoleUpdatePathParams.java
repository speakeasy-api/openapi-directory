package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RoleUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public RoleUpdatePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}