package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public String userId;
    public GetAccountUserPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}