package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetTempPasswordPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public SetTempPasswordPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}