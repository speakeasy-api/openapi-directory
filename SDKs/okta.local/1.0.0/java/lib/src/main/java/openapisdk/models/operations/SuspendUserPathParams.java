package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SuspendUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public SuspendUserPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}