package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoUsersPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public DisplayvideoUsersPatchPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}