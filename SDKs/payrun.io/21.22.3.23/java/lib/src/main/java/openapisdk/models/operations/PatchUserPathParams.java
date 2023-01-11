package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=UserId")
    public String userId;
    public PatchUserPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}