package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUserByIdV2PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public DeleteUserByIdV2PathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}