package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnableUserV2PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public EnableUserV2PathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}