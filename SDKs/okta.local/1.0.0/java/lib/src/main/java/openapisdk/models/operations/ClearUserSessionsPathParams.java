package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClearUserSessionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public ClearUserSessionsPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}