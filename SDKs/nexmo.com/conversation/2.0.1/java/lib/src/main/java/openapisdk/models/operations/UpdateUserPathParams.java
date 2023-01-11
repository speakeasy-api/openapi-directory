package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public String userId;
    public UpdateUserPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}