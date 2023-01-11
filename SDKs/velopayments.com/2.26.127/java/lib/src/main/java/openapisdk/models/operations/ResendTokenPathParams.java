package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResendTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public ResendTokenPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}