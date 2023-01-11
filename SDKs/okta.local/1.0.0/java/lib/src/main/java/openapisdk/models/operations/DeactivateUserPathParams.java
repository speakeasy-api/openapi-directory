package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeactivateUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public DeactivateUserPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}