package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=UserId")
    public String userId;
    public DeleteUserPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}