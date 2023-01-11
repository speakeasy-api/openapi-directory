package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserStatsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public Long userId;
    public GetUserStatsPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}