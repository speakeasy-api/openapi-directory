package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserPopularPairsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public Long userId;
    public GetUserPopularPairsPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}