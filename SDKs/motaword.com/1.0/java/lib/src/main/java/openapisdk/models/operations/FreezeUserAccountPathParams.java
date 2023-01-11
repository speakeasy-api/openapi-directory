package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FreezeUserAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public Long userId;
    public FreezeUserAccountPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}