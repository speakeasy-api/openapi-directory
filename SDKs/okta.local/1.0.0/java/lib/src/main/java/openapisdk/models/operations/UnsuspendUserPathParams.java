package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnsuspendUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UnsuspendUserPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}