package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=UserId")
    public String userId;
    public PutUserPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}