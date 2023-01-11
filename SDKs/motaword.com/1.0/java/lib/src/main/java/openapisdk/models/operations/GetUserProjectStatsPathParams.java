package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserProjectStatsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public Long userId;
    public GetUserProjectStatsPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}