package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivateUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public ActivateUserPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}