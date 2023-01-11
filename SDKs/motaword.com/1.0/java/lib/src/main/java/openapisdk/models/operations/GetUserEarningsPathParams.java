package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserEarningsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public Long userId;
    public GetUserEarningsPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}