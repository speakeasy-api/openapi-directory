package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssignedAppLinksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public GetAssignedAppLinksPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}