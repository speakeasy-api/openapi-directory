package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResetFactorsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public ResetFactorsPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}