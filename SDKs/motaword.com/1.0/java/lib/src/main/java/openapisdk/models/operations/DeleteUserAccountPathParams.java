package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUserAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public Long userId;
    public DeleteUserAccountPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}