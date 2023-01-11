package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnfreezeUserAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public Long userId;
    public UnfreezeUserAccountPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}