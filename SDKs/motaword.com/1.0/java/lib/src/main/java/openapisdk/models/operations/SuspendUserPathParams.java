package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SuspendUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public Long userId;
    public SuspendUserPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}